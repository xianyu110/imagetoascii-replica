import '../server.js';

import { jsx } from 'react/jsx-runtime';
import { Link, useLocation, useRouter } from '@tanstack/react-router';

//#region src/core/i18n/navigation.tsx
function Link$1({ href, locale, prefetch, ...rest }) {
  if (/^(https?:|mailto:|tel:|#)/.test(href))
    return /* @__PURE__ */ jsx('a', {
      href,
      ...rest,
    });
  return /* @__PURE__ */ jsx(Link, {
    to: href,
    ...rest,
  });
}
function usePathname() {
  return useLocation().pathname;
}
function toNavigateOptions(href) {
  const [pathPart, hash] = href.split('#');
  const [pathname, searchStr] = pathPart.split('?');
  return {
    to: pathname || '/',
    search: searchStr
      ? Object.fromEntries(new URLSearchParams(searchStr))
      : void 0,
    hash,
  };
}
function useRouter$1() {
  const router = useRouter();
  return {
    push: (href) => {
      router.navigate(toNavigateOptions(href));
    },
    replace: (href) => {
      router.navigate({
        ...toNavigateOptions(href),
        replace: true,
      });
    },
    back: () => router.history.back(),
    forward: () => router.history.forward(),
    refresh: () => router.invalidate(),
    prefetch: (_href) => {},
  };
}
//#endregion
export { usePathname as n, useRouter$1 as r, Link$1 as t };
