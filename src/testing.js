import puppeteer from 'puppeteer';

// const escapeXpathString = str => {
//   const splitedQuotes = str.replace(/'/g, `', "'", '`);
//   return `concat('${splitedQuotes}', '')`;
// };

// const clickByText = async (page, text) => {
//   const escapedText = escapeXpathString(text);
//   const linkHandlers = await page.$x(`//a[contains(text(), ${escapedText})]`);

//   if (linkHandlers.length > 0) {
//     await linkHandlers[0].click();
//   } else {
//     throw new Error(`Link not found: ${text}`);
//   }
// };

// const run = async () => {
//   const browser = await puppeteer.launch({ args: ['--no-sandbox'], headless: false });
//   const page = await browser.newPage();
//   await page.goto('https://en.wikipedia.org/wiki/List_of_The_Sandman_characters');
//   await clickByText(page, `Fiddler's Green`);
//   await page.waitForNavigation({ waitUntil: 'load' });
//   console.log("Current page:", page.url());
//   // return browser.close();
// };

// const logErrorAndExit = err => {
//   console.log(err);
//   process.exit();
// };

// run().catch(logErrorAndExit);

// .artdeco-card .artdeco-button .artdeco-button__text  

// Try this
// You can use Array.from() to create an array containing all of the textContent values of each element matching your selector:

// const text = await page.evaluate(() => Array.from(document.querySelectorAll('[data-test-foo4="true"]'), element => element.textContent));

// console.log(text[0]);
// console.log(text[1]);
// console.log(text[2]);
// If you need to click more than one element containing a given selector, you can create an ElementHandle array using page.$$() and click each one using elementHandle.click():

// const example = await page.$$('[data-test-foo4="true"]');

// await example[0].click();
// await example[1].click();
// await example[2].click();