import { type KeyboardEvent, useState } from 'react'
import { Head, Reveal } from './ui'

type DemoTab = 'pedidos' | 'citas' | 'inventario'

const tabs: Array<{ id: DemoTab; label: string }> = [
  { id: 'pedidos', label: 'Pedidos' },
  { id: 'citas', label: 'Citas' },
  { id: 'inventario', label: 'Inventario' },
]

const months = [
  { name: 'Junio', days: 30, firstDay: 0, unavailable: [6, 13, 20, 27] },
  { name: 'Julio', days: 31, firstDay: 2, unavailable: [5, 12, 19, 26] },
]

export function Demo() {
  const [tab, setTab] = useState<DemoTab>('pedidos')
  const [orderStep, setOrderStep] = useState(0)
  const [stock, setStock] = useState(3)
  const [monthIndex, setMonthIndex] = useState(0)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const month = months[monthIndex]

  const moveTab = (event: KeyboardEvent<HTMLButtonElement>, current: DemoTab) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const index = tabs.findIndex(item => item.id === current)
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    const next = tabs[nextIndex].id
    setTab(next)
    document.getElementById(`demo-tab-${next}`)?.focus()
  }

  const changeMonth = (direction: number) => {
    setMonthIndex((monthIndex + direction + months.length) % months.length)
    setSelectedDay(null)
    setSelectedTime(null)
  }

  return <section className="section demo" id="demo"><div className="container"><Head number="03" eyebrow="MÍRALO FUNCIONANDO" title={<>Una idea puede sentirse<br/><em>real antes de construirla.</em></>} copy="Demos locales con datos ficticios. No envían ni guardan información."/><Reveal className="demo-shell"><div className="demo-tabs" role="tablist" aria-label="Demos interactivas">{tabs.map(item => <button key={item.id} id={`demo-tab-${item.id}`} role="tab" aria-selected={tab === item.id} aria-controls={`demo-panel-${item.id}`} tabIndex={tab === item.id ? 0 : -1} onClick={() => setTab(item.id)} onKeyDown={event => moveTab(event, item.id)}>{item.label}</button>)}<span>DATOS FICTICIOS</span></div>
    {tab === 'pedidos' && <div className="demo-view chat-demo" id="demo-panel-pedidos" role="tabpanel" aria-labelledby="demo-tab-pedidos"><div className="chat-head"><b>Taquería demo</b><span>● disponible</span></div><div className="chat-body"><p className="bot">¡Hola! ¿Qué se te antoja hoy?</p>{orderStep > 0 && <p className="user">2 tacos al pastor</p>}{orderStep > 1 && <p className="bot">Perfecto. ¿A dónde lo llevamos?</p>}{orderStep > 2 && <p className="user">Av. Ejemplo 123</p>}{orderStep > 2 && <p className="bot confirm">Pedido listo para confirmar ✓</p>}</div><button className="demo-action" onClick={() => setOrderStep(Math.min(orderStep + 1, 3))}>{orderStep < 3 ? ['Elegir tacos', 'Agregar dirección', 'Confirmar pedido'][orderStep] : 'Pedido enviado ✓'}</button></div>}
    {tab === 'citas' && <div className="demo-view appointment-demo" id="demo-panel-citas" role="tabpanel" aria-labelledby="demo-tab-citas"><div className="calendar"><header><div><small>AGENDA DE EJEMPLO</small><b>{month.name} 2026</b></div><div className="calendar-controls"><button type="button" onClick={() => changeMonth(-1)} aria-label="Ver mes anterior">‹</button><button type="button" onClick={() => changeMonth(1)} aria-label="Ver mes siguiente">›</button></div></header><div className="calendar-grid" aria-label={`Calendario de ${month.name} de 2026`}>{['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, index) => <small key={`${day}-${index}`}>{day}</small>)}{Array.from({ length: month.firstDay }, (_, index) => <span className="calendar-blank" aria-hidden="true" key={`blank-${index}`}/>)}{Array.from({ length: month.days }, (_, index) => { const day = index + 1; const unavailable = month.unavailable.includes(day); return <button type="button" className={`calendar-day${selectedDay === day ? ' selected' : ''}${unavailable ? ' unavailable' : ''}`} onClick={() => { setSelectedDay(day); setSelectedTime(null) }} disabled={unavailable} aria-label={`${day} de ${month.name}${unavailable ? ', no disponible' : ''}`} aria-pressed={selectedDay === day} key={day}>{day}</button> })}</div><p className="calendar-legend"><i/> Horarios ficticios sujetos a disponibilidad</p></div><div className="hours"><div className="hours-heading"><div><small>02 / HORA</small><b>Horarios disponibles</b></div>{selectedDay && <span>{selectedDay} de {month.name}</span>}</div><div className="time-list">{['10:00', '12:30', '16:00'].map(hour => <button type="button" key={hour} className={selectedTime === hour ? 'selected' : ''} onClick={() => setSelectedTime(hour)} disabled={!selectedDay} aria-pressed={selectedTime === hour}>{hour}<small>{selectedTime === hour ? 'Seleccionado' : 'Disponible'}</small></button>)}</div><div className={`booking-summary${selectedDay && selectedTime ? ' ready' : ''}`} aria-live="polite"><span>{selectedDay && selectedTime ? 'Cita de ejemplo lista' : 'Selecciona una fecha y horario'}</span>{selectedDay && selectedTime ? <b>{selectedDay} de {month.name} · {selectedTime}</b> : <small>La agenda no realiza reservas reales.</small>}</div></div></div>}
    {tab === 'inventario' && <div className="demo-view inventory-demo" id="demo-panel-inventario" role="tabpanel" aria-labelledby="demo-tab-inventario"><div><span>PRODUCTO</span><span>STOCK</span><span>AJUSTE</span></div>{[['Tortillas', 13], ['Salsa verde', stock], ['Refrescos', 6]].map(([name, amount]) => <div key={String(name)}><b>{name}</b><span className={Number(amount) < 3 ? 'low-stock' : ''}><i style={{ width: `${Math.min(Number(amount) * 7, 100)}%` }}/>{amount} {Number(amount) < 3 && '· Bajo'}</span>{name === 'Salsa verde' ? <p><button onClick={() => setStock(Math.max(0, stock - 1))} aria-label="Restar salsa verde">−</button><button onClick={() => setStock(stock + 1)} aria-label="Sumar salsa verde">+</button></p> : <em>—</em>}</div>)}</div>}
  </Reveal></div></section>
}
