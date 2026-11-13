import type { NextConfig } from "next";
import { hostRewrites } from "./app/host-rewrites";
import { NOINDEX_HEADER, SHARE_PAGE_SOURCES, securityHeaders } from "./app/security-headers";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      ...SHARE_PAGE_SOURCES.map((source) => ({ source, headers: [NOINDEX_HEADER] })),
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json'
          }
        ]
      }
    ];
  },
  async rewrites() {
    // beforeFiles so the rewrite wins over app/page.tsx for the marketing host.
    return { beforeFiles: hostRewrites, afterFiles: [], fallback: [] };
  },
};

export default nextConfig;
