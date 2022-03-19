"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeBrowser = exports.startBrowser = void 0;
const puppeteer_1 = require("./puppeteer");
const startBrowser = async (browserOptions) => {
    const browser = await puppeteer_1.default.launch(browserOptions);
    const page = await browser.newPage();
    return { browser, page };
};
exports.startBrowser = startBrowser;
const closeBrowser = async (browser) => {
    return browser.close();
};
exports.closeBrowser = closeBrowser;
