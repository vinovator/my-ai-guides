/* ============================================================================
   AI Hub renderer + interactivity.
   Loaded as a deferred <script> from index.html.
   ============================================================================ */

(function () {
    "use strict";

    // ------------------------------------------------------------------------
    // 1. Card registry
    //    To add a new card, append one object below and pick the right
    //    category from CATEGORIES. Required: type, category, title, href,
    //    icon, accent, badge, tags, description. Optional overrides:
    //    iconBg, iconColor, titleHover, tagBg, tagText, updated, lessons.
    // ------------------------------------------------------------------------

    const CATEGORIES = [
        { name: 'Tutorials',                cols: 3 },
        { name: 'Vendor Ecosystems',        cols: 3 },
        { name: 'Orchestration & Workflow', cols: 3 },
        { name: 'Open-Source Frameworks',   cols: 4 },
    ];

    const CARDS = [
        // ---- Vendor Ecosystems ------------------------------------------------
        {
            type: 'guide', category: 'Vendor Ecosystems',
            title: 'Semantic Kernel', href: 'guides/semantickernel.html',
            icon: 'fa-brain', accent: 'blue', iconColor: 'text-blue-700',
            badge: 'Enterprise SDK',
            tags: ['Python', 'C#', 'Java'],
            description: "Microsoft's enterprise SDK. Connects LLMs to existing code via Plugins, Planners, and Memories.",
            updated: '2026-01-18',
        },
        {
            type: 'guide', category: 'Vendor Ecosystems',
            title: 'AutoGen', href: 'guides/autogen.html',
            icon: 'fa-comments', accent: 'purple',
            badge: 'Multi-Agent Chat',
            tags: ['Python', '.NET'],
            description: 'Multi-agent conversation patterns. Orchestrate dynamic group chats for complex problem solving.',
            updated: '2025-12-03',
        },
        {
            type: 'guide', category: 'Vendor Ecosystems',
            title: 'Google ADK', href: 'guides/googleadk.html',
            icon: 'fa-circle-nodes', accent: 'teal', iconColor: 'text-teal-700',
            badge: 'Agent SDK',
            tags: ['Python', 'Gemini', 'Vertex AI'],
            description: "Google's official Agent Dev Kit. Code-first, model-agnostic, with workflow agents, callbacks, and Vertex deployment.",
            updated: '2026-06-02',
        },

        // ---- Orchestration & Workflow ----------------------------------------
        {
            type: 'guide', category: 'Orchestration & Workflow',
            title: 'LangGraph', href: 'guides/langgraph.html',
            icon: 'fa-project-diagram', accent: 'indigo',
            badge: 'Stateful Graph',
            tags: ['Python', 'JS/TS'],
            description: 'Stateful, cyclic graphs for human-in-the-loop and complex flows. The de facto standard for graph-shaped agents.',
            updated: '2025-12-21',
        },
        {
            type: 'guide', category: 'Orchestration & Workflow',
            title: 'CrewAI', href: 'guides/crewai.html',
            icon: 'fa-users-cog', accent: 'orange',
            badge: 'Crew Pattern',
            tags: ['Python'],
            description: 'Role-playing autonomous agents. Best fit for structured, process-driven automation across a defined crew.',
            updated: '2025-12-03',
        },
        {
            type: 'guide', category: 'Orchestration & Workflow',
            title: 'Haystack', href: 'guides/haystack.html',
            icon: 'fa-search', accent: 'cyan', iconColor: 'text-cyan-600',
            badge: 'RAG Pipeline',
            tags: ['Python'],
            description: 'Industrial-strength NLP pipelines with strong modularity. The go-to for production RAG and search.',
            updated: '2025-12-03',
        },

        // ---- Open-Source Frameworks ------------------------------------------
        {
            type: 'guide', category: 'Open-Source Frameworks',
            title: 'Smolagents', href: 'guides/smolagents.html',
            icon: 'fa-rocket', accent: 'yellow', iconColor: 'text-yellow-500',
            badge: 'Minimal Agents',
            tags: ['Python'],
            description: "Hugging Face's minimal, code-centric agents. The agent writes and runs Python to solve tasks.",
            updated: '2025-12-03',
        },
        {
            type: 'guide', category: 'Open-Source Frameworks',
            title: 'PydanticAI', href: 'guides/pydanticai.html',
            icon: 'fa-code', accent: 'red', iconColor: 'text-red-500',
            badge: 'Type-Safe',
            tags: ['Python'],
            description: 'Type-safe, validation-first agents for production. Pydantic schemas at every boundary.',
            updated: '2025-12-20',
        },
        {
            type: 'guide', category: 'Open-Source Frameworks',
            title: 'LlamaIndex', href: 'guides/llamaindex.html',
            icon: 'fa-database', accent: 'fuchsia',
            badge: 'Data Framework',
            tags: ['Python', 'TS'],
            description: 'Data-centric reasoning over your documents. Ingest, index, query, and route across RAG and agents.',
            updated: '2025-12-03',
        },
        {
            type: 'guide', category: 'Open-Source Frameworks',
            title: 'Phidata', href: 'guides/phidata.html',
            icon: 'fa-memory', accent: 'emerald', iconColor: 'text-emerald-500',
            badge: 'Memory-First',
            tags: ['Python'],
            description: 'Memory and database-first agentic systems. Persistent memory, tools, and team coordination, baked in.',
            updated: '2025-12-03',
        },
        {
            type: 'guide', category: 'Open-Source Frameworks',
            title: 'Swarm', href: 'guides/swarm.html',
            icon: 'fa-robot', accent: 'gray',
            iconBg: 'bg-gray-100', iconColor: 'text-gray-700', tagText: 'text-gray-600',
            badge: 'Handoff Pattern',
            tags: ['Python'],
            description: "OpenAI's experimental pattern for agent handoffs. Lightweight, stateless, ergonomic — great for prototyping.",
            updated: '2025-12-03',
        },

        // ---- Tutorials -------------------------------------------------------
        {
            type: 'tutorial', category: 'Tutorials',
            title: 'Neo4j', href: 'tutorial.html?slug=neo4j',
            icon: 'fa-project-diagram', accent: 'green',
            badge: 'Tutorial',
            tags: ['Cypher', 'GraphRAG', 'Python'],
            description: 'From complete novice to enterprise agentic context layers. Cypher, GraphRAG, and Neo4j as the memory spine for AI agents.',
            updated: '2026-06-04',
            lessons: 13,
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
        if (diff <= 0)      return 'today';
        if (diff === 1)     return 'yesterday';
        if (diff < 30)      return `${diff}d ago`;
        if (diff < 365)     return `${Math.floor(diff / 30)}mo ago`;
        return `${Math.floor(diff / 365)}y ago`;
    }

    function searchHay(card) {
        return [
            card.title, card.badge, card.description,
            ...(card.tags || []), card.category, card.type,
        ].join(' ').toLowerCase();
    }

    // ------------------------------------------------------------------------
    // 3. Card markup
    // ------------------------------------------------------------------------

    function badgeHtml(card) {
        const a = card.accent;
        if (card.type === 'tutorial') {
            return `<span class="text-xs font-mono text-${a}-700 dark:text-${a}-300 bg-${a}-50 dark:bg-${a}-900/40 border border-${a}-100 dark:border-${a}-800 px-2 py-1 rounded uppercase tracking-wide font-bold">${escapeHtml(card.badge || 'Tutorial')}</span>`;
        }
        return `<span class="text-xs font-mono text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded">${escapeHtml(card.badge)}</span>`;
    }

    function cardHtml(card) {
        const a = card.accent;
        const iconBg     = card.iconBg     || `bg-${a}-50 dark:bg-${a}-900/40`;
        const iconColor  = card.iconColor  || `text-${a}-600 dark:text-${a}-300`;
        const titleHover = card.titleHover || `group-hover:text-${a}-600 dark:group-hover:text-${a}-300`;
        const tagBg      = card.tagBg      || `bg-${a}-50 dark:bg-${a}-900/40`;
        const tagText    = card.tagText    || `text-${a}-700 dark:text-${a}-300`;
        const tagsHtml = (card.tags || []).map(t =>
            `<span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium ${tagBg} ${tagText}">${escapeHtml(t)}</span>`
        ).join('');

        // Tutorial card variant: a top ribbon + a lessons sub-line.
        const ribbon = card.type === 'tutorial'
            ? `<div class="h-1.5 bg-${a}-500 -mx-6 -mt-6 mb-4 rounded-t-xl"></div>`
            : '';
        const lessonsLine = (card.type === 'tutorial' && card.lessons)
            ? `<p class="text-xs font-medium text-${a}-700 dark:text-${a}-300 mb-2"><i class="fas fa-book-open mr-1"></i>${card.lessons} lessons</p>`
            : '';

        const hay = escapeHtml(searchHay(card));

        return `
            <a href="${escapeHtml(card.href)}" class="hub-card block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded-xl" data-search="${hay}" data-category="${escapeHtml(card.category)}">
                <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 h-full flex flex-col hover:shadow-md dark:hover:shadow-black/40 hover:border-${a}-400 dark:hover:border-${a}-500 transition-all duration-300">
                    ${ribbon}
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center">
                            <i class="fas ${card.icon} ${iconColor} text-xl"></i>
                        </div>
                        ${badgeHtml(card)}
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 ${titleHover} transition-colors">${escapeHtml(card.title)}</h3>
                    ${lessonsLine}
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">${escapeHtml(card.description)}</p>
                    <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-2 flex-wrap">${tagsHtml}</div>
                </div>
            </a>
        `;
    }

    function sectionHtml(cat, cards) {
        if (!cards.length) return '';
        const id = slugifyCategory(cat.name);
        return `
            <section id="${id}" class="hub-section mb-16" data-category="${escapeHtml(cat.name)}">
                <header class="mb-8">
                    <p class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">Category</p>
                    <div class="flex items-end gap-4">
                        <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">${escapeHtml(cat.name)}</h2>
                        <div class="h-px bg-gray-200 dark:bg-gray-700 flex-1 mb-2"></div>
                        <span class="text-xs text-gray-400 dark:text-gray-500 font-mono mb-2 hub-section-count">${cards.length}</span>
                    </div>
                </header>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cat.cols} gap-6">
                    ${cards.map(cardHtml).join('')}
                </div>
            </section>
        `;
    }

    // ------------------------------------------------------------------------
    // 4. Hero stats + recently-updated strip
    // ------------------------------------------------------------------------

    function renderHeroStats() {
        const slot = document.getElementById('hero-stats');
        if (!slot) return;
        const guides    = CARDS.filter(c => c.type === 'guide').length;
        const tutorials = CARDS.filter(c => c.type === 'tutorial').length;
        const lessons   = CARDS.reduce((n, c) => n + (c.lessons || 0), 0);
        const parts = [`${guides} guides`];
        parts.push(`${tutorials} tutorial${tutorials === 1 ? '' : 's'}`);
        if (lessons) parts.push(`${lessons} lessons live`);
        parts.push('open source');
        slot.innerHTML = parts.map(p =>
            `<span class="inline-flex items-center"><span class="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>${p}</span>`
        ).join('<span class="mx-3 text-gray-300 dark:text-gray-700">·</span>');
    }

    function renderRecentlyUpdated() {
        const slot = document.getElementById('recent-strip');
        if (!slot) return;
        const recent = [...CARDS]
            .filter(c => c.updated)
            .sort((a, b) => (a.updated < b.updated ? 1 : -1))
            .slice(0, 2);
        if (!recent.length) return;
        slot.innerHTML = `
            <section class="mb-16">
                <header class="mb-6">
                    <p class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">Editor's Pick</p>
                    <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Recently updated</h2>
                </header>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${recent.map(c => `
                        <div class="relative">
                            <span class="absolute top-3 right-3 z-10 text-xs font-mono text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800 px-2 py-0.5 rounded-full">Updated ${daysAgo(c.updated)}</span>
                            ${cardHtml(c)}
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    // ------------------------------------------------------------------------
    // 5. Sticky category nav
    // ------------------------------------------------------------------------

    function renderStickyNav() {
        const slot = document.getElementById('sticky-nav-pills');
        if (!slot) return;
        const present = CATEGORIES.filter(cat => CARDS.some(c => c.category === cat.name));
        slot.innerHTML = present.map(cat => `
            <a href="#${slugifyCategory(cat.name)}"
               class="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-300 hover:border-indigo-400 dark:hover:border-indigo-500 bg-white/70 dark:bg-gray-800/70 backdrop-blur transition-colors whitespace-nowrap">
                ${escapeHtml(cat.name)}
            </a>
        `).join('');
    }

    function setupStickyNavObserver() {
        const stickyNav = document.getElementById('sticky-nav');
        const hero = document.querySelector('header.hero');
        if (!stickyNav || !hero) return;
        const obs = new IntersectionObserver(([entry]) => {
            stickyNav.classList.toggle('-translate-y-full', entry.isIntersecting);
            stickyNav.classList.toggle('opacity-0', entry.isIntersecting);
        }, { rootMargin: '-72px 0px 0px 0px', threshold: 0 });
        obs.observe(hero);
    }

    // ------------------------------------------------------------------------
    // 6. Filter
    // ------------------------------------------------------------------------

    function setupFilter() {
        const input = document.getElementById('card-filter');
        const empty = document.getElementById('filter-empty');
        if (!input) return;

        function apply() {
            const q = input.value.toLowerCase().trim();
            let visibleTotal = 0;
            document.querySelectorAll('.hub-section').forEach(section => {
                let visibleInSection = 0;
                section.querySelectorAll('.hub-card').forEach(card => {
                    const match = !q || card.dataset.search.includes(q);
                    card.style.display = match ? '' : 'none';
                    if (match) { visibleInSection++; visibleTotal++; }
                });
                const counter = section.querySelector('.hub-section-count');
                if (counter) {
                    const total = section.querySelectorAll('.hub-card').length;
                    counter.textContent = q ? `${visibleInSection}/${total}` : total;
                }
                section.style.display = visibleInSection === 0 && q ? 'none' : '';
            });
            if (empty) empty.classList.toggle('hidden', visibleTotal > 0 || !q);
        }

        input.addEventListener('input', apply);
        // Clear with Esc.
        input.addEventListener('keydown', e => {
            if (e.key === 'Escape') { input.value = ''; apply(); }
        });
    }

    // ------------------------------------------------------------------------
    // 7. Theme toggle
    // ------------------------------------------------------------------------

    function setupThemeToggle() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // ------------------------------------------------------------------------
    // 8. Footer year
    // ------------------------------------------------------------------------

    function setFooterYear() {
        const slot = document.getElementById('copy-year');
        if (slot) slot.textContent = new Date().getFullYear();
    }

    // ------------------------------------------------------------------------
    // 9. Bootstrap
    // ------------------------------------------------------------------------

    function renderHub() {
        const hub = document.getElementById('hub');
        if (!hub) return;
        hub.innerHTML = CATEGORIES
            .map(cat => sectionHtml(cat, CARDS.filter(c => c.category === cat.name)))
            .join('');
    }

    function init() {
        renderHeroStats();
        renderRecentlyUpdated();
        renderHub();
        renderStickyNav();
        setupStickyNavObserver();
        setupFilter();
        setupThemeToggle();
        setFooterYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
