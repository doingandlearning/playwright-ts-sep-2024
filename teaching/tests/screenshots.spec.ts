import { test, expect } from "@playwright/test";

test("take a screenshot", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  await page.screenshot({
    path: "screenshot.png",
    fullPage: true,
  });

  await page.setViewportSize({ width: 480, height: 640 });

  await page.screenshot({
    path: "screenshot1.png",
    fullPage: true,
  });
});

test("Visual regression", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  await expect(page).toHaveScreenshot({
    // maxDiffPixels: 51000,
    // maxDiffPixelRatio: 0.1,
  });
});
