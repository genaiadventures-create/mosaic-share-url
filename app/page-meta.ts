// Title and description for every indexable marketing page. The page metadata, the Atom feed and the tests all read
// from here, so a title edited in one place cannot drift in another. Titles stay under 60 characters and
// descriptions between 70 and 160, which is where search results stop truncating them.
export type PageMeta = { title: string; description: string };

export const PAGE_META = {
  "/": {
    title: "Mosaic: Personalized Bedtime Stories Starring Your Child",
    description:
      "A bedtime story app that writes, illustrates and reads aloud a new story with your child as the hero. First 5 stories free, then $4.99 a month.",
  },
  "/books": {
    title: "Mosaic Books | Color-and-Write Paperbacks for Kids",
    description:
      "Space Pals and Arjuna's Archery School: 50-page color-and-write paperbacks for ages 5 to 8, 22 scenes each, $9.99 on Amazon.",
  },
  "/best-personalized-bedtime-story-app": {
    title: "Best Personalized Bedtime Story App for Kids | Mosaic",
    description:
      "Mosaic writes, illustrates and narrates a new bedtime story starring your child. Free to try, then $4.99/month for 30 stories. iOS and Android.",
  },
  "/best-bedtime-story-apps": {
    title: "Best Bedtime Story Apps for Kids in 2026 | Mosaic",
    description:
      "Compare Moshi, Oscar Stories, Calm Kids, Epic, Wonderbly and Mosaic on personalization, narration, ages, price and platforms. Facts checked November 2026.",
  },
  "/ai-bedtime-story-generator": {
    title: "AI Bedtime Story Generator: Is It Safe for Kids? | Mosaic",
    description:
      "What an AI bedtime story generator is, how it works, what to check before your child uses one, and how Mosaic handles privacy, ads and review.",
  },
  "/mahabharata-story-for-kids-book": {
    title: "Best Mahabharata Story Book for Kids | Mosaic",
    description:
      "Arjuna's Archery School is a gentle Mahabharata story for ages 5 to 8: no battles, 22 scenes, a 50-page color-and-write paperback, $9.99 on Amazon.",
  },
  "/color-and-write-books-ages-5-8": {
    title: "Best Color-and-Write Books for Ages 5–8 | Mosaic",
    description:
      "Space Pals and Arjuna's Archery School: two 50-page color-and-write paperbacks for ages 5 to 8, 22 scenes each, $9.99 on Amazon.",
  },
} as const satisfies Record<string, PageMeta>;

export type MarketingPath = keyof typeof PAGE_META;

// Newest guides first, then the home page and books. This is the order entries appear in the Atom feed.
export const FEED_ORDER: MarketingPath[] = [
  "/best-bedtime-story-apps",
  "/ai-bedtime-story-generator",
  "/best-personalized-bedtime-story-app",
  "/mahabharata-story-for-kids-book",
  "/color-and-write-books-ages-5-8",
  "/books",
  "/",
];
