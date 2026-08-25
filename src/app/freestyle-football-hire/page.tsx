import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site, hireServices } from "@/data/site";

export const metadata = { title: `Freestyle Football Hire | ${site.name}` };

export default function HireIndex() {
  return (
    <>
      <PageHero
        eyebrow="Book a Performance"
        title="Freestyle Football Hire"
        intro="Live sets, brand activations, and content built around your event."
      />
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-px overflow-hidden border border-turf-line bg-turf-line sm:grid-cols-2">
          {Object.values(hireServices).map((s) => (
            <Link
              key={s.slug}
              href={`/freestyle-football-hire/${s.slug}`}
              className="group bg-turf p-8 transition hover:bg-turf-light"
            >
              <h3 className="font-display text-2xl text-chalk group-hover:text-flare">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-chalk-dim/70">{s.intro}</p>
              <span className="mt-4 inline-block text-sm text-gold">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
