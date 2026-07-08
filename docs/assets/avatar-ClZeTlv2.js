import { t as cn } from './utils-C_uf36nf.js';

import 'react';

import { jsx } from 'react/jsx-runtime';
import { Avatar } from '@base-ui/react/avatar';

//#region src/components/ui/avatar.tsx
function Avatar$1({ className, size = 'default', ...props }) {
  return /* @__PURE__ */ jsx(Avatar.Root, {
    'data-slot': 'avatar',
    'data-size': size,
    className: cn(
      'group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten',
      className
    ),
    ...props,
  });
}
function AvatarImage({ className, ...props }) {
  return /* @__PURE__ */ jsx(Avatar.Image, {
    'data-slot': 'avatar-image',
    className: cn(
      'aspect-square size-full rounded-full object-cover',
      className
    ),
    ...props,
  });
}
function AvatarFallback({ className, ...props }) {
  return /* @__PURE__ */ jsx(Avatar.Fallback, {
    'data-slot': 'avatar-fallback',
    className: cn(
      'flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs',
      className
    ),
    ...props,
  });
}
//#endregion
export { AvatarFallback as n, AvatarImage as r, Avatar$1 as t };
