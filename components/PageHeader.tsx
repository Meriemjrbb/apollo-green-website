import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

/** Shared page intro used by Products / About / Contact. */
export default function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="bg-grid border-b border-line">
      <div className="container-x py-16 sm:py-24">
        <SplitHeading text={title} className="max-w-3xl font-display text-4xl font-extrabold tracking-tightest sm:text-6xl" />
        <Reveal delay={0.5}>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
