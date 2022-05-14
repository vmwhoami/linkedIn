import OptionTypes from '../types'
import sendMessagesUrlModifier from './UrlModifier'
import { createCursor } from "ghost-cursor";

const collectMessageBtn = async (page: OptionTypes["page"],
  url: OptionTypes["url"],
  sendMessagesOptions: OptionTypes["sendMessagesOptions"]): Promise<void> => {
  const generateLink: string = sendMessagesUrlModifier(url, sendMessagesOptions, 3);

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


const sendMessages = async (elements_arr: any, page: any) => {
  const cursor = createCursor(page);
  // Learn this
// https://www.google.com/search?q=js+while+loop+with+delay+await&oq=js+while+loop+with+delay+awa&aqs=chrome.1.69i57j33i160l2j33i21.7783j0j7&sourceid=chrome&ie=UTF-8
//https://www.geeksforgeeks.org/how-to-delay-a-loop-in-javascript-using-async-await-with-promise/
  while (elements_arr.length > 0) {
    const selectedElement = elements_arr.shift();
    // await page.waitForTimeout(200);
    await selectedElement.click();
    // msg-form__contenteditable t-14 t-black--light t-normal flex-grow-1 full-height notranslate
      
  }
}


export default collectMessageBtn;