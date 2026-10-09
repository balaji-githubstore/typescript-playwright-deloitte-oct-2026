/*
Task 1 (Important) - Multiple tabs
1.      Navigate onto https://www.citigroup.com/global/about-us/global-presence/india
2.      Close if any pop-up comes - accept the cookies
3.      Click on My Account (or do mousehover)
4.      Click on Banking with citi
5.      In new tab
6.      Enter userid as john123
7.      Click on signup
8.      Get the error displayed for password and print it
*/

import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://www.citigroup.com/global/about-us/global-presence/india");

//complete the task
await page.locator("xpath=//div[text()='My Account']").hover();


const [newPage,]=await Promise.all([page.waitForEvent("popup"),
    page.locator("xpath=//div[text()='Banking with Citi']").click()]);
newPage.waitForLoadState();

await newPage.locator("xpath=//input[@formcontrolname='username']").fill("john");
await newPage.locator("xpath=//button[normalize-space()='Sign On']").click();

const actualError=await newPage.locator("xpath=//span[contains(text(),'valid password')]").innerText();
console.log(actualError);
await page.waitForTimeout(5000);
await browser.close();