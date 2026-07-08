import { n as je, r as Me, t as Ne } from './avatar-65iakr0V.js';
import { t as b } from './badge-FgXNX2Cv.js';
import { t as h } from './button-bN-wY-Ql.js';
import { n as v, t as y } from './card-DUh0Lb3Z.js';
import { t as ee } from './data-table-CXkvDdyi.js';
import {
  r as Ae,
  n as C,
  i as S,
  t as T,
  o as w,
  a as x,
} from './dialog-DbJ7Ski9.js';
import { t as E } from './dynamic-BD0WR-KR.js';
import { t as a } from './image-uploader-BrelpEpZ.js';
import {
  lo as _e,
  Ja as ae,
  oo as be,
  do as c,
  Ra as ce,
  ro as Ce,
  fo as d,
  Wa as de,
  uo as De,
  tu as Ee,
  hu as f,
  Xa as fe,
  io as ge,
  co as he,
  Ha as ie,
  za as ke,
  eo as l,
  Ua as le,
  Za as me,
  Ba as ne,
  Xl as o,
  Ka as oe,
  yu as Oe,
  nu as p,
  Ya as pe,
  Ga as re,
  ao as s,
  Qa as se,
  qa as Se,
  $a as te,
  to as Te,
  eu as u,
  Va as ue,
  mu as ve,
  so as we,
  po as xe,
  no as ye,
} from './index-BFsmjNQq.js';
import { t as _ } from './input-BzjUrduj.js';
import { t as g } from './label-BC74pi7G.js';
import { t as r } from './message-square-CnB90Q2_.js';
import { t as i } from './plus-D4gHkXZF.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as D } from './textarea-wtz4TRr6.js';
import { t as m } from './utils-DXalBF5w.js';

var O = t(n()),
  k = e();
function A(e) {
  return {
    urls: e.filter((e) => e.status === `uploaded` && e.url).map((e) => e.url),
    uploading: e.some((e) => e.status === `uploading`),
  };
}
function Pe({ urls: e }) {
  return e.length
    ? (0, k.jsx)(`div`, {
        className: `mt-2 flex flex-wrap gap-2`,
        children: e.map((e, t) =>
          (0, k.jsx)(
            `a`,
            {
              href: e,
              target: `_blank`,
              rel: `noopener noreferrer`,
              children: (0, k.jsx)(`img`, {
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
var j = 10,
  M = { open: `default`, replied: `secondary`, closed: `outline` };
function N() {
  let e = f(),
    [t, n] = (0, O.useState)(1),
    [N, Fe] = (0, O.useState)(``),
    [P, F] = (0, O.useState)(``),
    [Ie, I] = (0, O.useState)(!1),
    [L, R] = (0, O.useState)(``),
    [z, B] = (0, O.useState)(``),
    [Le, V] = (0, O.useState)([]),
    [Re, ze] = (0, O.useState)(!1),
    [Be, Ve] = (0, O.useState)(0),
    [H, U] = (0, O.useState)(!1),
    [W, G] = (0, O.useState)(null),
    [He, Ue] = (0, O.useState)([]),
    [K, q] = (0, O.useState)(``),
    [We, J] = (0, O.useState)([]),
    [Ge, Ke] = (0, O.useState)(!1),
    [qe, Je] = (0, O.useState)(0),
    [Y, X] = (0, O.useState)(!1);
  ((0, O.useEffect)(() => {
    let e = setTimeout(() => F(N), 300);
    return () => clearTimeout(e);
  }, [N]),
    (0, O.useEffect)(() => {
      n(1);
    }, [P]));
  let Z = ve({
      queryKey: [`user-tickets`, t, P],
      queryFn: () => {
        let e = new URLSearchParams({ page: String(t), pageSize: String(j) });
        return (P && e.set(`keyword`, P), u(`/api/tickets?${e}`));
      },
      placeholderData: Oe,
    }),
    Ye = Z.data?.items ?? [],
    Xe = Z.data?.total ?? 0,
    Q = () => e.invalidateQueries({ queryKey: [`user-tickets`] });
  async function $(e) {
    try {
      let t = await u(`/api/tickets/${e.id}`);
      (G(t.ticket), Ue(t.messages), J([]), Je((e) => e + 1));
    } catch (e) {
      o.error(e?.message || `Failed`);
    }
  }
  async function Ze() {
    if (!L.trim() || !z.trim()) {
      o.error(te());
      return;
    }
    U(!0);
    try {
      (await p(`/api/tickets`, { title: L, content: z, attachments: Le }),
        o.success(se()),
        I(!1),
        R(``),
        B(``),
        V([]),
        Ve((e) => e + 1),
        n(1),
        Q());
    } catch (e) {
      o.error(e?.message || `Failed`);
    } finally {
      U(!1);
    }
  }
  async function Qe() {
    if (!(!W || !K.trim())) {
      X(!0);
      try {
        (await p(`/api/tickets/${W.id}`, { content: K, attachments: We }),
          q(``),
          await $(W),
          Q());
      } catch (e) {
        o.error(e?.message || `Failed`);
      } finally {
        X(!1);
      }
    }
  }
  async function $e() {
    if (W)
      try {
        (await Ee(`/api/tickets/${W.id}`, { status: `closed` }),
          o.success(me()),
          G(null),
          Q());
      } catch (e) {
        o.error(e?.message || `Failed`);
      }
  }
  let et = [
    {
      header: ce(),
      className: `w-[160px]`,
      cell: (e) =>
        (0, k.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: new Date(e.createdAt).toLocaleString(),
        }),
    },
    {
      header: ge(),
      cell: (e) =>
        (0, k.jsx)(`button`, {
          className: `text-left font-medium hover:underline`,
          onClick: () => $(e),
          children: e.title,
        }),
    },
    {
      header: ke(),
      cell: (e) =>
        (0, k.jsx)(`span`, {
          className: `text-muted-foreground block max-w-[280px] truncate`,
          children: e.latestReply || `—`,
        }),
    },
    {
      header: ye(),
      className: `w-[160px]`,
      cell: (e) =>
        (0, k.jsx)(`span`, {
          className: `text-muted-foreground`,
          children: new Date(e.updatedAt).toLocaleString(),
        }),
    },
    {
      header: Ce(),
      className: `w-[120px]`,
      cell: (e) =>
        (0, k.jsx)(b, {
          variant: M[e.status],
          children: E(`settings.tickets.status_${e.status}`),
        }),
    },
    {
      header: Te(),
      className: `w-[80px]`,
      cell: (e) =>
        (0, k.jsx)(h, {
          variant: `ghost`,
          size: `icon`,
          className: `size-7`,
          onClick: () => $(e),
          children: (0, k.jsx)(r, { className: `size-4` }),
        }),
    },
  ];
  return (0, k.jsxs)(`div`, {
    className: `space-y-6 p-6`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [
          (0, k.jsxs)(`div`, {
            children: [
              (0, k.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: xe(),
              }),
              (0, k.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: d(),
              }),
            ],
          }),
          (0, k.jsxs)(h, {
            onClick: () => I(!0),
            className: `gap-2`,
            children: [(0, k.jsx)(i, { className: `size-4` }), c()],
          }),
        ],
      }),
      (0, k.jsx)(y, {
        children: (0, k.jsx)(v, {
          children: (0, k.jsx)(ee, {
            columns: et,
            data: Ye,
            total: Xe,
            page: t,
            pageSize: j,
            onPageChange: n,
            rowKey: (e) => e.id,
            emptyText: l(),
            search: N,
            onSearchChange: Fe,
            onRefresh: () => Z.refetch(),
            loading: Z.isFetching,
          }),
        }),
      }),
      (0, k.jsx)(T, {
        open: Ie,
        onOpenChange: I,
        children: (0, k.jsxs)(C, {
          children: [
            (0, k.jsxs)(x, {
              children: [
                (0, k.jsx)(w, { children: De() }),
                (0, k.jsx)(Ae, { children: _e() }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `space-y-4 py-2`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, k.jsx)(g, { htmlFor: `ticket-title`, children: he() }),
                    (0, k.jsx)(_, {
                      id: `ticket-title`,
                      value: L,
                      maxLength: 200,
                      onChange: (e) => R(e.target.value),
                      placeholder: we(),
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, k.jsx)(g, {
                      htmlFor: `ticket-content`,
                      children: be(),
                    }),
                    (0, k.jsx)(D, {
                      id: `ticket-content`,
                      value: z,
                      maxLength: 5e3,
                      rows: 6,
                      onChange: (e) => B(e.target.value),
                      placeholder: s(),
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, k.jsx)(g, { children: ne() }),
                    (0, k.jsx)(
                      a,
                      {
                        allowMultiple: !0,
                        maxImages: 9,
                        onChange: (e) => {
                          let { urls: t, uploading: n } = A(e);
                          (V(t), ze(n));
                        },
                      },
                      Be
                    ),
                  ],
                }),
              ],
            }),
            (0, k.jsxs)(S, {
              children: [
                (0, k.jsx)(h, {
                  variant: `outline`,
                  onClick: () => I(!1),
                  children: le(),
                }),
                (0, k.jsx)(h, {
                  onClick: Ze,
                  disabled: H || Re,
                  children: H ? ue() : ie(),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, k.jsx)(T, {
        open: !!W,
        onOpenChange: (e) => !e && G(null),
        children: (0, k.jsxs)(C, {
          className: `sm:max-w-2xl`,
          children: [
            (0, k.jsx)(x, {
              children: (0, k.jsxs)(w, {
                className: `flex items-center gap-2`,
                children: [
                  W?.title,
                  W &&
                    (0, k.jsx)(b, {
                      variant: M[W.status],
                      children: E(`settings.tickets.status_${W.status}`),
                    }),
                ],
              }),
            }),
            (0, k.jsx)(`div`, {
              className: `max-h-[50vh] space-y-3 overflow-y-auto py-2`,
              children: He.map((e) =>
                (0, k.jsxs)(
                  `div`,
                  {
                    className: m(
                      `rounded-lg p-3 text-sm`,
                      e.role === `admin`
                        ? `bg-primary/10 mr-8`
                        : `bg-muted ml-8`
                    ),
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `mb-1 flex items-center justify-between`,
                        children: [
                          (0, k.jsxs)(`span`, {
                            className: `flex items-center gap-1.5 text-xs font-medium`,
                            children: [
                              e.role === `user` &&
                                (0, k.jsxs)(Ne, {
                                  className: `size-5`,
                                  children: [
                                    (0, k.jsx)(Me, {
                                      src: e.userAvatar || void 0,
                                    }),
                                    (0, k.jsx)(je, {
                                      className: `text-[10px]`,
                                      children: (e.userName || `U`)
                                        .charAt(0)
                                        .toUpperCase(),
                                    }),
                                  ],
                                }),
                              e.role === `admin` ? re() : e.userName || de(),
                            ],
                          }),
                          (0, k.jsx)(`span`, {
                            className: `text-muted-foreground text-xs`,
                            children: new Date(e.createdAt).toLocaleString(),
                          }),
                        ],
                      }),
                      (0, k.jsx)(`p`, {
                        className: `whitespace-pre-wrap`,
                        children: e.content,
                      }),
                      (0, k.jsx)(Pe, { urls: e.attachments }),
                    ],
                  },
                  e.id
                )
              ),
            }),
            W?.status === `closed`
              ? (0, k.jsx)(`p`, {
                  className: `text-muted-foreground text-sm`,
                  children: pe(),
                })
              : (0, k.jsxs)(`div`, {
                  className: `space-y-3`,
                  children: [
                    (0, k.jsx)(D, {
                      value: K,
                      maxLength: 5e3,
                      rows: 3,
                      onChange: (e) => q(e.target.value),
                      placeholder: ae(),
                    }),
                    (0, k.jsx)(
                      a,
                      {
                        allowMultiple: !0,
                        maxImages: 9,
                        onChange: (e) => {
                          let { urls: t, uploading: n } = A(e);
                          (J(t), Ke(n));
                        },
                      },
                      qe
                    ),
                    (0, k.jsxs)(S, {
                      children: [
                        (0, k.jsx)(h, {
                          variant: `outline`,
                          onClick: $e,
                          children: fe(),
                        }),
                        (0, k.jsx)(h, {
                          onClick: Qe,
                          disabled: Y || Ge || !K.trim(),
                          children: Y ? oe() : Se(),
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        }),
      }),
    ],
  });
}
export { N as component };
