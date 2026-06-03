# Lesson 5: Loading Real Data

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Lessons 3 and 4 (writing and integrity, data modeling)
**Split:** roughly half concept, half hands-on
**Purpose of this file:** a durable reference for getting realistic volumes of data into the graph cleanly, and for building the working banking dataset that Lessons 6 through 11 operate on.

---

## Objectives

By the end of this lesson you will be able to:
1. Choose the right loading tool for a given job.
2. Load CSV data with correct types and clean handling of missing values.
3. Batch large loads so they do not exhaust memory.
4. Use neo4j-admin for a fast initial bulk import, and APOC for loading and transformation.
5. Validate a load and confirm the model is correct.
6. Build the synthetic banking dataset the rest of the course uses, with structure planted for the algorithms in Lesson 7.

---

## Part 1: The loading landscape

There are four ways to get data into Neo4j, and they suit different situations.

| Tool | Best for | Online or offline | Notes |
| --- | --- | --- | --- |
| `LOAD CSV` | Small to medium loads, ongoing imports, transforms | Online | Cypher-native, flexible, the everyday workhorse |
| `neo4j-admin database import` | The very first bulk load of a large dataset | Offline, empty database only | By far the fastest, but the database must be stopped and empty |
| APOC procedures | Loading JSON or other sources, and batched transforms | Online | `apoc.load.json`, `apoc.periodic.iterate`, and more |
| The driver (Lesson 6) | Application-driven ingestion from code | Online | You control batching and retries in Python |

The rule of thumb: use `neo4j-admin database import` once, to seed a large empty database fast; use `LOAD CSV` for everything incremental; reach for APOC when the source is JSON or when you need a robust batched transform; and use the driver when ingestion is part of an application.

---

## Part 2: Always create the schema first

This is the most important performance lesson in loading, and it follows directly from Lesson 3. Before you load anything with `MERGE`, create the uniqueness constraints, because a constraint creates a backing index and a `MERGE` on an indexed property is a direct lookup. Without the index, every `MERGE` scans all nodes of that label, and a load that should take seconds takes hours.

```cypher
CREATE CONSTRAINT customer_id IF NOT EXISTS FOR (c:Customer)    REQUIRE c.id   IS UNIQUE;
CREATE CONSTRAINT account_id  IF NOT EXISTS FOR (a:Account)     REQUIRE a.id   IS UNIQUE;
CREATE CONSTRAINT merchant_nm IF NOT EXISTS FOR (m:Merchant)    REQUIRE m.name IS UNIQUE;
CREATE CONSTRAINT txn_id      IF NOT EXISTS FOR (t:Transaction) REQUIRE t.id   IS UNIQUE;
```

```
Loading order that works:
  1. Create constraints and indexes        (fast MERGE later)
  2. Load and MERGE nodes by key
  3. Load and MERGE or CREATE relationships
  4. Validate
```

---

## Part 3: LOAD CSV fundamentals

### Where the file goes

`LOAD CSV` reads from a URL. The simplest and safest location is the `import/` directory inside your Neo4j installation. A file placed there is referenced as `file:///name.csv`. The three slashes matter: `file://` plus the path `/name.csv` rooted at the import directory.

```cypher
LOAD CSV WITH HEADERS FROM 'file:///customers.csv' AS row
RETURN row LIMIT 5;
```

`WITH HEADERS` makes each row a map keyed by the column names, so you write `row.id` and `row.name`. Without it, each row is a list accessed by position.

### Everything arrives as a string

This is the single most common source of bugs. CSV has no types, so every field loads as a string. You must cast explicitly.

```cypher
LOAD CSV WITH HEADERS FROM 'file:///customers.csv' AS row
MERGE (c:Customer {id: row.id})
  ON CREATE SET c.name    = row.name,
                c.risk    = row.risk,
                c.balance = toFloat(row.balance),       // string to number
                c.openedAt = date(row.opened_at);        // string to date
```

The casting functions you will use constantly are `toInteger()`, `toFloat()`, `toBoolean()`, `date()`, and `datetime()`. Use `coalesce()` to supply a default, and treat empty strings as null where needed.

```cypher
// Handle a possibly-empty field
ON CREATE SET c.segment = coalesce(row.segment, 'unknown')
```

To skip rows with a missing key, filter before writing:

```cypher
LOAD CSV WITH HEADERS FROM 'file:///customers.csv' AS row
WITH row WHERE row.id IS NOT NULL AND trim(row.id) <> ''
MERGE (c:Customer {id: row.id});
```

If your file uses a separator other than a comma, set it: `LOAD CSV WITH HEADERS FROM '...' AS row FIELDTERMINATOR ';'`.

---

## Part 4: Batching with CALL IN TRANSACTIONS

By default `LOAD CSV` runs as one transaction. For a large file that means the whole load is held in memory until it commits, which exhausts the heap. The fix is to commit in batches.

On Neo4j 5.26 the modern syntax is `CALL { ... } IN TRANSACTIONS`. The older `USING PERIODIC COMMIT` keyword is deprecated and should not be used in new code.

```cypher
LOAD CSV WITH HEADERS FROM 'file:///transactions.csv' AS row
CALL {
  WITH row
  MATCH (a:Account {id: row.from_account})
  MATCH (target {id: row.to_id})
  CREATE (a)-[:PERFORMED]->(t:Transaction {
    id: row.id,
    amount: toFloat(row.amount),
    date: date(row.date),
    channel: row.channel,
    status: row.status
  })-[:TO]->(target)
} IN TRANSACTIONS OF 1000 ROWS;
```

Read it as: for each row, run the inner block, and commit every 1000 rows. The `WITH row` at the top of the subquery is required, because it passes each row into the transaction. A good batch size is 500 to 10000 rows; larger batches are faster but use more memory, so tune to your heap.

You can also control what happens when a batch fails, for example `IN TRANSACTIONS OF 1000 ROWS ON ERROR CONTINUE`, which skips failing batches rather than aborting the whole load.

---

## Part 5: A practical pipeline, the banking dataset

You have two good options on a laptop: generate the data directly in the database with Cypher, which needs no files, or generate CSV files and load them, which is the real-world skill. Both are shown.

### Option A: generate in the database with UNWIND

`UNWIND` turns a list into rows, and `range()` fabricates a sequence, so you can synthesize data without any file. This is the fastest way to get a usable dataset for the next lessons.

```cypher
// 1000 customers, each with one account
UNWIND range(1, 1000) AS i
MERGE (c:Customer {id: 'C' + toString(i)})
  ON CREATE SET c.name = 'Customer ' + toString(i),
                c.risk = CASE WHEN rand() < 0.1 THEN 'high'
                              WHEN rand() < 0.4 THEN 'medium'
                              ELSE 'low' END
MERGE (a:Account {id: 'A' + toString(i)})
  ON CREATE SET a.balance = round(rand() * 20000)
MERGE (c)-[:OWNS]->(a);
```

```cypher
// 20 merchants
UNWIND range(1, 20) AS i
MERGE (m:Merchant {name: 'Merchant ' + toString(i)});
```

```cypher
// 5000 random payments from accounts to merchants
UNWIND range(1, 5000) AS i
MATCH (a:Account {id: 'A' + toString(toInteger(rand() * 1000) + 1)})
MATCH (m:Merchant {name: 'Merchant ' + toString(toInteger(rand() * 20) + 1)})
CREATE (a)-[:PERFORMED]->(t:Transaction {
  id: 'T' + toString(i),
  amount: round(rand() * 5000) + 1,
  date: date('2026-01-01') + duration({days: toInteger(rand() * 150)}),
  channel: 'card',
  status: 'settled'
})-[:TO]->(m);
```

To make Lesson 7 interesting, plant structure the algorithms can find: a few transfer chains, which look like money-laundering layering, and one hub account that many others pay, which looks like a mule.

```cypher
// A layering chain: A1 -> A2 -> A3 -> A4 -> A5
UNWIND range(1, 4) AS i
MATCH (a:Account {id: 'A' + toString(i)})
MATCH (b:Account {id: 'A' + toString(i + 1)})
CREATE (a)-[:PERFORMED]->(t:Transaction {
  id: 'CHAIN' + toString(i), amount: 9000 - i * 500,
  date: date('2026-02-0' + toString(i)), channel: 'transfer', status: 'settled'
})-[:TO]->(b);
```

```cypher
// A mule hub: accounts A10 through A60 all transfer into A7
UNWIND range(10, 60) AS i
MATCH (a:Account {id: 'A' + toString(i)})
MATCH (hub:Account {id: 'A7'})
CREATE (a)-[:PERFORMED]->(t:Transaction {
  id: 'MULE' + toString(i), amount: round(rand() * 3000) + 100,
  date: date('2026-03-01'), channel: 'transfer', status: 'settled'
})-[:TO]->(hub);
```

### Option B: load from CSV files

In real work the data arrives as files. Generate them once with a small Python script using only the standard library, place them in the `import/` directory, then load with `LOAD CSV`.

```python
# generate_banking_csv.py  -- writes CSVs into your Neo4j import/ directory
import csv, random
random.seed(42)
OUT = "/path/to/neo4j/import"   # adjust to your install

with open(f"{OUT}/customers.csv", "w", newline="") as f:
    w = csv.writer(f); w.writerow(["id", "name", "risk", "opened_at"])
    for i in range(1, 1001):
        risk = random.choices(["low", "medium", "high"], [0.6, 0.3, 0.1])[0]
        w.writerow([f"C{i}", f"Customer {i}", risk, "2026-01-01"])

with open(f"{OUT}/accounts.csv", "w", newline="") as f:
    w = csv.writer(f); w.writerow(["id", "owner_id", "balance"])
    for i in range(1, 1001):
        w.writerow([f"A{i}", f"C{i}", round(random.random() * 20000, 2)])

with open(f"{OUT}/transactions.csv", "w", newline="") as f:
    w = csv.writer(f); w.writerow(["id", "from_account", "to_id", "amount", "date", "channel"])
    for i in range(1, 5001):
        frm = f"A{random.randint(1, 1000)}"
        to = f"M{random.randint(1, 20)}"
        w.writerow([f"T{i}", frm, to, round(random.random() * 5000, 2), "2026-03-15", "card"])
```

Then load, schema first:

```cypher
LOAD CSV WITH HEADERS FROM 'file:///customers.csv' AS row
MERGE (c:Customer {id: row.id})
  ON CREATE SET c.name = row.name, c.risk = row.risk, c.openedAt = date(row.opened_at);

LOAD CSV WITH HEADERS FROM 'file:///accounts.csv' AS row
MERGE (a:Account {id: row.id})
  ON CREATE SET a.balance = toFloat(row.balance)
WITH row
MATCH (c:Customer {id: row.owner_id}), (a:Account {id: row.id})
MERGE (c)-[:OWNS]->(a);

LOAD CSV WITH HEADERS FROM 'file:///transactions.csv' AS row
CALL {
  WITH row
  MATCH (a:Account {id: row.from_account})
  MERGE (m:Merchant {name: row.to_id})
  CREATE (a)-[:PERFORMED]->(:Transaction {
    id: row.id, amount: toFloat(row.amount), date: date(row.date), channel: row.channel
  })-[:TO]->(m)
} IN TRANSACTIONS OF 1000 ROWS;
```

---

## Part 6: neo4j-admin import for the first bulk load

When the initial dataset is large, the fastest path is the offline importer. The database must be stopped and the target database empty. The 5.x command is:

```
./bin/neo4j stop
./bin/neo4j-admin database import full neo4j \
  --nodes=Customer=import/customers_header.csv,import/customers.csv \
  --nodes=Account=import/accounts_header.csv,import/accounts.csv \
  --relationships=OWNS=import/owns.csv \
  --overwrite-destination
./bin/neo4j start
```

The importer expects a specific CSV header format with typed columns and special id-space headers, for example `id:ID`, `:LABEL`, `:START_ID`, `:END_ID`, and `amount:double`. It bypasses transactions and writes store files directly, which is why it is fast and why it only works on an empty database. Use it once to seed; use `LOAD CSV` for everything after.

---

## Part 7: APOC for loading and transformation

APOC adds loaders and a robust batching procedure.

Load JSON, for example from an API export:

```cypher
CALL apoc.load.json('file:///merchants.json') YIELD value
MERGE (m:Merchant {name: value.name})
  ON CREATE SET m.category = value.category;
```

Batch a transform over the whole graph with `apoc.periodic.iterate`, which runs an outer query to produce items and an inner query to process them in committed batches. This is the APOC equivalent of `CALL IN TRANSACTIONS`, and it is excellent for large updates.

```cypher
CALL apoc.periodic.iterate(
  "MATCH (t:Transaction) WHERE t.amount IS NOT NULL RETURN t",
  "SET t.large = t.amount > 1000",
  {batchSize: 1000, parallel: false}
) YIELD batches, total
RETURN batches, total;
```

---

## Part 8: Validate the load

Never trust a load without checking it. Count by label and relationship type, inspect the schema, and sample.

```cypher
// Node counts by label
MATCH (n) RETURN labels(n)[0] AS label, count(*) AS count ORDER BY count DESC;
```

```cypher
// Relationship counts by type
MATCH ()-[r]->() RETURN type(r) AS type, count(*) AS count ORDER BY count DESC;
```

```cypher
// Confirm the model: a customer, their account, and a transaction
MATCH (c:Customer)-[:OWNS]->(a:Account)-[:PERFORMED]->(t:Transaction)-[:TO]->(target)
RETURN c.id, a.id, t.amount, labels(target)[0] AS targetType LIMIT 5;
```

Use `CALL db.schema.visualization()` to see the model the data actually formed, and `PROFILE` in front of a query to confirm it uses your indexes rather than scanning.

---

## Banking application

The dataset you have built is the working dataset for the rest of the course. It has roughly 1000 customers and accounts, 20 merchants, several thousand transactions, a planted layering chain, and a mule hub. Lesson 6 reads and writes it from Python, Lesson 7 runs algorithms that should rediscover the planted chain and hub, and Lessons 8 through 11 add semantics, retrieval, and an agent on top of it.

---

## Your turn

1. Create the four uniqueness constraints from Part 2.
2. Build the dataset using Option A, the in-database UNWIND generator, including the layering chain and the mule hub.
3. Validate: report the node counts by label and the relationship counts by type.
4. Run the model-confirmation query and confirm a transaction connects an account to a merchant.
5. Optional: regenerate one of the loads after adding more rows and confirm, using counts, that `MERGE` did not duplicate the customers and accounts.

A worked solution is at the bottom of this file.

---

## Success criteria

You have met the goal of this lesson when you can:
- Pick the right loading tool for a scenario.
- Load CSV with correct casting and null handling.
- Batch a large load with `CALL IN TRANSACTIONS`.
- Explain why constraints must exist before a `MERGE`-based load.
- Validate a load with counts, a model query, and `PROFILE`.

---

## New constructs introduced

- `LOAD CSV WITH HEADERS FROM ... AS row`, `FIELDTERMINATOR`.
- Casting: `toInteger`, `toFloat`, `toBoolean`, `date`, `datetime`, `coalesce`, `trim`.
- `CALL { WITH row ... } IN TRANSACTIONS OF n ROWS`, `ON ERROR CONTINUE`.
- `UNWIND`, `range`, `rand`, `round`, `duration`, `CASE`.
- `neo4j-admin database import full`.
- `apoc.load.json`, `apoc.periodic.iterate`.
- `db.schema.visualization`, `PROFILE`.

---

## Appendix: loading gotchas

- Forgetting constraints before a `MERGE` load is the number one cause of loads that never finish. Create them first.
- Every CSV field is a string. Cast everything, and treat empty strings as null where needed.
- File location: place files in `import/` and reference them as `file:///name.csv`.
- One giant transaction will exhaust the heap. Batch with `CALL IN TRANSACTIONS`.
- `neo4j-admin database import` only works offline on an empty database. It is a seeding tool, not an incremental one.
- Always validate with counts and a model query before moving on.

---

## Solution to the your-turn task

Run the four constraint statements from Part 2, then the four generator blocks from Part 5 Option A (customers and accounts, merchants, random payments, the layering chain, and the mule hub). Validate with:

```cypher
MATCH (n) RETURN labels(n)[0] AS label, count(*) AS count ORDER BY count DESC;
MATCH ()-[r]->() RETURN type(r) AS type, count(*) AS count ORDER BY count DESC;
MATCH (c:Customer)-[:OWNS]->(a:Account)-[:PERFORMED]->(t:Transaction)-[:TO]->(m:Merchant)
RETURN c.id, a.id, t.amount, m.name LIMIT 5;
```

Expect roughly 1000 Customer, 1000 Account, 20 Merchant, and several thousand Transaction nodes, with OWNS, PERFORMED, and TO relationships. Re-running the customer and account generator leaves the counts unchanged, because those use `MERGE` on the key, while re-running a payment generator adds transactions, because those use `CREATE` for genuinely new events.
