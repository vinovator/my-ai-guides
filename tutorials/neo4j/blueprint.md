# Neo4j Mastery Blueprint

### From complete novice to enterprise agentic context layers

This document is the master plan for the tutorial. It is the single reference used to generate every lesson, so the course stays coherent, sequenced, and aligned to the end goal. Treat it as a living document: the progress tracker at the end records what is complete and what is next.

---

## 1. Learner profile, goal, and stack

**Goal.** Build practical, deep capability with Neo4j, with a specific destination: a grounded, explainable context and memory layer for enterprise agentic applications. Neo4j is positioned as the knowledge and memory spine of that layer, used inside a GraphRAG pattern, not as the entire context layer on its own. The course also produces the transferable skill of thinking and modeling in graphs.

**Confirmed stack.**
- Database: Neo4j Community Edition 5.26 LTS (the final 5.x release, supported through June 2028), installed from the tarball, run locally.
- Language: Python.
- Agent framework: Google Agent Development Kit (ADK).
- AI provider: Gemini API (via the google-genai integration), used for embeddings and for the reasoning model.
- Integration spine: Model Context Protocol (MCP) as the bridge between agents and the graph.

**Domains.**
- Neutral starter (people, accounts, merchants) to learn mechanics fast with quick visual feedback.
- Banking as the applied enterprise thread, chosen because it is a canonical graph domain. Recurring scenarios: shared counterparty detection, money-laundering layering through account chains, customer 360, and grounded multi-hop question answering for a banking agent.

**Pedagogy.**
- A 50/50 split of concept and build in every lesson.
- Each concept is taught three ways: conceptually (what it is), intuitively (a mental image), and concretely (runnable Cypher or code).
- A running banking dataset is grown across lessons so later work has realistic data to operate on.

---

## 2. Environment and tooling reference

**Local server.**
- Start, stop, and inspect: `./bin/neo4j start`, `./bin/neo4j stop`, `./bin/neo4j console`, `./bin/neo4j version`.
- Neo4j Browser (the visual query workbench): http://localhost:7474.
- Bolt protocol endpoint (used by drivers and tools): bolt://localhost:7687.
- First login: default user `neo4j`, default password `neo4j`, forced password change on first connect.

**Core plugins.** Place the plugin jars in the `plugins/` directory and enable the relevant procedure allowlist in `neo4j.conf`, then restart.
- APOC: a large library of utility procedures and functions (data import, transformation, graph refactoring, metadata).
- Graph Data Science (GDS): the graph algorithms library. The Community edition covers the algorithms used in this course (centrality, community detection, similarity, pathfinding, node embeddings).

**Python libraries.**
- `neo4j`: the official driver. Used directly so the mechanics are never hidden behind a framework.
- `neo4j-graphrag[google-genai]`: the official GraphRAG package, with Gemini support for embeddings and generation.
- Optional alternatives encountered later for comparison only: `langchain-neo4j`, LlamaIndex graph stores.

**AI provider.**
- Gemini API through the google-genai SDK: one embedding model for vectors and one reasoning model for Cypher generation and answer grounding. Specific model identifiers are pinned in the lessons that use them, since they change over time.

**Agent and MCP layer.**
- Google ADK for agent construction and orchestration.
- Official Neo4j MCP server (the `neo4j/mcp` project, runnable as a Python module or a container): exposes schema introspection, read Cypher, write Cypher, and a listing of GDS procedures.
- Neo4j Labs MCP servers (the `mcp-neo4j` collection): a Cypher server, a memory server that stores entities and relationships as a graph across sessions, an Aura management server, a data-modeling server, and a GDS agent server.
- MCP Toolbox for Databases (Google): declarative, pre-validated database tools for agents, with first-class Neo4j support and native ADK integration.
- `neo4j-agent-memory`: persistent long-term agent memory backed by Neo4j, designed to plug into ADK agents.

**Visualization.** Neo4j Browser for everyday work, NeoDash for dashboards, and Bloom where a license is available.

**Version: Neo4j 5.26 LTS (confirmed).** This is the long-term support release, stable and supported through June 2028, and it runs on Java 17 or Java 21. It supports everything this course needs. Concrete implications:
- Cypher version is Cypher 5. The course uses Cypher 5 syntax. Cypher 25 and the newer in-Cypher vector SEARCH clause arrived with the 2025.06 and 2026 release lines and are out of scope for this install.
- Vector indexes are available. Lesson 8 uses the Cypher 5 vector index procedures (for example, db.index.vector.queryNodes), not the newer SEARCH syntax.
- APOC and a matching Graph Data Science version install as plugins and cover the algorithms used here.
- Enterprise-only capabilities (multiple databases, role-based access control including a dedicated read-only user for agents, clustering, hot backups, and Bloom) are not in Community. These are treated conceptually in Lesson 12 rather than hands-on, which is exactly the laptop-to-enterprise boundary.

---

## 3. Conventions used in every lesson

**Cypher style.**
- Keywords in upper case: `MATCH`, `WHERE`, `RETURN`.
- Node labels in PascalCase: `:Customer`, `:Account`.
- Relationship types in upper snake case: `:SENT_TO`, `:OWNS`.
- Variables in lower camel case: `c`, `acct`, `payer`.

**Lesson structure.** Each lesson follows the same shape:
1. Objectives.
2. Concept.
3. Intuition.
4. Concrete hands-on (runnable, step by step).
5. Banking application.
6. Your turn (a task to complete and report back).
7. Success criteria.
8. New constructs introduced (a quick-reference list).

**Data safety.** No destructive operation runs against shared data without an explicit, labelled reset step.

**Writing style of deliverables.** No contractions. No em-dashes; use commas, colons, or restructured sentences.

---

## 4. The lesson map

The arc moves from the data model, through the query language and modeling, into Python, then algorithms and vectors, then GraphRAG, then the agentic layer, and finally enterprise scale.

### [Lesson 1: Origins and foundations](lesson-01-origins-and-foundations.md)
- **Status:** complete.
- **Objectives:** understand the white space Neo4j filled and its significance today; internalize the property graph model.
- **Concepts:** the relational impedance mismatch and the cost of JOINs on connected data; the history from founding through Cypher, openCypher, and the ISO GQL standard; the four building blocks (nodes, relationships, properties, labels); index-free adjacency.
- **Hands-on:** start the server, open the Browser, create and read a first graph with CREATE and MATCH, in both a neutral and a banking frame.
- **Banking application:** customers, accounts, merchants, and a first payment relationship.
- **Success criteria:** can describe why graph traversal stays cheap as data grows, and can write a simple MATCH that returns a pattern.
- **Constructs:** `CREATE`, `MATCH`, `RETURN`, node and relationship pattern syntax.

### [Lesson 2: Cypher fluency I, reading graphs](lesson-02-cypher-fluency-reading.md)
- **Status:** complete.
- **Objectives:** read and shape data from the graph with confidence.
- **Concepts:** the read-query clause pipeline (MATCH, OPTIONAL MATCH, WHERE, WITH, RETURN, ORDER BY, SKIP, LIMIT); filtering; aggregation and Cypher implicit grouping; OPTIONAL MATCH and nulls; variable-length and shortest paths; WITH as the pipeline connector.
- **Hands-on:** reset, seed a richer banking dataset, then progressively filter, shape, aggregate, and traverse.
- **Banking application:** outflow per customer, top merchants by spend, shared-counterparty pairs, accounts reachable within N transfer hops.
- **Success criteria:** can write a multi-clause read query with filtering, aggregation, and a multi-hop traversal.
- **Constructs:** `WHERE`, `ORDER BY`, `LIMIT`, `SKIP`, `DISTINCT`, `count`, `sum`, `avg`, `collect`, `OPTIONAL MATCH`, variable-length paths, `WITH`.

### [Lesson 3: Cypher fluency II, writing and integrity](lesson-03-writing-and-integrity.md)
- **Status:** complete.
- **Objectives:** create and change data correctly and idempotently.
- **Concepts:** CREATE versus MERGE and upsert semantics (the most common beginner trap); SET and REMOVE; DELETE and DETACH DELETE; uniqueness constraints and node keys; indexes; query parameters and why they matter for performance and safety.
- **Hands-on:** make ingestion idempotent so re-running does not duplicate data; add constraints and indexes.
- **Banking application:** safely upsert customers and accounts keyed by a natural identifier.
- **Success criteria:** can write idempotent writes and protect the model with constraints.
- **Constructs:** `MERGE`, `ON CREATE SET`, `ON MATCH SET`, `SET`, `REMOVE`, `DELETE`, `DETACH DELETE`, `CREATE CONSTRAINT`, `CREATE INDEX`, parameters.

### [Lesson 4: Data modeling for graphs](lesson-04-data-modeling.md)
- **Status:** complete.
- **Objectives:** turn a domain into a sound graph model.
- **Concepts:** the modeling questions (node versus property versus relationship); when to reify a relationship into a node, for example a Transaction as a node rather than an edge; modeling time, hierarchies, and many-to-many; refactoring an existing model; mapping a relational schema to a graph.
- **Hands-on:** evolve the banking model into a fraud-ready and customer-360-ready shape.
- **Banking application:** a model that supports rings, layering, and grounded questions.
- **Success criteria:** can justify modeling choices against the questions the graph must answer.
- **Constructs:** modeling patterns, schema refactoring with Cypher and APOC.

### [Lesson 5: Loading real data](lesson-05-loading-real-data.md)
- **Status:** complete.
- **Objectives:** get realistic volumes of data into the graph cleanly.
- **Concepts:** LOAD CSV with batching; bulk import with neo4j-admin for large initial loads; APOC for loading and transformation; data cleaning and type handling.
- **Hands-on:** generate and load a synthetic banking dataset large enough for meaningful algorithms.
- **Banking application:** the working dataset used by lessons 6 through 11.
- **Success criteria:** can load, validate, and index a non-trivial dataset.
- **Constructs:** `LOAD CSV`, `CALL ... IN TRANSACTIONS`, neo4j-admin import, APOC load procedures.

### [Lesson 6: Python integration with the official driver](lesson-06-python-driver.md)
- **Status:** complete.
- **Objectives:** operate the graph from Python the way an application would.
- **Concepts:** the driver and sessions; managed transaction functions versus explicit transactions; parameterized queries; consuming records; connection pooling; error handling and retries; an introduction to async.
- **Hands-on:** build a small Python module that reads and writes the banking graph.
- **Banking application:** a reusable data-access layer.
- **Success criteria:** can run safe, parameterized reads and writes from Python with proper transaction handling.
- **Constructs:** `GraphDatabase.driver`, `session`, `execute_read`, `execute_write`, parameters, result consumption.

### [Lesson 7: Graph algorithms with GDS](lesson-07-graph-algorithms-gds.md)
- **Status:** complete.
- **Objectives:** compute structure and insight that queries alone cannot.
- **Concepts:** graph projections and the catalog; centrality (PageRank, betweenness); community detection (Louvain, label propagation, weakly connected components); similarity (node similarity, K nearest neighbors); pathfinding; node embeddings (FastRP, node2vec) as the bridge to vectors.
- **Hands-on:** detect communities and rank influential accounts.
- **Banking application:** surface candidate fraud rings and central mule accounts.
- **Success criteria:** can project a graph, run an algorithm, and interpret the result.
- **Constructs:** `gds.graph.project`, `gds.pageRank`, `gds.louvain`, `gds.nodeSimilarity`, embedding procedures.

### [Lesson 8: Vectors and the semantic layer](lesson-08-vectors-semantic-layer.md)
- **Status:** complete.
- **Objectives:** add semantic similarity to the graph.
- **Concepts:** what embeddings are; creating vector indexes in Neo4j; storing Gemini embeddings on nodes; vector similarity queries; combining vector search with graph traversal for hybrid retrieval.
- **Hands-on:** embed text on nodes with the Gemini API and query by similarity, then enrich results by traversal.
- **Banking application:** semantic search over customer notes and product or policy text, enriched with related accounts and transactions.
- **Success criteria:** can build a vector index, populate it, and run a hybrid query.
- **Constructs:** vector index creation, vector query procedures, Gemini embeddings via google-genai.

### [Lesson 9: GraphRAG I, building the knowledge graph](lesson-09-graphrag-build.md)
- **Status:** complete.
- **Objectives:** turn unstructured text into a knowledge graph.
- **Concepts:** entity and relationship extraction with an LLM; schema-guided extraction to keep the graph clean; the neo4j-graphrag knowledge-graph builder pipeline; the LLM Knowledge Graph Builder tool.
- **Hands-on:** build a knowledge graph from a set of banking documents.
- **Banking application:** a knowledge graph of products, policies, entities, and their relationships.
- **Success criteria:** can construct a usable knowledge graph from documents with a defined schema.
- **Constructs:** neo4j-graphrag pipeline components, schema definition, Gemini extraction.

### [Lesson 10: GraphRAG II, retrieval and grounding](lesson-10-graphrag-retrieval.md)
- **Status:** complete.
- **Objectives:** answer grounded, explainable, multi-hop questions.
- **Concepts:** retriever types (vector, vector plus Cypher, text-to-Cypher, hybrid); assembling a GraphRAG pipeline with Gemini; grounding answers in retrieved subgraphs; evaluation, guardrails, and returning citations for explainability.
- **Hands-on:** build a banking question-answering pipeline that grounds answers in the graph.
- **Banking application:** trustworthy answers about a customer, including the path of facts that support them.
- **Success criteria:** can return a grounded answer with the supporting evidence.
- **Constructs:** neo4j-graphrag retrievers and the GraphRAG class, Gemini generation.

### [Lesson 11: The agentic layer with ADK and MCP](lesson-11-agentic-layer-adk-mcp.md)
- **Status:** complete.
- **Objectives:** expose the graph to an agent as a context and memory layer.
- **Concepts:** wiring Neo4j to a Google ADK agent through the official MCP server or MCP Toolbox; designing pre-validated query tools rather than open-ended Cypher; text-to-Cypher as a controlled tool; persistent agent memory with neo4j-agent-memory and the preload-memory pattern; multi-agent orchestration; least-privilege read access for agents.
- **Hands-on:** build a banking context-layer agent that retrieves grounded context and remembers across sessions.
- **Banking application:** an agent that answers customer questions with graph-grounded, explainable context and persistent memory.
- **Success criteria:** can run an ADK agent that queries the graph through MCP and persists memory.
- **Constructs:** ADK agent and tool definitions, McpToolset, MCP server configuration, neo4j-agent-memory.

### [Lesson 12: From laptop to enterprise](lesson-12-laptop-to-enterprise.md)
- **Status:** complete.
- **Objectives:** understand what changes when this becomes a production enterprise system.
- **Concepts:** Community versus Enterprise (role-based access control, multiple databases, clustering, hot backups, security); production concerns (authentication, least-privilege users for agents, read-only roles, query timeouts, observability, auditability); scaling and the managed Aura option; data governance; the reference architecture for an enterprise agentic context layer; how the banking patterns generalize to other relational-heavy domains such as utilities.
- **Hands-on:** harden the project and sketch the enterprise reference architecture.
- **Banking application:** the path from a laptop prototype to a governed enterprise deployment.
- **Success criteria:** can articulate the enterprise architecture and the controls a production context layer requires.
- **Constructs:** security and operations configuration, architecture design.

### [Lesson 13: Capstone, the banking context-layer agent](capstone-banking-context-agent.md)
- **Status:** complete.
- **Objectives:** assemble the twelve lessons into one runnable banking context-layer agent and use it as a durable reference for the whole arc.
- **Concepts:** integration of the graph model, ingestion, GDS, vector indexes, GraphRAG retrieval on Gemini, and a Google ADK agent reaching the graph through MCP, with persistent memory and least-privilege read access; how the pieces fit and why.
- **Hands-on:** stand up the end-to-end project, answer grounded multi-hop questions, and return the supporting path of facts as explanation.
- **Banking application:** the concrete artifact that demonstrates the enterprise pattern at laptop scale.
- **Success criteria:** can run the full stack and explain each layer's role in the context-layer architecture.
- **Constructs:** project assembly, end-to-end wiring across all prior lessons.

---

## 5. Capstone

The [banking context-layer agent capstone](capstone-banking-context-agent.md) combines the whole stack: a graph model with realistic data, node embeddings and vector indexes, a GraphRAG retrieval pipeline on Gemini, and a Google ADK agent reaching the graph through MCP, with persistent memory and least-privilege read access. The agent answers grounded, multi-hop questions and returns the supporting path of facts as its explanation. This is the concrete artifact that demonstrates the enterprise pattern at laptop scale.

---

## 6. Expansion and going further

**Structured courses.** Neo4j GraphAcademy offers free, hands-on courses across fundamentals, Cypher, data modeling, GDS, and GenAI, with a recognized professional certification path.

**Books.** Graph Databases (O'Reilly), Graph Algorithms (O'Reilly), and Building Knowledge Graphs (O'Reilly) are the standard references and pair well with this course.

**Communities.** The Neo4j community forum and the Neo4j Discord are active places for questions, patterns, and review.

**Advanced topics to pursue later.** Temporal and versioned graphs; ontologies and the contrast between labeled property graphs and RDF; knowledge-graph construction at scale; current GraphRAG research and retrieval patterns; agent memory architectures; and graph-native machine learning.

**Enterprise direction.** Managed Aura, governance and RBAC, agentic GraphRAG through MCP endpoints, and integration with a wider context layer that also includes a document store and a general vector store. Keep the framing from Lesson 1: Neo4j is the knowledge and memory spine, not the whole context layer.

**Project ideas to reinforce.** A personal knowledge graph of your own notes and reading; a domain knowledge graph in a field you know well; and a small multi-agent system where one agent reasons over the graph while another manages memory.

---

## 7. Progress tracker

| Lesson | Title | Status |
| --- | --- | --- |
| 1 | Origins and foundations | Complete |
| 2 | Cypher fluency I, reading graphs | Complete |
| 3 | Cypher fluency II, writing and integrity | Complete |
| 4 | Data modeling for graphs | Complete |
| 5 | Loading real data | Complete |
| 6 | Python integration with the official driver | Complete |
| 7 | Graph algorithms with GDS | Complete |
| 8 | Vectors and the semantic layer | Complete |
| 9 | GraphRAG I, building the knowledge graph | Complete |
| 10 | GraphRAG II, retrieval and grounding | Complete |
| 11 | The agentic layer with ADK and MCP | Complete |
| 12 | From laptop to enterprise | Complete |
| 13 | Capstone, the banking context-layer agent | Complete |

**Changelog.**
- Lesson 1 delivered: history, significance, property graph model, first queries.
- Blueprint created as the reference for all subsequent lessons.
- Lesson 2 delivered.
- Environment pinned to Neo4j 5.26 LTS: Cypher 5, vector index procedures for Lesson 8, Enterprise features deferred to Lesson 12.
- Lesson 3 delivered: MERGE and upsert semantics, SET and REMOVE, DELETE and DETACH DELETE, constraints, indexes, and parameters; banking ingestion made idempotent.
- Lesson 4 delivered: graph modeling questions, reifying relationships into nodes, modeling time and hierarchies, schema refactoring; banking model evolved for fraud and customer 360.
- Lesson 5 delivered: loading real data with LOAD CSV, batched transactions, neo4j-admin import, and APOC; synthetic banking dataset prepared for the algorithms and vectors arc.
- Lesson 6 delivered: Python integration with the official driver, sessions and managed transactions, parameterized reads and writes, error handling and retries; reusable banking data-access layer.
- Lesson 7 delivered: Graph Data Science projections and catalog, centrality, community detection, similarity, pathfinding, and node embeddings; fraud rings and central mule accounts surfaced on the banking graph.
- Lesson 8 delivered: vectors and the semantic layer, Gemini embeddings on nodes, Neo4j vector indexes, vector queries combined with graph traversal for hybrid retrieval over banking notes and policy text.
- Lesson 9 delivered: GraphRAG I, schema-guided entity and relationship extraction with the neo4j-graphrag knowledge-graph builder; banking knowledge graph constructed from policy and product documents.
- Lesson 10 delivered: GraphRAG II, retriever types and pipeline assembly with Gemini, grounded answers with citations and the supporting subgraph; banking question-answering pipeline producing explainable responses.
- Lesson 11 delivered: the agentic layer with Google ADK and MCP, pre-validated query tools, controlled text-to-Cypher, persistent agent memory with neo4j-agent-memory, and least-privilege read access; banking context-layer agent reaching the graph through MCP.
- Lesson 12 delivered: from laptop to enterprise, Community versus Enterprise boundary, RBAC and least-privilege agent users, query timeouts and observability, managed Aura, and the reference architecture for an enterprise agentic context layer; capstone arc complete.
- Lesson 13 delivered: the banking context-layer agent capstone, assembling the graph model, ingestion, GDS, vector indexes, GraphRAG on Gemini, and the ADK + MCP agent with persistent memory into one runnable end-to-end project.
