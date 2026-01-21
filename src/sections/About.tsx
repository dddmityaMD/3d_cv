import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionHeader } from './SectionHeader'

export function About({ c }: { c: Content }) {
  return (
    <section id={sectionIds.about} className="mt-16 scroll-mt-24">
      <SectionHeader title={c.about.title} />
      <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
        <p className="text-base leading-relaxed text-fg">{c.about.body}</p>
        <div className="mt-4 rounded-2xl border border-border bg-bg/40 p-4">
          <div className="text-xs font-mono text-muted">{c.about.focusLabel}</div>
          <div className="mt-2 text-sm text-fg">{c.about.focus}</div>
        </div>
      </div>
    </section>
  )
}
