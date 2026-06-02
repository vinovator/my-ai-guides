# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static site of single-page HTML guides for AI agent frameworks, published via GitHub Pages at https://vinovator.github.io/my-ai-guides/. Each framework gets one self-contained `*.html` file at the repo root; `index.html` is the hub that links to them. There is **no build step, no package manager, no test suite, and no server-side code** — everything is rendered client-side from CDN scripts.

## Working with the site

- **Preview a page**: open the `.html` file directly in a browser (`open <file>.html`) or serve the directory locally (`python3 -m http.server` then visit `http://localhost:8000/`). Both work because the site has no build artifacts.
- **Publish**: pushing to `main` deploys via GitHub Pages — no separate deploy step.
- **Linking between guides**: use plain relative paths (`href="langgraph.html"`), not absolute paths — the site lives under a subpath (`/my-ai-guides/`) on github.io.

## Shared conventions across guides

All guides load the same CDN stack — keep it consistent when editing or adding pages:

- **Tailwind CSS** via `<script src="https://cdn.tailwindcss.com">` (the CDN/JIT build — no `tailwind.config.js`, no PostCSS). All styling is utility classes in markup plus a small `<style>` block per page.
- **Prism.js 1.29.0** for syntax highlighting. The pattern is `<pre><code class="language-python">...</code></pre>`. Include `prism.min.js` plus the language components you actually use (e.g. `prism-python.min.js`) before `</body>`.
- **Mermaid 10** for diagrams, loaded as an ES module with `mermaid.initialize({ startOnLoad: true, theme: 'neutral' })`. Only include it on pages that actually render diagrams.
- **Font Awesome 6.4.0** for icons (`<i class="fas fa-...">`).
- **Inter** is the body font, set via inline `<style>` (no Google Fonts `<link>` is used — system fallback handles it).

## Two tiers of guide

The HTML files split into two visual/structural tiers — match the existing tier when editing a given file rather than mixing them:

- **Masterclass guides** (`langgraph.html`, `semantickernel.html`, `pydanticai.html`, `crewai.html`): full left-sidebar layout (`aside` + `main` flex shell), chapter-numbered sections, a "Master Template" call-to-action, and richer typography rules in the inline `<style>` block. These are the current target style for new long-form content.
- **Refresher guides** (`autogen.html`, `haystack.html`, `llamaindex.html`, `phidata.html`, `smolagents.html`, `swarm.html`): shorter, fixed narrow sidebar, single-color accent per framework, mostly code snippets with brief prose.

Every guide must include a **"Back to Hub"** link to `index.html` in its sidebar/header — this is the only navigation back from a guide page.

## Hub cards: data-driven registry

`index.html` does NOT contain hand-authored card markup. Every card on the hub is one object in the `CARDS` array inside an inline `<script>` near the bottom of `index.html`. A small renderer below the array builds the section grids at load time from `CATEGORIES` + `CARDS`.

- **Adding any card** (guide or tutorial) = append one object to `CARDS`. Don't paste card HTML.
- **Card shape**: `{ type, category, title, href, icon, accent, badge, tags, description }`. Optional overrides for visual fidelity: `iconBg`, `iconColor`, `titleHover`, `tagBg`, `tagText` (defaults derive from `accent`).
  - `type: 'guide'` → links to a `.html` file. Badge renders in the muted gray style.
  - `type: 'tutorial'` → links to `tutorial.html?slug=<slug>`. Badge renders in the bold accent-colored style.
- **Category**: must match a `CATEGORIES[*].name` exactly. Reorder categories (or change column counts) by editing that array. Empty categories don't render — fine to leave the `Tutorials` slot empty until a tutorial lands.
- **Dynamic Tailwind classes**: the accent system generates classes like `bg-${accent}-50` at runtime. The `tailwind.config` block in the `<head>` safelists those patterns so the CDN's JIT emits them regardless of static-scan results.

### Adding a new framework guide

1. Create `<framework>.html` at the repo root, following one of the two tier templates (masterclass or refresher).
2. Append one `{ type:'guide', category:'…', … }` object to `CARDS` in `index.html`. Match the accent color to the one used inside the guide itself.
3. Add a bullet to `README.md` under "Available Guides" with the published GitHub Pages URL.

## Tutorials (Markdown)

In addition to the per-framework HTML guides, the repo supports **multi-lesson tutorials authored in plain Markdown**. A single shared viewer (`tutorial.html`) loads and renders them in the browser — same masterclass look, same Tailwind/Prism/Mermaid stack, still zero build step.

- **Layout**: each tutorial lives in a folder named `<slug>/` directly at the repo root (e.g. `neo4j/blueprint.md`, `neo4j/01-intro.md`, …). There is no parent `tutorials/` directory — "tutorial" is implicit from the folder shape and the `tutorial.html?slug=` URL.
- **`blueprint.md` is both the landing page AND the manifest.** The viewer renders it as the tutorial home and parses every Markdown link of the form `[Title](filename.md)` to build the sidebar/lesson list, in source order. There is no separate JSON manifest — keep the lesson order accurate by ordering the links in `blueprint.md`.
- **URL pattern**: `tutorial.html?slug=<slug>` opens the blueprint; `tutorial.html?slug=<slug>&lesson=<file-stem>` opens a specific lesson (`<file-stem>` is the lesson filename without `.md`).
- **Authoring**: write normal Markdown. Fenced ```mermaid blocks render as diagrams; fenced ```python/```bash/```cypher/etc. blocks get Prism syntax highlighting. Lesson titles in the sidebar come from the link text in `blueprint.md`, not from inside the lesson files.
- **Adding a tutorial**: the user drops the `<slug>/` folder; then prompt Claude to add the hub card — a single `{ type:'tutorial', category:'Tutorials', title:…, href:'tutorial.html?slug=<slug>', … }` object appended to `CARDS` in `index.html`.

### Slug collision rule

A tutorial folder must not share a slug with an existing guide's `.html` file. Today's guide slugs (don't reuse as tutorial folder names): `autogen, crewai, haystack, langgraph, llamaindex, phidata, pydanticai, semantickernel, smolagents, swarm`. Routing wouldn't actually break — `tutorial.html?slug=foo` resolves on its own — but having `foo.html` and `foo/` side by side is confusing for both readers and authors.

### Local preview gotcha

Existing `.html` guides work via `open <file>.html` (`file://`) because they have no `fetch()`. The tutorial viewer **does** use `fetch()` to load Markdown, so opening `tutorial.html` via `file://` will hit CORS errors. To preview tutorials locally, serve the directory: `python3 -m http.server` and visit `http://localhost:8000/tutorial.html?slug=<slug>`.
