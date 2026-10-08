/**
 * HOYO WISH — site data. Pity values are the shared HoYo-style model [VERIFY per patch].
 */

export const SITE = {
  brand: 'HOYO WISH',
  domain: 'hoyowish.top',
  game: 'Genshin Impact · Honkai: Star Rail · Zenless Zone Zero',
  kicker: 'Wish math // pity reviewed',
  lastVerified: '2026-10-08',
  disclaimer:
    'Unofficial fan-made toolkit. Not affiliated with or endorsed by HoYoverse / miHoYo or COGNOSPHERE. Genshin Impact, Honkai: Star Rail, Zenless Zone Zero and related marks belong to their respective owners.',
};

export const NAV = [
  { href: '/tools/', label: 'Tools' },
  { href: '/pity-calculator/', label: 'Pity Calculator' },
  { href: '/wish-tracker/', label: 'Wish Tracker' },
  { href: '/guides/how-pity-works/', label: 'Guides' },
  { href: '/about/', label: 'About' },
];

export const TOOLS = [
  { href: '/pity-calculator/', ico: '🌟', name: 'Pity Calculator', desc: 'Pulls to hard pity, odds in your next ten-pull, and the polychrome/gem budget a guarantee needs.', tag: 'Flagship' },
  { href: '/wish-tracker/', ico: '📓', name: 'Wish Tracker', desc: 'Log pulls in your browser: pity counter, 50/50 record, luck stats. Nothing leaves your device.', tag: 'Tracker' },
  { href: '/primogem-planner/', ico: '🪙', name: 'Primogem Planner', desc: 'Income per day vs days left — will your gems cover the banner before it ends?', tag: 'Calculator' },
  { href: '/fifty-fifty-stats/', ico: '🪞', name: '50/50 Stats', desc: 'Reads your tracker history: win rate, average pity per 5★, and how lucky you really are.', tag: 'Stats' },
];

export const GUIDES = [
  { href: '/guides/how-pity-works/', ico: '📘', name: 'How pity works', desc: 'The shared HoYo pity model: soft pity, hard pity, and the 50/50 guarantee — with numbers.' },
  { href: '/guides/how-to-track-wishes/', ico: '📗', name: 'How to track wishes', desc: 'Ways to log your pulls per game, and what the history file can and cannot tell you.' },
  { href: '/guides/primogem-income/', ico: '📙', name: 'Primogem income guide', desc: 'Budgeting currency across banners without spreadsheets or false hope.' },
];

const y = '2026-10-08';

export const TRUST: { slug: string; title: string; desc: string; html: string }[] = [
  {
    slug: 'about',
    title: 'About HOYO WISH – Free Wish Trackers & Pity Tools',
    desc: 'Who builds HOYO WISH, why it exists, how the tools are made. An unofficial, ad-free wish tracker and pity calculator for HoYo games.',
    html: `
<h2>Why this site exists</h2>
<p>The classic wish trackers are aging, and every HoYo game deserves the same clean math. HOYO WISH keeps the whole loop in one free place: the <a href="/pity-calculator/">pity calculator</a>, a browser-only <a href="/wish-tracker/">wish tracker</a>, the <a href="/primogem-planner/">primogem planner</a> and your personal <a href="/fifty-fifty-stats/">50/50 stats</a>.</p>
<h2>How the tools are built</h2>
<ul>
<li>Everything runs client-side. The wish tracker stores data in your browser's localStorage — it never leaves your device and has no server to leak from. See <a href="/privacy/">privacy</a>.</li>
<li>The pity model is community-documented and parameterized; every assumption is on the <a href="/methodology/">methodology page</a>.</li>
<li>Data is re-reviewed after notable patches; the review date appears on every page.</li>
</ul>
<h2>How the site is funded</h2>
<p>Currently: out of pocket, no ads, no affiliate links. Future funding will be disclosed here first.</p>
<h2>Who is behind it</h2>
<p>Maintained by an independent HoYo player. <!-- [NEEDS DATA]: add your name/bio before publishing. --> Corrections: <a href="/contact/">contact</a>.</p>
<h2>Affiliation notice</h2>
<p>${SITE.disclaimer}</p>`,
  },
  {
    slug: 'contact',
    title: 'Contact HOYO WISH – Report a Value Error',
    desc: 'Contact HOYO WISH: report wrong pity values or rates, request a game preset, or ask about the model.',
    html: `
<h2>Email</h2>
<p><strong>hello@hoyowish.top</strong><br />
<!-- [NEEDS DATA]: set up this mailbox before launch. --> Include the page URL and the game version for data reports.</p>
<h2>What to include in a report</h2>
<ol class="steps">
<li>The page and value that looks wrong (e.g. "pity calculator, soft pity start").</li>
<li>How you verified it.</li>
<li>The game and version.</li>
</ol>
<h2>Requests</h2>
<p>Missing a game preset or a feature? Roadmap on the <a href="/changelog/">changelog</a>.</p>`,
  },
  {
    slug: 'methodology',
    title: 'Methodology – Pity Model & Data Policy | HOYO WISH',
    desc: 'The exact pity model behind HOYO WISH: base rates, soft pity ramp, hard pity, 50/50 guarantee — plus sources and the [VERIFY] policy.',
    html: `
<h2>The shared pity model</h2>
<pre class="formula">rate(n)    = base + boost × max(0, n − softPity)   capped at 100%
P(within k) = 1 − (1 − r₁)(1 − r₂)…(1 − rₖ)
expected pulls = Σ P(still nothing after i−1)</pre>
<p>Default parameters for the character-banner preset [VERIFY per game & patch]: base rate 0.6%, soft pity starts ~pull 74, boost +6% per pull (community estimate), hard pity 90. Weapon/light-cone style banners use 1.6% base and 80 hard pity; the calculator exposes every parameter.</p>
<h2>The 50/50</h2>
<p>With guarantee off, every 5★ is the rate-up with probability 0.5; a loss guarantees the next. Long-run rate-up odds sit near 55% under this model [VERIFY]. The planner treats a carried guarantee as probability 1.</p>
<h2>Currency conversions</h2>
<p>Primogem-style conversions (e.g. 160 primogems per pull) are editable placeholders [VERIFY per game].</p>
<h2>The [VERIFY] policy</h2>
<p>Every game value carries a flag and the dataset a review date (currently <span class="mono">${y}</span>). Patch-day flow: re-check sources → update <code>src/data/site.ts</code> → bump date → <a href="/changelog/">changelog</a>.</p>
<h2>AI-assist disclosure</h2>
<p>Pages drafted with AI assistance, reviewed by the operator before publishing. All math is deterministic client-side code.</p>`,
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy | HOYO WISH',
    desc: 'HOYO WISH privacy in plain language: everything runs in your browser, the wish tracker lives in localStorage, no tracking cookies, no accounts.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>The short version</h2>
<ul>
<li>All tools run in your browser. <strong>Nothing you type or log is sent to any server.</strong></li>
<li>The <a href="/wish-tracker/">wish tracker</a> and <a href="/fifty-fifty-stats/">50/50 stats</a> use your browser's localStorage only. Clearing site data erases them; there is no cloud copy.</li>
<li>No advertising or tracking cookies; no analytics by default; no accounts.</li>
</ul>
<h2>Third parties</h2>
<p>Fonts load from Google Fonts — the only external request. If analytics are ever added, this page updates first with a dated <a href="/changelog/">changelog</a> note.</p>`,
  },
  {
    slug: 'terms',
    title: 'Terms of Use | HOYO WISH',
    desc: 'Terms of use for HOYO WISH: free unofficial HoYo wish tools provided as-is, with no warranty of accuracy.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>What this site is</h2>
<p>${SITE.disclaimer}</p>
<h2>Accuracy</h2>
<p>Tools are provided <strong>as is, with no warranty of accuracy</strong>. The pity model is a community estimate, not official data; verify anything that matters before spending on it.</p>
<h2>Acceptable use</h2>
<ul><li>Personal use, freely. Don't resell or rebrand the tools.</li><li>Linking is welcome and needs no permission.</li></ul>
<h2>Limitation of liability</h2>
<p>To the maximum extent permitted by law, the operator is not liable for losses arising from use of the tools, including currency spent on the strength of a calculation.</p>`,
  },
  {
    slug: 'changelog',
    title: "Changelog – What's New | HOYO WISH",
    desc: 'Every real update to HOYO WISH: new tools, model reviews after patches, fixes. Dated and honest.',
    html: `
<h2>2026-10-08 — Launch</h2>
<ul>
<li>Shipped four tools: <a href="/pity-calculator/">pity calculator</a>, <a href="/wish-tracker/">wish tracker</a> (browser-only storage), <a href="/primogem-planner/">primogem planner</a>, <a href="/fifty-fifty-stats/">50/50 stats</a>.</li>
<li>Presets for Genshin, Honkai: Star Rail and Zenless Zone Zero (shared model, adjustable) [VERIFY].</li>
<li>Three guides published: <a href="/guides/how-pity-works/">how pity works</a>, <a href="/guides/how-to-track-wishes/">tracking wishes</a>, <a href="/guides/primogem-income/">primogem income</a>.</li>
</ul>
<h2>Planned</h2>
<ul><li>Standard + weapon banner split tracking.</li><li>Export/import of tracker data — request via <a href="/contact/">contact</a>.</li></ul>`,
  },
  {
    slug: 'sitemap',
    title: 'HTML Sitemap – All Pages | HOYO WISH',
    desc: 'Every page on HOYO WISH: pity calculator, wish tracker, primogem planner, 50/50 stats, guides and site information.',
    html: '',
  },
];
