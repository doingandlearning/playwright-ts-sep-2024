import { test, expect } from "@playwright/test";

// urls => titles
// - In the file itself
// - Outside the file

const urlsWithTitles = [
  {
    url: "https://playwright.dev/",
    title: /Playwright/,
  },
  {
    url: "https://www.gov.uk/government/organisations/companies-house",
    title: /Companies/,
  },
  {
    url: "https://www.google.com",
    title: "Google",
  },
  {
    url: "https://www.bbc.co.uk/news",
    title: "Home - BBC News",
  },
  {
    url: "https://kevincunningham.co.uk",
    title: "Kevin Cunningham (@dolearning)",
  },
  {
    url: "https://apple.com",
    title: /Apple/,
  },
];

for (const item of urlsWithTitles) {
  test(`${item.url} check`, async ({ page }) => {
    await page.goto(item.url);
    await expect(page).toHaveTitle(item.title);
  });
}
