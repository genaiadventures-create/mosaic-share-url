import { notFound } from "next/navigation";

// Marketing-host requests are rewritten to /home/color-and-write-books-ages-5-8 before this route resolves.
// Other hosts, including share.mosaicai.in, must not serve this page.
export default function GeoPageOnOtherHosts() {
  notFound();
}
