import { m, useReducedMotion } from 'motion/react'

const lines = ['La tecnología útil', 'no necesita ruido.', 'Necesita dirección,', 'criterio y oficio.']

export function Manifesto() {
  const reduced = useReducedMotion() ?? false
  return <section className="manifesto" aria-labelledby="manifesto-title"><div className="container"><p className="manifesto-index">01 / MANIFIESTO</p><h2 id="manifesto-title">{lines.map((line, index) => <span key={line}><m.i initial={reduced ? false : { y: '105%' }} whileInView={{ y: '0%' }} viewport={{ once: true, amount: .55 }} transition={{ duration: .72, delay: index * .08, ease: [.16, 1, .3, 1] }}>{line}</m.i></span>)}</h2><div className="manifesto-foot"><span>DISEÑAMOS PARA QUE LAS PERSONAS Y LOS PROCESOS AVANCEN JUNTOS.</span><i/></div></div></section>
}
