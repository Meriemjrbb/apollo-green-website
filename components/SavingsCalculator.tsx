"use client";
import { useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

/** Illustrative savings estimator (8–14 % range reflects typical sub-metering projects). */
export default function SavingsCalculator() {
  const [bill, setBill] = useState(40000);
  const low = useMotionValue(0);
  const high = useMotionValue(0);
  const fmt = (n: number) => `€${Math.round(n * 12).toLocaleString("en-US")}`;
  const lowText = useTransform(low, fmt);
  const highText = useTransform(high, fmt);

  useEffect(() => {
    const a = animate(low, bill * 0.08, { duration: 0.5 });
    const b = animate(high, bill * 0.14, { duration: 0.5 });
    return () => { a.stop(); b.stop(); };
  }, [bill, low, high]);

  return (
    <div className="rounded-lg bg-ink p-7 text-fog sm:p-10">
      <h3 className="font-display text-2xl font-bold sm:text-3xl">What could your site save?</h3>
      <label htmlFor="bill" className="mt-6 block text-sm text-fog/70">Monthly energy bill</label>
      <p className="font-display text-3xl font-bold tabular-nums">€{bill.toLocaleString("en-US")}</p>
      <input
        id="bill" type="range" min={5000} max={250000} step={5000} value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer accent-amber"
      />
      <p className="mt-8 text-sm text-fog/70">Estimated yearly savings</p>
      <p className="font-display text-3xl font-bold text-amber sm:text-4xl">
        <motion.span>{lowText}</motion.span> to <motion.span>{highText}</motion.span>
      </p>
      <p className="mt-3 text-xs text-fog/50">Illustrative estimate based on 8 to 14 % typical reduction. A site audit gives exact numbers.</p>
    </div>
  );
}
