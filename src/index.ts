/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' })
import OptionTypes from './types'
import { startBrowser } from './startCloseBrowser';
import login from './login';
import connectFunction from './connect/connect';
import options from './options';
import sendMessagesFunction from './sendMessages';

const linkedInParser = async (options: OptionTypes) => {
  const { browserOptions,
          viewPortOptions,
          url,
          loginOptions,
          connect,
          sendMessages,
          connectOptions,
          sendMessagesOptions
        } = options;

  const { page }: OptionTypes["page"] = await startBrowser(browserOptions);
  page.setViewport(viewPortOptions);
  await page.goto(url);
  await login(page, loginOptions);

  connect ? await connectFunction(page, url, connectOptions) : null;
  // TODO: think about separating options into different files
  sendMessages ? await sendMessagesFunction(page, url, sendMessagesOptions) : null;

  // await page.goto(url + search);
  // await page.setViewport({ width: 500, height: 1000 });
  // await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  // await applyToJobs(page)

}

(async () => {
  await linkedInParser(options);
})();

