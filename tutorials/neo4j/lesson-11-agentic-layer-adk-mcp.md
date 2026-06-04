# Lesson 11: The Agentic Layer with ADK and MCP

**Course:** Neo4j Mastery (see the blueprint for the full plan)
**Prerequisite:** Lessons 6 through 10 (the data layer, GDS, vectors, and the GraphRAG service)
**Stack note:** Google ADK, the Model Context Protocol, the Neo4j MCP server, MCP Toolbox, and neo4j-agent-memory
**Split:** roughly half concept, half hands-on
**Purpose of this file:** a durable reference for exposing the graph to an agent as a grounded context and memory layer, the step that turns everything you built into an enterprise context layer at laptop scale.

---

## Objectives

By the end of this lesson you will be able to:
1. Explain how an agent consumes the graph as a context and memory layer.
2. Choose between open Cypher tools and pre-validated tools, and know why it matters.
3. Connect a Google ADK agent to Neo4j through the official MCP server.
4. Expose curated, pre-validated query tools with MCP Toolbox.
5. Offer your GraphRAG service to the agent as a tool.
6. Give the agent persistent memory across sessions with neo4j-agent-memory.
7. Apply least-privilege access and understand multi-agent orchestration.

---

## Part 1: What the agentic layer is

Everything so far built the context. This lesson builds the consumer of that context: an agent. The agent reasons and orchestrates; the graph supplies grounded facts and durable memory. The agent does not hold the knowledge, it reaches for it through tools, and it does not invent answers, it grounds them in what the tools return.

```
   User
     |
     v
+-------------------------------------------+
|   Agent (Google ADK, Gemini)              |   reasons, plans, calls tools
+-------------------------------------------+
     |                |                  |
     v                v                  v
GraphRAG tool   Graph query tools   Memory (PreloadMemoryTool)
(documents)     (operational data)  (remembers across sessions)
     |                |                  |
     +--------+-------+---------+--------+
              v                 v
           Neo4j knowledge   Neo4j memory
           and data graph    graph
```

The bridge between the agent and the graph is the Model Context Protocol. An MCP server is a thin piece of software that sits beside a system and exposes its capabilities through a standard interface, so any MCP-aware agent can use them. This is the same pattern an enterprise uses to wrap a thirty-year-old mainframe, applied here to your graph.

---

## Part 2: Tool design, the decision that defines safety

There are two ways to expose the graph to the agent, and the choice is the most important design decision in the lesson.

```
Open Cypher tools                         Pre-validated tools
(Neo4j MCP server)                        (MCP Toolbox)
 the agent writes its own Cypher           the agent calls named, fixed queries
 flexible, exploratory                     safe, auditable, least privilege
 risk: arbitrary queries                   risk: limited to what you defined
 good for: analysts, prototyping           good for: production, customer-facing
```

- The **Neo4j MCP server** gives the agent general tools: read the schema, run read Cypher, run write Cypher. The agent composes its own queries. This is powerful and great for exploration, but it lets the agent run arbitrary Cypher, so you must at minimum restrict it to read-only.
- **MCP Toolbox** gives the agent a curated set of named, parameterized queries that you wrote and validated, such as `get_customer_360`. The agent can only call those, with typed parameters. This is the pattern an enterprise context layer should use: the agent gets capabilities, not a console.

The principle: expose capabilities, not raw query power. Use open Cypher tools to explore, and pre-validated tools in anything customer-facing.

---

## Part 3: Install and set up

```
pip install google-adk
pip install "neo4j-agent-memory[google,mcp]"
```

You also need a way to run the Neo4j MCP server and, optionally, MCP Toolbox:
- The Neo4j MCP server runs with `uvx mcp-neo4j-cypher` (install the `uv` tool first), or `pip install mcp-neo4j-cypher` and run it as a module.
- MCP Toolbox is a small binary you download from the genai-toolbox project and run with a `tools.yaml`.

Set the connection environment variables once:

```
export NEO4J_URI="bolt://localhost:7687"
export NEO4J_USERNAME="neo4j"
export NEO4J_PASSWORD="your-password"
export GOOGLE_API_KEY="your-gemini-key"
```

---

## Part 4: Path A, the Neo4j MCP server with an ADK agent

The Neo4j MCP server exposes three tools: `get_neo4j_schema`, `read_neo4j_cypher`, and `write_neo4j_cypher`. Bind it to an ADK agent with `McpToolset` over stdio, and filter to the read tools so the agent cannot write.

```python
import os
from google.adk.agents import Agent
from google.adk.tools.mcp_tool import McpToolset
from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams
from mcp import StdioServerParameters

neo4j_tools = McpToolset(
    connection_params=StdioConnectionParams(
        server_params=StdioServerParameters(
            command="uvx",
            args=["mcp-neo4j-cypher"],
            env={k: os.environ[k] for k in ["NEO4J_URI", "NEO4J_USERNAME", "NEO4J_PASSWORD"]},
        )
    ),
    tool_filter=["get_neo4j_schema", "read_neo4j_cypher"],   # read-only
)

root_agent = Agent(
    model="gemini-2.5-flash",
    name="banking_analyst",
    instruction=(
        "You are a banking analytics assistant. Use the Neo4j tools to inspect the "
        "schema and run read-only Cypher to answer questions about customers, accounts, "
        "and transactions. Always base answers on query results, and show the query you ran."
    ),
    tools=[neo4j_tools],
)
```

The `tool_filter` is the safety control: by exposing only `get_neo4j_schema` and `read_neo4j_cypher`, the agent can explore and read but never modify the graph. The Neo4j MCP server can also run as an HTTP service, in which case you use `StreamableHTTPConnectionParams(url=..., headers=...)` instead of the stdio parameters.

---

## Part 5: Path B, pre-validated tools with MCP Toolbox

For production, define the queries yourself in a `tools.yaml`, so the agent calls fixed, parameterized capabilities rather than writing Cypher. ADK supports MCP Toolbox natively.

```yaml
# tools.yaml
sources:
  banking-neo4j:
    kind: neo4j
    uri: bolt://localhost:7687
    user: neo4j
    password: your-password
    database: neo4j

tools:
  get-customer-360:
    kind: neo4j-cypher
    source: banking-neo4j
    description: Return a customer's accounts, transaction count, and total outflow.
    parameters:
      - name: customer_id
        type: string
        description: The customer id, for example C1.
    statement: |
      MATCH (c:Customer {id: $customer_id})
      OPTIONAL MATCH (c)-[:OWNS]->(a:Account)-[:PERFORMED]->(t:Transaction)
      RETURN c.name AS name, collect(DISTINCT a.id) AS accounts,
             count(t) AS transactionCount, coalesce(sum(t.amount), 0) AS totalOut

  shared-counterparties:
    kind: neo4j-cypher
    source: banking-neo4j
    description: Find pairs of accounts that paid the same merchant.
    parameters: []
    statement: |
      MATCH (a:Account)-[:PERFORMED]->(:Transaction)-[:TO]->(m:Merchant)
            <-[:TO]-(:Transaction)<-[:PERFORMED]-(b:Account)
      WHERE a.id < b.id
      RETURN a.id AS accountA, b.id AS accountB, count(DISTINCT m) AS shared
      ORDER BY shared DESC LIMIT 20

toolsets:
  banking:
    - get-customer-360
    - shared-counterparties
```

Run the toolbox server, then load the toolset into the agent.

```
./toolbox --tools-file tools.yaml      # serves on http://127.0.0.1:5000
```

```python
from toolbox_core import ToolboxSyncClient
from google.adk.agents import Agent

toolbox = ToolboxSyncClient("http://127.0.0.1:5000")
banking_tools = toolbox.load_toolset("banking")

root_agent = Agent(
    model="gemini-2.5-flash",
    name="banking_service_agent",
    instruction=(
        "You are a customer-service assistant. Use the provided tools to answer questions "
        "about a customer. You can only call the tools given to you; do not invent data."
    ),
    tools=banking_tools,
)
```

Now the agent has exactly the capabilities you sanctioned, each a tested, parameterized query, which is the least-privilege posture an enterprise wants. Alternatively, the toolbox can run over stdio and be bound with `McpToolset` exactly as in Path A.

---

## Part 6: Offer the GraphRAG service as a tool

Your `BankingGraphRAG` service from Lesson 10 answers grounded, document-based questions. Expose it to the agent as a plain Python function tool; ADK turns any well-documented function into a tool the agent can call.

```python
from google.adk.agents import Agent
# banking_graphrag is an instance of the BankingGraphRAG class from Lesson 10

def answer_product_question(question: str) -> dict:
    """Answer a question about bank products, fees, policies, or regulations,
    grounded in the knowledge graph. Returns the answer and its supporting evidence."""
    return banking_graphrag.ask(question)

root_agent = Agent(
    model="gemini-2.5-flash",
    name="banking_context_agent",
    instruction=(
        "You help customers and staff. For questions about products, fees, policies, or "
        "regulations, call answer_product_question. For questions about a specific "
        "customer's accounts and transactions, use the database tools. Always ground "
        "answers in tool results and cite the evidence."
    ),
    tools=[answer_product_question, *banking_tools],
)
```

The agent now reasons over two complementary sources: the GraphRAG service for document-grounded knowledge, and the pre-validated tools for live operational data. This is the full context fabric, exposed to one agent.

---

## Part 7: Persistent memory across sessions

Without memory, an agent forgets everything between conversations, the context amnesia problem. The `neo4j-agent-memory` package gives the agent durable memory stored as its own graph, and integrates with ADK through the `PreloadMemoryTool`, which recalls relevant past facts before the agent answers. The package supports three kinds of memory: short-term conversation history, structured long-term facts and entities, and reasoning memory such as past tool calls and traces.

```python
from google.adk.agents.llm_agent import LlmAgent
from google.adk.tools.preload_memory_tool import PreloadMemoryTool
from neo4j_agent_memory import MemoryClient, MemorySettings
from neo4j_agent_memory.config.settings import Neo4jConfig, ExtractionConfig, ExtractorType

# 1) Configure the memory graph connection
settings = MemorySettings(
    neo4j=Neo4jConfig(uri="bolt://localhost:7687", username="neo4j", password="your-password"),
    extraction=ExtractionConfig(extractor_type=ExtractorType.SPACY),
)
memory_client = MemoryClient(settings)
await memory_client.connect()          # the package is async-only

# 2) Give the agent memory recall alongside its other tools
agent = LlmAgent(
    model="gemini-2.5-flash",
    name="banking_context_agent",
    instruction="You are a banking assistant. Use memory to recall what you know about the customer.",
    tools=[answer_product_question, *banking_tools, PreloadMemoryTool()],
)
```

Because the package is asynchronous, run it inside an event loop: use `await` directly within an ADK handler, which already runs its own loop, or wrap a script entry point in `asyncio.run(...)`. The package can run self-hosted against your own Neo4j over Bolt, or against the hosted Neo4j Agent Memory Service, where you set one API key and run no database. Either way the agent now carries a memory of each customer across sessions, stored as a graph you can inspect and audit.

---

## Part 8: Least-privilege access for agents

An agent should reach the graph through the narrowest door that still does the job. Three controls, in order of preference:
1. Pre-validated tools, so the agent calls only sanctioned, parameterized queries.
2. A read-only filter on any Cypher tool, as in Part 4.
3. A dedicated read-only database user, so even a flawed tool cannot write.

The third control, a separate read-only role for the agent, is a Neo4j Enterprise feature and is not available on your Community edition. On the laptop you therefore lean on the first two controls: expose pre-validated tools, and filter Cypher tools to read operations. Lesson 12 shows the Enterprise role-based access control that completes this picture in production. The design discipline, never give an agent more access than its task requires, is the same at both scales.

---

## Part 9: Multi-agent orchestration

A single agent is the starting point. ADK supports composing several agents under a coordinator, each with its own tools and instructions. A natural split for the banking context layer:

```
                 Coordinator agent (routes the request)
                 /              |                 \
   Retrieval agent      Operational agent      Memory agent
   (GraphRAG over        (pre-validated         (recall and persist
    documents)            data tools)            customer facts)
```

The coordinator decides which specialist should handle a request, delegates, and combines the results. This mirrors the enterprise operating model, where specialized capabilities are owned by different teams, and it keeps each agent's tool set small and auditable. Start with one agent; reach for orchestration when the responsibilities clearly separate.

---

## Part 10: Run the agent

Put `root_agent` in a Python package and use the ADK developer tools.

```
my_agent/
  __init__.py        # from . import agent
  agent.py           # defines root_agent
```

```
adk web              # opens a local chat UI to talk to the agent
# or
adk run my_agent     # runs the agent in the terminal
```

For programmatic use inside an application, drive the agent with a runner and a session service rather than the CLI. For learning and for the capstone, the `adk web` developer UI is the fastest way to converse with your context-layer agent and watch which tools it calls.

---

## Banking application

You now have the capstone in reach: a banking context-layer agent that answers a customer question by grounding it in the graph, whether that means retrieving product and policy knowledge through GraphRAG, querying the customer's accounts and transactions through pre-validated tools, or recalling what it learned about the customer in a previous session, and returning the supporting path of facts as its explanation. This is the enterprise context-layer pattern, running on your laptop.

---

## Your turn

1. Install ADK and run the Neo4j MCP server; connect it to an ADK agent filtered to read-only, and ask a question about a customer through `adk web`.
2. Write a `tools.yaml` with at least two pre-validated tools, run MCP Toolbox, and build a second agent that uses only those tools.
3. Expose your `BankingGraphRAG.ask` as a function tool and confirm the agent uses it for product and policy questions.
4. Add `PreloadMemoryTool` with a configured `MemoryClient`, tell the agent a fact about a customer in one session, and confirm it recalls the fact in a new session.
5. Note which design, open Cypher or pre-validated tools, you would choose for a customer-facing deployment, and why.

Report your agent definitions, a transcript of the agent answering with tool calls, and the memory recall across sessions.

---

## Success criteria

You have met the goal of this lesson when you can:
- Explain how an agent uses the graph as a context and memory layer through MCP.
- Connect an ADK agent to the Neo4j MCP server, read-only.
- Define and use pre-validated tools with MCP Toolbox.
- Expose the GraphRAG service as a tool.
- Give the agent persistent memory and recall a fact across sessions.
- Justify a least-privilege tool design.

---

## New constructs introduced

- ADK: `Agent` and `LlmAgent`, `McpToolset`, `StdioConnectionParams` and `StreamableHTTPConnectionParams`, `tool_filter`, function tools, `adk web` and `adk run`.
- The Neo4j MCP server `mcp-neo4j-cypher` and its tools `get_neo4j_schema`, `read_neo4j_cypher`, `write_neo4j_cypher`.
- MCP Toolbox `tools.yaml` with `sources`, `tools`, parameterized `statement`, and `toolsets`; `toolbox-core` loading.
- `neo4j-agent-memory`: `MemoryClient`, `MemorySettings`, `Neo4jConfig`, and ADK's `PreloadMemoryTool`.

---

## Appendix: agentic-layer gotchas

- Prefer pre-validated tools over open Cypher for anything customer-facing; expose capabilities, not a console.
- Always filter a Cypher tool to read operations unless the agent genuinely must write.
- `neo4j-agent-memory` is async-only; use `await` in ADK handlers or `asyncio.run` in scripts.
- A dedicated read-only agent user needs Enterprise; on Community rely on pre-validated and read-filtered tools.
- Keep each agent's tool set small; reach for multi-agent orchestration only when responsibilities clearly separate.
- Write clear tool descriptions and docstrings; the agent chooses tools based on them.
- Keep the GraphRAG grounding prompt and `return_context` from Lesson 10 so tool answers stay explainable.
