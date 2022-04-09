const goToNextPage = async (page: any) => {
  await page.evaluate(() => { window.scrollBy(0, window.innerHeight) });
  await page.waitForSelector('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right')
  await page.click('.artdeco-pagination__button.artdeco-pagination__button--next.artdeco-button.artdeco-button--muted.artdeco-button--icon-right')
}

export default goToNextPage;