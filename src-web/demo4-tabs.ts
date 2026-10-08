import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://opensource-demo.orangehrmlive.com/");

//click on link - OrangeHRM, Inc.

//click on Book a free demo 

await page.waitForTimeout(5000);
await browser.close();