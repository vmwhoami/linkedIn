"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function urlModifier(url, connectOptions) {
    const { region, people, beforeKeword, keywords } = connectOptions;
    return `${url}${people}${region}${beforeKeword}${keywords?.split(' ').join('%20')}`;
}
exports.default = urlModifier;
