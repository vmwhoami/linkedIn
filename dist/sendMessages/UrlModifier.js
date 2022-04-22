"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlModifier = (url, sendMessagesOptions) => {
    const { cannedSearch } = sendMessagesOptions;
    return `${url}${cannedSearch}1`;
};
exports.default = urlModifier;
