"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeConnections = async (page, searchOptions) => {
    await page.goto(link);
    ({
        geoUrn: geoUrn,
        keywords: keywords,
        origin: origin,
    } = searchOptions);
    const link = 'https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=tech%20recruiter&origin=FACETED_SEARCH&sid=b6t';
};
exports.default = makeConnections;
// https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=it%20recruiter&sid=rEa
