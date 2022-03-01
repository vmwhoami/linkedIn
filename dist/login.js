"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login = async (page, email = "hello", password = "world") => {
    try {
        await page.waitForSelector('.input__input');
        await page.click('.input__input');
        debugger;
        await page.waitForSelector("#rabota_email");
        await page.click("#rabota_email");
        await page.type("#rabota_email", email);
        await page.type("#password", password);
        await page.waitForSelector('.btn.login-button');
        await page.click('.btn.login-button');
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = login;
