"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ghost_cursor_1 = require("ghost-cursor");
const connecterMethod = async (elements_arr, page) => {
    const cursor = (0, ghost_cursor_1.createCursor)(page);
    for await (const selectedElement of elements_arr) {
        selectedElement.click();
        await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        await page.waitForNavigation();
        // if (await page.$('.artdeco-modal__actionbar.ember-view.text-align-right .ml1') !== null) {
        // } else {
        //   await page.waitForSelector('.artdeco-modal__dismiss.artdeco-button');
        //   await cursor.click('.artdeco-modal__dismiss.artdeco-button');
        // }
    }
};
exports.default = connecterMethod;
