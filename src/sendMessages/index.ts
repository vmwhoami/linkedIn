import OptionTypes from '../types'
import sendMessagesUrlModifier from './UrlModifier'

const sendMessages = async (page: OptionTypes["page"],
url: OptionTypes["url"],
sendMessagesOptions: OptionTypes["sendMessagesOptions"]): Promise<void> => {
  const generateLink: string = sendMessagesUrlModifier(url, sendMessagesOptions, 3);

// TO DO: https://www.youtube.com/watch?v=edu_GJ6tI60 watch this

  await page.goto(generateLink); // Generated Link will change to switch between pages
  const subtitles = await page.waitForFunction(() => {
    let subtitles = document.querySelectorAll('.entity-result__primary-subtitle')
    return [...subtitles].map(subtitle => subtitle.textContent!.replace(/\n/g, '').trim())

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
}



export default sendMessages;