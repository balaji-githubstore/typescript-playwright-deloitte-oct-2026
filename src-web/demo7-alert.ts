import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://echoecho.com/javascript4.htm");

//handling alert - but javascript will be handled using page.on instead of below work
const alertPromise=page.waitForEvent("dialog");
await page.locator("xpath=//input[@name='B1']").click();
const dialog=await alertPromise;


let actualAlertMessage=dialog.message();
console.log(actualAlertMessage)

await dialog.accept()

await page.waitForTimeout(5000);
await browser.close();