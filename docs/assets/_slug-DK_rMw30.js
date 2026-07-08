import { n as d, t as f } from './header-EHVYXHlC.js';
import { o as c, t as l, l as s } from './index-BFsmjNQq.js';
import { t as u } from './markdown-content-Bu2HbgZC.js';
import { n, t as r } from './mdx-components-DTkhGFHx.js';
import { t } from './navigation-Cl4u6_fq.js';
import { r as a, n as i, t as o } from './posts-B0MMKgNw.js';
import { c as e } from './runtime-DPDP4QTt.js';

var p = e();
function m() {
  let { locale: e, post: m } = c.useLoaderData(),
    h = m.source === `local` ? i(m.slug, e)?.default : null;
  return (0, p.jsxs)(`div`, {
    className: `bg-background text-foreground flex min-h-screen flex-col`,
    children: [
      (0, p.jsx)(f, {}),
      (0, p.jsx)(`main`, {
        className: `flex-1 px-6 py-12 md:px-8 md:py-16`,
        children: (0, p.jsxs)(`article`, {
          className: `mx-auto max-w-3xl`,
          children: [
            (0, p.jsxs)(t, {
              href: `/blog`,
              className: `text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors`,
              children: [(0, p.jsx)(n, { className: `size-4` }), s()],
            }),
            (0, p.jsxs)(`header`, {
              className: `border-border mt-8 mb-6 border-b pb-6`,
              children: [
                (0, p.jsx)(`h1`, {
                  className: `text-foreground text-3xl font-semibold tracking-tight md:text-4xl`,
                  children: m.title,
                }),
                m.description &&
                  (0, p.jsx)(`p`, {
                    className: `text-muted-foreground mt-3`,
                    children: m.description,
                  }),
                (0, p.jsxs)(`div`, {
                  className: `text-muted-foreground mt-4 flex items-center gap-4 text-sm`,
                  children: [
                    (0, p.jsxs)(`span`, {
                      className: `inline-flex items-center gap-1.5`,
                      children: [
                        (0, p.jsx)(a, { className: `size-4` }),
                        o(m.createdAt, e),
                      ],
                    }),
                    (m.authorName || m.authorImage) &&
                      (0, p.jsxs)(`span`, {
                        className: `inline-flex items-center gap-2`,
                        children: [
                          m.authorImage &&
                            (0, p.jsx)(`img`, {
                              src: m.authorImage,
                              alt: m.authorName || ``,
                              width: 20,
                              height: 20,
                              className: `size-5 rounded-full object-cover`,
                            }),
                          m.authorName,
                        ],
                      }),
                  ],
                }),
              ],
            }),
            m.image &&
              (0, p.jsx)(`img`, {
                src: m.image,
                alt: m.title,
                className: `border-border mb-8 w-full rounded-2xl border object-cover`,
              }),
            h
              ? (0, p.jsx)(`div`, {
                  className: `text-foreground/90 text-[15px] leading-7`,
                  children: (0, p.jsx)(l, {
                    components: r,
                    children: (0, p.jsx)(h, {}),
                  }),
                })
              : (0, p.jsx)(u, { content: m.content || `` }),
          ],
        }),
      }),
      (0, p.jsx)(d, {}),
    ],
  });
}
export { m as component };
