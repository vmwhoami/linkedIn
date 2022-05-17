import OptionTypes from '../types'
import sendMessagesUrlModifier from './UrlModifier'
import { createCursor } from "ghost-cursor";

const collectMessageBtn = async (page: OptionTypes["page"],
  url: OptionTypes["url"],
  sendMessagesOptions: OptionTypes["sendMessagesOptions"]): Promise<void> => {
  const generateLink: string = sendMessagesUrlModifier(url, sendMessagesOptions, 5);

  await page.goto(generateLink); // Generated Link will change to switch between pages update this to dynamic

  const subtitles = await page.evaluateHandle(async () => {
    let resultRecruiters: any = [];
    let result__items = await document.querySelectorAll('.entity-result__item')

    result__items.forEach(async element => {
      const str: any = element
        .querySelector('.entity-result__primary-subtitle')?.textContent?.replace(/\n/g, '')
        .trim().toLowerCase();
      const result = /^(?=.*it recruiter)|^(?=.*technical recruiter)/.test(str);
      result ? resultRecruiters.push(element) : null;
    })

    const buttons = await resultRecruiters.map(el => el.querySelector('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view'))

    console.log(buttons);
    
    return [...buttons]
  });
  const children: any = [];
  const elements: any = await subtitles.getProperties()

  for (const property of elements.values()) {
    const element = property.asElement();
    element ? children.push(element) : null;
  }


  await sendMessages(children, page);
 
}
// Promise.all

const sendMessages = async (elements_arr: any, page: any) => {
  const cursor = createCursor(page);
  // Learn this

  //https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/
 // https://stackoverflow.com/questions/64499035/puppeteer-second-promise-all-times-out-after-trying-to-click-td-with-class-click
 
// asyncForEach(elements_arr, async (element: any, index: number, array: any) => {
//   await cursor.click(element);
//   await page.waitForSelector('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
//   await cursor.click('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
//   await page.keyboard.type("Hi there, I am interested in your job posting.");
//   await page.keyboard.press('Enter');
 
//   await page.waitForSelector('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')
//   await cursor.click('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')
// })
 
  while (elements_arr.length > 0) {
    const selectedElement = elements_arr.shift();
    await selectedElement.click();
    await page.waitForSelector('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
    await cursor.click('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
    await page.keyboard.type("Hi");
    await cursor.click('.msg-form__send-button.artdeco-button.artdeco-button--1')
    await page.waitForSelector('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')
    await cursor.click('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')
  }
}


const asyncForEach = async (array: any, callback: any) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export default collectMessageBtn;