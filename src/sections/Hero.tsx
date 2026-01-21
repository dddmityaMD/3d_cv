import clsx from 'clsx'
import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionCarousel } from '../components/SectionCarousel'
import { scrollToId } from '../lib/scroll'

export function Hero({
  c,
  prefersReducedMotion,
}: {
  c: Content
  prefersReducedMotion: boolean
}) {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {c.hero.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-mono text-muted shadow-soft"
              >
                {b}
              </span>
            ))}
          </div>

          <h1 className="mt-5 w-full break-words text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c.hero.name}
          </h1>
          <p className="mt-2 w-full break-words text-xl text-muted">
            {c.hero.title}
          </p>

          <div className="mt-4 w-full rounded-xl border border-border bg-card/60 p-4 shadow-soft">
            <div className="w-full space-y-2 break-words text-base text-muted">
              {c.hero.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

           <div className="mt-7 flex w-full flex-wrap gap-3">
             <a
               className={clsx(
                 'inline-flex flex-1 items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg shadow-soft transition hover:opacity-95 sm:flex-initial sm:justify-start',
               )}
               href={c.hero.links.hh}
               target="_blank"
               rel="noreferrer"
             >
               {c.hero.ctas.hh}
             </a>
             <button
               type="button"
               className="inline-flex flex-1 items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg shadow-soft transition hover:border-accent/40 sm:flex-initial sm:justify-start"
               onClick={() => scrollToId(sectionIds.services)}
             >
               {c.hero.ctas.services}
             </button>
             <button
               type="button"
               className="inline-flex flex-1 items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg shadow-soft transition hover:border-accent/40 sm:flex-initial sm:justify-start"
               onClick={() => scrollToId(sectionIds.contact)}
             >
               {c.hero.ctas.contact}
             </button>
           </div>
        </div>

        <div>
          <SectionCarousel c={c} prefersReducedMotion={prefersReducedMotion} />
        </div>
      </div>
    </section>
  )
}
