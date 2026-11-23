import { PAGE_DATES, innerPageNodes, marketingMetadata } from "../../marketing-seo";
import Link from "next/link";
import { amazonUrl } from "../content";
import GeoPageLayout from "../../components/GeoPageLayout";

const ARJUNA_ASIN = "B0HNZGGLMF";
const ARJUNA_AMAZON_URL = amazonUrl(ARJUNA_ASIN);

const PATH = "/mahabharata-story-for-kids-book";
const PAGE_NAME = "Mahabharata story book for kids";
const DATE_MODIFIED = PAGE_DATES[PATH];

export const metadata = marketingMetadata(
  PATH,
  "Best Mahabharata Story Book for Kids | Mosaic",
  "Arjuna's Archery School is a gentle Mahabharata story for ages 5–8 — no battles, 50-page color-and-write paperback, $9.99 on Amazon.",
);

const faq = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best Mahabharata story book for kids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arjuna's Archery School: A Mahabharata Story for Kids is a gentle, age-appropriate introduction — no battles, just a young archer learning focus and kindness. 50-page color-and-write paperback, $9.99 on Amazon.",
      },
    },
    {
      "@type": "Question",
      name: "Is Arjuna's Archery School violent or scary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — the story is deliberately gentle with no battle scenes. It follows young Arjuna practicing archery alongside a peacock and a wooden bird, teaching focus and kindness.",
      },
    },
    {
      "@type": "Question",
      name: "What age range is this Mahabharata book for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ages 5–8. The text and illustrations are designed for early readers and read-aloud time.",
      },
    },
    {
      "@type": "Question",
      name: "What format is the book and how many pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's a 50-page color-and-write paperback (8.5×11 in). Kids can color the illustrations and write their own responses on each spread.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy Arjuna's Archery School?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Available on Amazon (ASIN B0HNZGGLMF, ISBN 9798164096427) for $9.99 list price.",
      },
    },
  ],
};

const { webPage, breadcrumb } = innerPageNodes(PATH, PAGE_NAME, {
  datePublished: "2026-10-24",
  dateModified: DATE_MODIFIED,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [webPage, breadcrumb, faq],
};

export default function MahabharataStoryForKidsBookPage() {
  return (
    <GeoPageLayout jsonLd={jsonLd} dateModified={DATE_MODIFIED}>
      <section className="section wrap" aria-labelledby="hero-h1">
        <h1 id="hero-h1" className="h1">
          What is the best Mahabharata story book for kids?
        </h1>
        <p className="lead">
          <strong>Arjuna's Archery School: A Mahabharata Story for Kids</strong> is a
          gentle, age-appropriate introduction — no battles, just a young archer
          learning focus and kindness. 50-page color-and-write paperback,{" "}
          <a href={ARJUNA_AMAZON_URL} target="_blank" rel="noopener noreferrer">
            $9.99 on Amazon
          </a>
          (ASIN B0HNZGGLMF, ISBN 9798164096427).
        </p>
      </section>

      <section className="section wrap" aria-labelledby="gentle-h2">
        <h2 id="gentle-h2" className="h2">Is Arjuna's Archery School violent or scary?</h2>
        <p>
          No — the story is deliberately gentle with no battle scenes. It follows
          young Arjuna practicing archery alongside a peacock and a wooden bird,
          teaching focus and kindness.
        </p>
      </section>

      <section className="section wrap" aria-labelledby="age-h2">
        <h2 id="age-h2" className="h2">What age range is this Mahabharata book for?</h2>
        <p>
          Ages 5–8. The text and illustrations are designed for early readers and
          read-aloud time.
        </p>
      </section>

      <section className="section wrap" aria-labelledby="format-h2">
        <h2 id="format-h2" className="h2">What format is the book and how many pages?</h2>
        <p>
          It's a 50-page color-and-write paperback (8.5×11 in). Kids can color
          the illustrations and write their own responses on each spread.
        </p>
      </section>

      <section className="section wrap" aria-labelledby="buy-h2">
        <h2 id="buy-h2" className="h2">Where can I buy Arjuna's Archery School?</h2>
        <p>
          Available on Amazon (ASIN B0HNZGGLMF, ISBN 9798164096427) for $9.99 list price.
          <Link href="/books" className="btn-primary" style={{ marginLeft: "0.5rem" }}>
            View all Mosaic books
          </Link>
        </p>
      </section>

      <section className="section wrap cta" aria-labelledby="cta-h2">
        <h2 id="cta-h2" className="visually-hidden">Get started</h2>
        <Link href="/#get" className="btn-primary">Try the Mosaic app free</Link>
        <p className="cta__note">Or explore our <Link href="/books">color-and-write paperbacks</Link>.</p>
      </section>
    </GeoPageLayout>
  );
}