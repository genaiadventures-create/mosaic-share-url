// Copy shared by the visible page and its JSON-LD, so the two never drift apart.
// Every claim here is checked against skills/DESIGN_BRIEF.md section 10.
import { ANDROID_URL } from "../referral.ts";

export const SITE_URL = "https://mosaicai.in";
export const IOS_URL = "https://apps.apple.com/us/app/mosaic-create-bedtime-stories/id6751470484";
export { ANDROID_URL };

export const H1 = "Bedtime stories where your child is the hero.";

export const PRICE_LINE =
  "Free to try: your first 5 stories are on us. Then Mosaic Premium is $4.99 a month and adds 30 stories each month.";

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  asin: string;
  isbn?: string;
  price: string;
  cover: string;
  alt: string;
  blurb: string;
};

// Both paperbacks are live on Amazon (KDP Bookshelf, published 2026-10-23). Prices are the list prices set in KDP.
export const BOOKS: Book[] = [
  {
    slug: "space-pals",
    title: "Space Pals: My Galactic Adventure",
    subtitle: "A color-and-write story book",
    asin: "B0HNZG1QYB",
    isbn: "9798164090173",
    price: "9.99",
    cover: "/books/space-pals-cover.jpg",
    alt: "Space Pals paperback cover: a cat astronaut, a bunny and a small robot float beside a red rocket above the moon.",
    blurb:
      "Blast off in your own rocket, float with a cat astronaut and help the Space Pals rescue a little robot before a campfire night on the moon.",
  },
  {
    slug: "arjuna",
    title: "Arjuna's Archery School",
    subtitle: "A Mahabharata story for kids",
    asin: "B0HNZGGLMF",
    isbn: "9798164096427",
    price: "9.99",
    cover: "/books/arjuna-cover.jpg",
    alt: "Arjuna's Archery School paperback cover: a young archer draws his bow beside a peacock, a wooden bird hanging in the tree above.",
    blurb:
      "Join young Arjuna at a forest school of round huts and peacocks, and find out why he sees only the bird's eye. Gentle lessons about focus and practice; no battles.",
  },
];

export const BOOKS_LINE =
  "Each left page tells one scene with blanks your child fills in. The facing page is the picture, ready to colour to match. 22 scenes, 22 pictures, written to you, so the reader is the hero.";

export function amazonUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}`;
}

export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is Mosaic?",
    a: "Mosaic is an iPhone and Android app that writes a new bedtime story with your child as the hero. It illustrates every scene and reads the story aloud.",
  },
  {
    q: "Can I make a bedtime story with my child's name in it?",
    a: "Yes. You give Mosaic your child's name, age group and what the story should be about, and the story is written around them.",
  },
  {
    q: "What ages is Mosaic for?",
    a: "Ages 3 to 10 work best. In the app you pick an age group, from 0-3 up to 12+, and the story is written for that age.",
  },
  {
    q: "How much does Mosaic cost?",
    a: "Your first 5 stories are free. After that, Mosaic Premium is $4.99 a month for 30 stories, and you can cancel any time in the App Store or Google Play. There is no annual plan and no free trial to remember to cancel.",
  },
  {
    q: "Does Mosaic read the story out loud?",
    a: "Yes. You choose a female or male voice, and the words light up as they are read, so early readers can follow along.",
  },
  {
    q: "Is Mosaic safe for kids? Does it use AI?",
    a: "Mosaic uses AI to write, illustrate and narrate each story. Stories are written to be age-appropriate, with a calm ending, and the app shows no ads. It is made for parents to use with their kids, so a grown-up sets it up and can read every story first.",
  },
  {
    q: "Is there a Mosaic book I can hold?",
    a: "Yes. Two colour-and-write paperbacks, Space Pals: My Galactic Adventure and Arjuna's Archery School, are on Amazon at $9.99 each. Your child fills in the blanks on each story page and colours the picture opposite.",
  },
  {
    q: "How is this different from a personalised print book?",
    a: "A print book is one fixed story. Mosaic writes a new illustrated, narrated story whenever you want one, about whatever your child is into that week.",
  },
];

export function jsonLd() {
  const org = `${SITE_URL}/#org`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: "Mosaic",
        url: SITE_URL,
        logo: `${SITE_URL}/app-icon.png`,
        email: "support@mosaicai.in",
        sameAs: [IOS_URL, ANDROID_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        url: SITE_URL,
        name: "Mosaic",
        publisher: { "@id": org },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "Mosaic: Create Bedtime Stories",
        operatingSystem: "iOS, Android",
        applicationCategory: "EntertainmentApplication",
        url: SITE_URL,
        installUrl: IOS_URL,
        downloadUrl: [IOS_URL, ANDROID_URL],
        image: `${SITE_URL}/app-icon.png`,
        publisher: { "@id": org },
        offers: [
          {
            "@type": "Offer",
            name: "Free: first 5 stories",
            description: "New accounts get their first 5 stories free. One time, does not renew.",
            price: "0",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Mosaic Premium",
            description: "30 stories each month. Cancel any time in the App Store or Google Play.",
            price: "4.99",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "4.99",
              priceCurrency: "USD",
              billingDuration: "P1M",
              referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
            },
          },
        ],
      },
      ...BOOKS.map((b) => ({
        "@type": "Book",
        "@id": `${SITE_URL}/#book-${b.slug}`,
        name: `${b.title}: ${b.subtitle}`,
        author: { "@type": "Organization", name: "GenAI Adventures" },
        publisher: { "@id": org },
        bookFormat: "https://schema.org/Paperback",
        image: `${SITE_URL}${b.cover}`,
        ...(b.isbn ? { isbn: b.isbn } : {}),
        url: amazonUrl(b.asin),
        offers: {
          "@type": "Offer",
          price: b.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: amazonUrl(b.asin),
          seller: { "@type": "Organization", name: "Amazon" },
        },
      })),
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}
