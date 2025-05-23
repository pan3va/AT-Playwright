import { test, expect, Page } from "@playwright/test";
import path from "path";

const fillFields = async (page: Page) => {
  await test.step("Enter username", async () => {
    const userNameElement = page.locator("xpath=//input[@name='username']");
    await expect(userNameElement).toBeVisible();
    await userNameElement.fill("Desiityy");
    await expect(userNameElement).toHaveValue("Desiityy");
  });

  await test.step("Enter password", async () => {
    // Located and fill password
    const passwordElement = page.locator("xpath=//input[@name='password']");
    await expect(passwordElement).toBeVisible();
    await passwordElement.fill("1234567");
    await expect(passwordElement).toHaveValue("1234567");
  });

  await test.step("Comment enter", async () => {
    // Located and fill text area
    const textAreaElement = page.locator("textarea[name='comments']");
    await expect(textAreaElement).toBeVisible();
    await textAreaElement.fill("Write your comment here");
    await expect(textAreaElement).toHaveValue("Write your comment here");
  });

  await test.step("Checbox clicked", async () => {
    const checkboxElement = page.locator("xpath=//input[@value='cb2']");
    await expect(checkboxElement).toBeVisible();
    await checkboxElement.check();
    await expect(checkboxElement).toBeChecked();
  });
  await test.step("RadioBtn Clicked", async () => {
    const radioButtonElement = page.locator("xpath=//input[@value='rd3']");
    await expect(radioButtonElement).toBeVisible();
    await radioButtonElement.check();
    await expect(radioButtonElement).toBeChecked();
  });

  await test.step("Radio Button", async () => {
    //dropdown

    const dropdownElement = page.locator("xpath=//select[@name='dropdown']");
    await expect(dropdownElement).toBeVisible();
    await dropdownElement.selectOption("dd6");
    await expect(dropdownElement).toHaveValue("dd6");
  });

  await test.step("File upload", async () => {
    const fileUploadBtn = page.locator("xpath=//input[@type='file']");
    const filePath = path.resolve(__dirname, "./test.txt");

    await expect(fileUploadBtn).toBeVisible();
    await fileUploadBtn.setInputFiles(filePath);
  });
};
test.describe("Basic HTML form testing", () => {
  test.beforeEach("Navigate to the home page", async ({ page }) => {
    const url = process.env.BASE_URL_HTML as string;
    await page.goto(url);
  });

  test("Has h1 title", async ({ page }) => {
    const h1element = page.locator("xpath=//h1");
    await expect(h1element).toHaveText("Basic HTML Form Example");
  });

  test("Form Submit", async ({ page }) => {
    const submitButton = page.locator("xpath=//input[@value='submit']");
    await expect(submitButton).toBeVisible();
    await fillFields(page);
    await submitButton.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );

    const userNameValue = page.locator("xpath=//li[@id='_valueusername']");
    await expect(userNameValue).toHaveText("Desiityy");

    const dropdownVal = page.locator("xpath=//li[@id='_valuedropdown']");
    await expect(dropdownVal).toHaveText("dd6");
  });

  test("Form Reset", async ({ page }) => {
    const cancelButton = page.locator("xpath=//input[@value='cancel']");
    await expect(cancelButton).toBeVisible();
    await fillFields(page);
    await cancelButton.click();

    await expect(page.locator("xpath=//input[@name='username']")).toHaveValue(
      ""
    );
    await expect(page.locator("xpath=//input[@value='cb3']")).toBeChecked();
  });
});
