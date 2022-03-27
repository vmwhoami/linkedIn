import OptionTypes from './types'
import urlModifier  from './connect/connectionsUrl';

const makeConnections = async ( page: OptionTypes["page"],
                                url: OptionTypes["url"], 
                                connectOptions: OptionTypes["connectOptions"] ): Promise<void> => {

  const modified: string = urlModifier(url, connectOptions);
  await page.goto(modified);
  await connect(page);
}

export default makeConnections;


const loopFunc = async (elements_arr: any, page: any) => {
  while (elements_arr.length > 0) {
    const selectedElement = elements_arr.shift()
    await selectedElement.click();
    
  }
}

const goThroughPages = async (page: any) => {
  const pages: any = await page.$$('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right artdeco-button--1.artdeco-button--tertiary.ember-view');
  const pages_arr: any = [];
  for (let i = 0; i < pages.length; i++) {
    pages_arr.push(pages[i]);
  }
  await loopFunc(pages_arr, page);
}

//  NEXT PAGE BUTTON 
// .artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right artdeco-button--1.artdeco-button--tertiary.ember-view
// We need a loop throught all the pages
// We a loop throught all the contacts
// We need to click on the next page when we reach the end of the page

const connect = async (page: any) => {
  try {
    await page.waitForTimeout(500);
    const elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view'));

    const elements:any = await elementsHendles.getProperties();
    
    const children: any = [];
    for (const property of elements.values()) {
      const element = property.asElement();
      if (element)
        children.push(element);
    }
    console.log(children);
    

    await loopFunc(children, page)
  } catch (error) {
    console.log(error);
  }

}
