import pass from '../sensitive';
const login = async(page) = {
  let password = pass();
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('https://linkedin.com');
  await page.waitForSelector("#session_key");
  await page.focus("#session_key");
  await page.keyboard.type("vmwhoami@gmail.com");
  await page.focus("#session_password");
  await page.keyboard.type(password);
}

export default login;