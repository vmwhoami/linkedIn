import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 200, devtools: true });
  const page = await browser.newPage();
  await page.goto('https://3dtotal.com/');
  await page.waitForTimeout(2000)
  await page.$$eval('.snippet-featured-auto__boxes', (h1) => h1.map(h => {
    let a = h.childNodes[3];
    return (
      console.log(a)
    )
  }))

  // page.close()
})();