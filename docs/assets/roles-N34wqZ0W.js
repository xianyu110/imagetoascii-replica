import { t as x } from './button-bN-wY-Ql.js';
import { t as Ae, n as w } from './card-DUh0Lb3Z.js';
import { t as S } from './checkbox-CGuVyzvU.js';
import { t as ee } from './data-table-DomeXJM7.js';
import {
  t as A,
  n as D,
  i as E,
  s as je,
  r as k,
  o as O,
  a as T,
} from './dialog-cYDOLSAZ.js';
import { t as C } from './form-field-kfwg5atP.js';
import {
  ji as _,
  Wi as _e,
  Ai as a,
  Ci as ae,
  hu as be,
  Ki as c,
  Hi as ce,
  nu as Ce,
  Oi as d,
  Pi as de,
  yi as De,
  xi as Ee,
  Xl as f,
  Ri as fe,
  i as g,
  Vi as ge,
  eu as h,
  Ui as he,
  Bi as ie,
  zi as ke,
  Mi as l,
  Ii as le,
  a as m,
  Ti as me,
  Di as o,
  Fi as oe,
  yu as Oe,
  Yl as p,
  Si as pe,
  $l as re,
  Ei as s,
  Gi as se,
  mu as Se,
  wi as Te,
  Ni as u,
  Li as ue,
  ki as v,
  bi as ve,
  qi as we,
  iu as xe,
  ru as y,
  gi as ye,
} from './index-D7NQvf2G.js';
import { t as i } from './pencil-6y6mLvYc.js';
import { t as te } from './plus-D7QmCLQi.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as ne } from './trash-2-DF_fTQxx.js';
import { t as b } from './useForm--zzFMcDE.js';
import { t as r } from './useMutation-PUxP0Jqz.js';

var Me = p(`key-round`, [
    [
      `path`,
      {
        d: `M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,
        key: `1s6t7t`,
      },
    ],
    [
      `circle`,
      { cx: `16.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `w0ekpg` },
    ],
  ]),
  j = t(n()),
  M = e(),
  N = 10,
  P = g({ name: m().min(1), title: m().min(1), description: m() }),
  F = { name: ``, title: ``, description: `` };
function I() {
  let e = be(),
    [t, n] = (0, j.useState)(1),
    [p, m] = (0, j.useState)(``),
    [g, I] = (0, j.useState)(``),
    [Ne, L] = (0, j.useState)(!1),
    [R, z] = (0, j.useState)(null),
    [B, V] = (0, j.useState)(null),
    [H, U] = (0, j.useState)(null),
    [W, Pe] = (0, j.useState)([]),
    [G, K] = (0, j.useState)(new Set());
  ((0, j.useEffect)(() => {
    let e = setTimeout(() => I(p), 300);
    return () => clearTimeout(e);
  }, [p]),
    (0, j.useEffect)(() => {
      n(1);
    }, [g]));
  let q = Se({
      queryKey: [`admin-roles`, t, g],
      queryFn: () =>
        h(xe(`/api/admin/roles`, { page: t, pageSize: N, search: g })),
      placeholderData: Oe,
    }),
    J = b({
      defaultValues: F,
      validators: { onSubmit: P },
      onSubmit: async ({ value: e }) => {
        await X.mutateAsync(e);
      },
    }),
    Y = b({
      defaultValues: F,
      validators: { onSubmit: P },
      onSubmit: async ({ value: e }) => {
        R && (await Z.mutateAsync({ id: R.id, ...e }));
      },
    }),
    X = r({
      mutationFn: (e) => Ce(`/api/admin/roles`, e),
      onSuccess: () => {
        (f.success(Te()),
          L(!1),
          J.reset(),
          e.invalidateQueries({ queryKey: [`admin-roles`] }));
      },
      onError: (e) => f.error(e.message),
    }),
    Z = r({
      mutationFn: (e) => y(`/api/admin/roles`, e),
      onSuccess: () => {
        (f.success(ae()),
          z(null),
          Y.reset(),
          e.invalidateQueries({ queryKey: [`admin-roles`] }));
      },
      onError: (e) => f.error(e.message),
    }),
    Q = r({
      mutationFn: (e) => re(`/api/admin/roles?id=${e}`),
      onSuccess: () => {
        (f.success(pe()),
          V(null),
          e.invalidateQueries({ queryKey: [`admin-roles`] }));
      },
      onError: (e) => f.error(e.message),
    }),
    $ = r({
      mutationFn: (e) => y(`/api/admin/roles/permissions`, e),
      onSuccess: () => {
        (f.success(De()), U(null));
      },
      onError: (e) => f.error(e.message),
    });
  function Fe(e) {
    (Y.reset({
      name: e.name,
      title: e.title,
      description: e.description || ``,
    }),
      z(e));
  }
  async function Ie(e) {
    U(e);
    let [t, n] = await Promise.all([
      h(`/api/admin/permissions?page=1&pageSize=999`),
      h(`/api/admin/roles/permissions?roleId=${e.id}`),
    ]);
    (Pe(t.items), K(new Set(n.map((e) => e.permissionId))));
  }
  function Le(e) {
    K((t) => {
      let n = new Set(t);
      return (n.has(e) ? n.delete(e) : n.add(e), n);
    });
  }
  function Re() {
    H && $.mutate({ roleId: H.id, permissionIds: [...G] });
  }
  let ze = [
    {
      header: _e(),
      cell: (e) =>
        (0, M.jsx)(`span`, {
          className: `font-mono text-sm`,
          children: e.name,
        }),
    },
    {
      header: he(),
      cell: (e) =>
        (0, M.jsx)(`span`, { className: `font-medium`, children: e.title }),
    },
    {
      header: ce(),
      cell: (e) =>
        (0, M.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: e.description || `—`,
        }),
    },
    {
      header: ge(),
      className: `w-[120px]`,
      cell: (e) =>
        (0, M.jsxs)(`div`, {
          className: `flex gap-1`,
          children: [
            (0, M.jsx)(x, {
              variant: `ghost`,
              size: `icon`,
              className: `size-7`,
              onClick: () => Ie(e),
              children: (0, M.jsx)(Me, { className: `size-3` }),
            }),
            (0, M.jsx)(x, {
              variant: `ghost`,
              size: `icon`,
              className: `size-7`,
              onClick: () => Fe(e),
              children: (0, M.jsx)(i, { className: `size-3` }),
            }),
            (0, M.jsx)(x, {
              variant: `ghost`,
              size: `icon`,
              className: `size-7`,
              onClick: () => V(e),
              children: (0, M.jsx)(ne, { className: `size-3` }),
            }),
          ],
        }),
    },
  ];
  return (0, M.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, M.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, M.jsxs)(`div`, {
            children: [
              (0, M.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: we(),
              }),
              (0, M.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: c(),
              }),
            ],
          }),
          (0, M.jsxs)(A, {
            open: Ne,
            onOpenChange: L,
            children: [
              (0, M.jsxs)(je, {
                className: `bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors`,
                children: [(0, M.jsx)(te, { className: `size-4` }), ie()],
              }),
              (0, M.jsxs)(D, {
                children: [
                  (0, M.jsxs)(T, {
                    children: [
                      (0, M.jsx)(O, { children: ke() }),
                      (0, M.jsx)(k, { children: fe() }),
                    ],
                  }),
                  (0, M.jsxs)(`form`, {
                    onSubmit: (e) => {
                      (e.preventDefault(),
                        e.stopPropagation(),
                        J.handleSubmit());
                    },
                    children: [
                      (0, M.jsxs)(`div`, {
                        className: `space-y-4 py-4`,
                        children: [
                          (0, M.jsx)(J.Field, {
                            name: `name`,
                            children: (e) =>
                              (0, M.jsx)(C, {
                                field: e,
                                label: u(),
                                placeholder: l(),
                              }),
                          }),
                          (0, M.jsx)(J.Field, {
                            name: `title`,
                            children: (e) =>
                              (0, M.jsx)(C, {
                                field: e,
                                label: _(),
                                placeholder: a(),
                              }),
                          }),
                          (0, M.jsx)(J.Field, {
                            name: `description`,
                            children: (e) =>
                              (0, M.jsx)(C, {
                                field: e,
                                label: v(),
                                placeholder: d(),
                              }),
                          }),
                        ],
                      }),
                      (0, M.jsxs)(E, {
                        children: [
                          (0, M.jsx)(x, {
                            type: `button`,
                            variant: `outline`,
                            onClick: () => L(!1),
                            children: s(),
                          }),
                          (0, M.jsx)(x, {
                            type: `submit`,
                            disabled: X.isPending,
                            children: o(),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, M.jsx)(Ae, {
        children: (0, M.jsx)(w, {
          children: (0, M.jsx)(ee, {
            columns: ze,
            data: q.data?.items ?? [],
            total: q.data?.total ?? 0,
            page: t,
            pageSize: N,
            onPageChange: n,
            rowKey: (e) => e.id,
            emptyText: se(),
            search: p,
            onSearchChange: m,
            onRefresh: () => q.refetch(),
            loading: q.isFetching,
          }),
        }),
      }),
      (0, M.jsx)(A, {
        open: !!R,
        onOpenChange: (e) => !e && z(null),
        children: (0, M.jsxs)(D, {
          children: [
            (0, M.jsxs)(T, {
              children: [
                (0, M.jsx)(O, { children: ue() }),
                (0, M.jsx)(k, { children: le() }),
              ],
            }),
            (0, M.jsxs)(`form`, {
              onSubmit: (e) => {
                (e.preventDefault(), e.stopPropagation(), Y.handleSubmit());
              },
              children: [
                (0, M.jsxs)(`div`, {
                  className: `space-y-4 py-4`,
                  children: [
                    (0, M.jsx)(Y.Field, {
                      name: `name`,
                      children: (e) =>
                        (0, M.jsx)(C, {
                          field: e,
                          label: u(),
                          placeholder: l(),
                        }),
                    }),
                    (0, M.jsx)(Y.Field, {
                      name: `title`,
                      children: (e) =>
                        (0, M.jsx)(C, {
                          field: e,
                          label: _(),
                          placeholder: a(),
                        }),
                    }),
                    (0, M.jsx)(Y.Field, {
                      name: `description`,
                      children: (e) =>
                        (0, M.jsx)(C, {
                          field: e,
                          label: v(),
                          placeholder: d(),
                        }),
                    }),
                  ],
                }),
                (0, M.jsxs)(E, {
                  children: [
                    (0, M.jsx)(x, {
                      type: `button`,
                      variant: `outline`,
                      onClick: () => z(null),
                      children: s(),
                    }),
                    (0, M.jsx)(x, {
                      type: `submit`,
                      disabled: Z.isPending,
                      children: o(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, M.jsx)(A, {
        open: !!B,
        onOpenChange: (e) => !e && V(null),
        children: (0, M.jsxs)(D, {
          children: [
            (0, M.jsxs)(T, {
              children: [
                (0, M.jsx)(O, { children: oe() }),
                (0, M.jsx)(k, { children: de() }),
              ],
            }),
            (0, M.jsxs)(E, {
              children: [
                (0, M.jsx)(x, {
                  variant: `outline`,
                  onClick: () => V(null),
                  children: s(),
                }),
                (0, M.jsx)(x, {
                  variant: `destructive`,
                  disabled: Q.isPending,
                  onClick: () => B && Q.mutate(B.id),
                  children: me(),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, M.jsx)(A, {
        open: !!H,
        onOpenChange: (e) => !e && U(null),
        children: (0, M.jsxs)(D, {
          children: [
            (0, M.jsxs)(T, {
              children: [
                (0, M.jsx)(O, { children: Ee() }),
                (0, M.jsx)(k, { children: ve() }),
              ],
            }),
            (0, M.jsxs)(`div`, {
              className: `max-h-64 space-y-3 overflow-y-auto py-4`,
              children: [
                W.map((e) =>
                  (0, M.jsxs)(
                    `label`,
                    {
                      className: `flex cursor-pointer items-center gap-3`,
                      children: [
                        (0, M.jsx)(S, {
                          checked: G.has(e.id),
                          onCheckedChange: () => Le(e.id),
                        }),
                        (0, M.jsxs)(`div`, {
                          children: [
                            (0, M.jsx)(`div`, {
                              className: `text-sm font-medium`,
                              children: e.title,
                            }),
                            (0, M.jsx)(`div`, {
                              className: `text-muted-foreground font-mono text-xs`,
                              children: e.code,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id
                  )
                ),
                W.length === 0 &&
                  (0, M.jsx)(`p`, {
                    className: `text-muted-foreground py-4 text-center text-sm`,
                    children: ye(),
                  }),
              ],
            }),
            (0, M.jsxs)(E, {
              children: [
                (0, M.jsx)(x, {
                  variant: `outline`,
                  onClick: () => U(null),
                  children: s(),
                }),
                (0, M.jsx)(x, {
                  onClick: Re,
                  disabled: $.isPending,
                  children: o(),
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
