// Shared dark/light theme toggle for the whole site (hub, guides, tutorial viewer).
// Pages get the no-flash <dark> class applied by a tiny inline snippet in <head>
// BEFORE Tailwind paints; this file owns the runtime toggle, persistence, and
// re-rendering of any Mermaid diagrams on the page (Mermaid bakes its SVGs at
// init time, so the diagram has to be re-run when the theme flips).
(function () {
    'use strict';

    function isDark() {
        return document.documentElement.classList.contains('dark');
    }

    function apply(nextDark) {
        if (nextDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        try { localStorage.setItem('theme', nextDark ? 'dark' : 'light'); }
        catch (e) { /* localStorage may be unavailable (private mode etc.) */ }

        // Let Mermaid-using pages re-render with the new theme. Each such page
        // exposes window.__renderMermaid() which restores source from a captured
        // dataset attribute, re-initializes mermaid with the current theme, and
        // calls mermaid.run() again.
        if (typeof window.__renderMermaid === 'function') {
            try { window.__renderMermaid(); }
            catch (e) { console.warn('Mermaid re-render failed', e); }
        }
    }

    function setup() {
        // Pages now carry two toggles: one in the sidebar (visible on desktop)
        // and one in the mobile top bar. Bind every match, not just the first.
        var btns = document.querySelectorAll('#theme-toggle, [data-theme-toggle]');
        if (!btns.length) return;
        Array.prototype.forEach.call(btns, function (btn) {
            btn.addEventListener('click', function () {
                apply(!isDark());
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
})();
