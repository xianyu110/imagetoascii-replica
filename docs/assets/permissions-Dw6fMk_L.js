import { t as x } from './button-bN-wY-Ql.js';
import { t as T, n as w } from './card-DUh0Lb3Z.js';
import { t as i } from './data-table-DomeXJM7.js';
import {
  r as A,
  i as D,
  a as E,
  t as j,
  o as k,
  n as O,
  s as Te,
} from './dialog-cYDOLSAZ.js';
import {
  ti as _,
  mi as _e,
  _i as ae,
  yu as b,
  nu as be,
  Gr as c,
  di as ce,
  qr as Ce,
  Ql as d,
  fi as de,
  Qr as f,
  gi as fe,
  si as g,
  li as ge,
  ru as h,
  ii as he,
  Zr as ie,
  Jr as l,
  ei as le,
  Yr as m,
  hu as me,
  Wr as ne,
  $l as o,
  ai as oe,
  Xl as p,
  hi as pe,
  Xr as re,
  $r as s,
  ci as se,
  pi as Se,
  Kr as u,
  eu as ue,
  ui as v,
  mu as ve,
  ri as we,
  oi as xe,
  vi as y,
  ni as ye,
} from './index-D7NQvf2G.js';
import { t as C } from './input-BzjUrduj.js';
import { t as S } from './label-BC74pi7G.js';
import { t as a } from './pencil-6y6mLvYc.js';
import { t as ee } from './plus-D7QmCLQi.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as te } from './trash-2-DF_fTQxx.js';
import { t as r } from './useMutation-PUxP0Jqz.js';

var M = t(n()),
  N = e(),
  P = 10,
  F = { code: ``, resource: ``, action: ``, title: `` };
function I() {
  let e = me(),
    [t, n] = (0, M.useState)(1),
    [I, Ee] = (0, M.useState)(``),
    [L, De] = (0, M.useState)(``),
    [Oe, R] = (0, M.useState)(!1),
    [z, B] = (0, M.useState)(F),
    [V, H] = (0, M.useState)(null),
    [U, W] = (0, M.useState)(F),
    [G, K] = (0, M.useState)(null);
  ((0, M.useEffect)(() => {
    let e = setTimeout(() => De(I), 300);
    return () => clearTimeout(e);
  }, [I]),
    (0, M.useEffect)(() => {
      n(1);
    }, [L]));
  let q = ve({
      queryKey: [`admin-permissions`, t, L],
      queryFn: () => {
        let e = new URLSearchParams({ page: String(t), pageSize: String(P) });
        return (L && e.set(`search`, L), ue(`/api/admin/permissions?${e}`));
      },
      placeholderData: b,
    }),
    ke = q.data?.items ?? [],
    Ae = q.data?.total ?? 0,
    J = () => e.invalidateQueries({ queryKey: [`admin-permissions`] }),
    Y = r({
      mutationFn: (e) => be(`/api/admin/permissions`, e),
      onSuccess: () => {
        (p.success(u()), R(!1), B(F), J());
      },
      onError: (e) => {
        p.error(e instanceof d ? e.message : `Failed`);
      },
    }),
    X = r({
      mutationFn: (e) => h(`/api/admin/permissions`, e),
      onSuccess: () => {
        (p.success(c()), H(null), J());
      },
      onError: (e) => {
        p.error(e instanceof d ? e.message : `Failed`);
      },
    }),
    je = r({
      mutationFn: (e) => o(`/api/admin/permissions?id=${e}`),
      onSuccess: () => {
        (p.success(ne()), K(null), J());
      },
      onError: (e) => {
        p.error(e instanceof d ? e.message : `Failed`);
      },
    }),
    Z = Y.isPending || X.isPending;
  function Q() {
    !z.code.trim() ||
      !z.resource.trim() ||
      !z.action.trim() ||
      !z.title.trim() ||
      Y.mutate(z);
  }
  function Me(e) {
    (W({
      code: e.code,
      resource: e.resource,
      action: e.action,
      title: e.title,
    }),
      H(e));
  }
  function Ne() {
    !V || !U.code.trim() || !U.title.trim() || X.mutate({ id: V.id, ...U });
  }
  function Pe() {
    G && je.mutate(G.id);
  }
  let Fe = [
    {
      header: pe(),
      cell: (e) =>
        (0, N.jsx)(`span`, {
          className: `font-mono text-sm`,
          children: e.code,
        }),
    },
    {
      header: _e(),
      cell: (e) =>
        (0, N.jsx)(`span`, { className: `font-medium`, children: e.resource }),
    },
    { header: Se(), cell: (e) => e.action },
    {
      header: de(),
      cell: (e) =>
        (0, N.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: e.title,
        }),
    },
    {
      header: ce(),
      className: `w-[80px]`,
      cell: (e) =>
        (0, N.jsxs)(`div`, {
          className: `flex gap-1`,
          children: [
            (0, N.jsx)(x, {
              variant: `ghost`,
              size: `icon`,
              className: `size-7`,
              onClick: () => Me(e),
              children: (0, N.jsx)(a, { className: `size-3` }),
            }),
            (0, N.jsx)(x, {
              variant: `ghost`,
              size: `icon`,
              className: `size-7`,
              onClick: () => K(e),
              children: (0, N.jsx)(te, { className: `size-3` }),
            }),
          ],
        }),
    },
  ];
  function $(e, t) {
    return (0, N.jsxs)(`div`, {
      className: `space-y-4 py-4`,
      children: [
        (0, N.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, N.jsx)(S, { children: we() }),
            (0, N.jsx)(C, {
              value: e.code,
              onChange: (n) => t({ ...e, code: n.target.value }),
              placeholder: ye(),
            }),
          ],
        }),
        (0, N.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, N.jsx)(S, { children: _() }),
            (0, N.jsx)(C, {
              value: e.resource,
              onChange: (n) => t({ ...e, resource: n.target.value }),
              placeholder: le(),
            }),
          ],
        }),
        (0, N.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, N.jsx)(S, { children: s() }),
            (0, N.jsx)(C, {
              value: e.action,
              onChange: (n) => t({ ...e, action: n.target.value }),
              placeholder: f(),
            }),
          ],
        }),
        (0, N.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, N.jsx)(S, { children: ie() }),
            (0, N.jsx)(C, {
              value: e.title,
              onChange: (n) => t({ ...e, title: n.target.value }),
              placeholder: re(),
            }),
          ],
        }),
      ],
    });
  }
  return (0, N.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, N.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, N.jsxs)(`div`, {
            children: [
              (0, N.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: y(),
              }),
              (0, N.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: ae(),
              }),
            ],
          }),
          (0, N.jsxs)(j, {
            open: Oe,
            onOpenChange: R,
            children: [
              (0, N.jsxs)(Te, {
                className: `bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors`,
                children: [(0, N.jsx)(ee, { className: `size-4` }), v()],
              }),
              (0, N.jsxs)(O, {
                children: [
                  (0, N.jsxs)(E, {
                    children: [
                      (0, N.jsx)(k, { children: ge() }),
                      (0, N.jsx)(A, { children: se() }),
                    ],
                  }),
                  $(z, B),
                  (0, N.jsxs)(D, {
                    children: [
                      (0, N.jsx)(x, {
                        variant: `outline`,
                        onClick: () => R(!1),
                        children: l(),
                      }),
                      (0, N.jsx)(x, { onClick: Q, disabled: Z, children: m() }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, N.jsx)(T, {
        children: (0, N.jsx)(w, {
          children: (0, N.jsx)(i, {
            columns: Fe,
            data: ke,
            total: Ae,
            page: t,
            pageSize: P,
            onPageChange: n,
            rowKey: (e) => e.id,
            emptyText: fe(),
            search: I,
            onSearchChange: Ee,
            onRefresh: () => q.refetch(),
            loading: q.isFetching,
          }),
        }),
      }),
      (0, N.jsx)(j, {
        open: !!V,
        onOpenChange: (e) => !e && H(null),
        children: (0, N.jsxs)(O, {
          children: [
            (0, N.jsxs)(E, {
              children: [
                (0, N.jsx)(k, { children: g() }),
                (0, N.jsx)(A, { children: xe() }),
              ],
            }),
            $(U, W),
            (0, N.jsxs)(D, {
              children: [
                (0, N.jsx)(x, {
                  variant: `outline`,
                  onClick: () => H(null),
                  children: l(),
                }),
                (0, N.jsx)(x, { onClick: Ne, disabled: Z, children: m() }),
              ],
            }),
          ],
        }),
      }),
      (0, N.jsx)(j, {
        open: !!G,
        onOpenChange: (e) => !e && K(null),
        children: (0, N.jsxs)(O, {
          children: [
            (0, N.jsxs)(E, {
              children: [
                (0, N.jsx)(k, { children: oe() }),
                (0, N.jsx)(A, { children: he() }),
              ],
            }),
            (0, N.jsxs)(D, {
              children: [
                (0, N.jsx)(x, {
                  variant: `outline`,
                  onClick: () => K(null),
                  children: l(),
                }),
                (0, N.jsx)(x, {
                  variant: `destructive`,
                  onClick: Pe,
                  children: Ce(),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { I as component };
