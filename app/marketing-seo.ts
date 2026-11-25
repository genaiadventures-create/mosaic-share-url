import type { Metadata } from "next";
import { ANDROID_URL } from "./referral.ts";

export const SITE_URL = "https://mosaicai.in";
export const ORGANIZATION_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#site`;
export const FEED_PATH = "/feed.xml";

// Official profiles that identify the brand entity for search and AI engines (all return 200, checked 2026-11-23).
export const SAME_AS = [
  "https://apps.apple.com/us/app/mosaic-create-bedtime-stories/id6751470484",
  ANDROID_URL,
  "https://www.youtube.com/@mosaickidsstories",
  "https://www.instagram.com/mosaickidsstories/",
];

export const ORGANIZATION_NODE = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Mosaic",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-touch-icon.png`, width: 180, height: 180 },
  email: "support@mosaicai.in",
  sameAs: SAME_AS,
};

export const WEBSITE_NODE = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Mosaic",
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en",
};

// Every page carries the full Organization and WebSite nodes so its @id references resolve on that page alone.
export function entityNodes() {
  return [ORGANIZATION_NODE, WEBSITE_NODE];
}

// Calendar dates of the last meaningful page changes (not the build date).
export const PAGE_DATES = {
  "/": "2026-11-23",
  "/books": "2026-11-23",
  "/best-personalized-bedtime-story-app": "2026-11-23",
  "/best-bedtime-story-apps": "2026-11-23",
  "/ai-bedtime-story-generator": "2026-11-23",
  "/mahabharata-story-for-kids-book": "2026-11-23",
  "/color-and-write-books-ages-5-8": "2026-11-23",
  "/privacy-policy": "2026-11-25",
  "/terms-and-conditions": "2026-11-13",
  "/support": "2026-11-25",
} as const;

export const SOCIAL_IMAGE = {
  url: `${SITE_URL}/home/opengraph-image`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Mosaic: bedtime stories where your child is the hero. Illustration of a boy astronaut grinning on a snowy planet.",
};

export function marketingMetadata(path: string, title: string, description: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    // The Atom feed is advertised on every marketing page so feed readers and crawlers can discover it.
    alternates: { canonical: url, types: { "application/atom+xml": `${SITE_URL}${FEED_PATH}` } },
    openGraph: {
      title,
      description,
      url,
      siteName: "Mosaic",
      type: "website",
      locale: "en_US",
      images: [SOCIAL_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [SOCIAL_IMAGE] },
  };
}

export function innerPageNodes(
  path: string,
  name: string,
  dates: { datePublished: string; dateModified: string },
) {
  const url = `${SITE_URL}${path}`;
  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: url },
    ],
  };
  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    breadcrumb: { "@id": breadcrumb["@id"] },
    ...dates,
  };
  return { webPage, breadcrumb };
}

// JSON-LD for standalone pages (legal etc.): entity nodes + WebPage + breadcrumb, serialised for a <script> tag.
export function pageJsonLdString(path: keyof typeof PAGE_DATES, name: string): string {
  const { webPage, breadcrumb } = innerPageNodes(path, name, {
    datePublished: PAGE_DATES[path],
    dateModified: PAGE_DATES[path],
  });
  const graph = { "@context": "https://schema.org", "@graph": [...entityNodes(), webPage, breadcrumb] };
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}

export type QA = { q: string; a: string };

// FAQPage JSON-LD built from the same {q, a} list the page renders, so the markup never describes text a visitor cannot see.
export function faqPageNode(path: string, items: QA[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
