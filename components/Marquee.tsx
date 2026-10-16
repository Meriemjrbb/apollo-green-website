/** Infinite horizontal ticker (pure CSS, pauses on hover, off when reduced motion is set). */
export default function Marquee({ items }: { items: readonly string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group overflow-hidden border-b border-line bg-ink py-4 text-fog" aria-label={`Supported standards: ${items.join(", ")}`}>
      <div className="flex w-max animate-marquee gap-12 motion-reduce:animate-none group-hover:[animation-play-state:paused]" aria-hidden>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-lg font-semibold tracking-tight">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          </span>
        ))}
      </div>
    </div>
  );
}
