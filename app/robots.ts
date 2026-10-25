import type { MetadataRoute } from "next";

// Paths no crawler should index. /story/ and /video/ are per-child share pages.
const DISALLOW = ["/get", "/appsubmission", "/story/", "/video/"];

export default function robots(): MetadataRoute.Robots {
  // ## AI crawlers
  // OAI-SearchBot (ChatGPT search) and GPTBot are explicitly allowed so the
  // marketing and GEO pages are discoverable in AI search. A crawler that
  // matches a named group ignores "*", so each named group repeats DISALLOW.
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: DISALLOW },
      { userAgent: "GPTBot", allow: "/", disallow: DISALLOW },
    ],
    sitemap: "https://mosaicai.in/sitemap.xml",
    host: "https://mosaicai.in",
  };
}
