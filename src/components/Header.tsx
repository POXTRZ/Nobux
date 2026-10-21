import { useEffect, useRef, useState } from 'react'
import { Brand, Icon } from './ui'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [['servicios', 'Servicios'], ['demo', 'Demo'], ['proyectos', 'Proyectos'], ['nosotros', 'Estudio'], ['contacto', 'Contacto']]

export function Header() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const active = useActiveSection(['inicio', ...links.map(([id]) => id)])
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [])
  useEffect(() => { if (open) navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus() }, [open])
  return <header className="header"><div className="container nav-shell"><Brand/><nav id="menu-principal" ref={navRef} className={open ? 'nav open' : 'nav'} aria-label="Navegación principal">
    {links.map(([id, label]) => <a href={`#${id}`} key={id} className={active === id ? 'active' : ''} aria-current={active === id ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
  </nav><a href="#contacto" className="nav-cta magnetic">Iniciar proyecto <Icon name="arrow" size={16}/></a><button className="menu-button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="menu-principal" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'}/></button></div></header>
}
