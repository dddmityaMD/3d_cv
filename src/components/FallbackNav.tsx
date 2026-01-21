import type { Content } from '../content/data'
import { scrollToId } from '../lib/scroll'

export function FallbackNav({ c }: { c: Content }) {
  return (
    <nav aria-label="Section navigation" className="mt-4">
      <div className="flex flex-wrap gap-2">
        {c.header.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted shadow-soft transition hover:text-fg"
            onClick={(e) => {
              e.preventDefault()
              scrollToId(item.id)
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
