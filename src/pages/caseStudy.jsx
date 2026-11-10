import { Link, useParams } from 'react-router-dom'
import caseStudies from '../data/caseStudies.json'
import useProjects from '../hooks/useProjects'
import publicAssetUrl from '../utils/publicAssetUrl'

export default function CaseStudy() {
    const { projectId } = useParams()
    const study = caseStudies.find((item) => item.projectId === projectId)
    const { status, projects } = useProjects()

    if (!study) {
        return (
            <main id="contenu" className="case-study-section section-pad">
                <div className="container">
                    <div className="section-heading case-study-heading">
                        <div className="section-label"><span>ÉTUDE DE CAS</span><i /></div>
                        <div className="heading-row">
                            <h1>Étude de cas introuvable</h1>
                            <p>Cette étude de cas n’est pas disponible pour le moment.</p>
                        </div>
                    </div>
                    <Link className="inline-link case-study-back" to="/#projets">
                        <i className="bi bi-arrow-left" aria-hidden="true" /> Retour aux projets
                    </Link>
                </div>
            </main>
        )
    }

    const project = projects.find((item) => item.id === study.projectId)

    return (
        <main id="contenu" className="case-study-section section-pad">
            <div className="container">
                <Link className="inline-link case-study-back" to="/#projets">
                    <i className="bi bi-arrow-left" aria-hidden="true" /> Retour aux projets
                </Link>

                {project?.image ? (
                    <figure className="case-study-hero-image">
                        <img src={publicAssetUrl(project.image, import.meta.env.BASE_URL)} alt={`Capture d’écran du projet ${study.projectName}`} />
                    </figure>
                ) : status === 'error' ? (
                    <p className="case-study-image-status" role="status">
                        Le visuel de ce projet n’est pas disponible pour le moment.
                    </p>
                ) : null}

                <div className="section-heading case-study-heading">
                    <div className="section-label"><span>{study.type}</span><i /></div>
                    <div className="heading-row">
                        <h1>{study.projectName}</h1>
                        <p>{study.description}</p>
                    </div>
                </div>

                <article className="case-study-content">
                    <div className="case-study-index" aria-hidden="true">
                        <span>01</span><i /><small>ÉTUDE DE CAS</small>
                    </div>
                    <div className="case-study-details">
                        <section className="case-study-detail">
                            <h2>Contexte et besoin</h2>
                            <p>{study.contextAndNeed || 'Informations à compléter.'}</p>
                        </section>

                        <section className="case-study-detail">
                            <h2>Ma contribution</h2>
                            <p>{study.contribution || 'Informations à compléter.'}</p>
                        </section>

                        <section className="case-study-detail">
                            <h2>Technologies</h2>
                            {study.tags?.length ? (
                                <div className="skill-list">
                                    {study.tags.map((tag) => <span className="skill-pill" key={tag}>{tag}</span>)}
                                </div>
                            ) : (
                                <p>Technologies à préciser.</p>
                            )}
                        </section>

                        <section className="case-study-detail">
                            <h2>Résultat vérifiable</h2>
                            <p>{study.verifiableResult || 'Résultat à confirmer.'}</p>
                        </section>

                        <section className="case-study-detail">
                            <h2>Visuels et autorisations</h2>
                            <p>{study.visualsAndPermissions || 'Informations et autorisations à confirmer.'}</p>
                        </section>
                    </div>
                </article>

                {Array.isArray(study.gallery) && study.gallery.length > 0 && (
                    <section className="case-study-gallery" aria-labelledby="case-study-gallery-title">
                        <h2 id="case-study-gallery-title">Galerie du projet</h2>
                        <div className="case-study-gallery-grid">
                            {study.gallery.map((image) => {
                                const imageSrc = typeof image === 'string' ? image : image.src
                                const imageAlt = typeof image === 'string'
                                    ? `Capture du projet ${study.projectName}`
                                    : image.alt || `Capture du projet ${study.projectName}`

                                return (
                                    <figure className="case-study-gallery-item" key={imageSrc}>
                                        <img src={publicAssetUrl(imageSrc, import.meta.env.BASE_URL)} alt={imageAlt} loading="lazy" />
                                    </figure>
                                )
                            })}
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}