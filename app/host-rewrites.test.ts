import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { MARKETING_HOST_PATTERN, hostRewrites } from "./host-rewrites.ts";

// Next anchors `has` host values as ^value$.
const matches = (host: string) => new RegExp(`^${MARKETING_HOST_PATTERN}$`).test(host);

describe("host rewrites", () => {
  it("rewrites only the root path to /home", () => {
    assert.equal(hostRewrites.length, 1);
    assert.equal(hostRewrites[0].source, "/");
    assert.equal(hostRewrites[0].destination, "/home");
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
