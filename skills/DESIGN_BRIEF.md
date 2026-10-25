# mosaicai.in: design brief

**What the page must do:** a parent who has never heard of Mosaic should understand in under 10 seconds that *their own kid* becomes the hero of an illustrated, narrated story tonight, see a real one, and tap a store badge.
**Audience:** parents of 3–10-year-olds, on a phone, usually at night, often holding a child.
**Feeling:** the last ten minutes of the day. A dim room, one lamp on, a book open. The page should be calm and confident and specific. It should not try to be magical or futuristic.

---

## 1. What we learned

### 1a. Why pages read as AI slop
Models output the middle of their training data. That middle is a decade of SaaS templates and shadcn defaults. These sources independently list the same tells:
- **AHD Slop Taxonomy** (https://github.com/Ad-Astra-Computing/ahd/blob/main/docs/SLOP_TAXONOMY.md): "If you can tick more than four in a row on a page, you are looking at slop." Its list includes the purple-to-blue hero gradient, the centred hero stack (pill badge, 48–72px headline, 18px subhead, two CTAs), three feature cards with an icon in a rounded square, emoji bullets, glassmorphism, "`#0a0a0a` and one neon accent", gradient text, fake testimonials, and fade-up on every element.
- **OIM3690 "The Generic AI Look"** (https://oim3690.github.io/guides/ai-slop/): "pick one accent color you can defend… solid-color headings; build hierarchy with size, weight, and spacing… Warmth belongs in the writing."
- **Mowgli, 15 tells** (https://mowgli.ai/blog/why-ai-built-apps-look-the-same): "Left-align; show the product itself"; "One real number, or none"; "Emoji as icons → Delete them."
- **Anthropic `frontend-design` skill** (vendored in `skills/frontend-design/`) names the *second-order* defaults that de-slop passes fall into: cream + terracotta, near-black + one acid accent, ALL-CAPS eyebrows, `A · B · C` meta strings, a `→` on every button, and one coloured word in the headline.
- **DevelopersDigest** (https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it) calls out "VibeCode Purple" on permanent dark mode, and grey body text that fails WCAG AA.

**Our problem:** the brand really is purple on dark. So we can't escape the cliché by changing palette. We escape it through restraint, real imagery, typography and copy. The current page trips 8+ tells. The bundled scanner flags gradient headline text (L208, L295), the pill badge + centred hero, an accented headline word, and middle-dot strings. By eye it also has a blur blob, emoji in fake phone mockups, three icon cards, and "Magical… in 10 Seconds".

### 1b. What good kids/family sites do
I inspected these live with computed styles on 2026-10-23:

| Site | Type | Imagery | Copy voice |
|---|---|---|---|
| **Lovevery** (https://lovevery.com) | One custom face (BrownPro) for everything. Hero 40px/700, **left-aligned**. Section heads 30–48px. | Real photos of real kids using the product; the product is the hero. | "Raise curious, capable kids." "We did all the research so you don't have to." One precise proof line: "4.9/5 from 21K+ happy families." |
| **Yoto** (https://us.yotoplay.com) | Custom headline face, H1 60px/700, left-aligned. 18px/24px body in a dark green (`#003C1F`), not grey. | The real player and real cards in real homes ("Yoto in the wild"). | Warm and specific: the headline "Ugga Mugga, neighbor!" is a licensed-content line kids recognise. |
| **Moshi** (https://www.moshikids.com) | Rounded, friendly display type. | Asymmetric hero: a real app screen on a tilted tablet that bleeds off the right edge, with the left side left empty for the headline. One coral CTA against mint. | Testimonials are first-name only and very specific: "My son was out in 10 min on night 1… every night since, in 5." |
| **Khan Academy Kids** (https://www.khanacademy.org/kids) | Fredoka, with body at **24px/40px**: big, readable, unhurried. | A photo of a real child using the app, plus real game screenshots. | Plain about data: "We don't sell personal information. We don't show ads." |
| **Epic** (https://www.getepic.com) | Big statement H1. | A carousel of **real book covers**. The catalogue is the proof. | Concrete numbers: "over 40,000… books", "As low as $7.25/month". |
| **Lingokids** (https://lingokids.com) | Big, playful display type. | Real show covers in a strip. | A parent's in-joke as a headline: *Made for "5 more minutes"*. |
| **Tonies** (https://us.tonies.com) | Short headlines. | Product on a full-width banner. | "Big listening starts small." |
| **Linear** (https://linear.app), craft reference | Dark `#08090A`. H1 64px, weight 510, tracking −1.4px. H2 48px/−1.05px. Body 15px/24px in muted `#8A8F98`. | Real product UI, nothing illustrative. | Declarative, no exclamation marks. |

**What they share:** none of them sells "AI" or "magic". Each shows the **actual thing** large: a product, a child, a screen, covers. Heroes are left-aligned or asymmetric. Each uses one typeface family, sized and weighted for hierarchy. Each has one CTA colour. Proof is a precise number or a precise sentence from a parent.

---

## 2. Design rules

### Typography
1. **Satoshi Variable** (already at `public/fonts/Satoshi-Variable.ttf`) for all UI and headings. **Kalam** is used *only* for story text, meaning sentences that come from a real story. Kalam never appears in headings, buttons or nav. The handwriting signals "this is the story"; everything else is the parent-facing frame.
2. **Scale (mobile → ≥1024px):**
   - Display / H1: 40px → 72px, Satoshi 700, line-height 1.02, tracking −0.025em. One per page.
   - H2: 30px → 44px, 700, lh 1.1, tracking −0.02em.
   - H3: 20px → 24px, 600, lh 1.25.
   - Lead: 19px → 22px, 400, lh 1.5.
   - Body: 17px → 18px, 400, lh 1.6. Never below 16px on mobile, because parents read this one-handed in the dark.
   - Story excerpt (Kalam 400): 22px → 28px, lh 1.55.
   - Small / legal: 14px, lh 1.5. Nothing smaller.
3. Measure: 34–62ch for body, ≤ 20ch per line for H1. Headings are sentence case, never all-caps, and have no eyebrow labels above them.
4. Emphasis comes from size and weight only. No gradient text, no single coloured or italic word in a headline.

### Spacing & layout
5. 4px base, using only these steps: **4, 8, 12, 16, 24, 32, 48, 64, 96, 128**.
6. Vertical rhythm between sections: 96px mobile, 128px desktop. Inside a section: 48px heading → content, 24px heading → paragraph.
7. Container max 1200px. Text columns max 640px. Gutters 20px mobile, 32px tablet, 48px desktop.
8. **Default alignment is left.** Center only the final CTA block. Use a 12-column grid with asymmetric splits (7/5 or 5/7), never 4/4/4.
9. Radius has a hierarchy: illustrations 20px, phone screenshots keep their device radius, buttons 12px, inputs 12px, the page itself 0. No pills except the two store badges, which follow Apple and Google artwork rules.
10. No cards around text. Separate sections with space and, at most, a 1px `rgba(255,255,255,0.08)` hairline. If something needs a surface, use flat `#1A1B2E`: no border glow, no blur, no shadow larger than 8px.

### Colour
11. **Base:** `#0F0A1E` (night) for the page and `#1A1B2E` for raised surfaces. Text is `#F4F1FA` (primary) and `#B0B0B0` (secondary, about 9:1 on night, AA-safe). Don't use `#111` or pure black; the night violet is ours and it fits bedtime.
12. **Usage ratio per screen:** about 85% night and surface, 10% illustration colour, ≤5% brand purple. **`#A259FF` appears at most twice per viewport:** once for the primary CTA, once for a single functional accent (link, focus ring, the active word in a narration demo). `#B793FF` is only for hover and focus states. `#AA00FF` and `#6B00C3` are not used on the site.
13. **Blue `#68B3FF`** is reserved for one meaning: "this is being read aloud right now". It is used in the narration demo, nowhere else.
14. **No decorative gradients and no blur blobs.** The only permitted gradient is the app's real narration highlight, and only when it appears in a real screenshot.
15. Warm colour comes from the illustrations (candle gold, sunsets), never from UI chrome.

### Imagery
16. **Use only real assets.** Illustrations come from `public/stories/*.jpg`, rendered by the pipeline and catalogued in `public/ASSETS.md`. App screens come from `public/app/*.jpg` (real App Store screenshots). The icon is `public/app-icon.png`. No stock, no mockup kits, no Spline blobs, no 3D icons, no generated filler art.
17. **Zero emoji** anywhere in the marketing UI. That includes the referral banner and alt text.
18. Illustrations go large: at least 60% of viewport width on desktop and full-bleed on mobile. Each one gets a real caption: the child's name, the story title and one sentence from that story in Kalam. Example: *Kayden's Cosmic Dreams. "The snow on Planet Mira squeaked like marshmallows under his boots."* Pull the actual line from the story text; don't invent one.
19. Show phone screenshots flat, at an angle of 0° or at most 4°, with no glow. At most two phones per screen. Never use fake HTML phones with skeleton lines.
20. Icons, where unavoidable (store badges, play/pause): one stroke family, inheriting `currentColor`, with no tinted container square.
21. Use `next/image` with explicit `sizes` and AVIF/WebP. Preload only the hero image. Every image needs real alt text, e.g. "Illustration: a boy in an astronaut suit grins on a snowy planet".

### Motion
Motion is wanted: scroll-reveal, the read-along demo and a muted hero loop. It has to feel like a page turning, not a SaaS template.
22. **Durations and easing.** Use one easing curve site-wide, `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint). Reveals take 500–700ms, hover and press 120–160ms. The read-along highlight steps word by word on the real `.srt` timings, with a 80ms colour cross-fade between words. No bounce or spring overshoot, no `ease-in-out` on entrances.
23. **Scroll-reveal is quiet.** Animate opacity 0→1 plus 12–16px translateY, once per element, with a trigger at 20% visible. Reveal blocks (a heading together with its image), not every element. Stagger ≤ 60ms and ≤ 3 items. Never re-animate on scroll-up. Only `transform` and `opacity`, so it stays on the compositor and causes no layout shift.
24. **One focal motion per viewport.** If the hero video is playing, nothing else in view moves. The read-along demo runs only after a tap, and audio is never autoplayed. No parallax, no scroll-jacking, no pinned scrub sequences, no cursor followers, no marquee logo strips, no shimmer, no count-up numbers, no tilt-on-hover.
25. **Hero video loop.** The source is a real pipeline render (e.g. `video-gen-pipeline/output/kayden_cosmic_dreams/final_video.mp4`), cut to a 6–10s seamless segment with no captions or UI. Encode H.264 and AV1/WebM at 1280px, ≤ 1.5 MB. Use `muted playsInline loop autoPlay preload="none"`, with a `poster` that is the same frame as `public/stories/kayden_astronaut.jpg`. Pause it when it leaves the viewport or the tab is hidden.
26. **Reduced motion is a real design.** Under `prefers-reduced-motion: reduce`, the video is replaced by its poster with a visible "Play preview" button. Reveals render in their final state. The read-along shows the full sentence with the current word underlined. Every motion also has a pause control or ends within 5s (WCAG 2.2.2).

### Copy voice
27. Write like **a parent telling another parent at pickup**. Use second person and concrete nouns: their child's name, a dinosaur, the dog, Grandma's garden. Short sentences, no exclamation marks.
28. **Banned words:** magical, magic, unlock, unleash, elevate, seamless, revolutionary, effortless, AI-powered (in headlines), "in seconds" (unless measured), journey, imagination-sparking, "perfect for".
29. Say "AI" once, plainly, where it's honest and useful (the how-it-works and safety sections). Don't hide it and don't headline it.
30. **Claims must be true and verifiable.** Pricing per RevenueCat (`public/ASSETS.md`) is: free to try, Premium $4.99/month, credit packs, no annual plan, no trial. The current page's "5 stories every month, free forever", "COPPA compliant" and "Safe for children 4+" **must be confirmed with the owner** before reuse. The App Store has 2 ratings, so show **no stars and no review counts**. Show no testimonials until there are real, attributable ones; if they arrive, use first name plus the child's age plus one specific sentence, Moshi-style.

---

## 3. Page structure

Keep the existing logic: `ReferralHandler`, `parseReferral`, the `?ref=` invitation banner, `getUrl()` deep link, `IOS_URL`/`ANDROID_URL`, and `generateMetadata`. Rewrite the metadata copy to match the voice rules.

**0. Invitation bar** (only when there's a `referralCode`): a full-width `#1A1B2E` bar with 14px text. Copy: *"{CODE} sent you this. Mosaic is free to try."* Link: *"Open in Mosaic"* (deep link). No emoji, no purple fill.

**1. Nav:** the real app icon at 28px plus "Mosaic" in Satoshi 600 18px on the left. One text link, "How it works" (anchor), and a small filled purple button, "Get the app", on the right. The nav is not sticky on mobile.

**2. Hero (7/5 split; stacked on mobile with the image first):**
- Left: H1 *"Tonight, the hero of the story is your kid."* Lead: *"Tell Mosaic your child's name, age and what they're into. It writes a new chapter book about them, illustrates every scene, and reads it aloud."*
- Both store badges side by side, then one 14px line: *"Free to try. iPhone and Android."*
- Right: the muted hero loop (rule 25) at 20px radius, with `kayden_astronaut.jpg` as its poster. Underneath, the caption in Kalam with a small "Play" control: tapping it reads one real sentence aloud. Use a clip cut from the story's own `chapter_0_audio.mp3` with its `.srt` timings. Each word highlights in `#68B3FF` as it's spoken. **This is the page's one bold moment.**

**3. "This is a real one." (a real example story, left-aligned):**
- H2: *"Here's what Lily got last Tuesday."* Use a real story and a real date; otherwise say *"Here's a story Mosaic wrote for Lily."*
- A horizontal scroll strip of 3–4 frames from *one* story (`lily_meadow`, `lily_wand`). Each frame has a single Kalam sentence beneath it. Show it like a book, with no cards.
- One line under it: *"Every story is written fresh. Each one has chapters and an illustration for each scene, and you can listen or read along."*

**4. How it works (a real sequence, so numbering is allowed: 1, 2, 3, plain Satoshi numerals, no circles):**
- Desktop layout: a 5/7 split, with the `personalize.jpg` screenshot on the left and three steps on the right.
- 1 *"Tell it about your kid."* Name, age, a few favourite things: dinosaurs, a sister called Ava, the colour green.
- 2 *"Pick a voice and a theme."* Space, the ocean, a soccer final, a calm one for nights when they're wired.
- 3 *"Read it together, or press play and turn the lights down."*
- Put the `reader.jpg` screenshot beside step 3. This shows the narration highlight as it really is in the app.

**5. Variety wall:** H2 *"Astronauts, go-karts, chemistry labs, a bear with a green scarf."* Lay out 6 real illustrations (`jack_stadium`, `emma_gokart`, `sophia_lab`, `bear_candles`, `whiskers_street`, `kayden`) in an *uneven* masonry: two large, four small. Each gets a one-line caption: *"Emma, 6: go-karts."* No hover zoom.

**6. For parents (a plain-text column, 640px, no icons):**
- H2: *"The grown-up part."*
- Three short paragraphs, each with a bold lead-in sentence:
  - **"You choose what goes in."** Age setting, themes, and you can read every story before your child hears it.
  - **"No ads, no feeds to scroll."** Only make claims that are true.
  - **"Yes, it uses AI."** Mosaic uses AI to write, illustrate and narrate. Say plainly what is reviewed, filtered or stored, and link to /privacy-policy.
- Model this on the Khan Kids data FAQ: specific sentences, no shield icons, no badges.

**7. Pricing (one line, not a tier table):** *"Free to try. Mosaic Premium is $4.99 a month for more stories; cancel any time in the App Store or Google Play."* Add credit packs only if they're visible in the app. No "Most popular", no toggles.

**8. Final CTA (the only centred block):** `bear_candles.jpg` full-width, dimmed to 70% under the text. H2 *"Make tonight's story."* Both store badges. If there's a referral, add the "Open in Mosaic" deep link as a secondary text link.

**9. Footer (a single row, 14px `#B0B0B0`):** © 2026 Mosaic · support@mosaicai.in · Privacy · Terms. A plain row with no middle-dot chrome, spaced with 24px gaps. No four-column footer, no social icon circles.

---

## 4. Reject list (fail review if any appear)
- Purple-to-blue or any decorative gradient; gradient or one-word-coloured headline text
- Blur blobs, glows, glassmorphism, `backdrop-blur`, shadows larger than 8px
- Emoji anywhere; Lucide or "sparkles" icons in tinted rounded squares
- Pill badge above the H1 ("AI-Powered…", "New", "Beta")
- A centred hero stack; three equal feature cards; bento grids; a stat strip; a "Trusted by" logo row
- Fake phone mockups built in HTML, skeleton lines, placeholder story titles ("Dragon's Quest" plus a 🐉)
- Stars, review counts, testimonials or awards we can't source; invented parent quotes
- Copy that says magical, unlock, elevate, seamless, journey, "in 10 seconds", "perfect for", or uses exclamation marks
- ALL-CAPS eyebrows, `→` appended to buttons, `A · B · C` meta strings, decorative 01/02/03
- Per-element fade-up stagger, parallax, scroll-jacking; autoplaying *sound*; motion that ignores reduced-motion
- Kalam used for UI text; any third typeface
- Cream + terracotta or near-black + acid-green "escape" palettes

## 5. Done means
- `node skills/avoid-ai-design/scripts/detect.mjs app/page.tsx` reports **0 P0 and 0 P1** findings.
- The `web-design-guidelines` review has no accessibility failures: visible focus, contrast AA, alt text, tap targets ≥ 44px.
- Every claim on the page traces to `public/ASSETS.md`, the store listing, or the owner's confirmation.
- Lighthouse mobile LCP < 2.5s, with the hero image under 180 KB.

---

## 6. SEO + AEO

### 6a. Target queries (SERPs checked 2026-10-23)
| Query | What ranks now | Our page |
|---|---|---|
| personalized bedtime stories app | tellytale.app, lunistories.com, storynite.app, scarlettpanda.com. There's also an AI Overview, "Top Personalized Bedtime Story Apps". | Primary: home (title + H1) |
| AI bedtime story generator | bedtimestory.ai, instatales.ai, purrytale.com, plus a r/Fatherhood thread | Secondary: the "how it works" H2 |
| bedtime story with my child's name | ztales.com, fiaby.app, dreamiestories.com, personalised print-book shops | H2 + FAQ |
| are AI bedtime stories safe for kids | AACAP, AAP, healthychildren.org, gramms.ai | "Grown-up part" + FAQ |

People Also Ask questions seen: *Which app is best for bedtime stories? · What apps can you make your own stories? · Can I make a custom kids book with my name on it? · How to create a bedtime story? · Where can I find personalized bedtime books?*

**Title:** `Mosaic: Personalized Bedtime Stories Starring Your Child (iPhone & Android)`, ≤ 60 chars on mobile. **Meta description:** `A bedtime story app that writes, illustrates and reads aloud a new story with your child as the hero. Free to try; Premium $4.99/month.`

### 6b. JSON-LD (one `<script type="application/ld+json">` in `app/page.tsx`)
```json
{"@context":"https://schema.org","@graph":[
 {"@type":"Organization","@id":"https://mosaicai.in/#org","name":"Mosaic","url":"https://mosaicai.in",
  "logo":"https://mosaicai.in/app-icon.png","email":"support@mosaicai.in",
  "sameAs":["https://apps.apple.com/us/app/mosaic-create-bedtime-stories/id6751470484"]},
 {"@type":"WebSite","@id":"https://mosaicai.in/#site","url":"https://mosaicai.in","name":"Mosaic","publisher":{"@id":"https://mosaicai.in/#org"},"inLanguage":"en"},
 {"@type":"MobileApplication","name":"Mosaic: Create Bedtime Stories","operatingSystem":"iOS, Android",
  "applicationCategory":"EntertainmentApplication","url":"https://mosaicai.in",
  "installUrl":"https://apps.apple.com/us/app/mosaic-create-bedtime-stories/id6751470484",
  "image":"https://mosaicai.in/app-icon.png","publisher":{"@id":"https://mosaicai.in/#org"},
  "offers":[
   {"@type":"Offer","name":"Free","price":"0","priceCurrency":"USD"},
   {"@type":"Offer","name":"Mosaic Premium","price":"4.99","priceCurrency":"USD",
    "priceSpecification":{"@type":"UnitPriceSpecification","price":"4.99","priceCurrency":"USD","billingDuration":"P1M"}}]},
 {"@type":"FAQPage","mainEntity":[
  {"@type":"Question","name":"What is Mosaic?","acceptedAnswer":{"@type":"Answer","text":"Mosaic is an iPhone and Android app that writes a new bedtime story with your child as the hero. It illustrates every scene and can read the story aloud."}},
  {"@type":"Question","name":"Can I make a bedtime story with my child's name in it?","acceptedAnswer":{"@type":"Answer","text":"Yes. You enter your child's name, age and interests, and every story is written around them."}},
  {"@type":"Question","name":"What ages is Mosaic for?","acceptedAnswer":{"@type":"Answer","text":"Mosaic is made for children roughly 3 to 10. You set the age, and it adjusts vocabulary and story length."}},
  {"@type":"Question","name":"How much does Mosaic cost?","acceptedAnswer":{"@type":"Answer","text":"Mosaic is free to try. Premium costs $4.99 a month for more stories, and you can cancel any time in the App Store or Google Play."}},
  {"@type":"Question","name":"Does Mosaic read the story out loud?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every story is narrated, and you can choose a female or male voice. The words highlight as they are read, so early readers can follow along."}},
  {"@type":"Question","name":"Is Mosaic safe for kids? Does it use AI?","acceptedAnswer":{"@type":"Answer","text":"Mosaic uses AI to write, illustrate and narrate stories. It has no ads, and a parent sets it up and can read every story first."}},
  {"@type":"Question","name":"How is this different from a personalised print book?","acceptedAnswer":{"@type":"Answer","text":"A print book is one fixed story. Mosaic writes a new illustrated, narrated story whenever you want one, about whatever your child is into that week."}}]}
]}
```
Every FAQ answer must also appear **visibly** on the page, in a `<details>` list under "Questions parents ask". Hidden FAQ markup violates Google's rules. Confirm the age range and safety wording with the owner (rule 30). No `aggregateRating` until real ratings exist.

### 6c. On-page rules
1. One `<h1>` that says what this is in plain words. If the hero line (§3.2) stays poetic, the H1 must still contain "bedtime stories" and "your child". Example: *"Bedtime stories where your child is the hero."*
2. The first two sentences of visible text answer *what it is, who it's for, and what it costs*. This is the passage AI overviews and LLMs quote. Example: *"Mosaic is an app that writes, illustrates and reads aloud a new bedtime story starring your child, for ages about 3–10. It's free to try; Premium is $4.99 a month."*
3. Write H2s as the questions parents ask: "How does it work?", "Can it use my child's name?", "Is it safe?", "What does it cost?". Each answer opens with a direct sentence.
4. Semantic HTML: `<header> <main> <section aria-labelledby> <figure>/<figcaption>` for every illustration, `<footer>`, real `<a>` store links, and `<details>` for the FAQ.
5. Alt text describes the actual illustration. Example: *"Illustration from Lily's story: a girl rides a white horse through a pink flower meadow."* Never "AI image" or the file name.

### 6d. Technical
- `metadataBase: new URL("https://mosaicai.in")`, with `alternates.canonical: "/"` on the home page. Keep `?ref=` URLs canonical to `/`, and make the share.mosaicai.in host 301 to or canonicalise to mosaicai.in.
- `app/sitemap.ts` lists `/`, `/privacy-policy` and `/terms-and-conditions` (plus public `/story/*` pages if they're meant to be indexed). `app/robots.ts` allows `/`, disallows `/get` and `/appsubmission`, and points to `https://mosaicai.in/sitemap.xml`.
- OG/Twitter: `app/opengraph-image.png` at **1200×630**, < 300 KB. Real illustration with the H1 in Satoshi 700 on `#0F0A1E`, no gradients. Set `twitter:card=summary_large_image` and alt text on the OG image.
- Core Web Vitals: LCP < 2.5s, CLS < 0.05, INP < 200ms. **The poster image is the LCP element.** It's served via `next/image` with `priority`, under 180 KB AVIF, and has explicit width and height. The video uses `preload="none"` and is attached after `load`/idle via IntersectionObserver. Skip it on Save-Data, slow connections and reduced motion. Fonts are self-hosted with `font-display: swap`; preload only Satoshi Variable and lazy-load Kalam.

---

## 10. Claim verification (resolved 2026-10-23 against source code — these override anything above)

| Claim | Verdict | Source |
|---|---|---|
| "5 stories every month, free forever" | **FALSE. Do not use.** New accounts get **5 story generations** once (`tokens: 5`), plus 30 listening credits. Premium ($4.99/mo) adds 30 generations per renewal. No annual, no trial. | `mosaic-backend/src/controllers/userController.ts:67,71`, `revenuecatController.ts:397` |
| "COPPA compliant" | **Do not claim.** Privacy policy requires parental consent/supervision under 13; no certification. Say "made for parents to use with their kids" instead. | `app/privacy-policy.tsx:35-41` |
| "Safe for children 4+" / "No ads" | **No ad SDK** in the app (verified: no admob/google-mobile-ads dependency) → "No ads" is true. Age: the app's own age chips are 0-3 / 4-6 / 6-9 / 9-12 / 12+; say "ages 3–10 work best" only as a recommendation, not a safety rating. | `mosaic-ai/app/story/step3.tsx:68`, `mosaic-ai/package.json` |
| Story quality / safety | Stories are generated with explicit age-appropriate, uplifting-ending instructions. Phrase as "written to be age-appropriate, with a calm ending" — not "100% safe". | `storyController.ts:263-275` |
| Ratings / testimonials | **Banned** (2 ratings on the App Store). | iTunes lookup |
| Free-tier copy to use | "Free to try: your first 5 stories are on us. Then $4.99 a month for 30 more." | — |
