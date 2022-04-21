import OptionTypes from '../types'


const sendMessagesUrlModifier = async (page: OptionTypes["page"],
url: OptionTypes["url"],
sendMessagesOptions: OptionTypes["sendMessagesOptions"]): Promise<void> => {
  const modified: string = sendMessagesUrlModifier(url, sendMessagesOptions);

  await page.goto(modified);
  //This is the url to the page where you can send messages

  // search/results/people/?network=%5B"F"%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&page=1&sid=0l1
}


export default sendMessagesUrlModifier;