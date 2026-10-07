const items = [
  "22M VIEWS",
  "FIFA WORLD CUP QATAR 2022 FAN ZONE",
  "AFC ASIAN CUP 2023 FAN ZONE",
  "8 YEARS FREESTYLING",
  "30+ BRAND CAMPAIGNS",
  "20K+ COMMUNITY",
];

export default function StatMarquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-turf-line bg-flare py-3">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display mx-4 text-lg tracking-wide text-turf md:text-xl"
          >
            {item} <span className="mx-4 text-turf/50">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
