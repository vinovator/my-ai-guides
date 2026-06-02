# AI Hub

A curated collection of single-page, comprehensive guides for modern AI Agent Frameworks, plus deep-dive multi-lesson tutorials.

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

Multi-lesson tutorials authored in plain Markdown. Each tutorial is a folder containing a `blueprint.md` (landing page + lesson index) and one Markdown file per lesson. The shared `tutorial.html` viewer renders them with a left-sidebar lesson list, scroll-spy table of contents, prev/next navigation, Mermaid diagrams, and Prism syntax highlighting.

- **[Neo4j](https://vinovator.github.io/my-ai-guides/tutorial.html?slug=neo4j)** - From complete novice to enterprise agentic context layers. Cypher, GraphRAG, and Neo4j as the memory spine for AI agents.

## 🛠️ Tech Stack

- **HTML5 & Vanilla CSS/JS**: For standalone, zero-dependency portability.
- **Tailwind CSS** (Play CDN): Utility-first styling, no build step.
- **Mermaid.js**: Diagrams and visualizations as code.
- **Prism.js**: Syntax highlighting in guides and tutorials.
- **marked + DOMPurify**: Client-side Markdown rendering for tutorials.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
