"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const goToNextPage = async (page) => {
    await page.evaluate(() => { window.scrollBy(0, window.innerHeight); });
    await page.waitForSelector('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right');
    await page.click('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right');
};
exports.default = goToNextPage;
