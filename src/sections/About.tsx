import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionHeader } from './SectionHeader'

export function About({ c }: { c: Content }) {
  return (
    <section id={sectionIds.about} className="mt-16 scroll-mt-24">
      <SectionHeader title={c.about.title} />
      <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
        <div className="space-y-2 text-base leading-relaxed text-fg">
          {c.about.positioning.map((p: string) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg/40 p-4">
            <div className="text-xs font-mono text-muted">{c.about.outcomesLabel}</div>
            <ul className="mt-3 space-y-2 break-words text-sm text-fg">
              {c.about.outcomes.map((b: string) => (
                <li key={b} className="leading-relaxed">
                  <span className="mr-2 text-accent">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-bg/40 p-4">
            <div className="text-xs font-mono text-muted">{c.about.operatingLabel}</div>
            <ul className="mt-3 space-y-2 break-words text-sm text-fg">
              {c.about.operatingModel.map((b: string) => (
                <li key={b} className="leading-relaxed">
                  <span className="mr-2 text-accent">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-bg/40 p-4 md:col-span-2">
            <div className="text-xs font-mono text-muted">{c.about.focusLabel}</div>
            <div className="mt-2 text-sm text-fg">{c.about.focus}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
