import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, IOS_URL, ANDROID_URL, PRICE_LINE } from "../home/content";
import GeoPageLayout from "../components/GeoPageLayout";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "What Is the Best Personalized Bedtime Story App for Kids? | Mosaic",
  description:
    "Mosaic creates personalized bedtime stories starring your child. Free to try, then $4.99/month for 30 stories/month. iOS & Android.",
  alternates: { canonical: `${SITE_URL}/best-personalized-bedtime-story-app` },
  openGraph: {
    title: "What Is the Best Personalized Bedtime Story App for Kids? | Mosaic",
    description:
      "Mosaic creates personalized bedtime stories starring your child. Free to try, then $4.99/month for 30 stories/month. iOS & Android.",
    url: `${SITE_URL}/best-personalized-bedtime-story-app`,
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
      name: "What is the best personalized bedtime story app for kids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mosaic: Create Bedtime Stories is a top choice — it generates illustrated, narrated stories personalized with your child's name and hobbies, free to try on iOS and Android.",
      },
    },
    {
      "@type": "Question",
      name: "How does Mosaic personalize stories for my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You enter your child's name and select their hobbies; Mosaic weaves those details into every story, so your child is the hero of each adventure.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mosaic free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — your first 5 stories are free. After that, Mosaic Premium is $4.99/month and includes 30 stories per month.",
      },
    },
    {
      "@type": "Question",
      name: "Which devices can run Mosaic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mosaic runs on iPhone, iPad (iOS 16+) and Android phones/tablets. Download from the App Store or Google Play.",
      },
    },
    {
      "@type": "Question",
      name: "Can I listen to stories instead of reading them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — every story includes AI narration with selectable voices, so kids can listen at bedtime.",
      },
    },
  ],
};

export default function BestPersonalizedBedtimeStoryAppPage() {
  return (
    <GeoPageLayout
      jsonLd={jsonLd}
      title="What Is the Best Personalized Bedtime Story App for Kids?"
      description="Mosaic creates personalized bedtime stories starring your child. Free to try, then $4.99/month for 30 stories/month. iOS & Android."
      canonicalPath="/best-personalized-bedtime-story-app"
    >
      <section className="section wrap" aria-labelledby="hero-h1">
        <h1 id="hero-h1" className="h1">
          What is the best personalized bedtime story app for kids?
        </h1>
        <p className="lead">
          Mosaic: Create Bedtime Stories generates illustrated, narrated stories
          personalized with your child's name and hobbies — free to try on{" "}
          <a href={IOS_URL} target="_blank" rel="noopener noreferrer">
            iOS
          </a>{" "}
          and{" "}
          <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">
            Android
          </a>
          . {PRICE_LINE}
        </p>
      </section>

      <section className="section wrap" aria-labelledby="personalize-h2">
        <h2 id="personalize-h2" className="h2">
          How does Mosaic personalize stories for my child?
        </h2>
        <p>
          You enter your child's name and choose their hobbies (dinosaurs, space,
          art, sports, etc.). Mosaic then weaves those details into every story
          so your child is the hero of each adventure.
        </p>
      </section>

      <section className="section wrap" aria-labelledby="price-h2">
        <h2 id="price-h2" className="h2">Is Mosaic free to use?</h2>
        <p>
          Yes — your first 5 stories are free. After that, Mosaic Premium is{" "}
          <strong>$4.99/month</strong> and includes 30 stories per month.
        </p>
      </section>

      <section className="section wrap" aria-labelledby="devices-h2">
        <h2 id="devices-h2" className="h2">Which devices can run Mosaic?</h2>
        <p>
          Mosaic runs on iPhone and iPad (iOS 16+) and on Android phones and
          tablets. Download from the{" "}
          <a href={IOS_URL} target="_blank" rel="noopener noreferrer">
            App Store
          </a>{" "}
          or{" "}
          <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">
            Google Play
          </a>
          .
        </p>
      </section>

      <section className="section wrap" aria-labelledby="audio-h2">
        <h2 id="audio-h2" className="h2">Can I listen to stories instead of reading them?</h2>
        <p>
          Yes — every story includes AI narration with a choice of voices, so
          kids can listen at bedtime while the illustrations play on screen.
        </p>
      </section>

      <section className="section wrap cta" aria-labelledby="cta-h2">
        <h2 id="cta-h2" className="visually-hidden">
          Get started
        </h2>
        <Link href="/#get" className="btn-primary">
          Get Mosaic free
        </Link>
        <p className="cta__note">
          Or explore our{" "}
          <Link href="/books">color-and-write paperbacks</Link>
          .
        </p>
      </section>
    </GeoPageLayout>
  );
}