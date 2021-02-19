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



async function gotTo(url) {
  const { browser, page } = await startBrowser();
  page.setViewport({ width: 1366, height: 768 });
  await page.goto(url);
  login(page, "vmwhoami@gmail.com", pass)
  searchFor(page, "it recruiter")
  await findByLink(page, "People");
  // await page.screenshot({ path: 'screenshot.png' });
  // await closeBrowser(browser);
}

(async () => {
  await gotTo("https://www.linkedin.com/");
  // process.exit(1);
})();