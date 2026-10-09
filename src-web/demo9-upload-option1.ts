import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://www.ilovepdf.com/pdf_to_word");

//option 1
await page.locator("xpath=//input[@type='file']").setInputFiles("D:\\Mine\\Balaji Dinakaran Trainer Profile AI 2026.pdf");


await page.waitForTimeout(5000);
await browser.close();