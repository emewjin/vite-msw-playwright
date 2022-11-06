import { useQuery } from '@tanstack/react-query';
import { isNil } from 'lodash-es';
import { ENDPOINT } from './mocks/handlers/apple';
import fetcher from './utils/Fetcher';

type Apple = {
  isRed: boolean;
};

function App() {
  const { data } = useQuery<Apple>(['apple'], async () =>
    fetcher.get<{ isRed: boolean }>(ENDPOINT)
  );

  if (isNil(data)) {
    return <div id="App">흠</div>;
  }

  return <div id="App">apple color: {data.isRed ? 'red' : 'green'}</div>;
}

export default App;
