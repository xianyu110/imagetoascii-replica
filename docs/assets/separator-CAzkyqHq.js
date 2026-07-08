import { jsx } from 'react/jsx-runtime';
import { Separator } from '@base-ui/react/separator';

import { t as cn } from './utils-C_uf36nf.js';

//#region src/components/ui/separator.tsx
function Separator$1({ className, orientation = 'horizontal', ...props }) {
  return /* @__PURE__ */ jsx(Separator, {
    'data-slot': 'separator',
    orientation,
    className: cn(
      'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch',
      className
    ),
    ...props,
  });
}
//#endregion
export { Separator$1 as t };
