import { t as T } from './button-bN-wY-Ql.js';
import { a as j, n as M, o as N, t as P } from './card-DUh0Lb3Z.js';
import { n as D, a as E, t as k, r as O } from './field-C2E2boUb.js';
import { t as A } from './form-field-kfwg5atP.js';
import {
  a as _,
  Zc as ae,
  kl as b,
  Gl as c,
  zl as C,
  cu as ce,
  Ll as d,
  fu as de,
  $c as ee,
  Nl as f,
  Ul as g,
  Rl as h,
  Wl as ie,
  Il as l,
  du as le,
  Qc as m,
  Ol as ne,
  Al as o,
  Zl as oe,
  Pl as p,
  Vl as re,
  Bl as s,
  uu as S,
  au as se,
  Hl as te,
  Kl as u,
  el as ue,
  i as v,
  nu as x,
  jl as y,
} from './index-CNkADuMW.js';
import { t as a, r as i } from './navigation-CFRROamK.js';
import { a as e, f as n, l as r, c as t } from './runtime-DPDP4QTt.js';
import { t as w } from './useForm-BDJH5gDJ.js';

var F = n(r()),
  I = t(),
  L = v({
    name: _().min(1),
    email: _().email(g()),
    password: _().min(8),
    confirmPassword: _().min(8),
    inviteCode: _(),
  }).refine((e) => e.password === e.confirmPassword, {
    path: [`confirmPassword`],
    message: h(),
  });
function R() {
  let t = i(),
    { data: n, isPending: r } = le(),
    h = (0, F.useRef)(!1),
    [_, v] = (0, F.useState)(``),
    [R, z] = (0, F.useState)(null),
    [B, V] = (0, F.useState)(null);
  ((0, F.useEffect)(() => {
    let e = new URLSearchParams(window.location.search);
    (z(e.get(`redirect`)), V(e.get(`callbackUrl`)));
  }, []),
    (0, F.useEffect)(() => {
      r || h.current || (n?.user && ((h.current = !0), t.push(`/`)));
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
    fe = (() => {
      let e = new URLSearchParams();
      (H && e.set(`callbackUrl`, H), R && e.set(`redirect`, R));
      let t = e.toString();
      return t ? `?${t}` : ``;
    })(),
    W = oe(),
    G = W.data ?? {},
    pe = W.isSuccess,
    K = G.email_auth_enabled !== `false`,
    q = G.google_auth_enabled === `true`,
    J = G.github_auth_enabled === `true`,
    Y = G.email_verification_enabled === `true`,
    X = G.invite_code_required === `true`,
    Z = q || J,
    me = K || Z,
    Q = w({
      defaultValues: {
        name: ``,
        email: ``,
        password: ``,
        confirmPassword: ``,
        inviteCode: ``,
      },
      validators: { onSubmit: L },
      onSubmit: async ({ value: n }) => {
        v(``);
        let r = n.inviteCode.trim();
        if (X && !r) {
          v(m());
          return;
        }
        try {
          if (X)
            try {
              await x(`/api/invite-codes/validate`, { code: r });
            } catch (e) {
              v(e?.message || ae());
              return;
            }
          let i = await S.email({
            name: n.name,
            email: n.email,
            password: n.password,
          });
          if (i.error) {
            v(i.error.message || `Sign up failed`);
            return;
          }
          if (X && r)
            try {
              await x(`/api/invite-codes/redeem`, { code: r });
            } catch {}
          if (Y) {
            let r = `/verify-email?sent=1&email=${encodeURIComponent(n.email)}&callbackUrl=${encodeURIComponent(U)}`;
            (se.sendVerificationEmail({ email: n.email, callbackURL: e(U) }),
              t.push(r));
          } else ((h.current = !0), window.location.assign(e(U)));
        } catch (e) {
          v(e.message || `Sign up failed`);
        }
      },
    });
  async function $(e) {
    await ce.social({ provider: e, callbackURL: U });
  }
  return (0, I.jsx)(`div`, {
    className: `bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10`,
    children: (0, I.jsxs)(`div`, {
      className: `flex w-full max-w-sm flex-col gap-6`,
      children: [
        (0, I.jsx)(a, {
          href: `/`,
          className: `self-center font-serif text-lg italic`,
          children: G.app_name || de.app_name,
        }),
        (0, I.jsxs)(P, {
          children: [
            (0, I.jsx)(j, {
              className: `text-center`,
              children: (0, I.jsx)(N, { className: `text-xl`, children: c() }),
            }),
            (0, I.jsx)(M, {
              children:
                pe && !me
                  ? (0, I.jsxs)(`div`, {
                      className: `rounded-lg border border-dashed p-6 text-center`,
                      children: [
                        (0, I.jsx)(`p`, {
                          className: `text-sm font-medium`,
                          children: b(),
                        }),
                        (0, I.jsx)(`p`, {
                          className: `text-muted-foreground mt-1 text-sm`,
                          children: ne(),
                        }),
                      ],
                    })
                  : (0, I.jsx)(`form`, {
                      onSubmit: (e) => {
                        (e.preventDefault(), Q.handleSubmit());
                      },
                      children: (0, I.jsxs)(O, {
                        children: [
                          _ &&
                            (0, I.jsx)(`div`, {
                              className: `bg-destructive/10 text-destructive rounded-lg p-3 text-sm`,
                              children: _,
                            }),
                          Z &&
                            (0, I.jsxs)(k, {
                              children: [
                                q &&
                                  (0, I.jsxs)(T, {
                                    variant: `outline`,
                                    type: `button`,
                                    onClick: () => $(`google`),
                                    children: [
                                      (0, I.jsx)(`svg`, {
                                        xmlns: `http://www.w3.org/2000/svg`,
                                        viewBox: `0 0 24 24`,
                                        className: `size-4`,
                                        children: (0, I.jsx)(`path`, {
                                          d: `M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z`,
                                          fill: `currentColor`,
                                        }),
                                      }),
                                      y(),
                                    ],
                                  }),
                                J &&
                                  (0, I.jsxs)(T, {
                                    variant: `outline`,
                                    type: `button`,
                                    onClick: () => $(`github`),
                                    children: [
                                      (0, I.jsx)(`svg`, {
                                        xmlns: `http://www.w3.org/2000/svg`,
                                        viewBox: `0 0 24 24`,
                                        className: `size-4`,
                                        children: (0, I.jsx)(`path`, {
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
                            K &&
                            (0, I.jsx)(E, {
                              className: `*:data-[slot=field-separator-content]:bg-card`,
                              children: f(),
                            }),
                          K &&
                            (0, I.jsxs)(I.Fragment, {
                              children: [
                                (0, I.jsx)(Q.Field, {
                                  name: `name`,
                                  children: (e) =>
                                    (0, I.jsx)(A, {
                                      field: e,
                                      label: d(),
                                      type: `text`,
                                      required: !0,
                                      placeholder: l(),
                                    }),
                                }),
                                (0, I.jsx)(Q.Field, {
                                  name: `email`,
                                  children: (e) =>
                                    (0, I.jsx)(A, {
                                      field: e,
                                      label: ie(),
                                      type: `email`,
                                      required: !0,
                                      placeholder: g(),
                                    }),
                                }),
                                (0, I.jsx)(Q.Field, {
                                  name: `password`,
                                  children: (e) =>
                                    (0, I.jsx)(A, {
                                      field: e,
                                      label: te(),
                                      type: `password`,
                                      required: !0,
                                      placeholder: re(),
                                    }),
                                }),
                                (0, I.jsx)(Q.Field, {
                                  name: `confirmPassword`,
                                  children: (e) =>
                                    (0, I.jsx)(A, {
                                      field: e,
                                      label: s(),
                                      type: `password`,
                                      required: !0,
                                      placeholder: C(),
                                    }),
                                }),
                                X &&
                                  (0, I.jsx)(Q.Field, {
                                    name: `inviteCode`,
                                    children: (e) =>
                                      (0, I.jsx)(A, {
                                        field: e,
                                        label: ue(),
                                        type: `text`,
                                        required: !0,
                                        placeholder: ee(),
                                      }),
                                  }),
                                (0, I.jsxs)(k, {
                                  children: [
                                    (0, I.jsx)(Q.Subscribe, {
                                      selector: (e) => e.isSubmitting,
                                      children: (e) =>
                                        (0, I.jsx)(T, {
                                          type: `submit`,
                                          disabled: e,
                                          children: e ? `...` : c(),
                                        }),
                                    }),
                                    (0, I.jsxs)(D, {
                                      className: `text-center`,
                                      children: [
                                        p(),
                                        ` `,
                                        (0, I.jsx)(a, {
                                          href: `/sign-in${fe}`,
                                          className: `underline underline-offset-4`,
                                          children: u(),
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
export { R as component };
