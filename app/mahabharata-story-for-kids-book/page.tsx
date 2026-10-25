import { notFound } from "next/navigation";

// Marketing-host requests are rewritten to /home/mahabharata-story-for-kids-book before this route resolves.
// Other hosts, including share.mosaicai.in, must not serve this page.
export default function GeoPageOnOtherHosts() {
  notFound();
}
