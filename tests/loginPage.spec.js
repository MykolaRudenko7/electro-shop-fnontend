import { test, expect } from '@playwright/test'
import createRandomUser from 'utils/createRandomUser'

const { LOGIN_PAGE_URL, PROFILE_PAGE_URL, TEST_EMAIL, TEST_PASSWORD } = process.env

test.describe('Login page', () => {
  let elements

  test.beforeEach(async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'Skipping WebKit')

    elements = {
      randomUserData: createRandomUser(),
      signInEmailInput: page.getByLabel('sign in email input'),
      signInPasswordInput: page.getByLabel('sign in password input'),
      signInSignInButton: page.getByLabel('sign input'),

      signUpModal: page.getByLabel('open modal window'),
      signUpNameInput: page.getByLabel('sign up  name input'),
      signUpEmailInput: page.getByLabel('sign up email input'),
      signUpPasswordInput: page.getByLabel('sign up password input'),
      signUpConfirmPasswordInput: page.getByLabel('sign up confirm password input'),
      signUpMobileNumberInput: page.getByLabel('sign up mobile number input'),
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
      randomUserData,
    } = elements
    const profileTitleBlock = page.getByRole('heading', { name: 'Profile' })

    await signUpModal.click()
    await signUpNameInput.fill(randomUserData.userName)
    await signUpEmailInput.fill(randomUserData.email)
    await signUpPasswordInput.fill(randomUserData.password)
    await signUpConfirmPasswordInput.fill(randomUserData.password)
    await signUpMobileNumberInput.fill(randomUserData.mobNumber)
    await signUpSubmitButton.click()

    await page.waitForURL(PROFILE_PAGE_URL)
    await page.waitForLoadState('domcontentloaded')

    await expect(profileTitleBlock).toHaveScreenshot()
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
