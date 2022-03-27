import OptionTypes from './types'
import urlModifier from './connect/connectionsUrl';

const makeConnections = async (page: OptionTypes["page"],
  url: OptionTypes["url"],
  connectOptions: OptionTypes["connectOptions"]): Promise<void> => {
  const modified: string = urlModifier(url, connectOptions);
  await page.goto(modified);
  await connect(page);
}

export default makeConnections;


const loopFunc = async (elements_arr: any, page: any) => {
  while (elements_arr.length > 0) {
    const selectedElement = elements_arr.shift()
    await selectedElement.click();


    // waits for the connect button to be visible
    const selector = await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    console.log(selector);
    console.log(!selector);
    
    
    if (!selector) continue;
    await page.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1')  
 
   // Place the press connect button here
  }
}
// await for selector
//document.querySelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1')

const goToNextPage = async (page: any) => {
  const pages: any = await page.$$('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right artdeco-button--1.artdeco-button--tertiary.ember-view');

}

const connect = async (page: any) => {
  try {
    await page.waitForTimeout(500);
    const elementsHendles = await page.evaluateHandle(() => {
      return document
        .querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view')
    });

    const elements: any = await elementsHendles.getProperties();

    const children: any = [];
    for (const property of elements.values()) {
      const element = property.asElement();
      element ? children.push(element) : null;
    }
    await loopFunc(children, page)

  } catch (error) {
    console.log(error);
  }
}
