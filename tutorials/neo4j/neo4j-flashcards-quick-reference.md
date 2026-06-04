# Neo4j Mastery: Flashcards and Quick Reference

**Course:** Neo4j Mastery (see the blueprint and the twelve lesson files for depth)
**Purpose:** fast revision and lookup. Use the cards for active recall, the table to scan the whole course, the ten ideas for the durable concepts, and the cheat-sheet for syntax you look up rather than memorize.

**How to use the cards:** read the question, answer it in your head or out loud, then check. Revisit the ones you miss. Active recall beats rereading.

---

## The twelve lessons at a glance

| # | Lesson | Core idea | Key constructs |
| --- | --- | --- | --- |
| 1 | Origins and foundations | Relationships are first-class; traversal stays cheap | nodes, relationships, properties, labels; CREATE, MATCH |
| 2 | Cypher fluency I, reading | Describe the shape, then filter and aggregate | WHERE, ORDER BY, aggregation, OPTIONAL MATCH, WITH, variable-length paths |
| 3 | Cypher fluency II, writing | Write idempotently; protect the model | MERGE, SET, REMOVE, DETACH DELETE, constraints, indexes, parameters |
| 4 | Data modeling | Model for the questions, not the tables | node vs property vs relationship; reification; time; many-to-many |
| 5 | Loading real data | Constraints first, then batch | LOAD CSV, CALL IN TRANSACTIONS, neo4j-admin import, APOC |
| 6 | Python driver | One driver; managed transactions; parameterize | execute_query, execute_read/write, the cursor-scope rule |
| 7 | Graph algorithms (GDS) | Project, run, drop; structure queries cannot see | gds.graph.project, pageRank, louvain, wcc, nodeSimilarity, fastRP |
| 8 | Vectors and semantics | Meaning as location; vector plus graph | CREATE VECTOR INDEX, db.index.vector.queryNodes, Gemini embeddings |
| 9 | GraphRAG I, build | Documents to a knowledge graph | SimpleKGPipeline, schema-guided extraction, lexical and entity graphs |
| 10 | GraphRAG II, retrieve | Ground answers, return evidence | VectorCypherRetriever, Text2CypherRetriever, GraphRAG, return_context |
| 11 | Agentic layer | Expose capabilities, not a console | ADK agent, McpToolset, MCP Toolbox, neo4j-agent-memory |
| 12 | Laptop to enterprise | Add security, governance, scale | RBAC, fine-grained security, clustering, Aura, the operating model |

---

## Flashcards

### Lesson 1: Origins and foundations
- **Q:** Why does graph traversal stay cheap as data grows? **A:** Index-free adjacency. Relationships are stored as direct pointers, so a traversal step costs by local degree, not by total data size.
- **Q:** The four building blocks of the property graph? **A:** Nodes, relationships (directed and typed), properties (on nodes and relationships), and labels.
- **Q:** What white space did Neo4j fill? **A:** The cost and impedance of JOINs on connected data in relational databases.
- **Q:** What standard did Cypher seed? **A:** ISO GQL (ISO/IEC 39075:2024), the first new ISO query-language standard since SQL.

### Lesson 2: Cypher fluency I, reading
- **Q:** How does Cypher group for aggregation? **A:** Implicitly. The non-aggregating return items become the grouping key; there is no GROUP BY keyword.
- **Q:** MATCH versus OPTIONAL MATCH? **A:** MATCH drops rows that do not fit the pattern; OPTIONAL MATCH keeps them and fills missing parts with null, like a left outer join.
- **Q:** Variable-length path syntax? **A:** `[:TYPE*min..max]`.
- **Q:** What is WITH for? **A:** Chaining query stages, and filtering after aggregation, which is the equivalent of SQL HAVING.

### Lesson 3: Cypher fluency II, writing
- **Q:** CREATE versus MERGE? **A:** CREATE always adds new data; MERGE finds existing data or creates it, an upsert.
- **Q:** The two MERGE traps? **A:** MERGE matches on every property in the pattern, so merge on the key only and then SET; and never MERGE an unbound path, instead MERGE each node then the relationship.
- **Q:** SET += versus SET =? **A:** `+=` merges properties and keeps the others; `=` replaces all properties and wipes anything not listed.
- **Q:** Which constraints does Community support? **A:** Property uniqueness and indexes. Node-key, existence, and type constraints are Enterprise only.
- **Q:** Why use parameters? **A:** Query-plan caching for performance, and protection against Cypher injection.

### Lesson 4: Data modeling
- **Q:** Where does graph modeling start? **A:** From the questions the graph must answer, not from existing tables.
- **Q:** Node, property, or relationship? **A:** Node if you connect to it, share it, or query across instances; property if it is a simple attribute; relationship if it is a traversed connection.
- **Q:** When do you reify a relationship into a node? **A:** When it has its own identity, many attributes, or more than two endpoints, for example a Transaction.
- **Q:** What is a supernode and how do you avoid it? **A:** A node with a huge number of relationships; avoid by keeping high-cardinality, low-traversal categoricals as properties.

### Lesson 5: Loading real data
- **Q:** What must exist before a MERGE-based load? **A:** A uniqueness constraint or index on the merged property, or every MERGE scans all nodes of that label.
- **Q:** The modern batching syntax? **A:** `CALL { WITH row ... } IN TRANSACTIONS OF n ROWS`. USING PERIODIC COMMIT is deprecated.
- **Q:** The fastest first bulk load? **A:** `neo4j-admin database import`, offline and only into an empty database.
- **Q:** The big CSV gotcha? **A:** Every field loads as a string; cast with toInteger, toFloat, date, and so on.

### Lesson 6: Python driver
- **Q:** How many drivers per application? **A:** One, long-lived, because it holds the connection pool.
- **Q:** The simple path versus managed transactions? **A:** `driver.execute_query` for a one-shot query; `session.execute_read` and `execute_write` for multi-statement work, control, and automatic retries.
- **Q:** The cursor-scope rule? **A:** Materialize results inside the transaction function with `.data()` or `.single()`; never return a live Result.
- **Q:** The deprecated transaction methods? **A:** `read_transaction` and `write_transaction`; use `execute_read` and `execute_write`.

### Lesson 7: Graph algorithms (GDS)
- **Q:** The GDS workflow? **A:** Project an in-memory graph, run the algorithm, then drop the projection.
- **Q:** The four execution modes? **A:** stream, stats, mutate, write.
- **Q:** Which algorithm finds fraud rings? **A:** Community detection, such as Louvain and Weakly Connected Components.
- **Q:** Which algorithm finds central or mule accounts? **A:** Centrality, such as PageRank.
- **Q:** The GDS version for Neo4j 5.26? **A:** GDS 2.13.
- **Q:** What is a node embedding? **A:** A vector capturing a node's structural position (FastRP, node2vec); the bridge to vector search.

### Lesson 8: Vectors and the semantic layer
- **Q:** What is an embedding, intuitively? **A:** Meaning turned into a location; similar meaning sits as nearby vectors.
- **Q:** The most common vector error? **A:** The index dimension not matching the embedding dimension.
- **Q:** How do you query a vector index on 5.26? **A:** With the `db.index.vector.queryNodes` procedure; the in-Cypher SEARCH clause is 2026 and later.
- **Q:** Which task type for stored text versus a query? **A:** RETRIEVAL_DOCUMENT for stored text, RETRIEVAL_QUERY for the search text.
- **Q:** What is hybrid retrieval? **A:** Vector search finds entry points, then graph traversal adds the connected context.

### Lesson 9: GraphRAG I, building the knowledge graph
- **Q:** Why a knowledge graph over plain chunks? **A:** It captures the relationships between facts, enabling multi-hop questions that chunk similarity cannot answer.
- **Q:** The builder class? **A:** `SimpleKGPipeline`.
- **Q:** Why supply a schema for extraction? **A:** It constrains the LLM to consistent labels and keeps the graph clean and queryable.
- **Q:** The two graphs the builder produces? **A:** A lexical graph of documents and chunks, and an entity graph, joined by `FROM_CHUNK`.

### Lesson 10: GraphRAG II, retrieval and grounding
- **Q:** The GraphRAG sweet-spot retriever? **A:** `VectorCypherRetriever`, which finds chunks by vector then traverses to connected facts.
- **Q:** The retriever for precise structured questions? **A:** `Text2CypherRetriever`, which writes Cypher from natural language.
- **Q:** Where does grounding come from? **A:** The LLM answers only from retrieved context, and that context is returned as evidence.
- **Q:** How do you get the evidence back? **A:** `return_context=True`, then read `response.retriever_result`.
- **Q:** The evaluation metrics that matter? **A:** Faithfulness and answer relevance.

### Lesson 11: The agentic layer
- **Q:** Open Cypher tools versus pre-validated tools? **A:** Open tools let the agent write Cypher (flexible, risky); pre-validated tools are named, curated queries (safe, enterprise). Expose capabilities, not a console.
- **Q:** How does an ADK agent reach Neo4j? **A:** Through MCP, with `McpToolset` bound to the Neo4j MCP server or to MCP Toolbox.
- **Q:** How does the agent remember across sessions? **A:** `neo4j-agent-memory` with a `MemoryClient`, exposed to ADK via `PreloadMemoryTool`.
- **Q:** A key memory gotcha? **A:** The memory package is async-only.

### Lesson 12: From laptop to enterprise
- **Q:** The single most important production control for an agent? **A:** A dedicated read-only role, which is an Enterprise feature.
- **Q:** Community versus Enterprise in one line? **A:** Community gives the engine and the algorithms; Enterprise and Aura add security (RBAC), multiple databases, clustering, and hot backups.
- **Q:** The three components of the context layer? **A:** The ontology, the context fabric, and the MCP wrappers.
- **Q:** Where does Neo4j sit in the context layer? **A:** It is the knowledge and memory spine, not the whole layer.
- **Q:** The five operating-model capabilities? **A:** Ontology stewardship, context engineering, MCP and integration engineering, AI governance, and value realization.

---

## The ten ideas that matter most

1. **Index-free adjacency.** Relationships are pointers, so connected and multi-hop queries stay cheap as data grows.
2. **The whiteboard is the database.** The picture you would draw is the model; nodes and arrows are stored as-is.
3. **Model for the questions.** Design from what the graph must answer, never from the source tables.
4. **CREATE adds, MERGE finds-or-creates.** Merge on the key only, then SET; never merge an unbound path.
5. **Constraints and indexes before loading.** A MERGE without a backing index scans everything.
6. **One driver, parameterize everything, materialize inside the transaction.** The three driver disciplines.
7. **Project, run, drop.** Algorithms run on an in-memory projection and reveal structure queries cannot.
8. **Embeddings turn meaning into location.** Always match the index dimension to the embedding dimension.
9. **GraphRAG: vector finds, graph connects.** Ground every answer in retrieved context and return the evidence.
10. **Expose capabilities, not a console.** Least privilege for agents; Neo4j is the spine, not the whole context layer.

---

## Cheat-sheet

### Cypher: reading
```cypher
MATCH (c:Customer)-[:OWNS]->(a:Account)
WHERE a.balance > 1000
RETURN c.name AS name, sum(a.balance) AS total   // implicit grouping by name
ORDER BY total DESC SKIP 0 LIMIT 10;

OPTIONAL MATCH (c)-[:OWNS]->(a)                   // keeps c even with no account
MATCH p = (a)-[:TRANSFER*1..3]->(b)               // variable-length path
WITH c, sum(t.amount) AS total WHERE total > 1000 // WITH = HAVING
```

### Cypher: writing and integrity
```cypher
MERGE (c:Customer {id:$id})                       // upsert on the KEY only
  ON CREATE SET c.name=$name
  ON MATCH  SET c.seen=datetime();
SET c += {risk:'high'};                           // merge props; SET c = {} replaces all
SET c:VIP;  REMOVE c:VIP;                          // labels
DETACH DELETE c;                                   // node + its relationships

CREATE CONSTRAINT cid IF NOT EXISTS FOR (c:Customer) REQUIRE c.id IS UNIQUE;  // also makes an index
CREATE INDEX cname IF NOT EXISTS FOR (c:Customer) ON (c.name);
SHOW CONSTRAINTS;  SHOW INDEXES;
```

### Loading
```cypher
LOAD CSV WITH HEADERS FROM 'file:///x.csv' AS row
CALL { WITH row MERGE (c:Customer {id:row.id}) ON CREATE SET c.bal=toFloat(row.bal) }
IN TRANSACTIONS OF 1000 ROWS;
```
```
neo4j-admin database import full neo4j --nodes=... --relationships=...   # offline, empty DB
```

### GDS (2.13 with Neo4j 5.26)
```cypher
CALL gds.graph.project('g','Account',{TRANSFERRED_TO:{orientation:'NATURAL'}});
CALL gds.pageRank.stream('g')  YIELD nodeId,score RETURN gds.util.asNode(nodeId).id, score;
CALL gds.louvain.write('g',{writeProperty:'community'}) YIELD communityCount;
CALL gds.fastRP.write('g',{embeddingDimension:128, writeProperty:'fastrp'});
CALL gds.graph.drop('g');
```

### Vectors (5.26)
```cypher
CREATE VECTOR INDEX notes IF NOT EXISTS FOR (c:Customer) ON (c.embedding)
OPTIONS {indexConfig: {`vector.dimensions`:768, `vector.similarity_function`:'cosine'}};
MATCH (c:Customer {id:$id}) CALL db.create.setNodeVectorProperty(c,'embedding',$vec);
CALL db.index.vector.queryNodes('notes', $k, $queryVec) YIELD node, score;
```

### Python driver
```python
from neo4j import GraphDatabase
driver = GraphDatabase.driver(uri, auth=(user, pw)); driver.verify_connectivity()
records, summary, keys = driver.execute_query("MATCH (c) RETURN count(c) AS n", database_="neo4j")
with driver.session() as s:
    s.execute_write(lambda tx, x: tx.run("MERGE (:Customer {id:$x})", x=x), "C1")
    data = s.execute_read(lambda tx: tx.run("MATCH (c) RETURN c.id AS id").data())  # materialize inside
```

### Gemini embeddings (google-genai)
```python
from google import genai; from google.genai import types
client = genai.Client()
r = client.models.embed_content(model="gemini-embedding-001", contents=text,
        config=types.EmbedContentConfig(task_type="RETRIEVAL_DOCUMENT", output_dimensionality=768))
vec = r.embeddings[0].values
```

### GraphRAG (neo4j-graphrag)
```python
from neo4j_graphrag.retrievers import VectorCypherRetriever
from neo4j_graphrag.generation import GraphRAG
r = VectorCypherRetriever(driver, index_name="chunkEmbeddings", retrieval_query=QUERY, embedder=embedder)
rag = GraphRAG(retriever=r, llm=llm)
resp = rag.search(query_text=q, retriever_config={"top_k":4}, return_context=True)
resp.answer; resp.retriever_result   # answer + evidence
```

### ADK agent with MCP and memory
```python
from google.adk.agents import Agent
from google.adk.tools.mcp_tool import McpToolset
from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams
from google.adk.tools.preload_memory_tool import PreloadMemoryTool
from mcp import StdioServerParameters
neo4j_tools = McpToolset(connection_params=StdioConnectionParams(
    server_params=StdioServerParameters(command="uvx", args=["mcp-neo4j-cypher"], env={...})),
    tool_filter=["get_neo4j_schema","read_neo4j_cypher"])   # read-only
root_agent = Agent(model="gemini-2.5-flash", name="agent", instruction="...",
    tools=[neo4j_tools, my_function_tool, PreloadMemoryTool()])
# run:  adk web
```

### Server and tools
```
./bin/neo4j start|stop|console|version       Browser: http://localhost:7474   Bolt: bolt://localhost:7687
APOC and GDS 2.13 jars -> plugins/ , allowlist in neo4j.conf , restart
RETURN gds.version();
```

---

## One-line reminders

- Cypher style: KEYWORDS upper, :LabelsPascal, :RELATIONSHIPS_UPPER_SNAKE, variablesCamel.
- Every CSV field is a string; cast it.
- Match the vector index dimension to the embedding dimension, everywhere.
- On 5.26: Cypher 5, vector procedures (not SEARCH), GDS 2.13, uniqueness constraints only in Community.
- neo4j-agent-memory is async-only.
- Ground answers, return evidence, keep agent tools read-only.
