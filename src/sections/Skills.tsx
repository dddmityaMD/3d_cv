import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionHeader } from './SectionHeader'

export function Skills({ c }: { c: Content }) {
  return (
    <section id={sectionIds.skills} className="mt-16 scroll-mt-24">
      <SectionHeader title={c.skills.title} />
      <div className="grid gap-5 md:grid-cols-2">
        {c.skills.groups.map((g) => (
          <article
            key={g.title}
            className="rounded-3xl border border-border bg-card/70 p-6 shadow-soft"
          >
            <h3 className="text-sm font-semibold tracking-tight text-fg">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-bg/30 px-3 py-1.5 text-xs font-mono text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
