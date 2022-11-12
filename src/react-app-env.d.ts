/// <reference types="react-scripts" />

interface ImportMeta {
  url: string;
}

declare module 'object.fromentries' {
  export default Object.fromEntries;
}

declare module 'unfetch/polyfill';

declare module 'http-proxy-middleware';
