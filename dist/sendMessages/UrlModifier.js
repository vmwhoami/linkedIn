"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlModifier = (url, sendMessagesOptions, pageNumber) => {
    const { cannedSearch } = sendMessagesOptions;
    return `${url}${cannedSearch}${pageNumber}`;
};
exports.default = urlModifier;
