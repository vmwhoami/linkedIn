// import { createCursor } from "ghost-cursor";
import connecterMethod from "./connecterMethod";

const btnCollector = async (page: any) => {
  await page.waitForSelector('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
  const children: any = [];
  // page.evaluate will run the code once and return data.
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

export default btnCollector;