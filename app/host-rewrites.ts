// Host-based routing: the marketing site lives at mosaicai.in, the share/referral
// landing stays at share.mosaicai.in. Only the root path is rewritten; every other
// route (/get, /story/*, /privacy-policy, AASA, verification files) is identical on all hosts.
export const MARKETING_HOST_PATTERN = "(www\\.)?mosaicai\\.in";

export const hostRewrites = [
  {
    source: "/",
    has: [{ type: "host" as const, value: MARKETING_HOST_PATTERN }],
    destination: "/home",
  },
];
