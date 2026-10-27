import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { llmsTxt, llmsFullTxt } from "./llms.ts";
import { BOOKS, FAQ, IOS_URL, ANDROID_URL, PRICE_LINE } from "./home/content.ts";

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
    for (const path of ["/", "/books", "/best-personalized-bedtime-story-app", "/mahabharata-story-for-kids-book", "/color-and-write-books-ages-5-8"]) {
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
});
