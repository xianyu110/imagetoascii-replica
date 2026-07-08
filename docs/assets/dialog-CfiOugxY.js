import { B as a, r as c, t as l, D as o, O as s } from './button-bN-wY-Ql.js';
import { H as u } from './createBaseUIEventDetails-eqndMbrJ.js';
import {
  n as _,
  s as b,
  $ as d,
  A as f,
  b as g,
  Q as h,
  K as m,
  J as p,
  u as S,
  p as v,
  t as x,
  q as y,
} from './DialogTitle-CswfcBHR.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as i } from './utils-DXalBF5w.js';
import { t as r } from './x-CdrRlTxD.js';

var C = t(n()),
  w = C.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        disabled: i = !1,
        nativeButton: l = !0,
        id: p,
        payload: m,
        handle: _,
        ...y
      } = e,
      b = d(!0),
      x = _?.store ?? b?.store;
    if (!x) throw Error(a(79));
    let S = u(p),
      w = x.useState(`floatingRootContext`),
      T = x.useState(`isOpenedByTrigger`, S),
      E = C.useRef(null),
      { registerTrigger: D, isMountedByThisTrigger: O } = g(S, E, x, {
        payload: m,
      }),
      { getButtonProps: k, buttonRef: A } = c({ disabled: i, native: l }),
      j = v([f(w, { enabled: w != null })]),
      M = { disabled: i, open: T },
      N = x.useState(`triggerProps`, O);
    return o(`button`, e, {
      state: M,
      ref: [A, t, D, E],
      props: [j.getReferenceProps(), N, { [s]: ``, id: S }, y, k],
      stateAttributesMapping: h,
    });
  }),
  T = e();
function E({ ...e }) {
  return (0, T.jsx)(_, { 'data-slot': `dialog`, ...e });
}
function D({ ...e }) {
  return (0, T.jsx)(w, { 'data-slot': `dialog-trigger`, ...e });
}
function O({ ...e }) {
  return (0, T.jsx)(b, { 'data-slot': `dialog-portal`, ...e });
}
function k({ className: e, ...t }) {
  return (0, T.jsx)(p, {
    'data-slot': `dialog-overlay`,
    className: i(
      `fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0`,
      e
    ),
    ...t,
  });
}
function A({ className: e, children: t, showCloseButton: n = !0, ...a }) {
  return (0, T.jsxs)(O, {
    children: [
      (0, T.jsx)(k, {}),
      (0, T.jsxs)(S, {
        'data-slot': `dialog-content`,
        className: i(
          `fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-lg data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
          e
        ),
        ...a,
        children: [
          t,
          n &&
            (0, T.jsxs)(y, {
              'data-slot': `dialog-close`,
              render: (0, T.jsx)(l, {
                variant: `ghost`,
                className: `absolute top-2 right-2`,
                size: `icon-sm`,
              }),
              children: [
                (0, T.jsx)(r, {}),
                (0, T.jsx)(`span`, { className: `sr-only`, children: `Close` }),
              ],
            }),
        ],
      }),
    ],
  });
}
function j({ className: e, ...t }) {
  return (0, T.jsx)(`div`, {
    'data-slot': `dialog-header`,
    className: i(`flex flex-col gap-2`, e),
    ...t,
  });
}
function M({ className: e, showCloseButton: t = !1, children: n, ...r }) {
  return (0, T.jsxs)(`div`, {
    'data-slot': `dialog-footer`,
    className: i(
      `-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end`,
      e
    ),
    ...r,
    children: [
      n,
      t &&
        (0, T.jsx)(y, {
          render: (0, T.jsx)(l, { variant: `outline` }),
          children: `Close`,
        }),
    ],
  });
}
function N({ className: e, ...t }) {
  return (0, T.jsx)(x, {
    'data-slot': `dialog-title`,
    className: i(`text-base leading-none font-medium`, e),
    ...t,
  });
}
function P({ className: e, ...t }) {
  return (0, T.jsx)(m, {
    'data-slot': `dialog-description`,
    className: i(
      `text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground`,
      e
    ),
    ...t,
  });
}
export { j as a, M as i, A as n, N as o, P as r, D as s, E as t };
