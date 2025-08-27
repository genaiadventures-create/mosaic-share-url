
"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";


export default function StoryRedirect() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;
    // Try to open the app via custom scheme
    window.location.href = `mosaic://story/storypage/${id}`;
    // Fallback: after 2 seconds, show a message or redirect to app store/landing
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