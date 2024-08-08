import { test, expect } from '@playwright/test';

test('Invalid login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();

  // Check for the error message
  const errorMessage = await page.getByText('Invalid credentials');
  await expect(errorMessage).toBeVisible(); // Assert that the error message is visible
});