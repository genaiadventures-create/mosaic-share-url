"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirect old incoming /#books links on mount; in-page anchor clicks still scroll.
export default function BooksHashRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (window.location.hash === "#books") router.replace("/books");
  }, [router]);
  return null;
}
