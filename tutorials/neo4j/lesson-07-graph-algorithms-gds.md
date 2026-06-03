# Lesson 7: Graph Algorithms with GDS

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Lesson 5 (the banking dataset is loaded, with a planted chain and hub)
**Split:** roughly half concept, half hands-on
**Purpose of this file:** a durable reference for computing structure and insight that plain queries cannot, using the Graph Data Science library on the banking graph.

---

## Objectives

By the end of this lesson you will be able to:
1. Explain what graph algorithms add beyond Cypher queries.
2. Install GDS and understand its projection-and-catalog workflow.
3. Rank influential accounts with centrality.
4. Find clusters and rings with community detection.
5. Find similar accounts with similarity algorithms.
6. Produce node embeddings as the bridge to the vector work in Lesson 8.
7. Write algorithm results back to the graph for queries and the application to use.

---

## Part 1: Why algorithms, not just queries

A Cypher query answers a question about a known pattern: who paid this merchant, what is reachable in three hops. A graph algorithm answers a question about the structure of the whole graph: who is most central, what clusters exist, which nodes behave similarly. These are global properties that no single pattern reveals.

For the banking thread this is exactly what fraud analytics needs. A query can check one suspected chain. An algorithm can scan the entire graph and surface the chains and hubs you did not know to look for. Community detection finds candidate fraud rings, centrality finds the mule accounts that sit at the heart of them, and embeddings turn a node's structural position into a vector that machine learning and similarity search can use.

---

## Part 2: Install GDS

GDS ships as a plugin, and its version must match your Neo4j. For Neo4j 5.26 the compatible release is GDS 2.13.

1. Download the GDS 2.13 jar and place it in the `plugins/` directory of your Neo4j installation.
2. Allow the procedures in `neo4j.conf`:
   ```
   dbms.security.procedures.unrestricted=gds.*
   dbms.security.procedures.allowlist=gds.*
   ```
3. Restart Neo4j, then confirm:
   ```cypher
   RETURN gds.version();
   ```

All algorithms used in this lesson are available in GDS Community. The Enterprise tier adds higher concurrency, the model catalog, and certain machine-learning pipelines, which are beyond this course.

---

## Part 3: The GDS workflow, the one mental model

GDS does not run on your stored graph directly. It runs on an in-memory projection, a fast, compact copy of just the part of the graph you care about. You project a graph into the catalog, run algorithms on it, choose how to return the results, then drop it.

```
Neo4j stored graph                  In-memory projected graph
 (Customer, Account,    --project-->   (Account nodes +
  Transaction, Merchant)               TRANSFERRED_TO edges)
                                              |
                                        run an algorithm
                                              |
        +-------------------+-----------------+------------------+
        |                   |                 |                  |
      stream             stats             mutate              write
   rows back to you   summary only   add result to the   persist result
   (inspect)          (quick check)  in-memory graph     back to Neo4j
                                     (chain algorithms)   (queries can use it)
```

The four execution modes are the key to using GDS well:
- **stream** returns the result as rows so you can inspect it. Nothing is stored.
- **stats** returns only summary statistics, useful for a quick read on an algorithm.
- **mutate** writes the result onto the in-memory graph, so a later algorithm can build on it.
- **write** persists the result back to the Neo4j store as node or relationship properties, so ordinary Cypher and your application can use it.

Workflow in one line: project, run with the mode you need, and drop the projection when done.

---

## Part 4: Projecting the banking graph

The model from Lesson 4 stores transfers as reified Transaction nodes, so a clean account-to-account graph needs one preparation step. Derive a direct, weighted relationship between accounts, which is also useful to the application.

```cypher
// Run once: collapse Account -PERFORMED-> Transaction -TO-> Account into a direct edge
MATCH (a:Account)-[:PERFORMED]->(t:Transaction)-[:TO]->(b:Account)
MERGE (a)-[r:TRANSFERRED_TO]->(b)
  ON CREATE SET r.count = 1, r.total = t.amount
  ON MATCH  SET r.count = r.count + 1, r.total = r.total + t.amount;
```

Now project it natively. The short form names a node label and a relationship type:

```cypher
CALL gds.graph.project(
  'accountGraph',
  'Account',
  { TRANSFERRED_TO: { orientation: 'NATURAL', properties: ['total'] } }
);
```

`orientation` matters. `NATURAL` follows the arrows, which is right for money flow. `UNDIRECTED` ignores direction, which some community algorithms prefer. `REVERSE` flips it.

There is also a Cypher projection, the modern aggregation form, which projects directly from a pattern without first materializing a relationship. It is ideal for the reified model and for filtered or transformed projections:

```cypher
MATCH (a:Account)-[:PERFORMED]->(:Transaction)-[:TO]->(b:Account)
WITH gds.graph.project('accountGraphCypher', a, b) AS g
RETURN g.graphName, g.nodeCount, g.relationshipCount;
```

Inspect and clean up the catalog:

```cypher
CALL gds.graph.list() YIELD graphName, nodeCount, relationshipCount;
CALL gds.graph.drop('accountGraphCypher');
```

A guiding principle: project only what the algorithm needs. A smaller projection is faster and clearer.

---

## Part 5: Centrality, who is influential

Centrality scores how important each node is in the structure.

**PageRank** measures influence by how much flow arrives at a node, weighted by the influence of the nodes sending it. In the banking graph, accounts that receive transfers from many well-connected accounts score high, which is the signature of a mule hub.

```cypher
CALL gds.pageRank.stream('accountGraph')
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).id AS account, score
ORDER BY score DESC
LIMIT 10;
```

`gds.util.asNode(nodeId)` turns the internal node id the algorithm returns back into the real node so you can read its properties. The planted hub account, A7, should appear near the top.

Other centralities worth knowing: **degree centrality** simply counts connections, a fast first look, and **betweenness centrality** finds nodes that sit on many shortest paths, the brokers and bottlenecks, which in laundering terms are the accounts that bridge otherwise separate groups.

```cypher
CALL gds.betweenness.stream('accountGraph')
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).id AS account, score
ORDER BY score DESC LIMIT 10;
```

---

## Part 6: Community detection, finding rings

Community detection partitions the graph into groups that are densely connected inside and sparsely connected outside. These groups are candidate fraud rings.

**Weakly Connected Components** finds fully separate islands, groups with no path between them. It is the coarse first pass.

```cypher
CALL gds.wcc.stream('accountGraph')
YIELD nodeId, componentId
RETURN componentId, count(*) AS size, collect(gds.util.asNode(nodeId).id)[..10] AS sample
ORDER BY size DESC
LIMIT 10;
```

**Louvain** finds dense communities within the connected structure by optimizing modularity. This is the workhorse for ring detection, because it surfaces tightly knit clusters even inside one large component.

```cypher
CALL gds.louvain.stream('accountGraph')
YIELD nodeId, communityId
RETURN communityId, count(*) AS size, collect(gds.util.asNode(nodeId).id)[..10] AS sample
ORDER BY size DESC
LIMIT 10;
```

**Label Propagation** is a fast, lighter alternative to Louvain that spreads community labels across neighbours until they stabilize. Use it when speed matters more than precision.

The mule hub and the accounts feeding it should land in the same community, which is the signal an analyst would investigate.

---

## Part 7: Similarity, who behaves alike

Similarity algorithms score how alike two nodes are by their connections. **Node Similarity** uses the Jaccard measure over shared neighbours: two accounts that pay a similar set of merchants are similar, even if they never transact with each other. This finds coordinated behaviour.

Project a bipartite account-to-merchant graph, which the Cypher projection makes easy:

```cypher
MATCH (a:Account)-[:PERFORMED]->(:Transaction)-[:TO]->(m:Merchant)
WITH gds.graph.project('paysGraph', a, m) AS g
RETURN g.graphName, g.nodeCount, g.relationshipCount;
```

```cypher
CALL gds.nodeSimilarity.stream('paysGraph')
YIELD node1, node2, similarity
RETURN gds.util.asNode(node1).id AS accountA,
       gds.util.asNode(node2).id AS accountB,
       similarity
ORDER BY similarity DESC
LIMIT 10;
```

**K-Nearest Neighbours** is the scalable cousin: instead of comparing every pair, it efficiently finds each node's closest matches, which matters once the graph is large.

---

## Part 8: Pathfinding

Cypher already finds shortest paths with `shortestPath`, as you saw in Lesson 2. GDS adds weighted and more advanced pathfinding: **Dijkstra** for the lowest-cost path when relationships have weights, and **Yen's algorithm** for the k shortest paths. In a banking graph weighted by transfer amount or count, this answers questions like the most significant route by which funds moved between two accounts. For most of this course Cypher pathfinding is enough, and GDS pathfinding is there when weights and ranking of multiple paths matter.

---

## Part 9: Node embeddings, the bridge to vectors

A node embedding turns a node's position in the graph into a fixed-length vector of numbers, so that structurally similar nodes have similar vectors. This is the link to Lesson 8: there you will create semantic vectors from text with Gemini, and here you create structural vectors from the graph itself. The two are complementary, and advanced systems combine them.

**FastRP** is fast and the usual first choice. **node2vec** is based on random walks and can capture richer structure at higher cost.

```cypher
CALL gds.fastRP.stream('accountGraph', { embeddingDimension: 128 })
YIELD nodeId, embedding
RETURN gds.util.asNode(nodeId).id AS account, embedding
LIMIT 3;
```

To keep the embedding for later use, write it back as a node property:

```cypher
CALL gds.fastRP.write('accountGraph',
  { embeddingDimension: 128, writeProperty: 'fastrp' })
YIELD nodePropertiesWritten
RETURN nodePropertiesWritten;
```

These structural embeddings can feed a vector index, exactly the mechanism Lesson 8 builds, so that you can ask for accounts that are structurally near a given account.

---

## Part 10: Writing results back

Streaming is for inspection. To make scores usable by ordinary Cypher and by your Python application, use write mode. This persists the score or label as a property on the real nodes.

```cypher
CALL gds.pageRank.write('accountGraph', { writeProperty: 'pagerank' })
YIELD nodePropertiesWritten;

CALL gds.louvain.write('accountGraph', { writeProperty: 'community' })
YIELD communityCount;
```

Now an ordinary query can combine the algorithm output with the graph:

```cypher
// The most central accounts within each detected community
MATCH (a:Account)
WHERE a.pagerank IS NOT NULL
RETURN a.community AS community, a.id AS account, a.pagerank AS score
ORDER BY community, score DESC;
```

When finished, free the memory:

```cypher
CALL gds.graph.drop('accountGraph');
CALL gds.graph.drop('paysGraph');
```

---

## Banking application: a fraud workflow

Putting the pieces together gives a realistic, repeatable workflow:

1. Derive `TRANSFERRED_TO` and project `accountGraph`.
2. Run Weakly Connected Components and Louvain to partition accounts into candidate rings.
3. Run PageRank to rank accounts within each ring; the high scorers are likely mules.
4. Write `community` and `pagerank` back to the accounts.
5. Query for small, dense communities containing a high-PageRank account, and surface them for review.

This is precisely the structural-insight layer that an enterprise context layer exposes to an investigator or an agent: not just the raw transactions, but the computed shape of the network.

---

## Your turn

1. Install GDS 2.13 and confirm with `RETURN gds.version();`.
2. Derive the `TRANSFERRED_TO` relationship and project `accountGraph`.
3. Run PageRank in stream mode and confirm the planted hub account scores near the top.
4. Run Louvain in stream mode and find the community that contains the hub and its feeder accounts.
5. Write `pagerank` and `community` back, then write one query that lists the top three accounts by PageRank within the largest community.
6. Drop the projection.

Report the PageRank leaders, the size of the hub's community, and your final combined query. A worked solution is at the bottom of this file.

---

## Success criteria

You have met the goal of this lesson when you can:
- Explain the project, run, drop workflow and the four execution modes.
- Project a graph both natively and with a Cypher projection.
- Run a centrality and a community algorithm and interpret the result against the planted structure.
- Write results back and query them with ordinary Cypher.
- Explain what a node embedding is and why it bridges to Lesson 8.

---

## New constructs introduced

- `gds.version`, `gds.graph.project` (native and Cypher projection), `gds.graph.list`, `gds.graph.drop`.
- Centrality: `gds.pageRank`, `gds.degree`, `gds.betweenness`.
- Community: `gds.wcc`, `gds.louvain`, `gds.labelPropagation`.
- Similarity: `gds.nodeSimilarity`, `gds.knn`.
- Pathfinding: `gds.shortestPath`, `gds.dijkstra`, Yen's algorithm.
- Embeddings: `gds.fastRP`, `gds.node2vec`.
- Execution modes `stream`, `stats`, `mutate`, `write`, and `gds.util.asNode`.

---

## Appendix: GDS gotchas

- Match the GDS version to Neo4j. Use GDS 2.13 with Neo4j 5.26.
- GDS runs on a projection, not on the stored graph. Project first, drop when done, and do not leave large projections in memory.
- Project only the subgraph the algorithm needs.
- Choose orientation deliberately. `NATURAL` for flow, `UNDIRECTED` for many community algorithms.
- `stream` returns rows but stores nothing; use `write` to make results usable elsewhere; use `mutate` to chain algorithms in memory.
- Use `gds.util.asNode(nodeId)` to turn internal ids back into nodes.
- The reified Transaction model needs either a derived `TRANSFERRED_TO` edge or a Cypher projection to get an account-to-account graph.

---

## Solution to the your-turn task

```cypher
RETURN gds.version();

MATCH (a:Account)-[:PERFORMED]->(t:Transaction)-[:TO]->(b:Account)
MERGE (a)-[r:TRANSFERRED_TO]->(b)
  ON CREATE SET r.count = 1, r.total = t.amount
  ON MATCH  SET r.count = r.count + 1, r.total = r.total + t.amount;

CALL gds.graph.project('accountGraph', 'Account',
  { TRANSFERRED_TO: { orientation: 'NATURAL', properties: ['total'] } });

CALL gds.pageRank.stream('accountGraph')
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).id AS account, score
ORDER BY score DESC LIMIT 10;

CALL gds.louvain.write('accountGraph', { writeProperty: 'community' }) YIELD communityCount;
CALL gds.pageRank.write('accountGraph', { writeProperty: 'pagerank' }) YIELD nodePropertiesWritten;

// Top three accounts by PageRank in the largest community
MATCH (a:Account) WHERE a.community IS NOT NULL
WITH a.community AS community, count(*) AS size
ORDER BY size DESC LIMIT 1
MATCH (a:Account {community: community})
RETURN community, a.id AS account, a.pagerank AS score
ORDER BY score DESC LIMIT 3;

CALL gds.graph.drop('accountGraph');
```

The planted hub account A7 should appear among the PageRank leaders, and the feeder accounts A10 through A60 should share its community, which is the ring an analyst would investigate.
