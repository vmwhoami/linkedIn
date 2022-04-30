import { createCursor } from "ghost-cursor";

const goToNextPage = async (page: any, loopResult: Boolean) => {  
  const cursor = createCursor(page)
  await page.evaluate(() => { window.scrollBy(0, window.innerHeight) });
  await page.waitForSelector('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right')
  if(loopResult) {
  await cursor.click('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right')
  }
  await cursor.click('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right')
}

export default goToNextPage;