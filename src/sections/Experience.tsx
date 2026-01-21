import { useState } from 'react'
import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionHeader } from './SectionHeader'

function ExperienceCard({
  item,
  showMoreLabel,
  showLessLabel,
}: {
  item: Content['experience']['items'][number]
  showMoreLabel: string
  showLessLabel: string
}) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = (item.moreBullets?.length ?? 0) > 0
  const bullets = expanded
    ? [...item.bullets, ...(item.moreBullets ?? [])]
    : item.bullets

  return (
    <article className="rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="text-lg font-semibold tracking-tight">{item.role}</div>
          <div className="mt-0.5 text-sm text-muted">{item.company}</div>
        </div>
        <div className="font-mono text-xs text-muted">{item.dates}</div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-fg">
        {bullets.map((b) => (
          <li key={b} className="leading-relaxed">
            <span className="mr-2 text-accent">•</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-muted">
          <span className="font-mono">Stack:</span> {item.stack}
        </div>
        {hasMore ? (
          <button
            type="button"
            className="self-start rounded-full border border-border bg-bg/30 px-4 py-2 text-sm font-semibold text-fg transition hover:border-accent/40"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? showLessLabel : showMoreLabel}
          </button>
        ) : null}
      </div>
    </article>
  )
}

export function Experience({ c }: { c: Content }) {
  return (
    <section id={sectionIds.experience} className="mt-16 scroll-mt-24">
      <SectionHeader title={c.experience.title} />
      <div className="grid gap-5">
        {c.experience.items.map((item) => (
          <ExperienceCard
            key={`${item.company}-${item.role}`}
            item={item}
            showMoreLabel={c.experience.showMore}
            showLessLabel={c.experience.showLess}
          />
        ))}
      </div>
    </section>
  )
}
