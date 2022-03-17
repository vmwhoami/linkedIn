/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({path: '.env'})
import { startBrowser } from './startCloseBrowser';
import login from './login';
import applyToJobs from "./applyToJobs";
import risetoTop from './rizeTop';

const gotToAndDo = async (url: string,search:string,rizeTop:boolean) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  const { page } = await startBrowser();
  page.setViewport({ width: 1000, height: 800 });
  await page.goto(url);
  await login(page, email, password);
  if(rizeTop){ 
  await risetoTop(page);
  }
  await page.goto(url + search);
  await page.setViewport({ width: 500, height: 1000 });
  await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  await applyToJobs(page)

}


const url = "https://www.linkedin.com";
const searchCat = 'jobs-moldova-developer';
const rizeTop =true;

(async () => {
  await gotToAndDo(url,searchCat,rizeTop);
})();

`https://www.linkedin.com/jobs/search/?f_AL=true&f_E=2%2C4&f_JT=F%2CC&geoId=91000000&keywords=ruby%20on%20rails&location=Canada`