/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' })
import OptionTypes from './types'
import { startBrowser } from './startCloseBrowser';
import login from './login';
import connectFunction from './connect/connect';
import sendMessagesfrom './sendMessages/sendMessages';
import options from './options';


const linkedInParser = async (options: OptionTypes) => {
  const { browserOptions,
          viewPortOptions,
          url,
          loginOptions,
          connect,
          connectOptions,
          sendMessagesOptions } = options;

  const { page }: OptionTypes["page"] = await startBrowser(browserOptions);
  page.setViewport(viewPortOptions);
  await page.goto(url);
  await login(page, loginOptions);

  connect ? await connectFunction(page, url, connectOptions) : null;

  sendMessages ? await sendMessages(page, url, sendMessagesOptions) : null;

  // await page.goto(url + search);
  // await page.setViewport({ width: 500, height: 1000 });
  // await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  // await applyToJobs(page)

}

(async () => {
  await linkedInParser(options);
})();

