import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

export function Section({ id, title, lead, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-b border-[var(--border)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2
            id={`${id}-heading`}
            className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
          >
            {title}
          </h2>
          {lead ? (
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              {lead}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
