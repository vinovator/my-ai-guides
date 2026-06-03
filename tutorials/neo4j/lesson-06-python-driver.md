# Lesson 6: Python Integration with the Official Driver

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Lessons 2 through 5 (you can read, write, and load the banking graph)
**Split:** roughly half concept, half hands-on
**Purpose of this file:** a durable reference for operating the graph from Python the way an application does, with correct transactions, parameters, results, and error handling, ending in a reusable data-access layer for the banking graph.

---

## Objectives

By the end of this lesson you will be able to:
1. Explain the driver, session, and transaction model and how they relate.
2. Connect to Neo4j from Python and run queries the simple way.
3. Use managed transactions when you need more control.
4. Pass parameters correctly and never concatenate values into queries.
5. Consume results safely, including the rule about cursor scope.
6. Handle errors and rely on automatic retries.
7. Understand connection pooling and the basics of async.
8. Build a small, reusable banking data-access layer.

---

## Part 1: The mental model, driver, session, transaction

Three objects, in a strict hierarchy. Understanding their lifetimes prevents almost every mistake.

```
Driver        one per application, long-lived, holds a CONNECTION POOL
   |          create it once at startup, close it once at shutdown
   v
Session       short-lived and cheap, a logical sequence of work
   |          create one per unit of work, then discard it
   v
Transaction   the unit of atomic work: all of it commits, or none
   |
   v
Query (tx.run)  one Cypher statement, returns a Result cursor
```

- The **driver** is expensive to create because it manages a pool of TCP connections to the database. Create exactly one for the lifetime of your program, share it everywhere, and close it at the end.
- A **session** is cheap. It is a short-lived container for related work and it borrows a connection from the pool while it is open. Open one, do a unit of work, close it. Do not share a session across threads.
- A **transaction** is the atomic unit: every statement inside it commits together or rolls back together.

The intuition: the driver is the power station you build once, sessions are the appliances you switch on and off as needed, and transactions are the individual jobs each appliance performs.

---

## Part 2: Install and connect

```
pip install neo4j
```

```python
from neo4j import GraphDatabase

URI  = "bolt://localhost:7687"
AUTH = ("neo4j", "your-password")        # the password you set on first login

driver = GraphDatabase.driver(URI, auth=AUTH)
driver.verify_connectivity()             # raises immediately if it cannot connect
# ... use the driver ...
driver.close()
```

`verify_connectivity()` is worth calling at startup so a misconfiguration fails loudly and early. The cleanest pattern wraps the driver in a context manager so it always closes:

```python
with GraphDatabase.driver(URI, auth=AUTH) as driver:
    driver.verify_connectivity()
    # ... use the driver ...
```

The driver works with your Neo4j 5.26 server; install the latest `neo4j` package and it will connect over the Bolt protocol on port 7687.

---

## Part 3: The simple path, execute_query

For most queries, the top-level `driver.execute_query()` is the right tool. It wraps the query in a transaction, retries on transient failures, and returns everything at once. It was introduced in driver 5.8 and is the recommended starting point.

```python
records, summary, keys = driver.execute_query(
    """
    MATCH (:Account)-[:PERFORMED]->(t:Transaction)-[:TO]->(m:Merchant)
    RETURN m.name AS merchant, sum(t.amount) AS total
    ORDER BY total DESC
    LIMIT $limit
    """,
    limit=5,                 # parameters are passed as keyword arguments
    database_="neo4j",       # name the database explicitly; note the trailing underscore
)

for record in records:
    print(record["merchant"], record["total"])
```

The call returns three things: `records`, a list of result rows; `summary`, metadata about the query including counters and timing; and `keys`, the returned column names. Parameters are passed as ordinary keyword arguments. Configuration arguments such as `database_` end in an underscore so they cannot collide with a parameter name.

This is eager: it loads all rows into memory. That is exactly what you want for bounded result sets, and most queries return bounded sets.

---

## Part 4: Managed transactions, when you need control

`execute_query` runs one query per transaction. When you need several statements in one atomic transaction, or you want to interleave Python logic, use a session with a managed transaction. Managed transactions take a callback, called a transaction function, and the driver automatically re-runs that callback with exponential backoff if the database reports a transient error.

```python
def transfer_funds(tx, from_id, to_id, amount):
    # Multiple statements, one atomic transaction.
    tx.run("MATCH (a:Account {id:$id}) SET a.balance = a.balance - $amt",
           id=from_id, amt=amount)
    tx.run("MATCH (a:Account {id:$id}) SET a.balance = a.balance + $amt",
           id=to_id, amt=amount)

with driver.session(database="neo4j") as session:
    session.execute_write(transfer_funds, "A1", "A2", 100.0)
```

- `session.execute_write(fn, *args)` runs a write transaction.
- `session.execute_read(fn, *args)` runs a read transaction.
- The driver passes the extra arguments through to your function after `tx`.

A note on naming: `execute_read` and `execute_write` are the current methods. The older `read_transaction` and `write_transaction` names are deprecated, so prefer the new ones.

### The cursor-scope rule

This is the one rule people trip over. A `Result` is a live cursor tied to its transaction. When the transaction function returns and the transaction closes, the cursor dies. Therefore you must materialize the data you need inside the function, and return plain Python objects, never the `Result` itself.

```python
def get_customer_360(tx, cid):
    result = tx.run(
        """
        MATCH (c:Customer {id:$cid})
        OPTIONAL MATCH (c)-[:OWNS]->(a:Account)
        OPTIONAL MATCH (a)-[:PERFORMED]->(t:Transaction)
        RETURN c.name AS name,
               collect(DISTINCT a.id) AS accounts,
               count(t) AS transactionCount
        """,
        cid=cid,
    )
    return result.single().data()    # materialize HERE, inside the transaction

with driver.session(database="neo4j") as session:
    profile = session.execute_read(get_customer_360, "C1")
print(profile)   # a plain dict, safe to use outside the session
```

Returning `result` instead of `result.single().data()` would hand back a dead cursor and fail. Always convert to lists or dicts inside the function.

---

## Part 5: Parameters and safety

Always pass values as parameters. Never build a query by string concatenation. This protects against Cypher injection and lets the database reuse a cached plan, exactly as covered in Lesson 3.

```python
# CORRECT: value travels as a parameter
driver.execute_query("MATCH (c:Customer {id:$cid}) RETURN c.name AS name", cid=user_input)

# WRONG: never do this
driver.execute_query(f"MATCH (c:Customer {{id:'{user_input}'}}) RETURN c.name")
```

Remember the one limitation from Lesson 3: parameters can stand in for values but not for labels, relationship types, or property keys, because those are part of the query structure.

---

## Part 6: Consuming results

Within a transaction function you have several ways to read a `Result`.

```python
def read_examples(tx):
    # Iterate row by row
    for record in tx.run("MATCH (c:Customer) RETURN c.id AS id LIMIT 3"):
        print(record["id"])

    # Exactly one row, or error if not exactly one
    one = tx.run("MATCH (c:Customer {id:'C1'}) RETURN c.name AS name").single()
    print(one["name"])

    # All rows as a list of dicts
    rows = tx.run("MATCH (m:Merchant) RETURN m.name AS name").data()
    return rows
```

Access a field with `record["key"]`, get one row with `.single()`, and get every row as a list of dicts with `.data()`. If you work with pandas, a `Result` also offers `.to_df()`, which returns a DataFrame; pandas must be installed.

```python
def merchants_df(tx):
    return tx.run("MATCH (m:Merchant) RETURN m.name AS name").to_df()
```

`execute_query` is eager and gives you `records` directly. Inside a transaction function you can choose to iterate lazily for very large results, which keeps memory flat by streaming rows from the server.

---

## Part 7: Error handling and retries

Errors fall into two groups. Transient errors, such as a brief loss of connectivity or a deadlock, are temporary and worth retrying. Permanent errors, such as a Cypher syntax mistake or a constraint violation, will fail every time and should surface.

The good news: managed transactions, and `execute_query`, retry transient errors automatically with exponential backoff. You generally do not write retry loops yourself. You do catch the specific exceptions you care about.

```python
from neo4j.exceptions import Neo4jError, ConstraintError, ServiceUnavailable

try:
    driver.execute_query(
        "CREATE (c:Customer {id:$id})",   # fails if a uniqueness constraint exists
        id="C1",
    )
except ConstraintError:
    print("That customer id already exists.")
except ServiceUnavailable:
    print("The database is not reachable.")
except Neo4jError as e:
    print("Query failed:", e.code)
```

One caveat: implicit transactions run with `session.run()` are not auto-retried, which is one reason to prefer `execute_query` and managed transactions for anything that matters.

---

## Part 8: Connection pooling, lifecycle, and async

Connection pooling is automatic. The driver keeps a pool of connections and hands them to sessions on demand, which is precisely why you create one driver and reuse it rather than creating a driver per query. Creating a driver per request is a common and costly antipattern.

If you need read-your-own-writes across separate pieces of work, run them through the same session, which keeps them causally consistent. The `execute_query` calls share a default bookmark manager that already handles this for queries issued through it.

For asynchronous applications the driver mirrors the synchronous API.

```python
import asyncio
from neo4j import AsyncGraphDatabase

async def main():
    driver = AsyncGraphDatabase.driver(URI, auth=AUTH)
    records, summary, keys = await driver.execute_query(
        "MATCH (c:Customer) RETURN count(c) AS n"
    )
    print("customers:", records[0]["n"])
    await driver.close()

asyncio.run(main())
```

Async sessions use `async with driver.session() as session:` and `await session.execute_read(...)`. Use async only when your application is already asynchronous, for example a FastAPI service; for scripts and notebooks the synchronous driver is simpler.

---

## Part 9: Build a reusable data-access layer

Wrap the banking queries in a small repository class. This is the deliverable, and it is the seed of the data layer an agent will later call.

```python
from neo4j import GraphDatabase

class BankingRepository:
    def __init__(self, uri, user, password, database="neo4j"):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))
        self.database = database
        self.driver.verify_connectivity()

    def close(self):
        self.driver.close()

    def __enter__(self):
        return self

    def __exit__(self, *exc):
        self.close()

    # --- reads, using the simple path ---
    def top_merchants(self, limit=5):
        records, _, _ = self.driver.execute_query(
            """
            MATCH (:Account)-[:PERFORMED]->(t:Transaction)-[:TO]->(m:Merchant)
            RETURN m.name AS merchant, sum(t.amount) AS total, count(t) AS payments
            ORDER BY total DESC LIMIT $limit
            """,
            limit=limit, database_=self.database,
        )
        return [r.data() for r in records]

    def shared_counterparties(self):
        records, _, _ = self.driver.execute_query(
            """
            MATCH (a:Account)-[:PERFORMED]->(:Transaction)-[:TO]->(m:Merchant)
                  <-[:TO]-(:Transaction)<-[:PERFORMED]-(b:Account)
            WHERE a.id < b.id
            RETURN a.id AS accountA, b.id AS accountB, count(DISTINCT m) AS sharedMerchants
            ORDER BY sharedMerchants DESC LIMIT 20
            """,
            database_=self.database,
        )
        return [r.data() for r in records]

    # --- read, using a managed transaction for a richer result ---
    def customer_360(self, customer_id):
        def work(tx, cid):
            result = tx.run(
                """
                MATCH (c:Customer {id:$cid})
                OPTIONAL MATCH (c)-[:OWNS]->(a:Account)
                OPTIONAL MATCH (a)-[:PERFORMED]->(t:Transaction)-[:TO]->(target)
                RETURN c.name AS name,
                       collect(DISTINCT a.id) AS accounts,
                       count(t) AS transactionCount,
                       coalesce(sum(t.amount), 0) AS totalOut
                """,
                cid=cid,
            )
            return result.single().data()
        with self.driver.session(database=self.database) as session:
            return session.execute_read(work, customer_id)

    # --- write, idempotent upsert ---
    def upsert_customer(self, customer_id, name, risk):
        def work(tx, cid, name, risk):
            tx.run(
                """
                MERGE (c:Customer {id:$cid})
                  ON CREATE SET c.name=$name, c.risk=$risk, c.createdAt=datetime()
                  ON MATCH  SET c.lastSeenAt=datetime()
                """,
                cid=cid, name=name, risk=risk,
            )
        with self.driver.session(database=self.database) as session:
            session.execute_write(work, customer_id, name, risk)


if __name__ == "__main__":
    with BankingRepository("bolt://localhost:7687", "neo4j", "your-password") as repo:
        print("Top merchants:", repo.top_merchants(3))
        print("Customer 360 for C1:", repo.customer_360("C1"))
        repo.upsert_customer("C9999", "Test Person", "low")
```

This class shows the whole toolkit working together: one driver shared across methods, `execute_query` for simple reads, managed transactions for richer reads and for writes, parameters everywhere, and results materialized into plain Python objects.

---

## Banking application

The repository is the reusable data layer the rest of the course builds on. In Lesson 11 an agent will call methods like `customer_360` and `shared_counterparties` as pre-validated tools, rather than generating open-ended Cypher, which is exactly the controlled-tool pattern an enterprise context layer needs.

---

## Your turn

1. Install the driver and connect, calling `verify_connectivity()`.
2. Run a `top_merchants` query with `execute_query` and print the rows.
3. Write a `customer_360` method as a managed read transaction, materializing the result inside the function.
4. Write an idempotent `upsert_customer` as a managed write transaction, run it twice for the same id, and confirm with a count that no duplicate appears.
5. Deliberately trigger and catch a `ConstraintError` by creating a customer with an id that already exists.

Report your code, the printed results, and the error you caught. A worked solution is the `BankingRepository` class in Part 9.

---

## Success criteria

You have met the goal of this lesson when you can:
- Explain the driver, session, and transaction lifetimes and why you create one driver.
- Choose between `execute_query` and a managed transaction.
- State and obey the cursor-scope rule.
- Parameterize every query and explain why.
- Catch a specific Neo4j error and rely on automatic retries for transient ones.

---

## New constructs introduced

- `GraphDatabase.driver`, `verify_connectivity`, `driver.close`, context-manager usage.
- `driver.execute_query` and its `EagerResult` of `records, summary, keys`; the `database_` argument.
- `driver.session`, `session.execute_read`, `session.execute_write`, transaction functions.
- Result consumption: iteration, `record["key"]`, `.single()`, `.data()`, `.to_df()`.
- Exceptions: `Neo4jError`, `ConstraintError`, `ServiceUnavailable`.
- `AsyncGraphDatabase` and the async query forms.

---

## Appendix: Python driver gotchas

- Create one driver for the whole application and reuse it. A driver per request is slow and wastes connections.
- Do not return a `Result` out of a transaction function; the cursor closes. Materialize with `.data()`, `.single()`, or a list inside the function.
- Do not share a session across threads.
- Use `execute_read` and `execute_write`, not the deprecated `read_transaction` and `write_transaction`.
- Parameterize everything; never f-string a value into a query.
- `session.run()` implicit transactions are not auto-retried; prefer `execute_query` and managed transactions.
- Name the database with `database_` in `execute_query`, or `database=` in `driver.session`.
