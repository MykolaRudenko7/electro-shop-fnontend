import { test, expect } from '@playwright/test'

const { PRODUCTS_CATALOG_URL, SHOPPING_CART_URL } = process.env

test.describe('ShoppingCart page', () => {
  let elements

  test.beforeEach(async ({ page }) => {
    elements = {
      addFirstProductToCart: page.getByLabel('add to basket').first(),
      addSecondProductToCart: page.getByLabel('add to basket').nth(2),
      cartLink: page.getByLabel('cart'),
      productCard: page.getByTestId('shoppingCartProductItem').first(),
      productQuantityCounter: page.getByTestId('productQuantityCounter').first(),
      increaseProductQuantity: page.getByLabel('increase product quantity').first(),
      subtractProductQuantity: page.getByLabel('subtract product quantity').first(),
      clearCartButton: page.getByLabel('clear shopping cart'),
      deleteProductItemButton: page.getByLabel('delete product').first(),
    }

    await page.goto(PRODUCTS_CATALOG_URL)
    await page.waitForLoadState('domcontentloaded')
  })

  const addProductsToCart = async ({ page }) => {
    const { addFirstProductToCart, addSecondProductToCart, cartLink } = elements
    await addFirstProductToCart.click()
    await addSecondProductToCart.click()
    await cartLink.click()
    await page.waitForURL(SHOPPING_CART_URL)
  }

  test('should add two products to cart', async ({ page }) => {
    await addProductsToCart({ page })

    expect(page.url()).toContain(SHOPPING_CART_URL)
    await expect(page).toHaveScreenshot()
  })

  test('should clear all products in cart', async ({ page }) => {
    const { clearCartButton } = elements
    await addProductsToCart({ page })
    await clearCartButton.click()

    expect(page.url()).toContain(SHOPPING_CART_URL)
    await expect(page).toHaveScreenshot()
  })

  test('should increase product quantity in cart', async ({ page }) => {
    const { increaseProductQuantity, productQuantityCounter } = elements
    await addProductsToCart({ page })
    await increaseProductQuantity.click()

    await expect(productQuantityCounter).toContainText('2')
    expect(page.url()).toContain(SHOPPING_CART_URL)
    await expect(elements.productCard).toHaveScreenshot()
  })

  test('should remove one product unit in cart', async ({ page }) => {
    const { addFirstProductToCart, cartLink, productQuantityCounter } = elements
    const subtractProductQuantity = page.getByLabel('subtract product quantity').first()

    await addFirstProductToCart.click()
    await cartLink.click()
    await page.waitForURL(SHOPPING_CART_URL)

    expect(productQuantityCounter).not.toBeVisible()
    await subtractProductQuantity.click()

    expect(productQuantityCounter).not.toBeVisible()
    expect(page.url()).toContain(SHOPPING_CART_URL)
    await expect(page).toHaveScreenshot()
  })

  test('should delete one product item in cart', async ({ page }) => {
    const { addSecondProductToCart, cartLink, productCard } = elements
    const deleteProductItemButton = page.getByLabel('delete product').first()

    await addSecondProductToCart.click()
    await cartLink.click()
    await page.waitForURL(SHOPPING_CART_URL)

    await expect(productCard).toBeVisible()
    await deleteProductItemButton.click()

    await expect(productCard).not.toBeVisible()
    expect(page.url()).toContain(SHOPPING_CART_URL)
    await expect(page).toHaveScreenshot()
  })
})
