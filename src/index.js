import puppeteer from 'puppeteer';
import pass from '../sensitive.js';
(async () => {
  let password = pass()
  let input = "it technical recruiter"

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('https://linkedin.com');
  await page.waitForSelector("#session_key");
  await page.focus("#session_key");
  await page.keyboard.type("vmwhoami@gmail.com");
  await page.focus("#session_password");
  await page.keyboard.type(password);
  await page.waitForSelector(".sign-in-form__submit-button")
  await page.click(".sign-in-form__submit-button")
  await page.waitForSelector(".search-global-typeahead__input");
  await page.click(".search-global-typeahead__input");
  await page.keyboard.type(input);
  await page.keyboard.press("Enter");



  // await browser.close();
})();