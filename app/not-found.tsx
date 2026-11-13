import Link from "next/link";

// Replaces the framework default 404 so the page has a main landmark and a level-one heading.
export default function NotFound() {
  return (
    <main style={{ textAlign: "center", marginTop: 80, padding: "0 24px" }}>
      <h1>Page not found</h1>
      <p>
        This page doesn&apos;t exist.{" "}
        <Link href="/" className="share-link underline">
          Go to the Mosaic home page
        </Link>
        .
      </p>
    </main>
  );
}
