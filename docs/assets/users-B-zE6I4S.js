import { t as De, r as Ee, n as Te } from './avatar-p-eDL2La.js';
import { t as _ } from './button-bN-wY-Ql.js';
import { n as b, t as x } from './card-DUh0Lb3Z.js';
import { t as y } from './checkbox-D3wpB4sg.js';
import { t as i } from './coins-HACsqOr4.js';
import { t as ee } from './data-table-JV2OVW0F.js';
import {
  r as A,
  i as D,
  a as E,
  t as j,
  o as k,
  n as O,
} from './dialog-CfiOugxY.js';
import { n as C, i as S, u as T, t as w } from './dropdown-menu-40nlGN8S.js';
import { t as te } from './ellipsis-BJ2Qcpkl.js';
import {
  na as _e,
  Ei as a,
  Gi as ae,
  ra as be,
  Xl as c,
  da as ce,
  ua as Ce,
  _a as d,
  ga as de,
  aa as f,
  ha as fe,
  nu as g,
  ma as ge,
  mu as h,
  iu as he,
  $l as ie,
  Yi as l,
  ea as le,
  la as m,
  ia as me,
  Qi as o,
  Ji as oe,
  eu as p,
  hu as pe,
  $i as re,
  Xi as s,
  ca as se,
  ta as Se,
  Zi as u,
  fa as ue,
  oa as ve,
  yu as we,
  sa as xe,
  pa as ye,
} from './index-CNkADuMW.js';
import { t as v } from './input-BzjUrduj.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as ne } from './shield-CNyImK4e.js';
import { t as r } from './useMutation-B1ymgNeO.js';

var M = t(n()),
  N = e(),
  P = 10;
function F() {
  let e = pe(),
    [t, n] = (0, M.useState)(1),
    [F, Oe] = (0, M.useState)(``),
    [I, ke] = (0, M.useState)(``),
    [L, R] = (0, M.useState)(null),
    [z, B] = (0, M.useState)(null),
    [V, H] = (0, M.useState)(`grant`),
    [U, W] = (0, M.useState)(``),
    [G, K] = (0, M.useState)(``);
  ((0, M.useEffect)(() => {
    let e = setTimeout(() => ke(F), 300);
    return () => clearTimeout(e);
  }, [F]),
    (0, M.useEffect)(() => {
      n(1);
    }, [I]));
  let q = h({
      queryKey: [`admin-users`, t, I],
      queryFn: () =>
        p(he(`/api/admin/users`, { page: t, pageSize: P, search: I })),
      placeholderData: we,
    }),
    Ae = h({
      queryKey: [`admin-roles-all`],
      queryFn: () => p(`/api/admin/roles?page=1&pageSize=999`),
      enabled: !!L,
    }),
    je = h({
      queryKey: [`user-roles`, L?.id],
      queryFn: () => p(`/api/admin/roles?userId=${L.id}`),
      enabled: !!L,
    }),
    J = Ae.data?.items ?? [],
    Y = new Set((je.data ?? []).map((e) => e.roleId));
  function Me(e) {
    R(e);
  }
  function Ne(e) {
    (B(e), H(`grant`), W(``), K(``));
  }
  let X = r({
    mutationFn: (e) => g(`/api/admin/users/credits`, e),
    onSuccess: (t, n) => {
      (c.success(n.action === `grant` ? l() : oe()),
        B(null),
        e.invalidateQueries({ queryKey: [`admin-users`] }));
    },
    onError: (e) => c.error(e.message),
  });
  function Pe() {
    if (!z) return;
    let e = Number(U);
    if (!Number.isFinite(e) || e <= 0) {
      c.error(s());
      return;
    }
    X.mutate({ userId: z.id, action: V, credits: e, description: G || void 0 });
  }
  let Z = r({
      mutationFn: (e) =>
        g(`/api/admin/roles/assign`, { userId: L.id, roleId: e }),
      onSuccess: () => {
        (c.success(xe()),
          e.invalidateQueries({ queryKey: [`user-roles`, L?.id] }));
      },
      onError: (e) => c.error(e.message),
    }),
    Q = r({
      mutationFn: (e) =>
        ie(`/api/admin/roles/assign?userId=${L.id}&roleId=${e}`),
      onSuccess: () => {
        (c.success(ve()),
          e.invalidateQueries({ queryKey: [`user-roles`, L?.id] }));
      },
      onError: (e) => c.error(e.message),
    }),
    $ = Z.isPending || Q.isPending;
  function Fe(e) {
    !L || $ || (Y.has(e) ? Q.mutate(e) : Z.mutate(e));
  }
  let Ie = [
    {
      header: ge(),
      cell: (e) =>
        (0, N.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            (0, N.jsxs)(De, {
              className: `size-8`,
              children: [
                (0, N.jsx)(Ee, { src: e.image || void 0 }),
                (0, N.jsx)(Te, {
                  className: `text-xs`,
                  children: (e.name || e.email).charAt(0).toUpperCase(),
                }),
              ],
            }),
            (0, N.jsx)(`span`, {
              className: `font-medium`,
              children: e.name || `—`,
            }),
          ],
        }),
    },
    { header: ye(), cell: (e) => e.email },
    {
      header: ue(),
      className: `w-[120px]`,
      cell: (e) =>
        (0, N.jsx)(`span`, {
          className: `font-medium tabular-nums`,
          children: e.credits.toLocaleString(),
        }),
    },
    {
      header: ce(),
      cell: (e) =>
        (0, N.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: new Date(e.createdAt).toLocaleDateString(),
        }),
    },
    {
      header: Ce(),
      className: `w-[80px]`,
      cell: (e) =>
        (0, N.jsxs)(w, {
          children: [
            (0, N.jsx)(T, {
              render: (0, N.jsx)(_, {
                variant: `ghost`,
                size: `icon`,
                className: `size-7`,
                children: (0, N.jsx)(te, { className: `size-4` }),
              }),
            }),
            (0, N.jsxs)(C, {
              align: `end`,
              children: [
                (0, N.jsxs)(S, {
                  onClick: () => Ne(e),
                  children: [(0, N.jsx)(i, { className: `size-4` }), f()],
                }),
                (0, N.jsxs)(S, {
                  onClick: () => Me(e),
                  children: [(0, N.jsx)(ne, { className: `size-4` }), m()],
                }),
              ],
            }),
          ],
        }),
    },
  ];
  return (0, N.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, N.jsxs)(`div`, {
        children: [
          (0, N.jsx)(`h1`, { className: `text-2xl font-bold`, children: d() }),
          (0, N.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: de(),
          }),
        ],
      }),
      (0, N.jsx)(x, {
        children: (0, N.jsx)(b, {
          children: (0, N.jsx)(ee, {
            columns: Ie,
            data: q.data?.items ?? [],
            total: q.data?.total ?? 0,
            page: t,
            pageSize: P,
            onPageChange: n,
            rowKey: (e) => e.id,
            emptyText: fe(),
            search: F,
            onSearchChange: Oe,
            onRefresh: () => q.refetch(),
            loading: q.isFetching,
          }),
        }),
      }),
      (0, N.jsx)(j, {
        open: !!L,
        onOpenChange: (e) => !e && R(null),
        children: (0, N.jsxs)(O, {
          children: [
            (0, N.jsxs)(E, {
              children: [
                (0, N.jsx)(k, { children: m() }),
                (0, N.jsx)(A, { children: se() }),
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `max-h-64 space-y-3 overflow-y-auto py-4`,
              children: [
                J.map((e) =>
                  (0, N.jsxs)(
                    `label`,
                    {
                      className: `flex cursor-pointer items-center gap-3`,
                      children: [
                        (0, N.jsx)(y, {
                          checked: Y.has(e.id),
                          onCheckedChange: () => Fe(e.id),
                          disabled: $,
                        }),
                        (0, N.jsxs)(`div`, {
                          children: [
                            (0, N.jsx)(`div`, {
                              className: `text-sm font-medium`,
                              children: e.title,
                            }),
                            (0, N.jsx)(`div`, {
                              className: `text-muted-foreground font-mono text-xs`,
                              children: e.name,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id
                  )
                ),
                J.length === 0 &&
                  (0, N.jsx)(`p`, {
                    className: `text-muted-foreground py-4 text-center text-sm`,
                    children: ae(),
                  }),
              ],
            }),
            (0, N.jsx)(D, {
              children: (0, N.jsx)(_, {
                variant: `outline`,
                onClick: () => R(null),
                children: a(),
              }),
            }),
          ],
        }),
      }),
      (0, N.jsx)(j, {
        open: !!z,
        onOpenChange: (e) => !e && B(null),
        children: (0, N.jsxs)(O, {
          children: [
            (0, N.jsxs)(E, {
              children: [
                (0, N.jsx)(k, { children: f() }),
                (0, N.jsx)(A, {
                  children: z
                    ? me({
                        name: z.name || z.email,
                        balance: z.credits.toLocaleString(),
                      })
                    : ``,
                }),
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `space-y-4 py-2`,
              children: [
                (0, N.jsxs)(`div`, {
                  className: `grid grid-cols-2 gap-2`,
                  children: [
                    (0, N.jsx)(`button`, {
                      type: `button`,
                      onClick: () => H(`grant`),
                      className: `rounded-md border px-3 py-2 text-sm font-medium transition-colors ${V === `grant` ? `border-foreground bg-foreground text-background` : `border-border hover:bg-muted`}`,
                      children: be(),
                    }),
                    (0, N.jsx)(`button`, {
                      type: `button`,
                      onClick: () => H(`deduct`),
                      className: `rounded-md border px-3 py-2 text-sm font-medium transition-colors ${V === `deduct` ? `border-foreground bg-foreground text-background` : `border-border hover:bg-muted`}`,
                      children: _e(),
                    }),
                  ],
                }),
                (0, N.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, N.jsx)(`label`, {
                      className: `text-sm font-medium`,
                      children: Se(),
                    }),
                    (0, N.jsx)(v, {
                      type: `number`,
                      min: `1`,
                      value: U,
                      onChange: (e) => W(e.target.value),
                      placeholder: `0`,
                    }),
                  ],
                }),
                (0, N.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, N.jsx)(`label`, {
                      className: `text-sm font-medium`,
                      children: le(),
                    }),
                    (0, N.jsx)(v, {
                      value: G,
                      onChange: (e) => K(e.target.value),
                      placeholder: re(),
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsxs)(D, {
              children: [
                (0, N.jsx)(_, {
                  variant: `outline`,
                  onClick: () => B(null),
                  children: a(),
                }),
                (0, N.jsx)(_, {
                  onClick: Pe,
                  disabled: X.isPending,
                  children: X.isPending ? u() : o(),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { F as component };
