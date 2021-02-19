import puppeteer from 'puppeteer';
const startBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  return { browser, page };
}
const closeBrowser = async (browser) => {
  return browser.close();
}

export { startBrowser, closeBrowser }

// , slowMo: 50