import Link from "next/link";
import { site } from "@/data/site";

type LocationLandingPageProps = {
  name: string;
  slug: string;
  intro: string;
  localContext: string;
  eventContext: string;
};

export default function LocationLandingPage({
  name,
  slug,
  intro,
  localContext,
  eventContext,
}: LocationLandingPageProps) {
  const pageUrl = `https://sbnfreestyler.com/football-freestyler-${slug}`;
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi Sinan, I'd like to enquire about a football freestyle performance in ${name}, Qatar.`
  )}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Football Freestyle Performances in ${name}`,
    serviceType: "Live football freestyle entertainment",
    description: `Live football freestyle performances for events and celebrations in ${name}, Qatar. Available for event bookings across Qatar, including ${name}.`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: name,
      containedInPlace: {
        "@type": "Country",
        name: "Qatar",
      },
    },
    provider: {
      "@type": "Person",
      name: "Sinan Basim",
      url: "https://sbnfreestyler.com",
    },
    url: pageUrl,
  };

  const eventTypes = [
    {
      title: "Corporate Events",
      text: "A live freestyle feature for company gatherings, conferences, launches and staff celebrations.",
      href: "/freestyle-football-hire/corporate-events",
    },
    {
      title: "Brand Activations",
      text: "Football skills and branded short-form content for campaigns, promotions and audience engagement.",
      href: "/freestyle-football-hire/product-activations",
    },
    {
      title: "Sports Events",
      text: "Freestyle entertainment for tournaments, match days, fan zones and sports celebrations.",
      href: "/freestyle-football-hire/sports-events",
    },
    {
      title: "Private Celebrations",
      text: "A custom performance idea for weddings, birthdays and private gatherings.",
      href: "/freestyle-football-hire/weddings-birthdays",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-turf-line bg-turf">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="section-label text-xs uppercase tracking-[0.2em] text-gold">
            {name} · Qatar · Live Event Entertainment
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] text-chalk md:text-7xl">
            FOOTBALL FREESTYLER
            <span className="mt-2 block text-flare">IN {name.toUpperCase()}, QATAR</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-chalk-dim/85 md:text-lg">
            {intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
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
            <p className="section-label text-xs uppercase text-gold">Events in {name}</p>
            <h2 className="font-display mt-3 text-4xl leading-tight text-chalk md:text-5xl">
              Football freestyle that gives your event a moment to remember.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-chalk-dim/80">
            <p>{localContext}</p>
            <p>{eventContext}</p>
            <p>
              Sinan is based in Doha and available for bookings throughout Qatar, including {name}. Performance duration and format are flexible and can be discussed directly with Sinan to suit your event schedule, audience and requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-turf-line bg-turf-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label text-xs uppercase text-gold">Performance Options</p>
          <h2 className="font-display mt-3 text-4xl text-chalk md:text-5xl">
            Football freestyle for every occasion
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-chalk-dim/75">
            Explore the event formats Sinan can discuss with you for an occasion in {name}.
            Each enquiry is shaped around the venue, audience and running order.
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
          From major fan zones to local events
        </h2>
        <p className="mt-5 text-base leading-relaxed text-chalk-dim/80">
          Sinan Basim has performed at the FIFA World Cup Qatar 2022 Fan Zone at Baladna
          Al Khor and the AFC Asian Cup 2023 Fan Zone. He has also built an audience for
          his football freestyle content, with one reel passing 22 million views. For an
          event in {name}, get in touch to discuss a performance that fits your programme.
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
            Planning an event in {name}?
          </h2>
          <p className="mt-4 text-chalk-dim/80">
            Football freestyle performances are available in {name}. Message Sinan on WhatsApp to discuss your event date, schedule and preferred performance format.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl}
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
      </section>
    </>
  );
}
