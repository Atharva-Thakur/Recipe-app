import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('div').filter({ hasText: /^Username$/ }).click();
  await page.locator('input[name="username"]').fill('atharva');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('thakur');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.alert.alert-success')).toHaveText(/Logged in as ROLE_USER\./);
});