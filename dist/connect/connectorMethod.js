"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ghost_cursor_1 = require("ghost-cursor");
const connecterMethod = async (elements_arr, page) => {
    const cursor = (0, ghost_cursor_1.createCursor)(page);
    elements_arr.forEach(async (selectedElement, index) => {
        await selectedElement.click();
        if (await page.$('.artdeco-button.artdeco-button--2.artdeco-button--primary.artdeco-button--disabled.ember-view.ml1') !== null) {
            await page.waitForSelector('.artdeco-modal__dismiss.artdeco-button');
            await cursor.click('.artdeco-modal__dismiss.artdeco-button');
        }
        else {
            await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
            await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        }
    });
    // while (elements_arr.length > 0) {
    //   const selectedElement = elements_arr.shift();
    //   await selectedElement.click();
    //   if (await page.$('.artdeco-button.artdeco-button--2.artdeco-button--primary.artdeco-button--disabled.ember-view.ml1') !== null) {
    //     await page.waitForSelector('.artdeco-modal__dismiss.artdeco-button');
    //     await cursor.click('.artdeco-modal__dismiss.artdeco-button');
    //   } else {
    //     await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    //     await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    //   }
    // }
};
exports.default = connecterMethod;
