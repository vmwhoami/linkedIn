import OptionTypes from '../types'
import sendMessagesUrlModifier from './UrlModifier'

const sendMessages = async (page: OptionTypes["page"],
  url: OptionTypes["url"],
  sendMessagesOptions: OptionTypes["sendMessagesOptions"]): Promise<void> => {
  const generateLink: string = sendMessagesUrlModifier(url, sendMessagesOptions, 3);

  await page.goto(generateLink); // Generated Link will change to switch between pages

  const subtitles = await page.evaluate(async () => {
    let resultRecruiters: any = [];
    let result__items = await document.querySelectorAll('.entity-result__item')

    result__items.forEach(async element => {
      const str: any = element
        .querySelector('.entity-result__primary-subtitle')?.textContent?.replace(/\n/g, '')
        .trim().toLowerCase();
      const result = /^(?=.*it recruiter)|^(?=.*technical recruiter)/.test(str);
      result ? resultRecruiters.push(element) : null;
    })
    // Look in what you need I'm guessing it's the message button
    console.log(resultRecruiters);
    
    // const buttons = await resultRecruiters.querySelectorAll('.artdeco-button.artdeco-button--2 artdeco-button--secondary.ember-view')
    // console.log(buttons);
    
    // return [...buttons]
  });

  // for (let styleNumber of subtitles) {
  //   try {
  //     console.log(await (await styleNumber.getProperty('innerText')).jsonValue());
  //   }
  //   catch (e) {
  //     console.log(`Could not get the style number:`, e.message);
  //   }
  // }

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
}



export default sendMessages;