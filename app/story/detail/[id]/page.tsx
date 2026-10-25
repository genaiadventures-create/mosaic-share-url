"use client";
import { useEffect, use } from "react";
import { storyDeepLink } from "../../../deep-link";

export default function StoryDetailRedirectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const appLink = storyDeepLink(id);

  useEffect(() => {
    if (!appLink) return;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = appLink;
      setTimeout(() => {
        // fallback UI could be shown after a delay if desired
      }, 2000);
    }
  }, [appLink]);

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h2>Open in Mosaic App</h2>
      <p>
        If you have the Mosaic app installed, this story should open
        automatically.
        <br />
        If not, you can{" "}
        {appLink && (
          <>
            <a href={appLink}>open it in the app</a> or{" "}
          </>
        )}
        download Mosaic from the app store.
      </p>
      {appLink && (
        <p>
          <a
            href={appLink}
            style={{ fontSize: 18, color: "#7c3aed" }}
          >
            Open in App
          </a>
        </p>
      )}
      <p>
        <a
          href="https://apps.apple.com/us/app/mosaic-ai/id6751470484"
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

export const dynamic = "force-dynamic";
