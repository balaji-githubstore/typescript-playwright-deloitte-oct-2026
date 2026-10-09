
//shadowroot element works only with CSS selector or default methods from playwright

import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://www.salesforce.com/in/sales/free-trial/ee/");

//click on accept cookies

//enter firstname as john
await page.locator("css=input[name='firstName']").fill("jack");
await page.locator("css=input[name='lastName']").fill("wick");

//enter job title as QA
await page.locator("css=input[name='jobTitle']").fill("QA");
//select company size as 31 - 200
await page.locator("css=select[name='employees']").selectOption({label:"31-200 employees"});

//click on start my trial
// await page.locator("text=Start my free trial").click();
await page.getByText("Start my free trial").click();

const actualError=await page.getByText("valid phone",{exact:false}).innerText();
console.log(actualError)

await page.waitForTimeout(5000);
await browser.close();