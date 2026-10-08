//click, type, select 
import { chromium,firefox } from "playwright"

//BrowserInstance
const browser=await chromium.launch({channel:"chrome",headless:false});
//BrowserContext
const context=await browser.newContext();
//Page (tab1)
const page=await context.newPage();

await page.goto("https://orangehrm.com/book-a-free-demo");

await page.locator("xpath=//input[@id='Form_getForm_FullName']").fill("John wick");
await page.locator("xpath=//input[@id='Form_getForm_Email']").fill("wick@gmail.com")

//enter phonenumber - 98777888
//enter job title - QA Lead
await page.waitForTimeout(5000);
await browser.close();