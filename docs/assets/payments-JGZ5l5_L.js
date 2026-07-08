import { t as S } from './badge-FgXNX2Cv.js';
import { n as b, t as x } from './card-DUh0Lb3Z.js';
import { t as r } from './data-table-CXkvDdyi.js';
import { t as C } from './dynamic-BD0WR-KR.js';
import {
  qo as _,
  Go as a,
  Qo as c,
  Yl as d,
  Yo as f,
  mu as g,
  eu as h,
  $o as i,
  Wo as l,
  es as m,
  Jo as o,
  Zo as p,
  Ko as s,
  Xo as u,
  yu as v,
} from './index-BFsmjNQq.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as y } from './utils-DXalBF5w.js';

var w = d(`external-link`, [
    [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
    [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
    [
      `path`,
      {
        d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
        key: `a6xqqp`,
      },
    ],
  ]),
  T = t(n()),
  E = e(),
  D = [`all`, `one-time`, `subscription`, `renew`],
  O = 20;
function k(e, t) {
  let n = (t || `usd`).toUpperCase();
  return new Intl.NumberFormat(void 0, {
    style: `currency`,
    currency: n,
  }).format(e / 100);
}
function A(e) {
  let t = e.toLowerCase();
  return t === `paid` || t === `succeeded` || t === `active`
    ? `default`
    : t === `failed` || t === `canceled`
      ? `destructive`
      : `secondary`;
}
function j() {
  let [e, t] = (0, T.useState)(`all`),
    [n, d] = (0, T.useState)(1),
    [j, M] = (0, T.useState)(``),
    [N, P] = (0, T.useState)(``);
  ((0, T.useEffect)(() => {
    let e = setTimeout(() => P(j), 300);
    return () => clearTimeout(e);
  }, [j]),
    (0, T.useEffect)(() => {
      d(1);
    }, [e, N]));
  let F = g({
      queryKey: [`user-payments`, n, e, N],
      queryFn: () => {
        let t = new URLSearchParams({ page: String(n), pageSize: String(O) });
        return (
          e !== `all` && t.set(`paymentType`, e),
          N && t.set(`search`, N),
          h(`/api/user/orders?${t}`)
        );
      },
      placeholderData: v,
    }),
    I = F.data?.items ?? [],
    L = F.data?.total ?? 0,
    R = [
      {
        header: p(),
        cell: (e) =>
          (0, E.jsx)(`span`, {
            className: `font-mono text-xs`,
            children: e.orderNo,
          }),
      },
      {
        header: u(),
        cell: (e) =>
          (0, E.jsx)(`span`, { children: e.planName || e.productName || `—` }),
      },
      {
        header: f(),
        cell: (e) =>
          (0, E.jsx)(`span`, {
            className: `font-medium`,
            children: k(e.amount, e.currency),
          }),
      },
      {
        header: o(),
        cell: (e) =>
          (0, E.jsx)(S, { variant: A(e.status), children: e.status }),
      },
      { header: _(), cell: (e) => e.paymentType || `—` },
      {
        header: s(),
        cell: (e) =>
          (0, E.jsx)(`span`, {
            className: `capitalize`,
            children: e.paymentProvider,
          }),
      },
      {
        header: a(),
        cell: (e) =>
          (0, E.jsx)(`span`, {
            className: `text-muted-foreground text-sm`,
            children: new Date(e.paidAt || e.createdAt).toLocaleDateString(),
          }),
      },
      {
        header: l(),
        className: `w-[60px]`,
        cell: (e) =>
          e.invoiceUrl
            ? (0, E.jsx)(`a`, {
                href: e.invoiceUrl,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `text-primary inline-flex items-center gap-1 text-sm hover:underline`,
                'aria-label': l(),
                children: (0, E.jsx)(w, { className: `size-3.5` }),
              })
            : (0, E.jsx)(`span`, {
                className: `text-muted-foreground`,
                children: `—`,
              }),
      },
    ];
  return (0, E.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, E.jsxs)(`div`, {
        children: [
          (0, E.jsx)(`h1`, { className: `text-2xl font-bold`, children: m() }),
          (0, E.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: i(),
          }),
        ],
      }),
      (0, E.jsx)(`div`, {
        className: `border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b`,
        children: D.map((n) =>
          (0, E.jsx)(
            `button`,
            {
              onClick: () => t(n),
              className: y(
                `-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors`,
                e === n
                  ? `border-primary text-foreground`
                  : `text-muted-foreground hover:text-foreground border-transparent`
              ),
              children: C(`settings.payments.tab_${n.replace(`-`, `_`)}`),
            },
            n
          )
        ),
      }),
      (0, E.jsx)(x, {
        children: (0, E.jsx)(b, {
          children: (0, E.jsx)(r, {
            columns: R,
            data: I,
            total: L,
            page: n,
            pageSize: O,
            onPageChange: d,
            rowKey: (e) => e.id,
            emptyText: c(),
            search: j,
            onSearchChange: M,
            onRefresh: () => F.refetch(),
            loading: F.isFetching,
          }),
        }),
      }),
    ],
  });
}
export { j as component };
