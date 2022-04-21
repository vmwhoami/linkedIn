import OptionTypes from '../types'


const urlModifier = (url: OptionTypes["url"],
  sendMessagesOptions: OptionTypes["sendMessagesOptions"]): string => {
  const { region } = sendMessagesOptions;

  return `${url}${region}`
}

export default urlModifier;