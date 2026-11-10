import SectionHeading from '../ui/SectionHeading'

function About() {
  return (
    <section className="about-section section-pad" id="apropos">
      <div className="container">
        <SectionHeading label="UN PEU DE CONTEXTE" title={<>Du code, <em>du sens.</em></>}>
          Je relie la maîtrise technique à la compréhension du besoin, pour créer des expériences web aussi utiles qu’agréables à parcourir.
        </SectionHeading>
        <div className="about-grid">
          <div className="about-index">
            <span>01</span><i /><small>À PROPOS</small>
          </div>
          <div className="about-copy">
            <p className="about-lead">Je m’appelle Aboubacrine BAH et je suis développeur web full stack à Bamako, au Mali.
              À travers <b>NexaWeb Mali</b>, j’aide les entrepreneurs, les petites et moyennes entreprises et les équipes web à concrétiser leurs projets numériques.</p>
            <p>Mon travail couvre la création de sites web, l’intégration d’interfaces et le développement de fonctionnalités sur mesure.
              Je m’appuie notamment sur WordPress, HTML5, CSS3, JavaScript, Bootstrap, React, PHP et MySQL.
              J’accorde une place importante à l’écoute du besoin, à une communication transparente et à des choix techniques adaptés au projet.</p>
            <p>Chaque réalisation présentée ici précise le contexte, ma contribution et les outils utilisés.
              Les projets de démonstration sont indiqués comme tels. Je suis disponible pour échanger sur un site vitrine, une interface web ou un besoin de maintenance.</p>
            <a href="#contact" className="inline-link">Faire connaissance <i className="bi bi-chat-dots" /></a>
            <aside className="about-note">
              <span className="note-asterisk">✳</span><p>« La bonne solution commence par <em>la bonne question.</em> »</p>
              <small>MA FAÇON DE TRAVAILLER</small>
            </aside>
          </div>
          <figure className="about-portrait">
            <div className="portrait-placeholder" role="img" aria-label="Emplacement réservé à la photo d’Aboubacrine">
              <img
                src="/images/AboubacrineBah1-1.jpg"
                alt="Portrait d’Aboubacrine BAH"
              />
            </div>
            <figcaption>ABOUBACRINE BAH <span>· BAMAKO</span></figcaption>
          </figure>
        </div>
        <div className="skills-row">
          <span className="skills-label">MES OUTILS</span>
          <div className="skill-list">
            {['WordPress', 'React', 'JavaScript', 'PHP', 'HTML5 & CSS3', 'Bootstrap', 'MySQL', 'Laravel'].map((skill) =>
              <span className="skill-pill" key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
