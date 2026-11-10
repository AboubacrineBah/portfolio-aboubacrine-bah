import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../projects/ProjectCard'
import useProjects from '../../hooks/useProjects'
import filterProjects from '../../utils/filterProjects'

function Projects() {
  const [filter, setFilter] = useState('Tous')
  const { status, projects } = useProjects()
  const filters = ['Tous', 'Site web', 'Interface web', 'Application web']
  const visibleProjects = filterProjects(projects, filter)
  return (
    <section className="projects-section section-pad" id="projets">
      <div className="container">
        <SectionHeading label="QUELQUES PISTES CRÉATIVES" title={<>Faire simple.<br />
          <em>Faire juste.</em></>}>
          <span>Des exemples de direction et de savoir-faire. Chaque démonstration est clairement identifiée.</span>
        </SectionHeading>
        <div className="project-toolbar">
          <div className="filters" role="group" aria-label="Filtrer les projets">
            {filters.map((item) => <button key={item} type="button" className={filter === item ? 'filter-active' : ''}
              aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <span>{String(visibleProjects.length).padStart(2, '0')} PROJETS</span>
        </div>
        {status === 'loading' ? (
          <p className="project-footnote" role="status">Chargement des projets…</p>
        ) : status === 'error' ? (
          <p className="project-footnote" role="status">Les projets ne sont pas disponibles pour le moment.
            Vous pouvez me contacter pour en savoir plus.</p>
        ) : visibleProjects.length > 0 ? (
          <div className="projects-grid">{visibleProjects.map((project) =>
            <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} total={projects.length} />)}
          </div>
        ) : (
          <p className="project-footnote" role="status">Aucun projet ne correspond à ce filtre pour le moment.</p>
        )}
        <p className="project-footnote">
          <span>✳</span> Les projets réels et leurs études de cas seront ajoutés après validation des visuels et des autorisations.
        </p>
      </div>
    </section>
  )
}

export default Projects
