# Lesson 1: Origins and Foundations

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Neo4j 5.26 LTS installed and runnable
**Split:** concept-heavy by design, with a hands-on first graph at the end
**Purpose of this file:** a durable reference for why Neo4j exists, how it evolved, why it matters now, and the foundational model everything else in the course builds on.

---

## Objectives

By the end of this lesson you will be able to:
1. Explain the white space that graph databases filled, and why relational databases strain on connected data.
2. Recount the history of Neo4j and the lineage of its query language through to the ISO standard.
3. Articulate why graphs are strategically significant today, especially for AI and for an enterprise context layer.
4. Describe the property graph model and its four building blocks.
5. Explain index-free adjacency and why graph traversal stays cheap as data grows.
6. Start the server, open the Browser, and write your first CREATE and MATCH queries in both a neutral and a banking frame.

---

## Part 1: The white space, why graph databases exist

### The relational assumption

For roughly four decades the relational database was the default way to store almost everything. Its model is tables of rows and columns, with relationships represented indirectly through shared keys. To answer a question that spans tables, you write a JOIN, and the database matches rows across tables at query time. This model is excellent when data is naturally tabular and when relationships are shallow and regular. It powered a generation of business systems and it remains the right tool for a great deal of work.

The strain appears when the relationships between things become the most important part of the data. A relational database does not store a relationship as a thing you can hold. It infers a relationship by matching values when you ask. The more relationships you chain together, the more matching work the database performs.

### The impedance mismatch

Two mismatches are worth naming.

The first is the object-relational impedance mismatch, familiar to any application developer: the objects in your code, with their references to one another, do not map cleanly onto flat tables, so a translation layer is always required.

The second, and the one that matters here, is the connected-data mismatch. Real domains are webs, not grids. A document links to an author, the author links to an organization, the organization links to projects, and the projects link onward. Each time you introduce a new kind of connection in a relational schema, you add or alter tables, and the schema grows rigid and brittle. The shape of the data in the world and the shape of the data on disk pull apart.

### The cost of JOINs on connected data

Consider a concrete question: find the friends of the friends of the friends of a given person. In a relational database, friendship typically lives in a join table with two columns of person identifiers. Answering the three-hop question means joining that table to itself three times. Each join is a set operation whose cost scales with the size of the table, which grows as the whole population grows. The work you do is governed by how much data exists in total, not by the small neighbourhood you actually care about. Add a fourth or fifth hop and the query plan multiplies into something slow and memory-hungry. This is not a tuning problem that disappears with a better index. It is structural, because the relationship was never stored, only computed.

A native graph database inverts this. It stores the relationship directly, as a connection from one record to another. Answering the same three-hop question means starting at the person and stepping along their stored connections, then the next, then the next. The work is governed by how many friends are actually traversed, not by the size of the database. This is the difference that justifies the existence of an entire category of database, and practitioners report order-of-magnitude and sometimes far larger speedups on this kind of connected-data operation.

### Where graphs sit in the NoSQL landscape

Neo4j emerged during the NoSQL wave of the late 2000s, when developers reached for alternatives to the relational default for specific shapes of problem: key-value stores for simple high-speed lookups, document stores for nested records, wide-column stores for very large tabular volumes, and graph databases for highly connected data. Of these families, graph databases sit at the most-connected end of the spectrum. Much of the rest of the NoSQL wave narrowed or faded as fashions changed. Graph databases endured, because the connected-data problem is permanent and is becoming more common, not less.

---

## Part 2: The history and evolution of Neo4j

### The napkin on the flight to Mumbai

The origin is unusually well documented. Around 1999, Emil Eifrem was part of a roughly twenty-person Swedish startup, and a large share of the engineering team spent most of its time fighting the relational database rather than building the product. The team was building an enterprise content management system on top of a relational database, and the data they needed to model was deeply interconnected, with documents linked to authors, authors to organizations, and organizations to projects; every time they added a new kind of relationship, the schema broke. In 2000, on a flight to Mumbai, Eifrem sketched the concept for a graph database on the back of a napkin and quietly began building a prototype with Johan Svensson and Peter Neubauer. Friends at IIT Bombay contributed to that early property graph sketch.

The mental model behind the sketch is worth keeping. Eifrem describes a graph database as inspired by the human brain, which is a network of neurons connected by synapses, and the mathematical word for a network is a graph; rather than tables, the database uses nodes and the relationships between them. Relationships, in other words, are treated as first-class citizens of the model rather than as an afterthought inferred from matching keys.

### From prototype to company to standard

Eifrem, Svensson, and Neubauer had met in Sweden in the late 1990s as working engineers, and the trio spent years developing the technology; the company nearly ran out of money in 2009. Neo4j was founded in 2007 in Malmo, Sweden. Eifrem is credited with coining the term graph database, and he co-authored the O'Reilly book Graph Databases.

The query language matured alongside the engine. Cypher, the declarative language created within Neo4j in the early 2010s by Andres Taylor, let users describe the pattern they wanted in a readable, ASCII-art style and let the database work out how to find it. Neo4j then did something unusual for a commercial vendor: in October 2015 it opened the language through the openCypher project, and it spread to other systems. That openness culminated in a formal standard. The category Eifrem first drew on a napkin in 2000, the one he had to explain from scratch for years, is now treated as foundational infrastructure for artificial intelligence.

### Timeline

| Year | Milestone |
| --- | --- |
| 1999 to 2000 | Eifrem, as CTO of a Swedish startup building an enterprise content management system on a relational database, watches much of the team fight that database over connected data |
| 2000 | The property graph model is sketched on a napkin on a flight to Mumbai |
| Early 2000s | Eifrem, Johan Svensson, and Peter Neubauer build a prototype graph engine |
| 2007 | Neo Technology, the company behind Neo4j, is founded in Malmo, Sweden |
| 2010 | Neo4j 1.0 is released as open source |
| 2011 | Cypher, a declarative query language created by Andres Taylor, is introduced |
| 2013 | The O'Reilly book Graph Databases is published |
| 2015 | openCypher opens the language to the wider industry |
| 2020 | The managed cloud service, Neo4j Aura, launches |
| 2021 | A 325 million dollar Series F closes, the largest funding round in database history at the time |
| 2022 | Neo4j 5.0 is released in October |
| 2023 | Native vector search is added, aligning the database with the generative AI wave |
| April 2024 | GQL becomes an ISO standard, the first new ISO database query language standard since SQL |
| December 2024 | Neo4j 5.26 LTS is released, the final 5.x version, supported through June 2028 |
| 2025 | Calendar versioning begins with 2025.01, and Cypher 25 is introduced in 2025.06 |

### Scale and the language standard

Two facts anchor where Neo4j stands. On scale of conviction, Neo4j has raised roughly 581 million dollars, including a 325 million dollar Series F in 2021 that was the largest in database history. On the language, GQL was published as ISO/IEC 39075 in April 2024 and is widely described as the first new ISO database query language standard since SQL, with Cypher as its primary ancestor. The practical message for a learner is that Cypher is not a vendor dialect that might disappear. It is the basis of an international standard.

---

## Part 3: Significance today

### Connected data is everywhere

The use cases that suit graphs are now mainstream: fraud detection, real-time recommendation, supply-chain and network analysis, identity and access management, and knowledge graphs. Each is a problem where the value lives in the connections, not only in the records.

### The AI turn

The sharper reason graphs matter now is artificial intelligence. Large language models are fluent but ungrounded. They hold facts in isolation rather than in context, which is one reason they hallucinate and cannot reliably explain why an answer is true. The remedy is a knowledge graph, a structured map of entities and their relationships that an AI can query before it answers, and Neo4j calls its version of this pattern GraphRAG, which retrieves from a knowledge graph rather than from a flat vector store. One enterprise benchmark found that grounding a language model in a knowledge graph improved question-answering accuracy roughly threefold across a set of business questions. Neo4j leaned into this directly by adding native vector search in 2023, so a single system can combine semantic similarity with relationship traversal.

### The enterprise context layer

This connects to the destination of this course. The pattern an enterprise builds to make its existing systems intelligent has three parts: an ontology that states what the business means by a Customer, a contract, an asset, and how they relate; a context fabric that resolves a question at runtime by traversing relationships and pulling the right data from the right systems; and a set of thin wrappers, typically built on the Model Context Protocol, that expose existing systems to agents without replacing them. GraphRAG is the most influential reference architecture for the context fabric. Neo4j is well suited to the knowledge and memory parts of this layer: it holds the entities and relationships, it grounds answers in a traceable subgraph, and it can store an agent's memory across sessions. Keep the framing precise: Neo4j is the knowledge and memory spine of the context layer, not the entire layer, which in production also includes a document store and a general vector store. Everything you learn in this course is a step toward being able to design and build that spine.

---

## Part 4: The property graph model

This is the foundation. The model has exactly four building blocks, and that is the whole vocabulary.

### The four building blocks

- **Nodes.** The entities, the things in your domain. A Customer, an Account, a Merchant, a Transaction. Drawn as circles.
- **Relationships.** The connections between nodes. Every relationship has a direction, meaning a start node and an end node, and a type, meaning a name such as `OWNS` or `SENT_TO`. Drawn as arrows. A relationship always has exactly one start and one end, and it can be traversed in either direction at query time regardless of how it was stored.
- **Properties.** Key-value pairs that store data. Crucially, properties live on nodes and on relationships alike. A Customer node might carry `{name: 'Asha', risk: 'low'}`. A `SENT_TO` relationship might carry `{amount: 5000, date: '2026-05-30'}`. The ability of a relationship to hold data is a quiet superpower, because the facts about a connection live on the connection itself.
- **Labels.** Tags that group nodes into categories, such as `:Customer` or `:Account`. A node can carry more than one label, which is useful for roles and cross-cutting categories, for example a node that is both a `:Customer` and a `:VIP`.

There are no tables, no foreign keys, and no join tables. The data model is the picture you would draw on a whiteboard.

### Mapping from relational thinking

If you are coming from relational databases, this rough mapping helps the translation.

| Relational concept | Property graph equivalent |
| --- | --- |
| Table | A label, the category of a set of nodes |
| Row | A node |
| Column value | A property on a node |
| Foreign key or join table | A relationship, stored directly |
| JOIN at query time | A traversal along stored relationships |
| Schema defined up front | Schema-optional, with constraints added when you want them |

### Index-free adjacency, the mechanism that matters

This is the single most important concept in the lesson, so it is worth stating three ways.

Conceptually, a native graph database stores each node together with direct references to its relationships, and each relationship with direct references to the nodes at its ends. The connections are physical pointers in storage, not values to be matched. Traversing from one node to its neighbour is therefore a matter of following a pointer.

Intuitively, picture finding a friend of a friend. In a relational database you go to a central index or table and look up matches, and the lookup cost rises as that table grows with the whole population. In a graph you stand on a node and walk along the arrows attached to it. The cost of each step depends only on the local fan-out, how many relationships that particular node has, and not on how large the database is overall. This is why deep traversals, three or four or five hops, stay fast in a graph and tend to blow up in SQL.

Concretely, this means that a query like detecting a chain of transfers across several accounts, or finding shared counterparties two hops away, runs in time proportional to the part of the graph you actually touch. As the total dataset grows from thousands to millions of nodes, a local traversal does not slow down in the way an equivalent multi-join query does. This property, called index-free adjacency, is what people mean when they say Neo4j is a native graph database rather than a graph layer bolted onto another engine.

### The whiteboard is the database

A useful working intuition: when you sketch a domain on a whiteboard, circles for things and labelled arrows for how they relate, you have already drawn a property graph. In a relational world you would then translate that drawing into tables and lose the shape. In Neo4j you store the drawing as it is, so the model in your head and the model on disk are the same thing. This is why graph modeling feels natural once it clicks, and it is the skill this course is quietly building alongside the tool.

### Two notes for later

First, the model you are learning is formally called a labeled property graph, or LPG. There is another graph model, RDF, used heavily in the semantic web and in formal ontologies, which represents data as subject-predicate-object triples. LPG and RDF make different trade-offs, and the contrast becomes relevant when ontologies enter the picture. This course uses the LPG model throughout, and the contrast is flagged as an advanced topic in the blueprint.

Second, the property graph is schema-optional. You can begin creating nodes and relationships immediately, with no schema declared in advance, which is what makes early exploration fast. When you want guarantees, you add uniqueness constraints and indexes, which is the subject of Lesson 3.

---

## Part 5: Concrete hands-on, your first graph

### Start the server and open the Browser

```
./bin/neo4j start
./bin/neo4j version
```

Open the Neo4j Browser at http://localhost:7474. Connect with the default username `neo4j` and the default password `neo4j`. You will be required to set a new password on first connect. The Browser talks to the database over the Bolt protocol at bolt://localhost:7687, which is the same endpoint the Python driver and the agent tooling will use later.

A short orientation. The bar at the top is where you type Cypher and run it. Commands that begin with a colon are Browser commands rather than Cypher: `:help` opens help, `:play start` opens an interactive guide, and `:clear` clears the result frames. Query results can be viewed as a visual graph or as a table, and you switch between those views on the left edge of each result frame.

### A first neutral graph

Create three people and the relationships between them, then look at the visual.

```cypher
CREATE (asha:Person {name: 'Asha'})
CREATE (ben:Person {name: 'Ben'})
CREATE (chen:Person {name: 'Chen'})
CREATE (asha)-[:KNOWS {since: 2021}]->(ben)
CREATE (ben)-[:KNOWS {since: 2022}]->(chen)
RETURN asha, ben, chen;
```

You have created three nodes, two typed-and-dated relationships, and seen the graph render. Now read it back with a pattern query, which is the heart of Cypher.

```cypher
MATCH (p:Person)-[r:KNOWS]->(friend:Person)
RETURN p.name AS person, r.since AS since, friend.name AS knows;
```

Notice that the MATCH line is a drawing of the thing you are searching for, written in text: a `Person`, an arrow `KNOWS`, another `Person`. The database finds every place in the graph that fits that shape.

You can return whole nodes or just properties. Returning whole nodes gives you the visual; returning properties gives you a table:

```cypher
MATCH (p:Person)
RETURN p;
```

```cypher
MATCH (p:Person)
RETURN p.name AS name;
```

And you can already feel the traversal idea. Find a friend of a friend, a two-hop pattern:

```cypher
MATCH (start:Person {name: 'Asha'})-[:KNOWS]->()-[:KNOWS]->(foaf:Person)
RETURN foaf.name AS friendOfFriend;
```

This should return Chen, reached from Asha through Ben. That is a two-hop traversal, and the same idea extended is how the course will later trace transfer chains and detect rings.

### The same shapes in a banking frame

The applied thread of this course is banking, so create a minimal banking graph using the same three building blocks. Lesson 2 seeds a larger dataset; here the goal is only to practise CREATE and MATCH.

```cypher
CREATE (c:Customer {name: 'Asha', risk: 'low'})
CREATE (a:Account {id: 'a_asha', iban: 'GB00-0001', balance: 4200})
CREATE (m:Merchant {name: 'CloudMart'})
CREATE (c)-[:OWNS]->(a)
CREATE (a)-[:SENT_TO {amount: 5000, date: '2026-05-30'}]->(m)
RETURN c, a, m;
```

Then ask a question of it:

```cypher
MATCH (c:Customer)-[:OWNS]->(a:Account)-[t:SENT_TO]->(m:Merchant)
RETURN c.name AS customer, t.amount AS amount, m.name AS merchant;
```

You have just expressed, as a single readable pattern, a fact that would require joining three tables in a relational database: a customer, the account they own, and the merchant that account paid.

### Pattern syntax reference

The building blocks of Cypher patterns, for quick recall:

- A node is written in parentheses: `(variable:Label {property: value})`. The variable and the label and the properties are all optional.
- A relationship is written in square brackets between two nodes: `-[variable:TYPE {property: value}]->`.
- Direction is shown by the arrowhead: `-->` left to right, `<--` right to left, and `--` matches either direction when reading.
- Anything you do not need to name can be left anonymous: `()` for a node, `-[:TYPE]->` for a relationship.
- Multiple labels are chained: `(:Customer:VIP)`.
- A full pattern reads like a sentence: `(a:Customer)-[:OWNS]->(b:Account)`.

### Resetting

`CREATE` always adds new data, so running the same CREATE twice produces duplicates. That is expected at this stage, and Lesson 3 introduces MERGE to make writes idempotent. To wipe the database back to empty between experiments, use the following reset, which is labelled as a deliberate, destructive step. DETACH DELETE removes nodes together with their relationships, and it is covered properly in Lesson 3.

```cypher
MATCH (n) DETACH DELETE n;
```

---

## Part 6: Banking application, the arc this sets up

The tiny banking graph above is the seed of a model that will grow across the course. By the end you will use it to answer questions that matter in a real institution: which customers share a counterparty, how money moves through a chain of accounts in a layering pattern, what a full customer 360 looks like as a connected view, and how an agent can answer a grounded, multi-hop question about a customer and return the path of facts that supports the answer. The reason banking is the chosen thread is that it is a canonical graph domain, where the value is precisely in the relationships between customers, accounts, transactions, and counterparties.

---

## Your turn

Model and create a small scenario from scratch, then query it.

1. Create two customers, each owning one account.
2. Have both accounts send a payment to the same merchant.
3. Write a MATCH that returns both customers who paid that merchant.

Run it, then report back the queries you wrote and what the final MATCH returned. This is, in miniature, the shared-counterparty pattern that opens fraud analytics, and it leads directly into Lesson 2. A worked solution is at the very bottom of this file if you want to check after trying.

---

## Success criteria

You have met the goal of this lesson when you can:
- Explain, in your own words, why a deep traversal stays cheap in a graph and grows expensive in a relational database.
- Name the four building blocks of the property graph model and give a banking example of each.
- Map a relational concept, such as a join table, to its graph equivalent.
- Write a CREATE that builds a small pattern and a MATCH that reads it back.

---

## New constructs introduced

- `CREATE` to add nodes and relationships.
- `MATCH` to find a pattern, and `RETURN` to produce output.
- Node and relationship pattern syntax, including labels, types, properties, and direction.
- Anonymous nodes and relationships.
- `DETACH DELETE`, used here only as a labelled reset.
- The Neo4j Browser and the Bolt endpoint.

---

## Appendix A: Key terms

- **Node.** An entity in the graph, drawn as a circle.
- **Relationship.** A directed, typed connection between two nodes, drawn as an arrow, able to carry properties.
- **Property.** A key-value pair stored on a node or a relationship.
- **Label.** A tag that groups nodes into a category. A node may have several.
- **Traversal.** Moving from a node to a connected node by following relationships.
- **Index-free adjacency.** The storage design in which relationships are direct pointers, so traversal cost depends on the local neighbourhood rather than the total size of the database.
- **Native graph database.** A database that stores and processes data as a graph at the storage level, rather than emulating a graph on top of another engine.
- **Property graph, or labeled property graph (LPG).** The data model of nodes, relationships, properties, and labels used by Neo4j.
- **RDF.** An alternative graph model based on subject-predicate-object triples, common in the semantic web and formal ontologies.
- **Cypher.** Neo4j's declarative query language, the primary ancestor of the ISO GQL standard.
- **Bolt.** The binary protocol that drivers and tools use to talk to Neo4j, on port 7687 by default.
- **Knowledge graph.** A graph of entities and their relationships used as a structured source of meaning, including as grounding for AI.
- **GraphRAG.** Retrieval-augmented generation that retrieves from a knowledge graph, often combined with vector search, rather than from a flat vector store alone.
- **Impedance mismatch.** The gap between the shape of data in the world or in code and the shape imposed by tables.

---

## Appendix B: Further reading for this lesson

- Graph Databases, by Ian Robinson, Jim Webber, and Emil Eifrem, published by O'Reilly and available free from Neo4j. The early chapters cover the property graph model and the motivation in depth.
- Neo4j GraphAcademy, the free official learning platform. The Neo4j Fundamentals course matches the ground covered here.
- The GQL standard, ISO/IEC 39075:2024, for readers who want to see the formal lineage of Cypher.

---

## Solution to the your-turn task

```cypher
CREATE (c1:Customer {name: 'Asha'})
CREATE (c2:Customer {name: 'Ben'})
CREATE (a1:Account {id: 'a_asha'})
CREATE (a2:Account {id: 'a_ben'})
CREATE (m:Merchant {name: 'CloudMart'})
CREATE (c1)-[:OWNS]->(a1)
CREATE (c2)-[:OWNS]->(a2)
CREATE (a1)-[:SENT_TO {amount: 1200}]->(m)
CREATE (a2)-[:SENT_TO {amount: 800}]->(m)
RETURN c1, c2, a1, a2, m;
```

```cypher
MATCH (c:Customer)-[:OWNS]->(:Account)-[:SENT_TO]->(m:Merchant {name: 'CloudMart'})
RETURN c.name AS customer, m.name AS sharedMerchant;
```

The MATCH returns Asha and Ben, the two customers who paid the same merchant. This is the seed of shared-counterparty detection, which Lesson 2 develops into aggregated, multi-hop fraud signals.
