import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LoadChart from "@/components/LoadChart";
import HeroGlow from "@/components/HeroGlow";
import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

export default function HomePage() {
  return (
    <>
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
                Apollo Green connects meters, sensors and software
                so plant managers know where energy goes, minute
                by minute, and act before it shows up on the bill.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic>
                  <Link href="/contact" className="btn-primary group">
                    Book a demo
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </Magnetic>

                <Magnetic>
                  <Link href="/products" className="btn-ghost">
                    Explore products
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.7} y={50}>
            <LoadChart />
          </Reveal>
        </div>
      </section>
    </>
  );
}