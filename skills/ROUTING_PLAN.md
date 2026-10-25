## Routing plan for the new landing page (parent agent decision, 2026-10-23)

- New page lives at `app/home/page.tsx` (route `/home`), built from scratch; `app/page.tsx` (current share.mosaicai.in root) is NOT modified.
- `next.config.ts` gets a host-based rewrite: requests to `mosaicai.in` or `www.mosaicai.in` with path `/` are rewritten to `/home`. share.mosaicai.in keeps serving `app/page.tsx` at `/`. All other routes (`/get`, `/story/*`, `/video/*`, `/privacy-policy`, `/terms-and-conditions`, `/delete-account`, verification txt files, AASA) stay identical on every host.
- `/home` must set `alternates.canonical = "https://mosaicai.in/"` and `robots: { index: true }`; and `app/page.tsx` later gets `canonical = https://mosaicai.in/` too (handled by parent, not now).
- `app/sitemap.ts` and `app/robots.ts` are new (Next metadata routes). Sitemap base URL https://mosaicai.in, listing `/`, `/get`, `/privacy-policy`, `/terms-and-conditions`.
- OG image: `app/home/opengraph-image.tsx` (ImageResponse, 1200×630) using the Kayden astronaut illustration + plain Satoshi headline; no gradient text.
- Fonts: self-hosted from `public/fonts/` via `next/font/local` (Satoshi-Variable.ttf for everything; Kalam-Regular.ttf ONLY for the actual story excerpt text). Do not load Geist on /home.
- Hero video: `<video muted autoPlay loop playsInline preload="none" poster="/video/kayden_hero_poster.jpg">` with webm then mp4 sources; hidden (poster only) under `prefers-reduced-motion`.
- Read-along demo: client component; fetches `/story-audio/kayden_ch1.words.json`, plays `/story-audio/kayden_ch1.mp3` on tap, highlights the current word via `timeupdate`. Must be keyboard-operable and have a visible play/pause control; audio never autoplays.
- Scroll reveal: a tiny IntersectionObserver client component (no animation library), one transition (opacity + 12px translateY, 400ms, cubic-bezier(0.2,0,0,1)), disabled under reduced motion. Do not add framer-motion or any npm dependency.
- JSON-LD from the brief's section 8 goes in `/home` as a `<script type="application/ld+json">` with the verified claims table (section 10) applied — the brief's claims table wins over the brief's earlier draft FAQ copy.
