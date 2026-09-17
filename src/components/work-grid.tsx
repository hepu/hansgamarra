import Link from "next/link";
import { projects } from "@/lib/site";

export function WorkGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-6"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
            {project.employer} · {project.client}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
            {project.headline}
          </h3>
          <dl className="mt-4 flex flex-1 flex-col gap-3 text-sm leading-relaxed text-[var(--muted)]">
            <div>
              <dt className="font-medium text-[var(--foreground)]">Problem</dt>
              <dd className="mt-1">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]">
                What I did
              </dt>
              <dd className="mt-1">{project.contribution}</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]">Stack</dt>
              <dd className="mt-1">{project.stack.join(" · ")}</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]">Outcome</dt>
              <dd className="mt-1">{project.outcome}</dd>
            </div>
          </dl>
          {project.hasCaseStudy ? (
            <Link
              href={`/work/${project.slug}`}
              className="mt-6 text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Read case study
            </Link>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
