### Introduction to Exercises

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

#### Exercise 1: Navigate to a Different Page and Verify Title

**Objective**: Practice navigating to different pages and verifying the title.

**Task**:

- Navigate to a different page on the GOV.UK site.
- Verify the page title.

**Example**:

```typescript
import { test, expect } from "@playwright/test";

test('Navigate to "Contact Us" page and verify title', async ({ page }) => {
  await page.goto("https://www.gov.uk/contact");
  const title = await page.title();
  expect(title).toBe("Find contact details for services - GOV.UK");
});
```

#### Exercise 2: Verify an Element's Text Content

**Objective**: Practice locating elements and verifying their text content.

**Task**:

- Navigate to the Companies House page.
- Verify that the header text contains "Companies House".

**Example**:

```typescript
import { test, expect } from "@playwright/test";

test("Verify header text", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  const header = await page.textContent("h1");
  expect(header).toContain("Companies House");
});
```

#### Exercise 3: Form Interaction and Submission

**Objective**: Practice interacting with form elements and submitting a form.

**Task**:

- Navigate to a page with a form (e.g., the search page on GOV.UK).
- Enter a search query and submit the form.
- Verify that the search results page is displayed.

**Example**:

```typescript
import { test, expect } from "@playwright/test";

test("Search form interaction", async ({ page }) => {
  await page.goto("https://www.gov.uk/search");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await page.getByRole("searchbox", { name: "Search GOV.UK" }).fill("test");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  const resultHeading = page.getByRole("heading", { name: "results" });
  await expect(resultHeading).toBeVisible();
});
```

#### Exercise 4: Handling Pop-ups and Dialogs

**Objective**: Practice handling pop-ups and dialogs.

**Task**:

- Navigate to a page that triggers a dialog (e.g., a confirmation dialog).
- Handle the dialog and verify the outcome.

**Example**:

```typescript
import { test, expect } from "@playwright/test";

test("Handle confirmation dialog", async ({ page }) => {
  // Navigate to the dialog box web page
  await page.goto("https://ui.shadcn.com/docs/components/dialog");

  // Click the button
  await page.getByRole("button", { name: "Edit Profile" }).click();

  // Capture the text that we'll test for
  const modalText = page.getByText("Make changes to your profile");

  // Confirm it is visible
  await expect(modalText).toBeVisible();

  // Click the close button
  await page.getByRole("button", { name: "Close" }).click();

  // Confirm the modal text isn't there
  await expect(modalText).not.toBeVisible();
});
```

### Summary of Exercises

1. **Navigate to a Different Page and Verify Title**: Navigate to another page on the GOV.UK site and verify its title.
2. **Verify an Element's Text Content**: Verify the text content of a header or another significant element.
3. **Form Interaction and Submission**: Interact with a form, submit it, and verify the results.
4. **Handling Pop-ups and Dialogs**: Handle dialogs or pop-ups triggered by the page.
