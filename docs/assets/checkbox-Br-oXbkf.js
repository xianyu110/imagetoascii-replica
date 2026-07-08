import { jsx } from 'react/jsx-runtime';
import { Checkbox } from '@base-ui/react/checkbox';
import { CheckIcon } from 'lucide-react';

import { t as cn } from './utils-C_uf36nf.js';

//#region src/components/ui/checkbox.tsx
function Checkbox$1({ className, ...props }) {
  return /* @__PURE__ */ jsx(Checkbox.Root, {
    'data-slot': 'checkbox',
    className: cn(
      'peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary',
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(Checkbox.Indicator, {
      'data-slot': 'checkbox-indicator',
      className:
        'grid place-content-center text-current transition-none [&>svg]:size-3.5',
      children: /* @__PURE__ */ jsx(CheckIcon, {}),
    }),
  });
}
//#endregion
export { Checkbox$1 as t };
