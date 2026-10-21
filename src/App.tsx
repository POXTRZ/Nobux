import { LazyMotion, domAnimation } from 'motion/react'
import { About, Contact, Demo, Faq, Footer, Header, Hero, Marquee, Process, Projects, ScrollProgress, Services, WhatsappButton } from './components/Landing'
import './App.css'

function App() {
  return <LazyMotion features={domAnimation}><ScrollProgress/><a className="skip-link" href="#contenido">Saltar al contenido</a><Header/><main id="contenido"><Hero/><Marquee/><Services/><Demo/><Projects/><Process/><About/><Faq/><Contact/></main><Footer/><WhatsappButton/></LazyMotion>
}
export default App
