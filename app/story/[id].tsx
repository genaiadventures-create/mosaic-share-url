import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StoryRedirectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    // Mobile deep link
    const appLink = `mosaic://story/storypage/${id}`;
    // Fallback: open app if on mobile, else stay on web
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = appLink;
      // Optionally, after a delay, show fallback if app not installed
      setTimeout(() => {
        // Stay on this page as fallback
      }, 2000);
    }
    // else: show fallback web content below
  }, [id, router]);

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h2>Open in Mosaic App</h2>
      <p>
        If you have the Mosaic app installed, this story should open automatically.<br />
        If not, you can <a href={`mosaic://story/storypage/${id}`}>open it in the app</a> or download Mosaic from the app store.
      </p>
      <p>
        <a href={`mosaic://story/storypage/${id}`} style={{ fontSize: 18, color: "#7c3aed" }}>
          Open in App
        </a>
      </p>
      <p>
        <a href="https://apps.apple.com/app" target="_blank" rel="noopener noreferrer">Download for iOS</a> |{" "}
        <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">Download for Android</a>
      </p>
    </div>
  );
}