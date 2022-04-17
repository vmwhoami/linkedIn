import OptionTypes from '../types'
import urlModifier from './urlModifier';
import makeConnectionsLoop from './makeConnectionsLoop';

const connect = async (page: OptionTypes["page"],
  url: OptionTypes["url"],
  connectOptions: OptionTypes["connectOptions"]): Promise<void> => {
  const modified: string = urlModifier(url, connectOptions);
 
  
  await page.goto(modified);
  await makeConnectionsLoop(page);
}


export default connect;