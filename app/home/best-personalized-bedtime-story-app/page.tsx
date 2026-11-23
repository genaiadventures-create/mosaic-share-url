import { PAGE_DATES, entityNodes, faqPageNode, innerPageNodes, marketingMetadata } from "../../marketing-seo";
import { PAGE_META } from "../../page-meta";
import Link from "next/link";
import { IOS_URL, ANDROID_URL, PRICE_LINE } from "../content";
import { BEDTIME_FAQ as FAQ, BEDTIME_FAQ_ITEMS, BEDTIME_SOURCES } from "../geo-content";
import GeoPageLayout from "../../components/GeoPageLayout";
import { Block, QA, Sources } from "../../components/Geo";

const PATH = "/best-personalized-bedtime-story-app";
const PAGE_NAME = "Personalized bedtime story app";
const DATE_MODIFIED = PAGE_DATES[PATH];

export const metadata = marketingMetadata(PATH, PAGE_META[PATH].title, PAGE_META[PATH].description);

const { webPage, breadcrumb } = innerPageNodes(PATH, PAGE_NAME, {
  datePublished: "2026-10-24",
  dateModified: DATE_MODIFIED,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [...entityNodes(), webPage, breadcrumb, faqPageNode(PATH, BEDTIME_FAQ_ITEMS)],
};

export default function BestPersonalizedBedtimeStoryAppPage() {
  return (
    <GeoPageLayout jsonLd={jsonLd} dateModified={DATE_MODIFIED}>
      <section className="section wrap geo" aria-labelledby="hero-h1">
        <div className="geo__col">
          <h1 id="hero-h1" className="h1">
            What is the best personalized bedtime story app for kids?
          </h1>
          <p className="lead">
            Mosaic: Create Bedtime Stories writes, illustrates and reads aloud a new story starring your child, built from
            the name, age group and story idea you give it. It is on{" "}
            <a href={IOS_URL} target="_blank" rel="noopener noreferrer">iOS</a> and{" "}
            <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">Android</a>. {PRICE_LINE}
          </p>
          <p>
            No single app is best for every family. The right pick depends on whether you want a new story every night or a
            shelf of finished ones. The sections below compare the types and say where Mosaic is a poor fit.
          </p>
        </div>
      </section>

      <QA {...FAQ.best}>
        <div className="geo__table" role="region" aria-label="Comparison of bedtime story app types" tabIndex={0}>
          <table>
            <caption>Three types of bedtime story app. A description of types, not a ranking.</caption>
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">What you get</th>
                <th scope="col">Works well when</th>
                <th scope="col">Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Personalized story generator (Mosaic)</th>
                <td>A new story written on request around your child&apos;s name and your idea, with narration.</td>
                <td>Your child asks for a specific topic, or likes being the hero.</td>
                <td>The text is written by AI, so read it first. Needs a connection to make a story.</td>
              </tr>
              <tr>
                <th scope="row">Pre-written audio library (for example Moshi)</th>
                <td>A fixed catalogue of recorded stories, sleep sounds and meditations.</td>
                <td>Your child wants the same familiar stories on repeat.</td>
                <td>Nothing is about your child, and the catalogue is finite.</td>
              </tr>
              <tr>
                <th scope="row">Read-along book app (for example Epic)</th>
                <td>A large library of published books, many with read-to-me audio.</td>
                <td>Your child is learning to read and wants real books.</td>
                <td>More of a reading activity than a wind-down one.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Named examples come from their own sites, checked in November 2026. Moshi lists over 400 original audio stories,
          sleep sounds, music and meditations for ages 0 to 10 and up, with a 7-day free trial. Epic lists 40,000+ books
          for children 12 and under, including Read-To-Me books, at $13.99 a month. We have not rated either app.
        </p>
      </QA>

      <QA {...FAQ.how}>
        <ol>
          <li>
            <strong>Name and age group.</strong> Enter your child&apos;s name and pick 0-3, 4-6, 7-9, 10-12 or 12+. Gender is
            optional. The age group sets how long the story is: the 0-3 group gets one chapter and the 4-6 group gets two.
          </li>
          <li>
            <strong>Story idea.</strong> Type what the story should be about in your own words. The app&apos;s own example is
            &ldquo;An elephant with big ears&rdquo;.
          </li>
          <li>
            <strong>Style and voice.</strong> Choose Fantasy, Adventures, Funny, Friendship, Educational, Fairy Tales, Bed
            Time or Inspirational, then a female or male voice.
          </li>
          <li>
            <strong>Read or listen.</strong> The finished story is saved in your account, with narration and a
            storybook-style cover illustration.
          </li>
        </ol>
        <p>
          Choose the Bed Time style for a calmer story. Other styles can include a problem to solve or mild danger, because
          the instructions Mosaic sends the AI say not to be overprotective.
        </p>
      </QA>

      <QA {...FAQ.length}>
        <p>
          Those numbers come from Mosaic&apos;s own settings, and the five-minute figure is our estimate, not a measurement.
          The research in the next section studies routines and reading exposure, not word counts.
        </p>
      </QA>

      <Block id="research-h2" title="What does research say about bedtime reading and routines?">
        <ul>
          <li>
            The American Academy of Pediatrics{" "}
            <a href="https://doi.org/10.1542/peds.2024-069090" target="_blank" rel="noopener noreferrer">recommends</a>{" "}
            shared reading, beginning at birth and continuing at least through kindergarten.
          </li>
          <li>
            A study of 10,085 children aged 0 to 5 found that a{" "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4402657/" target="_blank" rel="noopener noreferrer">
              consistent bedtime routine
            </a>{" "}
            was associated with earlier bedtimes, falling asleep faster, fewer night wakings and longer sleep, and more
            nights with a routine meant bigger gains. It shows an association, not proof of cause.
          </li>
          <li>
            In an fMRI study of{" "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9923605/" target="_blank" rel="noopener noreferrer">
              19 children aged 3 to 5
            </a>{" "}
            listening to stories, more reading at home went with more activity in brain areas linked to mental imagery
            and understanding a narrative. It is a small study.
          </li>
          <li>
            The AAP&apos;s{" "}
            <a
              href="https://www.healthychildren.org/English/family-life/Media/Pages/how-to-make-a-family-media-use-plan.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              family media plan
            </a>{" "}
            suggests screen-free zones such as the dinner table, homework time and before bed.
          </li>
        </ul>
        <p>
          That last point matters for an app. Set up the story earlier, then lock the phone and play it as audio. Mosaic
          does not replace reading aloud together, which is what the AAP advice covers.
        </p>
      </Block>

      <Block id="fit-h2" title="Who is Mosaic for, and who is it not for?">
        <p>Mosaic is a good fit if:</p>
        <ul>
          <li>Your child is roughly 3 to 10 and likes stories about a topic they pick.</li>
          <li>You will set up the app and look over a story first. Accounts are for adults 18 and over.</li>
          <li>You are fine with AI writing the text and making the pictures and voice.</li>
        </ul>
        <p>It is a poor fit if:</p>
        <ul>
          <li>You want stories written and edited by a human author. Pick a book or an audio library.</li>
          <li>Bedtime is strictly screen-free for your family and you will not use the audio-only option.</li>
          <li>You need a language other than English. The App Store listing shows English only.</li>
          <li>You want unlimited stories for free. The free tier is the first 5 stories.</li>
        </ul>
      </Block>

      <QA {...FAQ.safe}>
        <p>
          Mosaic&apos;s instructions to the AI ask for age-appropriate vocabulary, a satisfying resolution and an uplifting
          tone, and tell it to avoid religious, political and sensitive topics. Your child&apos;s story can still contain
          mild conflict, so read it first, especially for children under 6.
        </p>
        <p>
          Stories are private to your account by default, and you can delete a story or your whole account in the app.
          The <Link href="/privacy-policy">privacy policy</Link> lists the AI services Mosaic uses to write, illustrate
          and narrate stories.
        </p>
      </QA>

      <QA {...FAQ.cost}>
        <p>
          Cancel Premium any time in the App Store or Google Play. There is no annual plan and no free trial to remember
          to cancel. The US App Store also lists an Extra Credits purchase at $2.99. Epic&apos;s $13.99 a month buys a
          different kind of product, so it is context, not a like-for-like price.
        </p>
      </QA>

      <QA {...FAQ.devices}>
        <p>
          Download from the{" "}
          <a href={IOS_URL} target="_blank" rel="noopener noreferrer">App Store</a> or{" "}
          <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">Google Play</a>.
        </p>
      </QA>

      <QA {...FAQ.listen} />

      <Sources items={BEDTIME_SOURCES} />

      <section className="section wrap cta" aria-labelledby="cta-h2">
        <h2 id="cta-h2" className="visually-hidden">Get the Mosaic app</h2>
        <Link href="/#get" className="btn-primary">
          Get Mosaic free
        </Link>
        <p className="cta__note">
          Compare more options in the <Link href="/best-bedtime-story-apps">best bedtime story apps roundup</Link>, read
          whether <Link href="/ai-bedtime-story-generator">AI story generators are safe</Link>, or explore our{" "}
          <Link href="/books">color-and-write paperbacks</Link>.
        </p>
      </section>
    </GeoPageLayout>
  );
}
