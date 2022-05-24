"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { createCursor } from "ghost-cursor";
const connecterMethod_1 = require("./connecterMethod");
const btnCollector = async (page) => {
    await page.waitForSelector('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
    const children = [];
    // page.evaluate will run the code once and return data.
    // page.waitForFunction will run the code repeatedly until the code returns truthy values.
    const elementsHendles = await page.waitForFunction(async () => {
        const spans = await document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)');
        return [...spans].filter(span => span.textContent.replace(/\n/g, '').trim() === "Connect");
    });
    const elements = await elementsHendles.getProperties();
    for (const property of elements.values()) {
        const element = property.asElement();
        element ? children.push(element) : null;
    }
    await (0, connecterMethod_1.default)(children, page);
};
exports.default = btnCollector;
