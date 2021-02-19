const login = async (page, email, password) => {
  await page.waitForSelector("#session_key");
  await page.type("#session_key", email);
  await page.type("#session_password", password);
  await page.waitForSelector(".sign-in-form__submit-button")
  await page.click(".sign-in-form__submit-button")
}


export default login;