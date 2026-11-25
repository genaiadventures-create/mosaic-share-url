import localFont from "next/font/local";

// The same self-hosted Satoshi file the marketing site uses (one request, shared cache). Kalam is not
// loaded here: it is 400 KB and /get has no need for a handwriting face.
export const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  weight: "300 900",
  display: "swap",
  variable: "--font-satoshi",
  preload: true,
});
