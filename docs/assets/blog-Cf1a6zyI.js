import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

import { r as getLocale, i as locales, o as localizeUrl } from '../server.js';
import { i as blog_description, a as blog_title } from './messages-DC2BhyRd.js';
import { b as envConfigs } from './schema-DUwBz_C6.js';
import { n as getBlogPostsFn } from './server-B7B6_04o.js';

//#region src/routes/blog/index.tsx
var $$splitComponentImporter = () => import('./blog-Du7GUu1n.js');
var Route = createFileRoute('/blog/')({
  loader: async () => {
    const locale = getLocale();
    return {
      locale,
      posts: await getBlogPostsFn({ data: { locale } }),
    };
  },
  head: ({ loaderData }) => {
    const locale = loaderData?.locale;
    const urlFor = (loc) =>
      localizeUrl(`${envConfigs.app_url}/blog`, { locale: loc }).href;
    return {
      meta: [
        { title: `${blog_title({}, { locale })} | ${envConfigs.app_name}` },
        {
          name: 'description',
          content: blog_description({}, { locale }),
        },
      ],
      links: [
        {
          rel: 'canonical',
          href: urlFor(locale ?? 'en'),
        },
        ...locales.map((loc) => ({
          rel: 'alternate',
          hrefLang: loc,
          href: urlFor(loc),
        })),
      ],
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, 'component'),
});
//#endregion
export { Route as t };
