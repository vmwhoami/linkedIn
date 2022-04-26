"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btnCollector = async (page) => {
    await page.waitForSelector('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
    const children = [];
    const elementsHendles = await page.waitForFunction(async () => {
        const spans = await document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)');
        return [...spans].filter(span => span.textContent.replace(/\n/g, '').trim() === "Connect");
    });
    //   const checkObject = await page.waitForFunction(() =>{
    //     document.querySelector(".artdeco-modal__content")!.querySelector("label")!= null
    //  });
    const elements = await elementsHendles.getProperties();
    for (const property of elements.values()) {
        const element = property.asElement();
        element ? children.push(element) : null;
    }
    return children;
};
exports.default = btnCollector;
