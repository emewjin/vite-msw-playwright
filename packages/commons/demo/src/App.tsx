import { useQuery } from '@tanstack/react-query';
import { isNil } from 'lodash-es';
import { ENDPOINT } from './mocks/handlers/apple';
import fetcher from './utils/Fetcher';

function App() {
  const { data, isLoading } = useQuery(['apple'], async () => {
    const response = await fetcher.get(ENDPOINT);

    return response;
  });

  if (isNil(data)) {
    return <div id="App">흠</div>;
  }

  if (isLoading) {
    return <div id="App">loading...</div>;
  }

  return <div id="App">demo {data?.data?.isRed ? 'red' : 'green'}</div>;
}

export default App;
