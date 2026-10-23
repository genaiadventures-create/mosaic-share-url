# Site assets (real product imagery only)

Everything here is real: story illustrations rendered by the MOSAIC pipeline and App Store screenshots of the shipped app (id 6751470484). No stock, no mockup kits.

## public/stories/ — story illustrations (JPEG, 1024–1280 px wide, 16:9 / 3:2)
Picked by vision review for artifact-free frames, one clear hero child, varied palettes.

| file | story | palette / use |
|---|---|---|
| kayden_astronaut.jpg | Kayden — boy astronaut close-up, snowy planet | cool blue; hero candidate (big face, joy) |
| lily_meadow.jpg | Lily — girl on a white horse in a flower meadow | pastel green/pink; bright daytime contrast |
| sophia_lab.jpg | Sophia — girl in goggles beside a bubbling flask | neon green/purple; "science" story |
| jack_stadium.jpg | Jack — boy in a packed soccer stadium | warm greens/yellows |
| lily_wand.jpg | Lily — casting a wand in a potion room | purple sparks |
| emma_gokart.jpg | Emma — red-haired girl in a yellow go-kart, forest road | warm yellow/green |
| bear_candles.jpg | Glowing Bear — bear with green scarf among candles | warm forest, calm/bedtime |
| whiskers_street.jpg | Whiskers — black cat on a colourful cobbled street | warm street tones |

## public/app/ — App Store screenshots (1020×2208, iPhone frame with status bar)
| file | screen | what it proves |
|---|---|---|
| reader.jpg | Chapter 1 reader: illustration + text with the narrated sentence highlighted, play button | the core experience (illustrated + narrated) |
| story-detail.jpg | "The Volcano Explorers" detail with Listen Audio / Start Reading | full-bleed illustration + two ways to enjoy |
| personalize.jpg | bottom sheet: Age chips (0-3 … 12+), Voice (Female/Male), Story Themes | personalization inputs |
| library.jpg | Feed: "Hey, Rahul 👋", New Releases cards, Generate a story button, tab bar | browsing + the entry point |

Rejected (not copied): splash with lorem-ipsum caption, feed with "[Story Title]" placeholders, rating modal, profile page, loading state.

## public/app-icon.png — the shipped app icon (1024², from mosaic-ai/assets/images/icon.png)

## Store facts (iTunes lookup, 2026-10-23)
- App Store: https://apps.apple.com/us/app/mosaic-create-bedtime-stories/id6751470484 — "Mosaic: Create Bedtime Stories", 4.5★ from 2 ratings (too few to quote as social proof).
- Pricing truth (RevenueCat): free to try; Premium $4.99/month; credit packs. No annual, no trial. Do not claim otherwise.

## Real story artifacts for animation (added 2026-10-23)
- `video/kayden_hero.{mp4,webm}` + `kayden_hero_poster.jpg` — 5.4 s silent loop of the Kayden astronaut laughing in snow (Higgsfield image-to-video from the real story illustration, 960×540, 0.5–0.8 MB). Use as a muted, autoplaying, looping hero background with the poster as fallback; respect `prefers-reduced-motion`.
- `story-audio/kayden_ch1.mp3` (34 s) + `kayden_ch1.words.json`; `story-audio/emma_ch1.mp3` (30 s) + `emma_ch1.words.json` — real narration excerpts (chapter 1 openings) with word-level timestamps `[{w,s,e}]` from faster-whisper. Use for a click-to-play "read along" demo where words highlight as they're spoken (the app does exactly this). Must be user-initiated (no autoplay audio).
- Also available if needed: `video-gen-pipeline/output/<slug>/character_sheet.png` (character turnarounds) and chapter SRTs.
