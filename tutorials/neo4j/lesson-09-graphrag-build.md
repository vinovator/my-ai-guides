# Lesson 9: GraphRAG I, Building the Knowledge Graph

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Lesson 8 (embeddings and vector search) and Lesson 6 (Python driver)
**Stack note:** the official `neo4j-graphrag` package, with Gemini as the LLM and embedder
**Split:** roughly half concept, half hands-on
**Purpose of this file:** a durable reference for turning unstructured documents into a knowledge graph, the construction half of GraphRAG. Lesson 10 then retrieves from it.

---

## Objectives

By the end of this lesson you will be able to:
1. Explain what a knowledge graph adds over a pile of text chunks.
2. Configure Gemini as the LLM and embedder for the neo4j-graphrag package.
3. Define a schema that guides extraction and keeps the graph clean.
4. Run the SimpleKGPipeline to build a knowledge graph from banking documents.
5. Read and understand the lexical graph and entity graph it produces.

---

## Part 1: Why a knowledge graph, not just chunks

Ordinary retrieval-augmented generation splits documents into chunks, embeds them, and retrieves the chunks most similar to a question. That works for "find the passage that mentions X," but it cannot answer "which products are governed by the policy that this fee belongs to," because the relationships between facts were never captured. The text was stored; the meaning between the pieces was not.

A knowledge graph fixes this by extracting the entities and the relationships from the text and storing them as a graph. Now retrieval can do both things: find relevant passages by similarity, and traverse the relationships between the entities those passages mention. This is the structural advantage that makes GraphRAG more accurate than flat vector search, and it is exactly the context fabric an enterprise context layer needs.

GraphRAG has two halves. This lesson is construction: documents in, knowledge graph out. Lesson 10 is retrieval: question in, grounded answer out.

```
   This lesson (construction)              Lesson 10 (retrieval)
  documents --> knowledge graph   ===>   question --> grounded answer + evidence
```

---

## Part 2: Configure Gemini for neo4j-graphrag

Install the package with the extras you will use:

```
pip install "neo4j-graphrag[google,openai]"
```

The package ships LLM and embedder classes for several providers. Its first-class Google option is Vertex AI. The Gemini Developer API key you used in Lesson 8 is a different access path, and the package has no built-in class for it, so you wrap the SDK in a few lines. Both paths are shown; choose one and use the resulting `llm` and `embedder` everywhere below.

### Option A: Gemini Developer API key (the key from Lesson 8)

This reuses the API key you already have. For the LLM, point the package's OpenAI client at Gemini's OpenAI-compatible endpoint. For the embedder, wrap the google-genai SDK so you keep control of the dimension, consistent with Lesson 8.

```python
import os, math
from neo4j_graphrag.llm import OpenAILLM
from neo4j_graphrag.embeddings.base import Embedder
from google import genai
from google.genai import types

GEMINI_KEY = os.environ["GEMINI_API_KEY"]
GEMINI_OPENAI_BASE = "https://generativelanguage.googleapis.com/v1beta/openai/"

# LLM: a Gemini model served through the OpenAI-compatible API
llm = OpenAILLM(
    model_name="gemini-2.0-flash",
    api_key=GEMINI_KEY,
    base_url=GEMINI_OPENAI_BASE,
    model_params={"temperature": 0, "response_format": {"type": "json_object"}},
)

# Embedder: a small wrapper over google-genai (768 dimensions, normalized)
class GeminiEmbedder(Embedder):
    def __init__(self, model="gemini-embedding-001", dims=768):
        self.client = genai.Client(); self.model = model; self.dims = dims
    def embed_query(self, text, **kwargs):
        r = self.client.models.embed_content(
            model=self.model, contents=text,
            config=types.EmbedContentConfig(
                task_type="SEMANTIC_SIMILARITY", output_dimensionality=self.dims),
        )
        v = r.embeddings[0].values
        n = math.sqrt(sum(x * x for x in v))
        return [x / n for x in v] if n else v

embedder = GeminiEmbedder()
EMBED_DIMS = 768
```

The embedder uses `SEMANTIC_SIMILARITY` because the package calls one `embed_query` method both for chunks and for queries, so a symmetric task type is the right single choice. If your installed package version does not accept `base_url` on `OpenAILLM`, use Option B instead.

### Option B: Vertex AI (first-class, recommended for reliable extraction)

Vertex AI is the package's native Google path and supports structured output, which makes extraction cleaner and more reliable. It needs a Google Cloud project and credentials.

```python
from neo4j_graphrag.llm import VertexAILLM
from neo4j_graphrag.embeddings import VertexAIEmbeddings

# Requires: a GCP project, GOOGLE_CLOUD_PROJECT set, and
#   gcloud auth application-default login   (or a service account)
llm = VertexAILLM(model_name="gemini-2.0-flash-001", model_params={"temperature": 0})
embedder = VertexAIEmbeddings(model="text-embedding-005")
EMBED_DIMS = 768   # match to the embedding model's output dimension
```

The trade-off in one line: Option A is the lowest-friction path and reuses your key; Option B is first-class and gives structured extraction, at the cost of Google Cloud setup. The rest of this lesson is identical either way.

---

## Part 3: Define the extraction schema

Left unguided, an LLM will invent inconsistent labels: Company, Organisation, Org, Firm. A schema constrains extraction to the types you want, which keeps the graph clean and queryable. You give three things: the node types, the relationship types, and the patterns that say which relationships connect which node types.

For a set of banking product and policy documents, a reasonable schema:

```python
ENTITIES = [
    "Product",
    {"label": "Fee", "properties": [{"name": "amount", "type": "STRING"}]},
    {"label": "Policy", "description": "A bank policy or rule"},
    {"label": "Regulation", "description": "An external regulation or standard"},
    {"label": "Eligibility", "description": "A condition a customer must meet"},
    {"label": "RiskCategory", "description": "A risk classification"},
]

RELATIONS = [
    {"label": "HAS_FEE", "description": "A product charges a fee"},
    {"label": "GOVERNED_BY", "description": "A product is governed by a policy"},
    {"label": "REQUIRES", "description": "A product requires an eligibility condition"},
    {"label": "COMPLIES_WITH", "description": "A policy complies with a regulation"},
    {"label": "CARRIES_RISK", "description": "A product carries a risk category"},
]

# Patterns: which relationship connects which node types, and in which direction
POTENTIAL_SCHEMA = [
    ("Product", "HAS_FEE", "Fee"),
    ("Product", "GOVERNED_BY", "Policy"),
    ("Product", "REQUIRES", "Eligibility"),
    ("Policy",  "COMPLIES_WITH", "Regulation"),
    ("Product", "CARRIES_RISK", "RiskCategory"),
]
```

Each entity can be a plain string or a dict with a description and typed properties. The descriptions matter: they are given to the LLM and noticeably improve extraction accuracy. The patterns are the guardrails that stop the model from connecting things in ways your model does not allow.

---

## Part 4: Build the knowledge graph

The `SimpleKGPipeline` runs the whole construction: it splits the text into chunks, embeds each chunk, asks the LLM to extract entities and relationships under your schema, resolves duplicate entities, and writes everything to Neo4j.

```python
import asyncio
from neo4j import GraphDatabase
from neo4j_graphrag.experimental.pipeline.kg_builder import SimpleKGPipeline

driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "your-password"))

# Sample banking documents (in real use these are PDFs or files)
DOCS = [
    """The Premier Savings Account offers a tiered interest rate. It charges a monthly
       maintenance fee of 5 GBP, waived for balances above 5000 GBP. The account is
       governed by the Retail Deposits Policy and requires the customer to be a UK
       resident aged 18 or over.""",
    """The Retail Deposits Policy complies with the FCA Banking Conduct of Business
       rules. It classifies standard savings products as low risk. Accounts opened
       under this policy require identity verification under the Know Your Customer
       standard.""",
]

kg_builder = SimpleKGPipeline(
    llm=llm,
    driver=driver,
    embedder=embedder,
    entities=ENTITIES,
    relations=RELATIONS,
    potential_schema=POTENTIAL_SCHEMA,
    from_pdf=False,                # we are passing text, not a PDF
    perform_entity_resolution=True,
    on_error="IGNORE",
    neo4j_database="neo4j",
)

async def build():
    for doc in DOCS:
        result = await kg_builder.run_async(text=doc)
        print("Built:", result)

asyncio.run(build())
```

Notes that matter:
- `from_pdf=False` because the input is text. Set it to `True` and call `run_async(file_path="doc.pdf")` to ingest PDFs directly.
- `perform_entity_resolution=True` merges entities the LLM extracted more than once, for example the same policy named in two documents, into a single node.
- `on_error="IGNORE"` keeps the pipeline going if one chunk fails extraction; use `"RAISE"` while debugging.
- The pipeline is asynchronous, so it runs inside `asyncio.run`.

Recent package versions also accept a single `schema={"node_types": ..., "relationship_types": ..., "patterns": ...}` argument in place of `entities`, `relations`, and `potential_schema`; the three-argument form used here is supported and explicit.

---

## Part 5: What the pipeline produces

The build creates two interconnected graphs.

The **lexical graph** is the document structure: a node per document, a node per chunk, the chunk embeddings, and the order of chunks. The **entity graph** is the meaning: the Product, Policy, Fee, and other nodes the LLM extracted, connected by your relationship types. The two are linked, because each entity records which chunk it came from, which is what lets retrieval move from a matched passage to the connected facts and back to the source text.

```
Lexical graph (structure)                 Entity graph (meaning)
  (:Document)                               (:Product {name})
      ^                                        |   |   |
   FROM_DOCUMENT                            HAS_FEE GOVERNED_BY REQUIRES
      |                                        |   |       |
  (:Chunk {text, embedding})                (:Fee) (:Policy) (:Eligibility)
      |   ^                                          |
   NEXT_CHUNK |                                  COMPLIES_WITH
      v       |                                      |
  (:Chunk) ---+                                  (:Regulation)

         (:Product) -[:FROM_CHUNK]-> (:Chunk)   <-- the bridge between the two graphs
```

The bridge relationship, from an entity back to the chunk it was extracted from, is the key to explainability: when Lesson 10 answers a question, it can return both the connected facts and the exact source passage.

---

## Part 6: Inspect the result

Always look at what was built before trusting it. Count what was extracted, see the schema the data formed, and read a few entities with their source chunks.

```cypher
// What entity types were extracted, and how many of each
MATCH (n) WHERE NOT n:Document AND NOT n:Chunk
RETURN labels(n)[0] AS type, count(*) AS count ORDER BY count DESC;
```

```cypher
// The relationships the extraction produced
MATCH (a)-[r]->(b) WHERE NOT a:Chunk AND NOT b:Chunk AND NOT a:Document
RETURN type(r) AS rel, count(*) AS count ORDER BY count DESC;
```

```cypher
// A product, its fee and policy, and the source chunk that mentions the product
MATCH (p:Product)
OPTIONAL MATCH (p)-[:HAS_FEE]->(f:Fee)
OPTIONAL MATCH (p)-[:GOVERNED_BY]->(pol:Policy)
OPTIONAL MATCH (p)-[:FROM_CHUNK]->(c:Chunk)
RETURN p.name AS product, f.amount AS fee, pol.name AS policy, left(c.text, 80) AS source
LIMIT 10;
```

Use `CALL db.schema.visualization()` to see the model the extraction formed, and compare it to the schema you intended. If the LLM produced labels outside your schema or missed expected relationships, refine the entity descriptions and the patterns and rebuild; clear extracted data first with a labelled reset if needed.

The package can also create the vector index on the chunk embeddings for you, or you create it explicitly, which Lesson 10 does as its first step.

---

## Part 7: The LLM Knowledge Graph Builder, a no-code alternative

For exploration or for non-developers, Neo4j offers the LLM Knowledge Graph Builder, a hosted web application that does what this lesson does through a UI. It accepts PDFs, web pages, and other sources, supports Gemini among other models, lets you set the extraction schema and clean up afterwards, and writes the lexical and entity graphs into your Neo4j database. It is a fast way to prototype a schema before committing it to a Python pipeline, and it produces the same kind of graph you built here.

---

## Banking application

The knowledge graph you built is the product-and-policy backbone of the context layer. It lets an agent answer questions that span documents, such as which products are affected by a regulation, or what eligibility a product requires and which policy mandates it, with the answer grounded in the documents and traceable to the exact source passage. Combined with the operational graph from Lessons 5 through 8, customers, accounts, and transactions, it gives an agent both the institutional knowledge and the live data it needs.

---

## Your turn

1. Install `neo4j-graphrag` and configure Gemini using Option A or Option B.
2. Define the banking schema from Part 3, adding at least one node type and one relationship type of your own.
3. Build a knowledge graph from the sample documents, plus one or two banking paragraphs you write yourself.
4. Inspect: report the entity types and counts, the relationship counts, and one product with its fee, policy, and source chunk.
5. If extraction looks messy, improve the entity descriptions and rebuild, and note what changed.

Report your schema, the build output, and the inspection results. There is no single solution; the goal is a clean graph that matches your schema.

---

## Success criteria

You have met the goal of this lesson when you can:
- Explain why a knowledge graph answers questions flat chunks cannot.
- Configure Gemini as the LLM and embedder for the package.
- Write a schema with node types, relationship types, and patterns.
- Run the SimpleKGPipeline and read the lexical and entity graphs.
- Inspect the result and refine the schema when extraction is imperfect.

---

## New constructs introduced

- `neo4j-graphrag` install with extras; `OpenAILLM` against Gemini's OpenAI-compatible endpoint, or `VertexAILLM` and `VertexAIEmbeddings`; a custom `Embedder` wrapping google-genai.
- `SimpleKGPipeline` with `entities`, `relations`, `potential_schema`, `from_pdf`, `perform_entity_resolution`, `on_error`.
- `run_async(text=...)` and `run_async(file_path=...)`.
- The lexical graph (`Document`, `Chunk`, `NEXT_CHUNK`, `FROM_DOCUMENT`) and entity graph, joined by `FROM_CHUNK`.
- The LLM Knowledge Graph Builder web tool.

---

## Appendix: KG construction gotchas

- Always supply a schema for production graphs. Unguided extraction produces inconsistent labels.
- Entity and relationship descriptions improve accuracy; write them.
- `perform_entity_resolution=True` deduplicates entities across documents; keep it on.
- Match the embedder dimension to the vector index you will create in Lesson 10.
- The pipeline is async; run it inside `asyncio.run`.
- Use `on_error="RAISE"` while developing to see extraction failures, then `"IGNORE"` for resilience at volume.
- Inspect the built graph and refine the schema before relying on it. Extraction is probabilistic, not exact.
