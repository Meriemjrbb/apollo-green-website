import type { Metadata } from "next";

export const SITE = {
  name: "Apollo Green Solutions",
  short: "Apollo Green",
  tagline: "IoT energy monitoring for industry and commerce",
  description:
    "Apollo Green Solutions builds IoT energy monitoring hardware and analytics that help factories, campuses and commercial buildings see every kilowatt and cut waste.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  email: "hello@apollogreen.example",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function createMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const title =
    opts.path === "/"
      ? `${SITE.name} | ${SITE.tagline}`
      : `${opts.title} | ${SITE.short}`;

  return {
    title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title,
      description: opts.description,
      url: opts.path,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: opts.description,
    },
  };
}