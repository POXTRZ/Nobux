import founderTwoPhoto from './assets/founders/founder-two.png'
import hugoPhoto from './assets/founders/hugo-romero.png'
import cmhHistory from './assets/projects/cmh-history.png'
import cmhHome from './assets/projects/cmh-home.png'
import cmhInscriptions from './assets/projects/cmh-inscriptions.png'
import lightweightHome from './assets/projects/lightweight-home.jpeg'
import lightweightProgress from './assets/projects/lightweight-progress.jpeg'
import lightweightTraining from './assets/projects/lightweight-training.jpeg'

export type Founder = { name: string; role: string; link?: string; photo: string; photoPosition?: string; pending?: boolean }
export type Project = { title: string; type: string; description: string; tone: 'lightweight' | 'school'; images: string[]; technologies: string[]; problem?: string; process?: string }

export const site = {
  name: 'Nobux', city: 'Querétaro, México', url: '', email: '', whatsapp: '',
  founders: [
    { name: 'Hugo Romero', role: 'Frontend · interfaces · desarrollo web', link: 'https://hugo-romero-dev.vercel.app/', photo: hugoPhoto, photoPosition: '48% center' },
    { name: 'Perfil en confirmación', role: 'Especialidad y perfil profesional pendientes', photo: founderTwoPhoto, photoPosition: 'center center', pending: true },
  ] satisfies Founder[],
}

export const services = [
  { number: '01', title: 'Sitios web que convierten', category: 'Presencia digital', description: 'Páginas rápidas, claras y adaptadas a cualquier dispositivo para que tus clientes te encuentren y confíen en ti.', tags: ['Landing pages', 'Sitios corporativos', 'Catálogos'] },
  { number: '02', title: 'Sistemas a tu medida', category: 'Operación inteligente', description: 'Herramientas para que tu negocio deje de depender de hojas sueltas y procesos manuales.', tags: ['Inventarios', 'Citas y reservas', 'Paneles de control'] },
  { number: '03', title: 'Integraciones prácticas', category: 'Procesos conectados', description: 'Conectamos formularios, notificaciones y flujos de trabajo para simplificar el día a día de tu equipo.', tags: ['Formularios', 'WhatsApp', 'Automatización'] },
  { number: '04', title: 'Automatización con sentido', category: 'Flujos conectados', description: 'Diseñamos acciones repetibles que mantienen a tu equipo informado sin sumar trabajo manual.', tags: ['Alertas', 'Seguimiento', 'Procesos'] },
]

export const projects: Project[] = [
  { title: 'LightWeight', type: 'Aplicación móvil de entrenamiento', description: 'Una aplicación para registrar sesiones, seguir rutinas y revisar métricas de progreso, volumen y fatiga.', tone: 'lightweight', images: [lightweightHome, lightweightProgress, lightweightTraining], technologies: ['Registro de entrenamiento', 'Rutinas', 'Progreso físico'] },
  { title: 'Colegio Miguel Hidalgo', type: 'Sitio web institucional', description: 'Un sitio para presentar la oferta educativa, orientar sobre inscripciones y comunicar contenido institucional.', tone: 'school', images: [cmhHome, cmhInscriptions, cmhHistory], technologies: ['Sitio institucional', 'Inscripciones', 'Contenido editorial'] },
]

export const businessTypes = ['Taquerías', 'Barberías', 'Ferreterías', 'Gimnasios', 'Clínicas', 'Escuelas', 'Talleres', 'Florerías']
