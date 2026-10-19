import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  safeCode,
  parseReferral,
  withParams,
  getUrl,
  appUrl,
  readChannelCookie,
  CHANNELS,
} from "./referral.ts";

describe("referral utilities", () => {
  describe("safeCode", () => {
    it("accepts valid alphanumeric codes with underscore/dash", () => {
      assert.equal(safeCode("ABC123"), "ABC123");
      assert.equal(safeCode("abc-123_xyz"), "abc-123_xyz");
    });
    it("rejects empty string", () => {
      assert.equal(safeCode(""), "");
    });
    it("rejects too long", () => {
      assert.equal(safeCode("a".repeat(65)), "");
    });
    it("rejects special characters", () => {
      assert.equal(safeCode("abc@123"), "");
      assert.equal(safeCode("abc 123"), "");
    });
    it("rejects non-string", () => {
      assert.equal(safeCode(null), "");
      assert.equal(safeCode(123), "");
    });
  });

  describe("parseReferral", () => {
    it("treats known channel in ref as channel, no code", () => {
      assert.deepEqual(parseReferral("yt", undefined), { channel: "yt", referralCode: "" });
      assert.deepEqual(parseReferral("ig", ""), { channel: "ig", referralCode: "" });
    });
    it("explicit code wins over channel-looking ref", () => {
      assert.deepEqual(parseReferral("yt", "MYCODE"), { channel: "", referralCode: "MYCODE" });
    });
    it("unknown ref becomes code when no explicit code", () => {
      assert.deepEqual(parseReferral("random", undefined), { channel: "", referralCode: "random" });
    });
    it("unknown ref ignored when explicit code provided", () => {
      assert.deepEqual(parseReferral("random", "EXPLICIT"), { channel: "", referralCode: "EXPLICIT" });
    });
    it("invalid code sanitized to empty", () => {
      assert.deepEqual(parseReferral("yt", "bad@code"), { channel: "", referralCode: "" });
    });
  });

  describe("withParams", () => {
    it("builds query string", () => {
      assert.equal(withParams("https://x", { a: "1", b: "2" }), "https://x?a=1&b=2");
    });
    it("skips empty values", () => {
      assert.equal(withParams("https://x", { a: "1", b: "" }), "https://x?a=1");
    });
    it("handles existing query", () => {
      assert.equal(withParams("https://x?z=9", { a: "1" }), "https://x?z=9&a=1");
    });
  });

  describe("getUrl", () => {
    it("builds /get with code and channel", () => {
      assert.equal(getUrl("yt", "CODE123"), "/get?code=CODE123&ref=yt");
    });
    it("omits ref when not a known channel", () => {
      assert.equal(getUrl("unknown", "CODE123"), "/get?code=CODE123");
    });
    it("sanitizes code", () => {
      assert.equal(getUrl("yt", "bad@code"), "/get?ref=yt");
    });
  });

  describe("appUrl", () => {
    it("uses mosaic:// scheme with code and ref", () => {
      assert.equal(appUrl("yt", "CODE123"), "mosaic://?code=CODE123&ref=yt");
    });
    it("omits ref when not a known channel", () => {
      assert.equal(appUrl("unknown", "CODE123"), "mosaic://?code=CODE123");
    });
  });

  describe("readChannelCookie", () => {
    it("parses valid channel cookie", () => {
      const cookie = "mosaic_ref=yt; other=1";
      assert.equal(readChannelCookie(cookie), "yt");
    });
    it("returns empty for unknown channel", () => {
      const cookie = "mosaic_ref=unknown; other=1";
      assert.equal(readChannelCookie(cookie), "");
    });
    it("handles missing cookie", () => {
      assert.equal(readChannelCookie(""), "");
    });
    it("handles malformed encoding gracefully", () => {
      const cookie = "mosaic_ref=%ZZ; other=1";
      assert.equal(readChannelCookie(cookie), "");
    });
  });

  describe("CHANNELS", () => {
    it("contains expected channels", () => {
      assert.ok(CHANNELS.has("yt"));
      assert.ok(CHANNELS.has("ig"));
      assert.ok(CHANNELS.has("tt"));
      assert.ok(CHANNELS.has("kdp"));
      assert.ok(CHANNELS.has("dm"));
      assert.ok(CHANNELS.has("fb"));
      assert.ok(CHANNELS.has("rd"));
      assert.equal(CHANNELS.size, 7);
    });
  });
});