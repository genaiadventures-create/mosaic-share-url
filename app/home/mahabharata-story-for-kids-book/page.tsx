import { PAGE_DATES, entityNodes, faqPageNode, innerPageNodes, marketingMetadata } from "../../marketing-seo";
import { PAGE_META } from "../../page-meta";
import Link from "next/link";
import { amazonUrl } from "../content";
import { MAHABHARATA_FAQ as FAQ, MAHABHARATA_FAQ_ITEMS, MAHABHARATA_SOURCES } from "../geo-content";
import GeoPageLayout from "../../components/GeoPageLayout";
import { Block, QA, Sources } from "../../components/Geo";

const ARJUNA_ASIN = "B0HNZGGLMF";
const ARJUNA_AMAZON_URL = amazonUrl(ARJUNA_ASIN);

const PATH = "/mahabharata-story-for-kids-book";
const PAGE_NAME = "Mahabharata story book for kids";
const DATE_MODIFIED = PAGE_DATES[PATH];

export const metadata = marketingMetadata(PATH, PAGE_META[PATH].title, PAGE_META[PATH].description);

const { webPage, breadcrumb } = innerPageNodes(PATH, PAGE_NAME, {
  datePublished: "2026-10-24",
  dateModified: DATE_MODIFIED,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [...entityNodes(), webPage, breadcrumb, faqPageNode(PATH, MAHABHARATA_FAQ_ITEMS)],
};

export default function MahabharataStoryForKidsBookPage() {
  return (
    <GeoPageLayout jsonLd={jsonLd} dateModified={DATE_MODIFIED}>
      <section className="section wrap geo" aria-labelledby="hero-h1">
        <div className="geo__col">
          <h1 id="hero-h1" className="h1">
            {FAQ.best.q}
          </h1>
          <p className="lead">{FAQ.best.a}</p>
          <p>
            <a href={ARJUNA_AMAZON_URL} target="_blank" rel="noopener noreferrer">Buy it on Amazon</a>, or see{" "}
            <Link href="/books">all Mosaic books</Link>. It is one of two paperbacks; the other is a space story.
          </p>
        </div>
      </section>

      <QA {...FAQ.age}>
        <p>
          How you use it depends on the child. At 5 and 6, most children will want a grown-up to read each scene aloud and
          to write what they say in the blanks. At 7 and 8, many can read and write the answers themselves. Children older
          than 8 may find the short sentences young. That is our reading of the book, not a rating.
        </p>
        <p>
          If you want the longer epic for an older child, look for a retelling written for that age and read it first.
        </p>
      </QA>

      <QA {...FAQ.scary}>
        <p>
          Arjuna carries a bow in the pictures, because archery is the subject. The story is about practice and looking
          closely. It is not about winning a fight. The retelling leaves out gods, prayers, death and caste.
        </p>
      </QA>

      <QA {...FAQ.inside}>
        <ul>
          <li><strong>Scenes 1 to 4:</strong> a cart ride to the school, a peacock, the brothers and Teacher Drona.</li>
          <li><strong>Scenes 5 and 6:</strong> the ball falls into a well and Drona lifts it out with a grass chain.</li>
          <li><strong>Scenes 7 to 11:</strong> morning practice, Bhima&apos;s big lunch, a strong Bhima, dinner when the lamp goes out, and practice under the stars.</li>
          <li><strong>Scenes 12 to 15:</strong> the wooden bird, what do you see, &ldquo;just the eye&rdquo;, and keep practicing.</li>
          <li><strong>Scenes 16 to 18:</strong> fair day, a spinning wooden fish on a pole, and aiming by looking at the water.</li>
          <li><strong>Scenes 19 to 22:</strong> sharing sweets, a friend club by the lotus pond, graduation day and goodbye.</li>
        </ul>
        <p>
          The reader is the hero and is never named or drawn. Each scene has two blanks, such as the peacock&apos;s name or
          how many rotis Bhima eats, plus a Your turn box that asks the child to draw, circle or answer. Across the book
          there are 8 questions, 7 drawing prompts and 7 circle-one choices.
        </p>
      </QA>

      <QA {...FAQ.epic}>
        <p>
          In the Ganguli translation, Drona has an artificial bird put on a tree and asks his pupils what they see.
          Arjuna answers that he sees only the bird, and then only its head. The text calls the target a vulture, and many
          retellings narrow it to the bird&apos;s eye, as this book does. The ball in the well is also in the text, with
          Drona pulling it up on a chain of blades of grass.
        </p>
      </QA>

      <QA {...FAQ.format}>
        <p>
          The 50 pages are a title page, a This adventure belongs to page, a How to Play page, 22 scenes of two pages each,
          a Draw Your Own Ending page, a The End page and a copyright page. The End page has a QR code that links to the
          Mosaic app. The pictures were made with AI image tools, which the copyright page says, and the story text was
          drafted with an AI writing assistant and reviewed by the publisher, GenAI Adventures.
        </p>
      </QA>

      <QA {...FAQ.use}>
        <p>
          Let your child choose the answers, even silly ones. A purple peacock is fine, and the picture should match. Ask
          one follow-up question about the Your turn box, then stop. The book is meant to be finished over many evenings.
        </p>
      </QA>

      <Block id="why-h2" title="Why do reading, drawing and writing together help young children?">
        <p>These books are not clinical tools, and no study has tested them. The research below covers the skills they use.</p>
        <ul>
          <li>
            The AAP{" "}
            <a href="https://doi.org/10.1542/peds.2024-069090" target="_blank" rel="noopener noreferrer">recommends</a>{" "}
            shared reading from birth through at least kindergarten.
          </li>
          <li>
            A{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/29595311/" target="_blank" rel="noopener noreferrer">
              meta-analysis of 38 studies with 2,455 children
            </a>{" "}
            found that reading style, including dialogic reading where adult and child talk about the story, affected how
            many new words children learned. The Your turn boxes are built to start that kind of talk.
          </li>
          <li>
            In 213 children assessed at ages 3 and 4,{" "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3399936/" target="_blank" rel="noopener noreferrer">
              fine motor skills, especially copying designs
            </a>
            , predicted higher achievement at kindergarten entry and more improvement over the year. It is an association
            in a middle-income sample.
          </li>
        </ul>
      </Block>

      <QA {...FAQ.buy}>
        <p>
          <a href={ARJUNA_AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Buy on Amazon</a>
        </p>
        <p>
          Prefer a different setting? <Link href="/books">Space Pals: My Galactic Adventure</Link> uses the same format.
          Compare them on the <Link href="/color-and-write-books-ages-5-8">color-and-write books page</Link>.
        </p>
      </QA>

      <Sources items={MAHABHARATA_SOURCES} />

      <section className="section wrap cta" aria-labelledby="cta-h2">
        <h2 id="cta-h2" className="visually-hidden">Get the Mosaic app</h2>
        <Link href="/#get" className="btn-primary">Try the Mosaic app free</Link>
        <p className="cta__note">Or explore our <Link href="/books">color-and-write paperbacks</Link>.</p>
      </section>
    </GeoPageLayout>
  );
}
