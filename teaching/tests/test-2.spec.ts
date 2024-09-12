import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByLabel("Search", { exact: true }).click();
  await page.getByLabel("Search", { exact: true }).fill("slow horses");
  await page1.goto("https://www.imdb.com/title/tt5875444/");
  await page1.getByTestId("accept-button").click();
  await page1.getByRole("link", { name: "Photos 74" }).click();
});
