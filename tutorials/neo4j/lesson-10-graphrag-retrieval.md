# Lesson 10: GraphRAG II, Retrieval and Grounding

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Lesson 9 (the knowledge graph is built) and Lesson 8 (vector search)
**Stack note:** the `neo4j-graphrag` retrievers and `GraphRAG` class, with Gemini
**Split:** roughly half concept, half hands-on
**Purpose of this file:** a durable reference for answering grounded, explainable, multi-hop questions over the graph, the retrieval half of GraphRAG.

---

## Objectives

By the end of this lesson you will be able to:
1. Explain the GraphRAG retrieval loop and where grounding comes from.
2. Choose the right retriever for a question.
3. Use the VectorCypherRetriever to combine vector search with graph traversal.
4. Use the Text2CypherRetriever for precise questions over structured data.
5. Assemble a GraphRAG pipeline on Gemini and return the answer with its evidence.
6. Apply grounding, guardrails, and a basic evaluation approach.

---

## Part 1: The retrieval loop

Lesson 9 built the knowledge graph. This lesson answers questions from it. The loop is always the same: take a question, retrieve the relevant part of the graph, hand that to the LLM as context, and let the LLM compose an answer that is grounded in what was retrieved rather than in its training data.

```
question
   |
   v
retriever  ---(vector / vector+cypher / text2cypher / hybrid)--->  relevant context
   |
   v
GraphRAG:  question + retrieved context  -->  Gemini
   |
   v
grounded answer  +  evidence (the chunks, entities, and path of facts used)
```

Grounding comes from one discipline: the LLM is told to answer only from the retrieved context, and the context is returned alongside the answer so a human or an audit can check it. That combination, a constrained model plus visible evidence, is what makes a GraphRAG answer trustworthy enough for an enterprise.

---

## Part 2: The retrievers, and when to use each

A retriever is the component that turns a question into context. The package offers several, and choosing well is most of the skill.

| Retriever | How it finds context | Needs embedder | Best for |
| --- | --- | --- | --- |
| `VectorRetriever` | semantic similarity over chunks | yes | find the passage about a topic |
| `VectorCypherRetriever` | a vector hit, then graph traversal | yes | multi-hop, connected facts; the GraphRAG sweet spot |
| `HybridRetriever` | vector plus full-text keyword | yes | when exact terms and meaning both matter |
| `Text2CypherRetriever` | an LLM writes Cypher from the question | no | precise queries over structured data: counts, filters, aggregations |
| `ToolsRetriever` | an LLM picks among retrievers or tools | depends | mixed questions that need routing |

The intuition: vector retrievers are good at "what is this about," Cypher-based retrieval is good at "what is connected to this," and Text2Cypher is good at "compute this exact thing." Real systems combine them.

---

## Part 3: Setup, the vector index

Retrieval over chunks needs a vector index on the chunk embeddings the builder produced. Create it with the package helper, matching the dimension to your embedder from Lesson 9.

```python
from neo4j import GraphDatabase
from neo4j_graphrag.indexes import create_vector_index

driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "your-password"))

create_vector_index(
    driver,
    name="chunkEmbeddings",
    label="Chunk",
    embedding_property="embedding",
    dimensions=768,            # must equal the embedder dimension from Lesson 9
    similarity_fn="cosine",
)
```

Reuse the same `llm` and `embedder` objects you configured in Lesson 9.

---

## Part 4: VectorRetriever, the baseline

The simplest retriever finds the chunks most similar to the question and returns their text. It is fast and useful, but its context is limited to the matched chunks themselves; it cannot bring in connected facts.

```python
from neo4j_graphrag.retrievers import VectorRetriever
from neo4j_graphrag.generation import GraphRAG

vector_retriever = VectorRetriever(
    driver,
    index_name="chunkEmbeddings",
    embedder=embedder,
    return_properties=["text"],
)

rag = GraphRAG(retriever=vector_retriever, llm=llm)
response = rag.search(
    query_text="What fee does the Premier Savings Account charge?",
    retriever_config={"top_k": 3},
    return_context=True,
)
print(response.answer)
```

This answers questions whose answer sits inside one passage. For "which regulation governs the policy behind this product," it falls short, because that requires following relationships. That is the next retriever.

---

## Part 5: VectorCypherRetriever, the GraphRAG sweet spot

This retriever first finds relevant chunks by vector search, then runs a Cypher query that traverses from each chunk into the entity graph to gather the connected facts. The matched chunk is exposed to your query as the variable `node`, and your `retrieval_query` is appended after the vector search.

```python
from neo4j_graphrag.retrievers import VectorCypherRetriever

retrieval_query = """
WITH node AS chunk, score
MATCH (chunk)<-[:FROM_CHUNK]-(entity)
OPTIONAL MATCH (entity)-[r]->(related)
WHERE NOT related:Chunk AND NOT related:Document
RETURN chunk.text AS passage,
       collect(DISTINCT entity.name) AS entities,
       collect(DISTINCT type(r) + ' -> ' + coalesce(related.name, '')) AS facts,
       score
"""

graph_retriever = VectorCypherRetriever(
    driver,
    index_name="chunkEmbeddings",
    retrieval_query=retrieval_query,
    embedder=embedder,
)

rag = GraphRAG(retriever=graph_retriever, llm=llm)
response = rag.search(
    query_text="What governs the Premier Savings Account, and what does it require?",
    retriever_config={"top_k": 4},
    return_context=True,
)
print(response.answer)
```

```
question -> vector search -> matched Chunk (node)
                                  |
                          MATCH (node)<-[:FROM_CHUNK]-(entity)
                                  |
                          traverse entity relationships
                                  |
              context = passage text + connected entities + the path of facts
```

Now the LLM receives both the source passage and the structured facts around it, which is what lets it answer multi-hop questions accurately and cite the exact text. This is the pattern that makes GraphRAG outperform flat vector search on connected questions.

---

## Part 6: Text2CypherRetriever, precise questions over structured data

Your operational graph from Lessons 5 through 8, customers, accounts, transactions, is structured, and the best way to answer a precise question about it is a Cypher query. The Text2CypherRetriever uses the LLM to translate a natural-language question into Cypher, runs it, and returns the rows. It needs no embedder, because it is not doing similarity search.

Give it the schema and a few examples so the generated Cypher matches your model.

```python
from neo4j_graphrag.retrievers import Text2CypherRetriever

NEO4J_SCHEMA = """
Node properties:
Customer {id: STRING, name: STRING, risk: STRING}
Account {id: STRING, balance: FLOAT}
Transaction {id: STRING, amount: FLOAT, date: DATE}
Merchant {name: STRING}
Relationships:
(:Customer)-[:OWNS]->(:Account)
(:Account)-[:PERFORMED]->(:Transaction)
(:Transaction)-[:TO]->(:Merchant)
(:Transaction)-[:TO]->(:Account)
"""

EXAMPLES = [
    "USER INPUT: 'How many transactions did customer C1 make?' "
    "QUERY: MATCH (c:Customer {id:'C1'})-[:OWNS]->(:Account)-[:PERFORMED]->(t:Transaction) RETURN count(t) AS transactions",
    "USER INPUT: 'Which merchants did C1 pay?' "
    "QUERY: MATCH (c:Customer {id:'C1'})-[:OWNS]->(:Account)-[:PERFORMED]->(:Transaction)-[:TO]->(m:Merchant) RETURN DISTINCT m.name AS merchant",
]

t2c_retriever = Text2CypherRetriever(
    driver,
    llm=llm,
    neo4j_schema=NEO4J_SCHEMA,
    examples=EXAMPLES,
)

rag = GraphRAG(retriever=t2c_retriever, llm=llm)
response = rag.search(query_text="What is the total amount customer C1 sent to merchants?")
print(response.answer)
```

Text2Cypher is powerful and, in Neo4j's own testing, the most consistent retrieval method across question variations, but it generates code, so treat it with care. The generated query is not guaranteed to be valid; an unparseable or failing query raises a `Text2CypherRetrievalError`, which you should catch. In production, run it through a least-privilege, read-only database user so a generated query can never write or delete, and bound it with a clear schema and examples. Those controls are part of the enterprise hardening in Lesson 12.

---

## Part 7: Assemble GraphRAG and return the evidence

The `GraphRAG` class wires a retriever to the LLM. The important option is `return_context=True`, which returns the retrieved context alongside the answer, so every answer carries its evidence.

```python
from neo4j_graphrag.generation import GraphRAG

rag = GraphRAG(retriever=graph_retriever, llm=llm)

response = rag.search(
    query_text="What governs the Premier Savings Account, and what does it require?",
    retriever_config={"top_k": 4},
    return_context=True,
)

print("ANSWER:\n", response.answer)
print("\nEVIDENCE:")
for item in response.retriever_result.items:
    print("-", item.content)
```

`response.answer` is the grounded answer. `response.retriever_result` is the context that produced it, the passages and facts, which is your citation trail and your explanation of how the answer was reached.

---

## Part 8: Grounding, guardrails, and evaluation

A correct-sounding answer is not enough; it must be faithful to the data and honest about what it does not know. Several disciplines achieve this.

**Constrain the model.** Set temperature to 0 for deterministic, conservative answers. Then give GraphRAG a prompt template that forbids going beyond the context.

```python
from neo4j_graphrag.generation import RagTemplate

GROUNDED = RagTemplate(
    template=(
        "Answer the question using ONLY the context below. "
        "If the context does not contain the answer, say you do not know. "
        "Cite the facts you used.\n\n"
        "Context:\n{context}\n\nQuestion:\n{query_text}\n\nAnswer:"
    ),
    expected_inputs=["query_text", "context"],
)

rag = GraphRAG(retriever=graph_retriever, llm=llm, prompt_template=GROUNDED)
```

**Return the evidence.** `return_context=True` gives every answer its supporting passages and facts. For a banking agent this is not optional; an answer about a customer must come with the path of facts that supports it.

**Guard Text2Cypher.** Use a read-only user, bound the schema, provide examples, and catch `Text2CypherRetrievalError`. Never let generated Cypher run with write privileges.

**Evaluate.** Build a small set of questions with known good answers, run them through the pipeline, and score the results. The metrics that matter are faithfulness, whether the answer is supported by the retrieved context; answer relevance, whether it addresses the question; and context relevance, whether the retriever pulled the right material. Frameworks such as Ragas formalize these, but even a hand-built question-and-answer set run regularly will catch regressions. Evaluation is what separates a demo from a system you can trust in front of customers.

---

## Part 9: The deliverable, a banking GraphRAG service

Wrap retrieval and grounded generation into one class. This is the retrieval engine an agent will call in Lesson 11.

```python
from neo4j import GraphDatabase
from neo4j_graphrag.retrievers import VectorCypherRetriever
from neo4j_graphrag.generation import GraphRAG, RagTemplate

class BankingGraphRAG:
    RETRIEVAL_QUERY = """
    WITH node AS chunk, score
    MATCH (chunk)<-[:FROM_CHUNK]-(entity)
    OPTIONAL MATCH (entity)-[r]->(related)
    WHERE NOT related:Chunk AND NOT related:Document
    RETURN chunk.text AS passage,
           collect(DISTINCT entity.name) AS entities,
           collect(DISTINCT type(r) + ' -> ' + coalesce(related.name,'')) AS facts,
           score
    """
    GROUNDED = RagTemplate(
        template=("Answer using ONLY the context. If it is not there, say you do not know. "
                  "Cite the facts used.\n\nContext:\n{context}\n\nQuestion:\n{query_text}\n\nAnswer:"),
        expected_inputs=["query_text", "context"],
    )

    def __init__(self, uri, user, password, llm, embedder, index="chunkEmbeddings"):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))
        retriever = VectorCypherRetriever(
            self.driver, index_name=index, retrieval_query=self.RETRIEVAL_QUERY, embedder=embedder,
        )
        self.rag = GraphRAG(retriever=retriever, llm=llm, prompt_template=self.GROUNDED)

    def ask(self, question, top_k=4):
        r = self.rag.search(query_text=question, retriever_config={"top_k": top_k}, return_context=True)
        evidence = [item.content for item in r.retriever_result.items]
        return {"answer": r.answer, "evidence": evidence}

    def close(self):
        self.driver.close()


if __name__ == "__main__":
    # llm and embedder come from Lesson 9
    service = BankingGraphRAG("bolt://localhost:7687", "neo4j", "your-password", llm, embedder)
    result = service.ask("What governs the Premier Savings Account and what does it require?")
    print("ANSWER:", result["answer"])
    print("EVIDENCE:", result["evidence"])
    service.close()
```

For questions about live operational data, add a `Text2CypherRetriever` and route each question to the right retriever, either by simple rules or with the `ToolsRetriever`, which lets the LLM choose. That routing is exactly what the agent in Lesson 11 formalizes.

---

## Banking application

The service answers grounded, explainable questions for a banking agent. Asked what a customer is eligible for, or which policy and regulation govern a product they hold, it retrieves the relevant passages, traverses to the connected facts, composes an answer strictly from that context, and returns the evidence. The answer arrives with the path of facts that supports it, which is the trust property an enterprise context layer must provide.

---

## Your turn

1. Create the `chunkEmbeddings` vector index at the dimension you used in Lesson 9.
2. Build a `VectorRetriever` and answer a single-passage question with GraphRAG.
3. Build a `VectorCypherRetriever` with a retrieval query that traverses from a chunk into the entity graph, and answer a multi-hop question.
4. Build a `Text2CypherRetriever` over the operational graph and answer a counting or aggregation question about a customer.
5. Turn on a grounding prompt and `return_context=True`, and print both the answer and its evidence.

Report your three retrievers, the answers, and one answer with its evidence. The `BankingGraphRAG` class in Part 9 is a worked solution for the VectorCypher path.

---

## Success criteria

You have met the goal of this lesson when you can:
- Explain the retrieval loop and where grounding comes from.
- Choose the right retriever for a question.
- Write a VectorCypher retrieval query that traverses from a chunk into connected facts.
- Use Text2Cypher safely for structured questions.
- Return an answer together with the evidence that supports it.

---

## New constructs introduced

- `create_vector_index` from `neo4j_graphrag.indexes`.
- `VectorRetriever`, `VectorCypherRetriever` with `retrieval_query` and the `node` variable, `Text2CypherRetriever` with `neo4j_schema` and `examples`, and the `ToolsRetriever` for routing.
- `GraphRAG`, `rag.search(query_text, retriever_config, return_context)`, `response.answer`, `response.retriever_result`.
- `RagTemplate` for a grounding prompt; `Text2CypherRetrievalError` handling.

---

## Appendix: retrieval and grounding gotchas

- Match the vector index dimension to the embedder, exactly as in Lesson 8 and 9.
- The `VectorCypherRetriever` exposes the matched chunk as `node`; begin the retrieval query with `WITH node, score`.
- Always set temperature to 0 and use a grounding prompt that forbids answering beyond the context.
- Always return the context for explainability; an enterprise answer needs its evidence.
- Text2Cypher generates code: bound it with schema and examples, run it read-only, and catch `Text2CypherRetrievalError`.
- Build an evaluation set early; faithfulness and answer relevance are the metrics that matter.
- Choose the retriever to fit the question: vector for topics, VectorCypher for connected facts, Text2Cypher for exact computations.
