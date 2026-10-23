import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt =
  "Mosaic: bedtime stories where your child is the hero. Illustration of a boy astronaut grinning on a snowy planet.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Plain Satoshi 700 on the night colour, next to a real story illustration. No gradients.
export default async function OpengraphImage() {
  const root = process.cwd();
  const [font, art, icon] = await Promise.all([
    readFile(path.join(root, "app/home/og/Satoshi-Bold.ttf")),
    readFile(path.join(root, "public/stories/kayden_astronaut.jpg")),
    readFile(path.join(root, "public/app-icon.png")),
  ]);
  const artSrc = `data:image/jpeg;base64,${art.toString("base64")}`;
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0F0A1E", fontFamily: "Satoshi" }}>
        <div style={{ width: 520, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 48px 56px 64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={iconSrc} width={48} height={48} style={{ borderRadius: 12 }} alt="" />
            <div style={{ color: "#F4F1FA", fontSize: 32 }}>Mosaic</div>
          </div>
          <div style={{ color: "#F4F1FA", fontSize: 64, lineHeight: 1.04, letterSpacing: -1.6 }}>
            Bedtime stories where your child is the hero.
          </div>
          <div style={{ color: "#B0B0B0", fontSize: 26 }}>iPhone and Android. Free to try.</div>
        </div>
        <img src={artSrc} width={680} height={630} style={{ objectFit: "cover", objectPosition: "35% 50%" }} alt="" />
      </div>
    ),
    { ...size, fonts: [{ name: "Satoshi", data: font, weight: 700, style: "normal" }] },
  );
}
