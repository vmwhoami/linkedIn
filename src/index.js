// import puppeteer from 'puppeteer';
import pass from '../sensitive.js';
import login from './login.js';
import searchFor from './searchFor.js';
import { startBrowser, closeBrowser } from './startCloseBrowser.js';


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

const escapedString = str => {
  const splitedQuotes = str.replace(/'/g, `', "'", '`);
  return `concat('${splitedQuotes}', '')`;
};

const clickByText = async (page, text) => {
  const escapedText = escapedString(text);
  const linkHandlers = await page.$x(`//a[contains(text(), ${escapedText})]`);

  if (linkHandlers.length > 0) {
    await linkHandlers[0].click();
  } else {
    throw new Error(`Link not found: ${text}`);
  }
};



async function gotTo(url) {
  const { browser, page } = await startBrowser();
  page.setViewport({ width: 1366, height: 768 });
  await page.goto(url);
  await login(page, "vitalie.melnic@yandex.com", pass);
  await searchFor(page, "it recruiter");
  await page.waitForSelector("[aria-label='People']");
  await page.click("[aria-label='People']");
  await page.waitForSelector("[aria-label='Locations filter. Clicking this button displays all Locations filter options.']");
  await page.click("[aria-label='Locations filter. Clicking this button displays all Locations filter options.']");
  await page.waitForSelector("[aria-label='Add a location']");

  await page.click("[aria-label='Add a location']");
  await page.keyboard.type("United States");
  await page.click("[aria-label='Add a location']");
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.mouse.click(".peek-carousel__slides li:nth-child(4) [data-control-name='filter_show_results']")

}

(async () => {
  await gotTo("https://www.linkedin.com/");
  // process.exit(1);
})();