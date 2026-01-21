import clsx from 'clsx'

type Theme = 'light' | 'dark'

export function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: Theme
  setTheme: (theme: Theme) => void
}) {
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-muted shadow-soft transition hover:text-fg',
      )}
      aria-label="Toggle theme"
      title="Theme"
    >
      <span className="font-mono text-xs">{theme === 'dark' ? 'DARK' : 'LIGHT'}</span>
    </button>
  )
}
