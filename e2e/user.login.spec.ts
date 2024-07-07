import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('atharva');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('thakur');
  await page.locator('input[type="submit"]').click();
  await page.getByRole('link', { name: 'Recipes' }).click();
});