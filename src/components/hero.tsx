import Image from "next/image";
import { siteConfig } from "@/lib/site";

const ctaClass =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

const primaryCtaClass =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-[var(--border)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20">
        <Image
          src="/images/navijazz.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/85 to-[var(--background)]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          {siteConfig.location} · Remote-friendly
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl"
        >
          {siteConfig.name}
        </h1>
        <p className="mt-2 text-xl text-[var(--muted)] sm:text-2xl">
          {siteConfig.title}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground)]/90">
          {siteConfig.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className={primaryCtaClass} href={`mailto:${siteConfig.email}`}>
            Email {siteConfig.email}
          </a>
          <a
            className={ctaClass}
            href={siteConfig.resumePath}
            download={siteConfig.resumeDownloadName}
          >
            Download résumé (PDF)
          </a>
          <a
            className={ctaClass}
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn profile
          </a>
          <a
            className={ctaClass}
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub @hepu
          </a>
        </div>
      </div>
    </section>
  );
}
