import type { Metadata, Viewport } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE } from "@/lib/site";

import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.short}`,
  },
  description: SITE.description,
};

export const viewport: Viewport = {
  themeColor: "#0D2B2E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={`${display.variable} ${body.variable}`}
>
  <body>
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ink focus:p-3 focus:text-fog"
      >
        Skip to content
      </a>

      <MotionProvider>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </MotionProvider>
    </ThemeProvider>
  </body>
</html>
  );
}