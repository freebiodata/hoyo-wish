# HOYO WISH — cross-game wish tracker & pity tools (Astro)

Unofficial fan-made wish math for **Genshin Impact, Honkai: Star Rail, Zenless Zone Zero**. Domain: **https://hoyowish.top**.

## Stack & commands
Astro 5, static output, vanilla JS islands (tracker uses localStorage only). `npm install` → `npm run dev` / `npm run build` → deploy `dist/`.

## Pages (17)
`/` · `/tools/` · tools: `/pity-calculator/`, `/wish-tracker/`, `/primogem-planner/`, `/fifty-fifty-stats/` ·
guides: `/guides/how-pity-works/`, `/guides/how-to-track-wishes/`, `/guides/primogem-income/` ·
trust pages from `src/data/site.ts` via `src/pages/[slug].astro` · `404`.

## Design
Soft anime night theme: dark indigo, pink/cyan, starfield backdrop, Baloo 2 headings, 18px rounding — distinct per-game identity.

## Privacy architecture
The wish tracker stores data exclusively in the visitor's localStorage (key `hoyowish-tracker-v1`). No server, no sync, no accounts. `/fifty-fifty-stats/` reads the same key client-side.

## [NEEDS DATA] before launch
1. Verify pity parameters (soft-pity ramp, retention windows, currency conversions) in `site.ts` + tool pages [VERIFY flags].
2. About page operator bio (placeholder comment in `site.ts`).
3. Mailbox for `hello@hoyowish.top`.
