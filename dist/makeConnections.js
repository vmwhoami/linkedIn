"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectionsUrl_1 = require("./connect/connectionsUrl");
const makeConnections = async (page, url, connectOptions) => {
    const modified = (0, connectionsUrl_1.default)(url, connectOptions);
    await page.goto(modified);
    await connect(page);
};
exports.default = makeConnections;
const connecterMethod = async (elements_arr, page) => {
    while (elements_arr.length > 0) {
        const selectedElement = elements_arr.shift();
        await selectedElement.click();
        await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
        await page.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    }
    await goToNextPage(page);
};
const goToNextPage = async (page) => {
    await page.evaluate(() => { window.scrollBy(0, window.innerHeight); });
    await page.waitForSelector('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right');
    await page.click('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right');
};
const connect = async (page) => {
    try {
        // Starts here collects all btns
        const elementsHendles = await page.evaluateHandle(() => {
            const spans = document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)');
            return [...spans].filter(span => span.textContent.replace(/\n/g, '').trim() === "Connect");
        });
        const elements = await elementsHendles.getProperties();
        const children = [];
        for (const property of elements.values()) {
            const element = property.asElement();
            element ? children.push(element) : null;
        }
        await connecterMethod(children, page);
    }
    catch (error) {
        console.log(error);
    }
};
const btnCollector = async (page) => {
    try {
        const elementsHendles = await page.evaluateHandle(() => {
            const spans = document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)');
            return [...spans].filter(span => span.textContent.replace(/\n/g, '').trim() === "Connect");
        });
        const elements = await elementsHendles.getProperties();
        const children = [];
        for (const property of elements.values()) {
            const element = property.asElement();
            element ? children.push(element) : null;
        }
        await connecterMethod(children, page);
    }
    catch (error) {
        console.log(error);
    }
};
