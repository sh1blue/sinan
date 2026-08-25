import Image from "next/image";
import PageHero from "@/components/PageHero";
import InstagramEmbed from "@/components/InstagramEmbed";
import { site } from "@/data/site";

export const metadata = { title: `Recent Work | ${site.name}` };

const photos = [
  { src: "/images/hero-sea-kick.jpg", alt: "Bicycle kick performed in the sea" },
  { src: "/images/westbay-skyline-pose.jpg", alt: "Freestyle pose against the West Bay Doha skyline" },
  { src: "/images/barca-jersey-headstall.jpg", alt: "Ball balance on the face wearing a Barça jersey" },
  { src: "/images/doha-street-pose.jpg", alt: "Freestyle pose on a street in Doha, Qatar" },
  { src: "/images/desert-silhouette.jpg", alt: "Silhouetted bicycle kick at sunset in the desert" },
  { src: "/images/qfm-radio.jpg", alt: "Sinan Basim at a Qatar radio station appearance" },
];

const reels = [
  {
    title: "22M View Reel",
    description: "One of Sinan's most-watched pieces of freestyle content.",
    url: "https://www.instagram.com/reel/CWDubbEh1zh/",
  },
  {
    title: "5M View Reel",
    description: "Another breakout reel showing off ball control and flair.",
    url: "https://www.instagram.com/reel/CO4w-MsApJf/",
  },
  {
    title: "With I. M. Vijayan",
    description: "Performing with and in front of the Indian football legend.",
    url: "https://www.instagram.com/reel/CgyxXOyAfzl/",
  },
  {
    title: "Gymslave × Kerala Blasters FC",
    description: "Early brand partnership promoting official KBFC masks.",
    url: "https://www.instagram.com/tv/CMMrY8WAuz1/",
  },
];

export default function RecentWork() {
  return (
    <>
      <PageHero
        eyebrow="Watch"
        title="Recent Work"
        intro="A selection of performances, brand campaigns, and viral moments — full library on Instagram."
      />

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <p className="section-label text-xs uppercase text-gold">Photos</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {photos.map((p) => (
            <div key={p.src} className="relative aspect-[4/5] overflow-hidden">
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-label text-xs uppercase text-gold">Videos</p>
        <div className="mt-6 grid gap-10 sm:grid-cols-2">
          {reels.map((r) => (
            <div key={r.url}>
              <InstagramEmbed url={r.url} />
              <h3 className="font-display mt-3 text-lg text-chalk">{r.title}</h3>
              <p className="mt-1 text-sm text-chalk-dim/60">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-turf-line pt-10 text-center">
          <p className="text-chalk-dim/70">
            For the full library of content, follow along on Instagram, YouTube, and TikTok.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-flare">
              Instagram
            </a>
            <a href={site.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-flare">
              YouTube
            </a>
            <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-flare">
              TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
