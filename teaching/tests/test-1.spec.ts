import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  await page.getByRole("link", { name: "Find company information" }).click();
  await page.getByRole("button", { name: "Start now" }).click();
});
