import ProjectVisual from './ProjectVisual'
import { Link } from 'react-router-dom'
import caseStudies from '../../data/caseStudies.json'

function ProjectCard({ project, index, total }) {
  const projectNumber = String(index + 1).padStart(2, '0')
  const totalProjects = String(total).padStart(2, '0')
  const caseStudy = caseStudies.find((study) => study.projectId === project.id)

  return <article className="project-card">
    <ProjectVisual type={project.visual} image={project.image} />
    <div className="project-meta">
      <span>{project.category}</span>
      <span>{projectNumber} — {totalProjects}</span>
    </div>
    <div className="project-info">
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <span className="project-arrow">
        {caseStudy ? (
          <Link
            to={`/projets/${project.id}`}
            aria-label={`Voir l’étude de cas de ${caseStudy.projectName}`}
          >
            <i className="bi bi-eye" aria-hidden="true" />
          </Link>
        ) : (
          <i className="bi bi-eye" aria-hidden="true" />
        )}
      </span>
    </div>
    <div className="project-tags">{project.tags.map((tag) =>
      <span key={tag}>{tag}</span>)}
    </div>
    <div className="demo-label">
      <span>✳</span> PROJET DE DÉMONSTRATION
    </div>
  </article>
}

export default ProjectCard
