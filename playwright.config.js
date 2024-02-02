import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })
const baseClientUrl = process.env.CLIENT_BASE_URL

export default defineConfig({
  testDir: './tests',
  expect: {
    toMatchSnapshot: {
      threshold: 0.3,
      maxDiffPixelRatio: 0.2,
    },
  },
  snapshotPathTemplate: 'screenshots/{testFilePath}/{testName}/{projectName}.png',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: baseClientUrl,
    trace: 'on-first-retry',
    testIdAttribute: 'data-test-id',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
})
