import { describe, it } from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import {
  BENEFITS,
  HERO_COPY,
  STEPS,
  STORIES,
  TRUST_LINES,
  bootstrapScript,
  platformOf,
  primaryStore,
  storeOrder,
  variantOf,
} from "./get-landing.ts";
import { ANDROID_URL, CHANNELS, IOS_URL, appUrl, parseReferral, readChannelCookie, withParams } from "./referral.ts";

const IPHONE = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1";
const IPAD_DESKTOP_MODE = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15";
const ANDROID = "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36";
const MAC = IPAD_DESKTOP_MODE;
const WINDOWS = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

describe("platformOf", () => {
  it("detects iPhone, iPad and iPod as ios", () => {
    assert.equal(platformOf(IPHONE), "ios");
    assert.equal(platformOf("Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X)"), "ios");
    assert.equal(platformOf("Mozilla/5.0 (iPod touch; CPU iPhone OS 15_0 like Mac OS X)"), "ios");
  });
  it("treats a touch-screen Mac user agent (iPadOS desktop mode) as ios, a plain Mac as desktop", () => {
    assert.equal(platformOf(MAC, 5), "ios");
    assert.equal(platformOf(MAC, 0), "desktop");
    assert.equal(platformOf(MAC), "desktop");
  });
  it("detects Android, including tablets", () => {
    assert.equal(platformOf(ANDROID), "android");
    assert.equal(platformOf("Mozilla/5.0 (Linux; Android 13; SM-X700) AppleWebKit/537.36 Chrome/120 Safari/537.36"), "android");
  });
  it("falls back to desktop for everything else, including junk input", () => {
    assert.equal(platformOf(WINDOWS), "desktop");
    assert.equal(platformOf(""), "desktop");
    assert.equal(platformOf(undefined), "desktop");
    assert.equal(platformOf(null, "5"), "desktop");
  });
});

describe("storeOrder / primaryStore", () => {
  it("puts the visitor's own store first and never drops the other", () => {
    assert.deepEqual(storeOrder("ios"), ["ios", "android"]);
    assert.deepEqual(storeOrder("android"), ["android", "ios"]);
    assert.deepEqual(storeOrder("desktop"), ["ios", "android"]);
    for (const p of ["ios", "android", "desktop"] as const) assert.equal(new Set(storeOrder(p)).size, 2);
  });
  it("has no single primary store on desktop", () => {
    assert.equal(primaryStore("ios"), "ios");
    assert.equal(primaryStore("android"), "android");
    assert.equal(primaryStore("desktop"), null);
  });
});

describe("channel to variant mapping", () => {
  const variantFor = (ref: string | null, code: string | null = null) => variantOf(parseReferral(ref, code).channel);

  it("book QR codes (kdp and kdp-<campaign>) get the book-reader copy", () => {
    for (const ref of ["kdp", "kdp-diwali", "kdp-hanuman", "kdp-greatrace", "kdp-monkeycroc", "kdp-raghav"]) {
      assert.equal(variantFor(ref), "kdp", ref);
    }
  });
  it("social and other channels, no ref, and personal codes get the general pitch", () => {
    for (const ref of ["ig", "fb", "yt", "tt", "dm", "rd", "ig-bio", null, "", "ABCD2345", "zzz-diwali", "kdp-"]) {
      assert.equal(variantFor(ref), "general", String(ref));
    }
  });
  it("an explicit code wins over a channel, as in parseReferral", () => {
    assert.equal(variantFor("kdp", "FRIEND1"), "general");
  });
  it("only kdp is special; every known channel maps to a variant that has copy", () => {
    for (const ch of CHANNELS) assert.ok(HERO_COPY[variantOf(ch)], ch);
    assert.equal(variantOf(""), "general");
    assert.equal(variantOf("anything"), "general");
  });
});

describe("copy", () => {
  const all = [
    ...Object.values(HERO_COPY).flatMap((c) => [c.h1, c.lead, c.note]),
    ...BENEFITS.flatMap((b) => [b.title, b.body]),
    ...STEPS.flatMap((s) => [s.title, s.body]),
    ...STORIES.flatMap((s) => [s.alt, s.line]),
    ...TRUST_LINES,
  ];

  it("the book-reader variant differs from the general one in headline, lead and note", () => {
    assert.notEqual(HERO_COPY.kdp.h1, HERO_COPY.general.h1);
    assert.notEqual(HERO_COPY.kdp.lead, HERO_COPY.general.lead);
    assert.notEqual(HERO_COPY.kdp.note, HERO_COPY.general.note);
  });
  it("the general headline is the marketing homepage headline", () => {
    assert.equal(HERO_COPY.general.h1, "Bedtime stories where your child is the hero.");
  });
  it("book readers are told the app makes a new story and does not read back the printed one", () => {
    assert.match(HERO_COPY.kdp.note, /new story/);
    assert.match(HERO_COPY.kdp.note, /doesn't read back the one printed in your book/);
    assert.doesNotMatch(HERO_COPY.kdp.lead, /your (adventure|book)/i);
  });
  it("uses no banned words, exclamation marks, emoji or invented social proof", () => {
    const banned = /\b(magic|magical|unlock|unleash|elevate|seamless|revolutionary|effortless|journey|perfect for|in seconds|in 10 seconds)\b/i;
    const proof = /(\u2605|\u2B50|stars?\b|\bratings?\b|reviews?|testimonial|award|trusted by|\b\d[\d,]*\+? (parents|families|users|downloads))/i;
    for (const text of all) {
      assert.doesNotMatch(text, banned, text);
      assert.doesNotMatch(text, /!/, text);
      assert.doesNotMatch(text, /\p{Extended_Pictographic}/u, text);
      assert.doesNotMatch(text, proof, text);
    }
  });
  it("states the free allowance and price exactly as the marketing site does", () => {
    assert.ok(HERO_COPY.general.lead.includes("Your first 5 stories are free."));
    assert.ok(TRUST_LINES.some((l) => l.includes("$4.99 a month") && l.includes("cancel any time in the App Store or Google Play")));
  });
  it("every story page has alt text and a quoted line", () => {
    assert.equal(STORIES.length, 4);
    for (const s of STORIES) {
      assert.ok(s.alt.length > 20 && s.line.length > 10 && s.who);
      assert.ok(s.src.startsWith("/stories/"));
    }
  });
});

// --- The inline bootstrap script must agree with the React code and with referral.ts -------------------------

type Attrs = Record<string, string>;
class FakeEl {
  attrs: Attrs;
  children: FakeEl[] = [];
  parent: FakeEl | null = null;
  textContent = "";
  constructor(attrs: Attrs = {}) {
    this.attrs = { ...attrs };
  }
  add(child: FakeEl) {
    child.parent = this;
    this.children.push(child);
    return child;
  }
  setAttribute(k: string, v: string) {
    this.attrs[k] = v;
  }
  getAttribute(k: string) {
    return k in this.attrs ? this.attrs[k] : null;
  }
  removeAttribute(k: string) {
    delete this.attrs[k];
  }
  insertBefore(node: FakeEl, ref: FakeEl) {
    this.children = this.children.filter((c) => c !== node);
    this.children.splice(this.children.indexOf(ref), 0, node);
  }
  all(): FakeEl[] {
    return this.children.flatMap((c) => [c, ...c.all()]);
  }
  matches(sel: string) {
    const m = /^(\w+)?\[([\w-]+)(?:="([^"]*)")?\]$/.exec(sel);
    if (!m) throw new Error("unsupported selector " + sel);
    const [, , name, val] = m;
    return name in this.attrs && (val === undefined || this.attrs[name] === val);
  }
  querySelectorAll(sel: string) {
    return this.all().filter((e) => e.matches(sel));
  }
  querySelector(sel: string) {
    return this.querySelectorAll(sel)[0] ?? null;
  }
}

function page() {
  const root = new FakeEl({ id: "get-root", "data-platform": "desktop", "data-variant": "general" });
  const groups = [0, 1].map(() => {
    const g = root.add(new FakeEl({ "data-stores": "" }));
    const ios = g.add(new FakeEl({ "data-store": "ios", "data-base": IOS_URL, href: IOS_URL }));
    const android = g.add(new FakeEl({ "data-store": "android", "data-base": ANDROID_URL, href: ANDROID_URL }));
    return { g, ios, android };
  });
  const deeplink = root.add(new FakeEl({ "data-deeplink": "", href: "mosaic://" }));
  const refbox = root.add(new FakeEl({ "data-refbox": "", hidden: "" }));
  const code = refbox.add(new FakeEl({ "data-code": "" }));
  return { root, groups, deeplink, refbox, code };
}

function runBootstrap(opts: { ua: string; touch?: number; search: string; cookie?: string }) {
  const p = page();
  const context = vm.createContext({
    document: { getElementById: (id: string) => (id === "get-root" ? p.root : null), cookie: opts.cookie ?? "" },
    navigator: { userAgent: opts.ua, maxTouchPoints: opts.touch ?? 0 },
    location: { search: opts.search },
    URLSearchParams,
  });
  vm.runInContext(bootstrapScript(), context);
  return p;
}

describe("bootstrapScript (runs before paint) agrees with the React rules", () => {
  const cases: { name: string; ua: string; touch?: number; search: string; cookie?: string }[] = [
    { name: "plain /get on iPhone", ua: IPHONE, search: "" },
    { name: "plain /get on Android", ua: ANDROID, search: "" },
    { name: "plain /get on desktop", ua: WINDOWS, search: "" },
    { name: "iPad in desktop mode", ua: MAC, touch: 5, search: "" },
    { name: "?ref=ig", ua: IPHONE, search: "?ref=ig" },
    { name: "?ref=fb on Android", ua: ANDROID, search: "?ref=fb" },
    { name: "?ref=kdp", ua: IPHONE, search: "?ref=kdp" },
    { name: "?ref=kdp-diwali", ua: ANDROID, search: "?ref=kdp-diwali" },
    { name: "?ref=kdp-greatrace", ua: WINDOWS, search: "?ref=kdp-greatrace" },
    { name: "?ref=kdp-hanuman", ua: IPHONE, search: "?ref=kdp-hanuman" },
    { name: "legacy personal code", ua: IPHONE, search: "?ref=ABCD2345" },
    { name: "?code=FRIEND-1", ua: ANDROID, search: "?code=FRIEND-1" },
    { name: "?code=bad code!", ua: IPHONE, search: "?code=bad%20code!" },
    { name: "channel and code together", ua: IPHONE, search: "?ref=kdp&code=FRIEND1" },
    { name: "unknown campaign", ua: IPHONE, search: "?ref=zzz-diwali" },
    { name: "too-long campaign", ua: IPHONE, search: "?ref=kdp-a-b-c-d" },
    { name: "cookie remembers kdp", ua: IPHONE, search: "", cookie: "a=1; mosaic_ref=kdp; b=2" },
    { name: "cookie ig on Android", ua: ANDROID, search: "", cookie: "mosaic_ref=ig" },
    { name: "cookie with junk value", ua: IPHONE, search: "", cookie: "mosaic_ref=%E0%A4%A" },
    { name: "cookie not a channel", ua: IPHONE, search: "", cookie: "mosaic_ref=nope" },
    { name: "personal code plus remembered channel (deep link carries both)", ua: IPHONE, search: "?code=FRIEND1", cookie: "mosaic_ref=kdp" },
    { name: "legacy code plus remembered channel", ua: ANDROID, search: "?ref=ABCD2345", cookie: "mosaic_ref=ig" },
    { name: "explicit channel beats cookie", ua: IPHONE, search: "?ref=ig", cookie: "mosaic_ref=kdp" },
  ];

  for (const c of cases) {
    it(c.name, () => {
      const params = new URLSearchParams(c.search);
      const parsed = parseReferral(params.get("ref"), params.get("code"));
      const channel = parsed.channel || readChannelCookie(c.cookie ?? "");
      const platform = platformOf(c.ua, c.touch ?? 0);
      const out = runBootstrap(c);

      assert.equal(out.root.attrs["data-platform"], platform);
      assert.equal(out.root.attrs["data-variant"], variantOf(channel));
      for (const { g, ios, android } of out.groups) {
        assert.equal(ios.attrs.href, withParams(IOS_URL, { ref: channel }));
        assert.equal(android.attrs.href, withParams(ANDROID_URL, { ref: channel }));
        // The visitor's own store comes first in DOM order, so keyboard order matches what they see.
        assert.deepEqual(g.children, platform === "android" ? [android, ios] : [ios, android]);
      }
      assert.equal(out.deeplink.attrs.href, appUrl(channel, parsed.referralCode));
      assert.equal(out.refbox.attrs.hidden === undefined, Boolean(parsed.referralCode));
      assert.equal(out.code.textContent, parsed.referralCode);
    });
  }

  it("does nothing, and does not throw, when the page root is missing", () => {
    const context = vm.createContext({
      document: { getElementById: () => null, cookie: "" },
      navigator: { userAgent: IPHONE, maxTouchPoints: 0 },
      location: { search: "?ref=kdp" },
      URLSearchParams,
    });
    assert.doesNotThrow(() => vm.runInContext(bootstrapScript(), context));
  });

  it("embeds exactly the channels referral.ts knows", () => {
    for (const ch of CHANNELS) assert.ok(bootstrapScript().includes(`"${ch}"`), ch);
  });
});
