"use client";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import Magnetic from "../Magnetic";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    setHidden(y > prev && y > 160 && !open);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-fog/90 backdrop-blur"
          : "border-transparent bg-fog"
      }`}
    >
      <nav
        className="container-x flex h-16 items-center justify-between"
        aria-label="Main"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <motion.span
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="grid h-8 w-8 place-items-center rounded-md bg-ink text-amber"
          >
            <Zap size={18} fill="currentColor" />
          </motion.span>
          {SITE.short}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className="relative block rounded px-3 py-2 text-sm font-medium text-ink-soft transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-ink/40 after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 aria-[current=page]:text-ink"
                >
                  {item.label}

                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-px h-0.5 bg-amber"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 36,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Magnetic>
          <Link
            href="/contact"
            className="btn-primary hidden md:inline-flex"
          >
            Book a demo
          </Link>
        </Magnetic>

        <div className="flex items-center gap-2">
  <ThemeToggle />

  <button
    type="button"
    className="grid h-10 w-10 place-items-center rounded-md border border-line md:hidden"
    onClick={() => setOpen((o) => !o)}
    aria-expanded={open}
    aria-label={open ? "Close menu" : "Open menu"}
  >
    {open ? <X size={20} /> : <Menu size={20} />}
  </button>
</div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-fog md:hidden"
          >
            <ul className="container-x flex flex-col py-3">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                >
                  <Link
  href={item.href}
  onClick={() => setOpen(false)}
  className="block border-b border-line/60 py-3 font-medium"
>
  {item.label}
</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}