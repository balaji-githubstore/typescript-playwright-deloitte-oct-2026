import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://opensource-demo.orangehrmlive.com/");


const popupPromise =page.waitForEvent("popup")
await page.locator("xpath=//a[text()='OrangeHRM, Inc']").click();
const newPage=await popupPromise ;
newPage.waitForLoadState();


await newPage.locator("xpath=//button[text()='Allow all']").click();
//click on book a free demo
//enter full name
//close second tab

await page.waitForTimeout(5000);
await browser.close();