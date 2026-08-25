import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata = { title: `Testimonials | ${site.name}` };

type Testimonial = { _id: string; quote: string; name: string; role?: string };

// Add testimonials here as they come in — swap this out with real quotes.
const testimonials: Testimonial[] = [];

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="What People Say"
        title="Testimonials"
        intro="Words from event organizers, brands, and clients Sinan has worked with."
      />

      <section className="mx-auto max-w-5xl px-5 py-20">
        {testimonials.length === 0 ? (
          <div className="border border-dashed border-turf-line bg-turf-light/40 p-12 text-center">
            <p className="font-display text-2xl text-chalk-dim/60">
              Testimonials coming soon
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-chalk-dim/50">
              Client and event-organizer quotes will be added here shortly.
              In the meantime, see recent work and past collaborations below.
            </p>
            <Link
              href="/recent-work"
              className="mt-6 inline-block text-sm font-medium text-flare"
            >
              View recent work →
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t._id} className="border border-turf-line bg-turf-light p-8">
                <p className="text-lg leading-relaxed text-chalk">"{t.quote}"</p>
                <p className="mt-4 font-display text-sm tracking-wide text-gold">
                  {t.name}
                </p>
                {t.role && <p className="text-xs text-chalk-dim/60">{t.role}</p>}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
