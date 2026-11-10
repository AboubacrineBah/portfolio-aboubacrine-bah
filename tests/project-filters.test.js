import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import filterProjects from '../src/utils/filterProjects.js'

const projects = JSON.parse(
  await readFile(new URL('../src/data/projects.json', import.meta.url), 'utf8'),
)

test('the "Tous" filter returns every project in its original order', () => {
  assert.deepEqual(filterProjects(projects, 'Tous'), projects)
})

test('a category filter returns only projects from that category', () => {
  for (const category of ['Site web', 'Interface web', 'Application web']) {
    const filteredProjects = filterProjects(projects, category)

    assert.ok(filteredProjects.length > 0, `No projects found for: ${category}`)
    assert.ok(filteredProjects.every((project) => project.category === category))
  }
})

test('an unknown category returns no projects', () => {
  assert.deepEqual(filterProjects(projects, 'Catégorie inconnue'), [])
})
