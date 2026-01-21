import { useEffect, useMemo } from 'react'
import { Header } from './components/Header'
import { content, type Lang } from './content/data'
import { useLocalStorageState } from './lib/useLocalStorageState'
import { usePrefersReducedMotion } from './lib/usePrefersReducedMotion'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'

type Theme = 'light' | 'dark'

function App() {
  const [lang, setLang] = useLocalStorageState<Lang>('cv_lang', 'ru')
  const prefersReducedMotion = usePrefersReducedMotion()

  const [theme, setTheme] = useLocalStorageState<Theme>('cv_theme', 'light')

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = prefersReducedMotion
      ? 'auto'
      : 'smooth'
  }, [prefersReducedMotion])

  const c = useMemo(() => content[lang], [lang])

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded-lg bg-card px-3 py-2 text-sm text-fg shadow-soft"
      >
        {c.a11y.skip}
      </a>

      <Header
        c={c}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      <main id="main" className="mx-auto max-w-6xl px-4 pb-24 overflow-x-hidden">
        <Hero c={c} prefersReducedMotion={prefersReducedMotion} />
        <About c={c} />
        <Experience c={c} />
        <Services c={c} />
        <Projects c={c} />
        <Skills c={c} />
        <Contact c={c} />

        <footer className="mt-16 border-t border-border pt-6 text-sm text-muted">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>{c.footer.rights}</span>
            <span className="font-mono opacity-80">{c.footer.stack}</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
