import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const nodes = ids.map(id => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node))
    let frame = 0
    const update = () => {
      frame = 0
      const readingLine = window.innerHeight * .3
      const closest = nodes.reduce((winner, node) => Math.abs(node.getBoundingClientRect().top - readingLine) < Math.abs(winner.getBoundingClientRect().top - readingLine) ? node : winner, nodes[0])
      if (closest) setActive(closest.id)
    }
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => { window.removeEventListener('scroll', requestUpdate); window.removeEventListener('resize', requestUpdate); if (frame) cancelAnimationFrame(frame) }
  }, [ids])
  return active
}
