import { useMemo, useState } from 'react'
import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionHeader } from './SectionHeader'

function ExperienceCard({
  item,
  showMore,
  showLess,
}: {
  item: Content['experience']['items'][number]
  showMore: string
  showLess: string
}) {
  const [expanded, setExpanded] = useState(false)

  const allBullets = useMemo(
    () => [...item.bullets, ...(item.moreBullets ?? [])],
    [item.bullets, item.moreBullets],
  )
  const previewCount = 2
  const canToggle = allBullets.length > previewCount
  const bullets = expanded ? allBullets : allBullets.slice(0, previewCount)

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

      <ul className="mt-4 max-w-full space-y-2 break-words text-sm text-fg">
        {bullets.map((b) => (
          <li key={b} className="leading-relaxed">
            <span className="mr-2 text-accent">•</span>
            {b}
          </li>
        ))}
      </ul>

      {canToggle && (
        <button
          type="button"
          className="mt-4 inline-flex items-center justify-center rounded-full border border-border bg-bg/40 px-4 py-2 text-xs font-mono text-fg shadow-soft transition hover:border-accent/40"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? showLess : showMore}
        </button>
      )}

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
            showMore={c.experience.showMore}
            showLess={c.experience.showLess}
          />
        ))}
      </div>
    </section>
  )
}
