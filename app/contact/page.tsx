import { Mail, Clock } from "lucide-react";
import { SITE, createMetadata } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description: "Book a demo or ask a question. Tell Apollo Green about your site and an energy engineer will reply within one working day.",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Talk to an energy engineer" intro="Describe your site and what you want to measure. We reply within one working day." />
      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <Reveal><ContactForm /></Reveal>
        <Reveal delay={0.1} className="space-y-6 text-ink-soft">
          <p className="flex gap-3"><Mail className="shrink-0 text-signal" /> <a className="font-semibold text-ink underline decoration-amber underline-offset-4" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p className="flex gap-3"><Clock className="shrink-0 text-signal" /> Monday to Friday, 08:00 – 18:00 CET</p>
        </Reveal>
      </section>
    </>
  );
}
