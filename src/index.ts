/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({path: '.env'})
import { startBrowser } from './startCloseBrowser';
import login from './login';
// import applyToJobs from "./applyToJobs";
// import makeConnections from './makeConnections';

// const searchOptions = {
//   geoUrn: '["103644278"]',
//   keywords: 'it recruiter',
//   origin: 'FACETED_SEARCH'
// };
type optionTypes = {
  url:string,
  viewPortOptions: {
    width: number,
    height: number,
  },
  browserOptions: {
    headless: boolean | undefined,
    slowMo: number | undefined,
    devtools: boolean | undefined
  },
  connect:boolean | undefined,
  email:string | undefined,
  password:string | undefined,
}
const options = {
  url: 'https://www.linkedin.com/',
  viewPortOptions: { width: 1200, height: 900 },
  browserOptions: { headless: false, slowMo: 30, devtools: false},
  connect:true,
  email:process.env.EMAIL,
  password:process.env.PASSWORD
};

const linkedInParser = async (options: optionTypes) => {
  const { page } = await startBrowser();
  const{viewPortOptions, email, password ,url} = options;
  page.setViewport(viewPortOptions);
  await page.goto(url);
  await login(page, email, password);
  
  // connect ? await makeConnections(page, searchOptions) : null;
 
  // await page.goto(url + search);
  // await page.setViewport({ width: 500, height: 1000 });
  // await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  // await applyToJobs(page)

}

(async () => {
  // await linkedInParser(options);
  await linkedInParser(options);
})();

