import btnCollector from './btnCollector';
import connecterMethod from './connecterMethod';
import goToNextPage from './goToNextPage';

const makeConnectionsLoop = async (page: any) => {
  while (true) {
    const children = await btnCollector(page);
    await connecterMethod(children, page);
    await goToNextPage(page);
  }
}

export default makeConnectionsLoop;