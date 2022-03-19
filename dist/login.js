"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeEmail = async (page, email) => {
    await page.waitForSelector('.input #session_key');
    await page.click('.input #session_key');
    await page.keyboard.type(email);
};
const typePassword = async (page, password) => {
    await page.waitForSelector('.input #session_password');
    await page.click('.input #session_password');
    await page.keyboard.type(password);
};
const signIn = async (page) => {
    await page.waitForSelector('.sign-in-form__submit-button');
    await page.click('.sign-in-form__submit-button');
};
const login = async (page, loginOptions) => {
    try {
        const { email, password } = loginOptions;
        await typeEmail(page, email || '');
        await typePassword(page, password || '');
        await signIn(page);
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = login;
