import OptionTypes from './types'

function modifiedUrl(url: OptionTypes["url"], connectOptions: OptionTypes["connectOptions"]): string {
  const { region } = connectOptions;

  return `${url}${region}`
}
const makeConnections = async (
  page: OptionTypes["page"],
  url: OptionTypes["url"],
  connectOptions: OptionTypes["connectOptions"]
): Promise<void> => {

  const modified: string = modifiedUrl(url, connectOptions);
  await page.goto(modified);


}


export default makeConnections;


// https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=it%20recruiter&sid=rEa