"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlModifier = (url, connectOptions) => {
    const { region, people, beforeKeword, keywords } = connectOptions;
    // return "https://www.linkedin.com/search/results/people/?geoUrn=%5B%22102394087%22%5D&keywords=it%20recruiter&page=5&sid=Qqj"
    return `${url}${people}${region}${beforeKeword}${keywords?.split(' ').join('%20')}`;
};
exports.default = urlModifier;
