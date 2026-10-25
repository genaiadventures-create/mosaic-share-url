import type { MetadataRoute } from "next";

const BASE = "https://mosaicai.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-23");
  return [
    { url: `${BASE}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/books`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/best-personalized-bedtime-story-app`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/mahabharata-story-for-kids-book`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/color-and-write-books-ages-5-8`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
