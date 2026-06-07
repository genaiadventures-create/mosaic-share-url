// app/story/[id]/page.tsx

"use client";
import { useEffect, use } from "react";
export const dynamic = "force-dynamic";

export default function StoryRedirectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  useEffect(() => {
    const appLink = `mosaic://story/detail/${id}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = appLink;
      setTimeout(() => {
        // Optionally show fallback after delay
      }, 2000);
    }
  }, [id]);

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h2>Open in Mosaic App</h2>
      <p>
        If you have the Mosaic app installed, this story should open
        automatically.
        <br />
        If not, you can{" "}
        <a href={`mosaic://story/detail/${id}`}>open it in the app</a> or
        download Mosaic from the app store.
      </p>
      <p>
        <a
          href={`mosaic://story/detail/${id}`}
          style={{ fontSize: 18, color: "#7c3aed" }}
        >
          Open in App
        </a>
      </p>
      <p>
        <a
          href="https://apps.apple.com/app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download for iOS
        </a>{" "}
        |{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.gitcuber369rn.Mosaic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download for Android
        </a>
      </p>
    </div>
  );
}

// Mosaic Web app
