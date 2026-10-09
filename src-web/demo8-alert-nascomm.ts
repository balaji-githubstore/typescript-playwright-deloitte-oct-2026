import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://nasscom.in/");


// await page.locator("xpath=(//a[text()='DeepTech'])[1]").click();
//click on Become a member
await page.locator("xpath=(//a[text()='Become a member'])[1]").click();

// await page.locator("xpath=//a[text()='Become a member']").nth(0).click();

//Select company category as Indian
await page.locator("xpath=//select[@id='edit-field-company-type']").selectOption({label:"Indian"});

//Enter Address as 24, Chennai, 600019
await page.locator("xpath=//textarea[@id='edit-field-address-line-1-0-value']").fill("chennai-600019");

//modify the default behaviour of dialog in playwright 
page.on("dialog",async (dialog)=>{
    let actualAlertMessage=dialog.message();
    console.log(actualAlertMessage);
    await dialog.accept();
})

//click on calculate fee 
await page.locator("xpath=//a[text()='Calculate Fee']").click();
//get the alert message, print it and then handle it

await page.waitForTimeout(5000);
await browser.close();