import puppeteer from 'puppeteer';
const startBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false, slowMo: 50
  });
  const page = await browser.newPage();
  return { browser, page };
}
const closeBrowser = async (browser) => {
  return browser.close();
}

export { startBrowser, closeBrowser }