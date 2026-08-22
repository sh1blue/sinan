"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

export default function InstagramEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function process() {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }

    const existing = document.getElementById("instagram-embed-script");
    if (existing) {
      process();
      return;
    }

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, [url]);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-[540px]">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: "#FFF", border: 0, margin: "0 auto", maxWidth: "540px", width: "100%" }}
      />
    </div>
  );
}
