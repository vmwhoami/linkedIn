import OptionTypes from '../types'


const urlModifier = (url: OptionTypes["url"],
  sendMessagesOptions: OptionTypes["sendMessagesOptions"],
  pageNumber: number): string => {

  const { cannedSearch } = sendMessagesOptions;

  return `${url}${cannedSearch}${pageNumber}`;
}

export default urlModifier;