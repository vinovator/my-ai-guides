# Lesson 3: Cypher Fluency II, Writing and Integrity

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Lesson 2 (reading graphs), with the seeded banking dataset
**Split:** roughly half concept, half hands-on
**Purpose of this file:** a durable reference for changing data correctly, making ingestion safe to re-run, and protecting the model with constraints, indexes, and parameters.

---

## Objectives

By the end of this lesson you will be able to:
1. Create and update data correctly.
2. Explain the difference between CREATE and MERGE and write ingestion that is idempotent, meaning safe to run many times.
3. Modify nodes, relationships, properties, and labels with SET and REMOVE.
4. Delete data safely with DELETE and DETACH DELETE.
5. Protect the model with uniqueness constraints and speed it up with indexes, and know which of these your Community edition supports.
6. Use query parameters, and explain why they matter for both performance and safety.

---

## Part 1: The mental model for writing

Reading finds patterns. Writing changes the graph. There are only a handful of write clauses, and the whole lesson is about using them precisely:

- `CREATE` always adds new data.
- `MERGE` finds existing data or creates it if it is missing. This is get-or-create, also called upsert.
- `SET` and `REMOVE` change properties and labels on data you have already matched.
- `DELETE` and `DETACH DELETE` remove data.

The one sentence to hold onto: CREATE means add, MERGE means find-or-create. Almost every beginner mistake in Neo4j comes from reaching for CREATE when MERGE was needed, or from using MERGE in a way that quietly creates duplicates.

---

## Part 2: CREATE versus MERGE, the most common trap

### CREATE always adds

```cypher
CREATE (c:Customer {id: 'C1', name: 'Asha'});
```

Run that twice and you now have two Customer nodes with id C1. CREATE does not look at what already exists. It is the right choice only when you know the data is new.

```
Run CREATE once:        Run CREATE again:
  (C1 Asha)               (C1 Asha)
                          (C1 Asha)   <-- duplicate
```

### MERGE finds or creates

MERGE takes a pattern. If the entire pattern already exists, MERGE binds to it and changes nothing. If any part is missing, MERGE creates the whole pattern.

```cypher
MERGE (c:Customer {id: 'C1'});
```

Run that any number of times and you still have exactly one Customer with id C1. This is what makes ingestion idempotent.

### Trap one: MERGE matches on everything in the pattern

MERGE matches on every property you write inside the pattern. This is the single most common mistake.

```cypher
// Risky: matches only if BOTH id and risk already match.
MERGE (c:Customer {id: 'C1', risk: 'low'});
```

If a Customer C1 exists with risk `high`, the pattern above does not match it, so MERGE creates a second C1 node with risk `low`. You now have a duplicate, created by the very command meant to prevent duplicates.

The fix is a discipline: MERGE on the key only, then set the rest with ON CREATE and ON MATCH.

```cypher
MERGE (c:Customer {id: 'C1'})
  ON CREATE SET c.name = 'Asha', c.risk = 'low', c.createdAt = datetime()
  ON MATCH  SET c.lastSeenAt = datetime();
```

- `ON CREATE SET` runs only when the node is newly created.
- `ON MATCH SET` runs only when an existing node is found.

| Situation | What runs |
| --- | --- |
| Node did not exist | The node is created, then ON CREATE SET runs |
| Node already existed | The node is bound, then ON MATCH SET runs |

### Trap two: never MERGE a whole path at once

If you MERGE a path that includes a relationship and unbound nodes, MERGE tries to match the entire path. If the whole path does not already exist, MERGE creates the entire path, including brand new nodes, even if the end nodes already existed separately.

```cypher
// Risky: if this exact path is absent, MERGE may create new Customer and Account nodes.
MERGE (c:Customer {id: 'C1'})-[:OWNS]->(a:Account {id: 'a_c1'});
```

The safe pattern is to MERGE each node by its key first, so each is bound to the existing node, and only then MERGE the relationship between the two bound nodes.

```cypher
MERGE (c:Customer {id: 'C1'})
MERGE (a:Account  {id: 'a_c1'})
MERGE (c)-[:OWNS]->(a);
```

```
Step 1: MERGE (c:Customer {id})   -> finds or creates the customer
Step 2: MERGE (a:Account {id})    -> finds or creates the account
Step 3: MERGE (c)-[:OWNS]->(a)    -> finds or creates only the relationship
```

This three-step shape is the backbone of all safe ingestion in Neo4j. Commit it to memory.

---

## Part 3: Updating with SET and REMOVE

### SET a single property

```cypher
MATCH (c:Customer {id: 'C1'})
SET c.risk = 'high';
```

### SET several properties: the difference between += and =

```cypher
// += merges the map into existing properties, leaving others untouched.
MATCH (c:Customer {id: 'C1'})
SET c += {risk: 'high', segment: 'retail'};
```

```cypher
// = REPLACES all properties with the map. Anything not listed is removed. Use with care.
MATCH (c:Customer {id: 'C1'})
SET c = {id: 'C1', name: 'Asha'};   // risk and segment would be wiped
```

The `+=` form is what you almost always want. The plain `=` form is a full replacement and is a common cause of accidental data loss.

### SET and REMOVE a label

```cypher
MATCH (c:Customer {id: 'C1'})
SET c:VIP;            // add the VIP label
```

```cypher
MATCH (c:Customer {id: 'C1'})
REMOVE c:VIP;         // remove the VIP label
```

### REMOVE a property, or set it to null

```cypher
MATCH (c:Customer {id: 'C1'})
REMOVE c.segment;     // delete the property
```

Setting a property to null is equivalent to removing it: `SET c.segment = null`.

| Goal | Clause |
| --- | --- |
| Change or add one property | `SET n.prop = value` |
| Merge several properties, keep the rest | `SET n += {a: 1, b: 2}` |
| Replace all properties | `SET n = {a: 1, b: 2}` |
| Add a label | `SET n:Label` |
| Remove a property | `REMOVE n.prop` or `SET n.prop = null` |
| Remove a label | `REMOVE n:Label` |

---

## Part 4: Deleting safely

### DELETE versus DETACH DELETE

`DELETE` removes a node or a relationship. A node that still has relationships cannot be deleted with plain DELETE; the database refuses, because deleting it would leave dangling relationships.

```cypher
// Fails if the account has any relationships.
MATCH (a:Account {id: 'a_c1'})
DELETE a;
```

`DETACH DELETE` removes the node together with all of its relationships in one step.

```cypher
MATCH (a:Account {id: 'a_c1'})
DETACH DELETE a;
```

```
DELETE a node with relationships:        DETACH DELETE the same node:
  (C1)--OWNS-->(a_c1)                       (C1)
        X  error: still has rels            a_c1 and its OWNS relationship are both gone
```

### Delete only a relationship

```cypher
MATCH (:Customer {id: 'C1'})-[r:OWNS]->(:Account {id: 'a_c1'})
DELETE r;
```

### The full reset

```cypher
MATCH (n) DETACH DELETE n;
```

This empties the database. There is no undo. On a laptop this is fine for experiments. In production you rely on transactions and backups, which are covered in Lesson 12. Treat any DETACH DELETE without a tight MATCH as a deliberate, labelled action.

---

## Part 5: Constraints and indexes

As data grows and as you ingest repeatedly, two needs appear: guarantee that keys are unique, and make lookups fast. Constraints handle the first, indexes the second, and in Neo4j they are closely linked.

### Uniqueness constraints (available in Community)

```cypher
CREATE CONSTRAINT customer_id IF NOT EXISTS
FOR (c:Customer) REQUIRE c.id IS UNIQUE;
```

This guarantees that no two Customer nodes share an id. Composite uniqueness across several properties is also supported:

```cypher
CREATE CONSTRAINT account_owner_iban IF NOT EXISTS
FOR (a:Account) REQUIRE (a.iban, a.branch) IS UNIQUE;
```

A crucial point: creating a uniqueness constraint automatically creates a backing index on that property. This means a MERGE or a lookup on that property becomes fast, and you should not, and in fact cannot, create a separate index on the same property.

### Indexes (available in Community)

For properties you filter or match on frequently but that are not unique, create an index directly.

```cypher
CREATE INDEX customer_name IF NOT EXISTS
FOR (c:Customer) ON (c.name);
```

Neo4j offers several index types. The default, shown above, is a range index, which serves equality and range queries. There are also text indexes for string-contains queries, point indexes for spatial data, full-text indexes for natural-language search, token-lookup indexes maintained by the system, and vector indexes for embeddings, which Lesson 8 uses for the GraphRAG work.

### Why indexes matter for MERGE

This is the practical payoff. A MERGE on a property with a uniqueness constraint or index performs a direct lookup. A MERGE on a property with no index forces Neo4j to scan every node of that label to check for a match, which is slow and gets slower as the graph grows. The rule is simple: create the constraint or index before you ingest at volume, then MERGE on that property.

### Inspecting and dropping

```cypher
SHOW CONSTRAINTS;
SHOW INDEXES;
DROP CONSTRAINT customer_id;
DROP INDEX customer_name;
```

### The Community and Enterprise boundary

This matters for your 5.26 Community install, so it is stated plainly.

| Capability | Edition |
| --- | --- |
| Property uniqueness constraint | Community and Enterprise |
| Indexes (range, text, point, full-text, lookup, vector) | Community and Enterprise |
| Property existence constraint (a property must be present) | Enterprise only |
| Node key constraint (a set of properties unique and present) | Enterprise only |
| Property type constraint (a property must be a given type) | Enterprise only |

In Community you cannot force a property to exist or to be of a given type at the database level. The practical workaround is to enforce these at the ingestion layer, and to use the MERGE-by-key with ON CREATE SET pattern from Part 2 so that required properties are always set at the moment a node is created. This laptop-to-enterprise gap is exactly the kind of control that Lesson 12 revisits for production.

---

## Part 6: Parameters

A parameter is a named placeholder, written `$name`, whose value is supplied separately from the query text.

### Why parameters matter

1. Performance. Neo4j caches a query plan keyed by the text of the query. A parameterized query is a single cached plan reused for every value. A query built by pasting values into the string is a new, unique string every time, so the planner rebuilds a plan on each run and the cache thrashes.
2. Safety. Parameters keep code and data separate. Concatenating user input into a query string invites Cypher injection, the graph equivalent of SQL injection. Parameters make that class of attack impossible.

### Setting parameters in the Browser

```
:param minBalance => 1000
:params {name: 'Asha', minBalance: 1000}
:params
```

The first sets one parameter, with the right side evaluated by the server so numeric types are correct. The second sets several at once and replaces any previously set parameters. The third lists the current parameters. Then run a query that uses them:

```cypher
MATCH (c:Customer)-[:OWNS]->(a:Account)
WHERE a.balance >= $minBalance
RETURN c.name AS customer, a.balance AS balance
ORDER BY balance DESC;
```

### One limitation

Parameters can stand in for values, but not for the structural parts of a query. You cannot parameterize a label, a relationship type, or a property key, because those are compiled into the query plan. For example `MATCH (n:$label)` is not valid.

In application code, which arrives in Lesson 6, you pass a map of parameters alongside the query string. The golden rule from day one: never build Cypher by string concatenation. Always parameterize.

---

## Part 7: Banking application, idempotent ingestion

Now combine everything into ingestion that is safe to re-run. First, the schema, created once:

```cypher
CREATE CONSTRAINT customer_id IF NOT EXISTS FOR (c:Customer) REQUIRE c.id IS UNIQUE;
CREATE CONSTRAINT account_id  IF NOT EXISTS FOR (a:Account)  REQUIRE a.id IS UNIQUE;
CREATE CONSTRAINT merchant_nm IF NOT EXISTS FOR (m:Merchant) REQUIRE m.name IS UNIQUE;
```

Then an idempotent upsert of a customer, an account they own, and a payment, keyed by natural identifiers:

```cypher
MERGE (c:Customer {id: 'C1'})
  ON CREATE SET c.name = 'Asha', c.risk = 'low'
MERGE (a:Account {id: 'a_c1'})
  ON CREATE SET a.iban = 'GB00-0001', a.balance = 4200
MERGE (m:Merchant {name: 'CloudMart'})
MERGE (c)-[:OWNS]->(a)
CREATE (a)-[:SENT_TO {amount: 1200, date: date('2026-05-02')}]->(m);
```

Note the deliberate mix: the customer, account, merchant, and ownership use MERGE because they are stable entities that must not duplicate, while the payment uses CREATE because each payment is a genuinely new event. Re-running this block creates another payment but never a second customer, account, merchant, or ownership edge.

To upsert a batch, drive MERGE from a parameter list with UNWIND. This is the bridge to bulk loading in Lesson 5.

```cypher
// First set the parameter in the Browser, for example:
// :param customers => [{id:'C1', name:'Asha', risk:'low'}, {id:'C2', name:'Ben', risk:'low'}]
UNWIND $customers AS row
MERGE (c:Customer {id: row.id})
  ON CREATE SET c.name = row.name, c.risk = row.risk
RETURN count(c) AS upserted;
```

---

## Your turn

1. Create uniqueness constraints for `Customer.id`, `Account.id`, and `Merchant.name`.
2. Write an idempotent block that upserts one customer, one account they own, and the OWNS relationship, using the MERGE-by-key then ON CREATE SET pattern.
3. Prove idempotency. Run a count before and after a second execution and confirm the numbers do not change:
   ```cypher
   MATCH (c:Customer) RETURN count(c) AS customers;
   ```
4. Then try to violate the constraint on purpose, for example by creating a second Customer with an existing id, and read the error message.

Report the queries you wrote, the before and after counts, and what the constraint violation error said. A worked solution is at the bottom of this file.

---

## Success criteria

You have met the goal of this lesson when you can:
- State when to use CREATE and when to use MERGE, and explain both MERGE traps.
- Write idempotent ingestion using MERGE-by-key, ON CREATE SET, and ON MATCH SET.
- Choose correctly between `SET +=` and `SET =`.
- Delete a node that has relationships without error.
- Create a uniqueness constraint, explain that it also creates an index, and say which constraints your Community edition does not support.
- Explain why every production query should be parameterized.

---

## New constructs introduced

- `MERGE`, `ON CREATE SET`, `ON MATCH SET`.
- `SET` with a single property, with `+=`, and with `=`; `SET n:Label`.
- `REMOVE n.prop`, `REMOVE n:Label`.
- `DELETE`, `DETACH DELETE`.
- `CREATE CONSTRAINT ... REQUIRE ... IS UNIQUE`, composite uniqueness, `CREATE INDEX`, `SHOW CONSTRAINTS`, `SHOW INDEXES`, `DROP CONSTRAINT`, `DROP INDEX`.
- Parameters with `$name`, the Browser commands `:param` and `:params`, and `UNWIND` over a parameter list.

---

## Appendix: quick reference and gotchas

Write clauses at a glance:

```
CREATE         always add new data
MERGE          find or create (upsert); MERGE on the KEY only, then SET
SET n.p = v    change or add a property
SET n += {..}  merge properties, keep others
SET n = {..}   REPLACE all properties (dangerous)
SET n:Label    add a label
REMOVE n.p     remove a property
REMOVE n:Label remove a label
DELETE x       remove a node (no rels) or a relationship
DETACH DELETE  remove a node and its relationships
```

Gotchas to internalize:
- A MERGE with extra properties in the pattern can create duplicates. MERGE on the key, then SET.
- Never MERGE an unbound path; MERGE each node, then the relationship.
- `SET n = {..}` wipes unlisted properties. Prefer `+=`.
- MERGE without an index on the merged property forces a full label scan. Create constraints and indexes before bulk ingestion.
- Community has uniqueness constraints and indexes, but not existence, node key, or type constraints.
- Parameterize every query. Never concatenate values into Cypher text.
