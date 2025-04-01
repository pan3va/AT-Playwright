import { test, expect } from "@playwright/test";
test("Has h1 title", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
  const h1element = page.locator("xpath=//h1");
  await expect(h1element).toHaveText("Basic HTML Form Example");
});

test("Test username field", async ({ page }) => {
    await page.goto(
      "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
    );
    const userNameElement = page.locator("xpath=//input[@name='username']");
    await expect(userNameElement).toBeVisible();
    await userNameElement.fill("Desiityy");
    await expect(userNameElement).toHaveValue("Desiityy")
  });

  test("Checkbox selection", async ({ page }) => {
    await page.goto(
      "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
    );
    const checkboxElement = page.locator("xpath=//input[@value='cb2']");
    await expect(checkboxElement).toBeVisible()
    await checkboxElement.check()
    await expect(checkboxElement).toBeChecked()
  });

  test("Dropdown selection", async ({ page }) => {
    await page.goto(
      "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
    );
    const dropdownElement = page.locator("xpath=//select[@name='dropdown']");
    await expect(dropdownElement).toBeVisible();
    await dropdownElement.selectOption("dd6");
    await expect(dropdownElement).toHaveValue('dd6');

    
  });

