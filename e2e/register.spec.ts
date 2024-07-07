import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('testuser');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('test@mail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('testpassword');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Your registration is')).toBeVisible();
});