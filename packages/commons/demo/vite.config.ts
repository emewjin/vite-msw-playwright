import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import dts from 'vite-plugin-dts';

const canRunningVisualizer = process.env.VITE_VISUALIZER === 'true';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    dts(),
    macrosPlugin(),
    canRunningVisualizer ? visualizer() : null,
  ],
  build: {
    sourcemap: 'inline',
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'demo',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        '@mantine/core',
        '@mantine/hooks',
        '@tanstack/react-query',
        '@tanstack/react-query-devtools',
        /@emotion/,
        'lodash-es',
        'axios',
        'dayjs',
        'react',
        'react-dom',
        '@faker-js/faker',
        'msw',
      ],
    },
  },
});
