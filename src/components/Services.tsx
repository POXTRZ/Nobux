import { useState } from 'react'
import { Head, Icon, Reveal } from './ui'

function InventoryDemo() {
  const [stock, setStock] = useState(7)
  return <div className="product-demo inventory-product"><div className="product-demo-bar"><span>OPERACIÓN / INVENTARIO</span><i>DATOS FICTICIOS</i></div><div className="inventory-overview"><div><small>Productos activos</small><b>128</b><em>+12 % este mes</em></div><div className="inventory-spark">{[38, 55, 47, 82, 62, 96, 74].map((height, index) => <i key={index} style={{ height: `${height}%` }}/>)}</div></div><div className="inventory-table"><div><span>Producto</span><span>Existencia</span><span>Acción</span></div><div><b>Granola premium</b><strong>{stock} unidades</strong><p><button onClick={() => setStock(Math.max(0, stock - 1))} aria-label="Restar una unidad de granola">−</button><button onClick={() => setStock(stock + 1)} aria-label="Sumar una unidad de granola">+</button></p></div><div><b>Matcha ceremonial</b><strong>14 unidades</strong><em>En orden</em></div></div></div>
}

function WebsiteDemo() {
  const [page, setPage] = useState<'inicio' | 'menu'>('inicio')
  return <div className="product-demo website-product"><div className="site-nav"><b>Casa Nube</b><span><button className={page === 'inicio' ? 'active' : ''} onClick={() => setPage('inicio')}>Inicio</button><button className={page === 'menu' ? 'active' : ''} onClick={() => setPage('menu')}>Menú</button></span><i>↗</i></div>{page === 'inicio' ? <div className="site-home"><small>CAFÉ DE BARRIO</small><h4>Una pausa<br/><em>bien hecha.</em></h4><button onClick={() => setPage('menu')}>Ver menú</button></div> : <div className="site-menu"><small>MENÚ DEL DÍA</small>{['Latte de avena', 'Pan de cardamomo', 'Bowl de temporada'].map((item, index) => <p key={item}><b>{item}</b><span>0{index + 1}</span></p>)}</div>}<span className="demo-caption">VISTA DE SITIO / EJEMPLO</span></div>
}

function AutomationDemo() {
  const [active, setActive] = useState(false)
  return <div className="product-demo automation-product"><div className="automation-flow"><div><i>01</i><b>Solicitud</b><span>Formulario recibido</span></div><em/><div><i>02</i><b>Regla</b><span>Se asigna al equipo</span></div><em/><div className={active ? 'complete' : ''}><i>03</i><b>{active ? 'Listo' : 'Resultado'}</b><span>{active ? 'Seguimiento creado' : 'Notificación preparada'}</span></div></div><button className="automation-trigger" onClick={() => setActive(!active)}>{active ? 'Reiniciar flujo' : 'Probar flujo'} <Icon name="arrow" size={15}/></button><span className="demo-caption">SIMULACIÓN LOCAL / SIN ENVÍOS REALES</span></div>
}

export function Services() {
  return <section className="section services" id="servicios"><div className="container"><Head number="02" eyebrow="LO QUE HACEMOS" title={<>Productos digitales<br/><em>hechos para trabajar.</em></>} copy="Diseñamos cada pieza para que sea clara para tu equipo y útil para tus clientes."/><div className="service-exhibits"><Reveal className="service-feature service-software"><article><div className="service-copy"><span>01 / SOFTWARE A MEDIDA</span><h3>Tu operación, en una sola vista.</h3><p>Paneles, inventarios y herramientas internas que reemplazan tareas dispersas por una forma simple de trabajar.</p><ul><li>Información útil a primera vista</li><li>Flujos pensados para tu equipo</li><li>Base lista para crecer</li></ul><a href="#contacto">Hablemos de tu sistema <Icon name="arrow" size={17}/></a></div><InventoryDemo/></article></Reveal><div className="service-pair"><Reveal className="service-feature service-web"><article><div className="service-copy"><span>02 / DESARROLLO WEB</span><h3>Una presencia que se entiende rápido.</h3><p>Diseñamos sitios que explican bien lo que haces y llevan a las personas a actuar.</p></div><WebsiteDemo/></article></Reveal><Reveal className="service-feature service-automation"><article><div className="service-copy"><span>03 / AUTOMATIZACIONES</span><h3>Menos pasos. Más seguimiento.</h3><p>Conectamos solicitudes y tareas para que nada importante se pierda en el camino.</p></div><AutomationDemo/></article></Reveal></div></div></div></section>
}
