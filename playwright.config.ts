import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ['list'],
    ['allure-playwright'],
  ],
  projects: [
    {
      name: 'chromium', // Project name
      use: {
        browserName: 'chromium', // Config for using Chromium browser
        headless: true, // Set to `true` if you want the browser to run headlessly (without UI)
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
      },
    },
  ],
});
