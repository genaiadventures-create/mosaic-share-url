import type { MetadataRoute } from "next";

const BASE = "https://mosaicai.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-23");
  return [
    { url: `${BASE}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
