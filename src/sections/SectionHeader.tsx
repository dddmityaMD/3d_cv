import type { ReactNode } from 'react'

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: ReactNode
}) {
  return (
    <div className="mb-6">
      <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? <div className="mt-2 text-sm text-muted">{subtitle}</div> : null}
    </div>
  )
}
