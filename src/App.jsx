import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'
import { Routes, Route } from 'react-router-dom'
import CaseStudy from './pages/caseStudy'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Header />
      <Routes>
        <Route path="/" element={
          <main id="contenu">
            <Hero />
            <About />
            <Projects />
            <Services />
            <Process />
            <Contact />
          </main>
        } />
        <Route path="/projets/:projectId" element={<CaseStudy />} />
        <Route path="*" element={
          <main id="contenu" className="section-pad">
            <div className="container">
              <h1>Page introuvable</h1>
              <a href={import.meta.env.BASE_URL}>Retour à l’accueil</a>
            </div>
          </main>
        } />
      </Routes>
      <Footer />
    </>
  )
}
