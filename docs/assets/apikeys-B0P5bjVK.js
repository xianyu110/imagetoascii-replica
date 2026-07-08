import { t as A } from './button-bN-wY-Ql.js';
import { n as N, t as P } from './card-DUh0Lb3Z.js';
import { t as i } from './data-table-JV2OVW0F.js';
import {
  t as B,
  i as F,
  n as I,
  o as L,
  a as ne,
  r as R,
  s as z,
} from './dialog-CfiOugxY.js';
import {
  go as _,
  iu as b,
  Co as c,
  mu as C,
  Oo as d,
  xo as D,
  wo as E,
  $l as ee,
  So as f,
  eu as g,
  _o as h,
  yu as k,
  Do as l,
  Xl as m,
  yo as O,
  To as p,
  Ao as s,
  mo as S,
  vo as T,
  bo as te,
  Eo as u,
  ho as v,
  nu as w,
  ko as x,
  hu as y,
} from './index-CNkADuMW.js';
import { t as M } from './input-BzjUrduj.js';
import { t as j } from './label-BC74pi7G.js';
import { t as a } from './plus-Cj2WBfjX.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as o } from './trash-2-DeVFn-41.js';
import { t as r } from './useMutation-B1ymgNeO.js';

var V = t(n()),
  H = e(),
  U = 10;
function W() {
  let e = y(),
    [t, n] = (0, V.useState)(1),
    [W, G] = (0, V.useState)(``),
    [K, q] = (0, V.useState)(``),
    [J, Y] = (0, V.useState)(``),
    [X, Z] = (0, V.useState)(!1);
  ((0, V.useEffect)(() => {
    let e = setTimeout(() => q(W), 300);
    return () => clearTimeout(e);
  }, [W]),
    (0, V.useEffect)(() => {
      n(1);
    }, [K]));
  let Q = C({
      queryKey: [`apikeys`, t, K],
      queryFn: () => g(b(`/api/apikeys`, { page: t, pageSize: U, search: K })),
      placeholderData: k,
    }),
    $ = r({
      mutationFn: (e) => w(`/api/apikeys`, { title: e }),
      onSuccess: async (t) => {
        (m.success(te()),
          await navigator.clipboard.writeText(t.key),
          m.info(O()),
          Z(!1),
          Y(``),
          e.invalidateQueries({ queryKey: [`apikeys`] }));
      },
      onError: (e) => m.error(e.message),
    }),
    re = r({
      mutationFn: (e) => ee(`/api/apikeys?id=${e}`),
      onSuccess: () => {
        (m.success(T()), e.invalidateQueries({ queryKey: [`apikeys`] }));
      },
      onError: (e) => m.error(e.message),
    });
  function ie() {
    J.trim() && $.mutate(J);
  }
  let ae = [
    {
      header: _(),
      cell: (e) =>
        (0, H.jsx)(`span`, { className: `font-medium`, children: e.title }),
    },
    {
      header: v(),
      cell: (e) =>
        (0, H.jsxs)(`span`, {
          className: `font-mono text-xs`,
          children: [e.keyPrefix, `…`],
        }),
    },
    {
      header: S(),
      className: `w-[100px]`,
      cell: (e) =>
        (0, H.jsx)(`div`, {
          className: `flex gap-1`,
          children: (0, H.jsx)(A, {
            variant: `ghost`,
            size: `icon`,
            className: `size-7`,
            onClick: () => re.mutate(e.id),
            children: (0, H.jsx)(o, { className: `size-3` }),
          }),
        }),
    },
  ];
  return (0, H.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, H.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, H.jsxs)(`div`, {
            children: [
              (0, H.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: s(),
              }),
              (0, H.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: x(),
              }),
            ],
          }),
          (0, H.jsxs)(B, {
            open: X,
            onOpenChange: Z,
            children: [
              (0, H.jsxs)(z, {
                className: `bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors`,
                children: [(0, H.jsx)(a, { className: `size-4` }), d()],
              }),
              (0, H.jsxs)(I, {
                children: [
                  (0, H.jsxs)(ne, {
                    children: [
                      (0, H.jsx)(L, { children: l() }),
                      (0, H.jsx)(R, { children: u() }),
                    ],
                  }),
                  (0, H.jsxs)(`div`, {
                    className: `space-y-2 py-4`,
                    children: [
                      (0, H.jsx)(j, { htmlFor: `key-name`, children: p() }),
                      (0, H.jsx)(M, {
                        id: `key-name`,
                        value: J,
                        onChange: (e) => Y(e.target.value),
                        placeholder: E(),
                      }),
                    ],
                  }),
                  (0, H.jsxs)(F, {
                    children: [
                      (0, H.jsx)(A, {
                        variant: `outline`,
                        onClick: () => Z(!1),
                        children: c(),
                      }),
                      (0, H.jsx)(A, {
                        onClick: ie,
                        disabled: $.isPending,
                        children: $.isPending ? D() : f(),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, H.jsx)(P, {
        children: (0, H.jsx)(N, {
          children: (0, H.jsx)(i, {
            columns: ae,
            data: Q.data?.items ?? [],
            total: Q.data?.total ?? 0,
            page: t,
            pageSize: U,
            onPageChange: n,
            rowKey: (e) => e.id,
            emptyText: h(),
            search: W,
            onSearchChange: G,
            onRefresh: () => Q.refetch(),
            loading: Q.isFetching,
          }),
        }),
      }),
    ],
  });
}
export { W as component };
