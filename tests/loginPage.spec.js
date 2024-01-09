import { test, expect } from '@playwright/test'

const {
  LOGIN_PAGE_URL,
  PROFILE_PAGE_URL,
  TEST_EMAIL,
  TEST_PASSWORD,
  TEST_SIGN_UP_NAME,
  TEST_SIGN_UP_MOBILE_NUMBER,
} = process.env

test.describe('Login page', () => {
  let elements

  test.beforeEach(async ({ page }) => {
    elements = {
      signInEmailInput: page.getByLabel('email input').first(),
      signInPasswordInput: page.getByLabel('password input').first(),
      signInSignInButton: page.getByLabel('sign input'),

      signUpModal: page.getByLabel('open modal window'),
      signUpNameInput: page.getByLabel('name input').first(),
      signUpEmailInput: page.getByLabel('email input').last(),
      signUpPasswordInput: page.getByLabel('password input').nth(1),
      signUpConfirmPasswordInput: page.getByLabel('confirm password input').last(),
      signUpMobileNumberInput: page.getByLabel('mobile number input').last(),
      signUpSubmitButton: page.getByLabel('create an account'),

      profileTextBlock: page.getByTestId('profileTextBlock'),
    }

    await page.goto(LOGIN_PAGE_URL)
    await page.waitForLoadState('domcontentloaded')
  })

  test('should go to profile after user entered sign in data correctly', async ({ page }) => {
    const { signInEmailInput, signInPasswordInput, signInSignInButton, profileTextBlock } = elements

    await signInEmailInput.fill(TEST_EMAIL)
    await signInPasswordInput.fill(TEST_PASSWORD)
    await signInSignInButton.click()

    await page.waitForURL(PROFILE_PAGE_URL)

    expect(profileTextBlock).toBeVisible()
    await expect(profileTextBlock).toHaveScreenshot()
  })

  test('should show error message block after user entered sign in data incorrectly', async ({
    page,
  }) => {
    const { signInEmailInput, signInPasswordInput, signInSignInButton } = elements
    const signInErrorMessage = page.getByTestId('signInErrorMessage')
    const signInForm = page.getByTestId('signInForm')

    await signInEmailInput.fill(TEST_EMAIL)
    await signInPasswordInput.fill('wrong password')
    await signInSignInButton.click()
    await page.waitForLoadState('domcontentloaded')

    await expect(signInErrorMessage).toBeVisible()
    await expect(signInForm).toHaveScreenshot()
  })

  test('should go to profile after user entered sign up data correctly', async ({ page }) => {
    const {
      signUpNameInput,
      signUpModal,
      signUpEmailInput,
      signUpPasswordInput,
      signUpConfirmPasswordInput,
      signUpMobileNumberInput,
      signUpSubmitButton,
      profileTextBlock,
    } = elements

    await signUpModal.click()
    await signUpNameInput.fill(TEST_SIGN_UP_NAME)
    await signUpEmailInput.fill(TEST_EMAIL)
    await signUpPasswordInput.fill(TEST_PASSWORD)
    await signUpConfirmPasswordInput.fill(TEST_PASSWORD)
    await signUpMobileNumberInput.fill(TEST_SIGN_UP_MOBILE_NUMBER)
    await signUpSubmitButton.click()

    await page.waitForURL(PROFILE_PAGE_URL)
    await page.waitForLoadState('domcontentloaded')

    await expect(profileTextBlock).toHaveScreenshot()
  })

  test('should show error message block after entered sign up data if user already exists', async ({
    page,
  }) => {
    const {
      signUpNameInput,
      signUpModal,
      signUpEmailInput,
      signUpPasswordInput,
      signUpConfirmPasswordInput,
      signUpMobileNumberInput,
      signUpSubmitButton,
    } = elements
    const signUpErrorMessage = page.getByTestId('signUpErrorMessage')
    const signUpForm = page.getByTestId('signUpForm')

    await signUpModal.click()
    await signUpNameInput.fill('Mykola Rudenko')
    await signUpEmailInput.fill('m.rudenko.rb@gmail.com')
    await signUpPasswordInput.fill('111111')
    await signUpConfirmPasswordInput.fill('111111')
    await signUpMobileNumberInput.fill('+380 95 197 0401')
    await signUpSubmitButton.click()
    await page.waitForLoadState('domcontentloaded')

    await expect(signUpErrorMessage).toBeVisible()
    await expect(signUpForm).toHaveScreenshot()
  })
})
