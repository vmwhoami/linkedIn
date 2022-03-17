const login = async (page: any, email = "hello", password = "world") => {
  try {
    await page.waitForSelector('.input #session_key');
    await page.click('.input #session_key');
    await page.keyboard.type(email);
    await page.waitForSelector('.input #session_password');

    await page.click('.input #session_password');
    await page.keyboard.type(password);

    await page.waitForSelector('.sign-in-form__submit-button');
    await page.click('.sign-in-form__submit-button');
  } catch (error) {
    console.log(error);
  }


}

export default login;