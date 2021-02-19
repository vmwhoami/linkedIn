const selectCountry = async (page, country) => {
  await page.waitForSelector("[aria-label='People']");
  await page.click("[aria-label='People']");
  await page.waitForSelector("[aria-label='Locations filter. Clicking this button displays all Locations filter options.']");
  await page.click("[aria-label='Locations filter. Clicking this button displays all Locations filter options.']");
  await page.waitForSelector("[aria-label='Add a location']");
  await page.click("[aria-label='Add a location']");
  await page.keyboard.type(country, { delay: 500 });
  await page.keyboard.press('ArrowDown', { delay: 100 });
  await page.click(".peek-carousel__slides li:nth-child(4) [data-control-name='filter_show_results']")
  // setTimeout(async () => {

  //   setTimeout(async () => {

  //     await page.keyboard.press('Enter');
  //     await page.click(".peek-carousel__slides li:nth-child(4) [data-control-name='filter_show_results']")
  //   })


  // }, 6000);

  // await page.keyboard.press('ArrowLeft');
  // await page.keyboard.press('ArrowLeft');
  // await page.keyboard.press('ArrowDown');

  await page.click(".peek-carousel__slides li:nth-child(4) [data-control-name='filter_show_results']")
}

export default selectCountry;
