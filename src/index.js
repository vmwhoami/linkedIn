import puppeteer from 'puppeteer';
import pass from '../sensitive.js';
// import login from './login.js'
(async () => {
  let password = pass();
  let input = "it technical recruiter"


  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('https://linkedin.com');
  await page.waitForSelector("#session_key");
  await page.type("#session_key", "vmwhoami@gmail.com");
  await page.type("#session_password", password);
  await page.waitForSelector(".sign-in-form__submit-button")
  await page.click(".sign-in-form__submit-button")
  await page.waitForSelector(".search-global-typeahead__input");
  await page.click(".search-global-typeahead__input");
  await page.keyboard.type(input);
  await page.keyboard.press("Enter");
  // await page.$eval(".search-global-typeahead__input", e => e.blur());
  // await page.click("button", ['People']);


  // await browser.close();
})();

