import OptionTypes from '../types'
import sendMessagesUrlModifier from './UrlModifier'

const sendMessages = async (page: OptionTypes["page"],
  url: OptionTypes["url"],
  sendMessagesOptions: OptionTypes["sendMessagesOptions"]): Promise<void> => {
  const generateLink: string = sendMessagesUrlModifier(url, sendMessagesOptions, 3);

  await page.goto(generateLink); // Generated Link will change to switch between pages

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
 

 
}



export default sendMessages;