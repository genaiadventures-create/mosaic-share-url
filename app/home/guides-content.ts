// Content for the two guide pages: the bedtime story app roundup and the AI story generator guide.
// The pages render these strings and emit them as FAQPage / ItemList JSON-LD, and app/llms.ts reuses them.
// Competitor facts were read from each company's own site or store listing in November 2026; where a fact was not
// stated there, the cell says "Not listed". Mosaic facts trace to skills/DESIGN_BRIEF.md section 10, content.ts,
// the privacy policy and the backend story prompt.
import { PRICE_LINE } from "./content.ts";
import type { QA } from "../marketing-seo.ts";
import type { Source } from "./geo-content.ts";

export type QAWithId = QA & { id: string };

export const ROUNDUP_PATH = "/best-bedtime-story-apps";
export const GENERATOR_PATH = "/ai-bedtime-story-generator";

export type RoundupApp = {
  id: string;
  name: string;
  // Official page for the product, used as the link and as the ItemList url.
  url: string;
  what: string;
  personalization: string;
  narration: string;
  ages: string;
  price: string;
  platforms: string;
  bestFor: string;
  fit: string;
};

// Listed by type, not by merit: story generators first, then audio, then books, then print.
export const ROUNDUP_APPS: RoundupApp[] = [
  {
    id: "mosaic",
    name: "Mosaic",
    url: "https://mosaicai.in/",
    what: "App that writes a new illustrated story about your child",
    personalization: "Your child's profile (name, age group, hobbies) and your own story idea",
    narration: "Yes, in a female or male voice",
    ages: "3 to 10 works best; age groups run from 0-3 to 12+",
    price: "First 5 stories free, then Premium $4.99 a month for 30 stories",
    platforms: "iPhone and iPad (iOS 15.1 or later), Android",
    bestFor:
      "A new story tonight about whatever your child asks for, starring them, with pictures and a narrator. The entry price is low and there is no trial that turns into a charge.",
    fit: "The text is written by AI, so read it first. The App Store listing shows English only, there is no web version, and it needs a connection to make a story.",
  },
  {
    id: "oscar",
    name: "Oscar Stories",
    url: "https://oscarstories.com/",
    what: "App that generates illustrated, narrated stories starring your child, plus story videos",
    personalization: "Child as the hero; add family and friends and choose setting, characters and morals",
    narration: "Yes, audiobook mode with voice and speed options",
    ages: "2 to 12",
    price: "Free to start; Premium $4.99 a month or $39.99 a year on the US App Store; web lists $49 a year with a 7-day trial",
    platforms: "iPhone and iPad (iOS 16 or later), Android, web app",
    bestFor:
      "The same idea as Mosaic with more reach: Oscar lists a web app, 11 languages, and a way to print a story. It is the better fit if you want a browser version or a language other than English.",
    fit: "Like Mosaic, the stories are AI-generated, so read first. Its prices differ between the App Store and the web.",
  },
  {
    id: "moshi",
    name: "Moshi Kids",
    url: "https://www.moshikids.com/",
    what: "Library of original audio stories, sleep sounds, music and meditations",
    personalization: "None listed; daily picks by age and interests",
    narration: "Yes, audio only; it can keep playing with the screen off",
    ages: "0 to 10",
    price: "Some free content; subscription from $9.99 a month on the US App Store (varies by location); 7-day free trial",
    platforms: "iPhone, iPad, Android",
    bestFor:
      "A sleep routine built on the same calm recorded stories every night. If your child wants familiar favorites on repeat and you want no screen, Moshi fits better than Mosaic.",
    fit: "Nothing in it is about your child, and the catalog is a fixed size, listed at 400+ pieces. The monthly price is higher than Mosaic's or Oscar's monthly plans.",
  },
  {
    id: "calm",
    name: "Calm Kids",
    url: "https://www.calm.com/kids",
    what: "Sleep stories, meditations and lullabies for kids, inside the Calm app",
    personalization: "None listed",
    narration: "Yes, narrated by actors and storytellers, some with well-known characters",
    ages: "Not listed",
    price: "Calm Premium: $79.99 a year after a 7-day free trial (US web); app store prices can differ",
    platforms: "iPhone, iPad, Android, web",
    bestFor:
      "Families who already use Calm for themselves, and children who like characters they know. New kids' sleep stories are added two to three times a month.",
    fit: "The kids' section sits inside Calm, which also holds adult meditation and sleep content, and its age range is not stated. You pay for all of Calm, not just the kids' part.",
  },
  {
    id: "epic",
    name: "Epic",
    url: "https://www.getepic.com/",
    what: "Library of 40,000+ children's books, audiobooks and videos",
    personalization: "None; up to 4 child profiles and a parent dashboard",
    narration: "Read-To-Me books and audiobooks",
    ages: "12 and under",
    price: "$13.99 a month or $84.99 a year; 7-day free trial",
    platforms: "iPhone, iPad, Android",
    bestFor:
      "A child who is learning to read, or who wants real published books. Epic is the best fit here for a big, varied library and reading together.",
    fit: "It is a reading library first, so the bedtime part is your choice of book. Its $13.99 monthly price is above the monthly prices listed for Mosaic, Oscar Stories and Moshi.",
  },
  {
    id: "wonderbly",
    name: "Wonderbly",
    url: "https://www.wonderbly.com/",
    what: "Online publisher of personalized printed books; written and illustrated by people, not AI",
    personalization: "Name and other details added to the book, plus a message on the first page",
    narration: "Not listed (printed book)",
    ages: "Newborn to 12, plus teens and adults",
    price: "From $39.99 a book (US site, checked during a Black Friday sale)",
    platforms: "Website; the book is printed and delivered",
    bestFor:
      "A gift or keepsake. A printed book your child can hold, written by authors and illustrators, is something an app cannot be.",
    fit: "Each book is one fixed story, with no audio listed and no new story each night. It costs more per story than an app.",
  },
];

// Visible Q&A for the roundup. Each answer is the exact text shown under its H2 and the exact text in the FAQPage JSON-LD.
export const ROUNDUP_FAQ = {
  best: {
    id: "best-h2",
    q: "Which bedtime story app is best for kids?",
    a: "It depends on what you want each night. Moshi fits a calm audio library with no screen. Epic fits a child who is learning to read. Mosaic and Oscar Stories fit a child who wants a new story starring them. Wonderbly fits a printed gift. Calm Kids fits families already using Calm.",
  },
  audio: {
    id: "audio-h2",
    q: "Which bedtime story apps have audio narration?",
    a: "Mosaic, Oscar Stories, Moshi and Calm Kids all narrate their stories. Epic has Read-To-Me books and audiobooks inside a much larger book library. Wonderbly makes printed books and does not list audio.",
  },
  name: {
    id: "name-h2",
    q: "Which apps make a story with my child's name in it?",
    a: "Mosaic and Oscar Stories write a new story around your child, with narration and pictures. Wonderbly prints a book with your child's name and details added to a story its authors wrote. Moshi, Calm Kids and Epic list no name-based personalization.",
  },
  moshi: {
    id: "moshi-h2",
    q: "What is a good alternative to Moshi for bedtime stories?",
    a: "It depends on what you like about Moshi. For another library of calming recorded stories, look at Calm Kids. For a story about your own child, look at Mosaic or Oscar Stories. For books to read together, look at Epic. We have not tested how any of these apps affects sleep.",
  },
  pictures: {
    id: "pictures-h2",
    q: "Which bedtime story app creates custom stories with pictures?",
    a: "Mosaic and Oscar Stories both add illustrations to the stories they generate, and Oscar also lists story videos. Wonderbly's printed books are illustrated by its artists rather than generated.",
  },
  free: {
    id: "free-h2",
    q: "Which bedtime story apps are free to try?",
    a: "Mosaic gives your first 5 stories free. Oscar Stories is free to download with an optional subscription. Moshi has some free content and a 7-day trial. Calm and Epic list 7-day free trials. Wonderbly sells books from $39.99.",
  },
  safe: {
    id: "safe-h2",
    q: "Are AI-generated bedtime stories safe for kids?",
    a: "Not automatically. Check who runs the account, what the app stores about your child, whether it shows ads and who else can see the story, and read each story first. Our guide to AI bedtime story generators covers the full checklist.",
  },
} satisfies Record<string, QAWithId>;

export const ROUNDUP_FAQ_ITEMS: QA[] = Object.values(ROUNDUP_FAQ).map(({ q, a }) => ({ q, a }));

export const ROUNDUP_LEAD =
  "Moshi is the pick for a calm audio library, Epic for a book catalog, and Wonderbly for a printed keepsake. Mosaic and Oscar Stories write a new story about your child. Calm Kids suits families already on Calm. We make Mosaic, so weigh our entry with that in mind.";

// Every external link supports the facts named beside it. All were opened in November 2026.
export const ROUNDUP_SOURCES: Source[] = [
  {
    href: "https://apps.apple.com/us/app/mosaic-create-bedtime-stories/id6751470484",
    label: "Mosaic on the App Store",
    supports: "Mosaic's platforms, iOS 15.1 requirement and English-only listing",
  },
  {
    href: "https://apps.apple.com/us/app/oscar-stories-for-children/id1663618939",
    label: "Oscar Stories on the App Store",
    supports: "iOS 16 requirement, Premium $4.99 a month and $39.99 a year, voices and playback speed, story videos",
  },
  {
    href: "https://app.oscarstories.com/pricing",
    label: "Oscar Stories pricing page",
    supports: "$49 a year with a 7-day trial on the web, 11 languages, web app plus iOS and Android",
  },
  {
    href: "https://oscarstories.com/presskit/oscar-stories/",
    label: "Oscar Stories press kit",
    supports: "ages 2 to 12, choice of setting, characters and morals, family and friends in the story",
  },
  {
    href: "https://app.moshikids.com/subscribe",
    label: "Moshi subscription page",
    supports: "400+ pieces of content, ages 0 to 10 and the free trial",
  },
  {
    href: "https://www.moshikids.com/faqs/",
    label: "Moshi FAQs",
    supports: "7-day free trial, audio-only playback, availability on the App Store and Google Play",
  },
  {
    href: "https://apps.apple.com/us/app/moshi-kids-sleep-relax-play/id1306719339",
    label: "Moshi Kids on the App Store",
    supports: "free download, subscription prices from $9.99 a month, daily picks by age and interests",
  },
  {
    href: "https://support.calm.com/hc/en-us/articles/360008169513-What-is-Calm-Kids-Meditations-Sleep-Stories-for-Children",
    label: "Calm Help Center, What is Calm Kids?",
    supports: "kids' sleep stories, meditations and lullabies, narrators and characters, new stories two to three times a month",
  },
  {
    href: "https://www.calm.com/freetrial/plans",
    label: "Calm plans page",
    supports: "$79.99 billed annually after a 7-day free trial",
  },
  {
    href: "https://support.calm.com/hc/en-us/articles/360008240934-How-to-Check-Calm-Premium-Subscription-Pricing",
    label: "Calm Help Center, subscription pricing",
    supports: "price varies by country, app store prices can differ from the website, 7-day trial",
  },
  {
    href: "https://kids.getepic.com/plans",
    label: "Epic plans page",
    supports: "$13.99 a month, $84.99 a year, 7-day free trial, 40,000+ books, kids 12 and under",
  },
  {
    href: "https://apps.apple.com/us/app/epic-kids-books-reading/id719219382",
    label: "Epic on the App Store",
    supports: "Read-To-Me books and audiobooks, up to 4 child profiles, parent dashboard",
  },
  {
    href: "https://www.wonderbly.com/",
    label: "Wonderbly home page",
    supports: "personalized printed books from $39.99, written and illustrated by people and never AI, shopping by age",
  },
];

export const ROUNDUP_METHOD = [
  "We started with the apps that search results and AI assistants name for bedtime stories for kids, and kept the ones with an official page we could open.",
  "Every row comes from the company's own site or store listing, opened in November 2026. If a page did not state a fact, the cell says Not listed rather than a guess.",
  "We compare the same six things for each app: what it is, personalization, narration, ages, price and platforms.",
  "We did not use star ratings, review counts or parent reviews, and we did not test how any app affects sleep.",
  "The apps are grouped by type, not ranked. Prices and trials change, so check the store before you subscribe.",
];

// Mosaic's own sources for the generator guide.
export const GENERATOR_FAQ = {
  what: {
    id: "hero-h1",
    q: "What is an AI bedtime story generator, and is it safe for kids?",
    a: "An AI bedtime story generator is an app that writes a new story from details you give it, such as your child's name and a topic. It can be safe for kids when a parent runs it, reads the story first and knows what the app stores. No generator is safe by default, so check the points below.",
  },
  how: {
    id: "how-h2",
    q: "How does an AI bedtime story generator work?",
    a: "You type in details such as a name, an age group and an idea. The app turns them into written instructions for a language model, which is software trained on large amounts of text to predict likely next words. Other models can draw pictures and read the text aloud. The software does not understand your child, so it can get things wrong.",
  },
  safe: {
    id: "safe-h2",
    q: "Are AI-generated bedtime stories safe for kids?",
    a: "The text is generated, not written by a person, so it can include things you did not ask for. Instructions to the AI can ask for age-appropriate language and a calm ending, but they are not a guarantee. Common Sense Media says there is no foolproof way to stop generative AI producing harmful content. Read each story first, especially for children under 6.",
  },
  check: {
    id: "check-h2",
    q: "What should I check before using an AI story generator with my child?",
    a: "Check six things: who the account is for, what you have to enter about your child, where it is sent and stored, whether there are ads, who else can see the story, and whether you can read and delete it. Then read every story before your child hears it.",
  },
  mosaic: {
    id: "mosaic-h2",
    q: "How does Mosaic handle privacy, ads and who sees the story?",
    a: "Mosaic accounts are for adults 18 and over, and you enter your child's details yourself. The app shows no ads, and Mosaic does not sell your child's information or use it for advertising. Stories are private to your account by default. Mosaic sends what you enter to AI services that write, draw and narrate the story. The privacy policy lists them.",
  },
  review: {
    id: "review-h2",
    q: "Does anyone check a Mosaic story before my child hears it?",
    a: "You can, and we recommend it. Mosaic's instructions to the AI ask for age-appropriate language, an uplifting ending and no religious, political or sensitive topics, but they also allow some danger or conflict. There is no separate human review of each story, so the parent is the check.",
  },
  steps: {
    id: "steps-h2",
    q: "How do I make a bedtime story with my child's name in Mosaic?",
    a: "Open Mosaic, enter your child's name, pick an age group and hobbies, then type a story idea that mentions your child by name, such as Mia and a shy dragon. Choose a style and a voice and generate it. You can use a nickname. Read the story first, then play the narration. Your first 5 stories are free.",
  },
  chatbot: {
    id: "chatbot-h2",
    q: "Is a chatbot like ChatGPT a good way to make bedtime stories?",
    a: "A parent can use one, but your child should not use it directly. Common Sense Media notes that most generative AI tools require users to be 13 or older and lack specific parental controls. If you use one, you write the prompt, you read the result and you decide what to share.",
  },
} satisfies Record<string, QAWithId>;

export const GENERATOR_FAQ_ITEMS: QA[] = Object.values(GENERATOR_FAQ).map(({ q, a }) => ({ q, a }));

export const GENERATOR_CHECKLIST: { lead: string; detail: string }[] = [
  {
    lead: "Who the account is for.",
    detail:
      "Children's apps should be set up by a parent. Common Sense Media notes that most general AI tools require users to be 13 or older and lack specific parental controls.",
  },
  {
    lead: "What you have to type about your child.",
    detail: "A first name or nickname is enough for a story. You do not need a surname, school, address or photo.",
  },
  {
    lead: "Where it goes.",
    detail:
      "The app sends your details to AI companies. A good privacy policy names them, says whether they may train on your data and says how long it keeps yours.",
  },
  {
    lead: "Ads.",
    detail: "Ads in a kids' app are a reason to look elsewhere. So is a policy that lets the company share your child's details with advertisers.",
  },
  {
    lead: "Who else can see the story.",
    detail: "Stories should be private to you unless you choose to share one. Look for any public feed or library and what goes into it.",
  },
  {
    lead: "Reading and deleting.",
    detail:
      "You should be able to read the story before your child hears it, and delete a story or the whole account. In the US, the FTC says parents have the right to review and delete information collected about children under 13.",
  },
];

export const GENERATOR_MOSAIC_FACTS: { lead: string; detail: string }[] = [
  {
    lead: "Adults only accounts.",
    detail:
      "Accounts are for adults 18 and over, and the app asks you to confirm your age. Children do not create accounts, and Mosaic does not collect information directly from them.",
  },
  {
    lead: "What it asks for.",
    detail:
      "Your child's name or nickname, an optional gender, an age group, hobbies and a short description of the main character. Use a nickname if you prefer.",
  },
  {
    lead: "Where it goes.",
    detail:
      "Story details go to OpenAI and Groq to write the story and pictures, and the text goes to OpenAI or ElevenLabs for narration. Google Gemini is used for text if configured. Mosaic stores stories, pictures and audio with Cloudinary and MongoDB Atlas. The policy says these providers may not use the data for advertising, that Mosaic uses no-training API settings where a provider offers them, and that Mosaic does not use children's data to train its own models.",
  },
  {
    lead: "Ads and selling.",
    detail:
      "No ads. Mosaic does not sell your information or your child's, and does not share it with advertisers or data brokers. Server logs record account and story IDs, not your child's name or interests.",
  },
  {
    lead: "Who sees a story.",
    detail:
      "Only your account, by default. Stories made by users are not published to anyone else. The Explore library holds only stories the Mosaic team chose to publish. A story leaves your account only if you choose to share it.",
  },
  {
    lead: "Reading and deleting.",
    detail:
      "You can read every story before your child hears it. You can delete one story, which also deletes its pictures and audio, or your whole account in the app. Accounts with no activity for 24 months are deleted automatically unless they have an active subscription.",
  },
  {
    lead: "What the AI is told.",
    detail:
      "The instructions ask for age-appropriate vocabulary, an uplifting resolution and no religious, political or sensitive topics. If the idea you type in looks inappropriate for children, they tell the AI to write about a different, appropriate character and situation. They also say not to be overprotective, so a story can have some danger or conflict. Choose the Bed Time style for a calmer one.",
  },
];

export const GENERATOR_STEPS: { lead: string; detail: string }[] = [
  {
    lead: "Install Mosaic and sign in.",
    detail: "It runs on iPhone and iPad (iOS 15.1 or later) and on Android. Sign in with Google or Apple and confirm you are an adult.",
  },
  {
    lead: "Start a new story and enter your child's name.",
    detail: "The app asks for a profile name. A nickname works.",
  },
  {
    lead: "Pick a gender, or skip it.",
    detail: "The choices are Girl or Boy, and the step is marked optional.",
  },
  {
    lead: "Choose an age group.",
    detail:
      "0-3, 4-6, 7-9, 10-12 or 12+. It sets the reading level and how long the story is: the 0-3 group gets one chapter and the 4-6 group gets two.",
  },
  {
    lead: "Pick hobbies.",
    detail: "Choose from the list on screen. They are worked into the story.",
  },
  {
    lead: "Type the story idea.",
    detail: "Say what the story should be about in your own words, and mention your child by name, for example \"Mia and a shy dragon who is afraid of the dark\". The story is written around the idea you type. The app's own example is \"An elephant with big ears\".",
  },
  {
    lead: "Choose a style and a voice.",
    detail:
      "Styles include Fantasy, Adventures, Funny, Friendship, Educational, Fairy Tales, Bed Time and Inspirational. Pick Bed Time for a calmer story, then a female or male voice.",
  },
  {
    lead: "Generate, read it first, then press play.",
    detail:
      "Each story uses one of your free generations, then Premium adds 30 a month. Read it yourself before your child hears it. Narration can keep playing with the phone locked.",
  },
];

export const GENERATOR_SOURCES: Source[] = [
  {
    href: "https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online",
    label: "FTC Consumer Advice, Protecting Your Child's Privacy Online (May 2026)",
    supports:
      "the COPPA Rule covers apps directed to children under 13, requires notice and parental approval before collecting a child's personal information, and lets parents review and delete it",
  },
  {
    href: "https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-generative-ai",
    label: "Common Sense Media, Parents' Ultimate Guide to Generative AI (updated Sept 2026)",
    supports:
      "most generative AI tools require users to be 13 or older and lack specific parental controls; tools can still produce inappropriate content; avoid entering personal information such as names",
  },
  {
    href: "https://institute.commonsensemedia.org/sites/default/files/ra-import/csm-ai-risk-assessment-generative-ai-chatbots-12132024.pdf",
    label: "Common Sense Media, AI Risk Assessment: Generative AI Chatbots (Oct 2024)",
    supports: "there is no foolproof way to prevent harmful content; these tools predict words and can get things wrong; they work best for fiction, not facts",
  },
  {
    href: "https://www.healthychildren.org/English/family-life/Media/Pages/how-to-make-a-family-media-use-plan.aspx",
    label: "HealthyChildren.org (AAP), How to make a family media plan",
    supports: "suggests screen-free zones, including before bed",
  },
  {
    href: "https://apps.apple.com/us/app/mosaic-create-bedtime-stories/id6751470484",
    label: "Mosaic on the App Store",
    supports: "iOS 15.1 requirement and English-only listing",
  },
];

export const GENERATOR_PRICE_NOTE = PRICE_LINE;
