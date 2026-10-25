import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isValidShareId, storyDeepLink, videoDeepLink } from "./deep-link.ts";

const GOOD = "0123456789abcdef01234567";

describe("share deep links", () => {
  it("accepts 24-char lowercase hex ids", () => {
    assert.ok(isValidShareId(GOOD));
    assert.equal(storyDeepLink(GOOD), `mosaic://story/detail/${GOOD}`);
    assert.equal(videoDeepLink(GOOD), `mosaic://video/${GOOD}`);
  });

  it("rejects anything that is not an ObjectId", () => {
    const bad = [
      "",
      "abc",
      GOOD + "0",
      GOOD.slice(1),
      GOOD.toUpperCase(),
      "0123456789abcdef0123456g",
      "../../settings?x=1aaaaaa",
      `${GOOD}/../../x`,
      `${GOOD}\n`,
      "0123456789abcdef%2F234567",
      undefined,
      null,
      123,
    ];
    for (const id of bad) {
      assert.equal(isValidShareId(id), false, String(id));
      assert.equal(storyDeepLink(id), null, String(id));
      assert.equal(videoDeepLink(id), null, String(id));
    }
  });
});
