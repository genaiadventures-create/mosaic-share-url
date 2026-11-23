// /llms.txt and /llms-full.txt (https://llmstxt.org): a plain markdown summary for AI assistants.
// Built from home/content.ts so the facts match the visible page and its JSON-LD.
import {
  ANDROID_URL,
  BOOKS,
  BOOKS_FAQ,
  BOOKS_LINE,
  BOOK_SPECS,
  FAQ,
  IOS_URL,
  PRICE_LINE,
  SITE_URL,
  amazonUrl,
  type Book,
} from "./home/content.ts";
import {
  BEDTIME_FAQ_ITEMS,
  BEDTIME_SOURCES,
  COLOR_WRITE_FAQ_ITEMS,
  MAHABHARATA_FAQ_ITEMS,
  MAHABHARATA_SOURCES,
  type Source,
} from "./home/geo-content.ts";

type Link = { name: string; path: string; note: string };

const PAGES: Link[] = [
  { name: "Mosaic home", path: "/", note: "What the app does, pricing, books and FAQ" },
  { name: "Mosaic Books", path: "/books", note: "The two color-and-write paperbacks: format, scene lists, ISBNs, prices, FAQ and Amazon links" },
  {
    name: "Best personalized bedtime story app",
    path: "/best-personalized-bedtime-story-app",
    note: "How Mosaic makes a story, story length, safety, pricing, platforms, and a comparison of audio-library, read-along and generator apps with cited research",
  },
  {
    name: "Mahabharata story book for kids",
    path: "/mahabharata-story-for-kids-book",
    note: "Arjuna's Archery School: age suitability, scene list, how it relates to the epic, and cited sources",
  },
  {
    name: "Color-and-write books for ages 5-8",
    path: "/color-and-write-books-ages-5-8",
    note: "What a color-and-write book is, ages, page and scene counts, how to use it, and cited research",
  },
];

const LEGAL: Link[] = [
  { name: "Privacy policy", path: "/privacy-policy", note: "How Mosaic handles personal data" },
  { name: "Terms and conditions", path: "/terms-and-conditions", note: "Terms of use for the app" },
];

const link = ({ name, path, note }: Link) => `- [${name}](${SITE_URL}${path}): ${note}`;

const bookLine = (b: Book) =>
  `- [${b.title}: ${b.subtitle}](${amazonUrl(b.asin)}): ${b.blurb} Paperback, ages 5-8, 50 pages, 22 scenes, $${b.price} on Amazon. ASIN ${b.asin}${b.isbn ? `, ISBN ${b.isbn}` : ""}.`;

export function llmsTxt(): string {
  return [
    "# Mosaic",
    "",
    "> Mosaic is an iPhone and Android app that writes a new bedtime story with your child as the hero, adds a storybook-style illustration and reads the story aloud. Mosaic also publishes two color-and-write paperback story books for ages 5-8, sold on Amazon.",
    "",
    "Key facts:",
    "",
    "- Best for ages 3 to 10; in the app a parent picks an age group from 0-3 up to 12+.",
    `- Pricing: ${PRICE_LINE} Cancel any time in the App Store or Google Play.`,
    "- Stories are written, illustrated and narrated with AI. No ads. A grown-up sets up the app and can read every story first. Accounts are for adults 18+; stories are private to the account by default.",
    "- Story length: the 0-3 age group gets one chapter and the 4-6 group gets two. Each chapter is requested at about 300 to 400 words.",
    "- Platforms: iPhone and iPad (iOS 15.1 or later) and Android. The App Store listing shows English only.",
    "- Story types: personalized generator (Mosaic), pre-written audio library (for example Moshi), read-along book app (for example Epic).",
    "- Narration in a female or male voice, with words highlighted as they are read.",
    `- Books: ${BOOKS_LINE}`,
    `- Book format: ${BOOK_SPECS} The pictures were made with AI image tools and the story text was drafted with an AI writing assistant, then reviewed by the publisher.`,
    "- Contact: support@mosaicai.in",
    "",
    "## Pages",
    "",
    ...PAGES.map(link),
    "",
    "## Get the app",
    "",
    `- [Mosaic on the App Store (iPhone)](${IOS_URL}): Mosaic: Create Bedtime Stories`,
    `- [Mosaic on Google Play (Android)](${ANDROID_URL}): Mosaic: Create Bedtime Stories`,
    "",
    "## Books",
    "",
    ...BOOKS.map(bookLine),
    "",
    "## Optional",
    "",
    `- [Full text for AI assistants](${SITE_URL}/llms-full.txt): This file plus the complete FAQ`,
    ...LEGAL.map(link),
    "",
  ].join("\n");
}

const qaBlock = (items: { q: string; a: string }[]) => items.flatMap(({ q, a }) => [`### ${q}`, "", a, ""]);
const sourceBlock = (items: Source[]) => items.map((s) => `- [${s.label}](${s.href}): ${s.supports}`);

export function llmsFullTxt(): string {
  return [
    llmsTxt().trimEnd(),
    "",
    "## FAQ",
    "",
    ...qaBlock(FAQ),
    `## Personalized bedtime story apps (${SITE_URL}/best-personalized-bedtime-story-app)`,
    "",
    ...qaBlock(BEDTIME_FAQ_ITEMS),
    "Sources:",
    "",
    ...sourceBlock(BEDTIME_SOURCES),
    "",
    `## Mahabharata story book for kids (${SITE_URL}/mahabharata-story-for-kids-book)`,
    "",
    ...qaBlock(MAHABHARATA_FAQ_ITEMS),
    "Sources:",
    "",
    ...sourceBlock(MAHABHARATA_SOURCES),
    "",
    `## Color-and-write books for ages 5-8 (${SITE_URL}/color-and-write-books-ages-5-8)`,
    "",
    ...qaBlock(COLOR_WRITE_FAQ_ITEMS),
    `## Mosaic books FAQ (${SITE_URL}/books)`,
    "",
    ...qaBlock(BOOKS_FAQ),
  ].join("\n");
}

export function textResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
