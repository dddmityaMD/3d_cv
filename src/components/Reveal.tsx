import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactNode
  reducedMotion?: boolean
  delayMs?: number
  className?: string
}

export function Reveal({ children, reducedMotion, delayMs = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasIntersected, setHasIntersected] = useState(false)
  const visible = Boolean(reducedMotion || hasIntersected)

  useEffect(() => {
    if (reducedMotion) return

    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setHasIntersected(true)
        io.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [reducedMotion])

  return (
    <div
      ref={ref}
      className={clsx('reveal', visible && 'reveal-in', className)}
      style={visible ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
