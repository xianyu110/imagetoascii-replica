import { jsx, jsxs } from 'react/jsx-runtime';
import { MDXProvider } from '@mdx-js/react';
import { ArrowLeft, Calendar } from 'lucide-react';

import { t as Route } from './_slug-BFZG-Gyt.js';
import { n as Footer, t as Header } from './header-C5bHwORu.js';
import { t as MarkdownContent } from './markdown-content-DAIMZpSI.js';
import { t as mdxComponents } from './mdx-components-BtAxwlPH.js';
import { n as blog_back_to_blog } from './messages-DC2BhyRd.js';
import { t as Link$1 } from './navigation-Ca-dY7zl.js';
import { t as formatPostDate, r as loadLocalPost } from './posts-B8UvWEZG.js';

//#region src/routes/blog/$slug.tsx?tsr-split=component
function BlogPostPage() {
  const { locale, post } = Route.useLoaderData();
  const LocalContent =
    post.source === 'local' ? loadLocalPost(post.slug, locale)?.default : null;
  return /* @__PURE__ */ jsxs('div', {
    className: 'bg-background text-foreground flex min-h-screen flex-col',
    children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx('main', {
        className: 'flex-1 px-6 py-12 md:px-8 md:py-16',
        children: /* @__PURE__ */ jsxs('article', {
          className: 'mx-auto max-w-3xl',
          children: [
            /* @__PURE__ */ jsxs(Link$1, {
              href: '/blog',
              className:
                'text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors',
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: 'size-4' }),
                blog_back_to_blog(),
              ],
            }),
            /* @__PURE__ */ jsxs('header', {
              className: 'border-border mt-8 mb-6 border-b pb-6',
              children: [
                /* @__PURE__ */ jsx('h1', {
                  className:
                    'text-foreground text-3xl font-semibold tracking-tight md:text-4xl',
                  children: post.title,
                }),
                post.description &&
                  /* @__PURE__ */ jsx('p', {
                    className: 'text-muted-foreground mt-3',
                    children: post.description,
                  }),
                /* @__PURE__ */ jsxs('div', {
                  className:
                    'text-muted-foreground mt-4 flex items-center gap-4 text-sm',
                  children: [
                    /* @__PURE__ */ jsxs('span', {
                      className: 'inline-flex items-center gap-1.5',
                      children: [
                        /* @__PURE__ */ jsx(Calendar, { className: 'size-4' }),
                        formatPostDate(post.createdAt, locale),
                      ],
                    }),
                    (post.authorName || post.authorImage) &&
                      /* @__PURE__ */ jsxs('span', {
                        className: 'inline-flex items-center gap-2',
                        children: [
                          post.authorImage &&
                            /* @__PURE__ */ jsx('img', {
                              src: post.authorImage,
                              alt: post.authorName || '',
                              width: 20,
                              height: 20,
                              className: 'size-5 rounded-full object-cover',
                            }),
                          post.authorName,
                        ],
                      }),
                  ],
                }),
              ],
            }),
            post.image &&
              /* @__PURE__ */ jsx('img', {
                src: post.image,
                alt: post.title,
                className:
                  'border-border mb-8 w-full rounded-2xl border object-cover',
              }),
            LocalContent
              ? /* @__PURE__ */ jsx('div', {
                  className: 'text-foreground/90 text-[15px] leading-7',
                  children: /* @__PURE__ */ jsx(MDXProvider, {
                    components: mdxComponents,
                    children: /* @__PURE__ */ jsx(LocalContent, {}),
                  }),
                })
              : /* @__PURE__ */ jsx(MarkdownContent, {
                  content: post.content || '',
                }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Footer, {}),
    ],
  });
}
//#endregion
export { BlogPostPage as component };
