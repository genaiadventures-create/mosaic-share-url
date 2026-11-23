import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { it } from "node:test";
import { BOOKS_PATH, booksJsonLd, jsonLd } from "./home/content.ts";
import { INDEXNOW_KEY } from "./indexnow-key.ts";
import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID, marketingMetadata } from "./marketing-seo.ts";
import sitemap from "./sitemap.ts";

it("uses the public apex URL for canonical and social metadata", () => {
  const path = "/books";
  const description = "Explore Mosaic's color-and-write books.";
  const metadata = marketingMetadata(path, "Mosaic Books", description);
  const url = SITE_URL + path;
  assert.equal(metadata.alternates?.canonical, url);
  assert.ok(metadata.openGraph && "url" in metadata.openGraph);
  assert.equal(metadata.openGraph.url, url);
  assert.equal(metadata.openGraph.description, description);
  assert.ok(metadata.twitter && "card" in metadata.twitter);
  assert.equal(metadata.twitter.card, "summary_large_image");
  const images = [metadata.openGraph.images ?? []].flat();
  assert.deepEqual([metadata.twitter.images ?? []].flat(), images);
  assert.equal(images.length, 1);
  const [image] = images;
  assert.ok(typeof image === "object" && "url" in image);
  assert.equal(new URL(image.url).origin, SITE_URL);
  assert.equal(image.width, 1200);
  assert.equal(image.height, 630);
});

it("publishes only the books, page and breadcrumb on the books page", () => {
  const graph = booksJsonLd()["@graph"];
  assert.deepEqual(graph.map((node) => node["@type"]), ["WebPage", "BreadcrumbList", "Book", "Book"]);
  const page = graph.find((node) => "mainEntity" in node);
  const breadcrumb = graph.find((node) => "itemListElement" in node);
  const books = graph.filter((node) => node["@type"] === "Book");
  const homepage = jsonLd()["@graph"];
  assert.ok(homepage.some((node) => node["@type"] === "FAQPage"));
  assert.ok(homepage.some((node) => node["@type"] === "Organization" && node["@id"] === ORGANIZATION_ID));
  assert.ok(homepage.some((node) => node["@type"] === "WebSite" && node["@id"] === WEBSITE_ID));
  assert.deepEqual(books, homepage.filter((node) => node["@type"] === "Book"));
  assert.ok(page && breadcrumb);
  assert.deepEqual(page.isPartOf, { "@id": WEBSITE_ID });
  assert.deepEqual(page.publisher, { "@id": ORGANIZATION_ID });
  assert.deepEqual(page.about, { "@id": ORGANIZATION_ID });
  assert.deepEqual(page.mainEntity, books.map((book) => ({ "@id": book["@id"] })));
  assert.deepEqual(page.breadcrumb, { "@id": breadcrumb["@id"] });
  assert.deepEqual(breadcrumb.itemListElement.map((item) => item.item), [`${SITE_URL}/`, `${SITE_URL}${BOOKS_PATH}`]);
  assert.equal(page.dateModified, sitemap().find(({ url }) => url === page.url)?.lastModified);
});

it("publishes a sitemap containing just canonical pages and page-specific dates", () => {
  const entries = sitemap();
  const paths = ["/", "/books", "/best-personalized-bedtime-story-app", "/mahabharata-story-for-kids-book",
    "/color-and-write-books-ages-5-8", "/privacy-policy", "/terms-and-conditions"];
  assert.deepEqual(entries.map(({ url }) => url), paths.map((path) => SITE_URL + path));
  for (const { lastModified } of entries) {
    assert.match(String(lastModified), /^\d{4}-\d{2}-\d{2}$/);
  }
  assert.notEqual(entries[0].lastModified, entries.at(-1)?.lastModified);
});

it("serves the public IndexNow key at a matching filename, with no trailing newline", () => {
  assert.match(INDEXNOW_KEY, /^[0-9a-f]{32}$/);
  assert.equal(readFileSync(new URL(`../public/${INDEXNOW_KEY}.txt`, import.meta.url), "utf8"), INDEXNOW_KEY);
});
