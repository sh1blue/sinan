"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const links = [
  { label: "Commercial/Social", href: "/commercial-brands" },
  { label: "About Me", href: "/about-us" },
  { label: "Recent Work", href: "/recent-work" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact-us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // On the homepage, nav starts transparent over the hero and becomes solid on scroll.
  // On every other page, it's always solid.
  const transparent = isHome && !scrolled;
  const textColor = transparent ? "text-white/90" : "text-chalk-dim";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-turf-line/60 bg-turf/95 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Stacked two-line logo, matching reference layout */}
        <Link href="/" className="leading-tight">
          <span
            className={`block font-display text-xl tracking-wide ${
              transparent ? "text-white" : "text-chalk"
            }`}
          >
            SINAN BASIM
          </span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-flare">
            Freestyle Football
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setHireOpen(true)}
            onMouseLeave={() => setHireOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition hover:text-flare ${textColor}`}>
              Freestyle Football Hire
              <svg width="10" height="6" viewBox="0 0 10 6" className="mt-0.5 fill-current">
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </button>
            {hireOpen && (
              <div className="absolute left-0 top-full w-64 border border-turf-line bg-turf-light py-2 shadow-xl">
                {site.navHire.map((h) => (
                  <Link
                    key={h.href}
                    href={h.href}
                    className="block px-4 py-2.5 text-sm text-chalk-dim transition hover:bg-turf hover:text-flare"
                  >
                    {h.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition hover:text-flare ${textColor}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 transition ${transparent ? "bg-white" : "bg-chalk"} ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 transition ${transparent ? "bg-white" : "bg-chalk"} ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 transition ${transparent ? "bg-white" : "bg-chalk"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-turf-line bg-turf md:hidden">
          <nav className="flex flex-col px-5 py-4">
            <button
              onClick={() => setHireOpen(!hireOpen)}
              className="flex items-center justify-between border-b border-turf-line/50 py-3 text-left text-chalk-dim"
            >
              Freestyle Football Hire
              <span>{hireOpen ? "−" : "+"}</span>
            </button>
            {hireOpen &&
              site.navHire.map((h) => (
                <Link
                  key={h.href}
                  href={h.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-turf-line/30 py-2.5 pl-4 text-sm text-chalk-dim/80"
                >
                  {h.label}
                </Link>
              ))}
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-turf-line/50 py-3 text-chalk-dim"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
