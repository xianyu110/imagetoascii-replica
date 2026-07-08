import { t as D } from './badge-FgXNX2Cv.js';
import { t as C, n as S } from './button-bN-wY-Ql.js';
import { o as Ae, t as E, n as T, a as w } from './card-DUh0Lb3Z.js';
import { t as te } from './circle-x-DpfpYAmK.js';
import { t as i } from './data-table-DomeXJM7.js';
import {
  i as A,
  n as j,
  a as k,
  o as M,
  r as N,
  t as P,
} from './dialog-cYDOLSAZ.js';
import { n as je, t as Me, u as Ne, i as O } from './dropdown-menu-iEw8CMDy.js';
import { t as Pe } from './dynamic-CeWkpJqI.js';
import { t as ne } from './ellipsis-DEMqWxSC.js';
import {
  ws as _,
  gs as _e,
  As as a,
  Ns as ae,
  yu as b,
  is as be,
  Ms as c,
  Ql as ce,
  ls as Ce,
  eu as d,
  _s as de,
  os as De,
  nu as Ee,
  mu as f,
  as as fe,
  vs as g,
  fs as ge,
  us as h,
  ds as he,
  Cs as ie,
  ss as ke,
  Xl as l,
  Ss as le,
  ts as m,
  cs as me,
  Ds as o,
  Os as oe,
  ps as Oe,
  rs as p,
  bs as pe,
  Es as s,
  Ps as se,
  ks as Se,
  ns as Te,
  Yl as u,
  Ts as ue,
  xs as v,
  hs as ve,
  ms as we,
  js as xe,
  ys as y,
  hu as ye,
} from './index-D7NQvf2G.js';
import { t as ee } from './navigation-BaWAhgBr.js';
import { t as re } from './pencil-6y6mLvYc.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as r } from './useMutation-PUxP0Jqz.js';
import { t as x } from './utils-DXalBF5w.js';

var Fe = u(`eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  F = t(n()),
  I = e(),
  Ie = [
    `all`,
    `active`,
    `trialing`,
    `paused`,
    `expired`,
    `pending_cancel`,
    `canceled`,
  ],
  L = 20;
function R(e, t) {
  let n = (t || `usd`).toUpperCase();
  return new Intl.NumberFormat(void 0, {
    style: `currency`,
    currency: n,
  }).format(e / 100);
}
function z(e) {
  let t = (e || ``).toLowerCase();
  return t === `active` || t === `trialing`
    ? `default`
    : t === `canceled` || t === `expired`
      ? `destructive`
      : `secondary`;
}
function B(e) {
  let t = (e || ``).toLowerCase();
  return t === `active` || t === `trialing`;
}
function V() {
  let e = ye(),
    [t, n] = (0, F.useState)(`all`),
    [u, V] = (0, F.useState)(1),
    [U, Le] = (0, F.useState)(``),
    [W, Re] = (0, F.useState)(``),
    [G, K] = (0, F.useState)(null),
    [q, J] = (0, F.useState)(null);
  ((0, F.useEffect)(() => {
    let e = setTimeout(() => Re(U), 300);
    return () => clearTimeout(e);
  }, [U]),
    (0, F.useEffect)(() => {
      V(1);
    }, [t, W]));
  let Y = f({
      queryKey: [`billing`, `current`],
      queryFn: () => d(`/api/user/subscriptions/current`),
    }),
    X = Y.data ?? null,
    ze = !Y.isPending,
    Z = f({
      queryKey: [`billing`, `list`, u, t, W],
      queryFn: () => {
        let e = new URLSearchParams({ page: String(u), pageSize: String(L) });
        return (
          t !== `all` && e.set(`status`, t),
          W && e.set(`search`, W),
          d(`/api/user/subscriptions?${e}`)
        );
      },
      placeholderData: b,
    }),
    Be = Z.data?.items ?? [],
    Ve = Z.data?.total ?? 0,
    Q = r({
      mutationFn: (e) =>
        Ee(`/api/user/subscriptions/cancel`, { subscriptionNo: e }),
      onSuccess: () => {
        (l.success(ke()),
          J(null),
          e.invalidateQueries({ queryKey: [`billing`] }));
      },
      onError: (e) => {
        l.error((e instanceof ce && e.message) || De());
      },
    }),
    $ = Q.isPending;
  function He() {
    q && Q.mutate(q.subscriptionNo);
  }
  let Ue = [
    {
      header: _(),
      cell: (e) =>
        (0, I.jsx)(`span`, {
          className: `font-mono text-xs`,
          children: e.subscriptionNo,
        }),
    },
    {
      header: o(),
      cell: (e) =>
        (0, I.jsx)(`span`, {
          className: `font-medium`,
          children: e.planName || e.productName || `—`,
        }),
    },
    {
      header: ue(),
      cell: (e) =>
        e.interval
          ? (0, I.jsxs)(`span`, {
              className: `text-sm`,
              children: [
                e.intervalCount ? `${e.intervalCount} ` : ``,
                e.interval,
              ],
            })
          : `—`,
    },
    {
      header: s(),
      cell: (e) => (0, I.jsx)(D, { variant: z(e.status), children: e.status }),
    },
    {
      header: p(),
      cell: (e) =>
        e.amount && e.currency
          ? (0, I.jsx)(`span`, {
              className: `tabular-nums`,
              children: R(e.amount, e.currency),
            })
          : `—`,
    },
    {
      header: ie(),
      cell: (e) =>
        (0, I.jsx)(`span`, {
          className: `text-muted-foreground text-xs whitespace-pre-line`,
          children:
            e.currentPeriodStart && e.currentPeriodEnd
              ? `${new Date(e.currentPeriodStart).toLocaleDateString()}\n~ ${new Date(e.currentPeriodEnd).toLocaleDateString()}`
              : `—`,
        }),
    },
    {
      header: le(),
      cell: (e) =>
        (0, I.jsx)(`span`, {
          className: `text-muted-foreground text-sm`,
          children: e.canceledEndAt
            ? new Date(e.canceledEndAt).toLocaleDateString()
            : `—`,
        }),
    },
    {
      header: m(),
      cell: (e) =>
        (0, I.jsx)(`span`, {
          className: `text-muted-foreground text-sm`,
          children: e.createdAt
            ? new Date(e.createdAt).toLocaleDateString()
            : `—`,
        }),
    },
    {
      header: be(),
      className: `w-[80px]`,
      cell: (e) =>
        (0, I.jsxs)(Me, {
          children: [
            (0, I.jsx)(Ne, {
              render: (0, I.jsx)(C, {
                variant: `ghost`,
                size: `icon`,
                className: `size-7`,
                children: (0, I.jsx)(ne, { className: `size-4` }),
              }),
            }),
            (0, I.jsxs)(je, {
              align: `end`,
              children: [
                (0, I.jsxs)(O, {
                  onClick: () => K(e),
                  children: [(0, I.jsx)(Fe, { className: `size-4` }), we()],
                }),
                (0, I.jsxs)(O, {
                  onClick: () => B(e.status) && J(e),
                  disabled: !B(e.status),
                  children: [(0, I.jsx)(te, { className: `size-4` }), Oe()],
                }),
              ],
            }),
          ],
        }),
    },
  ];
  return (0, I.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, I.jsxs)(`div`, {
        children: [
          (0, I.jsx)(`h1`, { className: `text-2xl font-bold`, children: se() }),
          (0, I.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: ae(),
          }),
        ],
      }),
      (0, I.jsxs)(E, {
        className: `max-w-md`,
        children: [
          (0, I.jsx)(w, {
            children: (0, I.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, I.jsx)(Ae, { children: c() }),
                (0, I.jsxs)(ee, {
                  href: `/pricing`,
                  className: x(S({ variant: `outline`, size: `sm` }), `gap-2`),
                  children: [
                    (0, I.jsx)(re, { className: `size-4` }),
                    X ? oe() : Se(),
                  ],
                }),
              ],
            }),
          }),
          (0, I.jsx)(T, {
            children: ze
              ? X
                ? (0, I.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, I.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, I.jsx)(`p`, {
                            className: `text-3xl font-bold`,
                            children: X.planName || X.productName || `—`,
                          }),
                          (0, I.jsx)(D, {
                            variant: z(X.status),
                            children: X.status,
                          }),
                        ],
                      }),
                      X.amount &&
                        X.currency &&
                        (0, I.jsxs)(`p`, {
                          className: `text-muted-foreground text-sm`,
                          children: [
                            R(X.amount, X.currency),
                            X.interval ? ` / ${X.interval}` : ``,
                          ],
                        }),
                      X.canceledEndAt
                        ? (0, I.jsx)(`p`, {
                            className: `text-destructive text-sm`,
                            children: pe({
                              date: new Date(
                                X.canceledEndAt
                              ).toLocaleDateString(),
                            }),
                          })
                        : X.currentPeriodEnd
                          ? (0, I.jsx)(`p`, {
                              className: `text-muted-foreground text-sm`,
                              children: v({
                                date: new Date(
                                  X.currentPeriodEnd
                                ).toLocaleDateString(),
                              }),
                            })
                          : null,
                    ],
                  })
                : (0, I.jsx)(`p`, {
                    className: `text-muted-foreground text-3xl font-bold`,
                    children: a(),
                  })
              : (0, I.jsx)(`p`, {
                  className: `text-muted-foreground text-sm`,
                  children: `…`,
                }),
          }),
        ],
      }),
      (0, I.jsx)(`div`, {
        className: `border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b`,
        children: Ie.map((e) =>
          (0, I.jsx)(
            `button`,
            {
              onClick: () => n(e),
              className: x(
                `-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors`,
                t === e
                  ? `border-primary text-foreground`
                  : `text-muted-foreground hover:text-foreground border-transparent`
              ),
              children: Pe(`settings.billing.tab_${e}`),
            },
            e
          )
        ),
      }),
      (0, I.jsx)(E, {
        children: (0, I.jsx)(T, {
          children: (0, I.jsx)(i, {
            columns: Ue,
            data: Be,
            total: Ve,
            page: u,
            pageSize: L,
            onPageChange: V,
            rowKey: (e) => e.id,
            emptyText: a(),
            search: U,
            onSearchChange: Le,
            onRefresh: async () => {
              (Y.refetch(), await Z.refetch());
            },
            loading: Z.isFetching,
          }),
        }),
      }),
      (0, I.jsx)(P, {
        open: !!G,
        onOpenChange: (e) => !e && K(null),
        children: (0, I.jsxs)(j, {
          children: [
            (0, I.jsxs)(k, {
              children: [
                (0, I.jsx)(M, { children: xe() }),
                (0, I.jsx)(N, {
                  className: `font-mono text-xs`,
                  children: G?.subscriptionNo,
                }),
              ],
            }),
            G &&
              (0, I.jsxs)(`div`, {
                className: `space-y-3 py-2 text-sm`,
                children: [
                  (0, I.jsx)(H, {
                    label: o(),
                    children: G.planName || G.productName || `—`,
                  }),
                  (0, I.jsx)(H, {
                    label: s(),
                    children: (0, I.jsx)(D, {
                      variant: z(G.status),
                      children: G.status,
                    }),
                  }),
                  (0, I.jsx)(H, {
                    label: p(),
                    children:
                      G.amount && G.currency
                        ? `${R(G.amount, G.currency)}${G.interval ? ` / ${G.interval}` : ``}`
                        : `—`,
                  }),
                  (0, I.jsx)(H, { label: Te(), children: G.paymentProvider }),
                  (0, I.jsx)(H, {
                    label: y(),
                    children: G.currentPeriodStart
                      ? new Date(G.currentPeriodStart).toLocaleString()
                      : `—`,
                  }),
                  (0, I.jsx)(H, {
                    label: g(),
                    children: G.currentPeriodEnd
                      ? new Date(G.currentPeriodEnd).toLocaleString()
                      : `—`,
                  }),
                  G.canceledAt &&
                    (0, I.jsx)(H, {
                      label: de(),
                      children: new Date(G.canceledAt).toLocaleString(),
                    }),
                  G.canceledEndAt &&
                    (0, I.jsx)(H, {
                      label: _e(),
                      children: new Date(G.canceledEndAt).toLocaleString(),
                    }),
                  G.canceledReason &&
                    (0, I.jsx)(H, { label: ve(), children: G.canceledReason }),
                ],
              }),
            (0, I.jsx)(A, {
              children: (0, I.jsx)(C, {
                variant: `outline`,
                onClick: () => K(null),
                children: fe(),
              }),
            }),
          ],
        }),
      }),
      (0, I.jsx)(P, {
        open: !!q,
        onOpenChange: (e) => !e && J(null),
        children: (0, I.jsxs)(j, {
          children: [
            (0, I.jsxs)(k, {
              children: [
                (0, I.jsx)(M, { children: ge() }),
                (0, I.jsx)(N, {
                  children: he({ plan: q?.planName || q?.productName || `—` }),
                }),
              ],
            }),
            (0, I.jsxs)(A, {
              children: [
                (0, I.jsx)(C, {
                  variant: `outline`,
                  onClick: () => J(null),
                  disabled: $,
                  children: Ce(),
                }),
                (0, I.jsx)(C, {
                  variant: `destructive`,
                  onClick: He,
                  disabled: $,
                  children: $ ? me() : h(),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function H({ label: e, children: t }) {
  return (0, I.jsxs)(`div`, {
    className: `flex items-start gap-3`,
    children: [
      (0, I.jsx)(`span`, {
        className: `text-muted-foreground w-32 shrink-0`,
        children: e,
      }),
      (0, I.jsx)(`span`, { className: `flex-1`, children: t }),
    ],
  });
}
export { V as component };
