import clsx from 'clsx'
import type { Content, Lang } from '../content/data'
import { scrollToId } from '../lib/scroll'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

type Theme = 'light' | 'dark'

export function Header({
  c,
  lang,
  setLang,
  theme,
  setTheme,
}: {
  c: Content
  lang: Lang
  setLang: (lang: Lang) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="inline-flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-card shadow-soft">
            <span className="font-mono text-sm text-accent">{c.header.brand}</span>
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            {c.header.name}
          </span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-5 text-sm text-muted md:flex"
          aria-label="Primary"
        >
          {c.header.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={clsx('hover:text-fg')}
              onClick={(e) => {
                e.preventDefault()
                scrollToId(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-4">
          <LanguageToggle lang={lang} setLang={setLang} />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
        <nav
          className="scrollbar-hide flex gap-3 overflow-x-auto pb-1 text-sm text-muted -mx-2 px-2"
          aria-label="Primary"
        >
          {c.header.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap rounded-full border border-border bg-card px-3 py-1.5 shadow-soft"
              onClick={(e) => {
                e.preventDefault()
                scrollToId(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
