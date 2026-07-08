import { o as C, n as S, t as T, r as w, a as x } from './card-DUh0Lb3Z.js';
import { t } from './credit-card-Bcyz6Bas.js';
import {
  lc as _,
  Ho as a,
  uc as b,
  Uo as c,
  Ys as d,
  Zs as f,
  eu as g,
  ec as h,
  Ao as i,
  Xs as l,
  du as m,
  Js as o,
  cc as p,
  $s as r,
  Qs as s,
  Yl as u,
  mu as v,
  qs as y,
} from './index-D7NQvf2G.js';
import { t as n } from './key-CiTTm9ck.js';
import { c as e } from './runtime-DPDP4QTt.js';

var E = u(`activity`, [
    [
      `path`,
      {
        d: `M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,
        key: `169zse`,
      },
    ],
  ]),
  D = u(`trending-up`, [
    [`path`, { d: `M16 7h6v6`, key: `box55l` }],
    [`path`, { d: `m22 7-8.5 8.5-5-5L2 17`, key: `1t1m79` }],
  ]),
  O = e();
function k() {
  let { data: e } = m(),
    { data: u } = v({
      queryKey: [`user-credits`],
      queryFn: () => g(`/api/credits`),
    }),
    { data: k } = v({
      queryKey: [`user-apikeys`],
      queryFn: () => g(`/api/apikeys`),
    }),
    { data: A } = v({
      queryKey: [`user-subscription-current`],
      queryFn: () => g(`/api/user/subscriptions/current`),
    }),
    j = u?.balance ?? null,
    M = k?.length ?? null,
    N = A ?? null,
    P = N?.planName || N?.productName || r();
  return (0, O.jsxs)(`div`, {
    className: `space-y-6 p-4 md:p-6`,
    children: [
      (0, O.jsxs)(`div`, {
        children: [
          (0, O.jsx)(`h1`, {
            className: `text-2xl font-semibold tracking-tight`,
            children: b(),
          }),
          (0, O.jsx)(`p`, {
            className: `text-muted-foreground mt-1 text-sm`,
            children: _({ name: e?.user?.name || e?.user?.email || `` }),
          }),
        ],
      }),
      (0, O.jsxs)(`div`, {
        className: `grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,
        children: [
          (0, O.jsxs)(T, {
            children: [
              (0, O.jsxs)(x, {
                className: `flex flex-row items-center justify-between pb-2`,
                children: [
                  (0, O.jsx)(C, {
                    className: `text-sm font-medium`,
                    children: h(),
                  }),
                  (0, O.jsx)(D, { className: `text-muted-foreground size-4` }),
                ],
              }),
              (0, O.jsxs)(S, {
                children: [
                  (0, O.jsx)(`div`, {
                    className: `text-2xl font-bold`,
                    children: P,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-muted-foreground mt-1 text-xs`,
                    children: s(),
                  }),
                ],
              }),
            ],
          }),
          (0, O.jsxs)(T, {
            children: [
              (0, O.jsxs)(x, {
                className: `flex flex-row items-center justify-between pb-2`,
                children: [
                  (0, O.jsx)(C, {
                    className: `text-sm font-medium`,
                    children: c(),
                  }),
                  (0, O.jsx)(t, { className: `text-muted-foreground size-4` }),
                ],
              }),
              (0, O.jsxs)(S, {
                children: [
                  (0, O.jsx)(`div`, {
                    className: `text-2xl font-bold`,
                    children: j ?? `—`,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-muted-foreground mt-1 text-xs`,
                    children: a(),
                  }),
                ],
              }),
            ],
          }),
          (0, O.jsxs)(T, {
            children: [
              (0, O.jsxs)(x, {
                className: `flex flex-row items-center justify-between pb-2`,
                children: [
                  (0, O.jsx)(C, {
                    className: `text-sm font-medium`,
                    children: i(),
                  }),
                  (0, O.jsx)(n, { className: `text-muted-foreground size-4` }),
                ],
              }),
              (0, O.jsxs)(S, {
                children: [
                  (0, O.jsx)(`div`, {
                    className: `text-2xl font-bold`,
                    children: M ?? `—`,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-muted-foreground mt-1 text-xs`,
                    children: d(),
                  }),
                ],
              }),
            ],
          }),
          (0, O.jsxs)(T, {
            children: [
              (0, O.jsxs)(x, {
                className: `flex flex-row items-center justify-between pb-2`,
                children: [
                  (0, O.jsx)(C, {
                    className: `text-sm font-medium`,
                    children: f(),
                  }),
                  (0, O.jsx)(E, { className: `text-muted-foreground size-4` }),
                ],
              }),
              (0, O.jsxs)(S, {
                children: [
                  (0, O.jsx)(`div`, {
                    className: `text-2xl font-bold`,
                    children: `0`,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-muted-foreground mt-1 text-xs`,
                    children: l(),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, O.jsxs)(T, {
        children: [
          (0, O.jsxs)(x, {
            children: [
              (0, O.jsx)(C, { className: `text-base`, children: o() }),
              (0, O.jsx)(w, { children: y() }),
            ],
          }),
          (0, O.jsx)(S, {
            children: (0, O.jsx)(`div`, {
              className: `border-border text-muted-foreground rounded-lg border border-dashed p-8 text-center`,
              children: (0, O.jsx)(`p`, {
                className: `text-sm`,
                children: p(),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
export { k as component };
