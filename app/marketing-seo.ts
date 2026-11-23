import type { Metadata } from "next";

export const SITE_URL = "https://mosaicai.in";
export const ORGANIZATION_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#site`;

// Calendar dates of the last meaningful page changes (not the build date).
export const PAGE_DATES = {
  "/": "2026-11-23",
  "/books": "2026-11-23",
  "/best-personalized-bedtime-story-app": "2026-11-23",
  "/mahabharata-story-for-kids-book": "2026-11-23",
  "/color-and-write-books-ages-5-8": "2026-11-23",
  "/privacy-policy": "2026-11-13",
  "/terms-and-conditions": "2026-11-13",
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
    alternates: { canonical: url },
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
