# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static site of single-page HTML guides and Markdown tutorials about AI agent frameworks, published via GitHub Pages at https://vinovator.github.io/my-ai-guides/. There is **no build step, no package manager, no test suite, and no server-side code** — everything is rendered client-side from CDN scripts.

Top-level layout:

```
.
├── index.html         # the hub (entry point)
├── hub.js             # hub's card registry + renderer + filter + sticky nav
├── tutorial.html      # shared viewer that renders any tutorial folder
├── site.css           # shared a11y primitives + the mobile drawer shell (every page)
├── nav.js             # mobile off-canvas drawer controller (every page)
├── theme.js           # shared dark/light toggle (every page)
├── og-image.svg       # social-share image referenced by og:image
├── guides/            # framework guides — one .html per framework
│   ├── autogen.html
│   ├── crewai.html
│   ├── googleadk.html
│   ├── …
│   └── swarm.html
├── tutorials/         # multi-lesson tutorials (one folder per tutorial)
│   └── <slug>/        # e.g. neo4j/ — lowercase slug
│       ├── blueprint.md   # landing page + lesson manifest
│       └── lesson-*.md    # one lesson per file
├── README.md
├── CLAUDE.md
└── .nojekyll          # disables Jekyll on GitHub Pages so .md files are served raw
```

## Working with the site

- **Preview a guide**: open the file directly (`open guides/<file>.html`) or serve the repo locally (`python3 -m http.server` then visit `http://localhost:8000/`). Either works because the site has no build artifacts.
- **Preview a tutorial**: must use the local HTTP server — `tutorial.html` does `fetch()` of `.md` files and `file://` will hit CORS. Visit `http://localhost:8000/tutorial.html?slug=<slug>`.
- **Publish**: pushing to `main` deploys via GitHub Pages — no separate deploy step. `.nojekyll` is committed at the root so Jekyll never touches the Markdown files.
- **Relative links**:
  - From inside a guide (`guides/foo.html`), the hub is `href="../index.html"` and the tutorial viewer is `href="../tutorial.html?slug=<slug>"`.
  - From the hub (`index.html`), guides are `href="guides/foo.html"` and tutorials are `href="tutorial.html?slug=<slug>"`.
  - Do not use absolute paths starting with `/` — the site lives under a subpath (`/my-ai-guides/`) on github.io.

## Shared conventions across guides

All guides load the same CDN stack — keep it consistent when editing or adding pages:

- **Tailwind CSS** via `<script src="https://cdn.tailwindcss.com">` (Play CDN — no `tailwind.config.js`, no PostCSS). All styling is utility classes in markup plus a small `<style>` block per page. Right after the CDN script, every page sets `tailwind.config = { darkMode: 'class' }` so `dark:` variants resolve at runtime.
- **Prism.js 1.29.0** for syntax highlighting. The pattern is `<pre><code class="language-python">...</code></pre>`. Include `prism.min.js` plus the language components you actually use (e.g. `prism-python.min.js`) before `</body>`. The `prism-tomorrow` theme is loaded everywhere and reads fine on both light and dark backgrounds, so it doesn't get swapped on toggle.
- **Mermaid 10** for diagrams. All setup lives in `mermaid-setup.js` at the repo root: it imports the pinned `mermaid@10.9.2` (10.9.3 introduced a regression that breaks `stateDiagram-v2` and `sequenceDiagram` blocks with a "Syntax error in text" message), reads the theme from `<html class="dark">`, captures each diagram's source via `innerHTML` (preserving `<br/>` in labels, which `textContent` would silently drop), and exposes `window.__renderMermaid` for `theme.js` to call on toggle plus `window.__renderMermaidNodes(nodes)` for the tutorial viewer to render the diagrams the markdown renderer adds after page load. Pages that need diagrams just load it: `<script type="module" src="../mermaid-setup.js?v=YYYY-MM-DD"></script>` (or `mermaid-setup.js?v=…` from root pages). Refresher guides that don't render diagrams skip it. The selector is `.mermaid` (catches both `<div class="mermaid">` used in masterclass guides and `<pre class="mermaid">` produced by the markdown renderer). For guides that use `<pre class="mermaid">`: don't, because Prism interferes — use `<div class="mermaid">` instead. Bump the `?v=` query when you change `mermaid-setup.js`.
- **Dark mode** is site-wide. Every page (`index.html`, `tutorial.html`, every `guides/*.html`) must include three things: (a) the pre-paint inline `<script>` in `<head>` that reads `localStorage.theme` and applies the `dark` class before Tailwind paints; (b) the `tailwind.config = { darkMode: 'class' }` line right after the Tailwind CDN script; (c) `<script src="theme.js?v=YYYY-MM-DD">` (or `../theme.js?v=…` from a guide) before `</body>`. Pages carry **two** toggles: the sidebar one keeps `id="theme-toggle"`, and the mobile top bar's carries `data-theme-toggle` (a second element with the same id would be invalid HTML). `theme.js` binds every match of `#theme-toggle, [data-theme-toggle]`, so both work. Bump the `?v=` query when you change `theme.js`, same convention as `hub.js`.
- **Shared CSS in `site.css`** (root). Every page links it right after the Font Awesome stylesheet:
  `<link rel="stylesheet" href="site.css?v=YYYY-MM-DD">` (or `../site.css?v=…` from a guide). It is
  deliberately plain CSS, not Tailwind, because it loads synchronously — its rules are in effect
  before the Tailwind Play CDN has compiled anything. It owns the skip link, the `:focus-visible`
  rings, the mobile drawer's position/visibility, the 44px touch-target floor, the 16px form-control
  floor that stops iOS zooming on focus, `.table-scroll`, Mermaid overflow, and image space
  reservation. Bump its `?v=` when you change it.
- **Mobile shell** (below the `lg` breakpoint, 1024px). Every page with a sidebar uses the same
  off-canvas drawer; see "Two tiers of guide" below for the exact class recipe. Never ship a page
  whose sidebar is a non-collapsing `flex-shrink-0` column or a bare `hidden lg:block` — the first
  crushes the article to a few pixels wide, the second silently deletes Back to Hub on phones.
  `nav.js` (root) is the shared controller and is inert on pages with no drawer markup, so every
  page can load the same tag: `<script src="nav.js?v=YYYY-MM-DD" defer></script>`.
- **Every page needs `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.**
  Without it mobile browsers lay out at 980px and scale down ~40%, which makes body text render at
  roughly 7px. Seven guides shipped without it for months; check this first on any new page.
- **Font Awesome 6.4.0** for icons (`<i class="fas fa-..." aria-hidden="true">`). The icons are
  decorative, so they always carry `aria-hidden="true"`; the accessible name belongs on the parent
  link or button.
- **Inter** is the body font, set via inline `<style>` (no Google Fonts `<link>` is used — system fallback handles it).

## Two tiers of guide

The HTML files in `guides/` split into two visual/structural tiers — match the existing tier when editing a given file rather than mixing them:

- **Masterclass guides** (`guides/langgraph.html`, `guides/semantickernel.html`, `guides/pydanticai.html`, `guides/crewai.html`, `guides/googleadk.html`): full left-sidebar layout (`aside` + `main` flex shell), chapter-numbered sections, a "Master Template" call-to-action, and richer typography rules in the inline `<style>` block. These are the current target style for new long-form content.
- **Refresher guides** (`guides/autogen.html`, `guides/haystack.html`, `guides/llamaindex.html`, `guides/phidata.html`, `guides/smolagents.html`, `guides/swarm.html`): shorter, fixed narrow sidebar, single-color accent per framework, mostly code snippets with brief prose.

Both tiers share one responsive shell. The sidebar is a static column at `lg` and above and an
off-canvas drawer below it:

```html
<body class="… lg:flex …">                       <!-- NOT bare `flex`: below lg the page must -->
  <a href="#main" class="skip-link">Skip to main content</a>
  <header class="lg:hidden sticky top-0 z-30 …">  <!-- ☰ + title + data-theme-toggle -->
    <button data-drawer-toggle aria-controls="site-drawer" aria-label="Open navigation menu">…
  </header>
  <div id="drawer-backdrop" class="lg:hidden fixed inset-0 z-40 bg-gray-900/50" aria-hidden="true"></div>
  <aside id="site-drawer" data-drawer class="w-[85vw] max-w-xs lg:w-80 … z-50 lg:z-20">…</aside>
  <main id="main" class="… p-5 sm:p-8 lg:p-16">…</main>
</body>
```

The `id="site-drawer"` / `data-drawer` / `data-drawer-toggle` / `#drawer-backdrop` names are the
contract `nav.js` looks for. Below `lg`, `site.css` owns the drawer's `position`, `transform` and
`visibility` — do not add Tailwind translate utilities to the aside, they would fight it and would
not apply until the CDN finishes compiling. Masterclass pages additionally scope their
full-height shell to desktop (`lg:h-screen lg:overflow-hidden`, `main` gets `lg:overflow-y-auto`)
so that on a phone the document itself scrolls; that is what lets the iOS toolbar collapse.

Every guide must include a **"Back to Hub"** link (`href="../index.html"`) in its sidebar/header — this is the only navigation back from a guide page.

## Hub cards: data-driven registry in `hub.js`

`index.html` does NOT contain hand-authored card markup. Every card on the hub is one object in the `CARDS` array inside `hub.js`. A renderer in the same file builds the section grids at page load from `CATEGORIES` + `CARDS`.

- **Adding any card** (guide or tutorial) = append one object to `CARDS` in `hub.js`. Don't paste card HTML.
- **After editing `hub.js`, bump the cache-buster query in `index.html`**: the `<script src="hub.js?v=YYYY-MM-DD">` tag near the end of `index.html` includes a `?v=` parameter so visitors with a stale 10-minute Pages cache pick up the new card on their next visit. Update the date string (any value distinct from the previous one works) whenever you change `hub.js`. Without this, returning users may see the old card list until their browser revalidates.
- **Card shape**: `{ type, category, title, href, icon, accent, badge, tags, description }`. Optional fields: `iconBg`, `iconColor`, `titleHover`, `tagBg`, `tagText` (defaults derive from `accent`); `updated: 'YYYY-MM-DD'` (powers the "Recently updated" strip and sort order); `lessons: N` (tutorials only, shown next to the title).
  - `type: 'guide'` → links to a file under `guides/`. Badge renders in the muted gray style.
  - `type: 'tutorial'` → links to `tutorial.html?slug=<slug>`. Card gets the accent-colored top ribbon, a "📖 N lessons" sub-line, and a bold accent badge.
- **Category**: must match a `CATEGORIES[*].name` exactly. Empty categories don't render. Today's categories: `Tutorials`, `Vendor Ecosystems`, `Orchestration & Workflow`, `Open-Source Frameworks`.
- **Dynamic Tailwind classes**: accent-derived classes like `bg-emerald-50` are emitted at render time. A hidden `<div hidden>` marker block in `index.html` lists every accent class needed (light + dark variants, plus hover/group-hover) so Tailwind's CDN scanner generates them on first paint. **When adding a new accent**, extend that marker block.

### Adding a new framework guide

1. Create `guides/<framework>.html`, following one of the two tier templates (masterclass or refresher).
2. Append one `{ type:'guide', category:'…', … }` object to `CARDS` in `hub.js`. Match the card accent to the accent used inside the guide itself.
3. If the new accent isn't already in use, add the relevant `bg-<accent>-50`, `text-<accent>-{600,700,300}`, `border-<accent>-{100,800}`, `hover:border-<accent>-400`, `dark:hover:border-<accent>-500`, `group-hover:text-<accent>-600`, `dark:group-hover:text-<accent>-300` classes to the hidden marker in `index.html`.
4. Add a bullet to `README.md` under "Available Guides" with the published GitHub Pages URL (`/guides/<name>.html`).

## Hub interactivity (`hub.js`)

The hub has more than card rendering. Each of these lives in `hub.js`:

- **Live filter** (`#card-filter`): fuzzy match on title/badge/description/tags, with per-section counters and an empty state. Esc clears.
- **Sticky category nav** (`#sticky-nav`): pill bar that slides in below the navbar once you scroll past the hero. One pill per non-empty category.
- **Recently updated strip** (`#recent-strip`): renders the 2 most recent cards by `updated:` date above the categorized grid, with a "Updated Xd ago" badge.
- **Dark mode** (`#theme-toggle`): class-based, persisted in `localStorage` under the key `theme`, auto-detects `prefers-color-scheme: dark` on first load. A pre-paint inline `<script>` in each page's `<head>` sets the `dark` class before Tailwind loads, avoiding flash-of-light. Toggle wiring lives in the shared `theme.js` at the repo root (loaded by `index.html`, `tutorial.html`, and every guide), so the choice carries across the hub ↔ guides ↔ tutorial-viewer navigation via the same `localStorage` key. `hub.js` itself no longer owns the toggle.
- **Footer year**: auto-updated via `new Date().getFullYear()`.

## Tutorials (Markdown)

In addition to the per-framework HTML guides, the repo supports **multi-lesson tutorials authored in plain Markdown**. A single shared viewer (`tutorial.html`) loads and renders them in the browser — same Tailwind/Prism/Mermaid stack, still zero build step.

- **Layout**: each tutorial lives in a folder under `tutorials/<slug>/` at the repo root (e.g. `tutorials/neo4j/blueprint.md`, `tutorials/neo4j/lesson-01-foo.md`, …). Slugs are **lowercase** — they appear in the URL (`?slug=neo4j`) and case-sensitivity is a foot-gun on case-sensitive servers.
- **`blueprint.md` is both the landing page AND the manifest.** The viewer renders it as the tutorial home and parses every Markdown link of the form `[Title](filename.md)` to build the sidebar/lesson list, in source order. There is no separate JSON manifest — keep the lesson order accurate by ordering the links in `blueprint.md`.
- **`blueprint.md` is optional for single-lesson tutorials.** If the folder has no `blueprint.md`, the viewer falls into a "single-lesson mode": the sidebar collapses to just the brand header and a "Back to Hub" link, there is no Overview page, and no prev/next nav. In this mode the hub card's `href` **must** include `&lesson=<file-stem>` (e.g. `tutorial.html?slug=investment-valuation&lesson=valuation-from-zero-a-complete-guide`) so the viewer knows which Markdown file to fetch. The sidebar title is derived from the slug (`investment-valuation` → `Investment Valuation`). Use this for one-off long-form guides; use a blueprint for anything that's meant to grow into a multi-lesson arc.
- **URL pattern**: `tutorial.html?slug=<slug>` opens the blueprint; `tutorial.html?slug=<slug>&lesson=<file-stem>` opens a specific lesson (`<file-stem>` is the lesson filename without `.md`).
- **Authoring**: write normal Markdown. Fenced ```mermaid blocks render as diagrams; fenced ```python/```bash/```cypher/etc. blocks get Prism syntax highlighting. Lesson titles in the sidebar come from the link text in `blueprint.md`, not from inside the lesson files.
- **Adding a tutorial**: the user drops the `<slug>/` folder; then prompt Claude to add the hub card — a single `{ type:'tutorial', category:'Tutorials', title:…, href:'tutorial.html?slug=<slug>', lessons:N, … }` object appended to `CARDS` in `hub.js`.

## Scaling decisions

This site has deliberately avoided a build step. That's good for now, but a few thresholds are worth pre-deciding so future Claude sessions don't reinvent the wheel:

| Threshold | What strains | Recommended response |
| --- | --- | --- |
| **~15 cards** | Per-card accent palette runs out of visually distinct colors. | Drop per-card accents; assign accents *per category* instead. Simpler registry, still gives the page rhythm. |
| **~8 cards per category** | Category sections turn into walls. | Sub-categorize (split into two `CATEGORIES` entries), or add a "Show all (N)" disclosure that hides past the first 6. |
| **Authors forget to update `updated:`** | Already an issue at any size. | Replace with a tiny build script (`pre-commit` or a `make` target) that runs `git log -1 --format=%cs <file>` and bakes the date into `hub.js`. Crosses the no-build-step line, but the script is ~10 lines. |
| **Users ask "where do I read about X?"** | Filter only searches metadata, not the actual guide bodies. | Add [pagefind](https://pagefind.app/) — drops a static JSON index into `_pagefind/` at build time. Pure static site, still GitHub Pages compatible. |
| **CDN perf becomes a real complaint** | Tailwind Play CDN ships ~200KB on every page; Font Awesome ~80KB. | Switch to a built Tailwind CSS file (one `npx tailwindcss` invocation) and an inline Font Awesome subset. Same trigger — introduces a build step. |

**The architectural call to keep in mind:** the day you want pre-rendered `updated:` dates, full-text search across guide bodies, optimized Tailwind, or per-guide OG images, you'll want a 5-minute Node script (`glob`, a few fs reads, write `hub.js`/`pagefind` output). It's strictly additive — none of the current code needs to change. Plant the option here, don't build it yet.

### Local preview gotcha

Existing `.html` guides work via `open guides/<file>.html` (`file://`) because they don't `fetch()` anything. The tutorial viewer **does** use `fetch()` to load Markdown, so opening `tutorial.html` via `file://` will hit CORS. To preview tutorials locally, serve the directory: `python3 -m http.server` and visit `http://localhost:8000/tutorial.html?slug=<slug>`.
