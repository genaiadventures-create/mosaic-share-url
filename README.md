# Mosaic Share Site — share.mosaicai.in

Next.js 15 + React 19 site deployed on Vercel. Handles all web-side deep links and the referral landing page for the Mosaic AI app.

## Routes

| Path | Purpose |
|---|---|
| `/` | Root (minimal placeholder) |
| `/get?ref=CODE` | Referral landing page — captures ref, shows store badges |
| `/story/detail/[id]` | Universal Link target → redirects to `mosaic://story/detail/{id}` |
| `/story/[id]` | Legacy story redirect (same behavior) |
| `/video/[id]` | Video deep link → `mosaic://video/{id}` |

---

## `/get` — Referral Landing Page

**File:** `app/get/page.tsx`

Shows a branded dark-theme page with:
- The referral code in a purple pill (if `?ref=` is present)
- App Store + Google Play download buttons
- "Already have the app? Open it here →" link using `mosaic://signup?ref=CODE`

**Behavior:**
- Stores `ref` in `sessionStorage` as `mosaic_ref` (helps pass the code if the user already has the app open in a browser tab)
- Uses `useSearchParams()` inside a `<Suspense>` boundary (required by Next.js 15 App Router)

**Deep link scheme:** `mosaic://signup?ref=CODE` — consistent with the existing `mosaic://` scheme used for story and video links.

---

## Universal Links (iOS)

`public/.well-known/apple-app-site-association` and `public/apple-app-site-association` are configured for:

```json
{
  "applinks": {
    "details": [{
      "appID": "BNNC3GC337.com.gitcuber369rn.Mosaic",
      "paths": ["/story/detail/*", "/story/detail/"]
    }]
  }
}
```

Only `/story/detail/*` is a Universal Link (auto-opens the app). The `/get` route intentionally shows the web page instead — no AASA entry needed.

---

## Development

```bash
npm run dev     # Next.js dev server with Turbopack
npm run build
npm run start
```

## Deployment

Auto-deployed on Vercel from the main branch. No environment variables required.

## Stack

- Next.js 15.5.9
- React 19.1.0
- Tailwind CSS 4
- TypeScript
