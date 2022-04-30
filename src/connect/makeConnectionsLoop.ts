import btnCollector from './btnCollector';

import goToNextPage from './goToNextPage';

const makeConnectionsLoop = async (page: any) => {
  while (true) {
    await btnCollector(page);
    await goToNextPage(page)
  }
}

export default makeConnectionsLoop;