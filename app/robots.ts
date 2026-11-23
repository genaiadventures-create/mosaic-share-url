import type { MetadataRoute } from "next";
import { SITE_URL } from "./marketing-seo.ts";

// Paths no crawler should index. /story/ and /video/ are per-child share pages.
const DISALLOW = ["/get", "/appsubmission", "/story/", "/video/"];

// A named group overrides `*`, so every group repeats the private-path blocks.
const CRAWLERS = [
  "*",
  "OAI-SearchBot",
  "GPTBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "ChatGPT-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
