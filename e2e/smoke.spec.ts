import { test, expect } from '@playwright/test'

test('home page: displays H1 "Accueil"', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1, name: 'Accueil' })).toBeVisible()
})

test('menus page: displays H1 "Menus"', async ({ page }) => {
  await page.goto('/menus')
  await expect(page.getByRole('heading', { level: 1, name: 'Menus' })).toBeVisible()
})

test('about page: displays H1 "À propos"', async ({ page }) => {
  await page.goto('/a-propos')
  await expect(page.getByRole('heading', { level: 1, name: 'À propos' })).toBeVisible()
})

test('top navigation: can go Home → Menus → À propos', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Menus' }).click()
  await expect(page).toHaveURL(/\/menus$/)
  await page.getByRole('link', { name: 'À propos' }).click()
  await expect(page).toHaveURL(/\/a-propos$/)
})
