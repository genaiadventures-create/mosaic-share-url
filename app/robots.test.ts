import { describe, it } from "node:test";
import assert from "node:assert/strict";
import robots from "./robots.ts";

describe("robots", () => {
  const rules = [robots().rules].flat();
  const star = rules.find((r) => r.userAgent === "*");
  const disallow = [star?.disallow ?? []].flat();

  it("keeps the site and marketing pages crawlable", () => {
    assert.equal(star?.allow, "/");
    for (const path of ["/", "/home", "/privacy-policy"]) {
      assert.ok(!disallow.some((d) => path.startsWith(d)), path);
    }
  });

  it("blocks child story and video share pages", () => {
    assert.ok(disallow.includes("/story/"));
    assert.ok(disallow.includes("/video/"));
  });
});
