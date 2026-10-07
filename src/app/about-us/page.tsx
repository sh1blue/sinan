import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { site } from "@/data/site";

export const metadata = { title: `About | ${site.name}` };

export default function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The Story So Far"
        intro="Eight years of practice, discipline, and creativity — from a lockdown living room to World Cup Fan Zones."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6 text-base leading-relaxed text-chalk-dim/85">
            <p>
              Sinan Basim's football freestyle journey began during the
              COVID-19 lockdown. At a time when he felt lonely and wanted to
              find a positive way through a difficult phase, he turned to
              football freestyle — practicing skills, filming himself, and
              creating videos simply as a way to stay active, express
              himself, and connect with others.
            </p>
            <p>
              What began as a personal escape gradually became a passion,
              and over the years, a defining part of his identity. Through 8
              years of dedication, discipline, practice, and creativity,
              Sinan developed his freestyle skills while simultaneously
              discovering his passion for content creation and visual
              storytelling.
            </p>
            <p>
              His growing presence brought him to Kerala's Media One channel,
              and his content began attracting attention from brands and
              organizations — including an early partnership with Gymslave,
              the official mask distributor of Kerala Blasters FC, promoting
              their gear through his freestyle content during the COVID
              period.
            </p>
            <p>
              His videos began reaching audiences across social media, with
              some crossing 22 million, 5 million, and 1 million+ views —
              milestones that helped him build a growing online community and
              showed him the power of combining performance with
              storytelling.
            </p>
            <p>
              That journey took him from practicing during lockdown to
              performing on major platforms: the FIFA World Cup Qatar 2022
              Fan Zone at Baladna Al Khor, followed by the AFC Asian Cup 2023
              Fan Zone. He was invited onto Qatar Malayalam Radio 98.6 FM to
              share his story, and had the memorable opportunity to perform
              with and in front of Indian football legend I. M. Vijayan.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/desert-silhouette.jpg"
              alt="Sinan Basim silhouetted mid bicycle-kick in the desert at sunset"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="chalk-divider mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-label text-xs uppercase text-gold">Content Creation</p>
        <h2 className="font-display mt-3 max-w-2xl text-4xl text-chalk md:text-5xl">
          From Freestyle to Full-Time Storytelling
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <p className="text-base leading-relaxed text-chalk-dim/85">
            Alongside football, Sinan has built more than 8 years of
            experience as a self-driven content creator and video editor.
            Primarily creating for Instagram, he has grown a community of
            nearly 20,000 followers through videos that combine creativity,
            entertainment, and storytelling.
          </p>
          <p className="text-base leading-relaxed text-chalk-dim/85">
            He has worked on 30+ promotional videos for brands and
            businesses, including Saudia Hyper and Rawabi Hyper, as well as
            restaurants and cafés such as Tea World, Naimi Cafeteria, and
            Café de Classico — covering concept development, filming,
            editing, and audience engagement from end to end.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-turf-line bg-turf-light py-20">
        <div className="mx-auto max-w-4xl px-5">
          <p className="section-label text-xs uppercase text-gold">Milestones</p>
          <h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">
            The Timeline
          </h2>

          <div className="mt-10 grid gap-8 border border-turf-line bg-turf p-6 sm:grid-cols-[auto_1fr] sm:items-center">
            <div className="relative mx-auto h-40 w-32 shrink-0 overflow-hidden sm:mx-0">
              <Image
                src="/images/tkmce-award.jpg"
                alt="TKMCE Alumni recognition award presented to Sinan Basim, Doha, October 2023"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-display text-lg text-chalk">TKMCE Alumni Recognition</p>
              <p className="mt-1 text-sm leading-relaxed text-chalk-dim/70">
                Honored by TKMCE Alumni Qatar for his performance and presence
                at the SangaPadhya '23 Inter-Engineering College tournament —
                Doha, October 2023.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-0">
            {site.milestones.map((m, i) => (
              <div
                key={i}
                className="grid grid-cols-[64px_1fr] gap-6 border-t border-turf-line py-6 first:border-t-0 md:grid-cols-[96px_1fr]"
              >
                <span className="font-display text-xl text-gold md:text-2xl">{m.year}</span>
                <div>
                  <h3 className="font-display text-xl text-chalk">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-chalk-dim/70">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="font-display text-3xl text-chalk md:text-4xl">
          Want Sinan for your next event?
        </h2>
        <Link
          href="/contact-us"
          className="mt-7 inline-block bg-flare px-8 py-4 font-medium text-turf transition hover:bg-flare-dark"
        >
          Book Now
        </Link>
      </section>
    </>
  );
}
