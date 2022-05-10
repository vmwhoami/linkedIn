"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlModifier_1 = require("./UrlModifier");
const sendMessages = async (page, url, sendMessagesOptions) => {
    const generateLink = (0, UrlModifier_1.default)(url, sendMessagesOptions, 3);
    await page.goto(generateLink); // Generated Link will change to switch between pages
    const subtitles = await page.evaluate(() => {
        let result__items = document.querySelectorAll('.entity-result__item');
        let resultRecruiters = [];
        result__items.forEach(element => {
            let str = element.querySelector('.entity-result__primary-subtitle')?.textContent?.replace(/\n/g, '').trim().toLowerCase();
            let result = /^(?=.*it recruiter)/.test(str);
            result ? resultRecruiters.push(element) : null;
        });
    });
    // let subtitles = document.querySelectorAll('.entity-result__primary-subtitle')
    // Array.from(subtitles)
    //This is the url to the page where you can send messages
    // search/results/people/?network=%5B"F"%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&page=1
    // .entity-result__primary-subtitle this selects job title
    // .entity-result__secondary-subtitle text that contains location
    // .msg-form__msg-content-container message input container 
    // .msg-form__footer-action artdeco-button artdeco-button--tertiary artdeco-button--circle artdeco-button--muted  // attach image or attach file button 
    //  title="Attach a file to your conversation with " aria-label="Attach a file to your conversation with " see if you can differentiate between the two buttons by using the aria-label or title attribute
    // msg-overlay-bubble-header__control artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view  Close button selector to close the message window
};
exports.default = sendMessages;
