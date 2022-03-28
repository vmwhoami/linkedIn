"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectionsUrl_1 = require("./connect/connectionsUrl");
const makeConnections = async (page, url, connectOptions) => {
    const modified = (0, connectionsUrl_1.default)(url, connectOptions);
    await page.goto(modified);
    await connect(page);
};
exports.default = makeConnections;
const loopFunc = async (elements_arr, page) => {
    while (elements_arr.length > 0) {
        const selectedElement = elements_arr.shift();
        await selectedElement.click();
        // waits for the connect button to be visible
        const selector = await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        if (!selector)
            continue;
        await page.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        // Place the press connect button here
    }
};
// await for selector
//document.querySelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1')
const goToNextPage = async (page) => {
    const pages = await page.$$('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right artdeco-button--1.artdeco-button--tertiary.ember-view');
};
const connect = async (page) => {
    try {
        await page.waitForTimeout(500);
        const elementsHendles = await page.evaluateHandle(() => {
            return document
                .querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)');
        });
        const elements = await elementsHendles.getProperties();
        const children = [];
        for (const property of elements.values()) {
            const element = property.asElement();
            element ? children.push(element) : null;
        }
        await loopFunc(children, page);
    }
    catch (error) {
        console.log(error);
    }
};
