"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link = 'https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=tech%20recruiter&origin=FACETED_SEARCH&sid=b6t';
const makeConnections = async (page) => {
    await page.goto(link);
};
exports.default = makeConnections;
// https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=it%20recruiter&sid=rEa
