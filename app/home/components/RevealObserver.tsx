"use client";

import { useEffect } from "react";

// One observer for every [data-reveal] block. Blocks already on screen at load are never
// hidden (no flash, no layout work); blocks below the fold are set to their start state and
// reveal once at 20% visible. Never re-animates. Off entirely under reduced motion.
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const vh = window.innerHeight;
    const pending = els.filter((el) => el.getBoundingClientRect().top > vh * 0.9);
    if (!pending.length) return;
    pending.forEach((el) => el.setAttribute("data-reveal", "pending"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "done");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
