import { jsx, jsxs } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';
import { MDXProvider } from '@mdx-js/react';
import { ArrowLeft } from 'lucide-react';

import { t as mdxComponents } from './mdx-components-BtAxwlPH.js';
import { Sc as common_pages_back_to_home } from './messages-DC2BhyRd.js';
import { t as Link$2 } from './navigation-Ca-dY7zl.js';

//#region src/routes/(pages)/route.tsx?tsr-split=component
function PagesLayout() {
  return /* @__PURE__ */ jsxs('div', {
    className: 'bg-background min-h-screen',
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'mx-auto max-w-3xl px-6 pt-8 md:px-8',
        children: /* @__PURE__ */ jsxs(Link$2, {
          href: '/',
          className:
            'text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors',
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: 'size-4' }),
            common_pages_back_to_home(),
          ],
        }),
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'mx-auto max-w-3xl px-6 pt-6 pb-12 md:px-8 md:pt-8 md:pb-16',
        children: /* @__PURE__ */ jsx(MDXProvider, {
          components: mdxComponents,
          children: /* @__PURE__ */ jsx(Outlet, {}),
        }),
      }),
    ],
  });
}
//#endregion
export { PagesLayout as component };
