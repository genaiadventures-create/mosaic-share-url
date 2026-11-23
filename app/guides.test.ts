import assert from "node:assert/strict";
import { it } from "node:test";
import {
  GENERATOR_CHECKLIST,
  GENERATOR_FAQ,
  GENERATOR_FAQ_ITEMS,
  GENERATOR_MOSAIC_FACTS,
  GENERATOR_SOURCES,
  GENERATOR_STEPS,
  ROUNDUP_APPS,
  ROUNDUP_FAQ_ITEMS,
  ROUNDUP_LEAD,
  ROUNDUP_METHOD,
  ROUNDUP_SOURCES,
} from "./home/guides-content.ts";
import { FEED_ORDER, PAGE_META } from "./page-meta.ts";
import { PAGE_DATES, faqPageNode } from "./marketing-seo.ts";

const BANNED = /magical|\bmagic\b|unlock|unleash|elevate|seamless|revolutionary|effortless|journey|perfect for|in seconds|\u2014|!/i;
const words = (s: string) => s.trim().split(/\s+/).length;

it("keeps every page title under 61 characters and every description between 70 and 160", () => {
  for (const [path, { title, description }] of Object.entries(PAGE_META)) {
    assert.ok(title.length <= 60, `${path} title is ${title.length}`);
    assert.ok(description.length >= 70 && description.length <= 160, `${path} description is ${description.length}`);
    assert.ok(path in PAGE_DATES, `${path} has a page date`);
  }
  assert.deepEqual([...FEED_ORDER].sort(), Object.keys(PAGE_META).sort());
});

it("opens the roundup with an answer of at most 50 words that names the picks", () => {
  assert.ok(words(ROUNDUP_LEAD) <= 50, `lead is ${words(ROUNDUP_LEAD)} words`);
  for (const name of ["Moshi", "Epic", "Wonderbly", "Mosaic", "Oscar Stories", "Calm Kids"]) assert.ok(ROUNDUP_LEAD.includes(name), name);
});

it("gives every roundup app a filled cell in every column, an official https link and a source for it", () => {
  assert.equal(ROUNDUP_APPS.length, 6);
  for (const app of ROUNDUP_APPS) {
    for (const [key, value] of Object.entries(app)) assert.ok(value.length > 3, `${app.id}.${key}`);
    assert.match(app.url, /^https:\/\//);
    assert.ok(!BANNED.test(Object.values(app).join(" ")), app.id);
  }
  // Competitors are cited from their own domains or their store listings; Mosaic from our own store listing.
  const hosts = ROUNDUP_SOURCES.map((s) => new URL(s.href).hostname);
  for (const host of ["apps.apple.com", "oscarstories.com", "app.oscarstories.com", "moshikids.com", "calm.com", "getepic.com", "wonderbly.com"]) {
    assert.ok(hosts.some((h) => h === host || h.endsWith(`.${host}`)), host);
  }
  for (const m of ROUNDUP_METHOD) assert.ok(!BANNED.test(m), m);
});

it("states Not listed instead of guessing where a company page was silent", () => {
  const cells = ROUNDUP_APPS.flatMap((a) => [a.ages, a.narration, a.personalization]);
  assert.ok(cells.some((c) => /not listed/i.test(c)));
});

it("keeps FAQ questions unique, question-phrased and free of banned copy for both guides", () => {
  for (const items of [ROUNDUP_FAQ_ITEMS, GENERATOR_FAQ_ITEMS]) {
    assert.equal(new Set(items.map((i) => i.q)).size, items.length);
    for (const { q, a } of items) {
      assert.match(q, /\?$/, q);
      assert.ok(a.length > 60, q);
      assert.ok(!BANNED.test(q + " " + a), q);
    }
  }
  const node = faqPageNode("/x", GENERATOR_FAQ_ITEMS);
  assert.deepEqual(node.mainEntity.map((e) => [e.name, e.acceptedAnswer.text]), GENERATOR_FAQ_ITEMS.map(({ q, a }) => [q, a]));
});

it("answers the generator question first, in under 70 words, with the safety caveat", () => {
  assert.ok(words(GENERATOR_FAQ.what.a) < 70);
  assert.match(GENERATOR_FAQ.what.a, /^An AI bedtime story generator is/);
  assert.match(GENERATOR_FAQ.what.a, /No generator is safe by default/);
});

it("covers the six checks it promises and does not claim COPPA compliance or human review", () => {
  assert.equal(GENERATOR_CHECKLIST.length, 6);
  const text = [...GENERATOR_FAQ_ITEMS.map((i) => i.a), ...GENERATOR_MOSAIC_FACTS.map((f) => f.detail), ...GENERATOR_STEPS.map((s) => s.detail)].join(" ");
  assert.ok(!/COPPA[- ]compliant|certified/i.test(text));
  assert.match(GENERATOR_FAQ.review.a, /no separate human review/);
  assert.ok(GENERATOR_STEPS.length >= 6);
  for (const s of GENERATOR_SOURCES) assert.match(s.href, /^https:\/\//);
  for (const host of ["ftc.gov", "commonsensemedia.org"]) {
    assert.ok(GENERATOR_SOURCES.some((s) => new URL(s.href).hostname.endsWith(host)), host);
  }
});
