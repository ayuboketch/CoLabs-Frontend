import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByText('colabsStart your open-source').click();
  await page.getByRole('img', { name: 'hero-image' }).click();
  await page.getByRole('button', { name: 'Add a project' }).click();
  await expect(page.getByText('colabsStart your open-source')).toBeVisible();
  await expect(page.getByRole('img', { name: 'hero-image' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add a project' })).toBeVisible();
});