// import puppeteer from 'puppeteer';
import pass from '../sensitive.js';
import login from './login.js';
import searchFor from './searchFor.js';
import { startBrowser, closeBrowser } from './startCloseBrowser.js';
import selectCountry from './selectCountry.js'


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
  page.goto(url);
  login(page, "vitalie.melnic@yandex.com", pass);
  searchFor(page, "it recruiter");
  selectCountry(page, "china")


}

(async () => {
  await gotTo("https://www.linkedin.com/");
  // process.exit(1);
})();