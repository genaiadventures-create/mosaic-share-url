import type { Metadata } from "next";
import ReferralHandler from "./components/ReferralHandler";
import { ANDROID_URL, IOS_URL, getUrl, parseReferral } from "./referral";

type SearchParams = Promise<{ ref?: string; [key: string]: string | string[] | undefined }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await searchParams;
  const ref = typeof params.ref === "string" ? params.ref : undefined;
  const { referralCode } = parseReferral(ref, undefined);
  // Only a real referral code is an invitation; channels (yt/ig/...) and plain visits get the default title.
  const title = referralCode
    ? `${referralCode} invited you to Mosaic`
    : "Mosaic — Create Magical Bedtime Stories in 10 Seconds";

  return {
    title,
    description:
      "AI-powered bedtime stories personalized for your child — with narration and illustrations. Create magical stories in seconds.",
    openGraph: {
      title: "Mosaic — Magical AI Bedtime Stories for Kids",
      description:
        "Create personalized bedtime stories with narration and illustrations in seconds.",
      url: "https://share.mosaicai.in",
      siteName: "Mosaic AI Story Maker",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mosaic — Magical AI Bedtime Stories for Kids",
      description:
        "Create personalized bedtime stories with narration and illustrations in seconds.",
    },
  };
}

function AppleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 512 512" fill="none">
      <path
        d="M48 59.49v393a4.33 4.33 0 007.37 3.07L274 256 55.37 56.42A4.33 4.33 0 0048 59.49z"
        fill="#4285F4"
      />
      <path
        d="M288.32 269.11l-51.55 51.55 164.78 103.72c4.68 4.74 12.16 5.39 17.57 1.2L302 358.38z"
        fill="#34A853"
      />
      <path
        d="M288.32 242.89L302 153.62l-117.33-73.56L288.32 242.89z"
        fill="#FBBC04"
      />
      <path
        d="M401.12 87.42c-5.41-4.19-12.89-3.54-17.57 1.2L236.77 192.34l51.55 50.55L401.12 87.42z"
        fill="#EA4335"
      />
    </svg>
  );
}

function DownloadBadges() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href={IOS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors min-w-[180px] justify-center"
      >
        <AppleIcon />
        <div className="text-left">
          <div className="text-xs text-gray-500 leading-none">Download on the</div>
          <div className="text-sm font-bold leading-tight">App Store</div>
        </div>
      </a>
      <a
        href={ANDROID_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors min-w-[180px] justify-center"
      >
        <PlayIcon />
        <div className="text-left">
          <div className="text-xs text-gray-500 leading-none">Get it on</div>
          <div className="text-sm font-bold leading-tight">Google Play</div>
        </div>
      </a>
    </div>
  );
}

function PhoneMockup({
  gradientFrom,
  gradientTo,
  label,
  storyEmoji,
  offset = false,
}: {
  gradientFrom: string;
  gradientTo: string;
  label: string;
  storyEmoji: string;
  offset?: boolean;
}) {
  return (
    <div
      className={`w-40 md:w-52 bg-[#1a0b2e] rounded-3xl overflow-hidden flex-shrink-0 ${
        offset
          ? "-mt-4 shadow-2xl shadow-[#B793FF]/20 border border-[#B793FF]/40"
          : "shadow-xl shadow-[#7c3aed]/20 border border-[#7c3aed]/30"
      }`}
    >
      <div className="h-6 bg-[#0f0a1e] flex items-center justify-center">
        <div className="w-16 h-1.5 bg-white/10 rounded-full" />
      </div>
      <div className="p-3">
        <div
          className="rounded-xl h-28 md:h-32 flex items-center justify-center mb-3 text-5xl"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          {storyEmoji}
        </div>
        <div className="text-xs font-semibold mb-2 text-[#B793FF] truncate">{label}</div>
        <div className="space-y-1.5">
          <div className="h-2 bg-white/10 rounded-full w-full" />
          <div className="h-2 bg-white/10 rounded-full w-4/5" />
          <div className="h-2 bg-white/10 rounded-full w-3/5" />
        </div>
        <div
          className="mt-3 rounded-lg h-7 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
        >
          <span className="text-white text-xs font-semibold">Play Story</span>
        </div>
      </div>
    </div>
  );
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const ref = typeof params.ref === "string" ? params.ref : undefined;
  const { channel, referralCode } = parseReferral(ref, undefined);

  return (
    <main className="min-h-screen bg-[#0f0a1e] text-white">
      <ReferralHandler referralCode={referralCode} channel={channel} />

      {referralCode && (
        <div className="bg-[#7c3aed] text-white text-center py-3 px-4 text-sm font-semibold">
          You were invited by{" "}
          <span className="font-bold uppercase tracking-wide">{referralCode}</span>!
          Download Mosaic to get started.
        </div>
      )}

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#B793FF] flex items-center justify-center text-white font-bold text-sm select-none">
            M
          </div>
          <span className="font-semibold text-lg tracking-tight">Mosaic</span>
        </div>
        <a
          href={IOS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#0f0a1e] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#B793FF] hover:text-white transition-colors"
        >
          Download Free
        </a>
      </nav>

      {/* Hero */}
      <section className="relative px-6 py-16 md:py-24 text-center max-w-4xl mx-auto overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
            style={{ background: "#7c3aed" }}
          />
        </div>

        <div className="relative">
          <div className="inline-block bg-[#7c3aed]/20 border border-[#7c3aed]/40 text-[#B793FF] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            AI-Powered Children&apos;s Stories
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Create Magical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#B793FF]">
              Bedtime Stories
            </span>
            <br />
            in 10 Seconds
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            AI-powered stories personalized for your child — with narration and
            illustrations. Perfect for bedtime, every single night.
          </p>

          <DownloadBadges />

          {referralCode && (
            <div className="mt-6">
              <a
                href={getUrl(channel, referralCode)}
                className="inline-flex items-center gap-2 bg-[#7c3aed] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#6d28d9] transition-colors text-lg"
              >
                Open in Mosaic App
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Social proof */}
      <div className="text-center py-4 px-6">
        <p className="text-gray-400 text-sm">
          <span className="text-[#B793FF] font-semibold">
            AI bedtime stories with narration & illustrations
          </span>
          {" · "}
          <span className="text-yellow-400 font-semibold">
            Personalized for every child
          </span>
          {" · "}
          <span className="text-green-400 font-semibold">
            Safe & ad-free
          </span>
        </p>
      </div>

      {/* Phone mockups */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="flex justify-center items-end gap-3 md:gap-6">
          <PhoneMockup
            gradientFrom="#4c1d95"
            gradientTo="#7c3aed"
            label="Dragon's Quest"
            storyEmoji="&#x1F409;"
          />
          <PhoneMockup
            gradientFrom="#7c3aed"
            gradientTo="#B793FF"
            label="The Magical Forest"
            storyEmoji="&#x1F984;"
            offset
          />
          <PhoneMockup
            gradientFrom="#1e40af"
            gradientTo="#7c3aed"
            label="Space Explorer"
            storyEmoji="&#x1F680;"
          />
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
          Everything your child needs
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#B793FF]">
            for the perfect bedtime
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          Each story is created fresh — never repeated, always personal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a0b2e] border border-[#7c3aed]/20 rounded-2xl p-6 hover:border-[#7c3aed]/50 transition-colors group">
            <div className="w-12 h-12 bg-[#7c3aed]/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#7c3aed]/25 transition-colors">
              <svg
                className="w-6 h-6 text-[#B793FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Personalized</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stories starring your child by name, tailored to their age,
              interests, and favorite themes. No two stories are ever the same.
            </p>
          </div>

          <div className="bg-[#1a0b2e] border border-[#B793FF]/30 rounded-2xl p-6 hover:border-[#B793FF]/60 transition-colors group">
            <div className="w-12 h-12 bg-[#B793FF]/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B793FF]/25 transition-colors">
              <svg
                className="w-6 h-6 text-[#B793FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Narrated</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              High-quality audio narration brings every story to life — perfect
              for little ones who can&apos;t read yet, or just love to listen.
            </p>
          </div>

          <div className="bg-[#1a0b2e] border border-[#7c3aed]/20 rounded-2xl p-6 hover:border-[#7c3aed]/50 transition-colors group">
            <div className="w-12 h-12 bg-[#7c3aed]/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#7c3aed]/25 transition-colors">
              <svg
                className="w-6 h-6 text-[#B793FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Illustrated</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unique AI-generated illustrations for every story make reading a
              visual adventure your child will want to revisit.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="px-6 py-8 max-w-3xl mx-auto">
        <div className="bg-[#1a0b2e] border border-[#7c3aed]/20 rounded-2xl p-6 md:p-8 text-center">
          <div className="text-[#B793FF] font-semibold text-sm mb-2 uppercase tracking-wide">
            Free to start
          </div>
          <h3 className="text-2xl font-bold mb-2">
            5 stories every month, free forever
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Upgrade to Premium for 30 generations/month at{" "}
            <span className="text-white font-semibold">$4.99/month</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B793FF] inline-block" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B793FF] inline-block" />
              Safe for children 4+
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B793FF] inline-block" />
              COPPA compliant
            </span>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-[700px] h-64 rounded-full blur-3xl opacity-10"
            style={{ background: "#7c3aed" }}
          />
        </div>
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Start your first story tonight
          </h2>
          <p className="text-gray-400 mb-8 max-w-sm mx-auto">
            Download free. Your child&apos;s first magical bedtime story is
            just 10 seconds away.
          </p>
          <DownloadBadges />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>
          &copy; 2025 Mosaic AI Story Maker &nbsp;&middot;&nbsp;{" "}
          <a
            href="mailto:support@mosaicai.in"
            className="hover:text-white transition-colors"
          >
            support@mosaicai.in
          </a>
          &nbsp;&middot;&nbsp;{" "}
          <a href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          &nbsp;&middot;&nbsp;{" "}
          <a
            href="/terms-and-conditions"
            className="hover:text-white transition-colors"
          >
            Terms
          </a>
        </p>
      </footer>
    </main>
  );
}
