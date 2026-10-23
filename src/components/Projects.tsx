import { useState, type KeyboardEvent } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import { projects, type Project } from '../config'
import { Head, Reveal } from './ui'

const lightweightViews = ['inicio y resumen semanal', 'progreso muscular', 'registro de entrenamiento']
const schoolViews = [
  { id: 'inicio', label: 'Inicio', description: 'Página principal', thumbnail: 'HOME' },
  { id: 'inscripciones', label: 'Inscripciones', description: 'Consulta de ingreso', thumbnail: 'INFO' },
  { id: 'historia', label: 'Historia', description: 'Historia institucional', thumbnail: '1907' },
]

function LightWeightGallery({ project }: { project: Project }) {
  const reduced = useReducedMotion() ?? false
  return <div className="project-gallery lightweight-gallery" aria-label={`Galería de ${project.title}`}>{project.images.map((image, index) => <m.figure className={`phone-shot phone-${index}`} key={image} initial={reduced ? false : { opacity: 0, y: 42, rotate: index === 0 ? -8 : index === 2 ? 8 : 0 }} whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -5 : index === 2 ? 5 : 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .72, delay: index * .12, ease: [.16, 1, .3, 1] }}><img src={image} alt={`${project.title}: ${lightweightViews[index]}`} width="739" height="1600" loading="lazy"/></m.figure>)}<span className="gallery-note">PRODUCTO MÓVIL / VISTAS REALES</span></div>
}

function SchoolGallery({ project }: { project: Project }) {
  const [activeView, setActiveView] = useState(0)
  const reduced = useReducedMotion() ?? false
  const current = schoolViews[activeView]
  const selectView = (index: number) => setActiveView((index + schoolViews.length) % schoolViews.length)
  const handleKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); selectView(activeView + 1) }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { event.preventDefault(); selectView(activeView - 1) }
    if (event.key === 'Home') { event.preventDefault(); selectView(0) }
    if (event.key === 'End') { event.preventDefault(); selectView(schoolViews.length - 1) }
  }
  return <div className="project-gallery school-gallery interactive-school-gallery" aria-label={`Showcase interactivo de ${project.title}`}>
    <div className="school-browser-bar"><span className="browser-dots" aria-hidden="true"><i/><i/><i/></span><span className="browser-address">colegiomiguelhidalgo.edu.mx</span><span className="browser-status">SITIO INSTITUCIONAL</span></div>
    <div className="school-view-tabs" role="tablist" aria-label="Vistas del proyecto" onKeyDown={handleKeys}>{schoolViews.map((view, index) => <button type="button" key={view.id} role="tab" id={`school-tab-${view.id}`} aria-controls="school-panel" aria-selected={activeView === index} tabIndex={activeView === index ? 0 : -1} onClick={() => selectView(index)}>{view.label}</button>)}</div>
    <div id="school-panel" className="school-browser-screen" role="tabpanel" aria-labelledby={`school-tab-${current.id}`}><AnimatePresence initial={false} mode="wait"><m.figure key={current.id} initial={reduced ? false : { opacity: 0, x: 18, clipPath: 'inset(0 0 0 10%)' }} animate={{ opacity: 1, x: 0, clipPath: 'inset(0 0 0 0)' }} exit={reduced ? undefined : { opacity: 0, x: -12, clipPath: 'inset(0 10% 0 0)' }} transition={{ duration: .4, ease: [.16, 1, .3, 1] }}><img src={project.images[activeView]} alt={`${project.title}: ${current.description}`} width="1366" height="720" loading={activeView === 0 ? 'eager' : 'lazy'}/></m.figure></AnimatePresence></div>
    <div className="school-view-meta"><span>{String(activeView + 1).padStart(2, '0')} / 03</span><b>{current.description}</b><i>Selecciona una vista</i></div>
    <div className="school-thumbnails" aria-label="Capturas disponibles">{schoolViews.map((view, index) => <button type="button" key={view.id} className={activeView === index ? 'active' : ''} aria-label={`Mostrar ${view.label}`} aria-pressed={activeView === index} onClick={() => selectView(index)}><img src={project.images[index]} alt="" width="320" height="180" loading="lazy"/><span>{view.thumbnail}</span></button>)}</div>
  </div>
}

function ProjectGallery({ project }: { project: Project }) { return project.tone === 'lightweight' ? <LightWeightGallery project={project}/> : <SchoolGallery project={project}/> }

export function Projects() {
  return <section className="section projects" id="proyectos"><div className="container"><div className="project-intro"><Head number="04" eyebrow="TRABAJO REAL" title={<>Proyectos hechos<br/><em>para usarse.</em></>}/><Reveal><p>Dos productos construidos alrededor de necesidades concretas: una aplicación para entrenar con seguimiento y un sitio que facilita la información de una comunidad educativa.</p></Reveal></div><div className="projects-list real-projects">{projects.map((project, index) => <Reveal className={`project-showcase ${project.tone}`} key={project.title} delay={index * .08}><article><ProjectGallery project={project}/><div className="project-detail"><div className="project-number">0{index + 1}<span>PROYECTO</span></div><div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div></div></article></Reveal>)}</div></div></section>
}
