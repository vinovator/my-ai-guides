/* ============================================================================
   Guides: landing page renderer.
   Loaded as a deferred <script> from index.html.

   The page is an editorial index, not a dashboard: one featured deep dive,
   then each topic as a typographic list, then a compact row of cheat sheets.
   Weight on the page follows depth of the piece, which is the whole point of
   the site.
   ============================================================================ */

(function () {
    "use strict";

    // ------------------------------------------------------------------------
    // 1. Registry
    //
    //    Topics carry the accent, not individual cards: two hues plus gray for
    //    the whole library. Per-card accents stopped being legible at 14 cards
    //    (see the scaling table in CLAUDE.md).
    //
    //    Card fields:
    //      type        'guide' | 'tutorial'. Routing only. 'guide' links to
    //                  guides/<file>.html, 'tutorial' to tutorial.html?slug=.
    //      format      'deep-dive' | 'guide' | 'reference'. Presentation only.
    //                  Kept separate from `type` so a deep dive can one day be
    //                  a plain HTML page, and a one-file tutorial can still be
    //                  a deep dive.
    //      minutes     approximate reading time. Derived from actual word
    //                  counts at ~220wpm; code-heavy pages read slower, so
    //                  treat these as a floor. Update alongside `updated`.
    //      lessons     multi-lesson tutorials only.
    //      tags        searchable but not rendered in the lists, so they feed
    //                  the filter without adding noise to the page.
    // ------------------------------------------------------------------------

    const CATEGORIES = [
        {
            name: 'AI Engineering',
            accent: 'indigo',
            blurb: 'Agent frameworks, orchestration, and the data layer underneath them.',
        },
        {
            name: 'Finance',
            accent: 'amber',
            blurb: 'How money is priced, measured, and valued, all from first principles.',
        },
        {
            name: 'Quick reference',
            accent: 'gray',
            blurb: 'One-page cheat sheets. A couple of minutes each.',
            compact: true,
        },
    ];

    const CARDS = [
        // ---- AI Engineering --------------------------------------------------
        {
            type: 'tutorial', format: 'deep-dive', category: 'AI Engineering',
            title: 'Neo4j & GraphRAG', href: 'tutorial.html?slug=neo4j',
            tags: ['Cypher', 'GraphRAG', 'Python', 'Neo4j', 'Graph databases'],
            description: 'From complete novice to enterprise agentic context layers: Cypher, GraphRAG, and the graph as the memory spine for AI agents.',
            updated: '2026-06-04', lessons: 12, minutes: 174,
        },
        {
            type: 'guide', format: 'guide', category: 'AI Engineering',
            title: 'Google ADK', href: 'guides/googleadk.html',
            tags: ['Python', 'Gemini', 'Vertex AI', 'Agent SDK'],
            description: "Google's official Agent Dev Kit: code-first, model-agnostic, with workflow agents, callbacks, and a path to Vertex deployment.",
            updated: '2026-06-02', minutes: 17,
        },
        {
            type: 'guide', format: 'guide', category: 'AI Engineering',
            title: 'Semantic Kernel', href: 'guides/semantickernel.html',
            tags: ['Python', 'C#', 'Java', 'Enterprise SDK', 'Microsoft'],
            description: "Microsoft's enterprise SDK for connecting LLMs to code you already have, via plugins, planners, and memories.",
            updated: '2026-01-18', minutes: 12,
        },
        {
            type: 'guide', format: 'guide', category: 'AI Engineering',
            title: 'LangGraph', href: 'guides/langgraph.html',
            tags: ['Python', 'JS/TS', 'Stateful graph', 'Human in the loop'],
            description: 'Stateful, cyclic graphs for human-in-the-loop and complex flows. The de facto standard for graph-shaped agents.',
            updated: '2025-12-21', minutes: 12,
        },
        {
            type: 'guide', format: 'guide', category: 'AI Engineering',
            title: 'PydanticAI', href: 'guides/pydanticai.html',
            tags: ['Python', 'Type-safe', 'Validation'],
            description: 'Type-safe, validation-first agents for production, with Pydantic schemas at every boundary.',
            updated: '2025-12-20', minutes: 8,
        },
        {
            type: 'guide', format: 'guide', category: 'AI Engineering',
            title: 'CrewAI', href: 'guides/crewai.html',
            tags: ['Python', 'Crew pattern', 'Role-playing agents'],
            description: 'Role-playing autonomous agents, the best fit for structured, process-driven automation across a defined crew.',
            updated: '2025-12-03', minutes: 5,
        },

        // ---- Finance ---------------------------------------------------------
        {
            type: 'tutorial', format: 'deep-dive', category: 'Finance',
            title: 'Global Bond Markets', href: 'tutorial.html?slug=global-bond-markets',
            tags: ['Finance', 'Macro', 'Fixed income', 'Yield curve', 'Duration'],
            description: 'The base price of money, explained from zero: the price-yield seesaw, duration, the curve, and eight episodes where the bond market broke something.',
            updated: '2026-09-27', lessons: 9, minutes: 97,
        },
        {
            type: 'tutorial', format: 'deep-dive', category: 'Finance',
            title: 'Investment Valuation',
            href: 'tutorial.html?slug=investment-valuation&lesson=valuation-from-zero-a-complete-guide',
            tags: ['Finance', 'DCF', 'Accounting', 'Multiples'],
            description: 'From zero to a defensible business valuation: accounting fundamentals, DCF, and multiples, built history-forward around one fictional company.',
            updated: '2026-06-15', lessons: 1, minutes: 48,
        },

        // ---- Quick reference -------------------------------------------------
        {
            type: 'guide', format: 'reference', category: 'Quick reference',
            title: 'AutoGen', href: 'guides/autogen.html',
            tags: ['Python', '.NET', 'Multi-agent chat', 'Microsoft'],
            description: 'Multi-agent conversation patterns and group-chat orchestration.',
            updated: '2025-12-03', minutes: 2,
        },
        {
            type: 'guide', format: 'reference', category: 'Quick reference',
            title: 'Haystack', href: 'guides/haystack.html',
            tags: ['Python', 'RAG', 'Pipelines', 'Search'],
            description: 'Industrial-strength NLP pipelines for production RAG and search.',
            updated: '2025-12-03', minutes: 2,
        },
        {
            type: 'guide', format: 'reference', category: 'Quick reference',
            title: 'LlamaIndex', href: 'guides/llamaindex.html',
            tags: ['Python', 'TS', 'Data framework', 'RAG'],
            description: 'Data-centric reasoning over your documents: ingest, index, query, route.',
            updated: '2025-12-03', minutes: 2,
        },
        {
            type: 'guide', format: 'reference', category: 'Quick reference',
            title: 'Phidata', href: 'guides/phidata.html',
            tags: ['Python', 'Memory', 'Tools'],
            description: 'Memory and database-first agentic systems with persistent state.',
            updated: '2025-12-03', minutes: 2,
        },
        {
            type: 'guide', format: 'reference', category: 'Quick reference',
            title: 'Smolagents', href: 'guides/smolagents.html',
            tags: ['Python', 'Hugging Face', 'Code agents'],
            description: "Hugging Face's minimal agents, where the agent writes and runs Python.",
            updated: '2025-12-03', minutes: 2,
        },
        {
            type: 'guide', format: 'reference', category: 'Quick reference',
            title: 'Swarm', href: 'guides/swarm.html',
            tags: ['Python', 'OpenAI', 'Handoff pattern'],
            description: "OpenAI's experimental pattern for lightweight agent handoffs.",
            updated: '2025-12-03', minutes: 2,
        },
    ];

    // ------------------------------------------------------------------------
    // 2. Helpers
    // ------------------------------------------------------------------------

    function escapeHtml(s) {
        return String(s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function slugifyCategory(name) {
        return 'cat-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }

    function daysAgo(dateStr) {
        const d = new Date(dateStr + 'T00:00:00Z');
        const diff = Math.floor((Date.now() - d.getTime()) / 86400000);
        if (diff <= 0)  return 'today';
        if (diff === 1) return 'yesterday';
        if (diff < 30)  return `${diff}d ago`;
        if (diff < 365) return `${Math.floor(diff / 30)}mo ago`;
        return `${Math.floor(diff / 365)}y ago`;
    }

    // Freshness is only worth showing while it is actually fresh; stamping a
    // date on every row just makes older-but-still-good pieces look stale.
    function isRecent(dateStr) {
        const d = new Date(dateStr + 'T00:00:00Z');
        return (Date.now() - d.getTime()) / 86400000 < 60;
    }

    function readingTime(min) {
        if (!min) return null;
        if (min < 60) return `${min} min`;
        const h = Math.floor(min / 60);
        const m = min % 60;
        return m ? `${h} hr ${m} min` : `${h} hr`;
    }

    const FORMAT_LABEL = {
        'deep-dive': 'Deep dive',
        'guide': 'Guide',
        'reference': 'Cheat sheet',
    };

    function accentFor(categoryName) {
        const cat = CATEGORIES.find(c => c.name === categoryName);
        return cat ? cat.accent : 'gray';
    }

    function searchHay(card) {
        return [
            card.title, card.description, FORMAT_LABEL[card.format],
            ...(card.tags || []), card.category, card.type,
        ].join(' ').toLowerCase();
    }

    // The meta line under each entry: what it is, how long it is, how fresh.
    function metaParts(card) {
        const parts = [FORMAT_LABEL[card.format]];
        if (card.lessons) parts.push(`${card.lessons} lesson${card.lessons === 1 ? '' : 's'}`);
        const t = readingTime(card.minutes);
        if (t) parts.push(t);
        if (card.updated && isRecent(card.updated)) parts.push(`updated ${daysAgo(card.updated)}`);
        return parts;
    }

    // ------------------------------------------------------------------------
    // 3. Entry markup
    //
    //    `.hub-card`, `data-search` and `data-category` are the hooks the live
    //    filter and the section counters key off, so keep them on every entry,
    //    including the compact cheat-sheet chips.
    // ------------------------------------------------------------------------

    function entryHtml(card) {
        const a = accentFor(card.category);
        const meta = metaParts(card).map(escapeHtml).join(' <span class="text-gray-300 dark:text-gray-600">·</span> ');
        return `
            <li>
                <a href="${escapeHtml(card.href)}"
                   class="hub-card group block py-5 sm:py-6 border-t border-gray-100 dark:border-gray-800 transition-colors"
                   data-search="${escapeHtml(searchHay(card))}" data-category="${escapeHtml(card.category)}">
                    <div class="flex items-baseline gap-3">
                        <h3 class="display text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-${a}-600 dark:group-hover:text-${a}-400 transition-colors">${escapeHtml(card.title)}</h3>
                        <span aria-hidden="true" class="text-${a}-600 dark:text-${a}-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all">&rarr;</span>
                    </div>
                    <p class="mt-1.5 text-[15px] sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">${escapeHtml(card.description)}</p>
                    <p class="mt-2 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-500">${meta}</p>
                </a>
            </li>`;
    }

    // Cheat sheets get a chip, not a row: they are 2% of the library's words
    // and should not occupy 43% of the page.
    function chipHtml(card) {
        return `
            <a href="${escapeHtml(card.href)}"
               class="hub-card inline-flex items-baseline gap-2 px-3 py-3 lg:py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
               data-search="${escapeHtml(searchHay(card))}" data-category="${escapeHtml(card.category)}">
                ${escapeHtml(card.title)}
                <span class="text-xs text-gray-400 dark:text-gray-500">${card.minutes} min</span>
            </a>`;
    }

    function sectionHtml(cat, cards) {
        if (!cards.length) return '';
        const id = slugifyCategory(cat.name);
        const body = cat.compact
            ? `<div class="flex flex-wrap gap-2 pt-5 border-t border-gray-100 dark:border-gray-800">${cards.map(chipHtml).join('')}</div>`
            : `<ul>${cards.map(entryHtml).join('')}</ul>`;
        return `
            <section id="${id}" class="hub-section mb-14 sm:mb-20" data-category="${escapeHtml(cat.name)}">
                <header class="mb-4 flex items-baseline gap-3">
                    <h2 class="display text-xl sm:text-2xl font-bold text-${cat.accent}-700 dark:text-${cat.accent}-400 tracking-tight">${escapeHtml(cat.name)}</h2>
                    <span class="text-xs font-mono text-gray-400 dark:text-gray-500 hub-section-count">${cards.length}</span>
                </header>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2 max-w-2xl">${escapeHtml(cat.blurb)}</p>
                ${body}
            </section>`;
    }

    // ------------------------------------------------------------------------
    // 4. Featured: the most recent deep dive
    //
    //    Derived, never hand-flagged, so it cannot go stale. The featured piece
    //    is suppressed from its topic list below, so nothing appears twice.
    // ------------------------------------------------------------------------

    function featuredCard() {
        return [...CARDS]
            .filter(c => c.format === 'deep-dive' && c.updated)
            .sort((a, b) => (a.updated < b.updated ? 1 : -1))[0] || null;
    }

    function renderFeatured() {
        const slot = document.getElementById('featured');
        if (!slot) return;
        const c = featuredCard();
        if (!c) return;
        const a = accentFor(c.category);
        const meta = metaParts(c).map(escapeHtml).join(' <span class="text-gray-300 dark:text-gray-600">·</span> ');
        slot.innerHTML = `
            <a href="${escapeHtml(c.href)}"
               class="hub-featured group block rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/40 p-6 sm:p-8 hover:border-${a}-400 dark:hover:border-${a}-500 transition-colors">
                <p class="text-xs font-bold uppercase tracking-widest text-${a}-600 dark:text-${a}-400 mb-3">Latest deep dive</p>
                <h2 class="display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-3 group-hover:text-${a}-700 dark:group-hover:text-${a}-300 transition-colors">${escapeHtml(c.title)}</h2>
                <p class="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-4">${escapeHtml(c.description)}</p>
                <p class="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">${meta}</p>
                <span class="inline-flex items-center gap-2 text-sm font-semibold text-${a}-700 dark:text-${a}-300">
                    Start reading
                    <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
            </a>`;
    }

    // ------------------------------------------------------------------------
    // 4b. Breadth: what this library covers
    //
    //     The editorial format leads with one piece, which buries the fact that
    //     the site spans more than one subject. Measured, no topic heading was
    //     visible in the first screen at any width. Publications solve this with
    //     a standing section bar plus a contents page; these are both of those.
    // ------------------------------------------------------------------------

    function presentCategories() {
        return CATEGORIES
            .map(cat => ({ cat, items: CARDS.filter(c => c.category === cat.name) }))
            .filter(x => x.items.length);
    }

    function renderMastheadTopics() {
        const slot = document.getElementById('masthead-topics');
        if (!slot) return;
        slot.innerHTML = presentCategories().map(({ cat, items }) => `
            <a href="#${slugifyCategory(cat.name)}"
               class="inline-flex items-center py-3 lg:py-0 font-medium text-gray-600 dark:text-gray-300 hover:text-${cat.accent}-700 dark:hover:text-${cat.accent}-400 transition-colors whitespace-nowrap">
                ${escapeHtml(cat.name)}
                <span class="text-xs text-gray-400 dark:text-gray-500">${items.length}</span>
            </a>
        `).join('');
    }

    function renderTopicIndex() {
        const slot = document.getElementById('topic-index');
        if (!slot) return;
        const tiles = presentCategories().map(({ cat, items }) => {
            const mins = items.reduce((n, c) => n + (c.minutes || 0), 0);
            const t = readingTime(mins);
            return `
                <a href="#${slugifyCategory(cat.name)}"
                   class="group flex-1 min-w-[9rem] rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-${cat.accent}-400 dark:hover:border-${cat.accent}-500 transition-colors">
                    <div class="flex items-baseline gap-2">
                        <span class="display font-bold text-${cat.accent}-700 dark:text-${cat.accent}-400">${escapeHtml(cat.name)}</span>
                        <span class="text-xs font-mono text-gray-400 dark:text-gray-500">${items.length}</span>
                    </div>
                    <p class="hidden sm:block mt-1.5 text-sm text-gray-600 dark:text-gray-400 leading-snug">${escapeHtml(cat.blurb)}</p>
                    <p class="mt-1 sm:mt-2 text-xs text-gray-500 dark:text-gray-500">${t}</p>
                </a>`;
        }).join('');
        slot.innerHTML = `
            <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Browse by topic</p>
            <div class="flex flex-wrap gap-3">${tiles}</div>`;
    }

    // ------------------------------------------------------------------------
    // 5. Library stats: depth is the differentiator, so lead with it
    // ------------------------------------------------------------------------

    function renderStats() {
        const slot = document.getElementById('library-stats');
        if (!slot) return;
        const pieces = CARDS.length;
        const mins = CARDS.reduce((n, c) => n + (c.minutes || 0), 0);
        const hours = Math.round(mins / 60);
        const dives = CARDS.filter(c => c.format === 'deep-dive').length;
        const parts = [
            `${pieces} pieces`,
            `${dives} deep dives`,
            `~${hours} hours of reading`,
            'open source',
        ];
        slot.innerHTML = parts.join('<span class="mx-2 text-gray-300 dark:text-gray-700">·</span>');
    }

    // ------------------------------------------------------------------------
    // 6. Sticky topic nav
    // ------------------------------------------------------------------------

    function renderStickyNav() {
        const slot = document.getElementById('sticky-nav-pills');
        if (!slot) return;
        const present = CATEGORIES.filter(cat => CARDS.some(c => c.category === cat.name));
        slot.innerHTML = present.map(cat => `
            <a href="#${slugifyCategory(cat.name)}"
               class="text-xs font-semibold px-3.5 py-3.5 lg:px-3 lg:py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-${cat.accent}-700 dark:hover:text-${cat.accent}-300 hover:border-${cat.accent}-400 dark:hover:border-${cat.accent}-500 bg-white/70 dark:bg-gray-800/70 backdrop-blur transition-colors whitespace-nowrap">
                ${escapeHtml(cat.name)}
            </a>
        `).join('');
    }

    function setupStickyNavObserver() {
        const stickyNav = document.getElementById('sticky-nav');
        // Watch the statement block, not the masthead: the masthead is
        // position:sticky and therefore never leaves the viewport, so
        // observing it would pin the topic bar hidden forever.
        const sentinel = document.querySelector('main > header');
        if (!stickyNav || !sentinel) return;
        const obs = new IntersectionObserver(([entry]) => {
            stickyNav.classList.toggle('-translate-y-full', entry.isIntersecting);
            stickyNav.classList.toggle('opacity-0', entry.isIntersecting);
        }, { rootMargin: '-72px 0px 0px 0px', threshold: 0 });
        obs.observe(sentinel);
    }

    // ------------------------------------------------------------------------
    // 7. Filter
    // ------------------------------------------------------------------------

    function setupFilter() {
        const input = document.getElementById('card-filter');
        const empty = document.getElementById('filter-empty');
        const featured = document.getElementById('featured');
        if (!input) return;

        function apply() {
            const q = input.value.toLowerCase().trim();
            let visibleTotal = 0;
            document.querySelectorAll('.hub-section').forEach(section => {
                let visibleInSection = 0;
                section.querySelectorAll('.hub-card').forEach(card => {
                    const match = !q || card.dataset.search.includes(q);
                    // list entries are wrapped in <li>; chips are not
                    const host = card.parentElement && card.parentElement.tagName === 'LI'
                        ? card.parentElement : card;
                    host.style.display = match ? '' : 'none';
                    if (match) { visibleInSection++; visibleTotal++; }
                });
                const counter = section.querySelector('.hub-section-count');
                if (counter) {
                    const total = section.querySelectorAll('.hub-card').length;
                    counter.textContent = q ? `${visibleInSection}/${total}` : total;
                }
                section.style.display = visibleInSection === 0 && q ? 'none' : '';
            });
            // The featured block is an editorial choice, not a search result.
            if (featured) featured.style.display = q ? 'none' : '';
            if (empty) empty.classList.toggle('hidden', visibleTotal > 0 || !q);
        }

        input.addEventListener('input', apply);
        input.addEventListener('keydown', e => {
            if (e.key === 'Escape') { input.value = ''; apply(); }
        });
    }

    // ------------------------------------------------------------------------
    // 8. Bootstrap
    // ------------------------------------------------------------------------

    function setFooterYear() {
        const slot = document.getElementById('copy-year');
        if (slot) slot.textContent = new Date().getFullYear();
    }

    function renderIndex() {
        const root = document.getElementById('hub');
        if (!root) return;
        // Every card appears in its topic list, including the featured one.
        // The featured block above is a different treatment of the same piece,
        // not a replacement for its index entry.
        root.innerHTML = CATEGORIES
            .map(cat => sectionHtml(cat, CARDS.filter(c => c.category === cat.name)))
            .join('');
    }

    function init() {
        renderStats();
        renderMastheadTopics();
        renderTopicIndex();
        renderFeatured();
        renderIndex();
        renderStickyNav();
        setupStickyNavObserver();
        setupFilter();
        setFooterYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
