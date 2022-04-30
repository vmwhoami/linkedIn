import btnCollector from './btnCollector';

import goToNextPage from './goToNextPage';

const makeConnectionsLoop = async (page: any) => {
  while (true) {
    let loopResult = await btnCollector(page);
    
    
    return loopResult ? await goToNextPage(page, loopResult) : null;
  }
}

export default makeConnectionsLoop;