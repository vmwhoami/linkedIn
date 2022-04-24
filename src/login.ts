import OptionTypes from './types'
import { createCursor } from "ghost-cursor";

const typeEmail = async (page: OptionTypes["page"], email: string, cursor: any) => {
  await page.waitForSelector('.input #session_key');
  await cursor.click('.input #session_key');
  await page.keyboard.type(email);
}

const typePassword = async (page: OptionTypes["page"], password: string, cursor: any) => {
  await page.waitForSelector('.input #session_password');
  await cursor.click('.input #session_password');
  await page.keyboard.type(password)
}

const signIn = async (page: OptionTypes["page"],cursor: any) => {
  await page.waitForSelector('.sign-in-form__submit-button');
  await cursor.click('.sign-in-form__submit-button');
}

const login = async (page:OptionTypes["page"], loginOptions:OptionTypes["loginOptions"]): Promise<void> => {
  try {
   const cursor = createCursor(page)

    const { email, password } = loginOptions;
    await typeEmail(page, email || '', cursor);
    await typePassword(page,password || '',cursor);
    await signIn(page,cursor);
  } catch (error) {
    console.log(error);
  }
}

export default login;