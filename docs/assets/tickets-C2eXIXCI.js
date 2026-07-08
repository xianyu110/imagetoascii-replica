import { t as A, r as k, n as O } from './avatar-65iakr0V.js';
import { t as x } from './badge-FgXNX2Cv.js';
import { t as v } from './button-bN-wY-Ql.js';
import { t as b, n as y } from './card-DUh0Lb3Z.js';
import { t as r } from './data-table-CXkvDdyi.js';
import { i as C, t as E, a as S, o as T, n as w } from './dialog-DbJ7Ski9.js';
import { t as D } from './dynamic-BD0WR-KR.js';
import { t as te } from './image-uploader-BrelpEpZ.js';
import {
  B as a,
  X as ae,
  J as c,
  hu as ce,
  R as d,
  tu as de,
  Xl as f,
  yu as fe,
  nu as g,
  mu as h,
  $ as i,
  W as ie,
  K as l,
  q as le,
  eu as m,
  U as ne,
  G as o,
  Y as oe,
  et as p,
  z as pe,
  V as re,
  H as s,
  Z as se,
  Q as u,
  tt as ue,
} from './index-BFsmjNQq.js';
import { t as ee } from './message-square-CnB90Q2_.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as j } from './textarea-wtz4TRr6.js';
import { t as _ } from './utils-DXalBF5w.js';

var M = t(n()),
  N = e(),
  P = [`all`, `open`, `replied`, `closed`];
function F(e) {
  return {
    urls: e.filter((e) => e.status === `uploaded` && e.url).map((e) => e.url),
    uploading: e.some((e) => e.status === `uploading`),
  };
}
function I({ urls: e }) {
  return e.length
    ? (0, N.jsx)(`div`, {
        className: `mt-2 flex flex-wrap gap-2`,
        children: e.map((e, t) =>
          (0, N.jsx)(
            `a`,
            {
              href: e,
              target: `_blank`,
              rel: `noopener noreferrer`,
              children: (0, N.jsx)(`img`, {
                src: e,
                alt: ``,
                className: `border-border size-16 rounded-md border object-cover transition-opacity hover:opacity-80`,
              }),
            },
            `${e}-${t}`
          )
        ),
      })
    : null;
}
var L = 20,
  R = { open: `default`, replied: `secondary`, closed: `outline` };
function z() {
  let e = ce(),
    [t, n] = (0, M.useState)(1),
    [z, B] = (0, M.useState)(`all`),
    [V, me] = (0, M.useState)(``),
    [H, he] = (0, M.useState)(``),
    [U, W] = (0, M.useState)(null),
    [ge, _e] = (0, M.useState)([]),
    [G, K] = (0, M.useState)(``),
    [ve, q] = (0, M.useState)([]),
    [ye, be] = (0, M.useState)(!1),
    [xe, Se] = (0, M.useState)(0),
    [J, Y] = (0, M.useState)(!1);
  ((0, M.useEffect)(() => {
    let e = setTimeout(() => he(V), 300);
    return () => clearTimeout(e);
  }, [V]),
    (0, M.useEffect)(() => {
      n(1);
    }, [H, z]));
  let X = h({
      queryKey: [`admin-tickets`, t, z, H],
      queryFn: () => {
        let e = new URLSearchParams({ page: String(t), pageSize: String(L) });
        return (
          z !== `all` && e.set(`status`, z),
          H && e.set(`keyword`, H),
          m(`/api/admin/tickets?${e}`)
        );
      },
      placeholderData: fe,
    }),
    Ce = X.data?.items ?? [],
    we = X.data?.total ?? 0,
    Z = () => e.invalidateQueries({ queryKey: [`admin-tickets`] });
  async function Q(e) {
    try {
      let t = await m(`/api/admin/tickets/${e.id}`);
      (W({ ...e, ...t.ticket }), _e(t.messages), q([]), Se((e) => e + 1));
    } catch (e) {
      f.error(e?.message || `Failed`);
    }
  }
  async function Te() {
    if (!(!U || !G.trim())) {
      Y(!0);
      try {
        (await g(`/api/admin/tickets/${U.id}`, { content: G, attachments: ve }),
          f.success(ie()),
          K(``),
          await Q(U),
          Z());
      } catch (e) {
        f.error(e?.message || `Failed`);
      } finally {
        Y(!1);
      }
    }
  }
  async function $(e) {
    if (U)
      try {
        (await de(`/api/admin/tickets/${U.id}`, { status: e }),
          f.success(ne()),
          W({ ...U, status: e }),
          Z());
      } catch (e) {
        f.error(e?.message || `Failed`);
      }
  }
  let Ee = [
    {
      header: d(),
      className: `w-[160px]`,
      cell: (e) =>
        (0, N.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: new Date(e.createdAt).toLocaleString(),
        }),
    },
    {
      header: i(),
      cell: (e) =>
        (0, N.jsx)(`button`, {
          className: `text-left font-medium hover:underline`,
          onClick: () => Q(e),
          children: e.title,
        }),
    },
    {
      header: u(),
      cell: (e) =>
        (0, N.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, N.jsxs)(A, {
              className: `size-7`,
              children: [
                (0, N.jsx)(k, { src: e.userAvatar || void 0 }),
                (0, N.jsx)(O, {
                  className: `text-xs`,
                  children: (e.userName || `U`).charAt(0).toUpperCase(),
                }),
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                (0, N.jsx)(`span`, { children: e.userName || `—` }),
                (0, N.jsx)(`span`, {
                  className: `text-muted-foreground text-xs`,
                  children: e.userEmail,
                }),
              ],
            }),
          ],
        }),
    },
    {
      header: pe(),
      cell: (e) =>
        (0, N.jsx)(`span`, {
          className: `text-muted-foreground block max-w-[280px] truncate`,
          children: e.latestReply || `—`,
        }),
    },
    {
      header: ae(),
      className: `w-[160px]`,
      cell: (e) =>
        (0, N.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: new Date(e.updatedAt).toLocaleString(),
        }),
    },
    {
      header: se(),
      className: `w-[120px]`,
      cell: (e) =>
        (0, N.jsx)(x, {
          variant: R[e.status],
          children: D(`admin.tickets.status_${e.status}`),
        }),
    },
    {
      header: oe(),
      className: `w-[80px]`,
      cell: (e) =>
        (0, N.jsx)(v, {
          variant: `ghost`,
          size: `icon`,
          className: `size-7`,
          onClick: () => Q(e),
          children: (0, N.jsx)(ee, { className: `size-4` }),
        }),
    },
  ];
  return (0, N.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, N.jsxs)(`div`, {
        children: [
          (0, N.jsx)(`h1`, { className: `text-2xl font-bold`, children: ue() }),
          (0, N.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: p(),
          }),
        ],
      }),
      (0, N.jsx)(`div`, {
        className: `border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b`,
        children: P.map((e) =>
          (0, N.jsx)(
            `button`,
            {
              onClick: () => B(e),
              className: _(
                `-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors`,
                z === e
                  ? `border-primary text-foreground`
                  : `text-muted-foreground hover:text-foreground border-transparent`
              ),
              children: D(`admin.tickets.tab_${e}`),
            },
            e
          )
        ),
      }),
      (0, N.jsx)(b, {
        children: (0, N.jsx)(y, {
          children: (0, N.jsx)(r, {
            columns: Ee,
            data: Ce,
            total: we,
            page: t,
            pageSize: L,
            onPageChange: n,
            rowKey: (e) => e.id,
            emptyText: c(),
            search: V,
            onSearchChange: me,
            onRefresh: () => X.refetch(),
            loading: X.isFetching,
          }),
        }),
      }),
      (0, N.jsx)(E, {
        open: !!U,
        onOpenChange: (e) => !e && W(null),
        children: (0, N.jsxs)(w, {
          className: `sm:max-w-2xl`,
          children: [
            (0, N.jsxs)(S, {
              children: [
                (0, N.jsxs)(T, {
                  className: `flex items-center gap-2`,
                  children: [
                    U?.title,
                    U &&
                      (0, N.jsx)(x, {
                        variant: R[U.status],
                        children: D(`admin.tickets.status_${U.status}`),
                      }),
                  ],
                }),
                U &&
                  (0, N.jsxs)(`p`, {
                    className: `text-muted-foreground flex items-center gap-1.5 text-sm`,
                    children: [
                      (0, N.jsxs)(A, {
                        className: `size-5`,
                        children: [
                          (0, N.jsx)(k, { src: U.userAvatar || void 0 }),
                          (0, N.jsx)(O, {
                            className: `text-[10px]`,
                            children: (U.userName || `U`)
                              .charAt(0)
                              .toUpperCase(),
                          }),
                        ],
                      }),
                      U.userName || `—`,
                      ` · `,
                      U.userEmail,
                    ],
                  }),
              ],
            }),
            (0, N.jsx)(`div`, {
              className: `max-h-[50vh] space-y-3 overflow-y-auto py-2`,
              children: ge.map((e) =>
                (0, N.jsxs)(
                  `div`,
                  {
                    className: _(
                      `rounded-lg p-3 text-sm`,
                      e.role === `admin`
                        ? `bg-primary/10 ml-8`
                        : `bg-muted mr-8`
                    ),
                    children: [
                      (0, N.jsxs)(`div`, {
                        className: `mb-1 flex items-center justify-between`,
                        children: [
                          (0, N.jsxs)(`span`, {
                            className: `flex items-center gap-1.5 text-xs font-medium`,
                            children: [
                              e.role === `user` &&
                                (0, N.jsxs)(A, {
                                  className: `size-5`,
                                  children: [
                                    (0, N.jsx)(k, {
                                      src: e.userAvatar || void 0,
                                    }),
                                    (0, N.jsx)(O, {
                                      className: `text-[10px]`,
                                      children: (e.userName || `U`)
                                        .charAt(0)
                                        .toUpperCase(),
                                    }),
                                  ],
                                }),
                              e.userName || (e.role === `admin` ? a() : `—`),
                              e.role === `admin` &&
                                (0, N.jsx)(x, {
                                  variant: `secondary`,
                                  className: `px-1 py-0 text-[10px]`,
                                  children: a(),
                                }),
                            ],
                          }),
                          (0, N.jsx)(`span`, {
                            className: `text-muted-foreground text-xs`,
                            children: new Date(e.createdAt).toLocaleString(),
                          }),
                        ],
                      }),
                      (0, N.jsx)(`p`, {
                        className: `whitespace-pre-wrap`,
                        children: e.content,
                      }),
                      (0, N.jsx)(I, { urls: e.attachments }),
                    ],
                  },
                  e.id
                )
              ),
            }),
            (0, N.jsxs)(`div`, {
              className: `space-y-3`,
              children: [
                U?.status !== `closed` &&
                  (0, N.jsxs)(N.Fragment, {
                    children: [
                      (0, N.jsx)(j, {
                        value: G,
                        maxLength: 5e3,
                        rows: 3,
                        onChange: (e) => K(e.target.value),
                        placeholder: le(),
                      }),
                      (0, N.jsx)(
                        te,
                        {
                          allowMultiple: !0,
                          maxImages: 9,
                          onChange: (e) => {
                            let { urls: t, uploading: n } = F(e);
                            (q(t), be(n));
                          },
                        },
                        xe
                      ),
                    ],
                  }),
                (0, N.jsx)(C, {
                  children:
                    U?.status === `closed`
                      ? (0, N.jsx)(v, {
                          variant: `outline`,
                          onClick: () => $(`open`),
                          children: re(),
                        })
                      : (0, N.jsxs)(N.Fragment, {
                          children: [
                            (0, N.jsx)(v, {
                              variant: `outline`,
                              onClick: () => $(`closed`),
                              children: s(),
                            }),
                            (0, N.jsx)(v, {
                              onClick: Te,
                              disabled: J || ye || !G.trim(),
                              children: J ? o() : l(),
                            }),
                          ],
                        }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { z as component };
