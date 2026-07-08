import {
  r as _,
  B as c,
  I as d,
  N as f,
  m as g,
  a as h,
  D as l,
  R as m,
  P as p,
  A as s,
  E as u,
  z as v,
} from './button-bN-wY-Ql.js';
import { t as i } from './check-DK2jffNN.js';
import {
  v as A,
  g as D,
  c as E,
  y as j,
  u as k,
  t as ne,
  n as O,
  B as T,
  V as te,
} from './createBaseUIEventDetails-eqndMbrJ.js';
import {
  Z as ae,
  X as B,
  d as ce,
  o as de,
  O as F,
  p as fe,
  w as ge,
  i as H,
  tt as he,
  Q as I,
  U as ie,
  R as L,
  it as le,
  A as M,
  rt as me,
  Gt as N,
  a as oe,
  It as P,
  r as pe,
  T as R,
  G as re,
  c as se,
  k as U,
  j as ue,
  et as V,
  l as W,
  W as z,
} from './DialogTitle-Dbe8yVwN.js';
import { Yl as a } from './index-BFsmjNQq.js';
import {
  c as b,
  o as C,
  r as ee,
  n as S,
  s as w,
  i as x,
  a as y,
} from './input-BzjUrduj.js';
import { t as r } from './react-dom-C1PHl06U.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import {
  c as _e,
  n as be,
  u as Ce,
  a as G,
  p as J,
  i as K,
  l as q,
  t as Se,
  d as ve,
  r as xe,
  f as ye,
} from './useCompositeListItem-HrhtUrec.js';
import { t as o } from './utils-DXalBF5w.js';

var we = a(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  Te = a(`chevron-up`, [[`path`, { d: `m18 15-6-6-6 6`, key: `153udz` }]]),
  Ee = a(`minus`, [[`path`, { d: `M5 12h14`, key: `1ays0h` }]]),
  Y = t(n()),
  De = Y.createContext(null),
  Oe = Y.createContext(null);
function X() {
  let e = Y.useContext(De);
  if (e === null) throw Error(c(60));
  return e;
}
function ke() {
  let e = Y.useContext(Oe);
  if (e === null) throw Error(c(61));
  return e;
}
var Ae = (e, t) => Object.is(e, t);
function je(e, t, n) {
  return e == null || t == null ? Object.is(e, t) : n(e, t);
}
function Me(e, t, n) {
  return !e || e.length === 0
    ? !1
    : e.some((e) => (e === void 0 ? !1 : je(t, e, n)));
}
function Ne(e, t, n) {
  return !e || e.length === 0
    ? -1
    : e.findIndex((e) => (e === void 0 ? !1 : je(e, t, n)));
}
function Pe(e, t, n) {
  return e.filter((e) => !je(t, e, n));
}
function Fe(e) {
  if (e == null) return ``;
  if (typeof e == `string`) return e;
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
}
var Z = e();
function Ie(e) {
  return (
    e != null &&
    e.length > 0 &&
    typeof e[0] == `object` &&
    e[0] != null &&
    `items` in e[0]
  );
}
function Le(e) {
  if (!Array.isArray(e)) return e != null && `null` in e;
  let t = e;
  if (Ie(t)) {
    for (let e of t)
      for (let t of e.items)
        if (t && t.value == null && t.label != null) return !0;
    return !1;
  }
  for (let e of t) if (e && e.value == null && e.label != null) return !0;
  return !1;
}
function Re(e, t) {
  if (t && e != null) return t(e) ?? ``;
  if (e && typeof e == `object`) {
    if (`label` in e && e.label != null) return String(e.label);
    if (`value` in e) return String(e.value);
  }
  return Fe(e);
}
function ze(e, t) {
  return t && e != null
    ? (t(e) ?? ``)
    : e && typeof e == `object` && `value` in e && `label` in e
      ? Fe(e.value)
      : Fe(e);
}
function Be(e, t, n) {
  function r() {
    return Re(e, n);
  }
  if (n && e != null) return n(e);
  if (e && typeof e == `object` && `label` in e && e.label != null)
    return e.label;
  if (t && !Array.isArray(t)) return t[e] ?? r();
  if (Array.isArray(t)) {
    let n = t,
      i = Ie(n) ? n.flatMap((e) => e.items) : n;
    if (typeof e != `object` || !e) {
      let t = i.find((t) => t.value === e);
      return t && t.label != null ? t.label : r();
    }
    if (`value` in e) {
      let t = i.find((t) => t && t.value === e.value);
      if (t && t.label != null) return t.label;
    }
  }
  return r();
}
function Ve(e, t, n) {
  return e.reduce(
    (e, r, i) => (
      i > 0 && e.push(`, `),
      e.push((0, Z.jsx)(Y.Fragment, { children: Be(r, t, n) }, i)),
      e
    ),
    []
  );
}
var Q = {
  id: F((e) => e.id),
  labelId: F((e) => e.labelId),
  modal: F((e) => e.modal),
  multiple: F((e) => e.multiple),
  items: F((e) => e.items),
  itemToStringLabel: F((e) => e.itemToStringLabel),
  itemToStringValue: F((e) => e.itemToStringValue),
  isItemEqualToValue: F((e) => e.isItemEqualToValue),
  value: F((e) => e.value),
  hasSelectedValue: F((e) => {
    let { value: t, multiple: n, itemToStringValue: r } = e;
    return t == null
      ? !1
      : n && Array.isArray(t)
        ? t.length > 0
        : ze(t, r) !== ``;
  }),
  hasNullItemLabel: F((e, t) => (t ? Le(e.items) : !1)),
  open: F((e) => e.open),
  mounted: F((e) => e.mounted),
  forceMount: F((e) => e.forceMount),
  transitionStatus: F((e) => e.transitionStatus),
  openMethod: F((e) => e.openMethod),
  activeIndex: F((e) => e.activeIndex),
  selectedIndex: F((e) => e.selectedIndex),
  isActive: F((e, t) => e.activeIndex === t),
  isSelected: F((e, t, n) => {
    let r = e.isItemEqualToValue,
      i = e.value;
    return e.multiple
      ? Array.isArray(i) && i.some((e) => je(n, e, r))
      : e.selectedIndex === t && e.selectedIndex !== null
        ? !0
        : je(n, i, r);
  }),
  isSelectedByFocus: F((e, t) => e.selectedIndex === t),
  popupProps: F((e) => e.popupProps),
  triggerProps: F((e) => e.triggerProps),
  triggerElement: F((e) => e.triggerElement),
  positionerElement: F((e) => e.positionerElement),
  listElement: F((e) => e.listElement),
  scrollUpArrowVisible: F((e) => e.scrollUpArrowVisible),
  scrollDownArrowVisible: F((e) => e.scrollDownArrowVisible),
  hasScrollArrows: F((e) => e.hasScrollArrows),
};
function He(e) {
  let {
      id: t,
      value: n,
      defaultValue: r = null,
      onValueChange: i,
      open: a,
      defaultOpen: o = !1,
      onOpenChange: s,
      name: c,
      autoComplete: l,
      disabled: g = !1,
      readOnly: _ = !1,
      required: y = !1,
      modal: b = !0,
      actionsRef: T,
      inputRef: te,
      onOpenChangeComplete: E,
      items: D,
      multiple: O = !1,
      itemToStringLabel: A,
      itemToStringValue: j,
      isItemEqualToValue: N = Ae,
      highlightItemOnHover: P = !0,
      children: F,
    } = e,
    { clearErrors: I } = C(),
    {
      setDirty: L,
      setTouched: B,
      setFocused: ae,
      shouldValidateOnChange: oe,
      validityData: se,
      setFilled: ce,
      name: le,
      disabled: ue,
      validation: W,
      validationMode: me,
    } = w(),
    G = ee({ id: t }),
    _e = ue || g,
    K = le ?? c,
    [q, be] = x({
      controlled: n,
      default: O ? (r ?? f) : r,
      name: `Select`,
      state: `value`,
    }),
    [J, xe] = x({ controlled: a, default: o, name: `Select`, state: `open` }),
    Se = Y.useRef([]),
    we = Y.useRef([]),
    Te = Y.useRef(null),
    Ee = Y.useRef(null),
    X = Y.useRef(0),
    ke = Y.useRef(null),
    je = Y.useRef([]),
    Me = Y.useRef(!1),
    Pe = Y.useRef(!1),
    Fe = Y.useRef(null),
    Ie = Y.useRef({ allowSelectedMouseUp: !1, allowUnselectedMouseUp: !1 }),
    Le = Y.useRef(!1),
    { mounted: Re, setMounted: Be, transitionStatus: Ve } = V(J),
    { openMethod: He, triggerProps: Ue } = pe(J),
    $ = v(
      () =>
        new ge({
          id: G,
          labelId: void 0,
          modal: b,
          multiple: O,
          itemToStringLabel: A,
          itemToStringValue: j,
          isItemEqualToValue: N,
          value: q,
          open: J,
          mounted: Re,
          transitionStatus: Ve,
          items: D,
          forceMount: !1,
          openMethod: null,
          activeIndex: null,
          selectedIndex: null,
          popupProps: {},
          triggerProps: {},
          triggerElement: null,
          positionerElement: null,
          listElement: null,
          scrollUpArrowVisible: !1,
          scrollDownArrowVisible: !1,
          hasScrollArrows: !1,
        })
    ).current,
    We = R($, Q.activeIndex),
    Ge = R($, Q.selectedIndex),
    Ke = R($, Q.triggerElement),
    qe = R($, Q.positionerElement),
    Je = Y.useMemo(
      () => (O && Array.isArray(q) && q.length === 0 ? `` : ze(q, j)),
      [O, q, j]
    ),
    Ye = Y.useMemo(
      () => (O && Array.isArray(q) ? q.map((e) => ze(e, j)) : ze(q, j)),
      [O, q, j]
    ),
    Xe = re($.state.triggerElement);
  S({
    id: G,
    commit: W.commit,
    value: q,
    controlRef: Xe,
    name: K,
    getValue: () => Ye,
  });
  let Ze = Y.useRef(q);
  (h(() => {
    q !== Ze.current && $.set(`forceMount`, !0);
  }, [$, q]),
    h(() => {
      ce(O ? Array.isArray(q) && q.length > 0 : q != null);
    }, [O, q, ce]),
    h(
      function () {
        if (J) return;
        let e = je.current;
        if (O) {
          let t = Array.isArray(q) ? q : [];
          if (t.length === 0) {
            $.set(`selectedIndex`, null);
            return;
          }
          let n = t[t.length - 1],
            r = Ne(e, n, N);
          $.set(`selectedIndex`, r === -1 ? null : r);
          return;
        }
        let t = Ne(e, q, N);
        $.set(`selectedIndex`, t === -1 ? null : t);
      },
      [O, J, q, je, N, $]
    ),
    H(q, () => {
      (I(K), L(q !== se.initialValue), oe() ? W.commit(q) : W.commit(q, !0));
    }));
  let Qe = u((e, t) => {
      if (
        (s?.(e, t),
        !t.isCanceled &&
          (xe(e),
          !e &&
            (t.reason === `focus-out` || t.reason === `outside-press`) &&
            (B(!0), ae(!1), me === `onBlur` && W.commit(q)),
          !e && $.state.activeIndex !== null))
      ) {
        let e = Se.current[$.state.activeIndex];
        queueMicrotask(() => {
          e?.setAttribute(`tabindex`, `-1`);
        });
      }
    }),
    $e = u(() => {
      (Be(!1), $.set(`activeIndex`, null), E?.(!1));
    });
  (he({
    enabled: !T,
    open: J,
    ref: Te,
    onComplete() {
      J || $e();
    },
  }),
    Y.useImperativeHandle(T, () => ({ unmount: $e }), [$e]));
  let et = u((e, t) => {
      (i?.(e, t), !t.isCanceled && be(e));
    }),
    tt = u(() => {
      let e = $.state.listElement || Te.current;
      if (!e) return;
      let t = e.scrollTop,
        n = e.scrollTop + e.clientHeight,
        r = t > 1,
        i = n < e.scrollHeight - 1;
      ($.state.scrollUpArrowVisible !== r && $.set(`scrollUpArrowVisible`, r),
        $.state.scrollDownArrowVisible !== i &&
          $.set(`scrollDownArrowVisible`, i));
    }),
    nt = ye({
      open: J,
      onOpenChange: Qe,
      elements: { reference: Ke, floating: qe },
    }),
    {
      getReferenceProps: rt,
      getFloatingProps: it,
      getItemProps: at,
    } = fe([
      M(nt, { enabled: !_ && !_e, event: `mousedown` }),
      U(nt, { bubbles: !1 }),
      ve(nt, {
        enabled: !_ && !_e,
        listRef: Se,
        activeIndex: We,
        selectedIndex: Ge,
        disabledIndices: f,
        onNavigate(e) {
          (e === null && !J) || $.set(`activeIndex`, e);
        },
        focusItemOnHover: !1,
      }),
      Ce(nt, {
        enabled: !_ && !_e && (J || !O),
        listRef: we,
        activeIndex: We,
        selectedIndex: Ge,
        onMatch(e) {
          J ? $.set(`activeIndex`, e) : et(je.current[e], ne(`none`));
        },
        onTypingChange(e) {
          Me.current = e;
        },
      }),
    ]),
    ot = Y.useMemo(() => d(rt(), Ue, G ? { id: G } : p), [rt, Ue, G]);
  (de(() => {
    $.update({ popupProps: it(), triggerProps: ot });
  }),
    h(() => {
      $.update({
        id: G,
        modal: b,
        multiple: O,
        value: q,
        open: J,
        mounted: Re,
        transitionStatus: Ve,
        popupProps: it(),
        triggerProps: ot,
        items: D,
        itemToStringLabel: A,
        itemToStringValue: j,
        isItemEqualToValue: N,
        openMethod: He,
      });
    }, [$, G, b, O, q, J, Re, Ve, it, ot, D, A, j, N, He]));
  let st = Y.useMemo(
      () => ({
        store: $,
        name: K,
        required: y,
        disabled: _e,
        readOnly: _,
        multiple: O,
        itemToStringLabel: A,
        itemToStringValue: j,
        highlightItemOnHover: P,
        setValue: et,
        setOpen: Qe,
        listRef: Se,
        popupRef: Te,
        scrollHandlerRef: Ee,
        handleScrollArrowVisibility: tt,
        scrollArrowsMountedCountRef: X,
        getItemProps: at,
        events: nt.context.events,
        valueRef: ke,
        valuesRef: je,
        labelsRef: we,
        typingRef: Me,
        selectionRef: Ie,
        selectedItemTextRef: Fe,
        validation: W,
        onOpenChangeComplete: E,
        keyboardActiveRef: Pe,
        alignItemWithTriggerActiveRef: Le,
        initialValueRef: Ze,
      }),
      [$, K, y, _e, _, O, A, j, P, et, Qe, at, nt.context.events, W, E, tt]
    ),
    ct = m(te, W.inputRef),
    lt = O && Array.isArray(q) && q.length > 0,
    ut = O ? void 0 : K,
    dt = Y.useMemo(
      () =>
        !O || !Array.isArray(q) || !K
          ? null
          : q.map((e) => {
              let t = ze(e, j);
              return (0, Z.jsx)(
                `input`,
                { type: `hidden`, name: K, value: t },
                t
              );
            }),
      [O, q, K, j]
    );
  return (0, Z.jsx)(De.Provider, {
    value: st,
    children: (0, Z.jsxs)(Oe.Provider, {
      value: nt,
      children: [
        F,
        (0, Z.jsx)(`input`, {
          ...W.getInputValidationProps({
            onFocus() {
              $.state.triggerElement?.focus({ focusVisible: !0 });
            },
            onChange(e) {
              if (e.nativeEvent.defaultPrevented) return;
              let t = e.target.value,
                n = ne(k, e.nativeEvent);
              function r() {
                if (O) return;
                let e = je.current.find(
                  (e) => ze(e, j).toLowerCase() === t.toLowerCase()
                );
                e != null &&
                  (L(e !== se.initialValue), et(e, n), oe() && W.commit(e));
              }
              ($.set(`forceMount`, !0), queueMicrotask(r));
            },
          }),
          id: G && ut == null ? `${G}-hidden-input` : void 0,
          name: ut,
          autoComplete: l,
          value: Je,
          disabled: _e,
          required: y && !lt,
          readOnly: _,
          ref: ct,
          style: K ? z : ie,
          tabIndex: -1,
          'aria-hidden': !0,
        }),
        dt,
      ],
    }),
  });
}
function Ue(e, t) {
  return e ?? t;
}
var $ = 2,
  We = 400,
  Ge = 200,
  Ke = { ...ae, ...b, value: () => null },
  qe = Y.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        id: i,
        disabled: a = !1,
        nativeButton: o = !0,
        ...s
      } = e,
      {
        setTouched: c,
        setFocused: f,
        validationMode: p,
        state: h,
        disabled: g,
      } = w(),
      { labelId: v } = y(),
      {
        store: b,
        setOpen: x,
        selectionRef: S,
        validation: C,
        readOnly: T,
        required: E,
        alignItemWithTriggerActiveRef: D,
        disabled: M,
        keyboardActiveRef: P,
      } = X(),
      F = g || M || a,
      I = R(b, Q.open),
      L = R(b, Q.value),
      ie = R(b, Q.triggerProps),
      z = R(b, Q.positionerElement),
      B = R(b, Q.listElement),
      ae = R(b, Q.id),
      oe = R(b, Q.labelId),
      se = R(b, Q.hasSelectedValue),
      ce = !se && I,
      V = R(b, Q.hasNullItemLabel, ce),
      H = i ?? ae,
      le = Ue(v, oe);
    ee({ id: H });
    let ue = re(z),
      U = Y.useRef(null),
      { getButtonProps: W, buttonRef: de } = _({ disabled: F, native: o }),
      fe = m(
        t,
        U,
        de,
        u((e) => {
          b.set(`triggerElement`, e);
        })
      ),
      pe = N(),
      me = N(),
      he = N(),
      ge = N();
    Y.useEffect(() => {
      if (I)
        return (
          se || V
            ? ge.start(Ge, () => {
                ((S.current.allowUnselectedMouseUp = !0),
                  he.start(Ge, () => {
                    S.current.allowSelectedMouseUp = !0;
                  }));
              })
            : he.start(We, () => {
                ((S.current.allowUnselectedMouseUp = !0),
                  (S.current.allowSelectedMouseUp = !0));
              }),
          () => {
            (he.clear(), ge.clear());
          }
        );
      ((S.current = { allowSelectedMouseUp: !1, allowUnselectedMouseUp: !1 }),
        me.clear());
    }, [I, se, V, S, me, he, ge]);
    let G = Y.useMemo(() => B?.id ?? j(z)?.id, [B, z]),
      _e = d(
        ie,
        {
          id: H,
          role: `combobox`,
          'aria-expanded': I ? `true` : `false`,
          'aria-haspopup': `listbox`,
          'aria-controls': I ? G : void 0,
          'aria-labelledby': le,
          'aria-readonly': T || void 0,
          'aria-required': E || void 0,
          tabIndex: F ? -1 : 0,
          ref: fe,
          onFocus(e) {
            (f(!0),
              I && D.current && x(!1, ne(k, e.nativeEvent)),
              pe.start(0, () => {
                b.set(`forceMount`, !0);
              }));
          },
          onBlur(e) {
            A(z, e.relatedTarget) ||
              (c(!0), f(!1), p === `onBlur` && C.commit(L));
          },
          onPointerMove() {
            P.current = !1;
          },
          onKeyDown() {
            P.current = !0;
          },
          onMouseDown(e) {
            if (I) return;
            let t = te(e.currentTarget);
            function n(e) {
              if (!U.current) return;
              let t = e.target;
              if (A(U.current, t) || A(ue.current, t) || t === U.current)
                return;
              let n = q(U.current);
              (e.clientX >= n.left - $ &&
                e.clientX <= n.right + $ &&
                e.clientY >= n.top - $ &&
                e.clientY <= n.bottom + $) ||
                x(!1, ne(O, e));
            }
            me.start(0, () => {
              t.addEventListener(`mouseup`, n, { once: !0 });
            });
          },
        },
        C.getValidationProps,
        s,
        W
      );
    _e.role = `combobox`;
    let ve = {
      ...h,
      open: I,
      disabled: F,
      value: L,
      readOnly: T,
      placeholder: !se,
    };
    return l(`button`, e, {
      ref: [t, U],
      state: ve,
      stateAttributesMapping: Ke,
      props: _e,
    });
  }),
  Je = { value: () => null },
  Ye = Y.forwardRef(function (e, t) {
    let { className: n, render: r, children: i, placeholder: a, ...o } = e,
      { store: s, valueRef: c } = X(),
      u = R(s, Q.value),
      d = R(s, Q.items),
      f = R(s, Q.itemToStringLabel),
      p = R(s, Q.hasSelectedValue),
      m = !p && a != null && i == null,
      h = R(s, Q.hasNullItemLabel, m),
      g = { value: u, placeholder: !p },
      _ = null;
    return (
      (_ =
        typeof i == `function`
          ? i(u)
          : (i ??
            (!p && a != null && !h
              ? a
              : Array.isArray(u)
                ? Ve(u, d, f)
                : Be(u, d, f)))),
      l(`span`, e, {
        state: g,
        ref: [t, c],
        props: [{ children: _ }, o],
        stateAttributesMapping: Je,
      })
    );
  }),
  Xe = Y.forwardRef(function (e, t) {
    let { className: n, render: r, ...i } = e,
      { store: a } = X();
    return l(`span`, e, {
      state: { open: R(a, Q.open) },
      ref: t,
      props: [{ 'aria-hidden': !0, children: `▼` }, i],
      stateAttributesMapping: I,
    });
  }),
  Ze = Y.createContext(void 0),
  Qe = Y.forwardRef(function (e, t) {
    let { store: n } = X(),
      r = R(n, Q.mounted),
      i = R(n, Q.forceMount);
    return r || i
      ? (0, Z.jsx)(Ze.Provider, {
          value: !0,
          children: (0, Z.jsx)(L, { ref: t, ...e }),
        })
      : null;
  }),
  $e = Y.createContext(void 0);
function et() {
  let e = Y.useContext($e);
  if (!e) throw Error(c(59));
  return e;
}
function tt(e, t) {
  e && Object.assign(e.style, t);
}
var nt = {
    position: `relative`,
    maxHeight: `100%`,
    overflowX: `hidden`,
    overflowY: `auto`,
  },
  rt = { position: `fixed` },
  it = Y.forwardRef(function (e, t) {
    let {
        anchor: n,
        positionMethod: r = `absolute`,
        className: i,
        render: a,
        side: o = `bottom`,
        align: c = `center`,
        sideOffset: d = 0,
        alignOffset: f = 0,
        collisionBoundary: p = `clipping-ancestors`,
        collisionPadding: m,
        arrowPadding: g = 5,
        sticky: _ = !1,
        disableAnchorTracking: v,
        alignItemWithTrigger: y = !0,
        collisionAvoidance: b = s,
        ...x
      } = e,
      {
        store: S,
        listRef: C,
        labelsRef: ee,
        alignItemWithTriggerActiveRef: w,
        selectedItemTextRef: T,
        valuesRef: te,
        initialValueRef: E,
        popupRef: D,
        setValue: O,
      } = X(),
      A = ke(),
      j = R(S, Q.open),
      M = R(S, Q.mounted),
      re = R(S, Q.modal),
      N = R(S, Q.value),
      P = R(S, Q.openMethod),
      F = R(S, Q.positionerElement),
      I = R(S, Q.triggerElement),
      L = R(S, Q.isItemEqualToValue),
      ie = R(S, Q.transitionStatus),
      z = Y.useRef(null),
      ae = Y.useRef(null),
      [ce, V] = Y.useState(y),
      H = M && ce && P !== `touch`;
    (!M && ce !== y && V(y),
      h(() => {
        M ||
          (Q.scrollUpArrowVisible(S.state) && S.set(`scrollUpArrowVisible`, !1),
          Q.scrollDownArrowVisible(S.state) &&
            S.set(`scrollDownArrowVisible`, !1));
      }, [S, M]),
      Y.useImperativeHandle(w, () => H),
      oe((H || re) && j && P !== `touch`, I));
    let le = G({
        anchor: n,
        floatingRootContext: A,
        positionMethod: r,
        mounted: M,
        side: o,
        sideOffset: d,
        align: c,
        alignOffset: f,
        arrowPadding: g,
        collisionBoundary: p,
        collisionPadding: m,
        sticky: _,
        disableAnchorTracking: v ?? H,
        collisionAvoidance: b,
        keepMounted: !0,
      }),
      ue = H ? `none` : le.side,
      U = H ? rt : le.positionerStyles,
      de = Y.useMemo(() => {
        let e = {};
        return (
          j || (e.pointerEvents = `none`),
          { role: `presentation`, hidden: !M, style: { ...U, ...e } }
        );
      }, [j, M, U]),
      fe = {
        open: j,
        side: ue,
        align: le.align,
        anchorHidden: le.anchorHidden,
      },
      pe = l(`div`, e, {
        ref: [
          t,
          u((e) => {
            S.set(`positionerElement`, e);
          }),
        ],
        state: fe,
        stateAttributesMapping: B,
        props: [de, K(ie), x],
      }),
      me = Y.useRef(0),
      he = u((e) => {
        if ((e.size === 0 && me.current === 0) || te.current.length === 0)
          return;
        let t = me.current;
        if (((me.current = e.size), e.size === t)) return;
        let n = ne(k);
        if (
          t !== 0 &&
          !S.state.multiple &&
          N !== null &&
          Ne(te.current, N, L) === -1
        ) {
          let e = E.current,
            t = e != null && Ne(te.current, e, L) !== -1 ? e : null;
          (O(t, n),
            t === null && (S.set(`selectedIndex`, null), (T.current = null)));
        }
        if (t !== 0 && S.state.multiple && Array.isArray(N)) {
          let e = (e) => Ne(te.current, e, L) !== -1,
            t = N.filter((t) => e(t));
          (t.length !== N.length || t.some((e) => !Me(N, e, L))) &&
            (O(t, n),
            t.length === 0 &&
              (S.set(`selectedIndex`, null), (T.current = null)));
        }
        if (j && H) {
          S.update({ scrollUpArrowVisible: !1, scrollDownArrowVisible: !1 });
          let e = { height: `` };
          (tt(F, e), tt(D.current, e));
        }
      }),
      ge = Y.useMemo(
        () => ({
          ...le,
          side: ue,
          alignItemWithTriggerActive: H,
          setControlledAlignItemWithTrigger: V,
          scrollUpArrowRef: z,
          scrollDownArrowRef: ae,
        }),
        [le, ue, H, V]
      );
    return (0, Z.jsx)(_e, {
      elementsRef: C,
      labelsRef: ee,
      onMapChange: he,
      children: (0, Z.jsxs)($e.Provider, {
        value: ge,
        children: [M && re && (0, Z.jsx)(se, { inert: W(!j), cutout: I }), pe],
      }),
    });
  }),
  at = t(r());
function ot(e) {
  let t = e.currentTarget.getBoundingClientRect();
  return (
    t.top + 1 <= e.clientY &&
    e.clientY <= t.bottom - 1 &&
    t.left + 1 <= e.clientX &&
    e.clientX <= t.right - 1
  );
}
var st = `base-ui-disable-scrollbar`,
  ct = {
    className: st,
    getElement(e) {
      return (0, Z.jsx)(`style`, {
        nonce: e,
        href: st,
        precedence: `base-ui:low`,
        children: `.${st}{scrollbar-width:none}.${st}::-webkit-scrollbar{display:none}`,
      });
    },
  };
function lt(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
  return Math.max(t, Math.min(e, n));
}
var ut = Y.createContext(void 0),
  dt = { disableStyleElements: !1 };
function ft() {
  return Y.useContext(ut) ?? dt;
}
var pt = 1,
  mt = { ...B, ...me },
  ht = Y.forwardRef(function (e, t) {
    let { render: n, className: r, finalFocus: i, ...a } = e,
      {
        store: o,
        popupRef: s,
        onOpenChangeComplete: c,
        setOpen: d,
        valueRef: f,
        selectedItemTextRef: p,
        keyboardActiveRef: m,
        multiple: _,
        handleScrollArrowVisibility: v,
        scrollHandlerRef: y,
        highlightItemOnHover: b,
      } = X(),
      {
        side: x,
        align: S,
        alignItemWithTriggerActive: C,
        setControlledAlignItemWithTrigger: ee,
        scrollDownArrowRef: w,
        scrollUpArrowRef: E,
      } = et(),
      O = xe(!0) != null,
      k = ke(),
      { nonce: A, disableStyleElements: j } = ft(),
      M = N(),
      re = R(o, Q.id),
      P = R(o, Q.open),
      F = R(o, Q.mounted),
      I = R(o, Q.popupProps),
      L = R(o, Q.transitionStatus),
      ie = R(o, Q.triggerElement),
      z = R(o, Q.positionerElement),
      B = R(o, Q.listElement),
      ae = Y.useRef(0),
      oe = Y.useRef(!1),
      se = Y.useRef(0),
      V = Y.useRef(!1),
      H = Y.useRef({}),
      U = le(),
      W = u((e) => {
        if (!z || !s.current || !V.current) return;
        if (oe.current || !C) {
          v();
          return;
        }
        let t = z.style.top === `0px`,
          n = z.style.bottom === `0px`,
          r = z.getBoundingClientRect().height,
          i = te(z),
          a = getComputedStyle(z),
          o = parseFloat(a.marginTop),
          c = parseFloat(a.marginBottom),
          l = gt(getComputedStyle(s.current)),
          u = Math.min(i.documentElement.clientHeight - o - c, l),
          d = e.scrollTop,
          f = _t(e),
          p = 0,
          m = null,
          h = !1,
          g = !1,
          _ = (e) => {
            z.style.height = `${e}px`;
          },
          y = (t, n) => {
            let i = lt(t, 0, u - r);
            (i > 0 && _(r + i),
              (e.scrollTop = n),
              u - (r + i) <= pt && (oe.current = !0),
              v());
          };
        if (t) {
          let e = f - d,
            t = r + e,
            n = Math.min(t, u);
          if (((p = n), e <= pt)) {
            y(e, f);
            return;
          }
          u - n > pt ? (g = !0) : (h = !0);
        } else if (n) {
          let e = d,
            t = r + e,
            n = Math.min(t, u),
            i = t - u;
          if (((p = n), e <= pt)) {
            y(e, 0);
            return;
          }
          u - n > pt ? (m = 0) : ((h = !0), d < f && (m = d - (e - i)));
        }
        if (((p = Math.ceil(p)), p !== 0 && _(p), g || m != null)) {
          let t = _t(e),
            n = g ? t : lt(m, 0, t);
          Math.abs(e.scrollTop - n) > pt && (e.scrollTop = n);
        }
        ((h || p >= u - pt) && (oe.current = !0), v());
      });
    (Y.useImperativeHandle(y, () => W, [W]),
      he({
        open: P,
        ref: s,
        onComplete() {
          P && c?.(!0);
        },
      }));
    let de = { open: P, transitionStatus: L, side: x, align: S };
    (h(() => {
      !z ||
        !s.current ||
        Object.keys(H.current).length ||
        (H.current = {
          top: z.style.top || `0`,
          left: z.style.left || `0`,
          right: z.style.right,
          height: z.style.height,
          bottom: z.style.bottom,
          minHeight: z.style.minHeight,
          maxHeight: z.style.maxHeight,
          marginTop: z.style.marginTop,
          marginBottom: z.style.marginBottom,
        });
    }, [s, z]),
      h(() => {
        P ||
          C ||
          ((V.current = !1),
          (oe.current = !1),
          (ae.current = 0),
          (se.current = 0),
          tt(z, H.current));
      }, [P, C, z, s]),
      h(() => {
        let e = s.current;
        if (!(!P || !ie || !z || !e || o.state.transitionStatus === `ending`)) {
          if (!C) {
            ((V.current = !0),
              U.request(v),
              e.style.removeProperty(`--transform-origin`));
            return;
          }
          queueMicrotask(() => {
            let t = xt(e);
            e.style.removeProperty(`--transform-origin`);
            try {
              let t = getComputedStyle(z),
                n = getComputedStyle(e),
                r = te(ie),
                i = g(z),
                a = vt(ie),
                o = yt(ie.getBoundingClientRect(), a),
                s = yt(z.getBoundingClientRect(), a),
                c = o.left,
                l = o.height,
                u = B || e,
                d = u.scrollHeight,
                m = parseFloat(n.borderBottomWidth),
                h = parseFloat(t.marginTop) || 10,
                _ = parseFloat(t.marginBottom) || 10,
                y = parseFloat(t.minHeight) || 100,
                b = gt(n),
                x = r.documentElement.clientHeight - h - _,
                S = r.documentElement.clientWidth,
                C = x - o.bottom + l,
                w = p.current,
                E = f.current,
                D,
                O = 0,
                ne = 0;
              if (w && E) {
                let e = yt(E.getBoundingClientRect(), a);
                D = yt(w.getBoundingClientRect(), a);
                let t = e.left - c,
                  n = D.left - s.left,
                  r = e.top - o.top + e.height / 2,
                  i = D.top - s.top + D.height / 2;
                ((O = t - n), (ne = i - r));
              }
              let k = C + ne + _ + m,
                A = Math.min(x, k),
                j = x - h - _,
                M = k - A,
                re = Math.max(5, c + O),
                N = S - 5,
                P = Math.max(0, re + s.width - N);
              ((z.style.left = `${re - P}px`),
                (z.style.height = `${A}px`),
                (z.style.maxHeight = `auto`),
                (z.style.marginTop = `${h}px`),
                (z.style.marginBottom = `${_}px`),
                (e.style.height = `100%`));
              let F = _t(u),
                I = M >= F - pt;
              I && (A = Math.min(x, s.height) - (M - F));
              let L =
                  o.top < 20 ||
                  o.bottom > x - 20 ||
                  Math.ceil(A) + pt < Math.min(d, y),
                R = (i.visualViewport?.scale ?? 1) !== 1 && T;
              if (L || R) {
                ((V.current = !0),
                  tt(z, H.current),
                  at.flushSync(() => ee(!1)));
                return;
              }
              if (I) {
                let e = Math.max(0, x - k);
                ((z.style.top = s.height >= j ? `0` : `${e}px`),
                  (z.style.height = `${A}px`),
                  (u.scrollTop = _t(u)),
                  (ae.current = Math.max(y, A)));
              } else
                ((z.style.bottom = `0`),
                  (ae.current = Math.max(y, A)),
                  (u.scrollTop = M));
              if (D) {
                let t = s.top,
                  n = s.height,
                  r = D.top + D.height / 2,
                  i = lt(n > 0 ? ((r - t) / n) * 100 : 50, 0, 100);
                e.style.setProperty(`--transform-origin`, `50% ${i}%`);
              }
              ((ae.current === x || A >= b) && (oe.current = !0),
                v(),
                setTimeout(() => {
                  V.current = !0;
                }));
            } finally {
              t();
            }
          });
        }
      }, [o, P, z, ie, f, p, s, v, C, ee, U, w, E, B]),
      Y.useEffect(() => {
        if (!C || !z || !P) return;
        let e = g(z);
        function t(e) {
          d(!1, ne(D, e));
        }
        return (
          e.addEventListener(`resize`, t),
          () => {
            e.removeEventListener(`resize`, t);
          }
        );
      }, [d, C, z, P]));
    let fe = {
        ...(B
          ? { role: `presentation`, 'aria-orientation': void 0 }
          : {
              role: `listbox`,
              'aria-multiselectable': _ || void 0,
              id: `${re}-list`,
            }),
        onKeyDown(e) {
          ((m.current = !0), O && ce.has(e.key) && e.stopPropagation());
        },
        onMouseMove() {
          m.current = !1;
        },
        onPointerLeave(e) {
          if (!b || ot(e) || e.pointerType === `touch`) return;
          let t = e.currentTarget;
          M.start(0, () => {
            (o.set(`activeIndex`, null), t.focus({ preventScroll: !0 }));
          });
        },
        onScroll(e) {
          B || W(e.currentTarget);
        },
        ...(C && { style: B ? { height: `100%` } : nt }),
      },
      pe = l(`div`, e, {
        ref: [t, s],
        state: de,
        stateAttributesMapping: mt,
        props: [I, fe, K(L), { className: !B && C ? ct.className : void 0 }, a],
      });
    return (0, Z.jsxs)(Y.Fragment, {
      children: [
        !j && ct.getElement(A),
        (0, Z.jsx)(ue, {
          context: k,
          modal: !1,
          disabled: !F,
          returnFocus: i,
          restoreFocus: !0,
          children: pe,
        }),
      ],
    });
  });
function gt(e) {
  let t = e.maxHeight || ``;
  return (t.endsWith(`px`) && parseFloat(t)) || 1 / 0;
}
function _t(e) {
  return Math.max(0, e.scrollHeight - e.clientHeight);
}
function vt(e) {
  return J.getScale(e);
}
function yt(e, t) {
  return P({
    x: e.x / t.x,
    y: e.y / t.y,
    width: e.width / t.x,
    height: e.height / t.y,
  });
}
var bt = [
  [`transform`, `none`],
  [`scale`, `1`],
  [`translate`, `0 0`],
];
function xt(e) {
  let { style: t } = e,
    n = {};
  for (let [e, r] of bt)
    ((n[e] = t.getPropertyValue(e)), t.setProperty(e, r, `important`));
  return () => {
    for (let [e] of bt) {
      let r = n[e];
      r ? t.setProperty(e, r) : t.removeProperty(e);
    }
  };
}
var St = Y.forwardRef(function (e, t) {
    let { className: n, render: r, ...i } = e,
      { store: a, scrollHandlerRef: o } = X(),
      { alignItemWithTriggerActive: s } = et(),
      c = R(a, Q.hasScrollArrows),
      d = R(a, Q.openMethod),
      f = R(a, Q.multiple),
      p = {
        id: `${R(a, Q.id)}-list`,
        role: `listbox`,
        'aria-multiselectable': f || void 0,
        onScroll(e) {
          o.current?.(e.currentTarget);
        },
        ...(s && { style: nt }),
        className: c && d !== `touch` ? ct.className : void 0,
      };
    return l(`div`, e, {
      ref: [
        t,
        u((e) => {
          a.set(`listElement`, e);
        }),
      ],
      props: [p, i],
    });
  }),
  Ct = Y.createContext(void 0);
function wt() {
  let e = Y.useContext(Ct);
  if (!e) throw Error(c(57));
  return e;
}
var Tt = Y.memo(
    Y.forwardRef(function (e, t) {
      let {
          render: n,
          className: r,
          value: i = null,
          label: a,
          disabled: o = !1,
          nativeButton: s = !1,
          ...c
        } = e,
        u = Y.useRef(null),
        d = be({ label: a, textRef: u, indexGuessBehavior: Se.GuessFromOrder }),
        {
          store: f,
          getItemProps: p,
          setOpen: m,
          setValue: g,
          selectionRef: v,
          typingRef: y,
          valuesRef: b,
          keyboardActiveRef: x,
          multiple: S,
          highlightItemOnHover: C,
        } = X(),
        ee = N(),
        w = R(f, Q.isActive, d.index),
        T = R(f, Q.isSelected, d.index, i),
        te = R(f, Q.isSelectedByFocus, d.index),
        D = R(f, Q.isItemEqualToValue),
        O = d.index,
        k = O !== -1,
        A = Y.useRef(null),
        j = re(O);
      (h(() => {
        if (!k) return;
        let e = b.current;
        return (
          (e[O] = i),
          () => {
            delete e[O];
          }
        );
      }, [k, O, i, b]),
        h(() => {
          if (!k) return;
          let e = f.state.value,
            t = e;
          (S && Array.isArray(e) && e.length > 0 && (t = e[e.length - 1]),
            t !== void 0 && je(i, t, D) && f.set(`selectedIndex`, O));
        }, [k, O, S, D, f, i]));
      let M = { disabled: o, selected: T, highlighted: w },
        P = p({ active: w, selected: T });
      ((P.onFocus = void 0), (P.id = void 0));
      let F = Y.useRef(null),
        I = Y.useRef(`mouse`),
        L = Y.useRef(!1),
        { getButtonProps: ie, buttonRef: z } = _({
          disabled: o,
          focusableWhenDisabled: !0,
          native: s,
          composite: !0,
        });
      function B(e) {
        let t = f.state.value;
        if (S) {
          let n = Array.isArray(t) ? t : [];
          g(T ? Pe(n, i, D) : [...n, i], ne(E, e));
        } else (g(i, ne(E, e)), m(!1, ne(E, e)));
      }
      let ae = {
          role: `option`,
          'aria-selected': T,
          tabIndex: w ? 0 : -1,
          onFocus() {
            f.set(`activeIndex`, O);
          },
          onMouseEnter() {
            !x.current &&
              f.state.selectedIndex === null &&
              C &&
              f.set(`activeIndex`, O);
          },
          onMouseMove() {
            C && f.set(`activeIndex`, O);
          },
          onMouseLeave(e) {
            !C ||
              x.current ||
              ot(e) ||
              ee.start(0, () => {
                f.state.activeIndex === O && f.set(`activeIndex`, null);
              });
          },
          onTouchStart() {
            v.current = {
              allowSelectedMouseUp: !1,
              allowUnselectedMouseUp: !1,
            };
          },
          onKeyDown(e) {
            ((F.current = e.key),
              f.set(`activeIndex`, O),
              e.key === ` ` && y.current && e.preventDefault());
          },
          onClick(e) {
            ((L.current = !1),
              !(e.type === `keydown` && F.current === null) &&
                (o ||
                  (e.type === `keydown` && F.current === ` ` && y.current) ||
                  (I.current !== `touch` && !w) ||
                  ((F.current = null), B(e.nativeEvent))));
          },
          onPointerEnter(e) {
            I.current = e.pointerType;
          },
          onPointerDown(e) {
            ((I.current = e.pointerType), (L.current = !0));
          },
          onMouseUp() {
            if (o) return;
            if (L.current) {
              L.current = !1;
              return;
            }
            let e = !v.current.allowSelectedMouseUp && T,
              t = !v.current.allowUnselectedMouseUp && !T;
            e || t || (I.current !== `touch` && !w) || A.current?.click();
          },
        },
        oe = l(`div`, e, {
          ref: [z, t, d.ref, A],
          state: M,
          props: [P, ae, c, ie],
        }),
        se = Y.useMemo(
          () => ({
            selected: T,
            indexRef: j,
            textRef: u,
            selectedByFocus: te,
            hasRegistered: k,
          }),
          [T, j, u, te, k]
        );
      return (0, Z.jsx)(Ct.Provider, { value: se, children: oe });
    })
  ),
  Et = Y.forwardRef(function (e, t) {
    let n = e.keepMounted ?? !1,
      { selected: r } = wt();
    return n || r ? (0, Z.jsx)(Dt, { ...e, ref: t }) : null;
  }),
  Dt = Y.memo(
    Y.forwardRef((e, t) => {
      let { render: n, className: r, keepMounted: i, ...a } = e,
        { selected: o } = wt(),
        s = Y.useRef(null),
        { transitionStatus: c, setMounted: u } = V(o),
        d = l(`span`, e, {
          ref: [t, s],
          state: { selected: o, transitionStatus: c },
          props: [{ 'aria-hidden': !0, children: `✔️` }, a],
          stateAttributesMapping: me,
        });
      return (
        he({
          open: o,
          ref: s,
          onComplete() {
            o || u(!1);
          },
        }),
        d
      );
    })
  ),
  Ot = Y.memo(
    Y.forwardRef(function (e, t) {
      let {
          indexRef: n,
          textRef: r,
          selectedByFocus: i,
          hasRegistered: a,
        } = wt(),
        { selectedItemTextRef: o } = X(),
        { className: s, render: c, ...u } = e;
      return l(`div`, e, {
        ref: [
          Y.useCallback(
            (e) => {
              if (!e || !a) return;
              let t = o.current === null || !o.current.isConnected;
              (i || (t && n.current === 0)) && (o.current = e);
            },
            [o, n, i, a]
          ),
          t,
          r,
        ],
        props: u,
      });
    })
  ),
  kt = Y.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        direction: i,
        keepMounted: a = !1,
        ...o
      } = e,
      {
        store: s,
        popupRef: c,
        listRef: u,
        handleScrollArrowVisibility: d,
        scrollArrowsMountedCountRef: f,
      } = X(),
      { side: p, scrollDownArrowRef: m, scrollUpArrowRef: g } = et(),
      _ = R(s, i === `up` ? Q.scrollUpArrowVisible : Q.scrollDownArrowVisible),
      v = R(s, Q.openMethod),
      y = _ && v !== `touch`,
      b = N(),
      x = i === `up` ? g : m,
      { transitionStatus: S, setMounted: C } = V(y);
    (h(
      () => (
        (f.current += 1),
        s.state.hasScrollArrows || s.set(`hasScrollArrows`, !0),
        () => {
          ((f.current = Math.max(0, f.current - 1)),
            f.current === 0 &&
              s.state.hasScrollArrows &&
              s.set(`hasScrollArrows`, !1));
        }
      ),
      [s, f]
    ),
      he({
        open: y,
        ref: x,
        onComplete() {
          y || C(!1);
        },
      }));
    let ee = l(`div`, e, {
      ref: [t, x],
      state: { direction: i, visible: y, side: p, transitionStatus: S },
      props: [
        {
          'aria-hidden': !0,
          children: i === `up` ? `▲` : `▼`,
          style: { position: `absolute` },
          onMouseMove(e) {
            if ((e.movementX === 0 && e.movementY === 0) || b.isStarted())
              return;
            s.set(`activeIndex`, null);
            function t() {
              let e = s.state.listElement ?? c.current;
              if (!e) return;
              (s.set(`activeIndex`, null), d());
              let n = e.scrollTop === 0,
                r = Math.round(e.scrollTop + e.clientHeight) >= e.scrollHeight;
              if (
                (u.current.length === 0 &&
                  (i === `up`
                    ? s.set(`scrollUpArrowVisible`, !n)
                    : s.set(`scrollDownArrowVisible`, !r)),
                (i === `up` && n) || (i === `down` && r))
              ) {
                b.clear();
                return;
              }
              if (
                (s.state.listElement || c.current) &&
                u.current &&
                u.current.length > 0
              ) {
                let t = u.current,
                  n = x.current?.offsetHeight || 0;
                if (i === `up`) {
                  let r = 0,
                    i = e.scrollTop + n;
                  for (let e = 0; e < t.length; e += 1) {
                    let n = t[e];
                    if (n && n.offsetTop >= i) {
                      r = e;
                      break;
                    }
                  }
                  let a = Math.max(0, r - 1);
                  if (a < r) {
                    let r = t[a];
                    r && (e.scrollTop = Math.max(0, r.offsetTop - n));
                  } else e.scrollTop = 0;
                } else {
                  let r = t.length - 1,
                    i = e.scrollTop + e.clientHeight - n;
                  for (let e = 0; e < t.length; e += 1) {
                    let n = t[e];
                    if (n && n.offsetTop + n.offsetHeight > i) {
                      r = Math.max(0, e - 1);
                      break;
                    }
                  }
                  let a = Math.min(t.length - 1, r + 1);
                  if (a > r) {
                    let r = t[a];
                    r &&
                      (e.scrollTop =
                        r.offsetTop + r.offsetHeight - e.clientHeight + n);
                  } else e.scrollTop = e.scrollHeight - e.clientHeight;
                }
              }
              b.start(40, t);
            }
            b.start(40, t);
          },
          onMouseLeave() {
            b.clear();
          },
        },
        o,
      ],
    });
    return y || a ? ee : null;
  }),
  At = Y.forwardRef(function (e, t) {
    return (0, Z.jsx)(kt, { ...e, ref: t, direction: `down` });
  }),
  jt = Y.forwardRef(function (e, t) {
    return (0, Z.jsx)(kt, { ...e, ref: t, direction: `up` });
  }),
  Mt = He;
function Nt({ className: e, ...t }) {
  return (0, Z.jsx)(Ye, {
    'data-slot': `select-value`,
    className: o(`flex flex-1 text-left`, e),
    ...t,
  });
}
function Pt({ className: e, size: t = `default`, children: n, ...r }) {
  return (0, Z.jsxs)(qe, {
    'data-slot': `select-trigger`,
    'data-size': t,
    className: o(
      `flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
      e
    ),
    ...r,
    children: [
      n,
      (0, Z.jsx)(Xe, {
        render: (0, Z.jsx)(we, {
          className: `pointer-events-none size-4 text-muted-foreground`,
        }),
      }),
    ],
  });
}
function Ft({
  className: e,
  children: t,
  side: n = `bottom`,
  sideOffset: r = 4,
  align: i = `center`,
  alignOffset: a = 0,
  alignItemWithTrigger: s = !0,
  ...c
}) {
  return (0, Z.jsx)(Qe, {
    children: (0, Z.jsx)(it, {
      side: n,
      sideOffset: r,
      align: i,
      alignOffset: a,
      alignItemWithTrigger: s,
      className: `isolate z-50`,
      children: (0, Z.jsxs)(ht, {
        'data-slot': `select-content`,
        'data-align-trigger': s,
        className: o(
          `relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
          e
        ),
        ...c,
        children: [
          (0, Z.jsx)(Lt, {}),
          (0, Z.jsx)(St, { children: t }),
          (0, Z.jsx)(Rt, {}),
        ],
      }),
    }),
  });
}
function It({ className: e, children: t, ...n }) {
  return (0, Z.jsxs)(Tt, {
    'data-slot': `select-item`,
    className: o(
      `relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2`,
      e
    ),
    ...n,
    children: [
      (0, Z.jsx)(Ot, {
        className: `flex flex-1 shrink-0 gap-2 whitespace-nowrap`,
        children: t,
      }),
      (0, Z.jsx)(Et, {
        render: (0, Z.jsx)(`span`, {
          className: `pointer-events-none absolute right-2 flex size-4 items-center justify-center`,
        }),
        children: (0, Z.jsx)(i, { className: `pointer-events-none` }),
      }),
    ],
  });
}
function Lt({ className: e, ...t }) {
  return (0, Z.jsx)(jt, {
    'data-slot': `select-scroll-up-button`,
    className: o(
      `top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4`,
      e
    ),
    ...t,
    children: (0, Z.jsx)(Te, {}),
  });
}
function Rt({ className: e, ...t }) {
  return (0, Z.jsx)(At, {
    'data-slot': `select-scroll-down-button`,
    className: o(
      `bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4`,
      e
    ),
    ...t,
    children: (0, Z.jsx)(we, {}),
  });
}
export { Nt as a, Pt as i, Ft as n, Ee as o, It as r, we as s, Mt as t };
