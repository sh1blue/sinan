import Link from "next/link";
import { site } from "@/data/site";

const siteUrl = "https://sbnfreestyler.com";
const whatsappBookingUrl =
  "https://wa.me/97470196701?text=Hi%20Sinan%2C%20I%27d%20like%20to%20enquire%20about%20a%20football%20freestyle%20performance%20in%20Doha.";

export const metadata = {
  title: "Football Freestyler in Doha, Qatar | Book Sinan Basim",
  description:
    "Looking for a football freestyler in Doha? Enquire with Sinan Basim for live freestyle performances at corporate events, sports occasions, brand activations and private celebrations.",
  alternates: {
    canonical: "/football-freestyler-doha",
  },
  openGraph: {
    type: "website" as const,
    url: `${siteUrl}/football-freestyler-doha`,
    title: "Football Freestyler in Doha, Qatar | Sinan Basim",
    description:
      "Enquire about live football freestyle entertainment in Doha with Sinan Basim. Performances for events, brands and audiences.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Football Freestyle Performances in Doha",
  serviceType: "Live football freestyle entertainment",
  description:
    "Live football freestyle performances for corporate events, sports occasions, brand activations, weddings and private celebrations in Doha, Qatar.",
  areaServed: {
    "@type": "City",
    name: "Doha",
    containedInPlace: {
      "@type": "Country",
      name: "Qatar",
    },
  },
  provider: {
    "@type": "Person",
    name: "Sinan Basim",
    url: siteUrl,
  },
};

const eventTypes = [
  {
    title: "Corporate Events",
    text: "A live freestyle set for conferences, product launches, staff events and award nights.",
    href: "/freestyle-football-hire/corporate-events",
  },
  {
    title: "Brand Activations",
    text: "Bring football skills and short-form branded content into your campaign or activation.",
    href: "/freestyle-football-hire/product-activations",
  },
  {
    title: "Sports Events",
    text: "Freestyle entertainment for tournaments, match days, half-time slots and fan zones.",
    href: "/freestyle-football-hire/sports-events",
  },
  {
    title: "Weddings & Private Events",
    text: "A custom freestyle performance for celebrations, receptions and private gatherings.",
    href: "/freestyle-football-hire/weddings-birthdays",
  },
];

export default function DohaFreestylerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-turf-line bg-turf">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="section-label text-xs uppercase tracking-[0.2em] text-gold">
            Doha · Qatar · Live Event Entertainment
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] text-chalk md:text-7xl">
            FOOTBALL FREESTYLER
            <span className="mt-2 block text-flare">IN DOHA, QATAR</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-chalk-dim/85 md:text-lg">
            Looking for a football freestyler in Doha for your next event? Sinan Basim brings
            live football freestyle performances to corporate gatherings, sports occasions,
            brand activations and private celebrations. Get in touch to discuss your event.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-flare px-7 py-3.5 font-medium text-turf transition hover:bg-flare-dark"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-chalk-dim/40 px-7 py-3.5 font-medium text-chalk transition hover:border-flare hover:text-flare"
            >
              DM on Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="section-label text-xs uppercase text-gold">Based in Doha</p>
            <h2 className="font-display mt-3 text-4xl leading-tight text-chalk md:text-5xl">
              Live football skills for events across the city.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-chalk-dim/80">
            <p>
              Sinan is based in Doha and takes enquiries for football freestyle performances
              across Qatar. Whether you are planning a company gathering, a public sports event
              or a private celebration, share the venue and event details to discuss a suitable
              performance.
            </p>
            <p>
              Performance duration and format are flexible. They can be discussed around your
              schedule, audience and event requirements, rather than being limited to one fixed
              show length.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-turf-line bg-turf-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label text-xs uppercase text-gold">Event Performance Options</p>
          <h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">
            Football freestyle for your Doha event
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-chalk-dim/75">
            Explore the types of events Sinan can perform at. Each enquiry can be discussed
            according to the event format and requirements.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-turf-line bg-turf-line sm:grid-cols-2">
            {eventTypes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-turf p-8 transition hover:bg-turf-light"
              >
                <h3 className="font-display text-2xl text-chalk group-hover:text-flare">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-chalk-dim/70">{item.text}</p>
                <span className="mt-4 inline-block text-sm text-gold">Explore service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 md:py-24">
        <p className="section-label text-xs uppercase text-gold">Experience in Qatar</p>
        <h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">
          Freestyle performances on major football stages
        </h2>
        <p className="mt-5 text-base leading-relaxed text-chalk-dim/80">
          Sinan Basim has performed at the FIFA World Cup Qatar 2022 Fan Zone at Baladna
          Al Khor and the AFC Asian Cup 2023 Fan Zone. That experience informs the live
          performances he now offers for events and audiences in Doha and across Qatar.
        </p>
        <Link
          href="/about-us"
          className="mt-6 inline-block border-b border-flare pb-1 text-sm font-medium text-flare"
        >
          Read Sinan's story →
        </Link>
      </section>

      <section className="border-t border-turf-line bg-turf-light py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-4xl text-chalk md:text-5xl">
            Planning an event in Doha?
          </h2>
          <p className="mt-4 text-chalk-dim/80">
            Share your event date, venue and the kind of performance you have in mind.
            Sinan can discuss the format and timing with you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-flare px-8 py-4 font-medium text-turf transition hover:bg-flare-dark"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-chalk-dim/40 px-8 py-4 font-medium text-chalk transition hover:border-flare hover:text-flare"
            >
              DM on Instagram
            </a>
            <Link
              href="/contact-us"
              className="inline-block border border-chalk-dim/40 px-8 py-4 font-medium text-chalk transition hover:border-flare hover:text-flare"
            >
              Website contact
            </Link>
          </div>
          <Link
            href="/locations"
            className="mt-8 inline-block border-b border-turf-line pb-1 text-sm text-chalk-dim transition hover:border-flare hover:text-flare"
          >
            Explore all Qatar locations →
          </Link>
          </div>
        </div>
      </section>
    </>
  );
}
