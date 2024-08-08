import { test, expect } from '@playwright/test';
import { login } from './loginHelper'; 

test('Add a new employee', async ({ page }) => {
  await login(page);

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Jane');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Black');
  await page.getByRole('button', { name: 'Save' }).click();

  // Check for the success message
  const successMessage = await page.getByText('Successfully Saved');
  await expect(successMessage).toBeVisible(); // Assert that the success message is visible
  
});