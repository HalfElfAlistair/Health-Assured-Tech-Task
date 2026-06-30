import { test, expect, Page } from '@playwright/test';

test('homepage loads', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await expect(page.getByRole('heading', { name: 'Podcasts' })).toBeVisible();
});

// extracts dates from cards and convert to timestamps
const getCardDates = async (page: Page): Promise<number[]> => {
    const dateStrings: string[] = await page
        .locator('[data-testid="resource-card"] [data-testid="resource-date"]')
        .allTextContents();
    return dateStrings.map((str: string) => new Date(str).getTime());
}

test('sorting by New shows newest resources first', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.locator('[data-testid="sort-control"]').selectOption('New');

    const dates = await getCardDates(page);

    const sorted = [...dates].sort((a, b) => b - a);
    expect(dates).toEqual(sorted);
});

test('sorting by Old shows oldest resources first', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.locator('[data-testid="sort-control"]').selectOption('Old');

    const dates = await getCardDates(page);

    const sorted = [...dates].sort((a, b) => a - b);
    expect(dates).toEqual(sorted);
});