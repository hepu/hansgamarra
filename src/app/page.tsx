import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkGrid } from "@/components/work-grid";
import { experience, skillGroups, siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Section
          id="work"
          title="Selected work"
          lead="Representative engagements across fintech, security, esports, and product companies—full stack delivery with an emphasis on maintainable Rails and React ecosystems."
        >
          <WorkGrid />
        </Section>
        <Section
          id="experience"
          title="Experience"
          lead="A concise timeline of engineering roles from startups and consultancies to global platforms."
        >
          <ol className="relative space-y-8 border-l border-[var(--border)] pl-6">
            {experience.map((entry) => (
              <li key={`${entry.company}-${entry.period}`} className="relative">
                <span
                  className="absolute -left-[1.625rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
                  aria-hidden
                />
                <p className="text-sm font-medium text-[var(--accent)]">
                  {entry.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[var(--foreground)]">
                  {entry.role} · {entry.company}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                  {entry.summary}
                </p>
              </li>
            ))}
          </ol>
        </Section>
        <Section
          id="skills"
          title="Skills"
          lead="Tools and platforms I reach for when shipping production software."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.name}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)]">
                  {group.name}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-[var(--muted)]">
            <p>
              I am a senior full stack engineer with more than twelve years
              building web and mobile products for international teams. I am
              based in {siteConfig.location}, work remotely with U.S. and
              global clients, and communicate comfortably in English and Spanish.
            </p>
            <p>
              My sweet spot is pairing disciplined Rails APIs with thoughtful
              React or Next.js interfaces—shipping features, reviewing code, and
              helping teams make pragmatic technical decisions.
            </p>
            <p>
              Outside of work I play drums; music keeps me creative, but
              engineering is what I optimize my calendar around.
            </p>
          </div>
        </Section>
        <Section
          id="contact"
          title="Contact"
          lead="Open to senior full stack roles and select contract engagements."
        >
          <ul className="space-y-4 text-base">
            <li>
              <span className="font-medium text-[var(--foreground)]">
                Email:{" "}
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[var(--accent)] underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)]">
                LinkedIn:{" "}
              </span>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline-offset-4 hover:underline"
              >
                linkedin.com/in/hans-gamarra
              </a>
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)]">
                GitHub:{" "}
              </span>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline-offset-4 hover:underline"
              >
                github.com/hepu
              </a>
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)]">
                Résumé:{" "}
              </span>
              <a
                href={siteConfig.resumePath}
                download={siteConfig.resumeDownloadName}
                className="text-[var(--accent)] underline-offset-4 hover:underline"
              >
                Download PDF
              </a>
            </li>
          </ul>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
