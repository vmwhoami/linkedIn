// import puppeteer from 'puppeteer';
import pass from '../sensitive.js';
import login from './login.js';
import searchFor from './searchFor.js';
import { startBrowser, closeBrowser } from './startCloseBrowser.js';
import selectCountry from './selectCountry.js'




const getAllBtns = async (page) => {
  await page.waitForSelector('ul li.reusable-search__result-container button');
  await page.$$eval('ul li.reusable-search__result-container button', (btns) => {
    return (
      btns.forEach(btn => {
        let span = btn.children[0]
        if (span.tagName === "SPAN" && span.textContent.trim() === "Connect") {
          return (btn.click())
        }
      })
    )
  });
  await page.$$eval("[aria-label='Add a note']", btn => btn[0].click())
  await page.waitForSelector("[placeholder='Ex: We know each other from…']")
  await page.keyboard.type("let's connect");
  page.$$eval("[aria-label='Send now']", btn => btn[0].click())
}

async function gotTo(url) {
  const { email, password } = pass()
  const { browser, page } = await startBrowser();
  page.setViewport({ width: 1366, height: 768 });
  page.goto(url);
  login(page, email, password);
  searchFor(page, "recruiter it");
  selectCountry(page, "Portland").then(() => getAllBtns(page))


}

(async () => {
  await gotTo("https://www.linkedin.com/");
  // process.exit(1);
})();