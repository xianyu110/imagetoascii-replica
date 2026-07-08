import { t as A } from './badge-FgXNX2Cv.js';
import { t as E } from './button-bN-wY-Ql.js';
import { t as k, n as O } from './card-DUh0Lb3Z.js';
import { t as ee } from './data-table-DomeXJM7.js';
import {
  r as F,
  t as I,
  a as j,
  i as M,
  n as N,
  o as P,
  s as Se,
} from './dialog-cYDOLSAZ.js';
import { t as D } from './form-field-kfwg5atP.js';
import {
  a as _,
  kr as _e,
  Dr as a,
  Ar as ae,
  wr as b,
  ru as be,
  Hr as c,
  yu as C,
  Rr as ce,
  Mr as d,
  _r as de,
  Nr as f,
  eu as fe,
  Xl as g,
  jr as ge,
  Tr as h,
  iu as he,
  Cr as i,
  $l as ie,
  Ir as l,
  Ur as le,
  Sr as m,
  hu as me,
  Er as o,
  Br as oe,
  Or as p,
  gr as pe,
  Fr as s,
  yr as S,
  Pr as se,
  Lr as u,
  Vr as ue,
  br as v,
  mu as ve,
  zr as w,
  xr as x,
  vr as xe,
  i as y,
  nu as ye,
} from './index-D7NQvf2G.js';
import { t as te } from './pencil-6y6mLvYc.js';
import { t as ne } from './plus-D7QmCLQi.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as re } from './trash-2-DF_fTQxx.js';
import { t as T } from './useForm--zzFMcDE.js';
import { t as r } from './useMutation-PUxP0Jqz.js';

var L = t(n()),
  R = e(),
  z = 10,
  B = y({ slug: _().min(1), title: _().min(1), description: _() }),
  V = { slug: ``, title: ``, description: `` };
function H() {
  let e = me(),
    [t, n] = (0, L.useState)(1),
    [_, y] = (0, L.useState)(``),
    [H, Ce] = (0, L.useState)(``),
    [we, U] = (0, L.useState)(!1),
    [W, G] = (0, L.useState)(null),
    [K, q] = (0, L.useState)(null);
  ((0, L.useEffect)(() => {
    let e = setTimeout(() => Ce(_), 300);
    return () => clearTimeout(e);
  }, [_]),
    (0, L.useEffect)(() => {
      n(1);
    }, [H]));
  let J = ve({
      queryKey: [`admin-categories`, t, H],
      queryFn: () =>
        fe(he(`/api/admin/categories`, { page: t, pageSize: z, search: H })),
      placeholderData: C,
    }),
    Y = T({
      defaultValues: V,
      validators: { onSubmit: B },
      onSubmit: async ({ value: e }) => {
        await Z.mutateAsync(e);
      },
    }),
    X = T({
      defaultValues: V,
      validators: { onSubmit: B },
      onSubmit: async ({ value: e }) => {
        W && (await Q.mutateAsync({ id: W.id, ...e }));
      },
    });
  function Te(e) {
    (X.reset({
      slug: e.slug,
      title: e.title,
      description: e.description || ``,
    }),
      G(e));
  }
  let Z = r({
      mutationFn: (e) => ye(`/api/admin/categories`, e),
      onSuccess: () => {
        (g.success(xe()),
          U(!1),
          Y.reset(),
          e.invalidateQueries({ queryKey: [`admin-categories`] }));
      },
      onError: (e) => g.error(e.message),
    }),
    Q = r({
      mutationFn: (e) => be(`/api/admin/categories`, e),
      onSuccess: () => {
        (g.success(de()),
          G(null),
          X.reset(),
          e.invalidateQueries({ queryKey: [`admin-categories`] }));
      },
      onError: (e) => g.error(e.message),
    }),
    $ = r({
      mutationFn: (e) => ie(`/api/admin/categories?id=${e}`),
      onSuccess: () => {
        (g.success(pe()),
          q(null),
          e.invalidateQueries({ queryKey: [`admin-categories`] }));
      },
      onError: (e) => g.error(e.message),
    }),
    Ee = [
      {
        header: oe(),
        cell: (e) =>
          (0, R.jsx)(`span`, {
            className: `font-mono text-sm`,
            children: e.slug,
          }),
      },
      {
        header: w(),
        cell: (e) =>
          (0, R.jsx)(`span`, { className: `font-medium`, children: e.title }),
      },
      {
        header: ce(),
        cell: (e) =>
          (0, R.jsx)(`span`, {
            className: `text-muted-foreground block max-w-[200px] truncate text-sm`,
            children: e.description || `—`,
          }),
      },
      {
        header: u(),
        cell: (e) =>
          (0, R.jsx)(A, {
            variant: e.status === `published` ? `default` : `secondary`,
            children: e.status,
          }),
      },
      {
        header: l(),
        cell: (e) =>
          (0, R.jsx)(`span`, {
            className: `text-muted-foreground text-sm`,
            children: new Date(e.createdAt).toLocaleDateString(),
          }),
      },
      {
        header: s(),
        className: `w-[80px]`,
        cell: (e) =>
          (0, R.jsxs)(`div`, {
            className: `flex gap-1`,
            children: [
              (0, R.jsx)(E, {
                variant: `ghost`,
                size: `icon`,
                className: `size-7`,
                onClick: () => Te(e),
                children: (0, R.jsx)(te, { className: `size-3` }),
              }),
              (0, R.jsx)(E, {
                variant: `ghost`,
                size: `icon`,
                className: `size-7`,
                onClick: () => q(e),
                children: (0, R.jsx)(re, { className: `size-3` }),
              }),
            ],
          }),
      },
    ];
  return (0, R.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: le(),
              }),
              (0, R.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: c(),
              }),
            ],
          }),
          (0, R.jsxs)(I, {
            open: we,
            onOpenChange: U,
            children: [
              (0, R.jsxs)(Se, {
                className: `bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors`,
                children: [(0, R.jsx)(ne, { className: `size-4` }), se()],
              }),
              (0, R.jsxs)(N, {
                children: [
                  (0, R.jsxs)(j, {
                    children: [
                      (0, R.jsx)(P, { children: f() }),
                      (0, R.jsx)(F, { children: d() }),
                    ],
                  }),
                  (0, R.jsxs)(`form`, {
                    onSubmit: (e) => {
                      (e.preventDefault(),
                        e.stopPropagation(),
                        Y.handleSubmit());
                    },
                    children: [
                      (0, R.jsxs)(`div`, {
                        className: `space-y-4 py-4`,
                        children: [
                          (0, R.jsx)(Y.Field, {
                            name: `slug`,
                            children: (e) =>
                              (0, R.jsx)(D, {
                                field: e,
                                label: a(),
                                placeholder: o(),
                              }),
                          }),
                          (0, R.jsx)(Y.Field, {
                            name: `title`,
                            children: (e) =>
                              (0, R.jsx)(D, {
                                field: e,
                                label: h(),
                                placeholder: b(),
                              }),
                          }),
                          (0, R.jsx)(Y.Field, {
                            name: `description`,
                            children: (e) =>
                              (0, R.jsx)(D, {
                                field: e,
                                label: i(),
                                placeholder: m(),
                              }),
                          }),
                        ],
                      }),
                      (0, R.jsxs)(M, {
                        children: [
                          (0, R.jsx)(E, {
                            type: `button`,
                            variant: `outline`,
                            onClick: () => U(!1),
                            children: v(),
                          }),
                          (0, R.jsx)(E, {
                            type: `submit`,
                            disabled: Z.isPending,
                            children: x(),
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
      (0, R.jsx)(k, {
        children: (0, R.jsx)(O, {
          children: (0, R.jsx)(ee, {
            columns: Ee,
            data: J.data?.items ?? [],
            total: J.data?.total ?? 0,
            page: t,
            pageSize: z,
            onPageChange: n,
            rowKey: (e) => e.id,
            emptyText: ue(),
            search: _,
            onSearchChange: y,
            onRefresh: () => J.refetch(),
            loading: J.isFetching,
          }),
        }),
      }),
      (0, R.jsx)(I, {
        open: !!W,
        onOpenChange: (e) => !e && G(null),
        children: (0, R.jsxs)(N, {
          children: [
            (0, R.jsxs)(j, {
              children: [
                (0, R.jsx)(P, { children: ge() }),
                (0, R.jsx)(F, { children: ae() }),
              ],
            }),
            (0, R.jsxs)(`form`, {
              onSubmit: (e) => {
                (e.preventDefault(), e.stopPropagation(), X.handleSubmit());
              },
              children: [
                (0, R.jsxs)(`div`, {
                  className: `space-y-4 py-4`,
                  children: [
                    (0, R.jsx)(X.Field, {
                      name: `slug`,
                      children: (e) =>
                        (0, R.jsx)(D, {
                          field: e,
                          label: a(),
                          placeholder: o(),
                        }),
                    }),
                    (0, R.jsx)(X.Field, {
                      name: `title`,
                      children: (e) =>
                        (0, R.jsx)(D, {
                          field: e,
                          label: h(),
                          placeholder: b(),
                        }),
                    }),
                    (0, R.jsx)(X.Field, {
                      name: `description`,
                      children: (e) =>
                        (0, R.jsx)(D, {
                          field: e,
                          label: i(),
                          placeholder: m(),
                        }),
                    }),
                  ],
                }),
                (0, R.jsxs)(M, {
                  children: [
                    (0, R.jsx)(E, {
                      type: `button`,
                      variant: `outline`,
                      onClick: () => G(null),
                      children: v(),
                    }),
                    (0, R.jsx)(E, {
                      type: `submit`,
                      disabled: Q.isPending,
                      children: x(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, R.jsx)(I, {
        open: !!K,
        onOpenChange: (e) => !e && q(null),
        children: (0, R.jsxs)(N, {
          children: [
            (0, R.jsxs)(j, {
              children: [
                (0, R.jsx)(P, { children: _e() }),
                (0, R.jsx)(F, { children: p() }),
              ],
            }),
            (0, R.jsxs)(M, {
              children: [
                (0, R.jsx)(E, {
                  variant: `outline`,
                  onClick: () => q(null),
                  children: v(),
                }),
                (0, R.jsx)(E, {
                  variant: `destructive`,
                  disabled: $.isPending,
                  onClick: () => K && $.mutate(K.id),
                  children: S(),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { H as component };
