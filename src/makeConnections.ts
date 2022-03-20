import OptionTypes from './types'

function modifiedUrl(url: OptionTypes["url"], connectOptions: OptionTypes["connectOptions"]): string {
  const { region,people,beforeKeword,keywords} = connectOptions;
 
  return `${url}${people}"${region}${beforeKeword}${keywords?.split(' ').join('%20')}`
}
const makeConnections = async (
  page: OptionTypes["page"],
  url: OptionTypes["url"],
  connectOptions: OptionTypes["connectOptions"]
): Promise<void> => {

  const modified: string = modifiedUrl(url, connectOptions);
  
  await page.goto(modified);


}
// https://www.linkedin.com/search/results/people/?geoUrn=%5B%%22105080838%22%22%5D&keywords=tech%20recruiter

// WORKING_LINK https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=it%20recruiter
export default makeConnections;

// https://www.linkedin.com/search/results/people/?geoUrn=%5B