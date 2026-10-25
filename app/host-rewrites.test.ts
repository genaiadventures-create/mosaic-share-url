import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { MARKETING_HOST_PATTERN, hostRewrites } from "./host-rewrites.ts";

// Next anchors `has` host values as ^value$.
const matches = (host: string) => new RegExp(`^${MARKETING_HOST_PATTERN}$`).test(host);

describe("host rewrites", () => {
  it("rewrites root and books on the marketing host only", () => {
    assert.deepEqual(hostRewrites.map(({ source, destination }) => [source, destination]), [
      ["/", "/home"],
      ["/books", "/home/books"],
      ["/best-personalized-bedtime-story-app", "/home/best-personalized-bedtime-story-app"],
      ["/mahabharata-story-for-kids-book", "/home/mahabharata-story-for-kids-book"],
      ["/color-and-write-books-ages-5-8", "/home/color-and-write-books-ages-5-8"],
    ]);
    for (const rule of hostRewrites) {
      assert.equal(rule.has[0].type, "host");
      assert.equal(rule.has[0].value, MARKETING_HOST_PATTERN);
    }
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
