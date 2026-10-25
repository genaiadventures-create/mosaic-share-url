import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BOOKS, BOOKS_LINE, SITE_URL, amazonUrl, jsonLd } from "../content";
import { kalam, satoshi } from "../fonts";
import "../home.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mosaic Books | Color-and-Write Paperbacks for Kids",
  description: "Meet Space Pals and Arjuna's Archery School: color-and-write paperbacks for ages 5 to 8, available on Amazon.",
  alternates: { canonical: `${SITE_URL}/books` },
  openGraph: {
    title: "Mosaic Books | Color-and-Write Paperbacks for Kids",
    description: "Two color-and-write paperbacks for ages 5 to 8, available on Amazon.",
    url: `${SITE_URL}/books`,
    siteName: "Mosaic",
    type: "website",
  },
};

export default function BooksPage() {
  // Reuse the homepage graph, including its Book nodes and Amazon offers.
  const ld = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");
  return (
    <div className={`mh ${satoshi.variable} ${kalam.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav wrap">
        <Link href="/" className="nav__brand" aria-label="Mosaic home">
          <Image src="/app-icon.png" alt="" width={28} height={28} className="nav__icon" />
          <span>Mosaic</span>
        </Link>
        <nav aria-label="Main" className="nav__links">
          <Link href="/" className="nav__link">Home</Link>
          <Link href="/#get" className="btn-primary">Get the app</Link>
        </nav>
      </header>
      <main id="main">
        <section className="section wrap" aria-labelledby="books-title">
          <div className="books__head">
            <h1 id="books-title" className="h1">Books to make your own.</h1>
            <p className="lead">Two color-and-write paperbacks for ages 5 to 8, on Amazon now.</p>
            <p className="body books__how">{BOOKS_LINE}</p>
          </div>
          <div className="books">
            {BOOKS.map((b) => (
              <article key={b.slug} className="book">
                <a href={amazonUrl(b.asin)} className="book__cover" target="_blank" rel="noopener noreferrer">
                  <Image src={b.cover} alt={b.alt} width={800} height={1034} sizes="(min-width: 768px) 320px, 70vw" />
                </a>
                <div className="book__text">
                  <h2 className="book__title">{b.title}</h2>
                  <p className="book__sub">{b.subtitle}</p>
                  <p className="body book__blurb">{b.blurb}</p>
                  <p className="small">Paperback, 50 pages, ages 5 to 8. ${b.price} on Amazon.</p>
                  <a href={amazonUrl(b.asin)} className="btn-ghost book__buy" target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <span>&copy; 2026 Mosaic</span>
        <a href="mailto:support@mosaicai.in">support@mosaicai.in</a>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/terms-and-conditions">Terms</Link>
      </footer>
    </div>
  );
}
