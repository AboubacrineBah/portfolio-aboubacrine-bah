import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'
import { Routes, Route, useLocation } from 'react-router-dom'
import CaseStudy from './pages/caseStudy'
import caseStudies from './data/caseStudies.json'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const study = caseStudies.find((item) => pathname === `/projets/${item.projectId}`)
    const isHome = pathname === '/'
    const pageTitle = study
      ? `${study.projectName} — Étude de cas | Aboubacrine BAH`
      : isHome
        ? 'Aboubacrine BAH — Développeur web full-stack à Bamako'
        : 'Page introuvable | Aboubacrine BAH'
    const pageDescription = study?.description
      ?? (isHome
        ? 'Portfolio d’Aboubacrine BAH, développeur web basé à Bamako. Sites web, interfaces et solutions numériques utiles.'
        : 'Cette page est introuvable. Retrouvez le portfolio et les projets d’Aboubacrine BAH.')

    document.title = pageTitle
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', pageDescription)
  }, [pathname])

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
