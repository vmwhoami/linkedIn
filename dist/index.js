"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' });
const startCloseBrowser_1 = require("./startCloseBrowser");
const login_1 = require("./login");
const makeConnections_1 = require("./makeConnections");
// import applyToJobs from "./applyToJobs";
const locations = {
    'New York': '105080838',
    'San Francisco': '90000084',
    'Chicago': '103112676',
    'Los Angeles': '102448103',
    'Miami': '102394087',
    'Philadelphia': '104937023',
    'Atlanta': '106224388',
};
const options = {
    url: 'https://www.linkedin.com/',
    viewPortOptions: { width: 1200, height: 900 },
    browserOptions: { headless: false, slowMo: 30, devtools: false },
    connect: true,
    loginOptions: {
        email: process.env.EMAIL,
        password: process.env.PASSWORD
    },
    connectOptions: {}
};
const linkedInParser = async (options) => {
    const { browserOptions, viewPortOptions, url, loginOptions, connect, connectOptions } = options;
    const { page } = await (0, startCloseBrowser_1.startBrowser)(browserOptions);
    page.setViewport(viewPortOptions);
    await page.goto(url);
    await (0, login_1.default)(page, loginOptions);
    connect ? await (0, makeConnections_1.default)(page, url, connectOptions) : null;
    // await page.goto(url + search);
    // await page.setViewport({ width: 500, height: 1000 });
    // await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
    // await applyToJobs(page)
};
(async () => {
    await linkedInParser(options);
})();
