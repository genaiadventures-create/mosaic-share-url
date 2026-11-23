import type { MetadataRoute } from "next";
import { PAGE_DATES, SITE_URL } from "./marketing-seo.ts";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(PAGE_DATES).map(([path, lastModified]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
