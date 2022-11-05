import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { worker } from './mocks/browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

void worker.start();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <ReactQueryDevtools />
  </React.StrictMode>,
  document.getElementById('main')
);
