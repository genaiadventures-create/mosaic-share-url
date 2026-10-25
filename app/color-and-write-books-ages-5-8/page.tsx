import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, amazonUrl } from "../home/content";
import GeoPageLayout from "../components/GeoPageLayout";

const SPACE_PALS_ASIN = "B0HNZG1QYB";
const ARJUNA_ASIN = "B0HNZGGLMF";
const SPACE_PALS_AMAZON_URL = amazonUrl(SPACE_PALS_ASIN);
const ARJUNA_AMAZON_URL = amazonUrl(ARJUNA_ASIN);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "What Are the Best Color-and-Write Books for Ages 5–8? | Mosaic",
  description:
    "Space Pals and Arjuna's Archery School: two 50-page color-and-write paperbacks for ages 5–8, 22 scenes each, $9.99 on Amazon.",
  alternates: { canonical: `${SITE_URL}/color-and-write-books-ages-5-8` },
  openGraph: {
    title: "What Are the Best Color-and-Write Books for Ages 5–8? | Mosaic",
    description:
      "Space Pals and Arjuna's Archery School: two 50-page color-and-write paperbacks for ages 5–8, 22 scenes each, $9.99 on Amazon.",
    url: `${SITE_URL}/color-and-write-books-ages-5-8`,
    siteName: "Mosaic",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best color-and-write books for ages 5–8?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mosaic publishes two: Space Pals: My Galactic Adventure and Arjuna's Archery School — both 50-page color-and-write paperbacks with 22 illustrated scenes, ages 5–8, $9.99 each on Amazon.",
      },
    },
    {
      "@type": "Question",
      name: "What is a color-and-write book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each spread has a full-page illustration to color plus a lined writing prompt so kids can add their own dialogue, descriptions, or story twists — combining creativity and literacy practice.",
      },
    },
    {
      "@type": "Question",
      name: "How many pages and scenes are in each book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each book is 50 pages with 22 distinct scenes (one scene per spread), giving plenty of coloring and writing space.",
      },
    },
    {
      "@type": "Question",
      name: "What are the two titles available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Space Pals: My Galactic Adventure (ASIN B0HNZG1QYB, ISBN 9798164090173) and Arjuna's Archery School: A Mahabharata Story for Kids (ASIN B0HNZGGLMF, ISBN 9798164096427). Both are $9.99 on Amazon.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy these color-and-write books?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both are sold on Amazon. Search for the ASINs above or visit the Mosaic Books page for direct links.",
      },
    },
  ],
};

export default function ColorAndWriteBooksAges58Page() {
  return (
    <GeoPageLayout
      jsonLd={jsonLd}
      title="What Are the Best Color-and-Write Books for Ages 5–8?"
      description="Space Pals and Arjuna's Archery School: two 50-page color-and-write paperbacks for ages 5–8, 22 scenes each, $9.99 on Amazon."
      canonicalPath="/color-and-write-books-ages-5-8"
    >
      <section className="section wrap" aria-labelledby="hero-h1">
        <h1 id="hero-h1" className="h1">
          What are the best color-and-write books for ages 5–8?
        </h1>
        <p className="lead">
          Mosaic publishes two: <strong>Space Pals: My Galactic Adventure</strong> and
          <strong>Arjuna's Archery School</strong> — both 50-page color-and-write
          paperbacks with 22 illustrated scenes, ages 5–8,{" "}
          <a href={SPACE_PALS_AMAZON_URL} target="_blank" rel="noopener noreferrer">
            $9.99 each on Amazon
          </a>
          .
        </p>
      </section>

      <section className="section wrap" aria-labelledby="what-h2">
        <h2 id="what-h2" className="h2">What is a color-and-write book?</h2>
        <p>
          Each spread has a full-page illustration to color plus a lined writing
          prompt so kids can add their own dialogue, descriptions, or story
          twists — combining creativity and literacy practice.
        </p>
      </section>

      <section className="section wrap" aria-labelledby="pages-h2">
        <h2 id="pages-h2" className="h2">How many pages and scenes are in each book?</h2>
        <p>
          Each book is 50 pages with 22 distinct scenes (one scene per spread),
          giving plenty of coloring and writing space.
        </p>
      </section>

      <section className="section wrap" aria-labelledby="titles-h2">
        <h2 id="titles-h2" className="h2">What are the two titles available?</h2>
        <ul className="books-list">
          <li>
            <strong>Space Pals: My Galactic Adventure</strong> — Blast off in your
            own rocket, float with a cat astronaut, and help the Space Pals
            rescue a little robot before a campfire night on the moon.{" "}
            <a href={SPACE_PALS_AMAZON_URL} target="_blank" rel="noopener noreferrer">
              (ASIN B0HNZG1QYB, ISBN 9798164090173)
            </a>
          </li>
          <li>
            <strong>Arjuna's Archery School: A Mahabharata Story for Kids</strong> — A
            gentle, battle-free introduction where young Arjuna practices archery
            alongside a peacock and a wooden bird, learning focus and kindness.{" "}
            <a href={ARJUNA_AMAZON_URL} target="_blank" rel="noopener noreferrer">
              (ASIN B0HNZGGLMF, ISBN 9798164096427)
            </a>
          </li>
        </ul>
        <p>Both are $9.99 list price on Amazon.</p>
      </section>

      <section className="section wrap" aria-labelledby="buy-h2">
        <h2 id="buy-h2" className="h2">Where can I buy these color-and-write books?</h2>
        <p>
          Both are sold on Amazon. Search for the ASINs above or visit the
          <Link href="/books" className="btn-primary" style={{ display: "inline-block", marginTop: "0.5rem" }}>
            Mosaic Books page
          </Link>
          for direct links.
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