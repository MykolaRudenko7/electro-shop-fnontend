import { test, expect } from '@playwright/test'

const { PRODUCTS_CATALOG_URL } = process.env

test.describe('ProductsCatalog page', () => {
  let elements

  test.beforeEach(async ({ page }) => {
    elements = {
      dropdownButton: page.getByRole('button', { name: 'Sort By:', exact: false }),
      dropdownList: page.getByText('AlphabeticalRatingPriceReviews Count'),
      productsCatalogWrapper: page.getByTestId('productsCatalogWrapper'),
    }

    await page.goto(PRODUCTS_CATALOG_URL)
    await page.waitForLoadState('domcontentloaded')
  })

  test('should change to list view after click button', async ({ page }) => {
    const { productsCatalogWrapper } = elements
    const listViewButton = page.getByLabel('set products view style to list')

    await listViewButton.click()

    expect(productsCatalogWrapper).toHaveCSS('flex-direction', 'column')
    await expect(productsCatalogWrapper).toHaveScreenshot()
  })

  test('should show all sorting options after click "sort by" dropdown', async ({ page }) => {
    const { dropdownButton, dropdownList } = elements

    await dropdownButton.click()

    await expect(dropdownList).toHaveCSS('display', 'block')
    await expect(dropdownList).toHaveScreenshot()
  })

  test('should change sorting option for "Price"', async ({ page }) => {
    const { productsCatalogWrapper, dropdownButton, dropdownList } = elements
    const sortByPrice = page.getByRole('listitem').filter({ hasText: ' Price' }).first()

    await dropdownButton.click()
    await sortByPrice.click()

    expect(dropdownButton).toHaveText('Sort By: Price')
    expect(dropdownList).not.toHaveCSS('display', 'block')
    await expect(productsCatalogWrapper).toHaveScreenshot()
  })
})
