const btnCollector = async (page: any) => {
  await page.waitForSelector('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
  const children: any = [];
  const elementsHendles = await page.evaluateHandle(async () => {
    const spans = await document.querySelectorAll('.entity-result__item .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view:not(.artdeco-button--muted)')
    return [...spans].filter(span => span.textContent!.replace(/\n/g, '').trim() === "Connect")
  });

  const elements: any = await elementsHendles.getProperties();

  for (const property of elements.values()) {
    const element = property.asElement();
    element ? children.push(element) : null;
  }
  return children
}


export default btnCollector;