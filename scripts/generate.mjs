// Regenerates the two things that were hand-maintained and therefore drifted:
// sitemap.xml, and the `minutes` reading time on every card in hub.js.
//
// The site has no build step and Cloudflare serves the repo as-is, so the
// output is committed rather than produced at deploy time. Run this after
// adding or editing content:
//
//     node scripts/generate.mjs           write the files
//     node scripts/generate.mjs --check   fail if they are out of date (CI)

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';

// macOS drops .DS_Store into content folders; never treat one as a tutorial.
const dirsIn = (p) =>
    readdirSync(p)
        .filter((n) => !n.startsWith('.'))
        .filter((n) => statSync(join(p, n)).isDirectory())
        .sort();

const HOST = 'https://guides.vinothhaldorai.com';
const WPM = 220; // prose; code-heavy pages read slower, so this is a floor
const check = process.argv.includes('--check');
const problems = [];

const words = (s) => s.split(/\s+/).filter(Boolean).length;
const visibleWords = (html) =>
    words(html.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' '));

// ---- reading times ------------------------------------------------------
// A guide is one HTML file. A deep dive is a folder of markdown, minus the
// blueprint, which is a table of contents rather than a lesson.
function minutesForGuide(file) {
    // Round up: a reading time should never undersell how long a page takes.
    return Math.max(1, Math.ceil(visibleWords(readFileSync(file, 'utf8')) / WPM));
}

function minutesForTutorial(slug) {
    const dir = join('tutorials', slug);
    let total = 0;
    for (const f of readdirSync(dir)) {
        if (!f.endsWith('.md') || f === 'blueprint.md') continue;
        total += words(readFileSync(join(dir, f), 'utf8'));
    }
    return Math.max(1, Math.ceil(total / WPM));
}

// ---- hub.js -------------------------------------------------------------
const hubPath = 'hub.js';
let hub = readFileSync(hubPath, 'utf8');
const before = hub;

// Each card object is matched by its href, which is the stable identifier.
const cardRe = /href:\s*'([^']+)'[\s\S]*?minutes:\s*(\d+)/g;
hub = hub.replace(cardRe, (match, href, current) => {
    let mins;
    if (href.startsWith('guides/')) {
        mins = existsSync(href) ? minutesForGuide(href) : null;
    } else {
        const slug = new URLSearchParams(href.split('?')[1] || '').get('slug');
        mins = slug && existsSync(join('tutorials', slug)) ? minutesForTutorial(slug) : null;
    }
    if (mins === null) {
        problems.push(`hub.js: cannot resolve content for ${href}`);
        return match;
    }
    if (String(mins) !== current) {
        problems.push(`hub.js: ${href} minutes ${current} -> ${mins}`);
    }
    return match.replace(/minutes:\s*\d+/, `minutes: ${mins}`);
});

// ---- sitemap ------------------------------------------------------------
const urls = [`${HOST}/`];
for (const f of readdirSync('guides').sort()) {
    if (f.endsWith('.html')) urls.push(`${HOST}/guides/${basename(f, '.html')}`);
}
for (const slug of dirsIn('tutorials')) {
    const dir = join('tutorials', slug);
    const files = readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
    if (files.includes('blueprint.md')) urls.push(`${HOST}/tutorial?slug=${slug}`);
    for (const f of files) {
        if (f === 'blueprint.md') continue;
        urls.push(`${HOST}/tutorial?slug=${slug}&amp;lesson=${basename(f, '.md')}`);
    }
}
const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
    '\n</urlset>\n';

const sitemapPath = 'sitemap.xml';
const sitemapCurrent = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : '';
if (sitemapCurrent !== sitemap) problems.push(`sitemap.xml is out of date (${urls.length} urls)`);

// ---- write or report ----------------------------------------------------
if (check) {
    if (problems.length) {
        console.error('[generate --check] out of date:');
        for (const p of problems) console.error('  ' + p);
        console.error('\nRun `node scripts/generate.mjs` and commit the result.');
        process.exit(1);
    }
    console.log(`[generate --check] hub.js minutes and sitemap.xml (${urls.length} urls) are current`);
} else {
    if (hub !== before) writeFileSync(hubPath, hub);
    writeFileSync(sitemapPath, sitemap);
    console.log(`[generate] sitemap.xml: ${urls.length} urls`);
    if (problems.length) {
        console.log('[generate] updated:');
        for (const p of problems) console.log('  ' + p);
    } else {
        console.log('[generate] nothing changed');
    }
}
