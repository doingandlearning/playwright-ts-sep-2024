import { test, expect } from "@playwright/test";
import urlsWithTitles from "./urlsWithTitles.json";
// urls => titles
// - In the file itself
// - Outside the file

/*
Get the URLs from a database 
let urlsWithTitles

test.beforeAll(() => {
  urlsWithTitles = 
})
*/

for (const item of urlsWithTitles) {
  test(`${item.url} check`, async ({ page }) => {
    await page.goto(item.url);
    await expect(page).toHaveTitle(item.title);
  });
}
