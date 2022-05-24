import { createCursor } from "ghost-cursor";

const connecterMethod = async (elements_arr: any, page: any) => {
  const cursor = createCursor(page);

  while (elements_arr.length > 0) {
    const selectedElement = elements_arr.shift();
    await selectedElement.click({ clickCount: 2 });
    
    if (await page.$('.artdeco-button.artdeco-button--2.artdeco-button--primary.artdeco-button--disabled.ember-view.ml1') !== null) {
      await page.waitForSelector('.artdeco-modal__dismiss.artdeco-button');
      await cursor.click('.artdeco-modal__dismiss.artdeco-button');
    } else {
      await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
      await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    }
  }
}

export default connecterMethod;


