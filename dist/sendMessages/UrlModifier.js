"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TO DO: See if you can make this function more generic by using the urlModifier function
const urlModifier = (url, sendMessagesOptions, pageNumber) => {
    const { cannedSearch } = sendMessagesOptions;
    return `${url}${cannedSearch}${pageNumber}`;
};
exports.default = urlModifier;
