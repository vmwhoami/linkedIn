import puppeteer from 'puppeteer';
const startBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false, slowMo: 30, devtools: true
  });
  const page = await browser.newPage();
  // page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
  return { browser, page };
}
const closeBrowser = async (browser) => {
  return browser.close();
}

export { startBrowser, closeBrowser }

// , slowMo: 50