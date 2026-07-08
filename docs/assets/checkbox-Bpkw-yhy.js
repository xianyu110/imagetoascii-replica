import {
  E as a,
  P as c,
  r as d,
  z as f,
  B as i,
  R as l,
  F as o,
  I as s,
  D as te,
  a as u,
} from './button-bN-wY-Ql.js';
import { t as ee } from './check-DK2jffNN.js';
import {
  u as ce,
  H as m,
  t as se,
} from './createBaseUIEventDetails-eqndMbrJ.js';
import {
  i as de,
  tt as fe,
  rt as g,
  et as h,
  U as le,
  W as ue,
} from './DialogTitle-Dbe8yVwN.js';
import {
  o as ae,
  n as ie,
  a as ne,
  s as oe,
  c as p,
  i as re,
} from './input-BzjUrduj.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as pe } from './useAriaLabelledBy-Cko5dQFm.js';
import { t as r } from './utils-DXalBF5w.js';

var _ = t(n()),
  v = _.createContext({ disabled: !1 });
function me() {
  return _.useContext(v);
}
var he = _.createContext(void 0);
function ge(e = !0) {
  let t = _.useContext(he);
  if (t === void 0 && !e) throw Error(i(3));
  return t;
}
var y = (function (e) {
  return (
    (e.checked = `data-checked`),
    (e.unchecked = `data-unchecked`),
    (e.indeterminate = `data-indeterminate`),
    (e.disabled = `data-disabled`),
    (e.readonly = `data-readonly`),
    (e.required = `data-required`),
    (e.valid = `data-valid`),
    (e.invalid = `data-invalid`),
    (e.touched = `data-touched`),
    (e.dirty = `data-dirty`),
    (e.filled = `data-filled`),
    (e.focused = `data-focused`),
    e
  );
})({});
function b(e) {
  return _.useMemo(
    () => ({
      checked(t) {
        return e.indeterminate
          ? {}
          : t
            ? { [y.checked]: `` }
            : { [y.unchecked]: `` };
      },
      ...p,
    }),
    [e.indeterminate]
  );
}
var x = _.createContext(void 0);
function S() {
  let e = _.useContext(x);
  if (e === void 0) throw Error(i(14));
  return e;
}
var C = e(),
  _e = `data-parent`,
  ve = _.forwardRef(function (e, t) {
    let {
        checked: n,
        className: ee,
        defaultChecked: r = !1,
        'aria-labelledby': i,
        disabled: p = !1,
        id: h,
        indeterminate: g = !1,
        inputRef: fe,
        name: v,
        onCheckedChange: he,
        parent: y = !1,
        readOnly: S = !1,
        render: ve,
        required: w = !1,
        uncheckedValue: T,
        value: E,
        nativeButton: D = !1,
        ...ye
      } = e,
      { clearErrors: be } = ae(),
      {
        disabled: xe,
        name: Se,
        setDirty: Ce,
        setFilled: O,
        setFocused: k,
        setTouched: we,
        state: A,
        validationMode: Te,
        validityData: Ee,
        shouldValidateOnChange: De,
        validation: Oe,
      } = oe(),
      ke = me(),
      {
        labelId: Ae,
        controlId: je,
        registerControlId: j,
        getDescriptionProps: M,
      } = ne(),
      N = ge(),
      P = N?.parent,
      F = P && N.allValues,
      I = xe || ke.disabled || N?.disabled || p,
      L = Se ?? v,
      R = E ?? L,
      z = m(),
      Me = m(),
      B = je;
    F ? (B = y ? Me : `${P.id}-${R}`) : h && (B = h);
    let V = {};
    F &&
      (y
        ? (V = N.parent.getParentProps())
        : R && (V = N.parent.getChildProps(R)));
    let Ne = a(he),
      { checked: H = n, indeterminate: U = g, onCheckedChange: Pe, ...Fe } = V,
      W = N?.value,
      G = N?.setValue,
      K = N?.defaultValue,
      q = _.useRef(null),
      J = f(() => Symbol(`checkbox-control`)),
      Y = _.useRef(!1),
      { getButtonProps: Ie, buttonRef: Le } = d({ disabled: I, native: D }),
      X = N?.validation ?? Oe,
      [Z, Re] = re({
        controlled: R && W && !y ? W.includes(R) : H,
        default: R && K && !y ? K.includes(R) : r,
        name: `Checkbox`,
        state: `checked`,
      });
    (u(() => {
      j !== o && ((Y.current = !0), j(J.current, B));
    }, [B, N, j, y, J]),
      _.useEffect(() => {
        let e = J.current;
        return () => {
          !Y.current || j === o || ((Y.current = !1), j(e, void 0));
        };
      }, [j, J]),
      ie({
        enabled: !N,
        id: z,
        commit: X.commit,
        value: Z,
        controlRef: q,
        name: L,
        getValue: () => Z,
      }));
    let Q = _.useRef(null),
      ze = l(fe, Q, X.inputRef),
      Be = pe(i, Ae, Q, !D, B ?? void 0);
    (u(() => {
      Q.current && ((Q.current.indeterminate = U), Z && O(!0));
    }, [Z, U, O]),
      de(Z, () => {
        (N && !y) ||
          (be(L),
          O(Z),
          Ce(Z !== Ee.initialValue),
          De() ? X.commit(Z) : X.commit(Z, !0));
      }));
    let Ve = s(
        {
          checked: Z,
          disabled: I,
          name: y ? void 0 : L,
          id: D ? void 0 : (B ?? void 0),
          required: w,
          ref: ze,
          style: L ? ue : le,
          tabIndex: -1,
          type: `checkbox`,
          'aria-hidden': !0,
          onChange(e) {
            if (e.nativeEvent.defaultPrevented) return;
            let t = e.target.checked,
              n = se(ce, e.nativeEvent);
            (Pe?.(t, n),
              Ne(t, n),
              !n.isCanceled &&
                (Re(t),
                R &&
                  W &&
                  G &&
                  !y &&
                  G(t ? [...W, R] : W.filter((e) => e !== R), n)));
          },
          onFocus() {
            q.current?.focus();
          },
        },
        E === void 0 ? c : { value: (N ? Z && E : E) || `` },
        M,
        N ? X.getValidationProps : X.getInputValidationProps
      ),
      He = F ? !!H : Z,
      Ue = (F && U) || g;
    _.useEffect(() => {
      if (!P || !R) return;
      let e = P.disabledStatesRef.current;
      return (
        e.set(R, I),
        () => {
          e.delete(R);
        }
      );
    }, [P, I, R]);
    let $ = _.useMemo(
        () => ({
          ...A,
          checked: He,
          disabled: I,
          readOnly: S,
          required: w,
          indeterminate: Ue,
        }),
        [A, He, I, S, w, Ue]
      ),
      We = b($),
      Ge = te(`span`, e, {
        state: $,
        ref: [Le, q, t, N?.registerControlRef],
        props: [
          {
            id: D ? (B ?? void 0) : z,
            role: `checkbox`,
            'aria-checked': U ? `mixed` : Z,
            'aria-readonly': S || void 0,
            'aria-required': w || void 0,
            'aria-labelledby': Be,
            [_e]: y ? `` : void 0,
            onFocus() {
              k(!0);
            },
            onBlur() {
              let e = Q.current;
              e &&
                (we(!0), k(!1), Te === `onBlur` && X.commit(N ? W : e.checked));
            },
            onClick(e) {
              S ||
                I ||
                (e.preventDefault(),
                Q.current?.dispatchEvent(
                  new PointerEvent(`click`, {
                    bubbles: !0,
                    shiftKey: e.shiftKey,
                    ctrlKey: e.ctrlKey,
                    altKey: e.altKey,
                    metaKey: e.metaKey,
                  })
                ));
            },
          },
          M,
          X.getValidationProps,
          ye,
          Fe,
          Ie,
        ],
        stateAttributesMapping: We,
      });
    return (0, C.jsxs)(x.Provider, {
      value: $,
      children: [
        Ge,
        !Z &&
          !N &&
          L &&
          !y &&
          T !== void 0 &&
          (0, C.jsx)(`input`, { type: `hidden`, name: L, value: T }),
        (0, C.jsx)(`input`, { ...Ve }),
      ],
    });
  }),
  w = _.forwardRef(function (e, t) {
    let { render: n, className: ee, keepMounted: r = !1, ...i } = e,
      a = S(),
      o = a.checked || a.indeterminate,
      { mounted: s, transitionStatus: c, setMounted: l } = h(o),
      u = _.useRef(null),
      d = { ...a, transitionStatus: c };
    fe({
      open: o,
      ref: u,
      onComplete() {
        o || l(!1);
      },
    });
    let f = b(a),
      ne = _.useMemo(() => ({ ...f, ...g, ...p }), [f]),
      re = r || s,
      ie = te(`span`, e, {
        ref: [t, u],
        state: d,
        stateAttributesMapping: ne,
        props: i,
      });
    return re ? ie : null;
  });
function T({ className: e, ...t }) {
  return (0, C.jsx)(ve, {
    'data-slot': `checkbox`,
    className: r(
      `peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary`,
      e
    ),
    ...t,
    children: (0, C.jsx)(w, {
      'data-slot': `checkbox-indicator`,
      className: `grid place-content-center text-current transition-none [&>svg]:size-3.5`,
      children: (0, C.jsx)(ee, {}),
    }),
  });
}
export { T as t };
