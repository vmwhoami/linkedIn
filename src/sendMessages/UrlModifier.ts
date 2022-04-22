import OptionTypes from '../types'


const urlModifier = (url: OptionTypes["url"],
  sendMessagesOptions: OptionTypes["sendMessagesOptions"]): string => {
  const { cannedSearch } = sendMessagesOptions;

  return `${url}${cannedSearch}1`;
}

export default urlModifier;