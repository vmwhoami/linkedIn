/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({path: '.env'})
import { startBrowser } from './startCloseBrowser';
import login from './login';
import applyToJobs from "./applyToJobs";
import makeConnections from './makeConnections';

const [email, password] = [process.env.EMAIL, process.env.PASSWORD];
const url = 'https://www.linkedin.com/';
const connect =true;
const searchOptions = {
  geoUrn: '["103644278"]',
  keywords: 'it recruiter',
  origin: 'FACETED_SEARCH',
  sid: 'rEa'
};

const linkedInParser = async (url: string, search:string, connect: boolean) => {
  const { page } = await startBrowser();
  page.setViewport({ width: 1200, height: 900 });
  await page.goto(url);
  await login(page, email, password);
  
  connect ? await makeConnections(page, searchOptions) : null;
 
  // await page.goto(url + search);
  // await page.setViewport({ width: 500, height: 1000 });
  // await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  // await applyToJobs(page)

}

 
const searchCat = 'jobs-moldova-developer';

(async () => {
  await linkedInParser(url,searchCat,connect);
})();

`https://www.linkedin.com/jobs/search/?f_AL=true&f_E=2%2C4&f_JT=F%2CC&geoId=91000000&keywords=ruby%20on%20rails&location=Canada`