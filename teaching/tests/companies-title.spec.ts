import { test, expect, Browser } from "@playwright/test";

// test.beforeAll()
test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
});
// test.afterEach(({page})=> {
// });
// test.afterAll();

test("Check the companies house title is correct", async ({ page }) => {
  // browser
  // context
  //page
  // goto

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

test("is kevin still a director?", async ({ page }) => {
  // Go to the home page
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  // Click on the buttons
  await page.getByRole("link", { name: "Find company information" }).click();
  await page.getByRole("button", { name: "Start now" }).click();

  // Fill in the field and search
  await page.getByLabel("Enter company name, number or").click();
  await page
    .getByLabel("Enter company name, number or")
    .fill("doing and learning");
  await page.getByLabel("Enter company name, number or").press("Enter");

  await page.getByRole("link", { name: "DOING AND LEARNING LTD" }).click();
  await page
    .getByRole("link", { name: "People for DOING AND LEARNING" })
    .click();
  await expect(
    page.getByRole("link", { name: "CUNNINGHAM, Kevin Peter" })
  ).toBeVisible();
});
