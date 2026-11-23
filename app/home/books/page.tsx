import Image from "next/image";
import Link from "next/link";
import { marketingMetadata } from "../../marketing-seo";
import { PAGE_META } from "../../page-meta";
import { BOOKS, BOOKS_FAQ, BOOKS_LINE, BOOKS_PATH, BOOK_SPECS, amazonUrl, booksJsonLd } from "../content";
import { kalam, satoshi } from "../fonts";
import "../home.css";

export const metadata = marketingMetadata(BOOKS_PATH, PAGE_META["/books"].title, PAGE_META["/books"].description);

const STEPS = [
  "Read the left page together. A grown-up can read it aloud.",
  "Fill in the two blanks with a name, a color or a silly idea.",
  "Do the Your turn box: draw, circle or answer a question.",
  "Color the picture on the facing page to match the answers.",
];

export default function BooksPage() {
  const ld = JSON.stringify(booksJsonLd()).replace(/</g, "\\u003c");
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
      <main id="main" className="geo">
        <section className="section wrap" aria-labelledby="books-title">
          <div className="books__head">
            <h1 id="books-title" className="h1">Books to make your own.</h1>
            <p className="lead">
              Two color-and-write paperbacks for ages 5 to 8, on Amazon now. Each is 50 pages and $9.99.
            </p>
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
                  <dl className="geo__facts">
                    <dt>Format</dt>
                    <dd>Paperback, 50 pages, 8.5 by 11 in</dd>
                    <dt>Ages</dt>
                    <dd>5 to 8</dd>
                    <dt>Price</dt>
                    <dd>${b.price} on Amazon</dd>
                    <dt>ASIN</dt>
                    <dd>{b.asin}</dd>
                    {b.isbn ? (
                      <>
                        <dt>ISBN</dt>
                        <dd>{b.isbn}</dd>
                      </>
                    ) : null}
                  </dl>
                  <h3 className="h3">What happens inside</h3>
                  <ul className="books__scenes">
                    {b.scenes.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <a href={amazonUrl(b.asin)} className="btn-ghost book__buy" target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" aria-labelledby="how-title">
          <div className="geo__col">
            <h2 id="how-title" className="h2">How does a color-and-write book work?</h2>
            <p>{BOOK_SPECS} Each scene works the same way.</p>
            <ol>
              {STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p>
              More detail:{" "}
              <Link href="/color-and-write-books-ages-5-8">color-and-write books for ages 5 to 8</Link> and{" "}
              <Link href="/mahabharata-story-for-kids-book">the Mahabharata story book for kids</Link>.
            </p>
          </div>
        </section>

        <section className="section wrap" aria-labelledby="faq-title">
          <div className="geo__col">
            <h2 id="faq-title" className="h2">Questions parents ask about the books</h2>
            <div className="faq">
              {BOOKS_FAQ.map(({ q, a }) => (
                <details key={q} className="faq__item" open>
                  <summary className="faq__q">{q}</summary>
                  <p className="body faq__a">{a}</p>
                </details>
              ))}
            </div>
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
