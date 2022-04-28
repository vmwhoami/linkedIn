import { createCursor } from "ghost-cursor";

const connecterMethod = async (elements_arr: any, page: any) => {
  const cursor = createCursor(page);

 let nodeListToArray = Array.from(elements_arr) 
  while (nodeListToArray.length > 0) {
    const selectedElement = nodeListToArray.shift()

    await selectedElement.click();
    await page.waitForSelector('.artdeco-modal__actionbar.ember-view.text-align-right .ml1');

    const checkObject = await page.waitForFunction(() => {
     let modalSmth = document.querySelector(".artdeco-modal__content")!
     if(modalSmth.querySelector("label")!= null){
       //send a method to change the connect button text
      }

    });

    if (checkObject) {
      // think on changing the connect button it might be the case that it is reinserting the button into the array
      // selectedElement.remove()

      console.log("this is !!! ", checkObject);
      
      // console.log(elements_arr);
      
    } else {
      await cursor.click('.artdeco-modal__actionbar.ember-view.text-align-right .ml1')
    }

  }
}

export default connecterMethod;


