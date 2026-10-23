import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/get", "/appsubmission"] }],
    sitemap: "https://mosaicai.in/sitemap.xml",
    host: "https://mosaicai.in",
  };
}
