# Lesson 8: Vectors and the Semantic Layer

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Lesson 6 (Python driver) and Lesson 5 (the banking dataset)
**Stack note:** embeddings come from the Gemini API via the google-genai SDK, on your Neo4j 5.26 install
**Split:** roughly half concept, half hands-on
**Purpose of this file:** a durable reference for adding semantic similarity to the graph, and for combining vector search with traversal, which is the foundation of GraphRAG in Lessons 9 and 10.

---

## Objectives

By the end of this lesson you will be able to:
1. Explain what an embedding is, conceptually and intuitively.
2. Get embeddings from Gemini with the google-genai SDK.
3. Create a vector index in Neo4j 5.26 and store embeddings on nodes.
4. Query nodes by semantic similarity.
5. Combine vector search with graph traversal for hybrid retrieval.
6. See clearly how this sets up the GraphRAG work that follows.

---

## Part 1: What an embedding is

An embedding is a list of numbers, a vector, that represents the meaning of a piece of text. A model reads text and places it as a point in a high-dimensional space, arranged so that text with similar meaning sits close together and text with different meaning sits far apart. Distance in that space is a proxy for difference in meaning.

```
Text                          Vector (a point in space)
"lost my card, possible fraud"  -> [ 0.12, -0.04, 0.31, ... ]  --+
"unauthorized charges on my account" -> [ 0.11, -0.05, 0.29, ... ] --+-- close: similar meaning
"requesting a mortgage rate quote"   -> [-0.21,  0.30, 0.02, ... ] -------- far: different meaning
```

This is why semantic search beats keyword search. A keyword search for "fraud" misses a note that says "someone used my card without permission." A semantic search finds it, because the two notes land near each other in the space regardless of shared words. The intuition to hold: an embedding turns meaning into a location, and similarity into nearness.

---

## Part 2: Two kinds of vectors meet here

Lesson 7 produced structural embeddings with FastRP: a vector describing where a node sits in the graph. This lesson produces semantic embeddings: a vector describing what a node's text means. They are complementary.

- Structural similarity: two accounts that occupy similar positions in the transfer network.
- Semantic similarity: two customer notes that describe a similar situation.

The pattern that combines vector search with graph traversal is hybrid retrieval, and it is the seed of GraphRAG: use a vector to find a relevant entry point, then traverse the graph to gather the connected, grounded context around it. Vectors find what is relevant; the graph explains how it connects.

---

## Part 3: Getting embeddings from Gemini

Install the SDK and create a client. The current general-purpose embedding model is `gemini-embedding-001`.

```
pip install google-genai
```

```python
from google import genai
from google.genai import types
import math

# Reads the API key from the GEMINI_API_KEY or GOOGLE_API_KEY environment variable,
# or pass api_key="..." explicitly.
client = genai.Client()

EMBED_MODEL = "gemini-embedding-001"
DIMS = 768          # gemini-embedding-001 defaults to 3072; 768 is a good laptop choice

def l2_normalize(vec):
    norm = math.sqrt(sum(x * x for x in vec))
    return [x / norm for x in vec] if norm else vec

def embed(text, task_type):
    resp = client.models.embed_content(
        model=EMBED_MODEL,
        contents=text,
        config=types.EmbedContentConfig(
            task_type=task_type,           # see note below
            output_dimensionality=DIMS,
        ),
    )
    values = resp.embeddings[0].values
    return l2_normalize(values)
```

Two details matter.

First, `task_type`. Tell the model how the embedding will be used, which improves retrieval quality. Use `RETRIEVAL_DOCUMENT` for text you store and index, and `RETRIEVAL_QUERY` for the search text a user types. The stored documents and the query are embedded with matching intent.

Second, dimensions and normalization. `gemini-embedding-001` returns 3072 numbers by default and supports reducing that with `output_dimensionality`; 768, 1536, or 3072 are the recommended sizes. When you reduce below 3072, this model does not automatically rescale the vector, so normalizing it yourself is good practice. Cosine similarity is scale-invariant, so a cosine index works either way, but normalizing keeps quality high and keeps your options open. The number you choose here must match the vector index exactly, which is the next step.

---

## Part 4: Create a vector index in Neo4j 5.26

A vector index lets Neo4j find nearest vectors quickly. Create it on the property where the embedding will live, and set the dimension to match your embedding size and the similarity function to cosine, which is the usual choice for text.

```cypher
CREATE VECTOR INDEX customerNoteEmbeddings IF NOT EXISTS
FOR (c:Customer) ON (c.noteEmbedding)
OPTIONS {indexConfig: {
  `vector.dimensions`: 768,
  `vector.similarity_function`: 'cosine'
}};
```

The dimension, 768 here, must equal the `output_dimensionality` you used when embedding. A mismatch is the most common error in this lesson. The backticks around the option keys are required.

A version note for your install: on Neo4j 5.26 you query a vector index with the `db.index.vector.queryNodes` procedure, shown in Part 6. The newer in-Cypher `SEARCH` clause arrived only with the 2026 release line and is not available to you, which is exactly the boundary recorded in the blueprint.

Check the index is built and online before querying it at volume:

```cypher
SHOW INDEXES YIELD name, type, state WHERE type = 'VECTOR';
```

---

## Part 5: Store embeddings on nodes

First, give some customers text to embed. In a real bank these notes come from a CRM; for the exercise, set a handful of varied notes so semantic search is meaningful.

```cypher
MATCH (c:Customer {id:'C1'}) SET c.note = 'Reported a lost debit card and unauthorized online charges; requested urgent block.';
MATCH (c:Customer {id:'C2'}) SET c.note = 'Asked about fixed-rate mortgage options and early repayment fees.';
MATCH (c:Customer {id:'C3'}) SET c.note = 'Suspicious transactions appeared overnight; suspects card was cloned.';
MATCH (c:Customer {id:'C4'}) SET c.note = 'Updated home address after relocating; requested new cheque book.';
MATCH (c:Customer {id:'C5'}) SET c.note = 'Complained about a duplicate charge from an online retailer.';
```

Now embed each note in Python and store it. Use `db.create.setNodeVectorProperty`, which validates that the value is a proper vector. This reuses the driver pattern from Lesson 6.

```python
from neo4j import GraphDatabase

driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "your-password"))

def index_notes():
    # Read customers that have a note but no embedding yet
    records, _, _ = driver.execute_query(
        "MATCH (c:Customer) WHERE c.note IS NOT NULL AND c.noteEmbedding IS NULL "
        "RETURN c.id AS id, c.note AS note",
        database_="neo4j",
    )
    for r in records:
        vector = embed(r["note"], task_type="RETRIEVAL_DOCUMENT")
        driver.execute_query(
            "MATCH (c:Customer {id:$id}) "
            "CALL db.create.setNodeVectorProperty(c, 'noteEmbedding', $embedding)",
            id=r["id"], embedding=vector, database_="neo4j",
        )
    print(f"Embedded {len(records)} notes.")

index_notes()
```

This pattern, embed only the nodes that lack an embedding, is how you keep an index current incrementally as new text arrives.

---

## Part 6: Query by similarity

To search, embed the query text with `RETRIEVAL_QUERY`, then call the vector index procedure, which returns the nearest nodes and a similarity score.

```python
def semantic_search(query_text, k=3):
    query_vec = embed(query_text, task_type="RETRIEVAL_QUERY")
    records, _, _ = driver.execute_query(
        """
        CALL db.index.vector.queryNodes('customerNoteEmbeddings', $k, $queryVector)
        YIELD node, score
        RETURN node.id AS id, node.note AS note, score
        ORDER BY score DESC
        """,
        k=k, queryVector=query_vec, database_="neo4j",
    )
    return [r.data() for r in records]

for hit in semantic_search("customers worried about card fraud"):
    print(round(hit["score"], 3), hit["id"], hit["note"])
```

A search for card fraud should surface the lost-card and cloned-card notes ahead of the mortgage and address-change notes, even though none of them contain the exact phrase. That is meaning-based retrieval.

The procedure signature is `db.index.vector.queryNodes(indexName, numberOfNeighbours, queryVector)` and it yields `node` and `score`, where a higher cosine score means closer in meaning.

---

## Part 7: Hybrid retrieval, vector plus graph

This is the step that makes a graph database more than a vector store. After the vector search finds relevant customers, traverse from them to gather grounded, connected context. The vector picks the entry points; the graph supplies the facts around them.

```
query text -> embed -> query vector
                           |
                 vector index: nearest notes
                           |
                 entry-point Customers
                           |
                 traverse OWNS, PERFORMED, TO, HAS_ADDRESS
                           |
                 grounded context (accounts, transactions, shared addresses)
                           |
                 this is the seed of GraphRAG
```

In one query, find the customers whose notes match, then enrich each with their account activity:

```cypher
CALL db.index.vector.queryNodes('customerNoteEmbeddings', $k, $queryVector)
YIELD node AS c, score
OPTIONAL MATCH (c)-[:OWNS]->(a:Account)-[:PERFORMED]->(t:Transaction)
RETURN c.id AS customer, c.note AS note, score,
       count(t) AS transactionCount,
       coalesce(sum(t.amount), 0) AS totalOut
ORDER BY score DESC;
```

You can extend the traversal to anything in the model: shared addresses to spot linked identities, the merchants a flagged customer paid, or the transfer chains from Lesson 7. The semantic hit becomes the doorway into a precise, explainable subgraph.

---

## Part 8: A small end-to-end module

Wrap embedding, indexing, and hybrid search into one class. This is the deliverable, and it is the retrieval core that the GraphRAG pipeline in Lesson 10 formalizes.

```python
import math
from google import genai
from google.genai import types
from neo4j import GraphDatabase

class BankingSemanticLayer:
    EMBED_MODEL = "gemini-embedding-001"
    DIMS = 768

    def __init__(self, uri, user, password, database="neo4j"):
        self.client = genai.Client()
        self.driver = GraphDatabase.driver(uri, auth=(user, password))
        self.database = database

    def close(self):
        self.driver.close()

    @staticmethod
    def _normalize(v):
        n = math.sqrt(sum(x * x for x in v))
        return [x / n for x in v] if n else v

    def _embed(self, text, task_type):
        resp = self.client.models.embed_content(
            model=self.EMBED_MODEL,
            contents=text,
            config=types.EmbedContentConfig(task_type=task_type, output_dimensionality=self.DIMS),
        )
        return self._normalize(resp.embeddings[0].values)

    def index_notes(self):
        records, _, _ = self.driver.execute_query(
            "MATCH (c:Customer) WHERE c.note IS NOT NULL AND c.noteEmbedding IS NULL "
            "RETURN c.id AS id, c.note AS note",
            database_=self.database,
        )
        for r in records:
            vec = self._embed(r["note"], "RETRIEVAL_DOCUMENT")
            self.driver.execute_query(
                "MATCH (c:Customer {id:$id}) "
                "CALL db.create.setNodeVectorProperty(c, 'noteEmbedding', $e)",
                id=r["id"], e=vec, database_=self.database,
            )
        return len(records)

    def search(self, query_text, k=3):
        qv = self._embed(query_text, "RETRIEVAL_QUERY")
        records, _, _ = self.driver.execute_query(
            """
            CALL db.index.vector.queryNodes('customerNoteEmbeddings', $k, $qv)
            YIELD node AS c, score
            OPTIONAL MATCH (c)-[:OWNS]->(a:Account)-[:PERFORMED]->(t:Transaction)
            RETURN c.id AS customer, c.note AS note, score,
                   count(t) AS transactionCount, coalesce(sum(t.amount),0) AS totalOut
            ORDER BY score DESC
            """,
            k=k, qv=qv, database_=self.database,
        )
        return [r.data() for r in records]


if __name__ == "__main__":
    layer = BankingSemanticLayer("bolt://localhost:7687", "neo4j", "your-password")
    print("Embedded:", layer.index_notes())
    for hit in layer.search("customers worried about card fraud"):
        print(round(hit["score"], 3), hit["customer"], "txns:", hit["transactionCount"])
    layer.close()
```

---

## Banking application

Semantic search over customer notes, enriched by traversal, is a real context-layer capability. An agent asked which customers raised fraud concerns this month can retrieve the relevant notes by meaning, then ground its answer in each customer's accounts, transactions, and any shared identity signals, returning not just a match but the connected evidence. The same approach applies to product and policy text, which Lesson 9 turns into a full knowledge graph.

---

## Your turn

1. Set varied notes on five or more customers as in Part 5.
2. Create the `customerNoteEmbeddings` vector index with dimension 768 and cosine similarity, and confirm it is online.
3. In Python, embed the notes with `RETRIEVAL_DOCUMENT` and store them with `db.create.setNodeVectorProperty`.
4. Run a semantic search for a fraud-related query with `RETRIEVAL_QUERY` and confirm the fraud notes rank above the others.
5. Extend the search into a hybrid query that also returns each matched customer's transaction count and total outflow.

Report your notes, the search results with scores, and the hybrid output. A worked solution is the `BankingSemanticLayer` class in Part 8.

---

## Success criteria

You have met the goal of this lesson when you can:
- Explain an embedding as meaning turned into a location, and why semantic search beats keyword search.
- Get a Gemini embedding with the correct `task_type` and dimension.
- Create a vector index whose dimension matches the embedding, and store vectors with `db.create.setNodeVectorProperty`.
- Query the index with `db.index.vector.queryNodes` and read the scores.
- Write a hybrid query that traverses from a vector hit into grounded context.

---

## New constructs introduced

- google-genai: `genai.Client`, `client.models.embed_content`, `EmbedContentConfig`, `task_type`, `output_dimensionality`, `gemini-embedding-001`.
- `CREATE VECTOR INDEX ... OPTIONS {indexConfig: {`vector.dimensions`, `vector.similarity_function`}}`.
- `db.create.setNodeVectorProperty`, `db.index.vector.queryNodes`.
- Hybrid retrieval: a vector search feeding a graph traversal.

---

## Appendix: vector and embedding gotchas

- The vector index `vector.dimensions` must equal the embedding's `output_dimensionality`. Mismatch is the most common failure.
- Embed stored text with `RETRIEVAL_DOCUMENT` and queries with `RETRIEVAL_QUERY`.
- Normalize `gemini-embedding-001` vectors when reducing below 3072 dimensions; cosine tolerates it either way, but normalization preserves quality.
- Use `db.create.setNodeVectorProperty` rather than a plain `SET`, because it validates the vector.
- On 5.26 use the `db.index.vector.queryNodes` procedure; the `SEARCH` clause is 2026 and later.
- If you change embedding model or dimension, you must re-embed all existing text and rebuild the index; spaces from different models are not comparable.
- Embedding calls cost money and have rate limits; embed only nodes lacking an embedding, and batch where possible.
- The vector index updates as you write vectors; for large bulk loads, confirm the index state is online before relying on queries.
