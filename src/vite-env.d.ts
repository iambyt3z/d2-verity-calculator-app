/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_AUTH_TOKEN: string;
    readonly VITE_VERITY_CALCULATOR_API: string;
  // add more environment variables here if needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}