import Link from "next/link";
import { PAGE_DATES, SITE_URL, entityNodes, faqPageNode, innerPageNodes, marketingMetadata } from "../../marketing-seo";
import { PAGE_META } from "../../page-meta";
import { ANDROID_URL, IOS_URL, PRICE_LINE } from "../content";
import {
  ROUNDUP_APPS,
  ROUNDUP_FAQ as FAQ,
  ROUNDUP_FAQ_ITEMS,
  ROUNDUP_LEAD,
  ROUNDUP_METHOD,
  ROUNDUP_PATH as PATH,
  ROUNDUP_SOURCES,
} from "../guides-content";
import GeoPageLayout from "../../components/GeoPageLayout";
import { Block, QA, Sources } from "../../components/Geo";

const PAGE_NAME = "Best bedtime story apps for kids";
const DATE_MODIFIED = PAGE_DATES[PATH];

export const metadata = marketingMetadata(PATH, PAGE_META[PATH].title, PAGE_META[PATH].description);

const { webPage, breadcrumb } = innerPageNodes(PATH, PAGE_NAME, {
  datePublished: "2026-11-23",
  dateModified: DATE_MODIFIED,
});

// An unordered list: the apps are grouped by type, not ranked.
const itemList = {
  "@type": "ItemList",
  "@id": `${SITE_URL}${PATH}#apps`,
  name: "Bedtime story apps and books for kids, checked November 2026",
  itemListOrder: "https://schema.org/ItemListUnordered",
  numberOfItems: ROUNDUP_APPS.length,
  itemListElement: ROUNDUP_APPS.map((app, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: app.name,
    url: app.url,
    description: app.what,
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...entityNodes(),
    { ...webPage, mainEntity: { "@id": itemList["@id"] } },
    breadcrumb,
    itemList,
    faqPageNode(PATH, ROUNDUP_FAQ_ITEMS),
  ],
};

export default function BestBedtimeStoryAppsPage() {
  return (
    <GeoPageLayout jsonLd={jsonLd} dateModified={DATE_MODIFIED}>
      <section className="section wrap geo" aria-labelledby="hero-h1">
        <div className="geo__col">
          <h1 id="hero-h1" className="h1">
            What are the best bedtime story apps for kids in 2026?
          </h1>
          <p className="lead">{ROUNDUP_LEAD}</p>
          <p>
            Every fact about another company below comes from its own site or store listing, checked in November 2026,
            and the sources are listed at the bottom. This is not a ranking. We say where each app fits and where it
            does not, including where an app is a better fit than ours.
          </p>
        </div>
      </section>

      <Block id="table-h2" title="How do the apps compare?">
        <p>
          One row per app. Where a company&apos;s own pages did not state something, the cell says Not listed. Scroll
          sideways on a phone.
        </p>
        <div
          className="geo__table geo__table--wide"
          role="region"
          aria-label="Comparison of bedtime story apps, scroll sideways"
          tabIndex={0}
        >
          <table>
            <caption className="visually-hidden">Bedtime story apps for kids, checked November 2026. Grouped by type, not ranked.</caption>
            <thead>
              <tr>
                <th scope="col">App</th>
                <th scope="col">What it is</th>
                <th scope="col">Personalization</th>
                <th scope="col">Narration</th>
                <th scope="col">Ages</th>
                <th scope="col">Price</th>
                <th scope="col">Platforms</th>
              </tr>
            </thead>
            <tbody>
              {ROUNDUP_APPS.map((app) => (
                <tr key={app.id}>
                  <th scope="row">
                    <a href={app.url} target="_blank" rel="noopener noreferrer">{app.name}</a>
                  </th>
                  <td>{app.what}</td>
                  <td>{app.personalization}</td>
                  <td>{app.narration}</td>
                  <td>{app.ages}</td>
                  <td>{app.price}</td>
                  <td>{app.platforms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small geo__note">
          Mosaic&apos;s row is from our own site and the App Store. Prices are in US dollars and change, so check the store before you subscribe. Moshi and
          Calm say theirs vary by country.
        </p>
      </Block>

      <QA {...FAQ.best}>
        <p>
          No one app wins every night. Here is where each one fits best, and where it does not.
        </p>
        {ROUNDUP_APPS.map((app) => (
          <div key={app.id} className="geo__app">
            <h3 className="h3">{app.name}</h3>
            <p>
              <strong>Best for:</strong> {app.bestFor}
            </p>
            <p>
              <strong>Keep in mind:</strong> {app.fit}
            </p>
          </div>
        ))}
      </QA>

      <QA {...FAQ.audio} />

      <QA {...FAQ.name}>
        <p>
          How Mosaic does it: you give it a profile (name, age group, hobbies) and type a story idea, and it writes the
          story, adds illustrations and narrates it. {PRICE_LINE} It is on the{" "}
          <a href={IOS_URL} target="_blank" rel="noopener noreferrer">App Store</a> and{" "}
          <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">Google Play</a>. More detail is on the{" "}
          <Link href="/best-personalized-bedtime-story-app">personalized bedtime story app</Link> page.
        </p>
      </QA>

      <QA {...FAQ.moshi} />

      <QA {...FAQ.pictures} />

      <QA {...FAQ.free} />

      <QA {...FAQ.safe}>
        <p>
          Read{" "}
          <Link href="/ai-bedtime-story-generator">what an AI bedtime story generator is and how to check one</Link>,
          including what Mosaic stores, who can see a story and what is not reviewed by a person.
        </p>
      </QA>

      <Block id="method-h2" title="How did we pick and judge these apps?">
        <ul>
          {ROUNDUP_METHOD.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <p>
          Mosaic is our own app, so we held it to the same rule: every claim traces to our store listing, our privacy
          policy or our app. Links to other companies go to their own pages and none are affiliate links. We left out
          any app whose official page we could not open.
        </p>
      </Block>

      <Sources items={ROUNDUP_SOURCES} />

      <section className="section wrap cta" aria-labelledby="cta-h2">
        <h2 id="cta-h2" className="visually-hidden">Get the Mosaic app</h2>
        <Link href="/#get" className="btn-primary">
          Get Mosaic free
        </Link>
        <p className="cta__note">
          Or read the <Link href="/ai-bedtime-story-generator">AI story generator safety guide</Link> or see our{" "}
          <Link href="/books">color-and-write paperbacks</Link>.
        </p>
      </section>
    </GeoPageLayout>
  );
}
