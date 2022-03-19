import puppeteer from './puppeteer';
import OptionTypes from './types';

const startBrowser = async (browserOptions: OptionTypes["browserOptions"]): Promise<unknown> => {
  const browser = await puppeteer.launch(browserOptions);
  const page = await browser.newPage();
  return { browser, page };
}
const closeBrowser = async (browser: any): Promise<unknown> => {
  return browser.close();
}

export { startBrowser, closeBrowser }