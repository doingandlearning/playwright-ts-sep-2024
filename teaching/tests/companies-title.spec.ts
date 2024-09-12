import { test, expect } from "@playwright/test";

test("Check the companies house title is correct", async ({ page }) => {
  // Given, When
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  // Then
  await expect(page).toHaveTitle("Companies House - GOV.UK");
});

test("check cookie banner goes and stays gone", async ({ page }) => {
  // Go to the homepage
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  // Cookie banner is visible
  await expect(page.getByLabel("Cookies on GOV.UK")).toBeVisible();

  // Click some buttons!
  await page.getByRole("button", { name: "Accept additional cookies" }).click();
  await page.getByRole("button", { name: "Hide this message" }).click();

  // Confirm the cookie banner is not visible
  await expect(page.getByLabel("Cookies on GOV.UK")).not.toBeVisible();

  // Refresh the page
  await page.reload();

  // Confirm the cookie banner is still not visible
  await expect(page.getByLabel("Cookies on GOV.UK")).not.toBeVisible();
});
