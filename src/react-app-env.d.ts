/// <reference types="react-scripts" />

interface ImportMeta {
  url: string;
}

declare module 'object.fromentries' {
  export default Object.fromEntries;
}

declare module 'http-proxy-middleware';

import * as CSS from 'csstype';

declare module 'csstype' {
  export interface Properties {
    '--columns'?: number;
  }
}
