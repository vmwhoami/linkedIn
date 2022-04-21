"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlModifier = (url, sendMessagesOptions) => {
    const { region } = sendMessagesOptions;
    return `${url}${region}`;
};
exports.default = urlModifier;
