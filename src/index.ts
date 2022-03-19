/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' })
import OptionTypes from './types'
import { startBrowser } from './startCloseBrowser';
import login from './login';
// import makeConnections from './makeConnections';
// import applyToJobs from "./applyToJobs";


const options = {
  url: 'https://www.linkedin.com/',
  viewPortOptions: { width: 1200, height: 900 },
  browserOptions: { headless: false, slowMo: 30, devtools: false },
  connect: true,
  loginOptions: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
  },
  connectOptions: {}
};

const linkedInParser = async (options: OptionTypes) => {
  const { browserOptions, viewPortOptions,url,loginOptions} = options;
  const { page }:OptionTypes["page"] = await startBrowser(browserOptions);
  page.setViewport(viewPortOptions);
  await page.goto(url);
  await login(page, loginOptions);

  // connect ? await makeConnections(page, connectOptions) : null;

  // await page.goto(url + search);
  // await page.setViewport({ width: 500, height: 1000 });
  // await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  // await applyToJobs(page)

}

(async () => {
  await linkedInParser(options);
})();

