import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (!sections.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        const top = visible[0]?.target
        if (!top) return
        setActiveId(top.id)
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.4, 0.6, 0.8],
        rootMargin: '-20% 0px -65% 0px',
      },
    )

    for (const el of sections) io.observe(el)
    return () => io.disconnect()
  }, [ids])

  return activeId
}
