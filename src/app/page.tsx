import Link from "next/link";
import Image from "next/image";
import StatMarquee from "@/components/StatMarquee";
import InstagramEmbed from "@/components/InstagramEmbed";
import HeroSlideshow from "@/components/HeroSlideshow";
import { site, hireServices } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-turf">
        <div className="relative flex h-[88vh] min-h-[560px] w-full flex-col justify-end overflow-hidden md:hidden">
          <Image src="/images/hero-sea-kick.jpg" alt="Sinan Basim mid bicycle-kick in the sea" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-turf via-turf/50 to-turf/10" />
          <div className="relative z-10 px-5 pb-14">
            <p className="section-label text-xs uppercase text-gold">Doha, Qatar</p>
            <h1 className="font-display mt-3 text-5xl leading-[0.92] text-chalk">FOOTBALL<br /><span className="text-flare">FREESTYLER</span></h1>
            <p className="mt-4 text-base leading-relaxed text-chalk-dim/90">Sinan Basim — 8 years turning ball control into content, brand campaigns, and live performances watched by millions.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact-us" className="bg-flare px-6 py-3 font-medium text-turf transition hover:bg-flare-dark">Book Sinan</Link>
              <Link href="/about-us" className="border border-chalk-dim/40 px-6 py-3 font-medium text-chalk transition hover:border-flare hover:text-flare">The Story</Link>
            </div>
          </div>
        </div>
        <div className="relative hidden h-[92vh] min-h-[680px] w-full md:block">
          <HeroSlideshow />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
            <h1 className="font-display text-7xl leading-[0.95] text-chalk lg:text-8xl">SINAN BASIM</h1>
            <p className="font-display mt-4 text-2xl tracking-[0.08em] text-flare lg:text-3xl">FOOTBALL FREESTYLER &amp; CONTENT CREATOR</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact-us" className="bg-flare px-7 py-3.5 font-medium text-turf transition hover:bg-flare-dark">Book Sinan</Link>
              <Link href="/about-us" className="border border-white/40 px-7 py-3.5 font-medium text-white transition hover:border-flare hover:text-flare">The Story</Link>
            </div>
          </div>
        </div>
      </section>

      <StatMarquee />

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden"><Image src="/images/doha-street-pose.jpg" alt="Sinan Basim performing a freestyle pose on a street in Doha, Qatar" fill className="object-cover" /></div>
          <div>
            <p className="section-label text-xs uppercase text-gold">The Story</p>
            <h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">From Lockdown to World Cup Fan Zones</h2>
            <p className="mt-5 text-base leading-relaxed text-chalk-dim/80">What started as a way to stay active during COVID-19 became 8 years of dedication — performances at the FIFA World Cup Qatar 2022 and AFC Asian Cup 2023 Fan Zones, a reel that crossed 22 million views, and a growing list of brand collaborations.</p>
            <Link href="/about-us" className="mt-6 inline-block border-b border-flare text-sm font-medium text-flare">Read the full story →</Link>
          </div>
        </div>
      </section>
      <div className="chalk-divider mx-auto max-w-6xl" />

      {/* HIRE SERVICES */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="section-label text-xs uppercase text-gold">Hire</p>
        <h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">Book a Live Set</h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-turf-line bg-turf-line sm:grid-cols-2">
          {Object.values(hireServices).map((s) => <Link key={s.slug} href={`/freestyle-football-hire/${s.slug}`} className="group bg-turf p-8 transition hover:bg-turf-light"><h3 className="font-display text-2xl text-chalk group-hover:text-flare">{s.title}</h3><p className="mt-2 text-sm text-chalk-dim/70">{s.intro}</p><span className="mt-4 inline-block text-sm text-gold">Learn more →</span></Link>)}
        </div>
      </section>

      {/* COMMERCIAL BRANDS TEASER */}
      <section className="border-y border-turf-line bg-turf-light py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label text-center text-xs uppercase text-gold">Trusted By</p>
          <div className="mt-8 grid grid-cols-3 items-center gap-6 sm:grid-cols-4 md:grid-cols-6">
            {site.logoBrands.map((b) => <div key={b.name} className="relative flex aspect-square items-center justify-center overflow-hidden bg-chalk/5 p-3 grayscale transition hover:grayscale-0" title={b.name}><Image src={b.logo} alt={`${b.name} logo`} fill className="object-contain p-3" /></div>)}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">{site.brands.map((b) => <span key={b} className="font-display text-base text-chalk-dim/50 md:text-lg">{b}</span>)}</div>
          <div className="mt-8 text-center"><Link href="/commercial-brands" className="text-sm font-medium text-flare">View commercial work →</Link></div>
        </div>
      </section>

      {/* RECENT WORK TEASER */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-end justify-between"><div><p className="section-label text-xs uppercase text-gold">Watch</p><h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">Recent Work</h2></div><Link href="/recent-work" className="hidden text-sm font-medium text-flare md:block">View all →</Link></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <InstagramEmbed url="https://www.instagram.com/reel/CWDubbEh1zh/" />
          <InstagramEmbed url="https://www.instagram.com/reel/CgyxXOyAfzl/" />
          <InstagramEmbed url="https://www.instagram.com/tv/CMMrY8WAuz1/" />
        </div>
        <Link href="/recent-work" className="mt-6 inline-block text-sm font-medium text-flare md:hidden">View all →</Link>
      </section>

      {/* CTA */}
      <section className="border-t border-turf-line bg-turf-light py-24"><div className="mx-auto max-w-3xl px-5 text-center"><h2 className="font-display text-4xl text-chalk md:text-5xl">Got an event in mind?</h2><p className="mt-4 text-chalk-dim/80">Reply within 24 hours — tell me about your event and let's talk.</p><Link href="/contact-us" className="mt-8 inline-block bg-flare px-8 py-4 font-medium text-turf transition hover:bg-flare-dark">Book Sinan</Link></div></section>
    </>
  );
}
