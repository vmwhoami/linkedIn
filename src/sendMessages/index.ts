import OptionTypes from '../types'
import sendMessagesUrlModifier from './UrlModifier'

const sendMessages = async (page: OptionTypes["page"],
url: OptionTypes["url"],
sendMessagesOptions: OptionTypes["sendMessagesOptions"]): Promise<void> => {
  const generateLink: string = sendMessagesUrlModifier(url, sendMessagesOptions, 2);

  await page.goto(generateLink);
  //This is the url to the page where you can send messages

  // search/results/people/?network=%5B"F"%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&page=1

  // .entity-result__secondary-subtitle text that contains location
}


export default sendMessages;