"use client";
import { motion } from "framer-motion";

/** Two slow-drifting blurred orbs behind the hero (amber = load, green = saved energy). */
export default function HeroGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-amber/25 blur-3xl"
        animate={{ x: [0, 70, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-signal/20 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
