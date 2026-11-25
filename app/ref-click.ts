// Privacy-friendly click counting for campaign links (share.mosaicai.in/get?ref=<channel>).
//
// Server side only: no script, no cookie, no beacon in the browser. When /get is
// requested with a recognised campaign `ref`, middleware.ts sends one small
// server-to-server POST { ref, dest } to REF_CLICK_ENDPOINT (unset = feature off,
// no request is made). Nothing about the visitor is forwarded or stored: no IP,
// no user agent, no cookie. The user agent is only read here to (a) skip bots and
// link-preview fetchers and (b) pick a coarse platform bucket, then discarded.
import { CHANNELS } from "./referral.ts";

export const REF_CLICK_TIMEOUT_MS = 1500;

export type RefClickDest = "ios" | "android" | "web";
export type RefClickEvent = { ref: string; dest: RefClickDest };

// A campaign is a known channel (yt, ig, tt, kdp, dm, fb, rd) optionally followed by up to
// three short lowercase slugs, e.g. "kdp-hanuman". Legacy personal referral codes
// (/get?ref=ABCD2345) never match: they would identify a person and are not campaigns.
const CAMPAIGN = /^([a-z]{2,3})((?:-[a-z0-9]{1,24}){0,3})$/;
const MAX_REF_LENGTH = 48;

export function normalizeRef(value: unknown): string {
  if (typeof value !== "string") return "";
  const ref = value.trim().toLowerCase();
  if (ref.length === 0 || ref.length > MAX_REF_LENGTH) return "";
  const match = CAMPAIGN.exec(ref);
  return match && CHANNELS.has(match[1]) ? ref : "";
}

const BOT_UA =
  /bot|crawl|spider|slurp|facebookexternalhit|facebookcatalog|meta-external|whatsapp|telegram|discord|slack|skype|linkedin|pinterest|embedly|quora link|redditbot|preview|prefetch|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|curl\/|wget\/|python-requests|python-urllib|aiohttp|httpx|go-http-client|java\/|libwww|node-fetch|undici|axios/i;

export function isBotUserAgent(userAgent: string | null | undefined): boolean {
  if (!userAgent || userAgent.trim().length < 10) return true; // real browsers send a long UA
  return BOT_UA.test(userAgent);
}

export function destFromUserAgent(userAgent: string | null | undefined): RefClickDest {
  const ua = userAgent ?? "";
  if (/iPhone|iPad|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  return "web";
}

type HeaderReader = { get(name: string): string | null };

// Headers browsers/Next add to speculative or in-app (RSC) fetches that are not a person landing on the page.
function isPrefetchOrInternalFetch(headers: HeaderReader): boolean {
  const purpose = `${headers.get("purpose") ?? ""} ${headers.get("sec-purpose") ?? ""} ${headers.get("x-moz") ?? ""}`;
  return (
    /prefetch|prerender/i.test(purpose) ||
    headers.get("next-router-prefetch") !== null ||
    headers.get("x-middleware-prefetch") !== null ||
    headers.get("rsc") !== null
  );
}

export function refClickEvent(input: {
  method: string;
  searchParams: URLSearchParams;
  headers: HeaderReader;
}): RefClickEvent | null {
  if (input.method !== "GET") return null; // HEAD (link checkers, unfurlers) and everything else is ignored
  const ref = normalizeRef(input.searchParams.get("ref"));
  if (!ref) return null;
  const userAgent = input.headers.get("user-agent");
  if (isBotUserAgent(userAgent)) return null;
  if (isPrefetchOrInternalFetch(input.headers)) return null;
  return { ref, dest: destFromUserAgent(userAgent) };
}

// Only https (or loopback http, for local testing) endpoints are used.
export function validEndpoint(raw: string | undefined): URL | null {
  if (!raw) return null;
  try {
    const url = new URL(raw);
    const loopback = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.protocol === "https:" || (url.protocol === "http:" && loopback)) return url;
  } catch {
    // fall through
  }
  return null;
}

export type SendOptions = {
  endpoint?: string;
  token?: string; // optional shared secret so only this site can bump the counter
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
};

// Fire-and-forget by design: resolves true if the backend accepted the count and false in
// every other case (feature off, bad endpoint, timeout, network error, non-2xx). Never throws.
export async function sendRefClick(event: RefClickEvent, options: SendOptions): Promise<boolean> {
  const url = validEndpoint(options.endpoint);
  if (!url) return false;
  const doFetch = options.fetchImpl ?? fetch;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), options.timeoutMs ?? REF_CLICK_TIMEOUT_MS);
  try {
    const headers: Record<string, string> = { "content-type": "application/json" };
    if (options.token) headers.authorization = `Bearer ${options.token}`;
    const res = await doFetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ ref: event.ref, dest: event.dest }),
      signal: controller.signal,
      credentials: "omit",
      redirect: "error",
      cache: "no-store",
      referrerPolicy: "no-referrer",
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}
