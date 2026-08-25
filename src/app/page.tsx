import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { site } from "@/data/site";

export const metadata = { title: `Commercial Brands | ${site.name}` };

const work = [
  {
    brand: "Gymslave × Kerala Blasters FC",
    text: "Sinan's first major brand partnership — promoting official Kerala Blasters FC masks through freestyle content during the COVID-19 period, combining performance with product promotion for one of the Indian Super League's prominent clubs.",
    image: "/images/barca-jersey-headstall.jpg",
    imageAlt: "Sinan Basim balancing a football while wearing a football jersey",
  },
  {
    brand: "Saudia Hyper & Rawabi Hyper",
    text: "Promotional video campaigns for two leading retail brands, blending freestyle football sequences with product-focused storytelling.",
    image: null,
    imageAlt: "",
  },
  {
    brand: "Tea World, Naimi Cafeteria & Café de Classico",
    text: "Concept, filming, and editing for café and restaurant promotional content — bringing energy and movement to hospitality marketing.",
    image: null,
    imageAlt: "",
  },
];

export default function CommercialBrands() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Brands"
        title="Brand Partnerships"
        intro="30+ promotional videos produced for businesses and brands — concept, filming, and edit, end to end."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="space-y-16">
          {work.map((w, i) => (
            <div
              key={w.brand}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {w.image ? (
                <div className="relative aspect-video overflow-hidden">
                  <Image src={w.image} alt={w.imageAlt} fill className="object-cover" />
                </div>
              ) : (
                <ImagePlaceholder label={`${w.brand} campaign`} ratio="aspect-video" />
              )}
              <div>
                <h3 className="font-display text-3xl text-chalk">{w.brand}</h3>
                <p className="mt-4 text-base leading-relaxed text-chalk-dim/80">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-turf-line bg-turf-light py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label text-center text-xs uppercase text-gold">
            Also Worked With
          </p>
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
        </div>
      </section>

      <section className="border-t border-turf-line bg-turf py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl text-chalk md:text-4xl">
            Have a product or campaign in mind?
          </h2>
          <p className="mt-3 text-chalk-dim/70">
            From concept to final edit — let's build something for your brand.
          </p>
          <Link
            href="/contact-us"
            className="mt-7 inline-block bg-flare px-8 py-4 font-medium text-turf transition hover:bg-flare-dark"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
