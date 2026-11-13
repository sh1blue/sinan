import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import StatMarquee from "@/components/StatMarquee";
import VideoPlayer from "@/components/VideoPlayer";
import { site } from "@/data/site";

const siteUrl = "https://sbnfreestyler.com";

export const metadata = {
  title: {
    absolute: "Football Freestyler Qatar | Sinan Basim",
  },
  description:
    "Book Sinan Basim, a football freestyler based in Doha, for live shows, corporate events, sports events and brand activations across Qatar.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website" as const,
    url: siteUrl,
    title: "Football Freestyler Qatar | Sinan Basim",
    description:
      "Live football freestyle performances by Sinan Basim for corporate events, sports events and brand activations across Qatar.",
    images: [
      {
        url: "/images/hero-sea-kick.jpg",
        width: 1200,
        height: 630,
        alt: "Sinan Basim performing a football freestyle bicycle kick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Football Freestyler Qatar | Sinan Basim",
    description:
      "Book Sinan Basim for football freestyle performances and event entertainment across Qatar.",
    images: ["/images/hero-sea-kick.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#sinan-basim`,
  name: "Sinan Basim",
  alternateName: "SBN Freestyler",
  url: siteUrl,
  image: `${siteUrl}/images/hero-sea-kick.jpg`,
  jobTitle: "Football Freestyler and Content Creator",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Doha",
    addressCountry: "QA",
  },
  sameAs: [site.socials.instagram, site.socials.youtube, site.socials.tiktok],
  knowsAbout: [
    "Football freestyle",
    "Freestyle football performances",
    "Sports entertainment",
    "Brand activations",
    "Event performances",
  ],
};

const recentWorkVideos = [
  {
    title: "22M View Reel",
    description: "One of Sinan's most-watched pieces of freestyle content.",
    src: "/videos/SaveClip.App_AQOlQP5DQP74GYuu56MBw-YHjdU0-0B5PGtl7Z4dwePFb-WZfKoIjkJVdwTwKf4iA5wePAR2_JnUibtLPe1inUeh8KY4z61bvGmx2ic.mp4",
  },
  {
    title: "Baladna Qatar Fan Zone",
    description: "FIFA World Cup Qatar 2022 Fan Zone performance.",
    src: "/videos/baladna_qatar.mp4",
  },
  {
    title: "With I. M. Vijayan",
    description: "Performing with and in front of the Indian football legend.",
    src: "/videos/with_im_vijayan.mp4",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden bg-turf">
        {/* Mobile hero */}
        <div className="relative flex h-[88vh] min-h-[560px] w-full flex-col justify-end overflow-hidden md:hidden">
          <Image
            src="/images/hero-sea-kick.jpg"
            alt="Sinan Basim performing a football freestyle bicycle kick"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-turf via-turf/50 to-turf/10" />
          <div className="relative z-10 px-5 pb-14">
            <p className="section-label text-xs uppercase text-gold">Sinan Basim · Doha, Qatar</p>
            <h1 className="font-display mt-3 text-5xl leading-[0.92] text-chalk">
              FOOTBALL
              <br />
              <span className="text-flare">FREESTYLER</span>
              <br />
              <span className="text-2xl tracking-[0.08em] text-chalk">IN QATAR</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-chalk-dim/90">
              Live football freestyle performances for events, brands and audiences across Qatar.
              Discover Sinan's work and enquire about a booking.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="bg-flare px-6 py-3 font-medium text-turf transition hover:bg-flare-dark"
              >
                Book Sinan
              </Link>
              <Link
                href="/about-us"
                className="border border-chalk-dim/40 px-6 py-3 font-medium text-chalk transition hover:border-flare hover:text-flare"
              >
                The Story
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop hero with slideshow */}
        <div className="relative hidden h-[92vh] min-h-[680px] w-full md:block">
          <HeroSlideshow />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
            <p className="section-label text-xs uppercase tracking-[0.2em] text-gold">
              SINAN BASIM · DOHA, QATAR
            </p>
            <h1 className="font-display mt-4 text-7xl leading-[0.95] text-chalk lg:text-8xl">
              FOOTBALL FREESTYLER
            </h1>
            <p className="font-display mt-3 text-2xl tracking-[0.08em] text-flare lg:text-3xl">
              IN QATAR
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-chalk-dim/90 md:text-lg">
              Live football freestyle performances for events, brands and audiences across Qatar.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="bg-flare px-7 py-3.5 font-medium text-turf transition hover:bg-flare-dark"
              >
                Book Sinan
              </Link>
              <Link
                href="/about-us"
                className="border border-white/40 px-7 py-3.5 font-medium text-white transition hover:border-flare hover:text-flare"
              >
                The Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAT MARQUEE */}
      <StatMarquee />

      {/* QATAR SERVICE INTRO */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="section-label text-xs uppercase text-gold">Football Freestyle in Qatar</p>
            <h2 className="font-display mt-3 text-4xl leading-tight text-chalk md:text-5xl">
              Skill that brings an event to life.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-chalk-dim/80">
            <p>
              Looking for a football freestyler in Qatar? Sinan Basim brings live football
              freestyle performances to events in Doha and across Qatar, combining technical ball
              skills, creative tricks and audience-focused entertainment.
            </p>
            <p>
              From corporate gatherings and brand activations to sports events and private
              celebrations, each performance can be shaped around the event, audience and setting.
              Explore the show options below or get in touch to discuss your event.
            </p>
            <Link
              href="/contact-us"
              className="inline-block border-b border-flare pb-1 text-sm font-medium text-flare"
            >
              Enquire about a performance →
            </Link>
          </div>
        </div>
      </section>

      {/* HIRE */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="section-label text-xs uppercase text-gold">Events & Entertainment in Qatar</p>
        <h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">
          Football Freestyle for Every Occasion
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-chalk-dim/75">
          Choose a performance for your event, from corporate entertainment and product
          activations to sports occasions, weddings and private celebrations.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden border border-turf-line bg-turf-line sm:grid-cols-2">
          {site.navHire.map((s) => {
            const descriptions: Record<string, string> = {
              "/freestyle-football-hire/corporate-events":
                "Ball skills built for boardrooms, launches, and stages — a live act that gets a room's attention in under a minute.",
              "/freestyle-football-hire/product-activations":
                "From brand mascots to full campaign shoots — freestyle football as a hook for your product story.",
              "/freestyle-football-hire/sports-events":
                "Half-time entertainment and fan-zone performances for clubs, tournaments, and match days.",
              "/freestyle-football-hire/weddings-birthdays":
                "A surprise act that turns any celebration into something guests didn't expect.",
            };
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-turf p-8 transition hover:bg-turf-light"
              >
                <h3 className="font-display text-2xl text-chalk group-hover:text-flare">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm text-chalk-dim/70">{descriptions[s.href]}</p>
                <span className="mt-4 inline-block text-sm text-gold">Learn more →</span>
              </Link>
            );
          })}
        </div>
      </section>


      <div className="chalk-divider mx-auto max-w-6xl" />


      {/* EXPERIENCE & CREDIBILITY */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/doha-street-pose.jpg"
              alt="Sinan Basim performing a football freestyle pose in Doha, Qatar"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="section-label text-xs uppercase text-gold">Experience & Recognition</p>
            <h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">
              From Qatar's Fan Zones to a Global Audience
            </h2>
            <p className="mt-5 text-base leading-relaxed text-chalk-dim/80">
              Sinan Basim has brought football freestyle to major sporting events in Qatar,
              including the FIFA World Cup Qatar 2022 Fan Zone at Baladna Al Khor and the
              AFC Asian Cup 2023 Fan Zone. His freestyle content has also reached a wider
              audience, with one reel passing 22 million views.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-flare pl-4">
                <p className="font-display text-lg text-chalk">FIFA World Cup 2022</p>
                <p className="mt-1 text-sm text-chalk-dim/65">Baladna Al Khor Fan Zone</p>
              </div>
              <div className="border-l-2 border-flare pl-4">
                <p className="font-display text-lg text-chalk">AFC Asian Cup 2023</p>
                <p className="mt-1 text-sm text-chalk-dim/65">Fan Zone performance</p>
              </div>
            </div>
            <Link
              href="/about-us"
              className="mt-7 inline-block border-b border-flare pb-1 text-sm font-medium text-flare"
            >
              Discover Sinan's journey →
            </Link>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-y border-turf-line bg-turf-light py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label text-center text-xs uppercase text-gold">Trusted By</p>
          <div className="mt-8 grid grid-cols-3 items-center gap-6 sm:grid-cols-4 md:grid-cols-6">
            {site.logoBrands.map((b) => (
              <div
                key={b.name}
                className="relative flex aspect-square items-center justify-center overflow-hidden bg-chalk/5 p-3 grayscale transition hover:grayscale-0"
                title={b.name}
              >
                <Image src={b.logo} alt={`${b.name} logo`} fill className="object-contain p-3" />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {site.brands.map((b) => (
              <span key={b} className="font-display text-base text-chalk-dim/50 md:text-lg">
                {b}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/commercial-brands" className="text-sm font-medium text-flare">
              View commercial work →
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="section-label text-xs uppercase text-gold">Watch</p>
            <h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">Recent Work</h2>
          </div>
          <Link href="/recent-work" className="hidden text-sm font-medium text-flare md:block">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {recentWorkVideos.map((v) => (
            <div key={v.src}>
              <VideoPlayer src={v.src} title={v.title} />
              <h3 className="font-display mt-3 text-lg text-chalk">{v.title}</h3>
              <p className="mt-1 text-sm text-chalk-dim/60">{v.description}</p>
            </div>
          ))}
        </div>
        <Link href="/recent-work" className="mt-6 inline-block text-sm font-medium text-flare md:hidden">
          View all →
        </Link>
      </section>

      {/* EVENT CTA */}
      <section className="border-t border-turf-line bg-turf-light py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-4xl text-chalk md:text-5xl">Got an event in mind?</h2>
          <p className="mt-4 text-chalk-dim/80">
            Reply within 24 hours — tell me about your event and let's talk.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-block bg-flare px-8 py-4 font-medium text-turf transition hover:bg-flare-dark"
          >
            Book Sinan
          </Link>
        </div>
      </section>
    </>
  );
}
