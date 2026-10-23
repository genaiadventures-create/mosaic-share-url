import { ANDROID_URL, IOS_URL } from "../content";

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 3.2v17.6c0 .5.5.8.9.6L20 12.6c.4-.3.4-.9 0-1.2L5.4 2.6c-.4-.2-.9.1-.9.6z" />
      <path d="M4.8 3.1 15 13.3M4.8 20.9 15 10.7" />
    </svg>
  );
}

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`badges ${className}`}>
      <a className="badge" href={IOS_URL} target="_blank" rel="noopener noreferrer" aria-label="Download Mosaic on the App Store">
        <AppleGlyph />
        <span className="badge__text">
          <span className="badge__small">Download on the</span>
          <span className="badge__big">App Store</span>
        </span>
      </a>
      <a className="badge" href={ANDROID_URL} target="_blank" rel="noopener noreferrer" aria-label="Get Mosaic on Google Play">
        <PlayGlyph />
        <span className="badge__text">
          <span className="badge__small">Get it on</span>
          <span className="badge__big">Google Play</span>
        </span>
      </a>
    </div>
  );
}
