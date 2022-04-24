import OptionTypes from '../types'

//TO DO: See if you can make this function more generic by using the urlModifier function
const urlModifier = (url: OptionTypes["url"],
  sendMessagesOptions: OptionTypes["sendMessagesOptions"],
  pageNumber: number): string => {

  const { cannedSearch } = sendMessagesOptions;

  return `${url}${cannedSearch}${pageNumber}`;
}

export default urlModifier;