"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlModifier_1 = require("./UrlModifier");
const ghost_cursor_1 = require("ghost-cursor");
const collectMessageBtn = async (page, url, sendMessagesOptions) => {
    const generateLink = (0, UrlModifier_1.default)(url, sendMessagesOptions, 3);
    await page.goto(generateLink); // Generated Link will change to switch between pages update this to dynamic
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
    await sendMessages(children, page);
};
const sendMessages = async (elements_arr, page) => {
    const cursor = (0, ghost_cursor_1.createCursor)(page);
    // Learn this
    // https://www.google.com/search?q=js+while+loop+with+delay+await&oq=js+while+loop+with+delay+awa&aqs=chrome.1.69i57j33i160l2j33i21.7783j0j7&sourceid=chrome&ie=UTF-8
    //https://www.geeksforgeeks.org/how-to-delay-a-loop-in-javascript-using-async-await-with-promise/
    asyncForEach(elements_arr, async (element, index, array) => {
        await cursor.click(element);
        await page.waitForSelector('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
        await cursor.click('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
        await page.keyboard.type("Hello World");
        await page.keyboard.press('Enter');
        await page.waitForSelector('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view');
        await cursor.click('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view');
    });
    // while (elements_arr.length > 0) {
    //   const selectedElement = elements_arr.shift();
    //   // await page.waitForTimeout(200);
    //   // the whole process of clicking the button typing the text and sending the message should be in a promise
    //   await selectedElement.click();
    //   // .msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate
    // }
};
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};
exports.default = collectMessageBtn;
