import { useRef, type PointerEvent } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Icon } from './ui'
import { useMagnetic } from '../hooks/useMagnetic'

export function Hero() {
  const reduced = useReducedMotion() ?? false
  const sectionRef = useRef<HTMLElement>(null)
  const primaryRef = useMagnetic<HTMLAnchorElement>()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -56])
  const words = ['Diseñamos', 'sistemas digitales', 'para que tu negocio', 'avance de verdad.']
  const trackPointer = (event: PointerEvent<HTMLElement>) => {
    if (reduced || event.pointerType !== 'mouse') return
    const box = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--orbit-x', `${((event.clientX - box.left) / box.width - .5) * 16}px`)
    event.currentTarget.style.setProperty('--orbit-y', `${((event.clientY - box.top) / box.height - .5) * 16}px`)
  }
  return <section className="hero" id="inicio" ref={sectionRef} onPointerMove={trackPointer} onPointerLeave={event => { event.currentTarget.style.setProperty('--orbit-x', '0px'); event.currentTarget.style.setProperty('--orbit-y', '0px') }}>
    <div className="hero-sun"/><div className="hero-gridlines"/><div className="grain"/><div className="container hero-grid"><div className="hero-copy"><m.p className="eyebrow hero-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><b>↗</b> NOBUX / AFTER DARK · QUERÉTARO, MX</m.p><h1>{words.map((word, index) => <m.span className={index > 1 ? 'accent-line' : ''} key={word} initial={reduced ? false : { opacity: 0, y: 42, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }} transition={{ delay: .13 + index * .1, duration: .65 }}>{word}</m.span>)}</h1><m.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }}>Sitios web, sistemas y automatizaciones que convierten ideas complejas en operaciones más claras.</m.p><m.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .84 }}><a ref={primaryRef} className="button primary magnetic" href="#contacto">Iniciar una conversación <Icon name="arrow"/></a><a className="text-link" href="#proyectos">Explorar el trabajo <span>↓</span></a></m.div></div>
      <m.div className="hero-orbit" style={{ y }} initial={reduced ? false : { opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }} aria-hidden="true"><div className="orbit-aura"/><div className="orbital-rings"><i/><i/><i/></div><div className="orbit-ball ball-a"/><div className="orbit-ball ball-b"/><div className="orbit-ball ball-c"/><div className="orbit-core"><span>N</span></div><div className="orbit-chip chip-top">ESTRATEGIA <b>+</b> CÓDIGO</div><div className="orbit-chip chip-bottom">HECHO PARA OPERAR <b>↗</b></div><div className="orbit-label">AFTER DARK <i>✦</i></div></m.div></div><div className="hero-bottom container"><span>DESLIZA PARA ENTRAR</span><i/></div>
  </section>
}
