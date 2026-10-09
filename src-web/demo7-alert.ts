import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://echoecho.com/javascript4.htm");

//modify the default behaviour of dialog in playwright 
page.on("dialog",async (dialog)=>{
    let actualAlertMessage=dialog.message();
    console.log(actualAlertMessage);
    await dialog.accept();
})

await page.locator("xpath=//input[@name='B1']").click();

await page.waitForTimeout(5000);
await browser.close();