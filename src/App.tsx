import { LazyMotion, domAnimation } from 'motion/react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Demo } from './components/Demo'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { ScrollProgress, WhatsappButton } from './components/ui'
import './App.css'

function App() {
  return <LazyMotion features={domAnimation}><ScrollProgress/><a className="skip-link" href="#contenido">Saltar al contenido</a><Header/><main id="contenido"><Hero/><Marquee/><Services/><Demo/><Projects/><Process/><About/><Faq/><Contact/></main><Footer/><WhatsappButton/></LazyMotion>
}
export default App
