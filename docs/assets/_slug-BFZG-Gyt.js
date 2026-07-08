import {
  createFileRoute,
  lazyRouteComponent,
  notFound,
} from '@tanstack/react-router';

import { r as getLocale, o as localizeUrl } from '../server.js';
import { b as envConfigs } from './schema-DUwBz_C6.js';
import { t as getBlogPostFn } from './server-B7B6_04o.js';

//#region src/routes/blog/$slug.tsx
var $$splitComponentImporter = () => import('./_slug-4PzGs23g.js');
var Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const locale = getLocale();
    const post = await getBlogPostFn({
      data: {
        slug: params.slug,
        locale,
      },
    });
    if (!post) throw notFound();
    return {
      locale,
      post,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { locale, post } = loaderData;
    const canonical = localizeUrl(`${envConfigs.app_url}/blog/${post.slug}`, {
      locale,
    }).href;
    return {
      meta: [
        { title: `${post.title} | ${envConfigs.app_name}` },
        {
          name: 'description',
          content: post.description,
        },
      ],
      links: [
        {
          rel: 'canonical',
          href: canonical,
        },
      ],
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, 'component'),
});
//#endregion
export { Route as t };
