import Link from "next/link";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { site, hireServices } from "@/data/site";

const service = hireServices["weddings-birthdays"];
export const metadata = { title: `${service.title} | ${site.name}` };

export default function WeddingsBirthdays() {
  return (
    <>
      <PageHero eyebrow="Freestyle Football Hire" title={service.title} intro={service.intro} />
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <div className="space-y-5">
            {service.body.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-chalk-dim/85">
                {p}
              </p>
            ))}
            <ul className="mt-8 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-chalk-dim/80">
                  <span className="text-flare">→</span>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className="mt-8 inline-block bg-flare px-7 py-3.5 font-medium text-turf transition hover:bg-flare-dark"
            >
              Enquire Now
            </Link>
          </div>
          <ImagePlaceholder label={`${service.title} performance`} ratio="aspect-[4/5]" />
        </div>
      </section>
    </>
  );
}
