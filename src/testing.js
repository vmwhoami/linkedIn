import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 30 });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Get the "viewport" of the page, as reported by the page.
  // Page Evaluate makes a selection with query selector all
  const divCount = await page.$$eval('a', a => a[0].click());


  // await browser.close();
})();