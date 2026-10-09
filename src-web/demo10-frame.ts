// 

import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://app.thetestingacademy.com/playwright/frames/");


const vehicleFrame=page.frameLocator("xpath=//iframe[@name='vehicle-form']")

//enter vehicle name as Creta
await vehicleFrame.locator("xpath=//input[@name='vehicleName']").fill("creta");
await vehicleFrame.locator("xpath=//input[@name='ownerName']").fill("john");

//enter registration number - TN20AJ8787
//select vechicle type as SUV
//year as 2020
//click on submit registration 
await vehicleFrame.locator("xpath=//button[text()='Submit registration']").click();

//get the json text shown and print in console. 
//div[contains(text(),'vehicleName')]
const actualValue=await vehicleFrame.locator("xpath=//div[@id='vehicle-output']").innerText();
console.log(actualValue);
await page.waitForTimeout(5000);
await browser.close();
