import { test, expect } from '@playwright/test'

test('robots.txt returns 200 and contains a sitemap URL', async ({ request }) => {
  const res = await request.get('/robots.txt')
  expect(res.status()).toBe(200)
  const txt = await res.text()
  expect(txt).toMatch(/Sitemap:\s*https?:\/\/.+\/sitemap\.xml/i)
})

test('sitemap.xml returns 200 and lists the home URL', async ({ request }) => {
  const res = await request.get('/sitemap.xml')
  expect(res.status()).toBe(200)
  const xml = await res.text()
  expect(xml).toMatch(/<loc>https?:\/\/.+\/<\/loc>/)
})
