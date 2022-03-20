"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function modifiedUrl(url, connectOptions) {
    const { region } = connectOptions;
    return `${url}${region}`;
}
const makeConnections = async (page, url, connectOptions) => {
    const modified = modifiedUrl(url, connectOptions);
    await page.goto(modified);
};
exports.default = makeConnections;
// https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=it%20recruiter&sid=rEa
