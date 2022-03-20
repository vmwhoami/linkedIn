
interface OptionTypes {
  page: any,
  url: string,
  viewPortOptions: {
    width: number,
    height: number,
  },
  browserOptions: {
    headless: boolean | undefined,
    slowMo: number | undefined,
    devtools: boolean | undefined
  },
  connect: boolean | undefined,

  loginOptions: {
    email: string | undefined,
    password: string | undefined,
  },
  
  connectOptions: {
    region: string | undefined,
 
  }
}

export default OptionTypes;