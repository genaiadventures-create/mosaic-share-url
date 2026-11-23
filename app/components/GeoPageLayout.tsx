import Link from "next/link";
import Image from "next/image";
import { kalam, satoshi } from "../home/fonts";
import "../home/home.css";

interface GeoPageLayoutProps {
  children: React.ReactNode;
  jsonLd: object;
  dateModified: string;
}

export default function GeoPageLayout({
  children,
  jsonLd,
  dateModified,
}: GeoPageLayoutProps) {
  const ld = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  const updated = new Intl.DateTimeFormat("en-US", {
    month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(dateModified));

  return (
    <div className={`mh ${satoshi.variable} ${kalam.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld }}
      />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav wrap">
        <Link href="/" className="nav__brand" aria-label="Mosaic home">
          <Image src="/app-icon.png" alt="" width={28} height={28} className="nav__icon" />
          <span>Mosaic</span>
        </Link>
        <nav aria-label="Main" className="nav__links">
          <Link href="/" className="nav__link">
            Home
          </Link>
          <Link href="/books" className="nav__link">
            Books
          </Link>
          <Link href="/#get" className="btn-primary">
            Get the app
          </Link>
        </nav>
      </header>
      <main id="main">
        {children}
        <p className="small wrap">Last updated <time dateTime={dateModified}>{updated}</time></p>
      </main>
      <footer className="footer wrap">
        <p className="footer__copy">© {new Date().getFullYear()} Mosaic</p>
        <nav aria-label="Footer" className="footer__links">
          <Link href="/privacy-policy" className="footer__link">
            Privacy
          </Link>
          <Link href="/terms-and-conditions" className="footer__link">
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  );
}