"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ghost_cursor_1 = require("ghost-cursor");
const connecterMethod = async (elements_arr, page) => {
    const cursor = (0, ghost_cursor_1.createCursor)(page);
    while (elements_arr.length > 0) {
        const selectedElement = elements_arr.shift();
        await selectedElement.click();
        await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        const checkObject = await page.waitForFunction(() => {
            let modalSmth = document.querySelector(".artdeco-modal__content");
            if (modalSmth.querySelector("label") != null) {
                return true;
            }
        });
        if (checkObject) {
            // selectedElement.remove()
            console.log("this is !!! ", checkObject);
            // console.log(elements_arr);
        }
        else {
            await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        }
    }
};
exports.default = connecterMethod;
