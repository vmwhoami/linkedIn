/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' })
import OptionTypes from './types'
import { startBrowser } from './startCloseBrowser';
import login from './login';
import makeConnections from './makeConnections';
// import applyToJobs from "./applyToJobs";

const locations = {
  'New York': '105080838',
  'San Francisco': '90000084',
  'Chicago': '103112676',
  'Los Angeles': '102448103',
  'Miami': '102394087',
  'Philadelphia': '104937023',
  'Atlanta': '106224388',
}

const keywords = {
  'tech recruiter': 'tech recruiter',
  'it recruiter': 'it recruiter',
  'software recruiter': 'software recruiter',
  'frontend recruiter': 'frontend recruiter',
  'backend recruiter': 'backend recruiter'
}
// https://www.linkedin.com/search/results/people/?geoUrn=%5B%22102394087%22%5D&keywords=tech%20recruiter&origin=FACETED_SEARCH&sid=FeL

const options = {
  url: 'https://www.linkedin.com/',
  viewPortOptions: { width: 1200, height: 900 },
  browserOptions: { headless: false, slowMo: 30, devtools: false },
  connect: true,
  loginOptions: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
  },
  connectOptions: {
    people: 'search/results/people/?geoUrn=%5B%',
    region: locations['New York'],
    beforeKeword: '%22%5D&keywords=',
    keywords: `${keywords['tech recruiter']}`,
    Headers: '%20&origin=GLOBAL_SEARCH_HEADER'
  }
};

const linkedInParser = async (options: OptionTypes) => {
  const {
    browserOptions,
    viewPortOptions,
    url,
    loginOptions,
    connect,
    connectOptions
  } = options;

  const { page }: OptionTypes["page"] = await startBrowser(browserOptions);
  page.setViewport(viewPortOptions);
  await page.goto(url);
  await login(page, loginOptions);

  connect ? await makeConnections(page, url,connectOptions) : null;

  // await page.goto(url + search);
  // await page.setViewport({ width: 500, height: 1000 });
  // await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  // await applyToJobs(page)

}

(async () => {
  await linkedInParser(options);
})();

