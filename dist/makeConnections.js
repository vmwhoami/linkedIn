"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function modifiedUrl(url, connectOptions) {
    const { region, people, beforeKeword, keywords } = connectOptions;
    return `${url}${people}${region}${beforeKeword}${keywords?.split(' ').join('%20')}`;
}
const makeConnections = async (page, url, connectOptions) => {
    const modified = modifiedUrl(url, connectOptions);
    await page.goto(modified);
    await connect(page);
};
exports.default = makeConnections;
const loopFunc = async (elements_arr, page) => {
    while (elements_arr.length > 0) {
        const selectedElement = elements_arr.shift();
        await selectedElement.click();
        // await sendCV(page);
    }
};
const goThroughPages = async (page) => {
    const pages = await page.$$('.pagination a');
    const pages_arr = [];
    for (let i = 0; i < pages.length; i++) {
        pages_arr.push(pages[i]);
    }
    await loopFunc(pages_arr, page);
};
//  NEXT PAGE BUTTON 
// .artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right artdeco-button--1.artdeco-button--tertiary.ember-view
// We need a loop throught all the pages
// We a loop throught all the contacts
// We need to click on the next page when we reach the end of the page
const connect = async (page) => {
    try {
        await page.waitForTimeout(500);
        const elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view'));
        const elements = await elementsHendles.getProperties();
        const children = [];
        for (const property of elements.values()) {
            const element = property.asElement();
            if (element)
                children.push(element);
        }
        console.log(children);
        await loopFunc(children, page);
    }
    catch (error) {
        console.log(error);
    }
};
