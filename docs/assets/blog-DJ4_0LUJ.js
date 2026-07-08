import { n as c, t as l } from './header-EHVYXHlC.js';
import { f as a, d as i, s as o, u as s } from './index-BFsmjNQq.js';
import { t } from './navigation-Cl4u6_fq.js';
import { r as n, t as r } from './posts-B0MMKgNw.js';
import { c as e } from './runtime-DPDP4QTt.js';

var u = e();
function d({
  href: e,
  title: r,
  description: i,
  image: a,
  date: o,
  authorName: s,
  authorImage: c,
}) {
  return (0, u.jsxs)(t, {
    href: e,
    className: `group border-border bg-card hover:border-foreground/20 relative flex flex-col overflow-hidden rounded-2xl border transition-all hover:shadow-sm`,
    children: [
      a &&
        (0, u.jsx)(`img`, {
          src: a,
          alt: r,
          width: 640,
          height: 360,
          loading: `lazy`,
          className: `aspect-video w-full object-cover object-center`,
        }),
      (0, u.jsxs)(`div`, {
        className: `flex flex-1 flex-col gap-3 p-6`,
        children: [
          (0, u.jsx)(`h3`, {
            className: `leading-snug font-medium group-hover:underline group-hover:underline-offset-4`,
            children: r,
          }),
          i &&
            (0, u.jsx)(`p`, {
              className: `text-muted-foreground line-clamp-3 text-sm leading-relaxed`,
              children: i,
            }),
          (0, u.jsxs)(`div`, {
            className: `text-muted-foreground mt-auto flex items-center gap-2 pt-2 text-xs`,
            children: [
              o &&
                (0, u.jsxs)(`span`, {
                  className: `inline-flex items-center gap-1.5`,
                  children: [(0, u.jsx)(n, { className: `size-3.5` }), o],
                }),
              (0, u.jsx)(`span`, { className: `flex-1` }),
              (s || c) &&
                (0, u.jsxs)(`span`, {
                  className: `inline-flex items-center gap-2`,
                  children: [
                    c &&
                      (0, u.jsx)(`img`, {
                        src: c,
                        alt: s || ``,
                        width: 20,
                        height: 20,
                        loading: `lazy`,
                        className: `size-5 rounded-full object-cover`,
                      }),
                    s,
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function f() {
  let { locale: e, posts: t } = o.useLoaderData();
  return (0, u.jsxs)(`div`, {
    className: `bg-background text-foreground flex min-h-screen flex-col`,
    children: [
      (0, u.jsx)(l, {}),
      (0, u.jsx)(`main`, {
        className: `flex-1 px-4 py-16 sm:py-24`,
        children: (0, u.jsxs)(`div`, {
          className: `mx-auto max-w-5xl`,
          children: [
            (0, u.jsxs)(`div`, {
              className: `mb-16 text-center`,
              children: [
                (0, u.jsx)(`h1`, {
                  className: `font-serif text-4xl font-normal tracking-tight sm:text-5xl`,
                  children: a(),
                }),
                (0, u.jsx)(`p`, {
                  className: `text-muted-foreground mx-auto mt-5 max-w-lg`,
                  children: i(),
                }),
              ],
            }),
            t.length === 0
              ? (0, u.jsx)(`p`, {
                  className: `text-muted-foreground text-center`,
                  children: s(),
                })
              : (0, u.jsx)(`div`, {
                  className: `grid gap-5 sm:grid-cols-2 lg:grid-cols-3`,
                  children: t.map((t) =>
                    (0, u.jsx)(
                      d,
                      {
                        href: `/blog/${t.slug}`,
                        title: t.title,
                        description: t.description,
                        image: t.image,
                        date: r(t.createdAt, e),
                        authorName: t.authorName,
                        authorImage: t.authorImage,
                      },
                      t.slug
                    )
                  ),
                }),
          ],
        }),
      }),
      (0, u.jsx)(c, {}),
    ],
  });
}
export { f as component };
