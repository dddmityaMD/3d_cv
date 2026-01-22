function resolveScrollBehavior(behavior?: ScrollBehavior) {
  if (behavior) return behavior
  if (typeof document === 'undefined') return 'auto' as const
  return document.documentElement.style.scrollBehavior === 'auto' ? 'auto' : 'smooth'
}

export function scrollToId(id: string, behavior?: ScrollBehavior) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: resolveScrollBehavior(behavior), block: 'start' })
}
