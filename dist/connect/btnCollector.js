"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ghost_cursor_1 = require("ghost-cursor");
const btnCollector = async (page) => {
    await page.waitForSelector('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
    const children = [];
    const elementsHendles = await page.waitForFunction(async () => {
        const spans = await document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)');
        return [...spans].filter(span => span.textContent.replace(/\n/g, '').trim() === "Connect");
    });
    const elements = await elementsHendles.getProperties();
    for (const property of elements.values()) {
        const element = property.asElement();
        element ? children.push(element) : null;
    }
    await connecterMethod(children, page);
};
// await page.waitForNavigation({ waitUntil: 'networkidle0' });
// if (await page.$('#buttonToClick') !== null) {
//     await page.click('#buttonToClick');
//   } else {
//     await page.waitForSelector('#otherButton');
//     await page.click('#otherButton');
//   }
const connecterMethod = async (elements_arr, page) => {
    const cursor = (0, ghost_cursor_1.createCursor)(page);
    let nodeListToArray = Array.from(elements_arr);
    while (nodeListToArray.length > 0) {
        const selectedElement = nodeListToArray.shift();
        await selectedElement.click();
        await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        const checkObject = await page.waitForFunction(() => {
            let modalSmth = document.querySelector(".artdeco-modal__content");
            if (modalSmth.querySelector("label") != null) {
                //send a method to change the connect button text
            }
        });
        if (checkObject) {
            // think on changing the connect button it might be the case that it is reinserting the button into the array
            // selectedElement.remove()
            console.log("this is !!! ", checkObject);
            // console.log(elements_arr);
        }
        else {
            await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        }
    }
};
exports.default = btnCollector;
