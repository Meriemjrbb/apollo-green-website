"use client";
import { motion } from "framer-motion";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } } };
const word = { hidden: { y: "115%", rotate: 4 }, show: { y: 0, rotate: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } };

interface Props {
  text: string;
  className?: string;
  /** Words (exact match, punctuation included) rendered in the accent colour. */
  highlight?: string[];
}

/** Headline that rises word by word out of an overflow mask. Fires on mount. */
export default function SplitHeading({ text, className, highlight = [] }: Props) {
  return (
    <motion.h1 className={className} variants={container} initial="hidden" animate="show" aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span variants={word} className={`inline-block origin-bottom-left ${highlight.includes(w) ? "text-signal-deep" : ""}`}>
            {w}
          </motion.span>
          {"\u00A0"}
        </span>
      ))}
    </motion.h1>
  );
}
