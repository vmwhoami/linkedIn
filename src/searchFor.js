const searchFor = async (page, input) => {
  await page.waitForSelector(".search-global-typeahead__input");
  await page.click(".search-global-typeahead__input");
  await page.keyboard.type(input);
  await page.keyboard.press("Enter");
}
export default searchFor;