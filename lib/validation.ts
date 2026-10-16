/** Shared by the client form and the API route so both enforce identical rules. */
export type ContactErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(v: Record<string, string | undefined>): ContactErrors {
  const errors: ContactErrors = {};
  const name = (v.name ?? "").trim();
  const email = (v.email ?? "").trim();
  const message = (v.message ?? "").trim();
  if (name.length < 2) errors.name = "Enter your full name (at least 2 characters).";
  if (!EMAIL.test(email)) errors.email = "Enter a valid email, like name@company.com.";
  if (message.length < 10) errors.message = "Tell us a bit more (at least 10 characters).";
  else if (message.length > 2000) errors.message = "Keep the message under 2000 characters.";
  return errors;
}
