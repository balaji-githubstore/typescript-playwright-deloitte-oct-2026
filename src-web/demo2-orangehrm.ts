//click, type, select 
import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://orangehrm.com/book-a-free-demo");

await page.locator("xpath=//button[text()='Allow all']").click();

await page.locator("xpath=//input[@id='Form_getForm_FullName']").fill("John wick");
await page.locator("xpath=//input[@id='Form_getForm_Email']").fill("wick@gmail.com");

//select
await page.locator("xpath=//select[@id='Form_getForm_Country']").selectOption({ label: "India" })

//enter phonenumber - 98777888
await page.locator("xpath=//input[@id='Form_getForm_Contact']").fill("877733333");
//enter job title - QA Lead
await page.locator("xpath=//input[@id='Form_getForm_JobTitle']").fill("QA Lead");

//select numberofemployees -- 51 - 200
await page.locator("xpath=//select[@id='Form_getForm_NoOfEmployees']").selectOption({label:"51 - 200"})

// click on Get a free demo
await page.locator("xpath=//input[@id='Form_getForm_action_submitForm']").click();
await page.waitForTimeout(5000);
await browser.close();