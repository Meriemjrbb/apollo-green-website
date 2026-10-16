import { createMetadata } from "@/lib/site";
import { TEAM, VALUES } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = createMetadata({
  title: "About",
  path: "/about",
  description: "Apollo Green Solutions helps industrial and commercial sites measure and reduce energy use. Meet the team and learn our mission.",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader title="We make energy waste visible" intro="Apollo Green Solutions designs IoT monitoring for factories, campuses and commercial buildings, so every site can measure, understand and reduce its consumption." />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight">Our mission</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Industry uses a huge share of the world&apos;s electricity, and most plants cannot say where it goes. We put a meter on that question and give teams the tools to answer it.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-bold tracking-tight">What we do</h2>
          <p className="mt-4 text-lg text-ink-soft">
            We design and ship the meters and gateways, run the analytics platform, and handle installation. One partner from first survey to monthly savings report.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-fog-card py-16">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <h3 className="border-l-4 border-amber pl-4 font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-2 pl-5 text-ink-soft">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <Reveal><h2 className="font-display text-3xl font-bold tracking-tight">The team</h2></Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group">
                <div className="grid aspect-square place-items-center rounded-lg bg-ink font-display text-5xl font-bold text-amber transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.02]">
                  {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{m.name}</h3>
                <p className="text-sm font-semibold text-signal-deep">{m.role}</p>
                <p className="mt-1 text-sm text-ink-soft">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
