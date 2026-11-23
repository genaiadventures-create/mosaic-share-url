import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { llmsTxt, llmsFullTxt } from "./llms.ts";
import { BOOKS, BOOKS_FAQ, FAQ, IOS_URL, ANDROID_URL, PRICE_LINE } from "./home/content.ts";
import { BEDTIME_FAQ_ITEMS, COLOR_WRITE_FAQ_ITEMS, MAHABHARATA_FAQ_ITEMS } from "./home/geo-content.ts";
import { GENERATOR_FAQ_ITEMS, ROUNDUP_APPS, ROUNDUP_FAQ_ITEMS } from "./home/guides-content.ts";

describe("llms.txt", () => {
  const body = llmsTxt();
  const lines = body.split("\n");

  it("follows the llmstxt.org shape: one H1 first, then a blockquote summary", () => {
    assert.equal(lines[0], "# Mosaic");
    assert.equal(lines.filter((l) => /^# /.test(l)).length, 1);
    assert.ok(lines[2].startsWith("> "));
  });

  it("lists links as markdown list items under H2 sections", () => {
    const linkLines = lines.filter((l) => l.startsWith("- ["));
    assert.ok(linkLines.length >= 8);
    for (const l of linkLines) assert.match(l, /^- \[[^\]]+\]\(https:\/\/[^)\s]+\)(: .+)?$/);
    assert.ok(lines.includes("## Optional"));
  });

  it("states the app facts shared with the visible page", () => {
    assert.ok(body.includes(PRICE_LINE));
    assert.ok(body.includes(IOS_URL));
    assert.ok(body.includes(ANDROID_URL));
  });

  it("names every book with its ISBN, ASIN, price and Amazon link", () => {
    for (const b of BOOKS) {
      assert.ok(body.includes(b.title), b.title);
      assert.ok(body.includes(`https://www.amazon.com/dp/${b.asin}`), b.asin);
      if (b.isbn) assert.ok(body.includes(b.isbn), b.isbn);
      assert.ok(body.includes(`$${b.price}`), b.price);
    }
  });

  it("links only to canonical marketing pages, never share or child-story URLs", () => {
    for (const path of ["/", "/books", "/best-personalized-bedtime-story-app", "/best-bedtime-story-apps", "/ai-bedtime-story-generator", "/mahabharata-story-for-kids-book", "/color-and-write-books-ages-5-8"]) {
      assert.ok(body.includes(`(https://mosaicai.in${path})`), path);
    }
    assert.ok(!body.includes("share.mosaicai.in"));
    assert.ok(!/\/(story|video|get)\//.test(body));
  });

  it("ends with a single newline", () => {
    assert.ok(body.endsWith("\n") && !body.endsWith("\n\n"));
  });
});

describe("llms-full.txt", () => {
  const full = llmsFullTxt();

  it("contains everything in llms.txt", () => {
    assert.ok(full.startsWith(llmsTxt().trimEnd()));
  });

  it("adds every FAQ question and answer", () => {
    for (const { q, a } of FAQ) {
      assert.ok(full.includes(`### ${q}`), q);
      assert.ok(full.includes(a), q);
    }
  });

  it("adds the visible Q&A and sources from each GEO page and the books page", () => {
    for (const { q, a } of [...BEDTIME_FAQ_ITEMS, ...ROUNDUP_FAQ_ITEMS, ...GENERATOR_FAQ_ITEMS, ...MAHABHARATA_FAQ_ITEMS, ...COLOR_WRITE_FAQ_ITEMS, ...BOOKS_FAQ]) {
      assert.ok(full.includes(`### ${q}`), q);
      assert.ok(full.includes(a), q);
    }
    assert.ok(full.includes("https://doi.org/10.1542/peds.2024-069090"));
    assert.ok(full.includes("https://www.britannica.com/topic/Mahabharata"));
  });

  it("lists every roundup app with its price and platforms, and keeps the feed out of llms.txt", () => {
    for (const app of ROUNDUP_APPS) {
      assert.ok(full.includes(`[${app.name}](${app.url})`), app.name);
      assert.ok(full.includes(`Price: ${app.price}.`), app.name);
    }
    assert.ok(!llmsTxt().includes("feed.xml"));
  });

  it("states the verified app facts: iOS 15.1, English only, story length", () => {
    assert.ok(full.includes("iOS 15.1 or later"));
    assert.ok(full.includes("English only"));
    assert.ok(full.includes("0-3 age group gets one chapter"));
  });
});
