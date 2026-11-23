import { PAGE_DATES, entityNodes, faqPageNode, innerPageNodes, marketingMetadata } from "../../marketing-seo";
import Link from "next/link";
import { BOOKS, amazonUrl } from "../content";
import { COLOR_WRITE_FAQ as FAQ, COLOR_WRITE_FAQ_ITEMS, COLOR_WRITE_SOURCES } from "../geo-content";
import GeoPageLayout from "../../components/GeoPageLayout";
import { QA, Sources } from "../../components/Geo";

const [SPACE_PALS, ARJUNA] = BOOKS;
const SPACE_PALS_AMAZON_URL = amazonUrl(SPACE_PALS.asin);
const ARJUNA_AMAZON_URL = amazonUrl(ARJUNA.asin);

const PATH = "/color-and-write-books-ages-5-8";
const PAGE_NAME = "Color-and-write books for ages 5–8";
const DATE_MODIFIED = PAGE_DATES[PATH];

export const metadata = marketingMetadata(
  PATH,
  "Best Color-and-Write Books for Ages 5–8 | Mosaic",
  "Space Pals and Arjuna's Archery School: two 50-page color-and-write paperbacks for ages 5 to 8, 22 scenes each, $9.99 on Amazon.",
);

const { webPage, breadcrumb } = innerPageNodes(PATH, PAGE_NAME, {
  datePublished: "2026-10-24",
  dateModified: DATE_MODIFIED,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [...entityNodes(), webPage, breadcrumb, faqPageNode(PATH, COLOR_WRITE_FAQ_ITEMS)],
};

export default function ColorAndWriteBooksAges58Page() {
  return (
    <GeoPageLayout jsonLd={jsonLd} dateModified={DATE_MODIFIED}>
      <section className="section wrap geo" aria-labelledby="hero-h1">
        <div className="geo__col">
          <h1 id="hero-h1" className="h1">
            {FAQ.best.q}
          </h1>
          <p className="lead">{FAQ.best.a}</p>
          <p>
            Buy <a href={SPACE_PALS_AMAZON_URL} target="_blank" rel="noopener noreferrer">Space Pals</a> or{" "}
            <a href={ARJUNA_AMAZON_URL} target="_blank" rel="noopener noreferrer">Arjuna&apos;s Archery School</a> on
            Amazon, or see <Link href="/books">both on one page</Link>.
          </p>
        </div>
      </section>

      <QA {...FAQ.what}>
        <p>
          Every scene has two blanks and a Your turn box that asks the child to draw, circle or answer. Across each book
          there are 8 questions, 7 drawing prompts and 7 circle-one choices. The story is written to &ldquo;you&rdquo;, so the
          reader is the hero. The hero is never named or drawn. The pictures are printed as line art on white paper.
        </p>
        <p>
          The pictures were made with AI image tools, which each copyright page says. The story text was drafted with an
          AI writing assistant and reviewed by the publisher, GenAI Adventures.
        </p>
      </QA>

      <QA {...FAQ.ages}>
        <p>
          The sentences are short and full of sound words such as Whoosh and Clip-clop. Each blank needs one word, a color
          or a name. A 5-year-old can say the answer while you write it. A 7 or 8-year-old can usually do it alone. Past
          about 8, the stories will likely feel young. That is our reading of the books, not a test result.
        </p>
      </QA>

      <QA {...FAQ.pages} />

      <QA {...FAQ.titles}>
        <div className="geo__table" role="region" aria-label="Space Pals compared with Arjuna's Archery School" tabIndex={0}>
          <table>
            <caption>The two Mosaic color-and-write paperbacks</caption>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Space Pals: My Galactic Adventure</th>
                <th scope="col">Arjuna&apos;s Archery School</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Setting</th>
                <td>A rocket, the moon and a string of small planets</td>
                <td>A forest school with round huts, a mango tree and a lotus pond</td>
              </tr>
              <tr>
                <th scope="row">Story</th>
                <td>Help rescue a little robot, then spend a night on the moon</td>
                <td>Lessons with Teacher Drona, a wooden bird, a fair and graduation day</td>
              </tr>
              <tr>
                <th scope="row">Companions</th>
                <td>A cat astronaut, an alien pup, a bunny, a fox, a sloth, a dragon and more</td>
                <td>Arjuna, big cheerful Bhima, Teacher Drona and a peacock</td>
              </tr>
              <tr>
                <th scope="row">Themes</th>
                <td>Helping a friend, wonder at space</td>
                <td>Focus, practice, sharing</td>
              </tr>
              <tr>
                <th scope="row">Ending</th>
                <td>Campfire, hammock, Earth in the window</td>
                <td>Garland, goodbyes, a new friend club</td>
              </tr>
              <tr>
                <th scope="row">Format</th>
                <td colSpan={2}>Paperback, 50 pages, 8.5 by 11 inches, black-and-white interior, 22 scenes each, $9.99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Details for Space Pals are on{" "}
          <a href={SPACE_PALS_AMAZON_URL} target="_blank" rel="noopener noreferrer">its Amazon listing</a>. For the
          Arjuna book, including how it relates to the epic, see the{" "}
          <Link href="/mahabharata-story-for-kids-book">Mahabharata story book page</Link>.
        </p>
      </QA>

      <QA {...FAQ.which} />

      <QA {...FAQ.use}>
        <p>
          One scene a night takes about three weeks, which suits a bedtime habit. Let your child pick the answers, even
          silly ones, then match the picture to them. Ask one follow-up about the Your turn box and stop there. Finished
          pages make a keepsake.
        </p>
      </QA>

      <QA {...FAQ.research}>
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
            found that reading style, including dialogic reading where adult and child talk about the story, affected
            how many new words children learned. The age of the child and who read the story did not.
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
      </QA>

      <QA {...FAQ.buy}>
        <ul>
          <li>
            <a href={SPACE_PALS_AMAZON_URL} target="_blank" rel="noopener noreferrer">Space Pals: My Galactic Adventure</a>,
            ASIN {SPACE_PALS.asin}, ISBN {SPACE_PALS.isbn}
          </li>
          <li>
            <a href={ARJUNA_AMAZON_URL} target="_blank" rel="noopener noreferrer">Arjuna&apos;s Archery School</a>, ASIN{" "}
            {ARJUNA.asin}, ISBN {ARJUNA.isbn}
          </li>
        </ul>
        <p>
          <Link href="/books" className="btn-primary">Mosaic Books page</Link>
        </p>
      </QA>

      <Sources items={COLOR_WRITE_SOURCES} />

      <section className="section wrap cta" aria-labelledby="cta-h2">
        <h2 id="cta-h2" className="visually-hidden">Get the Mosaic app</h2>
        <Link href="/#get" className="btn-primary">Try the Mosaic app free</Link>
        <p className="cta__note">Or explore our <Link href="/books">color-and-write paperbacks</Link>.</p>
      </section>
    </GeoPageLayout>
  );
}
