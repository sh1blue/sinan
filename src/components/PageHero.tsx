export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative border-b border-turf-line bg-turf-light">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="section-label text-xs uppercase text-gold">{eyebrow}</p>
        <h1 className="font-display mt-3 text-5xl leading-[0.95] text-chalk md:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-chalk-dim/80 md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
