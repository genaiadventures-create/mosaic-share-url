// Visible Q&A and cited sources for the three GEO pages. The pages render these and emit them as FAQPage JSON-LD,
// and app/llms.ts reuses them, so the page, its markup and llms.txt cannot drift apart.
// Product claims trace to skills/DESIGN_BRIEF.md section 10, content.ts, the KDP book sources and the backend prompt.
import { BOOKS, PRICE_LINE } from "./content.ts";
import type { QA } from "../marketing-seo.ts";

export type Source = { href: string; label: string; supports: string };
export type QAWithId = QA & { id: string };

const [SPACE_PALS, ARJUNA] = BOOKS;
const ARJUNA_ASIN = ARJUNA.asin;
const ARJUNA_ISBN = ARJUNA.isbn;

// Each answer is the exact text shown under its H2 and the exact text in the FAQPage JSON-LD.
export const BEDTIME_FAQ = {
  best: {
    id: "best-h2",
    q: "Which kind of bedtime story app is best for my child?",
    a: "It depends on what you want each night. A personalized generator such as Mosaic fits a child who asks for new stories about a favorite topic. A pre-written audio library fits families who want the same recorded stories on repeat. A read-along book app fits children who are learning to read.",
  },
  how: {
    id: "how-h2",
    q: "How does Mosaic personalize a story for my child?",
    a: "You give Mosaic your child's name, an age group and an idea for the story, then pick a style and a voice. Mosaic writes a new story around that child, adds a storybook-style illustration and narrates it aloud.",
  },
  length: {
    id: "length-h2",
    q: "How long should a bedtime story be for a 4-year-old?",
    a: "There is no official length. For the 4 to 6 age group Mosaic writes two chapters and asks for more than 300 words in each, so a story usually runs past 600 words: about five minutes read aloud at an unhurried pace, by our estimate. Pick a length your child can finish while still calm, and keep the routine the same each night.",
  },
  safe: {
    id: "safe-h2",
    q: "Are AI-generated stories safe for kids?",
    a: "Mosaic asks the AI for age-appropriate language and an uplifting ending, but that is an instruction, not a guarantee. A grown-up sets up the app and can read every story before the child hears it. The app shows no ads.",
  },
  cost: {
    id: "cost-h2",
    q: "What does Mosaic cost compared with other story apps?",
    a: PRICE_LINE,
  },
  devices: {
    id: "devices-h2",
    q: "Which devices can run Mosaic?",
    a: "Mosaic runs on iPhone and iPad (iOS 15.1 or later) and on Android phones and tablets. Get it from the App Store or Google Play.",
  },
  listen: {
    id: "listen-h2",
    q: "Can my child listen to stories instead of reading them?",
    a: "Yes. Every story has narration in a female or male voice that you choose when you make the story. The app can keep playing audio in the background, so you can lock the phone and just listen.",
  },
} satisfies Record<string, QAWithId>;

export const BEDTIME_FAQ_ITEMS: QA[] = Object.values(BEDTIME_FAQ).map(({ q, a }) => ({ q, a }));

export const BEDTIME_SOURCES: Source[] = [
  {
    href: "https://doi.org/10.1542/peds.2024-069090",
    label: "American Academy of Pediatrics, Literacy Promotion policy statement (Pediatrics, Dec 2024)",
    supports: "the AAP recommends shared reading from birth through at least kindergarten",
  },
  {
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4402657/",
    label: "Mindell et al., Bedtime routines for young children (Sleep, 2015)",
    supports: "a consistent bedtime routine and sleep outcomes in 10,085 children aged 0 to 5",
  },
  {
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9923605/",
    label: "Hutton et al., Home reading environment and brain activation in preschool children (Pediatrics, 2015)",
    supports: "fMRI study of 19 children aged 3 to 5 listening to stories",
  },
  {
    href: "https://www.healthychildren.org/English/family-life/Media/Pages/how-to-make-a-family-media-use-plan.aspx",
    label: "HealthyChildren.org (AAP), How to make a family media plan",
    supports: "suggests screen-free zones, including before bed",
  },
  {
    href: "https://apps.apple.com/us/app/mosaic-create-bedtime-stories/id6751470484",
    label: "Mosaic on the App Store",
    supports: "iOS 15.1 requirement, English language, background audio release note, Extra Credits price (checked Nov 2026)",
  },
  {
    href: "https://app.moshikids.com/subscribe",
    label: "Moshi subscription page",
    supports: "Moshi's audio library size, age range and free trial (checked Nov 2026)",
  },
  {
    href: "https://kids.getepic.com/plans",
    label: "Epic plans page",
    supports: "Epic's book count, age range and monthly price (checked Nov 2026)",
  },
];

// Each answer is the exact text shown under its H2 (or the lead) and the exact text in the FAQPage JSON-LD.
export const MAHABHARATA_FAQ = {
  best: {
    id: "hero-h1",
    q: "What is the best Mahabharata story book for kids?",
    a: `Arjuna's Archery School: A Mahabharata Story for Kids is a gentle introduction for ages 5 to 8, with no battles. A young archer learns focus and practice at a forest school. It is a 50-page color-and-write paperback, $9.99 on Amazon (ASIN ${ARJUNA_ASIN}, ISBN ${ARJUNA_ISBN}).`,
  },
  age: {
    id: "age-h2",
    q: "What age is the Mahabharata appropriate for?",
    a: "The full epic is not a children's book. Britannica calls it the longest poem in history, at almost 100,000 couplets, and its main plot builds to battles at Kurukshetra. A children's version has to pick one episode. Arjuna's Archery School picks Arjuna's school days, is written for ages 5 to 8, and stops long before the war.",
  },
  scary: {
    id: "scary-h2",
    q: "Is Arjuna's Archery School violent or scary?",
    a: "No. The book has no battles, no gods or prayers, and nothing aimed at people or animals. The only things Arjuna shoots at are a round target, a wooden bird, a clay pot and a wooden fish. The most dramatic moments are a ball dropping into a well and a lamp blowing out at dinner.",
  },
  inside: {
    id: "inside-h2",
    q: "What happens in Arjuna's Archery School?",
    a: "You arrive as the new student at Teacher Drona's forest school, make friends with Arjuna and Bhima, and follow 22 scenes from a ball lost in a well to the wooden-bird test, a fair and graduation day.",
  },
  epic: {
    id: "epic-h2",
    q: "How closely does the book follow the Mahabharata?",
    a: "It is an original retelling inspired by the epic's childhood school stories, not a translation. Two scenes can be checked against the text: the ball lost in a well and the wooden-bird test both appear in the Adi Parva. Other scenes are adapted or added for young children.",
  },
  format: {
    id: "format-h2",
    q: "What format is the book and how many pages?",
    a: "It is a 50-page paperback, 8.5 by 11 inches, with a black-and-white interior. Twenty-two left pages tell a scene with blanks to fill in, and each has a facing picture to color.",
  },
  use: {
    id: "use-h2",
    q: "How do parents use a color-and-write Mahabharata book?",
    a: "Read one scene aloud together, let your child fill in the two blanks, do the Your turn box, then color the facing picture to match the answers. One scene a night takes about three weeks. Use crayons or colored pencils, because the story text is printed on the back of each picture.",
  },
  buy: {
    id: "buy-h2",
    q: "Where can I buy Arjuna's Archery School?",
    a: `It is sold on Amazon (ASIN ${ARJUNA_ASIN}, ISBN ${ARJUNA_ISBN}) for a $9.99 list price.`,
  },
} satisfies Record<string, QAWithId>;

export const MAHABHARATA_FAQ_ITEMS: QA[] = Object.values(MAHABHARATA_FAQ).map(({ q, a }) => ({ q, a }));

export const MAHABHARATA_SOURCES: Source[] = [
  {
    href: "https://www.britannica.com/topic/Mahabharata",
    label: "Britannica, Mahabharata",
    supports: "almost 100,000 couplets in 18 sections, the longest poem in history, and a plot that culminates in battles at Kurukshetra",
  },
  {
    href: "https://www.ibiblio.org/sripedia/ebooks/mb/m01/m01134.htm",
    label: "Mahabharata, Adi Parva, Sambhava Parva section CXXXIII (Ganguli translation)",
    supports: "the princes lose a ball in a well and Drona retrieves it with a chain of blades of grass",
  },
  {
    href: "https://www.ibiblio.org/sripedia/ebooks/mb/m01/m01135.htm",
    label: "Mahabharata, Adi Parva, section CXXXIV (Ganguli translation)",
    supports: "Drona has an artificial bird placed on a tree as a target to test his pupils",
  },
  {
    href: "https://www.ibiblio.org/sripedia/ebooks/mb/m01/m01136.htm",
    label: "Mahabharata, Adi Parva, section CXXXV (Ganguli translation)",
    supports: "Arjuna says he sees only the bird, and then only its head",
  },
  {
    href: "https://doi.org/10.1542/peds.2024-069090",
    label: "American Academy of Pediatrics, Literacy Promotion policy statement (Pediatrics, Dec 2024)",
    supports: "shared reading from birth through at least kindergarten",
  },
  {
    href: "https://pubmed.ncbi.nlm.nih.gov/29595311/",
    label: "Flack et al., The effects of shared storybook reading on word learning: a meta-analysis (Developmental Psychology, 2018)",
    supports: "38 studies, 2,455 children, reading style affects word learning",
  },
  {
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3399936/",
    label: "Cameron et al., Fine motor skills and executive function both contribute to kindergarten achievement (Child Development, 2012)",
    supports: "213 children assessed at ages 3 and 4; design copying predicted kindergarten achievement",
  },
];

// Each answer is the exact text shown under its H2 (or the lead) and the exact text in the FAQPage JSON-LD.
export const COLOR_WRITE_FAQ = {
  best: {
    id: "hero-h1",
    q: "What are the best color-and-write books for ages 5–8?",
    a: "Mosaic publishes two: Space Pals: My Galactic Adventure and Arjuna's Archery School. Both are 50-page color-and-write paperbacks with 22 story scenes and 22 pictures, written for ages 5 to 8, at $9.99 each on Amazon.",
  },
  what: {
    id: "what-h2",
    q: "What is a color-and-write book?",
    a: "A color-and-write book is a story with blanks the child fills in, paired with a picture to color. In Mosaic's books the left page holds one scene with two blanks and a Your turn box, and the facing page is the picture to color to match the answers.",
  },
  ages: {
    id: "ages-h2",
    q: "What ages are color-and-write books for?",
    a: "Mosaic's two books are written for ages 5 to 8, which is the reading age on their Amazon listings. Younger children can join in if a grown-up reads the story and writes down their answers.",
  },
  pages: {
    id: "pages-h2",
    q: "How many pages and scenes are in each book?",
    a: "Each book is 50 pages: 22 story scenes of two pages each (text, then picture), plus a title page, a This adventure belongs to page, a How to Play page, a Draw Your Own Ending page, a The End page and a copyright page.",
  },
  titles: {
    id: "titles-h2",
    q: "What are the two titles available?",
    a: `${SPACE_PALS.title} (ASIN ${SPACE_PALS.asin}, ISBN ${SPACE_PALS.isbn}) and ${ARJUNA.title}: A Mahabharata Story for Kids (ASIN ${ARJUNA.asin}, ISBN ${ARJUNA.isbn}). Both are $${SPACE_PALS.price} on Amazon.`,
  },
  which: {
    id: "which-h2",
    q: "Which color-and-write book should I start with?",
    a: "Start with Space Pals if your child likes animals and space, or you want a sleepy ending: the last scenes are a moon campfire and a space hammock. Start with Arjuna's Archery School if you want an Indian forest-school setting, with practice and focus as the theme.",
  },
  use: {
    id: "use-h2",
    q: "How do I use a color-and-write book at home?",
    a: "Read the left page together, write your child's answers in the two blanks, do the Your turn box, then color the picture on the facing page to match. Use crayons or colored pencils, because the story text is printed on the back of each picture.",
  },
  research: {
    id: "research-h2",
    q: "Do color-and-write books help early writing?",
    a: "No study has tested these books, but they use skills that research links to school readiness: shared reading, talking about a story and fine motor control. Treat them as an activity for together time, not a treatment.",
  },
  buy: {
    id: "buy-h2",
    q: "Where can I buy these color-and-write books?",
    a: "Both are sold on Amazon at a $9.99 list price. The Mosaic Books page has direct links to each listing.",
  },
} satisfies Record<string, QAWithId>;

export const COLOR_WRITE_FAQ_ITEMS: QA[] = Object.values(COLOR_WRITE_FAQ).map(({ q, a }) => ({ q, a }));

export const COLOR_WRITE_SOURCES: Source[] = [
  {
    href: "https://doi.org/10.1542/peds.2024-069090",
    label: "American Academy of Pediatrics, Literacy Promotion policy statement (Pediatrics, Dec 2024)",
    supports: "shared reading from birth through at least kindergarten",
  },
  {
    href: "https://pubmed.ncbi.nlm.nih.gov/29595311/",
    label: "Flack et al., The effects of shared storybook reading on word learning: a meta-analysis (Developmental Psychology, 2018)",
    supports: "38 studies, 2,455 children; reading style affected word learning, and the child's age and who read the story did not",
  },
  {
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3399936/",
    label: "Cameron et al., Fine motor skills and executive function both contribute to kindergarten achievement (Child Development, 2012)",
    supports: "213 children assessed at ages 3 and 4; design copying predicted kindergarten achievement",
  },
];
