import type { Lang } from '../content/data'
import clsx from 'clsx'

export function LanguageToggle({
  lang,
  setLang,
}: {
  lang: Lang
  setLang: (lang: Lang) => void
}) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-card p-1 text-sm shadow-soft"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        className={clsx(
          'rounded-full px-2.5 py-1 font-mono text-xs transition',
          lang === 'ru'
            ? 'bg-accent/15 text-fg'
            : 'text-muted hover:text-fg',
        )}
        onClick={() => setLang('ru')}
        aria-pressed={lang === 'ru'}
      >
        RU
      </button>
      <button
        type="button"
        className={clsx(
          'rounded-full px-2.5 py-1 font-mono text-xs transition',
          lang === 'en'
            ? 'bg-accent/15 text-fg'
            : 'text-muted hover:text-fg',
        )}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}
