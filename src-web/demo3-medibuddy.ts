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



await page.waitForTimeout(5000);
await browser.close();