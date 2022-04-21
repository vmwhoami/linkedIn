import OptionTypes from '../types'


const urlModifier = (url: OptionTypes["url"],
  sendMessagesOptions: OptionTypes["sendMessagesOptions"]): string => {
  // const { region } = sendMessagesOptions;

  return `${url}search/results/people/?network=%5B"F"%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&page=1&sid=0l1`
}

export default urlModifier;