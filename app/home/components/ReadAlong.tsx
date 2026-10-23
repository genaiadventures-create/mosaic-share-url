"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Word = { w: string; s: number; e: number };

const AUDIO_SRC = "/story-audio/kayden_ch1.mp3";
const WORDS_SRC = "/story-audio/kayden_ch1.words.json";
export const NARRATION_EVENT = "mosaic:narration";

// Plays one real sentence of the app's own narration on tap and lights each word
// on its recorded timing. Audio never starts on its own.
export default function ReadAlong({ words, label }: { words: Word[]; label: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timingsRef = useRef<Word[]>(words);
  const rafRef = useRef<number>(0);
  const [active, setActive] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const end = words[words.length - 1].e + 0.25;

  const stop = useCallback((reset: boolean) => {
    cancelAnimationFrame(rafRef.current);
    audioRef.current?.pause();
    setPlaying(false);
    window.dispatchEvent(new CustomEvent(NARRATION_EVENT, { detail: false }));
    if (reset) {
      if (audioRef.current) audioRef.current.currentTime = 0;
      setActive(-1);
    }
  }, []);

  const tick = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    const t = a.currentTime;
    if (t >= end || a.ended) {
      stop(true);
      return;
    }
    const list = timingsRef.current;
    let idx = -1;
    for (let i = 0; i < list.length; i++) {
      if (t >= list[i].s) idx = i;
      else break;
    }
    setActive(idx);
    rafRef.current = requestAnimationFrame(tick);
  }, [end, stop]);

  useEffect(() => () => stop(false), [stop]);

  const toggle = async () => {
    if (playing) {
      stop(false);
      return;
    }
    if (!audioRef.current) {
      audioRef.current = new Audio(AUDIO_SRC);
      audioRef.current.preload = "auto";
      // Refresh timings from the source file; fall back to the server-rendered copy.
      fetch(WORDS_SRC)
        .then((r) => (r.ok ? r.json() : null))
        .then((all: Word[] | null) => {
          if (Array.isArray(all) && all.length >= words.length) timingsRef.current = all.slice(0, words.length);
        })
        .catch(() => {});
    }
    try {
      await audioRef.current.play();
      setPlaying(true);
      // One focal motion at a time: the hero loop pauses while the narration plays.
      window.dispatchEvent(new CustomEvent(NARRATION_EVENT, { detail: true }));
      rafRef.current = requestAnimationFrame(tick);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <div className="readalong">
      <button
        type="button"
        className="readalong__btn"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause the narration" : `Play the narration: ${label}`}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {playing ? (
            <>
              <path d="M9 5v14" />
              <path d="M15 5v14" />
            </>
          ) : (
            <path d="M7 4.5v15l12-7.5z" />
          )}
        </svg>
        <span>{playing ? "Pause" : "Listen"}</span>
      </button>
      <p className="story-text readalong__text">
        {words.map((word, i) => (
          <span key={i} className="readalong__word" data-on={i === active ? "true" : undefined}>
            {word.w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
    </div>
  );
}
