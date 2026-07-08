import { t as Label } from './label-Dzpc0zKw.js';
import { t as Separator } from './separator-CAzkyqHq.js';
import { t as cn } from './utils-C_uf36nf.js';

import 'react';

import { jsx, jsxs } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';

//#region src/components/ui/field.tsx
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx('div', {
    'data-slot': 'field-group',
    className: cn(
      'group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4',
      className
    ),
    ...props,
  });
}
var fieldVariants = cva(
  'group/field flex w-full gap-2 data-[invalid=true]:text-destructive',
  {
    variants: {
      orientation: {
        vertical: 'flex-col *:w-full [&>.sr-only]:w-auto',
        horizontal:
          'flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        responsive:
          'flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
      },
    },
    defaultVariants: { orientation: 'vertical' },
  }
);
function Field({ className, orientation = 'vertical', ...props }) {
  return /* @__PURE__ */ jsx('div', {
    role: 'group',
    'data-slot': 'field',
    'data-orientation': orientation,
    className: cn(fieldVariants({ orientation }), className),
    ...props,
  });
}
function FieldLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx(Label, {
    'data-slot': 'field-label',
    className: cn(
      'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10',
      'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col',
      className
    ),
    ...props,
  });
}
function FieldDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx('p', {
    'data-slot': 'field-description',
    className: cn(
      'text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5',
      'last:mt-0 nth-last-2:-mt-1',
      '[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
      className
    ),
    ...props,
  });
}
function FieldSeparator({ children, className, ...props }) {
  return /* @__PURE__ */ jsxs('div', {
    'data-slot': 'field-separator',
    'data-content': !!children,
    className: cn(
      'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2',
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(Separator, { className: 'absolute inset-0 top-1/2' }),
      children &&
        /* @__PURE__ */ jsx('span', {
          className:
            'relative mx-auto block w-fit bg-background px-2 text-muted-foreground',
          'data-slot': 'field-separator-content',
          children,
        }),
    ],
  });
}
//#endregion
export {
  FieldSeparator as a,
  FieldLabel as i,
  FieldDescription as n,
  FieldGroup as r,
  Field as t,
};
