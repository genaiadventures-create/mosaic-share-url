"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ANDROID_URL, IOS_URL, appUrl, parseReferral, readChannelCookie, rememberChannel, withParams } from "../referral";

function GetPageInner() {
  const searchParams = useSearchParams();
  const { channel: explicitChannel, referralCode } = parseReferral(searchParams.get("ref"), searchParams.get("code"));
  const [channel, setChannel] = useState(explicitChannel);

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

  const appDeepLink = appUrl(channel, referralCode);
  const iosUrl = withParams(IOS_URL, { ref: channel });
  const androidUrl = withParams(ANDROID_URL, { ref: channel });

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#ffffff",
      }}
    >
      {/* Logo / headline */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: "bold",
            margin: "0 0 8px",
            color: "#ffffff",
          }}
        >
          Mosaic AI
        </h1>
        <p style={{ color: "#9ca3af", fontSize: 16, margin: 0 }}>
          AI-powered bedtime stories for children
        </p>
      </div>

      {/* Referral code pill */}
      {referralCode && (
        <div
          style={{
            backgroundColor: "rgba(162, 89, 255, 0.1)",
            border: "1px solid #A259FF",
            borderRadius: 16,
            padding: "20px 32px",
            marginBottom: 32,
            textAlign: "center",
            maxWidth: 320,
            width: "100%",
          }}
        >
          <p
            style={{
              color: "#9ca3af",
              fontSize: 13,
              margin: "0 0 8px",
            }}
          >
            Your friend's referral code
          </p>
          <p
            style={{
              color: "#A259FF",
              fontSize: 28,
              fontWeight: "bold",
              letterSpacing: "0.2em",
              fontFamily: "monospace",
              margin: "0 0 8px",
            }}
          >
            {referralCode}
          </p>
          <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
            Enter this during signup to get 5 free story tokens
          </p>
        </div>
      )}

      {/* Store badges */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: "100%",
          maxWidth: 300,
          marginBottom: 24,
        }}
      >
        <a
          href={iosUrl}
          style={{
            display: "block",
            backgroundColor: "#ffffff",
            color: "#111111",
            borderRadius: 14,
            padding: "14px 24px",
            fontWeight: "600",
            fontSize: 16,
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          Download on the App Store
        </a>
        <a
          href={androidUrl}
          style={{
            display: "block",
            backgroundColor: "#ffffff",
            color: "#111111",
            borderRadius: 14,
            padding: "14px 24px",
            fontWeight: "600",
            fontSize: 16,
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          Get it on Google Play
        </a>
      </div>

      {/* Already have the app */}
      <a
        href={appDeepLink}
        style={{
          color: "#A259FF",
          textDecoration: "underline",
          fontSize: 14,
        }}
      >
        Already have the app? Open it here →
      </a>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "#111111",
          }}
        />
      }
    >
      <GetPageInner />
    </Suspense>
  );
}
