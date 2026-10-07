"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/hero-sea-kick.jpg", alt: "Sinan Basim mid bicycle-kick in the sea" },
  { src: "/images/desert-silhouette.jpg", alt: "Sinan Basim silhouetted mid bicycle-kick in the desert at sunset" },
  { src: "/images/qfm-radio.jpg", alt: "Sinan Basim at a Qatar radio station appearance" },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay for text legibility over a full-bleed photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-turf" />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-6 bg-flare" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
