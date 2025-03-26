import { test, expect } from '@playwright/test';

test('Página principal de Booking se carga', async ({ page }) => {
  await page.goto('https://www.booking.com');
  await expect(page).toHaveTitle(/Booking/);
});
