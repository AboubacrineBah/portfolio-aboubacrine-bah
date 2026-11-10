import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg container site-nav" aria-label="Navigation principale">
        <a className="brand" href={`${import.meta.env.BASE_URL}#accueil`} onClick={close} aria-label="Aboubacrine BAH, accueil">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">Aboubacrine <b>BAH</b><small>Développeur web full-stack · Bamako</small></span>
        </a>
        <button className="navbar-toggler menu-toggle" type="button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="menu-lines"><i className="bi bi-list" /></span>
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center nav-links">
            <li><a href={`${import.meta.env.BASE_URL}#apropos`} onClick={close}>À propos</a></li>
            <li><a href={`${import.meta.env.BASE_URL}#projets`} onClick={close}>Projets</a></li>
            <li><a href={`${import.meta.env.BASE_URL}#services`} onClick={close}>Services</a></li>
            <li>
              <a href={`${import.meta.env.BASE_URL}#contact`} onClick={close} className="nav-contact">Parlons de votre projet <i className="bi bi-chat-dots" /></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
