"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' });
const startCloseBrowser_1 = require("./startCloseBrowser");
const login_1 = require("./login");
const connect_1 = require("./connect/connect");
'./sendMessages/sendMessages';
const options_1 = require("./options");
const linkedInParser = async (options) => {
    const { browserOptions, viewPortOptions, url, loginOptions, connect, connectOptions, sendMessagesOptions } = options;
    const { page } = await (0, startCloseBrowser_1.startBrowser)(browserOptions);
    page.setViewport(viewPortOptions);
    await page.goto(url);
    await (0, login_1.default)(page, loginOptions);
    connect ? await (0, connect_1.default)(page, url, connectOptions) : null;
    sendMessages ? await sendMessages(page, url, sendMessagesOptions) : null;
    // await page.goto(url + search);
    // await page.setViewport({ width: 500, height: 1000 });
    // await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
    // await applyToJobs(page)
};
(async () => {
    await linkedInParser(options_1.default);
})();
