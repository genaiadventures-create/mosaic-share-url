import localFont from "next/font/local";

// Satoshi carries the whole page; it is the only preloaded font.
export const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  weight: "300 900",
  display: "swap",
  variable: "--font-satoshi",
  preload: true,
});

// Kalam is used only for sentences quoted from real stories, so it is not preloaded.
export const kalam = localFont({
  src: "../../public/fonts/Kalam-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-kalam",
  preload: false,
});
