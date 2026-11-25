import Image from "next/image";
import {
  BENEFITS,
  FINAL_CTA,
  HERO_COPY,
  HERO_IMAGE,
  HOW_IMAGE,
  HOW_TITLE,
  STEPS,
  STORIES,
  STORIES_NOTE,
  STORIES_TITLE,
  TRUST_LINES,
  TRUST_TITLE,
  bootstrapScript,
  storeOrder,
  type Platform,
  type Store,
  type Variant,
} from "../get-landing.ts";
import { ANDROID_URL, IOS_URL } from "../referral.ts";
import { satoshi } from "./fonts";
import "./get.css";

export type LandingProps = {
  // "static": the prerendered page every visitor gets first. It carries both variants' copy and the inline
  // bootstrap script picks the right one before paint. "live": React rendering the resolved values.
  mode: "static" | "live";
  variant: Variant;
  platform: Platform;
  referralCode: string;
  iosUrl: string;
  androidUrl: string;
  appDeepLink: string;
};

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4.5 3.2v17.6c0 .5.5.8.9.6L20 12.6c.4-.3.4-.9 0-1.2L5.4 2.6c-.4-.2-.9.1-.9.6z" />
      <path d="M4.8 3.1 15 13.3M4.8 20.9 15 10.7" />
    </svg>
  );
}

const STORE_LABEL: Record<Store, { small: string; big: string }> = {
  ios: { small: "Download on the", big: "App Store" },
  android: { small: "Get it on", big: "Google Play" },
};

// Both stores, always. On a phone the visitor's own store is the large primary button and the other is a
// smaller outlined one; on desktop both are equal. Which is which is decided by data-platform (CSS).
function Stores({ platform, iosUrl, androidUrl }: { platform: Platform; iosUrl: string; androidUrl: string }) {
  const href: Record<Store, string> = { ios: iosUrl, android: androidUrl };
  const base: Record<Store, string> = { ios: IOS_URL, android: ANDROID_URL };
  return (
    <div className="gl-stores" data-stores>
      {storeOrder(platform).map((store) => (
        <a key={store} className={`gl-store gl-store--${store}`} href={href[store]} data-store={store} data-base={base[store]}>
          {store === "ios" ? <AppleGlyph /> : <PlayGlyph />}
          <span className="gl-store__text">
            <span className="gl-store__small">{STORE_LABEL[store].small}</span>{" "}
            <span className="gl-store__big">{STORE_LABEL[store].big}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

// Heading, lead and note exist once per variant in the static page (CSS shows one) and once in live mode.
function Copy({ field, mode, variant }: { field: "h1" | "lead" | "note"; mode: "static" | "live"; variant: Variant }) {
  if (mode === "live") return <>{HERO_COPY[variant][field]}</>;
  return (
    <>
      <span className="v-general">{HERO_COPY.general[field]}</span>
      <span className="v-kdp">{HERO_COPY.kdp[field]}</span>
    </>
  );
}

export default function GetLanding({ mode, variant, platform, referralCode, iosUrl, androidUrl, appDeepLink }: LandingProps) {
  const stores = { platform, iosUrl, androidUrl };
  return (
    <div id="get-root" className={`gl ${satoshi.variable}`} data-platform={platform} data-variant={variant}>
      <a className="gl-skip" href="#gl-main">Skip to content</a>

      <header className="gl-wrap gl-nav">
        <span className="gl-brand">
          <Image src="/app-icon.png" alt="" width={28} height={28} className="gl-brand__icon" />
          <span>Mosaic</span>
        </span>
      </header>

      <main id="gl-main">
        <section className="gl-wrap gl-hero" aria-labelledby="gl-h1">
          <div className="gl-hero__text">
            <h1 id="gl-h1" className="gl-h1">
              <Copy field="h1" mode={mode} variant={variant} />
            </h1>
            <p className="gl-lead">
              <Copy field="lead" mode={mode} variant={variant} />
            </p>

            {/* Personal referral code: only shown for /get?ref=CODE or ?code=CODE. */}
            <div className="gl-ref" data-refbox hidden={!referralCode}>
              <p className="gl-ref__label">Your friend's referral code</p>
              <p className="gl-ref__code" data-code>{referralCode}</p>
              <p className="gl-ref__help">Enter this during signup to get 5 free story tokens</p>
            </div>

            <Stores {...stores} />
            <p className="gl-note">
              <Copy field="note" mode={mode} variant={variant} />
            </p>
            <a className="gl-open" href={appDeepLink} data-deeplink>
              Already have the app? Open it here
            </a>
          </div>

          <div className="gl-hero__shot">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              width={HERO_IMAGE.width}
              height={HERO_IMAGE.height}
              priority
              fetchPriority="high"
              sizes="(min-width: 900px) 300px, 252px"
              className="gl-phone"
            />
          </div>
        </section>

        <section className="gl-wrap gl-section" aria-labelledby="gl-what">
          <h2 id="gl-what" className="gl-sr">What you get</h2>
          <ul className="gl-benefits">
            {BENEFITS.map((b) => (
              <li key={b.title}>
                <h3 className="gl-h3">{b.title}</h3>
                <p className="gl-body">{b.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="gl-section" aria-labelledby="gl-stories">
          <div className="gl-wrap">
            <h2 id="gl-stories" className="gl-h2">{STORIES_TITLE}</h2>
          </div>
          {/* Scrolls sideways on phones: focusable and named so keyboard users can scroll it. */}
          <div className="gl-strip" data-scroller tabIndex={0} role="region" aria-label="Pages from Mosaic stories, scroll sideways">
            {STORIES.map((s) => (
              <figure key={s.src} className="gl-page">
                <Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(min-width: 900px) 280px, 72vw" className="gl-page__img" />
                <figcaption className="gl-page__cap">
                  <span className="gl-page__who">{s.who}</span>
                  <span className="gl-page__line">&ldquo;{s.line}&rdquo;</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="gl-wrap">
            <p className="gl-small">{STORIES_NOTE}</p>
          </div>
        </section>

        <section className="gl-wrap gl-section gl-how" aria-labelledby="gl-how">
          <div className="gl-how__steps">
            <h2 id="gl-how" className="gl-h2">{HOW_TITLE}</h2>
            <ol className="gl-steps">
              {STEPS.map((s, i) => (
                <li key={s.title} className="gl-step">
                  <span className="gl-step__n" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className="gl-h3">{s.title}</h3>
                    <p className="gl-body">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="gl-how__shot">
            <Image src={HOW_IMAGE.src} alt={HOW_IMAGE.alt} width={HOW_IMAGE.width} height={HOW_IMAGE.height} sizes="(min-width: 900px) 260px, 220px" className="gl-phone gl-phone--flat" loading="lazy" />
          </div>
        </section>

        <section className="gl-wrap gl-section gl-trust" aria-labelledby="gl-trust">
          <h2 id="gl-trust" className="gl-h2">{TRUST_TITLE}</h2>
          {TRUST_LINES.map((line) => (
            <p key={line} className="gl-body">{line}</p>
          ))}
        </section>

        <section className="gl-wrap gl-section gl-final" aria-labelledby="gl-final">
          <h2 id="gl-final" className="gl-h2">{FINAL_CTA}</h2>
          <Stores {...stores} />
        </section>
      </main>

      <footer className="gl-wrap gl-footer">
        <span>&copy; 2026 Mosaic</span>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/support">Support</a>
        <a href="/terms-and-conditions">Terms</a>
      </footer>

      {mode === "static" && <script dangerouslySetInnerHTML={{ __html: bootstrapScript() }} />}
    </div>
  );
}
