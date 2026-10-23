import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import allWords from "../../public/story-audio/kayden_ch1.words.json";
import HeroVideo from "./components/HeroVideo";
import ReadAlong, { type Word } from "./components/ReadAlong";
import RevealObserver from "./components/RevealObserver";
import StoreBadges from "./components/StoreBadges";
import { BOOKS, BOOKS_LINE, FAQ, H1, PRICE_LINE, SITE_URL, amazonUrl, jsonLd } from "./content";
import { kalam, satoshi } from "./fonts";
import "./home.css";

const TITLE = "Mosaic: Personalized Bedtime Stories Starring Your Child";
const DESCRIPTION =
  "A bedtime story app that writes, illustrates and reads aloud a new story with your child as the hero. First 5 stories free, then $4.99 a month.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: "Mosaic",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  itunes: { appId: "6751470484" },
};

// The first sentence of Kayden's chapter 1, exactly as narrated (ends at "star.").
const HERO_SENTENCE: Word[] = (allWords as Word[]).slice(0, 25);

const LILY = [
  {
    src: "/stories/lily_meadow.jpg",
    w: 1248,
    h: 832,
    alt: "Illustration from Lily's story: a girl in a pink dress rides a white horse through a meadow of pink flowers.",
    line: "As they rode, the flowers seemed to stretch on forever, and Lily felt like she was in a dream.",
  },
  {
    src: "/stories/lily_wand.jpg",
    w: 1248,
    h: 832,
    alt: "Illustration from Lily's story: the same girl raises a wand that throws off purple sparks, in a wooden room full of potion bottles and crystals.",
    line: "As she reached out to touch a wand, she heard a voice behind her.",
  },
];

type Tile = { src: string; w: number; h: number; who: string; alt: string; line: string; big?: boolean };

const WALL: Tile[] = [
  {
    src: "/stories/jack_stadium.jpg", w: 1280, h: 720, big: true, who: "Jack: the biggest game of the season",
    alt: "Illustration: a nervous boy in a yellow and blue soccer kit stands alone on the pitch of a packed, sunlit stadium.",
    line: "Today, the weather was just right, and Jack was determined to lead his team to victory.",
  },
  {
    src: "/stories/emma_gokart.jpg", w: 1024, h: 576, who: "Emma: learning to drive",
    alt: "Illustration: a red-haired girl drives a round yellow go-kart down a sunny road lined with trees.",
    line: "She loved to go fast and take risks, which made Mrs. Thompson a bit concerned.",
  },
  {
    src: "/stories/sophia_lab.jpg", w: 1248, h: 832, who: "Sophia: a chemistry experiment",
    alt: "Illustration: a girl in a blue school blazer stands beside a flask foaming over with bright green bubbles in a science lab.",
    line: "Sophia carefully measured out the ingredients, donning her goggles and gloves as she mixed the substances in a beaker.",
  },
  {
    src: "/stories/whiskers_street.jpg", w: 1024, h: 576, who: "Whiskers: a cat who explores",
    alt: "Illustration: a fluffy black cat with green eyes prowls down a sunny cobbled street of pink and yellow houses.",
    line: "Whiskers had sleek fur the color of midnight and eyes that sparkled like emeralds.",
  },
  {
    src: "/stories/kayden_astronaut.jpg", w: 1024, h: 576, who: "Kayden: landing on an icy planet",
    alt: "Illustration: a boy in an astronaut suit grins on a snowy planet under a pale blue sky.",
    line: "The star above him pulsed with a soft blue light, casting an ethereal glow over the landscape.",
  },
  {
    src: "/stories/bear_candles.jpg", w: 1024, h: 576, big: true, who: "Lumo: a gentle bear in the woods",
    alt: "Illustration: a brown bear in a lime-green scarf stands among lit candles in a misty green forest at night.",
    line: "In the heart of the Whispering Woods, where the trees sang soft lullabies and the moonlight danced upon the leaves, lived a gentle bear named Lumo.",
  },
];

export default function HomePage() {
  const ld = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");

  return (
    <div className={`mh ${satoshi.variable} ${kalam.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
      <a className="skip" href="#main">Skip to content</a>

      <header className="nav wrap">
        <Link href="/" className="nav__brand" aria-label="Mosaic home">
          <Image src="/app-icon.png" alt="" width={28} height={28} className="nav__icon" />
          <span>Mosaic</span>
        </Link>
        <nav aria-label="Main" className="nav__links">
          <a href="#how" className="nav__link">How it works</a>
          <a href="#books" className="nav__link">Books</a>
          <a href="#get" className="btn-primary">Get the app</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__text">
            <h1 id="hero-title" className="h1">{H1}</h1>
            <p className="lead">
              Mosaic is an iPhone and Android app that writes, illustrates and reads aloud a new bedtime story
              starring your child. Your first 5 stories are free; after that, Premium is $4.99 a month.
            </p>
            <p className="body hero__how">
              Give it your child's name, their age and what they're into this week. You get a chapter book about
              them, a picture for every scene, and a voice to read it.
            </p>
            <StoreBadges className="hero__badges" />
            <p className="small">Free to try. iPhone and Android.</p>
          </div>

          <figure className="hero__figure">
            <HeroVideo alt="Illustration from Kayden's story: a boy in an astronaut suit grins on a snowy planet." />
            <figcaption className="small hero__credit">From Kayden's story, Landing on Ice.</figcaption>
          </figure>

          <div className="hero__listen">
            <ReadAlong words={HERO_SENTENCE} label="the first line of Kayden's story" />
            <p className="small hero__note">The first line of Kayden's story, in the voice the app reads it in.</p>
          </div>
        </section>

        <section className="section wrap" aria-labelledby="real-title">
          <div className="measure" data-reveal>
            <h2 id="real-title" className="h2">What does a real one look like?</h2>
            <p className="body">
              Here's a story Mosaic wrote for Lily, who rides a white horse called Starlight through a field of
              flowers and finds a hidden cave. These are two of its pages.
            </p>
          </div>
          <div className="spread" data-reveal>
            {LILY.map((p) => (
              <figure key={p.src} className="spread__page">
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width: 1024px) 600px, 86vw" className="art" />
                <figcaption className="story-text spread__line">&ldquo;{p.line}&rdquo;</figcaption>
              </figure>
            ))}
          </div>
          <p className="body measure spread__note">
            Every story is written fresh. Each one has chapters and an illustration for each scene, and you can
            listen or read along.
          </p>
        </section>

        <section id="how" className="section wrap" aria-labelledby="how-title">
          <div className="how">
            <div className="how__intro" data-reveal>
              <h2 id="how-title" className="h2">How does it work?</h2>
              <p className="body measure">
                You tell it about your child and pick how the story should sound. Mosaic uses AI to write the
                story, draw each scene and read it aloud.
              </p>
            </div>
            <div className="how__shot" data-reveal>
              <Image
                src="/app/personalize.jpg"
                alt="Mosaic app screen with age groups from 0-3 to 12+ years, a female or male voice, and story themes such as mystery, fantasy and fairytale."
                width={1020}
                height={2208}
                sizes="(min-width: 1024px) 300px, 60vw"
                className="phone"
              />
            </div>
            <div className="how__steps">
              <ol className="steps">
                <li className="step" data-reveal>
                  <span className="step__n" aria-hidden="true">1</span>
                  <div>
                    <h3 className="h3">Tell it about your kid.</h3>
                    <p className="body">Their name, their age group and a few favourite things: dinosaurs, a sister called Ava, the colour green.</p>
                  </div>
                </li>
                <li className="step" data-reveal>
                  <span className="step__n" aria-hidden="true">2</span>
                  <div>
                    <h3 className="h3">Pick a voice and a theme.</h3>
                    <p className="body">A female or male voice. Fantasy, mystery, a fairytale, science fiction, or something funny.</p>
                  </div>
                </li>
                <li className="step step--last" data-reveal>
                  <span className="step__n" aria-hidden="true">3</span>
                  <div>
                    <h3 className="h3">Read it together, or press play and turn the lights down.</h3>
                    <p className="body">The words light up as they're read, so early readers can follow along.</p>
                  </div>
                  <Image
                    src="/app/reader.jpg"
                    alt="Mosaic reader screen: chapter 1 of The Sparkling Trail, with an illustration of two boys running at night and the narrated words highlighted."
                    width={1020}
                    height={2208}
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="phone step__shot"
                  />
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section wrap" aria-labelledby="wall-title">
          <div className="measure" data-reveal>
            <h2 id="wall-title" className="h2">What can the stories be about?</h2>
            <p className="body">
              Whatever your child is into that week. Astronauts, go-karts, chemistry labs, a bear with a green scarf.
            </p>
          </div>
          <div className="wall">
            {WALL.map((t) => (
              <figure key={t.src} className={t.big ? "tile tile--big" : "tile"} data-reveal>
                <div className="tile__art">
                  <Image src={t.src} alt={t.alt} fill sizes={t.big ? "(min-width: 1024px) 680px, 100vw" : "(min-width: 1024px) 480px, 50vw"} className="art art--fill" />
                </div>
                <figcaption className="tile__cap">
                  <span className="tile__who">{t.who}</span>
                  <span className="story-text tile__line">&ldquo;{t.line}&rdquo;</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="books" className="section wrap" aria-labelledby="books-title">
          <div className="books__head" data-reveal>
            <h2 id="books-title" className="h2">Is there a Mosaic book I can hold?</h2>
            <p className="lead">Two paperbacks, on Amazon now.</p>
            <p className="body books__how">{BOOKS_LINE}</p>
          </div>
          <div className="books">
            {BOOKS.map((b) => (
              <article key={b.slug} className="book" data-reveal>
                <a href={amazonUrl(b.asin)} className="book__cover" target="_blank" rel="noopener">
                  <Image src={b.cover} alt={b.alt} width={800} height={1034} sizes="(min-width: 768px) 320px, 70vw" />
                </a>
                <div className="book__text">
                  <h3 className="book__title">{b.title}</h3>
                  <p className="book__sub">{b.subtitle}</p>
                  <p className="body book__blurb">{b.blurb}</p>
                  <p className="small">Paperback, 50 pages, ages 5 to 8. ${b.price} on Amazon.</p>
                  <a href={amazonUrl(b.asin)} className="btn-ghost book__buy" target="_blank" rel="noopener">
                    Buy on Amazon
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap split split--safe" aria-labelledby="safe-title">
          <div data-reveal>
            <h2 id="safe-title" className="h2">Is it safe for my kid?</h2>
            <p className="body">
              Mosaic is made for parents to use with their kids. A grown-up sets it up, and you can read every story
              before your child hears it.
            </p>
          </div>
          <div className="measure" data-reveal>
            <p className="body">
              <strong>You choose what goes in.</strong> You pick the age group, the theme and the voice. Stories are
              written to be age-appropriate, with a calm ending.
            </p>
            <p className="body">
              <strong>There are no ads.</strong> Mosaic doesn't show ads to you or your child, and we don't
              share your information with advertisers or data brokers.
            </p>
            <p className="body">
              <strong>Yes, it uses AI.</strong> Mosaic uses AI to write, illustrate and narrate each story. What you
              type in (your child's name, age group and interests) is used to write it. By default, stories go into
              Mosaic's shared library, where other families can read them. You can delete your account and its data at
              any time. The details are in the <Link href="/privacy-policy" className="link">privacy policy</Link>.
            </p>
          </div>
        </section>

        <div className="section wrap split">
        <section aria-labelledby="price-title" className="split__a">
          <div data-reveal>
            <h2 id="price-title" className="h2">What does it cost?</h2>
            <p className="lead">{PRICE_LINE}</p>
            <p className="body">
              Cancel any time in the App Store or Google Play. There is no annual plan and no free trial that turns
              into a charge.
            </p>
          </div>
        </section>

        <section aria-labelledby="faq-title" className="split__b">
          <div data-reveal>
            <h2 id="faq-title" className="h2">Questions parents ask</h2>
            <div className="faq">
              {FAQ.map(({ q, a }) => (
                <details key={q} className="faq__item">
                  <summary className="faq__q">{q}</summary>
                  <p className="body faq__a">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        </div>

        <section id="get" className="cta" aria-labelledby="cta-title">
          <Image src="/stories/bear_candles.jpg" alt="" fill sizes="100vw" className="cta__bg" />
          <div className="cta__inner" data-reveal>
            <h2 id="cta-title" className="h2">Make tonight's story.</h2>
            <StoreBadges className="cta__badges" />
            <p className="small cta__small">Your first 5 stories are free.</p>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <span>&copy; 2026 Mosaic</span>
        <a href="mailto:support@mosaicai.in">support@mosaicai.in</a>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/terms-and-conditions">Terms</Link>
      </footer>

      <RevealObserver />
    </div>
  );
}
