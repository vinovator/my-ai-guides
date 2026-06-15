# AI Hub

A curated collection of single-page, comprehensive guides for modern AI Agent Frameworks, plus deep-dive tutorials on the topics worth knowing deeply.

## 🚀 **[View the Live Site](https://vinovator.github.io/my-ai-guides/)**

This repository hosts the source code for the interactive content published at the link above. Each framework guide is a standalone HTML file; each tutorial is a folder of Markdown lessons rendered in the browser by a shared viewer (`tutorial.html`). Everything is static, zero-build, and served by GitHub Pages.

## 📚 Available Guides

- **[AutoGen](https://vinovator.github.io/my-ai-guides/guides/autogen.html)** - Microsoft's multi-agent framework.
- **[CrewAI](https://vinovator.github.io/my-ai-guides/guides/crewai.html)** - Orchestrating role-playing autonomous agents.
- **[Google ADK](https://vinovator.github.io/my-ai-guides/guides/googleadk.html)** - Google's official Agent Development Kit, with a path to Vertex AI Agent Engine.
- **[Haystack](https://vinovator.github.io/my-ai-guides/guides/haystack.html)** - End-to-end NLP pipelines.
- **[LangGraph](https://vinovator.github.io/my-ai-guides/guides/langgraph.html)** - Building stateful, multi-actor applications with LLMs.
- **[LlamaIndex](https://vinovator.github.io/my-ai-guides/guides/llamaindex.html)** - Data framework for LLM applications.
- **[PhiData](https://vinovator.github.io/my-ai-guides/guides/phidata.html)** - Building AI Assistants with memory and tools.
- **[PydanticAI](https://vinovator.github.io/my-ai-guides/guides/pydanticai.html)** - Production-grade AI agents with Pydantic.
- **[Semantic Kernel](https://vinovator.github.io/my-ai-guides/guides/semantickernel.html)** - Integrating LLMs with existing code.
- **[SmolAgents](https://vinovator.github.io/my-ai-guides/guides/smolagents.html)** - Minimalist agent framework.
- **[Swarm](https://vinovator.github.io/my-ai-guides/guides/swarm.html)** - OpenAI's experimental pattern for ergonomic agent coordination.

## 🎓 Tutorials

Tutorials authored in plain Markdown, each in a folder under `tutorials/`. Multi-lesson tutorials use a `blueprint.md` as the landing page and lesson manifest, plus one Markdown file per lesson; single-lesson tutorials can ship just the one Markdown file. The shared `tutorial.html` viewer renders both, with Mermaid diagrams, Prism syntax highlighting, a scroll-spy table of contents, and (for multi-lesson tutorials) a left-sidebar lesson list with prev/next navigation.

- **[Neo4j](https://vinovator.github.io/my-ai-guides/tutorial.html?slug=neo4j)** - From complete novice to enterprise agentic context layers. Cypher, GraphRAG, and Neo4j as the memory spine for AI agents.
- **[Investment Valuation](https://vinovator.github.io/my-ai-guides/tutorial.html?slug=investment-valuation&lesson=valuation-from-zero-a-complete-guide)** - From zero to a defensible business valuation. Accounting fundamentals, DCF, and multiples, built history-forward around one fictional company.

## 🛠️ Tech Stack

- **HTML5 & Vanilla CSS/JS**: For standalone, zero-dependency portability.
- **Tailwind CSS** (Play CDN): Utility-first styling, no build step.
- **Mermaid.js**: Diagrams and visualizations as code.
- **Prism.js**: Syntax highlighting in guides and tutorials.
- **marked + DOMPurify**: Client-side Markdown rendering for tutorials.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
