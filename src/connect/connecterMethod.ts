const connecterMethod = async (elements_arr: any, page: any) => {
  while (elements_arr.length > 0) {
    const selectedElement = elements_arr.shift()
    await selectedElement.click();
    await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    await page.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1')
  }
}

export default connecterMethod;