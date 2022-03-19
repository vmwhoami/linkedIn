 
const typeEmail = async (page: any, email: any) => {
  await page.waitForSelector('.input #session_key');
  await page.click('.input #session_key');
  await page.keyboard.type(email);
}

const typePassword = async (page: any, password: string) => {
  await page.waitForSelector('.input #session_password');
  await page.click('.input #session_password');
  await page.keyboard.type(password)
}

const signIn = async (page: any) => {
  await page.waitForSelector('.sign-in-form__submit-button');
  await page.click('.sign-in-form__submit-button');
}

const login = async (page, loginOptions): Promise<void> => {
  try {
    await typeEmail(page, loginOptions.email);
    await typePassword(page,loginOptions.password);
    await signIn(page);
  } catch (error) {
    console.log(error);
  }
}

export default login;