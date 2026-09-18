import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden rounded-md bg-[var(--accent)] px-3 py-1.5 text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:inline-block"
          >
            Email Hans
          </a>
        </div>
      </div>
      <nav
        aria-label="Mobile primary"
        className="flex gap-4 overflow-x-auto border-t border-[var(--border)] px-4 py-2 md:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 text-sm text-[var(--muted)]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
