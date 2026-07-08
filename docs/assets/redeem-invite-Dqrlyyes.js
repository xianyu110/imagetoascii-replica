import { t as g } from './button-bN-wY-Ql.js';
import { n as C, a as S, t as T, o as w } from './card-DUh0Lb3Z.js';
import { i as _, t as b, n as v, r as y } from './field-C2E2boUb.js';
import {
  $c as a,
  Qc as c,
  Zc as d,
  du as f,
  lu as h,
  Xc as l,
  fu as m,
  Jc as o,
  el as p,
  Ml as s,
  Yc as u,
} from './index-D7NQvf2G.js';
import { t as x } from './input-BzjUrduj.js';
import { r as i } from './navigation-BaWAhgBr.js';
import { a as e, f as n, l as r, c as t } from './runtime-DPDP4QTt.js';

var E = n(r()),
  D = t();
function O() {
  let t = i(),
    { data: n, isPending: r } = f(),
    [O, k] = (0, E.useState)(``),
    [A, j] = (0, E.useState)(``),
    [M, N] = (0, E.useState)(!1),
    [P, F] = (0, E.useState)(!0);
  (0, E.useEffect)(() => {
    if (r) return;
    if (!n?.user) {
      t.push(`/sign-in`);
      return;
    }
    let e = !1;
    return (
      fetch(`/api/user/info`)
        .then((e) => e.json())
        .then((n) => {
          e ||
            (n.code === 0 && !n.data?.needsInvite
              ? t.push(`/settings`)
              : F(!1));
        })
        .catch(() => !e && F(!1)),
      () => {
        e = !0;
      }
    );
  }, [r, n, t]);
  async function I(t) {
    (t.preventDefault(), j(``));
    let n = O.trim();
    if (!n) {
      j(c());
      return;
    }
    N(!0);
    try {
      let t = await fetch(`/api/invite-codes/validate`, {
        method: `POST`,
        headers: { 'Content-Type': `application/json` },
        body: JSON.stringify({ code: n }),
      }).then((e) => e.json());
      if (t.code !== 0) {
        (j(t.message || d()), N(!1));
        return;
      }
      let r = await fetch(`/api/invite-codes/redeem`, {
        method: `POST`,
        headers: { 'Content-Type': `application/json` },
        body: JSON.stringify({ code: n }),
      }).then((e) => e.json());
      if (r.code !== 0) {
        (j(r.message || d()), N(!1));
        return;
      }
      window.location.assign(e(`/settings`));
    } catch (e) {
      (j(e?.message || d()), N(!1));
    }
  }
  async function L() {
    (await h(), t.push(`/sign-in`));
  }
  return r || P
    ? (0, D.jsx)(`div`, {
        className: `bg-muted flex min-h-svh items-center justify-center`,
        children: (0, D.jsx)(`div`, {
          className: `border-primary size-6 animate-spin rounded-full border-2 border-t-transparent`,
        }),
      })
    : (0, D.jsx)(`div`, {
        className: `bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10`,
        children: (0, D.jsxs)(`div`, {
          className: `flex w-full max-w-sm flex-col gap-6`,
          children: [
            (0, D.jsx)(`span`, {
              className: `self-center font-serif text-lg italic`,
              children: m.app_name,
            }),
            (0, D.jsxs)(T, {
              children: [
                (0, D.jsx)(S, {
                  className: `text-center`,
                  children: (0, D.jsx)(w, {
                    className: `text-xl`,
                    children: l(),
                  }),
                }),
                (0, D.jsx)(C, {
                  children: (0, D.jsx)(`form`, {
                    onSubmit: I,
                    children: (0, D.jsxs)(y, {
                      children: [
                        A &&
                          (0, D.jsx)(`div`, {
                            className: `bg-destructive/10 text-destructive rounded-lg p-3 text-sm`,
                            children: A,
                          }),
                        (0, D.jsx)(`p`, {
                          className: `text-muted-foreground text-sm`,
                          children: u(),
                        }),
                        (0, D.jsxs)(b, {
                          children: [
                            (0, D.jsx)(_, {
                              htmlFor: `invite-code`,
                              children: p(),
                            }),
                            (0, D.jsx)(x, {
                              id: `invite-code`,
                              value: O,
                              onChange: (e) => k(e.target.value),
                              placeholder: a(),
                              required: !0,
                            }),
                          ],
                        }),
                        (0, D.jsxs)(b, {
                          children: [
                            (0, D.jsx)(g, {
                              type: `submit`,
                              disabled: M,
                              children: M ? `...` : o(),
                            }),
                            (0, D.jsx)(v, {
                              className: `text-center`,
                              children: (0, D.jsx)(`button`, {
                                type: `button`,
                                onClick: L,
                                className: `underline underline-offset-4`,
                                children: s(),
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
export { O as component };
