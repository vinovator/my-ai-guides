# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

**Guides** — a static site of long-form guides and Markdown deep dives on whatever topic is worth understanding properly (AI engineering and finance today).

**Hosting and naming.** The public entry point is **https://guides.vinothhaldorai.com/**, a Cloudflare-fronted custom subdomain; GitHub Pages also serves the same files at https://vinovator.github.io/my-ai-guides/. Because the content is reachable on two hosts, `index.html` declares `<link rel="canonical">` and `og:url`/`og:image` pointing at the subdomain — keep those on the subdomain if you touch them. The site is linked from the "Guides" tab on https://vinothhaldorai.com, so the brand is deliberately **Guides**, matching that nav label and the subdomain; the masthead shows `Vinoth Haldorai / Guides` and the footer carries a backlink, so the page reads as a section of the main site rather than an orphan. "Deep dive" remains a **content format label**, not a brand — do not confuse the two when editing copy. There is **no build step, no package manager, no test suite, and no server-side code** — everything is rendered client-side from CDN scripts.

Top-level layout:

```
.
├── index.html         # the landing page; its catalogue is pre-rendered by scripts/generate.mjs
├── hub.js             # landing registry (CARDS) + renderer + format/search filter
├── landing.css        # plain-CSS stylesheet for index.html (no Tailwind there)
├── tutorial.html      # shared viewer that renders any tutorial folder
├── site.css           # shared a11y primitives + the mobile drawer shell (every page)
├── nav.js             # mobile off-canvas drawer controller (every page)
├── theme.js           # shared dark/light toggle (every page)
├── og-image.png       # 1200x630 social preview, built from scripts/og-image.html
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

## Shared site chrome (mirrored from vh-site)

This site is one of three that share an identity: `vinothhaldorai.com` (the Astro repo
`vh-site`), `guides.vinothhaldorai.com` (this repo) and `tools.vinothhaldorai.com`
(`my-ai-tools`). The Guides and Tools tabs on the main site open in a new tab, so without
shared chrome they read as orphans.

**What is mirrored, and only this:**

- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` at the repo root, copied byte for
  byte from `vh-site/public/`. Every page links all three. Do not point the icon at a CDN;
  it used to reference a Font Awesome glyph on jsdelivr, which was neither the brand nor
  under our control.
- The masthead wordmark `Vinoth Haldorai.` linking to `https://vinothhaldorai.com`, with
  the same 5px dot, followed by `/ Guides`.
- The footer nav (`Now`, `Work with me`, `Contact`) and the four socials (LinkedIn,
  GitHub, obfuscated email, RSS), with the same `data-user`/`data-domain` email trick and
  the same year script.

**What is deliberately NOT mirrored:** fonts, colours and layout. The main site uses
Instrument Sans, Newsreader and Schibsted Grotesk; this one uses Inter plus a system
serif. Copying the main site's chrome CSS would pull in three font downloads and couple
the repos' stylesheets for no benefit. Identity is shared, the design system is not. This
is the same split Stripe and GitHub use for their docs subdomains.

**Keeping it in sync.** All URLs are absolute so they resolve from any host. The shared
surface is deliberately tiny (three nav links, four socials, three icon files) so it
rarely changes. If the footer on `vh-site` changes, mirror it here **and** in
`my-ai-tools/index.html`. Do not fetch a shared partial from the main site at runtime: it
would add a cross-origin dependency, a flash of missing chrome, and a failure mode where
the footer vanishes when the main site is slow.

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
  floor that stops iOS zooming on focus, `.table-scroll`, `.figure-scroll`, Mermaid overflow, and
  image space reservation. Bump its `?v=` when you change it.
- **Mobile shell** (below the `lg` breakpoint, 1024px). Every page with a sidebar uses the same
  off-canvas drawer; see "Two tiers of guide" below for the exact class recipe. Never ship a page
  whose sidebar is a non-collapsing `flex-shrink-0` column or a bare `hidden lg:block` — the first
  crushes the article to a few pixels wide, the second silently deletes the back link on phones.
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

Every guide must include a **"Guides"** back link (`href="../index.html"`) in its sidebar/drawer header — this is the only navigation back from a guide page.

## Landing page: data-driven registry in `hub.js`

`index.html` does NOT contain hand-authored entry markup. Every entry is one object in the `CARDS`
array inside `hub.js`; a renderer in the same file builds the page at load from `CATEGORIES` + `CARDS`.

**The landing page is a catalogue.** It says plainly what the site is, then lists everything in it.
Its structure, top to bottom:

```
masthead          Vinoth Haldorai / Guides · subject links (md+) · theme toggle   (sticky)
statement         "Guides", one factual paragraph, computed stats, the format key
recently updated  the three most recently updated items, with dates
controls          format buttons (All, Deep dives, Guides, Cheat sheets) + search
subject sections  AI engineering, Finance and economics: one row per item
                  (title, description, format · lessons · length, "Updated Mon YYYY");
                  cheat sheets share one line at the end of their section
```

Each subject appears once as navigation (the masthead links) and once as a heading. There is no
featured card, no topic tiles and no sticky topic bar; they were removed in October 2026 because
they repeated the subjects four times and gave one item a different treatment from the rest.

**Style rules for this page.** One typeface, the system sans-serif stack (`system-ui, -apple-system,
"Segoe UI", Roboto, "Helvetica Neue", Arial`), with hierarchy from size and weight only: no serif
display face, no uppercase tracked labels, no hover arrows, no large rounded cards. One accent
colour (blue) for links and the active filter. No icon font: the three icons are inline SVG. Copy
is factual and in sentence case; describe what a piece covers, not how good it is. The guide pages
and the tutorial viewer still declare Inter (never actually loaded), pending a site-wide pass.

**No Tailwind on the landing page.** `index.html` is styled by `landing.css` (plain
CSS with light and dark tokens keyed to `html.dark`), after the shared `site.css`. The Play CDN is
about 400 KB of JavaScript and was the page's largest download; the guide pages and the tutorial
viewer still use it. Do not add Tailwind classes to `hub.js` templates; add rules to `landing.css`
and bump its `?v=`.

**The catalogue is pre-rendered.** Every dynamic region of `index.html` sits between
`<!-- hub:NAME -->` and `<!-- /hub:NAME -->` markers. `scripts/generate.mjs` runs `hub.js` in Node,
where it exposes `fragments()` instead of touching the DOM, and writes each fragment between its
markers, so the served HTML lists every guide for search engines, link previews and readers
without JavaScript. In the browser `hub.js` only re-renders if that output is missing, then wires
up the filter. CI's `generate --check` fails if the pre-render is stale, so after editing `CARDS`
always run the generator. Never edit inside the markers by hand.

**Filter state lives in the address.** `?format=deep-dive|guide|reference` and `?q=…` are read on
load and kept current with `history.replaceState`, so a filtered view can be shared.

**Social preview.** `og:image` must be a PNG or JPEG (social networks ignore SVG), and
`scripts/check-site.mjs` enforces it. To change the image, edit `scripts/og-image.html` and run the
command in its header comment.

- **Adding anything** = append one object to `CARDS` in `hub.js`. Don't paste markup.
- **After editing `hub.js`, bump the cache-buster query in `index.html`**: the `<script src="hub.js?v=…">` tag near the end of `index.html` includes a `?v=` parameter so visitors with a stale 10-minute Pages cache pick up the change on their next visit. Any value distinct from the previous one works.
- **Card shape**: `{ type, format, category, title, href, tags, description, updated, minutes }`,
  plus `lessons: N` for multi-lesson deep dives and an optional `status`.
  - `type: 'guide' | 'tutorial'` is **routing only**: `guides/<file>.html` vs `tutorial.html?slug=`.
  - `format: 'deep-dive' | 'guide' | 'reference'` sets the label, the order within a section
    (deep dives, then guides, then cheat sheets) and the format filter. `reference` items render on
    the shared cheat-sheet line rather than as rows.
  - `minutes: N` is **generated**, not hand-written. Run `node scripts/generate.mjs` after
    editing content and commit the result; CI fails if it has drifted. It counts visible words
    at 220 wpm, excluding `<script>` and `<style>` (and, in deep dives, inline `<svg>` figures,
    whose coordinates would otherwise count as words), and rounds up so it never undersells.
  - `updated` is an editorial date. Every row shows it as "Updated Mon YYYY", and the three most
    recent items (ties broken by order in `CARDS`) form "Recently updated".
  - `tags` are **searchable but never rendered**.
  - `description` is one factual sentence on what the piece covers. No slogans or superlatives.
  - `status` is an optional factual note for a tool that has been renamed, replaced or retired
    (AutoGen, Semantic Kernel, Phidata and Swarm carry one). It shows as "Note:" on the row, or
    under the cheat-sheet line. Put a matching dated `<aside role="note">` at the top of the guide
    page itself, since many readers arrive there from search.
- **Category = subject, never format.** Must match a `CATEGORIES[*].name` exactly; empty categories
  don't render. Today: `AI engineering` and `Finance and economics`. Each entry is
  `{ name, accent, blurb }`; keep the `accent` field even though every subject uses blue, because
  `scripts/check-site.mjs` finds category names through it. A new subject is just a new entry.

### Adding a new guide

1. Create `guides/<framework>.html`, following one of the two tier templates (masterclass or
   refresher) and the shared mobile shell above.
2. Leave `minutes` at any value; step 4 fills it in.
3. Append one entry to `CARDS` in `hub.js` with `type:'guide'`, the right `format` (`'guide'` for
   real prose, `'reference'` for a one-page cheat sheet), its subject `category`, `minutes`,
   `updated`, `tags` and a one-sentence factual `description`.
4. Run `node scripts/generate.mjs` (fills in `minutes`, re-renders the catalogue in `index.html`,
   rewrites `sitemap.xml`) and `node scripts/check-site.mjs`, then bump `hub.js?v=` in `index.html`.
5. Add a bullet to `README.md` under "Guides and cheat sheets" with the published GitHub Pages URL
   (`/guides/<name>.html`).

Be honest about `format`. A 2-minute page is a cheat sheet, and labelling it a guide is what made
the old landing page misrepresent the library.

## Landing page interactivity (`hub.js`)

- **Filter** (`#format-buttons` + `#card-filter`): the format buttons (`aria-pressed`) and the text
  search combine. Search is a substring match over title, description, format, tags and category.
  Section counts read "N of M" while filtering, `#filter-status` announces "Showing N of 16"
  (`aria-live`), empty sections hide, and `#filter-empty` shows when nothing matches. Esc clears the
  search. It keys off `.hub-card`, `data-search` and `data-format`, so **every entry template must
  keep those hooks**, rows and cheat-sheet links alike.
- **Library stats** (`#library-stats`) and the **format key** (`#format-key`) are computed from
  `CARDS` and `FORMATS`.
- **Dark mode** (`#theme-toggle`): class-based, persisted in `localStorage` under the key `theme`, auto-detects `prefers-color-scheme: dark` on first load. A pre-paint inline `<script>` in each page's `<head>` sets the `dark` class before Tailwind loads, avoiding flash-of-light. Toggle wiring lives in the shared `theme.js` at the repo root (loaded by `index.html`, `tutorial.html`, and every guide), so the choice carries across the hub, guides and tutorial viewer via the same `localStorage` key.
- **Footer year**: auto-updated via `new Date().getFullYear()`.

## Tutorials (Markdown)

In addition to the per-framework HTML guides, the repo supports **multi-lesson tutorials authored in plain Markdown**. A single shared viewer (`tutorial.html`) loads and renders them in the browser — same Tailwind/Prism/Mermaid stack, still zero build step.

- **Layout**: each tutorial lives in a folder under `tutorials/<slug>/` at the repo root (e.g. `tutorials/neo4j/blueprint.md`, `tutorials/neo4j/lesson-01-foo.md`, …). Slugs are **lowercase** — they appear in the URL (`?slug=neo4j`) and case-sensitivity is a foot-gun on case-sensitive servers.
- **`blueprint.md` is both the landing page AND the manifest.** The viewer renders it as the tutorial home and parses every Markdown link of the form `[Title](filename.md)` to build the sidebar/lesson list, in source order. There is no separate JSON manifest — keep the lesson order accurate by ordering the links in `blueprint.md`.
- **`blueprint.md` is optional for single-lesson tutorials.** If the folder has no `blueprint.md`, the viewer falls into a "single-lesson mode": the sidebar collapses to just the brand header and the back link, there is no Overview page, and no prev/next nav. In this mode the hub card's `href` **must** include `&lesson=<file-stem>` (e.g. `tutorial.html?slug=investment-valuation&lesson=valuation-from-zero-a-complete-guide`) so the viewer knows which Markdown file to fetch. The sidebar title is derived from the slug (`investment-valuation` → `Investment Valuation`). Use this for one-off long-form guides; use a blueprint for anything that's meant to grow into a multi-lesson arc.
- **URL pattern**: `tutorial.html?slug=<slug>` opens the blueprint; `tutorial.html?slug=<slug>&lesson=<file-stem>` opens a specific lesson (`<file-stem>` is the lesson filename without `.md`).
- **Authoring**: write normal Markdown. Fenced ```mermaid blocks render as diagrams; fenced ```python/```bash/```cypher/etc. blocks get Prism syntax highlighting. Lesson titles in the sidebar come from the link text in `blueprint.md`, not from inside the lesson files.
- **Links inside a tutorial**: a relative link to another file in the same folder, `[Lesson 1](lesson-01-foo.md)`, is rewritten by `rewriteDocLinks()` in `tutorial.html` to `?slug=<slug>&lesson=lesson-01-foo` after rendering (`blueprint.md` becomes the overview). Without that step the browser resolves it against the site root and 404s, which is what every overview page did until October 2026. Links to another tutorial use the viewer form directly: `[bond guide](?slug=global-bond-markets&lesson=…)`.
- **Images in a deep dive** live in `tutorials/<slug>/images/` and are referenced from Markdown
  exactly once, at their full size: `![alt](tutorials/<slug>/images/slide-01.webp)`. The viewer adds
  `srcset` at render time from a **naming convention** — for `slide-01.webp` it offers
  `slide-01-800.webp` and `slide-01-1200.webp` — so **every image needs its two siblings built**:

  ```bash
  cd tutorials/<slug>/images
  for f in *.webp; do
      case "${f%.webp}" in *-800|*-1200) continue;; esac
      for w in 800 1200; do
          cwebp -quiet -q 85 -alpha_q 100 -m 6 -resize $w 0 "$f" -o "${f%.webp}-$w.webp"
      done
  done
  ```

  The ladder is sized against how `srcset` actually chooses — smallest candidate whose width is
  at least `sizes x devicePixelRatio` — not against the rendered box. A phone's column is
  `100vw - 40px` (320-390 CSS across 360-430px devices), so DPR 2 needs 640-780 (→ 800w) and DPR 3
  needs 960-1170 (→ 1200w). **Do not lower the 800 floor**: at 688 the ratio is 1.97x on a 350px
  column and a DPR 2 phone rejects it, pulling 1200 instead and saving nothing.

  Never downscale the original. It is displayed at up to 896px (the `max-w-4xl` article column), so
  at DPR 2 a desktop wants 1792px and 1376 is already slightly under. Shrinking it would soften
  text-bearing slides on exactly the screens that show them largest. Add smaller siblings instead.
  Always write real `alt` text; the viewer also sets `loading="lazy"` and reserves space via
  `aspect-ratio` in `site.css`, so missing dimensions do not shift the page.
- **Inline SVG figures** (both finance deep dives use them) follow one contract. Every figure is
  `<svg viewBox="0 0 ~700 H" width="100%" role="img" aria-label="…full description…">` with text
  and axes in `currentColor` so they follow the theme. **No blank lines inside an `<svg>`**: a blank
  line ends the HTML block in CommonMark, marked stops parsing there and DOMPurify strips the rest.
  Coloured marks carry their light-mode hex as a presentation attribute plus a `vfN` (fill) or `vsN`
  (stroke) class, which `tutorial.html` maps to the dark-mode step of the same hue; `vring` is the
  surface-coloured ring on markers. The eight hues and their order are validated for colour-vision
  deficiency on both surfaces, so keep the order. At render time the viewer wraps every
  `svg[role="img"]` in `.figure-scroll` (`site.css`), which gives figures the same 34rem floor and
  sideways scroll on phones that tables get, instead of shrinking their labels to about 5px.
  Mermaid diagrams get a similar floor from a `MutationObserver` in `tutorial.html` (their natural
  width, capped at 34rem), because Mermaid stamps `width="100%"` on its SVGs and theme toggles
  re-render them. Even so, keep tutorial flowcharts vertical (`graph TD`, or `LR` with one parent)
  and wrap long labels with `<br/>`; a wide horizontal chain or a four-lane `sequenceDiagram` is
  unreadable on a phone at any floor, so draw those as SVG figures instead.
- **"Check yourself" questions** use a native `<details><summary>Show the answer</summary>…</details>`
  block, with a blank line after `<summary>` and before `</details>` so the answer is parsed as
  Markdown. `tutorial.html` styles it for both themes; no script is involved.
- **Originals and build scripts live in `_source/<slug>/`**, which is git-ignored, so a source PDF,
  deck or Word file never gets published (the bond guide's .docx/.pptx and the commodities PDF are
  there). The **commodity-markets** deep dive is generated: its lessons are written in
  `_source/commodity-markets/src/*.md` with `{{fig:id}}` placeholders, and
  `python3 _source/commodity-markets/charts/build.py` computes every figure from cached data
  (World Bank Pink Sheet, FRED, EIA), runs the checks (em dashes, blank lines in SVG, XML validity,
  lesson links), and writes `tutorials/commodity-markets/`. Edit the `src` file, not the published
  one, or the next build will overwrite your change; `fact-ledger.md` beside it records the source
  of every recent figure.
- The **japan-economy** deep dive is generated the same way from `_source/japan-economy/`:
  `charts/fetch_data.py` caches the raw series (FRED, the BOJ time-series API, the Statistics Bureau
  CPI files, MOF yields and intervention history, IMF DataMapper), `charts/build.py` writes
  `tutorials/japan-economy/` (it also rejects figure `aria-label`s under 80 characters), and
  `checks.py` recomputes every worked example and data-derived fact in the prose. Hand-entered
  official tables (shunto history, MOF/IMF debt and creditor figures, TIC holders) sit at the top of
  their `figs_*.py` module with their source. The PDF it was built from is in the same folder.
- **Adding a deep dive**: the user drops the `<slug>/` folder; then prompt Claude to add the registry entry — a single `{ type:'tutorial', format:'deep-dive', category:'<topic>', title:…, href:'tutorial.html?slug=<slug>', lessons:N, minutes:N, updated:…, tags:[…], description:… }` object appended to `CARDS` in `hub.js`. If it opens a new subject, add a `CATEGORIES` entry and its accent classes to the marker block in `index.html`.

## Checks and generated files

Three things are generated and committed, because Cloudflare Pages serves this repo exactly as
committed and there is no build step:

```bash
node scripts/generate.mjs           # sitemap.xml, `minutes` in hub.js, the catalogue in index.html
node scripts/generate.mjs --check   # fail if any has drifted (what CI runs)
node scripts/check-site.mjs         # structural invariants
```

`check-site.mjs` asserts: every page has a viewport meta, the brand favicon, `site.css`,
`theme.js`, a non-empty title, a skip link and an `#main` target; every page has a canonical on
`guides.vinothhaldorai.com` (`tutorial.html` sets its own in JS, since each lesson is a distinct
URL); `og:image` is a PNG or
JPEG that exists; every Font Awesome icon carries `aria-hidden`; every card in `hub.js` points at a file or
tutorial that exists and uses a category that is defined; every `blueprint.md` lesson link
resolves; every slide image has its `-800` and `-1200` siblings; and every markdown image
resolves and has alt text.

`.github/workflows/ci.yml` runs both on push and pull request.

## Scaling decisions

This site has deliberately avoided a build step. That's good for now, but a few thresholds are worth pre-deciding so future Claude sessions don't reinvent the wheel:

| Threshold | What strains | Recommended response |
| --- | --- | --- |
| ~~**~15 cards**~~ *(done)* | Per-card accent palette ran out of visually distinct colors at 14. | **Actioned.** The landing page now uses one accent colour; subjects are distinguished by section headings, formats by labels and a filter. |
| **~8 cards per category** | Category sections turn into walls. | Sub-categorize (split into two `CATEGORIES` entries), or add a "Show all (N)" disclosure that hides past the first 6. |
| ~~**Authors forget to update `updated:`**~~ *(partly done)* | Reading times drifted; `updated:` still manual. | **Actioned for `minutes` and `sitemap.xml`**, generated by `scripts/generate.mjs` with a CI `--check`. `updated:` is still hand-set, since it is an editorial signal rather than a measurable one. |
| **Users ask "where do I read about X?"** | Filter only searches metadata, not the actual guide bodies. | Add [pagefind](https://pagefind.app/) — drops a static JSON index into `_pagefind/` at build time. Pure static site, still GitHub Pages compatible. |
| **CDN perf becomes a real complaint** | Tailwind Play CDN ships ~200KB on every page; Font Awesome ~80KB. | Switch to a built Tailwind CSS file (one `npx tailwindcss` invocation) and an inline Font Awesome subset. Same trigger — introduces a build step. |

**The architectural call to keep in mind:** the day you want pre-rendered `updated:` dates, full-text search across guide bodies, optimized Tailwind, or per-guide OG images, you'll want a 5-minute Node script (`glob`, a few fs reads, write `hub.js`/`pagefind` output). It's strictly additive — none of the current code needs to change. Plant the option here, don't build it yet.

### Local preview gotcha

Existing `.html` guides work via `open guides/<file>.html` (`file://`) because they don't `fetch()` anything. The tutorial viewer **does** use `fetch()` to load Markdown, so opening `tutorial.html` via `file://` will hit CORS. To preview tutorials locally, serve the directory: `python3 -m http.server` and visit `http://localhost:8000/tutorial.html?slug=<slug>`.
