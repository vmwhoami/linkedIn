
const link = 'https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=tech%20recruiter&origin=FACETED_SEARCH&sid=b6t';








const makeConnections = async(page:any):Promise<void>=>{
  await page.goto(link);


}

export default makeConnections;


// https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D&keywords=it%20recruiter&sid=rEa