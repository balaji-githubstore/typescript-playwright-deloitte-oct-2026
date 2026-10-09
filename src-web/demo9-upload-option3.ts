import { chromium, firefox } from "playwright"

//BrowserInstance
const browser = await chromium.launch({ channel: "chrome", headless: false });
//BrowserContext
const context = await browser.newContext();
//Page (tab1)
const page = await context.newPage();

await page.goto("https://www.ilovepdf.com/pdf_to_word");

//option 3 - not recommended
//register filechooser event so when upload windows comes, it will handle
page.on("filechooser", async (fileChooser) => {
    await fileChooser.setFiles("D:\\Mine\\Balaji Dinakaran Trainer Profile AI 2026.pdf");
})

await page.locator("xpath=//span[text()='Select PDF file']").click();


await page.waitForTimeout(5000);
await browser.close();
