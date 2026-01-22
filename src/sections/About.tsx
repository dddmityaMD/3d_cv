import { useMemo, useState } from 'react'
import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionHeader } from './SectionHeader'

export function About({ c }: { c: Content }) {
  const [expanded, setExpanded] = useState(false)

  const canToggle = useMemo(() => c.about.body.length > 240, [c.about.body])

  return (
    <section id={sectionIds.about} className="mt-16 scroll-mt-24">
      <SectionHeader title={c.about.title} />
      <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
        <p
          className={
            expanded
              ? 'text-base leading-relaxed text-fg'
              : 'line-clamp-4 text-base leading-relaxed text-fg'
          }
        >
          {c.about.body}
        </p>

        {canToggle && (
          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-border bg-bg/40 px-4 py-2 text-xs font-mono text-fg shadow-soft transition hover:border-accent/40"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? c.about.showLess : c.about.showMore}
          </button>
        )}
        <div className="mt-4 rounded-2xl border border-border bg-bg/40 p-4">
          <div className="text-xs font-mono text-muted">{c.about.focusLabel}</div>
          <div className="mt-2 text-sm text-fg">{c.about.focus}</div>
        </div>
      </div>
    </section>
  )
}
