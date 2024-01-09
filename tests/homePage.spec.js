import { test, expect } from '@playwright/test'

const { PRODUCTS_CATALOG_URL } = process.env

test.describe('Home page', () => {
  let laptopsLink

  test.beforeEach(async ({ page }) => {
    laptopsLink = page.getByLabel('navigation link').filter({ hasText: 'Laptops' })

    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
  })

  test('should nav link got active class after click', async ({ page }) => {
    const navMenu = page.getByTestId('navbarMenu')
    const laptopsLinkWrapper = page.getByTestId('navbarLinkWrapper').nth(1)

    await laptopsLinkWrapper.click()
    await page.waitForLoadState('domcontentloaded')

    expect(laptopsLink).toHaveCSS('color', 'rgb(1, 86, 255)')
    await expect(navMenu).toHaveScreenshot()
  })

  test('should go to products catalog page after clicking the laptops link', async ({ page }) => {
    test.slow()
    await laptopsLink.click()
    await page.waitForURL(PRODUCTS_CATALOG_URL)
    await page.waitForLoadState('domcontentloaded')

    expect(page.url()).toContain(PRODUCTS_CATALOG_URL)
    await expect(page).toHaveScreenshot()
  })
})
