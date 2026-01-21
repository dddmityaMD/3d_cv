import { useCallback, useEffect, useRef, useState } from 'react'

export function useCarouselRotation(disabled: boolean = false) {
  const [rotation, setRotation] = useState(0)
  const isDragging = useRef(false)
  const lastX = useRef(0)

  const handleStart = useCallback(
    (x: number) => {
      if (disabled) return
      isDragging.current = true
      lastX.current = x
    },
    [disabled],
  )

  const handleMove = useCallback(
    (x: number) => {
      if (disabled || !isDragging.current) return
      const delta = x - lastX.current
      setRotation((prev) => prev - delta * 0.005)
      lastX.current = x
    },
    [disabled],
  )

  const handleEnd = useCallback(() => {
    isDragging.current = false
  }, [])

  useEffect(() => {
    if (disabled) return

    const handleTouchStart = (e: TouchEvent) => handleStart(e.touches[0]!.clientX)
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0]!.clientX)
    const handleTouchEnd = handleEnd

    const handleMouseDown = (e: MouseEvent) => handleStart(e.clientX)
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX)
    const handleMouseUp = handleEnd

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [disabled, handleStart, handleMove, handleEnd])

  return rotation
}
