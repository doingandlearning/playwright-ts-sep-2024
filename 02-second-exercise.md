### Introduction to Exercises for Session 3

For each of these exercises, feel free to try a different website and experiment with what you find.

Remember the workflow is likely to look like:

1. **Use `npx playwright codegen`**: Record your journey and click on any element that might be important.
2. **Create or Add to a Test File**: Organize your recorded actions into a test file.
3. **Rename Your Test**: Give your test a meaningful name that reflects its purpose.
4. **Add Good Comments**: Document your test steps with clear and concise comments.
5. **Create Your Expectations**: Formulate your assertions (the THEN part of Given/When/Then).
6. **Run the Tests**: Execute your tests to see if they pass.
7. **Debug**: If tests fail, debug and refine them until they pass.

This approach will help you systematically build and verify your tests, ensuring they are robust and reliable.

#### Exercise 1: Implement `beforeEach` Hook

**Objective**: Practice setting up test preconditions using the `beforeEach` hook.

**Task**:

- Use the `beforeEach` hook to navigate to the Companies House page before each test.

**Example**:

```typescript
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
});

test("Verify page title", async ({ page }) => {
  const title = await page.title();
  expect(title).toBe("Companies House - GOV.UK");
});

test("Verify cookie banner visibility", async ({ page }) => {
  const cookieBanner = page.locator("#global-cookie-message");
  await expect(cookieBanner).toBeVisible();
});
```

#### Exercise 2: Implement `afterEach` Hook

**Objective**: Practice cleaning up after tests using the `afterEach` hook.

**Task**:

- Use the `afterEach` hook to perform any necessary cleanup actions after each test.

**Example**:

```typescript
import { test } from "@playwright/test";

test.afterEach(async ({ page }) => {
  // Example cleanup action
  await page.close();
});

test("Verify page title", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  const title = await page.title();
  expect(title).toBe("Companies House - GOV.UK");
});
```

#### Exercise 3: Create Parameterized Tests

**Objective**: Practice writing flexible and reusable tests with parameterization.

**Task**:

- Write a test that uses multiple sets of data to verify page titles.

**Example**:

```typescript
import { test, expect } from "@playwright/test";

const testData = [
  {
    url: "https://www.gov.uk/government/organisations/companies-house",
    title: "Companies House - GOV.UK",
  },
  {
    url: "https://www.gov.uk/contact",
    title: "Find contact details for services - GOV.UK",
  },
];

for (const { url, title } of testData) {
  test(`Verify title for ${url}`, async ({ page }) => {
    await page.goto(url);
    const pageTitle = await page.title();
    expect(pageTitle).toBe(title);
  });
}
```

#### Exercise 4: Use External Data Sources for Parameterized Tests

**Objective**: Practice using external data sources for test parameters.

**Task**:

- Load test data from an external JSON file and use it in parameterized tests.

**Example**:

```typescript
import { test, expect } from "@playwright/test";
import testData from "./test-data.json";

for (const { url, title } of testData) {
  test(`Verify title for ${url}`, async ({ page }) => {
    await page.goto(url);
    const pageTitle = await page.title();
    expect(pageTitle).toBe(title);
  });
}

// Sample test-data.json file
// [
//   { "url": "https://www.gov.uk/government/organisations/companies-house", "title": "Companies House - GOV.UK" },
//   { "url": "https://www.gov.uk/contact", "title": "Find contact details for services - GOV.UK" }
// ]
```

<!-- #### Exercise 5: Snapshots -->

Objective: Practice taking screenshots and comparing them using Playwright's built-in .toHaveScreenshot() method.

Task:

- Navigate to a specific page.
- Take a screenshot of an element and compare it to a baseline image.
- Ensure the screenshots match.
  Example:

```typescript
import { test, expect } from "@playwright/test";

// Set up before each test to navigate to the specified URL
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.example.com");
});

// Screenshot exercise using .toHaveScreenshot()
test("Element screenshot comparison", async ({ page }) => {
  const element = page.locator("#example-element"); // Adjust the selector to target the desired element

  // Ensure the element matches the baseline screenshot
  await expect(element).toHaveScreenshot("example-element.png");
});
```

### Summary of Exercises

1. **Implement `beforeEach` Hook**: Use `beforeEach` to set up consistent preconditions for each test.
2. **Implement `afterEach` Hook**: Use `afterEach` to clean up after each test.
3. **Create Parameterized Tests**: Write tests that use multiple sets of data.
4. **Use External Data Sources for Parameterized Tests**: Load test data from an external JSON file and use it in your tests.

These exercises will help you become proficient in managing advanced test scenarios in Playwright, ensuring your tests are maintainable and scalable.
