import { notFound } from "next/navigation";

// Marketing-host requests are rewritten to /home/best-bedtime-story-apps before this route resolves.
// Other hosts, including share.mosaicai.in, must not serve this page.
export default function GeoPageOnOtherHosts() {
  notFound();
}
