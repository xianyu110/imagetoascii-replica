import { t as b } from './badge-FgXNX2Cv.js';
import { n as v, t as y } from './card-DUh0Lb3Z.js';
import { t as r } from './data-table-JV2OVW0F.js';
import { t as x } from './dynamic-BogkA4sc.js';
import {
  Cn as a,
  Mn as c,
  eu as d,
  jn as f,
  yu as g,
  wn as h,
  An as i,
  On as l,
  mu as m,
  Dn as o,
  kn as p,
  En as s,
  Tn as u,
} from './index-CNkADuMW.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as _ } from './utils-DXalBF5w.js';

var S = t(n()),
  C = e(),
  w = 10,
  T = [`all`, `subscription`, `one_time`];
function E() {
  let [e, t] = (0, S.useState)(1),
    [n, E] = (0, S.useState)(`all`),
    [D, O] = (0, S.useState)(``),
    [k, A] = (0, S.useState)(``);
  ((0, S.useEffect)(() => {
    let e = setTimeout(() => A(D), 300);
    return () => clearTimeout(e);
  }, [D]),
    (0, S.useEffect)(() => {
      t(1);
    }, [n, k]));
  let j = m({
      queryKey: [`admin-payments`, e, n, k],
      queryFn: () => {
        let t = new URLSearchParams({ page: String(e), pageSize: String(w) });
        return (
          n === `subscription` && t.set(`paymentType`, `subscription`),
          n === `one_time` && t.set(`paymentType`, `one_time`),
          k && t.set(`search`, k),
          d(`/api/admin/orders?${t}`)
        );
      },
      placeholderData: g,
    }),
    M = j.data?.items ?? [],
    N = j.data?.total ?? 0;
  function P(e, t) {
    let n = e / 100;
    return new Intl.NumberFormat(`en-US`, {
      style: `currency`,
      currency: t || `USD`,
    }).format(n);
  }
  let F = (e) =>
      e === `paid` ? `default` : e === `failed` ? `destructive` : `secondary`,
    I = [
      {
        header: p(),
        cell: (e) =>
          (0, C.jsx)(`span`, {
            className: `font-mono text-xs`,
            children: e.orderNo,
          }),
      },
      {
        header: l(),
        cell: (e) =>
          (0, C.jsx)(`span`, {
            className: `text-sm`,
            children: e.userEmail || e.userId,
          }),
      },
      {
        header: o(),
        cell: (e) =>
          (0, C.jsx)(`span`, {
            className: `font-medium`,
            children: P(e.amount, e.currency),
          }),
      },
      {
        header: s(),
        cell: (e) =>
          (0, C.jsx)(b, { variant: F(e.status), children: e.status }),
      },
      { header: u(), cell: (e) => e.paymentType || `—` },
      { header: h(), cell: (e) => e.paymentProvider },
      {
        header: a(),
        cell: (e) =>
          (0, C.jsx)(`span`, {
            className: `text-muted-foreground text-sm`,
            children: new Date(e.createdAt).toLocaleDateString(),
          }),
      },
    ];
  return (0, C.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, C.jsxs)(`div`, {
        children: [
          (0, C.jsx)(`h1`, { className: `text-2xl font-bold`, children: c() }),
          (0, C.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: f(),
          }),
        ],
      }),
      (0, C.jsx)(`div`, {
        className: `border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b`,
        children: T.map((e) =>
          (0, C.jsx)(
            `button`,
            {
              onClick: () => E(e),
              className: _(
                `-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors`,
                n === e
                  ? `border-primary text-foreground`
                  : `text-muted-foreground hover:text-foreground border-transparent`
              ),
              children: x(`admin.payments.tab_${e}`),
            },
            e
          )
        ),
      }),
      (0, C.jsx)(y, {
        children: (0, C.jsx)(v, {
          children: (0, C.jsx)(r, {
            columns: I,
            data: M,
            total: N,
            page: e,
            pageSize: w,
            onPageChange: t,
            rowKey: (e) => e.id,
            emptyText: i(),
            search: D,
            onSearchChange: O,
            onRefresh: () => j.refetch(),
            loading: j.isFetching,
          }),
        }),
      }),
    ],
  });
}
export { E as component };
