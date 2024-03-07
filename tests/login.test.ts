import { test,expect } from '@playwright/test';

test('login_test', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
});
