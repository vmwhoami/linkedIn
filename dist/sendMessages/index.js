"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlModifier_1 = require("./UrlModifier");
const sendMessages = async (page, url, sendMessagesOptions) => {
    const generateLink = (0, UrlModifier_1.default)(url, sendMessagesOptions, pageNumber);
    await page.goto(generateLink);
    //This is the url to the page where you can send messages
    // search/results/people/?network=%5B"F"%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&page=1&sid=0l1
};
exports.default = sendMessages;
