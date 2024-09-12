import { Page } from "@playwright/test";

export class HomePage {
  constructor(public page: Page) {
    this.page.goto(process.env.URL);
  }

  cookieBanner() {
    return this.page.getByLabel("Cookies on GOV.UK");
  }

  searchLink() {
    return this.page.getByRole("link", { name: "Search" });
  }

  async clickCookieButtons() {
    await this.page
      .getByRole("button", { name: "Accept additional cookies" })
      .click();
    await this.page.getByRole("button", { name: "Hide this message" }).click();
  }
}
