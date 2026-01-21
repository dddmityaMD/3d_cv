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
    <article className="max-w-full rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
      <div className="flex max-w-full flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="max-w-full break-words text-lg font-semibold tracking-tight">
            {item.role}
          </div>
          <div className="mt-0.5 max-w-full break-words text-sm text-muted">
            {item.company}
          </div>
        </div>
        <div className="font-mono text-xs text-muted">{item.dates}</div>
      </div>

      {hasMore && (
        <div className="mt-3 flex justify-start sm:mt-4">
          <button
            type="button"
            className="rounded-full border border-border bg-bg/30 px-4 py-2 text-sm font-semibold text-fg transition hover:border-accent/40"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? showLessLabel : showMoreLabel}
          </button>
        </div>
      )}

      <ul className="mt-4 max-w-full space-y-2 break-words text-sm text-fg">
        {bullets.map((b) => (
          <li key={b} className="leading-relaxed">
            <span className="mr-2 text-accent">•</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-4 max-w-full break-words text-xs text-muted">
        <span className="font-mono">Stack:</span> {item.stack}
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
