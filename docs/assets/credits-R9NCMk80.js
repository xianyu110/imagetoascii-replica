import { t as O } from './badge-FgXNX2Cv.js';
import { n as C } from './button-bN-wY-Ql.js';
import { t as D, o as E, n as T, a as w } from './card-DUh0Lb3Z.js';
import { t as a } from './coins-CHbMK9x_.js';
import { t as i } from './data-table-CXkvDdyi.js';
import { t as k } from './dynamic-BD0WR-KR.js';
import {
  eu as _,
  yu as b,
  Ho as c,
  Mo as d,
  No as f,
  Vo as g,
  Uo as h,
  Io as l,
  Ro as m,
  Bo as o,
  Po as p,
  Fo as s,
  Lo as u,
  jo as v,
  zo as x,
  mu as y,
} from './index-BFsmjNQq.js';
import { t as r } from './navigation-Cl4u6_fq.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as S } from './utils-DXalBF5w.js';

var A = t(n()),
  j = e(),
  M = [`all`, `grant`, `consume`],
  N = 20;
function P() {
  let [e, t] = (0, A.useState)(`all`),
    [n, P] = (0, A.useState)(1),
    [F, I] = (0, A.useState)(``),
    [L, R] = (0, A.useState)(``);
  ((0, A.useEffect)(() => {
    let e = setTimeout(() => R(F), 300);
    return () => clearTimeout(e);
  }, [F]),
    (0, A.useEffect)(() => {
      P(1);
    }, [e, L]));
  let z = y({
      queryKey: [`user-credits`, `balance`],
      queryFn: () => _(`/api/credits`),
    }),
    B = z.data?.balance ?? null,
    V = !z.isPending,
    H = y({
      queryKey: [`user-credits`, n, e, L],
      queryFn: () => {
        let t = new URLSearchParams({ page: String(n), pageSize: String(N) });
        return (
          e !== `all` && t.set(`transactionType`, e),
          L && t.set(`search`, L),
          _(`/api/user/credits?${t}`)
        );
      },
      placeholderData: b,
    }),
    U = H.data?.items ?? [],
    W = H.data?.total ?? 0,
    G = [
      {
        header: m(),
        cell: (e) =>
          (0, j.jsx)(`span`, {
            className: `font-mono text-xs`,
            children: e.transactionNo,
          }),
      },
      {
        header: f(),
        cell: (e) => (0, j.jsx)(`span`, { children: e.description || `—` }),
      },
      {
        header: u(),
        cell: (e) =>
          (0, j.jsx)(O, {
            variant: e.transactionType === `consume` ? `secondary` : `default`,
            children: e.transactionType,
          }),
      },
      { header: l(), cell: (e) => e.transactionScene || `—` },
      {
        header: s(),
        className: `text-right`,
        cell: (e) =>
          (0, j.jsx)(`span`, {
            className: S(
              `font-medium tabular-nums`,
              e.transactionType === `consume` && `text-muted-foreground`
            ),
            children: e.credits > 0 ? `+${e.credits}` : e.credits,
          }),
      },
      {
        header: p(),
        className: `text-right`,
        cell: (e) =>
          (0, j.jsx)(`span`, {
            className: `text-muted-foreground text-sm tabular-nums`,
            children: e.remainingCredits,
          }),
      },
      {
        header: d(),
        cell: (e) =>
          (0, j.jsx)(`span`, {
            className: `text-muted-foreground text-sm`,
            children: e.expiresAt
              ? new Date(e.expiresAt).toLocaleDateString()
              : `—`,
          }),
      },
      {
        header: v(),
        cell: (e) =>
          (0, j.jsx)(`span`, {
            className: `text-muted-foreground text-sm`,
            children: new Date(e.createdAt).toLocaleDateString(),
          }),
      },
    ];
  return (0, j.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, j.jsxs)(`div`, {
        children: [
          (0, j.jsx)(`h1`, { className: `text-2xl font-bold`, children: h() }),
          (0, j.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: c(),
          }),
        ],
      }),
      (0, j.jsxs)(D, {
        className: `max-w-md`,
        children: [
          (0, j.jsx)(w, {
            children: (0, j.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, j.jsx)(E, { children: g() }),
                (0, j.jsxs)(r, {
                  href: `/pricing`,
                  className: S(C({ variant: `outline`, size: `sm` }), `gap-2`),
                  children: [(0, j.jsx)(a, { className: `size-4` }), o()],
                }),
              ],
            }),
          }),
          (0, j.jsx)(T, {
            children: (0, j.jsx)(`p`, {
              className: `text-3xl font-bold`,
              children: V ? (B ?? 0) : `…`,
            }),
          }),
        ],
      }),
      (0, j.jsx)(`div`, {
        className: `border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b`,
        children: M.map((n) =>
          (0, j.jsx)(
            `button`,
            {
              onClick: () => t(n),
              className: S(
                `-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors`,
                e === n
                  ? `border-primary text-foreground`
                  : `text-muted-foreground hover:text-foreground border-transparent`
              ),
              children: k(`settings.credits.tab_${n}`),
            },
            n
          )
        ),
      }),
      (0, j.jsx)(D, {
        children: (0, j.jsx)(T, {
          children: (0, j.jsx)(i, {
            columns: G,
            data: U,
            total: W,
            page: n,
            pageSize: N,
            onPageChange: P,
            rowKey: (e) => e.id,
            emptyText: x(),
            search: F,
            onSearchChange: I,
            onRefresh: () => H.refetch(),
            loading: H.isFetching,
          }),
        }),
      }),
    ],
  });
}
export { P as component };
