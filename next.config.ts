import type { NextConfig } from "next";
import { hostRewrites } from "./app/host-rewrites";
import { securityHeaders } from "./app/security-headers";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
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
