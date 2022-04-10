"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connecterMethod = async (elements_arr, page) => {
    while (elements_arr.length > 0) {
        const selectedElement = elements_arr.shift();
        await selectedElement.click();
        await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        await page.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    }
};
exports.default = connecterMethod;
