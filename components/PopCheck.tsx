"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/** Green check that springs in when scrolled into view. */
export default function PopCheck({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      initial={{ scale: 0, rotate: -90 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 380, damping: 14, delay: delay + 0.2 }}
      className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-signal text-white"
    >
      <Check size={14} />
    </motion.span>
  );
}
