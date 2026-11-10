import Arrow from '../ui/Arrow'

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> DÉVELOPPEUR WEB FULL-STACK · BAMAKO, MALI <span className="eyebrow-line" /></div>
          <p className="hero-kicker">Le digital malien, pensé pour le monde.</p>
          <h1>Des idées claires.<br /><em>Des expériences</em><br />web utiles.</h1>
          <p className="hero-description">Je suis Aboubacrine BAH, développeur web full-stack basé à Bamako. J’accompagne les entreprises dans la création de sites et d’interfaces numériques soignés.</p>
          <div className="hero-actions">
            <a className="button button-green" href="#projets">Découvrir mes projets <i className="bi bi-card-checklist" /></a>
            <a className="text-link" href="#contact">Parlons de votre projet <i className="bi bi-chat-dots" /></a>
          </div>
          <div className="hero-meta">
            <span>
              <b>01</b> — Bamako, Mali <i className="bi bi-geo-alt" />
            </span>
            <span className="meta-divider" />
            <span>À distance, partout <i className="bi bi-map" /> </span>
          </div>
        </div>
        <div className="hero-art" aria-label="Illustration abstraite d'une interface web" role="img">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-card art-main">
            <div className="art-window"><span /><span /><span /><i>ab.</i></div>
            <div className="art-main-content"><small>UNE PRÉSENCE QUI VOUS RESSEMBLE</small><b>Votre prochain<br /><em>chapitre digital.</em></b><div className="art-cta">Découvrir <Arrow /></div></div>
            <div className="art-footer"><span>01 — 03</span><span className="art-footer-line" /><span>BAKO / ML</span></div>
          </div>
          <div className="floating-note note-code"><span className="note-icon">{`{ }`}</span><span><small>BUILD WITH</small><b>Intention.</b></span></div>
          <div className="floating-note note-location"><span className="location-pin">⌖</span><span><small>DESIGNÉ À</small><b>Bamako, Mali</b></span></div>
          <div className="art-sparkle">✳</div><div className="art-cross">+</div>
        </div>
      </div>
      <div className="hero-bottom container"><span>01 / 04</span><span className="hero-bottom-rule" /><span>SCROLL POUR EXPLORER <b><i className="bi bi-arrow-down" /></b></span></div>
    </section>
  )
}

export default Hero
