import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/site";
import { FEATURES, PRODUCTS, PROTOCOLS, STATS } from "@/lib/data";
import LoadChart from "@/components/LoadChart";
import Reveal from "@/components/Reveal";
import SavingsCalculator from "@/components/SavingsCalculator";
import SplitHeading from "@/components/SplitHeading";
import HeroGlow from "@/components/HeroGlow";
import Magnetic from "@/components/Magnetic";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import HoverLift from "@/components/HoverLift";
import PopCheck from "@/components/PopCheck";

export const metadata = createMetadata({
  title: "Home",
  path: "/",
  description: "IoT energy monitoring for factories and commercial buildings. See every kilowatt, catch demand peaks, and cut energy costs.",
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-grid bg-grid-animated">
        <HeroGlow />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SplitHeading
              text="See every kilowatt. Cut the ones you don't need."
              highlight={["kilowatt."]}
              className="font-display text-5xl font-extrabold leading-[1.02] tracking-tightest sm:text-7xl"
            />
            <Reveal delay={0.9}>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Apollo Green connects meters, sensors and software so plant managers know where energy goes, minute by minute, and act before it shows up on the bill.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Link href="/contact" className="btn-primary group">
                  Book a demo <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/products" className="btn-ghost">Explore products</Link>
              </Magnetic>
            </div>
            </Reveal>
          </div>
          <Reveal delay={0.7} y={50}>
            <LoadChart />
          </Reveal>
        </div>
      </section>

      <Marquee items={PROTOCOLS} />

      {/* Key figures */}
      <section className="container-x grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="border-l-2 border-amber pl-5">
            <p className="font-display text-4xl font-extrabold tabular-nums tracking-tightest sm:text-5xl">
              <CountUp to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
          </Reveal>
        ))}
      </section>

      {/* Value proposition */}
      <section className="container-x pb-20 pt-4">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Energy data that engineers and finance both act on.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 0.1 + Math.floor(i / 2) * 0.1} className="flex gap-4">
              <PopCheck delay={(i % 2) * 0.1} />
              <div>
                <h3 className="font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-1 text-ink-soft">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Product teaser */}
      <section className="border-y border-line bg-fog-card py-20">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">From the meter to the boardroom report</h2>
            <Link href="/products" className="font-semibold underline decoration-amber decoration-2 underline-offset-4 hover:text-signal-deep">All products</Link>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {PRODUCTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <HoverLift className="group h-full rounded-lg border border-line bg-fog-card p-6 transition-colors hover:border-ink">
                  <p.icon className="text-signal transition-transform duration-300 group-hover:rotate-6 group-hover:scale-125" size={28} />
                  <h3 className="mt-4 font-display text-lg font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.summary}</p>
                </HoverLift>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator + CTA */}
      <section className="container-x grid items-center gap-10 py-20 lg:grid-cols-2">
        <Reveal>
          <SavingsCalculator />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Start with a free site walk-through</h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Our engineers visit one plant, map the biggest loads and give you a written plan with expected payback. No commitment.
          </p>
          <div className="mt-7"><Magnetic><Link href="/contact" className="btn-primary">Request your walk-through</Link></Magnetic></div>
        </Reveal>
      </section>
    </>
  );
}
