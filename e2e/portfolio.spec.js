import { expect, test } from '@playwright/test'

test('the portfolio renders and project filters update the visible cards', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Aboubacrine BAH — Développeur web full-stack à Bamako')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

  const projects = page.locator('#projets')
  const cards = projects.locator('.project-card')
  const siteWebFilter = projects.getByRole('button', { name: 'Site web', exact: true })

  await expect(cards.first()).toBeVisible()
  await siteWebFilter.click()
  await expect(siteWebFilter).toHaveAttribute('aria-pressed', 'true')

  const categories = projects.locator('.project-meta span:first-child')
  const visibleCategories = Array.from({ length: await categories.count() }, () => 'Site web')
  await expect(categories).toHaveText(visibleCategories)

  const projectCount = String(await cards.count()).padStart(2, '0')
  await expect(projects.locator('.project-toolbar > span')).toHaveText(`${projectCount} PROJETS`)
})

test('the mobile navigation opens and closes accessibly', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const menuToggle = page.getByRole('button', { name: 'Ouvrir le menu' })
  await expect(menuToggle).toHaveAttribute('aria-expanded', 'false')
  await menuToggle.click()
  await expect(page.getByRole('button', { name: 'Fermer le menu' })).toHaveAttribute('aria-expanded', 'true')

  await page.getByRole('link', { name: 'À propos' }).click()
  await expect(page).toHaveURL(/#apropos$/)
  await expect(page.getByRole('button', { name: 'Ouvrir le menu' })).toHaveAttribute('aria-expanded', 'false')
})
