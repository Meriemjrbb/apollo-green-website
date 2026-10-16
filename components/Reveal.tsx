"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Stagger direction offset in px. */
  y?: number;
}

/** Scroll-triggered reveal. Fires once, slightly before the element enters the viewport. */
export default function Reveal({ children, delay = 0, className, y = 24 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
