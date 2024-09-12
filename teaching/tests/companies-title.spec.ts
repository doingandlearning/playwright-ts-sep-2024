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

  // DRY ... Don't Repeat Yourself!
  const cookieBanner = page.getByLabel("Cookies on GOV.UK");

  // Cookie banner is visible
  await expect(cookieBanner).toBeVisible();

  // Click some buttons!
  await page.getByRole("button", { name: "Accept additional cookies" }).click();
  await page.getByRole("button", { name: "Hide this message" }).click();

  // Confirm the cookie banner is not visible
  await expect(cookieBanner).not.toBeVisible();

  // Refresh the page
  await page.reload();

  // Confirm the cookie banner is still not visible
  await expect(cookieBanner).not.toBeVisible();
});
