"use client";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { validateContact, type ContactErrors } from "@/lib/validation";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const shake = useAnimationControls();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length) {
      shake.start({ x: [0, -10, 10, -6, 6, 0], transition: { duration: 0.45 } });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "mt-1.5 w-full rounded-md border bg-fog-card px-4 py-3 transition-colors focus:border-ink";
  const border = (k: keyof ContactErrors) => (errors[k] ? "border-red-600" : "border-line");

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-lg border border-signal bg-signal/10 p-8 text-center" role="status">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.1 }}><CheckCircle2 className="mx-auto text-signal" size={44} /></motion.div>
          <h2 className="mt-4 font-display text-2xl font-bold">Message sent</h2>
          <p className="mt-2 text-ink-soft">Thank you. An energy engineer will reply within one working day.</p>
          <button className="btn-ghost mt-6" onClick={() => setStatus("idle")}>Send another message</button>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
          {(["name", "email"] as const).map((k) => (
            <div key={k}>
              <label htmlFor={k} className="text-sm font-semibold">{k === "name" ? "Full name" : "Work email"}</label>
              <input id={k} name={k} type={k === "email" ? "email" : "text"} autoComplete={k} aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} className={`${field} ${border(k)}`} />
              <motion.p key={errors[k]} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} id={`${k}-err`} className="mt-1 min-h-5 text-sm text-red-700">{errors[k]}</motion.p>
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm font-semibold">How can we help?</label>
            <textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} aria-describedby="message-err" className={`${field} ${border("message")}`} />
            <motion.p key={errors.message} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} id="message-err" className="mt-1 min-h-5 text-sm text-red-700">{errors.message}</motion.p>
          </div>
          {/* Honeypot: hidden from humans, bots fill it in */}
          <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          {status === "error" && <p className="text-sm text-red-700" role="alert">Message not sent. Check your connection and try again.</p>}

          <motion.button animate={shake} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60 sm:w-auto" type="submit">
            {status === "sending" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            {status === "sending" ? "Sending" : "Send message"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
