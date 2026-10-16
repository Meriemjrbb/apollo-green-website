"use client";
import { motion } from "framer-motion";

/** Lets server components add a spring lift-on-hover without becoming client components. */
export default function HoverLift({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={className}>
      {children}
    </motion.div>
  );
}
