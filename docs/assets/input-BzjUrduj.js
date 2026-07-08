import {
  B as a,
  F as c,
  g as d,
  z as f,
  P as l,
  D as o,
  E as s,
  a as u,
} from './button-bN-wY-Ql.js';
import {
  u as _,
  t as g,
  _ as h,
  V as m,
  H as p,
} from './createBaseUIEventDetails-eqndMbrJ.js';
import { t as r } from './react-dom-C1PHl06U.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as i } from './utils-DXalBF5w.js';

var v = t(n()),
  y = (function (e) {
    return (
      (e.disabled = `data-disabled`),
      (e.valid = `data-valid`),
      (e.invalid = `data-invalid`),
      (e.touched = `data-touched`),
      (e.dirty = `data-dirty`),
      (e.filled = `data-filled`),
      (e.focused = `data-focused`),
      e
    );
  })({}),
  b = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: null,
    valueMissing: !1,
  },
  x = { valid: null, touched: !1, dirty: !1, filled: !1, focused: !1 },
  S = { disabled: !1, ...x },
  C = {
    valid(e) {
      return e === null ? null : e ? { [y.valid]: `` } : { [y.invalid]: `` };
    },
  },
  w = v.createContext({
    invalid: void 0,
    name: void 0,
    validityData: {
      state: b,
      errors: [],
      error: ``,
      value: ``,
      initialValue: null,
    },
    setValidityData: c,
    disabled: void 0,
    touched: x.touched,
    setTouched: c,
    dirty: x.dirty,
    setDirty: c,
    filled: x.filled,
    setFilled: c,
    focused: x.focused,
    setFocused: c,
    validate: () => null,
    validationMode: `onSubmit`,
    validationDebounceTime: 0,
    shouldValidateOnChange: () => !1,
    state: S,
    markedDirtyRef: { current: !1 },
    validation: {
      getValidationProps: (e = l) => e,
      getInputValidationProps: (e = l) => e,
      inputRef: { current: null },
      commit: async () => {},
    },
  });
function T(e = !0) {
  let t = v.useContext(w);
  if (t.setValidityData === c && !e) throw Error(a(28));
  return t;
}
var E = t(r()),
  D = v.createContext({
    formRef: { current: { fields: new Map() } },
    errors: {},
    clearErrors: c,
    validationMode: `onSubmit`,
    submitAttemptedRef: { current: !1 },
  });
function O() {
  return v.useContext(D);
}
var k = v.createContext({
  controlId: void 0,
  registerControlId: c,
  labelId: void 0,
  setLabelId: c,
  messageIds: [],
  setMessageIds: c,
  getDescriptionProps: (e) => e,
});
function A() {
  return v.useContext(k);
}
function j(e, t) {
  return { ...e, state: { ...e.state, valid: !t && e.state.valid } };
}
function M({ controlled: e, default: t, name: n, state: r = `value` }) {
  let { current: i } = v.useRef(e !== void 0),
    [a, o] = v.useState(t);
  return [
    i ? e : a,
    v.useCallback((e) => {
      i || o(e);
    }, []),
  ];
}
function N(e = {}) {
  let { id: t, implicit: n = !1, controlRef: r } = e,
    { controlId: i, registerControlId: a } = A(),
    o = p(t),
    l = n ? i : void 0,
    m = f(() => Symbol(`labelable-control`)),
    h = v.useRef(!1),
    g = v.useRef(t != null),
    _ = s(() => {
      !h.current || a === c || ((h.current = !1), a(m.current, void 0));
    });
  return (
    u(() => {
      if (a === c) return;
      let e;
      if (n) {
        let n = r?.current;
        e = d(n) && n.closest(`label`) != null ? (t ?? null) : (l ?? o);
      } else if (t != null) ((g.current = !0), (e = t));
      else if (g.current) e = o;
      else {
        _();
        return;
      }
      if (e === void 0) {
        _();
        return;
      }
      ((h.current = !0), a(m.current, e));
    }, [t, r, l, a, n, o, m, _]),
    v.useEffect(() => _, [_]),
    i ?? o
  );
}
function P(e) {
  let {
      enabled: t = !0,
      value: n,
      id: r,
      name: i,
      controlRef: a,
      commit: o,
    } = e,
    { formRef: c } = O(),
    {
      invalid: l,
      markedDirtyRef: d,
      validityData: f,
      setValidityData: p,
    } = T(),
    m = s(e.getValue);
  (u(() => {
    if (!t) return;
    let e = n;
    (e === void 0 && (e = m()),
      f.initialValue === null &&
        e !== null &&
        p((t) => ({ ...t, initialValue: e })));
  }, [t, p, n, f.initialValue, m]),
    u(() => {
      !t ||
        !r ||
        c.current.fields.set(r, {
          getValue: m,
          name: i,
          controlRef: a,
          validityData: j(f, l),
          validate(e = !0) {
            let t = n;
            (t === void 0 && (t = m()),
              (d.current = !0),
              e ? E.flushSync(() => o(t)) : o(t));
          },
        });
    }, [o, a, t, c, m, r, l, d, i, f, n]),
    u(() => {
      let e = c.current.fields;
      return () => {
        r && e.delete(r);
      };
    }, [c, r]));
}
var F = v.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        id: i,
        name: a,
        value: s,
        disabled: c = !1,
        onValueChange: l,
        defaultValue: d,
        autoFocus: f = !1,
        ...p
      } = e,
      {
        state: y,
        name: b,
        disabled: x,
        setTouched: S,
        setDirty: w,
        validityData: E,
        setFocused: D,
        setFilled: O,
        validationMode: k,
        validation: j,
      } = T(),
      F = x || c,
      I = b ?? a,
      L = { ...y, disabled: F },
      { labelId: R } = A(),
      z = N({ id: i });
    u(() => {
      let e = s != null;
      j.inputRef.current?.value || (e && s !== ``)
        ? O(!0)
        : e && s === `` && O(!1);
    }, [j.inputRef, O, s]);
    let B = v.useRef(null);
    u(() => {
      f && B.current === h(m(B.current)) && D(!0);
    }, [f, D]);
    let [V] = M({
        controlled: s,
        default: d,
        name: `FieldControl`,
        state: `value`,
      }),
      H = s !== void 0,
      U = H ? V : void 0;
    return (
      P({
        id: z,
        name: I,
        commit: j.commit,
        value: U,
        getValue: () => j.inputRef.current?.value,
        controlRef: j.inputRef,
      }),
      o(`input`, e, {
        ref: [t, B],
        state: L,
        props: [
          {
            id: z,
            disabled: F,
            name: I,
            ref: j.inputRef,
            'aria-labelledby': R,
            autoFocus: f,
            ...(H ? { value: U } : { defaultValue: d }),
            onChange(e) {
              let t = e.currentTarget.value;
              (l?.(t, g(_, e.nativeEvent)),
                w(t !== E.initialValue),
                O(t !== ``));
            },
            onFocus() {
              D(!0);
            },
            onBlur(e) {
              (S(!0), D(!1), k === `onBlur` && j.commit(e.currentTarget.value));
            },
            onKeyDown(e) {
              e.currentTarget.tagName === `INPUT` &&
                e.key === `Enter` &&
                (S(!0), j.commit(e.currentTarget.value));
            },
          },
          j.getInputValidationProps(),
          p,
        ],
        stateAttributesMapping: C,
      })
    );
  }),
  I = e(),
  L = v.forwardRef(function (e, t) {
    return (0, I.jsx)(F, { ref: t, ...e });
  });
function R({ className: e, type: t, ...n }) {
  return (0, I.jsx)(L, {
    type: t,
    'data-slot': `input`,
    className: i(
      `h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40`,
      e
    ),
    ...n,
  });
}
export { A as a, C as c, M as i, P as n, O as o, N as r, T as s, R as t };
