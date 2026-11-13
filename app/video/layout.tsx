import type { Metadata } from "next";

// Share pages are per-family links. Keep them out of search results even if a
// crawler ignores robots.txt or finds the URL elsewhere (see also the
// X-Robots-Tag header in next.config.ts).
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function VideoShareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
