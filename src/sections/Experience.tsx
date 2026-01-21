import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionHeader } from './SectionHeader'

function ExperienceCard({
  item,
}: {
  item: Content['experience']['items'][number]
}) {
  const bullets = [...item.bullets, ...(item.moreBullets ?? [])]

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
          />
        ))}
      </div>
    </section>
  )
}
