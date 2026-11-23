import assert from "node:assert/strict";
import { it } from "node:test";
import { BOOKS_FAQ } from "./home/content.ts";
import {
  BEDTIME_FAQ,
  BEDTIME_FAQ_ITEMS,
  BEDTIME_SOURCES,
  COLOR_WRITE_FAQ_ITEMS,
  COLOR_WRITE_SOURCES,
  MAHABHARATA_FAQ,
  MAHABHARATA_FAQ_ITEMS,
  MAHABHARATA_SOURCES,
} from "./home/geo-content.ts";
import { faqPageNode } from "./marketing-seo.ts";

const groups = {
  bedtime: BEDTIME_FAQ_ITEMS,
  mahabharata: MAHABHARATA_FAQ_ITEMS,
  colorWrite: COLOR_WRITE_FAQ_ITEMS,
  books: BOOKS_FAQ,
};
const BANNED = /magical|\bmagic\b|unlock|unleash|elevate|seamless|revolutionary|effortless|journey|perfect for|in seconds|\u2014|!/i;

it("keeps every FAQ question unique, phrased as a question and free of banned copy", () => {
  for (const [name, items] of Object.entries(groups)) {
    assert.equal(new Set(items.map((i) => i.q)).size, items.length, name);
    for (const { q, a } of items) {
      assert.match(q, /\?$/, q);
      assert.ok(a.length > 60, q);
      assert.ok(!BANNED.test(q + " " + a), q);
    }
  }
});

it("emits FAQPage JSON-LD that mirrors the visible question and answer text", () => {
  const node = faqPageNode("/x", BEDTIME_FAQ_ITEMS);
  assert.equal(node["@type"], "FAQPage");
  assert.deepEqual(
    node.mainEntity.map((e) => [e.name, e.acceptedAnswer.text]),
    BEDTIME_FAQ_ITEMS.map(({ q, a }) => [q, a]),
  );
});

it("states the iOS requirement shown on the App Store listing and answers the length question first", () => {
  assert.match(BEDTIME_FAQ.devices.a, /iOS 15\.1/);
  assert.ok(!/iOS 16/.test(BEDTIME_FAQ.devices.a));
  assert.match(BEDTIME_FAQ.length.a, /^There is no official length\./);
});

it("keeps book identifiers and the price in the Mahabharata answers", () => {
  assert.match(MAHABHARATA_FAQ.best.a, /B0HNZGGLMF/);
  assert.match(MAHABHARATA_FAQ.best.a, /9798164096427/);
  assert.match(MAHABHARATA_FAQ.best.a, /\$9\.99/);
});

it("cites only https sources, each with what it supports", () => {
  for (const list of [BEDTIME_SOURCES, MAHABHARATA_SOURCES, COLOR_WRITE_SOURCES]) {
    assert.ok(list.length >= 3);
    for (const s of list) {
      assert.match(s.href, /^https:\/\//);
      assert.ok(s.label.length > 5 && s.supports.length > 10, s.href);
    }
  }
});
