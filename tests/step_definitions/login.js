const {Given, When, Then} = require("@cucumber/cucumber")
const {chromium, expect} = require("@playwright/test")

let browser
let page

Given('I m on the login page', async function () {
    browser = await chromium.launch({headless: false})
    page = await browser.newPage()
    page.goto('https://front.serverest.dev/login')
});

When('I type my email and password', async function () {
    await page.locator("[data-testid='email']").fill('miojoqueijo2@gmail.com')
    await page.locator("[data-testid='senha']").fill('lucas12345')
    await page.locator("[data-testid='entrar']").click()
});

Then('I have a successful login', async function () {
    const homeTitle = await page.locator('h1')
    await expect(homeTitle).toContainText('Bem Vindo Lucas')
  });