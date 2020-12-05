const puppeteer = require('puppeteer');
import pass from 'sensitive'

let pass = pass

  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://linkedin.com');
    await page.waitForSelector("#session_key");
    await page.focus("#session_key");
    await page.keyboard.type("vmwhoami@gmail.com");
    await page.focus("#session_password");
    await page.keyboard.type(pass);
    await page.waitForSelector(".sign-in-form__submit-button")
    await page.click(".sign-in-form__submit-button")
    await page.waitForSelector(".search-global-typeahead__input");
    await page.click(".search-global-typeahead__input");
    await page.keyboard.type("it recruiter");
    await page.keyboard.press("Enter");
  })();