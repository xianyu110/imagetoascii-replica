import {
  g as _,
  p as b,
  E as c,
  v as C,
  M as d,
  z as E,
  y as ee,
  P as f,
  b as g,
  a as h,
  F as l,
  _ as m,
  B as o,
  R as p,
  D as s,
  u as S,
  x as T,
  L as u,
  m as v,
  w,
  r as x,
  o as y,
} from './button-bN-wY-Ql.js';
import {
  L as A,
  h as ae,
  v as B,
  F as D,
  _ as F,
  x as H,
  b as I,
  d as ie,
  M as j,
  I as k,
  r as L,
  S as M,
  U as N,
  T as ne,
  H as O,
  o as oe,
  V as P,
  s as R,
  a as re,
  y as se,
  B as te,
  z as U,
  w as V,
  t as z,
} from './createBaseUIEventDetails-eqndMbrJ.js';
import { Ou as a, Du as i } from './index-CNkADuMW.js';
import { t as r } from './react-dom-C1PHl06U.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';

var W = t(n()),
  ce = [];
function G(e) {
  W.useEffect(e, ce);
}
var le = 0,
  K = class e {
    static create() {
      return new e();
    }
    currentId = le;
    start(e, t) {
      (this.clear(),
        (this.currentId = setTimeout(() => {
          ((this.currentId = le), t());
        }, e)));
    }
    isStarted() {
      return this.currentId !== le;
    }
    clear = () => {
      this.currentId !== le &&
        (clearTimeout(this.currentId), (this.currentId = le));
    };
    disposeEffect = () => this.clear;
  };
function ue() {
  let e = E(K.create).current;
  return (G(e.disposeEffect), e);
}
function de(e, t, n = !0) {
  return e
    .filter((e) => e.parentId === t && (!n || e.context?.open))
    .flatMap((t) => [t, ...de(e, t.id, n)]);
}
function fe(e, t) {
  let n = [],
    r = e.find((e) => e.id === t)?.parentId;
  for (; r; ) {
    let t = e.find((e) => e.id === r);
    ((r = t?.parentId), t && (n = n.concat(t)));
  }
  return n;
}
function pe(e) {
  (e.preventDefault(), e.stopPropagation());
}
function me(e) {
  return `nativeEvent` in e;
}
function he(e) {
  return e.pointerType === `` && e.isTrusted
    ? !0
    : D && e.pointerType
      ? e.type === `click` && e.buttons === 1
      : e.detail === 0 && !e.pointerType;
}
function ge(e) {
  return A
    ? !1
    : (!D && e.width === 0 && e.height === 0) ||
        (D &&
          e.width === 1 &&
          e.height === 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === `mouse`) ||
        (e.width < 1 &&
          e.height < 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === `touch`);
}
function _e(e, t) {
  let n = [`mouse`, `pen`];
  return (t || n.push(``, void 0), n.includes(e));
}
function q(e) {
  let t = e.type;
  return t === `click` || t === `mousedown` || t === `keydown` || t === `keyup`;
}
var ve = [`top`, `right`, `bottom`, `left`],
  J = Math.min,
  ye = Math.max,
  be = Math.round,
  xe = Math.floor,
  Se = (e) => ({ x: e, y: e }),
  Ce = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function we(e, t, n) {
  return ye(e, J(t, n));
}
function Te(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ee(e) {
  return e.split(`-`)[0];
}
function De(e) {
  return e.split(`-`)[1];
}
function Oe(e) {
  return e === `x` ? `y` : `x`;
}
function ke(e) {
  return e === `y` ? `height` : `width`;
}
function Ae(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function je(e) {
  return Oe(Ae(e));
}
function Me(e, t, n) {
  n === void 0 && (n = !1);
  let r = De(e),
    i = je(e),
    a = ke(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`;
  return (t.reference[a] > t.floating[a] && (o = Ve(o)), [o, Ve(o)]);
}
function Ne(e) {
  let t = Ve(e);
  return [Pe(e), t, Pe(t)];
}
function Pe(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`);
}
var Fe = [`left`, `right`],
  Ie = [`right`, `left`],
  Le = [`top`, `bottom`],
  Re = [`bottom`, `top`];
function ze(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? Ie : Fe) : t ? Fe : Ie;
    case `left`:
    case `right`:
      return t ? Le : Re;
    default:
      return [];
  }
}
function Be(e, t, n, r) {
  let i = De(e),
    a = ze(Ee(e), n === `start`, r);
  return (
    i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(Pe)))),
    a
  );
}
function Ve(e) {
  let t = Ee(e);
  return Ce[t] + e.slice(t.length);
}
function He(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ue(e) {
  return typeof e == `number`
    ? { top: e, right: e, bottom: e, left: e }
    : He(e);
}
function We(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function Ge(e, t, n) {
  return Math.floor(e / t) !== n;
}
function Ke(e, t) {
  return t < 0 || t >= e.current.length;
}
function qe(e, t) {
  return Y(e, { disabledIndices: t });
}
function Je(e, t) {
  return Y(e, {
    decrement: !0,
    startingIndex: e.current.length,
    disabledIndices: t,
  });
}
function Y(
  e,
  {
    startingIndex: t = -1,
    decrement: n = !1,
    disabledIndices: r,
    amount: i = 1,
  } = {}
) {
  let a = t;
  do a += n ? -i : i;
  while (a >= 0 && a <= e.current.length - 1 && $e(e, a, r));
  return a;
}
function Ye(
  e,
  {
    event: t,
    orientation: n,
    loopFocus: r,
    rtl: i,
    cols: a,
    disabledIndices: o,
    minIndex: s,
    maxIndex: c,
    prevIndex: l,
    stopEvent: u = !1,
  }
) {
  let d = l,
    f;
  if (
    (t.key === `ArrowUp` ? (f = `up`) : t.key === `ArrowDown` && (f = `down`),
    f)
  ) {
    let n = [],
      i = [],
      p = !1,
      m = 0;
    {
      let t = null,
        r = -1;
      e.current.forEach((e, a) => {
        if (e == null) return;
        m += 1;
        let o = e.closest(`[role="row"]`);
        (o && (p = !0),
          (o !== t || r === -1) && ((t = o), (r += 1), (n[r] = [])),
          n[r].push(a),
          (i[a] = r));
      });
    }
    let h = !1,
      g = 0;
    if (p)
      for (let e of n) {
        let t = e.length;
        (t > g && (g = t), t !== a && (h = !0));
      }
    let _ = h && m < e.current.length,
      v = g || a,
      y = (t) => {
        if (!h || l === -1) return;
        let a = i[l];
        if (a == null) return;
        let s = n[a].indexOf(l),
          c = t === `up` ? -1 : 1;
        for (let t = a + c, i = 0; i < n.length; i += 1, t += c) {
          if (t < 0 || t >= n.length) {
            if (!r || _) return;
            t = t < 0 ? n.length - 1 : 0;
          }
          let i = n[t];
          for (let t = Math.min(s, i.length - 1); t >= 0; --t) {
            let n = i[t];
            if (!$e(e, n, o)) return n;
          }
        }
      },
      b = (t) => {
        if (!_ || l === -1) return;
        let n = l % v,
          i = t === `up` ? -v : v,
          a = c - (c % v),
          s = xe(c / v) + 1;
        for (let t = l - n + i, u = 0; u < s; u += 1, t += i) {
          if (t < 0 || t > c) {
            if (!r) return;
            t = t < 0 ? a : 0;
          }
          let i = Math.min(t + v - 1, c);
          for (let r = Math.min(t + n, i); r >= t; --r)
            if (!$e(e, r, o)) return r;
        }
      };
    u && pe(t);
    let x = y(f) ?? b(f);
    if (x !== void 0) d = x;
    else if (l === -1) d = f === `up` ? c : s;
    else if (
      ((d = Y(e, {
        startingIndex: l,
        amount: v,
        decrement: f === `up`,
        disabledIndices: o,
      })),
      r)
    ) {
      if (f === `up` && (l - v < s || d < 0)) {
        let e = l % v,
          t = c % v,
          n = c - (t - e);
        d = t === e ? c : t > e ? n : n - v;
      }
      f === `down` &&
        l + v > c &&
        (d = Y(e, {
          startingIndex: (l % v) - v,
          amount: v,
          disabledIndices: o,
        }));
    }
    Ke(e, d) && (d = l);
  }
  if (n === `both`) {
    let n = xe(l / a);
    (t.key === (i ? `ArrowLeft` : `ArrowRight`) &&
      (u && pe(t),
      l % a === a - 1
        ? r &&
          (d = Y(e, { startingIndex: l - (l % a) - 1, disabledIndices: o }))
        : ((d = Y(e, { startingIndex: l, disabledIndices: o })),
          r &&
            Ge(d, a, n) &&
            (d = Y(e, { startingIndex: l - (l % a) - 1, disabledIndices: o }))),
      Ge(d, a, n) && (d = l)),
      t.key === (i ? `ArrowRight` : `ArrowLeft`) &&
        (u && pe(t),
        l % a === 0
          ? r &&
            (d = Y(e, {
              startingIndex: l + (a - (l % a)),
              decrement: !0,
              disabledIndices: o,
            }))
          : ((d = Y(e, {
              startingIndex: l,
              decrement: !0,
              disabledIndices: o,
            })),
            r &&
              Ge(d, a, n) &&
              (d = Y(e, {
                startingIndex: l + (a - (l % a)),
                decrement: !0,
                disabledIndices: o,
              }))),
        Ge(d, a, n) && (d = l)));
    let s = xe(c / a) === n;
    Ke(e, d) &&
      (d =
        r && s
          ? t.key === (i ? `ArrowRight` : `ArrowLeft`)
            ? c
            : Y(e, { startingIndex: l - (l % a) - 1, disabledIndices: o })
          : l);
  }
  return d;
}
function Xe(e, t, n) {
  let r = [],
    i = 0;
  return (
    e.forEach(({ width: e, height: a }, o) => {
      let s = !1;
      for (n && (i = 0); !s; ) {
        let n = [];
        for (let r = 0; r < e; r += 1)
          for (let e = 0; e < a; e += 1) n.push(i + r + e * t);
        (i % t) + e <= t && n.every((e) => r[e] == null)
          ? (n.forEach((e) => {
              r[e] = o;
            }),
            (s = !0))
          : (i += 1);
      }
    }),
    [...r]
  );
}
function Ze(e, t, n, r, i) {
  if (e === -1) return -1;
  let a = n.indexOf(e),
    o = t[e];
  switch (i) {
    case `tl`:
      return a;
    case `tr`:
      return o ? a + o.width - 1 : a;
    case `bl`:
      return o ? a + (o.height - 1) * r : a;
    case `br`:
      return n.lastIndexOf(e);
    default:
      return -1;
  }
}
function Qe(e, t) {
  return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
}
function $e(e, t, n) {
  if (typeof n == `function` ? n(t) : (n?.includes(t) ?? !1)) return !0;
  let r = e.current[t];
  return r
    ? et(r)
      ? !n &&
        (r.hasAttribute(`disabled`) ||
          r.getAttribute(`aria-disabled`) === `true`)
      : !0
    : !1;
}
function et(e) {
  return y(e).display !== `none`;
}
var tt = [
    `input:not([inert]):not([inert] *)`,
    `select:not([inert]):not([inert] *)`,
    `textarea:not([inert]):not([inert] *)`,
    `a[href]:not([inert]):not([inert] *)`,
    `button:not([inert]):not([inert] *)`,
    `[tabindex]:not(slot):not([inert]):not([inert] *)`,
    `audio[controls]:not([inert]):not([inert] *)`,
    `video[controls]:not([inert]):not([inert] *)`,
    `[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,
    `details>summary:first-of-type:not([inert]):not([inert] *)`,
    `details:not([inert]):not([inert] *)`,
  ].join(`,`),
  nt = typeof Element > `u`,
  rt = nt
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  it =
    !nt && Element.prototype.getRootNode
      ? function (e) {
          return e?.getRootNode?.call(e);
        }
      : function (e) {
          return e?.ownerDocument;
        },
  at = function (e, t) {
    t === void 0 && (t = !0);
    var n = e?.getAttribute?.call(e, `inert`);
    return (
      n === `` ||
      n === `true` ||
      (t &&
        e &&
        (typeof e.closest == `function`
          ? e.closest(`[inert]`)
          : at(e.parentNode)))
    );
  },
  ot = function (e) {
    var t = e?.getAttribute?.call(e, `contenteditable`);
    return t === `` || t === `true`;
  },
  st = function (e, t, n) {
    if (at(e)) return [];
    var r = Array.prototype.slice.apply(e.querySelectorAll(tt));
    return (t && rt.call(e, tt) && r.unshift(e), (r = r.filter(n)), r);
  },
  ct = function (e, t, n) {
    for (var r = [], i = Array.from(e); i.length; ) {
      var a = i.shift();
      if (!at(a, !1))
        if (a.tagName === `SLOT`) {
          var o = a.assignedElements(),
            s = ct(o.length ? o : a.children, !0, n);
          n.flatten
            ? r.push.apply(r, s)
            : r.push({ scopeParent: a, candidates: s });
        } else {
          rt.call(a, tt) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
          var c =
              a.shadowRoot ||
              (typeof n.getShadowRoot == `function` && n.getShadowRoot(a)),
            l = !at(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
          if (c && l) {
            var u = ct(c === !0 ? a.children : c.children, !0, n);
            n.flatten
              ? r.push.apply(r, u)
              : r.push({ scopeParent: a, candidates: u });
          } else i.unshift.apply(i, a.children);
        }
    }
    return r;
  },
  lt = function (e) {
    return !isNaN(parseInt(e.getAttribute(`tabindex`), 10));
  },
  ut = function (e) {
    if (!e) throw Error(`No node provided`);
    return e.tabIndex < 0 &&
      (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || ot(e)) &&
      !lt(e)
      ? 0
      : e.tabIndex;
  },
  dt = function (e, t) {
    var n = ut(e);
    return n < 0 && t && !lt(e) ? 0 : n;
  },
  ft = function (e, t) {
    return e.tabIndex === t.tabIndex
      ? e.documentOrder - t.documentOrder
      : e.tabIndex - t.tabIndex;
  },
  pt = function (e) {
    return e.tagName === `INPUT`;
  },
  mt = function (e) {
    return pt(e) && e.type === `hidden`;
  },
  ht = function (e) {
    return (
      e.tagName === `DETAILS` &&
      Array.prototype.slice.apply(e.children).some(function (e) {
        return e.tagName === `SUMMARY`;
      })
    );
  },
  gt = function (e, t) {
    for (var n = 0; n < e.length; n++)
      if (e[n].checked && e[n].form === t) return e[n];
  },
  _t = function (e) {
    if (!e.name) return !0;
    var t = e.form || it(e),
      n = function (e) {
        return t.querySelectorAll(`input[type="radio"][name="` + e + `"]`);
      },
      r;
    if (
      typeof window < `u` &&
      window.CSS !== void 0 &&
      typeof window.CSS.escape == `function`
    )
      r = n(window.CSS.escape(e.name));
    else
      try {
        r = n(e.name);
      } catch (e) {
        return (
          console.error(
            `Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,
            e.message
          ),
          !1
        );
      }
    var i = gt(r, e.form);
    return !i || i === e;
  },
  vt = function (e) {
    return pt(e) && e.type === `radio`;
  },
  yt = function (e) {
    return vt(e) && !_t(e);
  },
  bt = function (e) {
    var t = e && it(e),
      n = t?.host,
      r = !1;
    if (t && t !== e) {
      var i, a, o;
      for (
        r = !!(
          ((i = n) != null && (a = i.ownerDocument) != null && a.contains(n)) ||
          (e != null && (o = e.ownerDocument) != null && o.contains(e))
        );
        !r && n;
      ) {
        var s, c;
        ((t = it(n)),
          (n = t?.host),
          (r = !!(
            (s = n) != null &&
            (c = s.ownerDocument) != null &&
            c.contains(n)
          )));
      }
    }
    return r;
  },
  xt = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.width,
      r = t.height;
    return n === 0 && r === 0;
  },
  St = function (e, t) {
    var n = t.displayCheck,
      r = t.getShadowRoot;
    if (n === `full-native` && `checkVisibility` in e)
      return !e.checkVisibility({
        checkOpacity: !1,
        opacityProperty: !1,
        contentVisibilityAuto: !0,
        visibilityProperty: !0,
        checkVisibilityCSS: !0,
      });
    if (getComputedStyle(e).visibility === `hidden`) return !0;
    var i = rt.call(e, `details>summary:first-of-type`) ? e.parentElement : e;
    if (rt.call(i, `details:not([open]) *`)) return !0;
    if (!n || n === `full` || n === `full-native` || n === `legacy-full`) {
      if (typeof r == `function`) {
        for (var a = e; e; ) {
          var o = e.parentElement,
            s = it(e);
          if (o && !o.shadowRoot && r(o) === !0) return xt(e);
          e = e.assignedSlot
            ? e.assignedSlot
            : !o && s !== e.ownerDocument
              ? s.host
              : o;
        }
        e = a;
      }
      if (bt(e)) return !e.getClientRects().length;
      if (n !== `legacy-full`) return !0;
    } else if (n === `non-zero-area`) return xt(e);
    return !1;
  },
  Ct = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t; ) {
        if (t.tagName === `FIELDSET` && t.disabled) {
          for (var n = 0; n < t.children.length; n++) {
            var r = t.children.item(n);
            if (r.tagName === `LEGEND`)
              return rt.call(t, `fieldset[disabled] *`) ? !0 : !r.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  wt = function (e, t) {
    return !(t.disabled || mt(t) || St(t, e) || ht(t) || Ct(t));
  },
  Tt = function (e, t) {
    return !(yt(t) || ut(t) < 0 || !wt(e, t));
  },
  Et = function (e) {
    var t = parseInt(e.getAttribute(`tabindex`), 10);
    return !!(isNaN(t) || t >= 0);
  },
  Dt = function (e) {
    var t = [],
      n = [];
    return (
      e.forEach(function (e, r) {
        var i = !!e.scopeParent,
          a = i ? e.scopeParent : e,
          o = dt(a, i),
          s = i ? Dt(e.candidates) : a;
        o === 0
          ? i
            ? t.push.apply(t, s)
            : t.push(a)
          : n.push({
              documentOrder: r,
              tabIndex: o,
              item: e,
              isScope: i,
              content: s,
            });
      }),
      n
        .sort(ft)
        .reduce(function (e, t) {
          return (
            t.isScope ? e.push.apply(e, t.content) : e.push(t.content),
            e
          );
        }, [])
        .concat(t)
    );
  },
  Ot = function (e, t) {
    return (
      (t ||= {}),
      Dt(
        t.getShadowRoot
          ? ct([e], t.includeContainer, {
              filter: Tt.bind(null, t),
              flatten: !1,
              getShadowRoot: t.getShadowRoot,
              shadowRootFilter: Et,
            })
          : st(e, t.includeContainer, Tt.bind(null, t))
      )
    );
  },
  kt = function (e, t) {
    return (
      (t ||= {}),
      t.getShadowRoot
        ? ct([e], t.includeContainer, {
            filter: wt.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot,
          })
        : st(e, t.includeContainer, wt.bind(null, t))
    );
  },
  At = function (e, t) {
    if (((t ||= {}), !e)) throw Error(`No node provided`);
    return rt.call(e, tt) === !1 ? !1 : Tt(t, e);
  },
  jt = () => ({
    getShadowRoot: !0,
    displayCheck:
      typeof ResizeObserver == `function` &&
      ResizeObserver.toString().includes(`[native code]`)
        ? `full`
        : `none`,
  });
function Mt(e, t) {
  let n = Ot(e, jt()),
    r = n.length;
  if (r === 0) return;
  let i = F(P(e)),
    a = n.indexOf(i);
  return n[a === -1 ? (t === 1 ? 0 : r - 1) : a + t];
}
function Nt(e) {
  return Mt(P(e).body, 1) || e;
}
function Pt(e) {
  return Mt(P(e).body, -1) || e;
}
function Ft(e, t) {
  if (!e) return null;
  let n = Ot(P(e).body, jt()),
    r = n.length;
  if (r === 0) return null;
  let i = n.indexOf(e);
  return i === -1 ? null : n[(i + t + r) % r];
}
function It(e) {
  return Ft(e, 1);
}
function Lt(e) {
  return Ft(e, -1);
}
function Rt(e, t) {
  let n = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !B(n, r);
}
function zt(e) {
  Ot(e, jt()).forEach((e) => {
    ((e.dataset.tabindex = e.getAttribute(`tabindex`) || ``),
      e.setAttribute(`tabindex`, `-1`));
  });
}
function Bt(e) {
  e.querySelectorAll(`[data-tabindex]`).forEach((e) => {
    let t = e.dataset.tabindex;
    (delete e.dataset.tabindex,
      t ? e.setAttribute(`tabindex`, t) : e.removeAttribute(`tabindex`));
  });
}
var Vt = null;
globalThis.requestAnimationFrame;
var Ht = new (class {
    callbacks = [];
    callbacksCount = 0;
    nextId = 1;
    startId = 1;
    isScheduled = !1;
    tick = (e) => {
      this.isScheduled = !1;
      let t = this.callbacks,
        n = this.callbacksCount;
      if (
        ((this.callbacks = []),
        (this.callbacksCount = 0),
        (this.startId = this.nextId),
        n > 0)
      )
        for (let n = 0; n < t.length; n += 1) t[n]?.(e);
    };
    request(e) {
      let t = this.nextId;
      return (
        (this.nextId += 1),
        this.callbacks.push(e),
        (this.callbacksCount += 1),
        (this.isScheduled ||= (requestAnimationFrame(this.tick), !0)),
        t
      );
    }
    cancel(e) {
      let t = e - this.startId;
      t < 0 ||
        t >= this.callbacks.length ||
        ((this.callbacks[t] = null), --this.callbacksCount);
    }
  })(),
  X = class e {
    static create() {
      return new e();
    }
    static request(e) {
      return Ht.request(e);
    }
    static cancel(e) {
      return Ht.cancel(e);
    }
    currentId = Vt;
    request(e) {
      (this.cancel(),
        (this.currentId = Ht.request(() => {
          ((this.currentId = Vt), e());
        })));
    }
    cancel = () => {
      this.currentId !== Vt &&
        (Ht.cancel(this.currentId), (this.currentId = Vt));
    };
    disposeEffect = () => this.cancel;
  };
function Ut() {
  let e = E(X.create).current;
  return (G(e.disposeEffect), e);
}
var Wt = t(r()),
  Z = e();
function Q(e) {
  return e == null ? e : `current` in e ? e.current : e;
}
var Gt = (function (e) {
    return (
      (e.startingStyle = `data-starting-style`),
      (e.endingStyle = `data-ending-style`),
      e
    );
  })({}),
  Kt = { [Gt.startingStyle]: `` },
  qt = { [Gt.endingStyle]: `` },
  Jt = {
    transitionStatus(e) {
      return e === `starting` ? Kt : e === `ending` ? qt : null;
    },
  },
  Yt = a(),
  Xt = i();
function Zt(e, t = !1, n = !0) {
  let r = Ut();
  return c((i, a = null) => {
    r.cancel();
    function o() {
      Wt.flushSync(i);
    }
    let s = Q(e);
    if (s == null) return;
    let c = s;
    if (
      typeof c.getAnimations != `function` ||
      globalThis.BASE_UI_ANIMATIONS_DISABLED
    )
      i();
    else {
      function e() {
        let e = Gt.startingStyle;
        if (!c.hasAttribute(e)) {
          r.request(i);
          return;
        }
        let t = new MutationObserver(() => {
          c.hasAttribute(e) || (t.disconnect(), i());
        });
        (t.observe(c, { attributes: !0, attributeFilter: [e] }),
          a?.addEventListener(`abort`, () => t.disconnect(), { once: !0 }));
      }
      function i() {
        Promise.all(c.getAnimations().map((e) => e.finished))
          .then(() => {
            a?.aborted || o();
          })
          .catch(() => {
            let e = c.getAnimations();
            if (n) {
              if (a?.aborted) return;
              o();
            } else
              e.length > 0 &&
                e.some((e) => e.pending || e.playState !== `finished`) &&
                i();
          });
      }
      if (t) {
        e();
        return;
      }
      r.request(i);
    }
  });
}
function Qt(e) {
  let { enabled: t = !0, open: n, ref: r, onComplete: i } = e,
    a = c(i),
    o = Zt(r, n, !1);
  W.useEffect(() => {
    if (!t) return;
    let e = new AbortController();
    return (
      o(a, e.signal),
      () => {
        e.abort();
      }
    );
  }, [t, n, a, o]);
}
function $t(e, t = !1, n = !1) {
  let [r, i] = W.useState(e && t ? `idle` : void 0),
    [a, o] = W.useState(e);
  return (
    e && !a && (o(!0), i(`starting`)),
    !e && a && r !== `ending` && !n && i(`ending`),
    !e && !a && r === `ending` && i(void 0),
    h(() => {
      if (!e && a && r !== `ending` && n) {
        let e = X.request(() => {
          i(`ending`);
        });
        return () => {
          X.cancel(e);
        };
      }
    }, [e, a, r, n]),
    h(() => {
      if (!e || t) return;
      let n = X.request(() => {
        i(void 0);
      });
      return () => {
        X.cancel(n);
      };
    }, [t, e]),
    h(() => {
      if (!e || !t) return;
      e && a && r !== `idle` && i(`starting`);
      let n = X.request(() => {
        i(`idle`);
      });
      return () => {
        X.cancel(n);
      };
    }, [t, e, a, i, r]),
    W.useMemo(
      () => ({ mounted: a, setMounted: o, transitionStatus: r }),
      [a, r]
    )
  );
}
var en = W.createContext(void 0);
function tn(e) {
  let t = W.useContext(en);
  if (e === !1 && t === void 0) throw Error(o(27));
  return t;
}
var nn = (function (e) {
    return (
      (e.open = `data-open`),
      (e.closed = `data-closed`),
      (e[(e.startingStyle = Gt.startingStyle)] = `startingStyle`),
      (e[(e.endingStyle = Gt.endingStyle)] = `endingStyle`),
      (e.anchorHidden = `data-anchor-hidden`),
      (e.side = `data-side`),
      (e.align = `data-align`),
      e
    );
  })({}),
  rn = (function (e) {
    return ((e.popupOpen = `data-popup-open`), (e.pressed = `data-pressed`), e);
  })({}),
  an = { [rn.popupOpen]: `` },
  on = { [rn.popupOpen]: ``, [rn.pressed]: `` },
  sn = { [nn.open]: `` },
  cn = { [nn.closed]: `` },
  ln = { [nn.anchorHidden]: `` },
  un = {
    open(e) {
      return e ? an : null;
    },
  },
  dn = {
    open(e) {
      return e ? on : null;
    },
  },
  fn = {
    open(e) {
      return e ? sn : cn;
    },
    anchorHidden(e) {
      return e ? ln : null;
    },
  },
  pn = { ...fn, ...Jt },
  mn = W.forwardRef(function (e, t) {
    let { render: n, className: r, forceRender: i = !1, ...a } = e,
      { store: o } = tn(),
      c = o.useState(`open`),
      l = o.useState(`nested`),
      u = o.useState(`mounted`);
    return s(`div`, e, {
      state: { open: c, transitionStatus: o.useState(`transitionStatus`) },
      ref: [o.context.backdropRef, t],
      stateAttributesMapping: pn,
      props: [
        {
          role: `presentation`,
          hidden: !u,
          style: { userSelect: `none`, WebkitUserSelect: `none` },
        },
        a,
      ],
      enabled: i || !l,
    });
  }),
  hn = W.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        disabled: i = !1,
        nativeButton: a = !0,
        ...o
      } = e,
      { store: c } = tn(),
      l = c.useState(`open`);
    function u(e) {
      l && c.setOpen(!1, z(L, e.nativeEvent));
    }
    let { getButtonProps: d, buttonRef: f } = x({ disabled: i, native: a });
    return s(`button`, e, {
      state: { disabled: i },
      ref: [t, f],
      props: [{ onClick: u }, o, d],
    });
  }),
  gn = W.forwardRef(function (e, t) {
    let { render: n, className: r, id: i, ...a } = e,
      { store: o } = tn(),
      c = O(i);
    return (
      o.useSyncedValueWithCleanup(`descriptionElementId`, c),
      s(`p`, e, { ref: t, props: [{ id: c }, a] })
    );
  });
function _n(e) {
  let t = E(vn, e).current;
  return ((t.next = e), h(t.effect), t);
}
function vn(e) {
  let t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    },
  };
  return t;
}
var yn = {
    clipPath: `inset(50%)`,
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1,
  },
  bn = { ...yn, position: `fixed`, top: 0, left: 0 },
  xn = { ...yn, position: `absolute` },
  Sn = W.forwardRef(function (e, t) {
    let [n, r] = W.useState();
    h(() => {
      U && r(`button`);
    }, []);
    let i = { tabIndex: 0, role: n };
    return (0, Z.jsx)(`span`, {
      ...e,
      ref: t,
      style: bn,
      'aria-hidden': n ? void 0 : !0,
      ...i,
      'data-base-ui-focus-guard': ``,
    });
  });
function Cn(e) {
  return `data-base-ui-${e}`;
}
var wn = 0;
function Tn(e, t = {}) {
  let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
  r && cancelAnimationFrame(wn);
  let a = () => e?.focus({ preventScroll: n });
  i ? a() : (wn = requestAnimationFrame(a));
}
var En = { inert: new WeakMap(), 'aria-hidden': new WeakMap() },
  Dn = `data-base-ui-inert`,
  On = { inert: new WeakSet(), 'aria-hidden': new WeakSet() },
  kn = new WeakMap(),
  An = 0;
function jn(e) {
  return On[e];
}
function Mn(e) {
  return e ? (T(e) ? e.host : Mn(e.parentNode)) : null;
}
var Nn = (e, t) =>
    t
      .map((t) => {
        if (e.contains(t)) return t;
        let n = Mn(t);
        return e.contains(n) ? n : null;
      })
      .filter((e) => e != null),
  Pn = (e) => {
    let t = new Set();
    return (
      e.forEach((e) => {
        let n = e;
        for (; n && !t.has(n); ) (t.add(n), (n = n.parentNode));
      }),
      t
    );
  },
  Fn = (e, t, n) => {
    let r = [],
      i = (e) => {
        !e ||
          n.has(e) ||
          Array.from(e.children).forEach((e) => {
            S(e) !== `script` && (t.has(e) ? i(e) : r.push(e));
          });
      };
    return (i(e), r);
  };
function In(e, t, n, r, { mark: i = !0, markerIgnoreElements: a = [] }) {
  let o = r ? `inert` : n ? `aria-hidden` : null,
    s = null,
    c = null,
    l = Nn(t, e),
    u = i ? Nn(t, a) : [],
    d = new Set(u),
    f = i ? Fn(t, Pn(l), new Set(l)).filter((e) => !d.has(e)) : [],
    p = [],
    m = [];
  if (o) {
    let e = En[o],
      n = jn(o);
    ((c = n), (s = e));
    let r = Nn(t, Array.from(t.querySelectorAll(`[aria-live]`))),
      i = l.concat(r);
    Fn(t, Pn(i), new Set(i)).forEach((t) => {
      let r = t.getAttribute(o),
        i = r !== null && r !== `false`,
        a = (e.get(t) || 0) + 1;
      (e.set(t, a),
        p.push(t),
        a === 1 && i && n.add(t),
        i || t.setAttribute(o, o === `inert` ? `` : `true`));
    });
  }
  return (
    i &&
      f.forEach((e) => {
        let t = (kn.get(e) || 0) + 1;
        (kn.set(e, t), m.push(e), t === 1 && e.setAttribute(Dn, ``));
      }),
    (An += 1),
    () => {
      (s &&
        p.forEach((e) => {
          let t = (s.get(e) || 0) - 1;
          (s.set(e, t),
            t || (!c?.has(e) && o && e.removeAttribute(o), c?.delete(e)));
        }),
        i &&
          m.forEach((e) => {
            let t = (kn.get(e) || 0) - 1;
            (kn.set(e, t), t || e.removeAttribute(Dn));
          }),
        --An,
        An ||
          ((En.inert = new WeakMap()),
          (En[`aria-hidden`] = new WeakMap()),
          (On.inert = new WeakSet()),
          (On[`aria-hidden`] = new WeakSet()),
          (kn = new WeakMap())));
    }
  );
}
function Ln(e, t = {}) {
  let {
      ariaHidden: n = !1,
      inert: r = !1,
      mark: i = !0,
      markerIgnoreElements: a = [],
    } = t,
    o = P(e[0]).body;
  return In(e, o, n, r, { mark: i, markerIgnoreElements: a });
}
var Rn = W.createContext(null),
  zn = () => W.useContext(Rn),
  Bn = Cn(`portal`);
function Vn(e = {}) {
  let { ref: t, container: n, componentProps: r = f, elementProps: i } = e,
    a = N(),
    o = zn()?.portalNode,
    [l, u] = W.useState(null),
    [d, p] = W.useState(null),
    m = c((e) => {
      e !== null && p(e);
    }),
    g = W.useRef(null);
  h(() => {
    if (n === null) {
      g.current && ((g.current = null), p(null), u(null));
      return;
    }
    if (a == null) return;
    let e = (n && (ee(n) ? n : n.current)) ?? o ?? document.body;
    if (e == null) {
      g.current && ((g.current = null), p(null), u(null));
      return;
    }
    g.current !== e && ((g.current = e), p(null), u(e));
  }, [n, o, a]);
  let _ = s(`div`, r, { ref: [t, m], props: [{ id: a, [Bn]: `` }, i] });
  return {
    portalNode: d,
    portalSubtree: l && _ ? Wt.createPortal(_, l) : null,
  };
}
var Hn = W.forwardRef(function (e, t) {
  let {
      children: n,
      container: r,
      className: i,
      render: a,
      renderGuards: o,
      ...s
    } = e,
    { portalNode: c, portalSubtree: l } = Vn({
      container: r,
      ref: t,
      componentProps: e,
      elementProps: s,
    }),
    u = W.useRef(null),
    f = W.useRef(null),
    p = W.useRef(null),
    m = W.useRef(null),
    [h, g] = W.useState(null),
    _ = h?.modal,
    v = h?.open,
    y = typeof o == `boolean` ? o : !!h && !h.modal && h.open && !!c;
  (W.useEffect(() => {
    if (!c || _) return;
    function e(e) {
      c && e.relatedTarget && Rt(e) && (e.type === `focusin` ? Bt : zt)(c);
    }
    return (
      c.addEventListener(`focusin`, e, !0),
      c.addEventListener(`focusout`, e, !0),
      () => {
        (c.removeEventListener(`focusin`, e, !0),
          c.removeEventListener(`focusout`, e, !0));
      }
    );
  }, [c, _]),
    W.useEffect(() => {
      !c || v || Bt(c);
    }, [v, c]));
  let b = W.useMemo(
    () => ({
      beforeOutsideRef: u,
      afterOutsideRef: f,
      beforeInsideRef: p,
      afterInsideRef: m,
      portalNode: c,
      setFocusManagerState: g,
    }),
    [c]
  );
  return (0, Z.jsxs)(W.Fragment, {
    children: [
      l,
      (0, Z.jsxs)(Rn.Provider, {
        value: b,
        children: [
          y &&
            c &&
            (0, Z.jsx)(Sn, {
              'data-type': `outside`,
              ref: u,
              onFocus: (e) => {
                Rt(e, c)
                  ? p.current?.focus()
                  : Pt(h ? h.domReference : null)?.focus();
              },
            }),
          y && c && (0, Z.jsx)(`span`, { 'aria-owns': c.id, style: d }),
          c && Wt.createPortal(n, c),
          y &&
            c &&
            (0, Z.jsx)(Sn, {
              'data-type': `outside`,
              ref: f,
              onFocus: (e) => {
                Rt(e, c)
                  ? m.current?.focus()
                  : (Nt(h ? h.domReference : null)?.focus(),
                    h?.closeOnFocusOut &&
                      h?.onOpenChange(!1, z(`focus-out`, e.nativeEvent)));
              },
            }),
        ],
      }),
    ],
  });
});
function Un() {
  let e = new Map();
  return {
    emit(t, n) {
      e.get(t)?.forEach((e) => e(n));
    },
    on(t, n) {
      (e.has(t) || e.set(t, new Set()), e.get(t).add(n));
    },
    off(t, n) {
      e.get(t)?.delete(n);
    },
  };
}
var Wn = class {
    nodesRef = { current: [] };
    events = Un();
    addNode(e) {
      this.nodesRef.current.push(e);
    }
    removeNode(e) {
      let t = this.nodesRef.current.findIndex((t) => t === e);
      t !== -1 && this.nodesRef.current.splice(t, 1);
    }
  },
  Gn = W.createContext(null),
  Kn = W.createContext(null),
  qn = () => W.useContext(Gn)?.id || null,
  Jn = (e) => {
    let t = W.useContext(Kn);
    return e ?? t;
  };
function Yn(e) {
  let t = N(),
    n = Jn(e),
    r = qn();
  return (
    h(() => {
      if (!t) return;
      let e = { id: t, parentId: r };
      return (
        n?.addNode(e),
        () => {
          n?.removeNode(e);
        }
      );
    }, [n, t, r]),
    t
  );
}
function Xn(e) {
  let { children: t, id: n } = e,
    r = qn();
  return (0, Z.jsx)(Gn.Provider, {
    value: W.useMemo(() => ({ id: n, parentId: r }), [n, r]),
    children: t,
  });
}
function Zn(e) {
  let { children: t, externalTree: n } = e,
    r = E(() => n ?? new Wn()).current;
  return (0, Z.jsx)(Kn.Provider, { value: r, children: t });
}
function Qn(e, t) {
  let n = v(e.target);
  return e instanceof n.KeyboardEvent
    ? `keyboard`
    : e instanceof n.FocusEvent
      ? t || `keyboard`
      : `pointerType` in e
        ? e.pointerType || `keyboard`
        : `touches` in e
          ? `touch`
          : e instanceof n.MouseEvent
            ? t || (e.detail === 0 ? `keyboard` : `mouse`)
            : ``;
}
var $n = 20,
  er = [];
function tr() {
  er = er.filter((e) => e.deref()?.isConnected);
}
function nr(e) {
  (tr(),
    e &&
      S(e) !== `body` &&
      (er.push(new WeakRef(e)), er.length > $n && (er = er.slice(-20))));
}
function rr() {
  return (tr(), er[er.length - 1]?.deref());
}
function ir(e) {
  if (!e) return null;
  let t = jt();
  return At(e, t) ? e : Ot(e, t)[0] || e;
}
function ar(e) {
  return !e || !e.isConnected
    ? !1
    : typeof e.checkVisibility == `function`
      ? e.checkVisibility()
      : et(e);
}
function or(e, t) {
  if (
    !t.current.includes(`floating`) &&
    !e.getAttribute(`role`)?.includes(`dialog`)
  )
    return;
  let n = jt(),
    r = kt(e, n).filter((e) => {
      let t = e.getAttribute(`data-tabindex`) || ``;
      return (
        At(e, n) || (e.hasAttribute(`data-tabindex`) && !t.startsWith(`-`))
      );
    }),
    i = e.getAttribute(`tabindex`);
  t.current.includes(`floating`) || r.length === 0
    ? i !== `0` && e.setAttribute(`tabindex`, `0`)
    : (i !== `-1` ||
        (e.hasAttribute(`data-tabindex`) &&
          e.getAttribute(`data-tabindex`) !== `-1`)) &&
      (e.setAttribute(`tabindex`, `-1`), e.setAttribute(`data-tabindex`, `-1`));
}
function sr(e) {
  let {
      context: t,
      children: n,
      disabled: r = !1,
      initialFocus: i = !0,
      returnFocus: a = !0,
      restoreFocus: o = !1,
      modal: s = !0,
      closeOnFocusOut: l = !0,
      openInteractionType: u = ``,
      nextFocusableElement: d,
      previousFocusableElement: f,
      beforeContentFocusGuardRef: g,
      externalTree: _,
      getInsideElements: v,
    } = e,
    y = `rootStore` in t ? t.rootStore : t,
    b = y.useState(`open`),
    x = y.useState(`domReferenceElement`),
    S = y.useState(`floatingElement`),
    { events: C, dataRef: w } = y.context,
    T = c(() => w.current.floatingContext?.nodeId),
    ee = i === !1,
    E = V(x) && ee,
    D = W.useRef([`content`]),
    O = _n(i),
    k = _n(a),
    A = _n(u),
    j = Jn(_),
    M = zn(),
    N = W.useRef(!1),
    re = W.useRef(!1),
    ie = W.useRef(!1),
    ae = W.useRef(-1),
    L = W.useRef(``),
    R = W.useRef(``),
    H = W.useRef(null),
    U = W.useRef(null),
    ce = p(H, g, M?.beforeInsideRef),
    G = p(U, M?.afterInsideRef),
    le = ue(),
    K = ue(),
    me = Ut(),
    _e = M != null,
    q = se(S),
    ve = c((e = q) => (e ? Ot(e, jt()) : [])),
    J = c(() => v?.().filter((e) => e != null) ?? []),
    ye = c((e) => {
      let t = ve(e);
      return D.current
        .map(() => t)
        .filter(Boolean)
        .flat();
    });
  (W.useEffect(() => {
    if (r || !s) return;
    function e(e) {
      e.key === `Tab` && B(q, F(P(q))) && ve().length === 0 && !E && pe(e);
    }
    let t = P(q);
    return (
      t.addEventListener(`keydown`, e),
      () => {
        t.removeEventListener(`keydown`, e);
      }
    );
  }, [r, x, q, s, D, E, ve, ye]),
    W.useEffect(() => {
      if (r || !b) return;
      let e = P(q);
      function t() {
        ie.current = !1;
      }
      function n(e) {
        let t = I(e),
          n = J();
        ((ie.current = !(
          B(S, t) ||
          B(x, t) ||
          B(M?.portalNode, t) ||
          n.some((e) => e === t || B(e, t))
        )),
          (R.current = e.pointerType || `keyboard`),
          t?.closest(`[data-base-ui-click-trigger]`) && (re.current = !0));
      }
      function i() {
        R.current = `keyboard`;
      }
      return (
        e.addEventListener(`pointerdown`, n, !0),
        e.addEventListener(`pointerup`, t, !0),
        e.addEventListener(`pointercancel`, t, !0),
        e.addEventListener(`keydown`, i, !0),
        () => {
          (e.removeEventListener(`pointerdown`, n, !0),
            e.removeEventListener(`pointerup`, t, !0),
            e.removeEventListener(`pointercancel`, t, !0),
            e.removeEventListener(`keydown`, i, !0));
        }
      );
    }, [r, S, x, q, b, M, J]),
    W.useEffect(() => {
      if (r || !l) return;
      let e = P(q);
      function t() {
        ((re.current = !0),
          K.start(0, () => {
            re.current = !1;
          }));
      }
      function n(e) {
        let t = I(e),
          n = ve().indexOf(t);
        n !== -1 && (ae.current = n);
      }
      function i(t) {
        let n = t.relatedTarget,
          r = t.currentTarget,
          i = I(t);
        queueMicrotask(() => {
          let a = T(),
            c = y.context.triggerElements,
            l = J(),
            u =
              n?.hasAttribute(Cn(`focus-guard`)) &&
              [
                H.current,
                U.current,
                M?.beforeInsideRef.current,
                M?.afterInsideRef.current,
                M?.beforeOutsideRef.current,
                M?.afterOutsideRef.current,
                Q(f),
                Q(d),
              ].includes(n),
            p = !(
              B(x, n) ||
              B(S, n) ||
              B(n, S) ||
              B(M?.portalNode, n) ||
              l.some((e) => e === n || B(e, n)) ||
              (n != null && c.hasElement(n)) ||
              c.hasMatchingElement((e) => B(e, n)) ||
              u ||
              (j &&
                (de(j.nodesRef.current, a).find(
                  (e) =>
                    B(e.context?.elements.floating, n) ||
                    B(e.context?.elements.domReference, n)
                ) ||
                  fe(j.nodesRef.current, a).find(
                    (e) =>
                      [
                        e.context?.elements.floating,
                        se(e.context?.elements.floating),
                      ].includes(n) || e.context?.elements.domReference === n
                  )))
            );
          if (
            (r === x && q && or(q, D),
            o && r !== x && !ar(i) && F(e) === e.body)
          ) {
            if (m(q) && (q.focus(), o === `popup`)) {
              me.request(() => {
                q.focus();
              });
              return;
            }
            let e = ae.current,
              t = ve(),
              n = t[e] || t[t.length - 1] || q;
            m(n) && n.focus();
          }
          if (w.current.insideReactTree) {
            w.current.insideReactTree = !1;
            return;
          }
          (E || !s) &&
            n &&
            p &&
            !re.current &&
            (E || n !== rr()) &&
            ((N.current = !0), y.setOpen(!1, z(oe, t)));
        });
      }
      function a() {
        ie.current ||
          ((w.current.insideReactTree = !0),
          le.start(0, () => {
            w.current.insideReactTree = !1;
          }));
      }
      let c = m(x) ? x : null,
        u = [];
      if (!(!S && !c))
        return (
          c &&
            (c.addEventListener(`focusout`, i),
            c.addEventListener(`pointerdown`, t),
            u.push(() => {
              (c.removeEventListener(`focusout`, i),
                c.removeEventListener(`pointerdown`, t));
            })),
          S &&
            (S.addEventListener(`focusin`, n),
            S.addEventListener(`focusout`, i),
            M &&
              (S.addEventListener(`focusout`, a, !0),
              u.push(() => {
                S.removeEventListener(`focusout`, a, !0);
              })),
            u.push(() => {
              (S.removeEventListener(`focusin`, n),
                S.removeEventListener(`focusout`, i));
            })),
          () => {
            u.forEach((e) => {
              e();
            });
          }
        );
    }, [r, x, S, q, s, j, M, y, l, o, ve, E, T, D, w, le, K, me, d, f, J]),
    W.useEffect(() => {
      if (r || !S || !b) return;
      let e = Array.from(
          M?.portalNode?.querySelectorAll(`[${Cn(`portal`)}]`) || []
        ),
        t = (j ? fe(j.nodesRef.current, T()) : []).find((e) =>
          V(e.context?.elements.domReference || null)
        )?.context?.elements.domReference,
        n = Ln(
          [
            S,
            ...e,
            H.current,
            U.current,
            M?.beforeOutsideRef.current,
            M?.afterOutsideRef.current,
            ...J(),
            t,
            Q(f),
            Q(d),
            E ? x : null,
          ].filter((e) => e != null),
          { ariaHidden: s || E, mark: !1 }
        ),
        i = Ln([S, ...e].filter((e) => e != null));
      return () => {
        (i(), n());
      };
    }, [b, r, x, S, s, D, M, E, j, T, d, f, J]),
    h(() => {
      if (!b || r || !m(q)) return;
      let e = F(P(q));
      queueMicrotask(() => {
        let t = ye(q),
          n = O.current,
          r = typeof n == `function` ? n(A.current || ``) : n;
        if (r === void 0 || r === !1) return;
        let i;
        ((i = r === !0 || r === null ? t[0] || q : Q(r)),
          (i = i || t[0] || q),
          !B(q, e) && Tn(i, { preventScroll: i === q }));
      });
    }, [r, b, q, ee, ye, O, A]),
    h(() => {
      if (r || !q) return;
      let e = P(q);
      nr(F(e));
      function t(e) {
        if (
          (e.open || (L.current = Qn(e.nativeEvent, R.current)),
          e.reason === `trigger-hover` &&
            e.nativeEvent.type === `mouseleave` &&
            (N.current = !0),
          e.reason === `outside-press`)
        )
          if (e.nested) N.current = !1;
          else if (he(e.nativeEvent) || ge(e.nativeEvent)) N.current = !1;
          else {
            let e = !1;
            (document.createElement(`div`).focus({
              get preventScroll() {
                return ((e = !0), !1);
              },
            }),
              e ? (N.current = !1) : (N.current = !0));
          }
      }
      C.on(`openchange`, t);
      function n() {
        let e = k.current,
          t = typeof e == `function` ? e(L.current) : e;
        if (t === void 0 || t === !1) return null;
        if ((t === null && (t = !0), typeof t == `boolean`)) {
          let e = x || rr();
          return e && e.isConnected ? e : null;
        }
        let n = x || rr();
        return Q(t) || n || null;
      }
      return () => {
        C.off(`openchange`, t);
        let r = F(e),
          i = J(),
          a =
            B(S, r) ||
            i.some((e) => e === r || B(e, r)) ||
            (j &&
              de(j.nodesRef.current, T(), !1).some((e) =>
                B(e.context?.elements.floating, r)
              )),
          o = n();
        queueMicrotask(() => {
          let t = ir(o),
            n = typeof k.current != `boolean`;
          (k.current &&
            !N.current &&
            m(t) &&
            (!(!n && t !== r && r !== e.body) || a) &&
            t.focus({ preventScroll: !0 }),
            (N.current = !1));
        });
      };
    }, [r, S, q, k, w, C, j, x, T, J]),
    h(() => {
      if (!te || b || !S) return;
      let e = F(P(S));
      !m(e) || !ne(e) || (B(S, e) && e.blur());
    }, [b, S]),
    h(() => {
      if (!(r || !M))
        return (
          M.setFocusManagerState({
            modal: s,
            closeOnFocusOut: l,
            open: b,
            onOpenChange: y.setOpen,
            domReference: x,
          }),
          () => {
            M.setFocusManagerState(null);
          }
        );
    }, [r, M, s, b, y, l, x]),
    h(() => {
      if (!(r || !q))
        return (
          or(q, D),
          () => {
            queueMicrotask(tr);
          }
        );
    }, [r, q, D]));
  let be = !r && (s ? !E : !0) && (_e || s);
  return (0, Z.jsxs)(W.Fragment, {
    children: [
      be &&
        (0, Z.jsx)(Sn, {
          'data-type': `inside`,
          ref: ce,
          onFocus: (e) => {
            if (s) {
              let e = ye();
              Tn(e[e.length - 1]);
            } else
              M?.portalNode &&
                ((N.current = !1),
                Rt(e, M.portalNode)
                  ? Nt(x)?.focus()
                  : Q(f ?? M.beforeOutsideRef)?.focus());
          },
        }),
      n,
      be &&
        (0, Z.jsx)(Sn, {
          'data-type': `inside`,
          ref: G,
          onFocus: (e) => {
            s
              ? Tn(ye()[0])
              : M?.portalNode &&
                (l && (N.current = !0),
                Rt(e, M.portalNode)
                  ? Pt(x)?.focus()
                  : Q(d ?? M.afterOutsideRef)?.focus());
          },
        }),
    ],
  });
}
function cr(e, t = {}) {
  let n = `rootStore` in e ? e.rootStore : e,
    r = n.context.dataRef,
    {
      enabled: i = !0,
      event: a = `click`,
      toggle: o = !0,
      ignoreMouse: s = !1,
      stickIfOpen: c = !0,
      touchOpenDelay: l = 0,
      reason: u = ae,
    } = t,
    d = W.useRef(void 0),
    p = Ut(),
    m = ue(),
    h = W.useMemo(
      () => ({
        onPointerDown(e) {
          d.current = e.pointerType;
        },
        onMouseDown(e) {
          let t = d.current,
            i = e.nativeEvent,
            f = n.select(`open`);
          if (e.button !== 0 || a === `click` || (_e(t, !0) && s)) return;
          let h = r.current.openEvent,
            g = h?.type,
            _ = n.select(`domReferenceElement`) !== e.currentTarget,
            v =
              (f && _) ||
              !(f && o && (!(h && c) || g === `click` || g === `mousedown`));
          if (ne(i.target)) {
            let e = z(u, i, i.target);
            v && t === `touch` && l > 0
              ? m.start(l, () => {
                  n.setOpen(!0, e);
                })
              : n.setOpen(v, e);
            return;
          }
          let y = e.currentTarget;
          p.request(() => {
            let e = z(u, i, y);
            v && t === `touch` && l > 0
              ? m.start(l, () => {
                  n.setOpen(!0, e);
                })
              : n.setOpen(v, e);
          });
        },
        onClick(e) {
          if (a === `mousedown-only`) return;
          let t = d.current;
          if (a === `mousedown` && t) {
            d.current = void 0;
            return;
          }
          if (_e(t, !0) && s) return;
          let i = n.select(`open`),
            f = r.current.openEvent,
            p = n.select(`domReferenceElement`) !== e.currentTarget,
            h = (i && p) || !(i && o && (!(f && c) || q(f))),
            g = z(u, e.nativeEvent, e.currentTarget);
          h && t === `touch` && l > 0
            ? m.start(l, () => {
                n.setOpen(!0, g);
              })
            : n.setOpen(h, g);
        },
        onKeyDown() {
          d.current = void 0;
        },
      }),
      [r, a, s, n, c, o, p, m, l, u]
    );
  return W.useMemo(() => (i ? { reference: h } : f), [i, h]);
}
var lr = { intentional: `onClick`, sloppy: `onPointerDown` };
function ur() {
  return !1;
}
function dr(e) {
  return {
    escapeKey: typeof e == `boolean` ? e : (e?.escapeKey ?? !1),
    outsidePress: typeof e == `boolean` ? e : (e?.outsidePress ?? !0),
  };
}
function fr(e, t = {}) {
  let n = `rootStore` in e ? e.rootStore : e,
    r = n.useState(`open`),
    i = n.useState(`floatingElement`),
    { dataRef: a } = n.context,
    {
      enabled: o = !0,
      escapeKey: s = !0,
      outsidePress: l = !0,
      outsidePressEvent: u = `sloppy`,
      referencePress: d = ur,
      referencePressEvent: f = `sloppy`,
      bubbles: p,
      externalTree: h,
    } = t,
    g = Jn(h),
    v = c(typeof l == `function` ? l : () => !1),
    x = typeof l == `function` ? v : l,
    S = x !== !1,
    ee = c(() => u),
    E = W.useRef(!1),
    te = W.useRef(!1),
    D = W.useRef(!1),
    { escapeKey: O, outsidePress: k } = dr(p),
    A = W.useRef(null),
    j = ue(),
    ne = ue(),
    N = c(() => {
      (ne.clear(), (a.current.insideReactTree = !1));
    }),
    F = W.useRef(!1),
    oe = W.useRef(``),
    L = c(d),
    R = c((e) => {
      if (!r || !o || !s || e.key !== `Escape` || F.current) return;
      let t = a.current.floatingContext?.nodeId,
        i = g ? de(g.nodesRef.current, t) : [];
      if (!O && i.length > 0) {
        let e = !0;
        if (
          (i.forEach((t) => {
            t.context?.open &&
              !t.context.dataRef.current.__escapeKeyBubbles &&
              (e = !1);
          }),
          !e)
        )
          return;
      }
      let c = z(re, me(e) ? e.nativeEvent : e);
      (n.setOpen(!1, c), !O && !c.isPropagationAllowed && e.stopPropagation());
    }),
    V = c(() => {
      ((a.current.insideReactTree = !0), ne.start(0, N));
    });
  (W.useEffect(() => {
    if (!r || !o) return;
    ((a.current.__escapeKeyBubbles = O), (a.current.__outsidePressBubbles = k));
    let e = new K(),
      t = new K();
    function c() {
      (e.clear(), (F.current = !0));
    }
    function l() {
      e.start(w() ? 5 : 0, () => {
        F.current = !1;
      });
    }
    function u() {
      ((D.current = !0),
        t.start(0, () => {
          D.current = !1;
        }));
    }
    function d() {
      ((E.current = !1), (te.current = !1));
    }
    function f() {
      let e = oe.current,
        t = e === `pen` || !e ? `mouse` : e,
        n = ee(),
        r = typeof n == `function` ? n() : n;
      return typeof r == `string` ? r : r[t];
    }
    function p(e) {
      let t = f();
      return (
        (t === `intentional` && e.type !== `click`) ||
        (t === `sloppy` && e.type === `click`)
      );
    }
    function h(e) {
      let t = a.current.floatingContext?.nodeId,
        r =
          g &&
          de(g.nodesRef.current, t).some((t) =>
            H(e, t.context?.elements.floating)
          );
      return (
        H(e, n.select(`floatingElement`)) ||
        H(e, n.select(`domReferenceElement`)) ||
        r
      );
    }
    function v(e) {
      if (p(e)) {
        N();
        return;
      }
      if (a.current.insideReactTree) {
        N();
        return;
      }
      let r = I(e),
        i = `[${Cn(`inert`)}]`,
        o = Array.from(P(n.select(`floatingElement`)).querySelectorAll(i)),
        s = _(r) ? r.getRootNode() : null;
      T(s) && (o = o.concat(Array.from(s.querySelectorAll(i))));
      let c = n.context.triggerElements;
      if (r && (c.hasElement(r) || c.hasMatchingElement((e) => B(e, r))))
        return;
      let l = _(r) ? r : null;
      for (; l && !C(l); ) {
        let e = b(l);
        if (C(e) || !_(e)) break;
        l = e;
      }
      if (
        o.length &&
        _(r) &&
        !M(r) &&
        !B(r, n.select(`floatingElement`)) &&
        o.every((e) => !B(l, e))
      )
        return;
      if (m(r) && !(`touches` in e)) {
        let t = C(r),
          n = y(r),
          i = /auto|scroll/,
          a = t || i.test(n.overflowX),
          o = t || i.test(n.overflowY),
          s = a && r.clientWidth > 0 && r.scrollWidth > r.clientWidth,
          c = o && r.clientHeight > 0 && r.scrollHeight > r.clientHeight,
          l = n.direction === `rtl`,
          u =
            c &&
            (l
              ? e.offsetX <= r.offsetWidth - r.clientWidth
              : e.offsetX > r.clientWidth),
          d = s && e.offsetY > r.clientHeight;
        if (u || d) return;
      }
      if (h(e)) return;
      if (f() === `intentional` && D.current) {
        (t.clear(), (D.current = !1));
        return;
      }
      if (typeof x == `function` && !x(e)) return;
      let u = a.current.floatingContext?.nodeId,
        d = g ? de(g.nodesRef.current, u) : [];
      if (d.length > 0) {
        let e = !0;
        if (
          (d.forEach((t) => {
            t.context?.open &&
              !t.context.dataRef.current.__outsidePressBubbles &&
              (e = !1);
          }),
          !e)
        )
          return;
      }
      (n.setOpen(!1, z(ie, e)), N());
    }
    function ne(e) {
      f() !== `sloppy` ||
        e.pointerType === `touch` ||
        !n.select(`open`) ||
        !o ||
        H(e, n.select(`floatingElement`)) ||
        H(e, n.select(`domReferenceElement`)) ||
        v(e);
    }
    function re(e) {
      if (
        f() !== `sloppy` ||
        !n.select(`open`) ||
        !o ||
        H(e, n.select(`floatingElement`)) ||
        H(e, n.select(`domReferenceElement`))
      )
        return;
      let t = e.touches[0];
      t &&
        ((A.current = {
          startTime: Date.now(),
          startX: t.clientX,
          startY: t.clientY,
          dismissOnTouchEnd: !1,
          dismissOnMouseDown: !0,
        }),
        j.start(1e3, () => {
          A.current &&
            ((A.current.dismissOnTouchEnd = !1),
            (A.current.dismissOnMouseDown = !1));
        }));
    }
    function ae(e) {
      oe.current = `touch`;
      let t = I(e);
      function n() {
        (re(e), t?.removeEventListener(e.type, n));
      }
      t?.addEventListener(e.type, n);
    }
    function L(e) {
      if (
        (j.clear(),
        e.type === `pointerdown` && (oe.current = e.pointerType),
        e.type === `mousedown` && A.current && !A.current.dismissOnMouseDown)
      )
        return;
      let t = I(e);
      function n() {
        (e.type === `pointerdown` ? ne(e) : v(e),
          t?.removeEventListener(e.type, n));
      }
      t?.addEventListener(e.type, n);
    }
    function V(e) {
      if (!E.current) return;
      let n = te.current;
      if ((d(), f() === `intentional`)) {
        if (e.type === `pointercancel`) {
          n && u();
          return;
        }
        if (!h(e)) {
          if (n) {
            u();
            return;
          }
          (typeof x == `function` && !x(e)) ||
            (t.clear(), (D.current = !0), N());
        }
      }
    }
    function se(e) {
      if (
        f() !== `sloppy` ||
        !A.current ||
        H(e, n.select(`floatingElement`)) ||
        H(e, n.select(`domReferenceElement`))
      )
        return;
      let t = e.touches[0];
      if (!t) return;
      let r = Math.abs(t.clientX - A.current.startX),
        i = Math.abs(t.clientY - A.current.startY),
        a = Math.sqrt(r * r + i * i);
      (a > 5 && (A.current.dismissOnTouchEnd = !0),
        a > 10 && (v(e), j.clear(), (A.current = null)));
    }
    function U(e) {
      let t = I(e);
      function n() {
        (se(e), t?.removeEventListener(e.type, n));
      }
      t?.addEventListener(e.type, n);
    }
    function W(e) {
      f() !== `sloppy` ||
        !A.current ||
        H(e, n.select(`floatingElement`)) ||
        H(e, n.select(`domReferenceElement`)) ||
        (A.current.dismissOnTouchEnd && v(e), j.clear(), (A.current = null));
    }
    function ce(e) {
      let t = I(e);
      function n() {
        (W(e), t?.removeEventListener(e.type, n));
      }
      t?.addEventListener(e.type, n);
    }
    let G = P(i);
    return (
      s &&
        (G.addEventListener(`keydown`, R),
        G.addEventListener(`compositionstart`, c),
        G.addEventListener(`compositionend`, l)),
      S &&
        (G.addEventListener(`click`, L, !0),
        G.addEventListener(`pointerdown`, L, !0),
        G.addEventListener(`pointerup`, V, !0),
        G.addEventListener(`pointercancel`, V, !0),
        G.addEventListener(`mousedown`, L, !0),
        G.addEventListener(`mouseup`, V, !0),
        G.addEventListener(`touchstart`, ae, !0),
        G.addEventListener(`touchmove`, U, !0),
        G.addEventListener(`touchend`, ce, !0)),
      () => {
        (s &&
          (G.removeEventListener(`keydown`, R),
          G.removeEventListener(`compositionstart`, c),
          G.removeEventListener(`compositionend`, l)),
          S &&
            (G.removeEventListener(`click`, L, !0),
            G.removeEventListener(`pointerdown`, L, !0),
            G.removeEventListener(`pointerup`, V, !0),
            G.removeEventListener(`pointercancel`, V, !0),
            G.removeEventListener(`mousedown`, L, !0),
            G.removeEventListener(`mouseup`, V, !0),
            G.removeEventListener(`touchstart`, ae, !0),
            G.removeEventListener(`touchmove`, U, !0),
            G.removeEventListener(`touchend`, ce, !0)),
          e.clear(),
          t.clear(),
          d(),
          (D.current = !1));
      }
    );
  }, [a, i, s, S, x, r, o, O, k, R, N, ee, g, n, j]),
    W.useEffect(N, [x, N]));
  let se = W.useMemo(
      () => ({
        onKeyDown: R,
        [lr[f]]: (e) => {
          L() && n.setOpen(!1, z(ae, e.nativeEvent));
        },
        ...(f !== `intentional` && {
          onClick(e) {
            L() && n.setOpen(!1, z(`trigger-press`, e.nativeEvent));
          },
        }),
      }),
      [R, n, f, L]
    ),
    U = c((e) => {
      if (!r || !o || e.button !== 0) return;
      let t = I(e.nativeEvent);
      B(n.select(`floatingElement`), t) &&
        (E.current || ((E.current = !0), (te.current = !1)));
    }),
    ce = c((e) => {
      !r ||
        !o ||
        ((e.defaultPrevented || e.nativeEvent.defaultPrevented) &&
          E.current &&
          (te.current = !0));
    }),
    G = W.useMemo(
      () => ({
        onKeyDown: R,
        onPointerDown: ce,
        onMouseDown: ce,
        onClickCapture: V,
        onMouseDownCapture(e) {
          (V(), U(e));
        },
        onPointerDownCapture(e) {
          (V(), U(e));
        },
        onMouseUpCapture: V,
        onTouchEndCapture: V,
        onTouchMoveCapture: V,
      }),
      [R, V, U, ce]
    );
  return W.useMemo(
    () => (o ? { reference: se, floating: G, trigger: se } : {}),
    [o, se, G]
  );
}
var pr = Symbol(`NOT_FOUND`);
function mr(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function hr(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function gr(
  e,
  t = `expected all items to be functions, instead received the following types: `
) {
  if (!e.every((e) => typeof e == `function`)) {
    let n = e
      .map((e) =>
        typeof e == `function` ? `function ${e.name || `unnamed`}()` : typeof e
      )
      .join(`, `);
    throw TypeError(`${t}[${n}]`);
  }
}
var _r = (e) => (Array.isArray(e) ? e : [e]);
function vr(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    gr(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `
    ),
    t
  );
}
function yr(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
function br(e) {
  let t;
  return {
    get(n) {
      return t && e(t.key, n) ? t.value : pr;
    },
    put(e, n) {
      t = { key: e, value: n };
    },
    getEntries() {
      return t ? [t] : [];
    },
    clear() {
      t = void 0;
    },
  };
}
function xr(e, t) {
  let n = [];
  function r(e) {
    let r = n.findIndex((n) => t(e, n.key));
    if (r > -1) {
      let e = n[r];
      return (r > 0 && (n.splice(r, 1), n.unshift(e)), e.value);
    }
    return pr;
  }
  function i(t, i) {
    r(t) === pr && (n.unshift({ key: t, value: i }), n.length > e && n.pop());
  }
  function a() {
    return n;
  }
  function o() {
    n = [];
  }
  return { get: r, put: i, getEntries: a, clear: o };
}
var Sr = (e, t) => e === t;
function Cr(e) {
  return function (t, n) {
    if (t === null || n === null || t.length !== n.length) return !1;
    let { length: r } = t;
    for (let i = 0; i < r; i++) if (!e(t[i], n[i])) return !1;
    return !0;
  };
}
function wr(e, t) {
  let {
      equalityCheck: n = Sr,
      maxSize: r = 1,
      resultEqualityCheck: i,
    } = typeof t == `object` ? t : { equalityCheck: t },
    a = Cr(n),
    o = 0,
    s = r <= 1 ? br(a) : xr(r, a);
  function c() {
    let t = s.get(arguments);
    if (t === pr) {
      if (((t = e.apply(null, arguments)), o++, i)) {
        let e = s.getEntries().find((e) => i(e.value, t));
        e && ((t = e.value), o !== 0 && o--);
      }
      s.put(arguments, t);
    }
    return t;
  }
  return (
    (c.clearCache = () => {
      (s.clear(), c.resetResultsCount());
    }),
    (c.resultsCount = () => o),
    (c.resetResultsCount = () => {
      o = 0;
    }),
    c
  );
}
var Tr = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Er = typeof WeakRef < `u` ? WeakRef : Tr,
  Dr = 0,
  Or = 1;
function kr() {
  return { s: Dr, v: void 0, o: null, p: null };
}
function Ar(e, t = {}) {
  let n = kr(),
    { resultEqualityCheck: r } = t,
    i,
    a = 0;
  function o() {
    let t = n,
      { length: o } = arguments;
    for (let e = 0, n = o; e < n; e++) {
      let n = arguments[e];
      if (typeof n == `function` || (typeof n == `object` && n)) {
        let e = t.o;
        e === null && (t.o = e = new WeakMap());
        let r = e.get(n);
        r === void 0 ? ((t = kr()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = kr()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Or) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new Er(c)
            : c));
    }
    return ((s.s = Or), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = kr()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function jr(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        mr(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Ar,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = _r(c),
        p = _r(u),
        m = vr(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f
        ),
        g = l(
          function () {
            r++;
            let e = yr(m, arguments);
            return ((i = h.apply(null, e)), i);
          },
          ...p
        );
      return Object.assign(g, {
        resultFunc: o,
        memoizedResultFunc: h,
        dependencies: m,
        dependencyRecomputations: () => r,
        resetDependencyRecomputations: () => {
          r = 0;
        },
        lastResult: () => i,
        recomputations: () => t,
        resetRecomputations: () => {
          t = 0;
        },
        memoize: s,
        argsMemoize: l,
      });
    };
  return (Object.assign(r, { withTypes: () => r }), r);
}
var Mr = jr(Ar),
  Nr = Object.assign(
    (e, t = Mr) => {
      hr(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {})
      );
    },
    { withTypes: () => Nr }
  );
jr({ memoize: wr, memoizeOptions: { maxSize: 1, equalityCheck: Object.is } });
var $ = (e, t, n, r, i, a, ...s) => {
    if (s.length > 0) throw Error(o(1));
    let c;
    if (e && t && n && r && i && a)
      c = (o, s, c, l) =>
        a(
          e(o, s, c, l),
          t(o, s, c, l),
          n(o, s, c, l),
          r(o, s, c, l),
          i(o, s, c, l),
          s,
          c,
          l
        );
    else if (e && t && n && r && i)
      c = (a, o, s, c) =>
        i(e(a, o, s, c), t(a, o, s, c), n(a, o, s, c), r(a, o, s, c), o, s, c);
    else if (e && t && n && r)
      c = (i, a, o, s) =>
        r(e(i, a, o, s), t(i, a, o, s), n(i, a, o, s), a, o, s);
    else if (e && t && n)
      c = (r, i, a, o) => n(e(r, i, a, o), t(r, i, a, o), i, a, o);
    else if (e && t) c = (n, r, i, a) => t(e(n, r, i, a), r, i, a);
    else if (e) c = e;
    else throw Error(`Missing arguments`);
    return c;
  },
  Pr = [],
  Fr = void 0;
function Ir() {
  return Fr;
}
function Lr(e) {
  Pr.push(e);
}
function Rr(e) {
  let t = (t, n) => {
    let r = E(Br).current,
      i;
    try {
      Fr = r;
      for (let e of Pr) e.before(r);
      i = e(t, n);
      for (let e of Pr) e.after(r);
      r.didInitialize = !0;
    } finally {
      Fr = void 0;
    }
    return i;
  };
  return ((t.displayName = e.displayName || e.name), t);
}
function zr(e) {
  return W.forwardRef(Rr(e));
}
function Br() {
  return { didInitialize: !1 };
}
var Vr = u(19) ? Wr : Gr;
function Hr(e, t, n, r, i) {
  return Vr(e, t, n, r, i);
}
function Ur(e, t, n, r, i) {
  let a = W.useCallback(() => t(e.getSnapshot(), n, r, i), [e, t, n, r, i]);
  return (0, Yt.useSyncExternalStore)(e.subscribe, a, a);
}
Lr({
  before(e) {
    ((e.syncIndex = 0),
      e.didInitialize ||
        ((e.syncTick = 1),
        (e.syncHooks = []),
        (e.didChangeStore = !0),
        (e.getSnapshot = () => {
          let t = !1;
          for (let n = 0; n < e.syncHooks.length; n += 1) {
            let r = e.syncHooks[n],
              i = r.selector(r.store.state, r.a1, r.a2, r.a3);
            (r.didChange || !Object.is(r.value, i)) &&
              ((t = !0), (r.value = i), (r.didChange = !1));
          }
          return (t && (e.syncTick += 1), e.syncTick);
        })));
  },
  after(e) {
    e.syncHooks.length > 0 &&
      (e.didChangeStore &&
        ((e.didChangeStore = !1),
        (e.subscribe = (t) => {
          let n = new Set();
          for (let t of e.syncHooks) n.add(t.store);
          let r = [];
          for (let e of n) r.push(e.subscribe(t));
          return () => {
            for (let e of r) e();
          };
        })),
      (0, Yt.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot));
  },
});
function Wr(e, t, n, r, i) {
  let a = Ir();
  if (!a) return Ur(e, t, n, r, i);
  let o = a.syncIndex;
  a.syncIndex += 1;
  let s;
  return (
    a.didInitialize
      ? ((s = a.syncHooks[o]),
        (s.store !== e ||
          s.selector !== t ||
          !Object.is(s.a1, n) ||
          !Object.is(s.a2, r) ||
          !Object.is(s.a3, i)) &&
          (s.store !== e && (a.didChangeStore = !0),
          (s.store = e),
          (s.selector = t),
          (s.a1 = n),
          (s.a2 = r),
          (s.a3 = i),
          (s.didChange = !0)))
      : ((s = {
          store: e,
          selector: t,
          a1: n,
          a2: r,
          a3: i,
          value: t(e.getSnapshot(), n, r, i),
          didChange: !1,
        }),
        a.syncHooks.push(s)),
    s.value
  );
}
function Gr(e, t, n, r, i) {
  return (0, Xt.useSyncExternalStoreWithSelector)(
    e.subscribe,
    e.getSnapshot,
    e.getSnapshot,
    (e) => t(e, n, r, i)
  );
}
var Kr = class {
    constructor(e) {
      ((this.state = e), (this.listeners = new Set()), (this.updateTick = 0));
    }
    subscribe = (e) => (
      this.listeners.add(e),
      () => {
        this.listeners.delete(e);
      }
    );
    getSnapshot = () => this.state;
    setState(e) {
      if (this.state === e) return;
      ((this.state = e), (this.updateTick += 1));
      let t = this.updateTick;
      for (let n of this.listeners) {
        if (t !== this.updateTick) return;
        n(e);
      }
    }
    update(e) {
      for (let t in e)
        if (!Object.is(this.state[t], e[t])) {
          this.setState({ ...this.state, ...e });
          return;
        }
    }
    set(e, t) {
      Object.is(this.state[e], t) || this.setState({ ...this.state, [e]: t });
    }
    notifyAll() {
      let e = { ...this.state };
      this.setState(e);
    }
    use(e, t, n, r) {
      return Hr(this, e, t, n, r);
    }
  },
  qr = class extends Kr {
    constructor(e, t = {}, n) {
      (super(e), (this.context = t), (this.selectors = n));
    }
    useSyncedValue(e, t) {
      (W.useDebugValue(e),
        h(() => {
          this.state[e] !== t && this.set(e, t);
        }, [e, t]));
    }
    useSyncedValueWithCleanup(e, t) {
      let n = this;
      h(
        () => (
          n.state[e] !== t && n.set(e, t),
          () => {
            n.set(e, void 0);
          }
        ),
        [n, e, t]
      );
    }
    useSyncedValues(e) {
      let t = this;
      h(() => {
        t.update(e);
      }, [t, ...Object.values(e)]);
    }
    useControlledProp(e, t) {
      W.useDebugValue(e);
      let n = t !== void 0;
      h(() => {
        n &&
          !Object.is(this.state[e], t) &&
          super.setState({ ...this.state, [e]: t });
      }, [e, t, n]);
    }
    select(e, t, n, r) {
      let i = this.selectors[e];
      return i(this.state, t, n, r);
    }
    useState(e, t, n, r) {
      return (W.useDebugValue(e), Hr(this, this.selectors[e], t, n, r));
    }
    useContextCallback(e, t) {
      W.useDebugValue(e);
      let n = c(t ?? l);
      this.context[e] = n;
    }
    useStateSetter(e) {
      let t = W.useRef(void 0);
      return (
        t.current === void 0 &&
          (t.current = (t) => {
            this.set(e, t);
          }),
        t.current
      );
    }
    observe(e, t) {
      let n;
      n = typeof e == `function` ? e : this.selectors[e];
      let r = n(this.state);
      return (
        t(r, r, this),
        this.subscribe((e) => {
          let i = n(e);
          if (!Object.is(r, i)) {
            let e = r;
            ((r = i), t(i, e, this));
          }
        })
      );
    }
  },
  Jr = {
    open: $((e) => e.open),
    domReferenceElement: $((e) => e.domReferenceElement),
    referenceElement: $((e) => e.positionReference ?? e.referenceElement),
    floatingElement: $((e) => e.floatingElement),
    floatingId: $((e) => e.floatingId),
  },
  Yr = class extends qr {
    constructor(e) {
      let {
        nested: t,
        noEmit: n,
        onOpenChange: r,
        triggerElements: i,
        ...a
      } = e;
      super(
        {
          ...a,
          positionReference: a.referenceElement,
          domReferenceElement: a.referenceElement,
        },
        {
          onOpenChange: r,
          dataRef: { current: {} },
          events: Un(),
          nested: t,
          noEmit: n,
          triggerElements: i,
        },
        Jr
      );
    }
    setOpen = (e, t) => {
      if (
        ((!e || !this.state.open || q(t.event)) &&
          (this.context.dataRef.current.openEvent = e ? t.event : void 0),
        !this.context.noEmit)
      ) {
        let n = {
          open: e,
          reason: t.reason,
          nativeEvent: t.event,
          nested: this.context.nested,
          triggerElement: t.trigger,
        };
        this.context.events.emit(`openchange`, n);
      }
      this.context.onOpenChange?.(e, t);
    };
  };
function Xr(e, t) {
  let n = W.useRef(null),
    r = W.useRef(null);
  return W.useCallback(
    (i) => {
      if (e !== void 0) {
        if (n.current !== null) {
          let e = n.current,
            i = r.current,
            a = t.context.triggerElements.getById(e);
          (i && a === i && t.context.triggerElements.delete(e),
            (n.current = null),
            (r.current = null));
        }
        i !== null &&
          ((n.current = e),
          (r.current = i),
          t.context.triggerElements.add(e, i));
      }
    },
    [t, e]
  );
}
function Zr(e, t, n, r) {
  let i = n.useState(`isMountedByTrigger`, e),
    a = Xr(e, n),
    o = c((t) => {
      if ((a(t), !t || !n.select(`open`))) return;
      let i = n.select(`activeTriggerId`);
      if (i === e) {
        n.update({ activeTriggerElement: t, ...r });
        return;
      }
      i ?? n.update({ activeTriggerId: e, activeTriggerElement: t, ...r });
    });
  return (
    h(() => {
      i && n.update({ activeTriggerElement: t.current, ...r });
    }, [i, n, t, ...Object.values(r)]),
    { registerTrigger: o, isMountedByThisTrigger: i }
  );
}
function Qr(e) {
  let t = e.useState(`open`);
  h(() => {
    if (
      t &&
      !e.select(`activeTriggerId`) &&
      e.context.triggerElements.size === 1
    ) {
      let t = e.context.triggerElements.entries().next();
      if (!t.done) {
        let [n, r] = t.value;
        e.update({ activeTriggerId: n, activeTriggerElement: r });
      }
    }
  }, [t, e]);
}
function $r(e, t, n) {
  let { mounted: r, setMounted: i, transitionStatus: a } = $t(e);
  t.useSyncedValues({ mounted: r, transitionStatus: a });
  let o = c(() => {
    (i(!1),
      t.update({
        activeTriggerId: null,
        activeTriggerElement: null,
        mounted: !1,
      }),
      n?.(),
      t.context.onOpenChangeComplete?.(!1));
  });
  return (
    Qt({
      enabled: !t.useState(`preventUnmountingOnClose`),
      open: e,
      ref: t.context.popupRef,
      onComplete() {
        e || o();
      },
    }),
    { forceUnmount: o, transitionStatus: a }
  );
}
var ei = class {
  constructor() {
    ((this.elementsSet = new Set()), (this.idMap = new Map()));
  }
  add(e, t) {
    let n = this.idMap.get(e);
    n !== t &&
      (n !== void 0 && this.elementsSet.delete(n),
      this.elementsSet.add(t),
      this.idMap.set(e, t));
  }
  delete(e) {
    let t = this.idMap.get(e);
    t && (this.elementsSet.delete(t), this.idMap.delete(e));
  }
  hasElement(e) {
    return this.elementsSet.has(e);
  }
  hasMatchingElement(e) {
    for (let t of this.elementsSet) if (e(t)) return !0;
    return !1;
  }
  getById(e) {
    return this.idMap.get(e);
  }
  entries() {
    return this.idMap.entries();
  }
  elements() {
    return this.elementsSet.values();
  }
  get size() {
    return this.idMap.size;
  }
};
function ti() {
  return new Yr({
    open: !1,
    floatingElement: null,
    referenceElement: null,
    triggerElements: new ei(),
    floatingId: ``,
    nested: !1,
    noEmit: !1,
    onOpenChange: void 0,
  });
}
function ni() {
  return {
    open: !1,
    openProp: void 0,
    mounted: !1,
    transitionStatus: `idle`,
    floatingRootContext: ti(),
    preventUnmountingOnClose: !1,
    payload: void 0,
    activeTriggerId: null,
    activeTriggerElement: null,
    triggerIdProp: void 0,
    popupElement: null,
    positionerElement: null,
    activeTriggerProps: f,
    inactiveTriggerProps: f,
    popupProps: f,
  };
}
var ri = $((e) => e.triggerIdProp ?? e.activeTriggerId),
  ii = {
    open: $((e) => e.openProp ?? e.open),
    mounted: $((e) => e.mounted),
    transitionStatus: $((e) => e.transitionStatus),
    floatingRootContext: $((e) => e.floatingRootContext),
    preventUnmountingOnClose: $((e) => e.preventUnmountingOnClose),
    payload: $((e) => e.payload),
    activeTriggerId: ri,
    activeTriggerElement: $((e) => (e.mounted ? e.activeTriggerElement : null)),
    isTriggerActive: $((e, t) => t !== void 0 && ri(e) === t),
    isOpenedByTrigger: $((e, t) => t !== void 0 && ri(e) === t && e.open),
    isMountedByTrigger: $((e, t) => t !== void 0 && ri(e) === t && e.mounted),
    triggerProps: $((e, t) =>
      t ? e.activeTriggerProps : e.inactiveTriggerProps
    ),
    popupProps: $((e) => e.popupProps),
    popupElement: $((e) => e.popupElement),
    positionerElement: $((e) => e.positionerElement),
  };
function ai(e) {
  let {
      popupStore: t,
      noEmit: n = !1,
      treatPopupAsFloatingElement: r = !1,
      onOpenChange: i,
    } = e,
    a = N(),
    o = qn() != null,
    s = t.useState(`open`),
    c = t.useState(`activeTriggerElement`),
    l = t.useState(r ? `popupElement` : `positionerElement`),
    u = t.context.triggerElements,
    d = E(
      () =>
        new Yr({
          open: s,
          referenceElement: c,
          floatingElement: l,
          triggerElements: u,
          onOpenChange: i,
          floatingId: a,
          nested: o,
          noEmit: n,
        })
    ).current;
  return (
    h(() => {
      let e = {
        open: s,
        floatingId: a,
        referenceElement: c,
        floatingElement: l,
      };
      (_(c) && (e.domReferenceElement = c),
        d.state.positionReference === d.state.referenceElement &&
          (e.positionReference = c),
        d.update(e));
    }, [s, a, c, l, d]),
    (d.context.onOpenChange = i),
    (d.context.nested = o),
    (d.context.noEmit = n),
    d
  );
}
function oi(e = []) {
  let t = e.map((e) => e?.reference),
    n = e.map((e) => e?.floating),
    r = e.map((e) => e?.item),
    i = e.map((e) => e?.trigger),
    a = W.useCallback((t) => si(t, e, `reference`), t),
    o = W.useCallback((t) => si(t, e, `floating`), n),
    s = W.useCallback((t) => si(t, e, `item`), r),
    c = W.useCallback((t) => si(t, e, `trigger`), i);
  return W.useMemo(
    () => ({
      getReferenceProps: a,
      getFloatingProps: o,
      getItemProps: s,
      getTriggerProps: c,
    }),
    [a, o, s, c]
  );
}
function si(e, t, n) {
  let r = new Map(),
    i = n === `item`,
    a = {};
  n === `floating` && ((a.tabIndex = -1), (a[j] = ``));
  for (let t in e)
    (i && e && (t === `active` || t === `selected`)) || (a[t] = e[t]);
  for (let o = 0; o < t.length; o += 1) {
    let s,
      c = t[o]?.[n];
    ((s = typeof c == `function` ? (e ? c(e) : null) : c), s && ci(a, s, i, r));
  }
  return (ci(a, e, i, r), a);
}
function ci(e, t, n, r) {
  for (let i in t) {
    let a = t[i];
    (n && (i === `active` || i === `selected`)) ||
      (i.startsWith(`on`)
        ? (r.has(i) || r.set(i, []),
          typeof a == `function` &&
            (r.get(i)?.push(a),
            (e[i] = (...e) =>
              r
                .get(i)
                ?.map((t) => t(...e))
                .find((e) => e !== void 0))))
        : (e[i] = a));
  }
}
var li = new Map([
  [`select`, `listbox`],
  [`combobox`, `listbox`],
  [`label`, !1],
]);
function ui(e, t = {}) {
  let n = `rootStore` in e ? e.rootStore : e,
    r = n.useState(`open`),
    i = n.useState(`floatingId`),
    a = n.useState(`domReferenceElement`),
    o = n.useState(`floatingElement`),
    { role: s = `dialog` } = t,
    c = N(),
    l = a?.id || c,
    u = W.useMemo(() => se(o)?.id || i, [o, i]),
    d = li.get(s) ?? s,
    p = qn() != null,
    m = W.useMemo(
      () =>
        d === `tooltip` || s === `label`
          ? f
          : {
              'aria-haspopup': d === `alertdialog` ? `dialog` : d,
              'aria-expanded': `false`,
              ...(d === `listbox` && { role: `combobox` }),
              ...(d === `menu` && p && { role: `menuitem` }),
              ...(s === `select` && { 'aria-autocomplete': `none` }),
              ...(s === `combobox` && { 'aria-autocomplete': `list` }),
            },
      [d, p, s]
    ),
    h = W.useMemo(
      () =>
        d === `tooltip` || s === `label`
          ? {
              [`aria-${s === `label` ? `labelledby` : `describedby`}`]: r
                ? u
                : void 0,
            }
          : {
              ...m,
              'aria-expanded': r ? `true` : `false`,
              'aria-controls': r ? u : void 0,
              ...(d === `menu` && { id: l }),
            },
      [d, u, r, l, s, m]
    ),
    g = W.useMemo(() => {
      let e = { id: u, ...(d && { role: d }) };
      return d === `tooltip` || s === `label`
        ? e
        : { ...e, ...(d === `menu` && { 'aria-labelledby': l }) };
    }, [d, u, l, s]),
    _ = W.useCallback(
      ({ active: e, selected: t }) => {
        let n = { role: `option`, ...(e && { id: `${u}-fui-option` }) };
        switch (s) {
          case `select`:
          case `combobox`:
            return { ...n, 'aria-selected': t };
          default:
        }
        return {};
      },
      [u, s]
    );
  return W.useMemo(
    () => ({ reference: h, floating: g, item: _, trigger: m }),
    [h, g, m, _]
  );
}
var di = (function (e) {
    return ((e.nestedDialogs = `--nested-dialogs`), e);
  })({}),
  fi = (function (e) {
    return (
      (e[(e.open = nn.open)] = `open`),
      (e[(e.closed = nn.closed)] = `closed`),
      (e[(e.startingStyle = nn.startingStyle)] = `startingStyle`),
      (e[(e.endingStyle = nn.endingStyle)] = `endingStyle`),
      (e.nested = `data-nested`),
      (e.nestedDialogOpen = `data-nested-dialog-open`),
      e
    );
  })({}),
  pi = W.createContext(void 0);
function mi() {
  let e = W.useContext(pi);
  if (e === void 0) throw Error(o(26));
  return e;
}
var hi = `ArrowUp`,
  gi = `ArrowDown`,
  _i = `ArrowLeft`,
  vi = `ArrowRight`,
  yi = `Home`,
  bi = new Set([_i, vi]),
  xi = new Set([hi, gi]),
  Si = new Set([...bi, ...xi]);
new Set([...Si, yi, `End`]);
var Ci = new Set([hi, gi, _i, vi, yi, `End`]),
  wi = {
    ...fn,
    ...Jt,
    nestedDialogOpen(e) {
      return e ? { [fi.nestedDialogOpen]: `` } : null;
    },
  },
  Ti = W.forwardRef(function (e, t) {
    let { className: n, finalFocus: r, initialFocus: i, render: a, ...o } = e,
      { store: c } = tn(),
      l = c.useState(`descriptionElementId`),
      u = c.useState(`disablePointerDismissal`),
      d = c.useState(`floatingRootContext`),
      f = c.useState(`popupProps`),
      p = c.useState(`modal`),
      m = c.useState(`mounted`),
      h = c.useState(`nested`),
      g = c.useState(`nestedOpenDialogCount`),
      _ = c.useState(`open`),
      v = c.useState(`openMethod`),
      y = c.useState(`titleElementId`),
      b = c.useState(`transitionStatus`),
      x = c.useState(`role`);
    (mi(),
      Qt({
        open: _,
        ref: c.context.popupRef,
        onComplete() {
          _ && c.context.onOpenChangeComplete?.(!0);
        },
      }));
    function S(e) {
      return e === `touch` ? c.context.popupRef.current : !0;
    }
    let C = i === void 0 ? S : i,
      w = s(`div`, e, {
        state: {
          open: _,
          nested: h,
          transitionStatus: b,
          nestedDialogOpen: g > 0,
        },
        props: [
          f,
          {
            'aria-labelledby': y ?? void 0,
            'aria-describedby': l ?? void 0,
            role: x,
            tabIndex: -1,
            hidden: !m,
            onKeyDown(e) {
              Ci.has(e.key) && e.stopPropagation();
            },
            style: { [di.nestedDialogs]: g },
          },
          o,
        ],
        ref: [t, c.context.popupRef, c.useStateSetter(`popupElement`)],
        stateAttributesMapping: wi,
      });
    return (0, Z.jsx)(sr, {
      context: d,
      openInteractionType: v,
      disabled: !m,
      closeOnFocusOut: !u,
      initialFocus: C,
      returnFocus: r,
      modal: p !== !1,
      restoreFocus: `popup`,
      children: w,
    });
  });
function Ei(e) {
  return u(19) ? e : e ? `true` : void 0;
}
var Di = W.forwardRef(function (e, t) {
    let { cutout: n, ...r } = e,
      i;
    if (n) {
      let e = n?.getBoundingClientRect();
      i = `polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      ${e.left}px ${e.top}px,
      ${e.left}px ${e.bottom}px,
      ${e.right}px ${e.bottom}px,
      ${e.right}px ${e.top}px,
      ${e.left}px ${e.top}px
    )`;
    }
    return (0, Z.jsx)(`div`, {
      ref: t,
      role: `presentation`,
      'data-base-ui-inert': ``,
      ...r,
      style: {
        position: `fixed`,
        inset: 0,
        userSelect: `none`,
        WebkitUserSelect: `none`,
        clipPath: i,
      },
    });
  }),
  Oi = W.forwardRef(function (e, t) {
    let { keepMounted: n = !1, ...r } = e,
      { store: i } = tn(),
      a = i.useState(`mounted`),
      o = i.useState(`modal`),
      s = i.useState(`open`);
    return a || n
      ? (0, Z.jsx)(pi.Provider, {
          value: n,
          children: (0, Z.jsxs)(Hn, {
            ref: t,
            ...r,
            children: [
              a &&
                o === !0 &&
                (0, Z.jsx)(Di, {
                  ref: i.context.internalBackdropRef,
                  inert: Ei(!s),
                }),
              e.children,
            ],
          }),
        })
      : null;
  });
function ki(e) {
  let t = W.useRef(!0);
  t.current && ((t.current = !1), e());
}
var Ai = {},
  ji = {},
  Mi = ``;
function Ni(e) {
  if (typeof document > `u`) return !1;
  let t = P(e);
  return v(t).innerWidth - t.documentElement.clientWidth > 0;
}
function Pi(e) {
  if (
    !(
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`scrollbar-gutter`, `stable`)
    ) ||
    typeof document > `u`
  )
    return !1;
  let t = P(e),
    n = t.documentElement,
    r = t.body,
    i = g(n) ? n : r,
    a = i.style.overflowY,
    o = n.style.scrollbarGutter;
  ((n.style.scrollbarGutter = `stable`), (i.style.overflowY = `scroll`));
  let s = i.offsetWidth;
  i.style.overflowY = `hidden`;
  let c = i.offsetWidth;
  return ((i.style.overflowY = a), (n.style.scrollbarGutter = o), s === c);
}
function Fi(e) {
  let t = P(e),
    n = t.documentElement,
    r = t.body,
    i = g(n) ? n : r,
    a = { overflowY: i.style.overflowY, overflowX: i.style.overflowX };
  return (
    Object.assign(i.style, { overflowY: `hidden`, overflowX: `hidden` }),
    () => {
      Object.assign(i.style, a);
    }
  );
}
function Ii(e) {
  let t = P(e),
    n = t.documentElement,
    r = t.body,
    i = v(n),
    a = 0,
    o = 0,
    s = !1,
    c = X.create();
  if (te && (i.visualViewport?.scale ?? 1) !== 1) return () => {};
  function l() {
    let t = i.getComputedStyle(n),
      c = i.getComputedStyle(r),
      l = (t.scrollbarGutter || ``).includes(`both-edges`)
        ? `stable both-edges`
        : `stable`;
    ((a = n.scrollTop),
      (o = n.scrollLeft),
      (Ai = {
        scrollbarGutter: n.style.scrollbarGutter,
        overflowY: n.style.overflowY,
        overflowX: n.style.overflowX,
      }),
      (Mi = n.style.scrollBehavior),
      (ji = {
        position: r.style.position,
        height: r.style.height,
        width: r.style.width,
        boxSizing: r.style.boxSizing,
        overflowY: r.style.overflowY,
        overflowX: r.style.overflowX,
        scrollBehavior: r.style.scrollBehavior,
      }));
    let u = n.scrollHeight > n.clientHeight,
      d = n.scrollWidth > n.clientWidth,
      f = t.overflowY === `scroll` || c.overflowY === `scroll`,
      p = t.overflowX === `scroll` || c.overflowX === `scroll`,
      m = Math.max(0, i.innerWidth - r.clientWidth),
      h = Math.max(0, i.innerHeight - r.clientHeight),
      _ = parseFloat(c.marginTop) + parseFloat(c.marginBottom),
      v = parseFloat(c.marginLeft) + parseFloat(c.marginRight),
      y = g(n) ? n : r;
    if (((s = Pi(e)), s)) {
      ((n.style.scrollbarGutter = l),
        (y.style.overflowY = `hidden`),
        (y.style.overflowX = `hidden`));
      return;
    }
    (Object.assign(n.style, {
      scrollbarGutter: l,
      overflowY: `hidden`,
      overflowX: `hidden`,
    }),
      (u || f) && (n.style.overflowY = `scroll`),
      (d || p) && (n.style.overflowX = `scroll`),
      Object.assign(r.style, {
        position: `relative`,
        height: _ || h ? `calc(100dvh - ${_ + h}px)` : `100dvh`,
        width: v || m ? `calc(100vw - ${v + m}px)` : `100vw`,
        boxSizing: `border-box`,
        overflow: `hidden`,
        scrollBehavior: `unset`,
      }),
      (r.scrollTop = a),
      (r.scrollLeft = o),
      n.setAttribute(`data-base-ui-scroll-locked`, ``),
      (n.style.scrollBehavior = `unset`));
  }
  function u() {
    (Object.assign(n.style, Ai),
      Object.assign(r.style, ji),
      s ||
        ((n.scrollTop = a),
        (n.scrollLeft = o),
        n.removeAttribute(`data-base-ui-scroll-locked`),
        (n.style.scrollBehavior = Mi)));
  }
  function d() {
    (u(), c.request(l));
  }
  return (
    l(),
    i.addEventListener(`resize`, d),
    () => {
      (c.cancel(),
        u(),
        typeof i.removeEventListener == `function` &&
          i.removeEventListener(`resize`, d));
    }
  );
}
var Li = new (class {
  lockCount = 0;
  restore = null;
  timeoutLock = K.create();
  timeoutUnlock = K.create();
  acquire(e) {
    return (
      (this.lockCount += 1),
      this.lockCount === 1 &&
        this.restore === null &&
        this.timeoutLock.start(0, () => this.lock(e)),
      this.release
    );
  }
  release = () => {
    (--this.lockCount,
      this.lockCount === 0 &&
        this.restore &&
        this.timeoutUnlock.start(0, this.unlock));
  };
  unlock = () => {
    this.lockCount === 0 &&
      this.restore &&
      (this.restore?.(), (this.restore = null));
  };
  lock(e) {
    if (this.lockCount === 0 || this.restore !== null) return;
    let t = P(e).documentElement,
      n = v(t).getComputedStyle(t).overflowY;
    if (n === `hidden` || n === `clip`) {
      this.restore = l;
      return;
    }
    let r = k || !Ni(e);
    this.restore = r ? Fi(e) : Ii(e);
  }
})();
function Ri(e = !0, t = null) {
  h(() => {
    if (e) return Li.acquire(t);
  }, [e, t]);
}
function zi(e) {
  let t = W.useRef(``),
    n = W.useCallback(
      (n) => {
        n.defaultPrevented ||
          ((t.current = n.pointerType), e(n, n.pointerType));
      },
      [e]
    );
  return {
    onClick: W.useCallback(
      (n) => {
        if (n.detail === 0) {
          e(n, `keyboard`);
          return;
        }
        (`pointerType` in n ? e(n, n.pointerType) : e(n, t.current),
          (t.current = ``));
      },
      [e]
    ),
    onPointerDown: n,
  };
}
function Bi(e, t) {
  let n = W.useRef(e),
    r = c(t);
  (h(() => {
    n.current !== e && r(n.current);
  }, [e, r]),
    h(() => {
      n.current = e;
    }, [e]));
}
function Vi(e) {
  let [t, n] = W.useState(null),
    r = c((t, r) => {
      e || n(r || (k ? `touch` : ``));
    });
  Bi(e, (t) => {
    t && !e && n(null);
  });
  let { onClick: i, onPointerDown: a } = zi(r);
  return W.useMemo(
    () => ({ openMethod: t, triggerProps: { onClick: i, onPointerDown: a } }),
    [t, i, a]
  );
}
function Hi(e) {
  let { store: t, parentContext: n, actionsRef: r } = e,
    i = t.useState(`open`),
    a = t.useState(`disablePointerDismissal`),
    o = t.useState(`modal`),
    s = t.useState(`popupElement`),
    { openMethod: l, triggerProps: u } = Vi(i);
  Qr(t);
  let { forceUnmount: d } = $r(i, t),
    f = c((e) => {
      let n = z(e);
      return (
        (n.preventUnmountOnClose = () => {
          t.set(`preventUnmountingOnClose`, !0);
        }),
        n
      );
    }),
    p = W.useCallback(() => {
      t.setOpen(!1, f(R));
    }, [t, f]);
  W.useImperativeHandle(r, () => ({ unmount: d, close: p }), [d, p]);
  let m = ai({
      popupStore: t,
      onOpenChange: t.setOpen,
      treatPopupAsFloatingElement: !0,
      noEmit: !0,
    }),
    [h, g] = W.useState(0),
    _ = h === 0,
    v = ui(m),
    y = fr(m, {
      outsidePressEvent() {
        return t.context.internalBackdropRef.current ||
          t.context.backdropRef.current
          ? `intentional`
          : {
              mouse: o === `trap-focus` ? `sloppy` : `intentional`,
              touch: `sloppy`,
            };
      },
      outsidePress(e) {
        if (
          !t.context.outsidePressEnabledRef.current ||
          (`button` in e && e.button !== 0) ||
          (`touches` in e && e.touches.length !== 1)
        )
          return !1;
        let n = I(e);
        if (_ && !a) {
          let e = n;
          return o &&
            (t.context.internalBackdropRef.current ||
              t.context.backdropRef.current)
            ? t.context.internalBackdropRef.current === e ||
                t.context.backdropRef.current === e ||
                (B(e, s) && !e?.hasAttribute(`data-base-ui-portal`))
            : !0;
        }
        return !1;
      },
      escapeKey: _,
    });
  Ri(i && o === !0, s);
  let {
    getReferenceProps: b,
    getFloatingProps: x,
    getTriggerProps: S,
  } = oi([v, y]);
  (t.useContextCallback(`onNestedDialogOpen`, (e) => {
    g(e + 1);
  }),
    t.useContextCallback(`onNestedDialogClose`, () => {
      g(0);
    }),
    W.useEffect(
      () => (
        n?.onNestedDialogOpen && i && n.onNestedDialogOpen(h),
        n?.onNestedDialogClose && !i && n.onNestedDialogClose(),
        () => {
          n?.onNestedDialogClose && i && n.onNestedDialogClose();
        }
      ),
      [i, n, h]
    ));
  let C = W.useMemo(() => b(u), [b, u]),
    w = W.useMemo(() => S(u), [S, u]),
    T = W.useMemo(() => x(), [x]);
  t.useSyncedValues({
    openMethod: l,
    activeTriggerProps: C,
    inactiveTriggerProps: w,
    popupProps: T,
    floatingRootContext: m,
    nestedOpenDialogCount: h,
  });
}
var Ui = {
    ...ii,
    modal: $((e) => e.modal),
    nested: $((e) => e.nested),
    nestedOpenDialogCount: $((e) => e.nestedOpenDialogCount),
    disablePointerDismissal: $((e) => e.disablePointerDismissal),
    openMethod: $((e) => e.openMethod),
    descriptionElementId: $((e) => e.descriptionElementId),
    titleElementId: $((e) => e.titleElementId),
    viewportElement: $((e) => e.viewportElement),
    role: $((e) => e.role),
  },
  Wi = class extends qr {
    constructor(e) {
      super(
        Gi(e),
        {
          popupRef: W.createRef(),
          backdropRef: W.createRef(),
          internalBackdropRef: W.createRef(),
          outsidePressEnabledRef: { current: !0 },
          triggerElements: new ei(),
          onOpenChange: void 0,
          onOpenChangeComplete: void 0,
        },
        Ui
      );
    }
    setOpen = (e, t) => {
      if (
        ((t.preventUnmountOnClose = () => {
          this.set(`preventUnmountingOnClose`, !0);
        }),
        !e &&
          t.trigger == null &&
          this.state.activeTriggerId != null &&
          (t.trigger = this.state.activeTriggerElement ?? void 0),
        this.context.onOpenChange?.(e, t),
        t.isCanceled)
      )
        return;
      let n = {
        open: e,
        nativeEvent: t.event,
        reason: t.reason,
        nested: this.state.nested,
      };
      this.state.floatingRootContext.context.events?.emit(`openchange`, n);
      let r = { open: e },
        i = t.trigger?.id ?? null;
      ((i || e) &&
        ((r.activeTriggerId = i), (r.activeTriggerElement = t.trigger ?? null)),
        this.update(r));
    };
  };
function Gi(e = {}) {
  return {
    ...ni(),
    modal: !0,
    disablePointerDismissal: !1,
    popupElement: null,
    viewportElement: null,
    descriptionElementId: void 0,
    titleElementId: void 0,
    openMethod: null,
    nested: !1,
    nestedOpenDialogCount: 0,
    role: `dialog`,
    ...e,
  };
}
function Ki(e) {
  let {
      children: t,
      open: n,
      defaultOpen: r = !1,
      onOpenChange: i,
      onOpenChangeComplete: a,
      disablePointerDismissal: o = !1,
      modal: s = !0,
      actionsRef: c,
      handle: l,
      triggerId: u,
      defaultTriggerId: d = null,
    } = e,
    f = tn(!0),
    p = !!f,
    m = E(
      () =>
        l?.store ??
        new Wi({
          open: r,
          openProp: n,
          activeTriggerId: d,
          triggerIdProp: u,
          modal: s,
          disablePointerDismissal: o,
          nested: p,
        })
    ).current;
  (ki(() => {
    n === void 0 &&
      m.state.open === !1 &&
      r === !0 &&
      m.update({ open: !0, activeTriggerId: d });
  }),
    m.useControlledProp(`openProp`, n),
    m.useControlledProp(`triggerIdProp`, u),
    m.useSyncedValues({ disablePointerDismissal: o, nested: p, modal: s }),
    m.useContextCallback(`onOpenChange`, i),
    m.useContextCallback(`onOpenChangeComplete`, a));
  let h = m.useState(`payload`);
  Hi({
    store: m,
    actionsRef: c,
    parentContext: f?.store.context,
    onOpenChange: i,
    triggerIdProp: u,
  });
  let g = W.useMemo(() => ({ store: m }), [m]);
  return (0, Z.jsx)(en.Provider, {
    value: g,
    children: typeof t == `function` ? t({ payload: h }) : t,
  });
}
var qi = W.forwardRef(function (e, t) {
  let { render: n, className: r, id: i, ...a } = e,
    { store: o } = tn(),
    c = O(i);
  return (
    o.useSyncedValueWithCleanup(`titleElementId`, c),
    s(`h2`, e, { ref: t, props: [{ id: c }, a] })
  );
});
export {
  tn as $,
  cr as A,
  Ve as At,
  Tn as B,
  he as Bt,
  qr as C,
  De as Ct,
  zr as D,
  Ne as Dt,
  Rr as E,
  ke as Et,
  qn as F,
  J as Ft,
  _n as G,
  ue as Gt,
  Sn as H,
  pe as Ht,
  Jn as I,
  We as It,
  mn as J,
  gn as K,
  G as Kt,
  Wn as L,
  be as Lt,
  Xn as M,
  Ee as Mt,
  Zn as N,
  Ae as Nt,
  $ as O,
  Oe as Ot,
  Yn as P,
  ye as Pt,
  un as Q,
  Hn as R,
  ve as Rt,
  Yr as S,
  xe as St,
  Hr as T,
  Me as Tt,
  bn as U,
  de as Ut,
  Cn as V,
  ge as Vt,
  xn as W,
  K as Wt,
  fn as X,
  rn as Y,
  dn as Z,
  ei as _,
  Ke as _t,
  Ri as a,
  Nt as at,
  Zr as b,
  Se as bt,
  Di as c,
  Rt as ct,
  Ci as d,
  Ze as dt,
  $t as et,
  ui as f,
  Qe as ft,
  ii as g,
  et as gt,
  ni as h,
  qe as ht,
  Bi as i,
  Ut as it,
  sr as j,
  Ue as jt,
  fr as k,
  Be as kt,
  Ei as l,
  Xe as lt,
  ai as m,
  Je as mt,
  Ki as n,
  Zt as nt,
  ki as o,
  It as ot,
  oi as p,
  Ye as pt,
  hn as q,
  Vi as r,
  Jt as rt,
  Oi as s,
  Lt as st,
  qi as t,
  Qt as tt,
  Ti as u,
  Y as ut,
  Qr as v,
  $e as vt,
  Kr as w,
  je as wt,
  Xr as x,
  Te as xt,
  $r as y,
  we as yt,
  Vn as z,
  _e as zt,
};
