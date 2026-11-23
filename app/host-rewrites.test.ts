import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { MARKETING_HOST_PATTERN, hostRewrites } from "./host-rewrites.ts";

// Next anchors `has` host values as ^value$.
const matches = (host: string) => new RegExp(`^${MARKETING_HOST_PATTERN}$`).test(host);

describe("host rewrites", () => {
  it("rewrites root and books on the marketing host only", () => {
    assert.deepEqual(hostRewrites.map(({ source, destination }) => [source, destination]), [
      ["/", "/home"],
      ["/books", "/home/books"],
      ["/best-personalized-bedtime-story-app", "/home/best-personalized-bedtime-story-app"],
      ["/best-bedtime-story-apps", "/home/best-bedtime-story-apps"],
      ["/ai-bedtime-story-generator", "/home/ai-bedtime-story-generator"],
      ["/mahabharata-story-for-kids-book", "/home/mahabharata-story-for-kids-book"],
      ["/color-and-write-books-ages-5-8", "/home/color-and-write-books-ages-5-8"],
      ["/feed.xml", "/home/feed.xml"],
    ]);
    for (const rule of hostRewrites) {
      assert.equal(rule.has[0].type, "host");
      assert.equal(rule.has[0].value, MARKETING_HOST_PATTERN);
    }
  });

  it("keeps the new pages and feed off the share host: the bare routes 404 or do not exist", () => {
    const app = new URL(".", import.meta.url);
    for (const slug of ["best-bedtime-story-apps", "ai-bedtime-story-generator"]) {
      assert.ok(existsSync(new URL(`home/${slug}/page.tsx`, app)), `${slug} page`);
      assert.match(readFileSync(new URL(`${slug}/page.tsx`, app), "utf8"), /notFound\(\)/, `${slug} bare route`);
    }
    assert.ok(existsSync(new URL("home/feed.xml/route.ts", app)));
    assert.ok(!existsSync(new URL("feed.xml", app)), "no bare /feed.xml route");
  });

  it("matches the marketing hosts", () => {
    assert.ok(matches("mosaicai.in"));
    assert.ok(matches("www.mosaicai.in"));
  });

  it("leaves the share host and look-alikes alone", () => {
    assert.ok(!matches("share.mosaicai.in"));
    assert.ok(!matches("mosaicai.in.evil.com"));
    assert.ok(!matches("mosaicaixin"));
    assert.ok(!matches("localhost"));
  });
});
