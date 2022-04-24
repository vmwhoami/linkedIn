"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ghost_cursor_1 = require("ghost-cursor");
const connecterMethod = async (elements_arr, page) => {
    const cursor = (0, ghost_cursor_1.createCursor)(page);
    while (elements_arr.length > 0) {
        const selectedElement = elements_arr.shift();
        await selectedElement.click();
        await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    }
};
exports.default = connecterMethod;
