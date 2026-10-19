// Keep landing and /get interpretation of acquisition links in one place.
export const IOS_URL = "https://apps.apple.com/us/app/mosaic-ai/id6751470484";
export const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.gitcuber369rn.Mosaic";
export const CHANNEL_COOKIE = "mosaic_ref";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
export const CHANNELS = new Set(["yt", "ig", "tt", "kdp", "dm", "fb", "rd"]);

export function safeCode(value: unknown): string {
  return typeof value === "string" && /^[A-Za-z0-9_-]{1,64}$/.test(value) ? value : "";
}

export function parseReferral(ref: unknown, code: unknown) {
  const refStr = typeof ref === "string" ? ref : "";
  const channel = CHANNELS.has(refStr) ? refStr : "";
  // Legacy /get?ref=CODE (and root ?ref=CODE) remain supported.
  // An explicit code always wins, even when invalid: never turn a channel into a code.
  const hasExplicitCode = typeof code === "string" && code.length > 0;
  const referralCode = hasExplicitCode ? safeCode(code) : channel ? "" : safeCode(ref);
  return { channel: hasExplicitCode ? "" : channel, referralCode };
}

export function withParams(base: string, params: Record<string, string>): string {
  const qs = new URLSearchParams(Object.entries(params).filter(([, value]) => value)).toString();
  return qs ? base + (base.includes("?") ? "&" : "?") + qs : base;
}

export function getUrl(channel: string, referralCode: string): string {
  return withParams("/get", { code: safeCode(referralCode), ref: CHANNELS.has(channel) ? channel : "" });
}

export function appUrl(channel: string, referralCode: string): string {
  return withParams("mosaic://", { code: safeCode(referralCode), ref: CHANNELS.has(channel) ? channel : "" });
}

export function readChannelCookie(cookie: string): string {
  const match = cookie.match(/(?:^|;\s*)mosaic_ref=([^;]*)/);
  if (!match) return "";
  try {
    const value = decodeURIComponent(match[1]);
    return CHANNELS.has(value) ? value : "";
  } catch {
    return "";
  }
}

export function rememberChannel(channel: string): void {
  if (CHANNELS.has(channel)) {
    document.cookie = `${CHANNEL_COOKIE}=${channel}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax; Secure`;
  }
}
