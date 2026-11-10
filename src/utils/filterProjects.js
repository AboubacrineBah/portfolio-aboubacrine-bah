export default function filterProjects(projects, filter) {
  return filter === 'Tous'
    ? projects
    : projects.filter((project) => project.category === filter)
}
