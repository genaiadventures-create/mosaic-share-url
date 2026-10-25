import { notFound } from "next/navigation";

// Marketing-host requests are rewritten to /home/books before this route resolves.
// Other hosts, including share.mosaicai.in, must not serve the book catalogue.
export default function BooksOnOtherHosts() {
  notFound();
}
