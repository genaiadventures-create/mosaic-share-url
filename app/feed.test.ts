import assert from "node:assert/strict";
import { it } from "node:test";
import { FEED_URL, atomFeed } from "./feed.ts";
import { PAGE_DATES, SITE_URL } from "./marketing-seo.ts";
import { FEED_ORDER, PAGE_META } from "./page-meta.ts";
import sitemap from "./sitemap.ts";

const feed = atomFeed();

it("is an Atom feed with a self link, id, updated and author", () => {
  assert.ok(feed.startsWith('<?xml version="1.0" encoding="utf-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom"'));
  assert.ok(feed.includes(`<link rel="self" type="application/atom+xml" href="${FEED_URL}"/>`));
  assert.equal(FEED_URL, `${SITE_URL}/feed.xml`);
  assert.match(feed, /<updated>2026-11-23T00:00:00Z<\/updated>/);
  assert.ok(feed.includes("<author>"));
  assert.ok(feed.endsWith("</feed>\n"));
});

it("lists every marketing page once, with its title, summary and PAGE_DATES date", () => {
  const entries = feed.split("<entry>").slice(1);
  assert.equal(entries.length, FEED_ORDER.length);
  for (const path of FEED_ORDER) {
    const url = `${SITE_URL}${path}`;
    const entry = entries.find((e) => e.includes(`<id>${url}</id>`));
    assert.ok(entry, path);
    const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    assert.ok(entry.includes(`<title>${esc(PAGE_META[path].title)}</title>`), path);
    assert.ok(entry.includes(`<summary>${esc(PAGE_META[path].description)}</summary>`), path);
    assert.ok(entry.includes(`<updated>${PAGE_DATES[path]}T00:00:00Z</updated>`), path);
  }
});

it("lists only pages that are in the sitemap, and leaves legal pages out", () => {
  const urls = new Set(sitemap().map((e) => e.url));
  for (const path of FEED_ORDER) assert.ok(urls.has(`${SITE_URL}${path}`), path);
  assert.ok(!feed.includes("privacy-policy") && !feed.includes("terms-and-conditions"));
});

it("escapes XML special characters", () => {
  assert.ok(!/&(?!amp;|lt;|gt;|quot;|apos;)/.test(feed));
  assert.ok(feed.includes("Arjuna&apos;s Archery School"));
});
