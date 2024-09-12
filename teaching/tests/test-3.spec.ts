import { test, expect } from "@playwright/test";

test("test", async ({ page, context, browser }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByLabel("Search", { exact: true }).click();
  await page.getByLabel("Search", { exact: true }).fill("slow horses");

  const newPage = await context.newPage();
  await newPage.goto("https://www.imdb.com/title/tt5875444/");
  await newPage.getByRole("link", { name: "Thriller" }).click();

  const newBrowser = await browser.newContext();
  const anotherPage = await newBrowser.newPage();
});
