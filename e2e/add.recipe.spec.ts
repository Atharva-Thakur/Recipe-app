import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.locator('input[type="submit"]').click();
  await page.getByRole('link', { name: 'Admin', exact: true }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Chocolate cake');
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('cake made of chocolate');
  await page.locator('div').filter({ hasText: /^Remove$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Remove$/ }).getByRole('textbox').fill('make cake');
  await page.getByRole('button', { name: 'Add Instruction' }).click();
  await page.locator('div').filter({ hasText: /^InstructionsRemoveRemoveAdd Instruction$/ }).getByRole('textbox').nth(1).click();
  await page.locator('div').filter({ hasText: /^InstructionsRemoveRemoveAdd Instruction$/ }).getByRole('textbox').nth(1).fill('add chocolate');
  await page.getByRole('button', { name: 'Add Instruction' }).click();
  await page.locator('div').filter({ hasText: /^InstructionsRemoveRemoveRemoveAdd Instruction$/ }).getByRole('textbox').nth(2).click();
  await page.locator('div').filter({ hasText: /^InstructionsRemoveRemoveRemoveAdd Instruction$/ }).getByRole('textbox').nth(2).fill('eat cake');
  await page.getByRole('button', { name: 'Remove' }).nth(2).click();
  await page.getByRole('button', { name: 'Add Instruction' }).click();
  await page.locator('div').filter({ hasText: /^InstructionsRemoveRemoveRemoveAdd Instruction$/ }).getByRole('textbox').nth(2).click();
  await page.locator('div').filter({ hasText: /^InstructionsRemoveRemoveRemoveAdd Instruction$/ }).getByRole('textbox').nth(2).fill('bake cake');
  await page.locator('app-recipe-add').getByRole('button', { name: 'Add Ingredient' }).click();
  await page.getByRole('combobox').selectOption('0: 668595b28a03aff0dcce91e9');
  await page.getByPlaceholder('Quantity').click();
  await page.getByPlaceholder('Quantity').fill('500 grams');
  await page.locator('app-recipe-add').getByRole('button', { name: 'Add Ingredient' }).click();
  await page.getByRole('combobox').nth(1).selectOption('1: 668595b28a03aff0dcce91ea');
  await page.getByPlaceholder('Quantity').nth(1).click();
  await page.getByPlaceholder('Quantity').nth(1).fill('1000 grams');
  await page.locator('app-recipe-add').getByRole('button', { name: 'Add Ingredient' }).click();
  await page.getByRole('combobox').nth(2).selectOption('2: 668595b28a03aff0dcce91eb');
  await page.getByPlaceholder('Quantity').nth(2).click();
  await page.getByPlaceholder('Quantity').nth(2).fill('150 grams');
  await page.locator('app-recipe-add').getByRole('button', { name: 'Add Ingredient' }).click();
  await page.getByRole('combobox').nth(3).selectOption('3: 668595b28a03aff0dcce91ec');
  await page.getByPlaceholder('Quantity').nth(3).click();
  await page.getByPlaceholder('Quantity').nth(3).fill('3');
  await page.getByLabel('Calories').click();
  await page.getByLabel('Calories').fill('150');
  await page.getByLabel('Carbs').click();
  await page.getByLabel('Carbs').fill('70');
  await page.getByLabel('Proteins').click();
  await page.getByLabel('Proteins').fill('200');
  await page.getByLabel('Fats').click();
  await page.getByRole('button', { name: 'Add Recipe' }).click();
  await page.getByRole('link', { name: 'Recipes' }).click();
  await expect(page.locator('app-recipe').filter({ hasText: 'Chocolate cakecake made of' }).getByRole('img')).toBeVisible();
  await page.getByRole('link', { name: 'Chocolate cake›', exact: true }).click();
  await expect(page.getByText('cake made of chocolate')).toBeVisible();
});