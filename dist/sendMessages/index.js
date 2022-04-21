"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendMessagesUrlModifier = async (page, url, sendMessagesOptions) => {
    const modified = sendMessagesUrlModifier(url, sendMessagesOptions);
    await page.goto(modified);
    //This is the url to the page where you can send messages
    // search/results/people/?network=%5B"F"%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&page=1&sid=0l1
};
exports.default = sendMessagesUrlModifier;
