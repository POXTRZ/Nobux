import { type ReactNode } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { site } from '../config'

export type IconName = 'arrow' | 'menu' | 'close' | 'globe' | 'layers' | 'bolt' | 'check' | 'mail' | 'message' | 'plus' | 'sparkles' | 'chevron' | 'cursor'

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const shared = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  const art: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 19 19 5"/><path d="M8 5h11v11"/></>, menu: <path d="M4 7h16M4 12h16M4 17h16"/>, close: <path d="m6 6 12 12M18 6 6 18"/>,
    globe: <><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16"/></>, layers: <><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z"/><path d="m4 12.5 8 4.5 8-4.5M4 17l8 4 8-4"/></>,
    bolt: <path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z"/>, check: <path d="m5 12 4 4L19 6"/>, mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    message: <path d="M20 11.5a7.5 7.5 0 0 1-10.7 6.8L4 20l1.7-4.7A7.5 7.5 0 1 1 20 11.5Z"/>, plus: <path d="M12 5v14M5 12h14"/>, sparkles: <><path d="m12 3 1.2 4.5L17 9l-3.8 1.5L12 15l-1.2-4.5L7 9l3.8-1.5L12 3Z"/><path d="m19 15 .6 2.4L22 18l-2.4.6L19 21l-.6-2.4L16 18l2.4-.6L19 15Z"/></>,
    chevron: <path d="m7 10 5 5 5-5"/>, cursor: <path d="m5 3 14 8-6 1 3 7-3 1-3-7-5 4V3Z"/>
  }
  return <svg {...shared}>{art[name]}</svg>
}

export function Brand() { return <a className="brand" href="#inicio" aria-label={`${site.name}: inicio`}><span className="brand-mark"><i/><i/></span><span>{site.name}<b>.</b></span></a> }

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion() ?? false
  return <m.div className={className} initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .14 }} transition={{ duration: .55, delay }}>{children}</m.div>
}

export function Head({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: ReactNode; copy?: string }) {
  return <Reveal className="section-heading"><span className="eyebrow"><b>{number}</b>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</Reveal>
}

export function ScrollProgress() { const { scrollYProgress } = useScroll(); const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]); return <m.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" /> }

export function WhatsappButton() { const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hola, me gustaría cotizar un proyecto.')}`; return site.whatsapp ? <a className="whatsapp-float" href={href} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><Icon name="message"/></a> : null }
