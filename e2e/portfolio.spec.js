import { expect, test } from '@playwright/test'

test('the portfolio renders and project filters update the visible cards', async ({ page }) => {
  await page.goto('./')

  await expect(page).toHaveTitle('Aboubacrine BAH — Développeur web full-stack à Bamako')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

  const faviconPath = await page.locator('link[rel="icon"]').getAttribute('href')
  const faviconResponse = await page.request.get(new URL(faviconPath, page.url()).toString())
  expect(faviconResponse.ok()).toBe(true)

  const projects = page.locator('#projets')
  const cards = projects.locator('.project-card')
  const siteWebFilter = projects.getByRole('button', { name: 'Site web', exact: true })

  await expect(cards.first()).toBeVisible()
  await expect.poll(() =>
    projects.locator('.project-visual img').evaluateAll((images) =>
      images.length > 0 && images.every((image) => image.complete && image.naturalWidth > 0),
    ),
  ).toBe(true)
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
  await page.goto('./')

  const menuToggle = page.getByRole('button', { name: 'Ouvrir le menu' })
  await expect(menuToggle).toHaveAttribute('aria-expanded', 'false')
  await menuToggle.click()
  await expect(page.getByRole('button', { name: 'Fermer le menu' })).toHaveAttribute('aria-expanded', 'true')

  await page.getByRole('link', { name: 'À propos' }).click()
  await expect(page).toHaveURL(/#apropos$/)
  await expect(page.getByRole('button', { name: 'Ouvrir le menu' })).toHaveAttribute('aria-expanded', 'false')
})

test('a project case study loads directly from the GitHub Pages subpath', async ({ page }) => {
  await page.goto('./projets/site-business')

  await expect(page.getByRole('heading', { level: 1, name: 'NexaWeb Mali | WordPress' })).toBeVisible()
  await expect(page).toHaveTitle('NexaWeb Mali | WordPress — Étude de cas | Aboubacrine BAH')
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    'Site business avec menu et demande de devis pour création de site web.',
  )
  await expect(page.getByRole('link', { name: 'Retour aux projets' })).toBeVisible()
  const heroImage = page.locator('.case-study-hero-image img')
  await expect(heroImage).toBeVisible()
  await expect.poll(() => heroImage.evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true)

  await page.reload()
  await expect(page.getByRole('heading', { level: 1, name: 'NexaWeb Mali | WordPress' })).toBeVisible()
  await page.getByRole('link', { name: 'Retour aux projets' }).click()
  await expect(page).toHaveURL(/\/portfolio-aboubacrine-bah\/#projets$/)
  await expect(page.locator('#projets')).toBeVisible()
  await expect(page).toHaveTitle('Aboubacrine BAH — Développeur web full-stack à Bamako')
})

test('unknown routes display a helpful not-found page', async ({ page }) => {
  await page.goto('./page-inconnue')

  await expect(page.getByRole('heading', { level: 1, name: 'Page introuvable' })).toBeVisible()
  await expect(page).toHaveTitle('Page introuvable | Aboubacrine BAH')
  await expect(page.getByRole('link', { name: 'Retour à l’accueil' })).toHaveAttribute(
    'href',
    '/portfolio-aboubacrine-bah/',
  )
})
