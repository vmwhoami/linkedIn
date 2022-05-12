"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlModifier_1 = require("./UrlModifier");
const sendMessages = async (page, url, sendMessagesOptions) => {
    const generateLink = (0, UrlModifier_1.default)(url, sendMessagesOptions, 3);
    await page.goto(generateLink); // Generated Link will change to switch between pages
    const subtitles = await page.evaluateHandle(async () => {
        let resultRecruiters = [];
        let result__items = await document.querySelectorAll('.entity-result__item');
        result__items.forEach(async (element) => {
            const str = element
                .querySelector('.entity-result__primary-subtitle')?.textContent?.replace(/\n/g, '')
                .trim().toLowerCase();
            const result = /^(?=.*it recruiter)|^(?=.*technical recruiter)/.test(str);
            result ? resultRecruiters.push(element) : null;
        });
        const buttons = await resultRecruiters.map(el => el.querySelector('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view'));
        return [...buttons];
    });
    const children = [];
    const elements = await subtitles.getProperties();
    for (const property of elements.values()) {
        const element = property.asElement();
        element ? children.push(element) : null;
    }
};
exports.default = sendMessages;
