import { useState, type FormEvent } from 'react'
import { site } from '../config'
import { Icon } from './ui'

export function Contact() {
  const [error, setError] = useState(''); const [needsContact, setNeedsContact] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const form = new FormData(event.currentTarget); const name = String(form.get('name') || '').trim(); const details = String(form.get('details') || '').trim()
    if (!name || !details) { setError('Escribe tu nombre y cuéntanos un poco sobre tu proyecto.'); setNeedsContact(false); return }
    const text = `Hola, soy ${name}. ${details}`; setError(''); setNeedsContact(false)
    if (site.whatsapp) window.location.href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
    else if (site.email) window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Consulta de proyecto')}&body=${encodeURIComponent(text)}`
    else setNeedsContact(true)
  }
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hola, me gustaría cotizar un proyecto.')}`
  return <section className="contact" id="contacto"><div className="container contact-layout"><div className="contact-copy"><span className="eyebrow"><b>07</b>CONTACTO</span><h2>Hagamos que<br/>tu idea <em>funcione.</em></h2><p>Cuéntanos qué está frenando a tu equipo o qué quieres construir. Preparamos una ruta clara contigo.</p><div className="contact-options"><small>CANAL DE CONTACTO</small>{site.email ? <a href={`mailto:${site.email}`}><Icon name="mail"/> {site.email}</a> : <span className="dev-contact">Agrega email o WhatsApp en <code>src/config.ts</code> antes de publicar.</span>}{site.whatsapp && <a href={whatsappHref} target="_blank" rel="noreferrer"><Icon name="message"/> WhatsApp</a>}</div></div><form className="contact-form" onSubmit={submit} noValidate><p className="form-title"><Icon name="sparkles" size={15}/> CUÉNTANOS TU IDEA</p><label>Nombre <b>*</b><input name="name" autoComplete="name" placeholder="¿Cómo te llamas?"/></label><label>Tu negocio <small>(opcional)</small><input name="business" placeholder="Nombre o giro"/></label><label>¿Qué necesitas?<select name="type" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Sitio web</option><option>Sistema o plataforma</option><option>Reservas o inventario</option><option>Automatización</option><option>Otro</option></select></label><label>Cuéntanos un poco <b>*</b><textarea name="details" rows={4} placeholder="Qué quieres mejorar o construir"/></label>{error && <p className="form-error" role="alert">{error}</p>}{needsContact && <p className="form-notice" role="status">Tu mensaje no se envió: falta configurar un canal de contacto.</p>}<button className="button coral magnetic" type="submit">Enviar mensaje <Icon name="arrow"/></button><p className="form-hint">Tus datos no se almacenan en esta demostración.</p></form></div></section>
}
