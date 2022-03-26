import OptionTypes from './types'

function modifiedUrl(url: OptionTypes["url"], connectOptions: OptionTypes["connectOptions"]): string {
  const { region, people, beforeKeword, keywords } = connectOptions;

  return `${url}${people}${region}${beforeKeword}${keywords?.split(' ').join('%20')}`
}
const makeConnections = async ( page: OptionTypes["page"],
                                url: OptionTypes["url"], 
                                connectOptions: OptionTypes["connectOptions"] ): Promise<void> => {

  const modified: string = modifiedUrl(url, connectOptions);
  await page.goto(modified);
  await connect(page);
}

export default makeConnections;


// const loopFunc = async (elements_arr: any, page: any) => {
//   while (elements_arr.length > 0) {
//     const selectedElement = elements_arr.shift()
//     await selectedElement.click();
//     // await sendCV(page);
//   }
// }

const connect = async (page: any) => {
  try {
    await page.waitForTimeout(500);
    const elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view'));
    // const elements = await elementsHendles.getProperties();
    // console.log(elements);
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_queryselectorall_class
    
    // const children: any = [];
    // for (const property of elements.values()) {
    //   const element = property.asElement();
    //   if (element)
    //     children.push(element);
    // }
    // console.log(children);
    

    // await loopFunc(children, page)
  } catch (error) {
    console.log(error);
  }

}
