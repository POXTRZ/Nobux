// Datos editables. Completa contactos, URL, perfiles y enlaces antes de publicar.
export type Founder = { name: string; role?: string; link?: string; photo?: string }
export type ProjectStatus = 'demo' | 'real'
export type Project = { title: string; type: string; description: string; tone: 'blue' | 'orange' | 'mint' | 'school'; initials: string; status: ProjectStatus; technologies: string[]; image?: string; url?: string; result?: string }

export const site = {
  name: 'Nobux', city: 'Querétaro, México', url: '', email: '', whatsapp: '',
  founders: [{ name: '', role: '', link: '', photo: '' }, { name: '', role: '', link: '', photo: '' }] satisfies Founder[],
}
export const services = [
  { number: '01', title: 'Sitios web que convierten', category: 'Presencia digital', description: 'Páginas rápidas, claras y adaptadas a cualquier dispositivo para que tus clientes te encuentren y confíen en ti.', tags: ['Landing pages', 'Sitios corporativos', 'Catálogos'] },
  { number: '02', title: 'Sistemas a tu medida', category: 'Operación inteligente', description: 'Herramientas para que tu negocio deje de depender de hojas sueltas y procesos manuales.', tags: ['Inventarios', 'Citas y reservas', 'Paneles de control'] },
  { number: '03', title: 'Integraciones prácticas', category: 'Procesos conectados', description: 'Conectamos formularios, notificaciones y flujos de trabajo para simplificar el día a día de tu equipo.', tags: ['Formularios', 'WhatsApp', 'Automatización'] },
]
export const projects: Project[] = [
  { title: 'Portal educativo', type: 'Plataforma web', description: 'Un espacio digital para centralizar información, servicios y procesos escolares.', tone: 'blue', initials: 'PE', status: 'demo', technologies: ['Diseño UI', 'Web', 'Producto digital'] },
  { title: 'Panel de inventario', type: 'Sistema interno', description: 'Visualización de productos, existencias y movimientos en una sola interfaz.', tone: 'orange', initials: 'PI', status: 'demo', technologies: ['Dashboard', 'Inventario', 'UI'] },
  { title: 'Reservas en línea', type: 'Experiencia de cliente', description: 'Un flujo simple para solicitar citas y mantener el control de la agenda.', tone: 'mint', initials: 'RL', status: 'demo', technologies: ['Calendario', 'Reservas', 'UX'] },
  { title: 'Colegio Miguel Hidalgo', type: 'Sitio institucional', description: 'Sitio institucional desarrollado con tecnologías modernas para una comunidad educativa.', tone: 'school', initials: 'CMH', status: 'real', technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'], image: '', url: '' },
]
export const businessTypes = ['Taquerías', 'Barberías', 'Ferreterías', 'Gimnasios', 'Clínicas', 'Escuelas', 'Talleres', 'Florerías']
