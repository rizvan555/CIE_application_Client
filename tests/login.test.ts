import { test, expect } from '@playwright/test';
import axios from 'axios';

test('login_test', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.waitForTimeout(1000);

  await expect(
    page.getByRole('link', { name: 'Need an account?' })
  ).toBeVisible();
  await page.getByRole('link', { name: 'Need an account?' }).click();
  await expect(page.url()).toBe('http://localhost:5173/register');
  await page.waitForTimeout(1000);
  await page.goBack();
  await expect(page.url()).toBe('http://localhost:5173/login');
  await page.waitForTimeout(1000);

  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await page.getByPlaceholder('Username').fill('fateh');
  await expect(page.getByPlaceholder('Password')).toBeVisible();
  await page.getByPlaceholder('Password').fill('111111');
  await expect(page.getByRole('button', { name: 'LOGIN' })).toBeVisible();
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.goto('http://localhost:5173/');
});
