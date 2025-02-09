import { CSSInterpolation } from '@emotion/react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    css?: CSSInterpolation;
  }
}
