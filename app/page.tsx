
"use client";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";



function StoryRedirectInner() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;
    window.location.href = `mosaic://story/storypage/${id}`;
    const timer = setTimeout(() => {
      // Optionally, redirect to your app store page or show a message
      // window.location.href = "https://play.google.com/store/apps/details?id=your.app.id";
    }, 2000);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h2>Opening in Mosaic app...</h2>
      <p>If nothing happens, <a href="https://play.google.com/store/apps/">install the app</a>.</p>
    </div>
  );
}

export default function StoryRedirect() {
  return (
    <Suspense>
      <StoryRedirectInner />
    </Suspense>
  );
}