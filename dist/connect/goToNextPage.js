"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ghost_cursor_1 = require("ghost-cursor");
const goToNextPage = async (page, loopResult) => {
    const cursor = (0, ghost_cursor_1.createCursor)(page);
    await page.evaluate(() => { window.scrollBy(0, window.innerHeight); });
    await page.waitForSelector('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right');
    if (loopResult) {
        await cursor.click('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right');
    }
    await cursor.click('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right');
};
exports.default = goToNextPage;
