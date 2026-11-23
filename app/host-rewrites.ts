// Host-based routing: the marketing site lives at mosaicai.in, the share/referral
// landing stays at share.mosaicai.in. Root, books, the GEO pages and the Atom feed are marketing-only rewrites;
// other routes (/get, /story/*, /privacy-policy, AASA, verification files) are shared.
export const MARKETING_HOST_PATTERN = "(www\\.)?mosaicai\\.in";

export const hostRewrites = [
  {
    source: "/",
    has: [{ type: "host" as const, value: MARKETING_HOST_PATTERN }],
    destination: "/home",
  },
  {
    source: "/books",
    has: [{ type: "host" as const, value: MARKETING_HOST_PATTERN }],
    destination: "/home/books",
  },
  {
    source: "/best-personalized-bedtime-story-app",
    has: [{ type: "host" as const, value: MARKETING_HOST_PATTERN }],
    destination: "/home/best-personalized-bedtime-story-app",
  },
  {
    source: "/best-bedtime-story-apps",
    has: [{ type: "host" as const, value: MARKETING_HOST_PATTERN }],
    destination: "/home/best-bedtime-story-apps",
  },
  {
    source: "/ai-bedtime-story-generator",
    has: [{ type: "host" as const, value: MARKETING_HOST_PATTERN }],
    destination: "/home/ai-bedtime-story-generator",
  },
  {
    source: "/mahabharata-story-for-kids-book",
    has: [{ type: "host" as const, value: MARKETING_HOST_PATTERN }],
    destination: "/home/mahabharata-story-for-kids-book",
  },
  {
    source: "/color-and-write-books-ages-5-8",
    has: [{ type: "host" as const, value: MARKETING_HOST_PATTERN }],
    destination: "/home/color-and-write-books-ages-5-8",
  },
  {
    source: "/feed.xml",
    has: [{ type: "host" as const, value: MARKETING_HOST_PATTERN }],
    destination: "/home/feed.xml",
  },
];
