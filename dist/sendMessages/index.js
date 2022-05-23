"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const pathFileMac = __dirname.split('\\').slice(0, 4).join('/'); //for Mac
const pathFileWin = path.resolve('dist', 'cvs', 'VITALIEMELNIC.docx');
const fileExistsMac = fs.existsSync(`${pathFileMac}/VITALIEMELNIC.pdf`);
const fileExistsWin = fs.existsSync(pathFileWin);
const UrlModifier_1 = require("./UrlModifier");
const ghost_cursor_1 = require("ghost-cursor");
const collectMessageBtn = async (page, url, sendMessagesOptions) => {
    const generateLink = (0, UrlModifier_1.default)(url, sendMessagesOptions, 6);
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
        console.log(buttons);
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
// Promise.all
const sendMessages = async (children, page) => {
    const cursor = (0, ghost_cursor_1.createCursor)(page);
    // Learn this
    //https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/
    // https://stackoverflow.com/questions/64499035/puppeteer-second-promise-all-times-out-after-trying-to-click-td-with-class-click
    // asyncForEach(children, async (element: any, index: number, array: any) => {
    //   await cursor.click(element);
    //   await page.waitForSelector('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
    //   await cursor.click('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
    //   await page.keyboard.type("Hi there, I am interested in your job posting.");
    //   await page.keyboard.press('Enter');
    //   await page.waitForSelector('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')
    //   await cursor.click('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')
    // })
    while (children.length > 0) {
        const selectedElement = children.shift();
        // await selectedElement.click();
        await Promise.all([
            writeMessage(selectedElement, page, cursor),
        ]).catch(e => console.log(e));
        // await cursor.click('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
        // await page.keyboard.type("Hi");
        // await cursor.click('.msg-form__send-button.artdeco-button.artdeco-button--1')
        // await page.waitForSelector('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')
        // await cursor.click('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')
    }
};
async function writeMessage(selectedElement, page, cursor) {
    await cursor.click(selectedElement);
    await page.waitForSelector('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
    await cursor.click('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
    await page.keyboard.type("您好");
    await page.waitForSelector('.msg-form__send-button.artdeco-button.artdeco-button--1');
    await cursor.click('.msg-form__send-button.artdeco-button.artdeco-button--1');
    await page.waitForNavigation();
    const elementHandle = await page.$('input[type=file]');
    uploadCV(fileExistsMac, fileExistsWin, elementHandle);
    await page.waitForSelector('.msg-form__footer-action.artdeco-button.artdeco-button--tertiary.artdeco-button--circle.artdeco-button--muted')[1];
    // Write a function that closes this window
    // Select the opened window
    await page.evaluate(async () => {
        // Figure a way to select the 3rd window
        const closeBtn = await document.querySelectorAll('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')[3];
        await closeBtn.click();
    });
    // Code for uploading a file
}
const uploadCV = async (fileExistsMac, fileExistsWin, elementHandle) => {
    if (fileExistsMac) {
        await elementHandle.uploadFile(`${pathFileMac}/VITALIEMELNIC.pdf`);
    }
    else if (fileExistsWin) {
        await elementHandle.uploadFile(`${pathFileWin}`);
    }
};
// Don't forget to add a file for example CV or resume
exports.default = collectMessageBtn;
