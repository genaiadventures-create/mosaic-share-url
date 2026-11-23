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

  it("gives every named crawler the same path rules as * and leaves Bingbot on *", () => {
    const bots = [
      "OAI-SearchBot", "GPTBot", "ClaudeBot", "Claude-SearchBot", "Claude-User",
      "PerplexityBot", "Perplexity-User", "ChatGPT-User", "Google-Extended", "Applebot-Extended",
    ];
    assert.deepEqual(rules.map((r) => r.userAgent).sort(), ["*", ...bots].sort());
    for (const bot of bots) {
      const group = rules.find((r) => r.userAgent === bot);
      assert.ok(group, bot);
      assert.equal(group.allow, "/");
      assert.deepEqual([group.disallow ?? []].flat(), disallow);
    }
  });

  it("advertises the apex sitemap without a non-standard Host directive", () => {
    const policy = robots();
    assert.equal(policy.sitemap, "https://mosaicai.in/sitemap.xml");
    assert.ok(!("host" in policy));
  });
});
