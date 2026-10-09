import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://nasscom.in/");

//click on Become a member

//Select company category as Indian

//Enter Address as 24, Chennai, 600019

//click on calculate fee 

//get the alert message, print it and then handle it

await page.waitForTimeout(5000);
await browser.close();