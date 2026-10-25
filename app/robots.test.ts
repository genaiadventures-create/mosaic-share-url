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

  it("explicitly allows OAI-SearchBot and GPTBot in separate groups with the same blocks", () => {
    for (const bot of ["OAI-SearchBot", "GPTBot"]) {
      const group = rules.find((r) => r.userAgent === bot);
      assert.ok(group, bot);
      assert.equal(group.allow, "/");
      assert.deepEqual([group.disallow ?? []].flat(), disallow);
    }
  });
});
