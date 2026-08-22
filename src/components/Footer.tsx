import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-turf-line bg-turf">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-wide text-chalk">
              SBN <span className="text-flare">FREESTYLER</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-chalk-dim/70">
              {site.tagline} — based in {site.location}.
            </p>
          </div>

          <div>
            <p className="section-label text-xs uppercase text-gold">Explore</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-chalk-dim/80">
              <Link href="/about-us" className="hover:text-flare">About</Link>
              <Link href="/recent-work" className="hover:text-flare">Recent Work</Link>
              <Link href="/commercial-brands" className="hover:text-flare">Commercial Brands</Link>
              <Link href="/contact-us" className="hover:text-flare">Contact</Link>
            </div>
          </div>

          <div>
            <p className="section-label text-xs uppercase text-gold">Connect</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-chalk-dim/80">
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-flare">
                Instagram
              </a>
              <a href={site.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-flare">
                YouTube
              </a>
              <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-flare">
                TikTok
              </a>
              <a href={`mailto:${site.email}`} className="hover:text-flare">
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="chalk-divider mt-12" />
        <p className="mt-6 text-xs text-chalk-dim/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
