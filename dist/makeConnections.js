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
const goToNextPage = async (page) => {
    await page.evaluate(() => { window.scrollBy(0, window.innerHeight); });
    await page.waitForSelector('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right');
    await page.click('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right');
};
const connect = async (page) => {
    try {
        // Take a look at the generated code maybe something like this
        // While some conditions are met, keep clicking the connect button
        // while (true) {
        //   // Get the list of elements that are connectable
        //   const elements_arr = await page.$$('.artdeco-button.artdeco-button--muted.artdeco-button--icon-right.artdeco-button--2.ember-view');
        //   // If there are no elements, then we are done
        //   if (elements_arr.length === 0) break;
        //   // Loop through the elements and click the connect button
        //   await loopFunc(elements_arr, page);
        //   // Go to the next page
        // await goToNextPage(page);
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
        await loopFunc(children, page);
    }
    catch (error) {
        console.log(error);
    }
};
