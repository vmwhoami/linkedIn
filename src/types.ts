
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
  sendMessages: boolean | undefined,

  loginOptions: {
    email: string | undefined,
    password: string | undefined,
  },
  
  connectOptions: {
    region: string | undefined,
  },

  sendMessagesOptions: {
    region: string | undefined,
    cannedSearch: string | undefined,
  }
}

export default OptionTypes;