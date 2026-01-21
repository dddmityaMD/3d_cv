import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionHeader } from './SectionHeader'

export function Projects({ c }: { c: Content }) {
  return (
    <section id={sectionIds.projects} className="mt-16 scroll-mt-24">
      <SectionHeader title={c.projects.title} />
      <div className="grid gap-5 md:grid-cols-3">
        {c.projects.items.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-3xl border border-border bg-card/70 p-6 shadow-soft"
          >
            <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-bg/30 px-2.5 py-1 text-xs font-mono text-muted"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg shadow-soft transition hover:opacity-95"
              >
                {c.projects.view}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
