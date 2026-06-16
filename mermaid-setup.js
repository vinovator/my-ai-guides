// Shared Mermaid setup for the masterclass guides and the tutorial viewer.
// Loaded as a module via <script type="module" src="…/mermaid-setup.js">.
//
// Responsibilities:
//   - Pin to mermaid@10.9.2 (10.9.3+ regressed stateDiagram-v2 / sequenceDiagram
//     parsing — "Syntax error in text").
//   - Capture each diagram's original source into data-src BEFORE mermaid replaces
//     the element content with rendered SVG, using innerHTML so <br/> in labels
//     survives the round trip (textContent would silently drop them).
//   - Expose window.__renderMermaid for theme.js to call on dark/light toggle.
//     Also expose __renderMermaidNodes so tutorial.html can render the diagrams
//     that appear after markdown parses (after this module's initial pass).
//   - Order matters: bind window.__renderMermaid BEFORE the initial mermaid.run
//     so if the initial render throws, the toggle path still works on a retry.
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10.9.2/dist/mermaid.esm.min.mjs';

function currentMermaidTheme() {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'neutral';
}

// Render a specific set of .mermaid nodes. On first call for a node, snapshot
// innerHTML into data-src; on subsequent calls (e.g. after a theme toggle),
// restore innerHTML from the snapshot, clear mermaid's data-processed mark,
// and re-run with the current theme.
async function renderNodes(nodes) {
    if (!nodes || !nodes.length) return;
    nodes.forEach(el => {
        if (!el.dataset.src) {
            el.dataset.src = el.innerHTML;
        } else {
            el.innerHTML = el.dataset.src;
        }
        el.removeAttribute('data-processed');
    });
    mermaid.initialize({ startOnLoad: false, theme: currentMermaidTheme() });
    try { await mermaid.run({ nodes }); }
    catch (e) { console.warn('Mermaid render failed', e); }
}

async function renderAll() {
    await renderNodes(document.querySelectorAll('.mermaid'));
}

// Bind BEFORE the initial run so a thrown initial render doesn't leave the
// toggle handler with an undefined window.__renderMermaid.
window.__renderMermaid = renderAll;
window.__renderMermaidNodes = renderNodes;

await renderAll();
