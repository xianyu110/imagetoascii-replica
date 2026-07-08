import { t as M } from './button-bN-wY-Ql.js';
import { n as F, t as I } from './card-DUh0Lb3Z.js';
import { t as ee } from './data-table-DomeXJM7.js';
import {
  o as B,
  t as H,
  a as L,
  i as R,
  r as V,
  n as z,
} from './dialog-cYDOLSAZ.js';
import { t as _e } from './dynamic-CeWkpJqI.js';
import {
  a as _,
  $t as a,
  Jt as ae,
  hu as b,
  Dt as c,
  kt as C,
  Nt as ce,
  Gt as d,
  r as D,
  Qt as de,
  qt as E,
  Kt as f,
  Rt as fe,
  Zt as g,
  Xt as ge,
  Yt as h,
  Wt as he,
  $l as i,
  It as ie,
  zt as k,
  Et as l,
  Ot as le,
  Yl as m,
  Vt as me,
  At as o,
  yu as O,
  Lt as oe,
  Xl as p,
  Ut as pe,
  Ht as re,
  Bt as s,
  jt as S,
  Mt as se,
  nu as T,
  Ft as u,
  Pt as ue,
  en as v,
  mu as w,
  i as x,
  eu as y,
} from './index-D7NQvf2G.js';
import { t as P } from './input-BzjUrduj.js';
import { t as N } from './label-BC74pi7G.js';
import { t as te } from './plus-D7QmCLQi.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as ne } from './trash-2-DF_fTQxx.js';
import { t as A } from './useForm--zzFMcDE.js';
import { t as r } from './useMutation-PUxP0Jqz.js';
import { t as j } from './utils-DXalBF5w.js';

var ve = m(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  U = t(n()),
  W = e(),
  ye = [`all`, `available`, `used`],
  G = 20,
  be = x({
    count: D().min(1),
    maxUses: D().min(1),
    trialDays: D().min(1),
    note: _(),
    expiresAt: _(),
  }),
  xe = { count: `1`, maxUses: `1`, trialDays: `15`, note: ``, expiresAt: `` };
function K() {
  let e = b(),
    [t, n] = (0, U.useState)(1),
    [m, _] = (0, U.useState)(`all`),
    [x, D] = (0, U.useState)(``),
    [K, Se] = (0, U.useState)(``),
    [Ce, q] = (0, U.useState)(!1),
    [J, Y] = (0, U.useState)(null);
  ((0, U.useEffect)(() => {
    let e = setTimeout(() => Se(x), 300);
    return () => clearTimeout(e);
  }, [x]),
    (0, U.useEffect)(() => {
      n(1);
    }, [K, m]));
  let X = w({
      queryKey: [`admin-invite-codes`, t, m, K],
      queryFn: () => {
        let e = new URLSearchParams({ page: String(t), pageSize: String(G) });
        return (
          m !== `all` && e.set(`status`, m),
          K && e.set(`search`, K),
          y(`/api/admin/invite-codes?${e}`)
        );
      },
      placeholderData: O,
    }),
    Z = A({
      defaultValues: xe,
      validators: { onSubmit: be },
      onSubmitInvalid: () => {
        p.error(k());
      },
      onSubmit: async ({ value: e }) => {
        let t = Number(e.count),
          n = Number(e.maxUses),
          r = Number(e.trialDays);
        await Q.mutateAsync({
          count: t > 1 ? t : void 0,
          maxUses: n,
          trialDays: r,
          note: e.note || void 0,
          expiresAt: e.expiresAt ? new Date(e.expiresAt).toISOString() : null,
        });
      },
    }),
    Q = r({
      mutationFn: (e) => T(`/api/admin/invite-codes`, e),
      onSuccess: () => {
        (p.success(E()),
          q(!1),
          Z.reset(),
          n(1),
          e.invalidateQueries({ queryKey: [`admin-invite-codes`] }));
      },
      onError: (e) => p.error(e.message),
    }),
    $ = r({
      mutationFn: (e) => i(`/api/admin/invite-codes?id=${e}`),
      onSuccess: () => {
        (p.success(l()),
          Y(null),
          e.invalidateQueries({ queryKey: [`admin-invite-codes`] }));
      },
      onError: (e) => p.error(e.message),
    });
  function we(e) {
    navigator.clipboard.writeText(e).then(
      () => p.success(o()),
      () => p.error(`Failed`)
    );
  }
  let Te = [
    {
      header: fe(),
      cell: (e) =>
        (0, W.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, W.jsx)(`code`, {
              className: `font-mono text-sm`,
              children: e.code,
            }),
            (0, W.jsx)(M, {
              variant: `ghost`,
              size: `icon`,
              className: `size-6`,
              onClick: () => we(e.code),
              children: (0, W.jsx)(ve, { className: `size-3` }),
            }),
          ],
        }),
    },
    {
      header: oe(),
      className: `w-[120px]`,
      cell: (e) =>
        (0, W.jsxs)(`span`, {
          className: `tabular-nums`,
          children: [e.usedCount, ` / `, e.maxUses],
        }),
    },
    {
      header: ie(),
      className: `w-[100px]`,
      cell: (e) =>
        (0, W.jsx)(`span`, {
          className: `tabular-nums`,
          children: e.trialDays,
        }),
    },
    {
      header: u(),
      cell: (e) =>
        (0, W.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: e.note || `—`,
        }),
    },
    {
      header: ue(),
      cell: (e) =>
        (0, W.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: e.expiresAt
            ? new Date(e.expiresAt).toLocaleDateString()
            : `—`,
        }),
    },
    {
      header: ce(),
      cell: (e) =>
        (0, W.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: new Date(e.createdAt).toLocaleDateString(),
        }),
    },
    {
      header: se(),
      className: `w-[80px]`,
      cell: (e) =>
        (0, W.jsx)(M, {
          variant: `ghost`,
          size: `icon`,
          className: `size-7`,
          onClick: () => Y(e.id),
          children: (0, W.jsx)(ne, { className: `text-destructive size-4` }),
        }),
    },
  ];
  return (0, W.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, W.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [
          (0, W.jsxs)(`div`, {
            children: [
              (0, W.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: v(),
              }),
              (0, W.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: a(),
              }),
            ],
          }),
          (0, W.jsxs)(M, {
            onClick: () => q(!0),
            className: `gap-2`,
            children: [(0, W.jsx)(te, { className: `size-4` }), de()],
          }),
        ],
      }),
      (0, W.jsx)(`div`, {
        className: `border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b`,
        children: ye.map((e) =>
          (0, W.jsx)(
            `button`,
            {
              onClick: () => _(e),
              className: j(
                `-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors`,
                m === e
                  ? `border-primary text-foreground`
                  : `text-muted-foreground hover:text-foreground border-transparent`
              ),
              children: _e(`admin.invite_codes.tab_${e}`),
            },
            e
          )
        ),
      }),
      (0, W.jsx)(I, {
        children: (0, W.jsx)(F, {
          children: (0, W.jsx)(ee, {
            columns: Te,
            data: X.data?.items ?? [],
            total: X.data?.total ?? 0,
            page: t,
            pageSize: G,
            onPageChange: n,
            rowKey: (e) => e.id,
            emptyText: S(),
            search: x,
            onSearchChange: D,
            onRefresh: () => X.refetch(),
            loading: X.isFetching,
          }),
        }),
      }),
      (0, W.jsx)(H, {
        open: Ce,
        onOpenChange: (e) => {
          (q(e), e || Z.reset());
        },
        children: (0, W.jsxs)(z, {
          children: [
            (0, W.jsxs)(L, {
              children: [
                (0, W.jsx)(B, { children: g() }),
                (0, W.jsx)(V, { children: ge() }),
              ],
            }),
            (0, W.jsxs)(`form`, {
              onSubmit: (e) => {
                (e.preventDefault(), e.stopPropagation(), Z.handleSubmit());
              },
              children: [
                (0, W.jsxs)(`div`, {
                  className: `space-y-4 py-2`,
                  children: [
                    (0, W.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, W.jsx)(Z.Field, {
                          name: `count`,
                          children: (e) =>
                            (0, W.jsxs)(`div`, {
                              className: `space-y-1.5`,
                              children: [
                                (0, W.jsx)(N, { children: d() }),
                                (0, W.jsx)(P, {
                                  type: `number`,
                                  min: `1`,
                                  max: `100`,
                                  value: String(e.state.value),
                                  onChange: (t) =>
                                    e.handleChange(t.target.value),
                                  onBlur: e.handleBlur,
                                }),
                              ],
                            }),
                        }),
                        (0, W.jsx)(Z.Field, {
                          name: `maxUses`,
                          children: (e) =>
                            (0, W.jsxs)(`div`, {
                              className: `space-y-1.5`,
                              children: [
                                (0, W.jsx)(N, { children: he() }),
                                (0, W.jsx)(P, {
                                  type: `number`,
                                  min: `1`,
                                  value: String(e.state.value),
                                  onChange: (t) =>
                                    e.handleChange(t.target.value),
                                  onBlur: e.handleBlur,
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                    (0, W.jsx)(Z.Field, {
                      name: `trialDays`,
                      children: (e) =>
                        (0, W.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, W.jsx)(N, { children: pe() }),
                            (0, W.jsx)(P, {
                              type: `number`,
                              min: `1`,
                              value: String(e.state.value),
                              onChange: (t) => e.handleChange(t.target.value),
                              onBlur: e.handleBlur,
                            }),
                          ],
                        }),
                    }),
                    (0, W.jsx)(Z.Field, {
                      name: `expiresAt`,
                      children: (e) =>
                        (0, W.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, W.jsx)(N, { children: re() }),
                            (0, W.jsx)(P, {
                              type: `date`,
                              value: String(e.state.value),
                              onChange: (t) => e.handleChange(t.target.value),
                              onBlur: e.handleBlur,
                            }),
                          ],
                        }),
                    }),
                    (0, W.jsx)(Z.Field, {
                      name: `note`,
                      children: (e) =>
                        (0, W.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, W.jsx)(N, { children: me() }),
                            (0, W.jsx)(P, {
                              value: String(e.state.value),
                              onChange: (t) => e.handleChange(t.target.value),
                              onBlur: e.handleBlur,
                              placeholder: s(),
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
                (0, W.jsxs)(R, {
                  children: [
                    (0, W.jsx)(M, {
                      type: `button`,
                      variant: `outline`,
                      onClick: () => q(!1),
                      children: f(),
                    }),
                    (0, W.jsx)(M, {
                      type: `submit`,
                      disabled: Q.isPending,
                      children: Q.isPending ? ae() : h(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, W.jsx)(H, {
        open: !!J,
        onOpenChange: (e) => !e && Y(null),
        children: (0, W.jsxs)(z, {
          children: [
            (0, W.jsxs)(L, {
              children: [
                (0, W.jsx)(B, { children: C() }),
                (0, W.jsx)(V, { children: le() }),
              ],
            }),
            (0, W.jsxs)(R, {
              children: [
                (0, W.jsx)(M, {
                  variant: `outline`,
                  onClick: () => Y(null),
                  children: f(),
                }),
                (0, W.jsx)(M, {
                  variant: `destructive`,
                  disabled: $.isPending,
                  onClick: () => J && $.mutate(J),
                  children: c(),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { K as component };
