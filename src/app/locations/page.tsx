import Link from "next/link";

const locations = [
  { name: "Doha", slug: "doha", description: "Live football freestyle performances in Qatar's capital, for events, brands and private celebrations." },
  { name: "Al Rayyan", slug: "al-rayyan", description: "Enquire about event entertainment for sports occasions, community gatherings and corporate functions." },
  { name: "Al Wakrah", slug: "al-wakrah", description: "Football freestyle for local events, family occasions, sports programmes and brand activations." },
  { name: "Al Khor", slug: "al-khor", description: "Performance enquiries for events in northern Qatar, including sports and community occasions." },
  { name: "Al-Shahaniya", slug: "al-shahaniya", description: "Live freestyle entertainment for local gatherings, private events and organised programmes." },
  { name: "Umm Salal", slug: "umm-salal", description: "Enquire about a freestyle performance for community events and private celebrations." },
  { name: "Al Daayen", slug: "al-daayen", description: "Event performance enquiries for communities and venues north of Doha." },
  { name: "Al Shamal", slug: "al-shamal", description: "Discuss performance options and travel details for events in northern Qatar." },
];

export const metadata = {
  title: "Locations Across Qatar | Football Freestyler Sinan Basim",
  description: "Explore locations across Qatar where you can enquire about football freestyle performances by Sinan Basim, based in Doha.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="border-b border-turf-line bg-turf">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="section-label text-xs uppercase tracking-[0.2em] text-gold">Event Coverage · Qatar</p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] text-chalk md:text-7xl">
            FOOTBALL FREESTYLE
            <span className="mt-2 block text-flare">ACROSS QATAR</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-chalk-dim/85 md:text-lg">
            Sinan Basim is based in Doha and takes enquiries for football freestyle performances across Qatar.
            Explore the municipality pages below and share your event location, date and requirements to discuss a booking.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-px overflow-hidden border border-turf-line bg-turf-line sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={location.slug === "doha" ? "/football-freestyler-doha" : `/football-freestyler-${location.slug}`}
              className="group bg-turf p-7 transition hover:bg-turf-light md:p-8"
            >
              <p className="section-label text-xs uppercase tracking-[0.16em] text-gold">Qatar</p>
              <h2 className="font-display mt-3 text-2xl text-chalk group-hover:text-flare">{location.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-chalk-dim/70">{location.description}</p>
              <span className="mt-5 inline-block text-sm text-flare">Explore location →</span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-chalk-dim/60">
          Sinan is based in Doha. Travel, dates and performance availability for each event are discussed directly with the organiser.
        </p>
      </section>
    </>
  );
}
