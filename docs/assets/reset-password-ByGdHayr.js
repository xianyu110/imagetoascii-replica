import { t as C } from './button-bN-wY-Ql.js';
import { o as A, r as j, n as k, t as M, a as O } from './card-DUh0Lb3Z.js';
import { t as E, r as T, n as w } from './field-C2E2boUb.js';
import { t as D } from './form-field-kfwg5atP.js';
import {
  pl as _,
  Bl as a,
  xl as b,
  _l as c,
  fl as d,
  fu as f,
  ml as g,
  i as h,
  a as l,
  hl as m,
  El as o,
  gl as p,
  Rl as s,
  bl as u,
  su as v,
  yl as x,
  vl as y,
} from './index-CNkADuMW.js';
import { t as i, r } from './navigation-CFRROamK.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as S } from './useForm-BDJH5gDJ.js';

var N = t(n()),
  P = e(),
  F = h({ password: l().min(8), confirmPassword: l().min(8) }).refine(
    (e) => e.password === e.confirmPassword,
    { path: [`confirmPassword`], message: s() }
  );
function I() {
  let e = r(),
    [t, n] = (0, N.useState)(null),
    [s, l] = (0, N.useState)(!1),
    [h, I] = (0, N.useState)(``),
    [L, R] = (0, N.useState)(!1);
  (0, N.useEffect)(() => {
    let e = new URLSearchParams(window.location.search),
      t = e.get(`token`);
    (n(e.get(`error`) ? null : t), l(!0));
  }, []);
  let z = S({
    defaultValues: { password: ``, confirmPassword: `` },
    validators: { onSubmit: F },
    onSubmit: async ({ value: n }) => {
      if ((I(``), !t)) {
        I(d());
        return;
      }
      try {
        let r = await v({ newPassword: n.password, token: t });
        r.error
          ? I(r.error.message || `Reset failed`)
          : (R(!0), setTimeout(() => e.push(`/sign-in`), 1500));
      } catch (e) {
        I(e.message || `Reset failed`);
      }
    },
  });
  return (0, P.jsx)(`div`, {
    className: `bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10`,
    children: (0, P.jsxs)(`div`, {
      className: `flex w-full max-w-sm flex-col gap-6`,
      children: [
        (0, P.jsx)(i, {
          href: `/`,
          className: `self-center font-serif text-lg italic`,
          children: f.app_name,
        }),
        (0, P.jsxs)(M, {
          children: [
            (0, P.jsxs)(O, {
              className: `text-center`,
              children: [
                (0, P.jsx)(A, { className: `text-xl`, children: u() }),
                !L && s && t && (0, P.jsx)(j, { children: x() }),
              ],
            }),
            (0, P.jsx)(k, {
              children: s
                ? t
                  ? L
                    ? (0, P.jsxs)(T, {
                        children: [
                          (0, P.jsx)(`p`, {
                            className: `text-center text-sm`,
                            children: g(),
                          }),
                          (0, P.jsx)(E, {
                            children: (0, P.jsx)(i, {
                              href: `/sign-in`,
                              className: `text-center text-sm underline underline-offset-4`,
                              children: b(),
                            }),
                          }),
                        ],
                      })
                    : (0, P.jsx)(`form`, {
                        onSubmit: (e) => {
                          (e.preventDefault(), z.handleSubmit());
                        },
                        children: (0, P.jsxs)(T, {
                          children: [
                            h &&
                              (0, P.jsx)(`div`, {
                                className: `bg-destructive/10 text-destructive rounded-lg p-3 text-sm`,
                                children: h,
                              }),
                            (0, P.jsx)(z.Field, {
                              name: `password`,
                              children: (e) =>
                                (0, P.jsx)(D, {
                                  field: e,
                                  label: y(),
                                  type: `password`,
                                  required: !0,
                                  placeholder: c(),
                                }),
                            }),
                            (0, P.jsx)(z.Field, {
                              name: `confirmPassword`,
                              children: (e) =>
                                (0, P.jsx)(D, {
                                  field: e,
                                  label: a(),
                                  type: `password`,
                                  required: !0,
                                  placeholder: p(),
                                }),
                            }),
                            (0, P.jsxs)(E, {
                              children: [
                                (0, P.jsx)(z.Subscribe, {
                                  selector: (e) => e.isSubmitting,
                                  children: (e) =>
                                    (0, P.jsx)(C, {
                                      type: `submit`,
                                      disabled: e,
                                      children: e ? `...` : m(),
                                    }),
                                }),
                                (0, P.jsx)(w, {
                                  className: `text-center`,
                                  children: (0, P.jsx)(i, {
                                    href: `/sign-in`,
                                    className: `underline underline-offset-4`,
                                    children: b(),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      })
                  : (0, P.jsxs)(T, {
                      children: [
                        (0, P.jsx)(`div`, {
                          className: `bg-destructive/10 text-destructive rounded-lg p-3 text-center text-sm`,
                          children: _(),
                        }),
                        (0, P.jsx)(E, {
                          children: (0, P.jsx)(i, {
                            href: `/forgot-password`,
                            className: `text-center text-sm underline underline-offset-4`,
                            children: o(),
                          }),
                        }),
                      ],
                    })
                : null,
            }),
          ],
        }),
      ],
    }),
  });
}
export { I as component };
