"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import type { Product } from "@/lib/data";

/** Card that tilts toward the cursor in 3D, lifts on hover, and staggers its specs in. */
export default function ProductCard({ product, icon }: { product: Omit<Product, "icon">; icon: ReactNode }) {
  const spring = { stiffness: 200, damping: 18 };
  const rx = useSpring(useMotionValue(0), spring);
  const ry = useSpring(useMotionValue(0), spring);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col rounded-lg border border-line bg-fog-card p-6 transition-[border-color,box-shadow] hover:border-ink hover:shadow-[0_24px_40px_-24px_rgba(13,43,46,.5)]"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-md bg-ink text-fog transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-amber group-hover:text-ink">
          {icon}
        </span>
        <span className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft">{product.category}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold">{product.name}</h3>
      <p className="mt-2 text-ink-soft">{product.summary}</p>
      <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-5 text-sm">
        {product.specs.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.07, duration: 0.45 }}>
            <dt className="text-ink-soft">{s.label}</dt>
            <dd className="font-semibold">{s.value}</dd>
          </motion.div>
        ))}
      </dl>
    </motion.article>
  );
}
