import OptionTypes from './types'

const modifiedUrl = (url: OptionTypes["url"], connectOptions: OptionTypes["connectOptions"]) => {
  const {  } = connectOptions;
    
  return `${url}${}`  
 }
const makeConnections = async (
  page: OptionTypes["page"],
  url: OptionTypes["url"],
  connectOptions: OptionTypes["connectOptions"]
): Promise<void> => {
  const modifiedUrl = modifiedUrl(url, connectOptions);
  await page.goto(modifiedUrl);


}


export default makeConnections;

// const link = 'https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=tech%20recruiter&origin=FACETED_SEARCH&sid=b6t';

// https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=it%20recruiter&sid=rEa