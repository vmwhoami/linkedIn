"use strict";
const puppeteer = require('puppeteer');
// more to read
// https://stackoverflow.com/questions/51782418/promise-async-code-dont-work-puppeteer
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const listaFirme = `https://www.listafirme.ro/`;
    const page = await browser.newPage();
    await page.goto(listaFirme, { waitUntil: 'networkidle2' });
    await page.type('input[name=searchfor]', '35629144');
    await Promise.all([
        page.click('.input-group-btn .btn'),
        page.waitForNavigation(),
    ]).catch(e => console.log(e));
    const [newPage] = await Promise.all([
        getNewPage(),
        page.click('.content table tbody tr:nth-child(even) .clickable-row a'),
    ]).catch(e => console.log(e));
    await newPage.waitForSelector('input[name=searchfor]');
    await newPage.type('input[name=searchfor]', '35629144');
    await Promise.all([
        newPage.click('.input-group-btn .btn'),
        newPage.waitForNavigation(),
    ]).catch(e => console.log(e));
    console.log('Done');
    await browser.close();
    function getNewPage() {
        return new Promise((resolve) => {
            browser.on('targetcreated', checkNewTarget);
            function checkNewTarget(target) {
                if (target.type() === 'page') {
                    browser.off('targetcreated', checkNewTarget);
                    resolve(target.page());
                }
            }
        });
    }
})();
