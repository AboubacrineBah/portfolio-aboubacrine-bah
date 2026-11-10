import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const projects = JSON.parse(
  await readFile(new URL('../src/data/projects.json', import.meta.url), 'utf8'),
)

const availableVisuals = new Set(['vitrine', 'dashboard', 'store'])

test('projects have unique ids and the fields required by the portfolio', () => {
  assert.ok(Array.isArray(projects) && projects.length > 0)

  const ids = projects.map((project) => project.id)
  assert.equal(new Set(ids).size, ids.length)

  for (const project of projects) {
    assert.ok(project.title)
    assert.ok(project.category)
    assert.ok(project.description)
    assert.ok(Array.isArray(project.tags) && project.tags.length > 0)
  }
})

test('each project uses a visual supported by ProjectVisual', () => {
  for (const project of projects) {
    assert.ok(availableVisuals.has(project.visual), `Unsupported visual: ${project.visual}`)
  }
})
