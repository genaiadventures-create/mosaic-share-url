// Atom feed (https://www.rfc-editor.org/rfc/rfc4287) of the marketing pages. Served at /feed.xml on the marketing host only.
// Titles and summaries come from page-meta.ts and dates from PAGE_DATES, so the feed matches the pages and the sitemap.
import { PAGE_DATES, SITE_URL } from "./marketing-seo.ts";
import { FEED_ORDER, PAGE_META } from "./page-meta.ts";

export const FEED_URL = `${SITE_URL}/feed.xml`;
export const FEED_TITLE = "Mosaic: bedtime story guides and books";
export const FEED_SUBTITLE =
  "Guides to bedtime story apps, AI story generators and color-and-write books from Mosaic, the app that writes a new bedtime story starring your child.";

const escapeXml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const stamp = (date: string) => `${date}T00:00:00Z`;

export function atomFeed(): string {
  const entries = FEED_ORDER.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    title: PAGE_META[path].title,
    summary: PAGE_META[path].description,
    updated: PAGE_DATES[path],
  }));
  const updated = entries.map((e) => e.updated).sort().at(-1) as string;
  return [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en">',
    `  <title>${escapeXml(FEED_TITLE)}</title>`,
    `  <subtitle>${escapeXml(FEED_SUBTITLE)}</subtitle>`,
    `  <id>${FEED_URL}</id>`,
    `  <updated>${stamp(updated)}</updated>`,
    `  <link rel="self" type="application/atom+xml" href="${FEED_URL}"/>`,
    `  <link rel="alternate" type="text/html" href="${SITE_URL}/"/>`,
    "  <author>",
    "    <name>Mosaic</name>",
    `    <uri>${SITE_URL}/</uri>`,
    "  </author>",
    ...entries.flatMap((e) => [
      "  <entry>",
      `    <title>${escapeXml(e.title)}</title>`,
      `    <id>${e.url}</id>`,
      `    <link rel="alternate" type="text/html" href="${e.url}"/>`,
      `    <updated>${stamp(e.updated)}</updated>`,
      `    <summary>${escapeXml(e.summary)}</summary>`,
      "  </entry>",
    ]),
    "</feed>",
    "",
  ].join("\n");
}

export function atomResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
