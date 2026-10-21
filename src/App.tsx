import { LazyMotion, domAnimation } from 'motion/react'
import { About, Contact, Demo, Faq, Footer, Header, Hero, Marquee, Process, Projects, Services } from './components/Landing'
import './App.css'

function App() {
  return <LazyMotion features={domAnimation}><a className="skip-link" href="#contenido">Saltar al contenido</a><Header/><main id="contenido"><Hero/><Marquee/><Services/><Demo/><Projects/><Process/><About/><Faq/><Contact/></main><Footer/></LazyMotion>
}
export default App
