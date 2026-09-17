import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProjectBySlug, projects, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.hasCaseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Case study" };
  return {
    title: `${project.client} · ${project.headline}`,
    description: project.problem,
    openGraph: {
      title: `${project.headline} | ${siteConfig.name}`,
      description: project.contribution,
      url: `${siteConfig.url}/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.hasCaseStudy) notFound();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium text-[var(--accent)]">
          <Link href="/#work" className="underline-offset-4 hover:underline">
            ← Back to selected work
          </Link>
        </p>
        <p className="mt-8 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
          {project.employer} · {project.client}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {project.headline}
        </h1>
        <article className="prose-custom mt-10 space-y-8 text-base leading-relaxed text-[var(--muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">
              Context
            </h2>
            <p className="mt-2">{project.problem}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">
              My contribution
            </h2>
            <p className="mt-2">{project.contribution}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">
              Technology
            </h2>
            <p className="mt-2">{project.stack.join(", ")}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">
              Result
            </h2>
            <p className="mt-2">{project.outcome}</p>
          </section>
        </article>
        <p className="mt-12 text-sm text-[var(--muted)]">
          Interested in similar work?{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Email {siteConfig.email}
          </a>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
