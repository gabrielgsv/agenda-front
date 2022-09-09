/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ADDRESS: string;
  readonly VITE_HCAPTCHA_SITE_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
