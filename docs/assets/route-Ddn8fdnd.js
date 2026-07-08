import {
  n as c,
  r as l,
  a as o,
  i as s,
  t as u,
} from './app-layout-BdrfeW03.js';
import { t as G, n as W } from './button-bN-wY-Ql.js';
import { t as i } from './coins-HACsqOr4.js';
import { t as a } from './credit-card-BwobX3f8.js';
import {
  t as ie,
  a as J,
  r as re,
  n as X,
  i as Y,
  o as Z,
} from './dialog-CfiOugxY.js';
import { t as f } from './image-uploader-CbL8eBz8.js';
import {
  Sc as _,
  mc as A,
  Yl as b,
  xc as B,
  bc as C,
  gc as D,
  fu as E,
  rc as F,
  Ec as g,
  Dc as h,
  zc as H,
  sc as I,
  nc as j,
  ic as k,
  tc as L,
  Cc as m,
  nu as M,
  oc as N,
  wu as ne,
  hc as O,
  Bc as p,
  pc as P,
  vc as R,
  ac as S,
  fc as T,
  du as te,
  Tc as v,
  yc as V,
  dc as w,
  _c as x,
  Xl as y,
  wc as z,
} from './index-CNkADuMW.js';
import { t as q } from './input-BzjUrduj.js';
import { t as d } from './key-O1NmE6zQ.js';
import { t as K } from './label-BC74pi7G.js';
import { t as r } from './navigation-CFRROamK.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as ae } from './textarea-wtz4TRr6.js';
import { t as U } from './utils-DXalBF5w.js';
import { t as ee } from './x-CdrRlTxD.js';

var oe = b(`receipt`, [
    [
      `path`,
      {
        d: `M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z`,
        key: `q3az6g`,
      },
    ],
    [`path`, { d: `M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8`, key: `1h4pet` }],
    [`path`, { d: `M12 17.5v-11`, key: `1jc1ny` }],
  ]),
  Q = t(n(), 1),
  $ = e();
function se() {
  let { data: e, isPending: t } = te(),
    [n, i] = (0, Q.useState)(!1),
    [a, o] = (0, Q.useState)(``),
    [s, c] = (0, Q.useState)(``),
    [u, d] = (0, Q.useState)([]),
    [p, b] = (0, Q.useState)(!1),
    [S, E] = (0, Q.useState)(0),
    [k, j] = (0, Q.useState)(!1);
  async function N() {
    if (!a.trim() || !s.trim()) {
      y.error(D());
      return;
    }
    j(!0);
    try {
      (await M(`/api/tickets`, { title: a, content: s, attachments: u }),
        y.success(O()),
        i(!1),
        o(``),
        c(``),
        d([]),
        E((e) => e + 1));
    } catch (e) {
      y.error(e?.message || `Failed`);
    } finally {
      j(!1);
    }
  }
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(`button`, {
        'aria-label': h(),
        onClick: () => i(!0),
        className: U(
          `fixed right-6 bottom-6 z-50 size-12 rounded-full`,
          `bg-primary text-primary-foreground shadow-lg`,
          `flex items-center justify-center`,
          `transition-all hover:scale-105 hover:shadow-xl`
        ),
        children: n
          ? (0, $.jsx)(ee, { className: `size-5` })
          : (0, $.jsx)(l, { className: `size-5` }),
      }),
      (0, $.jsx)(ie, {
        open: n,
        onOpenChange: i,
        children: (0, $.jsxs)(X, {
          children: [
            (0, $.jsxs)(J, {
              children: [
                (0, $.jsx)(Z, { children: g() }),
                (0, $.jsx)(re, { children: v() }),
              ],
            }),
            !t && !e?.user
              ? (0, $.jsxs)(`div`, {
                  className: `flex flex-col items-center gap-4 py-6 text-center`,
                  children: [
                    (0, $.jsx)(`p`, {
                      className: `text-muted-foreground text-sm`,
                      children: z(),
                    }),
                    (0, $.jsx)(r, {
                      href: `/sign-in`,
                      className: U(W()),
                      children: m(),
                    }),
                  ],
                })
              : (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `space-y-4 py-2`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, $.jsx)(K, {
                              htmlFor: `support-title`,
                              children: _(),
                            }),
                            (0, $.jsx)(q, {
                              id: `support-title`,
                              value: a,
                              maxLength: 200,
                              onChange: (e) => o(e.target.value),
                              placeholder: B(),
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, $.jsx)(K, {
                              htmlFor: `support-content`,
                              children: C(),
                            }),
                            (0, $.jsx)(ae, {
                              id: `support-content`,
                              value: s,
                              maxLength: 5e3,
                              rows: 5,
                              onChange: (e) => c(e.target.value),
                              placeholder: V(),
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, $.jsx)(K, { children: w() }),
                            (0, $.jsx)(
                              f,
                              {
                                allowMultiple: !0,
                                maxImages: 9,
                                onChange: (e) => {
                                  (d(
                                    e
                                      .filter(
                                        (e) => e.status === `uploaded` && e.url
                                      )
                                      .map((e) => e.url)
                                  ),
                                    b(e.some((e) => e.status === `uploading`)));
                                },
                              },
                              S
                            ),
                          ],
                        }),
                        (0, $.jsxs)(`p`, {
                          className: `text-muted-foreground text-xs`,
                          children: [
                            R(),
                            ` `,
                            (0, $.jsx)(r, {
                              href: `/settings/tickets`,
                              className: `hover:text-foreground underline`,
                              children: x(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(Y, {
                      children: [
                        (0, $.jsx)(G, {
                          variant: `outline`,
                          onClick: () => i(!1),
                          children: A(),
                        }),
                        (0, $.jsx)(G, {
                          onClick: N,
                          disabled: k || p,
                          children: k ? T() : P(),
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        }),
      }),
    ],
  });
}
function ce() {
  let e = p();
  return (0, $.jsxs)(u, {
    navItems: [
      { href: `/settings`, label: I(), icon: s, group: e },
      { href: `/settings/billing`, label: S(), icon: a, group: e },
      { href: `/settings/payments`, label: k(), icon: oe, group: e },
      { href: `/settings/credits`, label: F(), icon: i, group: e },
      { href: `/settings/apikeys`, label: j(), icon: d, group: e },
      { href: `/settings/tickets`, label: L(), icon: l, group: e },
    ],
    footerNavItems: [
      { href: `/settings/profile`, label: N(), icon: c },
      { href: `/`, label: H(), icon: o, newTab: !0 },
    ],
    brand: E.app_name,
    brandHref: `/settings`,
    children: [(0, $.jsx)(ne, {}), (0, $.jsx)(se, {})],
  });
}
export { ce as component };
