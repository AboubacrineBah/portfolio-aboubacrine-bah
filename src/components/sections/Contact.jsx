import profile from '../../data/profile.json'

function Contact() {
  return <section className="contact-section" id="contact">
    <div className="contact-inner container">
      <div className="contact-orbit contact-orbit-one" />
      <div className="contact-orbit contact-orbit-two" />
      <div className="contact-copy">
        <div className="section-label">
          <span>À VOUS LA PAROLE</span><i />
        </div>
        <h2>Et si on faisait<br /><em>équipe ?</em></h2>
        <p>Vous avez une idée, un site à faire évoluer ou simplement une question ?
          Écrivez-moi, nous prendrons le temps d’en parler.</p>
        <a className="button button-light" href={`mailto:${profile.email}?subject=Parlons%20de%20votre%20projet`}>
          Écrivez-moi <i className="bi bi-chat-dots" />
        </a>
      </div>
      <div className="contact-side">
        <span className="contact-star">✳</span>
        <div>
          <small>ÉCRIVEZ-MOI</small>
          <a href={`mailto:${profile.email}`}>{profile.email} <i className="bi bi-envelope-at" /></a>
        </div>
        <div>
          <small>RETROUVEZ-MOI</small>
          <span className="social-note">Les liens professionnels seront ajoutés après validation.</span>
        </div>
        <div>
          <small>LOCALISATION</small>
          <span>{profile.city}, {profile.country} <i className="bi bi-geo-alt" /> · À distance <i className="bi bi-map" /> </span>
        </div>
      </div>
    </div>
  </section>
}

export default Contact
