import { useState } from 'react'
import type { Content } from '../content/data'
import { sectionIds } from '../content/data'
import { SectionHeader } from './SectionHeader'

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export function Contact({ c }: { c: Content }) {
  const [copiedKey, setCopiedKey] = useState<'tg' | 'mail' | null>(null)

  return (
    <section id={sectionIds.contact} className="mt-16 scroll-mt-24">
      <SectionHeader title={c.contact.title} subtitle={c.contact.invite} />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
          <div className="text-xs font-mono text-muted">{c.contact.telegramLabel}</div>
          <div className="mt-2 flex items-center justify-between gap-3">
            <a
              className="text-lg font-semibold"
              href={`https://t.me/${c.contact.telegram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
            >
              {c.contact.telegram}
            </a>
            <button
              type="button"
              className="rounded-full border border-border bg-bg/30 px-4 py-2 text-sm font-semibold text-fg transition hover:border-accent/40"
              onClick={async () => {
                const ok = await copy(c.contact.telegram)
                if (!ok) return
                setCopiedKey('tg')
                window.setTimeout(() => setCopiedKey(null), 1000)
              }}
            >
              {copiedKey === 'tg' ? c.contact.copied : c.contact.copy}
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
          <div className="text-xs font-mono text-muted">{c.contact.emailLabel}</div>
          <div className="mt-2 flex items-center justify-between gap-3">
            <a className="text-lg font-semibold" href={`mailto:${c.contact.email}`}>
              {c.contact.email}
            </a>
            <button
              type="button"
              className="rounded-full border border-border bg-bg/30 px-4 py-2 text-sm font-semibold text-fg transition hover:border-accent/40"
              onClick={async () => {
                const ok = await copy(c.contact.email)
                if (!ok) return
                setCopiedKey('mail')
                window.setTimeout(() => setCopiedKey(null), 1000)
              }}
            >
              {copiedKey === 'mail' ? c.contact.copied : c.contact.copy}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 text-sm text-muted">{c.contact.tz}</div>
    </section>
  )
}
