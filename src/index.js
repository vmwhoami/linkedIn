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

const getAllBtns = async (page) => {
  await page.waitForSelector('ul li.reusable-search__result-container button');
  const btns = await page.$$eval('ul li.reusable-search__result-container button');
  for (let i = 0; i < btns.length; i += 1) {
    let button = btns[i]
    const btn = await (await button.getProperty('innerText')).jsonValue()
    if (btn.trim() === "Connect") {
      btn.trim()
    }
  }
}

async function gotTo(url) {
  const { email, password } = pass()
  const { browser, page } = await startBrowser();
  page.setViewport({ width: 1366, height: 768 });
  page.goto(url);
  login(page, email, password);
  searchFor(page, "translater");
  selectCountry(page, "China");
  // getAllBtns(page);
  await page.$$eval('ul li.reusable-search__result-container button', a => a[0].click());

}

(async () => {
  await gotTo("https://www.linkedin.com/");
  // process.exit(1);
})();