import { site } from '../config'
import { Brand } from './ui'
export function Footer() { return <footer className="footer"><div className="container"><div><Brand/><p>Diseño y desarrollo digital desde {site.city}.</p></div><a className="back-top" href="#inicio">Volver arriba ↑</a><span>© {new Date().getFullYear()} {site.name}</span></div></footer> }
