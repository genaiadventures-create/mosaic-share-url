// Host-based routing: the marketing site lives at mosaicai.in, the share/referral
// landing stays at share.mosaicai.in. Root and books are marketing-only rewrites;
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
];
