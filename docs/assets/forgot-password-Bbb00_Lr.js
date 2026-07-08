import { t as x } from './button-bN-wY-Ql.js';
import { t as A, n as D, a as E, r as k, o as O } from './card-DUh0Lb3Z.js';
import { r as C, n as S, t as w } from './field-C2E2boUb.js';
import { t as T } from './form-field-kfwg5atP.js';
import {
  ul as _,
  Cl as a,
  Tl as c,
  Zl as d,
  a as f,
  ou as g,
  i as h,
  Ul as l,
  fu as m,
  El as o,
  dl as p,
  Sl as s,
  Wl as u,
  wl as v,
  xl as y,
} from './index-D7NQvf2G.js';
import { t as i } from './navigation-BaWAhgBr.js';
import { a as e, f as n, l as r, c as t } from './runtime-DPDP4QTt.js';
import { t as b } from './useForm--zzFMcDE.js';

var j = n(r()),
  M = t(),
  N = h({ email: f().email(l()) });
function P() {
  let [t, n] = (0, j.useState)(``),
    [r, f] = (0, j.useState)(!1),
    [h, P] = (0, j.useState)(``),
    F = d(),
    I = F.data ?? {},
    L = F.isSuccess,
    R = I.password_reset_enabled === `true`,
    z = b({
      defaultValues: { email: `` },
      validators: { onSubmit: N },
      onSubmit: async ({ value: t }) => {
        n(``);
        try {
          let r = `${window.location.origin}${e(`/reset-password`)}`,
            i = await g({ email: t.email, redirectTo: r });
          i.error
            ? n(i.error.message || `Request failed`)
            : (P(t.email), f(!0));
        } catch (e) {
          n(e.message || `Request failed`);
        }
      },
    });
  return (0, M.jsx)(`div`, {
    className: `bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10`,
    children: (0, M.jsxs)(`div`, {
      className: `flex w-full max-w-sm flex-col gap-6`,
      children: [
        (0, M.jsx)(i, {
          href: `/`,
          className: `self-center font-serif text-lg italic`,
          children: I.app_name || m.app_name,
        }),
        (0, M.jsxs)(A, {
          children: [
            (0, M.jsxs)(E, {
              className: `text-center`,
              children: [
                (0, M.jsx)(O, {
                  className: `text-xl`,
                  children: r ? a() : o(),
                }),
                !r && (0, M.jsx)(k, { children: c() }),
              ],
            }),
            (0, M.jsx)(D, {
              children:
                L && !R
                  ? (0, M.jsxs)(C, {
                      children: [
                        (0, M.jsxs)(`div`, {
                          className: `rounded-lg border border-dashed p-6 text-center`,
                          children: [
                            (0, M.jsx)(`p`, {
                              className: `text-sm font-medium`,
                              children: p(),
                            }),
                            (0, M.jsx)(`p`, {
                              className: `text-muted-foreground mt-1 text-sm`,
                              children: _(),
                            }),
                          ],
                        }),
                        (0, M.jsx)(w, {
                          children: (0, M.jsx)(i, {
                            href: `/sign-in`,
                            className: `text-center text-sm underline underline-offset-4`,
                            children: y(),
                          }),
                        }),
                      ],
                    })
                  : r
                    ? (0, M.jsxs)(C, {
                        children: [
                          (0, M.jsx)(`p`, {
                            className: `text-muted-foreground text-center text-sm`,
                            children: s({ email: h }),
                          }),
                          (0, M.jsx)(w, {
                            children: (0, M.jsx)(i, {
                              href: `/sign-in`,
                              className: `text-center text-sm underline underline-offset-4`,
                              children: y(),
                            }),
                          }),
                        ],
                      })
                    : (0, M.jsx)(`form`, {
                        onSubmit: (e) => {
                          (e.preventDefault(), z.handleSubmit());
                        },
                        children: (0, M.jsxs)(C, {
                          children: [
                            t &&
                              (0, M.jsx)(`div`, {
                                className: `bg-destructive/10 text-destructive rounded-lg p-3 text-sm`,
                                children: t,
                              }),
                            (0, M.jsx)(z.Field, {
                              name: `email`,
                              children: (e) =>
                                (0, M.jsx)(T, {
                                  field: e,
                                  label: u(),
                                  type: `email`,
                                  required: !0,
                                  placeholder: l(),
                                }),
                            }),
                            (0, M.jsxs)(w, {
                              children: [
                                (0, M.jsx)(z.Subscribe, {
                                  selector: (e) => e.isSubmitting,
                                  children: (e) =>
                                    (0, M.jsx)(x, {
                                      type: `submit`,
                                      disabled: e,
                                      children: e ? `...` : v(),
                                    }),
                                }),
                                (0, M.jsx)(S, {
                                  className: `text-center`,
                                  children: (0, M.jsx)(i, {
                                    href: `/sign-in`,
                                    className: `underline underline-offset-4`,
                                    children: y(),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { P as component };
