import { createCursor } from "ghost-cursor";

const btnCollector = async (page: any) => {
  await page.waitForSelector('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
  const children: any = [];
//   page.evaluate will run the code once and return data.
// page.waitForFunction will run the code repeatedly until the code returns truthy values.
  const elementsHendles = await page.waitForFunction(async () => {
    const spans = await document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)')

    return [...spans].filter(span => span.textContent!.replace(/\n/g, '').trim() === "Connect")
  });

  const elements: any = await elementsHendles.getProperties();

  for (const property of elements.values()) {
    const element = property.asElement();
    element ? children.push(element) : null;
  }

  await connecterMethod(children, page);
}

const connecterMethod = async (elements_arr: any, page: any) => {
  const cursor = createCursor(page);

  while (elements_arr.length > 0) {
    const selectedElement = elements_arr.shift();
    await page.waitForTimeout(200);
    await selectedElement.click({ clickCount: 2 });

    if (await page.$('.artdeco-button.artdeco-button--2.artdeco-button--primary.artdeco-button--disabled.ember-view.ml1') !== null) {
      await page.waitForSelector('.artdeco-modal__dismiss.artdeco-button');
      await cursor.click('.artdeco-modal__dismiss.artdeco-button');
    } else {
      await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
      await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');
    }
    //artdeco-button artdeco-button--2 artdeco-button--primary artdeco-button--disabled ember-view ml1
    //check if there are no elements

    // elements_arr.length === 0 ? await page.evaluate(async() => {
    //     const spans = await document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)')

    // return [...spans].filter(span => span.textContent!.replace(/\n/g, '').trim() === "Connect") 
    // }) : null;
  }
}
export default btnCollector;