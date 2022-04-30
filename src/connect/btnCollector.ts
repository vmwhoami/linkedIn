import { createCursor } from "ghost-cursor";

const btnCollector = async (page: any) => {
  await page.waitForSelector('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
  const children: any = [];
  const elementsHendles = await page.waitForFunction(async () => {
    const spans = await document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)')

    return [...spans].filter(span => span.textContent!.replace(/\n/g, '').trim() === "Connect")
  });
 
  const elements: any = await elementsHendles.getProperties();
 
  for (const property of elements.values()) {
    const element = property.asElement();    
    element ? children.push(element) : null;
  }
  
 return await connecterMethod(children, page);
}

const connecterMethod = async (elements_arr: any, page: any) => {
  const cursor = createCursor(page);

  while (elements_arr.length > 0) {
    const selectedElement = elements_arr.shift();
    await selectedElement.click();
    await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    return elements_arr.length === 0     
  }
}
export default btnCollector;