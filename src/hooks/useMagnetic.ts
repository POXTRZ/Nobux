import { useEffect, useRef } from 'react'

export function useMagnetic<T extends HTMLElement>(strength = 0.16) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const element = ref.current
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    if (!element || !media.matches) return
    const move = (event: PointerEvent) => {
      const box = element.getBoundingClientRect()
      element.style.setProperty('--magnet-x', `${(event.clientX - box.left - box.width / 2) * strength}px`)
      element.style.setProperty('--magnet-y', `${(event.clientY - box.top - box.height / 2) * strength}px`)
    }
    const reset = () => { element.style.setProperty('--magnet-x', '0px'); element.style.setProperty('--magnet-y', '0px') }
    element.addEventListener('pointermove', move); element.addEventListener('pointerleave', reset)
    return () => { element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', reset) }
  }, [strength])
  return ref
}
