import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";

/**
 * POST /api/contact
 * Re-validates on the server (never trust the client), drops bots via honeypot,
 * then emails through Resend when RESEND_API_KEY is set. Without it the message
 * is logged, so the demo works out of the box on Vercel.
 */
export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.company) return NextResponse.json({ ok: true }); // honeypot filled: pretend success

  const errors = validateContact(body);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (RESEND_API_KEY && CONTACT_TO_EMAIL) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL ?? "Apollo Green <onboarding@resend.dev>",
        to: [CONTACT_TO_EMAIL],
        reply_to: body.email,
        subject: `New enquiry from ${body.name}`,
        text: `${body.name} <${body.email}>\n\n${body.message}`,
      }),
    });
    if (!res.ok) return NextResponse.json({ error: "Email provider error" }, { status: 502 });
  } else {
  return NextResponse.json(
    { error: "Email service not configured" },
    { status: 503 }
  );
}

  return NextResponse.json({ ok: true });
}
