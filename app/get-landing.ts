// Copy, channel mapping and store ordering for the /get install page.
// Pure data and functions so they can be unit-tested; the page components only render them.
//
// Every claim below is taken from copy already live on the marketing homepage (app/home/page.tsx,
// app/home/content.ts) or from the store listing. Do not add a claim here that is not on one of those.
import { CHANNELS } from "./referral.ts";

export type Platform = "ios" | "android" | "desktop";
export type Store = "ios" | "android";
export type Variant = "general" | "kdp";

// Phones and tablets get their own store first; everything else sees both. iPadOS 13+ reports itself as
// a Mac, so a Mac user agent with a touch screen is treated as iOS.
export function platformOf(userAgent: unknown, maxTouchPoints: unknown = 0): Platform {
  const ua = typeof userAgent === "string" ? userAgent : "";
  if (/iPhone|iPad|iPod/.test(ua)) return "ios";
  if (/Macintosh/.test(ua) && typeof maxTouchPoints === "number" && maxTouchPoints > 1) return "ios";
  if (/Android/.test(ua)) return "android";
  return "desktop";
}

// The first store in the list is the primary button on a phone. Desktop shows both with equal weight,
// App Store first. Neither store is ever dropped.
export function storeOrder(platform: Platform): [Store, Store] {
  return platform === "android" ? ["android", "ios"] : ["ios", "android"];
}

export function primaryStore(platform: Platform): Store | null {
  return platform === "desktop" ? null : storeOrder(platform)[0];
}

// A campaign such as kdp-diwali resolves to channel "kdp" before it gets here (see channelOf in referral.ts).
// Every other channel (ig, fb, yt, tt, dm, rd) and no channel use the general parent pitch.
export function variantOf(channel: string): Variant {
  return channel === "kdp" ? "kdp" : "general";
}

export type HeroCopy = { h1: string; lead: string; note: string };

export const HERO_COPY: Record<Variant, HeroCopy> = {
  // H1 = marketing homepage H1. Lead = homepage lead ("writes, illustrates and reads aloud a new bedtime
  // story starring your child") + "Your first 5 stories are free". Note = "Free to try. iPhone and Android."
  general: {
    h1: "Bedtime stories where your child is the hero.",
    lead: "Mosaic writes, illustrates and reads aloud a new story starring your child. Your first 5 stories are free.",
    note: "Free to try. iPhone and Android.",
  },
  // Book readers: the printed QR code says "Scan to hear YOUR adventure read aloud by Mosaic", but the app
  // has no book content and cannot read back the story a child filled in. So the page offers the app as the
  // next step and says plainly that it makes a new story. See docs/qa/GET_LANDING_2026-11-25.md.
  kdp: {
    h1: "Thanks for reading. Now make a story starring your kid.",
    lead: "Mosaic is the app that writes, illustrates and reads aloud a new story with your child as the hero. Your first 5 stories are free.",
    note: "Free to try. The app writes a new story for your child; it doesn't read back the one printed in your book.",
  },
};

export const HERO_IMAGE = {
  src: "/app/reader.jpg",
  width: 1020,
  height: 2208,
  // Same alt as the marketing homepage.
  alt: "Mosaic reader screen: chapter 1 of The Sparkling Trail, with an illustration of two boys running at night above the chapter text.",
};

// Homepage hero ("Give it your child's name, their age and what they're into"), "Each one has chapters and
// an illustration for each scene", and steps 2-3 ("A female or male voice", "read along together or just listen").
export const BENEFITS = [
  { title: "Your child is the hero.", body: "Give it their name, age group and a few favourite things. Each story is written around them." },
  { title: "Every scene is illustrated.", body: "Each story has chapters and a storybook illustration for each scene." },
  { title: "It reads aloud.", body: "Choose a female or male voice. Read along together, or turn the lights down and just listen." },
];

export const STORIES_TITLE = "A few pages from Mosaic stories";
export const STORIES_NOTE = "Every story is written fresh, with chapters and an illustration for each scene.";

// Illustrations, alt text and quoted lines are the ones already shown on the marketing homepage.
export const STORIES = [
  {
    src: "/stories/lily_meadow.jpg", width: 1248, height: 832, who: "Lily",
    alt: "Illustration from Lily's story: a girl in a pink dress rides a white horse through a meadow of pink flowers.",
    line: "As they rode, the flowers seemed to stretch on forever, and Lily felt like she was in a dream.",
  },
  {
    src: "/stories/lily_wand.jpg", width: 1248, height: 832, who: "Lily",
    alt: "Illustration from Lily's story: the same girl raises a wand that throws off purple sparks, in a wooden room full of potion bottles and crystals.",
    line: "As she reached out to touch a wand, she heard a voice behind her.",
  },
  {
    src: "/stories/bear_candles.jpg", width: 1024, height: 576, who: "Lumo",
    alt: "Illustration: a brown bear in a lime-green scarf stands among lit candles in a misty green forest at night.",
    line: "\u2026where the trees sang soft lullabies and the moonlight danced upon the leaves, lived a gentle bear named Lumo.",
  },
  {
    src: "/stories/jack_stadium.jpg", width: 1280, height: 720, who: "Jack",
    alt: "Illustration: a nervous boy in a yellow and blue soccer kit stands alone on the pitch of a packed, sunlit stadium.",
    line: "Today, the weather was just right, and Jack was determined to lead his team to victory.",
  },
];

export const HOW_TITLE = "How it works";
// Marketing homepage "How does it work?" steps.
export const STEPS = [
  { title: "Tell it about your kid.", body: "Their name, their age group and a few favourite things." },
  { title: "Pick a voice and a theme.", body: "A female or male voice. Fantasy, mystery, a fairytale, science fiction, or something funny." },
  { title: "Read it together, or press play and turn the lights down.", body: "Pick a female or male narrator, then read along together or just listen." },
];
export const HOW_IMAGE = {
  src: "/app/personalize.jpg",
  width: 1020,
  height: 2208,
  alt: "Mosaic app screen with age groups from 0-3 to 12+ years, a female or male voice, and story themes such as mystery, fantasy and fairytale.",
};

export const TRUST_TITLE = "Made for parents to use with their kids.";
// Homepage "Is it safe for my kid?" + price section.
export const TRUST_LINES = [
  "There are no ads. You can read every story before your child hears it.",
  "Your first 5 stories are free. After that, Premium is $4.99 a month, and you can cancel any time in the App Store or Google Play.",
];

export const FINAL_CTA = "Make tonight's story.";

// Runs before first paint, inside the statically rendered page, so the right headline, the right store
// order and the right links are already there before React loads. React then renders the same thing from
// the same rules (see GetClient.tsx). It mirrors parseReferral / channelOf / readChannelCookie / withParams /
// appUrl from referral.ts; get-landing.test.ts runs it against those functions so the two cannot drift.
export function bootstrapScript(): string {
  const channels = JSON.stringify([...CHANNELS]);
  return `(function(){try{
var r=document.getElementById("get-root");if(!r)return;
var CH=${channels},u=navigator.userAgent||"",p="desktop";
if(/iPhone|iPad|iPod/.test(u)||(/Macintosh/.test(u)&&navigator.maxTouchPoints>1))p="ios";else if(/Android/.test(u))p="android";
var q=new URLSearchParams(location.search),ref=q.get("ref")||"",cd=q.get("code")||"",ch="",code="";
if(!cd){var m=/^([a-z]{2,3})(?:-[a-z0-9]{1,24}){0,3}$/.exec(ref);if(m&&CH.indexOf(m[1])>-1)ch=m[1];}
if(cd){if(/^[A-Za-z0-9_-]{1,64}$/.test(cd))code=cd;}else if(!ch&&/^[A-Za-z0-9_-]{1,64}$/.test(ref))code=ref;
if(!ch){var k=/(?:^|;\\s*)mosaic_ref=([^;]*)/.exec(document.cookie);if(k){try{var v=decodeURIComponent(k[1]);if(CH.indexOf(v)>-1)ch=v;}catch(e){}}}
function wp(b,o){var s=[];for(var n in o){if(o[n])s.push(n+"="+encodeURIComponent(o[n]));}return s.length?b+(b.indexOf("?")>-1?"&":"?")+s.join("&"):b;}
r.setAttribute("data-platform",p);r.setAttribute("data-variant",ch==="kdp"?"kdp":"general");
var a=r.querySelectorAll("a[data-store]");
for(var i=0;i<a.length;i++){a[i].setAttribute("href",wp(a[i].getAttribute("data-base"),{ref:ch}));}
if(p==="android"){var g=r.querySelectorAll("[data-stores]");for(var j=0;j<g.length;j++){var an=g[j].querySelector('a[data-store="android"]'),io=g[j].querySelector('a[data-store="ios"]');if(an&&io)g[j].insertBefore(an,io);}}
var d=r.querySelector("a[data-deeplink]");if(d)d.setAttribute("href",wp("mosaic://",{code:code,ref:ch}));
var b=r.querySelector("[data-refbox]");if(b&&code){var c=b.querySelector("[data-code]");if(c)c.textContent=code;b.removeAttribute("hidden");}
}catch(e){}})();`;
}
