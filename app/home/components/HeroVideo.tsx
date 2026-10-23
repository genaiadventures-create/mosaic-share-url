"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NARRATION_EVENT } from "./ReadAlong";

type Mode = "poster" | "auto" | "manual";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

function shouldSkipAutoplay(): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  if (conn?.saveData) return true;
  return conn?.effectiveType ? /(^|-)2g$/.test(conn.effectiveType) : false;
}

// The poster is the LCP element and is rendered by next/image on the server.
// The muted loop is attached only after load, only when visible, and never under
// reduced motion or Save-Data; those visitors get a "Play preview" button instead.
export default function HeroVideo({ alt }: { alt: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<Mode>("poster");
  const [attached, setAttached] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [narrating, setNarrating] = useState(false);

  useEffect(() => {
    const onNarration = (e: Event) => setNarrating(Boolean((e as CustomEvent<boolean>).detail));
    window.addEventListener(NARRATION_EVENT, onNarration);
    return () => window.removeEventListener(NARRATION_EVENT, onNarration);
  }, []);

  useEffect(() => {
    if (shouldSkipAutoplay()) {
      setMode("manual");
      return;
    }
    const start = () => setMode("auto");
    if (document.readyState === "complete") {
      const id = window.setTimeout(start, 200);
      return () => window.clearTimeout(id);
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  // Attach the source when the hero is in view, and pause it when it leaves or the tab hides.
  useEffect(() => {
    if (mode !== "auto" || userPaused || narrating) {
      videoRef.current?.pause();
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    let visible = false;
    const sync = () => {
      const v = videoRef.current;
      if (!v) return;
      if (visible && !document.hidden) v.play().catch(() => setPlaying(false));
      else v.pause();
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) setAttached(true);
        sync();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [mode, userPaused, narrating, attached]);

  const toggle = () => {
    const v = videoRef.current;
    if (!attached) {
      setAttached(true);
      setUserPaused(false);
      if (mode === "manual") setMode("auto");
      return;
    }
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().catch(() => {});
    } else {
      setUserPaused(true);
      v.pause();
    }
  };

  // Labelled as video, not sound, so it is never confused with the narration's Listen button.
  const label = playing ? "Pause the video" : "Play the video preview";

  return (
    <div ref={wrapRef} className="hero-media">
      <Image
        src="/video/kayden_hero_poster.jpg"
        alt={alt}
        width={960}
        height={540}
        priority
        fetchPriority="high"
        sizes="(min-width: 1024px) 58vw, 100vw"
        className="hero-media__layer"
      />
      {attached && (
        <video
          ref={videoRef}
          className="hero-media__layer hero-media__video"
          data-playing={playing ? "true" : "false"}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          poster="/video/kayden_hero_poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src="/video/kayden_hero.webm" type="video/webm" />
          <source src="/video/kayden_hero.mp4" type="video/mp4" />
        </video>
      )}
      {mode !== "poster" && (
        <button type="button" className="hero-media__control" onClick={toggle} aria-label={label}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {playing ? (
              <>
                <path d="M9 5v14" />
                <path d="M15 5v14" />
              </>
            ) : (
              <path d="M7 4.5v15l12-7.5z" />
            )}
          </svg>
          <span>{playing ? "Pause video" : "Play preview"}</span>
        </button>
      )}
    </div>
  );
}
