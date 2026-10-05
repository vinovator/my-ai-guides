// Static invariant checks for a repo Cloudflare serves as-is. These assert the
// things that have silently broken here before: a page shipping without a
// viewport tag or a favicon, a card pointing at a file that does not exist, a
// slide image without its responsive siblings, a canonical on the wrong host.
//
//     node scripts/check-site.mjs

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';

const HOST = 'https://guides.vinothhaldorai.com';
const IMG_WIDTHS = [800, 1200]; // must match the ladder in tutorial.html
const failures = [];
const fail = (where, msg) => failures.push(`${where}: ${msg}`);

const dirsIn = (p) =>
    readdirSync(p).filter((n) => !n.startsWith('.')).filter((n) => statSync(join(p, n)).isDirectory());

// ---- every HTML page ----------------------------------------------------
const htmlPages = ['index.html', 'tutorial.html', ...readdirSync('guides').filter((f) => f.endsWith('.html')).map((f) => join('guides', f))];

for (const page of htmlPages) {
    const html = readFileSync(page, 'utf8');
    const prefix = page.startsWith('guides/') ? '../' : '';

    if (!/<meta name="viewport"/.test(html)) fail(page, 'missing viewport meta');
    if (!html.includes(`${prefix}favicon.svg`)) fail(page, 'missing brand favicon');
    if (!html.includes(`${prefix}site.css?v=`)) fail(page, 'missing site.css');
    if (!html.includes(`${prefix}theme.js?v=`)) fail(page, 'missing theme.js');
    if (!/<title>[^<]+<\/title>/.test(html)) fail(page, 'missing or empty title');
    if (!/class="skip-link"/.test(html)) fail(page, 'missing skip link');
    if (!/id="main"/.test(html)) fail(page, 'missing #main for the skip link');

    // tutorial.html sets its canonical in JS, since each lesson is its own URL.
    if (page === 'tutorial.html') {
        if (!html.includes(`${HOST}/tutorial`)) fail(page, 'canonical does not target the subdomain');
    } else if (!new RegExp(`rel="canonical" href="${HOST}`).test(html)) {
        fail(page, 'missing canonical on the subdomain');
    }

    // Icons are decorative; the accessible name belongs on the parent.
    for (const tag of html.match(/<i class="(?:fas|far|fab)\b[^>]*>/g) || []) {
        if (!tag.includes('aria-hidden')) fail(page, `icon without aria-hidden: ${tag.slice(0, 48)}`);
    }
}

// ---- social preview image ------------------------------------------------
// Social networks do not render SVG previews, so og:image must be a raster
// file that exists.
{
    const m = readFileSync('index.html', 'utf8').match(/property="og:image" content="([^"]+)"/);
    if (!m) fail('index.html', 'missing og:image');
    else if (!/\.(png|jpe?g)$/.test(m[1])) fail('index.html', `og:image must be PNG or JPEG: ${m[1]}`);
    else if (!existsSync(m[1].replace(`${HOST}/`, ''))) fail('index.html', `og:image file missing: ${m[1]}`);
}

// ---- hub.js cards point at real content ---------------------------------
const hub = readFileSync('hub.js', 'utf8');
const hrefs = [...hub.matchAll(/href:\s*'([^']+)'/g)].map((m) => m[1]);
if (hrefs.length === 0) fail('hub.js', 'no cards found');
for (const href of hrefs) {
    if (href.startsWith('guides/')) {
        if (!existsSync(href)) fail('hub.js', `card points at a missing file: ${href}`);
    } else {
        const q = new URLSearchParams(href.split('?')[1] || '');
        const slug = q.get('slug');
        const lesson = q.get('lesson');
        if (!slug || !existsSync(join('tutorials', slug))) {
            fail('hub.js', `card points at a missing tutorial: ${href}`);
        } else if (lesson && !existsSync(join('tutorials', slug, `${lesson}.md`))) {
            fail('hub.js', `card points at a missing lesson: ${href}`);
        } else if (!lesson && !existsSync(join('tutorials', slug, 'blueprint.md'))) {
            fail('hub.js', `multi-lesson card has no blueprint.md: ${href}`);
        }
    }
}

// Every category used by a card must exist, or the card renders nowhere.
const categories = new Set([...hub.matchAll(/name:\s*'([^']+)',\s*\n\s*accent:/g)].map((m) => m[1]));
for (const used of new Set([...hub.matchAll(/category:\s*'([^']+)'/g)].map((m) => m[1]))) {
    if (!categories.has(used)) fail('hub.js', `card uses an undefined category: ${used}`);
}

// ---- blueprint lesson links resolve -------------------------------------
for (const slug of dirsIn('tutorials')) {
    const bp = join('tutorials', slug, 'blueprint.md');
    if (!existsSync(bp)) continue;
    for (const m of readFileSync(bp, 'utf8').matchAll(/\[[^\]]+\]\((?:\.\/)?([^)\s]+\.md)\)/g)) {
        if (m[1] === 'blueprint.md') continue;
        if (!existsSync(join('tutorials', slug, m[1]))) {
            fail(bp, `links to a missing lesson: ${m[1]}`);
        }
    }
}

// ---- every slide image has its responsive siblings ----------------------
for (const slug of dirsIn('tutorials')) {
    const dir = join('tutorials', slug, 'images');
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir)) {
        if (!f.endsWith('.webp')) continue;
        if (IMG_WIDTHS.some((w) => f.endsWith(`-${w}.webp`))) continue;
        for (const w of IMG_WIDTHS) {
            const sibling = `${basename(f, '.webp')}-${w}.webp`;
            if (!existsSync(join(dir, sibling))) fail(dir, `missing ${sibling} (see CLAUDE.md)`);
        }
    }
}

// ---- markdown images resolve -------------------------------------------
for (const slug of dirsIn('tutorials')) {
    const dir = join('tutorials', slug);
    for (const f of readdirSync(dir).filter((n) => n.endsWith('.md'))) {
        for (const m of readFileSync(join(dir, f), 'utf8').matchAll(/!\[([^\]]*)\]\(([^)\s]+)\)/g)) {
            if (!m[1].trim()) fail(join(dir, f), `image without alt text: ${m[2]}`);
            if (!/^https?:/.test(m[2]) && !existsSync(m[2])) {
                fail(join(dir, f), `image not found: ${m[2]}`);
            }
        }
    }
}

console.log(`[check-site] ${htmlPages.length} pages, ${hrefs.length} cards checked`);
if (failures.length) {
    console.error(`\n[check-site] ${failures.length} failure(s):`);
    for (const f of failures) console.error('  ' + f);
    process.exit(1);
}
console.log('[check-site] all invariants hold');
