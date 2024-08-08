import { test, expect } from '@playwright/test';
import { login } from './loginHelper'; 

test('Edit an existing employee', async ({ page }) => {
  await login(page);

  const firstName = 'John';
  const lastName = 'Doe';
  

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Successfully Saved')).toBeVisible();

  await page.getByRole('link', { name: 'Employee List' }).click();
  await page.getByPlaceholder('Type for hints...').first().fill(lastName);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: '' }).nth(0).click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();

  // Check for the success message
  const successMessage = await page.getByText('SuccessSuccessfully Deleted×');
  await expect(successMessage).toBeVisible(); // Assert that the success message is visible
 
});