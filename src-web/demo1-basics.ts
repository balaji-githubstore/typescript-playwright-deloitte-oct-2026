import { chromium } from "playwright"


const browser=await chromium.launch({channel:"chrome",headless:false});
const context=await browser.newContext();
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

await browser.close();