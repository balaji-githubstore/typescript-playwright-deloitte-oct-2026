import { chromium,firefox } from "playwright"

//BrowserInstance
const browser=await chromium.launch({channel:"chrome",headless:false});
//BrowserContext
const context=await browser.newContext();
//Page (tab1)
const page=await context.newPage();

await page.goto("https://orangehrm.com/book-a-free-demo");

const actualTitle:string=await page.title();
console.log(actualTitle);
console.log(await page.title());

//get the url 
const actualUrl=page.url();
console.log(actualUrl);
console.log(page.url());


//get the page source 
const actualPageSource=await page.content();
console.log(actualPageSource)

//Page (tab2)
const page1=await context.newPage();
await page1.goto("https://google.com");
console.log(await page1.title());

await page.close();

await browser.close();