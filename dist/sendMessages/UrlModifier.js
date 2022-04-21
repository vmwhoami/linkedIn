"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlModifier = (url, sendMessagesOptions) => {
    // const { region } = sendMessagesOptions;
    return `${url}search/results/people/?network=%5B"F"%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&page=1&sid=0l1`;
};
exports.default = urlModifier;
