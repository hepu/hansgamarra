import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {siteConfig.name}. Built with Next.js and deployed on Vercel.
        </p>
        <p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[var(--foreground)] underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
