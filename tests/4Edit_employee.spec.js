import { test, expect } from '@playwright/test';
import { login } from './loginHelper'; 

test('Edit an existing employee', async ({ page }) => {
  await login(page);

  const firstName = 'John';
  const lastName = 'Doe';
  const newLastName = 'Galt';

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Successfully Saved')).toBeVisible();

  await page.getByRole('link', { name: 'Employee List' }).click();
  await page.getByPlaceholder('Type for hints...').first().fill(lastName);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText(firstName, { exact: true }).nth(0).click();
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill(newLastName);
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  
  // Check for the success message
  const successMessage = await page.getByText('Successfully Updated');
  await expect(successMessage).toBeVisible(); // Assert that the success message is visible

});
