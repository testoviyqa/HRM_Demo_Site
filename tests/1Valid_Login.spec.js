import { test, expect } from '@playwright/test';

test('Valid Login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login by checking for the Dashboard heading
  const dashboardHeading = await page.getByRole('heading', { name: 'Dashboard' });
  await expect(dashboardHeading).toBeVisible();
});