import { t as S } from './button-bN-wY-Ql.js';
import {
  a as C,
  r as D,
  o as E,
  t as O,
  n as T,
  i as w,
} from './card-DUh0Lb3Z.js';
import {
  ql as _,
  tl as b,
  al as c,
  du as d,
  fu as f,
  ol as g,
  nl as h,
  au as l,
  ll as m,
  il as p,
  Xl as s,
  cl as u,
  rl as v,
  xl as x,
  sl as y,
} from './index-D7NQvf2G.js';
import { r as a, t as o } from './navigation-BaWAhgBr.js';
import { a as e, t as i, f as n, l as r, c as t } from './runtime-DPDP4QTt.js';

var k = n(r()),
  A = t(),
  j = 60;
function M(e) {
  if (!e) return `/`;
  try {
    let t = decodeURIComponent(e);
    return t.startsWith(`/`) ? t : `/`;
  } catch {
    return `/`;
  }
}
function N(e) {
  return e?.startsWith(`/`) ? i(e) : `/`;
}
function P(e) {
  return `verify-email:lastSentAt:${String(e || ``).toLowerCase()}`;
}
function F(e) {
  if (typeof window > `u` || !e) return 0;
  let t = window.localStorage.getItem(P(e)),
    n = t ? Number(t) : 0;
  if (!n || Number.isNaN(n)) return 0;
  let r = Math.floor((Date.now() - n) / 1e3);
  return Math.max(0, j - r);
}
function I(e) {
  if (!(typeof window > `u`) && e)
    try {
      window.localStorage.setItem(P(e), String(Date.now()));
    } catch {}
}
function L() {
  let t = a(),
    { data: n, isPending: r } = d(),
    [i, j] = (0, k.useState)(null),
    [P, L] = (0, k.useState)(null),
    [R, z] = (0, k.useState)(!1),
    [B, V] = (0, k.useState)(!1),
    [H, U] = (0, k.useState)(0),
    W = (0, k.useRef)(0);
  ((0, k.useEffect)(() => {
    let e = new URLSearchParams(window.location.search),
      t = e.get(`email`),
      n = e.get(`callbackUrl`),
      r = e.get(`sent`);
    if ((j(t), L(n), z(!0), r === `1`)) {
      (F(t) === 0 && I(t), U(F(t)));
      try {
        let e = new URL(window.location.href);
        (e.searchParams.delete(`sent`),
          window.history.replaceState({}, ``, e.toString()));
      } catch {}
    } else U(F(t));
  }, []),
    (0, k.useEffect)(() => {
      R && !i && !P && t.replace(`/sign-in`);
    }, [R, i, P, t]));
  let G = (0, k.useMemo)(() => N(M(P)), [P]),
    K = (0, k.useMemo)(() => {
      let e = new URLSearchParams();
      return (e.set(`callbackUrl`, G || `/`), `/sign-in?${e.toString()}`);
    }, [G]),
    q = () => {
      typeof window > `u` || window.location.assign(e(G));
    },
    J = async () => {
      let e = Date.now();
      if (!(e - W.current < 800)) {
        W.current = e;
        try {
          let { data: e } = await l.getSession();
          e?.user && q();
        } catch {}
      }
    };
  return (
    (0, k.useEffect)(() => {
      if (!R) return;
      let e = window.setInterval(() => {
        U(F(i));
      }, 1e3);
      return () => window.clearInterval(e);
    }, [i, R]),
    (0, k.useEffect)(() => {
      !r && n?.user && q();
    }, [r, n?.user, G]),
    (0, k.useEffect)(() => {
      if (typeof window > `u`) return;
      let e = !1,
        t = 0,
        n = async () => {
          if (e || ((t += 1), await J(), t >= 12)) return;
          let { data: r } = await l.getSession();
          r?.user || window.setTimeout(n, 1e3);
        };
      return (
        n(),
        () => {
          e = !0;
        }
      );
    }, [G]),
    (0, k.useEffect)(() => {
      if (typeof window > `u`) return;
      let e = () => void J(),
        t = () => {
          document.visibilityState === `visible` && J();
        };
      return (
        window.addEventListener(`focus`, e),
        document.addEventListener(`visibilitychange`, t),
        () => {
          (window.removeEventListener(`focus`, e),
            document.removeEventListener(`visibilitychange`, t));
        }
      );
    }, [G]),
    (0, A.jsx)(`div`, {
      className: `bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10`,
      children: (0, A.jsxs)(`div`, {
        className: `flex w-full max-w-sm flex-col gap-6`,
        children: [
          (0, A.jsx)(o, {
            href: `/`,
            className: `self-center font-serif text-lg italic`,
            children: f.app_name,
          }),
          (0, A.jsxs)(O, {
            children: [
              (0, A.jsxs)(C, {
                children: [
                  (0, A.jsx)(E, {
                    className: `text-lg md:text-xl`,
                    children: m(),
                  }),
                  (0, A.jsxs)(D, {
                    className: `text-xs md:text-sm`,
                    children: [u(), i ? ` ${i}` : ``],
                  }),
                ],
              }),
              (0, A.jsx)(T, {
                children: (0, A.jsxs)(`div`, {
                  className: `grid gap-3`,
                  children: [
                    (0, A.jsx)(S, {
                      type: `button`,
                      variant: `outline`,
                      className: `w-full`,
                      disabled: B || H > 0,
                      onClick: async () => {
                        if (!i) {
                          s.error(v());
                          return;
                        }
                        if (!B && !(F(i) > 0))
                          try {
                            V(!0);
                            let t = await l.sendVerificationEmail({
                              email: i,
                              callbackURL: e(G || `/`),
                            });
                            if (t?.error) {
                              s.error(t.error.message || p());
                              return;
                            }
                            (I(i), U(F(i)));
                          } catch (e) {
                            s.error(e?.message || p());
                          } finally {
                            V(!1);
                          }
                      },
                      children: B
                        ? (0, A.jsx)(_, { size: 16, className: `animate-spin` })
                        : H > 0
                          ? b({ seconds: H })
                          : h(),
                    }),
                    (0, A.jsx)(S, {
                      type: `button`,
                      className: `w-full`,
                      disabled: r,
                      onClick: () => {
                        if (n?.user) {
                          q();
                          return;
                        }
                        (async () => {
                          await J();
                          let { data: e } = await l.getSession();
                          e?.user ? q() : s.error(c());
                        })();
                      },
                      children: r
                        ? (0, A.jsx)(_, { size: 16, className: `animate-spin` })
                        : y(),
                    }),
                    (0, A.jsx)(S, {
                      type: `button`,
                      variant: `ghost`,
                      className: `w-full`,
                      onClick: () => t.push(K),
                      children: x(),
                    }),
                  ],
                }),
              }),
              (0, A.jsx)(w, {
                children: (0, A.jsx)(`p`, {
                  className: `text-muted-foreground w-full text-center text-xs`,
                  children: g(),
                }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
export { L as component };
