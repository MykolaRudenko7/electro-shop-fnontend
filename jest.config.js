const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
})

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  modulePaths: ['<rootDir>/node_modules'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^axiosInstances/mainInstances': '<rootDir>/src/axiosInstances/mainInstances.js',
    '^@/ProductChoiceSection/(.*)$':
      '<rootDir>/src/components/AboutProductPage/ProductChoiceSection/$1',
    '^@/FilterBlock/(.*)$': '<rootDir>/src/components/CatalogProductsPage/FilterBlock/$1',
    '^@/SelectedSidebarFilters/(.*)$':
      '<rootDir>/src/components/CatalogProductsPage/FilterBlock/SelectedSidebarFilters/$1',
    '^@/OrderSummary/(.*)$': '<rootDir>/src/components/ShoppingCartPage/OrderSummary/$1',
  },
}

module.exports = createJestConfig(config)
