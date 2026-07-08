import { t as x } from './badge-FgXNX2Cv.js';
import { t as b, n as y } from './card-DUh0Lb3Z.js';
import { t as r } from './data-table-CXkvDdyi.js';
import { t as S } from './dynamic-BD0WR-KR.js';
import {
  yu as _,
  _n as a,
  fn as c,
  mn as d,
  mu as f,
  yn as g,
  xn as h,
  Sn as i,
  gn as l,
  vn as m,
  bn as o,
  pn as p,
  eu as s,
  hn as u,
} from './index-BFsmjNQq.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as v } from './utils-DXalBF5w.js';

var C = t(n()),
  w = e(),
  T = 10,
  E = [`all`, `month`, `year`];
function D() {
  let [e, t] = (0, C.useState)(1),
    [n, D] = (0, C.useState)(`all`),
    [O, k] = (0, C.useState)(``),
    [A, j] = (0, C.useState)(``);
  ((0, C.useEffect)(() => {
    let e = setTimeout(() => j(O), 300);
    return () => clearTimeout(e);
  }, [O]),
    (0, C.useEffect)(() => {
      t(1);
    }, [n, A]));
  let M = f({
      queryKey: [`admin-subscriptions`, e, n, A],
      queryFn: () => {
        let t = new URLSearchParams({ page: String(e), pageSize: String(T) });
        return (
          n === `month` && t.set(`interval`, `month`),
          n === `year` && t.set(`interval`, `year`),
          A && t.set(`search`, A),
          s(`/api/admin/subscriptions?${t}`)
        );
      },
      placeholderData: _,
    }),
    N = M.data?.items ?? [],
    P = M.data?.total ?? 0;
  function F(e, t) {
    if (e == null) return `—`;
    let n = e / 100;
    return new Intl.NumberFormat(`en-US`, {
      style: `currency`,
      currency: t || `USD`,
    }).format(n);
  }
  function I(e) {
    return e ? new Date(e).toLocaleDateString() : `—`;
  }
  let L = (e) =>
      e === `active` || e === `trialing`
        ? `default`
        : e === `canceled` || e === `expired`
          ? `destructive`
          : `secondary`,
    R = [
      {
        header: g(),
        cell: (e) =>
          (0, w.jsx)(`span`, {
            className: `font-mono text-xs`,
            children: e.subscriptionNo,
          }),
      },
      {
        header: m(),
        cell: (e) =>
          (0, w.jsx)(`span`, {
            className: `text-sm`,
            children: e.userEmail || e.userId,
          }),
      },
      {
        header: a(),
        cell: (e) =>
          (0, w.jsx)(`span`, {
            className: `font-medium`,
            children: F(e.amount, e.currency),
          }),
      },
      { header: l(), cell: (e) => e.interval || `—` },
      {
        header: u(),
        cell: (e) =>
          (0, w.jsx)(x, { variant: L(e.status), children: e.status }),
      },
      { header: d(), cell: (e) => e.paymentProvider },
      {
        header: p(),
        cell: (e) =>
          (0, w.jsxs)(`span`, {
            className: `text-muted-foreground text-sm`,
            children: [I(e.currentPeriodStart), ` ~ `, I(e.currentPeriodEnd)],
          }),
      },
      {
        header: c(),
        cell: (e) =>
          (0, w.jsx)(`span`, {
            className: `text-muted-foreground text-sm`,
            children: new Date(e.createdAt).toLocaleDateString(),
          }),
      },
    ];
  return (0, w.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, w.jsxs)(`div`, {
        children: [
          (0, w.jsx)(`h1`, { className: `text-2xl font-bold`, children: i() }),
          (0, w.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: h(),
          }),
        ],
      }),
      (0, w.jsx)(`div`, {
        className: `border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b`,
        children: E.map((e) =>
          (0, w.jsx)(
            `button`,
            {
              onClick: () => D(e),
              className: v(
                `-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors`,
                n === e
                  ? `border-primary text-foreground`
                  : `text-muted-foreground hover:text-foreground border-transparent`
              ),
              children: S(`admin.subscriptions.tab_${e}`),
            },
            e
          )
        ),
      }),
      (0, w.jsx)(b, {
        children: (0, w.jsx)(y, {
          children: (0, w.jsx)(r, {
            columns: R,
            data: N,
            total: P,
            page: e,
            pageSize: T,
            onPageChange: t,
            rowKey: (e) => e.id,
            emptyText: o(),
            search: O,
            onSearchChange: k,
            onRefresh: () => M.refetch(),
            loading: M.isFetching,
          }),
        }),
      }),
    ],
  });
}
export { D as component };
