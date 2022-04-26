"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ghost_cursor_1 = require("ghost-cursor");
const typeEmail = async (page, email, cursor) => {
    await page.waitForSelector('.input #session_key');
    await cursor.click('.input #session_key');
    await page.keyboard.type(email);
};
const typePassword = async (page, password) => {
    await page.waitForSelector('.input #session_password');
    await page.click('.input #session_password');
    await page.keyboard.type(password);
};
const signIn = async (page, cursor) => {
    await page.waitForSelector('.sign-in-form__submit-button');
    await cursor.click('.sign-in-form__submit-button');
};
const login = async (page, loginOptions) => {
    try {
        const cursor = (0, ghost_cursor_1.createCursor)(page);
        const { email, password } = loginOptions;
        await typeEmail(page, email || '', cursor);
        await typePassword(page, password || '');
        await signIn(page, cursor);
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = login;
