import { Tu as a, Eu as i, ku as o, Au as r } from './index-D7NQvf2G.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';

var s = t(n(), 1);
function c(e) {
  let t = o(),
    n = (0, s.useRef)(void 0);
  return i(t.stores.location, (i) => {
    let a = e?.select ? e.select(i) : i;
    if (e?.structuralSharing ?? t.options.defaultStructuralSharing) {
      let e = r(n.current, a);
      return ((n.current = e), e);
    }
    return a;
  });
}
var l = e();
function u({ href: e, locale: t, prefetch: n, ...r }) {
  return /^(https?:|mailto:|tel:|#)/.test(e)
    ? (0, l.jsx)(`a`, { href: e, ...r })
    : (0, l.jsx)(a, { to: e, ...r });
}
function d() {
  return c().pathname;
}
function f(e) {
  let [t, n] = e.split(`#`),
    [r, i] = t.split(`?`);
  return {
    to: r || `/`,
    search: i ? Object.fromEntries(new URLSearchParams(i)) : void 0,
    hash: n,
  };
}
function p() {
  let e = o();
  return {
    push: (t) => {
      e.navigate(f(t));
    },
    replace: (t) => {
      e.navigate({ ...f(t), replace: !0 });
    },
    back: () => e.history.back(),
    forward: () => e.history.forward(),
    refresh: () => e.invalidate(),
    prefetch: (e) => {},
  };
}
export { d as n, p as r, u as t };
