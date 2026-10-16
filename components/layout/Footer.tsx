import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink-deep text-fog">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold">
            {SITE.name}
          </p>
          <p className="mt-3 max-w-sm text-sm text-fog/70">
            {SITE.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Pages</p>
          <ul className="mt-3 space-y-2 text-sm text-fog/70">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="transition-colors hover:text-amber"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Contact</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 block text-sm text-fog/70 transition-colors hover:text-amber"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="border-t border-fog/10 py-5 text-center text-xs text-fog/50">
        © {new Date().getFullYear()} {SITE.name}.
        {" "}Demo website built for a technical assignment.
      </div>
    </footer>
  );
}