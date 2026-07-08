import {
  i as _,
  p as b,
  D as c,
  z as C,
  N as d,
  P as f,
  g,
  a as h,
  E as l,
  _ as m,
  A as o,
  R as p,
  B as s,
  v as S,
  I as u,
  j as v,
  r as x,
  m as y,
} from './button-bN-wY-Ql.js';
import { t as i } from './chevron-right-BrXtw_xW.js';
import {
  T as A,
  H as D,
  E,
  U as ee,
  m as F,
  n as I,
  z as ie,
  V as j,
  R as k,
  s as L,
  _ as M,
  b as N,
  o as ne,
  P as O,
  f as P,
  t as R,
  p as re,
  C as T,
  c as te,
  v as z,
} from './createBaseUIEventDetails-eqndMbrJ.js';
import {
  _ as _e,
  C as ae,
  m as Ae,
  A as B,
  b as be,
  x as Be,
  Gt as ce,
  d as Ce,
  P as de,
  j as De,
  h as Ee,
  Ut as fe,
  r as Fe,
  Kt as G,
  Z as ge,
  G as H,
  X as he,
  zt as He,
  rt as Ie,
  Q as J,
  nt as je,
  L as K,
  l as ke,
  M as le,
  st as Le,
  Wt as me,
  o as Me,
  ot as Ne,
  E as oe,
  k as Oe,
  V as pe,
  p as Pe,
  O as q,
  tt as Re,
  F as se,
  ct as Se,
  g as Te,
  H as U,
  N as ue,
  D as V,
  a as ve,
  y as Ve,
  I as W,
  f as we,
  c as xe,
  R as Y,
  at as ye,
  v as ze,
} from './DialogTitle-CswfcBHR.js';
import { t as r } from './react-dom-C1PHl06U.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as w } from './Separator-p4ewmgjN.js';
import {
  d as Ge,
  n as Je,
  i as Ke,
  l as qe,
  u as Qe,
  a as Ue,
  c as We,
  r as Xe,
  o as Ye,
  s as Ze,
} from './useCompositeListItem-CFl9jHkJ.js';
import { t as a } from './utils-DXalBF5w.js';

var X = t(n());
function $e(e, t) {
  return t != null && !He(t) ? 0 : typeof e == `function` ? e() : e;
}
function et(e, t, n) {
  let r = $e(e, n);
  return typeof r == `number` ? r : r?.[t];
}
function tt(e) {
  return typeof e == `function` ? e() : e;
}
function nt(e, t) {
  return t || e === `click` || e === `mousedown`;
}
var rt = k && ie;
function it(e, t = {}) {
  let n = `rootStore` in e ? e.rootStore : e,
    { events: r, dataRef: i } = n.context,
    { enabled: a = !0, delay: o } = t,
    s = X.useRef(!1),
    c = X.useRef(null),
    l = ce(),
    u = X.useRef(!0);
  (X.useEffect(() => {
    let e = n.select(`domReferenceElement`);
    if (!a) return;
    let t = y(e);
    function r() {
      let e = n.select(`domReferenceElement`);
      !n.select(`open`) && m(e) && e === M(j(e)) && (s.current = !0);
    }
    function i() {
      u.current = !0;
    }
    function o() {
      u.current = !1;
    }
    return (
      t.addEventListener(`blur`, r),
      rt &&
        (t.addEventListener(`keydown`, i, !0),
        t.addEventListener(`pointerdown`, o, !0)),
      () => {
        (t.removeEventListener(`blur`, r),
          rt &&
            (t.removeEventListener(`keydown`, i, !0),
            t.removeEventListener(`pointerdown`, o, !0)));
      }
    );
  }, [n, a]),
    X.useEffect(() => {
      if (!a) return;
      function e(e) {
        if (e.reason === `trigger-press` || e.reason === `escape-key`) {
          let e = n.select(`domReferenceElement`);
          g(e) && ((c.current = e), (s.current = !0));
        }
      }
      return (
        r.on(`openchange`, e),
        () => {
          r.off(`openchange`, e);
        }
      );
    }, [r, a, n]));
  let d = X.useMemo(
    () => ({
      onMouseLeave() {
        ((s.current = !1), (c.current = null));
      },
      onFocus(e) {
        let t = e.currentTarget;
        if (s.current) {
          if (c.current === t) return;
          ((s.current = !1), (c.current = null));
        }
        let r = N(e.nativeEvent);
        if (g(r)) {
          if (rt && !e.relatedTarget) {
            if (!u.current && !A(r)) return;
          } else if (!E(r)) return;
        }
        let i = T(e.relatedTarget, n.context.triggerElements),
          { nativeEvent: a, currentTarget: d } = e,
          f = typeof o == `function` ? o() : o;
        if ((n.select(`open`) && i) || f === 0 || f === void 0) {
          n.setOpen(!0, R(re, a, d));
          return;
        }
        l.start(f, () => {
          s.current || n.setOpen(!0, R(re, a, d));
        });
      },
      onBlur(e) {
        ((s.current = !1), (c.current = null));
        let t = e.relatedTarget,
          r = e.nativeEvent,
          a =
            g(t) &&
            t.hasAttribute(pe(`focus-guard`)) &&
            t.getAttribute(`data-type`) === `outside`;
        l.start(0, () => {
          let e = n.select(`domReferenceElement`),
            o = M(e ? e.ownerDocument : document);
          (!t && o === e) ||
            z(i.current.floatingContext?.refs.floating.current, o) ||
            z(e, o) ||
            a ||
            T(t ?? o, n.context.triggerElements) ||
            n.setOpen(!1, R(re, r));
        });
      },
    }),
    [i, n, l, o]
  );
  return X.useMemo(() => (a ? { reference: d, trigger: d } : {}), [a, d]);
}
var at = `button,a,[role="button"],select,[tabindex]:not([tabindex="-1"]),${O}`;
function ot(e) {
  return e ? !!e.closest(at) : !1;
}
var st = class e {
  constructor() {
    ((this.pointerType = void 0),
      (this.interactedInside = !1),
      (this.handler = void 0),
      (this.blockMouseMove = !0),
      (this.performedPointerEventsMutation = !1),
      (this.pointerEventsScopeElement = null),
      (this.pointerEventsReferenceElement = null),
      (this.pointerEventsFloatingElement = null),
      (this.restTimeoutPending = !1),
      (this.openChangeTimeout = new me()),
      (this.restTimeout = new me()),
      (this.handleCloseOptions = void 0));
  }
  static create() {
    return new e();
  }
  dispose = () => {
    (this.openChangeTimeout.clear(), this.restTimeout.clear());
  };
  disposeEffect = () => this.dispose;
};
function ct(e) {
  e.performedPointerEventsMutation &&
    (e.pointerEventsScopeElement?.style.removeProperty(`pointer-events`),
    e.pointerEventsReferenceElement?.style.removeProperty(`pointer-events`),
    e.pointerEventsFloatingElement?.style.removeProperty(`pointer-events`),
    (e.performedPointerEventsMutation = !1),
    (e.pointerEventsScopeElement = null),
    (e.pointerEventsReferenceElement = null),
    (e.pointerEventsFloatingElement = null));
}
function lt(e, t) {
  let { scopeElement: n, referenceElement: r, floatingElement: i } = t;
  (ct(e),
    (e.performedPointerEventsMutation = !0),
    (e.pointerEventsScopeElement = n),
    (e.pointerEventsReferenceElement = r),
    (e.pointerEventsFloatingElement = i),
    (n.style.pointerEvents = `none`),
    (r.style.pointerEvents = `auto`),
    (i.style.pointerEvents = `auto`));
}
function ut(e) {
  let t = C(st.create).current,
    n = e.context.dataRef.current;
  return (
    (n.hoverInteractionState ||= t),
    G(n.hoverInteractionState.disposeEffect),
    n.hoverInteractionState
  );
}
function dt(e, t = {}) {
  let n = `rootStore` in e ? e.rootStore : e,
    r = n.useState(`open`),
    i = n.useState(`floatingElement`),
    a = n.useState(`domReferenceElement`),
    { dataRef: o } = n.context,
    { enabled: s = !0, closeDelay: c = 0 } = t,
    u = ut(n),
    d = W(),
    f = se(),
    p = l(() => nt(o.current.openEvent?.type, u.interactedInside)),
    m = l(() => {
      let e = o.current.openEvent?.type;
      return e?.includes(`mouse`) && e !== `mousedown`;
    }),
    _ = l((e) => T(e, n.context.triggerElements)),
    v = X.useCallback(
      (e) => {
        let t = et(c, `close`, u.pointerType),
          r = () => {
            (n.setOpen(!1, R(F, e)), d?.events.emit(`floating.closed`, e));
          };
        t
          ? u.openChangeTimeout.start(t, r)
          : (u.openChangeTimeout.clear(), r());
      },
      [c, n, u, d]
    ),
    y = l(() => {
      ct(u);
    }),
    b = l((e) => {
      let t = N(e);
      if (!ot(t)) {
        u.interactedInside = !1;
        return;
      }
      u.interactedInside = t?.closest(`[aria-haspopup]`) != null;
    });
  (h(() => {
    r ||
      ((u.pointerType = void 0),
      (u.restTimeoutPending = !1),
      (u.interactedInside = !1),
      y());
  }, [r, u, y]),
    X.useEffect(() => y, [y]),
    h(() => {
      if (
        s &&
        r &&
        u.handleCloseOptions?.blockPointerEvents &&
        m() &&
        g(a) &&
        i
      ) {
        let e = a,
          t = i,
          n = j(i),
          r = d?.nodesRef.current.find((e) => e.id === f)?.context?.elements
            .floating;
        return (
          r && (r.style.pointerEvents = ``),
          lt(u, {
            scopeElement:
              u.handleCloseOptions?.getScope?.() ??
              u.pointerEventsScopeElement ??
              r ??
              e.closest(`[data-rootownerid]`) ??
              n.body,
            referenceElement: e,
            floatingElement: t,
          }),
          () => {
            y();
          }
        );
      }
    }, [s, r, a, i, u, m, d, f, y]));
  let x = ce();
  X.useEffect(() => {
    if (!s) return;
    function e() {
      (u.openChangeTimeout.clear(),
        x.clear(),
        d?.events.off(`floating.closed`, r),
        y());
    }
    function t(e) {
      if (d && f && fe(d.nodesRef.current, f).length > 0) {
        d.events.on(`floating.closed`, r);
        return;
      }
      if (!_(e.relatedTarget)) {
        if (u.handler) {
          u.handler(e);
          return;
        }
        (y(), p() || v(e));
      }
    }
    function r(e) {
      !d ||
        !f ||
        fe(d.nodesRef.current, f).length > 0 ||
        x.start(0, () => {
          (d.events.off(`floating.closed`, r),
            n.setOpen(!1, R(F, e)),
            d.events.emit(`floating.closed`, e));
        });
    }
    let a = i;
    return (
      a &&
        (a.addEventListener(`mouseenter`, e),
        a.addEventListener(`mouseleave`, t),
        a.addEventListener(`pointerdown`, b, !0)),
      () => {
        (a &&
          (a.removeEventListener(`mouseenter`, e),
          a.removeEventListener(`mouseleave`, t),
          a.removeEventListener(`pointerdown`, b, !0)),
          d?.events.off(`floating.closed`, r));
      }
    );
  }, [s, i, n, o, p, _, v, y, b, u, d, f, x]);
}
var ft = t(r()),
  pt = { current: null };
function mt(e, t = {}) {
  let n = `rootStore` in e ? e.rootStore : e,
    { dataRef: r, events: i } = n.context,
    {
      enabled: a = !0,
      delay: o = 0,
      handleClose: s = null,
      mouseOnly: c = !1,
      restMs: u = 0,
      move: d = !0,
      triggerElementRef: f = pt,
      externalTree: p,
      isActiveTrigger: m = !0,
      getHandleCloseContext: h,
    } = t,
    _ = W(p),
    v = ut(n),
    y = H(s),
    b = H(o),
    x = H(u),
    S = H(a);
  m && (v.handleCloseOptions = y.current?.__options);
  let C = l(() => nt(r.current.openEvent?.type, v.interactedInside)),
    w = l((e) => T(e, n.context.triggerElements)),
    E = l((e, t, r) => {
      let i = n.context.triggerElements;
      if (i.hasElement(t)) return !e || !z(e, t);
      if (!g(r)) return !1;
      let a = r;
      return i.hasMatchingElement((e) => z(e, a)) && (!e || !z(e, a));
    }),
    D = X.useCallback(
      (e, t = !0) => {
        let r = et(b.current, `close`, v.pointerType);
        r
          ? v.openChangeTimeout.start(r, () => {
              (n.setOpen(!1, R(F, e)), _?.events.emit(`floating.closed`, e));
            })
          : t &&
            (v.openChangeTimeout.clear(),
            n.setOpen(!1, R(F, e)),
            _?.events.emit(`floating.closed`, e));
      },
      [b, n, v, _]
    ),
    O = l(() => {
      v.handler &&=
        (j(n.select(`domReferenceElement`)).removeEventListener(
          `mousemove`,
          v.handler
        ),
        void 0);
    });
  X.useEffect(() => O, [O]);
  let k = l(() => {
    ct(v);
  });
  return (
    X.useEffect(() => {
      if (!a) return;
      function e(e) {
        e.open ||
          (O(),
          v.openChangeTimeout.clear(),
          v.restTimeout.clear(),
          (v.blockMouseMove = !0),
          (v.restTimeoutPending = !1));
      }
      return (
        i.on(`openchange`, e),
        () => {
          i.off(`openchange`, e);
        }
      );
    }, [a, i, v, O]),
    X.useEffect(() => {
      if (!a) return;
      let e = f.current ?? (m ? n.select(`domReferenceElement`) : null);
      if (!g(e)) return;
      function t(e) {
        if (
          (v.openChangeTimeout.clear(),
          (v.blockMouseMove = !1),
          (c && !He(v.pointerType)) ||
            (tt(x.current) > 0 && !et(b.current, `open`)))
        )
          return;
        let t = et(b.current, `open`, v.pointerType),
          r = e.currentTarget ?? null,
          i = n.select(`domReferenceElement`),
          a = r == null ? !1 : E(i, r, e.target),
          o = n.select(`open`),
          s = !o || a;
        a && o
          ? n.setOpen(!0, R(F, e, r))
          : t
            ? v.openChangeTimeout.start(t, () => {
                s && n.setOpen(!0, R(F, e, r));
              })
            : s && n.setOpen(!0, R(F, e, r));
      }
      function i(e) {
        if (C()) {
          k();
          return;
        }
        O();
        let t = j(n.select(`domReferenceElement`));
        (v.restTimeout.clear(), (v.restTimeoutPending = !1));
        let i = r.current.floatingContext ?? h?.();
        if (!w(e.relatedTarget)) {
          if (y.current && i) {
            n.select(`open`) || v.openChangeTimeout.clear();
            let r = f.current;
            ((v.handler = y.current({
              ...i,
              tree: _,
              x: e.clientX,
              y: e.clientY,
              onClose() {
                (k(),
                  O(),
                  S.current &&
                    !C() &&
                    r === n.select(`domReferenceElement`) &&
                    D(e, !0));
              },
            })),
              t.addEventListener(`mousemove`, v.handler),
              v.handler(e));
            return;
          }
          (v.pointerType !== `touch` ||
            !z(n.select(`floatingElement`), e.relatedTarget)) &&
            D(e);
        }
      }
      return (
        d && e.addEventListener(`mousemove`, t, { once: !0 }),
        e.addEventListener(`mouseenter`, t),
        e.addEventListener(`mouseleave`, i),
        () => {
          (d && e.removeEventListener(`mousemove`, t),
            e.removeEventListener(`mouseenter`, t),
            e.removeEventListener(`mouseleave`, i));
        }
      );
    }, [O, k, r, b, D, n, a, y, v, m, E, C, w, c, d, x, f, _, S, h]),
    X.useMemo(() => {
      if (!a) return;
      function e(e) {
        v.pointerType = e.pointerType;
      }
      return {
        onPointerDown: e,
        onPointerEnter: e,
        onMouseMove(e) {
          let { nativeEvent: t } = e,
            r = e.currentTarget,
            i = n.select(`domReferenceElement`),
            a = n.select(`open`),
            o = E(i, r, e.target);
          if (c && !He(v.pointerType)) return;
          let s = tt(x.current);
          if (
            (a && !o) ||
            s === 0 ||
            (!o &&
              v.restTimeoutPending &&
              e.movementX ** 2 + e.movementY ** 2 < 2)
          )
            return;
          v.restTimeout.clear();
          function l() {
            if (((v.restTimeoutPending = !1), C())) return;
            let e = n.select(`open`);
            !v.blockMouseMove && (!e || o) && n.setOpen(!0, R(F, t, r));
          }
          v.pointerType === `touch`
            ? ft.flushSync(() => {
                l();
              })
            : o && a
              ? l()
              : ((v.restTimeoutPending = !0), v.restTimeout.start(s, l));
        },
      };
    }, [a, v, C, E, c, n, x])
  );
}
var ht = 0.1,
  gt = ht * ht,
  Z = 0.5;
function _t(e, t, n, r, i, a) {
  return r >= t != a >= t && e <= ((i - n) * (t - r)) / (a - r) + n;
}
function vt(e, t, n, r, i, a, o, s, c, l) {
  let u = !1;
  return (
    _t(e, t, n, r, i, a) && (u = !u),
    _t(e, t, i, a, o, s) && (u = !u),
    _t(e, t, o, s, c, l) && (u = !u),
    _t(e, t, c, l, n, r) && (u = !u),
    u
  );
}
function yt(e, t, n) {
  return e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height;
}
function bt(e, t, n, r, i, a) {
  return (
    e >= Math.min(n, i) &&
    e <= Math.max(n, i) &&
    t >= Math.min(r, a) &&
    t <= Math.max(r, a)
  );
}
function xt(e = {}) {
  let { blockPointerEvents: t = !1 } = e,
    n = new me(),
    r = ({
      x: e,
      y: t,
      placement: r,
      elements: i,
      onClose: a,
      nodeId: o,
      tree: s,
    }) => {
      let c = r?.split(`-`)[0],
        l = !1,
        u = null,
        d = null,
        f = typeof performance < `u` ? performance.now() : 0;
      function p(e, t) {
        let n = performance.now(),
          r = n - f;
        if (u === null || d === null || r === 0)
          return ((u = e), (d = t), (f = n), !1);
        let i = e - u,
          a = t - d,
          o = i * i + a * a,
          s = r * r * gt;
        return ((u = e), (d = t), (f = n), o < s);
      }
      function m() {
        (n.clear(), a());
      }
      return function (r) {
        n.clear();
        let a = i.domReference,
          u = i.floating;
        if (!a || !u || c == null || e == null || t == null) return;
        let { clientX: d, clientY: f } = r,
          h = N(r),
          _ = r.type === `mouseleave`,
          v = z(u, h),
          y = z(a, h);
        if (v && ((l = !0), !_)) return;
        if (y && ((l = !1), !_)) {
          l = !0;
          return;
        }
        if (_ && g(r.relatedTarget) && z(u, r.relatedTarget)) return;
        function b() {
          return !!(s && fe(s.nodesRef.current, o).length > 0);
        }
        function x() {
          b() || m();
        }
        if (b()) return;
        let S = a.getBoundingClientRect(),
          C = u.getBoundingClientRect(),
          w = e > C.right - C.width / 2,
          T = t > C.bottom - C.height / 2,
          E = C.width > S.width,
          D = C.height > S.height,
          O = (E ? S : C).left,
          k = (E ? S : C).right,
          A = (D ? S : C).top,
          ee = (D ? S : C).bottom;
        if (
          (c === `top` && t >= S.bottom - 1) ||
          (c === `bottom` && t <= S.top + 1) ||
          (c === `left` && e >= S.right - 1) ||
          (c === `right` && e <= S.left + 1)
        ) {
          x();
          return;
        }
        let j = !1;
        switch (c) {
          case `top`:
            j = bt(d, f, O, S.top + 1, k, C.bottom - 1);
            break;
          case `bottom`:
            j = bt(d, f, O, C.top + 1, k, S.bottom - 1);
            break;
          case `left`:
            j = bt(d, f, C.right - 1, ee, S.left + 1, A);
            break;
          case `right`:
            j = bt(d, f, S.right - 1, ee, C.left + 1, A);
            break;
          default:
        }
        if (j) return;
        if (l && !yt(d, f, S)) {
          x();
          return;
        }
        if (!_ && p(d, f)) {
          x();
          return;
        }
        let M = !1;
        switch (c) {
          case `top`: {
            let n = E ? Z / 2 : Z * 4,
              r = E || w ? e + n : e - n,
              i = E ? e - n : w ? e + n : e - n,
              a = t + Z + 1,
              o = w || E ? C.bottom - Z : C.top,
              s = w ? (E ? C.bottom - Z : C.top) : C.bottom - Z;
            M = vt(d, f, r, a, i, a, C.left, o, C.right, s);
            break;
          }
          case `bottom`: {
            let n = E ? Z / 2 : Z * 4,
              r = E || w ? e + n : e - n,
              i = E ? e - n : w ? e + n : e - n,
              a = t - Z,
              o = w || E ? C.top + Z : C.bottom,
              s = w ? (E ? C.top + Z : C.bottom) : C.top + Z;
            M = vt(d, f, r, a, i, a, C.left, o, C.right, s);
            break;
          }
          case `left`: {
            let n = D ? Z / 2 : Z * 4,
              r = D || T ? t + n : t - n,
              i = D ? t - n : T ? t + n : t - n,
              a = e + Z + 1,
              o = T || D ? C.right - Z : C.left,
              s = T ? (D ? C.right - Z : C.left) : C.right - Z;
            M = vt(d, f, o, C.top, s, C.bottom, a, r, a, i);
            break;
          }
          case `right`: {
            let n = D ? Z / 2 : Z * 4,
              r = D || T ? t + n : t - n,
              i = D ? t - n : T ? t + n : t - n,
              a = e - Z,
              o = T || D ? C.left + Z : C.right,
              s = T ? (D ? C.left + Z : C.right) : C.left + Z;
            M = vt(d, f, a, r, a, i, o, C.top, s, C.bottom);
            break;
          }
          default:
        }
        M ? l || n.start(40, x) : x();
      };
    };
  return ((r.__options = { blockPointerEvents: t }), r);
}
var Q = e(),
  St = X.createContext(void 0);
function Ct(e) {
  let t = X.useContext(St);
  if (t === void 0 && !e) throw Error(s(33));
  return t;
}
var wt = X.createContext(void 0);
function $(e) {
  let t = X.useContext(wt);
  if (t === void 0 && !e) throw Error(s(36));
  return t;
}
var Tt = X.createContext(void 0);
function Et(e = !0) {
  let t = X.useContext(Tt);
  if (t === void 0 && !e) throw Error(s(25));
  return t;
}
function Dt(e) {
  let {
      closeOnClick: t,
      highlighted: n,
      id: r,
      nodeId: i,
      store: a,
      typingRef: o,
      itemRef: s,
      itemMetadata: c,
    } = e,
    { events: l } = a.useState(`floatingTreeRoot`),
    u = Et(!0),
    d = u !== void 0;
  return X.useMemo(
    () => ({
      id: r,
      role: `menuitem`,
      tabIndex: n ? 0 : -1,
      onKeyDown(e) {
        e.key === ` ` && o?.current && e.preventDefault();
      },
      onMouseMove(e) {
        i && l.emit(`itemhover`, { nodeId: i, target: e.currentTarget });
      },
      onClick(e) {
        t && l.emit(`close`, { domEvent: e, reason: te });
      },
      onMouseUp(e) {
        if (u) {
          let t = u.initialCursorPointRef.current;
          if (
            ((u.initialCursorPointRef.current = null),
            (d &&
              t &&
              Math.abs(e.clientX - t.x) <= 1 &&
              Math.abs(e.clientY - t.y) <= 1) ||
              (d && !k && e.button === 2))
          )
            return;
        }
        s.current &&
          a.context.allowMouseUpTriggerRef.current &&
          (!d || e.button === 2) &&
          (!c || c.type === `regular-item`) &&
          s.current.click();
      },
    }),
    [t, n, r, l, i, a, o, s, u, d, c]
  );
}
var Ot = { type: `regular-item` };
function kt(e) {
  let {
      closeOnClick: t,
      disabled: n = !1,
      highlighted: r,
      id: i,
      store: a,
      typingRef: o = a.context.typingRef,
      nativeButton: s,
      itemMetadata: c,
      nodeId: l,
    } = e,
    d = X.useRef(null),
    { getButtonProps: f, buttonRef: m } = x({
      disabled: n,
      focusableWhenDisabled: !0,
      native: s,
      composite: !0,
    }),
    h = Dt({
      closeOnClick: t,
      highlighted: r,
      id: i,
      nodeId: l,
      store: a,
      typingRef: o,
      itemRef: d,
      itemMetadata: c,
    }),
    g = X.useCallback(
      (e) =>
        u(
          h,
          {
            onMouseEnter() {
              c.type === `submenu-trigger` && c.setActive();
            },
          },
          e,
          f
        ),
      [h, f, c]
    ),
    _ = p(d, m);
  return X.useMemo(() => ({ getItemProps: g, itemRef: _ }), [g, _]);
}
var At = X.createContext(void 0);
function jt() {
  let e = X.useContext(At);
  if (e === void 0) throw Error(s(31));
  return e;
}
var Mt = X.forwardRef(function (e, t) {
    let { render: n, className: r, ...i } = e,
      [a, o] = X.useState(void 0),
      s = X.useMemo(() => ({ setLabelId: o }), [o]),
      l = c(`div`, e, {
        ref: t,
        props: { role: `group`, 'aria-labelledby': a, ...i },
      });
    return (0, Q.jsx)(At.Provider, { value: s, children: l });
  }),
  Nt = X.forwardRef(function (e, t) {
    let { className: n, render: r, id: i, ...a } = e,
      o = D(i),
      { setLabelId: s } = jt();
    return (
      h(
        () => (
          s(o),
          () => {
            s(void 0);
          }
        ),
        [s, o]
      ),
      c(`div`, e, { ref: t, props: { id: o, role: `presentation`, ...a } })
    );
  }),
  Pt = X.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        id: i,
        label: a,
        nativeButton: o = !1,
        disabled: s = !1,
        closeOnClick: l = !0,
        ...u
      } = e,
      d = Je({ label: a }),
      f = Ct(!0),
      p = D(i),
      { store: m } = $(),
      h = m.useState(`isActive`, d.index),
      g = m.useState(`itemProps`),
      { getItemProps: _, itemRef: v } = kt({
        closeOnClick: l,
        disabled: s,
        highlighted: h,
        id: p,
        store: m,
        nativeButton: o,
        nodeId: f?.nodeId,
        itemMetadata: Ot,
      });
    return c(`div`, e, {
      state: { disabled: s, highlighted: h },
      props: [g, u, _],
      ref: [v, t, d.ref],
    });
  }),
  Ft = { ...he, ...Ie },
  It = X.forwardRef(function (e, t) {
    let { render: n, className: r, finalFocus: i, ...a } = e,
      { store: o } = $(),
      { side: s, align: l } = Ct(),
      u = Xe(!0) != null,
      d = o.useState(`open`),
      f = o.useState(`transitionStatus`),
      p = o.useState(`popupProps`),
      m = o.useState(`mounted`),
      h = o.useState(`instantType`),
      g = o.useState(`activeTriggerElement`),
      _ = o.useState(`parent`),
      v = o.useState(`lastOpenChangeReason`),
      y = o.useState(`rootId`),
      b = o.useState(`floatingRootContext`),
      x = o.useState(`floatingTreeRoot`),
      S = o.useState(`closeDelay`),
      C = o.useState(`activeTriggerElement`),
      w = _.type === `context-menu`;
    (Re({
      open: d,
      ref: o.context.popupRef,
      onComplete() {
        d && o.context.onOpenChangeComplete?.(!0);
      },
    }),
      X.useEffect(() => {
        function e(e) {
          o.setOpen(!1, R(e.reason, e.domEvent));
        }
        return (
          x.events.on(`close`, e),
          () => {
            x.events.off(`close`, e);
          }
        );
      }, [x.events, o]));
    let T = o.useState(`hoverEnabled`),
      E = o.useState(`disabled`);
    dt(b, { enabled: T && !E && !w && _.type !== `menubar`, closeDelay: S });
    let D = {
        transitionStatus: f,
        side: s,
        align: l,
        open: d,
        nested: _.type === `menu`,
        instant: h,
      },
      O = X.useCallback(
        (e) => {
          o.set(`popupElement`, e);
        },
        [o]
      ),
      k = c(`div`, e, {
        state: D,
        ref: [t, o.context.popupRef, O],
        stateAttributesMapping: Ft,
        props: [
          p,
          {
            onKeyDown(e) {
              u && Ce.has(e.key) && e.stopPropagation();
            },
          },
          Ke(f),
          a,
          { 'data-rootownerid': y },
        ],
      }),
      A = _.type === void 0 || w;
    return (
      (g || (_.type === `menubar` && v !== `outside-press`)) && (A = !0),
      (0, Q.jsx)(De, {
        context: b,
        modal: w,
        disabled: !m,
        returnFocus: i === void 0 ? A : i,
        initialFocus: _.type !== `menu`,
        restoreFocus: !0,
        externalTree: _.type === `menubar` ? void 0 : x,
        previousFocusableElement: C,
        nextFocusableElement:
          _.type === void 0 ? o.context.triggerFocusTargetRef : void 0,
        beforeContentFocusGuardRef:
          _.type === void 0 ? o.context.beforeContentFocusGuardRef : void 0,
        children: k,
      })
    );
  }),
  Lt = X.createContext(void 0);
function Rt() {
  let e = X.useContext(Lt);
  if (e === void 0) throw Error(s(32));
  return e;
}
var zt = X.forwardRef(function (e, t) {
    let { keepMounted: n = !1, ...r } = e,
      { store: i } = $();
    return i.useState(`mounted`) || n
      ? (0, Q.jsx)(Lt.Provider, {
          value: n,
          children: (0, Q.jsx)(Y, { ref: t, ...r }),
        })
      : null;
  }),
  Bt = X.forwardRef(function (e, t) {
    let {
        anchor: n,
        positionMethod: r = `absolute`,
        className: i,
        render: a,
        side: s,
        align: l,
        sideOffset: u = 0,
        alignOffset: d = 0,
        collisionBoundary: f = `clipping-ancestors`,
        collisionPadding: p = 5,
        arrowPadding: m = 5,
        sticky: g = !1,
        disableAnchorTracking: _ = !1,
        collisionAvoidance: y = o,
        ...b
      } = e,
      { store: x } = $(),
      S = Rt(),
      C = Et(!0),
      w = x.useState(`parent`),
      T = x.useState(`floatingRootContext`),
      E = x.useState(`floatingTreeRoot`),
      D = x.useState(`mounted`),
      O = x.useState(`open`),
      k = x.useState(`modal`),
      A = x.useState(`activeTriggerElement`),
      ee = x.useState(`transitionStatus`),
      j = x.useState(`positionerElement`),
      M = x.useState(`instantType`),
      N = x.useState(`hasViewport`),
      te = x.useState(`lastOpenChangeReason`),
      F = x.useState(`floatingNodeId`),
      I = x.useState(`floatingParentNodeId`),
      ne = T.useState(`domReferenceElement`),
      re = X.useRef(null),
      L = je(j, !1, !1),
      z = n,
      ie = u,
      B = d,
      ae = l,
      V = y;
    w.type === `context-menu` &&
      ((z = n ?? w.context?.anchor),
      (ae ??= `start`),
      !s &&
        ae !== `center` &&
        ((B = e.alignOffset ?? 2), (ie = e.sideOffset ?? -5)));
    let oe = s,
      se = ae;
    w.type === `menu`
      ? ((oe ??= `inline-end`),
        (se ??= `start`),
        (V = e.collisionAvoidance ?? v))
      : w.type === `menubar` && ((oe ??= `bottom`), (se ??= `start`));
    let H = w.type === `context-menu`,
      U = Ue({
        anchor: z,
        floatingRootContext: T,
        positionMethod: C ? `fixed` : r,
        mounted: D,
        side: oe,
        sideOffset: ie,
        align: se,
        alignOffset: B,
        arrowPadding: H ? 0 : m,
        collisionBoundary: f,
        collisionPadding: p,
        sticky: g,
        nodeId: F,
        keepMounted: S,
        disableAnchorTracking: _,
        collisionAvoidance: V,
        shiftCrossAxis: H && !(`side` in V && V.side === `flip`),
        externalTree: E,
        adaptiveOrigin: N ? Ye : void 0,
      }),
      W = X.useMemo(() => {
        let e = {};
        return (
          O || (e.pointerEvents = `none`),
          {
            role: `presentation`,
            hidden: !D,
            style: { ...U.positionerStyles, ...e },
          }
        );
      }, [O, D, U.positionerStyles]);
    (X.useEffect(() => {
      function e(e) {
        e.open &&
          (e.parentNodeId === F && x.set(`hoverEnabled`, !1),
          e.nodeId !== F &&
            e.parentNodeId === x.select(`floatingParentNodeId`) &&
            x.setOpen(!1, R(P)));
      }
      return (
        E.events.on(`menuopenchange`, e),
        () => {
          E.events.off(`menuopenchange`, e);
        }
      );
    }, [x, E.events, F]),
      X.useEffect(() => {
        if (x.select(`floatingParentNodeId`) == null) return;
        function e(e) {
          if (e.open || e.nodeId !== x.select(`floatingParentNodeId`)) return;
          let t = e.reason ?? `sibling-open`;
          x.setOpen(!1, R(t));
        }
        return (
          E.events.on(`menuopenchange`, e),
          () => {
            E.events.off(`menuopenchange`, e);
          }
        );
      }, [E.events, x]));
    let G = ce();
    (X.useEffect(() => {
      O || G.clear();
    }, [O, G]),
      X.useEffect(() => {
        function e(e) {
          if (!(!O || e.nodeId !== x.select(`floatingParentNodeId`)))
            if (e.target && A && A !== e.target) {
              let e = x.select(`closeDelay`);
              e > 0
                ? G.isStarted() ||
                  G.start(e, () => {
                    x.setOpen(!1, R(P));
                  })
                : x.setOpen(!1, R(P));
            } else G.clear();
        }
        return (
          E.events.on(`itemhover`, e),
          () => {
            E.events.off(`itemhover`, e);
          }
        );
      }, [E.events, O, A, x, G]),
      X.useEffect(() => {
        let e = {
          open: O,
          nodeId: F,
          parentNodeId: I,
          reason: x.select(`lastOpenChangeReason`),
        };
        E.events.emit(`menuopenchange`, e);
      }, [E.events, O, x, F, I]),
      h(() => {
        let e = ne,
          t = re.current;
        if ((e && (re.current = e), t && e && e !== t)) {
          x.set(`instantType`, void 0);
          let e = new AbortController();
          return (
            L(() => {
              x.set(`instantType`, `trigger-change`);
            }, e.signal),
            () => {
              e.abort();
            }
          );
        }
      }, [ne, L, x]));
    let K = {
        open: O,
        side: U.side,
        align: U.align,
        anchorHidden: U.anchorHidden,
        nested: w.type === `menu`,
        instant: M,
      },
      ue = X.useMemo(
        () => ({
          side: U.side,
          align: U.align,
          arrowRef: U.arrowRef,
          arrowUncentered: U.arrowUncentered,
          arrowStyles: U.arrowStyles,
          nodeId: U.context.nodeId,
        }),
        [
          U.side,
          U.align,
          U.arrowRef,
          U.arrowUncentered,
          U.arrowStyles,
          U.context.nodeId,
        ]
      ),
      q = c(`div`, e, {
        state: K,
        stateAttributesMapping: he,
        ref: [t, x.useStateSetter(`positionerElement`)],
        props: [W, Ke(ee), b],
      }),
      de =
        D &&
        w.type !== `menu` &&
        ((w.type !== `menubar` && k && te !== `trigger-hover`) ||
          (w.type === `menubar` && w.context.modal)),
      J = null;
    return (
      w.type === `menubar`
        ? (J = w.context.contentElement)
        : w.type === void 0 && (J = A),
      (0, Q.jsxs)(St.Provider, {
        value: ue,
        children: [
          de &&
            (0, Q.jsx)(xe, {
              ref:
                w.type === `context-menu` || w.type === `nested-context-menu`
                  ? w.context.internalBackdropRef
                  : null,
              inert: ke(!O),
              cutout: J,
            }),
          (0, Q.jsx)(le, {
            id: F,
            children: (0, Q.jsx)(We, {
              elementsRef: x.context.itemDomElements,
              labelsRef: x.context.itemLabels,
              children: q,
            }),
          }),
        ],
      })
    );
  }),
  Vt = X.createContext(null);
function Ht(e) {
  let t = X.useContext(Vt);
  if (t === null && !e) throw Error(s(5));
  return t;
}
var Ut = {
    ...Te,
    disabled: q(
      (e) =>
        (e.parent.type === `menubar` && e.parent.context.disabled) || e.disabled
    ),
    modal: q(
      (e) =>
        (e.parent.type === void 0 || e.parent.type === `context-menu`) &&
        (e.modal ?? !0)
    ),
    allowMouseEnter: q((e) => e.allowMouseEnter),
    stickIfOpen: q((e) => e.stickIfOpen),
    parent: q((e) => e.parent),
    rootId: q((e) =>
      e.parent.type === `menu`
        ? e.parent.store.select(`rootId`)
        : e.parent.type === void 0
          ? e.rootId
          : e.parent.context.rootId
    ),
    activeIndex: q((e) => e.activeIndex),
    isActive: q((e, t) => e.activeIndex === t),
    hoverEnabled: q((e) => e.hoverEnabled),
    instantType: q((e) => e.instantType),
    lastOpenChangeReason: q((e) => e.openChangeReason),
    floatingTreeRoot: q((e) =>
      e.parent.type === `menu`
        ? e.parent.store.select(`floatingTreeRoot`)
        : e.floatingTreeRoot
    ),
    floatingNodeId: q((e) => e.floatingNodeId),
    floatingParentNodeId: q((e) => e.floatingParentNodeId),
    itemProps: q((e) => e.itemProps),
    closeDelay: q((e) => e.closeDelay),
    hasViewport: q((e) => e.hasViewport),
    keyboardEventRelay: q((e) => {
      if (e.keyboardEventRelay) return e.keyboardEventRelay;
      if (e.parent.type === `menu`)
        return e.parent.store.select(`keyboardEventRelay`);
    }),
  },
  Wt = class e extends ae {
    constructor(e) {
      (super(
        { ...Gt(), ...e },
        {
          positionerRef: X.createRef(),
          popupRef: X.createRef(),
          typingRef: { current: !1 },
          itemDomElements: { current: [] },
          itemLabels: { current: [] },
          allowMouseUpTriggerRef: { current: !1 },
          triggerFocusTargetRef: X.createRef(),
          beforeContentFocusGuardRef: X.createRef(),
          onOpenChangeComplete: void 0,
          triggerElements: new _e(),
        },
        Ut
      ),
        (this.unsubscribeParentListener = this.observe(`parent`, (e) => {
          if ((this.unsubscribeParentListener?.(), e.type === `menu`)) {
            let t = e.store.select(`rootId`),
              n = e.store.select(`floatingTreeRoot`),
              r = e.store.select(`keyboardEventRelay`);
            ((this.unsubscribeParentListener = e.store.subscribe(() => {
              let i = e.store.select(`rootId`),
                a = e.store.select(`floatingTreeRoot`),
                o = e.store.select(`keyboardEventRelay`);
              (t === i && n === a && r === o) ||
                ((t = i), (n = a), (r = o), this.notifyAll());
            })),
              (this.context.allowMouseUpTriggerRef =
                e.store.context.allowMouseUpTriggerRef));
            return;
          }
          (e.type !== void 0 &&
            (this.context.allowMouseUpTriggerRef =
              e.context.allowMouseUpTriggerRef),
            (this.unsubscribeParentListener = null));
        })));
    }
    setOpen(e, t) {
      this.state.floatingRootContext.context.events.emit(`setOpen`, {
        open: e,
        eventDetails: t,
      });
    }
    static useStore(t, n) {
      let r = C(() => new e(n)).current;
      return t ?? r;
    }
    unsubscribeParentListener = null;
  };
function Gt() {
  return {
    ...Ee(),
    disabled: !1,
    modal: !0,
    allowMouseEnter: !1,
    stickIfOpen: !0,
    parent: { type: void 0 },
    rootId: void 0,
    activeIndex: null,
    hoverEnabled: !0,
    instantType: void 0,
    openChangeReason: null,
    floatingTreeRoot: new K(),
    floatingNodeId: void 0,
    floatingParentNodeId: null,
    itemProps: f,
    keyboardEventRelay: void 0,
    closeDelay: 0,
    hasViewport: !1,
  };
}
var Kt = X.createContext(void 0);
function qt() {
  return X.useContext(Kt);
}
var Jt = oe(function (e) {
  let {
      children: t,
      open: n,
      onOpenChange: r,
      onOpenChangeComplete: i,
      defaultOpen: a = !1,
      disabled: o = !1,
      modal: s,
      loopFocus: c = !0,
      orientation: f = `vertical`,
      actionsRef: p,
      closeParentOnEsc: m = !1,
      handle: g,
      triggerId: _,
      defaultTriggerId: v = null,
      highlightItemOnHover: y = !0,
    } = e,
    b = Et(!0),
    x = $(!0),
    S = Ht(!0),
    C = qt(),
    w = X.useMemo(
      () =>
        C && x
          ? { type: `menu`, store: x.store }
          : S
            ? { type: `menubar`, context: S }
            : b && !x
              ? { type: `context-menu`, context: b }
              : { type: void 0 },
      [b, x, S, C]
    ),
    T = Wt.useStore(g?.store, {
      open: a,
      openProp: n,
      activeTriggerId: v,
      triggerIdProp: _,
      parent: w,
    });
  (Me(() => {
    n === void 0 &&
      T.state.open === !1 &&
      a === !0 &&
      T.update({ open: !0, activeTriggerId: v });
  }),
    T.useControlledProp(`openProp`, n),
    T.useControlledProp(`triggerIdProp`, _),
    T.useContextCallback(`onOpenChangeComplete`, i));
  let E = T.useState(`floatingTreeRoot`),
    D = de(E),
    O = se();
  h(() => {
    b && !x
      ? T.update({
          parent: { type: `context-menu`, context: b },
          floatingNodeId: D,
          floatingParentNodeId: O,
        })
      : x && T.update({ floatingNodeId: D, floatingParentNodeId: O });
  }, [b, x, D, O, T]);
  let k = T.useState(`open`),
    A = T.useState(`activeTriggerElement`),
    j = T.useState(`positionerElement`),
    M = T.useState(`hoverEnabled`),
    N = T.useState(`modal`),
    te = T.useState(`disabled`),
    P = T.useState(`lastOpenChangeReason`),
    F = T.useState(`parent`),
    I = T.useState(`activeIndex`),
    ne = T.useState(`payload`),
    re = T.useState(`floatingParentNodeId`),
    z = X.useRef(null),
    ie = re != null,
    B;
  T.useSyncedValues({
    disabled: o,
    modal: F.type === void 0 ? s : void 0,
    rootId: ee(),
  });
  let { openMethod: ae, triggerProps: V } = Fe(k);
  ze(T);
  let { forceUnmount: oe } = Ve(k, T, () => {
      T.update({ allowMouseEnter: !1, stickIfOpen: !0 });
    }),
    H = X.useRef(F.type !== `context-menu`),
    U = ce();
  (X.useEffect(() => {
    if ((k || (z.current = null), F.type === `context-menu`)) {
      if (!k) {
        (U.clear(), (H.current = !1));
        return;
      }
      U.start(500, () => {
        H.current = !0;
      });
    }
  }, [U, k, F.type]),
    ve(k && N && P !== `trigger-hover` && ae !== `touch`, j),
    h(() => {
      !k && !M && T.set(`hoverEnabled`, !0);
    }, [k, M, T]));
  let W = X.useRef(!0),
    G = ce(),
    K = l((e, t) => {
      let n = t.reason;
      if (
        (k === e && t.trigger === A && P === n) ||
        ((t.preventUnmountOnClose = () => {
          T.set(`preventUnmountingOnClose`, !0);
        }),
        !e && t.trigger == null && (t.trigger = A ?? void 0),
        r?.(e, t),
        t.isCanceled)
      )
        return;
      let i = { open: e, nativeEvent: t.event, reason: t.reason, nested: ie };
      B?.emit(`openchange`, i);
      let a = t.event;
      if (
        e === !1 &&
        a?.type === `click` &&
        a.pointerType === `touch` &&
        !W.current
      )
        return;
      if (!e && I !== null) {
        let e = T.context.itemDomElements.current[I];
        queueMicrotask(() => {
          e?.setAttribute(`tabindex`, `-1`);
        });
      }
      e && n === `trigger-focus`
        ? ((W.current = !1),
          G.start(300, () => {
            W.current = !0;
          }))
        : ((W.current = !0), G.clear());
      let o =
          (n === `trigger-press` || n === `item-press`) &&
          a.detail === 0 &&
          a?.isTrusted,
        s = !e && (n === `escape-key` || n == null),
        c = { open: e, openChangeReason: n };
      z.current = t.event ?? null;
      let l = t.trigger?.id ?? null;
      ((l || e) &&
        ((c.activeTriggerId = l), (c.activeTriggerElement = t.trigger ?? null)),
        T.update(c),
        F.type === `menubar` &&
        (n === `trigger-focus` ||
          n === `focus-out` ||
          n === `trigger-hover` ||
          n === `list-navigation` ||
          n === `sibling-open`)
          ? T.set(`instantType`, `group`)
          : o || s
            ? T.set(`instantType`, o ? `click` : `dismiss`)
            : T.set(`instantType`, void 0));
    }),
    le = X.useCallback(
      (e) => {
        let t = R(e);
        return (
          (t.preventUnmountOnClose = () => {
            T.set(`preventUnmountingOnClose`, !0);
          }),
          t
        );
      },
      [T]
    ),
    q = X.useCallback(() => {
      T.setOpen(!1, le(L));
    }, [T, le]);
  X.useImperativeHandle(p, () => ({ unmount: oe, close: q }), [oe, q]);
  let J;
  (F.type === `context-menu` && (J = F.context),
    X.useImperativeHandle(J?.positionerRef, () => j, [j]),
    X.useImperativeHandle(J?.actionsRef, () => ({ setOpen: K }), [K]));
  let Y = Ae({ popupStore: T, onOpenChange: K });
  ((B = Y.context.events),
    X.useEffect(() => {
      let e = ({ open: e, eventDetails: t }) => K(e, t);
      return (
        B.on(`setOpen`, e),
        () => {
          B?.off(`setOpen`, e);
        }
      );
    }, [B, K]));
  let fe = Oe(Y, {
      enabled: !te,
      bubbles: { escapeKey: m && F.type === `menu` },
      outsidePress() {
        return F.type !== `context-menu` || z.current?.type === `contextmenu`
          ? !0
          : H.current;
      },
      externalTree: ie ? E : void 0,
    }),
    pe = we(Y, { role: `menu` }),
    me = Ze(),
    he = X.useCallback(
      (e) => {
        T.select(`activeIndex`) !== e && T.set(`activeIndex`, e);
      },
      [T]
    ),
    ge = Ge(Y, {
      enabled: !te,
      listRef: T.context.itemDomElements,
      activeIndex: I,
      nested: F.type !== void 0,
      loopFocus: c,
      orientation: f,
      parentOrientation: F.type === `menubar` ? F.context.orientation : void 0,
      rtl: me === `rtl`,
      disabledIndices: d,
      onNavigate: he,
      openOnArrowKeyDown: F.type !== `context-menu`,
      externalTree: ie ? E : void 0,
      focusItemOnHover: y,
    }),
    _e = X.useCallback(
      (e) => {
        T.context.typingRef.current = e;
      },
      [T]
    ),
    {
      getReferenceProps: ye,
      getFloatingProps: be,
      getItemProps: xe,
      getTriggerProps: Se,
    } = Pe([
      fe,
      pe,
      ge,
      Qe(Y, {
        listRef: T.context.itemLabels,
        elementsRef: T.context.itemDomElements,
        activeIndex: I,
        resetMs: 500,
        onMatch: (e) => {
          k && e !== I && T.set(`activeIndex`, e);
        },
        onTypingChange: _e,
      }),
    ]),
    Ce = X.useMemo(() => {
      let e = u(
        ye(),
        {
          onMouseMove() {
            T.set(`allowMouseEnter`, !0);
          },
        },
        V
      );
      return (delete e.role, e);
    }, [ye, T, V]),
    Te = X.useMemo(() => {
      let e = Se();
      if (!e) return e;
      let t = u(e, V);
      return (delete t.role, delete t[`aria-controls`], t);
    }, [Se, V]),
    Ee = X.useMemo(
      () =>
        be({
          onMouseMove() {
            (T.set(`allowMouseEnter`, !0),
              F.type === `menu` && T.set(`hoverEnabled`, !1));
          },
          onClick() {
            T.select(`hoverEnabled`) && T.set(`hoverEnabled`, !1);
          },
          onKeyDown(e) {
            let t = T.select(`keyboardEventRelay`);
            t && !e.isPropagationStopped() && t(e);
          },
        }),
      [be, F.type, T]
    ),
    De = X.useMemo(() => xe(), [xe]);
  T.useSyncedValues({
    floatingRootContext: Y,
    activeTriggerProps: Ce,
    inactiveTriggerProps: Te,
    popupProps: Ee,
    itemProps: De,
  });
  let ke = X.useMemo(() => ({ store: T, parent: w }), [T, w]),
    je = (0, Q.jsx)(wt.Provider, {
      value: ke,
      children: typeof t == `function` ? t({ payload: ne }) : t,
    });
  return F.type === void 0 || F.type === `context-menu`
    ? (0, Q.jsx)(ue, { externalTree: E, children: je })
    : je;
});
function Yt(e) {
  let t = $().store,
    n = X.useMemo(() => ({ parentMenu: t }), [t]);
  return (0, Q.jsx)(Kt.Provider, {
    value: n,
    children: (0, Q.jsx)(Jt, { ...e }),
  });
}
function Xt(e = {}) {
  let {
      highlightItemOnHover: t,
      highlightedIndex: n,
      onHighlightedIndexChange: r,
    } = _(),
    { ref: i, index: a } = Je(e),
    o = n === a,
    s = X.useRef(null),
    c = p(i, s);
  return {
    compositeProps: X.useMemo(
      () => ({
        tabIndex: o ? 0 : -1,
        onFocus() {
          r(a);
        },
        onMouseMove() {
          let e = s.current;
          if (!t || !e) return;
          let n = e.hasAttribute(`disabled`) || e.ariaDisabled === `true`;
          !o && !n && e.focus();
        },
      }),
      [o, r, a, t]
    ),
    compositeRef: c,
    index: a,
  };
}
function Zt(e) {
  let {
      render: t,
      className: n,
      state: r = f,
      props: i = d,
      refs: a = d,
      metadata: o,
      stateAttributesMapping: s,
      tag: l = `div`,
      ...u
    } = e,
    { compositeProps: p, compositeRef: m } = Xt({ metadata: o });
  return c(l, e, {
    state: r,
    ref: [...a, m],
    props: [p, ...i, u],
    stateAttributesMapping: s,
  });
}
function Qt(e) {
  if (m(e) && e.hasAttribute(`data-rootownerid`))
    return e.getAttribute(`data-rootownerid`) ?? void 0;
  if (!S(e)) return Qt(b(e));
}
function $t(e) {
  let { enabled: t = !0, mouseDownAction: n, open: r } = e,
    i = X.useRef(!1);
  return X.useMemo(
    () =>
      t
        ? {
            onMouseDown: (e) => {
              ((n === `open` && !r) || (n === `close` && r)) &&
                ((i.current = !0),
                j(e.currentTarget).addEventListener(
                  `click`,
                  () => {
                    i.current = !1;
                  },
                  { once: !0 }
                ));
            },
            onClick: (e) => {
              i.current && ((i.current = !1), e.preventBaseUIHandler());
            },
          }
        : f,
    [t, n, r]
  );
}
var en = 2,
  tn = V(function (e, t) {
    let {
        render: n,
        className: r,
        disabled: i = !1,
        nativeButton: a = !0,
        id: o,
        openOnHover: u,
        delay: d = 100,
        closeDelay: p = 0,
        handle: m,
        payload: h,
        ...g
      } = e,
      v = $(!0),
      y = m?.store ?? v?.store;
    if (!y) throw Error(s(85));
    let b = D(o),
      S = y.useState(`isTriggerActive`, b),
      C = y.useState(`floatingRootContext`),
      w = y.useState(`isOpenedByTrigger`, b),
      T = X.useRef(null),
      E = rn(),
      O = _(!0),
      k = W(),
      A = X.useMemo(() => k ?? new K(), [k]),
      { registerTrigger: ee, isMountedByThisTrigger: M } = be(b, T, y, {
        payload: h,
        closeDelay: p,
        parent: E,
        floatingTreeRoot: A,
        floatingNodeId: de(A),
        floatingParentNodeId: se(),
        keyboardEventRelay: O?.relayKeyboardEvent,
      }),
      N = E.type === `menubar`,
      te = y.useState(`disabled`),
      P = i || te || (N && E.context.disabled),
      { getButtonProps: F, buttonRef: re } = x({ disabled: P, native: a });
    X.useEffect(() => {
      !w &&
        E.type === void 0 &&
        (y.context.allowMouseUpTriggerRef.current = !1);
    }, [y, w, E.type]);
    let L = X.useRef(null),
      ie = ce(),
      ae = l((e) => {
        if (!L.current) return;
        (ie.clear(), (y.context.allowMouseUpTriggerRef.current = !1));
        let t = e.target;
        if (
          z(L.current, t) ||
          z(y.select(`positionerElement`), t) ||
          t === L.current ||
          (t != null && Qt(t) === y.select(`rootId`))
        )
          return;
        let n = qe(L.current);
        (e.clientX >= n.left - en &&
          e.clientX <= n.right + en &&
          e.clientY >= n.top - en &&
          e.clientY <= n.bottom + en) ||
          A.events.emit(`close`, { domEvent: e, reason: I });
      });
    X.useEffect(() => {
      w &&
        y.select(`lastOpenChangeReason`) === `trigger-hover` &&
        j(L.current).addEventListener(`mouseup`, ae, { once: !0 });
    }, [w, ae, y]);
    let V = N && E.context.hasSubmenuOpen,
      oe = mt(C, {
        enabled:
          (u ?? V) && !P && E.type !== `context-menu` && (!N || (V && !M)),
        handleClose: xt({ blockPointerEvents: !N }),
        mouseOnly: !0,
        move: !1,
        restMs: E.type === void 0 ? d : void 0,
        delay: { close: p },
        triggerElementRef: T,
        externalTree: A,
        isActiveTrigger: S,
      }),
      H = nn(w, y.select(`lastOpenChangeReason`)),
      G = B(C, {
        enabled: !P && E.type !== `context-menu`,
        event: w && N ? `click` : `mousedown`,
        toggle: !0,
        ignoreMouse: !1,
        stickIfOpen: E.type === void 0 ? H : !1,
      }),
      le = it(C, { enabled: !P && V }),
      ue = $t({ open: w, enabled: N, mouseDownAction: `open` }),
      q = Pe([G, le]),
      J = { disabled: P, open: w },
      Y = y.useState(`triggerProps`, M),
      fe = [L, t, re, ee, T],
      pe = [
        q.getReferenceProps(),
        oe ?? f,
        Y,
        {
          'aria-haspopup': `menu`,
          id: b,
          onMouseDown: (e) => {
            y.select(`open`) ||
              (ie.start(200, () => {
                y.context.allowMouseUpTriggerRef.current = !0;
              }),
              j(e.currentTarget).addEventListener(`mouseup`, ae, { once: !0 }));
          },
        },
        N ? { role: `menuitem` } : {},
        ue,
        g,
        F,
      ],
      me = X.useRef(null),
      he = l((e) => {
        (ft.flushSync(() => {
          y.setOpen(!1, R(ne, e.nativeEvent, e.currentTarget));
        }),
          Le(me.current)?.focus());
      }),
      _e = l((e) => {
        let t = y.select(`positionerElement`);
        if (t && Se(e, t))
          y.context.beforeContentFocusGuardRef.current?.focus();
        else {
          ft.flushSync(() => {
            y.setOpen(!1, R(ne, e.nativeEvent, e.currentTarget));
          });
          let n = Ne(y.context.triggerFocusTargetRef.current || T.current);
          for (; n !== null && z(t, n); ) {
            let e = n;
            if (((n = ye(n)), n === e)) break;
          }
          n?.focus();
        }
      }),
      ve = c(`button`, e, {
        enabled: !N,
        stateAttributesMapping: ge,
        state: J,
        ref: fe,
        props: pe,
      });
    return N
      ? (0, Q.jsx)(Zt, {
          tag: `button`,
          render: n,
          className: r,
          state: J,
          refs: fe,
          props: pe,
          stateAttributesMapping: ge,
        })
      : w
        ? (0, Q.jsxs)(X.Fragment, {
            children: [
              (0, Q.jsx)(U, { ref: me, onFocus: he }, `${b}-pre-focus-guard`),
              (0, Q.jsx)(X.Fragment, { children: ve }, b),
              (0, Q.jsx)(
                U,
                { ref: y.context.triggerFocusTargetRef, onFocus: _e },
                `${b}-post-focus-guard`
              ),
            ],
          })
        : (0, Q.jsx)(X.Fragment, { children: ve }, b);
  });
function nn(e, t) {
  let n = ce(),
    [r, i] = X.useState(!1);
  return (
    h(() => {
      e && t === `trigger-hover`
        ? (i(!0),
          n.start(500, () => {
            i(!1);
          }))
        : e || (n.clear(), i(!1));
    }, [e, t, n]),
    r
  );
}
function rn() {
  let e = Et(!0),
    t = $(!0),
    n = Ht(!0);
  return X.useMemo(
    () =>
      n
        ? { type: `menubar`, context: n }
        : e && !t
          ? { type: `context-menu`, context: e }
          : { type: void 0 },
    [e, t, n]
  );
}
var an = X.forwardRef(function (e, t) {
  let {
      render: n,
      className: r,
      label: i,
      id: a,
      nativeButton: o = !1,
      openOnHover: l = !0,
      delay: u = 100,
      closeDelay: d = 0,
      disabled: f = !1,
      ...p
    } = e,
    m = Je(),
    h = Ct(),
    { store: g } = $(),
    _ = D(a),
    v = g.useState(`open`),
    y = g.useState(`floatingRootContext`),
    b = g.useState(`floatingTreeRoot`),
    x = Be(_, g),
    S = X.useCallback(
      (e) => {
        let t = x(e);
        return (
          e !== null &&
            g.select(`open`) &&
            g.select(`activeTriggerId`) == null &&
            g.update({
              activeTriggerId: _,
              activeTriggerElement: e,
              closeDelay: d,
            }),
          t
        );
      },
      [x, d, g, _]
    ),
    C = X.useRef(null),
    w = X.useCallback(
      (e) => {
        ((C.current = e), g.set(`activeTriggerElement`, e));
      },
      [g]
    ),
    T = qt();
  if (!T?.parentMenu) throw Error(s(37));
  g.useSyncedValue(`closeDelay`, d);
  let E = T.parentMenu,
    O = E.useState(`itemProps`),
    k = E.useState(`isActive`, m.index),
    A = X.useMemo(
      () => ({
        type: `submenu-trigger`,
        setActive() {
          E.set(`activeIndex`, m.index);
        },
      }),
      [E, m.index]
    ),
    ee = g.useState(`disabled`),
    j = f || ee,
    { getItemProps: M, itemRef: N } = kt({
      closeOnClick: !1,
      disabled: j,
      highlighted: k,
      id: _,
      store: g,
      typingRef: E.context.typingRef,
      nativeButton: o,
      itemMetadata: A,
      nodeId: h?.nodeId,
    }),
    te = g.useState(`hoverEnabled`),
    P = E.useState(`allowMouseEnter`),
    F = mt(y, {
      enabled: te && l && !j,
      handleClose: xt({ blockPointerEvents: !0 }),
      mouseOnly: !0,
      move: !0,
      restMs: u,
      delay: P ? { open: u, close: d } : 0,
      triggerElementRef: C,
      externalTree: b,
    }),
    I = Pe([
      B(y, {
        enabled: !j,
        event: `mousedown`,
        toggle: !l,
        ignoreMouse: l,
        stickIfOpen: !1,
      }),
    ]),
    ne = g.useState(`triggerProps`, !0);
  return (
    delete ne.id,
    c(`div`, e, {
      state: { disabled: j, highlighted: k, open: v },
      stateAttributesMapping: J,
      props: [
        I.getReferenceProps(),
        F,
        ne,
        O,
        {
          tabIndex: v || k ? 0 : -1,
          onBlur() {
            k && E.set(`activeIndex`, null);
          },
        },
        p,
        M,
      ],
      ref: [t, m.ref, N, S, w],
    })
  );
});
function on({ ...e }) {
  return (0, Q.jsx)(Jt, { 'data-slot': `dropdown-menu`, ...e });
}
function sn({ ...e }) {
  return (0, Q.jsx)(tn, { 'data-slot': `dropdown-menu-trigger`, ...e });
}
function cn({
  align: e = `start`,
  alignOffset: t = 0,
  side: n = `bottom`,
  sideOffset: r = 4,
  className: i,
  ...o
}) {
  return (0, Q.jsx)(zt, {
    children: (0, Q.jsx)(Bt, {
      className: `isolate z-50 outline-none`,
      align: e,
      alignOffset: t,
      side: n,
      sideOffset: r,
      children: (0, Q.jsx)(It, {
        'data-slot': `dropdown-menu-content`,
        className: a(
          `z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95`,
          i
        ),
        ...o,
      }),
    }),
  });
}
function ln({ ...e }) {
  return (0, Q.jsx)(Mt, { 'data-slot': `dropdown-menu-group`, ...e });
}
function un({ className: e, inset: t, ...n }) {
  return (0, Q.jsx)(Nt, {
    'data-slot': `dropdown-menu-label`,
    'data-inset': t,
    className: a(
      `px-2 py-1.5 text-xs font-medium text-muted-foreground data-inset:pl-7`,
      e
    ),
    ...n,
  });
}
function dn({ className: e, inset: t, variant: n = `default`, ...r }) {
  return (0, Q.jsx)(Pt, {
    'data-slot': `dropdown-menu-item`,
    'data-inset': t,
    'data-variant': n,
    className: a(
      `group/dropdown-menu-item relative flex cursor-default items-center gap-2 rounded-md px-2 py-2 text-sm font-normal outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive`,
      e
    ),
    ...r,
  });
}
function fn({ ...e }) {
  return (0, Q.jsx)(Yt, { 'data-slot': `dropdown-menu-sub`, ...e });
}
function pn({ className: e, inset: t, children: n, ...r }) {
  return (0, Q.jsxs)(an, {
    'data-slot': `dropdown-menu-sub-trigger`,
    'data-inset': t,
    className: a(
      `flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
      e
    ),
    ...r,
    children: [n, (0, Q.jsx)(i, { className: `ml-auto` })],
  });
}
function mn({
  align: e = `start`,
  alignOffset: t = -3,
  side: n = `right`,
  sideOffset: r = 0,
  className: i,
  ...o
}) {
  return (0, Q.jsx)(cn, {
    'data-slot': `dropdown-menu-sub-content`,
    className: a(
      `w-auto min-w-[96px] rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
      i
    ),
    align: e,
    alignOffset: t,
    side: n,
    sideOffset: r,
    ...o,
  });
}
function hn({ className: e, ...t }) {
  return (0, Q.jsx)(w, {
    'data-slot': `dropdown-menu-separator`,
    className: a(`-mx-1 my-1 h-px bg-border`, e),
    ...t,
  });
}
export {
  un as a,
  mn as c,
  xt as d,
  mt as f,
  et as h,
  dn as i,
  pn as l,
  it as m,
  cn as n,
  hn as o,
  dt as p,
  ln as r,
  fn as s,
  on as t,
  sn as u,
};
