export default function ImagePlaceholder({
  label,
  className = "",
  ratio = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} flex items-center justify-center border border-dashed border-turf-line bg-turf-light/60 ${className}`}
    >
      <div className="px-4 text-center">
        <p className="font-display text-sm tracking-wide text-chalk-dim/50">
          IMAGE PLACEHOLDER
        </p>
        <p className="mt-1 text-xs text-chalk-dim/40">{label}</p>
      </div>
    </div>
  );
}
