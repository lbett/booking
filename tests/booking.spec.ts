import { test, expect } from '@playwright/test';

test('Bookings main page loads', async ({ page }) => {
  await page.goto('https://www.booking.com');
  await expect(page).toHaveTitle(/Booking/);
});

test('Search for hotels in New York', async ({ page }) => {
  await page.goto('https://www.booking.com');
  await page.click("input[id=':rh:']");
  await page.fill('[name="ss"]', 'New York');
  await page.getByRole('button', { name: 'New York New York, United' }).click();
  await page.getByRole('button', { name: 'Search' }).click();

  const resultsHeading = await page.getByRole('heading', { name: 'properties found' });
  await resultsHeading.waitFor({ state: 'visible' });

  const headingText = await resultsHeading.textContent();
  expect(headingText).toContain('New York');
});

test('Select check-in and check-out dates', async ({ page }) => {
  await page.goto('https://www.booking.com');
  await page.click("input[id=':rh:']");
  await page.fill('[name="ss"]', 'New York');
  await page.getByRole('button', { name: 'New York New York, United' }).click();
  await page.locator('span[data-date="2025-04-18"]').click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.locator('span[data-date="2025-05-16"]').click();
  await page.getByRole('button', { name: 'Search' }).click();

  const datesText = await page.locator('[data-testid="searchbox-dates-container"]').textContent();
  expect(datesText).toContain('Fri, Apr 18');
  expect(datesText).toContain('Fri, May 16');
});

test('Apply "Guest Rating: 8+" filter', async ({ page }) => {
  await page.goto('https://www.booking.com');
  await page.click("input[id=':rh:']");
  await page.fill('[name="ss"]', 'New York');
  await page.getByRole('button', { name: 'New York New York, United' }).click();
  await page.locator('span[data-date="2025-04-18"]').click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.locator('span[data-date="2025-05-16"]').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForLoadState('networkidle');

  await page.locator("#filter_group_review_score_\\:r30\\:").scrollIntoViewIfNeeded();
  await page.locator("#filter_group_review_score_\\:r30\\:").getByText('Very Good: 8+').click();
  
  const element = page.locator('[data-testid="filter:review_score=80"]');
  await expect(element).toBeVisible();
  await expect(element).toHaveText('Very Good: 8+');
});

test('Sort by "Lowest Price"', async ({ page }) => {
  await page.goto('https://www.booking.com');
  await page.click("input[id=':rh:']");
  await page.fill('[name="ss"]', 'New York');
  await page.getByRole('button', { name: 'New York New York, United' }).click();
  await page.locator('span[data-date="2025-04-18"]').click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.locator('span[data-date="2025-05-16"]').click();
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByTestId('sorters-dropdown-trigger').click();
  await page.getByRole('option', { name: 'Property rating (low to high)' }).click();
  await page.getByTestId('sorters-dropdown-trigger').click();

  const prices = await page.locator('.bui-price-display__value');
  const priceValues = await prices.allTextContents();
  const sortedPrices = priceValues.map(price => parseFloat(price.replace('$', '').trim()));
  const isSorted = sortedPrices.every((val, i, arr) => i === 0 || val >= arr[i - 1]);
  expect(isSorted).toBe(true);
});

test('Perform search without applying guest rating filter', async ({ page }) => {
  await page.goto('https://www.booking.com');
  await page.click("input[id=':rh:']");
  await page.fill('[name="ss"]', 'New York');
  await page.getByRole('button', { name: 'New York New York, United' }).click();
  await page.locator('span[data-date="2025-04-18"]').click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.locator('span[data-date="2025-05-16"]').click();
  await page.getByRole('button', { name: 'Search' }).click();

  await page.waitForSelector(
    'div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
    { state: 'visible', timeout: 5000 }
  );

  const ratingElements = await page.locator(
    'div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
  );

  const ratingCount = await ratingElements.count();
  console.log(`Cantidad total de ratings encontrados: ${ratingCount}`);
});

