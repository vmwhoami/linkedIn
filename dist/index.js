"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' });
const startCloseBrowser_1 = require("./startCloseBrowser");
const login_1 = require("./login");
const applyToJobs_1 = require("./applyToJobs");
const makeConnections_1 = require("./makeConnections");
const [email, password] = [process.env.EMAIL, process.env.PASSWORD];
const url = 'https://www.linkedin.com/';
const linkedInParser = async (url, search, connect) => {
    const { page } = await (0, startCloseBrowser_1.startBrowser)();
    page.setViewport({ width: 1200, height: 900 });
    await page.goto(url);
    await (0, login_1.default)(page, email, password);
    connect ? await (0, makeConnections_1.default)(page) : null;
    await page.goto(url + search);
    await page.setViewport({ width: 500, height: 1000 });
    await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
    await (0, applyToJobs_1.default)(page);
};
const searchCat = 'jobs-moldova-developer';
const connect = true;
(async () => {
    await linkedInParser(url, searchCat, connect);
})();
`https://www.linkedin.com/jobs/search/?f_AL=true&f_E=2%2C4&f_JT=F%2CC&geoId=91000000&keywords=ruby%20on%20rails&location=Canada`;
