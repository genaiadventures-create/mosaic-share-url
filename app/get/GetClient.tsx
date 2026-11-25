"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { platformOf, variantOf } from "../get-landing.ts";
import { ANDROID_URL, IOS_URL, appUrl, parseReferral, readChannelCookie, rememberChannel, withParams } from "../referral.ts";
import GetLanding from "./GetLanding";

// Client-side half of /get. Same behaviour as before the redesign: ?ref= / ?code= parsing, the mosaic_ref
// sessionStorage entry, the 30-day channel cookie, and the store and deep links with ref/code appended.
export default function GetClient() {
  const searchParams = useSearchParams();
  const { channel: explicitChannel, referralCode } = parseReferral(searchParams.get("ref"), searchParams.get("code"));
  // This runs only in the browser (the page bails out of prerendering at useSearchParams), so reading the
  // cookie and user agent here matches what the inline bootstrap script already put on screen.
  const [channel, setChannel] = useState(() => explicitChannel || readChannelCookie(document.cookie));
  const [platform] = useState(() => platformOf(navigator.userAgent, navigator.maxTouchPoints));

  useEffect(() => {
    if (referralCode) {
      sessionStorage.setItem("mosaic_ref", referralCode);
    }
  }, [referralCode]);

  useEffect(() => {
    if (explicitChannel) {
      rememberChannel(explicitChannel);
      setChannel(explicitChannel);
    } else {
      setChannel(readChannelCookie(document.cookie));
    }
  }, [explicitChannel]);

  return (
    <GetLanding
      mode="live"
      variant={variantOf(channel)}
      platform={platform}
      referralCode={referralCode}
      iosUrl={withParams(IOS_URL, { ref: channel })}
      androidUrl={withParams(ANDROID_URL, { ref: channel })}
      appDeepLink={appUrl(channel, referralCode)}
    />
  );
}
