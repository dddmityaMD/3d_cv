import clsx from 'clsx'
import type { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { useEffect, useRef } from 'react'

type Node = {
  id: string
  label: string
}

type Props = {
  nodes: Node[]
  activeId: string | null
  index: number
  setIndex: Dispatch<SetStateAction<number>>
  reducedMotion: boolean
  onNavigate: (id: string) => void
  prevLabel: string
  nextLabel: string
}

function mod(n: number, m: number) {
  return ((n % m) + m) % m
}

const getNow = () => Date.now()

function markInteraction(ref: MutableRefObject<number>) {
  ref.current = getNow()
}

export function Carousel3DNav({
  nodes,
  activeId,
  index,
  setIndex,
  reducedMotion,
  onNavigate,
  prevLabel,
  nextLabel,
}: Props) {
  const count = nodes.length
  const lastUserInteraction = useRef(0)

  useEffect(() => {
    if (reducedMotion) return
    if (count <= 1) return

    const t = window.setInterval(() => {
      const idleMs = Date.now() - lastUserInteraction.current
      if (idleMs < 1500) return
      setIndex((v) => mod(v + 1, count))
    }, 3000)

    return () => window.clearInterval(t)
  }, [count, reducedMotion, setIndex])

  if (!count) return null

  return (
    <div className="mt-3">
      <div
        className="relative h-[260px] w-full overflow-hidden rounded-3xl border border-border bg-bg/20 shadow-soft"
        style={{ perspective: '1000px', perspectiveOrigin: '50% 50%' }}
      >
        {nodes.map((n, i) => {
          const isActive = activeId === n.id
          const rawOffset = mod(i - index, count)
          const offset = rawOffset > count / 2 ? rawOffset - count : rawOffset
          const steps = Math.abs(offset)
          const isVisible = steps <= 1
          const isCenter = steps === 0
          const opacity = steps === 0 ? 1 : 0.65
          const scale = steps === 0 ? 1.04 : 0.94
          const translateX = offset * 62
          const zIndex = steps === 0 ? 30 : 10

          return (
            <button
              key={n.id}
              type="button"
              className={clsx(
                'absolute left-1/2 top-[50%] h-[160px] w-[44%] rounded-2xl border bg-card/90 px-5 py-5 text-left shadow-soft transition',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40',
                isCenter
                  ? 'border-accent/70 bg-accent/15 shadow-[0_18px_40px_rgba(15,118,110,0.18)]'
                  : isActive
                    ? 'border-accent/45 bg-accent/8'
                    : 'border-border hover:border-accent/35',
              )}
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale})`,
                opacity: isVisible ? opacity : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
                zIndex,
                transition: reducedMotion
                  ? undefined
                  : 'transform 420ms ease, opacity 320ms ease',
              }}
              onClick={() => {
                markInteraction(lastUserInteraction)
                if (index === i) {
                  onNavigate(n.id)
                  return
                }
                setIndex(i)
              }}
            >
                <div className="flex h-full flex-col justify-center">
                  <div className="text-xs font-mono text-muted">{i + 1}/{count}</div>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div className="text-lg font-semibold tracking-tight text-fg">
                      {n.label}
                    </div>
                    <span
                      className={clsx(
                        'grid h-8 w-8 place-items-center rounded-full border shadow-soft',
                        isCenter
                          ? 'border-accent/60 bg-accent/15 text-fg'
                          : 'border-border bg-bg/30 text-muted',
                      )}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            )
          })}

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <button
            type="button"
            className="rounded-full border border-border bg-card/80 px-3 py-2 text-xs font-mono text-fg shadow-soft transition hover:border-accent/40"
            onClick={() => {
              markInteraction(lastUserInteraction)
              setIndex(mod(index - 1, count))
            }}
            aria-label={prevLabel}
          >
            {prevLabel}
          </button>
          <button
            type="button"
            className="rounded-full border border-border bg-card/80 px-3 py-2 text-xs font-mono text-fg shadow-soft transition hover:border-accent/40"
            onClick={() => {
              markInteraction(lastUserInteraction)
              setIndex(mod(index + 1, count))
            }}
            aria-label={nextLabel}
          >
            {nextLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
