"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modifiedUrl = (url, connectOptions) => {
    const {} = connectOptions;
    return `${url}${}`;
};
const makeConnections = async (page, url, connectOptions) => {
    const modifiedUrl = modifiedUrl(url, connectOptions);
    await page.goto(modifiedUrl);
};
exports.default = makeConnections;
// const link = 'https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=tech%20recruiter&origin=FACETED_SEARCH&sid=b6t';
// https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=it%20recruiter&sid=rEa
