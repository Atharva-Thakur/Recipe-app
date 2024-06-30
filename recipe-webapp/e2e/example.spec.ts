import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http:/localhost:4200');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
});

test('test the details page link', async ({ page }) => {
  await page.goto('http:/localhost:4200');

  // Click the get started link.
  await page.getByRole('link').first().click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Chicken Stir-Fry' })).toBeVisible();
});
