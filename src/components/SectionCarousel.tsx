import { useMemo } from 'react'
import type { Content } from '../content/data'
import { scrollToId } from '../lib/scroll'

type NavItem = {
  id: string
  label: string
  icon?: string
}

const icons: Record<string, string> = {
  about: '👤',
  experience: '💼',
  services: '🚀',
  projects: '📦',
  skills: '⚡',
  contact: '📬',
}

export function SectionCarousel({
  c,
  prefersReducedMotion,
}: {
  c: Content
  prefersReducedMotion: boolean
}) {
  const items = useMemo<NavItem[]>(
    () =>
      c.header.nav.map((n) => ({
        id: n.id,
        label: n.label,
        icon: icons[n.id],
      })),
    [c.header.nav],
  )

  return (
    <div className="rounded-3xl border border-border bg-card/60 p-4 shadow-soft">
      <h3 className="mb-3 text-sm font-semibold text-muted">
        {c.hero.carouselTitle}
      </h3>
      <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:overflow-visible">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="flex flex-shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-left transition hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
            onClick={() =>
              scrollToId(item.id, prefersReducedMotion ? 'auto' : 'smooth')
            }
          >
            <span className="text-lg" role="img" aria-hidden="true">
              {item.icon}
            </span>
            <span className="text-sm font-medium text-fg">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
