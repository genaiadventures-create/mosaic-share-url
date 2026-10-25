# Design skills for the mosaicai.in landing page

These are third-party agent skills in SKILL.md format, vendored here as references for redesigning `app/page.tsx`. Each one was copied unmodified from a shallow clone on 2026-10-23. The project-specific brief is in `DESIGN_BRIEF.md`. Read it first. Where a skill and the brief disagree, the brief wins.

| Folder | What it's for | Source | Commit | License |
|---|---|---|---|---|
| `frontend-design/` | Anthropic's guidance on picking a deliberate aesthetic direction. It includes a "plan → review against brief → build → critique" loop and lists the second-order AI defaults to avoid. | https://github.com/anthropics/skills/tree/main/skills/frontend-design | `dbd4588f9e1033efb41dad4bef2f7947c8993d44` | Apache-2.0 (`LICENSE.txt`) |
| `avoid-ai-design/` | A catalog of AI-slop tells with a rewrite workflow. `scripts/detect.mjs` is a scanner with no dependencies. | https://github.com/funboy322/avoid-ai-design | `2b7c71836b06cdf6b3d73265b56490c1b75ad5aa` | MIT (`LICENSE`) |
| `web-design-guidelines/` | Vercel's UI and accessibility review. It fetches the live rules from `vercel-labs/web-interface-guidelines` at review time. | https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines | `063bee94c3f4df8453406c830b0a7df0f2860278` | MIT |
| `writing-guidelines/` | Vercel's prose and voice review, for checking copy. It also fetches its rules live. | https://github.com/vercel-labs/agent-skills/tree/main/skills/writing-guidelines | `063bee94c3f4df8453406c830b0a7df0f2860278` | MIT |

For `avoid-ai-design/` I copied only `SKILL.md`, `LICENSE`, `references/` and `scripts/`. I left out its demo HTML and PNG docs.

## Considered, not vendored
- `nextlevelbuilder/ui-ux-pro-max-skill` (commit `d14efff8`) is 3.6 MB of CSV style and palette databases. It is built to generate *a* style from a database, which pulls toward the generic. Our palette and fonts are already fixed by the app.

## Quick use
```bash
# Code-level slop scan (Node 18+, no install):
node skills/avoid-ai-design/scripts/detect.mjs app/page.tsx
```
Baseline on the old `app/page.tsx`, measured 2026-10-23: 2 × P0 (gradient headline text at L208/L295, pill badge + centered hero), 1 × P1 (one accented headline word), 1 × P2 (middle-dot meta strings).
