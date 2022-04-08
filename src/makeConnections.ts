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

const connecterMethod = async (elements_arr: any, page: any) => {
  while (elements_arr.length > 0) {
    const selectedElement = elements_arr.shift()
    await selectedElement.click();
    await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    await page.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1') 
  }
  await goToNextPage(page);
}


const goToNextPage = async (page: any) => {
  await page.evaluate(() => { window.scrollBy(0, window.innerHeight) });
  await page.waitForSelector('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right')
  await page.click('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right')
 
}

const connect = async (page: any) => {
  try {
    // Starts here collects all btns
    const elementsHendles = await page.evaluateHandle(() => {
      const spans = document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)')
      return [...spans].filter(span => span.textContent!.replace(/\n/g, '').trim() === "Connect")
    });

    const elements: any = await elementsHendles.getProperties();

    const children: any = [];
    for (const property of elements.values()) {
      const element = property.asElement();
      element ? children.push(element) : null;
    }
    await connecterMethod(children, page)

  } catch (error) {
    console.log(error);
  }
}


const btnCollector = async (page: any) => {
  try {
    const elementsHendles = await page.evaluateHandle(() => {
      const spans = document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)')
      return [...spans].filter(span => span.textContent!.replace(/\n/g, '').trim() === "Connect")
    });

    const elements: any = await elementsHendles.getProperties();

    const children: any = [];
    for (const property of elements.values()) {
      const element = property.asElement();
      element ? children.push(element) : null;
    }
    await connecterMethod(children, page)

  } catch (error) {
    console.log(error);
  }
}