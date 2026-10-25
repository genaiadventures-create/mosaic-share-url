import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
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
