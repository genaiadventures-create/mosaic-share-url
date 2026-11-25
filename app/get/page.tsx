import type { Metadata } from "next";
import { Suspense } from "react";
import GetClient from "./GetClient";
import GetLanding from "./GetLanding";
import { ANDROID_URL, IOS_URL } from "../referral.ts";

export const metadata: Metadata = {
  title: "Get Mosaic: bedtime stories starring your child",
  description:
    "Mosaic is an iPhone and Android app that writes, illustrates and reads aloud a new bedtime story starring your child. Your first 5 stories are free.",
};

// Still a static page. The Suspense fallback below is the HTML every visitor receives, with the real
// content in it; GetClient then takes over in the browser once it can read the query string.
export default function Page() {
  return (
    <Suspense
      fallback={
        <GetLanding
          mode="static"
          variant="general"
          platform="desktop"
          referralCode=""
          iosUrl={IOS_URL}
          androidUrl={ANDROID_URL}
          appDeepLink="mosaic://"
        />
      }
    >
      <GetClient />
    </Suspense>
  );
}
