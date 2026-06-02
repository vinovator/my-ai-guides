# Lesson 2: Cypher Fluency I, Reading Graphs

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Lesson 1 (property graph model, first CREATE and MATCH)
**Split:** roughly half concept, half hands-on

---

## Objectives

By the end of this lesson you will be able to:
1. Read data from the graph and shape exactly what comes back.
2. Filter with WHERE, order, limit, and de-duplicate results.
3. Aggregate data and understand how Cypher groups without a GROUP BY keyword.
4. Handle missing data with OPTIONAL MATCH.
5. Traverse multiple hops, including variable-length and shortest paths.
6. Chain query stages together with WITH.

---

## Concept: a read query is a pipeline

Every Cypher read query is a sequence of clauses, and the data flows through them in order, like a pipeline. The common clauses, in their usual order, are:

- `MATCH` and `OPTIONAL MATCH`: find the pattern in the graph.
- `WHERE`: keep only the rows you want.
- `WITH`: pass results to the next stage, optionally aggregating or filtering first.
- `RETURN`: produce the final output.
- `ORDER BY`, `SKIP`, `LIMIT`: sort and page that output.

The single most important idea is that the pattern in a MATCH is a drawing of the shape you are looking for, written in text. You describe what you want to find, and the database finds every place in the graph that matches.

## Intuition

Two images carry this lesson.

First, describe the shape, then shape the output. The MATCH says what structure to find. Everything after it (filtering, ordering, aggregating) is about trimming and reshaping the rows that the structure produced. You are not writing loops or joins; you are drawing a shape and then tidying the result table.

Second, WITH is the pipe. When you need the output of one stage to feed the next, for example aggregate first and then filter on the aggregate, WITH is the connector that carries values forward. If you know SQL, filtering after a WITH that aggregates is the equivalent of HAVING.

---

## Concrete: hands-on

Run each block in the Neo4j Browser at http://localhost:7474.

### Step 0: reset and seed a richer dataset

This clears the small graph from Lesson 1 and loads a banking dataset with enough structure to make the queries interesting. The reset uses DETACH DELETE, which is covered properly in Lesson 3; here it simply gives a clean slate.

```cypher
MATCH (n) DETACH DELETE n;
```

```cypher
CREATE
  (asha:Customer {name: 'Asha', risk: 'low'}),
  (ben:Customer {name: 'Ben', risk: 'low'}),
  (chen:Customer {name: 'Chen', risk: 'medium'}),
  (diana:Customer {name: 'Diana', risk: 'high'}),
  (evan:Customer {name: 'Evan', risk: 'medium'}),
  (aAsha:Account {id: 'a_asha', iban: 'GB00-0001', balance: 5200}),
  (aBen:Account {id: 'a_ben', iban: 'GB00-0002', balance: 1800}),
  (aChen:Account {id: 'a_chen', iban: 'GB00-0003', balance: 900}),
  (aDiana:Account {id: 'a_diana', iban: 'GB00-0004', balance: 12000}),
  (aEvan:Account {id: 'a_evan', iban: 'GB00-0005', balance: 400}),
  (aMule:Account {id: 'a_mule', iban: 'GB00-0006', balance: 50}),
  (cloudmart:Merchant {name: 'CloudMart'}),
  (gadget:Merchant {name: 'GadgetWorld'}),
  (quickcash:Merchant {name: 'QuickCash'}),
  (asha)-[:OWNS]->(aAsha),
  (ben)-[:OWNS]->(aBen),
  (chen)-[:OWNS]->(aChen),
  (diana)-[:OWNS]->(aDiana),
  (evan)-[:OWNS]->(aEvan),
  (evan)-[:OWNS]->(aMule),
  (aAsha)-[:SENT_TO {amount: 1200, date: '2026-05-02'}]->(cloudmart),
  (aAsha)-[:SENT_TO {amount: 300,  date: '2026-05-09'}]->(gadget),
  (aBen)-[:SENT_TO {amount: 800,  date: '2026-05-03'}]->(cloudmart),
  (aChen)-[:SENT_TO {amount: 1500, date: '2026-05-05'}]->(gadget),
  (aDiana)-[:SENT_TO {amount: 250,  date: '2026-05-06'}]->(gadget),
  (aDiana)-[:SENT_TO {amount: 4000, date: '2026-05-07'}]->(quickcash),
  (aAsha)-[:TRANSFER {amount: 500,  date: '2026-05-04'}]->(aBen),
  (aDiana)-[:TRANSFER {amount: 3000, date: '2026-05-08'}]->(aChen),
  (aChen)-[:TRANSFER {amount: 2500, date: '2026-05-09'}]->(aEvan),
  (aEvan)-[:TRANSFER {amount: 2000, date: '2026-05-10'}]->(aMule);
```

Two relationship types matter here: SENT_TO is a payment from an account to a merchant, and TRANSFER is a movement between accounts. The transfers form a chain (Diana to Chen to Evan to a mule account) that you will trace later.

### Step 1: basic reads

```cypher
MATCH (c:Customer)
RETURN c.name, c.risk;
```

You asked for every Customer node and returned two properties. The result is a table.

### Step 2: filtering with WHERE

```cypher
MATCH (c:Customer)
WHERE c.risk = 'high'
RETURN c.name;
```

WHERE supports the operators you expect, and a few graph-friendly ones. Numeric ranges, AND and OR, and string tests:

```cypher
MATCH (a:Account)
WHERE a.balance > 1000 AND a.iban STARTS WITH 'GB00'
RETURN a.id, a.balance
ORDER BY a.balance DESC;
```

Membership with IN:

```cypher
MATCH (c:Customer)
WHERE c.risk IN ['medium', 'high']
RETURN c.name, c.risk;
```

### Step 3: shaping output with aliases and DISTINCT

```cypher
MATCH (:Account)-[:SENT_TO]->(m:Merchant)
RETURN DISTINCT m.name AS merchant
ORDER BY merchant;
```

`AS` renames a column. `DISTINCT` removes duplicate rows, which matters because the same merchant is paid by several accounts.

### Step 4: ordering and paging

```cypher
MATCH (:Account)-[t:SENT_TO]->(m:Merchant)
RETURN m.name AS merchant, t.amount AS amount
ORDER BY amount DESC
LIMIT 3;
```

`ORDER BY` sorts, `LIMIT` caps the rows, and `SKIP` (not shown) offsets them. Together they give you top-N and pagination.

### Step 5: aggregation and the grouping rule

This is the concept most likely to surprise you, so read it slowly. Cypher has no GROUP BY keyword. Instead, when a RETURN mixes aggregating functions (such as `sum` or `count`) with non-aggregating expressions (such as `c.name`), the non-aggregating expressions automatically become the grouping key. The aggregates are then computed per group.

Total spend and number of payments per customer:

```cypher
MATCH (c:Customer)-[:OWNS]->(:Account)-[t:SENT_TO]->(:Merchant)
RETURN c.name AS customer, sum(t.amount) AS totalSpend, count(t) AS payments
ORDER BY totalSpend DESC;
```

Here `c.name` is the implicit grouping key, and `sum` and `count` are computed for each customer. The aggregating functions you will use most are `count`, `sum`, `avg`, `min`, `max`, and `collect`.

`collect` is special: it gathers values from a group into a list. Payers per merchant:

```cypher
MATCH (c:Customer)-[:OWNS]->(:Account)-[:SENT_TO]->(m:Merchant)
RETURN m.name AS merchant, collect(DISTINCT c.name) AS payers, count(DISTINCT c) AS payerCount
ORDER BY payerCount DESC;
```

### Step 6: OPTIONAL MATCH and missing data

A plain MATCH drops anything that does not fit the pattern. Evan made no purchases, so a plain MATCH on purchases would make Evan disappear. OPTIONAL MATCH keeps the left side and fills the missing right side with null, much like a left outer join.

```cypher
MATCH (c:Customer)
OPTIONAL MATCH (c)-[:OWNS]->(:Account)-[t:SENT_TO]->(:Merchant)
RETURN c.name AS customer, sum(t.amount) AS totalSpend
ORDER BY totalSpend DESC;
```

Evan now appears with a total of 0, because aggregation ignores nulls. To replace a null at the property level, use `coalesce`:

```cypher
MATCH (c:Customer)
OPTIONAL MATCH (c)-[:OWNS]->(:Account)-[t:SENT_TO]->(m:Merchant)
RETURN c.name AS customer, coalesce(m.name, 'no purchases') AS merchant, t.amount AS amount
ORDER BY customer;
```

### Step 7: multi-hop and variable-length paths

This is where the graph earns its keep. A fixed two-hop pattern is just two arrows. A variable-length pattern lets you follow a relationship type repeatedly, between a minimum and maximum number of hops, with the syntax `[:TYPE*min..max]`.

Trace every account reachable from Diana's account within three transfer hops:

```cypher
MATCH path = (start:Account {id: 'a_diana'})-[:TRANSFER*1..3]->(reached:Account)
RETURN reached.id AS reachedAccount, length(path) AS hops
ORDER BY hops;
```

You should see a_chen at one hop, a_evan at two, and a_mule at three. This is the shape of money-laundering layering: funds moved through a chain of accounts to obscure the origin.

Now the payoff. Find the actual chain between Diana's account and the mule account:

```cypher
MATCH (a:Account {id: 'a_diana'}), (b:Account {id: 'a_mule'})
MATCH p = shortestPath((a)-[:TRANSFER*]->(b))
RETURN [n IN nodes(p) | n.id] AS hopChain, length(p) AS hops;
```

This returns the ordered chain of account ids and the number of hops. The list comprehension `[n IN nodes(p) | n.id]` walks the nodes of the path and pulls out each id. A flat vector store cannot answer this kind of question; a graph answers it directly.

### Step 8: WITH as the pipeline connector

Use WITH to compute something, then filter or use it in the next stage. Customers whose total spend exceeds 1000:

```cypher
MATCH (c:Customer)-[:OWNS]->(:Account)-[t:SENT_TO]->(:Merchant)
WITH c, sum(t.amount) AS totalSpend
WHERE totalSpend > 1000
RETURN c.name AS customer, totalSpend
ORDER BY totalSpend DESC;
```

The WHERE after WITH filters on the aggregate, which is exactly what HAVING does in SQL. WITH is what makes Cypher composable: you can stack stages to build up complex logic.

---

## Banking application: shared counterparty detection

A common first signal in fraud analytics is two customers paying the same counterparty. This pattern reads two owners who both sent money to the same merchant:

```cypher
MATCH (c1:Customer)-[:OWNS]->(:Account)-[:SENT_TO]->(m:Merchant)<-[:SENT_TO]-(:Account)<-[:OWNS]-(c2:Customer)
WHERE c1.name < c2.name
RETURN c1.name AS customerA, c2.name AS customerB, m.name AS sharedMerchant
ORDER BY customerA, customerB;
```

The condition `c1.name < c2.name` is a useful trick: it stops a pair from matching itself and stops the same pair appearing twice in mirrored order.

---

## Your turn

Extend the shared counterparty query. Instead of listing each shared merchant on its own row, return one row per pair of customers with the count of merchants they have in common, sorted so the most-connected pairs come first.

Steps:
1. Start from the shared counterparty pattern above.
2. Keep the `c1.name < c2.name` guard.
3. Aggregate with `count(DISTINCT m)` and alias it, for example `sharedMerchants`.
4. Order by that count, descending.

Run it, then report back the query you wrote and the rows it returned. The solution is at the very bottom of this file if you want to check after trying.

---

## Success criteria

You have met the goal of this lesson when you can:
- Write a read query that combines filtering, aggregation, and ordering.
- Explain why Evan still appears with OPTIONAL MATCH but vanishes with plain MATCH.
- Explain implicit grouping and when to filter with WHERE after WITH.
- Trace a multi-hop path and read back the chain of nodes.

---

## New constructs introduced

- `WHERE` with comparisons, `AND`, `OR`, `IN`, `STARTS WITH`, and numeric ranges.
- `AS` for aliases, `DISTINCT` for de-duplication.
- `ORDER BY`, `LIMIT`, `SKIP`.
- Aggregation: `count`, `sum`, `avg`, `min`, `max`, `collect`, and implicit grouping.
- `OPTIONAL MATCH` and `coalesce` for missing data.
- Variable-length paths `[:TYPE*min..max]`, `shortestPath`, `nodes`, `length`, and list comprehension.
- `WITH` for chaining and post-aggregation filtering.

---

## What is next

Lesson 3, Cypher fluency II, covers writing and integrity: CREATE versus MERGE and idempotent ingestion, SET and REMOVE, DELETE and DETACH DELETE, uniqueness constraints and indexes, and query parameters. That lesson makes your data loading safe and sets up the Python work in Lesson 6.

---

## Solution to the your-turn task

```cypher
MATCH (c1:Customer)-[:OWNS]->(:Account)-[:SENT_TO]->(m:Merchant)<-[:SENT_TO]-(:Account)<-[:OWNS]-(c2:Customer)
WHERE c1.name < c2.name
RETURN c1.name AS customerA, c2.name AS customerB, count(DISTINCT m) AS sharedMerchants
ORDER BY sharedMerchants DESC, customerA, customerB;
```

With the seeded data, Asha and Ben share CloudMart, and Asha, Chen, and Diana all share GadgetWorld, so the pairs drawn from that group show a shared count of one each, and any pair sharing two merchants would sort to the top.
