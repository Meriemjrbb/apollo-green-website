import Link from "next/link";
import { createMetadata } from "@/lib/site";
import { PRODUCTS } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

export const metadata = createMetadata({
  title: "Products",
  path: "/products",
  description: "Energy meters, edge gateways, sensors and analytics software: the full Apollo Green IoT energy monitoring stack with key specifications.",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="One stack, from clamp to dashboard" intro="Hardware that installs without a shutdown, software that turns readings into decisions, and engineers who set it all up." />
      <section className="container-x grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map(({ icon: Icon, ...product }, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 0.08}>
            {/* Icon is rendered on the server: functions can't cross the server/client boundary. */}
            <ProductCard product={product} icon={<Icon size={24} />} />
          </Reveal>
        ))}
      </section>
      <section className="container-x">
        <Reveal className="rounded-lg bg-ink p-8 text-fog sm:p-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Not sure which combination fits your site?</h2>
          <p className="mt-2 max-w-xl text-fog/70">Tell us about your plant and we will propose a bill of materials with expected payback.</p>
          <div className="mt-6"><Magnetic><Link href="/contact" className="btn bg-amber text-ink hover:bg-fog">
  Talk to an engineer
</Link></Magnetic></div>
        </Reveal>
      </section>
    </>
  );
}
