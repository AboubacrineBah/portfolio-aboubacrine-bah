import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readJson(path) {
  return JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'))
}

const [projects, caseStudies, services, profile] = await Promise.all([
  readJson('../src/data/projects.json'),
  readJson('../src/data/caseStudies.json'),
  readJson('../src/data/services.json'),
  readJson('../src/data/profile.json'),
])

test('each case study matches exactly one portfolio project', () => {
  const projectIds = new Set(projects.map((project) => project.id))
  const studyIds = caseStudies.map((study) => study.projectId)

  assert.ok(caseStudies.length > 0)
  assert.equal(new Set(studyIds).size, studyIds.length)
  assert.deepEqual(new Set(studyIds), projectIds)

  for (const study of caseStudies) {
    const project = projects.find((item) => item.id === study.projectId)

    assert.ok(study.projectName)
    assert.equal(study.projectName, project.title)
    assert.equal(study.type, project.category)
    assert.ok(study.description)
    assert.ok(study.contextAndNeed)
    assert.ok(study.contribution)
    assert.ok(Array.isArray(study.tags) && study.tags.length > 0)
    assert.ok(study.verifiableResult)
    assert.ok(Array.isArray(study.gallery) && study.gallery.length > 0)
    assert.ok(
      study.gallery.every((image) =>
        typeof image === 'string' ? image.length > 0 : Boolean(image?.src),
      ),
    )
  }
})

test('profile contains the information required by the portfolio', () => {
  for (const field of ['name', 'role', 'city', 'country', 'email', 'signature']) {
    assert.ok(profile[field], `Missing profile field: ${field}`)
  }

  assert.match(profile.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
})

test('services have unique numbers and all fields required for display', () => {
  assert.ok(services.length > 0)
  assert.equal(new Set(services.map((service) => service.number)).size, services.length)

  for (const service of services) {
    assert.ok(service.number)
    assert.ok(service.title)
    assert.ok(service.text)
    assert.ok(service.icon)
  }
})
