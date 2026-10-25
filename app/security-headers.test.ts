import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { CONTENT_SECURITY_POLICY, securityHeaders } from "./security-headers.ts";

const header = (key: string) => securityHeaders.find((h) => h.key === key)?.value;

describe("security headers", () => {
  it("sets the hardening headers", () => {
    assert.equal(header("X-Content-Type-Options"), "nosniff");
    assert.equal(header("Referrer-Policy"), "strict-origin-when-cross-origin");
    assert.equal(header("Permissions-Policy"), "camera=(), microphone=(), geolocation=()");
    assert.equal(header("Strict-Transport-Security"), "max-age=63072000; includeSubDomains; preload");
    assert.equal(header("Content-Security-Policy"), CONTENT_SECURITY_POLICY);
  });

  it("CSP forbids framing, plugins and foreign scripts", () => {
    const d = Object.fromEntries(
      CONTENT_SECURITY_POLICY.split(";").map((p) => {
        const [k, ...v] = p.trim().split(/\s+/);
        return [k, v];
      }),
    );
    assert.deepEqual(d["frame-ancestors"], ["'none'"]);
    assert.deepEqual(d["object-src"], ["'none'"]);
    assert.deepEqual(d["default-src"], ["'self'"]);
    assert.ok(d["script-src"].every((s: string) => s === "'self'" || s === "'unsafe-inline'"));
  });
});
