import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // ## AI crawlers
  // Both GPTBot and OAI-SearchBot are allowed (no Disallow rule) because the
  // marketing site is public, contains no private data, and we want our content
  // discoverable in AI-powered search results. The existing "*" rule with allow: "/"
  // already permits them; no additional rule is needed.
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /story/ and /video/ are per-child share pages and must not be indexed.
        disallow: ["/get", "/appsubmission", "/story/", "/video/"],
      },
    ],
    sitemap: "https://mosaicai.in/sitemap.xml",
    host: "https://mosaicai.in",
  };
}
