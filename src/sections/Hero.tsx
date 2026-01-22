import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { Carousel3DNav } from '../components/Carousel3DNav'
import { scrollToId } from '../lib/scroll'

export function Hero({
  c,
  prefersReducedMotion,
  activeSectionId,
}: {
  c: Content
  prefersReducedMotion: boolean
  activeSectionId: string | null
}) {
  const navNodes = useMemo(
    () => c.header.nav.map((n) => ({ id: n.id, label: n.label })),
    [c.header.nav],
  )

  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    if (!activeSectionId) return
    const idx = navNodes.findIndex((n) => n.id === activeSectionId)
    if (idx < 0 || idx === carouselIndex) return
    if (typeof window === 'undefined') return
    const raf = window.requestAnimationFrame(() => {
      setCarouselIndex(idx)
    })
    return () => window.cancelAnimationFrame(raf)
  }, [activeSectionId, carouselIndex, navNodes])

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

          <h1 className="mt-5 w-full break-words text-balance text-3xl font-semibold tracking-tight leading-tight hyphens-auto sm:text-5xl">
            {c.hero.name}
          </h1>
          <p className="mt-2 w-full break-words text-lg text-muted sm:text-xl">
            {c.hero.title}
          </p>

          {c.hero.proof?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {c.hero.proof.map((p: string) => (
                <span
                  key={p}
                  className="rounded-full border border-border bg-bg/40 px-3 py-1 text-xs font-mono text-muted shadow-soft"
                >
                  {p}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-4 w-full rounded-xl border border-border bg-card/60 p-4 shadow-soft">
            <div className="w-full space-y-2 break-words text-base text-muted sm:text-base">
              {c.hero.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

           <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
             <a
               className={clsx(
                 'inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg shadow-soft transition hover:opacity-95 sm:flex-initial sm:justify-start',
               )}
               href={c.hero.links.hh}
               target="_blank"
               rel="noreferrer"
             >
               {c.hero.ctas.hh}
             </a>
             <button
               type="button"
               className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg shadow-soft transition hover:border-accent/40 sm:flex-initial sm:justify-start"
               onClick={() => scrollToId(sectionIds.services)}
             >
               {c.hero.ctas.services}
             </button>
             <button
               type="button"
               className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg shadow-soft transition hover:border-accent/40 sm:flex-initial sm:justify-start"
               onClick={() => scrollToId(sectionIds.contact)}
             >
               {c.hero.ctas.contact}
             </button>
           </div>
        </div>

         <div>
            <div className="rounded-3xl border border-border bg-card/60 p-5 shadow-soft">
              <div className="text-xs font-mono text-muted">{c.hero.carouselTitle}</div>

              <div className="mt-3">
                <Carousel3DNav
                  nodes={navNodes}
                  activeId={activeSectionId}
                  index={carouselIndex}
                  setIndex={setCarouselIndex}
                  reducedMotion={prefersReducedMotion}
                  onNavigate={(id: string) =>
                    scrollToId(id, prefersReducedMotion ? 'auto' : 'smooth')
                  }
                  prevLabel={c.hero.carouselPrev}
                  nextLabel={c.hero.carouselNext}
                />

                {c.hero.constellationHint ? (
                  <div className="mt-3 text-xs text-muted leading-relaxed">
                    {c.hero.constellationHint}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
