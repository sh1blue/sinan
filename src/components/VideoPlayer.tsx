"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setPlaying(true);
  }

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[380px] overflow-hidden bg-ink">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        preload="metadata"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-flare/90 shadow-lg transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-7 w-7">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
