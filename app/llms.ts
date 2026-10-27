// /llms.txt and /llms-full.txt (https://llmstxt.org): a plain markdown summary for AI assistants.
// Built from home/content.ts so the facts match the visible page and its JSON-LD.
import {
  ANDROID_URL,
  BOOKS,
  BOOKS_LINE,
  FAQ,
  IOS_URL,
  PRICE_LINE,
  SITE_URL,
  amazonUrl,
  type Book,
} from "./home/content.ts";

type Link = { name: string; path: string; note: string };

const PAGES: Link[] = [
  { name: "Mosaic home", path: "/", note: "What the app does, pricing, books and FAQ" },
  { name: "Mosaic Books", path: "/books", note: "The two color-and-write paperbacks with Amazon links" },
  {
    name: "Best personalized bedtime story app",
    path: "/best-personalized-bedtime-story-app",
    note: "How Mosaic personalizes stories, ages, pricing and platforms",
  },
  {
    name: "Mahabharata story book for kids",
    path: "/mahabharata-story-for-kids-book",
    note: "Arjuna's Archery School, a gentle Mahabharata story for ages 5-8",
  },
  {
    name: "Color-and-write books for ages 5-8",
    path: "/color-and-write-books-ages-5-8",
    note: "Format, page and scene counts for both paperbacks",
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
    "> Mosaic is an iPhone and Android app that writes a new bedtime story with your child as the hero, illustrates every scene and reads the story aloud. Mosaic also publishes two color-and-write paperback story books for ages 5-8, sold on Amazon.",
    "",
    "Key facts:",
    "",
    "- Best for ages 3 to 10; in the app a parent picks an age group from 0-3 up to 12+.",
    `- Pricing: ${PRICE_LINE} Cancel any time in the App Store or Google Play.`,
    "- Stories are written, illustrated and narrated with AI. No ads. A grown-up sets up the app and can read every story first.",
    "- Narration in a female or male voice, with words highlighted as they are read.",
    `- Books: ${BOOKS_LINE}`,
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

export function llmsFullTxt(): string {
  return [
    llmsTxt().trimEnd(),
    "",
    "## FAQ",
    "",
    ...FAQ.flatMap(({ q, a }) => [`### ${q}`, "", a, ""]),
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
