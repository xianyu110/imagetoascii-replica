import { t as w } from './button-bN-wY-Ql.js';
import { a as A, n as j, o as M, t as N } from './card-DUh0Lb3Z.js';
import { t as D, r as E, i as ie, a as re, n as T } from './field-C2E2boUb.js';
import { t as k } from './form-field-kfwg5atP.js';
import {
  a as _,
  du as b,
  Fl as c,
  jl as C,
  Kl as d,
  Nl as ee,
  Ol as f,
  Zl as g,
  Wl as h,
  Gl as l,
  Vl as m,
  Al as o,
  Ul as p,
  Dl as s,
  i as S,
  kl as te,
  Hl as u,
  au as v,
  fu as x,
  cu as y,
} from './index-BFsmjNQq.js';
import { t as O } from './input-BzjUrduj.js';
import { t as a, r as i } from './navigation-Cl4u6_fq.js';
import { a as e, f as n, l as r, c as t } from './runtime-DPDP4QTt.js';
import { t as ne } from './useForm-HrrjqnYb.js';

var P = n(r()),
  F = t(),
  I = S({ email: _().email(p()), password: _().min(1) });
function L() {
  let t = i(),
    { data: n, isPending: r } = b(),
    _ = (0, P.useRef)(!1),
    [S, L] = (0, P.useState)(``),
    [R, z] = (0, P.useState)(null),
    [B, V] = (0, P.useState)(null);
  ((0, P.useEffect)(() => {
    let e = new URLSearchParams(window.location.search);
    (z(e.get(`redirect`)), V(e.get(`callbackUrl`)));
  }, []),
    (0, P.useEffect)(() => {
      r || _.current || (n?.user && ((_.current = !0), t.push(`/`)));
    }, [r, n?.user, t]));
  let H =
      B &&
      B.startsWith(`/`) &&
      !B.startsWith(`//`) &&
      !/^\/(sign-in|sign-up|verify-email)(\/|\?|$)/.test(B)
        ? B
        : null,
    U = R
      ? `/auth-callback?redirect=${encodeURIComponent(R)}`
      : H || `/settings`,
    W = (() => {
      let e = new URLSearchParams();
      (H && e.set(`callbackUrl`, H), R && e.set(`redirect`, R));
      let t = e.toString();
      return t ? `?${t}` : ``;
    })(),
    G = g(),
    K = G.data ?? {},
    q = G.isSuccess,
    J = K.email_auth_enabled !== `false`,
    Y = K.google_auth_enabled === `true`,
    X = K.github_auth_enabled === `true`,
    ae = K.password_reset_enabled === `true`,
    Z = Y || X,
    oe = J || Z,
    Q = ne({
      defaultValues: { email: ``, password: `` },
      validators: { onSubmit: I },
      onSubmit: async ({ value: n }) => {
        L(``);
        try {
          let r = await y.email({ email: n.email, password: n.password });
          if (r.error) {
            let i = r.error.status,
              a = r.error.code,
              o = r.error.message || ``;
            if (
              a === `EMAIL_NOT_VERIFIED` ||
              (i === 403 && /not verified/i.test(o))
            ) {
              let r = `/verify-email?sent=1&email=${encodeURIComponent(n.email)}&callbackUrl=${encodeURIComponent(U)}`;
              (v.sendVerificationEmail({ email: n.email, callbackURL: e(U) }),
                t.push(r));
              return;
            }
            L(o || `Sign in failed`);
          } else ((_.current = !0), window.location.assign(e(U)));
        } catch (e) {
          L(e.message || `Sign in failed`);
        }
      },
    });
  async function $(e) {
    await y.social({ provider: e, callbackURL: U });
  }
  return (0, F.jsx)(`div`, {
    className: `bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10`,
    children: (0, F.jsxs)(`div`, {
      className: `flex w-full max-w-sm flex-col gap-6`,
      children: [
        (0, F.jsx)(a, {
          href: `/`,
          className: `self-center font-serif text-lg italic`,
          children: K.app_name || x.app_name,
        }),
        (0, F.jsxs)(N, {
          children: [
            (0, F.jsx)(A, {
              className: `text-center`,
              children: (0, F.jsx)(M, { className: `text-xl`, children: d() }),
            }),
            (0, F.jsx)(j, {
              children:
                q && !oe
                  ? (0, F.jsxs)(`div`, {
                      className: `rounded-lg border border-dashed p-6 text-center`,
                      children: [
                        (0, F.jsx)(`p`, {
                          className: `text-sm font-medium`,
                          children: te(),
                        }),
                        (0, F.jsx)(`p`, {
                          className: `text-muted-foreground mt-1 text-sm`,
                          children: f(),
                        }),
                      ],
                    })
                  : (0, F.jsx)(`form`, {
                      onSubmit: (e) => {
                        (e.preventDefault(), Q.handleSubmit());
                      },
                      children: (0, F.jsxs)(E, {
                        children: [
                          S &&
                            (0, F.jsx)(`div`, {
                              className: `bg-destructive/10 text-destructive rounded-lg p-3 text-sm`,
                              children: S,
                            }),
                          Z &&
                            (0, F.jsxs)(D, {
                              children: [
                                Y &&
                                  (0, F.jsxs)(w, {
                                    variant: `outline`,
                                    type: `button`,
                                    onClick: () => $(`google`),
                                    children: [
                                      (0, F.jsx)(`svg`, {
                                        xmlns: `http://www.w3.org/2000/svg`,
                                        viewBox: `0 0 24 24`,
                                        className: `size-4`,
                                        children: (0, F.jsx)(`path`, {
                                          d: `M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z`,
                                          fill: `currentColor`,
                                        }),
                                      }),
                                      C(),
                                    ],
                                  }),
                                X &&
                                  (0, F.jsxs)(w, {
                                    variant: `outline`,
                                    type: `button`,
                                    onClick: () => $(`github`),
                                    children: [
                                      (0, F.jsx)(`svg`, {
                                        xmlns: `http://www.w3.org/2000/svg`,
                                        viewBox: `0 0 24 24`,
                                        className: `size-4`,
                                        children: (0, F.jsx)(`path`, {
                                          d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`,
                                          fill: `currentColor`,
                                        }),
                                      }),
                                      o(),
                                    ],
                                  }),
                              ],
                            }),
                          Z &&
                            J &&
                            (0, F.jsx)(re, {
                              className: `*:data-[slot=field-separator-content]:bg-card`,
                              children: ee(),
                            }),
                          J &&
                            (0, F.jsxs)(F.Fragment, {
                              children: [
                                (0, F.jsx)(Q.Field, {
                                  name: `email`,
                                  children: (e) =>
                                    (0, F.jsx)(k, {
                                      field: e,
                                      label: h(),
                                      type: `email`,
                                      required: !0,
                                      placeholder: p(),
                                    }),
                                }),
                                (0, F.jsx)(Q.Field, {
                                  name: `password`,
                                  children: (e) => {
                                    let t = e.state.meta.isTouched
                                        ? e.state.meta.errors?.[0]
                                        : null,
                                      n =
                                        t == null
                                          ? null
                                          : typeof t == `string`
                                            ? t
                                            : t.message
                                              ? String(t.message)
                                              : String(t);
                                    return (0, F.jsxs)(D, {
                                      children: [
                                        (0, F.jsxs)(`div`, {
                                          className: `flex items-center justify-between`,
                                          children: [
                                            (0, F.jsx)(ie, {
                                              htmlFor: e.name,
                                              children: u(),
                                            }),
                                            ae &&
                                              (0, F.jsx)(a, {
                                                href: `/forgot-password`,
                                                className: `text-muted-foreground hover:text-foreground text-sm underline underline-offset-4`,
                                                children: s(),
                                              }),
                                          ],
                                        }),
                                        (0, F.jsx)(O, {
                                          id: e.name,
                                          name: e.name,
                                          type: `password`,
                                          value: e.state.value,
                                          onChange: (t) =>
                                            e.handleChange(t.target.value),
                                          onBlur: e.handleBlur,
                                          required: !0,
                                          placeholder: m(),
                                          'aria-invalid': n ? !0 : void 0,
                                        }),
                                        n &&
                                          (0, F.jsx)(`p`, {
                                            className: `text-destructive text-sm`,
                                            children: n,
                                          }),
                                      ],
                                    });
                                  },
                                }),
                                (0, F.jsxs)(D, {
                                  children: [
                                    (0, F.jsx)(Q.Subscribe, {
                                      selector: (e) => e.isSubmitting,
                                      children: (e) =>
                                        (0, F.jsx)(w, {
                                          type: `submit`,
                                          disabled: e,
                                          children: e ? `...` : d(),
                                        }),
                                    }),
                                    (0, F.jsxs)(T, {
                                      className: `text-center`,
                                      children: [
                                        c(),
                                        ` `,
                                        (0, F.jsx)(a, {
                                          href: `/sign-up${W}`,
                                          className: `underline underline-offset-4`,
                                          children: l(),
                                        }),
                                      ],
                                    }),
                                  ],
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
export { L as component };
