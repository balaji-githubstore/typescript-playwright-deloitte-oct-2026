/*
Task 1
1.        Navigate onto https://www.medibuddy.in/
2.        Close if any popup and Click on Login
3.        Click on I have Corporate Account 
4.        Click on Learn More
5.        Click on Skip
6.        Click on Login using Username & Password
7.        Enter username as john 
8.        Enter password as john123 
9.        Click on show password 
10.       Click log in 
11.       Get the error message shown and print it in terminal  
*/

import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://www.medibuddy.in/");

await page.locator("xpath=//a[text()='Login']").click();
await page.locator("xpath=//div[text()='I have a Corporate Account']").click();
await page.locator("xpath=//a[text()='Learn More']").click();
await page.locator("xpath=//a[text()='skip']").click();
await page.locator("xpath=//a[text()='Login using Username & Password']").click();
await page.locator("xpath=//input[@id='username']").fill("john");
await page.locator("xpath=//button[text()='Proceed']").click();
await page.locator("xpath=//input[@id='password']").fill("john123");
await page.locator("xpath=//img[@alt='hide-password']").click();
await page.locator("xpath=//button[text()='Sign In']").click();

const actualError:string=await page.locator("xpath=//div[contains(text(),'not able to connect')]").innerText();
console.log(actualError);

await page.waitForTimeout(5000);
await browser.close();