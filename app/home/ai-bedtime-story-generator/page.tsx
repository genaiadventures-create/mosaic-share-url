import Link from "next/link";
import { PAGE_DATES, entityNodes, faqPageNode, innerPageNodes, marketingMetadata } from "../../marketing-seo";
import { PAGE_META } from "../../page-meta";
import { ANDROID_URL, IOS_URL, PRICE_LINE } from "../content";
import {
  GENERATOR_CHECKLIST,
  GENERATOR_FAQ as FAQ,
  GENERATOR_FAQ_ITEMS,
  GENERATOR_MOSAIC_FACTS,
  GENERATOR_PATH as PATH,
  GENERATOR_SOURCES,
  GENERATOR_STEPS,
} from "../guides-content";
import GeoPageLayout from "../../components/GeoPageLayout";
import { Block, QA, Sources } from "../../components/Geo";

const PAGE_NAME = "AI bedtime story generator";
const DATE_MODIFIED = PAGE_DATES[PATH];

export const metadata = marketingMetadata(PATH, PAGE_META[PATH].title, PAGE_META[PATH].description);

const { webPage, breadcrumb } = innerPageNodes(PATH, PAGE_NAME, {
  datePublished: "2026-11-23",
  dateModified: DATE_MODIFIED,
});

// FAQPage only. Google no longer shows HowTo rich results, so the steps below are plain ordered-list HTML.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [...entityNodes(), webPage, breadcrumb, faqPageNode(PATH, GENERATOR_FAQ_ITEMS)],
};

export default function AiBedtimeStoryGeneratorPage() {
  return (
    <GeoPageLayout jsonLd={jsonLd} dateModified={DATE_MODIFIED}>
      <section className="section wrap geo" aria-labelledby="hero-h1">
        <div className="geo__col">
          <h1 id="hero-h1" className="h1">
            {FAQ.what.q}
          </h1>
          <p className="lead">{FAQ.what.a}</p>
          <p>
            Mosaic is a bedtime story generator, so we say below what it does with each point. We make it, so check our
            claims against the{" "}
            <Link href="/privacy-policy">privacy policy</Link> and the sources at the bottom. To compare other apps, see{" "}
            <Link href="/best-bedtime-story-apps">the best bedtime story apps for kids</Link>.
          </p>
        </div>
      </section>

      <QA {...FAQ.how}>
        <p>Using Mosaic as the example, it runs in four parts:</p>
        <ol>
          <li><strong>You give it details.</strong> A child&apos;s name, an age group, hobbies and a story idea.</li>
          <li>
            <strong>A language model writes the text.</strong> The app wraps your details in rules about age, tone and
            length and sends them to the model.
          </li>
          <li><strong>An image model draws.</strong> It makes a storybook-style picture from a description of the story.</li>
          <li><strong>A voice model reads it.</strong> The finished text is turned into narration.</li>
        </ol>
        <p>
          Common Sense Media describes these models as built to predict words, which is why they are good at
          fiction and can still get things wrong. A bedtime story is the right use. A homework answer is not.
        </p>
      </QA>

      <QA {...FAQ.safe}>
        <p>
          That is why the parent is the safeguard that matters. The{" "}
          <a
            href="https://www.healthychildren.org/English/family-life/Media/Pages/how-to-make-a-family-media-use-plan.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            American Academy of Pediatrics
          </a>{" "}
          also suggests screen-free zones, including before bed. With a generator, make the story earlier on the
          phone, then lock it and play it as audio.
        </p>
      </QA>

      <QA {...FAQ.check}>
        <ol>
          {GENERATOR_CHECKLIST.map((c) => (
            <li key={c.lead}>
              <strong>{c.lead}</strong> {c.detail}
            </li>
          ))}
        </ol>
        <p>
          In the US, the{" "}
          <a
            href="https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online"
            target="_blank"
            rel="noopener noreferrer"
          >
            FTC explains
          </a>{" "}
          that the COPPA Rule covers apps directed to children under 13 and requires notice and parental approval before
          collecting a child&apos;s personal information. We do not claim COPPA certification. The next section is
          what Mosaic does, point by point.
        </p>
      </QA>

      <QA {...FAQ.mosaic}>
        <ul>
          {GENERATOR_MOSAIC_FACTS.map((f) => (
            <li key={f.lead}>
              <strong>{f.lead}</strong> {f.detail}
            </li>
          ))}
        </ul>
        <p>
          All of this comes from the <Link href="/privacy-policy">Mosaic privacy policy</Link> and the app&apos;s own
          settings, not from a certification.
        </p>
      </QA>

      <QA {...FAQ.review}>
        <p>
          That is the honest limit. If a story ever includes something you do not want, you can delete it in the app.
          Reading first takes a couple of minutes, and for children under 6 it is the step we would not skip.
        </p>
      </QA>

      <QA {...FAQ.steps}>
        <ol>
          {GENERATOR_STEPS.map((s) => (
            <li key={s.lead}>
              <strong>{s.lead}</strong> {s.detail}
            </li>
          ))}
        </ol>
        <p>
          {PRICE_LINE} Get Mosaic on the{" "}
          <a href={IOS_URL} target="_blank" rel="noopener noreferrer">App Store</a> or{" "}
          <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">Google Play</a>.
        </p>
      </QA>

      <QA {...FAQ.chatbot} />

      <Block id="next-h2" title="Where can I read more?">
        <ul>
          <li><Link href="/best-bedtime-story-apps">Best bedtime story apps for kids</Link>, with a comparison table.</li>
          <li><Link href="/best-personalized-bedtime-story-app">Best personalized bedtime story app</Link>, on story length and research on bedtime routines.</li>
        </ul>
      </Block>

      <Sources items={GENERATOR_SOURCES} />

      <section className="section wrap cta" aria-labelledby="cta-h2">
        <h2 id="cta-h2" className="visually-hidden">Get the Mosaic app</h2>
        <Link href="/#get" className="btn-primary">
          Get Mosaic free
        </Link>
        <p className="cta__note">
          Or explore our <Link href="/books">color-and-write paperbacks</Link>.
        </p>
      </section>
    </GeoPageLayout>
  );
}
