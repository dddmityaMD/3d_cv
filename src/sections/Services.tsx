import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { Reveal } from '../components/Reveal'
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion'
import { SectionHeader } from './SectionHeader'

export function Services({ c }: { c: Content }) {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id={sectionIds.services} className="mt-16 scroll-mt-24">
      <SectionHeader title={c.services.title} subtitle={c.services.note} />
      <div className="grid gap-5 md:grid-cols-2">
        {c.services.items.map((s, i) => (
          <Reveal key={s.title} reducedMotion={reducedMotion} delayMs={i * 70}>
            <article className="rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <div className="mt-3 text-sm text-fg">
                <span className="font-mono text-xs text-muted">What you get:</span>
                <div className="mt-1 leading-relaxed">{s.what}</div>
              </div>
              <div className="mt-3 text-sm text-fg">
                <span className="font-mono text-xs text-muted">Timeline:</span>
                <div className="mt-1 leading-relaxed">{s.timeline}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
