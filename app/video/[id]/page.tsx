"use client";
import { useEffect, use } from "react";
import { videoDeepLink } from "../../deep-link";
export const dynamic = "force-dynamic";

export default function VideoRedirectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const appLink = videoDeepLink(id);

    useEffect(() => {
        if (!appLink) return;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = appLink;
        }
    }, [appLink]);

    return (
        <div style={{ textAlign: "center", marginTop: 80, fontFamily: "system-ui, sans-serif" }}>
            <h2>Open in Mosaic App</h2>
            <p style={{ marginBottom: 20 }}>
                If you have the Mosaic app installed, this video should open
                automatically.
                <br />
                If not, you can{" "}
                {appLink && (
                    <>
                        <a href={appLink} style={{ color: "#7c3aed" }}>open it in the app</a> or{" "}
                    </>
                )}
                download Mosaic from the app store.
            </p>
            {appLink && (
                <p style={{ margin: "20px 0" }}>
                    <a
                        href={appLink}
                        style={{ fontSize: 18, color: "#7c3aed", fontWeight: "bold", textDecoration: "none" }}
                    >
                        Open in App
                    </a>
                </p>
            )}
            <p style={{ marginTop: 40 }}>
                <a
                    href="https://apps.apple.com/us/app/mosaic-ai/id6751470484"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#333", textDecoration: "none" }}
                >
                    Download for iOS
                </a>
                {" "} | {" "}
                <a
                    href="https://play.google.com/store/apps/details?id=com.gitcuber369rn.Mosaic"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#333", textDecoration: "none" }}
                >
                    Download for Android
                </a>
            </p>
        </div>
    );
}
