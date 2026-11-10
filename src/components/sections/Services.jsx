import SectionHeading from '../ui/SectionHeading'
import services from '../../data/services.json'

function Services() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="container">
        <SectionHeading label="COMMENT JE PEUX AIDER" title={<>Un besoin,<br />
          <em>une solution adaptée.</em></>} dark>
          <span>On commence par votre objectif. Le périmètre, les étapes et le devis sont définis ensemble.</span>
        </SectionHeading>
        <div className="services-list">
          {services.map((service) =>
            <article className="service-row" key={service.number}>
              <span className="service-num">{service.number}</span>
              <div className="service-title">
                <h3>{service.title}</h3>
                <span><i className={service.icon} /></span>
              </div>
              <p>{service.text}</p>
              <a href="#contact" aria-label={`Discuter de ${service.title}`}><i className="bi bi-chat-dots" /></a>
            </article>
          )}
        </div>
        <div className="services-note">
          <span>✳</span>
          <p>Chaque projet est différent. <b>Parlons de votre besoin</b> pour cadrer la bonne approche, les livrables et les délais.</p>
          <a href="#contact">Demander un échange <i className="bi bi-chat-dots" /></a>
        </div>
      </div>
    </section>
  )
}

export default Services
