/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USE_MSW: string;
  readonly NODE_ENV: string;
  readonly VITE_API_URL: string;
  readonly VITE_CDN_URL: string;
  readonly VITE_APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
