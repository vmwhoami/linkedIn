import puppeteer from 'puppeteer';
import pass from '../sensitive.js';
// import login from './login.js'

let password = pass();


async function login(page) {
  await page.waitForSelector("#session_key");
  await page.type("#session_key", "vmwhoami@gmail.com");
  await page.type("#session_password", password);
  await page.waitForSelector(".sign-in-form__submit-button")
  await page.click(".sign-in-form__submit-button")
}

async function searchFor(page, input) {
  await page.waitForSelector(".search-global-typeahead__input");
  await page.click(".search-global-typeahead__input");
  await page.keyboard.type(input);
  await page.keyboard.press("Enter");
}

// Boilerplate stuff
async function startBrowser() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  return { browser, page };
}

async function closeBrowser(browser) {
  return browser.close();
}

// Normalizing the text
function getText(linkText) {
  linkText = linkText.replace(/\r\n|\r/g, "\n");
  linkText = linkText.replace(/\ +/g, " ");

  // Replace &nbsp; with a space 
  var nbspPattern = new RegExp(String.fromCharCode(160), "g");
  return linkText.replace(nbspPattern, " ");
}

// find the link, by going over all links on the page
async function findByLink(page, ElementString) {
  const links = await page.$$('button')
  for (var i = 0; i < links.length; i++) {
    let valueHandle = await links[i].getProperty('innerText');
    let linkText = await valueHandle.jsonValue();
    const text = getText(linkText);
    if (ElementString == text) {
      console.log(ElementString);
      console.log(text);
      console.log("Found");
      return links[i];
    }
  }
  return null;
}



async function gotTo(url) {
  const { browser, page } = await startBrowser();
  page.setViewport({ width: 1366, height: 768 });
  await page.goto(url);
  login(page)
  searchFor(page, "it recruiter")
  await findByLink(page, "People");
  // await page.screenshot({ path: 'screenshot.png' });
  // await closeBrowser(browser);
}

(async () => {
  await gotTo("https://www.linkedin.com/");
  // process.exit(1);
})();