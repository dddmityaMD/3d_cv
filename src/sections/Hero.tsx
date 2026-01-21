import clsx from 'clsx'
import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { FallbackNav } from '../components/FallbackNav'
import { hasWebglSupport } from '../lib/webgl'
import { scrollToId } from '../lib/scroll'

const ThreeConstellationNav = lazy(
  () => import('../components/ThreeConstellationNav'),
)

export function Hero({
  c,
  prefersReducedMotion,
}: {
  c: Content
  prefersReducedMotion: boolean
}) {
  const [show3d, setShow3d] = useState(false)
  const [canWebgl, setCanWebgl] = useState(false)

  useEffect(() => {
    setCanWebgl(hasWebglSupport())
    const t = window.setTimeout(() => setShow3d(true), 0)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    setShow3d(canWebgl)
  }, [canWebgl])

  const nodes = useMemo(
    () => c.header.nav.map((n) => ({ id: n.id, label: n.label })),
    [c.header.nav],
  )

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

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c.hero.heading}
          </h1>

          <div className="mt-4 space-y-2 text-base text-muted">
            {c.hero.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

           <div className="mt-7 flex flex-wrap gap-3">
             <a
               className={clsx(
                 'inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg shadow-soft transition hover:opacity-95',
               )}
               href={c.hero.links.hh}
               target="_blank"
               rel="noreferrer"
             >
               {c.hero.ctas.hh}
             </a>
             <button
               type="button"
               className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg shadow-soft transition hover:border-accent/40"
               onClick={() => scrollToId(sectionIds.services)}
             >
               {c.hero.ctas.services}
             </button>
             <button
               type="button"
               className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg shadow-soft transition hover:border-accent/40"
               onClick={() => scrollToId(sectionIds.contact)}
             >
               {c.hero.ctas.contact}
             </button>
           </div>
        </div>

        <div>
          {canWebgl && show3d ? (
            <Suspense
              fallback={
                <div className="h-[260px] w-full animate-pulse rounded-3xl border border-border bg-card/60 shadow-soft" />
              }
            >
              <ThreeConstellationNav
                nodes={nodes}
                reducedMotion={prefersReducedMotion}
                onNavigate={(id) =>
                  scrollToId(id, prefersReducedMotion ? 'auto' : 'smooth')
                }
              />
            </Suspense>
          ) : (
            <div className="rounded-3xl border border-border bg-card/60 p-5 shadow-soft">
              <p className="text-sm text-muted">{c.hero.constellationHint}</p>
            </div>
          )}
          <FallbackNav c={c} />
        </div>
      </div>
    </section>
  )
}
