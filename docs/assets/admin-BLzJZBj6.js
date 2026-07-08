import { o as d, t as f, a as l, n as u } from './card-DUh0Lb3Z.js';
import {
  eu as a,
  ya as c,
  Yl as i,
  Ia as n,
  mu as o,
  La as r,
  va as s,
} from './index-BFsmjNQq.js';
import { c as e } from './runtime-DPDP4QTt.js';
import { t } from './shield-Bp5h9YbK.js';

var p = i(`users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  m = e();
function h() {
  let e = o({
      queryKey: [`admin-users-total`],
      queryFn: () => a(`/api/admin/users`),
    }),
    i = o({
      queryKey: [`admin-roles-total`],
      queryFn: () => a(`/api/admin/roles`),
    }),
    h = { users: e.data?.total ?? 0, roles: i.data?.total ?? 0 };
  return (0, m.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, m.jsxs)(`div`, {
        children: [
          (0, m.jsx)(`h1`, { className: `text-2xl font-bold`, children: r() }),
          (0, m.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: n(),
          }),
        ],
      }),
      (0, m.jsxs)(`div`, {
        className: `grid gap-4 md:grid-cols-2 lg:grid-cols-4`,
        children: [
          (0, m.jsxs)(f, {
            children: [
              (0, m.jsxs)(l, {
                className: `flex flex-row items-center justify-between space-y-0 pb-2`,
                children: [
                  (0, m.jsx)(d, {
                    className: `text-sm font-medium`,
                    children: c(),
                  }),
                  (0, m.jsx)(p, { className: `text-muted-foreground size-4` }),
                ],
              }),
              (0, m.jsx)(u, {
                children: (0, m.jsx)(`div`, {
                  className: `text-2xl font-bold`,
                  children: h.users,
                }),
              }),
            ],
          }),
          (0, m.jsxs)(f, {
            children: [
              (0, m.jsxs)(l, {
                className: `flex flex-row items-center justify-between space-y-0 pb-2`,
                children: [
                  (0, m.jsx)(d, {
                    className: `text-sm font-medium`,
                    children: s(),
                  }),
                  (0, m.jsx)(t, { className: `text-muted-foreground size-4` }),
                ],
              }),
              (0, m.jsx)(u, {
                children: (0, m.jsx)(`div`, {
                  className: `text-2xl font-bold`,
                  children: h.roles,
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { h as component };
