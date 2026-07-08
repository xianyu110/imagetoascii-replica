import { t as b, n as y } from './card-DUh0Lb3Z.js';
import { t as r } from './data-table-CXkvDdyi.js';
import { t as x } from './dynamic-BD0WR-KR.js';
import {
  yu as _,
  cn as a,
  in as c,
  nn as d,
  on as f,
  un as g,
  tn as h,
  an as i,
  ln as l,
  sn as m,
  dn as o,
  rn as p,
  eu as s,
  mu as u,
} from './index-BFsmjNQq.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as v } from './utils-DXalBF5w.js';

var S = t(n()),
  C = e(),
  w = 10,
  T = [`all`, `grant`, `consume`];
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
  let j = u({
      queryKey: [`admin-credits`, e, n, k],
      queryFn: () => {
        let t = new URLSearchParams({ page: String(e), pageSize: String(w) });
        return (
          n !== `all` && t.set(`transactionType`, n),
          k && t.set(`search`, k),
          s(`/api/admin/credits?${t}`)
        );
      },
      placeholderData: _,
    }),
    M = j.data?.items ?? [],
    N = j.data?.total ?? 0,
    P = [
      {
        header: a(),
        cell: (e) =>
          (0, C.jsx)(`span`, {
            className: `font-mono text-xs`,
            children: e.transactionNo,
          }),
      },
      {
        header: m(),
        cell: (e) =>
          (0, C.jsx)(`span`, {
            className: `text-sm`,
            children: e.userEmail || e.userId,
          }),
      },
      {
        header: f(),
        cell: (e) =>
          (0, C.jsx)(`span`, {
            className: v(
              `font-medium`,
              e.credits > 0 ? `text-green-600` : `text-red-500`
            ),
            children: e.credits > 0 ? `+${e.credits}` : e.credits,
          }),
      },
      { header: i(), cell: (e) => e.remainingCredits },
      { header: c(), cell: (e) => e.transactionType },
      { header: p(), cell: (e) => e.transactionScene || `—` },
      {
        header: g(),
        cell: (e) =>
          (0, C.jsx)(`span`, {
            className: `text-muted-foreground block max-w-[200px] truncate text-sm`,
            children: e.description || `—`,
          }),
      },
      {
        header: d(),
        cell: (e) =>
          (0, C.jsx)(`span`, {
            className: `text-muted-foreground text-sm`,
            children: e.expiresAt
              ? new Date(e.expiresAt).toLocaleDateString()
              : `—`,
          }),
      },
      {
        header: h(),
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
          (0, C.jsx)(`h1`, { className: `text-2xl font-bold`, children: o() }),
          (0, C.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: g(),
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
              className: v(
                `-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors`,
                n === e
                  ? `border-primary text-foreground`
                  : `text-muted-foreground hover:text-foreground border-transparent`
              ),
              children: x(`admin.credits.tab_${e}`),
            },
            e
          )
        ),
      }),
      (0, C.jsx)(b, {
        children: (0, C.jsx)(y, {
          children: (0, C.jsx)(r, {
            columns: P,
            data: M,
            total: N,
            page: e,
            pageSize: w,
            onPageChange: t,
            rowKey: (e) => e.id,
            emptyText: l(),
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
