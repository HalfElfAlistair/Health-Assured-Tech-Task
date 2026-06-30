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

// gets all visible card titles
const getCardTitles = async (page: Page): Promise<string[]> => {
    return await page
        .locator('[data-testid="resource-card"] [data-testid="resource-title"]')
        .allTextContents();
}

test('filtering by text reduces visible cards and matches search term', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const initialTitles = await getCardTitles(page);
    expect(initialTitles.length).toBeGreaterThan(0);

    const searchTerm = 'mind';
    await page.locator('[data-testid="filter-control"]').fill(searchTerm);

    const filteredTitles = await getCardTitles(page);

    expect(filteredTitles.length).toBeLessThanOrEqual(initialTitles.length);
    expect(filteredTitles.length).toBeGreaterThan(0);

    filteredTitles.forEach(title => {
        expect(title.toLowerCase()).toContain(searchTerm.toLowerCase());
    });
});

test('resources are grouped automatically on page load', async ({ page }) => {
    await page.goto('http://localhost:5173');

    //   waits for grouped headers to appear
    await page.waitForSelector('[data-testid="group-header"]');

    const headers = page.locator('[data-testid="group-header"]');
    const headerCount = await headers.count();

    expect(headerCount).toBeGreaterThan(0);

    // checks at least one card is rendered for each group
    for (let i = 0; i < headerCount; i++) {
        const headerText = await headers.nth(i).innerText();

        const cardsInGroup = page.locator(`[data-group="${headerText}"]`);
        const count = await cardsInGroup.count();

        expect(count).toBeGreaterThan(0);
    }
});

test('keyboard navigation tabs through controls in correct order', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // ensures something is focused before tabbing
    await page.locator('body').focus();

    // tab until sort-control is focused
    for (let i = 0; i < 10; i++) {
        await page.keyboard.press('Tab');
        const focused = await page.locator(':focus').getAttribute('data-testid');
        if (focused === 'sort-control') break;
    }
    expect(await page.locator(':focus').getAttribute('data-testid')).toBe('sort-control');

    // tab until filter-control is focused
    for (let i = 0; i < 10; i++) {
        await page.keyboard.press('Tab');
        const focused = await page.locator(':focus').getAttribute('data-testid');
        if (focused === 'filter-control') break;
    }
    expect(await page.locator(':focus').getAttribute('data-testid')).toBe('filter-control');
});
