const login = async (page: any, email = "hello", password = "world") => {
  try {

    await page.waitForSelector('.input__input');
    await page.click('.input__input');
   
    await page.waitForSelector("#rabota_email");
    await page.click("#rabota_email")
    await page.type("#rabota_email", email);
    await page.type("#password", password);
    await page.waitForSelector('.btn.login-button');
    await page.click('.btn.login-button');
  } catch (error) {
    console.log(error);
  }


}

export default login;