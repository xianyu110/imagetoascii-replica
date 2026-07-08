import { t as l } from './react-dom-C1PHl06U.js';
import {
  n as a,
  u as c,
  c as e,
  l as i,
  f as n,
  o,
  i as r,
  r as s,
  d as t,
} from './runtime-DPDP4QTt.js';

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/pricing-DnVhTeXq.js',
      'assets/runtime-DPDP4QTt.js',
      'assets/button-bN-wY-Ql.js',
      'assets/utils-DXalBF5w.js',
      'assets/dialog-CfiOugxY.js',
      'assets/DialogTitle-CswfcBHR.js',
      'assets/createBaseUIEventDetails-eqndMbrJ.js',
      'assets/react-dom-C1PHl06U.js',
      'assets/x-CdrRlTxD.js',
      'assets/useMutation-B1ymgNeO.js',
      'assets/navigation-CFRROamK.js',
      'assets/check-CGoqwQ3Q.js',
      'assets/credit-card-BwobX3f8.js',
      'assets/header-BlAGdRjK.js',
      'assets/route-Ddn8fdnd.js',
      'assets/input-BzjUrduj.js',
      'assets/app-layout-BdrfeW03.js',
      'assets/avatar-p-eDL2La.js',
      'assets/dropdown-menu-40nlGN8S.js',
      'assets/useCompositeListItem-CFl9jHkJ.js',
      'assets/Separator-p4ewmgjN.js',
      'assets/chevron-right-BrXtw_xW.js',
      'assets/useRender-Biditz3A.js',
      'assets/separator-BNih0Q3F.js',
      'assets/coins-HACsqOr4.js',
      'assets/key-O1NmE6zQ.js',
      'assets/image-uploader-CbL8eBz8.js',
      'assets/image-MG7yU4iJ.js',
      'assets/refresh-cw-f1Q0Oxfd.js',
      'assets/label-BC74pi7G.js',
      'assets/textarea-wtz4TRr6.js',
      'assets/route-0uDlbeLg.js',
      'assets/shield-CNyImK4e.js',
      'assets/route-8M009FaU.js',
      'assets/mdx-components-4dHHPGpT.js',
      'assets/routes-BRBk9Wcv.js',
      'assets/blog-DGPSG1OA.js',
      'assets/posts-TgbSrFCc.js',
      'assets/_slug-tYLDmmdU.js',
      'assets/markdown-content-Bu2HbgZC.js',
      'assets/verify-email-Bal7wrZ_.js',
      'assets/card-DUh0Lb3Z.js',
      'assets/sign-up-DviKl2yv.js',
      'assets/useForm-BDJH5gDJ.js',
      'assets/form-field-kfwg5atP.js',
      'assets/field-C2E2boUb.js',
      'assets/sign-in-DIzG4-7L.js',
      'assets/reset-password-ByGdHayr.js',
      'assets/redeem-invite-C6l6kGGi.js',
      'assets/forgot-password-CKgyMRDR.js',
      'assets/settings-DliWzQAJ.js',
      'assets/tickets-B6VgsDu_.js',
      'assets/data-table-JV2OVW0F.js',
      'assets/message-square-Cb_YqkXB.js',
      'assets/plus-Cj2WBfjX.js',
      'assets/badge-FgXNX2Cv.js',
      'assets/dynamic-BogkA4sc.js',
      'assets/profile-2MXqXzy6.js',
      'assets/payments-CwuzVYQR.js',
      'assets/credits-CcDEUzh8.js',
      'assets/billing-CH5eW5AK.js',
      'assets/circle-x-EAXrNSn_.js',
      'assets/ellipsis-BJ2Qcpkl.js',
      'assets/pencil-BQzwL0ZJ.js',
      'assets/apikeys-B0P5bjVK.js',
      'assets/trash-2-DeVFn-41.js',
      'assets/admin-C6yHjWSL.js',
      'assets/users-B-zE6I4S.js',
      'assets/checkbox-D3wpB4sg.js',
      'assets/useAriaLabelledBy-Cko5dQFm.js',
      'assets/tickets-Dj9XY29X.js',
      'assets/subscriptions-BSvjfkjJ.js',
      'assets/settings-Dy2kQtZM.js',
      'assets/select-7fwjhBbT.js',
      'assets/roles-DFUvNodP.js',
      'assets/posts-IGxiGbw6.js',
      'assets/permissions-p4EALNAH.js',
      'assets/payments-Ccua7s2h.js',
      'assets/invite-codes-CMESr-Se.js',
      'assets/credits-BPXfLekg.js',
      'assets/categories-7w83mTPl.js',
    ])
) => i.map((i) => d[i]);
var u = c((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), ee || ((ee = !0), ae()));
        else {
          var t = n(l);
          t !== null && ce(x, t.startTime - e);
        }
    }
    var ee = !1,
      S = -1,
      te = 5,
      ne = -1;
    function re() {
      return g ? !0 : !(e.unstable_now() - ne < te);
    }
    function ie() {
      if (((g = !1), ee)) {
        var t = e.unstable_now();
        ne = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(S), (S = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && re());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && ce(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? ae() : (ee = !1);
        }
      }
    }
    var ae;
    if (typeof y == `function`)
      ae = function () {
        y(ie);
      };
    else if (typeof MessageChannel < `u`) {
      var oe = new MessageChannel(),
        se = oe.port2;
      ((oe.port1.onmessage = ie),
        (ae = function () {
          se.postMessage(null);
        }));
    } else
      ae = function () {
        _(ie, 0);
      };
    function ce(t, n) {
      S = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`
            )
          : (te = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(S), (S = -1)) : (h = !0), ce(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), ee || ((ee = !0), ae()))),
          r
        );
      }),
      (e.unstable_shouldYield = re),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  d = c((e, t) => {
    t.exports = u();
  }),
  f = c((e) => {
    var t = d(),
      n = i(),
      r = l();
    function a(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function o(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function s(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function c(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function u(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function f(e) {
      if (s(e) !== e) throw Error(a(188));
    }
    function p(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = s(e)), t === null)) throw Error(a(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
          if (((r = i.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === o.child) {
          for (o = i.child; o; ) {
            if (o === n) return (f(i), e);
            if (o === r) return (f(i), t);
            o = o.sibling;
          }
          throw Error(a(188));
        }
        if (n.return !== r.return) ((n = i), (r = o));
        else {
          for (var c = !1, l = i.child; l; ) {
            if (l === n) {
              ((c = !0), (n = i), (r = o));
              break;
            }
            if (l === r) {
              ((c = !0), (r = i), (n = o));
              break;
            }
            l = l.sibling;
          }
          if (!c) {
            for (l = o.child; l; ) {
              if (l === n) {
                ((c = !0), (n = o), (r = i));
                break;
              }
              if (l === r) {
                ((c = !0), (r = o), (n = i));
                break;
              }
              l = l.sibling;
            }
            if (!c) throw Error(a(189));
          }
        }
        if (n.alternate !== r) throw Error(a(190));
      }
      if (n.tag !== 3) throw Error(a(188));
      return n.stateNode.current === n ? e : t;
    }
    function m(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = m(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      ee = Symbol.for(`react.consumer`),
      S = Symbol.for(`react.context`),
      te = Symbol.for(`react.forward_ref`),
      ne = Symbol.for(`react.suspense`),
      re = Symbol.for(`react.suspense_list`),
      ie = Symbol.for(`react.memo`),
      ae = Symbol.for(`react.lazy`),
      oe = Symbol.for(`react.activity`),
      se = Symbol.for(`react.memo_cache_sentinel`),
      ce = Symbol.iterator;
    function le(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ce && e[ce]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var ue = Symbol.for(`react.client.reference`);
    function de(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === ue ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case ne:
          return `Suspense`;
        case re:
          return `SuspenseList`;
        case oe:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case S:
            return e.displayName || `Context`;
          case ee:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case te:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ie:
            return (
              (t = e.displayName || null),
              t === null ? de(e.type) || `Memo` : t
            );
          case ae:
            ((t = e._payload), (e = e._init));
            try {
              return de(e(t));
            } catch {}
        }
      return null;
    }
    var fe = Array.isArray,
      C = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      w = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      pe = { pending: !1, data: null, method: null, action: null },
      me = [],
      he = -1;
    function ge(e) {
      return { current: e };
    }
    function _e(e) {
      0 > he || ((e.current = me[he]), (me[he] = null), he--);
    }
    function E(e, t) {
      (he++, (me[he] = e.current), (e.current = t));
    }
    var D = ge(null),
      ve = ge(null),
      ye = ge(null),
      be = ge(null);
    function xe(e, t) {
      switch ((E(ye, t), E(ve, e), E(D, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Gd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Gd(t)), (e = Kd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (_e(D), E(D, e));
    }
    function Se() {
      (_e(D), _e(ve), _e(ye));
    }
    function Ce(e) {
      e.memoizedState !== null && E(be, e);
      var t = D.current,
        n = Kd(t, e.type);
      t !== n && (E(ve, e), E(D, n));
    }
    function we(e) {
      (ve.current === e && (_e(D), _e(ve)),
        be.current === e && (_e(be), (np._currentValue = pe)));
    }
    var Te, Ee;
    function De(e) {
      if (Te === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((Te = (t && t[1]) || ``),
            (Ee =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        Te +
        e +
        Ee
      );
    }
    var Oe = !1;
    function ke(e, t) {
      if (!e || Oe) return ``;
      Oe = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);
          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Oe = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? De(n) : ``;
    }
    function Ae(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return De(e.type);
        case 16:
          return De(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? De(`Suspense Fallback`)
            : De(`Suspense`);
        case 19:
          return De(`SuspenseList`);
        case 0:
        case 15:
          return ke(e.type, !1);
        case 11:
          return ke(e.type.render, !1);
        case 1:
          return ke(e.type, !0);
        case 31:
          return De(`Activity`);
        default:
          return ``;
      }
    }
    function je(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Ae(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Me = Object.prototype.hasOwnProperty,
      Ne = t.unstable_scheduleCallback,
      Pe = t.unstable_cancelCallback,
      Fe = t.unstable_shouldYield,
      Ie = t.unstable_requestPaint,
      Le = t.unstable_now,
      Re = t.unstable_getCurrentPriorityLevel,
      ze = t.unstable_ImmediatePriority,
      Be = t.unstable_UserBlockingPriority,
      Ve = t.unstable_NormalPriority,
      He = t.unstable_LowPriority,
      Ue = t.unstable_IdlePriority,
      We = t.log,
      Ge = t.unstable_setDisableYieldValue,
      Ke = null,
      qe = null;
    function Je(e) {
      if (
        (typeof We == `function` && Ge(e),
        qe && typeof qe.setStrictMode == `function`)
      )
        try {
          qe.setStrictMode(Ke, e);
        } catch {}
    }
    var Ye = Math.clz32 ? Math.clz32 : Qe,
      Xe = Math.log,
      Ze = Math.LN2;
    function Qe(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Xe(e) / Ze) | 0)) | 0);
    }
    var $e = 256,
      et = 262144,
      tt = 4194304;
    function nt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function rt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = nt(n)))
                : (i = nt(o))
              : (i = nt(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = nt(n)))
                  : (i = nt(o)))
              : (i = nt(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function it(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function at(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function ot() {
      var e = tt;
      return ((tt <<= 1), !(tt & 62914560) && (tt = 4194304), e);
    }
    function st(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function ct(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function lt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ye(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && ut(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function ut(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ye(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function dt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ye(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function ft(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : pt(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function pt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function mt(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function ht() {
      var e = w.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : vp(e.type)) : e;
    }
    function gt(e, t) {
      var n = w.p;
      try {
        return ((w.p = e), t());
      } finally {
        w.p = n;
      }
    }
    var _t = Math.random().toString(36).slice(2),
      O = `__reactFiber$` + _t,
      vt = `__reactProps$` + _t,
      yt = `__reactContainer$` + _t,
      bt = `__reactEvents$` + _t,
      xt = `__reactListeners$` + _t,
      St = `__reactHandles$` + _t,
      Ct = `__reactResources$` + _t,
      wt = `__reactMarker$` + _t;
    function Tt(e) {
      (delete e[O], delete e[vt], delete e[bt], delete e[xt], delete e[St]);
    }
    function Et(e) {
      var t = e[O];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[yt] || n[O])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = hf(e); e !== null; ) {
              if ((n = e[O])) return n;
              e = hf(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Dt(e) {
      if ((e = e[O] || e[yt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Ot(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(a(33));
    }
    function kt(e) {
      var t = e[Ct];
      return (
        (t ||= e[Ct] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function At(e) {
      e[wt] = !0;
    }
    var jt = new Set(),
      Mt = {};
    function Nt(e, t) {
      (Pt(e, t), Pt(e + `Capture`, t));
    }
    function Pt(e, t) {
      for (Mt[e] = t, e = 0; e < t.length; e++) jt.add(t[e]);
    }
    var Ft = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`
      ),
      It = {},
      Lt = {};
    function Rt(e) {
      return Me.call(Lt, e)
        ? !0
        : Me.call(It, e)
          ? !1
          : Ft.test(e)
            ? (Lt[e] = !0)
            : ((It[e] = !0), !1);
    }
    function zt(e, t, n) {
      if (Rt(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Bt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Vt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Ht(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Ut(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Wt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Gt(e) {
      if (!e._valueTracker) {
        var t = Ut(e) ? `checked` : `value`;
        e._valueTracker = Wt(e, t, `` + e[t]);
      }
    }
    function Kt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Ut(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function qt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Jt = /[\n"\\]/g;
    function Yt(e) {
      return e.replace(Jt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Xt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + Ht(t))
            : e.value !== `` + Ht(t) && (e.value = `` + Ht(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Qt(e, o, Ht(n))
          : Qt(e, o, Ht(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + Ht(s))
          : e.removeAttribute(`name`));
    }
    function Zt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Gt(e);
          return;
        }
        ((n = n == null ? `` : `` + Ht(n)),
          (t = t == null ? n : `` + Ht(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Gt(e));
    }
    function Qt(e, t, n) {
      (t === `number` && qt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function $t(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Ht(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function en(e, t, n) {
      if (
        t != null &&
        ((t = `` + Ht(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Ht(n);
    }
    function tn(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(a(92));
          if (fe(r)) {
            if (1 < r.length) throw Error(a(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Ht(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Gt(e));
    }
    function nn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var rn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `
      )
    );
    function an(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || rn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function on(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(a(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var i in t)
          ((r = t[i]), t.hasOwnProperty(i) && n[i] !== r && an(e, i, r));
      } else for (var o in t) t.hasOwnProperty(o) && an(e, o, t[o]);
    }
    function sn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var cn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      ln =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function un(e) {
      return ln.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function dn() {}
    var fn = null;
    function pn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var mn = null,
      hn = null;
    function gn(e) {
      var t = Dt(e);
      if (t && (e = t.stateNode)) {
        var n = e[vt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Xt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Yt(`` + t) + `"][type="radio"]`
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = r[vt] || null;
                  if (!i) throw Error(a(90));
                  Xt(
                    r,
                    i.value,
                    i.defaultValue,
                    i.defaultValue,
                    i.checked,
                    i.defaultChecked,
                    i.type,
                    i.name
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Kt(r));
            }
            break a;
          case `textarea`:
            en(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && $t(e, !!n.multiple, t, !1));
        }
      }
    }
    var _n = !1;
    function vn(e, t, n) {
      if (_n) return e(t, n);
      _n = !0;
      try {
        return e(t);
      } finally {
        if (
          ((_n = !1),
          (mn !== null || hn !== null) &&
            (Tu(), mn && ((t = mn), (e = hn), (hn = mn = null), gn(t), e)))
        )
          for (t = 0; t < e.length; t++) gn(e[t]);
      }
    }
    function yn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[vt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(a(231, t, typeof n));
      return n;
    }
    var bn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      xn = !1;
    if (bn)
      try {
        var Sn = {};
        (Object.defineProperty(Sn, 'passive', {
          get: function () {
            xn = !0;
          },
        }),
          window.addEventListener(`test`, Sn, Sn),
          window.removeEventListener(`test`, Sn, Sn));
      } catch {
        xn = !1;
      }
    var Cn = null,
      wn = null,
      Tn = null;
    function En() {
      if (Tn) return Tn;
      var e,
        t = wn,
        n = t.length,
        r,
        i = `value` in Cn ? Cn.value : Cn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Tn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Dn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function On() {
      return !0;
    }
    function kn() {
      return !1;
    }
    function An(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? On
            : kn),
          (this.isPropagationStopped = kn),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = On));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = On));
          },
          persist: function () {},
          isPersistent: On,
        }),
        t
      );
    }
    var jn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Mn = An(jn),
      Nn = h({}, jn, { view: 0, detail: 0 }),
      Pn = An(Nn),
      Fn,
      In,
      Ln,
      Rn = h({}, Nn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Yn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Ln &&
                (Ln && e.type === `mousemove`
                  ? ((Fn = e.screenX - Ln.screenX),
                    (In = e.screenY - Ln.screenY))
                  : (In = Fn = 0),
                (Ln = e)),
              Fn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : In;
        },
      }),
      zn = An(Rn),
      Bn = An(h({}, Rn, { dataTransfer: 0 })),
      Vn = An(h({}, Nn, { relatedTarget: 0 })),
      Hn = An(
        h({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      Un = An(
        h({}, jn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        })
      ),
      Wn = An(h({}, jn, { data: 0 })),
      Gn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Kn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      qn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Jn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = qn[e])
          ? !!t[e]
          : !1;
    }
    function Yn() {
      return Jn;
    }
    var Xn = An(
        h({}, Nn, {
          key: function (e) {
            if (e.key) {
              var t = Gn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Dn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Kn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Yn,
          charCode: function (e) {
            return e.type === `keypress` ? Dn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? Dn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        })
      ),
      Zn = An(
        h({}, Rn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      Qn = An(
        h({}, Nn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Yn,
        })
      ),
      $n = An(h({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      er = An(
        h({}, Rn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      tr = An(h({}, jn, { newState: 0, oldState: 0 })),
      nr = [9, 13, 27, 32],
      rr = bn && `CompositionEvent` in window,
      k = null;
    bn && `documentMode` in document && (k = document.documentMode);
    var ir = bn && `TextEvent` in window && !k,
      ar = bn && (!rr || (k && 8 < k && 11 >= k)),
      or = ` `,
      A = !1;
    function sr(e, t) {
      switch (e) {
        case `keyup`:
          return nr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function cr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var lr = !1;
    function ur(e, t) {
      switch (e) {
        case `compositionend`:
          return cr(t);
        case `keypress`:
          return t.which === 32 ? ((A = !0), or) : null;
        case `textInput`:
          return ((e = t.data), e === or && A ? null : e);
        default:
          return null;
      }
    }
    function dr(e, t) {
      if (lr)
        return e === `compositionend` || (!rr && sr(e, t))
          ? ((e = En()), (Tn = wn = Cn = null), (lr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return ar && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var fr = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!fr[e.type] : t === `textarea`;
    }
    function mr(e, t, n, r) {
      (mn ? (hn ? hn.push(r) : (hn = [r])) : (mn = r),
        (t = Ad(t, `onChange`)),
        0 < t.length &&
          ((n = new Mn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var hr = null,
      gr = null;
    function _r(e) {
      Cd(e, 0);
    }
    function vr(e) {
      if (Kt(Ot(e))) return e;
    }
    function yr(e, t) {
      if (e === `change`) return t;
    }
    var br = !1;
    if (bn) {
      var xr;
      if (bn) {
        var Sr = `oninput` in document;
        if (!Sr) {
          var Cr = document.createElement(`div`);
          (Cr.setAttribute(`oninput`, `return;`),
            (Sr = typeof Cr.oninput == `function`));
        }
        xr = Sr;
      } else xr = !1;
      br = xr && (!document.documentMode || 9 < document.documentMode);
    }
    function wr() {
      hr && (hr.detachEvent(`onpropertychange`, Tr), (gr = hr = null));
    }
    function Tr(e) {
      if (e.propertyName === `value` && vr(gr)) {
        var t = [];
        (mr(t, gr, e, pn(e)), vn(_r, t));
      }
    }
    function Er(e, t, n) {
      e === `focusin`
        ? (wr(), (hr = t), (gr = n), hr.attachEvent(`onpropertychange`, Tr))
        : e === `focusout` && wr();
    }
    function Dr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return vr(gr);
    }
    function Or(e, t) {
      if (e === `click`) return vr(t);
    }
    function kr(e, t) {
      if (e === `input` || e === `change`) return vr(t);
    }
    function Ar(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var jr = typeof Object.is == `function` ? Object.is : Ar;
    function Mr(e, t) {
      if (jr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Me.call(t, i) || !jr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Nr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Pr(e, t) {
      var n = Nr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Nr(n);
      }
    }
    function Fr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Fr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Ir(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = qt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = qt(e.document);
      }
      return t;
    }
    function Lr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Rr = bn && `documentMode` in document && 11 >= document.documentMode,
      zr = null,
      Br = null,
      Vr = null,
      Hr = !1;
    function Ur(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Hr ||
        zr == null ||
        zr !== qt(r) ||
        ((r = zr),
        `selectionStart` in r && Lr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Vr && Mr(Vr, r)) ||
          ((Vr = r),
          (r = Ad(Br, `onSelect`)),
          0 < r.length &&
            ((t = new Mn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = zr))));
    }
    function Wr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Gr = {
        animationend: Wr(`Animation`, `AnimationEnd`),
        animationiteration: Wr(`Animation`, `AnimationIteration`),
        animationstart: Wr(`Animation`, `AnimationStart`),
        transitionrun: Wr(`Transition`, `TransitionRun`),
        transitionstart: Wr(`Transition`, `TransitionStart`),
        transitioncancel: Wr(`Transition`, `TransitionCancel`),
        transitionend: Wr(`Transition`, `TransitionEnd`),
      },
      Kr = {},
      qr = {};
    bn &&
      ((qr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Gr.animationend.animation,
        delete Gr.animationiteration.animation,
        delete Gr.animationstart.animation),
      `TransitionEvent` in window || delete Gr.transitionend.transition);
    function Jr(e) {
      if (Kr[e]) return Kr[e];
      if (!Gr[e]) return e;
      var t = Gr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in qr) return (Kr[e] = t[n]);
      return e;
    }
    var Yr = Jr(`animationend`),
      Xr = Jr(`animationiteration`),
      Zr = Jr(`animationstart`),
      Qr = Jr(`transitionrun`),
      $r = Jr(`transitionstart`),
      ei = Jr(`transitioncancel`),
      ti = Jr(`transitionend`),
      ni = new Map(),
      ri =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `
        );
    ri.push(`scrollEnd`);
    function ii(e, t) {
      (ni.set(e, t), Nt(t, [e]));
    }
    var ai =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      oi = [],
      si = 0,
      ci = 0;
    function li() {
      for (var e = si, t = (ci = si = 0); t < e; ) {
        var n = oi[t];
        oi[t++] = null;
        var r = oi[t];
        oi[t++] = null;
        var i = oi[t];
        oi[t++] = null;
        var a = oi[t];
        if (((oi[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && pi(n, i, a);
      }
    }
    function ui(e, t, n, r) {
      ((oi[si++] = e),
        (oi[si++] = t),
        (oi[si++] = n),
        (oi[si++] = r),
        (ci |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function di(e, t, n, r) {
      return (ui(e, t, n, r), mi(e));
    }
    function fi(e, t) {
      return (ui(e, null, null, t), mi(e));
    }
    function pi(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ye(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function mi(e) {
      if (50 < _u) throw ((_u = 0), (vu = null), Error(a(185)));
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var hi = {};
    function gi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function _i(e, t, n, r) {
      return new gi(e, t, n, r);
    }
    function vi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function yi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = _i(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function bi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function xi(e, t, n, r, i, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) vi(e) && (s = 1);
      else if (typeof e == `string`)
        s = qf(e, n, D.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case oe:
            return (
              (e = _i(31, n, t, i)),
              (e.elementType = oe),
              (e.lanes = o),
              e
            );
          case y:
            return Si(n.children, i, o, t);
          case b:
            ((s = 8), (i |= 24));
            break;
          case x:
            return (
              (e = _i(12, n, t, i | 2)),
              (e.elementType = x),
              (e.lanes = o),
              e
            );
          case ne:
            return (
              (e = _i(13, n, t, i)),
              (e.elementType = ne),
              (e.lanes = o),
              e
            );
          case re:
            return (
              (e = _i(19, n, t, i)),
              (e.elementType = re),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case S:
                  s = 10;
                  break a;
                case ee:
                  s = 9;
                  break a;
                case te:
                  s = 11;
                  break a;
                case ie:
                  s = 14;
                  break a;
                case ae:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(a(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = _i(s, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function Si(e, t, n, r) {
      return ((e = _i(7, e, r, t)), (e.lanes = n), e);
    }
    function Ci(e, t, n) {
      return ((e = _i(6, e, null, t)), (e.lanes = n), e);
    }
    function wi(e) {
      var t = _i(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Ti(e, t, n) {
      return (
        (t = _i(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ei = new WeakMap();
    function Di(e, t) {
      if (typeof e == `object` && e) {
        var n = Ei.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: je(t) }), Ei.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: je(t) };
    }
    var Oi = [],
      ki = 0,
      Ai = null,
      ji = 0,
      Mi = [],
      Ni = 0,
      Pi = null,
      Fi = 1,
      Ii = ``;
    function Li(e, t) {
      ((Oi[ki++] = ji), (Oi[ki++] = Ai), (Ai = e), (ji = t));
    }
    function Ri(e, t, n) {
      ((Mi[Ni++] = Fi), (Mi[Ni++] = Ii), (Mi[Ni++] = Pi), (Pi = e));
      var r = Fi;
      e = Ii;
      var i = 32 - Ye(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ye(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Fi = (1 << (32 - Ye(t) + i)) | (n << i) | r),
          (Ii = a + e));
      } else ((Fi = (1 << a) | (n << i) | r), (Ii = e));
    }
    function zi(e) {
      e.return !== null && (Li(e, 1), Ri(e, 1, 0));
    }
    function Bi(e) {
      for (; e === Ai; )
        ((Ai = Oi[--ki]), (Oi[ki] = null), (ji = Oi[--ki]), (Oi[ki] = null));
      for (; e === Pi; )
        ((Pi = Mi[--Ni]),
          (Mi[Ni] = null),
          (Ii = Mi[--Ni]),
          (Mi[Ni] = null),
          (Fi = Mi[--Ni]),
          (Mi[Ni] = null));
    }
    function Vi(e, t) {
      ((Mi[Ni++] = Fi),
        (Mi[Ni++] = Ii),
        (Mi[Ni++] = Pi),
        (Fi = t.id),
        (Ii = t.overflow),
        (Pi = e));
    }
    var Hi = null,
      j = null,
      M = !1,
      Ui = null,
      Wi = !1,
      Gi = Error(a(519));
    function Ki(e) {
      throw (
        Qi(
          Di(
            Error(
              a(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``
              )
            ),
            e
          )
        ),
        Gi
      );
    }
    function qi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[O] = e), (t[vt] = r), n)) {
        case `dialog`:
          (Y(`cancel`, t), Y(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Y(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < xd.length; n++) Y(xd[n], t);
          break;
        case `source`:
          Y(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Y(`error`, t), Y(`load`, t));
          break;
        case `details`:
          Y(`toggle`, t);
          break;
        case `input`:
          (Y(`invalid`, t),
            Zt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0
            ));
          break;
        case `select`:
          Y(`invalid`, t);
          break;
        case `textarea`:
          (Y(`invalid`, t), tn(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Id(t.textContent, n)
          ? (r.popover != null && (Y(`beforetoggle`, t), Y(`toggle`, t)),
            r.onScroll != null && Y(`scroll`, t),
            r.onScrollEnd != null && Y(`scrollend`, t),
            r.onClick != null && (t.onclick = dn),
            (t = !0))
          : (t = !1),
        t || Ki(e, !0));
    }
    function Ji(e) {
      for (Hi = e.return; Hi; )
        switch (Hi.tag) {
          case 5:
          case 31:
          case 13:
            Wi = !1;
            return;
          case 27:
          case 3:
            Wi = !0;
            return;
          default:
            Hi = Hi.return;
        }
    }
    function Yi(e) {
      if (e !== Hi) return !1;
      if (!M) return (Ji(e), (M = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              qd(e.type, e.memoizedProps))),
          (n = !n)),
        n && j && Ki(e),
        Ji(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(a(317));
        j = mf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(a(317));
        j = mf(e);
      } else
        t === 27
          ? ((t = j), tf(e.type) ? ((e = pf), (pf = null), (j = e)) : (j = t))
          : (j = Hi ? ff(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Xi() {
      ((j = Hi = null), (M = !1));
    }
    function Zi() {
      var e = Ui;
      return (
        e !== null &&
          (ru === null ? (ru = e) : ru.push.apply(ru, e), (Ui = null)),
        e
      );
    }
    function Qi(e) {
      Ui === null ? (Ui = [e]) : Ui.push(e);
    }
    var $i = ge(null),
      ea = null,
      ta = null;
    function na(e, t, n) {
      (E($i, t._currentValue), (t._currentValue = n));
    }
    function ra(e) {
      ((e._currentValue = $i.current), _e($i));
    }
    function ia(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function aa(e, t, n, r) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = i.dependencies;
        if (o !== null) {
          var s = i.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = i;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ia(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (i.tag === 18) {
          if (((s = i.return), s === null)) throw Error(a(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ia(s, n, e),
            (s = null));
        } else s = i.child;
        if (s !== null) s.return = i;
        else
          for (s = i; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((i = s.sibling), i !== null)) {
              ((i.return = s.return), (s = i));
              break;
            }
            s = s.return;
          }
        i = s;
      }
    }
    function oa(e, t, n, r) {
      e = null;
      for (var i = t, o = !1; i !== null; ) {
        if (!o) {
          if (i.flags & 524288) o = !0;
          else if (i.flags & 262144) break;
        }
        if (i.tag === 10) {
          var s = i.alternate;
          if (s === null) throw Error(a(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = i.type;
            jr(i.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (i === be.current) {
          if (((s = i.alternate), s === null)) throw Error(a(387));
          s.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
            (e === null ? (e = [np]) : e.push(np));
        }
        i = i.return;
      }
      (e !== null && aa(t, e, n, r), (t.flags |= 262144));
    }
    function sa(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!jr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ca(e) {
      ((ea = e),
        (ta = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function la(e) {
      return da(ea, e);
    }
    function ua(e, t) {
      return (ea === null && ca(e), da(e, t));
    }
    function da(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), ta === null)) {
        if (e === null) throw Error(a(308));
        ((ta = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else ta = ta.next = t;
      return n;
    }
    var fa =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      pa = t.unstable_scheduleCallback,
      ma = t.unstable_NormalPriority,
      N = {
        $$typeof: S,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function ha() {
      return { controller: new fa(), data: new Map(), refCount: 0 };
    }
    function ga(e) {
      (e.refCount--,
        e.refCount === 0 &&
          pa(ma, function () {
            e.controller.abort();
          }));
    }
    var _a = null,
      va = 0,
      ya = 0,
      ba = null;
    function xa(e, t) {
      if (_a === null) {
        var n = (_a = []);
        ((va = 0),
          (ya = hd()),
          (ba = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (va++, t.then(Sa, Sa), t);
    }
    function Sa() {
      if (--va === 0 && _a !== null) {
        ba !== null && (ba.status = `fulfilled`);
        var e = _a;
        ((_a = null), (ya = 0), (ba = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ca(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          }
        ),
        r
      );
    }
    var wa = C.S;
    C.S = function (e, t) {
      ((ou = Le()),
        typeof t == `object` && t && typeof t.then == `function` && xa(e, t),
        wa !== null && wa(e, t));
    };
    var Ta = ge(null);
    function Ea() {
      var e = Ta.current;
      return e === null ? H.pooledCache : e;
    }
    function Da(e, t) {
      t === null ? E(Ta, Ta.current) : E(Ta, t.pool);
    }
    function Oa() {
      var e = Ea();
      return e === null ? null : { parent: N._currentValue, pool: e };
    }
    var ka = Error(a(460)),
      Aa = Error(a(474)),
      ja = Error(a(542)),
      Ma = { then: function () {} };
    function Na(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Pa(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(dn, dn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Ra(e), e);
        default:
          if (typeof t.status == `string`) t.then(dn, dn);
          else {
            if (((e = H), e !== null && 100 < e.shellSuspendCounter))
              throw Error(a(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                }
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Ra(e), e);
          }
          throw ((Ia = t), ka);
      }
    }
    function Fa(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Ia = e), ka)
          : e;
      }
    }
    var Ia = null;
    function La() {
      if (Ia === null) throw Error(a(459));
      var e = Ia;
      return ((Ia = null), e);
    }
    function Ra(e) {
      if (e === ka || e === ja) throw Error(a(483));
    }
    var za = null,
      Ba = 0;
    function Va(e) {
      var t = Ba;
      return ((Ba += 1), za === null && (za = []), Pa(za, e, t));
    }
    function Ha(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Ua(e, t) {
      throw t.$$typeof === g
        ? Error(a(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            a(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e
            )
          ));
    }
    function Wa(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function i(e, t) {
        return ((e = yi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ci(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var a = n.type;
        return a === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === a ||
                (typeof a == `object` &&
                  a &&
                  a.$$typeof === ae &&
                  Fa(a) === t.type))
            ? ((t = i(t, n.props)), Ha(t, n), (t.return = e), t)
            : ((t = xi(n.type, n.key, n.props, null, e.mode, r)),
              Ha(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ti(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, a) {
        return t === null || t.tag !== 7
          ? ((t = Si(n, e.mode, r, a)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = Ci(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = xi(t.type, t.key, t.props, null, e.mode, n)),
                Ha(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = Ti(t, e.mode, n)), (t.return = e), t);
            case ae:
              return ((t = Fa(t)), f(e, t, n));
          }
          if (fe(t) || le(t))
            return ((t = Si(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Va(t), n);
          if (t.$$typeof === S) return f(e, ua(e, t), n);
          Ua(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case ae:
              return ((n = Fa(n)), p(e, t, n, r));
          }
          if (fe(n) || le(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Va(n), r);
          if (n.$$typeof === S) return p(e, t, ua(e, n), r);
          Ua(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case ae:
              return ((r = Fa(r)), m(e, t, n, r, i));
          }
          if (fe(r) || le(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, Va(r), i);
          if (r.$$typeof === S) return m(e, t, n, ua(t, r), i);
          Ua(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), M && Li(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (M && Li(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          M && Li(i, h),
          l
        );
      }
      function g(i, s, c, l) {
        if (c == null) throw Error(a(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(i, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(i, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(i, h), M && Li(i, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(i, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (M && Li(i, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, i, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(i, e);
            }),
          M && Li(i, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = i(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === ae &&
                        Fa(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = i(r, o.props)),
                        Ha(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === y
                  ? ((c = Si(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = xi(o.type, o.key, o.props, null, e.mode, c)),
                    Ha(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = i(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = Ti(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case ae:
              return ((o = Fa(o)), b(e, r, o, c));
          }
          if (fe(o)) return h(e, r, o, c);
          if (le(o)) {
            if (((l = le(o)), typeof l != `function`)) throw Error(a(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, Va(o), c);
          if (o.$$typeof === S) return b(e, r, ua(e, o), c);
          Ua(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = i(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ci(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Ba = 0;
          var i = b(e, t, n, r);
          return ((za = null), i);
        } catch (t) {
          if (t === ka || t === ja) throw t;
          var a = _i(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Ga = Wa(!0),
      Ka = Wa(!1),
      qa = !1;
    function Ja(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ya(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Xa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Za(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), V & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = mi(e)),
          pi(e, null, n),
          t
        );
      }
      return (ui(e, r, t, n), mi(e));
    }
    function Qa(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), dt(e, n));
      }
    }
    function $a(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var eo = !1;
    function to() {
      if (eo) {
        var e = ba;
        if (e !== null) throw e;
      }
    }
    function no(e, t, n, r) {
      eo = !1;
      var i = e.updateQueue;
      qa = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (W & f) === f : (r & f) === f) {
            (f !== 0 && f === ya && (eo = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  qa = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Zl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function ro(e, t) {
      if (typeof e != `function`) throw Error(a(191, e));
      e.call(t);
    }
    function io(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) ro(n[e], t);
    }
    var ao = ge(null),
      oo = ge(0);
    function so(e, t) {
      ((e = Yl), E(oo, e), E(ao, t), (Yl = e | t.baseLanes));
    }
    function co() {
      (E(oo, Yl), E(ao, ao.current));
    }
    function lo() {
      ((Yl = oo.current), _e(ao), _e(oo));
    }
    var uo = ge(null),
      fo = null;
    function po(e) {
      var t = e.alternate;
      (E(_o, _o.current & 1),
        E(uo, e),
        fo === null &&
          (t === null || ao.current !== null || t.memoizedState !== null) &&
          (fo = e));
    }
    function mo(e) {
      (E(_o, _o.current), E(uo, e), fo === null && (fo = e));
    }
    function ho(e) {
      e.tag === 22
        ? (E(_o, _o.current), E(uo, e), fo === null && (fo = e))
        : P(e);
    }
    function P() {
      (E(_o, _o.current), E(uo, uo.current));
    }
    function go(e) {
      (_e(uo), fo === e && (fo = null), _e(_o));
    }
    var _o = ge(0);
    function vo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || lf(n) || uf(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var yo = 0,
      F = null,
      I = null,
      bo = null,
      xo = !1,
      So = !1,
      Co = !1,
      wo = 0,
      To = 0,
      Eo = null,
      Do = 0;
    function Oo() {
      throw Error(a(321));
    }
    function ko(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!jr(e[n], t[n])) return !1;
      return !0;
    }
    function Ao(e, t, n, r, i, a) {
      return (
        (yo = a),
        (F = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (C.H = e === null || e.memoizedState === null ? Gs : Ks),
        (Co = !1),
        (a = n(r, i)),
        (Co = !1),
        So && (a = Mo(t, n, r, i)),
        jo(e),
        a
      );
    }
    function jo(e) {
      C.H = Ws;
      var t = I !== null && I.next !== null;
      if (((yo = 0), (bo = I = F = null), (xo = !1), (To = 0), (Eo = null), t))
        throw Error(a(300));
      e === null ||
        lc ||
        ((e = e.dependencies), e !== null && sa(e) && (lc = !0));
    }
    function Mo(e, t, n, r) {
      F = e;
      var i = 0;
      do {
        if ((So && (Eo = null), (To = 0), (So = !1), 25 <= i))
          throw Error(a(301));
        if (((i += 1), (bo = I = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((C.H = qs), (o = t(n, r)));
      } while (So);
      return o;
    }
    function No() {
      var e = C.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Bo(t) : t),
        (e = e.useState()[0]),
        (I === null ? null : I.memoizedState) !== e && (F.flags |= 1024),
        t
      );
    }
    function Po() {
      var e = wo !== 0;
      return ((wo = 0), e);
    }
    function Fo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Io(e) {
      if (xo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        xo = !1;
      }
      ((yo = 0), (bo = I = F = null), (So = !1), (To = wo = 0), (Eo = null));
    }
    function Lo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        bo === null ? (F.memoizedState = bo = e) : (bo = bo.next = e),
        bo
      );
    }
    function Ro() {
      if (I === null) {
        var e = F.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = I.next;
      var t = bo === null ? F.memoizedState : bo.next;
      if (t !== null) ((bo = t), (I = e));
      else {
        if (e === null)
          throw F.alternate === null ? Error(a(467)) : Error(a(310));
        ((I = e),
          (e = {
            memoizedState: I.memoizedState,
            baseState: I.baseState,
            baseQueue: I.baseQueue,
            queue: I.queue,
            next: null,
          }),
          bo === null ? (F.memoizedState = bo = e) : (bo = bo.next = e));
      }
      return bo;
    }
    function zo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Bo(e) {
      var t = To;
      return (
        (To += 1),
        Eo === null && (Eo = []),
        (e = Pa(Eo, e, t)),
        (t = F),
        (bo === null ? t.memoizedState : bo.next) === null &&
          ((t = t.alternate),
          (C.H = t === null || t.memoizedState === null ? Gs : Ks)),
        e
      );
    }
    function Vo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Bo(e);
        if (e.$$typeof === S) return la(e);
      }
      throw Error(a(438, String(e)));
    }
    function Ho(e) {
      var t = null,
        n = F.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = F.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = zo()), (F.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = se;
      return (t.index++, n);
    }
    function Uo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Wo(e) {
      return Go(Ro(), I, e);
    }
    function Go(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(a(311));
      r.lastRenderedReducer = n;
      var i = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (i !== null) {
          var s = i.next;
          ((i.next = o.next), (o.next = s));
        }
        ((t.baseQueue = i = o), (r.pending = null));
      }
      if (((o = e.baseState), i === null)) e.memoizedState = o;
      else {
        t = i.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (yo & f) === f : (W & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === ya && (d = !0));
            else if ((yo & p) === p) {
              ((u = u.next), p === ya && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (F.lanes |= p),
                (Zl |= p));
            ((f = u.action),
              Co && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (F.lanes |= f),
              (Zl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !jr(o, e.memoizedState) && ((lc = !0), d && ((n = ba), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (i === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Ko(e) {
      var t = Ro(),
        n = t.queue;
      if (n === null) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== i);
        (jr(o, t.memoizedState) || (lc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function qo(e, t, n) {
      var r = F,
        i = Ro(),
        o = M;
      if (o) {
        if (n === void 0) throw Error(a(407));
        n = n();
      } else n = t();
      var s = !jr((I || i).memoizedState, n);
      if (
        (s && ((i.memoizedState = n), (lc = !0)),
        (i = i.queue),
        _s(Xo.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || s || (bo !== null && bo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ps(9, { destroy: void 0 }, Yo.bind(null, r, i, n, t), null),
          H === null)
        )
          throw Error(a(349));
        o || yo & 127 || Jo(r, t, n);
      }
      return n;
    }
    function Jo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = F.updateQueue),
        t === null
          ? ((t = zo()), (F.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Yo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Zo(t) && Qo(e));
    }
    function Xo(e, t, n) {
      return n(function () {
        Zo(t) && Qo(e);
      });
    }
    function Zo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !jr(e, n);
      } catch {
        return !0;
      }
    }
    function Qo(e) {
      var t = fi(e, 2);
      t !== null && xu(t, e, 2);
    }
    function $o(e) {
      var t = Lo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), Co)) {
          Je(!0);
          try {
            n();
          } finally {
            Je(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Uo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function es(e, t, n, r) {
      return ((e.baseState = n), Go(e, I, typeof r == `function` ? r : Uo));
    }
    function ts(e, t, n, r, i) {
      if (Vs(e)) throw Error(a(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: i,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (C.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), ns(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function ns(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = C.T,
          o = {};
        C.T = o;
        try {
          var s = n(i, r),
            c = C.S;
          (c !== null && c(o, s), rs(e, t, s));
        } catch (n) {
          as(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (C.T = a));
        }
      } else
        try {
          ((a = n(i, r)), rs(e, t, a));
        } catch (n) {
          as(e, t, n);
        }
    }
    function rs(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              is(e, t, n);
            },
            function (n) {
              return as(e, t, n);
            }
          )
        : is(e, t, n);
    }
    function is(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        os(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), ns(e, n))));
    }
    function as(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), os(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function os(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ss(e, t) {
      return t;
    }
    function cs(e, t) {
      if (M) {
        var n = H.formState;
        if (n !== null) {
          a: {
            var r = F;
            if (M) {
              if (j) {
                b: {
                  for (var i = j, a = Wi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = ff(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((j = ff(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Ki(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Lo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ss,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Rs.bind(null, F, r)),
        (r.dispatch = n),
        (r = $o(!1)),
        (a = Bs.bind(null, F, !1, r.queue)),
        (r = Lo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = ts.bind(null, F, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ls(e) {
      return us(Ro(), I, e);
    }
    function us(e, t, n) {
      if (
        ((t = Go(e, t, ss)[0]),
        (e = Wo(Uo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Bo(t);
        } catch (e) {
          throw e === ka ? ja : e;
        }
      else r = t;
      t = Ro();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((F.flags |= 2048),
          ps(9, { destroy: void 0 }, ds.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function ds(e, t) {
      e.action = t;
    }
    function fs(e) {
      var t = Ro(),
        n = I;
      if (n !== null) return us(t, n, e);
      (Ro(), (t = t.memoizedState), (n = Ro()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function ps(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = F.updateQueue),
        t === null && ((t = zo()), (F.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function L() {
      return Ro().memoizedState;
    }
    function ms(e, t, n, r) {
      var i = Lo();
      ((F.flags |= e),
        (i.memoizedState = ps(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r
        )));
    }
    function hs(e, t, n, r) {
      var i = Ro();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      I !== null && r !== null && ko(r, I.memoizedState.deps)
        ? (i.memoizedState = ps(t, a, n, r))
        : ((F.flags |= e), (i.memoizedState = ps(1 | t, a, n, r)));
    }
    function gs(e, t) {
      ms(8390656, 8, e, t);
    }
    function _s(e, t) {
      hs(2048, 8, e, t);
    }
    function vs(e) {
      F.flags |= 4;
      var t = F.updateQueue;
      if (t === null) ((t = zo()), (F.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function R(e) {
      var t = Ro().memoizedState;
      return (
        vs({ ref: t, nextImpl: e }),
        function () {
          if (V & 2) throw Error(a(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function ys(e, t) {
      return hs(4, 2, e, t);
    }
    function bs(e, t) {
      return hs(4, 4, e, t);
    }
    function xs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Ss(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        hs(4, 4, xs.bind(null, t, e), n));
    }
    function Cs() {}
    function ws(e, t) {
      var n = Ro();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && ko(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ts(e, t) {
      var n = Ro();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && ko(t, r[1])) return r[0];
      if (((r = e()), Co)) {
        Je(!0);
        try {
          e();
        } finally {
          Je(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Es(e, t, n) {
      return n === void 0 || (yo & 1073741824 && !(W & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = bu()), (F.lanes |= e), (Zl |= e), n);
    }
    function Ds(e, t, n, r) {
      return jr(n, t)
        ? n
        : ao.current === null
          ? !(yo & 42) || (yo & 1073741824 && !(W & 261930))
            ? ((lc = !0), (e.memoizedState = n))
            : ((e = bu()), (F.lanes |= e), (Zl |= e), t)
          : ((e = Es(e, n, r)), jr(e, t) || (lc = !0), e);
    }
    function Os(e, t, n, r, i) {
      var a = w.p;
      w.p = a !== 0 && 8 > a ? a : 8;
      var o = C.T,
        s = {};
      ((C.T = s), Bs(e, !1, t, n));
      try {
        var c = i(),
          l = C.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? zs(e, t, Ca(c, r), yu(e))
            : zs(e, t, r, yu(e)));
      } catch (n) {
        zs(e, t, { then: function () {}, status: `rejected`, reason: n }, yu());
      } finally {
        ((w.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (C.T = o));
      }
    }
    function ks() {}
    function As(e, t, n, r) {
      if (e.tag !== 5) throw Error(a(476));
      var i = js(e).queue;
      Os(
        e,
        i,
        t,
        pe,
        n === null
          ? ks
          : function () {
              return (Ms(e), n(r));
            }
      );
    }
    function js(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: pe,
        baseState: pe,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Uo,
          lastRenderedState: pe,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Uo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Ms(e) {
      var t = js(e);
      (t.next === null && (t = e.alternate.memoizedState),
        zs(e, t.next.queue, {}, yu()));
    }
    function Ns() {
      return la(np);
    }
    function Ps() {
      return Ro().memoizedState;
    }
    function Fs() {
      return Ro().memoizedState;
    }
    function Is(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = yu();
            e = Xa(n);
            var r = Za(t, e, n);
            (r !== null && (xu(r, t, n), Qa(r, t, n)),
              (t = { cache: ha() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ls(e, t, n) {
      var r = yu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Vs(e)
          ? Hs(t, n)
          : ((n = di(e, t, n, r)), n !== null && (xu(n, e, r), Us(n, t, r))));
    }
    function Rs(e, t, n) {
      zs(e, t, n, yu());
    }
    function zs(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Vs(e)) Hs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), jr(s, o)))
              return (ui(e, t, i, 0), H === null && li(), !1);
          } catch {}
        if (((n = di(e, t, i, r)), n !== null))
          return (xu(n, e, r), Us(n, t, r), !0);
      }
      return !1;
    }
    function Bs(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: hd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Vs(e))
      ) {
        if (t) throw Error(a(479));
      } else ((t = di(e, n, r, 2)), t !== null && xu(t, e, 2));
    }
    function Vs(e) {
      var t = e.alternate;
      return e === F || (t !== null && t === F);
    }
    function Hs(e, t) {
      So = xo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function Us(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), dt(e, n));
      }
    }
    var Ws = {
      readContext: la,
      use: Vo,
      useCallback: Oo,
      useContext: Oo,
      useEffect: Oo,
      useImperativeHandle: Oo,
      useLayoutEffect: Oo,
      useInsertionEffect: Oo,
      useMemo: Oo,
      useReducer: Oo,
      useRef: Oo,
      useState: Oo,
      useDebugValue: Oo,
      useDeferredValue: Oo,
      useTransition: Oo,
      useSyncExternalStore: Oo,
      useId: Oo,
      useHostTransitionStatus: Oo,
      useFormState: Oo,
      useActionState: Oo,
      useOptimistic: Oo,
      useMemoCache: Oo,
      useCacheRefresh: Oo,
    };
    Ws.useEffectEvent = Oo;
    var Gs = {
        readContext: la,
        use: Vo,
        useCallback: function (e, t) {
          return ((Lo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: la,
        useEffect: gs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            ms(4194308, 4, xs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return ms(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          ms(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Lo();
          t = t === void 0 ? null : t;
          var r = e();
          if (Co) {
            Je(!0);
            try {
              e();
            } finally {
              Je(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Lo();
          if (n !== void 0) {
            var i = n(t);
            if (Co) {
              Je(!0);
              try {
                n(t);
              } finally {
                Je(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ls.bind(null, F, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Lo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = $o(e);
          var t = e.queue,
            n = Rs.bind(null, F, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: Cs,
        useDeferredValue: function (e, t) {
          return Es(Lo(), e, t);
        },
        useTransition: function () {
          var e = $o(!1);
          return (
            (e = Os.bind(null, F, e.queue, !0, !1)),
            (Lo().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = F,
            i = Lo();
          if (M) {
            if (n === void 0) throw Error(a(407));
            n = n();
          } else {
            if (((n = t()), H === null)) throw Error(a(349));
            W & 127 || Jo(r, t, n);
          }
          i.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (i.queue = o),
            gs(Xo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            ps(9, { destroy: void 0 }, Yo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Lo(),
            t = H.identifierPrefix;
          if (M) {
            var n = Ii,
              r = Fi;
            ((n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = wo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = Do++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Ns,
        useFormState: cs,
        useActionState: cs,
        useOptimistic: function (e) {
          var t = Lo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Bs.bind(null, F, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Ho,
        useCacheRefresh: function () {
          return (Lo().memoizedState = Is.bind(null, F));
        },
        useEffectEvent: function (e) {
          var t = Lo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (V & 2) throw Error(a(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Ks = {
        readContext: la,
        use: Vo,
        useCallback: ws,
        useContext: la,
        useEffect: _s,
        useImperativeHandle: Ss,
        useInsertionEffect: ys,
        useLayoutEffect: bs,
        useMemo: Ts,
        useReducer: Wo,
        useRef: L,
        useState: function () {
          return Wo(Uo);
        },
        useDebugValue: Cs,
        useDeferredValue: function (e, t) {
          return Ds(Ro(), I.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Wo(Uo)[0],
            t = Ro().memoizedState;
          return [typeof e == `boolean` ? e : Bo(e), t];
        },
        useSyncExternalStore: qo,
        useId: Ps,
        useHostTransitionStatus: Ns,
        useFormState: ls,
        useActionState: ls,
        useOptimistic: function (e, t) {
          return es(Ro(), I, e, t);
        },
        useMemoCache: Ho,
        useCacheRefresh: Fs,
      };
    Ks.useEffectEvent = R;
    var qs = {
      readContext: la,
      use: Vo,
      useCallback: ws,
      useContext: la,
      useEffect: _s,
      useImperativeHandle: Ss,
      useInsertionEffect: ys,
      useLayoutEffect: bs,
      useMemo: Ts,
      useReducer: Ko,
      useRef: L,
      useState: function () {
        return Ko(Uo);
      },
      useDebugValue: Cs,
      useDeferredValue: function (e, t) {
        var n = Ro();
        return I === null ? Es(n, e, t) : Ds(n, I.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ko(Uo)[0],
          t = Ro().memoizedState;
        return [typeof e == `boolean` ? e : Bo(e), t];
      },
      useSyncExternalStore: qo,
      useId: Ps,
      useHostTransitionStatus: Ns,
      useFormState: fs,
      useActionState: fs,
      useOptimistic: function (e, t) {
        var n = Ro();
        return I === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : es(n, I, e, t);
      },
      useMemoCache: Ho,
      useCacheRefresh: Fs,
    };
    qs.useEffectEvent = R;
    function Js(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ys = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = yu(),
          i = Xa(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Za(e, i, r)),
          t !== null && (xu(t, e, r), Qa(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = yu(),
          i = Xa(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Za(e, i, r)),
          t !== null && (xu(t, e, r), Qa(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = yu(),
          r = Xa(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Za(e, r, n)),
          t !== null && (xu(t, e, n), Qa(t, e, n)));
      },
    };
    function Xs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Mr(n, r) || !Mr(i, a)
            : !0
      );
    }
    function Zs(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ys.enqueueReplaceState(t, t.state, null));
    }
    function Qs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function $s(e) {
      ai(e);
    }
    function ec(e) {
      console.error(e);
    }
    function tc(e) {
      ai(e);
    }
    function nc(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function rc(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ic(e, t, n) {
      return (
        (n = Xa(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          nc(e, t);
        }),
        n
      );
    }
    function ac(e) {
      return ((e = Xa(e)), (e.tag = 3), e);
    }
    function oc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            rc(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (rc(t, n, r),
            typeof i != `function` &&
              (lu === null ? (lu = new Set([this])) : lu.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function sc(e, t, n, r, i) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && oa(t, n, i, !0),
          (n = uo.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                fo === null
                  ? Mu()
                  : n.alternate === null && Xl === 0 && (Xl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = i),
                r === Ma
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Yu(e, r, i)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Ma
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Yu(e, r, i)),
                !1
              );
          }
          throw Error(a(435, n.tag));
        }
        return (Yu(e, r, i), Mu(), !1);
      }
      if (M)
        return (
          (t = uo.current),
          t === null
            ? (r !== Gi && ((t = Error(a(423), { cause: r })), Qi(Di(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (i &= -i),
              (e.lanes |= i),
              (r = Di(r, n)),
              (i = ic(e.stateNode, r, i)),
              $a(e, i),
              Xl !== 4 && (Xl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = i),
              r !== Gi && ((e = Error(a(422), { cause: r })), Qi(Di(e, n)))),
          !1
        );
      var o = Error(a(520), { cause: r });
      if (
        ((o = Di(o, n)),
        nu === null ? (nu = [o]) : nu.push(o),
        Xl !== 4 && (Xl = 2),
        t === null)
      )
        return !0;
      ((r = Di(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = i & -i),
              (n.lanes |= e),
              (e = ic(n.stateNode, r, e)),
              $a(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (lu === null || !lu.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (i &= -i),
                (n.lanes |= i),
                (i = ac(i)),
                oc(i, e, n, r),
                $a(n, i),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var cc = Error(a(461)),
      lc = !1;
    function uc(e, t, n, r) {
      t.child = e === null ? Ka(t, null, n, r) : Ga(t, e.child, n, r);
    }
    function dc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ca(t),
        (r = Ao(e, t, n, o, a, i)),
        (s = Po()),
        e !== null && !lc
          ? (Fo(e, t, i), Nc(e, t, i))
          : (M && s && zi(t), (t.flags |= 1), uc(e, t, r, i), t.child)
      );
    }
    function fc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !vi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), pc(e, t, a, r, i))
          : ((e = xi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Pc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Mr : n),
          n(o, r) && e.ref === t.ref)
        )
          return Nc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = yi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function pc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Mr(a, r) && e.ref === t.ref)
          if (((lc = !1), (t.pendingProps = r = a), Pc(e, i)))
            e.flags & 131072 && (lc = !0);
          else return ((t.lanes = e.lanes), Nc(e, t, i));
      }
      return xc(e, t, n, r, i);
    }
    function mc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return gc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Da(t, a === null ? null : a.cachePool),
            a === null ? co() : so(t, a),
            ho(t));
        else
          return (
            (r = t.lanes = 536870912),
            gc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && Da(t, null), co(), P(t))
          : (Da(t, a.cachePool), so(t, a), P(t), (t.memoizedState = null));
      return (uc(e, t, i, n), t.child);
    }
    function hc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function gc(e, t, n, r, i) {
      var a = Ea();
      return (
        (a = a === null ? null : { parent: N._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Da(t, null),
        co(),
        ho(t),
        e !== null && oa(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function _c(e, t) {
      return (
        (t = z({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function vc(e, t, n) {
      return (
        Ga(t, e.child, null, n),
        (e = _c(t, t.pendingProps)),
        (e.flags |= 2),
        go(t),
        (t.memoizedState = null),
        e
      );
    }
    function yc(e, t, n) {
      var r = t.pendingProps,
        i = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (M) {
          if (r.mode === `hidden`)
            return ((e = _c(t, r)), (t.lanes = 536870912), hc(null, e));
          if (
            (mo(t),
            (e = j)
              ? ((e = cf(e, Wi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Hi = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Ki(t);
          return ((t.lanes = 536870912), null);
        }
        return _c(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((mo(t), i))
          if (t.flags & 256) ((t.flags &= -257), (t = vc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(a(558));
        else if (
          (lc || oa(e, t, n, !1), (i = (n & e.childLanes) !== 0), lc || i)
        ) {
          if (
            ((r = H),
            r !== null && ((s = ft(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), fi(e, s), xu(r, e, s), cc);
          (Mu(), (t = vc(e, t, n)));
        } else
          ((e = o.treeContext),
            (j = ff(s.nextSibling)),
            (Hi = t),
            (M = !0),
            (Ui = null),
            (Wi = !1),
            e !== null && Vi(t, e),
            (t = _c(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = yi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function bc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(a(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function xc(e, t, n, r, i) {
      return (
        ca(t),
        (n = Ao(e, t, n, r, void 0, i)),
        (r = Po()),
        e !== null && !lc
          ? (Fo(e, t, i), Nc(e, t, i))
          : (M && r && zi(t), (t.flags |= 1), uc(e, t, n, i), t.child)
      );
    }
    function Sc(e, t, n, r, i, a) {
      return (
        ca(t),
        (t.updateQueue = null),
        (n = Mo(t, r, n, i)),
        jo(e),
        (r = Po()),
        e !== null && !lc
          ? (Fo(e, t, a), Nc(e, t, a))
          : (M && r && zi(t), (t.flags |= 1), uc(e, t, n, a), t.child)
      );
    }
    function Cc(e, t, n, r, i) {
      if ((ca(t), t.stateNode === null)) {
        var a = hi,
          o = n.contextType;
        (typeof o == `object` && o && (a = la(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ys),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ja(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? la(o) : hi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Js(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Ys.enqueueReplaceState(a, a.state, null),
            no(t, r, a, i),
            to(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Qs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = hi), typeof u == `object` && u && (o = la(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Zs(t, a, r, o)),
          (qa = !1));
        var f = t.memoizedState;
        ((a.state = f),
          no(t, r, a, i),
          to(),
          (l = t.memoizedState),
          s || f !== l || qa
            ? (typeof d == `function` &&
                (Js(t, n, d, r), (l = t.memoizedState)),
              (c = qa || Xs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          Ya(e, t),
          (o = t.memoizedProps),
          (u = Qs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = hi),
          typeof l == `object` && l && (c = la(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Zs(t, a, r, c)),
          (qa = !1),
          (f = t.memoizedState),
          (a.state = f),
          no(t, r, a, i),
          to());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        qa ||
        (e !== null && e.dependencies !== null && sa(e.dependencies))
          ? (typeof s == `function` && (Js(t, n, s, r), (p = t.memoizedState)),
            (u =
              qa ||
              Xs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && sa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        bc(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ga(t, e.child, null, i)),
                (t.child = Ga(t, null, n, i)))
              : uc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Nc(e, t, i)),
        e
      );
    }
    function wc(e, t, n, r) {
      return (Xi(), (t.flags |= 256), uc(e, t, n, r), t.child);
    }
    var Tc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Ec(e) {
      return { baseLanes: e, cachePool: Oa() };
    }
    function Dc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= eu), e);
    }
    function Oc(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null
              ? !1
              : (_o.current & 2) != 0),
        s && ((i = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (M) {
          if (
            (i ? po(t) : P(t),
            (e = j)
              ? ((e = cf(e, Wi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Hi = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Ki(t);
          return (uf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          i
            ? (P(t),
              (i = t.mode),
              (c = z({ mode: `hidden`, children: c }, i)),
              (r = Si(r, i, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Ec(n)),
              (r.childLanes = Dc(e, s, n)),
              (t.memoizedState = Tc),
              hc(null, r))
            : (po(t), kc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (po(t), (t.flags &= -257), (t = Ac(e, t, n)))
            : t.memoizedState === null
              ? (P(t),
                (c = r.fallback),
                (i = t.mode),
                (r = z({ mode: `visible`, children: r.children }, i)),
                (c = Si(c, i, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ga(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Ec(n)),
                (r.childLanes = Dc(e, s, n)),
                (t.memoizedState = Tc),
                (t = hc(null, r)))
              : (P(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((po(t), uf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(a(419))),
            (r.stack = ``),
            (r.digest = s),
            Qi({ value: r, source: null, stack: null }),
            (t = Ac(e, t, n)));
        } else if (
          (lc || oa(e, t, n, !1), (s = (n & e.childLanes) !== 0), lc || s)
        ) {
          if (
            ((s = H),
            s !== null && ((r = ft(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), fi(e, r), xu(s, e, r), cc);
          (lf(c) || Mu(), (t = Ac(e, t, n)));
        } else
          lf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (j = ff(c.nextSibling)),
              (Hi = t),
              (M = !0),
              (Ui = null),
              (Wi = !1),
              e !== null && Vi(t, e),
              (t = kc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return i
        ? (P(t),
          (c = r.fallback),
          (i = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = yi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = Si(c, i, n, null)), (c.flags |= 2))
            : (c = yi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          hc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Ec(n))
            : ((i = c.cachePool),
              i === null
                ? (i = Oa())
                : ((l = N._currentValue),
                  (i = i.parent === l ? i : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: i })),
          (r.memoizedState = c),
          (r.childLanes = Dc(e, s, n)),
          (t.memoizedState = Tc),
          hc(e.child, r))
        : (po(t),
          (n = e.child),
          (e = n.sibling),
          (n = yi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function kc(e, t) {
      return (
        (t = z({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function z(e, t) {
      return ((e = _i(22, e, null, t)), (e.lanes = 0), e);
    }
    function Ac(e, t, n) {
      return (
        Ga(t, e.child, null, n),
        (e = kc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function B(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ia(e.return, t, n));
    }
    function jc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Mc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = _o.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        E(_o, o),
        uc(e, t, r, n),
        (r = M ? ji : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && B(e, n, t);
          else if (e.tag === 19) B(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            ((e = n.alternate),
              e !== null && vo(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            jc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && vo(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          jc(t, !0, n, null, a, r);
          break;
        case `together`:
          jc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Nc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Zl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((oa(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(a(153));
      if (t.child !== null) {
        for (
          e = t.child, n = yi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = yi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Pc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && sa(e)))
        : !0;
    }
    function Fc(e, t, n) {
      switch (t.tag) {
        case 3:
          (xe(t, t.stateNode.containerInfo),
            na(t, N, e.memoizedState.cache),
            Xi());
          break;
        case 27:
        case 5:
          Ce(t);
          break;
        case 4:
          xe(t, t.stateNode.containerInfo);
          break;
        case 10:
          na(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), mo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (po(t), (e = Nc(e, t, n)), e === null ? null : e.sibling)
                : Oc(e, t, n)
              : (po(t), (t.flags |= 128), null);
          po(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (oa(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return Mc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            E(_o, _o.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), mc(e, t, n, t.pendingProps));
        case 24:
          na(t, N, e.memoizedState.cache);
      }
      return Nc(e, t, n);
    }
    function Ic(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) lc = !0;
        else {
          if (!Pc(e, n) && !(t.flags & 128)) return ((lc = !1), Fc(e, t, n));
          lc = !!(e.flags & 131072);
        }
      else ((lc = !1), M && t.flags & 1048576 && Ri(t, ji, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Fa(t.elementType)), (t.type = e), typeof e == `function`))
              vi(e)
                ? ((r = Qs(e, r)), (t.tag = 1), (t = Cc(null, t, e, r, n)))
                : ((t.tag = 0), (t = xc(null, t, e, r, n)));
            else {
              if (e != null) {
                var i = e.$$typeof;
                if (i === te) {
                  ((t.tag = 11), (t = dc(null, t, e, r, n)));
                  break a;
                } else if (i === ie) {
                  ((t.tag = 14), (t = fc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = de(e) || e), Error(a(306, t, ``)));
            }
          }
          return t;
        case 0:
          return xc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (i = Qs(r, t.pendingProps)), Cc(e, t, r, i, n));
        case 3:
          a: {
            if ((xe(t, t.stateNode.containerInfo), e === null))
              throw Error(a(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((i = o.element), Ya(e, t), no(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              na(t, N, r),
              r !== o.cache && aa(t, [N], n, !0),
              to(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = wc(e, t, r, n);
                break a;
              } else if (r !== i) {
                ((i = Di(Error(a(424)), t)), Qi(i), (t = wc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  j = ff(e.firstChild),
                    Hi = t,
                    M = !0,
                    Ui = null,
                    Wi = !0,
                    n = Ka(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Xi(), r === i)) {
                t = Nc(e, t, n);
                break a;
              }
              uc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            bc(e, t),
            e === null
              ? (n = Nf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : M ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Wd(ye.current).createElement(n)),
                  (r[O] = t),
                  (r[vt] = e),
                  Rd(r, n, e),
                  At(r),
                  (t.stateNode = r))
              : (t.memoizedState = Nf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState
                )),
            null
          );
        case 27:
          return (
            Ce(t),
            e === null &&
              M &&
              ((r = t.stateNode = gf(t.type, t.pendingProps, ye.current)),
              (Hi = t),
              (Wi = !0),
              (i = j),
              tf(t.type) ? ((pf = i), (j = ff(r.firstChild))) : (j = i)),
            uc(e, t, t.pendingProps.children, n),
            bc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              M &&
              ((i = r = j) &&
                ((r = of(r, t.type, t.pendingProps, Wi)),
                r === null
                  ? (i = !1)
                  : ((t.stateNode = r),
                    (Hi = t),
                    (j = ff(r.firstChild)),
                    (Wi = !1),
                    (i = !0))),
              i || Ki(t)),
            Ce(t),
            (i = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            qd(i, o) ? (r = null) : s !== null && qd(i, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((i = Ao(e, t, No, null, null, n)), (np._currentValue = i)),
            bc(e, t),
            uc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              M &&
              ((e = n = j) &&
                ((n = sf(n, t.pendingProps, Wi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Hi = t), (j = null), (e = !0))),
              e || Ki(t)),
            null
          );
        case 13:
          return Oc(e, t, n);
        case 4:
          return (
            xe(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ga(t, null, r, n)) : uc(e, t, r, n),
            t.child
          );
        case 11:
          return dc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (uc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (uc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (uc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            na(t, t.type, r.value),
            uc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (i = t.type._context),
            (r = t.pendingProps.children),
            ca(t),
            (i = la(i)),
            (r = r(i)),
            (t.flags |= 1),
            uc(e, t, r, n),
            t.child
          );
        case 14:
          return fc(e, t, t.type, t.pendingProps, n);
        case 15:
          return pc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Mc(e, t, n);
        case 31:
          return yc(e, t, n);
        case 22:
          return mc(e, t, n, t.pendingProps);
        case 24:
          return (
            ca(t),
            (r = la(N)),
            e === null
              ? ((i = Ea()),
                i === null &&
                  ((i = H),
                  (o = ha()),
                  (i.pooledCache = o),
                  o.refCount++,
                  o !== null && (i.pooledCacheLanes |= n),
                  (i = o)),
                (t.memoizedState = { parent: r, cache: i }),
                Ja(t),
                na(t, N, i))
              : ((e.lanes & n) !== 0 && (Ya(e, t), no(t, null, null, n), to()),
                (i = e.memoizedState),
                (o = t.memoizedState),
                i.parent === r
                  ? ((r = o.cache),
                    na(t, N, r),
                    r !== i.cache && aa(t, [N], n, !0))
                  : ((i = { parent: r, cache: r }),
                    (t.memoizedState = i),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = i),
                    na(t, N, r))),
            uc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(a(156, t.tag));
    }
    function Lc(e) {
      e.flags |= 4;
    }
    function Rc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (ku()) e.flags |= 8192;
          else throw ((Ia = Ma), Aa);
      } else e.flags &= -16777217;
    }
    function zc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Jf(t)))
        if (ku()) e.flags |= 8192;
        else throw ((Ia = Ma), Aa);
    }
    function Bc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : ot()), (e.lanes |= t), (tu |= t)));
    }
    function Vc(e, t) {
      if (!M)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function Hc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Uc(e, t, n) {
      var r = t.pendingProps;
      switch ((Bi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Hc(t), null);
        case 1:
          return (Hc(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ra(N),
            Se(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Yi(t)
                ? Lc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Zi())),
            Hc(t),
            null
          );
        case 26:
          var i = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Lc(t),
                o === null ? (Hc(t), Rc(t, i, null, r, n)) : (Hc(t), zc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (Hc(t), (t.flags &= -16777217))
                  : (Lc(t), Hc(t), zc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Lc(t),
                  Hc(t),
                  Rc(t, i, e, r, n)),
            null
          );
        case 27:
          if (
            (we(t),
            (n = ye.current),
            (i = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Lc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(a(166));
              return (Hc(t), null);
            }
            ((e = D.current),
              Yi(t) ? qi(t, e) : ((e = gf(i, r, n)), (t.stateNode = e), Lc(t)));
          }
          return (Hc(t), null);
        case 5:
          if ((we(t), (i = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Lc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(a(166));
              return (Hc(t), null);
            }
            if (((o = D.current), Yi(t))) qi(t, o);
            else {
              var s = Wd(ye.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    i
                  );
                  break;
                default:
                  switch (i) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        i
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(i, { is: r.is })
                          : s.createElement(i);
                  }
              }
              ((o[O] = t), (o[vt] = r));
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Rd(o, i, r), i)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Lc(t);
            }
          }
          return (
            Hc(t),
            Rc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Lc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(a(166));
            if (((e = ye.current), Yi(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (i = Hi),
                i !== null)
              )
                switch (i.tag) {
                  case 27:
                  case 5:
                    r = i.memoizedProps;
                }
              ((e[O] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Id(e.nodeValue, n)
                )),
                e || Ki(t, !0));
            } else
              ((e = Wd(e).createTextNode(r)), (e[O] = t), (t.stateNode = e));
          }
          return (Hc(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Yi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(a(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(a(557));
                e[O] = t;
              } else
                (Xi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (Hc(t), (e = !1));
            } else
              ((n = Zi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (go(t), t) : (go(t), null);
            if (t.flags & 128) throw Error(a(558));
          }
          return (Hc(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((i = Yi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!i) throw Error(a(318));
                if (
                  ((i = t.memoizedState),
                  (i = i === null ? null : i.dehydrated),
                  !i)
                )
                  throw Error(a(317));
                i[O] = t;
              } else
                (Xi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (Hc(t), (i = !1));
            } else
              ((i = Zi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = i),
                (i = !0));
            if (!i) return t.flags & 256 ? (go(t), t) : (go(t), null);
          }
          return (
            go(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (i = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (i = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== i && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Bc(t, t.updateQueue),
                Hc(t),
                null)
          );
        case 4:
          return (
            Se(),
            e === null && Ed(t.stateNode.containerInfo),
            Hc(t),
            null
          );
        case 10:
          return (ra(t.type), Hc(t), null);
        case 19:
          if ((_e(_o), (r = t.memoizedState), r === null)) return (Hc(t), null);
          if (((i = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (i) Vc(r, !1);
            else {
              if (Xl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = vo(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Vc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Bc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (bi(n, e), (n = n.sibling));
                    return (
                      E(_o, (_o.current & 1) | 2),
                      M && Li(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Le() > su &&
                ((t.flags |= 128), (i = !0), Vc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!i)
              if (((e = vo(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Bc(t, e),
                  Vc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !M)
                )
                  return (Hc(t), null);
              } else
                2 * Le() - r.renderingStartTime > su &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (i = !0), Vc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (Hc(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Le()),
              (e.sibling = null),
              (n = _o.current),
              E(_o, i ? (n & 1) | 2 : n & 1),
              M && Li(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            go(t),
            lo(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (Hc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Hc(t),
            (n = t.updateQueue),
            n !== null && Bc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && _e(Ta),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ra(N),
            Hc(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(a(156, t.tag));
    }
    function Wc(e, t) {
      switch ((Bi(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            ra(N),
            Se(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (we(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((go(t), t.alternate === null)) throw Error(a(340));
            Xi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (go(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(a(340));
            Xi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (_e(_o), null);
        case 4:
          return (Se(), null);
        case 10:
          return (ra(t.type), null);
        case 22:
        case 23:
          return (
            go(t),
            lo(),
            e !== null && _e(Ta),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (ra(N), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Gc(e, t) {
      switch ((Bi(t), t.tag)) {
        case 3:
          (ra(N), Se());
          break;
        case 26:
        case 27:
        case 5:
          we(t);
          break;
        case 4:
          Se();
          break;
        case 31:
          t.memoizedState !== null && go(t);
          break;
        case 13:
          go(t);
          break;
        case 19:
          _e(_o);
          break;
        case 10:
          ra(t.type);
          break;
        case 22:
        case 23:
          (go(t), lo(), e !== null && _e(Ta));
          break;
        case 24:
          ra(N);
      }
    }
    function Kc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        J(t, t.return, e);
      }
    }
    function qc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  J(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        J(t, t.return, e);
      }
    }
    function Jc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          io(t, n);
        } catch (t) {
          J(e, e.return, t);
        }
      }
    }
    function Yc(e, t, n) {
      ((n.props = Qs(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        J(e, t, n);
      }
    }
    function Xc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        J(e, t, n);
      }
    }
    function Zc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            J(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            J(e, t, n);
          }
        else n.current = null;
    }
    function Qc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        J(e, e.return, t);
      }
    }
    function $c(e, t, n) {
      try {
        var r = e.stateNode;
        (zd(r, e.type, n, t), (r[vt] = t));
      } catch (t) {
        J(e, e.return, t);
      }
    }
    function el(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && tf(e.type)) ||
        e.tag === 4
      );
    }
    function tl(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || el(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && tf(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function nl(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = dn)));
      else if (
        r !== 4 &&
        (r === 27 && tf(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (nl(e, t, n), e = e.sibling; e !== null; )
          (nl(e, t, n), (e = e.sibling));
    }
    function rl(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && tf(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (rl(e, t, n), e = e.sibling; e !== null; )
          (rl(e, t, n), (e = e.sibling));
    }
    function il(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        (Rd(t, r, n), (t[O] = e), (t[vt] = n));
      } catch (t) {
        J(e, e.return, t);
      }
    }
    var al = !1,
      ol = !1,
      sl = !1,
      cl = typeof WeakSet == `function` ? WeakSet : Set,
      ll = null;
    function ul(e, t) {
      if (((e = e.containerInfo), (Hd = dp), (e = Ir(e)), Lr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var i = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (i !== 0 && f.nodeType !== 3) || (c = s + i),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === i && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Ud = { focusedElem: e, selectionRange: n }, dp = !1, ll = t;
        ll !== null;
      )
        if (((t = ll), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (ll = e));
        else
          for (; ll !== null; ) {
            switch (((t = ll), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((i = e[n]), (i.ref.impl = i.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (i = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Qs(n.type, i);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    J(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    af(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        af(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(a(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (ll = e));
              break;
            }
            ll = t.return;
          }
    }
    function dl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (El(e, n), r & 4 && Kc(5, n));
          break;
        case 1:
          if ((El(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                J(n, n.return, e);
              }
            else {
              var i = Qs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              } catch (e) {
                J(n, n.return, e);
              }
            }
          (r & 64 && Jc(n), r & 512 && Xc(n, n.return));
          break;
        case 3:
          if ((El(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              io(e, t);
            } catch (e) {
              J(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && il(n);
        case 26:
        case 5:
          (El(e, n), t === null && r & 4 && Qc(n), r & 512 && Xc(n, n.return));
          break;
        case 12:
          El(e, n);
          break;
        case 31:
          (El(e, n), r & 4 && _l(e, n));
          break;
        case 13:
          (El(e, n),
            r & 4 && vl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Qu.bind(null, n)), df(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || al), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || ol), (i = al));
            var a = ol;
            ((al = r),
              (ol = t) && !a
                ? Ol(e, n, (n.subtreeFlags & 8772) != 0)
                : El(e, n),
              (al = i),
              (ol = a));
          }
          break;
        case 30:
          break;
        default:
          El(e, n);
      }
    }
    function fl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), fl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Tt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var pl = null,
      ml = !1;
    function hl(e, t, n) {
      for (n = n.child; n !== null; ) (gl(e, t, n), (n = n.sibling));
    }
    function gl(e, t, n) {
      if (qe && typeof qe.onCommitFiberUnmount == `function`)
        try {
          qe.onCommitFiberUnmount(Ke, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (ol || Zc(n, t),
            hl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          ol || Zc(n, t);
          var r = pl,
            i = ml;
          (tf(n.type) && ((pl = n.stateNode), (ml = !1)),
            hl(e, t, n),
            _f(n.stateNode),
            (pl = r),
            (ml = i));
          break;
        case 5:
          ol || Zc(n, t);
        case 6:
          if (
            ((r = pl),
            (i = ml),
            (pl = null),
            hl(e, t, n),
            (pl = r),
            (ml = i),
            pl !== null)
          )
            if (ml)
              try {
                (pl.nodeType === 9
                  ? pl.body
                  : pl.nodeName === `HTML`
                    ? pl.ownerDocument.body
                    : pl
                ).removeChild(n.stateNode);
              } catch (e) {
                J(n, t, e);
              }
            else
              try {
                pl.removeChild(n.stateNode);
              } catch (e) {
                J(n, t, e);
              }
          break;
        case 18:
          pl !== null &&
            (ml
              ? ((e = pl),
                nf(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode
                ),
                Lp(e))
              : nf(pl, n.stateNode));
          break;
        case 4:
          ((r = pl),
            (i = ml),
            (pl = n.stateNode.containerInfo),
            (ml = !0),
            hl(e, t, n),
            (pl = r),
            (ml = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (qc(2, n, t), ol || qc(4, n, t), hl(e, t, n));
          break;
        case 1:
          (ol ||
            (Zc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Yc(n, t, r)),
            hl(e, t, n));
          break;
        case 21:
          hl(e, t, n);
          break;
        case 22:
          ((ol = (r = ol) || n.memoizedState !== null), hl(e, t, n), (ol = r));
          break;
        default:
          hl(e, t, n);
      }
    }
    function _l(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Lp(e);
        } catch (e) {
          J(t, t.return, e);
        }
      }
    }
    function vl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Lp(e);
        } catch (e) {
          J(t, t.return, e);
        }
    }
    function yl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new cl()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new cl()),
            t
          );
        default:
          throw Error(a(435, e.tag));
      }
    }
    function bl(e, t) {
      var n = yl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = $u.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function xl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (tf(c.type)) {
                  ((pl = c.stateNode), (ml = !1));
                  break a;
                }
                break;
              case 5:
                ((pl = c.stateNode), (ml = !1));
                break a;
              case 3:
              case 4:
                ((pl = c.stateNode.containerInfo), (ml = !0));
                break a;
            }
            c = c.return;
          }
          if (pl === null) throw Error(a(160));
          (gl(o, s, i),
            (pl = null),
            (ml = !1),
            (o = i.alternate),
            o !== null && (o.return = null),
            (i.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) (Cl(t, e), (t = t.sibling));
    }
    var Sl = null;
    function Cl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (xl(t, e),
            wl(e),
            r & 4 && (qc(3, e, e.return), Kc(3, e), qc(5, e, e.return)));
          break;
        case 1:
          (xl(t, e),
            wl(e),
            r & 512 && (ol || n === null || Zc(n, n.return)),
            r & 64 &&
              al &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var i = Sl;
          if (
            (xl(t, e),
            wl(e),
            r & 512 && (ol || n === null || Zc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (i = i.ownerDocument || i));
                    b: switch (r) {
                      case `title`:
                        ((o = i.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[wt] ||
                            o[O] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = i.createElement(r)),
                            i.head.insertBefore(
                              o,
                              i.querySelector(`head > title`)
                            )),
                          Rd(o, r, n),
                          (o[O] = e),
                          At(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Gf(`link`, `href`, i).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = i.createElement(r)),
                          Rd(o, r, n),
                          i.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Gf(`meta`, `content`, i).get(
                            r + (n.content || ``)
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = i.createElement(r)),
                          Rd(o, r, n),
                          i.head.appendChild(o));
                        break;
                      default:
                        throw Error(a(468, r));
                    }
                    ((o[O] = e), At(o), (r = o));
                  }
                  e.stateNode = r;
                } else Kf(i, e.type, e.stateNode);
              else e.stateNode = Bf(i, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  $c(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Kf(i, e.type, e.stateNode)
                    : Bf(i, r, e.memoizedProps));
          }
          break;
        case 27:
          (xl(t, e),
            wl(e),
            r & 512 && (ol || n === null || Zc(n, n.return)),
            n !== null && r & 4 && $c(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (xl(t, e),
            wl(e),
            r & 512 && (ol || n === null || Zc(n, n.return)),
            e.flags & 32)
          ) {
            i = e.stateNode;
            try {
              nn(i, ``);
            } catch (t) {
              J(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((i = e.memoizedProps), $c(e, i, n === null ? i : n.memoizedProps)),
            r & 1024 && (sl = !0));
          break;
        case 6:
          if ((xl(t, e), wl(e), r & 4)) {
            if (e.stateNode === null) throw Error(a(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              J(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Wf = null),
            (i = Sl),
            (Sl = bf(t.containerInfo)),
            xl(t, e),
            (Sl = i),
            wl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Lp(t.containerInfo);
            } catch (t) {
              J(e, e.return, t);
            }
          sl && ((sl = !1), Tl(e));
          break;
        case 4:
          ((r = Sl),
            (Sl = bf(e.stateNode.containerInfo)),
            xl(t, e),
            wl(e),
            (Sl = r));
          break;
        case 12:
          (xl(t, e), wl(e));
          break;
        case 31:
          (xl(t, e),
            wl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), bl(e, r))));
          break;
        case 13:
          (xl(t, e),
            wl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (au = Le()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), bl(e, r))));
          break;
        case 22:
          i = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = al,
            d = ol;
          if (
            ((al = u || i),
            (ol = d || l),
            xl(t, e),
            (ol = d),
            (al = u),
            wl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                i && (n === null || l || al || ol || Dl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), i))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    J(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = i ? `` : l.memoizedProps;
                  } catch (e) {
                    J(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    i ? rf(m, !0) : rf(l.stateNode, !1);
                  } catch (e) {
                    J(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), bl(e, n))));
          break;
        case 19:
          (xl(t, e),
            wl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), bl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (xl(t, e), wl(e));
      }
    }
    function wl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (el(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(a(160));
          switch (n.tag) {
            case 27:
              var i = n.stateNode;
              rl(e, tl(e), i);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (nn(o, ``), (n.flags &= -33)), rl(e, tl(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              nl(e, tl(e), s);
              break;
            default:
              throw Error(a(161));
          }
        } catch (t) {
          J(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Tl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          (Tl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function El(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          (dl(e, t.alternate, t), (t = t.sibling));
    }
    function Dl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (qc(4, t, t.return), Dl(t));
            break;
          case 1:
            Zc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Yc(t, t.return, n),
              Dl(t));
            break;
          case 27:
            _f(t.stateNode);
          case 26:
          case 5:
            (Zc(t, t.return), Dl(t));
            break;
          case 22:
            t.memoizedState === null && Dl(t);
            break;
          case 30:
            Dl(t);
            break;
          default:
            Dl(t);
        }
        e = e.sibling;
      }
    }
    function Ol(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Ol(i, a, n), Kc(4, a));
            break;
          case 1:
            if (
              (Ol(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                J(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    ro(c[i], s);
              } catch (e) {
                J(r, r.return, e);
              }
            }
            (n && o & 64 && Jc(a), Xc(a, a.return));
            break;
          case 27:
            il(a);
          case 26:
          case 5:
            (Ol(i, a, n), n && r === null && o & 4 && Qc(a), Xc(a, a.return));
            break;
          case 12:
            Ol(i, a, n);
            break;
          case 31:
            (Ol(i, a, n), n && o & 4 && _l(i, a));
            break;
          case 13:
            (Ol(i, a, n), n && o & 4 && vl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Ol(i, a, n), Xc(a, a.return));
            break;
          case 30:
            break;
          default:
            Ol(i, a, n);
        }
        t = t.sibling;
      }
    }
    function kl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ga(n)));
    }
    function Al(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ga(e)));
    }
    function jl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) (Ml(e, t, n, r), (t = t.sibling));
    }
    function Ml(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (jl(e, t, n, r), i & 2048 && Kc(9, t));
          break;
        case 1:
          jl(e, t, n, r);
          break;
        case 3:
          (jl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ga(e))));
          break;
        case 12:
          if (i & 2048) {
            (jl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0
                );
            } catch (e) {
              J(t, t.return, e);
            }
          } else jl(e, t, n, r);
          break;
        case 31:
          jl(e, t, n, r);
          break;
        case 13:
          jl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? jl(e, t, n, r)
                : ((a._visibility |= 2),
                  Nl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? jl(e, t, n, r)
                : Pl(e, t),
            i & 2048 && kl(o, t));
          break;
        case 24:
          (jl(e, t, n, r), i & 2048 && Al(t.alternate, t));
          break;
        default:
          jl(e, t, n, r);
      }
    }
    function Nl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Nl(a, o, s, c, i), Kc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Nl(a, o, s, c, i))
              : u._visibility & 2
                ? Nl(a, o, s, c, i)
                : Pl(a, o),
              i && l & 2048 && kl(o.alternate, o));
            break;
          case 24:
            (Nl(a, o, s, c, i), i && l & 2048 && Al(o.alternate, o));
            break;
          default:
            Nl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Pl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Pl(n, r), i & 2048 && kl(r.alternate, r));
              break;
            case 24:
              (Pl(n, r), i & 2048 && Al(r.alternate, r));
              break;
            default:
              Pl(n, r);
          }
          t = t.sibling;
        }
    }
    var Fl = 8192;
    function Il(e, t, n) {
      if (e.subtreeFlags & Fl)
        for (e = e.child; e !== null; ) (Ll(e, t, n), (e = e.sibling));
    }
    function Ll(e, t, n) {
      switch (e.tag) {
        case 26:
          (Il(e, t, n),
            e.flags & Fl &&
              e.memoizedState !== null &&
              Yf(n, Sl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Il(e, t, n);
          break;
        case 3:
        case 4:
          var r = Sl;
          ((Sl = bf(e.stateNode.containerInfo)), Il(e, t, n), (Sl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Fl), (Fl = 16777216), Il(e, t, n), (Fl = r))
              : Il(e, t, n));
          break;
        default:
          Il(e, t, n);
      }
    }
    function Rl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function zl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((ll = r), Hl(r, e));
          }
        Rl(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) (Bl(e), (e = e.sibling));
    }
    function Bl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (zl(e), e.flags & 2048 && qc(9, e, e.return));
          break;
        case 3:
          zl(e);
          break;
        case 12:
          zl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Vl(e))
            : zl(e);
          break;
        default:
          zl(e);
      }
    }
    function Vl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((ll = r), Hl(r, e));
          }
        Rl(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (qc(8, t, t.return), Vl(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Vl(t)));
            break;
          default:
            Vl(t);
        }
        e = e.sibling;
      }
    }
    function Hl(e, t) {
      for (; ll !== null; ) {
        var n = ll;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            qc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ga(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (ll = r));
        else
          a: for (n = e; ll !== null; ) {
            r = ll;
            var i = r.sibling,
              a = r.return;
            if ((fl(r), r === n)) {
              ll = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (ll = i));
              break a;
            }
            ll = a;
          }
      }
    }
    var Ul = {
        getCacheForType: function (e) {
          var t = la(N),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return la(N).controller.signal;
        },
      },
      Wl = typeof WeakMap == `function` ? WeakMap : Map,
      V = 0,
      H = null,
      U = null,
      W = 0,
      G = 0,
      Gl = null,
      Kl = !1,
      ql = !1,
      Jl = !1,
      Yl = 0,
      Xl = 0,
      Zl = 0,
      Ql = 0,
      $l = 0,
      eu = 0,
      tu = 0,
      nu = null,
      ru = null,
      iu = !1,
      au = 0,
      ou = 0,
      su = 1 / 0,
      cu = null,
      lu = null,
      uu = 0,
      du = null,
      fu = null,
      pu = 0,
      mu = 0,
      hu = null,
      gu = null,
      _u = 0,
      vu = null;
    function yu() {
      return V & 2 && W !== 0 ? W & -W : C.T === null ? ht() : hd();
    }
    function bu() {
      if (eu === 0)
        if (!(W & 536870912) || M) {
          var e = et;
          ((et <<= 1), !(et & 3932160) && (et = 262144), (eu = e));
        } else eu = 536870912;
      return ((e = uo.current), e !== null && (e.flags |= 32), eu);
    }
    function xu(e, t, n) {
      (((e === H && (G === 2 || G === 9)) || e.cancelPendingCommit !== null) &&
        (Du(e, 0), K(e, W, eu, !1)),
        ct(e, n),
        (!(V & 2) || e !== H) &&
          (e === H && (!(V & 2) && (Ql |= n), Xl === 4 && K(e, W, eu, !1)),
          sd(e)));
    }
    function Su(e, t, n) {
      if (V & 6) throw Error(a(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || it(e, t),
        i = r ? Fu(e, t) : Nu(e, t, !0),
        o = r;
      do {
        if (i === 0) {
          ql && !r && K(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !wu(n))) {
            ((i = Nu(e, t, !1)), (o = !1));
            continue;
          }
          if (i === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                i = nu;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Du(c, s).flags |= 256), (s = Nu(c, s, !1)), s !== 2)
                ) {
                  if (Jl && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Ql |= o), (i = 4));
                    break a;
                  }
                  ((o = ru),
                    (ru = i),
                    o !== null &&
                      (ru === null ? (ru = o) : ru.push.apply(ru, o)));
                }
                i = s;
              }
              if (((o = !1), i !== 2)) continue;
            }
          }
          if (i === 1) {
            (Du(e, 0), K(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = i), o)) {
              case 0:
              case 1:
                throw Error(a(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                K(r, t, eu, !Kl);
                break a;
              case 2:
                ru = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(a(329));
            }
            if ((t & 62914560) === t && ((i = au + 300 - Le()), 10 < i)) {
              if ((K(r, t, eu, !Kl), rt(r, 0, !0) !== 0)) break a;
              ((pu = t),
                (r.timeoutHandle = Xd(
                  Cu.bind(
                    null,
                    r,
                    n,
                    ru,
                    cu,
                    iu,
                    t,
                    eu,
                    Ql,
                    tu,
                    Kl,
                    o,
                    `Throttled`,
                    -0,
                    0
                  ),
                  i
                )));
              break a;
            }
            Cu(r, n, ru, cu, iu, t, eu, Ql, tu, Kl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      sd(e);
    }
    function Cu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: dn,
        }),
          Ll(t, a, d));
        var m =
          (a & 62914560) === a
            ? au - Le()
            : (a & 4194048) === a
              ? ou - Le()
              : 0;
        if (((m = Zf(d, m)), m !== null)) {
          ((pu = a),
            (e.cancelPendingCommit = m(
              Hu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)
            )),
            K(e, a, o, !l));
          return;
        }
      }
      Hu(e, t, a, n, r, i, o, s, c);
    }
    function wu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!jr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function K(e, t, n, r) {
      ((t &= ~$l),
        (t &= ~Ql),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i; ) {
        var a = 31 - Ye(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && ut(e, n, t);
    }
    function Tu() {
      return V & 6 ? !0 : (cd(0, !1), !1);
    }
    function Eu() {
      if (U !== null) {
        if (G === 0) var e = U.return;
        else ((e = U), (ta = ea = null), Io(e), (za = null), (Ba = 0), (e = U));
        for (; e !== null; ) (Gc(e.alternate, e), (e = e.return));
        U = null;
      }
    }
    function Du(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), Zd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (pu = 0),
        Eu(),
        (H = e),
        (U = n = yi(e.current, null)),
        (W = t),
        (G = 0),
        (Gl = null),
        (Kl = !1),
        (ql = it(e, t)),
        (Jl = !1),
        (tu = eu = $l = Ql = Zl = Xl = 0),
        (ru = nu = null),
        (iu = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ye(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Yl = t), li(), n);
    }
    function Ou(e, t) {
      ((F = null),
        (C.H = Ws),
        t === ka || t === ja
          ? ((t = La()), (G = 3))
          : t === Aa
            ? ((t = La()), (G = 4))
            : (G =
                t === cc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (Gl = t),
        U === null && ((Xl = 1), nc(e, Di(t, e.current))));
    }
    function ku() {
      var e = uo.current;
      return e === null
        ? !0
        : (W & 4194048) === W
          ? fo === null
          : (W & 62914560) === W || W & 536870912
            ? e === fo
            : !1;
    }
    function Au() {
      var e = C.H;
      return ((C.H = Ws), e === null ? Ws : e);
    }
    function ju() {
      var e = C.A;
      return ((C.A = Ul), e);
    }
    function Mu() {
      ((Xl = 4),
        Kl || ((W & 4194048) !== W && uo.current !== null) || (ql = !0),
        (!(Zl & 134217727) && !(Ql & 134217727)) ||
          H === null ||
          K(H, W, eu, !1));
    }
    function Nu(e, t, n) {
      var r = V;
      V |= 2;
      var i = Au(),
        a = ju();
      ((H !== e || W !== t) && ((cu = null), Du(e, t)), (t = !1));
      var o = Xl;
      a: do
        try {
          if (G !== 0 && U !== null) {
            var s = U,
              c = Gl;
            switch (G) {
              case 8:
                (Eu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                uo.current === null && (t = !0);
                var l = G;
                if (((G = 0), (Gl = null), zu(e, s, c, l), n && ql)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = G), (G = 0), (Gl = null), zu(e, s, c, l));
            }
          }
          (Pu(), (o = Xl));
          break;
        } catch (t) {
          Ou(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (ta = ea = null),
        (V = r),
        (C.H = i),
        (C.A = a),
        U === null && ((H = null), (W = 0), li()),
        o
      );
    }
    function Pu() {
      for (; U !== null; ) Lu(U);
    }
    function Fu(e, t) {
      var n = V;
      V |= 2;
      var r = Au(),
        i = ju();
      H !== e || W !== t
        ? ((cu = null), (su = Le() + 500), Du(e, t))
        : (ql = it(e, t));
      a: do
        try {
          if (G !== 0 && U !== null) {
            t = U;
            var o = Gl;
            b: switch (G) {
              case 1:
                ((G = 0), (Gl = null), zu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (Na(o)) {
                  ((G = 0), (Gl = null), Ru(t));
                  break;
                }
                ((t = function () {
                  ((G !== 2 && G !== 9) || H !== e || (G = 7), sd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                G = 7;
                break a;
              case 4:
                G = 5;
                break a;
              case 7:
                Na(o)
                  ? ((G = 0), (Gl = null), Ru(t))
                  : ((G = 0), (Gl = null), zu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (U.tag) {
                  case 26:
                    s = U.memoizedState;
                  case 5:
                  case 27:
                    var c = U;
                    if (s ? Jf(s) : c.stateNode.complete) {
                      ((G = 0), (Gl = null));
                      var l = c.sibling;
                      if (l !== null) U = l;
                      else {
                        var u = c.return;
                        u === null ? (U = null) : ((U = u), Bu(u));
                      }
                      break b;
                    }
                }
                ((G = 0), (Gl = null), zu(e, t, o, 5));
                break;
              case 6:
                ((G = 0), (Gl = null), zu(e, t, o, 6));
                break;
              case 8:
                (Eu(), (Xl = 6));
                break a;
              default:
                throw Error(a(462));
            }
          }
          Iu();
          break;
        } catch (t) {
          Ou(e, t);
        }
      while (1);
      return (
        (ta = ea = null),
        (C.H = r),
        (C.A = i),
        (V = n),
        U === null ? ((H = null), (W = 0), li(), Xl) : 0
      );
    }
    function Iu() {
      for (; U !== null && !Fe(); ) Lu(U);
    }
    function Lu(e) {
      var t = Ic(e.alternate, e, Yl);
      ((e.memoizedProps = e.pendingProps), t === null ? Bu(e) : (U = t));
    }
    function Ru(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Sc(n, t, t.pendingProps, t.type, void 0, W);
          break;
        case 11:
          t = Sc(n, t, t.pendingProps, t.type.render, t.ref, W);
          break;
        case 5:
          Io(t);
        default:
          (Gc(n, t), (t = U = bi(t, Yl)), (t = Ic(n, t, Yl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Bu(e) : (U = t));
    }
    function zu(e, t, n, r) {
      ((ta = ea = null), Io(t), (za = null), (Ba = 0));
      var i = t.return;
      try {
        if (sc(e, i, t, n, W)) {
          ((Xl = 1), nc(e, Di(n, e.current)), (U = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((U = i), t);
        ((Xl = 1), nc(e, Di(n, e.current)), (U = null));
        return;
      }
      t.flags & 32768
        ? (M || r === 1
            ? (e = !0)
            : ql || W & 536870912
              ? (e = !1)
              : ((Kl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = uo.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Vu(t, e))
        : Bu(t);
    }
    function Bu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Vu(t, Kl);
          return;
        }
        e = t.return;
        var n = Uc(t.alternate, t, Yl);
        if (n !== null) {
          U = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          U = t;
          return;
        }
        U = t = e;
      } while (t !== null);
      Xl === 0 && (Xl = 5);
    }
    function Vu(e, t) {
      do {
        var n = Wc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (U = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          U = e;
          return;
        }
        U = e = n;
      } while (e !== null);
      ((Xl = 6), (U = null));
    }
    function Hu(e, t, n, r, i, o, s, c, l) {
      e.cancelPendingCommit = null;
      do qu();
      while (uu !== 0);
      if (V & 6) throw Error(a(327));
      if (t !== null) {
        if (t === e.current) throw Error(a(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ci),
          lt(e, n, o, s, c, l),
          e === H && ((U = H = null), (W = 0)),
          (fu = t),
          (du = e),
          (pu = n),
          (mu = o),
          (hu = i),
          (gu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              ed(Ve, function () {
                return (Ju(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = C.T), (C.T = null), (i = w.p), (w.p = 2), (s = V), (V |= 4));
          try {
            ul(e, t, n);
          } finally {
            ((V = s), (w.p = i), (C.T = r));
          }
        }
        ((uu = 1), Uu(), Wu(), Gu());
      }
    }
    function Uu() {
      if (uu === 1) {
        uu = 0;
        var e = du,
          t = fu,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = C.T), (C.T = null));
          var r = w.p;
          w.p = 2;
          var i = V;
          V |= 4;
          try {
            Cl(t, e);
            var a = Ud,
              o = Ir(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Fr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Lr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Pr(s, h),
                      v = Pr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((dp = !!Hd), (Ud = Hd = null));
          } finally {
            ((V = i), (w.p = r), (C.T = n));
          }
        }
        ((e.current = t), (uu = 2));
      }
    }
    function Wu() {
      if (uu === 2) {
        uu = 0;
        var e = du,
          t = fu,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = C.T), (C.T = null));
          var r = w.p;
          w.p = 2;
          var i = V;
          V |= 4;
          try {
            dl(e, t.alternate, t);
          } finally {
            ((V = i), (w.p = r), (C.T = n));
          }
        }
        uu = 3;
      }
    }
    function Gu() {
      if (uu === 4 || uu === 3) {
        ((uu = 0), Ie());
        var e = du,
          t = fu,
          n = pu,
          r = gu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (uu = 5)
          : ((uu = 0), (fu = du = null), Ku(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (lu = null),
          mt(n),
          (t = t.stateNode),
          qe && typeof qe.onCommitFiberRoot == `function`)
        )
          try {
            qe.onCommitFiberRoot(Ke, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = C.T), (i = w.p), (w.p = 2), (C.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((C.T = t), (w.p = i));
          }
        }
        (pu & 3 && qu(),
          sd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === vu
              ? _u++
              : ((_u = 0), (vu = e))
            : (_u = 0),
          cd(0, !1));
      }
    }
    function Ku(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ga(t)));
    }
    function qu() {
      return (Uu(), Wu(), Gu(), Ju());
    }
    function Ju() {
      if (uu !== 5) return !1;
      var e = du,
        t = mu;
      mu = 0;
      var n = mt(pu),
        r = C.T,
        i = w.p;
      try {
        ((w.p = 32 > n ? 32 : n), (C.T = null), (n = hu), (hu = null));
        var o = du,
          s = pu;
        if (((uu = 0), (fu = du = null), (pu = 0), V & 6)) throw Error(a(331));
        var c = V;
        if (
          ((V |= 4),
          Bl(o.current),
          Ml(o, o.current, s, n),
          (V = c),
          cd(0, !1),
          qe && typeof qe.onPostCommitFiberRoot == `function`)
        )
          try {
            qe.onPostCommitFiberRoot(Ke, o);
          } catch {}
        return !0;
      } finally {
        ((w.p = i), (C.T = r), Ku(e, t));
      }
    }
    function q(e, t, n) {
      ((t = Di(n, t)),
        (t = ic(e.stateNode, t, 2)),
        (e = Za(e, t, 2)),
        e !== null && (ct(e, 2), sd(e)));
    }
    function J(e, t, n) {
      if (e.tag === 3) q(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            q(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (lu === null || !lu.has(r)))
            ) {
              ((e = Di(n, e)),
                (n = ac(2)),
                (r = Za(t, n, 2)),
                r !== null && (oc(n, r, t, e), ct(r, 2), sd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Yu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Wl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Jl = !0), i.add(n), (e = Xu.bind(null, e, t, n)), t.then(e, e));
    }
    function Xu(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        H === e &&
          (W & n) === n &&
          (Xl === 4 || (Xl === 3 && (W & 62914560) === W && 300 > Le() - au)
            ? !(V & 2) && Du(e, 0)
            : ($l |= n),
          tu === W && (tu = 0)),
        sd(e));
    }
    function Zu(e, t) {
      (t === 0 && (t = ot()), (e = fi(e, t)), e !== null && (ct(e, t), sd(e)));
    }
    function Qu(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Zu(e, n));
    }
    function $u(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            i = e.memoizedState;
          i !== null && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(a(314));
      }
      (r !== null && r.delete(t), Zu(e, n));
    }
    function ed(e, t) {
      return Ne(e, t);
    }
    var td = null,
      nd = null,
      rd = !1,
      id = !1,
      ad = !1,
      od = 0;
    function sd(e) {
      (e !== nd &&
        e.next === null &&
        (nd === null ? (td = nd = e) : (nd = nd.next = e)),
        (id = !0),
        rd || ((rd = !0), md()));
    }
    function cd(e, t) {
      if (!ad && id) {
        ad = !0;
        do
          for (var n = !1, r = td; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Ye(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), pd(r, a));
              } else
                ((a = W),
                  (a = rt(
                    r,
                    r === H ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1
                  )),
                  !(a & 3) || it(r, a) || ((n = !0), pd(r, a)));
            r = r.next;
          }
        while (n);
        ad = !1;
      }
    }
    function ld() {
      ud();
    }
    function ud() {
      id = rd = !1;
      var e = 0;
      od !== 0 && Yd() && (e = od);
      for (var t = Le(), n = null, r = td; r !== null; ) {
        var i = r.next,
          a = dd(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (td = i) : (n.next = i),
            i === null && (nd = n))
          : ((n = r), (e !== 0 || a & 3) && (id = !0)),
          (r = i));
      }
      ((uu !== 0 && uu !== 5) || cd(e, !1), od !== 0 && (od = 0));
    }
    function dd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ye(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = at(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = H),
        (n = W),
        (n = rt(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (G === 2 || G === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Pe(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || it(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Pe(r), mt(n))) {
          case 2:
          case 8:
            n = Be;
            break;
          case 32:
            n = Ve;
            break;
          case 268435456:
            n = Ue;
            break;
          default:
            n = Ve;
        }
        return (
          (r = fd.bind(null, e)),
          (n = Ne(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Pe(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function fd(e, t) {
      if (uu !== 0 && uu !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (qu() && e.callbackNode !== n) return null;
      var r = W;
      return (
        (r = rt(
          e,
          e === H ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        r === 0
          ? null
          : (Su(e, r, t),
            dd(e, Le()),
            e.callbackNode != null && e.callbackNode === n
              ? fd.bind(null, e)
              : null)
      );
    }
    function pd(e, t) {
      if (qu()) return null;
      Su(e, t, !0);
    }
    function md() {
      $d(function () {
        V & 6 ? Ne(ze, ld) : ud();
      });
    }
    function hd() {
      if (od === 0) {
        var e = ya;
        (e === 0 && ((e = $e), ($e <<= 1), !($e & 261888) && ($e = 256)),
          (od = e));
      }
      return od;
    }
    function gd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : un(`` + e);
    }
    function _d(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function vd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = gd((i[vt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[vt] || null)
            ? gd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Mn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (od !== 0) {
                    var e = o ? _d(i, o) : new FormData(i);
                    As(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? _d(i, o) : new FormData(i)),
                    As(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var yd = 0; yd < ri.length; yd++) {
      var bd = ri[yd];
      ii(bd.toLowerCase(), `on` + (bd[0].toUpperCase() + bd.slice(1)));
    }
    (ii(Yr, `onAnimationEnd`),
      ii(Xr, `onAnimationIteration`),
      ii(Zr, `onAnimationStart`),
      ii(`dblclick`, `onDoubleClick`),
      ii(`focusin`, `onFocus`),
      ii(`focusout`, `onBlur`),
      ii(Qr, `onTransitionRun`),
      ii($r, `onTransitionStart`),
      ii(ei, `onTransitionCancel`),
      ii(ti, `onTransitionEnd`),
      Pt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Pt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Pt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Pt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Nt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `
        )
      ),
      Nt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `
        )
      ),
      Nt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Nt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `)
      ),
      Nt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `)
      ),
      Nt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)
      ));
    var xd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `
        ),
      Sd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(xd)
      );
    function Cd(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Y(e, t) {
      var n = t[bt];
      n === void 0 && (n = t[bt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Dd(t, e, 2, !1), n.add(r));
    }
    function wd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Dd(n, e, r, t));
    }
    var Td = `_reactListening` + Math.random().toString(36).slice(2);
    function Ed(e) {
      if (!e[Td]) {
        ((e[Td] = !0),
          jt.forEach(function (t) {
            t !== `selectionchange` &&
              (Sd.has(t) || wd(t, !1, e), wd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Td] || ((t[Td] = !0), wd(`selectionchange`, !1, t));
      }
    }
    function Dd(e, t, n, r) {
      switch (vp(t)) {
        case 2:
          var i = fp;
          break;
        case 8:
          i = pp;
          break;
        default:
          i = mp;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !xn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Od(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var l = o.tag;
                if ((l === 3 || l === 4) && o.stateNode.containerInfo === i)
                  return;
                o = o.return;
              }
            for (; c !== null; ) {
              if (((o = Et(c)), o === null)) return;
              if (((l = o.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = o;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      vn(function () {
        var r = a,
          i = pn(n),
          o = [];
        a: {
          var c = ni.get(e);
          if (c !== void 0) {
            var l = Mn,
              u = e;
            switch (e) {
              case `keypress`:
                if (Dn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Xn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Vn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Vn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Vn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = zn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Bn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Qn;
                break;
              case Yr:
              case Xr:
              case Zr:
                l = Hn;
                break;
              case ti:
                l = $n;
                break;
              case `scroll`:
              case `scrollend`:
                l = Pn;
                break;
              case `wheel`:
                l = er;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Un;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Zn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = tr;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = yn(m, p)), g != null && d.push(kd(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              o.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== fn &&
                (u = n.relatedTarget || n.fromElement) &&
                (Et(u) || u[yt]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? Et(u) : null),
                  u !== null &&
                    ((f = s(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = zn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Zn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : Ot(l)),
                (h = u == null ? c : Ot(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                Et(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = jd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) ((p = d(p)), h--);
                  for (; 0 < g - h; ) ((m = d(m)), g--);
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Md(o, c, l, d, !1),
                u !== null && f !== null && Md(o, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? Ot(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = yr;
            else if (pr(c))
              if (br) v = kr;
              else {
                v = Dr;
                var y = Er;
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && sn(r.elementType) && (v = yr)
                  : (v = Or));
            if ((v &&= v(e, r))) {
              mr(o, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Qt(c, `number`, c.value));
          }
          switch (((y = r ? Ot(r) : window), e)) {
            case `focusin`:
              (pr(y) || y.contentEditable === `true`) &&
                ((zr = y), (Br = r), (Vr = null));
              break;
            case `focusout`:
              Vr = Br = zr = null;
              break;
            case `mousedown`:
              Hr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Hr = !1), Ur(o, n, i));
              break;
            case `selectionchange`:
              if (Rr) break;
            case `keydown`:
            case `keyup`:
              Ur(o, n, i);
          }
          var b;
          if (rr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            lr
              ? sr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (ar &&
              n.locale !== `ko` &&
              (lr || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && lr && (b = En())
                : ((Cn = i),
                  (wn = `value` in Cn ? Cn.value : Cn.textContent),
                  (lr = !0))),
            (y = Ad(r, x)),
            0 < y.length &&
              ((x = new Wn(x, e, null, n, i)),
              o.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = cr(n)), b !== null && (x.data = b)))),
            (b = ir ? ur(e, n) : dr(e, n)) &&
              ((x = Ad(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Wn(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: y, listeners: x }),
                (y.data = b))),
            vd(o, e, r, n, i));
        }
        Cd(o, t);
      });
    }
    function kd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ad(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = yn(e, n)),
            i != null && r.unshift(kd(e, i, a)),
            (i = yn(e, t)),
            i != null && r.push(kd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function jd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Md(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = yn(n, a)), l != null && o.unshift(kd(n, l, c)))
            : i || ((l = yn(n, a)), l != null && o.push(kd(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Nd = /\r\n?/g,
      Pd = /\u0000|\uFFFD/g;
    function Fd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Nd,
          `
`
        )
        .replace(Pd, ``);
    }
    function Id(e, t) {
      return ((t = Fd(t)), Fd(e) === t);
    }
    function X(e, t, n, r, i, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || nn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              nn(e, `` + r);
          break;
        case `className`:
          Bt(e, `class`, r);
          break;
        case `tabIndex`:
          Bt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Bt(e, n, r);
          break;
        case `style`:
          on(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Bt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = un(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && X(e, t, `name`, i.name, i, null),
                  X(e, t, `formEncType`, i.formEncType, i, null),
                  X(e, t, `formMethod`, i.formMethod, i, null),
                  X(e, t, `formTarget`, i.formTarget, i, null))
                : (X(e, t, `encType`, i.encType, i, null),
                  X(e, t, `method`, i.method, i, null),
                  X(e, t, `target`, i.target, i, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = un(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = dn);
          break;
        case `onScroll`:
          r != null && Y(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Y(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(a(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = un(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Y(`beforetoggle`, e), Y(`toggle`, e), zt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          zt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = cn.get(n) || n), zt(e, n, r));
      }
    }
    function Ld(e, t, n, r, i, o) {
      switch (n) {
        case `style`:
          on(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(a(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? nn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && nn(e, `` + r);
          break;
        case `onScroll`:
          r != null && Y(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Y(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = dn);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Mt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((i = n.endsWith(`Capture`)),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                (o = e[vt] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, i),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, i));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : zt(e, n, r);
            }
      }
    }
    function Rd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Y(`error`, e), Y(`load`, e));
          var r = !1,
            i = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    i = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(a(137, t));
                  default:
                    X(e, t, o, s, n, null);
                }
            }
          (i && X(e, t, `srcSet`, n.srcSet, n, null),
            r && X(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Y(`invalid`, e);
          var c = (o = s = i = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    i = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(a(137, t));
                    break;
                  default:
                    X(e, t, r, d, n, null);
                }
            }
          Zt(e, o, c, l, u, s, i, !1);
          return;
        case `select`:
          for (i in (Y(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(i) && ((c = n[i]), c != null))
              switch (i) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  X(e, t, i, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && $t(e, !!r, n, !0) : $t(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Y(`invalid`, e), (o = i = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  i = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(a(91));
                  break;
                default:
                  X(e, t, s, c, n, null);
              }
          tn(e, r, i, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  X(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Y(`beforetoggle`, e), Y(`toggle`, e), Y(`cancel`, e), Y(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Y(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < xd.length; r++) Y(xd[r], e);
          break;
        case `image`:
          (Y(`error`, e), Y(`load`, e));
          break;
        case `details`:
          Y(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Y(`error`, e), Y(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(a(137, t));
                default:
                  X(e, t, u, r, n, null);
              }
          return;
        default:
          if (sn(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Ld(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && X(e, t, c, r, n, null));
    }
    function zd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var i = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || X(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  i = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(a(137, t));
                  break;
                default:
                  m !== f && X(e, t, p, m, r, f);
              }
          }
          Xt(e, s, c, l, u, d, o, i);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || X(e, t, o, null, r, l);
              }
          for (i in r)
            if (
              ((o = r[i]),
              (l = n[i]),
              r.hasOwnProperty(i) && (o != null || l != null))
            )
              switch (i) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && X(e, t, i, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? $t(e, !!n, n ? [] : ``, !1) : $t(e, !!n, t, !0))
              : $t(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((i = n[c]),
              n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  X(e, t, c, null, r, i);
              }
          for (s in r)
            if (
              ((i = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (i != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = i;
                  break;
                case `defaultValue`:
                  m = i;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (i != null) throw Error(a(91));
                  break;
                default:
                  i !== o && X(e, t, s, i, r, o);
              }
          en(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  X(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  X(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                X(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(a(137, t));
                  break;
                default:
                  X(e, t, u, p, r, m);
              }
          return;
        default:
          if (sn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Ld(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Ld(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            X(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            X(e, t, f, p, r, m));
    }
    function Bd(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Vd() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Bd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Bd(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Hd = null,
      Ud = null;
    function Wd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Gd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Kd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function qd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Jd = null;
    function Yd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Jd
          ? !1
          : ((Jd = e), !0)
        : ((Jd = null), !1);
    }
    var Xd = typeof setTimeout == `function` ? setTimeout : void 0,
      Zd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Qd = typeof Promise == `function` ? Promise : void 0,
      $d =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Qd === void 0
            ? Xd
            : function (e) {
                return Qd.resolve(null).then(e).catch(ef);
              };
    function ef(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function tf(e) {
      return e === `head`;
    }
    function nf(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Lp(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) _f(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), _f(n));
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[wt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && _f(e.ownerDocument.body);
        n = i;
      } while (n);
      Lp(t);
    }
    function rf(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function af(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (af(n), Tt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function of(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[wt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = ff(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function sf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = ff(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function cf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = ff(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function lf(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function uf(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function df(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function ff(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var pf = null;
    function mf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return ff(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function hf(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function gf(e, t, n) {
      switch (((t = Wd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(a(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(a(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(a(454));
          return e;
        default:
          throw Error(a(451));
      }
    }
    function _f(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      Tt(e);
    }
    var vf = new Map(),
      yf = new Set();
    function bf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var xf = w.d;
    w.d = { f: Sf, r: Cf, D: Ef, C: Df, L: Of, m: kf, X: jf, S: Af, M: Mf };
    function Sf() {
      var e = xf.f(),
        t = Tu();
      return e || t;
    }
    function Cf(e) {
      var t = Dt(e);
      t !== null && t.tag === 5 && t.type === `form` ? Ms(t) : xf.r(e);
    }
    var wf = typeof document > `u` ? null : document;
    function Tf(e, t, n) {
      var r = wf;
      if (r && typeof t == `string` && t) {
        var i = Yt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          yf.has(i) ||
            (yf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Rd(t, `link`, e),
              At(t),
              r.head.appendChild(t))));
      }
    }
    function Ef(e) {
      (xf.D(e), Tf(`dns-prefetch`, e, null));
    }
    function Df(e, t) {
      (xf.C(e, t), Tf(`preconnect`, e, t));
    }
    function Of(e, t, n) {
      xf.L(e, t, n);
      var r = wf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Yt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Yt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Yt(n.imageSizes) + `"]`))
          : (i += `[href="` + Yt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Pf(e);
            break;
          case `script`:
            a = Rf(e);
        }
        vf.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n
          )),
          vf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Ff(a))) ||
            (t === `script` && r.querySelector(zf(a))) ||
            ((t = r.createElement(`link`)),
            Rd(t, `link`, e),
            At(t),
            r.head.appendChild(t)));
      }
    }
    function kf(e, t) {
      xf.m(e, t);
      var n = wf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Yt(r) +
            `"][href="` +
            Yt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Rf(e);
        }
        if (
          !vf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)),
          vf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(zf(a))) return;
          }
          ((r = n.createElement(`link`)),
            Rd(r, `link`, e),
            At(r),
            n.head.appendChild(r));
        }
      }
    }
    function Af(e, t, n) {
      xf.S(e, t, n);
      var r = wf;
      if (r && e) {
        var i = kt(r).hoistableStyles,
          a = Pf(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Ff(a)))) s.loading = 5;
          else {
            ((e = h({ rel: `stylesheet`, href: e, 'data-precedence': t }, n)),
              (n = vf.get(a)) && Hf(e, n));
            var c = (o = r.createElement(`link`));
            (At(c),
              Rd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Vf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function jf(e, t) {
      xf.X(e, t);
      var n = wf;
      if (n && e) {
        var r = kt(n).hoistableScripts,
          i = Rf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zf(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = vf.get(i)) && Uf(e, t),
            (a = n.createElement(`script`)),
            At(a),
            Rd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Mf(e, t) {
      xf.M(e, t);
      var n = wf;
      if (n && e) {
        var r = kt(n).hoistableScripts,
          i = Rf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zf(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = vf.get(i)) && Uf(e, t),
            (a = n.createElement(`script`)),
            At(a),
            Rd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Nf(e, t, n, r) {
      var i = (i = ye.current) ? bf(i) : null;
      if (!i) throw Error(a(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Pf(n.href)),
              (n = kt(i).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Pf(n.href);
            var o = kt(i).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((i = i.ownerDocument || i),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = i.querySelector(Ff(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                vf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  vf.set(e, n),
                  o || Lf(i, e, n, s.state))),
              t && r === null)
            )
              throw Error(a(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(a(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Rf(n)),
                (n = kt(i).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(a(444, e));
      }
    }
    function Pf(e) {
      return `href="` + Yt(e) + `"`;
    }
    function Ff(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function If(e) {
      return h({}, e, { 'data-precedence': e.precedence, precedence: null });
    }
    function Lf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Rd(t, `link`, n),
          At(t),
          e.head.appendChild(t));
    }
    function Rf(e) {
      return `[src="` + Yt(e) + `"]`;
    }
    function zf(e) {
      return `script[async]` + e;
    }
    function Bf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Yt(n.href) + `"]`);
            if (r) return ((t.instance = r), At(r), r);
            var i = h({}, n, {
              'data-href': n.href,
              'data-precedence': n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              At(r),
              Rd(r, `style`, i),
              Vf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            i = Pf(n.href);
            var o = e.querySelector(Ff(i));
            if (o) return ((t.state.loading |= 4), (t.instance = o), At(o), o);
            ((r = If(n)),
              (i = vf.get(i)) && Hf(r, i),
              (o = (e.ownerDocument || e).createElement(`link`)),
              At(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Rd(o, `link`, r),
              (t.state.loading |= 4),
              Vf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Rf(n.src)),
              (i = e.querySelector(zf(o)))
                ? ((t.instance = i), At(i), i)
                : ((r = n),
                  (i = vf.get(o)) && ((r = h({}, n)), Uf(r, i)),
                  (e = e.ownerDocument || e),
                  (i = e.createElement(`script`)),
                  At(i),
                  Rd(i, `link`, r),
                  e.head.appendChild(i),
                  (t.instance = i))
            );
          case `void`:
            return null;
          default:
            throw Error(a(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Vf(r, n.precedence, e));
      return t.instance;
    }
    function Vf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Hf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Uf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Wf = null;
    function Gf(e, t, n) {
      if (Wf === null) {
        var r = new Map(),
          i = (Wf = new Map());
        i.set(n, r);
      } else ((i = Wf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[wt] ||
            a[O] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Kf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null
        ));
    }
    function qf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Jf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Yf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Pf(r.href),
            a = t.querySelector(Ff(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Qf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              At(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = If(r)),
            (i = vf.get(i)) && Hf(r, i),
            (a = a.createElement(`link`)),
            At(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Rd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Qf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Xf = 0;
    function Zf(e, t) {
      return (
        e.stylesheets && e.count === 0 && ep(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && ep(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Xf === 0 && (Xf = 62500 * Vd());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && ep(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Xf ? 50 : 800) + t
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Qf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) ep(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var $f = null;
    function ep(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          ($f = new Map()),
          t.forEach(tp, e),
          ($f = null),
          Qf.call(e)));
    }
    function tp(e, t) {
      if (!(t.state.loading & 4)) {
        var n = $f.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), $f.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Qf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var np = {
      $$typeof: S,
      Provider: null,
      Consumer: null,
      _currentValue: pe,
      _currentValue2: pe,
      _threadCount: 0,
    };
    function rp(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = st(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = st(0)),
        (this.hiddenUpdates = st(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ip(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new rp(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = _i(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ha()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ja(a),
        e
      );
    }
    function ap(e) {
      return e ? ((e = hi), e) : hi;
    }
    function op(e, t, n, r, i, a) {
      ((i = ap(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Xa(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Za(e, r, t)),
        n !== null && (xu(n, e, t), Qa(n, e, t)));
    }
    function sp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function cp(e, t) {
      (sp(e, t), (e = e.alternate) && sp(e, t));
    }
    function lp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = fi(e, 67108864);
        (t !== null && xu(t, e, 67108864), cp(e, 67108864));
      }
    }
    function up(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = yu();
        t = pt(t);
        var n = fi(e, t);
        (n !== null && xu(n, e, t), cp(e, t));
      }
    }
    var dp = !0;
    function fp(e, t, n, r) {
      var i = C.T;
      C.T = null;
      var a = w.p;
      try {
        ((w.p = 2), mp(e, t, n, r));
      } finally {
        ((w.p = a), (C.T = i));
      }
    }
    function pp(e, t, n, r) {
      var i = C.T;
      C.T = null;
      var a = w.p;
      try {
        ((w.p = 8), mp(e, t, n, r));
      } finally {
        ((w.p = a), (C.T = i));
      }
    }
    function mp(e, t, n, r) {
      if (dp) {
        var i = hp(r);
        if (i === null) (Od(e, t, r, gp, n), Dp(e, r));
        else if (kp(i, e, t, n, r)) r.stopPropagation();
        else if ((Dp(e, r), t & 4 && -1 < Ep.indexOf(e))) {
          for (; i !== null; ) {
            var a = Dt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = nt(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ye(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (sd(a), !(V & 6) && ((su = Le() + 500), cd(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = fi(a, 2)), s !== null && xu(s, a, 2), Tu(), cp(a, 2));
              }
            if (((a = hp(r)), a === null && Od(e, t, r, gp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Od(e, t, r, null, n);
      }
    }
    function hp(e) {
      return ((e = pn(e)), _p(e));
    }
    var gp = null;
    function _p(e) {
      if (((gp = null), (e = Et(e)), e !== null)) {
        var t = s(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = u(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((gp = e), null);
    }
    function vp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Re()) {
            case ze:
              return 2;
            case Be:
              return 8;
            case Ve:
            case He:
              return 32;
            case Ue:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var yp = !1,
      bp = null,
      xp = null,
      Sp = null,
      Cp = new Map(),
      wp = new Map(),
      Tp = [],
      Ep =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `
        );
    function Dp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          bp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          xp = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Sp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Cp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          wp.delete(t.pointerId);
      }
    }
    function Op(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Dt(t)), t !== null && lp(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function kp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((bp = Op(bp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((xp = Op(xp, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((Sp = Op(Sp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (Cp.set(a, Op(Cp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            wp.set(a, Op(wp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ap(e) {
      var t = Et(e.target);
      if (t !== null) {
        var n = s(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                gt(e.priority, function () {
                  up(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = u(n)), t !== null)) {
              ((e.blockedOn = t),
                gt(e.priority, function () {
                  up(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function jp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = hp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((fn = r), n.target.dispatchEvent(r), (fn = null));
        } else return ((t = Dt(n)), t !== null && lp(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Mp(e, t, n) {
      jp(e) && n.delete(t);
    }
    function Np() {
      ((yp = !1),
        bp !== null && jp(bp) && (bp = null),
        xp !== null && jp(xp) && (xp = null),
        Sp !== null && jp(Sp) && (Sp = null),
        Cp.forEach(Mp),
        wp.forEach(Mp));
    }
    function Pp(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        yp ||
          ((yp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Np)));
    }
    var Fp = null;
    function Ip(e) {
      Fp !== e &&
        ((Fp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Fp === e && (Fp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (_p(r || n) === null) continue;
              break;
            }
            var a = Dt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              As(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i
              ));
          }
        }));
    }
    function Lp(e) {
      function t(t) {
        return Pp(t, e);
      }
      (bp !== null && Pp(bp, e),
        xp !== null && Pp(xp, e),
        Sp !== null && Pp(Sp, e),
        Cp.forEach(t),
        wp.forEach(t));
      for (var n = 0; n < Tp.length; n++) {
        var r = Tp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Tp.length && ((n = Tp[0]), n.blockedOn === null); )
        (Ap(n), n.blockedOn === null && Tp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[vt] || null;
          if (typeof a == `function`) o || Ip(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[vt] || null))) s = o.formAction;
              else if (_p(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Ip(n));
          }
        }
    }
    function Rp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function zp(e) {
      this._internalRoot = e;
    }
    ((Bp.prototype.render = zp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(a(409));
        var n = t.current;
        op(n, yu(), e, t, null, null);
      }),
      (Bp.prototype.unmount = zp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (op(e.current, 2, null, e, null, null), Tu(), (t[yt] = null));
          }
        }));
    function Bp(e) {
      this._internalRoot = e;
    }
    Bp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = ht();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Tp.length && t !== 0 && t < Tp[n].priority; n++);
        (Tp.splice(n, 0, e), n === 0 && Ap(e));
      }
    };
    var Vp = n.version;
    if (Vp !== `19.2.5`) throw Error(a(527, Vp, `19.2.5`));
    w.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(a(188))
          : ((e = Object.keys(e).join(`,`)), Error(a(268, e)));
      return (
        (e = p(t)),
        (e = e === null ? null : m(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Hp = {
      bundleType: 0,
      version: `19.2.5`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: C,
      reconcilerVersion: `19.2.5`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Up = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Up.isDisabled && Up.supportsFiber)
        try {
          ((Ke = Up.inject(Hp)), (qe = Up));
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!o(e)) throw Error(a(299));
      var r = !1,
        i = ``,
        s = $s,
        c = ec,
        l = tc,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = ip(e, 1, !0, t, n ?? null, r, i, u, s, c, l, Rp)),
        (t.context = ap(null)),
        (n = t.current),
        (r = yu()),
        (r = pt(r)),
        (i = Xa(r)),
        (i.callback = null),
        Za(n, i, r),
        (n = r),
        (t.current.lanes = n),
        ct(t, n),
        sd(t),
        (e[yt] = t.current),
        Ed(e),
        new Bp(t)
      );
    };
  }),
  p = c((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = f()));
  }),
  m = `__TSS_CONTEXT`,
  h = Symbol.for(`TSS_SERVER_FUNCTION`),
  g = Symbol.for(`TSS_SERVER_FUNCTION_FACTORY`),
  _ = `application/x-tss-framed`,
  v = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 };
`${_}`;
var y = /;\s*v=(\d+)/;
function b(e) {
  let t = e.match(y);
  return t ? parseInt(t[1], 10) : void 0;
}
function x(e) {
  let t = b(e);
  if (t !== void 0 && t !== 1)
    throw Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`
    );
}
var ee = () => window.__TSS_START_OPTIONS__;
function S(e) {
  return e[e.length - 1];
}
function te(e) {
  return typeof e == `function`;
}
function ne(e, t) {
  return te(e) ? e(t) : e;
}
var re = Object.prototype.hasOwnProperty,
  ie = Object.prototype.propertyIsEnumerable;
function ae(e) {
  for (let t in e) if (re.call(e, t)) return !0;
  return !1;
}
var oe = () => Object.create(null),
  se = (e, t) => ce(e, t, oe);
function ce(e, t, n = () => ({}), r = 0) {
  if (e === t) return e;
  if (r > 500) return t;
  let i = t,
    a = fe(e) && fe(i);
  if (!a && !(ue(e) && ue(i))) return i;
  let o = a ? e : le(e);
  if (!o) return i;
  let s = a ? i : le(i);
  if (!s) return i;
  let c = o.length,
    l = s.length,
    u = a ? Array(l) : n(),
    d = 0;
  for (let t = 0; t < l; t++) {
    let o = a ? t : s[t],
      l = e[o],
      f = i[o];
    if (l === f) {
      ((u[o] = l), (a ? t < c : re.call(e, o)) && d++);
      continue;
    }
    if (
      l === null ||
      f === null ||
      typeof l != `object` ||
      typeof f != `object`
    ) {
      u[o] = f;
      continue;
    }
    let p = ce(l, f, n, r + 1);
    ((u[o] = p), p === l && d++);
  }
  return c === l && d === c ? e : u;
}
function le(e) {
  let t = Object.getOwnPropertyNames(e);
  for (let n of t) if (!ie.call(e, n)) return !1;
  let n = Object.getOwnPropertySymbols(e);
  if (n.length === 0) return t;
  let r = t;
  for (let t of n) {
    if (!ie.call(e, t)) return !1;
    r.push(t);
  }
  return r;
}
function ue(e) {
  if (!de(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!de(n) || !n.hasOwnProperty(`isPrototypeOf`));
}
function de(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function fe(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function C(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let r = 0, i = e.length; r < i; r++) if (!C(e[r], t[r], n)) return !1;
    return !0;
  }
  if (ue(e) && ue(t)) {
    let r = n?.ignoreUndefined ?? !0;
    if (n?.partial) {
      for (let i in t)
        if ((!r || t[i] !== void 0) && !C(e[i], t[i], n)) return !1;
      return !0;
    }
    let i = 0;
    if (!r) i = Object.keys(e).length;
    else for (let t in e) e[t] !== void 0 && i++;
    let a = 0;
    for (let o in t)
      if ((!r || t[o] !== void 0) && (a++, a > i || !C(e[o], t[o], n)))
        return !1;
    return i === a;
  }
  return !1;
}
function w(e) {
  let t,
    n,
    r = new Promise((e, r) => {
      ((t = e), (n = r));
    });
  return (
    (r.status = `pending`),
    (r.resolve = (n) => {
      ((r.status = `resolved`), (r.value = n), t(n), e?.(n));
    }),
    (r.reject = (e) => {
      ((r.status = `rejected`), n(e));
    }),
    r
  );
}
function pe(e) {
  return typeof e?.message == `string`
    ? e.message.startsWith(`Failed to fetch dynamically imported module`) ||
        e.message.startsWith(`error loading dynamically imported module`) ||
        e.message.startsWith(`Importing a module script failed`)
    : !1;
}
function me(e) {
  return !!(e && typeof e == `object` && typeof e.then == `function`);
}
function he(e) {
  return e.replace(/[\x00-\x1f\x7f]/g, ``);
}
function ge(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
      try {
        return decodeURI(e);
      } catch {
        return e;
      }
    });
  }
  return he(t);
}
var _e = [`http:`, `https:`, `mailto:`, `tel:`];
function E(e, t) {
  if (!e) return !1;
  try {
    let n = new URL(e);
    return !t.has(n.protocol);
  } catch {
    return !1;
  }
}
var D = {
    '&': `\\u0026`,
    '>': `\\u003e`,
    '<': `\\u003c`,
    '\u2028': `\\u2028`,
    '\u2029': `\\u2029`,
  },
  ve = /[&><\u2028\u2029]/g;
function ye(e) {
  return e.replace(ve, (e) => D[e]);
}
function be(e) {
  if (!e || (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith(`//`)))
    return { path: e, handledProtocolRelativeURL: !1 };
  let t = /%25|%5C/gi,
    n = 0,
    r = ``,
    i;
  for (; (i = t.exec(e)) !== null; )
    ((r += ge(e.slice(n, i.index)) + i[0]), (n = t.lastIndex));
  r += ge(n ? e.slice(n) : e);
  let a = !1;
  return (
    r.startsWith(`//`) && ((a = !0), (r = `/` + r.replace(/^\/+/, ``))),
    { path: r, handledProtocolRelativeURL: a }
  );
}
function xe(e) {
  return /\s|[^\u0000-\u007F]/.test(e)
    ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent)
    : e;
}
function Se(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Ce() {
  throw Error(`Invariant failed`);
}
function we(e) {
  let t = new Map(),
    n,
    r,
    i = (e) => {
      e.next &&
        (e.prev
          ? ((e.prev.next = e.next),
            (e.next.prev = e.prev),
            (e.next = void 0),
            r && ((r.next = e), (e.prev = r)))
          : ((e.next.prev = void 0),
            (n = e.next),
            (e.next = void 0),
            r && ((e.prev = r), (r.next = e))),
        (r = e));
    };
  return {
    get(e) {
      let n = t.get(e);
      if (n) return (i(n), n.value);
    },
    set(a, o) {
      if (t.size >= e && n) {
        let e = n;
        (t.delete(e.key),
          e.next && ((n = e.next), (e.next.prev = void 0)),
          e === r && (r = void 0));
      }
      let s = t.get(a);
      if (s) ((s.value = o), i(s));
      else {
        let e = { key: a, value: o, prev: r };
        (r && (r.next = e), (r = e), (n ||= e), t.set(a, e));
      }
    },
    clear() {
      (t.clear(), (n = void 0), (r = void 0));
    },
  };
}
var Te = 4,
  Ee = 5;
function De(e) {
  let t = e.indexOf(`{`);
  if (t === -1) return null;
  let n = e.indexOf(`}`, t);
  return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function Oe(e, t, n = new Uint16Array(6)) {
  let r = e.indexOf(`/`, t),
    i = r === -1 ? e.length : r,
    a = e.substring(t, i);
  if (!a || !a.includes(`$`))
    return (
      (n[0] = 0),
      (n[1] = t),
      (n[2] = t),
      (n[3] = i),
      (n[4] = i),
      (n[5] = i),
      n
    );
  if (a === `$`) {
    let r = e.length;
    return (
      (n[0] = 2),
      (n[1] = t),
      (n[2] = t),
      (n[3] = r),
      (n[4] = r),
      (n[5] = r),
      n
    );
  }
  if (a.charCodeAt(0) === 36)
    return (
      (n[0] = 1),
      (n[1] = t),
      (n[2] = t + 1),
      (n[3] = i),
      (n[4] = i),
      (n[5] = i),
      n
    );
  let o = De(a);
  if (o) {
    let [r, s] = o,
      c = a.charCodeAt(r + 1);
    if (c === 45) {
      if (r + 2 < a.length && a.charCodeAt(r + 2) === 36) {
        let e = r + 3,
          a = s;
        if (e < a)
          return (
            (n[0] = 3),
            (n[1] = t + r),
            (n[2] = t + e),
            (n[3] = t + a),
            (n[4] = t + s + 1),
            (n[5] = i),
            n
          );
      }
    } else if (c === 36) {
      let a = r + 1,
        o = r + 2;
      return o === s
        ? ((n[0] = 2),
          (n[1] = t + r),
          (n[2] = t + a),
          (n[3] = t + o),
          (n[4] = t + s + 1),
          (n[5] = e.length),
          n)
        : ((n[0] = 1),
          (n[1] = t + r),
          (n[2] = t + o),
          (n[3] = t + s),
          (n[4] = t + s + 1),
          (n[5] = i),
          n);
    }
  }
  return (
    (n[0] = 0),
    (n[1] = t),
    (n[2] = t),
    (n[3] = i),
    (n[4] = i),
    (n[5] = i),
    n
  );
}
function ke(e, t, n, r, i, a, o) {
  o?.(n);
  let s = r;
  {
    let r = n.fullPath ?? n.from,
      o = r.length,
      c = n.options?.caseSensitive ?? e,
      l = n.options?.params?.parse ?? n.options?.parseParams;
    for (; s < o; ) {
      let e = Oe(r, s, t),
        o,
        u = s,
        d = e[5];
      switch (((s = d + 1), a++, e[0])) {
        case 0: {
          let t = r.substring(e[2], e[3]);
          if (c) {
            let e = i.static?.get(t);
            if (e) o = e;
            else {
              i.static ??= new Map();
              let e = Me(n.fullPath ?? n.from);
              ((e.parent = i), (e.depth = a), (o = e), i.static.set(t, e));
            }
          } else {
            let e = t.toLowerCase(),
              r = i.staticInsensitive?.get(e);
            if (r) o = r;
            else {
              i.staticInsensitive ??= new Map();
              let t = Me(n.fullPath ?? n.from);
              ((t.parent = i),
                (t.depth = a),
                (o = t),
                i.staticInsensitive.set(e, t));
            }
          }
          break;
        }
        case 1: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.dynamic?.find(
                (e) =>
                  !e.parse &&
                  e.caseSensitive === f &&
                  e.prefix === p &&
                  e.suffix === m
              );
          if (h) o = h;
          else {
            let e = Ne(1, n.fullPath ?? n.from, f, p, m);
            ((o = e),
              (e.depth = a),
              (e.parent = i),
              (i.dynamic ??= []),
              i.dynamic.push(e));
          }
          break;
        }
        case 3: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.optional?.find(
                (e) =>
                  !e.parse &&
                  e.caseSensitive === f &&
                  e.prefix === p &&
                  e.suffix === m
              );
          if (h) o = h;
          else {
            let e = Ne(3, n.fullPath ?? n.from, f, p, m);
            ((o = e),
              (e.parent = i),
              (e.depth = a),
              (i.optional ??= []),
              i.optional.push(e));
          }
          break;
        }
        case 2: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            l = c && !!(t || s),
            f = t ? (l ? t : t.toLowerCase()) : void 0,
            p = s ? (l ? s : s.toLowerCase()) : void 0,
            m = Ne(2, n.fullPath ?? n.from, l, f, p);
          ((o = m),
            (m.parent = i),
            (m.depth = a),
            (i.wildcard ??= []),
            i.wildcard.push(m));
        }
      }
      i = o;
    }
    if (
      l &&
      n.children &&
      !n.isRoot &&
      n.id &&
      n.id.charCodeAt(n.id.lastIndexOf(`/`) + 1) === 95
    ) {
      let e = Me(n.fullPath ?? n.from);
      ((e.kind = Ee),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.pathless ??= []),
        i.pathless.push(e),
        (i = e));
    }
    let u = (n.path || !n.children) && !n.isRoot;
    if (u && r.endsWith(`/`)) {
      let e = Me(n.fullPath ?? n.from);
      ((e.kind = Te),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.index = e),
        (i = e));
    }
    ((i.parse = l ?? null),
      (i.priority = n.options?.params?.priority ?? 0),
      u && !i.route && ((i.route = n), (i.fullPath = n.fullPath ?? n.from)));
  }
  if (n.children) for (let r of n.children) ke(e, t, r, s, i, a, o);
}
function Ae(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority))
    return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function je(e) {
  if (e.pathless) for (let t of e.pathless) je(t);
  if (e.static) for (let t of e.static.values()) je(t);
  if (e.staticInsensitive) for (let t of e.staticInsensitive.values()) je(t);
  if (e.dynamic?.length) {
    e.dynamic.sort(Ae);
    for (let t of e.dynamic) je(t);
  }
  if (e.optional?.length) {
    e.optional.sort(Ae);
    for (let t of e.optional) je(t);
  }
  if (e.wildcard?.length) {
    e.wildcard.sort(Ae);
    for (let t of e.wildcard) je(t);
  }
}
function Me(e) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: e,
    parent: null,
    parse: null,
    priority: 0,
  };
}
function Ne(e, t, n, r, i) {
  return {
    kind: e,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: t,
    parent: null,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  };
}
function Pe(e, t) {
  let n = Me(`/`),
    r = new Uint16Array(6);
  for (let t of e) ke(!1, r, t, 1, n, 0);
  (je(n), (t.masksTree = n), (t.flatCache = we(1e3)));
}
function Fe(e, t) {
  e ||= `/`;
  let n = t.flatCache.get(e);
  if (n) return n;
  let r = Be(e, t.masksTree);
  return (t.flatCache.set(e, r), r);
}
function Ie(e, t, n, r, i) {
  ((e ||= `/`), (r ||= `/`));
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a);
  return (
    o ||
      ((o = Me(`/`)),
      ke(t, new Uint16Array(6), { from: e }, 1, o, 0),
      i.singleCache.set(a, o)),
    Be(r, o, n)
  );
}
function Le(e, t, n = !1) {
  let r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r);
  if (i !== void 0) return i;
  e ||= `/`;
  let a;
  try {
    a = Be(e, t.segmentTree, n);
  } catch (e) {
    if (e instanceof URIError) a = null;
    else throw e;
  }
  return (a && (a.branch = He(a.route)), t.matchCache.set(r, a), a);
}
function Re(e) {
  return e === `/` ? e : e.replace(/\/{1,}$/, ``);
}
function ze(e, t = !1, n) {
  let r = Me(e.fullPath),
    i = new Uint16Array(6),
    a = {},
    o = {},
    s = 0;
  return (
    ke(t, i, e, 1, r, 0, (e) => {
      if ((n?.(e, s), e.id in a && Ce(), (a[e.id] = e), s !== 0 && e.path)) {
        let t = Re(e.fullPath);
        (!o[t] || e.fullPath.endsWith(`/`)) && (o[t] = e);
      }
      s++;
    }),
    je(r),
    {
      processedTree: {
        segmentTree: r,
        singleCache: we(1e3),
        matchCache: we(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: a,
      routesByPath: o,
    }
  );
}
function Be(e, t, n = !1) {
  let r = e.split(`/`),
    i = We(e, r, t, n);
  if (!i) return null;
  let [a] = Ve(e, r, i);
  return { route: i.node.route, rawParams: a };
}
function Ve(e, t, n) {
  let r = Ue(n.node),
    i = null,
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.segment ?? 0;
  for (; s < r.length; o++, s++, c++, l++) {
    let u = r[s];
    if (u.kind === Te) break;
    if (u.kind === Ee) {
      (l--, o--, c--);
      continue;
    }
    let d = t[o],
      f = c;
    if ((d && (c += d.length), u.kind === 1)) {
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0;
      if (e.charCodeAt(t) === 123) {
        let n = u.suffix?.length ?? 0,
          r = e.substring(t + 2, e.length - n - 1),
          i = d.substring(t, d.length - n);
        a[r] = decodeURIComponent(i);
      } else {
        let t = e.substring(1);
        a[t] = decodeURIComponent(d);
      }
    } else if (u.kind === 3) {
      if (n.skipped & (1 << s)) {
        (o--, (c = f - 1));
        continue;
      }
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0,
        r = u.suffix?.length ?? 0,
        p = e.substring(t + 3, e.length - r - 1),
        m = u.suffix || u.prefix ? d.substring(t, d.length - r) : d;
      m && (a[p] = decodeURIComponent(m));
    } else if (u.kind === 2) {
      let t = u,
        n = e.substring(
          f + (t.prefix?.length ?? 0),
          e.length - (t.suffix?.length ?? 0)
        ),
        r = decodeURIComponent(n);
      ((a[`*`] = r), (a._splat = r));
      break;
    }
  }
  return (
    n.rawParams && Object.assign(a, n.rawParams),
    [a, { part: o, node: s, path: c, segment: l }]
  );
}
function He(e) {
  let t = [e];
  for (; e.parentRoute; ) ((e = e.parentRoute), t.push(e));
  return (t.reverse(), t);
}
function Ue(e) {
  let t = Array(e.depth + 1);
  do ((t[e.depth] = e), (e = e.parent));
  while (e);
  return t;
}
function We(e, t, n, r) {
  if (e === `/` && n.index) return { node: n.index, skipped: 0 };
  let i = !S(t),
    a = i && e !== `/`,
    o = t.length - +!!i,
    s = [
      {
        node: n,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 0,
        dynamics: 0,
        optionals: 0,
      },
    ],
    c = null,
    l = null;
  for (; s.length; ) {
    let n = s.pop(),
      {
        node: i,
        index: u,
        skipped: d,
        depth: f,
        statics: p,
        dynamics: m,
        optionals: h,
      } = n,
      { extract: g, rawParams: _ } = n;
    if (i.kind === 2 && i.route && !Je(l, n)) continue;
    if (i.parse) {
      if (!qe(e, t, n)) continue;
      ((_ = n.rawParams), (g = n.extract));
    }
    r && i.route && i.kind !== Te && Je(c, n) && (c = n);
    let v = u === o;
    if (
      v &&
      (i.route && (!a || i.kind === Te || i.kind === 2) && Je(l, n) && (l = n),
      !i.optional && !i.wildcard && !i.index && !i.pathless)
    )
      continue;
    let y = v ? void 0 : t[u],
      b;
    if (v && i.index) {
      let n = {
          node: i.index,
          index: u,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        },
        r = !0;
      if ((i.index.parse && (qe(e, t, n) || (r = !1)), r)) {
        if (!m && !h && !d && Ke(p, o)) return n;
        Je(l, n) && (l = n);
      }
    }
    if (i.wildcard)
      for (let e = i.wildcard.length - 1; e >= 0; e--) {
        let n = i.wildcard[e],
          { prefix: r, suffix: a } = n;
        if (
          !(
            r &&
            (v ||
              !(n.caseSensitive ? y : (b ??= y.toLowerCase())).startsWith(r))
          )
        ) {
          if (a) {
            if (v) continue;
            let e = t.slice(u).join(`/`).slice(-a.length);
            if ((n.caseSensitive ? e : e.toLowerCase()) !== a) continue;
          }
          s.push({
            node: n,
            index: o,
            skipped: d,
            depth: f + 1,
            statics: p,
            dynamics: m,
            optionals: h,
            extract: g,
            rawParams: _,
          });
        }
      }
    if (i.optional) {
      let e = d | (1 << f),
        t = f + 1;
      for (let n = i.optional.length - 1; n >= 0; n--) {
        let r = i.optional[n];
        s.push({
          node: r,
          index: u,
          skipped: e,
          depth: t,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
      if (!v)
        for (let e = i.optional.length - 1; e >= 0; e--) {
          let n = i.optional[e],
            { prefix: r, suffix: a } = n;
          if (r || a) {
            let e = n.caseSensitive ? y : (b ??= y.toLowerCase());
            if ((r && !e.startsWith(r)) || (a && !e.endsWith(a))) continue;
          }
          s.push({
            node: n,
            index: u + 1,
            skipped: d,
            depth: t,
            statics: p,
            dynamics: m,
            optionals: h + Ge(o, u),
            extract: g,
            rawParams: _,
          });
        }
    }
    if (!v && i.dynamic && y)
      for (let e = i.dynamic.length - 1; e >= 0; e--) {
        let t = i.dynamic[e],
          { prefix: n, suffix: r } = t;
        if (n || r) {
          let e = t.caseSensitive ? y : (b ??= y.toLowerCase());
          if ((n && !e.startsWith(n)) || (r && !e.endsWith(r))) continue;
        }
        s.push({
          node: t,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m + Ge(o, u),
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    if (!v && i.staticInsensitive) {
      let e = i.staticInsensitive.get((b ??= y.toLowerCase()));
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + Ge(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (!v && i.static) {
      let e = i.static.get(y);
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + Ge(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (i.pathless) {
      let e = f + 1;
      for (let t = i.pathless.length - 1; t >= 0; t--) {
        let n = i.pathless[t];
        s.push({
          node: n,
          index: u,
          skipped: d,
          depth: e,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    }
  }
  if (l) return l;
  if (r && c) {
    let n = c.index;
    for (let e = 0; e < c.index; e++) n += t[e].length;
    let r = n === e.length ? `/` : e.slice(n);
    return (
      (c.rawParams ??= Object.create(null)),
      (c.rawParams[`**`] = decodeURIComponent(r)),
      c
    );
  }
  return null;
}
function Ge(e, t) {
  return 2 ** (e - t - 1);
}
function Ke(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function qe(e, t, n) {
  let r, i;
  try {
    [r, i] = Ve(e, t, n);
  } catch {
    return null;
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0;
  try {
    if (n.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function Je(e, t) {
  return e
    ? t.statics > e.statics ||
        (t.statics === e.statics &&
          (t.dynamics > e.dynamics ||
            (t.dynamics === e.dynamics &&
              (t.optionals > e.optionals ||
                (t.optionals === e.optionals &&
                  ((t.node.kind === Te) > (e.node.kind === Te) ||
                    ((t.node.kind === Te) == (e.node.kind === Te) &&
                      t.depth > e.depth)))))))
    : !0;
}
function Ye(e) {
  return Xe(e.filter((e) => e !== void 0).join(`/`));
}
function Xe(e) {
  return e.replace(/\/{2,}/g, `/`);
}
function Ze(e) {
  return e === `/` ? e : e.replace(/^\/{1,}/, ``);
}
function Qe(e) {
  let t = e.length;
  return t > 1 && e[t - 1] === `/` ? e.replace(/\/{1,}$/, ``) : e;
}
function $e(e) {
  return Qe(Ze(e));
}
function et(e, t) {
  return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e;
}
function tt(e, t, n) {
  return et(e, n) === et(t, n);
}
function nt({ base: e, to: t, trailingSlash: n = `never`, cache: r }) {
  let i = t.startsWith(`/`),
    a = !i && t === `.`,
    o;
  if (r) {
    o = i ? t : a ? e : e + `\0` + t;
    let n = r.get(o);
    if (n) return n;
  }
  let s;
  if (a) s = e.split(`/`);
  else if (i) s = t.split(`/`);
  else {
    for (s = e.split(`/`); s.length > 1 && S(s) === ``; ) s.pop();
    let n = t.split(`/`);
    for (let e = 0, t = n.length; e < t; e++) {
      let r = n[e];
      r === ``
        ? e
          ? e === t - 1 && s.push(r)
          : (s = [r])
        : r === `..`
          ? s.pop()
          : r === `.` || s.push(r);
    }
  }
  s.length > 1 &&
    (S(s) === `` ? n === `never` && s.pop() : n === `always` && s.push(``));
  let c = Xe(s.join(`/`)) || `/`;
  return (o && r && r.set(o, c), c);
}
function rt(e) {
  let t = new Map(e.map((e) => [encodeURIComponent(e), e])),
    n = Array.from(t.keys())
      .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`))
      .join(`|`),
    r = new RegExp(n, `g`);
  return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function it(e, t, n) {
  let r = t[e];
  return typeof r == `string`
    ? e === `_splat`
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(r)
        ? r
        : r
            .split(`/`)
            .map((e) => ot(e, n))
            .join(`/`)
      : ot(r, n)
    : r;
}
function at({ path: e, params: t, decoder: n, ...r }) {
  let i = !1,
    a = Object.create(null);
  if (!e || e === `/`)
    return { interpolatedPath: `/`, usedParams: a, isMissingParams: i };
  if (!e.includes(`$`))
    return { interpolatedPath: e, usedParams: a, isMissingParams: i };
  let o = e.length,
    s = 0,
    c,
    l = ``;
  for (; s < o; ) {
    let r = s;
    c = Oe(e, r, c);
    let o = c[5];
    if (((s = o + 1), r === o)) continue;
    let u = c[0];
    if (u === 0) {
      l += `/` + e.substring(r, o);
      continue;
    }
    if (u === 2) {
      let s = t._splat;
      ((a._splat = s), (a[`*`] = s));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o);
      if (!s) {
        ((i = !0), (u || d) && (l += `/` + u + d));
        continue;
      }
      let f = it(`_splat`, t, n);
      l += `/` + u + f + d;
      continue;
    }
    if (u === 1) {
      let s = e.substring(c[2], c[3]);
      (!i && !(s in t) && (i = !0), (a[s] = t[s]));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = it(s, t, n) ?? `undefined`;
      l += `/` + u + f + d;
      continue;
    }
    if (u === 3) {
      let i = e.substring(c[2], c[3]),
        s = t[i];
      if (s == null) continue;
      a[i] = s;
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = it(i, t, n) ?? ``;
      l += `/` + u + f + d;
      continue;
    }
  }
  return (
    e.endsWith(`/`) && (l += `/`),
    { usedParams: a, interpolatedPath: l || `/`, isMissingParams: i }
  );
}
function ot(e, t) {
  let n = encodeURIComponent(e);
  return t?.(n) ?? n;
}
function st(e = {}) {
  if (((e.isNotFound = !0), e.throw)) throw e;
  return e;
}
function ct(e) {
  return e?.isNotFound === !0;
}
function lt(e, t = String) {
  let n = new URLSearchParams();
  for (let r in e) {
    let i = e[r];
    i !== void 0 && n.set(r, t(i));
  }
  return n.toString();
}
function ut(e) {
  return e
    ? e === `false`
      ? !1
      : e === `true`
        ? !0
        : e * 0 == 0 && +e + `` === e
          ? +e
          : e
    : ``;
}
function dt(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null
      ? (n[e] = ut(r))
      : Array.isArray(t)
        ? t.push(ut(r))
        : (n[e] = [t, ut(r)]);
  }
  return n;
}
var ft = mt(JSON.parse),
  pt = ht(JSON.stringify, JSON.parse);
function mt(e) {
  return (t) => {
    t[0] === `?` && (t = t.substring(1));
    let n = dt(t);
    for (let t in n) {
      let r = n[t];
      if (typeof r == `string`)
        try {
          n[t] = e(r);
        } catch {}
    }
    return n;
  };
}
function ht(e, t) {
  let n = typeof t == `function`;
  function r(r) {
    if (typeof r == `object` && r)
      try {
        return e(r);
      } catch {}
    else if (n && typeof r == `string`)
      try {
        return (t(r), e(r));
      } catch {}
    return r;
  }
  return (e) => {
    let t = lt(e, r);
    return t ? `?${t}` : ``;
  };
}
var gt = `__root__`;
function _t(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == `string`)
  )
    try {
      (new URL(e.href), (e.reloadDocument = !0));
    } catch {}
  let t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  let n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function O(e) {
  return e instanceof Response && !!e.options;
}
function vt(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return _t(e);
}
var yt = (e) => {
    if (!e.rendered) return ((e.rendered = !0), e.onReady?.());
  },
  bt = (e) =>
    e.stores.matchesId
      .get()
      .some((t) => e.stores.matchStores.get(t)?.get()._forcePending),
  xt = (e, t) => !!(e.preload && !e.router.stores.matchStores.has(t)),
  St = (e, t, n = !0) => {
    let r = { ...(e.router.options.context ?? {}) },
      i = n ? t : t - 1;
    for (let t = 0; t <= i; t++) {
      let n = e.matches[t];
      if (!n) continue;
      let i = e.router.getMatch(n.id);
      i && Object.assign(r, i.__routeContext, i.__beforeLoadContext);
    }
    return r;
  },
  Ct = (e, t) => {
    if (!e.matches.length) return;
    let n = t.routeId,
      r = e.matches.findIndex((t) => t.routeId === e.router.routeTree.id),
      i = r >= 0 ? r : 0,
      a = n
        ? e.matches.findIndex((e) => e.routeId === n)
        : (e.firstBadMatchIndex ?? e.matches.length - 1);
    a < 0 && (a = i);
    for (let t = a; t >= 0; t--) {
      let n = e.matches[t];
      if (e.router.looseRoutesById[n.routeId].options.notFoundComponent)
        return t;
    }
    return n ? a : i;
  },
  wt = (e, t, n) => {
    if (!(!O(n) && !ct(n)))
      throw O(n) && n.redirectHandled && !n.options.reloadDocument
        ? n
        : (t &&
            (t._nonReactive.beforeLoadPromise?.resolve(),
            t._nonReactive.loaderPromise?.resolve(),
            (t._nonReactive.beforeLoadPromise = void 0),
            (t._nonReactive.loaderPromise = void 0),
            (t._nonReactive.error = n),
            e.updateMatch(t.id, (r) => ({
              ...r,
              status: O(n)
                ? `redirected`
                : ct(n)
                  ? `notFound`
                  : r.status === `pending`
                    ? `success`
                    : r.status,
              context: St(e, t.index),
              isFetching: !1,
              error: n,
            })),
            ct(n) && !n.routeId && (n.routeId = t.routeId),
            t._nonReactive.loadPromise?.resolve()),
          O(n) &&
            ((e.rendered = !0),
            (n.options._fromLocation = e.location),
            (n.redirectHandled = !0),
            (n = e.router.resolveRedirect(n))),
          n);
  },
  Tt = (e, t) => {
    let n = e.router.getMatch(t);
    return !!(!n || n._nonReactive.dehydrated);
  },
  Et = (e, t, n) => {
    let r = St(e, n);
    e.updateMatch(t, (e) => ({ ...e, context: r }));
  },
  Dt = (e, t, n) => {
    let { id: r, routeId: i } = e.matches[t],
      a = e.router.looseRoutesById[i];
    if (n instanceof Promise) throw n;
    ((e.firstBadMatchIndex ??= t), wt(e, e.router.getMatch(r), n));
    try {
      a.options.onError?.(n);
    } catch (t) {
      ((n = t), wt(e, e.router.getMatch(r), n));
    }
    (e.updateMatch(
      r,
      (e) => (
        e._nonReactive.beforeLoadPromise?.resolve(),
        (e._nonReactive.beforeLoadPromise = void 0),
        e._nonReactive.loadPromise?.resolve(),
        {
          ...e,
          error: n,
          status: `error`,
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      )
    ),
      !e.preload && !O(n) && !ct(n) && (e.serialError ??= n));
  },
  Ot = (e, t, n, r) => {
    if (r._nonReactive.pendingTimeout !== void 0) return;
    let i = n.options.pendingMs ?? e.router.options.defaultPendingMs;
    if (
      e.onReady &&
      !xt(e, t) &&
      (n.options.loader || n.options.beforeLoad || zt(n)) &&
      typeof i == `number` &&
      i !== 1 / 0 &&
      (n.options.pendingComponent ?? e.router.options?.defaultPendingComponent)
    ) {
      let t = setTimeout(() => {
        yt(e);
      }, i);
      r._nonReactive.pendingTimeout = t;
    }
  },
  kt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise)
      return;
    Ot(e, t, n, r);
    let i = () => {
      let n = e.router.getMatch(t);
      n.preload &&
        (n.status === `redirected` || n.status === `notFound`) &&
        wt(e, n, n.error);
    };
    return r._nonReactive.beforeLoadPromise
      ? r._nonReactive.beforeLoadPromise.then(i)
      : i();
  },
  At = (e, t, n, r) => {
    let i = e.router.getMatch(t),
      a = i._nonReactive.loadPromise;
    i._nonReactive.loadPromise = w(() => {
      (a?.resolve(), (a = void 0));
    });
    let { paramsError: o, searchError: s } = i;
    (o && Dt(e, n, o), s && Dt(e, n, s), Ot(e, t, r, i));
    let c = new AbortController(),
      l = !1,
      u = () => {
        l ||
          ((l = !0),
          e.updateMatch(t, (e) => ({
            ...e,
            isFetching: `beforeLoad`,
            fetchCount: e.fetchCount + 1,
            abortController: c,
          })));
      },
      d = () => {
        (i._nonReactive.beforeLoadPromise?.resolve(),
          (i._nonReactive.beforeLoadPromise = void 0),
          e.updateMatch(t, (e) => ({ ...e, isFetching: !1 })));
      };
    if (!r.options.beforeLoad) {
      e.router.batch(() => {
        (u(), d());
      });
      return;
    }
    i._nonReactive.beforeLoadPromise = w();
    let f = { ...St(e, n, !1), ...i.__routeContext },
      { search: p, params: m, cause: h } = i,
      g = xt(e, t),
      _ = {
        search: p,
        abortController: c,
        params: m,
        preload: g,
        context: f,
        location: e.location,
        navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
        buildLocation: e.router.buildLocation,
        cause: g ? `preload` : h,
        matches: e.matches,
        routeId: r.id,
        ...e.router.options.additionalContext,
      },
      v = (r) => {
        if (r === void 0) {
          e.router.batch(() => {
            (u(), d());
          });
          return;
        }
        ((O(r) || ct(r)) && (u(), Dt(e, n, r)),
          e.router.batch(() => {
            (u(),
              e.updateMatch(t, (e) => ({ ...e, __beforeLoadContext: r })),
              d());
          }));
      },
      y;
    try {
      if (((y = r.options.beforeLoad(_)), me(y)))
        return (
          u(),
          y
            .catch((t) => {
              Dt(e, n, t);
            })
            .then(v)
        );
    } catch (t) {
      (u(), Dt(e, n, t));
    }
    v(y);
  },
  jt = (e, t) => {
    let { id: n, routeId: r } = e.matches[t],
      i = e.router.looseRoutesById[r],
      a = () => s(),
      o = () => At(e, n, t, i),
      s = () => {
        if (Tt(e, n)) return;
        let t = kt(e, n, i);
        return me(t) ? t.then(o) : o();
      };
    return a();
  },
  Mt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r || (!n.options.head && !n.options.scripts && !n.options.headers))
      return;
    let i = {
      ssr: e.router.options.ssr,
      matches: e.matches,
      match: r,
      params: r.params,
      loaderData: r.loaderData,
    };
    return Promise.all([
      n.options.head?.(i),
      n.options.scripts?.(i),
      n.options.headers?.(i),
    ]).then(([e, t, n]) => ({
      meta: e?.meta,
      links: e?.links,
      headScripts: e?.scripts,
      headers: n,
      scripts: t,
      styles: e?.styles,
    }));
  },
  Nt = (e, t, n, r, i) => {
    let a = t[r - 1],
      {
        params: o,
        loaderDeps: s,
        abortController: c,
        cause: l,
      } = e.router.getMatch(n),
      u = St(e, r),
      d = xt(e, n);
    return {
      params: o,
      deps: s,
      preload: !!d,
      parentMatchPromise: a,
      abortController: c,
      context: u,
      location: e.location,
      navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
      cause: d ? `preload` : l,
      route: i,
      ...e.router.options.additionalContext,
    };
  },
  Pt = async (e, t, n, r, i) => {
    try {
      let a = e.router.getMatch(n);
      try {
        Rt(i);
        let o = i.options.loader,
          s = typeof o == `function` ? o : o?.handler,
          c = s?.(Nt(e, t, n, r, i)),
          l = !!s && me(c);
        if (
          ((l ||
            i._lazyPromise ||
            i._componentsPromise ||
            i.options.head ||
            i.options.scripts ||
            i.options.headers ||
            a._nonReactive.minPendingPromise) &&
            e.updateMatch(n, (e) => ({ ...e, isFetching: `loader` })),
          s)
        ) {
          let t = l ? await c : c;
          (wt(e, e.router.getMatch(n), t),
            t !== void 0 && e.updateMatch(n, (e) => ({ ...e, loaderData: t })));
        }
        i._lazyPromise && (await i._lazyPromise);
        let u = a._nonReactive.minPendingPromise;
        (u && (await u),
          i._componentsPromise && (await i._componentsPromise),
          e.updateMatch(n, (t) => ({
            ...t,
            error: void 0,
            context: St(e, r),
            status: `success`,
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (t) {
        let o = t;
        if (o?.name === `AbortError`) {
          if (a.abortController.signal.aborted) {
            (a._nonReactive.loaderPromise?.resolve(),
              (a._nonReactive.loaderPromise = void 0));
            return;
          }
          e.updateMatch(n, (t) => ({
            ...t,
            status: t.status === `pending` ? `success` : t.status,
            isFetching: !1,
            context: St(e, r),
          }));
          return;
        }
        let s = a._nonReactive.minPendingPromise;
        (s && (await s),
          ct(t) && (await i.options.notFoundComponent?.preload?.()),
          wt(e, e.router.getMatch(n), t));
        try {
          i.options.onError?.(t);
        } catch (t) {
          ((o = t), wt(e, e.router.getMatch(n), t));
        }
        (!O(o) && !ct(o) && (await Rt(i, [`errorComponent`])),
          e.updateMatch(n, (t) => ({
            ...t,
            error: o,
            context: St(e, r),
            status: `error`,
            isFetching: !1,
          })));
      }
    } catch (t) {
      let r = e.router.getMatch(n);
      (r && (r._nonReactive.loaderPromise = void 0), wt(e, r, t));
    }
  },
  Ft = async (e, t, n) => {
    async function r(r, a, c, l, d) {
      let f = Date.now() - a.updatedAt,
        p = r
          ? (d.options.preloadStaleTime ??
            e.router.options.defaultPreloadStaleTime ??
            3e4)
          : (d.options.staleTime ?? e.router.options.defaultStaleTime ?? 0),
        m = d.options.shouldReload,
        h = typeof m == `function` ? m(Nt(e, t, i, n, d)) : m,
        { status: g, invalid: _ } = l,
        v =
          f >= p &&
          (!!e.forceStaleReload ||
            l.cause === `enter` ||
            (c !== void 0 && c !== l.id));
      ((o = g === `success` && (_ || (h ?? v))),
        (r && d.options.preload === !1) ||
          (o && !e.sync && u
            ? ((s = !0),
              (async () => {
                try {
                  await Pt(e, t, i, n, d);
                  let r = e.router.getMatch(i);
                  (r._nonReactive.loaderPromise?.resolve(),
                    r._nonReactive.loadPromise?.resolve(),
                    (r._nonReactive.loaderPromise = void 0),
                    (r._nonReactive.loadPromise = void 0));
                } catch (t) {
                  O(t) && (await e.router.navigate(t.options));
                }
              })())
            : g !== `success` || o
              ? await Pt(e, t, i, n, d)
              : Et(e, i, n)));
    }
    let { id: i, routeId: a } = e.matches[n],
      o = !1,
      s = !1,
      c = e.router.looseRoutesById[a],
      l = c.options.loader,
      u =
        ((typeof l == `function` ? void 0 : l?.staleReloadMode) ??
          e.router.options.defaultStaleReloadMode) !== `blocking`;
    if (Tt(e, i)) {
      if (!e.router.getMatch(i)) return e.matches[n];
      Et(e, i, n);
    } else {
      let t = e.router.getMatch(i),
        o = e.router.stores.matchesId.get()[n],
        s =
          ((o && e.router.stores.matchStores.get(o)) || null)?.routeId === a
            ? o
            : e.router.stores.matches.get().find((e) => e.routeId === a)?.id,
        l = xt(e, i);
      if (t._nonReactive.loaderPromise) {
        if (t.status === `success` && !e.sync && !t.preload && u) return t;
        await t._nonReactive.loaderPromise;
        let n = e.router.getMatch(i),
          a = n._nonReactive.error || n.error;
        (a && wt(e, n, a), n.status === `pending` && (await r(l, t, s, n, c)));
      } else {
        let n = l && !e.router.stores.matchStores.has(i),
          a = e.router.getMatch(i);
        ((a._nonReactive.loaderPromise = w()),
          n !== a.preload && e.updateMatch(i, (e) => ({ ...e, preload: n })),
          await r(l, t, s, a, c));
      }
    }
    let d = e.router.getMatch(i);
    (s ||
      (d._nonReactive.loaderPromise?.resolve(),
      d._nonReactive.loadPromise?.resolve(),
      (d._nonReactive.loadPromise = void 0)),
      clearTimeout(d._nonReactive.pendingTimeout),
      (d._nonReactive.pendingTimeout = void 0),
      s || (d._nonReactive.loaderPromise = void 0),
      (d._nonReactive.dehydrated = void 0));
    let f = s ? d.isFetching : !1;
    return f !== d.isFetching || d.invalid !== !1
      ? (e.updateMatch(i, (e) => ({ ...e, isFetching: f, invalid: !1 })),
        e.router.getMatch(i))
      : d;
  };
async function It(e) {
  let t = e,
    n = [];
  bt(t.router) && yt(t);
  let r;
  for (let e = 0; e < t.matches.length; e++) {
    try {
      let n = jt(t, e);
      me(n) && (await n);
    } catch (e) {
      if (O(e)) throw e;
      if (ct(e)) r = e;
      else if (!t.preload) throw e;
      break;
    }
    if (t.serialError || t.firstBadMatchIndex != null) break;
  }
  let i = t.firstBadMatchIndex ?? t.matches.length,
    a = r && !t.preload ? Ct(t, r) : void 0,
    o = r && t.preload ? 0 : a === void 0 ? i : Math.min(a + 1, i),
    s,
    c;
  for (let e = 0; e < o; e++) n.push(Ft(t, n, e));
  try {
    await Promise.all(n);
  } catch {
    let e = await Promise.allSettled(n);
    for (let t of e) {
      if (t.status !== `rejected`) continue;
      let e = t.reason;
      if (O(e)) throw e;
      ct(e) ? (s ??= e) : (c ??= e);
    }
    if (c !== void 0) throw c;
  }
  let l = s ?? (r && !t.preload ? r : void 0),
    u =
      t.firstBadMatchIndex === void 0
        ? t.matches.length - 1
        : t.firstBadMatchIndex;
  if (!l && r && t.preload) return t.matches;
  if (l) {
    let e = Ct(t, l);
    e === void 0 && Ce();
    let n = t.matches[e],
      r = t.router.looseRoutesById[n.routeId],
      i = t.router.options?.defaultNotFoundComponent;
    (!r.options.notFoundComponent && i && (r.options.notFoundComponent = i),
      (l.routeId = n.routeId));
    let a = n.routeId === t.router.routeTree.id;
    (t.updateMatch(n.id, (e) => ({
      ...e,
      ...(a
        ? { status: `success`, globalNotFound: !0, error: void 0 }
        : { status: `notFound`, error: l }),
      isFetching: !1,
    })),
      (u = e),
      await Rt(r, [`notFoundComponent`]));
  } else if (!t.preload) {
    let e = t.matches[0];
    e.globalNotFound ||
      (t.router.getMatch(e.id)?.globalNotFound &&
        t.updateMatch(e.id, (e) => ({
          ...e,
          globalNotFound: !1,
          error: void 0,
        })));
  }
  if (t.serialError && t.firstBadMatchIndex !== void 0) {
    let e = t.router.looseRoutesById[t.matches[t.firstBadMatchIndex].routeId];
    await Rt(e, [`errorComponent`]);
  }
  for (let e = 0; e <= u; e++) {
    let { id: n, routeId: r } = t.matches[e],
      i = t.router.looseRoutesById[r];
    try {
      let e = Mt(t, n, i);
      if (e) {
        let r = await e;
        t.updateMatch(n, (e) => ({ ...e, ...r }));
      }
    } catch (e) {
      console.error(`Error executing head for route ${r}:`, e);
    }
  }
  let d = yt(t);
  if ((me(d) && (await d), l)) throw l;
  if (t.serialError && !t.preload && !t.onReady) throw t.serialError;
  return t.matches;
}
function Lt(e, t) {
  let n = t.map((t) => e.options[t]?.preload?.()).filter(Boolean);
  if (n.length !== 0) return Promise.all(n);
}
function Rt(e, t = Bt) {
  !e._lazyLoaded &&
    e._lazyPromise === void 0 &&
    (e.lazyFn
      ? (e._lazyPromise = e.lazyFn().then((t) => {
          let { id: n, ...r } = t.options;
          (Object.assign(e.options, r),
            (e._lazyLoaded = !0),
            (e._lazyPromise = void 0));
        }))
      : (e._lazyLoaded = !0));
  let n = () =>
    e._componentsLoaded
      ? void 0
      : t === Bt
        ? (() => {
            if (e._componentsPromise === void 0) {
              let t = Lt(e, Bt);
              t
                ? (e._componentsPromise = t.then(() => {
                    ((e._componentsLoaded = !0),
                      (e._componentsPromise = void 0));
                  }))
                : (e._componentsLoaded = !0);
            }
            return e._componentsPromise;
          })()
        : Lt(e, t);
  return e._lazyPromise ? e._lazyPromise.then(n) : n();
}
function zt(e) {
  for (let t of Bt) if (e.options[t]?.preload) return !0;
  return !1;
}
var Bt = [
  `component`,
  `errorComponent`,
  `pendingComponent`,
  `notFoundComponent`,
];
function Vt(e) {
  return {
    input: ({ url: t }) => {
      for (let n of e) t = Ut(n, t);
      return t;
    },
    output: ({ url: t }) => {
      for (let n = e.length - 1; n >= 0; n--) t = Wt(e[n], t);
      return t;
    },
  };
}
function Ht(e) {
  let t = $e(e.basepath),
    n = `/${t}`,
    r = e.caseSensitive ? n : n.toLowerCase(),
    i = `${r}/`;
  return {
    input: ({ url: t }) => {
      let a = e.caseSensitive ? t.pathname : t.pathname.toLowerCase();
      return (
        a === r
          ? (t.pathname = `/`)
          : a.startsWith(i) && (t.pathname = t.pathname.slice(n.length)),
        t
      );
    },
    output: ({ url: e }) => ((e.pathname = Ye([`/`, t, e.pathname])), e),
  };
}
function Ut(e, t) {
  let n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Wt(e, t) {
  let n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Gt(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i, init: a } = t,
    o = new Map(),
    s = new Map(),
    c = new Map(),
    l = n(e.status),
    u = n(e.loadedAt),
    d = n(e.isLoading),
    f = n(e.isTransitioning),
    p = n(e.location),
    m = n(e.resolvedLocation),
    h = n(e.statusCode),
    g = n(e.redirect),
    _ = n([]),
    v = n([]),
    y = n([]),
    b = r(() => Kt(o, _.get())),
    x = r(() => Kt(s, v.get())),
    ee = r(() => Kt(c, y.get())),
    S = r(() => _.get()[0]),
    te = r(() => _.get().some((e) => o.get(e)?.get().status === `pending`)),
    ne = r(() => ({
      locationHref: p.get().href,
      resolvedLocationHref: m.get()?.href,
      status: l.get(),
    })),
    re = r(() => ({
      status: l.get(),
      loadedAt: u.get(),
      isLoading: d.get(),
      isTransitioning: f.get(),
      matches: b.get(),
      location: p.get(),
      resolvedLocation: m.get(),
      statusCode: h.get(),
      redirect: g.get(),
    })),
    ie = we(64);
  function ae(e) {
    let t = ie.get(e);
    return (
      t ||
        ((t = r(() => {
          let t = _.get();
          for (let n of t) {
            let t = o.get(n);
            if (t && t.routeId === e) return t.get();
          }
        })),
        ie.set(e, t)),
      t
    );
  }
  let oe = {
    status: l,
    loadedAt: u,
    isLoading: d,
    isTransitioning: f,
    location: p,
    resolvedLocation: m,
    statusCode: h,
    redirect: g,
    matchesId: _,
    pendingIds: v,
    cachedIds: y,
    matches: b,
    pendingMatches: x,
    cachedMatches: ee,
    firstId: S,
    hasPending: te,
    matchRouteDeps: ne,
    matchStores: o,
    pendingMatchStores: s,
    cachedMatchStores: c,
    __store: re,
    getRouteMatchStore: ae,
    setMatches: se,
    setPending: ce,
    setCached: le,
  };
  (se(e.matches), a?.(oe));
  function se(e) {
    qt(e, o, _, n, i);
  }
  function ce(e) {
    qt(e, s, v, n, i);
  }
  function le(e) {
    qt(e, c, y, n, i);
  }
  return oe;
}
function Kt(e, t) {
  let n = [];
  for (let r of t) {
    let t = e.get(r);
    t && n.push(t.get());
  }
  return n;
}
function qt(e, t, n, r, i) {
  let a = e.map((e) => e.id),
    o = new Set(a);
  i(() => {
    for (let e of t.keys()) o.has(e) || t.delete(e);
    for (let n of e) {
      let e = t.get(n.id);
      if (!e) {
        let e = r(n);
        ((e.routeId = n.routeId), t.set(n.id, e));
        continue;
      }
      ((e.routeId = n.routeId), e.get() !== n && e.set(n));
    }
    Se(n.get(), a) || n.set(a);
  });
}
var Jt = `__TSR_index`,
  Yt = `popstate`,
  Xt = `beforeunload`;
function Zt(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      ((t = e.getLocation()), n.forEach((e) => e({ location: t, action: r })));
    },
    i = (n) => {
      (e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = tn(i.path, i.state);
          if (
            await n.blockerFn({
              currentLocation: t,
              nextLocation: r,
              action: i.type,
            })
          ) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      let s = t.state[Jt];
      ((i = Qt(s + 1, i)),
        a({
          task: () => {
            (e.pushState(n, i), r({ type: `PUSH` }));
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        }));
    },
    replace: (n, i, o) => {
      let s = t.state[Jt];
      ((i = Qt(s, i)),
        a({
          task: () => {
            (e.replaceState(n, i), r({ type: `REPLACE` }));
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        }));
    },
    go: (t, n) => {
      a({
        task: () => {
          (e.go(t), i({ type: `GO`, index: t }));
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          (e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` }));
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          (e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` }));
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[Jt] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      let n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
  };
}
function Qt(e, t) {
  t ||= {};
  let n = nn();
  return { ...t, key: n, __TSR_key: n, [Jt]: e };
}
function $t(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = e?.createHref ?? ((e) => e),
    c =
      e?.parseLocation ??
      (() =>
        tn(
          `${t.location.pathname}${t.location.search}${t.location.hash}`,
          t.history.state
        ));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = nn();
    t.history.replaceState({ [Jt]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _,
    v = () => {
      g &&
        ((S._ignoreSubscribers = !0),
        (g.isPush ? t.history.pushState : t.history.replaceState)(
          g.state,
          ``,
          g.href
        ),
        (S._ignoreSubscribers = !1),
        (g = void 0),
        (_ = void 0),
        (u = void 0));
    },
    y = (e, t, n) => {
      let r = s(t);
      (_ || (u = l),
        (l = tn(t, n)),
        (g = { href: r, state: n, isPush: g?.isPush || e === `push` }),
        (_ ||= Promise.resolve().then(() => v())));
    },
    b = (e) => {
      ((l = c()), S.notify({ type: e }));
    },
    x = async () => {
      if (f) {
        f = !1;
        return;
      }
      let e = c(),
        n = e.state[Jt] - l.state[Jt],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        let n = a();
        if (typeof document < `u` && n.length) {
          for (let r of n)
            if (
              await r.blockerFn({
                currentLocation: l,
                nextLocation: e,
                action: s,
              })
            ) {
              ((f = !0), t.history.go(1), S.notify(u));
              return;
            }
        }
      }
      ((l = c()), S.notify(u));
    },
    ee = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return (e.preventDefault(), (e.returnValue = ``));
    },
    S = Zt({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => y(`push`, e, t),
      replaceState: (e, t) => y(`replace`, e, t),
      back: (e) => (e && (p = !0), (m = !0), t.history.back()),
      forward: (e) => {
        (e && (p = !0), (m = !0), t.history.forward());
      },
      go: (e) => {
        ((d = !0), t.history.go(e));
      },
      createHref: (e) => s(e),
      flush: v,
      destroy: () => {
        ((t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Xt, ee, { capture: !0 }),
          t.removeEventListener(Yt, x));
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(Xt, ee, { capture: !0 }),
    t.addEventListener(Yt, x),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e);
      return (S._ignoreSubscribers || b(`PUSH`), r);
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e);
      return (S._ignoreSubscribers || b(`REPLACE`), n);
    }),
    S
  );
}
function en(e) {
  let t = e.replace(/[\x00-\x1f\x7f]/g, ``);
  return (t.startsWith(`//`) && (t = `/` + t.replace(/^\/+/, ``)), t);
}
function tn(e, t) {
  let n = en(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`),
    a = nn();
  return {
    href: n,
    pathname: n.substring(
      0,
      r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length
    ),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t || { [Jt]: 0, key: a, __TSR_key: a },
  };
}
function nn() {
  return (Math.random() + 1).toString(36).substring(7);
}
function rn(e) {
  return e instanceof Error
    ? { name: e.name, message: e.message }
    : { data: e };
}
function an(e, t) {
  let n = t,
    r = e;
  return {
    fromLocation: n,
    toLocation: r,
    pathChanged: n?.pathname !== r.pathname,
    hrefChanged: n?.href !== r.href,
    hashChanged: n?.hash !== r.hash,
  };
}
var on = new WeakMap(),
  sn = class {
    constructor(e, t) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this.resetNextScroll = !0),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.isScrollRestoring = !1),
        (this.isScrollRestorationSetup = !1),
        (this.routeBranchCache = new WeakMap()),
        (this.startTransition = (e) => e()),
        (this.update = (e) => {
          let t = this.options,
            n = this.basepath ?? t?.basepath ?? `/`,
            r = this.basepath === void 0,
            i = t?.rewrite;
          if (
            ((this.options = { ...t, ...e }),
            (this.isServer = this.options.isServer ?? typeof document > `u`),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = rt(
                this.options.pathParamsAllowedCharacters
              )),
            (!this.history ||
              (this.options.history &&
                this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = $t())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== `null`
                ? (this.origin = window.origin)
                : (this.origin = `http://localhost`)),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let e;
            ((this.resolvePathCache = we(1e3)),
              (e = this.buildRouteTree()),
              this.setRoutes(e));
          }
          if (!this.stores && this.latestLocation) {
            let e = this.getStoreConfig(this);
            ((this.batch = e.batch),
              (this.stores = Gt(un(this.latestLocation), e)),
              An(this));
          }
          let a = !1,
            o = this.options.basepath ?? `/`,
            s = this.options.rewrite;
          if (r || n !== o || i !== s) {
            this.basepath = o;
            let e = [],
              t = $e(o);
            (t && t !== `/` && e.push(Ht({ basepath: o })),
              s && e.push(s),
              (this.rewrite =
                e.length === 0 ? void 0 : e.length === 1 ? e[0] : Vt(e)),
              this.history && this.updateLatestLocation(),
              (a = !0));
          }
          (a && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < `u` &&
              `CSS` in window &&
              typeof window.CSS?.supports == `function` &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                `selector(:active-view-transition-type(a))`
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(
            this.history.location,
            this.latestLocation
          );
        }),
        (this.buildRouteTree = () => {
          let e = ze(this.routeTree, this.options.caseSensitive, (e, t) => {
            e.init({ originalIndex: t });
          });
          return (
            this.options.routeMasks &&
              Pe(this.options.routeMasks, e.processedTree),
            e
          );
        }),
        (this.subscribe = (e, t) => {
          let n = { eventType: e, fn: t };
          return (
            this.subscribers.add(n),
            () => {
              this.subscribers.delete(n);
            }
          );
        }),
        (this.emit = (e) => {
          this.subscribers.forEach((t) => {
            t.eventType === e.type && t.fn(e);
          });
        }),
        (this.parseLocation = (e, t) => {
          let n = ({ pathname: e, search: n, hash: r, href: i, state: a }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
                let i = this.options.parseSearch(n),
                  o = this.options.stringifySearch(i);
                return {
                  href: e + o + r,
                  publicHref: e + o + r,
                  pathname: be(e).path,
                  external: !1,
                  searchStr: o,
                  search: se(t?.search, i),
                  hash: be(r.slice(1)).path,
                  state: ce(t?.state, a),
                };
              }
              let o = new URL(i, this.origin),
                s = Ut(this.rewrite, o),
                c = this.options.parseSearch(s.search),
                l = this.options.stringifySearch(c);
              return (
                (s.search = l),
                {
                  href: s.href.replace(s.origin, ``),
                  publicHref: i,
                  pathname: be(s.pathname).path,
                  external: !!this.rewrite && s.origin !== this.origin,
                  searchStr: l,
                  search: se(t?.search, c),
                  hash: be(s.hash.slice(1)).path,
                  state: ce(t?.state, a),
                }
              );
            },
            r = n(e),
            { __tempLocation: i, __tempKey: a } = r.state;
          if (i && (!a || a === this.tempLocationKey)) {
            let e = n(i);
            return (
              (e.state.key = r.state.key),
              (e.state.__TSR_key = r.state.__TSR_key),
              delete e.state.__tempLocation,
              { ...e, maskedLocation: r }
            );
          }
          return r;
        }),
        (this.resolvePathWithBase = (e, t) =>
          nt({
            base: e,
            to: t.includes(`//`) ? Xe(t) : t,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (e, t, n) =>
          typeof e == `string`
            ? this.matchRoutesInternal({ pathname: e, search: t }, n)
            : this.matchRoutesInternal(e, t)),
        (this.getMatchedRoutes = (e) =>
          fn({
            pathname: e,
            routesById: this.routesById,
            processedTree: this.processedTree,
          })),
        (this.cancelMatch = (e) => {
          let t = this.getMatch(e);
          t &&
            (t.abortController.abort(),
            clearTimeout(t._nonReactive.pendingTimeout),
            (t._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((e) => {
            this.cancelMatch(e);
          }),
            this.stores.matchesId.get().forEach((e) => {
              if (this.stores.pendingMatchStores.has(e)) return;
              let t = this.stores.matchStores.get(e)?.get();
              t &&
                (t.status === `pending` || t.isFetching === `loader`) &&
                this.cancelMatch(e);
            }));
        }),
        (this.buildLocation = (e) => {
          let t = (t = {}) => {
              let n =
                  t._fromLocation ||
                  this.pendingBuiltLocation ||
                  this.latestLocation,
                r = this.matchRoutesLightweight(n);
              t.from;
              let i =
                  t.unsafeRelative === `path`
                    ? n.pathname
                    : (t.from ?? r.fullPath),
                a = t.to ? `${t.to}` : void 0,
                o = r.search,
                s = Object.assign(Object.create(null), r.params),
                c =
                  a?.charCodeAt(0) === 47
                    ? `/`
                    : this.resolvePathWithBase(i, `.`),
                l = a ? this.resolvePathWithBase(c, a) : c,
                u =
                  t.params === !1 || t.params === null
                    ? Object.create(null)
                    : (t.params ?? !0) === !0
                      ? s
                      : Object.assign(s, ne(t.params, s)),
                d = this.routesByPath[Qe(l)],
                f;
              if (d) f = this.getRouteBranch(d);
              else if (l.includes(`$`)) f = [];
              else {
                let e = this.getMatchedRoutes(l);
                ((f = e.matchedRoutes),
                  this.options.notFoundRoute &&
                    (!e.foundRoute ||
                      (e.foundRoute.path !== `/` && e.routeParams[`**`])) &&
                    (f = [...f, this.options.notFoundRoute]));
              }
              if (f.length && ae(u))
                for (let e of f) {
                  let t =
                    e.options.params?.stringify ?? e.options.stringifyParams;
                  if (t)
                    try {
                      Object.assign(u, t(u));
                    } catch {}
                }
              let p = e.leaveParams
                  ? l
                  : be(
                      at({
                        path: l,
                        params: u,
                        decoder: this.pathParamsDecoder,
                        server: this.isServer,
                      }).interpolatedPath
                    ).path,
                m = o;
              if (e._includeValidateSearch && this.options.search?.strict) {
                let e = {};
                (f.forEach((t) => {
                  if (t.options.validateSearch)
                    try {
                      Object.assign(
                        e,
                        dn(t.options.validateSearch, { ...e, ...m })
                      );
                    } catch {}
                }),
                  (m = e));
              }
              ((m = pn({
                search: m,
                dest: t,
                destRoutes: f,
                _includeValidateSearch: e._includeValidateSearch,
              })),
                (m = se(o, m)));
              let h = this.options.stringifySearch(m),
                g =
                  t.hash === !0 ? n.hash : t.hash ? ne(t.hash, n.hash) : void 0,
                _ = g ? `#${g}` : ``,
                v =
                  t.state === !0
                    ? n.state
                    : t.state
                      ? ne(t.state, n.state)
                      : {};
              v = ce(n.state, v);
              let y = `${p}${h}${_}`,
                b,
                x,
                ee = !1;
              if (this.rewrite) {
                let e = new URL(y, this.origin),
                  t = Wt(this.rewrite, e);
                ((b = e.href.replace(e.origin, ``)),
                  t.origin === this.origin
                    ? (x = t.pathname + t.search + t.hash)
                    : ((x = t.href), (ee = !0)));
              } else ((b = xe(y)), (x = b));
              return {
                publicHref: x,
                href: b,
                pathname: p,
                search: m,
                searchStr: h,
                state: v,
                hash: g ?? ``,
                external: ee,
                unmaskOnReload: t.unmaskOnReload,
              };
            },
            n = (n = {}, r) => {
              let i = t(n),
                a = r ? t(r) : void 0;
              if (!a) {
                let n = Object.create(null);
                if (this.options.routeMasks) {
                  let o = Fe(i.pathname, this.processedTree);
                  if (o) {
                    Object.assign(n, o.rawParams);
                    let { from: i, params: s, ...c } = o.route,
                      l =
                        s === !1 || s === null
                          ? Object.create(null)
                          : (s ?? !0) === !0
                            ? n
                            : Object.assign(n, ne(s, n));
                    ((r = { from: e.from, ...c, params: l }), (a = t(r)));
                  }
                }
              }
              return (a && (i.maskedLocation = a), i);
            };
          return e.mask ? n(e, { from: e.from, ...e.mask }) : n(e);
        }),
        (this.commitLocation = async ({
          viewTransition: e,
          ignoreBlocker: t,
          ...n
        }) => {
          let r,
            i = () => {
              let e = [
                `key`,
                `__TSR_key`,
                `__TSR_index`,
                `__hashScrollIntoViewOptions`,
              ];
              e.forEach((e) => {
                n.state[e] = this.latestLocation.state[e];
              });
              let t = C(n.state, this.latestLocation.state);
              return (
                e.forEach((e) => {
                  delete n.state[e];
                }),
                t
              );
            },
            a = Qe(this.latestLocation.href) === Qe(n.href),
            o = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = w(() => {
              (o?.resolve(), (o = void 0));
            })),
            a && i())
          )
            this.load();
          else {
            let { maskedLocation: i, hashScrollIntoView: a, ...o } = n;
            (i &&
              ((o = {
                ...i,
                state: {
                  ...i.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...o,
                    search: o.searchStr,
                    state: {
                      ...o.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (o.state.__tempKey = this.tempLocationKey)),
              (o.state.__hashScrollIntoViewOptions =
                a ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = e),
              (r = n.replace ? `REPLACE` : `PUSH`),
              this.history[r === `REPLACE` ? `replace` : `push`](
                o.publicHref,
                o.state,
                { ignoreBlocker: t }
              ));
          }
          return (
            (this.resetNextScroll = n.resetScroll ?? !0),
            this.history.subscribers.size ||
              this.load(r ? { action: { type: r } } : void 0),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          viewTransition: r,
          ignoreBlocker: i,
          href: a,
          ...o
        } = {}) => {
          if (a) {
            let t = this.history.location.state.__TSR_index,
              n = tn(a, { __TSR_index: e ? t : t + 1 }),
              r = new URL(n.pathname, this.origin);
            ((o.to = Ut(this.rewrite, r).pathname),
              (o.search = this.options.parseSearch(n.search)),
              (o.hash = n.hash.slice(1)));
          }
          let s = this.buildLocation({ ...o, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = s;
          let c = this.commitLocation({
            ...s,
            viewTransition: r,
            replace: e,
            resetScroll: t,
            hashScrollIntoView: n,
            ignoreBlocker: i,
          });
          return (
            Promise.resolve().then(() => {
              this.pendingBuiltLocation === s &&
                (this.pendingBuiltLocation = void 0);
            }),
            c
          );
        }),
        (this.navigate = async ({
          to: e,
          reloadDocument: t,
          href: n,
          publicHref: r,
          ...i
        }) => {
          let a = !1;
          if (n)
            try {
              (new URL(`${n}`), (a = !0));
            } catch {}
          if ((a && !t && (t = !0), t)) {
            if (e !== void 0 || !n) {
              let t = this.buildLocation({ to: e, ...i });
              ((n ??= t.publicHref), (r ??= t.publicHref));
            }
            let t = !a && r ? r : n;
            if (E(t, this.protocolAllowlist)) return Promise.resolve();
            if (!i.ignoreBlocker) {
              let e = this.history.getBlockers?.() ?? [];
              for (let t of e)
                if (
                  t?.blockerFn &&
                  (await t.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: `PUSH`,
                  }))
                )
                  return Promise.resolve();
            }
            return (
              i.replace
                ? window.location.replace(t)
                : (window.location.href = t),
              Promise.resolve()
            );
          }
          return this.buildAndCommitLocation({
            ...i,
            href: n,
            to: e,
            _isNavigate: !0,
          });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          let e = this.matchRoutes(this.latestLocation),
            t = this.stores.cachedMatches
              .get()
              .filter((t) => !e.some((e) => e.id === t.id));
          this.batch(() => {
            (this.stores.status.set(`pending`),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(e),
              this.stores.setCached(t));
          });
        }),
        (this.load = async (e) => {
          let t = e?.action?.type,
            n,
            r,
            i,
            a =
              this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            i = new Promise((o) => {
              this.startTransition(async () => {
                try {
                  (this.beforeLoad(),
                    t
                      ? on.set(this.latestLocation, t)
                      : on.delete(this.latestLocation));
                  let n = this.latestLocation,
                    r = an(n, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() ||
                    this.emit({ type: `onBeforeNavigate`, ...r }),
                    this.emit({ type: `onBeforeLoad`, ...r }),
                    await It({
                      router: this,
                      sync: e?.sync,
                      forceStaleReload: a.href === n.href,
                      matches: this.stores.pendingMatches.get(),
                      location: n,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let e = null,
                              t = null,
                              n = null,
                              r = null;
                            this.batch(() => {
                              let i = this.stores.pendingMatches.get(),
                                a = i.length,
                                o = this.stores.matches.get();
                              e = a
                                ? o.filter(
                                    (e) =>
                                      !this.stores.pendingMatchStores.has(e.id)
                                  )
                                : null;
                              let s = new Set();
                              for (let e of this.stores.pendingMatchStores.values())
                                e.routeId && s.add(e.routeId);
                              let c = new Set();
                              for (let e of this.stores.matchStores.values())
                                e.routeId && c.add(e.routeId);
                              ((t = a
                                ? o.filter((e) => !s.has(e.routeId))
                                : null),
                                (n = a
                                  ? i.filter((e) => !c.has(e.routeId))
                                  : null),
                                (r = a ? i.filter((e) => c.has(e.routeId)) : o),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                a &&
                                  (this.stores.setMatches(i),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...e.filter(
                                      (e) =>
                                        e.status !== `error` &&
                                        e.status !== `notFound` &&
                                        e.status !== `redirected`
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (let [e, i] of [
                              [t, `onLeave`],
                              [n, `onEnter`],
                              [r, `onStay`],
                            ])
                              if (e)
                                for (let t of e)
                                  this.looseRoutesById[t.routeId].options[i]?.(
                                    t
                                  );
                          });
                        });
                      },
                    }));
                } catch (e) {
                  O(e)
                    ? ((n = e),
                      this.navigate({
                        ...n.options,
                        replace: !0,
                        ignoreBlocker: !0,
                      }))
                    : ct(e) && (r = e);
                  let t = n
                    ? n.status
                    : r
                      ? 404
                      : this.stores.matches
                            .get()
                            .some((e) => e.status === `error`)
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(t),
                      this.stores.redirect.set(n));
                  });
                }
                (this.latestLoadPromise === i &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  o());
              });
            }),
              this.latestLoadPromise = i,
              await i;
            this.latestLoadPromise && i !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let o;
          (this.hasNotFoundMatch()
            ? (o = 404)
            : this.stores.matches.get().some((e) => e.status === `error`) &&
              (o = 500),
            o !== void 0 && this.stores.statusCode.set(o));
        }),
        (this.startViewTransition = (e) => {
          let t =
            this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            t &&
              typeof document < `u` &&
              `startViewTransition` in document &&
              typeof document.startViewTransition == `function`)
          ) {
            let n;
            if (typeof t == `object` && this.isViewTransitionTypesSupported) {
              let r = this.latestLocation,
                i = this.stores.resolvedLocation.get(),
                a = typeof t.types == `function` ? t.types(an(r, i)) : t.types;
              if (a === !1) {
                e();
                return;
              }
              n = { update: e, types: a };
            } else n = e;
            document.startViewTransition(n);
          } else e();
        }),
        (this.updateMatch = (e, t) => {
          this.startTransition(() => {
            let n = this.stores.pendingMatchStores.get(e);
            if (n) {
              n.set(t);
              return;
            }
            let r = this.stores.matchStores.get(e);
            if (r) {
              r.set(t);
              return;
            }
            let i = this.stores.cachedMatchStores.get(e);
            if (i) {
              let n = t(i.get());
              n.status === `redirected`
                ? this.stores.cachedMatchStores.delete(e) &&
                  this.stores.cachedIds.set((t) => t.filter((t) => t !== e))
                : i.set(n);
            }
          });
        }),
        (this.getMatch = (e) =>
          this.stores.cachedMatchStores.get(e)?.get() ??
          this.stores.pendingMatchStores.get(e)?.get() ??
          this.stores.matchStores.get(e)?.get()),
        (this.invalidate = (e) => {
          let t = (t) =>
            (e?.filter?.(t) ?? !0)
              ? {
                  ...t,
                  invalid: !0,
                  ...(e?.forcePending ||
                  t.status === `error` ||
                  t.status === `notFound`
                    ? { status: `pending`, error: void 0 }
                    : void 0),
                }
              : t;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(t)),
                this.stores.setCached(this.stores.cachedMatches.get().map(t)),
                this.stores.setPending(
                  this.stores.pendingMatches.get().map(t)
                ));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: e?.sync })
          );
        }),
        (this.getParsedLocationHref = (e) => e.publicHref || `/`),
        (this.resolveRedirect = (e) => {
          let t = e.headers.get(`Location`);
          if (!e.options.href || e.options._builtLocation) {
            let t = e.options._builtLocation ?? this.buildLocation(e.options),
              n = this.getParsedLocationHref(t);
            ((e.options.href = n), e.headers.set(`Location`, n));
          } else if (t)
            try {
              let n = new URL(t);
              if (this.origin && n.origin === this.origin) {
                let t = n.pathname + n.search + n.hash;
                ((e.options.href = t), e.headers.set(`Location`, t));
              }
            } catch {}
          if (
            e.options.href &&
            !e.options._builtLocation &&
            E(e.options.href, this.protocolAllowlist)
          )
            throw Error(`Redirect blocked: unsafe protocol`);
          return (
            e.headers.get(`Location`) ||
              e.headers.set(`Location`, e.options.href),
            e
          );
        }),
        (this.clearCache = (e) => {
          let t = e?.filter;
          t === void 0
            ? this.stores.setCached([])
            : this.stores.setCached(
                this.stores.cachedMatches.get().filter((e) => !t(e))
              );
        }),
        (this.clearExpiredCache = () => {
          let e = Date.now();
          this.clearCache({
            filter: (t) => {
              let n = this.looseRoutesById[t.routeId];
              if (!n.options.loader) return !0;
              let r =
                (t.preload
                  ? (n.options.preloadGcTime ??
                    this.options.defaultPreloadGcTime)
                  : (n.options.gcTime ?? this.options.defaultGcTime)) ??
                300 * 1e3;
              return t.status === `error` ? !0 : e - t.updatedAt >= r;
            },
          });
        }),
        (this.loadRouteChunk = Rt),
        (this.preloadRoute = async (e) => {
          let t = e._builtLocation ?? this.buildLocation(e),
            n = this.matchRoutes(t, { throwOnError: !0, preload: !0, dest: e }),
            r = new Set([
              ...this.stores.matchesId.get(),
              ...this.stores.pendingIds.get(),
            ]),
            i = new Set([...r, ...this.stores.cachedIds.get()]),
            a = n.filter((e) => !i.has(e.id));
          if (a.length) {
            let e = this.stores.cachedMatches.get();
            this.stores.setCached([...e, ...a]);
          }
          try {
            return (
              (n = await It({
                router: this,
                matches: n,
                location: t,
                preload: !0,
                updateMatch: (e, t) => {
                  r.has(e)
                    ? (n = n.map((n) => (n.id === e ? t(n) : n)))
                    : this.updateMatch(e, t);
                },
              })),
              n
            );
          } catch (e) {
            if (O(e))
              return e.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...e.options, _fromLocation: t });
            ct(e) || console.error(e);
            return;
          }
        }),
        (this.matchRoute = (e, t) => {
          let n = {
              ...e,
              to: e.to ? this.resolvePathWithBase(e.from || ``, e.to) : void 0,
              params: e.params || {},
              leaveParams: !0,
            },
            r = this.buildLocation(n);
          if (t?.pending && this.stores.status.get() !== `pending`) return !1;
          let i = (
              t?.pending === void 0 ? !this.stores.isLoading.get() : t.pending
            )
              ? this.latestLocation
              : this.stores.resolvedLocation.get() ||
                this.stores.location.get(),
            a = Ie(
              r.pathname,
              t?.caseSensitive ?? !1,
              t?.fuzzy ?? !1,
              i.pathname,
              this.processedTree
            );
          return !a || (e.params && !C(a.rawParams, e.params, { partial: !0 }))
            ? !1
            : (t?.includeSearch ?? !0)
              ? C(i.search, r.search, { partial: !0 })
                ? a.rawParams
                : !1
              : a.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches
            .get()
            .some((e) => e.status === `notFound` || e.globalNotFound)),
        (this.getStoreConfig = t),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? `fuzzy`,
          stringifySearch: e.stringifySearch ?? pt,
          parseSearch: e.parseSearch ?? ft,
          protocolAllowlist: e.protocolAllowlist ?? _e,
        }),
        typeof document < `u` && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: t, processedTree: n }) {
      ((this.routesById = e),
        (this.routesByPath = t),
        (this.processedTree = n));
      let r = this.options.notFoundRoute;
      r &&
        (r.init({ originalIndex: 99999999999 }), (this.routesById[r.id] = r));
    }
    getRouteBranch(e) {
      let t = this.routeBranchCache.get(e);
      return (t || ((t = He(e)), this.routeBranchCache.set(e, t)), t);
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(e) {
      return e?.id
        ? (e.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(e, t) {
      let n = this.getMatchedRoutes(e.pathname),
        { foundRoute: r, routeParams: i } = n,
        { matchedRoutes: a } = n,
        o = !1;
      (r ? r.path !== `/` && i[`**`] : Qe(e.pathname)) &&
        (this.options.notFoundRoute
          ? (a = [...a, this.options.notFoundRoute])
          : (o = !0));
      let s = o ? hn(this.options.notFoundMode, a) : void 0,
        c = Array(a.length),
        l = new Map();
      for (let e of this.stores.matchStores.values())
        e.routeId && l.set(e.routeId, e.get());
      for (let n = 0; n < a.length; n++) {
        let r = a[n],
          o = c[n - 1],
          u,
          d,
          f;
        {
          let n = o?.search ?? e.search,
            i = o?._strictSearch ?? void 0;
          try {
            let e = dn(r.options.validateSearch, { ...n }) ?? void 0;
            ((u = { ...n, ...e }), (d = { ...i, ...e }), (f = void 0));
          } catch (e) {
            let r = e;
            if (
              (e instanceof cn || (r = new cn(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw r;
            ((u = n), (d = {}), (f = r));
          }
        }
        let p = r.options.loaderDeps?.({ search: u }) ?? ``,
          m = p ? JSON.stringify(p) : ``,
          { interpolatedPath: h, usedParams: g } = at({
            path: r.fullPath,
            params: i,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          _ = r.id + h + m,
          v = this.getMatch(_),
          y = l.get(r.id),
          b = v?._strictParams ?? g,
          x;
        if (!v)
          try {
            gn(r, b);
          } catch (e) {
            if (
              ((x = ct(e) || O(e) ? e : new ln(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw x;
          }
        Object.assign(i, b);
        let ee = y ? `stay` : `enter`,
          S;
        if (v)
          S = {
            ...v,
            cause: ee,
            params: y?.params ?? i,
            _strictParams: b,
            search: se(y ? y.search : v.search, u),
            _strictSearch: d,
          };
        else {
          let e =
            r.options.loader || r.options.beforeLoad || r.lazyFn || zt(r)
              ? `pending`
              : `success`;
          S = {
            id: _,
            ssr: r.options.ssr,
            index: n,
            routeId: r.id,
            params: y?.params ?? i,
            _strictParams: b,
            pathname: h,
            updatedAt: Date.now(),
            search: y ? se(y.search, u) : u,
            _strictSearch: d,
            searchError: void 0,
            status: e,
            isFetching: !1,
            error: void 0,
            paramsError: x,
            __routeContext: void 0,
            _nonReactive: { loadPromise: w() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ee,
            loaderDeps: y ? ce(y.loaderDeps, p) : p,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: r.options.staticData || {},
            fullPath: r.fullPath,
          };
        }
        (t?.preload || (S.globalNotFound = s === r.id), (S.searchError = f));
        let te = this.getParentContext(o);
        ((S.context = { ...te, ...S.__routeContext, ...S.__beforeLoadContext }),
          (c[n] = S));
      }
      for (let t = 0; t < c.length; t++) {
        let n = c[t],
          r = this.looseRoutesById[n.routeId],
          a = this.getMatch(n.id),
          o = l.get(n.routeId);
        if (((n.params = o ? se(o.params, i) : i), !a)) {
          let i = c[t - 1],
            a = this.getParentContext(i);
          if (r.options.context) {
            let t = {
              deps: n.loaderDeps,
              params: n.params,
              context: a ?? {},
              location: e,
              navigate: (t) => this.navigate({ ...t, _fromLocation: e }),
              buildLocation: this.buildLocation,
              cause: n.cause,
              abortController: n.abortController,
              preload: !!n.preload,
              matches: c,
              routeId: r.id,
            };
            n.__routeContext = r.options.context(t) ?? void 0;
          }
          n.context = { ...a, ...n.__routeContext, ...n.__beforeLoadContext };
        }
      }
      return c;
    }
    matchRoutesLightweight(e) {
      let { matchedRoutes: t, routeParams: n } = this.getMatchedRoutes(
          e.pathname
        ),
        r = S(t),
        i = { ...e.search };
      for (let e of t)
        try {
          Object.assign(i, dn(e.options.validateSearch, i));
        } catch {}
      let a = S(this.stores.matchesId.get()),
        o = a && this.stores.matchStores.get(a)?.get(),
        s = o && o.routeId === r.id && o.pathname === e.pathname,
        c;
      if (s) c = o.params;
      else {
        let e = Object.assign(Object.create(null), n);
        for (let n of t)
          try {
            gn(n, e);
          } catch {}
        c = e;
      }
      return { matchedRoutes: t, fullPath: r.fullPath, search: i, params: c };
    }
  },
  cn = class extends Error {},
  ln = class extends Error {};
function un(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: `idle`,
    resolvedLocation: void 0,
    location: e,
    matches: [],
    statusCode: 200,
  };
}
function dn(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new cn(`Async validation not supported`);
    if (n.issues)
      throw new cn(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function fn({ pathname: e, routesById: t, processedTree: n }) {
  let r = Object.create(null),
    i = Qe(e),
    a,
    o = Le(i, n, !0);
  return (
    o && ((a = o.route), Object.assign(r, o.rawParams)),
    { matchedRoutes: o?.branch || [t.__root__], routeParams: r, foundRoute: a }
  );
}
function pn({ search: e, dest: t, destRoutes: n, _includeValidateSearch: r }) {
  return mn(n)(e, t, r ?? !1);
}
function mn(e) {
  let t = { dest: null, _includeValidateSearch: !1, middlewares: [] };
  for (let n of e)
    (`search` in n.options
      ? n.options.search?.middlewares &&
        t.middlewares.push(...n.options.search.middlewares)
      : (n.options.preSearchFilters || n.options.postSearchFilters) &&
        t.middlewares.push(({ search: e, next: t }) => {
          let r = e;
          `preSearchFilters` in n.options &&
            n.options.preSearchFilters &&
            (r = n.options.preSearchFilters.reduce((e, t) => t(e), e));
          let i = t(r);
          return `postSearchFilters` in n.options && n.options.postSearchFilters
            ? n.options.postSearchFilters.reduce((e, t) => t(e), i)
            : i;
        }),
      n.options.validateSearch &&
        t.middlewares.push(({ search: e, next: r }) => {
          let i = r(e);
          if (!t._includeValidateSearch) return i;
          try {
            return { ...i, ...(dn(n.options.validateSearch, i) ?? void 0) };
          } catch {
            return i;
          }
        }));
  t.middlewares.push(({ search: e }) => {
    let n = t.dest;
    return n.search ? (n.search === !0 ? e : ne(n.search, e)) : {};
  });
  let n = (e, t, r) => {
    if (e >= r.length) return t;
    let i = r[e];
    return i({ search: t, next: (t) => n(e + 1, t, r) });
  };
  return function (e, r, i) {
    return (
      (t.dest = r),
      (t._includeValidateSearch = i),
      n(0, e, t.middlewares)
    );
  };
}
function hn(e, t) {
  if (e !== `root`)
    for (let e = t.length - 1; e >= 0; e--) {
      let n = t[e];
      if (n.children) return n.id;
    }
  return gt;
}
function gn(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams;
  if (n) {
    let e = n(t);
    if (e === !1)
      throw Error(`Route params.parse returned false for a matched route`);
    Object.assign(t, e);
  }
}
function _n() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var vn = `tsr-scroll-restoration-v1_3`,
  yn = _n();
function bn() {
  try {
    return JSON.parse(yn?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
function xn() {
  try {
    yn?.setItem(vn, JSON.stringify(Sn));
  } catch {}
}
var Sn = bn(),
  Cn = `data-scroll-restoration-id`,
  wn = (e) => e.state.__TSR_key || e.href;
function Tn(e) {
  let t = e.getAttribute(Cn);
  if (t) return `[${Cn}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode); ) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling); ) e++;
    let a = `${r.localName}:nth-child(${e})`;
    ((n = n ? `${a} > ${n}` : a), (r = i));
  }
  return n;
}
var En = !1,
  Dn = `window`;
function On(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function kn(e) {
  let t = [];
  for (let n of e) {
    if (n === Dn) continue;
    let e = On(n);
    e && t.push(e);
  }
  return t;
}
function An(e, t) {
  if (
    ((t ?? e.options.scrollRestoration) && (e.isScrollRestoring = !0),
    e.isScrollRestorationSetup)
  )
    return;
  ((e.isScrollRestorationSetup = !0), (En = !1));
  let n = e.options.getScrollRestorationKey || wn,
    r = new Map(),
    i = (e, t, n) => {
      let i = r.get(e) || {};
      ((i.scrollX = t), (i.scrollY = n), r.set(e, i));
    };
  history.scrollRestoration = `manual`;
  let a = (t) => {
      if (!(En || !e.isScrollRestoring))
        if (t.target === document) i(Dn, scrollX, scrollY);
        else {
          let e = t.target;
          i(e, e.scrollLeft, e.scrollTop);
        }
    },
    o = (t) => {
      if (!e.isScrollRestoring) return;
      let n = (Sn[t] ||= {});
      for (let [e, t] of r)
        e === Dn ? (n[Dn] = t) : e.isConnected && (n[Tn(e)] = t);
    };
  (document.addEventListener(`scroll`, a, !0),
    e.subscribe(`onBeforeLoad`, (e) => {
      (e.fromLocation && o(n(e.fromLocation)), r.clear());
    }),
    addEventListener(`pagehide`, () => {
      (o(n(e.stores.resolvedLocation.get() ?? e.stores.location.get())), xn());
    }),
    e.subscribe(`onRendered`, (t) => {
      let i = e.options.scrollRestorationBehavior,
        a = e.options.scrollToTopSelectors,
        o = e.resetNextScroll,
        s;
      if (
        (r.clear(),
        o || (e.resetNextScroll = !0),
        typeof e.options.scrollRestoration == `function` &&
          !e.options.scrollRestoration({ location: e.latestLocation }))
      )
        return;
      let c = n(t.toLocation),
        l = t.fromLocation && n(t.fromLocation);
      if (e.isScrollRestoring && l && l !== c) {
        let e = Sn[l];
        if (e) {
          let t = Sn[c];
          for (let n in e) {
            if (n === Dn) {
              if (o) continue;
            } else {
              let e = On(n);
              if (!e || (o && a && ((s ??= kn(a)), s.includes(e)))) continue;
            }
            ((t ||= Sn[c] = {}), (t[n] ??= e[n]));
          }
        }
      }
      En = !0;
      try {
        let n = t.toLocation.hash,
          r = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
          l = !1;
        if (o) {
          let o = on.get(t.toLocation),
            u = n && r && (o === `PUSH` || o === `REPLACE`),
            d = e.isScrollRestoring ? Sn[c] : void 0;
          if (d)
            for (let e in d) {
              let { scrollX: t, scrollY: n } = d[e];
              if (e === Dn) {
                if (u) continue;
                (scrollTo({ top: n, left: t, behavior: i }), (l = !0));
              } else {
                let r = On(e);
                r && ((r.scrollLeft = t), (r.scrollTop = n));
              }
            }
          if (!l && !n) {
            let e = { top: 0, left: 0, behavior: i };
            if ((scrollTo(e), a)) {
              s ??= kn(a);
              for (let t of s) t.scrollTo(e);
            }
          }
        }
        !l && n && r && document.getElementById(n)?.scrollIntoView(r);
      } finally {
        En = !1;
      }
    }));
}
var jn = Symbol.for(`TSR_DEFERRED_PROMISE`);
function Mn(e, t) {
  let n = e;
  return n[jn]
    ? n
    : ((n[jn] = { status: `pending` }),
      n
        .then((e) => {
          ((n[jn].status = `success`), (n[jn].data = e));
        })
        .catch((e) => {
          ((n[jn].status = `error`),
            (n[jn].error = {
              data: (t?.serializeError ?? rn)(e),
              __isServerError: !0,
            }));
        }),
      n);
}
var Nn = `Error preloading route! ☝️`;
function Pn(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function Fn(e) {
  return e?.scriptFormat ?? `module`;
}
function In(e, t, n) {
  let r = Ln(t),
    i = Pn(n, `script`) ?? r.crossOrigin;
  return {
    ...(Fn(e) === `iife`
      ? { rel: `preload`, as: `script` }
      : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function Ln(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function Rn(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  let n = new Set();
  for (let r of t) {
    let t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function zn(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
var Bn = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          this.originalIndex = e.originalIndex;
          let t = this.options,
            n = !t?.path && !t?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = gt) : this.parentRoute || Ce());
          let r = n ? gt : t?.path;
          r && r !== `/` && (r = Ze(r));
          let i = t?.id || r,
            a = n
              ? gt
              : Ye([
                  this.parentRoute.id === `__root__` ? `` : this.parentRoute.id,
                  i,
                ]);
          (r === `__root__` && (r = `/`),
            a !== `__root__` && (a = Ye([`/`, a])));
          let o = a === `__root__` ? `/` : Ye([this.parentRoute.fullPath, r]);
          ((this._path = r),
            (this._id = a),
            (this._fullPath = o),
            (this._to = Qe(o)));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => _t({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  Vn = class extends Bn {
    constructor(e) {
      super(e);
    }
  },
  Hn = ((e) => (
    (e[(e.AggregateError = 1)] = `AggregateError`),
    (e[(e.ArrowFunction = 2)] = `ArrowFunction`),
    (e[(e.ErrorPrototypeStack = 4)] = `ErrorPrototypeStack`),
    (e[(e.ObjectAssign = 8)] = `ObjectAssign`),
    (e[(e.BigIntTypedArray = 16)] = `BigIntTypedArray`),
    (e[(e.RegExp = 32)] = `RegExp`),
    e
  ))(Hn || {}),
  Un = Symbol.asyncIterator,
  Wn = Symbol.hasInstance,
  Gn = Symbol.isConcatSpreadable,
  Kn = Symbol.iterator,
  qn = Symbol.match,
  Jn = Symbol.matchAll,
  Yn = Symbol.replace,
  Xn = Symbol.search,
  Zn = Symbol.species,
  Qn = Symbol.split,
  $n = Symbol.toPrimitive,
  er = Symbol.toStringTag,
  tr = Symbol.unscopables,
  nr = {
    [Un]: 0,
    [Wn]: 1,
    [Gn]: 2,
    [Kn]: 3,
    [qn]: 4,
    [Jn]: 5,
    [Yn]: 6,
    [Xn]: 7,
    [Zn]: 8,
    [Qn]: 9,
    [$n]: 10,
    [er]: 11,
    [tr]: 12,
  },
  rr = {
    0: Un,
    1: Wn,
    2: Gn,
    3: Kn,
    4: qn,
    5: Jn,
    6: Yn,
    7: Xn,
    8: Zn,
    9: Qn,
    10: $n,
    11: er,
    12: tr,
  },
  k = void 0,
  ir = { 2: !0, 3: !1, 1: k, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  ar = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  or = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function A(e, t, n, r, i, a, o, s, c, l, u, d) {
  return {
    t: e,
    i: t,
    s: n,
    c: r,
    m: i,
    p: a,
    e: o,
    a: s,
    f: c,
    b: l,
    o: u,
    l: d,
  };
}
function sr(e) {
  return A(2, k, e, k, k, k, k, k, k, k, k, k);
}
var cr = sr(2),
  lr = sr(3),
  ur = sr(1),
  dr = sr(0),
  fr = sr(4),
  pr = sr(5),
  mr = sr(6),
  hr = sr(7);
function gr(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return k;
  }
}
function _r(e) {
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    ((r = gr(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1)));
  return (n === 0 ? (t = e) : (t += e.slice(n)), t);
}
function vr(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function yr(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, vr);
}
var br = `__SEROVAL_REFS__`,
  xr = new Map(),
  Sr = new Map();
function Cr(e) {
  return xr.has(e);
}
function wr(e) {
  return Sr.has(e);
}
function Tr(e) {
  if (Cr(e)) return xr.get(e);
  throw new pi(e);
}
function Er(e) {
  if (wr(e)) return Sr.get(e);
  throw new mi(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, br, {
      value: Sr,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, br, {
        value: Sr,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, br, {
          value: Sr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, br, {
          value: Sr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Dr(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function Or(e) {
  let t = ar[Dr(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function kr(e, t) {
  let n = Or(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    ((o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack`
          ? t & 4 && ((n ||= {}), (n[o] = e[o]))
          : ((n ||= {}), (n[o] = e[o]))));
  return n;
}
function Ar(e) {
  return Object.isFrozen(e)
    ? 3
    : Object.isSealed(e)
      ? 2
      : +!Object.isExtensible(e);
}
function jr(e) {
  switch (e) {
    case 1 / 0:
      return pr;
    case -1 / 0:
      return mr;
  }
  return e === e
    ? Object.is(e, -0)
      ? fr
      : A(0, k, e, k, k, k, k, k, k, k, k, k)
    : hr;
}
function Mr(e) {
  return A(1, k, _r(e), k, k, k, k, k, k, k, k, k);
}
function Nr(e) {
  return A(3, k, `` + e, k, k, k, k, k, k, k, k, k);
}
function Pr(e) {
  return A(4, e, k, k, k, k, k, k, k, k, k, k);
}
function Fr(e, t) {
  let n = t.valueOf();
  return A(5, e, n === n ? t.toISOString() : ``, k, k, k, k, k, k, k, k, k);
}
function Ir(e, t) {
  return A(6, e, k, _r(t.source), t.flags, k, k, k, k, k, k, k);
}
function Lr(e, t) {
  return A(17, e, nr[t], k, k, k, k, k, k, k, k, k);
}
function Rr(e, t) {
  return A(18, e, _r(Tr(t)), k, k, k, k, k, k, k, k, k);
}
function zr(e, t, n) {
  return A(25, e, n, _r(t), k, k, k, k, k, k, k, k);
}
function Br(e, t, n) {
  return A(9, e, k, k, k, k, k, n, k, k, Ar(t), k);
}
function Vr(e, t) {
  return A(21, e, k, k, k, k, k, k, t, k, k, k);
}
function Hr(e, t, n) {
  return A(
    15,
    e,
    k,
    t.constructor.name,
    k,
    k,
    k,
    k,
    n,
    t.byteOffset,
    k,
    t.length
  );
}
function Ur(e, t, n) {
  return A(
    16,
    e,
    k,
    t.constructor.name,
    k,
    k,
    k,
    k,
    n,
    t.byteOffset,
    k,
    t.byteLength
  );
}
function Wr(e, t, n) {
  return A(20, e, k, k, k, k, k, k, n, t.byteOffset, k, t.byteLength);
}
function Gr(e, t, n) {
  return A(13, e, Dr(t), k, _r(t.message), n, k, k, k, k, k, k);
}
function Kr(e, t, n) {
  return A(14, e, Dr(t), k, _r(t.message), n, k, k, k, k, k, k);
}
function qr(e, t) {
  return A(7, e, k, k, k, k, k, t, k, k, k, k);
}
function Jr(e, t) {
  return A(28, k, k, k, k, k, k, [e, t], k, k, k, k);
}
function Yr(e, t) {
  return A(30, k, k, k, k, k, k, [e, t], k, k, k, k);
}
function Xr(e, t, n) {
  return A(31, e, k, k, k, k, k, n, t, k, k, k);
}
function Zr(e, t) {
  return A(32, e, k, k, k, k, k, k, t, k, k, k);
}
function Qr(e, t) {
  return A(33, e, k, k, k, k, k, k, t, k, k, k);
}
function $r(e, t) {
  return A(34, e, k, k, k, k, k, k, t, k, k, k);
}
function ei(e, t, n, r) {
  return A(35, e, n, k, k, k, k, t, k, k, k, r);
}
var { toString: ti } = Object.prototype,
  ni = { parsing: 1, serialization: 2, deserialization: 3 };
function ri(e) {
  return `Seroval Error (step: ${ni[e]})`;
}
var ii = (e, t) => ri(e),
  ai = class extends Error {
    constructor(e, t) {
      (super(ii(e, t)), (this.cause = t));
    }
  },
  oi = class extends ai {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  si = class extends ai {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function ci(e) {
  return `Seroval Error (specific: ${e})`;
}
var li = class extends Error {
    constructor(e) {
      (super(ci(1)), (this.value = e));
    }
  },
  ui = class extends Error {
    constructor(e) {
      super(ci(2));
    }
  },
  di = class extends Error {
    constructor(e) {
      super(ci(3));
    }
  },
  fi = class extends Error {
    constructor(e) {
      super(ci(4));
    }
  },
  pi = class extends Error {
    constructor(e) {
      (super(ci(5)), (this.value = e));
    }
  },
  mi = class extends Error {
    constructor(e) {
      super(ci(6));
    }
  },
  hi = class extends Error {
    constructor(e) {
      super(ci(7));
    }
  },
  gi = class extends Error {
    constructor(e) {
      super(ci(8));
    }
  },
  _i = class extends Error {
    constructor(e) {
      super(ci(9));
    }
  },
  vi = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  yi = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        ((e.s = t), (e.f = n));
      })),
      e
    );
  };
(yi.toString(),
  ((e, t) => {
    (e.s(t), (e.p.s = 1), (e.p.v = t));
  }).toString(),
  ((e, t) => {
    (e.f(t), (e.p.s = 2), (e.p.v = t));
  }).toString());
var bi = () => {
  let e = [],
    t = [],
    n = !0,
    r = !1,
    i = 0,
    a = (e, n, r) => {
      for (r = 0; r < i; r++) t[r] && t[r][n](e);
    },
    o = (t, i, a, o) => {
      for (i = 0, a = e.length; i < a; i++)
        ((o = e[i]),
          !n && i === a - 1 ? t[r ? `return` : `throw`](o) : t.next(o));
    },
    s = (e, r) => (
      n && ((r = i++), (t[r] = e)),
      o(e),
      () => {
        n && ((t[r] = t[i]), (t[i--] = void 0));
      }
    );
  return {
    __SEROVAL_STREAM__: !0,
    on: (e) => s(e),
    next: (t) => {
      n && (e.push(t), a(t, `next`));
    },
    throw: (i) => {
      n && (e.push(i), a(i, `throw`), (n = !1), (r = !1), (t.length = 0));
    },
    return: (i) => {
      n && (e.push(i), a(i, `return`), (n = !1), (r = !0), (t.length = 0));
    },
  };
};
bi.toString();
var xi = (e) => (t) => () => {
  let n = 0,
    r = {
      [e]: () => r,
      next: () => {
        if (n > t.d) return { done: !0, value: void 0 };
        let e = n++,
          r = t.v[e];
        if (e === t.t) throw r;
        return { done: e === t.d, value: r };
      },
    };
  return r;
};
xi.toString();
var Si = (e, t) => (n) => () => {
  let r = 0,
    i = -1,
    a = !1,
    o = [],
    s = [],
    c = (e = 0, t = s.length) => {
      for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
    };
  n.on({
    next: (e) => {
      let t = s.shift();
      (t && t.s({ done: !1, value: e }), o.push(e));
    },
    throw: (e) => {
      let t = s.shift();
      (t && t.f(e), c(), (i = o.length), (a = !0), o.push(e));
    },
    return: (e) => {
      let t = s.shift();
      (t && t.s({ done: !0, value: e }), c(), (i = o.length), o.push(e));
    },
  });
  let l = {
    [e]: () => l,
    next: () => {
      if (i === -1) {
        let e = r++;
        if (e >= o.length) {
          let e = t();
          return (s.push(e), e.p);
        }
        return { done: !1, value: o[e] };
      }
      if (r > i) return { done: !0, value: void 0 };
      let e = r++,
        n = o[e];
      if (e !== i) return { done: !1, value: n };
      if (a) throw n;
      return { done: !0, value: n };
    },
  };
  return l;
};
Si.toString();
var Ci = (e) => {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
};
Ci.toString();
function wi(e) {
  return `__SEROVAL_SEQUENCE__` in e;
}
function Ti(e, t, n) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t, d: n };
}
function Ei(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[Kn]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      ((n = t.length), t.push(e));
    }
  return Ti(t, n, r);
}
var Di = xi(Kn);
function Oi(e) {
  return Di(e);
}
var ki = {},
  Ai = {},
  ji = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function Mi(e) {
  return `__SEROVAL_STREAM__` in e;
}
function Ni() {
  return bi();
}
function Pi(e) {
  let t = Ni(),
    n = e[Un]();
  async function r() {
    try {
      let e = await n.next();
      e.done ? t.return(e.value) : (t.next(e.value), await r());
    } catch (e) {
      t.throw(e);
    }
  }
  return (r().catch(() => {}), t);
}
var Fi = Si(Un, yi);
function Ii(e) {
  return Fi(e);
}
async function Li(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function Ri(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 63 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
  };
}
function zi(e, t) {
  e.marked.add(t);
}
function Bi(e, t) {
  let n = e.refs.size;
  return (e.refs.set(t, n), n);
}
function Vi(e, t) {
  let n = e.refs.get(t);
  return n == null
    ? { type: 0, value: Bi(e, t) }
    : (zi(e, n), { type: 1, value: Pr(n) });
}
function Hi(e, t) {
  let n = Vi(e, t);
  return n.type === 1 ? n : Cr(t) ? { type: 2, value: Rr(n.value, t) } : n;
}
function j(e, t) {
  let n = Hi(e, t);
  if (n.type !== 0) return n.value;
  if (t in nr) return Lr(n.value, t);
  throw new li(t);
}
function M(e, t) {
  let n = Vi(e, ji[t]);
  return n.type === 1 ? n.value : A(26, n.value, t, k, k, k, k, k, k, k, k, k);
}
function Ui(e) {
  let t = Vi(e, ki);
  return t.type === 1
    ? t.value
    : A(27, t.value, k, k, k, k, k, k, j(e, Kn), k, k, k);
}
function Wi(e) {
  let t = Vi(e, Ai);
  return t.type === 1
    ? t.value
    : A(29, t.value, k, k, k, k, k, [M(e, 1), j(e, Un)], k, k, k, k);
}
function Gi(e, t, n, r) {
  return A(n ? 11 : 10, e, k, k, k, r, k, k, k, k, Ar(t), k);
}
function Ki(e, t, n, r) {
  return A(8, t, k, k, k, k, { k: n, v: r }, k, M(e, 0), k, k, k);
}
function qi(e, t, n) {
  let r = new Uint8Array(n),
    i = ``;
  for (let e = 0, t = r.length; e < t; e++) i += String.fromCharCode(r[e]);
  return A(19, t, _r(btoa(i)), k, k, k, k, k, M(e, 5), k, k, k);
}
function Ji(e, t) {
  return { base: Ri(e, t), child: void 0 };
}
var Yi = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return N(this._p, this.depth, e);
  }
};
async function Xi(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++)
    i in n ? (r[i] = await N(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function Zi(e, t, n, r) {
  return Br(n, r, await Xi(e, t, r));
}
async function Qi(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++)
    (i.push(_r(r[n][0])), a.push(await N(e, t, r[n][1])));
  return (
    Kn in n &&
      (i.push(j(e.base, Kn)), a.push(Jr(Ui(e.base), await N(e, t, Ei(n))))),
    Un in n &&
      (i.push(j(e.base, Un)), a.push(Yr(Wi(e.base), await N(e, t, Pi(n))))),
    er in n && (i.push(j(e.base, er)), a.push(Mr(n[er]))),
    Gn in n && (i.push(j(e.base, Gn)), a.push(n[Gn] ? cr : lr)),
    { k: i, v: a }
  );
}
async function $i(e, t, n, r, i) {
  return Gi(n, r, i, await Qi(e, t, r));
}
async function ea(e, t, n, r) {
  return Vr(n, await N(e, t, r.valueOf()));
}
async function ta(e, t, n, r) {
  return Hr(n, r, await N(e, t, r.buffer));
}
async function na(e, t, n, r) {
  return Ur(n, r, await N(e, t, r.buffer));
}
async function ra(e, t, n, r) {
  return Wr(n, r, await N(e, t, r.buffer));
}
async function ia(e, t, n, r) {
  let i = kr(r, e.base.features);
  return Gr(n, r, i ? await Qi(e, t, i) : k);
}
async function aa(e, t, n, r) {
  let i = kr(r, e.base.features);
  return Kr(n, r, i ? await Qi(e, t, i) : k);
}
async function oa(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries())
    (i.push(await N(e, t, n)), a.push(await N(e, t, o)));
  return Ki(e.base, n, i, a);
}
async function sa(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await N(e, t, n));
  return qr(n, i);
}
async function ca(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return zr(n, o.tag, await o.parse.async(r, new Yi(e, t), { id: n }));
    }
  return k;
}
async function la(e, t, n, r) {
  let [i, a] = await Li(r);
  return A(12, n, i, k, k, k, k, k, await N(e, t, a), k, k, k);
}
function ua(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        (zi(this.base, t),
          N(this, e, n).then(
            (e) => {
              a.push(Zr(t, e));
            },
            (e) => {
              (i(e), o());
            }
          ));
      },
      throw: (n) => {
        (zi(this.base, t),
          N(this, e, n).then(
            (e) => {
              (a.push(Qr(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            }
          ));
      },
      return: (n) => {
        (zi(this.base, t),
          N(this, e, n).then(
            (e) => {
              (a.push($r(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            }
          ));
      },
    });
}
async function da(e, t, n, r) {
  return Xr(n, M(e.base, 4), await new Promise(ua.bind(e, t, n, r)));
}
async function fa(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await N(e, t, r.v[n]);
  return ei(n, i, r.t, r.d);
}
async function pa(e, t, n, r) {
  if (Array.isArray(r)) return Zi(e, t, n, r);
  if (Mi(r)) return da(e, t, n, r);
  if (wi(r)) return fa(e, t, n, r);
  let i = r.constructor;
  if (i === vi) return N(e, t, r.replacement);
  let a = await ca(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return $i(e, t, n, r, !1);
    case k:
      return $i(e, t, n, r, !0);
    case Date:
      return Fr(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return ia(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return ea(e, t, n, r);
    case ArrayBuffer:
      return qi(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return ta(e, t, n, r);
    case DataView:
      return ra(e, t, n, r);
    case Map:
      return oa(e, t, n, r);
    case Set:
      return sa(e, t, n, r);
    default:
      break;
  }
  if (i === Promise || r instanceof Promise) return la(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return Ir(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return na(e, t, n, r);
      default:
        break;
    }
  if (
    o & 1 &&
    typeof AggregateError < `u` &&
    (i === AggregateError || r instanceof AggregateError)
  )
    return aa(e, t, n, r);
  if (r instanceof Error) return ia(e, t, n, r);
  if (Kn in r || Un in r) return $i(e, t, n, r, !!i);
  throw new li(r);
}
async function ma(e, t, n) {
  let r = Hi(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await ca(e, t, r.value, n);
  if (i) return i;
  throw new li(n);
}
async function N(e, t, n) {
  switch (typeof n) {
    case `boolean`:
      return n ? cr : lr;
    case `undefined`:
      return ur;
    case `string`:
      return Mr(n);
    case `number`:
      return jr(n);
    case `bigint`:
      return Nr(n);
    case `object`:
      if (n) {
        let r = Hi(e.base, n);
        return r.type === 0 ? await pa(e, t + 1, r.value, n) : r.value;
      }
      return dr;
    case `symbol`:
      return j(e.base, n);
    case `function`:
      return ma(e, t, n);
    default:
      throw new li(n);
  }
}
async function ha(e, t) {
  try {
    return await N(e, 0, t);
  } catch (e) {
    throw e instanceof oi ? e : new oi(e);
  }
}
var ga = ((e) => (
  (e[(e.Vanilla = 1)] = `Vanilla`),
  (e[(e.Cross = 2)] = `Cross`),
  e
))(ga || {});
function _a(e) {
  return e;
}
function va(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && va(e, r.extends));
  }
}
function ya(e) {
  if (e) {
    let t = new Set();
    return (va(t, e), [...t]);
  }
}
function ba(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new hi(e);
  }
}
var xa = 1e6,
  Sa = 1e4,
  Ca = 2e4;
function wa(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Ta = 1e3;
function Ea(e, t) {
  let n = t.refs || new Map();
  return (
    `types` in n || Object.assign(n, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: n,
      features: t.features ?? 63 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Ta,
    }
  );
}
function Da(e) {
  return { mode: 2, base: Ea(2, e), child: k };
}
var Oa = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return P(this._p, this.depth, e);
  }
};
function ka(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t))
    throw new gi({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function Aa(e, t, n) {
  return (ka(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n);
}
function ja(e, t, n) {
  return (ka(e.base, t), e.base.refs.set(t, n), n);
}
function Ma(e, t, n) {
  return e.mode === 1 ? Aa(e, t, n) : ja(e, t, n);
}
function Na(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new gi(e);
}
function Pa(e, t) {
  return Ma(e, t.i, Er(yr(t.s)));
}
function Fa(e, t, n) {
  let r = n.a,
    i = r.length,
    a = Ma(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) ((o = r[n]), o && (a[n] = P(e, t, o)));
  return (wa(a, n.o), a);
}
function Ia(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function La(e) {
  switch (e) {
    case Un:
    case Gn:
    case er:
    case Kn:
      return !0;
    default:
      return !1;
  }
}
function Ra(e, t, n) {
  Ia(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, {
        value: n,
        configurable: !0,
        enumerable: !0,
        writable: !0,
      });
}
function za(e, t, n, r, i) {
  if (typeof r == `string`) Ra(n, yr(r), P(e, t, i));
  else {
    let a = P(e, t, r);
    switch (typeof a) {
      case `string`:
        Ra(n, a, P(e, t, i));
        break;
      case `symbol`:
        La(a) && (n[a] = P(e, t, i));
        break;
      default:
        throw new gi(r);
    }
  }
}
function Ba(e, t, n) {
  e.base.refs.types.set(t, n);
}
function Va(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new gi(t);
}
function Ha(e, t, n, r) {
  let i = n.k;
  if (i.length > 0)
    for (let a = 0, o = n.v, s = i.length; a < s; a++) za(e, t, r, i[a], o[a]);
  return r;
}
function Ua(e, t, n) {
  let r = Ma(e, n.i, n.t === 10 ? {} : Object.create(null));
  return (Ha(e, t, n.p, r), wa(r, n.o), r);
}
function Wa(e, t) {
  return Ma(e, t.i, new Date(t.s));
}
function Ga(e, t) {
  if (e.base.features & 32) {
    let n = yr(t.c);
    if (n.length > Ca) throw new gi(t);
    return Ma(e, t.i, new RegExp(n, t.m));
  }
  throw new ui(t);
}
function Ka(e, t, n) {
  let r = Ma(e, n.i, new Set());
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(P(e, t, a[i]));
  return r;
}
function qa(e, t, n) {
  let r = Ma(e, n.i, new Map());
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(P(e, t, a[i]), P(e, t, o[i]));
  return r;
}
function Ja(e, t) {
  if (t.s.length > xa) throw new gi(t);
  return Ma(e, t.i, Ci(yr(t.s)));
}
function Ya(e, t, n) {
  let r = ba(n.c),
    i = P(e, t, n.f),
    a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new gi(n);
  return Ma(e, n.i, new r(i, a, n.l));
}
function Xa(e, t, n) {
  let r = P(e, t, n.f),
    i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new gi(n);
  return Ma(e, n.i, new DataView(r, i, n.l));
}
function Za(e, t, n, r) {
  if (n.p) {
    let i = Ha(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function Qa(e, t, n) {
  return Za(e, t, n, Ma(e, n.i, AggregateError([], yr(n.m))));
}
function $a(e, t, n) {
  let r = Na(n, or, n.s);
  return Za(e, t, n, Ma(e, n.i, new r(yr(n.m))));
}
function eo(e, t, n) {
  let r = yi(),
    i = Ma(e, n.i, r.p),
    a = P(e, t, n.f);
  return (n.s ? r.s(a) : r.f(a), i);
}
function to(e, t, n) {
  return Ma(e, n.i, Object(P(e, t, n.f)));
}
function no(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = yr(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i)
        return Ma(e, n.i, o.deserialize(n.s, new Oa(e, t), { id: n.i }));
    }
  }
  throw new di(n.c);
}
function ro(e, t) {
  let n = Ma(e, t.i, Ma(e, t.s, yi()).p);
  return (Ba(e, t.s, 22), n);
}
function io(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 22), r.s(P(e, t, n.a[1])), k);
  throw new fi(`Promise`);
}
function ao(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 22), r.f(P(e, t, n.a[1])), k);
  throw new fi(`Promise`);
}
function oo(e, t, n) {
  return (P(e, t, n.a[0]), Oi(P(e, t, n.a[1])));
}
function so(e, t, n) {
  return (P(e, t, n.a[0]), Ii(P(e, t, n.a[1])));
}
function co(e, t, n) {
  let r = Ma(e, n.i, Ni());
  Ba(e, n.i, 31);
  let i = n.a,
    a = i.length;
  if (a) for (let n = 0; n < a; n++) P(e, t, i[n]);
  return r;
}
function lo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 31), r.next(P(e, t, n.f)), k);
  throw new fi(`Stream`);
}
function uo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 31), r.throw(P(e, t, n.f)), k);
  throw new fi(`Stream`);
}
function fo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 31), r.return(P(e, t, n.f)), k);
  throw new fi(`Stream`);
}
function po(e, t, n) {
  return (P(e, t, n.f), k);
}
function mo(e, t, n) {
  return (P(e, t, n.a[1]), k);
}
function ho(e, t, n) {
  let r = Ma(e, n.i, Ti([], n.s, n.l));
  for (let i = 0, a = n.a.length; i < a; i++) r.v[i] = P(e, t, n.a[i]);
  return r;
}
function P(e, t, n) {
  if (t > e.base.depthLimit) throw new _i(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return Na(n, ir, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return yr(String(n.s));
    case 3:
      if (String(n.s).length > Sa) throw new gi(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return Pa(e, n);
    case 9:
      return Fa(e, t, n);
    case 10:
    case 11:
      return Ua(e, t, n);
    case 5:
      return Wa(e, n);
    case 6:
      return Ga(e, n);
    case 7:
      return Ka(e, t, n);
    case 8:
      return qa(e, t, n);
    case 19:
      return Ja(e, n);
    case 16:
    case 15:
      return Ya(e, t, n);
    case 20:
      return Xa(e, t, n);
    case 14:
      return Qa(e, t, n);
    case 13:
      return $a(e, t, n);
    case 12:
      return eo(e, t, n);
    case 17:
      return Na(n, rr, n.s);
    case 21:
      return to(e, t, n);
    case 25:
      return no(e, t, n);
    case 22:
      return ro(e, n);
    case 23:
      return io(e, t, n);
    case 24:
      return ao(e, t, n);
    case 28:
      return oo(e, t, n);
    case 30:
      return so(e, t, n);
    case 31:
      return co(e, t, n);
    case 32:
      return lo(e, t, n);
    case 33:
      return uo(e, t, n);
    case 34:
      return fo(e, t, n);
    case 27:
      return po(e, t, n);
    case 29:
      return mo(e, t, n);
    case 35:
      return ho(e, t, n);
    default:
      throw new ui(n);
  }
}
function go(e, t) {
  try {
    return P(e, 0, t);
  } catch (e) {
    throw new si(e);
  }
}
var _o = (() => T).toString();
/=>/.test(_o);
function vo(e, t) {
  return go(
    Da({
      plugins: ya(t.plugins),
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e
  );
}
async function yo(e, t = {}) {
  let n = Ji(1, {
    plugins: ya(t.plugins),
    disabledFeatures: t.disabledFeatures,
  });
  return {
    t: await ha(n, e),
    f: n.base.features,
    m: Array.from(n.base.marked),
  };
}
function F(e) {
  return e;
}
function I(e) {
  return _a({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n, r) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n, r) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var bo = class {
    constructor(e, t) {
      ((this.stream = e), (this.hint = t?.hint ?? `binary`));
    }
  },
  xo = globalThis.Buffer,
  So = !!xo && typeof xo.from == `function`;
function Co(e) {
  if (e.length === 0) return ``;
  if (So) return xo.from(e).toString(`base64`);
  let t = 32768,
    n = [];
  for (let r = 0; r < e.length; r += t) {
    let i = e.subarray(r, r + t);
    n.push(String.fromCharCode.apply(null, i));
  }
  return btoa(n.join(``));
}
function wo(e) {
  if (e.length === 0) return new Uint8Array();
  if (So) {
    let t = xo.from(e, `base64`);
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
var To = Object.create(null),
  Eo = Object.create(null),
  Do = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(wo(e));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Oo = new TextEncoder(),
  ko = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              typeof e == `string`
                ? t.enqueue(Oo.encode(e))
                : t.enqueue(wo(e.$b64));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Ao = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`,
  jo = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function Mo(e) {
  let t = Ni(),
    n = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: r } = await n.read();
          if (e) {
            t.return(void 0);
            break;
          }
          t.next(Co(r));
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
function No(e) {
  let t = Ni(),
    n = e.getReader(),
    r = new TextDecoder(`utf-8`, { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: i } = await n.read();
          if (e) {
            try {
              let e = r.decode();
              e.length > 0 && t.next(e);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            let e = r.decode(i, { stream: !0 });
            e.length > 0 && t.next(e);
          } catch {
            t.next({ $b64: Co(i) });
          }
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
var Po = _a({
  tag: `tss/RawStream`,
  extends: [
    _a({
      tag: `tss/RawStreamFactory`,
      test(e) {
        return e === To;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Ao;
      },
      deserialize(e, t, n) {
        return To;
      },
    }),
    _a({
      tag: `tss/RawStreamFactoryText`,
      test(e) {
        return e === Eo;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return jo;
      },
      deserialize(e, t, n) {
        return Eo;
      },
    }),
  ],
  test(e) {
    return e instanceof bo;
  },
  parse: {
    sync(e, t, n) {
      let r = e.hint === `text` ? Eo : To;
      return {
        hint: t.parse(e.hint),
        factory: t.parse(r),
        stream: t.parse(Ni()),
      };
    },
    async async(e, t, n) {
      let r = e.hint === `text` ? Eo : To,
        i = e.hint === `text` ? No(e.stream) : Mo(e.stream);
      return {
        hint: await t.parse(e.hint),
        factory: await t.parse(r),
        stream: await t.parse(i),
      };
    },
    stream(e, t, n) {
      let r = e.hint === `text` ? Eo : To,
        i = e.hint === `text` ? No(e.stream) : Mo(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(i) };
    },
  },
  serialize(e, t, n) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t, n) {
    let r = t.deserialize(e.stream);
    return t.deserialize(e.hint) === `text` ? ko(r) : Do(r);
  },
});
function Fo(e) {
  return _a({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize() {
      throw Error(
        `RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`
      );
    },
    deserialize(t, n, r) {
      return e(
        typeof n?.deserialize == `function`
          ? n.deserialize(t.streamId)
          : t.streamId
      );
    },
  });
}
var Io = _a({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  Lo = {},
  Ro = (e) =>
    new ReadableStream({
      start: (t) => {
        e.on({
          next: (e) => {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw: (e) => {
            t.error(e);
          },
          return: () => {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  zo = _a({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === Lo;
    },
    parse: {
      sync() {
        return Lo;
      },
      async async() {
        return await Promise.resolve(Lo);
      },
      stream() {
        return Lo;
      },
    },
    serialize() {
      return Ro.toString();
    },
    deserialize() {
      return Lo;
    },
  });
function Bo(e) {
  let t = Ni(),
    n = e.getReader();
  async function r() {
    try {
      let e = await n.read();
      e.done ? t.return(e.value) : (t.next(e.value), await r());
    } catch (e) {
      t.throw(e);
    }
  }
  return (r().catch(() => {}), t);
}
var Vo = [
  Io,
  Po,
  _a({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [zo],
    test(e) {
      return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse(Lo), stream: t.parse(Ni()) };
      },
      async async(e, t) {
        return { factory: await t.parse(Lo), stream: await t.parse(Bo(e)) };
      },
      stream(e, t) {
        return { factory: t.parse(Lo), stream: t.parse(Bo(e)) };
      },
    },
    serialize(e, t) {
      return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
    },
    deserialize(e, t) {
      return Ro(t.deserialize(e.stream));
    },
  }),
];
function Ho() {
  return [...(ee()?.serializationAdapters?.map(I) ?? []), ...Vo];
}
var Uo = new TextDecoder(),
  Wo = new Uint8Array(),
  Go = 16 * 1024 * 1024,
  Ko = 32 * 1024 * 1024,
  qo = 1024,
  Jo = 1e5;
function Yo(e) {
  let t = new Map(),
    n = new Map(),
    r = new Set(),
    i = !1,
    a = null,
    o = 0,
    s,
    c = new ReadableStream({
      start(e) {
        s = e;
      },
      cancel() {
        i = !0;
        try {
          a?.cancel();
        } catch {}
        (t.forEach((e) => {
          try {
            e.error(Error(`Framed response cancelled`));
          } catch {}
        }),
          t.clear(),
          n.clear(),
          r.clear());
      },
    });
  function l(e) {
    let i = n.get(e);
    if (i) return i;
    if (r.has(e))
      return new ReadableStream({
        start(e) {
          e.close();
        },
      });
    if (n.size >= qo)
      throw Error(`Too many raw streams in framed response (max ${qo})`);
    let a = new ReadableStream({
      start(n) {
        t.set(e, n);
      },
      cancel() {
        (r.add(e), t.delete(e), n.delete(e));
      },
    });
    return (n.set(e, a), a);
  }
  function u(e) {
    return (l(e), t.get(e));
  }
  return (
    (async () => {
      let n = e.getReader();
      a = n;
      let c = [],
        l = 0;
      function d() {
        if (l < 9) return null;
        let e = c[0];
        if (e.length >= 9)
          return {
            type: e[0],
            streamId: ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            length: ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0,
          };
        let t = new Uint8Array(9),
          n = 0,
          r = 9;
        for (let e = 0; e < c.length && r > 0; e++) {
          let i = c[e],
            a = Math.min(i.length, r);
          (t.set(i.subarray(0, a), n), (n += a), (r -= a));
        }
        return {
          type: t[0],
          streamId: ((t[1] << 24) | (t[2] << 16) | (t[3] << 8) | t[4]) >>> 0,
          length: ((t[5] << 24) | (t[6] << 16) | (t[7] << 8) | t[8]) >>> 0,
        };
      }
      function f(e) {
        if (e === 0) return Wo;
        let t = new Uint8Array(e),
          n = 0,
          r = e;
        for (; r > 0 && c.length > 0; ) {
          let e = c[0];
          if (!e) break;
          let i = Math.min(e.length, r);
          (t.set(e.subarray(0, i), n),
            (n += i),
            (r -= i),
            i === e.length ? c.shift() : (c[0] = e.subarray(i)));
        }
        return ((l -= e), t);
      }
      try {
        for (;;) {
          let { done: e, value: a } = await n.read();
          if (i || e) break;
          if (a) {
            if (l + a.length > Ko)
              throw Error(`Framed response buffer exceeded ${Ko} bytes`);
            for (c.push(a), l += a.length; ; ) {
              let e = d();
              if (!e) break;
              let { type: n, streamId: i, length: a } = e;
              if (n !== v.JSON && n !== v.CHUNK && n !== v.END && n !== v.ERROR)
                throw Error(`Unknown frame type: ${n}`);
              if (n === v.JSON) {
                if (i !== 0)
                  throw Error(`Invalid JSON frame streamId (expected 0)`);
              } else if (i === 0)
                throw Error(`Invalid raw frame streamId (expected non-zero)`);
              if (a > Go)
                throw Error(`Frame payload too large: ${a} bytes (max ${Go})`);
              let c = 9 + a;
              if (l < c) break;
              if (++o > Jo)
                throw Error(`Too many frames in framed response (max ${Jo})`);
              f(9);
              let p = f(a);
              switch (n) {
                case v.JSON:
                  try {
                    s.enqueue(Uo.decode(p));
                  } catch {}
                  break;
                case v.CHUNK: {
                  let e = u(i);
                  e && e.enqueue(p);
                  break;
                }
                case v.END: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    try {
                      e.close();
                    } catch {}
                    t.delete(i);
                  }
                  break;
                }
                case v.ERROR: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    let n = Uo.decode(p);
                    (e.error(Error(n)), t.delete(i));
                  }
                  break;
                }
              }
            }
          }
        }
        if (l !== 0) throw Error(`Incomplete frame at end of framed response`);
        try {
          s.close();
        } catch {}
        (t.forEach((e) => {
          try {
            e.close();
          } catch {}
        }),
          t.clear());
      } catch (e) {
        try {
          s.error(e);
        } catch {}
        (t.forEach((t) => {
          try {
            t.error(e);
          } catch {}
        }),
          t.clear());
      } finally {
        try {
          n.releaseLock();
        } catch {}
        a = null;
      }
    })(),
    { getOrCreateStream: l, jsonChunks: c }
  );
}
var Xo = null;
async function Zo(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var Qo = Object.prototype.hasOwnProperty;
function $o(e) {
  for (let t in e) if (Qo.call(e, t)) return !0;
  return !1;
}
async function es(e, t, n) {
  Xo ||= Ho();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData ? `formData` : `payload`,
    o = r.headers ? new Headers(r.headers) : new Headers();
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a === `payload` &&
      o.set(`accept`, `${_}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a === `formData`)
      throw Error(`FormData is not supported with GET requests`);
    let t = await ts(r);
    if (t !== void 0) {
      let n = lt({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  if (r.method === `POST`) {
    let e = await rs(r);
    (e?.contentType && o.set(`content-type`, e.contentType), (s = e?.body));
  }
  return await is(async () =>
    i(e, { method: r.method, headers: o, signal: r.signal, body: s })
  );
}
async function ts(e) {
  let t = !1,
    n = {};
  if (
    (e.data !== void 0 && ((t = !0), (n.data = e.data)),
    e.context && $o(e.context) && ((t = !0), (n.context = e.context)),
    t)
  )
    return ns(n);
}
async function ns(e) {
  return JSON.stringify(await Promise.resolve(yo(e, { plugins: Xo })));
}
async function rs(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && $o(e.context) && (t = await ns(e.context)),
      t !== void 0 && e.data.set(m, t),
      { body: e.data }
    );
  }
  let t = await ts(e);
  if (t) return { body: t, contentType: `application/json` };
}
async function is(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw (console.log(e), e);
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let n = t.headers.get(`content-type`);
  if ((n || Ce(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (n.includes(`application/x-tss-framed`)) {
      if ((x(n), !t.body)) throw Error(`No response body for framed response`);
      let { getOrCreateStream: r, jsonChunks: i } = Yo(t.body),
        a = [Fo(r), ...(Xo || [])],
        o = new Map();
      e = await as({
        jsonStream: i,
        onMessage: (e) => vo(e, { refs: o, plugins: a }),
        onError(e, t) {
          console.error(e, t);
        },
      });
    } else if (n.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      try {
        e = vo(n, { plugins: Xo });
      } finally {
      }
      await Zo(r);
    }
    if ((e || Ce(), e instanceof Error)) throw e;
    return e;
  }
  if (n.includes(`application/json`)) {
    let e = await t.json(),
      n = vt(e);
    if (n) throw n;
    if (ct(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function as({ jsonStream: e, onMessage: t, onError: n }) {
  let r = e.getReader(),
    { value: i, done: a } = await r.read();
  if (a || !i) throw Error(`Stream ended before first object`);
  let o = JSON.parse(i),
    s = !1,
    c = (async () => {
      try {
        for (;;) {
          let { value: e, done: i } = await r.read();
          if (i) break;
          if (e)
            try {
              let n = [];
              try {
                t(JSON.parse(e));
              } finally {
              }
              await Zo(n);
            } catch (t) {
              n?.(`Invalid JSON: ${e}`, t);
            }
        }
      } catch (e) {
        s || n?.(`Stream processing error:`, e);
      }
    })(),
    l,
    u = [];
  try {
    l = t(o);
  } catch (e) {
    throw ((s = !0), r.cancel().catch(() => {}), e);
  }
  return (
    await Zo(u),
    Promise.resolve(l).catch(() => {
      ((s = !0), r.cancel().catch(() => {}));
    }),
    c.finally(() => {
      try {
        r.releaseLock();
      } catch {}
    }),
    l
  );
}
function os(e) {
  let t = `/imagetoascii-replica/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = ee()?.serverFns?.fetch;
      return es(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [h]: !0 }
  );
}
var ss = F({
  key: `$TSS/serverfn`,
  test: (e) => (typeof e != `function` || !(h in e) ? !1 : !!e[h]),
  toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
  fromSerializable: ({ functionId: e }) => os(e),
});
function cs(e) {
  if (Array.isArray(e)) return e.flatMap((e) => cs(e));
  if (typeof e != `string`) return [];
  let t = [],
    n = 0,
    r,
    i,
    a,
    o,
    s,
    c = () => {
      for (; n < e.length && /\s/.test(e.charAt(n)); ) n += 1;
      return n < e.length;
    },
    l = () => ((i = e.charAt(n)), i !== `=` && i !== `;` && i !== `,`);
  for (; n < e.length; ) {
    for (r = n, s = !1; c(); )
      if (((i = e.charAt(n)), i === `,`)) {
        for (a = n, n += 1, c(), o = n; n < e.length && l(); ) n += 1;
        n < e.length && e.charAt(n) === `=`
          ? ((s = !0), (n = o), t.push(e.slice(r, a)), (r = n))
          : (n = a + 1);
      } else n += 1;
    (!s || n >= e.length) && t.push(e.slice(r));
  }
  return t;
}
function ls(e) {
  return e instanceof Headers
    ? e
    : Array.isArray(e) || typeof e == `object`
      ? new Headers(e)
      : null;
}
function us(...e) {
  return e.reduce((e, t) => {
    let n = ls(t);
    if (!n) return e;
    for (let [t, r] of n.entries())
      t === `set-cookie`
        ? cs(r).forEach((t) => e.append(`set-cookie`, t))
        : e.set(t, r);
    return e;
  }, new Headers());
}
function ds(e) {
  return e.replaceAll(`\0`, `/`).replaceAll(`�`, `/`);
}
function fs(e, t) {
  ((e.id = t.i),
    (e.__beforeLoadContext = t.b),
    (e.loaderData = t.l),
    (e.status = t.s),
    (e.ssr = t.ssr),
    (e.updatedAt = t.u),
    (e.error = t.e),
    t.g !== void 0 && (e.globalNotFound = t.g));
}
async function ps(e) {
  window.$_TSR || Ce();
  let t = e.options.serializationAdapters;
  if (t?.length) {
    let e = new Map();
    (t.forEach((t) => {
      e.set(t.key, t.fromSerializable);
    }),
      (window.$_TSR.t = e),
      window.$_TSR.buffer.forEach((e) => e()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || Ce());
  let n = window.$_TSR.router;
  (n.matches.forEach((e) => {
    e.i = ds(e.i);
  }),
    (n.lastMatchId &&= ds(n.lastMatchId)));
  let { manifest: r, dehydratedData: i, lastMatchId: a } = n;
  e.ssr = { manifest: r };
  let o = document.querySelector(`meta[property="csp-nonce"]`)?.content;
  ((e.options.ssr = { nonce: o }), await e.options.hydrate?.(i));
  let s = e.matchRoutes(e.stores.location.get()),
    c = Promise.all(
      s.map((t) => e.loadRouteChunk(e.looseRoutesById[t.routeId]))
    );
  function l(t) {
    let n =
      e.looseRoutesById[t.routeId].options.pendingMinMs ??
      e.options.defaultPendingMinMs;
    if (n) {
      let r = w();
      ((t._nonReactive.minPendingPromise = r),
        (t._forcePending = !0),
        setTimeout(() => {
          (r.resolve(),
            e.updateMatch(
              t.id,
              (e) => (
                (e._nonReactive.minPendingPromise = void 0),
                { ...e, _forcePending: void 0 }
              )
            ));
        }, n));
    }
  }
  function u(t) {
    let n = e.looseRoutesById[t.routeId];
    n && (n.options.ssr = t.ssr);
  }
  let d;
  (s.forEach((e) => {
    let t = n.matches.find((t) => t.i === e.id);
    if (!t) {
      ((e._nonReactive.dehydrated = !1), (e.ssr = !1), u(e));
      return;
    }
    (fs(e, t),
      u(e),
      (e._nonReactive.dehydrated = e.ssr !== !1),
      (e.ssr === `data-only` || e.ssr === !1) &&
        d === void 0 &&
        ((d = e.index), l(e)));
  }),
    e.stores.setMatches(s));
  let f = e.stores.matches.get(),
    p = e.stores.location.get();
  await Promise.all(
    f.map(async (t) => {
      try {
        let n = e.looseRoutesById[t.routeId],
          r = f[t.index - 1]?.context ?? e.options.context;
        if (n.options.context) {
          let i = {
            deps: t.loaderDeps,
            params: t.params,
            context: r ?? {},
            location: p,
            navigate: (t) => e.navigate({ ...t, _fromLocation: p }),
            buildLocation: e.buildLocation,
            cause: t.cause,
            abortController: t.abortController,
            preload: !1,
            matches: s,
            routeId: n.id,
          };
          t.__routeContext = n.options.context(i) ?? void 0;
        }
        t.context = { ...r, ...t.__routeContext, ...t.__beforeLoadContext };
        let i = {
            ssr: e.options.ssr,
            matches: f,
            match: t,
            params: t.params,
            loaderData: t.loaderData,
          },
          a = await n.options.head?.(i),
          o = await n.options.scripts?.(i);
        ((t.meta = a?.meta),
          (t.links = a?.links),
          (t.headScripts = a?.scripts),
          (t.styles = a?.styles),
          (t.scripts = o));
      } catch (e) {
        if (ct(e))
          ((t.error = { isNotFound: !0 }),
            console.error(
              `NotFound error during hydration for routeId: ${t.routeId}`,
              e
            ));
        else
          throw (
            (t.error = e),
            console.error(`Error during hydration for route ${t.routeId}:`, e),
            e
          );
      }
    })
  );
  let m = s[s.length - 1].id !== a;
  if (!s.some((e) => e.ssr === !1) && !m)
    return (
      s.forEach((e) => {
        e._nonReactive.dehydrated = void 0;
      }),
      e.stores.resolvedLocation.set(e.stores.location.get()),
      c
    );
  let h = Promise.resolve()
    .then(() => e.load())
    .catch((e) => {
      console.error(`Error during router hydration:`, e);
    });
  if (m) {
    let t = s[1];
    (t || Ce(),
      l(t),
      (t._displayPending = !0),
      (t._nonReactive.displayPendingPromise = h),
      h.then(() => {
        e.batch(() => {
          (e.stores.status.get() === `pending` &&
            (e.stores.status.set(`idle`),
            e.stores.resolvedLocation.set(e.stores.location.get())),
            e.updateMatch(t.id, (e) => ({
              ...e,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return c;
}
var L = n(i(), 1),
  ms = L.use,
  hs = typeof window < `u` ? L.useLayoutEffect : L.useEffect;
function gs(e) {
  let t = L.useRef({ value: e, prev: null }),
    n = t.current.value;
  return (e !== n && (t.current = { value: e, prev: n }), t.current.prev);
}
function _s(e, t, n = {}, r = {}) {
  L.useEffect(() => {
    if (!e.current || r.disabled || typeof IntersectionObserver != `function`)
      return;
    let i = new IntersectionObserver(([e]) => {
      t(e);
    }, n);
    return (
      i.observe(e.current),
      () => {
        i.disconnect();
      }
    );
  }, [t, n, r.disabled, e]);
}
function vs(e) {
  let t = L.useRef(null);
  return (L.useImperativeHandle(e, () => t.current, []), t);
}
var R = e();
function ys({ promise: e }) {
  if (ms) return ms(e);
  let t = Mn(e);
  if (t[jn].status === `pending`) throw t;
  if (t[jn].status === `error`) throw t[jn].error;
  return t[jn].data;
}
function bs(e) {
  let t = (0, R.jsx)(xs, { ...e });
  return e.fallback
    ? (0, R.jsx)(L.Suspense, { fallback: e.fallback, children: t })
    : t;
}
function xs(e) {
  let t = ys(e);
  return e.children(t);
}
function Ss(e) {
  let t = e.errorComponent ?? ws;
  return (0, R.jsx)(Cs, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? L.createElement(t, { error: n, reset: r }) : e.children,
  });
}
var Cs = class extends L.Component {
  constructor(...e) {
    (super(...e), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey();
    return t.error && t.resetKey !== n
      ? { resetKey: n, error: null }
      : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(e, t) {
    this.props.onCatch && this.props.onCatch(e, t);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function ws({ error: e }) {
  let [t, n] = L.useState(!1);
  return (0, R.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, R.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, R.jsx)(`strong`, {
            style: { fontSize: `1rem` },
            children: `Something went wrong!`,
          }),
          (0, R.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, R.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, R.jsx)(`div`, {
            children: (0, R.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e.message
                ? (0, R.jsx)(`code`, { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
function Ts({ children: e, fallback: t = null }) {
  return Es()
    ? (0, R.jsx)(L.Fragment, { children: e })
    : (0, R.jsx)(L.Fragment, { children: t });
}
function Es() {
  return L.useSyncExternalStore(
    Ds,
    () => !0,
    () => !1
  );
}
function Ds() {
  return () => {};
}
var Os = L.createContext(null);
function ks(e) {
  return L.useContext(Os);
}
var As = L.createContext(void 0),
  js = L.createContext(void 0),
  Ms = ((e) => (
    (e[(e.None = 0)] = `None`),
    (e[(e.Mutable = 1)] = `Mutable`),
    (e[(e.Watching = 2)] = `Watching`),
    (e[(e.RecursedCheck = 4)] = `RecursedCheck`),
    (e[(e.Recursed = 8)] = `Recursed`),
    (e[(e.Dirty = 16)] = `Dirty`),
    (e[(e.Pending = 32)] = `Pending`),
    e
  ))(Ms || {});
function Ns({ update: e, notify: t, unwatched: n }) {
  return {
    link: r,
    unlink: i,
    propagate: a,
    checkDirty: o,
    shallowPropagate: s,
  };
  function r(e, t, n) {
    let r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    let i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      ((i.version = n), (t.depsTail = i));
      return;
    }
    let a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    let o =
      (t.depsTail =
      e.subsTail =
        {
          version: n,
          dep: e,
          sub: t,
          prevDep: r,
          nextDep: i,
          prevSub: a,
          nextSub: void 0,
        });
    (i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o));
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs;
        if (t !== void 0) {
          let i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0; )
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      let o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs;
          (e.nextSub !== void 0 && s(e), (a = !0));
        }
      } else if ((c & 33) == 33) {
        ((t.nextSub !== void 0 || t.prevSub !== void 0) &&
          (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i);
        continue;
      }
      if (!a) {
        let e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--; ) {
        let i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            (o && s(i), (n = t.sub));
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        let c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0; ) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function Ps(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var Fs = [],
  Is = 0,
  {
    link: Ls,
    unlink: Rs,
    propagate: zs,
    checkDirty: Bs,
    shallowPropagate: Vs,
  } = Ns({
    update(e) {
      return e._update();
    },
    notify(e) {
      ((Fs[Us++] = e), (e.flags &= ~Ms.Watching));
    },
    unwatched(e) {
      e.depsTail !== void 0 &&
        ((e.depsTail = void 0), (e.flags = Ms.Mutable | Ms.Dirty), qs(e));
    },
  }),
  Hs = 0,
  Us = 0,
  Ws,
  Gs = 0;
function Ks(e) {
  try {
    (++Gs, e());
  } finally {
    --Gs || Js();
  }
}
function qs(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0; ) n = Rs(n, e);
}
function Js() {
  if (!(Gs > 0)) {
    for (; Hs < Us; ) {
      let e = Fs[Hs];
      ((Fs[Hs++] = void 0), e.notify());
    }
    ((Hs = 0), (Us = 0));
  }
}
function Ys(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: n ? Ms.None : Ms.Mutable,
      get() {
        return (Ws !== void 0 && Ls(i, Ws, Is), i._snapshot);
      },
      subscribe(e) {
        let t = Ps(e),
          n = { current: !1 },
          r = Xs(() => {
            (i.get(), n.current ? t.next?.(i._snapshot) : (n.current = !0));
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        let a = Ws,
          o = t?.compare ?? Object.is;
        if (n) ((Ws = i), ++Is, (i.depsTail = void 0));
        else if (e === void 0) return !1;
        n && (i.flags = Ms.Mutable | Ms.RecursedCheck);
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          ((Ws = a), n && (i.flags &= ~Ms.RecursedCheck), qs(i));
        }
      },
    };
  return (
    n
      ? ((i.flags = Ms.Mutable | Ms.Dirty),
        (i.get = function () {
          let e = i.flags;
          if (e & Ms.Dirty || (e & Ms.Pending && Bs(i.deps, i))) {
            if (i._update()) {
              let e = i.subs;
              e !== void 0 && Vs(e);
            }
          } else e & Ms.Pending && (i.flags = e & ~Ms.Pending);
          return (Ws !== void 0 && Ls(i, Ws, Is), i._snapshot);
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (zs(e), Vs(e), Js());
          }
        }),
    i
  );
}
function Xs(e) {
  let t = () => {
      let t = Ws;
      ((Ws = n),
        ++Is,
        (n.depsTail = void 0),
        (n.flags = Ms.Watching | Ms.RecursedCheck));
      try {
        return e();
      } finally {
        ((Ws = t), (n.flags &= ~Ms.RecursedCheck), qs(n));
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: Ms.Watching | Ms.RecursedCheck,
      notify() {
        let e = this.flags;
        e & Ms.Dirty || (e & Ms.Pending && Bs(this.deps, this))
          ? t()
          : (this.flags = Ms.Watching);
      },
      stop() {
        ((this.flags = Ms.None), (this.depsTail = void 0), qs(this));
      },
    };
  return (t(), n);
}
var Zs = c((e) => {
    var t = i();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      a = t.useState,
      o = t.useEffect,
      s = t.useLayoutEffect,
      c = t.useDebugValue;
    function l(e, t) {
      var n = t(),
        r = a({ inst: { value: n, getSnapshot: t } }),
        i = r[0].inst,
        l = r[1];
      return (
        s(
          function () {
            ((i.value = n), (i.getSnapshot = t), u(i) && l({ inst: i }));
          },
          [e, n, t]
        ),
        o(
          function () {
            return (
              u(i) && l({ inst: i }),
              e(function () {
                u(i) && l({ inst: i });
              })
            );
          },
          [e]
        ),
        c(n),
        n
      );
    }
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? d
        : l;
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  Qs = c((e, t) => {
    t.exports = Zs();
  }),
  $s = c((e) => {
    var t = i(),
      n = Qs();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var a = typeof Object.is == `function` ? Object.is : r,
      o = n.useSyncExternalStore,
      s = t.useRef,
      c = t.useEffect,
      l = t.useMemo,
      u = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
      var d = s(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = l(
        function () {
          function e(e) {
            if (!o) {
              if (((o = !0), (s = e), (e = r(e)), i !== void 0 && f.hasValue)) {
                var t = f.value;
                if (i(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), a(s, e))) return t;
            var n = r(e);
            return i !== void 0 && i(t, n) ? ((s = e), t) : ((s = e), (c = n));
          }
          var o = !1,
            s,
            c,
            l = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            l === null
              ? void 0
              : function () {
                  return e(l());
                },
          ];
        },
        [t, n, r, i]
      );
      var p = o(e, d[0], d[1]);
      return (
        c(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p]
        ),
        u(p),
        p
      );
    };
  }),
  ec = c((e, t) => {
    t.exports = $s();
  }),
  tc = ec();
function nc(e, t) {
  return e === t;
}
function rc(e, t, n = nc) {
  let r = (0, L.useCallback)(
      (t) => {
        if (!e) return () => {};
        let { unsubscribe: n } = e.subscribe(t);
        return n;
      },
      [e]
    ),
    i = (0, L.useCallback)(() => e?.get(), [e]);
  return (0, tc.useSyncExternalStoreWithSelector)(r, i, i, t, n);
}
var ic = { get: () => void 0, subscribe: () => ({ unsubscribe: () => {} }) };
function ac(e) {
  let t = ks(),
    n = L.useContext(e.from ? js : As),
    r = e.from ?? n,
    i = r
      ? e.from
        ? t.stores.getRouteMatchStore(r)
        : t.stores.matchStores.get(r)
      : void 0,
    a = L.useRef(void 0);
  return rc(i ?? ic, (n) => {
    if (((e.shouldThrow ?? !0) && !n && Ce(), n === void 0)) return;
    let r = e.select ? e.select(n) : n;
    if (e.structuralSharing ?? t.options.defaultStructuralSharing) {
      let e = ce(a.current, r);
      return ((a.current = e), e);
    }
    return r;
  });
}
function oc(e) {
  return ac({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function sc(e) {
  let { select: t, ...n } = e;
  return ac({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function cc(e) {
  return ac({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      let n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function lc(e) {
  return ac({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function uc(e) {
  let t = ks();
  return L.useCallback(
    (n) => t.navigate({ ...n, from: n.from ?? e?.from }),
    [e?.from, t]
  );
}
function dc(e) {
  return ac({
    ...e,
    select: (t) => (e.select ? e.select(t.context) : t.context),
  });
}
var fc = n(l(), 1);
function pc(e, t) {
  let n = ks(),
    r = vs(t),
    {
      activeProps: i,
      inactiveProps: a,
      activeOptions: o,
      to: s,
      preload: c,
      preloadDelay: l,
      preloadIntentProximity: u,
      hashScrollIntoView: d,
      replace: f,
      startTransition: p,
      resetScroll: m,
      viewTransition: h,
      children: g,
      target: _,
      disabled: v,
      style: y,
      className: b,
      onClick: x,
      onBlur: ee,
      onFocus: S,
      onMouseEnter: te,
      onMouseLeave: re,
      onTouchStart: ie,
      ignoreBlocker: ae,
      params: oe,
      search: se,
      hash: ce,
      state: le,
      mask: ue,
      reloadDocument: de,
      unsafeRelative: fe,
      from: w,
      _fromLocation: pe,
      ...me
    } = e,
    he = Es(),
    ge = L.useMemo(
      () => e,
      [
        n,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        e.search,
        e.params,
        e.state,
        e.mask,
        e.unsafeRelative,
      ]
    ),
    _e = rc(
      n.stores.location,
      (e) => e,
      (e, t) => e.href === t.href
    ),
    D = L.useMemo(() => {
      let e = { _fromLocation: _e, ...ge };
      return n.buildLocation(e);
    }, [n, _e, ge]),
    ve = D.maskedLocation ? D.maskedLocation.publicHref : D.publicHref,
    ye = D.maskedLocation ? D.maskedLocation.external : D.external,
    be = L.useMemo(() => Sc(ve, ye, n.history, v), [v, ye, ve, n.history]),
    xe = L.useMemo(() => {
      if (be?.external)
        return E(be.href, n.protocolAllowlist) ? void 0 : be.href;
      if (!Cc(s) && !(typeof s != `string` || s.indexOf(`:`) === -1))
        try {
          return (new URL(s), E(s, n.protocolAllowlist) ? void 0 : s);
        } catch {}
    }, [s, be, n.protocolAllowlist]),
    Se = L.useMemo(() => {
      if (xe) return !1;
      if (o?.exact) {
        if (!tt(_e.pathname, D.pathname, n.basepath)) return !1;
      } else {
        let e = et(_e.pathname, n.basepath),
          t = et(D.pathname, n.basepath);
        if (
          !(e.startsWith(t) && (e.length === t.length || e[t.length] === `/`))
        )
          return !1;
      }
      return (o?.includeSearch ?? !0) &&
        !C(_e.search, D.search, {
          partial: !o?.exact,
          ignoreUndefined: !o?.explicitUndefined,
        })
        ? !1
        : o?.includeHash
          ? he && _e.hash === D.hash
          : !0;
    }, [
      o?.exact,
      o?.explicitUndefined,
      o?.includeHash,
      o?.includeSearch,
      _e,
      xe,
      he,
      D.hash,
      D.pathname,
      D.search,
      n.basepath,
    ]),
    Ce = Se ? (ne(i, {}) ?? hc) : mc,
    we = Se ? mc : (ne(a, {}) ?? mc),
    Te = [b, Ce.className, we.className].filter(Boolean).join(` `),
    Ee = (y || Ce.style || we.style) && { ...y, ...Ce.style, ...we.style },
    [De, Oe] = L.useState(!1),
    ke = L.useRef(!1),
    Ae = e.reloadDocument || xe ? !1 : (c ?? n.options.defaultPreload),
    je = l ?? n.options.defaultPreloadDelay ?? 0,
    Me = L.useCallback(() => {
      n.preloadRoute({ ...ge, _builtLocation: D }).catch((e) => {
        (console.warn(e), console.warn(Nn));
      });
    }, [n, ge, D]);
  (_s(
    r,
    L.useCallback(
      (e) => {
        e?.isIntersecting && Me();
      },
      [Me]
    ),
    bc,
    { disabled: !!v || Ae !== `viewport` }
  ),
    L.useEffect(() => {
      ke.current || (!v && Ae === `render` && (Me(), (ke.current = !0)));
    }, [v, Me, Ae]));
  let Ne = (e) => {
    let t = e.currentTarget.getAttribute(`target`),
      r = _ === void 0 ? t : _;
    if (
      !v &&
      !Tc(e) &&
      !e.defaultPrevented &&
      (!r || r === `_self`) &&
      e.button === 0
    ) {
      (e.preventDefault(),
        (0, fc.flushSync)(() => {
          Oe(!0);
        }));
      let t = n.subscribe(`onResolved`, () => {
        (t(), Oe(!1));
      });
      n.navigate({
        ...ge,
        replace: f,
        resetScroll: m,
        hashScrollIntoView: d,
        startTransition: p,
        viewTransition: h,
        ignoreBlocker: ae,
      });
    }
  };
  if (xe)
    return {
      ...me,
      ref: r,
      href: xe,
      ...(g && { children: g }),
      ...(_ && { target: _ }),
      ...(v && { disabled: v }),
      ...(y && { style: y }),
      ...(b && { className: b }),
      ...(x && { onClick: x }),
      ...(ee && { onBlur: ee }),
      ...(S && { onFocus: S }),
      ...(te && { onMouseEnter: te }),
      ...(re && { onMouseLeave: re }),
      ...(ie && { onTouchStart: ie }),
    };
  let Pe = (e) => {
      if (v || Ae !== `intent`) return;
      if (!je) {
        Me();
        return;
      }
      let t = e.currentTarget;
      if (yc.has(t)) return;
      let n = setTimeout(() => {
        (yc.delete(t), Me());
      }, je);
      yc.set(t, n);
    },
    Fe = (e) => {
      v || Ae !== `intent` || Me();
    },
    Ie = (e) => {
      if (v || !Ae || !je) return;
      let t = e.currentTarget,
        n = yc.get(t);
      n && (clearTimeout(n), yc.delete(t));
    };
  return {
    ...me,
    ...Ce,
    ...we,
    href: be?.href,
    ref: r,
    onClick: xc([x, Ne]),
    onBlur: xc([ee, Ie]),
    onFocus: xc([S, Pe]),
    onMouseEnter: xc([te, Pe]),
    onMouseLeave: xc([re, Ie]),
    onTouchStart: xc([ie, Fe]),
    disabled: !!v,
    target: _,
    ...(Ee && { style: Ee }),
    ...(Te && { className: Te }),
    ...(v && gc),
    ...(Se && _c),
    ...(he && De && vc),
  };
}
var mc = {},
  hc = { className: `active` },
  gc = { role: `link`, 'aria-disabled': !0 },
  _c = { 'data-status': `active`, 'aria-current': `page` },
  vc = { 'data-transitioning': `transitioning` },
  yc = new WeakMap(),
  bc = { rootMargin: `100px` },
  xc = (e) => (t) => {
    for (let n of e)
      if (n) {
        if (t.defaultPrevented) return;
        n(t);
      }
  };
function Sc(e, t, n, r) {
  if (!r)
    return t
      ? { href: e, external: !0 }
      : { href: n.createHref(e) || `/`, external: !1 };
}
function Cc(e) {
  if (typeof e != `string`) return !1;
  let t = e.charCodeAt(0);
  return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var wc = L.forwardRef((e, t) => {
  let { _asChild: n, ...r } = e,
    { type: i, ...a } = pc(r, t),
    o =
      typeof r.children == `function`
        ? r.children({ isActive: a[`data-status`] === `active` })
        : r.children;
  if (!n) {
    let { disabled: e, ...t } = a;
    return L.createElement(`a`, t, o);
  }
  return L.createElement(n, a, o);
});
function Tc(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Ec = class extends Bn {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        ac({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => dc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        lc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        cc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => sc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => oc({ ...e, from: this.id })),
      (this.useNavigate = () => uc({ from: this.fullPath })),
      (this.Link = L.forwardRef((e, t) =>
        (0, R.jsx)(wc, { ref: t, from: this.fullPath, ...e })
      )));
  }
};
function Dc(e) {
  return new Ec(e);
}
var Oc = class extends Vn {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        ac({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => dc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        lc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        cc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => sc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => oc({ ...e, from: this.id })),
      (this.useNavigate = () => uc({ from: this.fullPath })),
      (this.Link = L.forwardRef((e, t) =>
        (0, R.jsx)(wc, { ref: t, from: this.fullPath, ...e })
      )));
  }
};
function kc(e) {
  return new Oc(e);
}
function z(e) {
  return new Ac(e, { silent: !0 }).createRoute;
}
var Ac = class {
  constructor(e, t) {
    ((this.path = e),
      (this.createRoute = (e) => {
        let t = Dc(e);
        return ((t.isRoot = !1), t);
      }),
      (this.silent = t?.silent));
  }
};
function B(e, t) {
  let n,
    r,
    i,
    a,
    o = () => (
      (n ||= e()
        .then((e) => {
          ((n = void 0), (r = e[t ?? `default`]));
        })
        .catch((e) => {
          if (
            ((i = e),
            pe(i) &&
              i instanceof Error &&
              typeof window < `u` &&
              typeof sessionStorage < `u`)
          ) {
            let e = `tanstack_router_reload:${i.message}`;
            sessionStorage.getItem(e) ||
              (sessionStorage.setItem(e, `1`), (a = !0));
          }
        })),
      n
    ),
    s = function (e) {
      if (a) throw (window.location.reload(), new Promise(() => {}));
      if (i) throw i;
      if (!r)
        if (ms) ms(o());
        else throw o();
      return L.createElement(r, e);
    };
  return ((s.preload = o), s);
}
function jc(e) {
  let t = ks(),
    n = `not-found-${rc(t.stores.location, (e) => e.pathname)}-${rc(t.stores.status, (e) => e)}`;
  return (0, R.jsx)(Ss, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (ct(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if (ct(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function Mc() {
  return (0, R.jsx)(`p`, { children: `Not Found` });
}
function Nc(e) {
  return (0, R.jsx)(R.Fragment, { children: e.children });
}
function Pc(e, t, n) {
  return t.options.notFoundComponent
    ? (0, R.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, R.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, R.jsx)(Mc, {});
}
var Fc = L.memo(function ({ matchId: e }) {
  let t = ks(),
    n = t.stores.matchStores.get(e);
  n || Ce();
  let r = rc(t.stores.loadedAt, (e) => e),
    i = rc(n, (e) => e);
  return (0, R.jsx)(Ic, {
    router: t,
    matchId: e,
    resetKey: r,
    matchState: L.useMemo(() => {
      let e = i.routeId,
        n = t.routesById[e].parentRoute?.id;
      return {
        routeId: e,
        ssr: i.ssr,
        _displayPending: i._displayPending,
        parentRouteId: n,
      };
    }, [i._displayPending, i.routeId, i.ssr, t.routesById]),
  });
});
function Ic({ router: e, matchId: t, resetKey: n, matchState: r }) {
  let i = e.routesById[r.routeId],
    a = i.options.pendingComponent ?? e.options.defaultPendingComponent,
    o = a ? (0, R.jsx)(a, {}) : null,
    s = i.options.errorComponent ?? e.options.defaultErrorComponent,
    c = i.options.onCatch ?? e.options.defaultOnCatch,
    l = i.isRoot
      ? (i.options.notFoundComponent ??
        e.options.notFoundRoute?.options.component)
      : i.options.notFoundComponent,
    u = r.ssr === !1 || r.ssr === `data-only`,
    d =
      (!i.isRoot || i.options.wrapInSuspense || u) &&
      (i.options.wrapInSuspense ??
        a ??
        (i.options.errorComponent?.preload || u))
        ? L.Suspense
        : Nc,
    f = s ? Ss : Nc,
    p = l ? jc : Nc;
  return (0, R.jsxs)(i.isRoot ? (i.options.shellComponent ?? Nc) : Nc, {
    children: [
      (0, R.jsx)(As.Provider, {
        value: t,
        children: (0, R.jsx)(d, {
          fallback: o,
          children: (0, R.jsx)(f, {
            getResetKey: () => n,
            errorComponent: s || ws,
            onCatch: (e, t) => {
              if (ct(e)) throw ((e.routeId ??= r.routeId), e);
              c?.(e, t);
            },
            children: (0, R.jsx)(p, {
              fallback: (e) => {
                if (
                  ((e.routeId ??= r.routeId),
                  !l ||
                    (e.routeId && e.routeId !== r.routeId) ||
                    (!e.routeId && !i.isRoot))
                )
                  throw e;
                return L.createElement(l, e);
              },
              children:
                u || r._displayPending
                  ? (0, R.jsx)(Ts, {
                      fallback: o,
                      children: (0, R.jsx)(Rc, { matchId: t }),
                    })
                  : (0, R.jsx)(Rc, { matchId: t }),
            }),
          }),
        }),
      }),
      r.parentRouteId === `__root__`
        ? (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(Lc, { resetKey: n }),
              (e.options.scrollRestoration, null),
            ],
          })
        : null,
    ],
  });
}
function Lc({ resetKey: e }) {
  let t = ks(),
    n = L.useRef(void 0);
  return (
    hs(() => {
      let e = t.latestLocation.href;
      (n.current === void 0 || n.current !== e) &&
        (t.emit({
          type: `onRendered`,
          ...an(t.stores.location.get(), t.stores.resolvedLocation.get()),
        }),
        (n.current = e));
    }, [t.latestLocation.state.__TSR_key, e, t]),
    null
  );
}
var Rc = L.memo(function ({ matchId: e }) {
    let t = ks(),
      n = (e, n) => t.getMatch(e.id)?._nonReactive[n] ?? e._nonReactive[n],
      r = t.stores.matchStores.get(e);
    r || Ce();
    let i = rc(r, (e) => e),
      a = i.routeId,
      o = t.routesById[a],
      s = L.useMemo(() => {
        let e = (
          t.routesById[a].options.remountDeps ?? t.options.defaultRemountDeps
        )?.({
          routeId: a,
          loaderDeps: i.loaderDeps,
          params: i._strictParams,
          search: i._strictSearch,
        });
        return e ? JSON.stringify(e) : void 0;
      }, [
        a,
        i.loaderDeps,
        i._strictParams,
        i._strictSearch,
        t.options.defaultRemountDeps,
        t.routesById,
      ]),
      c = L.useMemo(() => {
        let e = o.options.component ?? t.options.defaultComponent;
        return e ? (0, R.jsx)(e, {}, s) : (0, R.jsx)(zc, {});
      }, [s, o.options.component, t.options.defaultComponent]);
    if (i._displayPending) throw n(i, `displayPendingPromise`);
    if (i._forcePending) throw n(i, `minPendingPromise`);
    if (i.status === `pending`) {
      let e = o.options.pendingMinMs ?? t.options.defaultPendingMinMs;
      if (e) {
        let n = t.getMatch(i.id);
        if (n && !n._nonReactive.minPendingPromise) {
          let t = w();
          ((n._nonReactive.minPendingPromise = t),
            setTimeout(() => {
              (t.resolve(), (n._nonReactive.minPendingPromise = void 0));
            }, e));
        }
      }
      throw n(i, `loadPromise`);
    }
    if (i.status === `notFound`)
      return (ct(i.error) || Ce(), Pc(t, o, i.error));
    if (i.status === `redirected`)
      throw (O(i.error) || Ce(), n(i, `loadPromise`));
    if (i.status === `error`) throw i.error;
    return c;
  }),
  zc = L.memo(function () {
    let e = ks(),
      t = L.useContext(As),
      n,
      r = !1,
      i;
    {
      let a = t ? e.stores.matchStores.get(t) : void 0;
      (([n, r] = rc(a, (e) => [e?.routeId, e?.globalNotFound ?? !1])),
        (i = rc(
          e.stores.matchesId,
          (e) => e[e.findIndex((e) => e === t) + 1]
        )));
    }
    let a = n ? e.routesById[n] : void 0,
      o = e.options.defaultPendingComponent
        ? (0, R.jsx)(e.options.defaultPendingComponent, {})
        : null;
    if (r) return (a || Ce(), Pc(e, a, void 0));
    if (!i) return null;
    let s = (0, R.jsx)(Fc, { matchId: i });
    return n === `__root__`
      ? (0, R.jsx)(L.Suspense, { fallback: o, children: s })
      : s;
  });
function Bc() {
  let e = ks(),
    t = L.useRef({ router: e, mounted: !1 }),
    [n, r] = L.useState(!1),
    i = rc(e.stores.isLoading, (e) => e),
    a = rc(e.stores.hasPending, (e) => e),
    o = gs(i),
    s = i || n || a,
    c = gs(s),
    l = i || a,
    u = gs(l);
  return (
    (e.startTransition = (e) => {
      (r(!0),
        L.startTransition(() => {
          (e(), r(!1));
        }));
    }),
    L.useEffect(() => {
      let t = e.history.subscribe(e.load),
        n = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        Qe(e.latestLocation.publicHref) !== Qe(n.publicHref) &&
          e.commitLocation({ ...n, replace: !0 }),
        () => {
          t();
        }
      );
    }, [e, e.history]),
    hs(() => {
      (typeof window < `u` && e.ssr) ||
        (t.current.router === e && t.current.mounted) ||
        ((t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (e) {
            console.error(e);
          }
        })());
    }, [e]),
    hs(() => {
      o &&
        !i &&
        e.emit({
          type: `onLoad`,
          ...an(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [o, e, i]),
    hs(() => {
      u &&
        !l &&
        e.emit({
          type: `onBeforeRouteMount`,
          ...an(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [l, u, e]),
    hs(() => {
      if (c && !s) {
        let t = an(e.stores.location.get(), e.stores.resolvedLocation.get());
        (e.emit({ type: `onResolved`, ...t }),
          Ks(() => {
            (e.stores.status.set(`idle`),
              e.stores.resolvedLocation.set(e.stores.location.get()));
          }));
      }
    }, [s, c, e]),
    null
  );
}
function Vc() {
  let e = ks(),
    t =
      e.routesById.__root__.options.pendingComponent ??
      e.options.defaultPendingComponent,
    n = t ? (0, R.jsx)(t, {}) : null,
    r = (0, R.jsxs)(typeof document < `u` && e.ssr ? Nc : L.Suspense, {
      fallback: n,
      children: [(0, R.jsx)(Bc, {}), (0, R.jsx)(Hc, {})],
    });
  return e.options.InnerWrap
    ? (0, R.jsx)(e.options.InnerWrap, { children: r })
    : r;
}
function Hc() {
  let e = ks(),
    t = rc(e.stores.firstId, (e) => e),
    n = rc(e.stores.loadedAt, (e) => e),
    r = t ? (0, R.jsx)(Fc, { matchId: t }) : null;
  return (0, R.jsx)(As.Provider, {
    value: t,
    children: e.options.disableGlobalCatchBoundary
      ? r
      : (0, R.jsx)(Ss, {
          getResetKey: () => n,
          errorComponent: ws,
          onCatch: void 0,
          children: r,
        }),
  });
}
var Uc = (e) => ({
    createMutableStore: Ys,
    createReadonlyStore: Ys,
    batch: Ks,
  }),
  Wc = (e) => new Gc(e),
  Gc = class extends sn {
    constructor(e) {
      super(e, Uc);
    }
  };
function Kc({ router: e, children: t, ...n }) {
  ae(n) &&
    e.update({
      ...e.options,
      ...n,
      context: { ...e.options.context, ...n.context },
    });
  let r = (0, R.jsx)(Os.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, R.jsx)(e.options.Wrap, { children: r }) : r;
}
function qc({ router: e, ...t }) {
  return (0, R.jsx)(Kc, { router: e, ...t, children: (0, R.jsx)(Vc, {}) });
}
function Jc(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function Yc(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e;
  switch (e.tag) {
    case `title`:
      return (0, R.jsx)(`title`, {
        ...t,
        suppressHydrationWarning: !0,
        children: n,
      });
    case `meta`:
      return (0, R.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, R.jsx)(`link`, {
        ...t,
        precedence:
          t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return (
        e.inlineCss,
        (0, R.jsx)(`style`, {
          ...t,
          dangerouslySetInnerHTML: { __html: n },
          nonce: r,
        })
      );
    case `script`:
      return (0, R.jsx)(Xc, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function Xc({ attrs: e, children: t, preventScriptHoist: n }) {
  ks();
  let r = Es(),
    i =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (L.useEffect(() => {
      if (!i) {
        if (e?.src) {
          let t = (() => {
            try {
              let t = document.baseURI || window.location.href;
              return new URL(e.src, t).href;
            } catch {
              return e.src;
            }
          })();
          for (let e of document.querySelectorAll(`script[src]`))
            if (e.src === t) return;
          let n = document.createElement(`script`);
          return (Jc(n, e), document.head.appendChild(n), () => n.remove());
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (let e of document.querySelectorAll(`script:not([src])`)) {
            if (!(e instanceof HTMLScriptElement)) continue;
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          let i = document.createElement(`script`);
          return (
            (i.textContent = t),
            Jc(i, e),
            document.head.appendChild(i),
            () => i.remove()
          );
        }
      }
    }, [e, t, i]),
    i && typeof t == `string`)
  )
    return (0, R.jsx)(`script`, {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: t },
    });
  if (!r) {
    if (e?.src)
      return (0, R.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, R.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: { __html: t },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var Zc = (e) => {
  let t = ks(),
    n = t.options.ssr?.nonce,
    r = rc(
      t.stores.matches,
      (e) => e.map((e) => e.meta).filter((e) => e !== void 0),
      C
    ),
    i = L.useMemo(() => {
      let e = [],
        t = {},
        i;
      for (let a = r.length - 1; a >= 0; a--) {
        let o = r[a];
        for (let r = o.length - 1; r >= 0; r--) {
          let a = o[r];
          if (a)
            if (a.title) i ||= { tag: `title`, children: a.title };
            else if (`script:ld+json` in a)
              try {
                let t = JSON.stringify(a[`script:ld+json`]);
                e.push({
                  tag: `script`,
                  attrs: { type: `application/ld+json` },
                  children: ye(t),
                });
              } catch {}
            else {
              let r = a.name ?? a.property;
              if (r) {
                if (t[r]) continue;
                t[r] = !0;
              }
              e.push({ tag: `meta`, attrs: { ...a, nonce: n } });
            }
        }
      }
      return (
        i && e.push(i),
        n &&
          e.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: n } }),
        e.reverse(),
        e
      );
    }, [r, n]),
    a = rc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.links ?? [])
          .filter((e) => e !== void 0)
          .map((e) => ({ tag: `link`, attrs: { ...e, nonce: n } })),
      C
    ),
    o = rc(
      t.stores.matches,
      (r) => {
        let i = t.ssr?.manifest,
          a = [];
        return i
          ? (r.forEach((t) => {
              i.routes[t.routeId]?.css?.forEach((t) => {
                let r = zn(t);
                a.push({
                  tag: `link`,
                  attrs: {
                    rel: `stylesheet`,
                    ...r,
                    crossOrigin: Pn(e, `stylesheet`) ?? r.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: n,
                  },
                });
              });
            }),
            i.inlineStyle &&
              a.push({
                tag: `style`,
                attrs: { ...i.inlineStyle.attrs, nonce: n },
                children: i.inlineStyle.children,
                inlineCss: !0,
              }),
            a)
          : a;
      },
      C
    ),
    s = rc(
      t.stores.matches,
      (r) => {
        let i = [],
          a = t.ssr?.manifest;
        return (
          a &&
            r.forEach((t) => {
              a.routes[t.routeId]?.preloads?.forEach((t) => {
                i.push({ tag: `link`, attrs: { ...In(a, t, e), nonce: n } });
              });
            }),
          i
        );
      },
      C
    ),
    c = rc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.styles ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `style`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      C
    ),
    l = rc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.headScripts ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `script`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      C
    ),
    u = [];
  return (
    Rn(u, i),
    u.push(...s),
    Rn(u, a),
    u.push(...o),
    Rn(u, c),
    Rn(u, l),
    u
  );
};
function Qc(e) {
  let t = Zc(e.assetCrossOrigin),
    n = ks().options.ssr?.nonce;
  return (0, R.jsx)(R.Fragment, {
    children: t.map((e) =>
      (0, L.createElement)(Yc, {
        ...e,
        key: `tsr-meta-${JSON.stringify(e)}`,
        nonce: n,
      })
    ),
  });
}
var $c = () => {
  let e = ks(),
    t = e.options.ssr?.nonce,
    n = (n) => {
      let r = [],
        i = e.ssr?.manifest;
      if (!i) return [];
      for (let e of n) {
        let n = i.routes[e.routeId]?.scripts;
        if (n)
          for (let e of n)
            r.push({
              tag: `script`,
              attrs: { ...e.attrs, nonce: t },
              children: e.children,
              ...(typeof e.attrs?.src == `string`
                ? { preventScriptHoist: !0 }
                : {}),
            });
      }
      return r;
    },
    r = (e) =>
      e
        .map((e) => e.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: e, ...n }) => ({
          tag: `script`,
          attrs: { ...n, suppressHydrationWarning: !0, nonce: t },
          children: e,
        })),
    i = rc(e.stores.matches, n, C);
  return el(e, rc(e.stores.matches, r, C), i);
};
function el(e, t, n) {
  let r = [...t, ...n];
  return (0, R.jsx)(R.Fragment, {
    children: r.map((e, t) =>
      (0, L.createElement)(Yc, { ...e, key: `tsr-scripts-${e.tag}-${t}` })
    ),
  });
}
var tl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  nl = new (class extends tl {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  rl = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  il = new (class {
    #e = rl;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function al(e) {
  setTimeout(e, 0);
}
var ol = typeof window > `u` || `Deno` in globalThis;
function sl() {}
function cl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ll(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function ul(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function dl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function fl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function pl(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== hl(o, t.options)) return !1;
    } else if (!_l(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function ml(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (gl(t.options.mutationKey) !== gl(a)) return !1;
    } else if (!_l(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function hl(e, t) {
  return (t?.queryKeyHashFn || gl)(e);
}
function gl(e) {
  return JSON.stringify(e, (e, t) =>
    Sl(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t
  );
}
function _l(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t &&
        e &&
        t &&
        typeof e == `object` &&
        typeof t == `object`
      ? Object.keys(t).every((n) => _l(e[n], t[n]))
      : !1;
}
var vl = Object.prototype.hasOwnProperty;
function yl(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = xl(e) && xl(t);
  if (!r && !(Sl(e) && Sl(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : vl.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = yl(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function bl(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function xl(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Sl(e) {
  if (!Cl(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !Cl(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Cl(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function wl(e) {
  return new Promise((t) => {
    il.setTimeout(t, e);
  });
}
function Tl(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : yl(e, t);
}
function El(e) {
  return e;
}
function Dl(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Ol(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var kl = Symbol();
function Al(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === kl
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function jl(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function Ml(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, 'signal', {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var Nl = (() => {
  let e = () => ol;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function Pl() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var Fl = al;
function Il() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = Fl,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var Ll = Il(),
  Rl = new (class extends tl {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function zl(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Bl(e) {
  return (e ?? `online`) === `online` ? Rl.isOnline() : !0;
}
var Vl = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function Hl(e) {
  let t = !1,
    n = 0,
    r,
    i = Pl(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new Vl(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      nl.isFocused() &&
      (e.networkMode === `always` || Rl.isOnline()) &&
      e.canRun(),
    u = () => Bl(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (Nl.isServer() ? 0 : 3),
            o = e.retryDelay ?? zl,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            wl(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var Ul = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      ll(this.gcTime) &&
        (this.#e = il.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Nl.isServer() ? 1 / 0 : 300 * 1e3)
    );
  }
  clearGcTimeout() {
    this.#e !== void 0 && (il.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function Wl(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Ml(
                e,
                () => t.signal,
                () => (n = !0)
              );
            },
            u = Al(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = await u(
                  (() => {
                    let e = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: i ? `backward` : `forward`,
                      meta: t.options.meta,
                    };
                    return (l(e), e);
                  })()
                ),
                { maxPages: o } = t.options,
                s = i ? Ol : Dl;
              return {
                pages: s(e.pages, a, o),
                pageParams: s(e.pageParams, r, o),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? H : V,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : V(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n
            ))
        : (t.fetchFn = l);
    },
  };
}
function V(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function H(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var U = class extends Ul {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Gl(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Gl(this.options);
      e.data !== void 0 &&
        (this.setState(G(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this);
  }
  setData(e, t) {
    let n = Tl(this.state.data, e, this.options);
    return (
      this.#l({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(sl).catch(sl) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => fl(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === kl || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => dl(e.options.staleTime, this) === `static`)
      : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !ul(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a &&
          (this.#s || this.#c()
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return (
      this.state.fetchStatus === `paused` && this.state.status === `pending`
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, 'signal', {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = Al(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (r(e), e);
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        );
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite`
      ? Wl(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = Hl({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          (e instanceof Vl &&
            e.revert &&
            this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort());
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof Vl) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return {
            ...t,
            ...W(t.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case `success`:
          let n = {
            ...t,
            ...G(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      Ll.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function W(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Bl(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function G(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Gl(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var Kl = class extends tl {
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#s = null),
      (this.#o = Pl()),
      this.bindMethods(),
      this.setOptions(t));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      Jl(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Yl(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Yl(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this));
  }
  setOptions(e) {
    let t = this.options,
      n = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof fl(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      t._defaulted &&
        !bl(this.options, t) &&
        this.#e
          .getQueryCache()
          .notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this,
          }));
    let r = this.hasListeners();
    (r && Xl(this.#t, n, this.options, t) && this.#h(),
      this.updateResult(),
      r &&
        (this.#t !== n ||
          fl(this.options.enabled, this.#t) !== fl(t.enabled, this.#t) ||
          dl(this.options.staleTime, this.#t) !== dl(t.staleTime, this.#t)) &&
        this.#g());
    let i = this.#_();
    r &&
      (this.#t !== n ||
        fl(this.options.enabled, this.#t) !== fl(t.enabled, this.#t) ||
        i !== this.#p) &&
      this.#v(i);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      n = this.createResult(t, e);
    return (
      Ql(this, n) &&
        ((this.#r = n), (this.#a = this.options), (this.#i = this.#t.state)),
      n
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (e, n) => (
        this.trackProp(n),
        t?.(n),
        n === `promise` &&
          (this.trackProp(`data`),
          !this.options.experimental_prefetchInRender &&
            this.#o.status === `pending` &&
            this.#o.reject(
              Error(`experimental_prefetchInRender feature flag is not enabled`)
            )),
        Reflect.get(e, n)
      ),
    });
  }
  trackProp(e) {
    this.#m.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    let t = this.#e.defaultQueryOptions(e),
      n = this.#e.getQueryCache().build(this.#e, t);
    return n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return this.#h({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r)
    );
  }
  #h(e) {
    this.#S();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(sl)), t);
  }
  #g() {
    this.#b();
    let e = dl(this.options.staleTime, this.#t);
    if (Nl.isServer() || this.#r.isStale || !ll(e)) return;
    let t = ul(this.#r.dataUpdatedAt, e) + 1;
    this.#d = il.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, t);
  }
  #_() {
    return (
      (typeof this.options.refetchInterval == `function`
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(e) {
    (this.#x(),
      (this.#p = e),
      !(
        Nl.isServer() ||
        fl(this.options.enabled, this.#t) === !1 ||
        !ll(this.#p) ||
        this.#p === 0
      ) &&
        (this.#f = il.setInterval(() => {
          (this.options.refetchIntervalInBackground || nl.isFocused()) &&
            this.#h();
        }, this.#p)));
  }
  #y() {
    (this.#g(), this.#v(this.#_()));
  }
  #b() {
    this.#d !== void 0 && (il.clearTimeout(this.#d), (this.#d = void 0));
  }
  #x() {
    this.#f !== void 0 && (il.clearInterval(this.#f), (this.#f = void 0));
  }
  createResult(e, t) {
    let n = this.#t,
      r = this.options,
      i = this.#r,
      a = this.#i,
      o = this.#a,
      s = e === n ? this.#n : e.state,
      { state: c } = e,
      l = { ...c },
      u = !1,
      d;
    if (t._optimisticResults) {
      let i = this.hasListeners(),
        a = !i && Jl(e, t),
        o = i && Xl(e, n, t, r);
      ((a || o) && (l = { ...l, ...W(c.data, e.options) }),
        t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`));
    }
    let { error: f, errorUpdatedAt: p, status: m } = l;
    d = l.data;
    let h = !1;
    if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
      let e;
      (i?.isPlaceholderData && t.placeholderData === o?.placeholderData
        ? ((e = i.data), (h = !0))
        : (e =
            typeof t.placeholderData == `function`
              ? t.placeholderData(this.#u?.state.data, this.#u)
              : t.placeholderData),
        e !== void 0 && ((m = `success`), (d = Tl(i?.data, e, t)), (u = !0)));
    }
    if (t.select && d !== void 0 && !h)
      if (i && d === a?.data && t.select === this.#c) d = this.#l;
      else
        try {
          ((this.#c = t.select),
            (d = t.select(d)),
            (d = Tl(i?.data, d, t)),
            (this.#l = d),
            (this.#s = null));
        } catch (e) {
          this.#s = e;
        }
    this.#s && ((f = this.#s), (d = this.#l), (p = Date.now()), (m = `error`));
    let g = l.fetchStatus === `fetching`,
      _ = m === `pending`,
      v = m === `error`,
      y = _ && g,
      b = d !== void 0,
      x = {
        status: m,
        fetchStatus: l.fetchStatus,
        isPending: _,
        isSuccess: m === `success`,
        isError: v,
        isInitialLoading: y,
        isLoading: y,
        data: d,
        dataUpdatedAt: l.dataUpdatedAt,
        error: f,
        errorUpdatedAt: p,
        failureCount: l.fetchFailureCount,
        failureReason: l.fetchFailureReason,
        errorUpdateCount: l.errorUpdateCount,
        isFetched: e.isFetched(),
        isFetchedAfterMount:
          l.dataUpdateCount > s.dataUpdateCount ||
          l.errorUpdateCount > s.errorUpdateCount,
        isFetching: g,
        isRefetching: g && !_,
        isLoadingError: v && !b,
        isPaused: l.fetchStatus === `paused`,
        isPlaceholderData: u,
        isRefetchError: v && b,
        isStale: Zl(e, t),
        refetch: this.refetch,
        promise: this.#o,
        isEnabled: fl(t.enabled, e) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      let t = x.data !== void 0,
        r = x.status === `error` && !t,
        i = (e) => {
          r ? e.reject(x.error) : t && e.resolve(x.data);
        },
        a = () => {
          i((this.#o = x.promise = Pl()));
        },
        o = this.#o;
      switch (o.status) {
        case `pending`:
          e.queryHash === n.queryHash && i(o);
          break;
        case `fulfilled`:
          (r || x.data !== o.value) && a();
          break;
        case `rejected`:
          (!r || x.error !== o.reason) && a();
          break;
      }
    }
    return x;
  }
  updateResult() {
    let e = this.#r,
      t = this.createResult(this.#t, this.options);
    ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      !bl(t, e) &&
        ((this.#r = t),
        this.#C({
          listeners: (() => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              n = typeof t == `function` ? t() : t;
            if (n === `all` || (!n && !this.#m.size)) return !0;
            let r = new Set(n ?? this.#m);
            return (
              this.options.throwOnError && r.add(`error`),
              Object.keys(this.#r).some((t) => {
                let n = t;
                return this.#r[n] !== e[n] && r.has(n);
              })
            );
          })(),
        })));
  }
  #S() {
    let e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    let t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#y());
  }
  #C(e) {
    Ll.batch(() => {
      (e.listeners &&
        this.listeners.forEach((e) => {
          e(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: `observerResultsUpdated` }));
    });
  }
};
function ql(e, t) {
  return (
    fl(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === `error` && fl(t.retryOnMount, e) === !1)
  );
}
function Jl(e, t) {
  return ql(e, t) || (e.state.data !== void 0 && Yl(e, t, t.refetchOnMount));
}
function Yl(e, t, n) {
  if (fl(t.enabled, e) !== !1 && dl(t.staleTime, e) !== `static`) {
    let r = typeof n == `function` ? n(e) : n;
    return r === `always` || (r !== !1 && Zl(e, t));
  }
  return !1;
}
function Xl(e, t, n, r) {
  return (
    (e !== t || fl(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== `error`) &&
    Zl(e, n)
  );
}
function Zl(e, t) {
  return fl(t.enabled, e) !== !1 && e.isStaleByTime(dl(t.staleTime, e));
}
function Ql(e, t) {
  return !bl(e.getCurrentResult(), t);
}
var $l = class extends Ul {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || eu()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = Hl({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      Ll.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function eu() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var tu = class extends tl {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new $l({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = nu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = nu(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = nu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    } else return !0;
  }
  runNext(e) {
    let t = nu(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    Ll.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => ml(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => ml(e, t));
  }
  notify(e) {
    Ll.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return Ll.batch(() => Promise.all(e.map((e) => e.continue().catch(sl))));
  }
};
function nu(e) {
  return e.options.scope?.id;
}
var ru = class extends tl {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? hl(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new U({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      Ll.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => pl(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => pl(e, t)) : t;
    }
    notify(e) {
      Ll.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      Ll.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      Ll.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  iu = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new ru()),
        (this.#t = e.mutationCache || new tu()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = nl.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = Rl.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(dl(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = cl(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return Ll.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      Ll.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return Ll.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        )
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = Ll.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(sl).catch(sl);
    }
    invalidateQueries(e, t = {}) {
      return Ll.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t
              )
        )
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = Ll.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(sl)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            })
        );
      return Promise.all(r).then(sl);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(dl(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(sl).catch(sl);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(sl).catch(sl);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return Rl.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(gl(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          _l(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(gl(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          _l(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= hl(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === kl && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  au = L.createContext(void 0),
  ou = (e) => {
    let t = L.useContext(au);
    if (e) return e;
    if (!t)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  su = ({ client: e, children: t }) => (
    L.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    (0, R.jsx)(au.Provider, { value: e, children: t })
  ),
  cu = L.createContext(!1),
  lu = () => L.useContext(cu);
cu.Provider;
function uu() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var du = L.createContext(uu()),
  fu = () => L.useContext(du),
  pu = (e, t, n) => {
    let r =
      n?.state.error && typeof e.throwOnError == `function`
        ? jl(e.throwOnError, [n.state.error, n])
        : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || r) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  mu = (e) => {
    L.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  hu = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: i,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((i && e.data === void 0) || jl(n, [e.error, r])),
  gu = (e) => {
    if (e.suspense) {
      let t = 1e3,
        n = (e) => (e === `static` ? e : Math.max(e ?? t, t)),
        r = e.staleTime;
      ((e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r)),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t)));
    }
  },
  _u = (e, t) => e.isLoading && e.isFetching && !t,
  vu = (e, t) => e?.suspense && t.isPending,
  yu = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function bu(e, t, n) {
  let r = lu(),
    i = fu(),
    a = ou(n),
    o = a.defaultQueryOptions(e);
  a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);
  let s = a.getQueryCache().get(o.queryHash),
    c = e.subscribed !== !1;
  ((o._optimisticResults = r ? `isRestoring` : c ? `optimistic` : void 0),
    gu(o),
    pu(o, i, s),
    mu(i));
  let l = !a.getQueryCache().get(o.queryHash),
    [u] = L.useState(() => new t(a, o)),
    d = u.getOptimisticResult(o),
    f = !r && c;
  if (
    (L.useSyncExternalStore(
      L.useCallback(
        (e) => {
          let t = f ? u.subscribe(Ll.batchCalls(e)) : sl;
          return (u.updateResult(), t);
        },
        [u, f]
      ),
      () => u.getCurrentResult(),
      () => u.getCurrentResult()
    ),
    L.useEffect(() => {
      u.setOptions(o);
    }, [o, u]),
    vu(o, d))
  )
    throw yu(o, u, i);
  if (
    hu({
      result: d,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: s,
      suspense: o.suspense,
    })
  )
    throw d.error;
  return (
    a.getDefaultOptions().queries?._experimental_afterQuery?.(o, d),
    o.experimental_prefetchInRender &&
      !Nl.isServer() &&
      _u(d, r) &&
      (l ? yu(o, u, i) : s?.promise)?.catch(sl).finally(() => {
        u.updateResult();
      }),
    o.notifyOnChangeProps ? d : u.trackResult(d)
  );
}
function xu(e, t) {
  return bu(e, Kl, t);
}
var Su = `modulepreload`,
  Cu = function (e) {
    return `/imagetoascii-replica/` + e;
  },
  wu = {},
  K = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e })
            )
          )
        );
      }
      r = o(
        t.map((t) => {
          if (((t = Cu(t, n)), t in wu)) return;
          wu[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : Su),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`))
                ));
            });
        })
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  };
function Tu(e) {
  return e !== `__proto__` && e !== `constructor` && e !== `prototype`;
}
function Eu(e, t) {
  let n = Object.create(null);
  if (e) for (let t of Object.keys(e)) Tu(t) && (n[t] = e[t]);
  if (t && typeof t == `object`)
    for (let e of Object.keys(t)) Tu(e) && (n[e] = t[e]);
  return n;
}
function Du(e) {
  if (!e) return Object.create(null);
  let t = Object.create(null);
  for (let n of Object.keys(e)) Tu(n) && (t[n] = e[n]);
  return t;
}
var Ou = () => {
    throw Error(
      `createServerOnlyFn() functions can only be called on the server!`
    );
  },
  ku = (e, t) => {
    let n = t || e || {};
    return (
      n.method === void 0 && (n.method = `GET`),
      Object.assign((e) => ku(void 0, { ...n, ...e }), {
        options: n,
        middleware: (e) => {
          let t = [...(n.middleware || [])];
          e.map((e) => {
            g in e
              ? e.options.middleware && t.push(...e.options.middleware)
              : t.push(e);
          });
          let r = ku(void 0, { ...n, middleware: t });
          return ((r[g] = !0), r);
        },
        inputValidator: (e) => ku(void 0, { ...n, inputValidator: e }),
        handler: (...e) => {
          let [t, r] = e,
            i = { ...n, extractedFn: t, serverFn: r },
            a = [...(i.middleware || []), Nu(i)];
          return (
            (t.method = n.method),
            Object.assign(
              async (e) => {
                let n = await Au(a, `client`, {
                    ...t,
                    ...i,
                    data: e?.data,
                    headers: e?.headers,
                    signal: e?.signal,
                    fetch: e?.fetch,
                    context: Du(),
                  }),
                  r = vt(n.error);
                if (r) throw r;
                if (n.error) throw n.error;
                return n.result;
              },
              {
                ...t,
                method: n.method,
                __executeServer: async (e) => {
                  let n = Ou(),
                    r = n.contextAfterGlobalMiddlewares;
                  return await Au(a, `server`, {
                    ...t,
                    ...e,
                    serverFnMeta: t.serverFnMeta,
                    context: Eu(e.context, r),
                    request: n.request,
                  }).then((e) => ({
                    result: e.result,
                    error: e.error,
                    context: e.sendContext,
                  }));
                },
              }
            )
          );
        },
      })
    );
  };
async function Au(e, t, n) {
  let r = ju([...(ee()?.functionMiddleware || []), ...e]);
  if (t === `server`) {
    let e = Ou({ throwIfNotFound: !1 });
    e?.executedRequestMiddlewares &&
      (r = r.filter((t) => !e.executedRequestMiddlewares.has(t)));
  }
  let i = async (e) => {
    let n = r.shift();
    if (!n) return e;
    try {
      `inputValidator` in n.options &&
        n.options.inputValidator &&
        t === `server` &&
        (e.data = await Mu(n.options.inputValidator, e.data));
      let r;
      if (
        (t === `client`
          ? `client` in n.options && (r = n.options.client)
          : `server` in n.options && (r = n.options.server),
        r)
      ) {
        let t = async (t = {}) => {
            let n = await i({
              ...e,
              ...t,
              context: Eu(e.context, t.context),
              sendContext: Eu(e.sendContext, t.sendContext),
              headers: us(e.headers, t.headers),
              _callSiteFetch: e._callSiteFetch,
              fetch: e._callSiteFetch ?? t.fetch ?? e.fetch,
              result:
                t.result === void 0
                  ? t instanceof Response
                    ? t
                    : e.result
                  : t.result,
              error: t.error ?? e.error,
            });
            if (n.error) throw n.error;
            return n;
          },
          n = await r({ ...e, next: t });
        if (O(n)) return { ...e, error: n };
        if (n instanceof Response) return { ...e, result: n };
        if (!n)
          throw Error(
            `User middleware returned undefined. You must call next() or return a result in your middlewares.`
          );
        return n;
      }
      return i(e);
    } catch (t) {
      return { ...e, error: t };
    }
  };
  return i({
    ...n,
    headers: n.headers || {},
    sendContext: n.sendContext || {},
    context: n.context || Du(),
    _callSiteFetch: n.fetch,
  });
}
function ju(e, t = 100) {
  let n = new Set(),
    r = [],
    i = (e, a) => {
      if (a > t)
        throw Error(
          `Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`
        );
      e.forEach((e) => {
        (e.options.middleware && i(e.options.middleware, a + 1),
          n.has(e) || (n.add(e), r.push(e)));
      });
    };
  return (i(e, 0), r);
}
async function Mu(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = await e[`~standard`].validate(t);
    if (n.issues) throw Error(JSON.stringify(n.issues, void 0, 2));
    return n.value;
  }
  if (`parse` in e) return e.parse(t);
  if (typeof e == `function`) return e(t);
  throw Error(`Invalid validator type!`);
}
function Nu(e) {
  return {
    '~types': void 0,
    options: {
      inputValidator: e.inputValidator,
      client: async ({ next: t, sendContext: n, fetch: r, ...i }) => {
        let a = { ...i, context: n, fetch: r };
        return t(await e.extractedFn?.(a));
      },
      server: async ({ next: t, ...n }) => {
        let r = await e.serverFn?.(n);
        return t({ ...n, result: r });
      },
    },
  };
}
var Pu = (e, t, n, r, i, a, o, s) => {
    let c = document.documentElement,
      l = [`light`, `dark`];
    function u(t) {
      ((Array.isArray(e) ? e : [e]).forEach((e) => {
        let n = e === `class`,
          r = n && a ? i.map((e) => a[e] || e) : i;
        n
          ? (c.classList.remove(...r), c.classList.add(a && a[t] ? a[t] : t))
          : c.setAttribute(e, t);
      }),
        d(t));
    }
    function d(e) {
      s && l.includes(e) && (c.style.colorScheme = e);
    }
    function f() {
      return window.matchMedia(`(prefers-color-scheme: dark)`).matches
        ? `dark`
        : `light`;
    }
    if (r) u(r);
    else
      try {
        let e = localStorage.getItem(t) || n;
        u(o && e === `system` ? f() : e);
      } catch {}
  },
  Fu = [`light`, `dark`],
  Iu = `(prefers-color-scheme: dark)`,
  Lu = typeof window > `u`,
  Ru = L.createContext(void 0),
  zu = { setTheme: (e) => {}, themes: [] },
  Bu = () => L.useContext(Ru) ?? zu,
  Vu = (e) =>
    L.useContext(Ru)
      ? L.createElement(L.Fragment, null, e.children)
      : L.createElement(Uu, { ...e }),
  Hu = [`light`, `dark`],
  Uu = ({
    forcedTheme: e,
    disableTransitionOnChange: t = !1,
    enableSystem: n = !0,
    enableColorScheme: r = !0,
    storageKey: i = `theme`,
    themes: a = Hu,
    defaultTheme: o = n ? `system` : `light`,
    attribute: s = `data-theme`,
    value: c,
    children: l,
    nonce: u,
    scriptProps: d,
  }) => {
    let [f, p] = L.useState(() => Gu(i, o)),
      [m, h] = L.useState(() => (f === `system` ? qu() : f)),
      g = c ? Object.values(c) : a,
      _ = L.useCallback(
        (e) => {
          let i = e;
          if (!i) return;
          e === `system` && n && (i = qu());
          let a = c ? c[i] : i,
            l = t ? Ku(u) : null,
            d = document.documentElement,
            f = (e) => {
              e === `class`
                ? (d.classList.remove(...g), a && d.classList.add(a))
                : e.startsWith(`data-`) &&
                  (a ? d.setAttribute(e, a) : d.removeAttribute(e));
            };
          if ((Array.isArray(s) ? s.forEach(f) : f(s), r)) {
            let e = Fu.includes(o) ? o : null,
              t = Fu.includes(i) ? i : e;
            d.style.colorScheme = t;
          }
          l?.();
        },
        [u]
      ),
      v = L.useCallback(
        (e) => {
          let t = typeof e == `function` ? e(f) : e;
          p(t);
          try {
            localStorage.setItem(i, t);
          } catch {}
        },
        [f]
      ),
      y = L.useCallback(
        (t) => {
          (h(qu(t)), f === `system` && n && !e && _(`system`));
        },
        [f, e]
      );
    (L.useEffect(() => {
      let e = window.matchMedia(Iu);
      return (e.addListener(y), y(e), () => e.removeListener(y));
    }, [y]),
      L.useEffect(() => {
        let e = (e) => {
          e.key === i && (e.newValue ? p(e.newValue) : v(o));
        };
        return (
          window.addEventListener(`storage`, e),
          () => window.removeEventListener(`storage`, e)
        );
      }, [v]),
      L.useEffect(() => {
        _(e ?? f);
      }, [e, f]));
    let b = L.useMemo(
      () => ({
        theme: f,
        setTheme: v,
        forcedTheme: e,
        resolvedTheme: f === `system` ? m : f,
        themes: n ? [...a, `system`] : a,
        systemTheme: n ? m : void 0,
      }),
      [f, v, e, m, n, a]
    );
    return L.createElement(
      Ru.Provider,
      { value: b },
      L.createElement(Wu, {
        forcedTheme: e,
        storageKey: i,
        attribute: s,
        enableSystem: n,
        enableColorScheme: r,
        defaultTheme: o,
        value: c,
        themes: a,
        nonce: u,
        scriptProps: d,
      }),
      l
    );
  },
  Wu = L.memo(
    ({
      forcedTheme: e,
      storageKey: t,
      attribute: n,
      enableSystem: r,
      enableColorScheme: i,
      defaultTheme: a,
      value: o,
      themes: s,
      nonce: c,
      scriptProps: l,
    }) => {
      let u = JSON.stringify([n, t, a, e, s, o, r, i]).slice(1, -1);
      return L.createElement(`script`, {
        ...l,
        suppressHydrationWarning: !0,
        nonce: typeof window > `u` ? c : ``,
        dangerouslySetInnerHTML: { __html: `(${Pu.toString()})(${u})` },
      });
    }
  ),
  Gu = (e, t) => {
    if (Lu) return;
    let n;
    try {
      n = localStorage.getItem(e) || void 0;
    } catch {}
    return n || t;
  },
  Ku = (e) => {
    let t = document.createElement(`style`);
    return (
      e && t.setAttribute(`nonce`, e),
      t.appendChild(
        document.createTextNode(
          `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      ),
      document.head.appendChild(t),
      () => {
        (window.getComputedStyle(document.body),
          setTimeout(() => {
            document.head.removeChild(t);
          }, 1));
      }
    );
  },
  qu = (e) => ((e ||= window.matchMedia(Iu)), e.matches ? `dark` : `light`),
  Ju = {
    BASE_URL: `/imagetoascii-replica/`,
    DEV: !1,
    MODE: `production`,
    PROD: !0,
    SSR: !1,
    TSS_DEV_SERVER: `false`,
    TSS_DEV_SSR_STYLES_BASEPATH: `/imagetoascii-replica/`,
    TSS_DEV_SSR_STYLES_ENABLED: `true`,
    TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`,
    TSS_INLINE_CSS_ENABLED: `false`,
    TSS_ROUTER_BASEPATH: `/imagetoascii-replica`,
    TSS_SERVER_FN_BASE: `/imagetoascii-replica/_serverFn/`,
    VITE_BASE_PATH: `/imagetoascii-replica`,
    VITE_STATIC_EXPORT: `true`,
  },
  q = {},
  J = (e) => Ju[e] ?? q[e],
  Yu = {
    app_url: J(`VITE_APP_URL`) ?? `http://localhost:3000`,
    app_name: J(`VITE_APP_NAME`) ?? `ShipAny`,
    app_description: J(`VITE_APP_DESCRIPTION`) ?? `Ship your SaaS faster`,
    app_logo: J(`VITE_APP_LOGO`) ?? `/logo.svg`,
    database_url: q.DATABASE_URL ?? ``,
    database_auth_token: q.DATABASE_AUTH_TOKEN ?? ``,
    database_provider: q.DATABASE_PROVIDER ?? `sqlite`,
    db_schema: q.DB_SCHEMA ?? `public`,
    db_singleton_enabled: q.DB_SINGLETON_ENABLED ?? `false`,
    db_max_connections: q.DB_MAX_CONNECTIONS ?? `1`,
    auth_url: q.AUTH_URL ?? J(`VITE_APP_URL`) ?? ``,
    auth_secret: q.AUTH_SECRET ?? ``,
    stripe_secret_key: q.STRIPE_SECRET_KEY ?? ``,
    stripe_publishable_key: q.STRIPE_PUBLISHABLE_KEY ?? ``,
    stripe_signing_secret: q.STRIPE_SIGNING_SECRET ?? ``,
    paypal_client_id: q.PAYPAL_CLIENT_ID ?? ``,
    paypal_client_secret: q.PAYPAL_CLIENT_SECRET ?? ``,
    paypal_webhook_id: q.PAYPAL_WEBHOOK_ID ?? ``,
    paypal_environment: q.PAYPAL_ENVIRONMENT ?? `production`,
    alipay_app_id: q.ALIPAY_APP_ID ?? ``,
    alipay_private_key: q.ALIPAY_PRIVATE_KEY ?? ``,
    alipay_public_key: q.ALIPAY_PUBLIC_KEY ?? ``,
    alipay_notify_url: q.ALIPAY_NOTIFY_URL ?? ``,
    wechat_app_id: q.WECHAT_APP_ID ?? ``,
    wechat_mch_id: q.WECHAT_MCH_ID ?? ``,
    wechat_api_v3_key: q.WECHAT_API_V3_KEY ?? ``,
    wechat_private_key: q.WECHAT_PRIVATE_KEY ?? ``,
    wechat_serial_no: q.WECHAT_SERIAL_NO ?? ``,
    wechat_notify_url: q.WECHAT_NOTIFY_URL ?? ``,
    wechat_platform_cert: q.WECHAT_PLATFORM_CERT ?? ``,
    resend_api_key: q.RESEND_API_KEY ?? ``,
    resend_sender_email: q.RESEND_SENDER_EMAIL ?? q.RESEND_EMAIL_FROM ?? ``,
    storage_endpoint: q.STORAGE_ENDPOINT ?? ``,
    storage_region: q.STORAGE_REGION ?? `auto`,
    storage_access_key: q.STORAGE_ACCESS_KEY ?? ``,
    storage_secret_key: q.STORAGE_SECRET_KEY ?? ``,
    storage_bucket: q.STORAGE_BUCKET ?? ``,
    storage_public_domain: q.STORAGE_PUBLIC_DOMAIN ?? ``,
    inline_image_max_kb: q.INLINE_IMAGE_MAX_KB ?? `2048`,
    replicate_api_token: q.REPLICATE_API_TOKEN ?? ``,
    locale: J(`VITE_DEFAULT_LOCALE`) ?? `en`,
  };
function Xu() {
  return new iu({
    defaultOptions: {
      queries: { staleTime: 3e4, retry: 1, refetchOnWindowFocus: !1 },
    },
  });
}
var Zu;
function Qu() {
  return typeof window > `u` ? Xu() : ((Zu ||= Xu()), Zu);
}
function $u({ measurementId: e }) {
  return e
    ? (0, R.jsxs)(R.Fragment, {
        children: [
          (0, R.jsx)(`script`, {
            id: `ga-loader`,
            src: `https://www.googletagmanager.com/gtag/js?id=${e}`,
            async: !0,
          }),
          (0, R.jsx)(`script`, {
            id: `ga-init`,
            async: !0,
            dangerouslySetInnerHTML: {
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${e}');`,
            },
          }),
        ],
      })
    : null;
}
function ed({ domain: e, src: t = `https://plausible.io/js/script.js` }) {
  return e
    ? (0, R.jsxs)(R.Fragment, {
        children: [
          (0, R.jsx)(`script`, {
            id: `plausible-init`,
            async: !0,
            dangerouslySetInnerHTML: {
              __html: `window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};`,
            },
          }),
          (0, R.jsx)(`script`, {
            id: `plausible-loader`,
            'data-domain': e,
            src: t,
            defer: !0,
            async: !0,
          }),
        ],
      })
    : null;
}
function td({ websiteId: e }) {
  return e
    ? (0, R.jsx)(`script`, {
        id: `crisp-widget`,
        async: !0,
        dangerouslySetInnerHTML: {
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="${e}";(function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        },
      })
    : null;
}
function nd({ propertyId: e, widgetId: t }) {
  return !e || !t
    ? null
    : (0, R.jsx)(`script`, {
        id: `tawk-widget`,
        async: !0,
        dangerouslySetInnerHTML: {
          __html: `var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src="https://embed.tawk.to/${e}/${t}";s1.charset="UTF-8";s1.setAttribute("crossorigin","*");s0.parentNode.insertBefore(s1,s0);})();`,
        },
      });
}
function rd({ crispWebsiteId: e, tawkPropertyId: t, tawkWidgetId: n }) {
  return (0, R.jsxs)(R.Fragment, {
    children: [
      e ? (0, R.jsx)(td, { websiteId: e }) : null,
      t && n ? (0, R.jsx)(nd, { propertyId: t, widgetId: n }) : null,
    ],
  });
}
function id() {
  let e = Object.getOwnPropertyDescriptor(Error, `stackTraceLimit`);
  return e === void 0
    ? Object.isExtensible(Error)
    : Object.prototype.hasOwnProperty.call(e, `writable`)
      ? e.writable
      : e.set !== void 0;
}
function ad(e) {
  let t = e.split(`
    at `);
  return t.length <= 1
    ? e
    : (t.splice(1, 1),
      t.join(`
    at `));
}
function od(e, t) {
  class n extends e {
    #e;
    constructor(...e) {
      if (id()) {
        let t = Error.stackTraceLimit;
        ((Error.stackTraceLimit = 0), super(...e), (Error.stackTraceLimit = t));
      } else super(...e);
      let t = Error().stack;
      t && (this.#e = ad(t.replace(/^Error/, this.name)));
    }
    get errorStack() {
      return this.#e;
    }
  }
  return (
    Object.defineProperty(n.prototype, 'constructor', {
      get() {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    n
  );
}
var sd = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  TEMPORARY_REDIRECT: 307,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  "I'M_A_TEAPOT": 418,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
};
od(
  class extends Error {
    constructor(
      e = `INTERNAL_SERVER_ERROR`,
      t = void 0,
      n = {},
      r = typeof e == `number` ? e : sd[e]
    ) {
      (super(t?.message, t?.cause ? { cause: t.cause } : void 0),
        (this.status = e),
        (this.body = t),
        (this.headers = n),
        (this.statusCode = r),
        (this.name = `APIError`),
        (this.status = e),
        (this.headers = n),
        (this.statusCode = r),
        (this.body = t));
    }
  },
  Error
);
var cd = class extends Error {
    constructor(e, t) {
      (super(e, t),
        (this.name = `BetterAuthError`),
        (this.message = e),
        (this.stack = ``));
    }
  },
  ld = [],
  ud = 0,
  dd = 4,
  fd = 0,
  pd = (e) => {
    let t = [],
      n = {
        get() {
          return (n.lc || n.listen(() => {})(), n.value);
        },
        init: e,
        lc: 0,
        listen(e) {
          return (
            (n.lc = t.push(e)),
            () => {
              for (let t = ud + dd; t < ld.length; )
                ld[t] === e ? ld.splice(t, dd) : (t += dd);
              let r = t.indexOf(e);
              ~r && (t.splice(r, 1), --n.lc || n.off());
            }
          );
        },
        notify(e, r) {
          fd++;
          let i = !ld.length;
          for (let i of t) ld.push(i, n.value, e, r);
          if (i) {
            for (ud = 0; ud < ld.length; ud += dd)
              ld[ud](ld[ud + 1], ld[ud + 2], ld[ud + 3]);
            ld.length = 0;
          }
        },
        off() {},
        set(e) {
          let t = n.value;
          t !== e && ((n.value = e), n.notify(t));
        },
        subscribe(e) {
          let t = n.listen(e);
          return (e(n.value), t);
        },
        value: e,
      };
    return n;
  },
  md = 5,
  hd = 6,
  gd = 10,
  _d = (e, t, n, r) => (
    (e.events = e.events || {}),
    e.events[n + gd] ||
      (e.events[n + gd] = r((t) => {
        e.events[n].reduceRight((e, t) => (t(e), e), { shared: {}, ...t });
      })),
    (e.events[n] = e.events[n] || []),
    e.events[n].push(t),
    () => {
      let r = e.events[n],
        i = r.indexOf(t);
      (r.splice(i, 1),
        r.length ||
          (delete e.events[n], e.events[n + gd](), delete e.events[n + gd]));
    }
  ),
  vd = 1e3,
  yd = (e, t) =>
    _d(
      e,
      (n) => {
        let r = t(n);
        r && e.events[hd].push(r);
      },
      md,
      (t) => {
        let n = e.listen;
        e.listen = (...r) => (
          !e.lc && !e.active && ((e.active = !0), t()),
          n(...r)
        );
        let r = e.off;
        return (
          (e.events[hd] = []),
          (e.off = () => {
            (r(),
              setTimeout(() => {
                if (e.active && !e.lc) {
                  e.active = !1;
                  for (let t of e.events[hd]) t();
                  e.events[hd] = [];
                }
              }, vd));
          }),
          () => {
            ((e.listen = n), (e.off = r));
          }
        );
      }
    );
function bd(e, t, n) {
  let r = new Set(t).add(void 0);
  return e.listen((e, t, i) => {
    r.has(i) && n(e, t, i);
  });
}
var xd = () => typeof window > `u`,
  Sd = (e, t, n, r) => {
    let i = pd({
        data: null,
        error: null,
        isPending: !0,
        isRefetching: !1,
        refetch: (e) => a(e),
      }),
      a = async (e) =>
        new Promise((a) => {
          let o =
            typeof r == `function`
              ? r({
                  data: i.get().data,
                  error: i.get().error,
                  isPending: i.get().isPending,
                })
              : r;
          n(t, {
            ...o,
            query: { ...o?.query, ...e?.query },
            async onSuccess(e) {
              (i.set({
                data: e.data,
                error: null,
                isPending: !1,
                isRefetching: !1,
                refetch: i.value.refetch,
              }),
                await o?.onSuccess?.(e));
            },
            async onError(e) {
              let { request: t } = e,
                n = typeof t.retry == `number` ? t.retry : t.retry?.attempts,
                r = t.retryAttempt || 0;
              if (n && r < n) return;
              let a = e.error.status === 401;
              (i.set({
                error: e.error,
                data: a ? null : i.get().data,
                isPending: !1,
                isRefetching: !1,
                refetch: i.value.refetch,
              }),
                await o?.onError?.(e));
            },
            async onRequest(e) {
              let t = i.get();
              (i.set({
                isPending: t.data === null,
                data: t.data,
                error: null,
                isRefetching: !0,
                refetch: i.value.refetch,
              }),
                await o?.onRequest?.(e));
            },
          })
            .catch((e) => {
              i.set({
                error: e,
                data: i.get().data,
                isPending: !1,
                isRefetching: !1,
                refetch: i.value.refetch,
              });
            })
            .finally(() => {
              a(void 0);
            });
        });
    e = Array.isArray(e) ? e : [e];
    let o = !1;
    for (let t of e)
      t.subscribe(async () => {
        xd() ||
          (o
            ? await a()
            : yd(i, () => {
                let e = setTimeout(async () => {
                  o ||= (await a(), !0);
                }, 0);
                return () => {
                  (i.off(), t.off(), clearTimeout(e));
                };
              }));
      });
    return i;
  },
  Cd = Object.create(null),
  Y = (e) => ({}),
  wd = new Proxy(Cd, {
    get(e, t) {
      return Y()[t] ?? Cd[t];
    },
    has(e, t) {
      return t in Y() || t in Cd;
    },
    set(e, t, n) {
      let r = Y(!0);
      return ((r[t] = n), !0);
    },
    deleteProperty(e, t) {
      if (!t) return !1;
      let n = Y(!0);
      return (delete n[t], !0);
    },
    ownKeys() {
      let e = Y(!0);
      return Object.keys(e);
    },
  });
function Td(e, t) {
  return typeof process < `u`
    ? ({}[e] ?? t)
    : typeof Deno < `u`
      ? (Deno.env.get(e) ?? t)
      : typeof Bun < `u`
        ? (Bun.env[e] ?? t)
        : t;
}
Object.freeze({
  get BETTER_AUTH_SECRET() {
    return Td(`BETTER_AUTH_SECRET`);
  },
  get AUTH_SECRET() {
    return Td(`AUTH_SECRET`);
  },
  get BETTER_AUTH_TELEMETRY() {
    return Td(`BETTER_AUTH_TELEMETRY`);
  },
  get BETTER_AUTH_TELEMETRY_ID() {
    return Td(`BETTER_AUTH_TELEMETRY_ID`);
  },
  get NODE_ENV() {
    return Td(`NODE_ENV`, `development`);
  },
  get PACKAGE_VERSION() {
    return Td(`PACKAGE_VERSION`, `0.0.0`);
  },
  get BETTER_AUTH_TELEMETRY_ENDPOINT() {
    return Td(`BETTER_AUTH_TELEMETRY_ENDPOINT`, ``);
  },
});
function Ed(e) {
  try {
    return (new URL(e).pathname.replace(/\/+$/, ``) || `/`) !== `/`;
  } catch {
    throw new cd(`Invalid base URL: ${e}. Please provide a valid base URL.`);
  }
}
function Dd(e) {
  try {
    let t = new URL(e);
    if (t.protocol !== `http:` && t.protocol !== `https:`)
      throw new cd(
        `Invalid base URL: ${e}. URL must include 'http://' or 'https://'`
      );
  } catch (t) {
    throw t instanceof cd
      ? t
      : new cd(`Invalid base URL: ${e}. Please provide a valid base URL.`, {
          cause: t,
        });
  }
}
function Od(e, t = `/api/auth`) {
  if ((Dd(e), Ed(e))) return e;
  let n = e.replace(/\/+$/, ``);
  return !t || t === `/`
    ? n
    : ((t = t.startsWith(`/`) ? t : `/${t}`), `${n}${t}`);
}
function kd(e, t) {
  return !e || e.trim() === ``
    ? !1
    : t === `proto`
      ? e === `http` || e === `https`
      : t === `host`
        ? [
            /\.\./,
            /\0/,
            /[\s]/,
            /^[.]/,
            /[<>'"]/,
            /javascript:/i,
            /file:/i,
            /data:/i,
          ].some((t) => t.test(e))
          ? !1
          : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(:[0-9]{1,5})?$/.test(
              e
            ) ||
            /^(\d{1,3}\.){3}\d{1,3}(:[0-9]{1,5})?$/.test(e) ||
            /^\[[0-9a-fA-F:]+\](:[0-9]{1,5})?$/.test(e) ||
            /^localhost(:[0-9]{1,5})?$/i.test(e)
        : !1;
}
function Ad(e, t, n, r, i) {
  if (e) return Od(e, t);
  if (r !== !1) {
    let e =
      wd.BETTER_AUTH_URL ||
      wd.NEXT_PUBLIC_BETTER_AUTH_URL ||
      wd.PUBLIC_BETTER_AUTH_URL ||
      wd.NUXT_PUBLIC_BETTER_AUTH_URL ||
      wd.NUXT_PUBLIC_AUTH_URL ||
      (wd.BASE_URL === `/` ? void 0 : wd.BASE_URL);
    if (e) return Od(e, t);
  }
  let a = n?.headers.get(`x-forwarded-host`),
    o = n?.headers.get(`x-forwarded-proto`);
  if (a && o && i && kd(o, `proto`) && kd(a, `host`))
    try {
      return Od(`${o}://${a}`, t);
    } catch {}
  if (n) {
    let e = jd(n.url);
    if (!e)
      throw new cd(
        `Could not get origin from request. Please provide a valid base URL.`
      );
    return Od(e, t);
  }
  if (typeof window < `u` && window.location)
    return Od(window.location.origin, t);
}
function jd(e) {
  try {
    let t = new URL(e);
    return t.origin === `null` ? null : t.origin;
  } catch {
    return null;
  }
}
var Md = {
    proto:
      /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    constructor:
      /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    protoShort: /"__proto__"\s*:/,
    constructorShort: /"constructor"\s*:/,
  },
  Nd = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,
  Pd = {
    true: !0,
    false: !1,
    null: null,
    undefined: void 0,
    nan: NaN,
    infinity: 1 / 0,
    '-infinity': -1 / 0,
  },
  Fd =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function Id(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function X(e) {
  let t = Fd.exec(e);
  if (!t) return null;
  let [, n, r, i, a, o, s, c, l, u, d] = t,
    f = new Date(
      Date.UTC(
        parseInt(n, 10),
        parseInt(r, 10) - 1,
        parseInt(i, 10),
        parseInt(a, 10),
        parseInt(o, 10),
        parseInt(s, 10),
        c ? parseInt(c.padEnd(3, `0`), 10) : 0
      )
    );
  if (l) {
    let e = (parseInt(u, 10) * 60 + parseInt(d, 10)) * (l === `+` ? -1 : 1);
    f.setUTCMinutes(f.getUTCMinutes() + e);
  }
  return Id(f) ? f : null;
}
function Ld(e, t = {}) {
  let { strict: n = !1, warnings: r = !1, reviver: i, parseDates: a = !0 } = t;
  if (typeof e != `string`) return e;
  let o = e.trim();
  if (
    o.length > 0 &&
    o[0] === `"` &&
    o.endsWith(`"`) &&
    !o.slice(1, -1).includes(`"`)
  )
    return o.slice(1, -1);
  let s = o.toLowerCase();
  if (s.length <= 9 && s in Pd) return Pd[s];
  if (!Nd.test(o)) {
    if (n) throw SyntaxError(`[better-json] Invalid JSON`);
    return e;
  }
  if (
    Object.entries(Md).some(([e, t]) => {
      let n = t.test(o);
      return (
        n &&
          r &&
          console.warn(
            `[better-json] Detected potential prototype pollution attempt using ${e} pattern`
          ),
        n
      );
    }) &&
    n
  )
    throw Error(`[better-json] Potential prototype pollution attempt detected`);
  try {
    return JSON.parse(o, (e, t) => {
      if (
        e === `__proto__` ||
        (e === `constructor` && t && typeof t == `object` && `prototype` in t)
      ) {
        r &&
          console.warn(
            `[better-json] Dropping "${e}" key to prevent prototype pollution`
          );
        return;
      }
      if (a && typeof t == `string`) {
        let e = X(t);
        if (e) return e;
      }
      return i ? i(e, t) : t;
    });
  } catch (t) {
    if (n) throw t;
    return e;
  }
}
function Rd(e, t = { strict: !0 }) {
  return Ld(e, t);
}
var zd = {
    id: `redirect`,
    name: `Redirect`,
    hooks: {
      onSuccess(e) {
        if (
          e.data?.url &&
          e.data?.redirect &&
          typeof window < `u` &&
          window.location &&
          window.location
        )
          try {
            window.location.href = e.data.url;
          } catch {}
      },
    },
  },
  Bd = Symbol.for(`better-auth:broadcast-channel`),
  Vd = () => Math.floor(Date.now() / 1e3),
  Hd = class {
    listeners = new Set();
    name;
    constructor(e = `better-auth.message`) {
      this.name = e;
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
    }
    post(e) {
      if (!(typeof window > `u`))
        try {
          localStorage.setItem(
            this.name,
            JSON.stringify({ ...e, timestamp: Vd() })
          );
        } catch {}
    }
    setup() {
      if (typeof window > `u` || window.addEventListener === void 0)
        return () => {};
      let e = (e) => {
        if (e.key !== this.name) return;
        let t = JSON.parse(e.newValue ?? `{}`);
        t?.event !== `session` ||
          !t?.data ||
          this.listeners.forEach((e) => e(t));
      };
      return (
        window.addEventListener(`storage`, e),
        () => {
          window.removeEventListener(`storage`, e);
        }
      );
    }
  };
function Ud(e = `better-auth.message`) {
  return (globalThis[Bd] || (globalThis[Bd] = new Hd(e)), globalThis[Bd]);
}
var Wd = Symbol.for(`better-auth:focus-manager`),
  Gd = class {
    listeners = new Set();
    subscribe(e) {
      return (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
    }
    setFocused(e) {
      this.listeners.forEach((t) => t(e));
    }
    setup() {
      if (
        typeof window > `u` ||
        typeof document > `u` ||
        window.addEventListener === void 0
      )
        return () => {};
      let e = () => {
        document.visibilityState === `visible` && this.setFocused(!0);
      };
      return (
        document.addEventListener(`visibilitychange`, e, !1),
        () => {
          document.removeEventListener(`visibilitychange`, e, !1);
        }
      );
    }
  };
function Kd() {
  return (globalThis[Wd] || (globalThis[Wd] = new Gd()), globalThis[Wd]);
}
var qd = Symbol.for(`better-auth:online-manager`),
  Jd = class {
    listeners = new Set();
    isOnline = typeof navigator < `u` ? navigator.onLine : !0;
    subscribe(e) {
      return (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
    }
    setOnline(e) {
      ((this.isOnline = e), this.listeners.forEach((t) => t(e)));
    }
    setup() {
      if (typeof window > `u` || window.addEventListener === void 0)
        return () => {};
      let e = () => this.setOnline(!0),
        t = () => this.setOnline(!1);
      return (
        window.addEventListener(`online`, e, !1),
        window.addEventListener(`offline`, t, !1),
        () => {
          (window.removeEventListener(`online`, e, !1),
            window.removeEventListener(`offline`, t, !1));
        }
      );
    }
  };
function Yd() {
  return (globalThis[qd] || (globalThis[qd] = new Jd()), globalThis[qd]);
}
var Xd = () => Math.floor(Date.now() / 1e3);
function Zd(e) {
  return typeof e == `object` && e && `data` in e && `error` in e
    ? e
    : { data: e, error: null };
}
var Qd = 5;
function $d(e) {
  let { sessionAtom: t, sessionSignal: n, $fetch: r, options: i = {} } = e,
    a = i.sessionOptions?.refetchInterval ?? 0,
    o = i.sessionOptions?.refetchOnWindowFocus ?? !0,
    s = i.sessionOptions?.refetchWhenOffline ?? !1,
    c = { lastSync: 0, lastSessionRequest: 0, cachedSession: void 0 },
    l = () => s || Yd().isOnline,
    u = (e) => {
      if (!l()) return;
      if (e?.event === `storage`) {
        ((c.lastSync = Xd()), n.set(!n.get()));
        return;
      }
      let i = t.get(),
        a = () => {
          ((c.lastSessionRequest = Xd()),
            r(`/get-session`)
              .then(async (e) => {
                let { data: a, error: o } = Zd(e);
                if (a?.needsRefresh)
                  try {
                    let e = await r(`/get-session`, { method: `POST` });
                    ({ data: a, error: o } = Zd(e));
                  } catch {}
                let s = a?.session && a?.user ? a : null;
                (t.set({ ...i, data: s, error: o }),
                  (c.lastSync = Xd()),
                  n.set(!n.get()));
              })
              .catch(() => {}));
        };
      if (e?.event === `poll`) {
        a();
        return;
      }
      if (e?.event === `visibilitychange`) {
        if (Xd() - c.lastSessionRequest < Qd) return;
        c.lastSessionRequest = Xd();
      }
      if (e?.event === `visibilitychange`) {
        a();
        return;
      }
      (i?.data === null || i?.data === void 0) &&
        ((c.lastSync = Xd()), n.set(!n.get()));
    },
    d = (e) => {
      Ud().post({
        event: `session`,
        data: { trigger: e },
        clientId: Math.random().toString(36).substring(7),
      });
    },
    f = () => {
      a &&
        a > 0 &&
        (c.pollInterval = setInterval(() => {
          t.get()?.data && u({ event: `poll` });
        }, a * 1e3));
    },
    p = () => {
      c.unsubscribeBroadcast = Ud().subscribe(() => {
        u({ event: `storage` });
      });
    },
    m = () => {
      o &&
        (c.unsubscribeFocus = Kd().subscribe(() => {
          u({ event: `visibilitychange` });
        }));
    },
    h = () => {
      c.unsubscribeOnline = Yd().subscribe((e) => {
        e && u({ event: `visibilitychange` });
      });
    };
  return {
    init: () => {
      (f(), p(), m(), h(), Ud().setup(), Kd().setup(), Yd().setup());
    },
    cleanup: () => {
      ((c.pollInterval &&= (clearInterval(c.pollInterval), void 0)),
        (c.unsubscribeBroadcast &&= (c.unsubscribeBroadcast(), void 0)),
        (c.unsubscribeFocus &&= (c.unsubscribeFocus(), void 0)),
        (c.unsubscribeOnline &&= (c.unsubscribeOnline(), void 0)),
        (c.lastSync = 0),
        (c.lastSessionRequest = 0),
        (c.cachedSession = void 0));
    },
    triggerRefetch: u,
    broadcastSessionUpdate: d,
  };
}
function ef(e, t) {
  let n = pd(!1),
    r = Sd(n, `/get-session`, e, { method: `GET` }),
    i = () => {};
  return (
    yd(r, () => {
      let a = $d({ sessionAtom: r, sessionSignal: n, $fetch: e, options: t });
      return (
        a.init(),
        (i = a.broadcastSessionUpdate),
        () => {
          a.cleanup();
        }
      );
    }),
    { session: r, $sessionSignal: n, broadcastSessionUpdate: (e) => i(e) }
  );
}
function tf(e) {
  if (typeof e != `object` || !e) return !1;
  let t = Object.getPrototypeOf(e);
  return (t !== null &&
    t !== Object.prototype &&
    Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
      ? Object.prototype.toString.call(e) === `[object Module]`
      : !0;
}
function nf(e, t, n = `.`, r) {
  if (!tf(t)) return nf(e, {}, n, r);
  let i = { ...t };
  for (let t of Object.keys(e)) {
    if (t === `__proto__` || t === `constructor`) continue;
    let a = e[t];
    a != null &&
      ((r && r(i, t, a, n)) ||
        (Array.isArray(a) && Array.isArray(i[t])
          ? (i[t] = [...a, ...i[t]])
          : tf(a) && tf(i[t])
            ? (i[t] = nf(a, i[t], (n ? `${n}.` : ``) + t.toString(), r))
            : (i[t] = a)));
  }
  return i;
}
function rf(e) {
  return (...t) => t.reduce((t, n) => nf(t, n, ``, e), {});
}
var af = rf(),
  of = Object.defineProperty,
  sf = Object.defineProperties,
  cf = Object.getOwnPropertyDescriptors,
  lf = Object.getOwnPropertySymbols,
  uf = Object.prototype.hasOwnProperty,
  df = Object.prototype.propertyIsEnumerable,
  ff = (e, t, n) =>
    t in e
      ? of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  pf = (e, t) => {
    for (var n in (t ||= {})) uf.call(t, n) && ff(e, n, t[n]);
    if (lf) for (var n of lf(t)) df.call(t, n) && ff(e, n, t[n]);
    return e;
  },
  mf = (e, t) => sf(e, cf(t)),
  hf = class extends Error {
    constructor(e, t, n) {
      (super(t || e.toString(), { cause: n }),
        (this.status = e),
        (this.statusText = t),
        (this.error = n),
        Error.captureStackTrace(this, this.constructor));
    }
  },
  gf = async (e, t) => {
    let n = t || {},
      r = {
        onRequest: [t?.onRequest],
        onResponse: [t?.onResponse],
        onSuccess: [t?.onSuccess],
        onError: [t?.onError],
        onRetry: [t?.onRetry],
      };
    if (!t || !t?.plugins) return { url: e, options: n, hooks: r };
    for (let i of t?.plugins || []) {
      if (i.init) {
        let r = await i.init?.call(i, e.toString(), t);
        ((n = r.options || n), (e = r.url));
      }
      (r.onRequest.push(i.hooks?.onRequest),
        r.onResponse.push(i.hooks?.onResponse),
        r.onSuccess.push(i.hooks?.onSuccess),
        r.onError.push(i.hooks?.onError),
        r.onRetry.push(i.hooks?.onRetry));
    }
    return { url: e, options: n, hooks: r };
  },
  _f = class {
    constructor(e) {
      this.options = e;
    }
    shouldAttemptRetry(e, t) {
      return this.options.shouldRetry
        ? Promise.resolve(
            e < this.options.attempts && this.options.shouldRetry(t)
          )
        : Promise.resolve(e < this.options.attempts);
    }
    getDelay() {
      return this.options.delay;
    }
  },
  vf = class {
    constructor(e) {
      this.options = e;
    }
    shouldAttemptRetry(e, t) {
      return this.options.shouldRetry
        ? Promise.resolve(
            e < this.options.attempts && this.options.shouldRetry(t)
          )
        : Promise.resolve(e < this.options.attempts);
    }
    getDelay(e) {
      return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** e);
    }
  };
function yf(e) {
  if (typeof e == `number`)
    return new _f({ type: `linear`, attempts: e, delay: 1e3 });
  switch (e.type) {
    case `linear`:
      return new _f(e);
    case `exponential`:
      return new vf(e);
    default:
      throw Error(`Invalid retry strategy`);
  }
}
var bf = async (e) => {
    let t = {},
      n = async (e) => (typeof e == `function` ? await e() : e);
    if (e?.auth) {
      if (e.auth.type === `Bearer`) {
        let r = await n(e.auth.token);
        if (!r) return t;
        t.authorization = `Bearer ${r}`;
      } else if (e.auth.type === `Basic`) {
        let [r, i] = await Promise.all([
          n(e.auth.username),
          n(e.auth.password),
        ]);
        if (!r || !i) return t;
        t.authorization = `Basic ${btoa(`${r}:${i}`)}`;
      } else if (e.auth.type === `Custom`) {
        let [r, i] = await Promise.all([n(e.auth.prefix), n(e.auth.value)]);
        if (!i) return t;
        t.authorization = `${r ?? ``} ${i}`;
      }
    }
    return t;
  },
  xf = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Sf(e) {
  let t = e.headers.get(`content-type`),
    n = new Set([
      `image/svg`,
      `application/xml`,
      `application/xhtml`,
      `application/html`,
    ]);
  if (!t) return `json`;
  let r = t.split(`;`).shift() || ``;
  return xf.test(r)
    ? `json`
    : n.has(r) || r.startsWith(`text/`)
      ? `text`
      : `blob`;
}
function Cf(e) {
  try {
    return (JSON.parse(e), !0);
  } catch {
    return !1;
  }
}
function wf(e) {
  if (e === void 0) return !1;
  let t = typeof e;
  return t === `string` || t === `number` || t === `boolean` || t === null
    ? !0
    : t === `object`
      ? Array.isArray(e)
        ? !0
        : e.buffer
          ? !1
          : (e.constructor && e.constructor.name === `Object`) ||
            typeof e.toJSON == `function`
      : !1;
}
function Tf(e) {
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
function Ef(e) {
  return typeof e == `function`;
}
function Df(e) {
  if (e?.customFetchImpl) return e.customFetchImpl;
  if (typeof globalThis < `u` && Ef(globalThis.fetch)) return globalThis.fetch;
  if (typeof window < `u` && Ef(window.fetch)) return window.fetch;
  throw Error(`No fetch implementation found`);
}
async function Of(e) {
  let t = new Headers(e?.headers),
    n = await bf(e);
  for (let [e, r] of Object.entries(n || {})) t.set(e, r);
  if (!t.has(`content-type`)) {
    let n = kf(e?.body);
    n && t.set(`content-type`, n);
  }
  return t;
}
function kf(e) {
  return wf(e) ? `application/json` : null;
}
function Af(e) {
  if (!e?.body) return null;
  let t = new Headers(e?.headers);
  if (wf(e.body) && !t.has(`content-type`)) {
    for (let [t, n] of Object.entries(e?.body))
      n instanceof Date && (e.body[t] = n.toISOString());
    return JSON.stringify(e.body);
  }
  return t.has(`content-type`) &&
    t.get(`content-type`) === `application/x-www-form-urlencoded` &&
    wf(e.body)
    ? new URLSearchParams(e.body).toString()
    : e.body;
}
function jf(e, t) {
  if (t?.method) return t.method.toUpperCase();
  if (e.startsWith(`@`)) {
    let n = e.split(`@`)[1]?.split(`/`)[0];
    return Ff.includes(n) ? n.toUpperCase() : t?.body ? `POST` : `GET`;
  }
  return t?.body ? `POST` : `GET`;
}
function Mf(e, t) {
  let n;
  return (
    !e?.signal && e?.timeout && (n = setTimeout(() => t?.abort(), e?.timeout)),
    {
      abortTimeout: n,
      clearTimeout: () => {
        n && clearTimeout(n);
      },
    }
  );
}
var Nf = class e extends Error {
  constructor(t, n) {
    (super(n || JSON.stringify(t, null, 2)),
      (this.issues = t),
      Object.setPrototypeOf(this, e.prototype));
  }
};
async function Pf(e, t) {
  let n = await e[`~standard`].validate(t);
  if (n.issues) throw new Nf(n.issues);
  return n.value;
}
var Ff = [`get`, `post`, `put`, `patch`, `delete`],
  If = (e) => ({
    id: `apply-schema`,
    name: `Apply Schema`,
    version: `1.0.0`,
    async init(t, n) {
      let r =
        e.plugins?.find((e) =>
          e.schema?.config
            ? t.startsWith(e.schema.config.baseURL || ``) ||
              t.startsWith(e.schema.config.prefix || ``)
            : !1
        )?.schema || e.schema;
      if (r) {
        let e = t;
        (r.config?.prefix &&
          e.startsWith(r.config.prefix) &&
          ((e = e.replace(r.config.prefix, ``)),
          r.config.baseURL &&
            (t = t.replace(r.config.prefix, r.config.baseURL))),
          r.config?.baseURL &&
            e.startsWith(r.config.baseURL) &&
            (e = e.replace(r.config.baseURL, ``)));
        let i = r.schema[e];
        if (i) {
          let e = mf(pf({}, n), { method: i.method, output: i.output });
          return (
            n?.disableValidation ||
              (e = mf(pf({}, e), {
                body: i.input ? await Pf(i.input, n?.body) : n?.body,
                params: i.params ? await Pf(i.params, n?.params) : n?.params,
                query: i.query ? await Pf(i.query, n?.query) : n?.query,
              })),
            { url: t, options: e }
          );
        }
      }
      return { url: t, options: n };
    },
  }),
  Lf = (e) => {
    async function t(t, n) {
      let r = mf(pf(pf({}, e), n), {
        plugins: [...(e?.plugins || []), If(e || {}), ...(n?.plugins || [])],
      });
      if (e?.catchAllError)
        try {
          return await zf(t, r);
        } catch (e) {
          return {
            data: null,
            error: {
              status: 500,
              statusText: `Fetch Error`,
              message: `Fetch related error. Captured by catchAllError option. See error property for more details.`,
              error: e,
            },
          };
        }
      return await zf(t, r);
    }
    return t;
  };
function Rf(e, t) {
  let {
      baseURL: n,
      params: r,
      query: i,
    } = t || { query: {}, params: {}, baseURL: `` },
    a = e.startsWith(`http`) ? e.split(`/`).slice(0, 3).join(`/`) : n || ``;
  if (e.startsWith(`@`)) {
    let t = e.toString().split(`@`)[1].split(`/`)[0];
    Ff.includes(t) && (e = e.replace(`@${t}/`, `/`));
  }
  a.endsWith(`/`) || (a += `/`);
  let [o, s] = e.replace(a, ``).split(`?`),
    c = new URLSearchParams(s);
  for (let [e, t] of Object.entries(i || {})) {
    if (t == null) continue;
    let n;
    if (typeof t == `string`) n = t;
    else if (Array.isArray(t)) {
      for (let n of t) c.append(e, n);
      continue;
    } else n = JSON.stringify(t);
    c.set(e, n);
  }
  if (r)
    if (Array.isArray(r)) {
      let e = o.split(`/`).filter((e) => e.startsWith(`:`));
      for (let [t, n] of e.entries()) {
        let e = r[t];
        o = o.replace(n, e);
      }
    } else
      for (let [e, t] of Object.entries(r)) o = o.replace(`:${e}`, String(t));
  ((o = o.split(`/`).map(encodeURIComponent).join(`/`)),
    o.startsWith(`/`) && (o = o.slice(1)));
  let l = c.toString();
  return (
    (l = l.length > 0 ? `?${l}`.replace(/\+/g, `%20`) : ``),
    a.startsWith(`http`) ? new URL(`${o}${l}`, a) : `${a}${o}${l}`
  );
}
var zf = async (e, t) => {
    let { hooks: n, url: r, options: i } = await gf(e, t),
      a = Df(i),
      o = new AbortController(),
      s = i.signal ?? o.signal,
      c = Rf(r, i),
      l = Af(i),
      u = await Of(i),
      d = jf(r, i),
      f = mf(pf({}, i), { url: c, headers: u, body: l, method: d, signal: s });
    for (let e of n.onRequest)
      if (e) {
        let t = await e(f);
        typeof t == `object` && t && (f = t);
      }
    ((`pipeTo` in f && typeof f.pipeTo == `function`) ||
      typeof t?.body?.pipe == `function`) &&
      (`duplex` in f || (f.duplex = `half`));
    let { clearTimeout: p } = Mf(i, o),
      m = await a(f.url, f);
    p();
    let h = { response: m, request: f };
    for (let e of n.onResponse)
      if (e) {
        let n = await e(
          mf(pf({}, h), {
            response: t?.hookOptions?.cloneResponse ? m.clone() : m,
          })
        );
        n instanceof Response
          ? (m = n)
          : typeof n == `object` && n && (m = n.response);
      }
    if (m.ok) {
      if (f.method === `HEAD`) return { data: ``, error: null };
      let e = Sf(m),
        r = { data: null, response: m, request: f };
      if (e === `json` || e === `text`) {
        let e = await m.text();
        r.data = await (f.jsonParser ?? Tf)(e);
      } else r.data = await m[e]();
      f?.output &&
        f.output &&
        !f.disableValidation &&
        (r.data = await Pf(f.output, r.data));
      for (let e of n.onSuccess)
        e &&
          (await e(
            mf(pf({}, r), {
              response: t?.hookOptions?.cloneResponse ? m.clone() : m,
            })
          ));
      return t?.throw ? r.data : { data: r.data, error: null };
    }
    let g = t?.jsonParser ?? Tf,
      _ = await m.text(),
      v = Cf(_),
      y = v ? await g(_) : null,
      b = {
        response: m,
        responseText: _,
        request: f,
        error: mf(pf({}, y), { status: m.status, statusText: m.statusText }),
      };
    for (let e of n.onError)
      e &&
        (await e(
          mf(pf({}, b), {
            response: t?.hookOptions?.cloneResponse ? m.clone() : m,
          })
        ));
    if (t?.retry) {
      let r = yf(t.retry),
        i = t.retryAttempt ?? 0;
      if (await r.shouldAttemptRetry(i, m)) {
        for (let e of n.onRetry) e && (await e(h));
        let a = r.getDelay(i);
        return (
          await new Promise((e) => setTimeout(e, a)),
          await zf(e, mf(pf({}, t), { retryAttempt: i + 1 }))
        );
      }
    }
    if (t?.throw) throw new hf(m.status, m.statusText, v ? y : _);
    return {
      data: null,
      error: mf(pf({}, y), { status: m.status, statusText: m.statusText }),
    };
  },
  Bf = (e) => {
    if (typeof process > `u`) return;
    let t = e ?? `/api/auth`;
    if ({}.NEXT_PUBLIC_AUTH_URL) return {}.NEXT_PUBLIC_AUTH_URL;
    if (typeof window > `u`) {
      if ({}.NEXTAUTH_URL)
        try {
          return {}.NEXTAUTH_URL;
        } catch {}
      if ({}.VERCEL_URL)
        try {
          let e = {}.VERCEL_URL.startsWith(`http`) ? `` : `https://`;
          return `${new URL(`${e}${{}.VERCEL_URL}`).origin}${t}`;
        } catch {}
    }
  },
  Vf = (e, t) => {
    let n = `credentials` in Request.prototype,
      r =
        Ad(e?.baseURL, e?.basePath, void 0, t) ??
        Bf(e?.basePath) ??
        `/api/auth`,
      i =
        e?.plugins
          ?.flatMap((e) => e.fetchPlugins)
          .filter((e) => e !== void 0) || [],
      a = {
        id: `lifecycle-hooks`,
        name: `lifecycle-hooks`,
        hooks: {
          onSuccess: e?.fetchOptions?.onSuccess,
          onError: e?.fetchOptions?.onError,
          onRequest: e?.fetchOptions?.onRequest,
          onResponse: e?.fetchOptions?.onResponse,
        },
      },
      {
        onSuccess: o,
        onError: s,
        onRequest: c,
        onResponse: l,
        ...u
      } = e?.fetchOptions || {},
      d = Lf({
        baseURL: r,
        ...(n ? { credentials: `include` } : {}),
        method: `GET`,
        jsonParser(e) {
          return e ? Rd(e, { strict: !1 }) : null;
        },
        customFetchImpl: fetch,
        ...u,
        plugins: [
          a,
          ...(u.plugins || []),
          ...(e?.disableDefaultFetchPlugins ? [] : [zd]),
          ...i,
        ],
      }),
      { $sessionSignal: f, session: p, broadcastSessionUpdate: m } = ef(d, e),
      h = e?.plugins || [],
      g = {},
      _ = { $sessionSignal: f, session: p },
      v = {
        '/sign-out': `POST`,
        '/revoke-sessions': `POST`,
        '/revoke-other-sessions': `POST`,
        '/delete-user': `POST`,
      },
      y = [
        {
          signal: `$sessionSignal`,
          matcher(e) {
            return (
              e === `/sign-out` ||
              e === `/update-user` ||
              e === `/update-session` ||
              e === `/sign-up/email` ||
              e === `/sign-in/email` ||
              e === `/delete-user` ||
              e === `/verify-email` ||
              e === `/revoke-sessions` ||
              e === `/revoke-session` ||
              e === `/change-email`
            );
          },
          callback(e) {
            e === `/sign-out`
              ? m(`signout`)
              : (e === `/update-user` || e === `/update-session`) &&
                m(`updateUser`);
          },
        },
      ];
    for (let e of h)
      (e.getAtoms && Object.assign(_, e.getAtoms?.(d)),
        e.pathMethods && Object.assign(v, e.pathMethods),
        e.atomListeners && y.push(...e.atomListeners));
    let b = {
      notify: (e) => {
        _[e].set(!_[e].get());
      },
      listen: (e, t) => {
        _[e].subscribe(t);
      },
      atoms: _,
    };
    for (let t of h) t.getActions && (g = af(t.getActions?.(d, b, e) ?? {}, g));
    return {
      get baseURL() {
        return r;
      },
      pluginsActions: g,
      pluginsAtoms: _,
      pluginPathMethods: v,
      atomListeners: y,
      $fetch: d,
      $store: b,
    };
  };
function Hf(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `get` in e &&
    typeof e.get == `function` &&
    `lc` in e &&
    typeof e.lc == `number`
  );
}
function Uf(e, t, n) {
  let r = t[e],
    { fetchOptions: i, query: a, ...o } = n || {};
  return (
    r ||
    (i?.method ? i.method : o && Object.keys(o).length > 0 ? `POST` : `GET`)
  );
}
function Wf(e, t, n, r, i) {
  function a(o = []) {
    return new Proxy(function () {}, {
      get(t, n) {
        if (
          typeof n != `string` ||
          n === `then` ||
          n === `catch` ||
          n === `finally`
        )
          return;
        let r = [...o, n],
          i = e;
        for (let e of r)
          if (i && typeof i == `object` && e in i) i = i[e];
          else {
            i = void 0;
            break;
          }
        return typeof i == `function` || Hf(i) ? i : a(r);
      },
      apply: async (e, a, s) => {
        let c =
            `/` +
            o
              .map((e) => e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`))
              .join(`/`),
          l = s[0] || {},
          u = s[1] || {},
          { query: d, fetchOptions: f, ...p } = l,
          m = { ...u, ...f },
          h = Uf(c, n, l);
        return await t(c, {
          ...m,
          body: h === `GET` ? void 0 : { ...p, ...(m?.body || {}) },
          query: d || m?.query,
          method: h,
          async onSuccess(e) {
            if ((await m?.onSuccess?.(e), !i || m.disableSignal)) return;
            let t = i.filter((e) => e.matcher(c));
            if (!t.length) return;
            let n = new Set();
            for (let e of t) {
              let t = r[e.signal];
              if (!t) return;
              if (n.has(e.signal)) continue;
              n.add(e.signal);
              let i = t.get();
              (setTimeout(() => {
                t.set(!i);
              }, 10),
                e.callback?.(c));
            }
          },
        });
      },
    });
  }
  return a();
}
function Gf(e, t = {}) {
  let n = (0, L.useRef)(e.get()),
    { keys: r, deps: i = [e, r] } = t,
    a = (0, L.useCallback)((t) => {
      let i = (e) => {
        n.current !== e && ((n.current = e), t());
      };
      return (i(e.value), r?.length ? bd(e, r, i) : e.listen(i));
    }, i),
    o = () => n.current;
  return (0, L.useSyncExternalStore)(a, o, o);
}
function Kf(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function qf(e) {
  return `use${Kf(e)}`;
}
function Jf(e) {
  let {
      pluginPathMethods: t,
      pluginsActions: n,
      pluginsAtoms: r,
      $fetch: i,
      $store: a,
      atomListeners: o,
    } = Vf(e),
    s = {};
  for (let [e, t] of Object.entries(r)) s[qf(e)] = () => Gf(t);
  return Wf({ ...n, ...s, $fetch: i, $store: a }, i, t, r, o);
}
var Yf = Jf({
    baseURL:
      typeof window < `u` ? window.location.origin : `http://localhost:3000`,
  }),
  {
    signIn: Xf,
    signUp: Zf,
    signOut: Qf,
    useSession: $f,
    requestPasswordReset: ep,
    resetPassword: tp,
  } = Yf,
  np = class extends Error {
    code;
    data;
    constructor(e, t, n) {
      (super(t), (this.code = e), (this.data = n), (this.name = `ApiError`));
    }
  };
async function rp(e, t) {
  let n = await fetch(e, {
      ...t,
      headers: {
        ...(t?.body ? { 'Content-Type': `application/json` } : {}),
        ...t?.headers,
      },
    }),
    r = await n
      .json()
      .catch(() => ({ code: -1, message: n.statusText || `Request failed` }));
  if (r.code !== 0)
    throw new np(r.code ?? -1, r.message || `Request failed`, r.data);
  return r.data;
}
var ip = (e, t) => rp(e, t),
  ap = (e, t) =>
    rp(e, { method: `POST`, body: t == null ? void 0 : JSON.stringify(t) }),
  op = (e, t) => rp(e, { method: `PUT`, body: JSON.stringify(t) }),
  sp = (e, t) => rp(e, { method: `PATCH`, body: JSON.stringify(t) }),
  cp = (e) => rp(e, { method: `DELETE` });
function lp(e, t) {
  let n = new URLSearchParams({
    page: String(t.page),
    pageSize: String(t.pageSize),
  });
  return (t.search && n.set(`search`, t.search), `${e}?${n}`);
}
function up() {
  return xu({
    queryKey: [`public-config`],
    queryFn: () => ip(`/api/config/public`, { cache: `no-store` }),
    staleTime: 0,
  });
}
function dp(e) {
  if (!e || typeof document > `u`) return;
  let t = document.head || document.getElementsByTagName(`head`)[0],
    n = document.createElement(`style`);
  ((n.type = `text/css`),
    t.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e)));
}
var fp = (e) => {
    switch (e) {
      case `success`:
        return hp;
      case `info`:
        return _p;
      case `warning`:
        return gp;
      case `error`:
        return vp;
      default:
        return null;
    }
  },
  pp = Array(12).fill(0),
  mp = ({ visible: e, className: t }) =>
    L.createElement(
      `div`,
      {
        className: [`sonner-loading-wrapper`, t].filter(Boolean).join(` `),
        'data-visible': e,
      },
      L.createElement(
        `div`,
        { className: `sonner-spinner` },
        pp.map((e, t) =>
          L.createElement(`div`, {
            className: `sonner-loading-bar`,
            key: `spinner-bar-${t}`,
          })
        )
      )
    ),
  hp = L.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    L.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
      clipRule: `evenodd`,
    })
  ),
  gp = L.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    L.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
      clipRule: `evenodd`,
    })
  ),
  _p = L.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    L.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
      clipRule: `evenodd`,
    })
  ),
  vp = L.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    L.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
      clipRule: `evenodd`,
    })
  ),
  yp = L.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    L.createElement(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
    L.createElement(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` })
  ),
  bp = () => {
    let [e, t] = L.useState(document.hidden);
    return (
      L.useEffect(() => {
        let e = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener(`visibilitychange`, e),
          () => window.removeEventListener(`visibilitychange`, e)
        );
      }, []),
      e
    );
  },
  xp = 1,
  Sp = new (class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          let { message: t, ...n } = e,
            r = typeof e?.id == `number` || e.id?.length > 0 ? e.id : xp++,
            i = this.toasts.find((e) => e.id === r),
            a = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            i
              ? (this.toasts = this.toasts.map((n) =>
                  n.id === r
                    ? (this.publish({ ...n, ...e, id: r, title: t }),
                      { ...n, ...e, id: r, dismissible: a, title: t })
                    : n
                ))
              : this.addToast({ title: t, ...n, dismissible: a, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          e
            ? (this.dismissedToasts.add(e),
              requestAnimationFrame(() =>
                this.subscribers.forEach((t) => t({ id: e, dismiss: !0 }))
              ))
            : this.toasts.forEach((e) => {
                this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
              }),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: `error` })),
        (this.success = (e, t) =>
          this.create({ ...t, type: `success`, message: e })),
        (this.info = (e, t) => this.create({ ...t, type: `info`, message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: `warning`, message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: `loading`, message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: `loading`,
              message: t.loading,
              description:
                typeof t.description == `function` ? void 0 : t.description,
            }));
          let r = Promise.resolve(e instanceof Function ? e() : e),
            i = n !== void 0,
            a,
            o = r
              .then(async (e) => {
                if (((a = [`resolve`, e]), L.isValidElement(e)))
                  ((i = !1),
                    this.create({ id: n, type: `default`, message: e }));
                else if (wp(e) && !e.ok) {
                  i = !1;
                  let r =
                      typeof t.error == `function`
                        ? await t.error(`HTTP error! status: ${e.status}`)
                        : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(`HTTP error! status: ${e.status}`)
                        : t.description,
                    o =
                      typeof r == `object` && !L.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (e instanceof Error) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !L.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (t.success !== void 0) {
                  i = !1;
                  let r =
                      typeof t.success == `function`
                        ? await t.success(e)
                        : t.success,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !L.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `success`, description: a, ...o });
                }
              })
              .catch(async (e) => {
                if (((a = [`reject`, e]), t.error !== void 0)) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !L.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                }
              })
              .finally(() => {
                (i && (this.dismiss(n), (n = void 0)),
                  t.finally == null || t.finally.call(t));
              }),
            s = () =>
              new Promise((e, t) =>
                o.then(() => (a[0] === `reject` ? t(a[1]) : e(a[1]))).catch(t)
              );
          return typeof n != `string` && typeof n != `number`
            ? { unwrap: s }
            : Object.assign(n, { unwrap: s });
        }),
        (this.custom = (e, t) => {
          let n = t?.id || xp++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  })(),
  Cp = (e, t) => {
    let n = t?.id || xp++;
    return (Sp.addToast({ title: e, ...t, id: n }), n);
  },
  wp = (e) =>
    e &&
    typeof e == `object` &&
    `ok` in e &&
    typeof e.ok == `boolean` &&
    `status` in e &&
    typeof e.status == `number`,
  Tp = Object.assign(
    Cp,
    {
      success: Sp.success,
      info: Sp.info,
      warning: Sp.warning,
      error: Sp.error,
      custom: Sp.custom,
      message: Sp.message,
      promise: Sp.promise,
      dismiss: Sp.dismiss,
      loading: Sp.loading,
    },
    { getHistory: () => Sp.toasts, getToasts: () => Sp.getActiveToasts() }
  );
dp(
  `[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`
);
function Ep(e) {
  return e.label !== void 0;
}
var Dp = 3,
  Op = `24px`,
  kp = `16px`,
  Ap = 4e3,
  jp = 356,
  Mp = 14,
  Np = 45,
  Pp = 200;
function Fp(...e) {
  return e.filter(Boolean).join(` `);
}
function Ip(e) {
  let [t, n] = e.split(`-`),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var Lp = (e) => {
  let {
      invert: t,
      toast: n,
      unstyled: r,
      interacting: i,
      setHeights: a,
      visibleToasts: o,
      heights: s,
      index: c,
      toasts: l,
      expanded: u,
      removeToast: d,
      defaultRichColors: f,
      closeButton: p,
      style: m,
      cancelButtonStyle: h,
      actionButtonStyle: g,
      className: _ = ``,
      descriptionClassName: v = ``,
      duration: y,
      position: b,
      gap: x,
      expandByDefault: ee,
      classNames: S,
      icons: te,
      closeButtonAriaLabel: ne = `Close toast`,
    } = e,
    [re, ie] = L.useState(null),
    [ae, oe] = L.useState(null),
    [se, ce] = L.useState(!1),
    [le, ue] = L.useState(!1),
    [de, fe] = L.useState(!1),
    [C, w] = L.useState(!1),
    [pe, me] = L.useState(!1),
    [he, ge] = L.useState(0),
    [_e, E] = L.useState(0),
    D = L.useRef(n.duration || y || Ap),
    ve = L.useRef(null),
    ye = L.useRef(null),
    be = c === 0,
    xe = c + 1 <= o,
    Se = n.type,
    Ce = n.dismissible !== !1,
    we = n.className || ``,
    Te = n.descriptionClassName || ``,
    Ee = L.useMemo(
      () => s.findIndex((e) => e.toastId === n.id) || 0,
      [s, n.id]
    ),
    De = L.useMemo(() => n.closeButton ?? p, [n.closeButton, p]),
    Oe = L.useMemo(() => n.duration || y || Ap, [n.duration, y]),
    ke = L.useRef(0),
    Ae = L.useRef(0),
    je = L.useRef(0),
    Me = L.useRef(null),
    [Ne, Pe] = b.split(`-`),
    Fe = L.useMemo(
      () => s.reduce((e, t, n) => (n >= Ee ? e : e + t.height), 0),
      [s, Ee]
    ),
    Ie = bp(),
    Le = n.invert || t,
    Re = Se === `loading`;
  ((Ae.current = L.useMemo(() => Ee * x + Fe, [Ee, Fe])),
    L.useEffect(() => {
      D.current = Oe;
    }, [Oe]),
    L.useEffect(() => {
      ce(!0);
    }, []),
    L.useEffect(() => {
      let e = ye.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return (
          E(t),
          a((e) => [{ toastId: n.id, height: t, position: n.position }, ...e]),
          () => a((e) => e.filter((e) => e.toastId !== n.id))
        );
      }
    }, [a, n.id]),
    L.useLayoutEffect(() => {
      if (!se) return;
      let e = ye.current,
        t = e.style.height;
      e.style.height = `auto`;
      let r = e.getBoundingClientRect().height;
      ((e.style.height = t),
        E(r),
        a((e) =>
          e.find((e) => e.toastId === n.id)
            ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
            : [{ toastId: n.id, height: r, position: n.position }, ...e]
        ));
    }, [se, n.title, n.description, a, n.id, n.jsx, n.action, n.cancel]));
  let ze = L.useCallback(() => {
    (ue(!0),
      ge(Ae.current),
      a((e) => e.filter((e) => e.toastId !== n.id)),
      setTimeout(() => {
        d(n);
      }, Pp));
  }, [n, d, a, Ae]);
  (L.useEffect(() => {
    if (
      (n.promise && Se === `loading`) ||
      n.duration === 1 / 0 ||
      n.type === `loading`
    )
      return;
    let e;
    return (
      u || i || Ie
        ? (() => {
            if (je.current < ke.current) {
              let e = new Date().getTime() - ke.current;
              D.current -= e;
            }
            je.current = new Date().getTime();
          })()
        : D.current !== 1 / 0 &&
          ((ke.current = new Date().getTime()),
          (e = setTimeout(() => {
            (n.onAutoClose == null || n.onAutoClose.call(n, n), ze());
          }, D.current))),
      () => clearTimeout(e)
    );
  }, [u, i, n, Se, Ie, ze]),
    L.useEffect(() => {
      n.delete && (ze(), n.onDismiss == null || n.onDismiss.call(n, n));
    }, [ze, n.delete]));
  function Be() {
    return te?.loading
      ? L.createElement(
          `div`,
          {
            className: Fp(S?.loader, n?.classNames?.loader, `sonner-loader`),
            'data-visible': Se === `loading`,
          },
          te.loading
        )
      : L.createElement(mp, {
          className: Fp(S?.loader, n?.classNames?.loader),
          visible: Se === `loading`,
        });
  }
  let Ve = n.icon || te?.[Se] || fp(Se);
  return L.createElement(
    `li`,
    {
      tabIndex: 0,
      ref: ye,
      className: Fp(
        _,
        we,
        S?.toast,
        n?.classNames?.toast,
        S?.default,
        S?.[Se],
        n?.classNames?.[Se]
      ),
      'data-sonner-toast': ``,
      'data-rich-colors': n.richColors ?? f,
      'data-styled': !(n.jsx || n.unstyled || r),
      'data-mounted': se,
      'data-promise': !!n.promise,
      'data-swiped': pe,
      'data-removed': le,
      'data-visible': xe,
      'data-y-position': Ne,
      'data-x-position': Pe,
      'data-index': c,
      'data-front': be,
      'data-swiping': de,
      'data-dismissible': Ce,
      'data-type': Se,
      'data-invert': Le,
      'data-swipe-out': C,
      'data-swipe-direction': ae,
      'data-expanded': !!(u || (ee && se)),
      'data-testid': n.testId,
      style: {
        '--index': c,
        '--toasts-before': c,
        '--z-index': l.length - c,
        '--offset': `${le ? he : Ae.current}px`,
        '--initial-height': ee ? `auto` : `${_e}px`,
        ...m,
        ...n.style,
      },
      onDragEnd: () => {
        (fe(!1), ie(null), (Me.current = null));
      },
      onPointerDown: (e) => {
        e.button !== 2 &&
          (Re ||
            !Ce ||
            ((ve.current = new Date()),
            ge(Ae.current),
            e.target.setPointerCapture(e.pointerId),
            e.target.tagName !== `BUTTON` &&
              (fe(!0), (Me.current = { x: e.clientX, y: e.clientY }))));
      },
      onPointerUp: () => {
        if (C || !Ce) return;
        Me.current = null;
        let e = Number(
            ye.current?.style
              .getPropertyValue(`--swipe-amount-x`)
              .replace(`px`, ``) || 0
          ),
          t = Number(
            ye.current?.style
              .getPropertyValue(`--swipe-amount-y`)
              .replace(`px`, ``) || 0
          ),
          r = new Date().getTime() - ve.current?.getTime(),
          i = re === `x` ? e : t,
          a = Math.abs(i) / r;
        if (Math.abs(i) >= Np || a > 0.11) {
          (ge(Ae.current),
            n.onDismiss == null || n.onDismiss.call(n, n),
            oe(re === `x` ? (e > 0 ? `right` : `left`) : t > 0 ? `down` : `up`),
            ze(),
            w(!0));
          return;
        } else {
          var o, s;
          ((o = ye.current) == null ||
            o.style.setProperty(`--swipe-amount-x`, `0px`),
            (s = ye.current) == null ||
              s.style.setProperty(`--swipe-amount-y`, `0px`));
        }
        (me(!1), fe(!1), ie(null));
      },
      onPointerMove: (t) => {
        var n, r;
        if (!Me.current || !Ce || window.getSelection()?.toString().length > 0)
          return;
        let i = t.clientY - Me.current.y,
          a = t.clientX - Me.current.x,
          o = e.swipeDirections ?? Ip(b);
        !re &&
          (Math.abs(a) > 1 || Math.abs(i) > 1) &&
          ie(Math.abs(a) > Math.abs(i) ? `x` : `y`);
        let s = { x: 0, y: 0 },
          c = (e) => 1 / (1.5 + Math.abs(e) / 20);
        if (re === `y`) {
          if (o.includes(`top`) || o.includes(`bottom`))
            if ((o.includes(`top`) && i < 0) || (o.includes(`bottom`) && i > 0))
              s.y = i;
            else {
              let e = i * c(i);
              s.y = Math.abs(e) < Math.abs(i) ? e : i;
            }
        } else if (re === `x` && (o.includes(`left`) || o.includes(`right`)))
          if ((o.includes(`left`) && a < 0) || (o.includes(`right`) && a > 0))
            s.x = a;
          else {
            let e = a * c(a);
            s.x = Math.abs(e) < Math.abs(a) ? e : a;
          }
        ((Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && me(!0),
          (n = ye.current) == null ||
            n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
          (r = ye.current) == null ||
            r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
      },
    },
    De && !n.jsx && Se !== `loading`
      ? L.createElement(
          `button`,
          {
            'aria-label': ne,
            'data-disabled': Re,
            'data-close-button': !0,
            onClick:
              Re || !Ce
                ? () => {}
                : () => {
                    (ze(), n.onDismiss == null || n.onDismiss.call(n, n));
                  },
            className: Fp(S?.closeButton, n?.classNames?.closeButton),
          },
          te?.close ?? yp
        )
      : null,
    (Se || n.icon || n.promise) &&
      n.icon !== null &&
      (te?.[Se] !== null || n.icon)
      ? L.createElement(
          `div`,
          { 'data-icon': ``, className: Fp(S?.icon, n?.classNames?.icon) },
          n.promise || (n.type === `loading` && !n.icon)
            ? n.icon || Be()
            : null,
          n.type === `loading` ? null : Ve
        )
      : null,
    L.createElement(
      `div`,
      { 'data-content': ``, className: Fp(S?.content, n?.classNames?.content) },
      L.createElement(
        `div`,
        { 'data-title': ``, className: Fp(S?.title, n?.classNames?.title) },
        n.jsx ? n.jsx : typeof n.title == `function` ? n.title() : n.title
      ),
      n.description
        ? L.createElement(
            `div`,
            {
              'data-description': ``,
              className: Fp(v, Te, S?.description, n?.classNames?.description),
            },
            typeof n.description == `function` ? n.description() : n.description
          )
        : null
    ),
    L.isValidElement(n.cancel)
      ? n.cancel
      : n.cancel && Ep(n.cancel)
        ? L.createElement(
            `button`,
            {
              'data-button': !0,
              'data-cancel': !0,
              style: n.cancelButtonStyle || h,
              onClick: (e) => {
                Ep(n.cancel) &&
                  Ce &&
                  (n.cancel.onClick == null ||
                    n.cancel.onClick.call(n.cancel, e),
                  ze());
              },
              className: Fp(S?.cancelButton, n?.classNames?.cancelButton),
            },
            n.cancel.label
          )
        : null,
    L.isValidElement(n.action)
      ? n.action
      : n.action && Ep(n.action)
        ? L.createElement(
            `button`,
            {
              'data-button': !0,
              'data-action': !0,
              style: n.actionButtonStyle || g,
              onClick: (e) => {
                Ep(n.action) &&
                  (n.action.onClick == null ||
                    n.action.onClick.call(n.action, e),
                  !e.defaultPrevented && ze());
              },
              className: Fp(S?.actionButton, n?.classNames?.actionButton),
            },
            n.action.label
          )
        : null
  );
};
function Rp() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function zp(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? kp : Op;
      function o(e) {
        [`top`, `right`, `bottom`, `left`].forEach((t) => {
          n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
        });
      }
      typeof e == `number` || typeof e == `string`
        ? o(e)
        : typeof e == `object`
          ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
              e[t] === void 0
                ? (n[`${i}-${t}`] = a)
                : (n[`${i}-${t}`] =
                    typeof e[t] == `number` ? `${e[t]}px` : e[t]);
            })
          : o(a);
    }),
    n
  );
}
var Bp = L.forwardRef(function (e, t) {
    let {
        id: n,
        invert: r,
        position: i = `bottom-right`,
        hotkey: a = [`altKey`, `KeyT`],
        expand: o,
        closeButton: s,
        className: c,
        offset: l,
        mobileOffset: u,
        theme: d = `light`,
        richColors: f,
        duration: p,
        style: m,
        visibleToasts: h = Dp,
        toastOptions: g,
        dir: _ = Rp(),
        gap: v = Mp,
        icons: y,
        containerAriaLabel: b = `Notifications`,
      } = e,
      [x, ee] = L.useState([]),
      S = L.useMemo(
        () =>
          n
            ? x.filter((e) => e.toasterId === n)
            : x.filter((e) => !e.toasterId),
        [x, n]
      ),
      te = L.useMemo(
        () =>
          Array.from(
            new Set(
              [i].concat(S.filter((e) => e.position).map((e) => e.position))
            )
          ),
        [S, i]
      ),
      [ne, re] = L.useState([]),
      [ie, ae] = L.useState(!1),
      [oe, se] = L.useState(!1),
      [ce, le] = L.useState(
        d === `system`
          ? typeof window < `u` &&
            window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
            ? `dark`
            : `light`
          : d
      ),
      ue = L.useRef(null),
      de = a.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      fe = L.useRef(null),
      C = L.useRef(!1),
      w = L.useCallback((e) => {
        ee(
          (t) => (
            t.find((t) => t.id === e.id)?.delete || Sp.dismiss(e.id),
            t.filter(({ id: t }) => t !== e.id)
          )
        );
      }, []);
    return (
      L.useEffect(
        () =>
          Sp.subscribe((e) => {
            if (e.dismiss) {
              requestAnimationFrame(() => {
                ee((t) =>
                  t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t))
                );
              });
              return;
            }
            setTimeout(() => {
              fc.flushSync(() => {
                ee((t) => {
                  let n = t.findIndex((t) => t.id === e.id);
                  return n === -1
                    ? [e, ...t]
                    : [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)];
                });
              });
            });
          }),
        [x]
      ),
      L.useEffect(() => {
        if (d !== `system`) {
          le(d);
          return;
        }
        if (
          (d === `system` &&
            (window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
              ? le(`dark`)
              : le(`light`)),
          typeof window > `u`)
        )
          return;
        let e = window.matchMedia(`(prefers-color-scheme: dark)`);
        try {
          e.addEventListener(`change`, ({ matches: e }) => {
            le(e ? `dark` : `light`);
          });
        } catch {
          e.addListener(({ matches: e }) => {
            try {
              le(e ? `dark` : `light`);
            } catch (e) {
              console.error(e);
            }
          });
        }
      }, [d]),
      L.useEffect(() => {
        x.length <= 1 && ae(!1);
      }, [x]),
      L.useEffect(() => {
        let e = (e) => {
          if (a.every((t) => e[t] || e.code === t)) {
            var t;
            (ae(!0), (t = ue.current) == null || t.focus());
          }
          e.code === `Escape` &&
            (document.activeElement === ue.current ||
              ue.current?.contains(document.activeElement)) &&
            ae(!1);
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [a]),
      L.useEffect(() => {
        if (ue.current)
          return () => {
            fe.current &&
              (fe.current.focus({ preventScroll: !0 }),
              (fe.current = null),
              (C.current = !1));
          };
      }, [ue.current]),
      L.createElement(
        `section`,
        {
          ref: t,
          'aria-label': `${b} ${de}`,
          tabIndex: -1,
          'aria-live': `polite`,
          'aria-relevant': `additions text`,
          'aria-atomic': `false`,
          suppressHydrationWarning: !0,
        },
        te.map((t, n) => {
          let [i, a] = t.split(`-`);
          return S.length
            ? L.createElement(
                `ol`,
                {
                  key: t,
                  dir: _ === `auto` ? Rp() : _,
                  tabIndex: -1,
                  ref: ue,
                  className: c,
                  'data-sonner-toaster': !0,
                  'data-sonner-theme': ce,
                  'data-y-position': i,
                  'data-x-position': a,
                  style: {
                    '--front-toast-height': `${ne[0]?.height || 0}px`,
                    '--width': `${jp}px`,
                    '--gap': `${v}px`,
                    ...m,
                    ...zp(l, u),
                  },
                  onBlur: (e) => {
                    C.current &&
                      !e.currentTarget.contains(e.relatedTarget) &&
                      ((C.current = !1),
                      (fe.current &&=
                        (fe.current.focus({ preventScroll: !0 }), null)));
                  },
                  onFocus: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      C.current ||
                      ((C.current = !0), (fe.current = e.relatedTarget));
                  },
                  onMouseEnter: () => ae(!0),
                  onMouseMove: () => ae(!0),
                  onMouseLeave: () => {
                    oe || ae(!1);
                  },
                  onDragEnd: () => ae(!1),
                  onPointerDown: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      se(!0);
                  },
                  onPointerUp: () => se(!1),
                },
                S.filter(
                  (e) => (!e.position && n === 0) || e.position === t
                ).map((n, i) =>
                  L.createElement(Lp, {
                    key: n.id,
                    icons: y,
                    index: i,
                    toast: n,
                    defaultRichColors: f,
                    duration: g?.duration ?? p,
                    className: g?.className,
                    descriptionClassName: g?.descriptionClassName,
                    invert: r,
                    visibleToasts: h,
                    closeButton: g?.closeButton ?? s,
                    interacting: oe,
                    position: t,
                    style: g?.style,
                    unstyled: g?.unstyled,
                    classNames: g?.classNames,
                    cancelButtonStyle: g?.cancelButtonStyle,
                    actionButtonStyle: g?.actionButtonStyle,
                    closeButtonAriaLabel: g?.closeButtonAriaLabel,
                    removeToast: w,
                    toasts: S.filter((e) => e.position == n.position),
                    heights: ne.filter((e) => e.position == n.position),
                    setHeights: re,
                    expandByDefault: o,
                    gap: v,
                    expanded: ie,
                    swipeDirections: e.swipeDirections,
                  })
                )
              )
            : null;
        })
      )
    );
  }),
  Vp = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  Hp = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase()
    ),
  Up = (e) => {
    let t = Hp(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Wp = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Gp = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
  },
  Kp = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  qp = (0, L.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c
    ) =>
      (0, L.createElement)(
        `svg`,
        {
          ref: c,
          ...Kp,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Wp(`lucide`, i),
          ...(!a && !Gp(s) && { 'aria-hidden': `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, L.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ]
      )
  ),
  Jp = (e, t) => {
    let n = (0, L.forwardRef)(({ className: n, ...r }, i) =>
      (0, L.createElement)(qp, {
        ref: i,
        iconNode: t,
        className: Wp(`lucide-${Vp(Up(e))}`, `lucide-${e}`, n),
        ...r,
      })
    );
    return ((n.displayName = Up(e)), n);
  },
  Yp = Jp(`circle-check`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  Xp = Jp(`info`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 16v-4`, key: `1dtifu` }],
    [`path`, { d: `M12 8h.01`, key: `e9boi3` }],
  ]),
  Zp = Jp(`loader-circle`, [
    [`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }],
  ]),
  Qp = Jp(`octagon-x`, [
    [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
    [
      `path`,
      {
        d: `M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,
        key: `2d38gg`,
      },
    ],
    [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
  ]),
  $p = Jp(`triangle-alert`, [
    [
      `path`,
      {
        d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
        key: `wmoenq`,
      },
    ],
    [`path`, { d: `M12 9v4`, key: `juzpu7` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  em = ({ ...e }) => {
    let { theme: t = `system` } = Bu();
    return (0, R.jsx)(Bp, {
      theme: t,
      className: `toaster group`,
      icons: {
        success: (0, R.jsx)(Yp, { className: `size-4` }),
        info: (0, R.jsx)(Xp, { className: `size-4` }),
        warning: (0, R.jsx)($p, { className: `size-4` }),
        error: (0, R.jsx)(Qp, { className: `size-4` }),
        loading: (0, R.jsx)(Zp, { className: `size-4 animate-spin` }),
      },
      style: {
        '--normal-bg': `var(--popover)`,
        '--normal-text': `var(--popover-foreground)`,
        '--normal-border': `var(--border)`,
        '--border-radius': `var(--radius)`,
      },
      toastOptions: { classNames: { toast: `cn-toast` } },
      ...e,
    });
  },
  tm = `/imagetoascii-replica`;
function nm(e) {
  return e.startsWith(`/`) ? `${tm}${e}` : e;
}
var eee = ku().handler(
    os(`cbd81923ae1249d4c007f69579597cf1e79f1f7b8675cc608ba82e8926b5bb59`)
  ),
  rm = kc({
    loader: () => eee(),
    head: () => {
      let e =
        (typeof window < `u` && window.location?.origin) || Yu.app_url || ``;
      return {
        meta: [
          { charSet: `utf-8` },
          { name: `viewport`, content: `width=device-width, initial-scale=1` },
          { title: `Image to ASCII — Free Online ASCII Art Generator` },
          {
            name: `description`,
            content: `Image to ASCII — free online converter. Upload a photo or generate one with AI, then turn it into ASCII art in your browser. Export as PNG or text.`,
          },
          {
            property: `og:title`,
            content: `Image to ASCII — Free Online ASCII Art Generator`,
          },
          {
            property: `og:description`,
            content: `Image to ASCII — free online converter. Upload a photo or generate one with AI, then turn it into ASCII art in your browser. Export as PNG or text.`,
          },
          { property: `og:image`, content: nm(`/seo/og.jpg`) },
          { property: `og:type`, content: `website` },
          { name: `twitter:card`, content: `summary_large_image` },
          { name: `theme-color`, content: `#0a0a0c` },
          { name: `color-scheme`, content: `dark` },
        ],
        links: [
          {
            rel: `icon`,
            href: nm(`/images/brand/favicon-32.png`),
            sizes: `32x32`,
          },
          {
            rel: `icon`,
            href: nm(`/images/brand/favicon-16.png`),
            sizes: `16x16`,
          },
          {
            rel: `apple-touch-icon`,
            href: nm(`/images/brand/apple-touch-icon.png`),
            sizes: `180x180`,
          },
          ...r.map((t) => ({
            rel: `alternate`,
            hrefLang: t,
            href: o(`${e}/`, { locale: t }).href,
          })),
        ],
      };
    },
    component: im,
    shellComponent: am,
    notFoundComponent: om,
    errorComponent: sm,
  });
function im() {
  let e = rm.useLoaderData();
  return (0, R.jsxs)(su, {
    client: Qu(),
    children: [
      (0, R.jsxs)(Vu, {
        attribute: `class`,
        defaultTheme: `dark`,
        enableSystem: !1,
        disableTransitionOnChange: !0,
        children: [
          (0, R.jsx)(zc, {}),
          (0, R.jsx)(`div`, { className: `ia-crt` }),
          (0, R.jsx)(em, { position: `top-center`, richColors: !0 }),
          null,
          e?.gaId ? (0, R.jsx)($u, { measurementId: e.gaId }) : null,
          e?.plausibleDomain
            ? (0, R.jsx)(ed, {
                domain: e.plausibleDomain,
                src: e.plausibleSrc || void 0,
              })
            : null,
          (0, R.jsx)(rd, {
            crispWebsiteId: e?.crispWebsiteId || void 0,
            tawkPropertyId: e?.tawkPropertyId || void 0,
            tawkWidgetId: e?.tawkWidgetId || void 0,
          }),
        ],
      }),
      !1,
    ],
  });
}
function am({ children: e }) {
  return (0, R.jsxs)(`html`, {
    lang: s(),
    suppressHydrationWarning: !0,
    className: `dark`,
    children: [
      (0, R.jsx)(`head`, { children: (0, R.jsx)(Qc, {}) }),
      (0, R.jsxs)(`body`, {
        className: `font-sans antialiased`,
        style: {
          fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
        },
        children: [e, (0, R.jsx)($c, {})],
      }),
    ],
  });
}
function om() {
  return (0, R.jsxs)(`div`, {
    className: `bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-4`,
    children: [
      (0, R.jsx)(`h1`, { className: `text-6xl font-bold`, children: `404` }),
      (0, R.jsx)(`p`, {
        className: `text-muted-foreground`,
        children: `Page not found`,
      }),
      (0, R.jsx)(`a`, {
        href: `/`,
        className: `text-sm underline underline-offset-4`,
        children: `Back to home`,
      }),
    ],
  });
}
function sm({ error: e, reset: t }) {
  return (0, R.jsxs)(`div`, {
    className: `bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-4`,
    children: [
      (0, R.jsx)(`h1`, { className: `text-4xl font-bold`, children: `Oops` }),
      (0, R.jsx)(`p`, {
        className: `text-muted-foreground`,
        children: `Something went wrong. Please try again.`,
      }),
      !1,
      (0, R.jsx)(`button`, {
        type: `button`,
        onClick: t,
        className: `text-sm underline underline-offset-4`,
        children: `Try again`,
      }),
    ],
  });
}
var cm = () => `My App`,
  lm = () => `我的应用`,
  um = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cm(e) : lm(e)),
  dm = () => `Ship your SaaS faster`,
  fm = () => `快速构建你的 SaaS`,
  pm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dm(e) : fm(e)),
  mm = () => `Sign In`,
  hm = () => `登录`,
  gm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mm(e) : hm(e)),
  _m = () => `Welcome back`,
  vm = () => `欢迎回来`,
  ym = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _m(e) : vm(e)),
  bm = () => `Sign Up`,
  xm = () => `注册`,
  Sm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bm(e) : xm(e)),
  Cm = () => `Get started for free`,
  wm = () => `免费开始使用`,
  Tm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Cm(e) : wm(e)),
  Em = () => `Email`,
  Dm = () => `邮箱`,
  Om = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Em(e) : Dm(e)),
  km = () => `Enter your email`,
  Am = () => `输入邮箱地址`,
  jm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? km(e) : Am(e)),
  Mm = () => `Password`,
  Nm = () => `密码`,
  Pm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Mm(e) : Nm(e)),
  Fm = () => `Enter your password`,
  Im = () => `输入密码`,
  Lm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Fm(e) : Im(e)),
  Rm = () => `Confirm Password`,
  zm = () => `确认密码`,
  Bm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Rm(e) : zm(e)),
  tee = () => `Re-enter your password`,
  nee = () => `再次输入密码`,
  Vm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? tee(e) : nee(e)),
  Hm = () => `Passwords do not match`,
  Um = () => `两次输入的密码不一致`,
  Wm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Hm(e) : Um(e)),
  Gm = () => `Name`,
  Km = () => `姓名`,
  qm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Gm(e) : Km(e)),
  Jm = () => `Enter your name`,
  Ym = () => `输入姓名`,
  Xm = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Jm(e) : Ym(e)),
  Zm = () => `Don't have an account?`,
  Qm = () => `还没有账号？`,
  $m = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Zm(e) : Qm(e)),
  eh = () => `Already have an account?`,
  th = () => `已有账号？`,
  nh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? eh(e) : th(e)),
  rh = () => `Or continue with`,
  ih = () => `或者继续使用`,
  ah = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? rh(e) : ih(e)),
  oh = () => `Sign Out`,
  sh = () => `退出登录`,
  ch = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? oh(e) : sh(e)),
  lh = () => `Sign in with Google`,
  uh = () => `使用 Google 登录`,
  dh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? lh(e) : uh(e)),
  fh = () => `Sign in with GitHub`,
  ph = () => `使用 GitHub 登录`,
  mh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? fh(e) : ph(e)),
  hh = () => `No sign-in methods available`,
  gh = () => `暂无可用的登录方式`,
  _h = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hh(e) : gh(e)),
  vh = () =>
    `The administrator hasn't enabled any sign-in methods yet. Please check back later.`,
  yh = () => `管理员尚未启用任何登录方式，请稍后再试。`,
  bh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? vh(e) : yh(e)),
  xh = () => `Forgot your password?`,
  Sh = () => `忘记密码？`,
  Ch = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? xh(e) : Sh(e)),
  wh = () => `Forgot password`,
  Th = () => `找回密码`,
  Eh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? wh(e) : Th(e)),
  Dh = () =>
    `Enter your email and we'll send you a link to reset your password.`,
  Oh = () => `输入你的邮箱，我们将发送密码重置链接。`,
  kh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Dh(e) : Oh(e)),
  Ah = () => `Send reset link`,
  jh = () => `发送重置链接`,
  Mh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ah(e) : jh(e)),
  Nh = () => `Check your email`,
  Ph = () => `请查收邮件`,
  Fh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Nh(e) : Ph(e)),
  Ih = (e) =>
    `If an account exists for ${e?.email}, we've sent a link to reset your password. The link will expire in 1 hour.`,
  Lh = (e) =>
    `如果 ${e?.email} 已注册账号，我们已发送密码重置链接，请在 1 小时内完成重置。`,
  Rh = (e, t = {}) => ((t.locale ?? s()) === `en` ? Ih(e) : Lh(e)),
  zh = () => `Back to sign in`,
  Bh = () => `返回登录`,
  Vh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? zh(e) : Bh(e)),
  Hh = () => `Reset password`,
  Uh = () => `重置密码`,
  Wh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Hh(e) : Uh(e)),
  Gh = () => `Choose a new password for your account.`,
  Kh = () => `为你的账号设置新密码。`,
  qh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Gh(e) : Kh(e)),
  Jh = () => `New password`,
  Yh = () => `新密码`,
  Xh = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Jh(e) : Yh(e)),
  Zh = () => `Enter your new password`,
  Qh = () => `输入新密码`,
  $h = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Zh(e) : Qh(e)),
  eg = () => `Re-enter your new password`,
  tg = () => `再次输入新密码`,
  ng = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? eg(e) : tg(e)),
  rg = () => `Reset password`,
  ig = () => `重置密码`,
  ag = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? rg(e) : ig(e)),
  og = () => `Your password has been reset. You can now sign in.`,
  sg = () => `密码已重置，请使用新密码登录。`,
  cg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? og(e) : sg(e)),
  lg = () =>
    `This reset link is invalid or has expired. Please request a new one.`,
  ug = () => `重置链接无效或已过期，请重新申请。`,
  dg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? lg(e) : ug(e)),
  fg = () => `Missing reset token. Please open the link from your email.`,
  pg = () => `缺少重置令牌，请从邮件中打开链接。`,
  mg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? fg(e) : pg(e)),
  hg = () => `Password reset is not available`,
  gg = () => `暂无法找回密码`,
  _g = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hg(e) : gg(e)),
  vg = () =>
    `The administrator hasn't configured an email service yet, so reset links can't be sent. Please contact support.`,
  yg = () => `管理员尚未配置邮件服务，无法发送重置链接，请联系客服。`,
  bg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? vg(e) : yg(e)),
  xg = () => `Check your email`,
  Sg = () => `请查收邮件`,
  Cg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? xg(e) : Sg(e)),
  wg = () => `To continue, click the link sent to`,
  Tg = () => `继续操作前，请点击发送到以下邮箱的验证链接：`,
  Eg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? wg(e) : Tg(e)),
  Dg = () => `Continue`,
  Og = () => `继续`,
  kg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Dg(e) : Og(e)),
  Ag = () => `After verifying, click "Continue".`,
  jg = () => `完成验证后，请点击「继续」按钮。`,
  Mg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ag(e) : jg(e)),
  Ng = () => `Not verified yet. Please click the link in your email first.`,
  Pg = () => `尚未完成验证，请先前往邮箱点击验证链接。`,
  Fg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ng(e) : Pg(e)),
  Ig = () => `Failed to send verification email`,
  Lg = () => `发送验证邮件失败`,
  Rg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ig(e) : Lg(e)),
  zg = () => `Email is required`,
  Bg = () => `邮箱不能为空`,
  Vg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? zg(e) : Bg(e)),
  Hg = () => `Resend verification email`,
  Ug = () => `重新发送验证邮件`,
  Wg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Hg(e) : Ug(e)),
  Gg = (e) => `Resend in ${e?.seconds}s`,
  Kg = (e) => `${e?.seconds} 秒后可重新发送`,
  qg = (e, t = {}) => ((t.locale ?? s()) === `en` ? Gg(e) : Kg(e)),
  Jg = () => `Invite code`,
  Yg = () => `邀请码`,
  Xg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Jg(e) : Yg(e)),
  ree = () => `Enter your invite code`,
  iee = () => `请输入邀请码`,
  Zg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ree(e) : iee(e)),
  aee = () => `Invite code is required`,
  oee = () => `请输入邀请码`,
  Qg = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aee(e) : oee(e)),
  see = () => `Invalid invite code`,
  cee = () => `邀请码无效`,
  $g = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? see(e) : cee(e)),
  e_ = () => `Enter your invite code`,
  t_ = () => `输入邀请码`,
  n_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? e_(e) : t_(e)),
  r_ = () => `This app is invite-only. Enter a valid invite code to continue.`,
  i_ = () => `本应用为邀请制,请输入有效的邀请码以继续。`,
  a_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? r_(e) : i_(e)),
  o_ = () => `Continue`,
  s_ = () => `继续`,
  c_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? o_(e) : s_(e)),
  l_ = () => `Page not found`,
  u_ = () => `页面不存在`,
  d_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? l_(e) : u_(e)),
  f_ = () => `Back to home`,
  p_ = () => `返回首页`,
  m_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? f_(e) : p_(e)),
  h_ = () => `Oops`,
  g_ = () => `出错了`,
  __ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? h_(e) : g_(e)),
  v_ = () => `Something went wrong. Please try again.`,
  y_ = () => `页面出现了一些问题，请重试。`,
  b_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? v_(e) : y_(e)),
  x_ = () => `Try again`,
  S_ = () => `重试`,
  C_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? x_(e) : S_(e)),
  w_ = () => `Get Started`,
  T_ = () => `立即开始`,
  E_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? w_(e) : T_(e)),
  D_ = () => `Processing...`,
  O_ = () => `处理中...`,
  k_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? D_(e) : O_(e)),
  A_ = () => `Choose payment method`,
  j_ = () => `选择支付方式`,
  M_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? A_(e) : j_(e)),
  N_ = () => `Pick how you'd like to pay.`,
  P_ = () => `选择你想使用的支付渠道。`,
  F_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? N_(e) : P_(e)),
  I_ = (e) => `${e?.plan} — ${e?.price}`,
  L_ = (e) => `${e?.plan} — ${e?.price}`,
  R_ = (e, t = {}) => ((t.locale ?? s()) === `en` ? I_(e) : L_(e)),
  z_ = (e) => `${e?.plan}`,
  B_ = (e) => `${e?.plan}`,
  V_ = (e, t = {}) => ((t.locale ?? s()) === `en` ? z_(e) : B_(e)),
  H_ = () => `Switch System`,
  U_ = () => `切换系统`,
  W_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? H_(e) : U_(e)),
  G_ = () => `Admin`,
  K_ = () => `管理后台`,
  q_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? G_(e) : K_(e)),
  J_ = () => `Settings`,
  Y_ = () => `设置`,
  X_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? J_(e) : Y_(e)),
  Z_ = () => `Home`,
  Q_ = () => `首页`,
  $_ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Z_(e) : Q_(e)),
  ev = () => `Search...`,
  tv = () => `搜索...`,
  nv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ev(e) : tv(e)),
  rv = () => `No data`,
  iv = () => `暂无数据`,
  av = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? rv(e) : iv(e)),
  ov = (e) => `${e?.count} records`,
  sv = (e) => `共 ${e?.count} 条记录`,
  cv = (e, t = {}) => ((t.locale ?? s()) === `en` ? ov(e) : sv(e)),
  lv = (e) => `Page ${e?.current} of ${e?.total}`,
  uv = (e) => `第 ${e?.current} 页，共 ${e?.total} 页`,
  dv = (e, t = {}) => ((t.locale ?? s()) === `en` ? lv(e) : uv(e)),
  fv = () => `Previous`,
  pv = () => `上一页`,
  mv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? fv(e) : pv(e)),
  hv = () => `Next`,
  gv = () => `下一页`,
  _v = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hv(e) : gv(e)),
  vv = () => `Refresh`,
  yv = () => `刷新`,
  bv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? vv(e) : yv(e)),
  xv = () => `Settings`,
  Sv = () => `设置`,
  Cv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? xv(e) : Sv(e)),
  wv = () => `Billing`,
  Tv = () => `账单`,
  Ev = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? wv(e) : Tv(e)),
  Dv = () => `API Keys`,
  Ov = () => `API 密钥`,
  kv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Dv(e) : Ov(e)),
  Av = () => `Profile`,
  jv = () => `个人资料`,
  Mv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Av(e) : jv(e)),
  Nv = () => `Sign In`,
  Pv = () => `登录`,
  Fv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Nv(e) : Pv(e)),
  Iv = () => `Get Started`,
  Lv = () => `开始使用`,
  Rv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Iv(e) : Lv(e)),
  zv = () => `Light`,
  Bv = () => `浅色模式`,
  Vv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? zv(e) : Bv(e)),
  Hv = () => `Dark`,
  Uv = () => `深色模式`,
  Wv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Hv(e) : Uv(e)),
  Gv = () => `System`,
  Kv = () => `跟随系统`,
  qv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Gv(e) : Kv(e)),
  Jv = () => `Back to home`,
  Yv = () => `返回首页`,
  Xv = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Jv(e) : Yv(e)),
  Zv = () => `Last updated`,
  Qv = () => `最近更新`,
  $v = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Zv(e) : Qv(e)),
  ey = () => `Contact support`,
  ty = () => `联系客服`,
  ny = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ey(e) : ty(e)),
  ry = () => `Contact Support`,
  iy = () => `联系客服`,
  ay = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ry(e) : iy(e)),
  oy = () => `Submit a ticket and our team will get back to you`,
  sy = () => `提交工单反馈问题,我们会尽快回复你`,
  cy = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? oy(e) : sy(e)),
  ly = () => `Please sign in to submit a support ticket.`,
  uy = () => `请先登录后再提交工单。`,
  dy = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ly(e) : uy(e)),
  fy = () => `Sign In`,
  py = () => `去登录`,
  my = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? fy(e) : py(e)),
  hy = () => `Subject`,
  gy = () => `标题`,
  _y = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hy(e) : gy(e)),
  vy = () => `Brief summary of your issue`,
  yy = () => `简要描述你的问题`,
  by = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? vy(e) : yy(e)),
  xy = () => `Description`,
  Sy = () => `问题描述`,
  Cy = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? xy(e) : Sy(e)),
  wy = () => `Describe your issue in detail...`,
  Ty = () => `详细描述你遇到的问题…`,
  Ey = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? wy(e) : Ty(e)),
  Dy = () => `You can track replies in`,
  Oy = () => `提交后可前往`,
  ky = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Dy(e) : Oy(e)),
  Ay = () => `Support Tickets`,
  jy = () => `工单支持页面查看回复`,
  My = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ay(e) : jy(e)),
  Ny = () => `Subject and description are required`,
  Py = () => `请填写标题和问题描述`,
  Fy = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ny(e) : Py(e)),
  Iy = () => `Ticket submitted — we'll get back to you soon`,
  Ly = () => `工单已提交,我们会尽快回复`,
  Ry = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Iy(e) : Ly(e)),
  zy = () => `Cancel`,
  By = () => `取消`,
  Vy = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? zy(e) : By(e)),
  Hy = () => `Submit`,
  Uy = () => `提交`,
  Wy = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Hy(e) : Uy(e)),
  Gy = () => `Submitting...`,
  Ky = () => `提交中…`,
  qy = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Gy(e) : Ky(e)),
  Jy = () => `Images (optional)`,
  Yy = () => `图片附件(可选)`,
  Xy = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Jy(e) : Yy(e)),
  Zy = () => `Settings`,
  Qy = () => `设置`,
  $y = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Zy(e) : Qy(e)),
  eb = (e) => `Welcome back, ${e?.name}`,
  tb = (e) => `欢迎回来，${e?.name}`,
  nb = (e, t = {}) => ((t.locale ?? s()) === `en` ? eb(e) : tb(e)),
  rb = () => `Your app content goes here.`,
  ib = () => `你的应用内容在这里。`,
  ab = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? rb(e) : ib(e)),
  ob = () => `Overview`,
  sb = () => `概览`,
  cb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ob(e) : sb(e)),
  lb = () => `Profile`,
  ub = () => `个人资料`,
  db = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? lb(e) : ub(e)),
  fb = () => `Billing`,
  pb = () => `账单`,
  mb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? fb(e) : pb(e)),
  hb = () => `Payments`,
  gb = () => `付款记录`,
  _b = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hb(e) : gb(e)),
  vb = () => `Credits`,
  yb = () => `额度明细`,
  bb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? vb(e) : yb(e)),
  xb = () => `API Keys`,
  Sb = () => `API 密钥`,
  Cb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? xb(e) : Sb(e)),
  wb = () => `Support Tickets`,
  Tb = () => `工单支持`,
  Eb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? wb(e) : Tb(e)),
  Db = () => `Plan`,
  Ob = () => `套餐`,
  kb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Db(e) : Ob(e)),
  Ab = () => `Free`,
  jb = () => `免费版`,
  Mb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ab(e) : jb(e)),
  Nb = () => `Current subscription`,
  Pb = () => `当前订阅`,
  Fb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Nb(e) : Pb(e)),
  Ib = () => `Usage`,
  Lb = () => `用量`,
  Rb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ib(e) : Lb(e)),
  zb = () => `API calls this month`,
  Bb = () => `本月 API 调用次数`,
  Vb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? zb(e) : Bb(e)),
  Hb = () => `Active keys`,
  Ub = () => `活跃密钥`,
  Wb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Hb(e) : Ub(e)),
  Gb = () => `Getting Started`,
  Kb = () => `开始使用`,
  qb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Gb(e) : Kb(e)),
  Jb = () => `Build your product on top of this engine`,
  Yb = () => `在这个引擎之上构建你的产品`,
  Xb = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Jb(e) : Yb(e)),
  Zb = () => `Profile`,
  Qb = () => `个人资料`,
  $b = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Zb(e) : Qb(e)),
  ex = () => `Manage your account`,
  tx = () => `管理你的账户`,
  nx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ex(e) : tx(e)),
  rx = () => `Profile`,
  ix = () => `个人资料`,
  ax = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? rx(e) : ix(e)),
  ox = () => `Name`,
  sx = () => `姓名`,
  cx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ox(e) : sx(e)),
  lx = () => `Email`,
  ux = () => `邮箱`,
  dx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? lx(e) : ux(e)),
  fx = () => `Avatar`,
  px = () => `头像`,
  mx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? fx(e) : px(e)),
  hx = () => `Drop an image, click to upload, or paste from clipboard`,
  gx = () => `拖拽图片、点击上传，或从剪贴板粘贴`,
  _x = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hx(e) : gx(e)),
  vx = () => `Save`,
  yx = () => `保存`,
  bx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? vx(e) : yx(e)),
  xx = () => `Saving...`,
  Sx = () => `保存中...`,
  Cx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? xx(e) : Sx(e)),
  wx = () => `Settings saved`,
  Tx = () => `设置已保存`,
  Ex = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? wx(e) : Tx(e)),
  Dx = () => `Failed to save`,
  Ox = () => `保存失败`,
  kx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Dx(e) : Ox(e)),
  Ax = () => `Loading...`,
  jx = () => `加载中...`,
  Mx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ax(e) : jx(e)),
  Nx = () => `Billing`,
  Px = () => `账单`,
  Fx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Nx(e) : Px(e)),
  Ix = () => `Manage your subscriptions`,
  Lx = () => `管理你的订阅`,
  Rx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ix(e) : Lx(e)),
  zx = () => `Credits`,
  Bx = () => `额度`,
  Vx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? zx(e) : Bx(e)),
  Hx = () => `Your available credit balance`,
  Ux = () => `你的可用额度余额`,
  Wx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Hx(e) : Ux(e)),
  Gx = () => `Current Subscription`,
  Kx = () => `当前订阅`,
  qx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Gx(e) : Kx(e)),
  Jx = () => `Subscriptions`,
  Yx = () => `订阅列表`,
  Xx = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Jx(e) : Yx(e)),
  Zx = () => `Subscription Details`,
  Qx = () => `订阅详情`,
  $x = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Zx(e) : Qx(e)),
  eS = () => `No active subscription`,
  tS = () => `暂无活跃订阅`,
  nS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? eS(e) : tS(e)),
  rS = () => `Subscribe`,
  iS = () => `立即订阅`,
  aS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? rS(e) : iS(e)),
  oS = () => `Change plan`,
  sS = () => `调整套餐`,
  cS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? oS(e) : sS(e)),
  lS = () => `Plan`,
  uS = () => `套餐`,
  dS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? lS(e) : uS(e)),
  fS = () => `Status`,
  pS = () => `状态`,
  mS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? fS(e) : pS(e)),
  hS = () => `Interval`,
  gS = () => `周期`,
  _S = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hS(e) : gS(e)),
  vS = () => `No.`,
  yS = () => `订阅号`,
  bS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? vS(e) : yS(e)),
  xS = () => `Current period`,
  SS = () => `当前周期`,
  CS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? xS(e) : SS(e)),
  wS = () => `Ends at`,
  TS = () => `结束时间`,
  ES = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? wS(e) : TS(e)),
  DS = (e) => `Renews on ${e?.date}`,
  OS = (e) => `${e?.date} 续订`,
  kS = (e, t = {}) => ((t.locale ?? s()) === `en` ? DS(e) : OS(e)),
  AS = (e) => `Ends on ${e?.date}`,
  jS = (e) => `${e?.date} 到期`,
  MS = (e, t = {}) => ((t.locale ?? s()) === `en` ? AS(e) : jS(e)),
  NS = () => `Period start`,
  PS = () => `本期开始`,
  FS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? NS(e) : PS(e)),
  IS = () => `Period end`,
  LS = () => `本期结束`,
  RS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? IS(e) : LS(e)),
  zS = () => `Canceled at`,
  BS = () => `取消时间`,
  VS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? zS(e) : BS(e)),
  HS = () => `Ends at`,
  US = () => `结束时间`,
  WS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? HS(e) : US(e)),
  GS = () => `Reason`,
  KS = () => `取消原因`,
  qS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? GS(e) : KS(e)),
  JS = () => `View`,
  YS = () => `查看订阅`,
  XS = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? JS(e) : YS(e)),
  ZS = () => `Cancel subscription`,
  QS = () => `取消订阅`,
  $S = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ZS(e) : QS(e)),
  eC = () => `Cancel subscription`,
  tC = () => `取消订阅`,
  nC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? eC(e) : tC(e)),
  rC = (e) =>
    `Are you sure you want to cancel your ${e?.plan} subscription? You'll keep access until the end of the current billing period.`,
  iC = (e) => `确定要取消「${e?.plan}」订阅吗？你可以使用到当前计费周期结束。`,
  aC = (e, t = {}) => ((t.locale ?? s()) === `en` ? rC(e) : iC(e)),
  oC = () => `Cancel subscription`,
  sC = () => `确认取消`,
  cC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? oC(e) : sC(e)),
  lC = () => `Keep subscription`,
  uC = () => `保留订阅`,
  dC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? lC(e) : uC(e)),
  fC = () => `Canceling...`,
  pC = () => `取消中...`,
  mC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? fC(e) : pC(e)),
  hC = () => `Subscription canceled`,
  gC = () => `订阅已取消`,
  _C = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hC(e) : gC(e)),
  vC = () => `Failed to cancel subscription`,
  yC = () => `取消订阅失败`,
  bC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? vC(e) : yC(e)),
  xC = () => `Close`,
  SC = () => `关闭`,
  CC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? xC(e) : SC(e)),
  wC = () => `Actions`,
  TC = () => `操作`,
  EC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? wC(e) : TC(e)),
  DC = () => `All`,
  OC = () => `全部`,
  kC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? DC(e) : OC(e)),
  AC = () => `Active`,
  jC = () => `活跃`,
  MC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? AC(e) : jC(e)),
  NC = () => `Trialing`,
  PC = () => `试用中`,
  FC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? NC(e) : PC(e)),
  IC = () => `Paused`,
  LC = () => `已暂停`,
  RC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? IC(e) : LC(e)),
  zC = () => `Expired`,
  BC = () => `已过期`,
  VC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? zC(e) : BC(e)),
  HC = () => `Pending Cancel`,
  UC = () => `待取消`,
  WC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? HC(e) : UC(e)),
  GC = () => `Canceled`,
  KC = () => `已取消`,
  qC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? GC(e) : KC(e)),
  JC = () => `Payments`,
  YC = () => `付款记录`,
  XC = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? JC(e) : YC(e)),
  ZC = () => `No payments yet`,
  QC = () => `暂无付款记录`,
  $C = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ZC(e) : QC(e)),
  ew = () => `Order`,
  tw = () => `订单号`,
  nw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ew(e) : tw(e)),
  rw = () => `Amount`,
  iw = () => `金额`,
  aw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? rw(e) : iw(e)),
  ow = () => `Provider`,
  sw = () => `支付方式`,
  cw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ow(e) : sw(e)),
  lw = () => `Date`,
  uw = () => `日期`,
  dw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? lw(e) : uw(e)),
  fw = () => `Payments`,
  pw = () => `付款记录`,
  mw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? fw(e) : pw(e)),
  hw = () => `Your payment history`,
  gw = () => `你的付款历史`,
  _w = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hw(e) : gw(e)),
  vw = () => `All`,
  yw = () => `全部`,
  bw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? vw(e) : yw(e)),
  xw = () => `One-time`,
  Sw = () => `单次购买`,
  Cw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? xw(e) : Sw(e)),
  ww = () => `Subscription`,
  Tw = () => `订阅`,
  Ew = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ww(e) : Tw(e)),
  Dw = () => `Renewal`,
  Ow = () => `续订`,
  kw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Dw(e) : Ow(e)),
  Aw = () => `No payments yet`,
  jw = () => `暂无付款记录`,
  Mw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Aw(e) : jw(e)),
  Nw = () => `Order`,
  Pw = () => `订单号`,
  Fw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Nw(e) : Pw(e)),
  Iw = () => `Product`,
  Lw = () => `商品`,
  Rw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Iw(e) : Lw(e)),
  zw = () => `Amount`,
  Bw = () => `金额`,
  Vw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? zw(e) : Bw(e)),
  Hw = () => `Status`,
  Uw = () => `状态`,
  Ww = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Hw(e) : Uw(e)),
  Gw = () => `Type`,
  Kw = () => `类型`,
  qw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Gw(e) : Kw(e)),
  Jw = () => `Provider`,
  Yw = () => `支付方式`,
  Xw = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Jw(e) : Yw(e)),
  Zw = () => `Date`,
  Qw = () => `日期`,
  $w = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Zw(e) : Qw(e)),
  eT = () => `Invoice`,
  tT = () => `发票`,
  nT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? eT(e) : tT(e)),
  lee = () => `Credits`,
  uee = () => `额度明细`,
  rT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? lee(e) : uee(e)),
  dee = () => `Your credits balance and history`,
  fee = () => `你的额度余额和变动记录`,
  iT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dee(e) : fee(e)),
  pee = () => `Balance`,
  mee = () => `余额`,
  aT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? pee(e) : mee(e)),
  hee = () => `Purchase Credits`,
  gee = () => `购买额度`,
  oT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? hee(e) : gee(e)),
  _ee = () => `All`,
  vee = () => `全部`,
  yee = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _ee(e) : vee(e)),
  bee = () => `Grant`,
  xee = () => `获得`,
  See = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bee(e) : xee(e)),
  Cee = () => `Consume`,
  wee = () => `消耗`,
  Tee = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Cee(e) : wee(e)),
  Eee = () => `No credit records yet`,
  Dee = () => `暂无额度记录`,
  sT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Eee(e) : Dee(e)),
  Oee = () => `Transaction`,
  kee = () => `流水号`,
  cT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Oee(e) : kee(e)),
  Aee = () => `Type`,
  jee = () => `类型`,
  lT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Aee(e) : jee(e)),
  Mee = () => `Scene`,
  Nee = () => `场景`,
  uT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Mee(e) : Nee(e)),
  dT = () => `Credits`,
  fT = () => `额度`,
  pT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dT(e) : fT(e)),
  mT = () => `Remaining`,
  hT = () => `剩余`,
  gT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mT(e) : hT(e)),
  _T = () => `Description`,
  vT = () => `说明`,
  yT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _T(e) : vT(e)),
  bT = () => `Expires`,
  xT = () => `过期时间`,
  ST = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bT(e) : xT(e)),
  CT = () => `Date`,
  wT = () => `日期`,
  TT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CT(e) : wT(e)),
  ET = () => `API Keys`,
  DT = () => `API 密钥`,
  OT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ET(e) : DT(e)),
  kT = () => `Manage your API keys for programmatic access`,
  AT = () => `管理你的 API 密钥`,
  jT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kT(e) : AT(e)),
  MT = () => `Your Keys`,
  NT = () => `你的密钥`,
  PT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MT(e) : NT(e)),
  FT = () => `Use these keys to authenticate API requests`,
  IT = () => `使用这些密钥来认证 API 请求`,
  LT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FT(e) : IT(e)),
  RT = () => `Create Key`,
  zT = () => `创建密钥`,
  BT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RT(e) : zT(e)),
  VT = () => `Create API Key`,
  HT = () => `创建 API 密钥`,
  UT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VT(e) : HT(e)),
  WT = () => `Give your key a name to identify it later`,
  GT = () => `给密钥起个名字以便识别`,
  KT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WT(e) : GT(e)),
  qT = () => `Key Name`,
  JT = () => `密钥名称`,
  YT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qT(e) : JT(e)),
  XT = () => `e.g. Production, Development`,
  ZT = () => `例如：生产环境、开发环境`,
  QT = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XT(e) : ZT(e)),
  $T = () => `Cancel`,
  eE = () => `取消`,
  tE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $T(e) : eE(e)),
  nE = () => `Create`,
  rE = () => `创建`,
  iE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nE(e) : rE(e)),
  aE = () => `Creating...`,
  oE = () => `创建中...`,
  sE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aE(e) : oE(e)),
  cE = () => `API key created`,
  lE = () => `API 密钥已创建`,
  uE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cE(e) : lE(e)),
  dE = () => `Copied to clipboard`,
  fE = () => `已复制到剪贴板`,
  pE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dE(e) : fE(e)),
  mE = () => `Key copied to clipboard`,
  hE = () => `密钥已复制到剪贴板`,
  gE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mE(e) : hE(e)),
  _E = () => `Key deleted`,
  vE = () => `密钥已删除`,
  yE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _E(e) : vE(e)),
  bE = () => `Failed to create key`,
  xE = () => `创建密钥失败`,
  SE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bE(e) : xE(e)),
  CE = () => `No API keys yet. Create one to get started.`,
  wE = () => `还没有 API 密钥，创建一个开始使用。`,
  TE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CE(e) : wE(e)),
  EE = () => `Name`,
  DE = () => `名称`,
  OE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EE(e) : DE(e)),
  kE = () => `Key`,
  AE = () => `密钥`,
  jE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kE(e) : AE(e)),
  ME = () => `Actions`,
  NE = () => `操作`,
  PE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ME(e) : NE(e)),
  FE = () => `Support Tickets`,
  IE = () => `工单支持`,
  LE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FE(e) : IE(e)),
  RE = () => `Submit a ticket and our team will get back to you`,
  zE = () => `提交工单反馈问题,我们会尽快回复你`,
  BE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RE(e) : zE(e)),
  VE = () => `New Ticket`,
  HE = () => `提交工单`,
  UE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VE(e) : HE(e)),
  WE = () => `Submit a Ticket`,
  GE = () => `提交工单`,
  KE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WE(e) : GE(e)),
  qE = () => `Describe your issue and we'll respond as soon as possible`,
  JE = () => `描述你遇到的问题,我们会尽快回复`,
  YE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qE(e) : JE(e)),
  XE = () => `Subject`,
  ZE = () => `标题`,
  QE = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XE(e) : ZE(e)),
  $E = () => `Brief summary of your issue`,
  eD = () => `简要描述你的问题`,
  tD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $E(e) : eD(e)),
  nD = () => `Description`,
  rD = () => `问题描述`,
  iD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nD(e) : rD(e)),
  aD = () => `Describe your issue in detail...`,
  oD = () => `详细描述你遇到的问题…`,
  sD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aD(e) : oD(e)),
  cD = () => `Subject`,
  lD = () => `标题`,
  uD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cD(e) : lD(e)),
  dD = () => `Status`,
  fD = () => `状态`,
  pD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dD(e) : fD(e)),
  mD = () => `Last Updated`,
  hD = () => `更新时间`,
  gD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mD(e) : hD(e)),
  _D = () => `Actions`,
  vD = () => `操作`,
  yD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _D(e) : vD(e)),
  bD = () => `Open`,
  xD = () => `待处理`,
  SD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bD(e) : xD(e)),
  CD = () => `In Progress`,
  wD = () => `处理中`,
  TD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CD(e) : wD(e)),
  ED = () => `Closed`,
  DD = () => `已关闭`,
  OD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ED(e) : DD(e)),
  kD = () => `No tickets yet`,
  AD = () => `暂无工单`,
  jD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kD(e) : AD(e)),
  MD = () => `Subject and description are required`,
  ND = () => `请填写标题和问题描述`,
  PD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MD(e) : ND(e)),
  FD = () => `Ticket submitted`,
  ID = () => `工单已提交`,
  LD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FD(e) : ID(e)),
  RD = () => `Ticket closed`,
  zD = () => `工单已关闭`,
  BD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RD(e) : zD(e)),
  VD = () => `Close Ticket`,
  HD = () => `关闭工单`,
  UD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VD(e) : HD(e)),
  WD = () =>
    `This ticket is closed. Create a new ticket if you need further help.`,
  GD = () => `该工单已关闭,如需进一步帮助请提交新工单。`,
  KD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WD(e) : GD(e)),
  qD = () => `Write a reply...`,
  JD = () => `输入回复内容…`,
  YD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qD(e) : JD(e)),
  XD = () => `Send Reply`,
  ZD = () => `发送回复`,
  QD = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XD(e) : ZD(e)),
  $D = () => `Sending...`,
  eO = () => `发送中…`,
  tO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $D(e) : eO(e)),
  nO = () => `Support Team`,
  rO = () => `客服团队`,
  iO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nO(e) : rO(e)),
  aO = () => `You`,
  oO = () => `我`,
  sO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aO(e) : oO(e)),
  cO = () => `Cancel`,
  lO = () => `取消`,
  uO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cO(e) : lO(e)),
  dO = () => `Submit`,
  fO = () => `提交`,
  pO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dO(e) : fO(e)),
  mO = () => `Submitting...`,
  hO = () => `提交中…`,
  gO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mO(e) : hO(e)),
  _O = () => `Images (optional)`,
  vO = () => `图片附件(可选)`,
  yO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _O(e) : vO(e)),
  bO = () => `Latest Reply`,
  xO = () => `最新回复`,
  SO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bO(e) : xO(e)),
  CO = () => `Created At`,
  wO = () => `创建时间`,
  TO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CO(e) : wO(e)),
  EO = () => `Admin`,
  DO = () => `管理后台`,
  OO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EO(e) : DO(e)),
  kO = () => `System overview`,
  AO = () => `系统概览`,
  jO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kO(e) : AO(e)),
  MO = () => `Loading...`,
  NO = () => `加载中...`,
  PO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MO(e) : NO(e)),
  FO = () => `Dashboard`,
  IO = () => `控制台`,
  LO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FO(e) : IO(e)),
  RO = () => `Overview`,
  zO = () => `概览`,
  BO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RO(e) : zO(e)),
  VO = () => `Settings`,
  HO = () => `设置`,
  UO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VO(e) : HO(e)),
  WO = () => `RBAC`,
  GO = () => `权限管理`,
  KO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WO(e) : GO(e)),
  qO = () => `Users`,
  JO = () => `用户`,
  YO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qO(e) : JO(e)),
  XO = () => `Roles`,
  ZO = () => `角色`,
  QO = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XO(e) : ZO(e)),
  $O = () => `Permissions`,
  ek = () => `权限`,
  tk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $O(e) : ek(e)),
  nk = () => `Content`,
  rk = () => `内容管理`,
  ik = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nk(e) : rk(e)),
  ak = () => `Categories`,
  ok = () => `分类`,
  sk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ak(e) : ok(e)),
  ck = () => `Posts`,
  lk = () => `文章`,
  uk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ck(e) : lk(e)),
  dk = () => `Payments & Credits`,
  fk = () => `支付与积分`,
  pk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dk(e) : fk(e)),
  mk = () => `Payments`,
  hk = () => `支付`,
  gk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mk(e) : hk(e)),
  _k = () => `Subscriptions`,
  vk = () => `订阅`,
  yk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _k(e) : vk(e)),
  bk = () => `Credits`,
  xk = () => `积分`,
  Sk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bk(e) : xk(e)),
  Ck = () => `Invite Codes`,
  wk = () => `邀请码`,
  Tk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ck(e) : wk(e)),
  Ek = () => `Tickets`,
  Dk = () => `工单管理`,
  Ok = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ek(e) : Dk(e)),
  kk = () => `Support`,
  Ak = () => `客户支持`,
  jk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kk(e) : Ak(e)),
  Mk = () => `Total Users`,
  Nk = () => `总用户数`,
  Pk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Mk(e) : Nk(e)),
  Fk = () => `Roles`,
  Ik = () => `角色数`,
  Lk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Fk(e) : Ik(e)),
  Rk = () => `Users`,
  zk = () => `用户管理`,
  Bk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Rk(e) : zk(e)),
  Vk = () => `Manage all registered users`,
  Hk = () => `管理所有注册用户`,
  Uk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Vk(e) : Hk(e)),
  Wk = () => `All Users`,
  Gk = () => `所有用户`,
  Kk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Wk(e) : Gk(e)),
  qk = (e) => `${e?.count} users registered`,
  Jk = (e) => `共 ${e?.count} 个注册用户`,
  Yk = (e, t = {}) => ((t.locale ?? s()) === `en` ? qk(e) : Jk(e)),
  Xk = () => `No users yet`,
  Zk = () => `暂无用户`,
  Qk = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Xk(e) : Zk(e)),
  $k = () => `User`,
  eA = () => `用户`,
  tA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $k(e) : eA(e)),
  nA = () => `Email`,
  rA = () => `邮箱`,
  iA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nA(e) : rA(e)),
  aA = () => `Credits`,
  oA = () => `积分`,
  sA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aA(e) : oA(e)),
  cA = () => `Joined`,
  lA = () => `注册时间`,
  uA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cA(e) : lA(e)),
  dA = () => `Actions`,
  fA = () => `操作`,
  pA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dA(e) : fA(e)),
  mA = () => `Manage Roles`,
  hA = () => `管理角色`,
  gA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mA(e) : hA(e)),
  _A = () => `Manage User Roles`,
  vA = () => `管理用户角色`,
  yA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _A(e) : vA(e)),
  bA = () => `Assign or remove roles for this user`,
  xA = () => `为此用户分配或移除角色`,
  SA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bA(e) : xA(e)),
  CA = () => `Role assigned`,
  wA = () => `角色已分配`,
  TA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CA(e) : wA(e)),
  EA = () => `Role removed`,
  DA = () => `角色已移除`,
  OA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EA(e) : DA(e)),
  kA = () => `Manage Credits`,
  AA = () => `管理积分`,
  jA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kA(e) : AA(e)),
  MA = (e) => `${e?.name} — current balance: ${e?.balance}`,
  NA = (e) => `${e?.name} — 当前余额：${e?.balance}`,
  PA = (e, t = {}) => ((t.locale ?? s()) === `en` ? MA(e) : NA(e)),
  FA = () => `Grant`,
  IA = () => `授予`,
  LA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FA(e) : IA(e)),
  RA = () => `Deduct`,
  zA = () => `扣除`,
  BA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RA(e) : zA(e)),
  VA = () => `Amount`,
  HA = () => `数量`,
  UA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VA(e) : HA(e)),
  WA = () => `Description`,
  GA = () => `备注`,
  KA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WA(e) : GA(e)),
  qA = () => `Optional reason`,
  JA = () => `操作原因（可选）`,
  YA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qA(e) : JA(e)),
  XA = () => `Confirm`,
  ZA = () => `确认`,
  QA = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XA(e) : ZA(e)),
  $A = () => `Submitting...`,
  ej = () => `提交中...`,
  tj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $A(e) : ej(e)),
  nj = () => `Enter a positive amount`,
  rj = () => `请输入正数`,
  ij = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nj(e) : rj(e)),
  aj = () => `Credits granted`,
  oj = () => `积分已授予`,
  sj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aj(e) : oj(e)),
  cj = () => `Credits deducted`,
  lj = () => `积分已扣除`,
  uj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cj(e) : lj(e)),
  dj = () => `Roles`,
  fj = () => `角色管理`,
  pj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dj(e) : fj(e)),
  mj = () => `Manage system roles and permissions`,
  hj = () => `管理系统角色和权限`,
  gj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mj(e) : hj(e)),
  _j = () => `All Roles`,
  vj = () => `所有角色`,
  yj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _j(e) : vj(e)),
  bj = (e) => `${e?.count} roles defined`,
  xj = (e) => `共 ${e?.count} 个角色`,
  Sj = (e, t = {}) => ((t.locale ?? s()) === `en` ? bj(e) : xj(e)),
  Cj = () => `No roles defined yet`,
  wj = () => `暂未定义角色`,
  Tj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Cj(e) : wj(e)),
  Ej = () => `Name`,
  Dj = () => `名称`,
  Oj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ej(e) : Dj(e)),
  kj = () => `Title`,
  Aj = () => `标题`,
  jj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kj(e) : Aj(e)),
  Mj = () => `Status`,
  Nj = () => `状态`,
  Pj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Mj(e) : Nj(e)),
  Fj = () => `Description`,
  Ij = () => `描述`,
  Lj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Fj(e) : Ij(e)),
  Rj = () => `Actions`,
  zj = () => `操作`,
  Bj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Rj(e) : zj(e)),
  Vj = () => `Create Role`,
  Hj = () => `创建角色`,
  Uj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Vj(e) : Hj(e)),
  Wj = () => `Create New Role`,
  Gj = () => `创建新角色`,
  Kj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Wj(e) : Gj(e)),
  qj = () => `Define a new system role`,
  Jj = () => `定义一个新的系统角色`,
  Yj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qj(e) : Jj(e)),
  Xj = () => `Edit Role`,
  Zj = () => `编辑角色`,
  Qj = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Xj(e) : Zj(e)),
  $j = () => `Update role details`,
  eM = () => `更新角色信息`,
  tM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $j(e) : eM(e)),
  nM = () => `Delete Role`,
  rM = () => `删除角色`,
  iM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nM(e) : rM(e)),
  aM = () =>
    `Are you sure you want to delete this role? This will deactivate it.`,
  oM = () => `确定要删除此角色吗？该角色将被停用。`,
  sM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aM(e) : oM(e)),
  cM = () => `Name`,
  lM = () => `名称`,
  uM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cM(e) : lM(e)),
  dM = () => `e.g. editor`,
  fM = () => `例如 editor`,
  pM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dM(e) : fM(e)),
  mM = () => `Title`,
  hM = () => `标题`,
  gM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mM(e) : hM(e)),
  _M = () => `e.g. Content Editor`,
  vM = () => `例如 内容编辑`,
  yM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _M(e) : vM(e)),
  bM = () => `Description`,
  xM = () => `描述`,
  SM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bM(e) : xM(e)),
  CM = () => `Optional description`,
  wM = () => `可选描述`,
  TM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CM(e) : wM(e)),
  EM = () => `Save`,
  DM = () => `保存`,
  OM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EM(e) : DM(e)),
  kM = () => `Cancel`,
  AM = () => `取消`,
  jM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kM(e) : AM(e)),
  MM = () => `Delete`,
  NM = () => `删除`,
  PM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MM(e) : NM(e)),
  FM = () => `Role created`,
  IM = () => `角色已创建`,
  LM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FM(e) : IM(e)),
  RM = () => `Role updated`,
  zM = () => `角色已更新`,
  BM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RM(e) : zM(e)),
  VM = () => `Role deleted`,
  HM = () => `角色已删除`,
  UM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VM(e) : HM(e)),
  WM = () => `Permissions`,
  GM = () => `权限`,
  KM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WM(e) : GM(e)),
  qM = () => `Manage Role Permissions`,
  JM = () => `管理角色权限`,
  YM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qM(e) : JM(e)),
  XM = () => `Select permissions for this role`,
  ZM = () => `选择此角色的权限`,
  QM = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XM(e) : ZM(e)),
  $M = () => `Permissions updated`,
  eN = () => `权限已更新`,
  tN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $M(e) : eN(e)),
  nN = () => `Permissions`,
  rN = () => `权限管理`,
  iN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nN(e) : rN(e)),
  aN = () => `Manage system permissions`,
  oN = () => `管理系统权限`,
  sN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aN(e) : oN(e)),
  cN = () => `All Permissions`,
  lN = () => `所有权限`,
  uN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cN(e) : lN(e)),
  dN = (e) => `${e?.count} permissions defined`,
  fN = (e) => `共 ${e?.count} 个权限`,
  pN = (e, t = {}) => ((t.locale ?? s()) === `en` ? dN(e) : fN(e)),
  mN = () => `No permissions defined yet`,
  hN = () => `暂未定义权限`,
  gN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mN(e) : hN(e)),
  _N = () => `Code`,
  vN = () => `权限代码`,
  yN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _N(e) : vN(e)),
  bN = () => `Resource`,
  xN = () => `资源`,
  SN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bN(e) : xN(e)),
  CN = () => `Action`,
  wN = () => `操作`,
  TN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CN(e) : wN(e)),
  EN = () => `Title`,
  DN = () => `标题`,
  ON = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EN(e) : DN(e)),
  kN = () => `Actions`,
  AN = () => `操作`,
  jN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kN(e) : AN(e)),
  MN = () => `Create Permission`,
  NN = () => `创建权限`,
  PN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MN(e) : NN(e)),
  FN = () => `Create New Permission`,
  IN = () => `创建新权限`,
  LN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FN(e) : IN(e)),
  RN = () => `Define a new system permission`,
  zN = () => `定义一个新的系统权限`,
  BN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RN(e) : zN(e)),
  VN = () => `Edit Permission`,
  HN = () => `编辑权限`,
  UN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VN(e) : HN(e)),
  WN = () => `Update permission details`,
  GN = () => `更新权限信息`,
  KN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WN(e) : GN(e)),
  qN = () => `Delete Permission`,
  JN = () => `删除权限`,
  YN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qN(e) : JN(e)),
  XN = () =>
    `Are you sure you want to delete this permission? It will be removed from all roles.`,
  ZN = () => `确定要删除此权限吗？它将从所有角色中移除。`,
  QN = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XN(e) : ZN(e)),
  $N = () => `Code`,
  eP = () => `权限代码`,
  tP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $N(e) : eP(e)),
  nP = () => `e.g. posts.create`,
  rP = () => `例如 posts.create`,
  iP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nP(e) : rP(e)),
  aP = () => `Resource`,
  oP = () => `资源`,
  sP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aP(e) : oP(e)),
  cP = () => `e.g. posts`,
  lP = () => `例如 posts`,
  uP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cP(e) : lP(e)),
  dP = () => `Action`,
  fP = () => `操作`,
  pP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dP(e) : fP(e)),
  mP = () => `e.g. create`,
  hP = () => `例如 create`,
  gP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mP(e) : hP(e)),
  _P = () => `Title`,
  vP = () => `标题`,
  yP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _P(e) : vP(e)),
  bP = () => `e.g. Create Posts`,
  xP = () => `例如 创建文章`,
  SP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bP(e) : xP(e)),
  CP = () => `Save`,
  wP = () => `保存`,
  TP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CP(e) : wP(e)),
  EP = () => `Cancel`,
  DP = () => `取消`,
  OP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EP(e) : DP(e)),
  kP = () => `Delete`,
  AP = () => `删除`,
  jP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kP(e) : AP(e)),
  MP = () => `Permission created`,
  NP = () => `权限已创建`,
  PP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MP(e) : NP(e)),
  FP = () => `Permission updated`,
  IP = () => `权限已更新`,
  LP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FP(e) : IP(e)),
  RP = () => `Permission deleted`,
  zP = () => `权限已删除`,
  BP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RP(e) : zP(e)),
  VP = () => `Categories`,
  HP = () => `分类管理`,
  UP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VP(e) : HP(e)),
  WP = () => `Manage content categories`,
  GP = () => `管理内容分类`,
  KP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WP(e) : GP(e)),
  qP = () => `All Categories`,
  JP = () => `所有分类`,
  YP = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qP(e) : JP(e)),
  XP = (e) => `${e?.count} categories`,
  ZP = (e) => `共 ${e?.count} 个分类`,
  QP = (e, t = {}) => ((t.locale ?? s()) === `en` ? XP(e) : ZP(e)),
  $P = () => `No categories yet`,
  eF = () => `暂无分类`,
  tF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $P(e) : eF(e)),
  nF = () => `Slug`,
  rF = () => `标识`,
  iF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nF(e) : rF(e)),
  aF = () => `Title`,
  oF = () => `标题`,
  sF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aF(e) : oF(e)),
  cF = () => `Description`,
  lF = () => `描述`,
  uF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cF(e) : lF(e)),
  dF = () => `Status`,
  fF = () => `状态`,
  pF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dF(e) : fF(e)),
  mF = () => `Created At`,
  hF = () => `创建时间`,
  gF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mF(e) : hF(e)),
  _F = () => `Actions`,
  vF = () => `操作`,
  yF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _F(e) : vF(e)),
  bF = () => `Create Category`,
  xF = () => `创建分类`,
  SF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bF(e) : xF(e)),
  CF = () => `Create New Category`,
  wF = () => `创建新分类`,
  TF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CF(e) : wF(e)),
  EF = () => `Add a new content category`,
  DF = () => `添加一个新的内容分类`,
  OF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EF(e) : DF(e)),
  kF = () => `Edit Category`,
  AF = () => `编辑分类`,
  jF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kF(e) : AF(e)),
  MF = () => `Update category details`,
  NF = () => `更新分类信息`,
  PF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MF(e) : NF(e)),
  FF = () => `Delete Category`,
  IF = () => `删除分类`,
  LF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FF(e) : IF(e)),
  RF = () => `Are you sure you want to delete this category?`,
  zF = () => `确定要删除此分类吗？`,
  BF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RF(e) : zF(e)),
  VF = () => `Slug`,
  HF = () => `标识`,
  UF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VF(e) : HF(e)),
  WF = () => `e.g. tutorials`,
  GF = () => `例如 tutorials`,
  KF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WF(e) : GF(e)),
  qF = () => `Title`,
  JF = () => `标题`,
  YF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qF(e) : JF(e)),
  XF = () => `e.g. Tutorials`,
  ZF = () => `例如 教程`,
  QF = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XF(e) : ZF(e)),
  $F = () => `Description`,
  eI = () => `描述`,
  tI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $F(e) : eI(e)),
  nI = () => `Optional description`,
  rI = () => `可选描述`,
  iI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nI(e) : rI(e)),
  aI = () => `Save`,
  oI = () => `保存`,
  sI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aI(e) : oI(e)),
  cI = () => `Cancel`,
  lI = () => `取消`,
  uI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cI(e) : lI(e)),
  dI = () => `Delete`,
  fI = () => `删除`,
  pI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dI(e) : fI(e)),
  mI = () => `Category created`,
  hI = () => `分类已创建`,
  gI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mI(e) : hI(e)),
  _I = () => `Category updated`,
  vI = () => `分类已更新`,
  yI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _I(e) : vI(e)),
  bI = () => `Category deleted`,
  xI = () => `分类已删除`,
  SI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bI(e) : xI(e)),
  CI = () => `Posts`,
  wI = () => `文章管理`,
  TI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CI(e) : wI(e)),
  EI = () => `Manage blog posts and articles`,
  DI = () => `管理博客文章`,
  OI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EI(e) : DI(e)),
  kI = () => `All Posts`,
  AI = () => `所有文章`,
  jI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kI(e) : AI(e)),
  MI = (e) => `${e?.count} posts`,
  NI = (e) => `共 ${e?.count} 篇`,
  PI = (e, t = {}) => ((t.locale ?? s()) === `en` ? MI(e) : NI(e)),
  FI = () => `No posts yet`,
  II = () => `暂无文章`,
  LI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FI(e) : II(e)),
  RI = () => `Title`,
  zI = () => `标题`,
  BI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RI(e) : zI(e)),
  VI = () => `Slug`,
  HI = () => `标识`,
  UI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VI(e) : HI(e)),
  WI = () => `Author`,
  GI = () => `作者`,
  KI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WI(e) : GI(e)),
  qI = () => `Status`,
  JI = () => `状态`,
  YI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qI(e) : JI(e)),
  XI = () => `Created At`,
  ZI = () => `创建时间`,
  QI = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XI(e) : ZI(e)),
  $I = () => `Actions`,
  eL = () => `操作`,
  tL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $I(e) : eL(e)),
  nL = () => `Create Post`,
  rL = () => `创建文章`,
  iL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nL(e) : rL(e)),
  aL = () => `Create New Post`,
  oL = () => `创建新文章`,
  sL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aL(e) : oL(e)),
  cL = () => `Create a new blog post`,
  lL = () => `创建一篇新的博客文章`,
  uL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cL(e) : lL(e)),
  dL = () => `Edit Post`,
  fL = () => `编辑文章`,
  pL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dL(e) : fL(e)),
  mL = () => `Update post details`,
  hL = () => `更新文章信息`,
  gL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mL(e) : hL(e)),
  _L = () => `Delete Post`,
  vL = () => `删除文章`,
  yL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _L(e) : vL(e)),
  bL = () => `Are you sure you want to delete this post?`,
  xL = () => `确定要删除此文章吗？`,
  SL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bL(e) : xL(e)),
  CL = () => `Slug`,
  wL = () => `标识`,
  TL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CL(e) : wL(e)),
  EL = () => `e.g. my-first-post`,
  DL = () => `例如 my-first-post`,
  OL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EL(e) : DL(e)),
  kL = () => `Title`,
  AL = () => `标题`,
  jL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kL(e) : AL(e)),
  ML = () => `Post title`,
  NL = () => `文章标题`,
  PL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ML(e) : NL(e)),
  FL = () => `Description`,
  IL = () => `描述`,
  LL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FL(e) : IL(e)),
  RL = () => `Brief description`,
  zL = () => `简短描述`,
  BL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RL(e) : zL(e)),
  VL = () => `Author`,
  HL = () => `作者`,
  UL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VL(e) : HL(e)),
  WL = () => `Author name`,
  GL = () => `作者名称`,
  KL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WL(e) : GL(e)),
  qL = () => `Content`,
  JL = () => `正文`,
  YL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qL(e) : JL(e)),
  XL = () => `Write your post…`,
  ZL = () => `开始撰写文章…`,
  QL = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XL(e) : ZL(e)),
  $L = () => `Category`,
  eR = () => `分类`,
  tR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $L(e) : eR(e)),
  nR = () => `Select category`,
  rR = () => `选择分类`,
  iR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nR(e) : rR(e)),
  aR = () => `Status`,
  oR = () => `状态`,
  sR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aR(e) : oR(e)),
  cR = () => `Draft`,
  lR = () => `草稿`,
  uR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cR(e) : lR(e)),
  dR = () => `Published`,
  fR = () => `已发布`,
  pR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dR(e) : fR(e)),
  mR = () => `Save`,
  hR = () => `保存`,
  gR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mR(e) : hR(e)),
  _R = () => `Cancel`,
  vR = () => `取消`,
  yR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _R(e) : vR(e)),
  bR = () => `Delete`,
  xR = () => `删除`,
  SR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bR(e) : xR(e)),
  CR = () => `Post created`,
  wR = () => `文章已创建`,
  TR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CR(e) : wR(e)),
  ER = () => `Post updated`,
  DR = () => `文章已更新`,
  OR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? ER(e) : DR(e)),
  kR = () => `Post deleted`,
  AR = () => `文章已删除`,
  jR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kR(e) : AR(e)),
  MR = () => `All`,
  NR = () => `全部`,
  PR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MR(e) : NR(e)),
  FR = () => `Published`,
  IR = () => `已发布`,
  LR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FR(e) : IR(e)),
  RR = () => `Draft`,
  zR = () => `草稿`,
  BR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RR(e) : zR(e)),
  VR = () => `Payments`,
  HR = () => `支付管理`,
  UR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VR(e) : HR(e)),
  WR = () => `View all payment orders`,
  GR = () => `查看所有支付订单`,
  KR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WR(e) : GR(e)),
  qR = () => `All Payments`,
  JR = () => `所有支付`,
  YR = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qR(e) : JR(e)),
  XR = (e) => `${e?.count} payments`,
  ZR = (e) => `共 ${e?.count} 条`,
  QR = (e, t = {}) => ((t.locale ?? s()) === `en` ? XR(e) : ZR(e)),
  $R = () => `No payments yet`,
  ez = () => `暂无支付记录`,
  tz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $R(e) : ez(e)),
  nz = () => `Order No`,
  rz = () => `订单号`,
  iz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nz(e) : rz(e)),
  az = () => `User`,
  oz = () => `用户`,
  sz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? az(e) : oz(e)),
  cz = () => `Amount`,
  lz = () => `金额`,
  uz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cz(e) : lz(e)),
  dz = () => `Status`,
  fz = () => `状态`,
  pz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dz(e) : fz(e)),
  mz = () => `Type`,
  hz = () => `类型`,
  gz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mz(e) : hz(e)),
  _z = () => `Provider`,
  vz = () => `支付方式`,
  yz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _z(e) : vz(e)),
  bz = () => `Created At`,
  xz = () => `创建时间`,
  Sz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bz(e) : xz(e)),
  Cz = () => `All`,
  wz = () => `全部`,
  Tz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Cz(e) : wz(e)),
  Ez = () => `Subscription`,
  Dz = () => `订阅`,
  Oz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Ez(e) : Dz(e)),
  kz = () => `One-Time`,
  Az = () => `一次性`,
  jz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kz(e) : Az(e)),
  Mz = () => `Subscriptions`,
  Nz = () => `订阅管理`,
  Pz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Mz(e) : Nz(e)),
  Fz = () => `View all subscriptions`,
  Iz = () => `查看所有订阅`,
  Lz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Fz(e) : Iz(e)),
  Rz = () => `All Subscriptions`,
  zz = () => `所有订阅`,
  Bz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Rz(e) : zz(e)),
  Vz = (e) => `${e?.count} subscriptions`,
  Hz = (e) => `共 ${e?.count} 条`,
  Uz = (e, t = {}) => ((t.locale ?? s()) === `en` ? Vz(e) : Hz(e)),
  Wz = () => `No subscriptions yet`,
  Gz = () => `暂无订阅记录`,
  Kz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Wz(e) : Gz(e)),
  qz = () => `Subscription No`,
  Jz = () => `订阅号`,
  Yz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qz(e) : Jz(e)),
  Xz = () => `User`,
  Zz = () => `用户`,
  Qz = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Xz(e) : Zz(e)),
  $z = () => `Amount`,
  eB = () => `金额`,
  tB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $z(e) : eB(e)),
  nB = () => `Interval`,
  rB = () => `周期`,
  iB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nB(e) : rB(e)),
  aB = () => `Status`,
  oB = () => `状态`,
  sB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aB(e) : oB(e)),
  cB = () => `Provider`,
  lB = () => `支付方式`,
  uB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cB(e) : lB(e)),
  dB = () => `Period`,
  fB = () => `当前周期`,
  pB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dB(e) : fB(e)),
  mB = () => `Created At`,
  hB = () => `创建时间`,
  gB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mB(e) : hB(e)),
  _B = () => `All`,
  vB = () => `全部`,
  yB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _B(e) : vB(e)),
  bB = () => `Monthly`,
  xB = () => `月付`,
  SB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bB(e) : xB(e)),
  CB = () => `Yearly`,
  wB = () => `年付`,
  TB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CB(e) : wB(e)),
  EB = () => `Credits`,
  DB = () => `积分管理`,
  OB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EB(e) : DB(e)),
  kB = () => `Description`,
  AB = () => `描述`,
  jB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kB(e) : AB(e)),
  MB = () => `All Credits`,
  NB = () => `所有积分`,
  PB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MB(e) : NB(e)),
  FB = (e) => `${e?.count} records`,
  IB = (e) => `共 ${e?.count} 条`,
  LB = (e, t = {}) => ((t.locale ?? s()) === `en` ? FB(e) : IB(e)),
  RB = () => `No credit records yet`,
  zB = () => `暂无积分记录`,
  BB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RB(e) : zB(e)),
  VB = () => `Transaction No`,
  HB = () => `交易单号`,
  UB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VB(e) : HB(e)),
  WB = () => `User`,
  GB = () => `用户`,
  KB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WB(e) : GB(e)),
  qB = () => `Amount`,
  JB = () => `数量`,
  YB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qB(e) : JB(e)),
  XB = () => `Remaining`,
  ZB = () => `剩余`,
  QB = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XB(e) : ZB(e)),
  $B = () => `Type`,
  eV = () => `类型`,
  tV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $B(e) : eV(e)),
  nV = () => `Scene`,
  rV = () => `场景`,
  iV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nV(e) : rV(e)),
  aV = () => `Expires At`,
  oV = () => `过期时间`,
  sV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aV(e) : oV(e)),
  cV = () => `Created At`,
  lV = () => `创建时间`,
  uV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cV(e) : lV(e)),
  dV = () => `All`,
  fV = () => `全部`,
  pV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dV(e) : fV(e)),
  mV = () => `Grant`,
  hV = () => `授予`,
  gV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mV(e) : hV(e)),
  _V = () => `Consume`,
  vV = () => `消费`,
  yV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _V(e) : vV(e)),
  bV = () => `Invite Codes`,
  xV = () => `邀请码`,
  SV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bV(e) : xV(e)),
  CV = () => `Manage invite codes for sign-up`,
  wV = () => `管理用于注册的邀请码`,
  TV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CV(e) : wV(e)),
  EV = () => `New Invite Code`,
  DV = () => `新建邀请码`,
  OV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EV(e) : DV(e)),
  kV = () => `Create Invite Codes`,
  AV = () => `创建邀请码`,
  jV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kV(e) : AV(e)),
  MV = () =>
    `Generate one or more invite codes. Random codes are produced automatically.`,
  NV = () => `可一次生成一个或多个,系统会自动生成随机码。`,
  PV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MV(e) : NV(e)),
  FV = () => `Create`,
  IV = () => `创建`,
  LV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FV(e) : IV(e)),
  RV = () => `Creating...`,
  zV = () => `创建中...`,
  BV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RV(e) : zV(e)),
  VV = () => `Invite code(s) created`,
  HV = () => `邀请码创建成功`,
  UV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VV(e) : HV(e)),
  WV = () => `Cancel`,
  GV = () => `取消`,
  KV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WV(e) : GV(e)),
  qV = () => `How many`,
  JV = () => `数量`,
  YV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qV(e) : JV(e)),
  XV = () => `Max uses (per code)`,
  ZV = () => `最大使用次数(每个码)`,
  QV = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XV(e) : ZV(e)),
  $V = () => `Trial days`,
  eH = () => `试用天数`,
  tH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $V(e) : eH(e)),
  nH = () => `Expires at (optional)`,
  rH = () => `过期时间(可选)`,
  iH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nH(e) : rH(e)),
  aH = () => `Note`,
  oH = () => `备注`,
  sH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aH(e) : oH(e)),
  cH = () => `Optional note for internal reference`,
  lH = () => `用于内部参考的备注信息`,
  uH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cH(e) : lH(e)),
  dH = () => `Please check your input`,
  fH = () => `请检查输入`,
  pH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dH(e) : fH(e)),
  mH = () => `Code`,
  hH = () => `邀请码`,
  gH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mH(e) : hH(e)),
  _H = () => `Usage`,
  vH = () => `已用`,
  yH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _H(e) : vH(e)),
  bH = () => `Trial`,
  xH = () => `试用`,
  SH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bH(e) : xH(e)),
  CH = () => `Note`,
  wH = () => `备注`,
  TH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CH(e) : wH(e)),
  EH = () => `Expires`,
  DH = () => `过期`,
  OH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EH(e) : DH(e)),
  kH = () => `Created`,
  AH = () => `创建于`,
  jH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kH(e) : AH(e)),
  MH = () => `Actions`,
  NH = () => `操作`,
  PH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MH(e) : NH(e)),
  FH = () => `No invite codes yet`,
  IH = () => `暂无邀请码`,
  LH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FH(e) : IH(e)),
  RH = () => `Copied to clipboard`,
  zH = () => `已复制`,
  BH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RH(e) : zH(e)),
  VH = () => `Delete invite code?`,
  HH = () => `确认删除邀请码?`,
  UH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VH(e) : HH(e)),
  WH = () => `This action cannot be undone.`,
  GH = () => `此操作不可撤销。`,
  KH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WH(e) : GH(e)),
  qH = () => `Delete`,
  JH = () => `删除`,
  YH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qH(e) : JH(e)),
  XH = () => `Invite code deleted`,
  ZH = () => `邀请码已删除`,
  QH = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XH(e) : ZH(e)),
  $H = () => `All`,
  eU = () => `全部`,
  tU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $H(e) : eU(e)),
  nU = () => `Available`,
  rU = () => `可用`,
  iU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nU(e) : rU(e)),
  aU = () => `Used`,
  oU = () => `已使用`,
  sU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aU(e) : oU(e)),
  cU = () => `System Settings`,
  lU = () => `系统设置`,
  uU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cU(e) : lU(e)),
  dU = () => `Configure system-wide settings`,
  fU = () => `配置系统级设置`,
  pU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dU(e) : fU(e)),
  mU = () => `Save`,
  hU = () => `保存`,
  gU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mU(e) : hU(e)),
  _U = () => `Saving...`,
  vU = () => `保存中...`,
  yU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _U(e) : vU(e)),
  bU = () => `Settings saved`,
  xU = () => `设置已保存`,
  SU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bU(e) : xU(e)),
  CU = () => `Failed to save`,
  wU = () => `保存失败`,
  TU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CU(e) : wU(e)),
  EU = () => `Test`,
  DU = () => `测试`,
  OU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EU(e) : DU(e)),
  kU = (e) => `Test ${e?.group}`,
  AU = (e) => `测试 ${e?.group}`,
  jU = (e, t = {}) => ((t.locale ?? s()) === `en` ? kU(e) : AU(e)),
  MU = () =>
    `Run a live request with your current saved config. No orders or data are persisted.`,
  NU = () => `使用当前已保存的配置发起一次真实请求，不会生成订单或写入数据。`,
  PU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MU(e) : NU(e)),
  FU = () => `Run Test`,
  IU = () => `开始测试`,
  LU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FU(e) : IU(e)),
  RU = () => `Running...`,
  zU = () => `测试中...`,
  BU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RU(e) : zU(e)),
  VU = () => `Close`,
  HU = () => `关闭`,
  UU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VU(e) : HU(e)),
  WU = () => `Test failed`,
  GU = () => `测试失败`,
  KU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WU(e) : GU(e)),
  qU = () => `General`,
  JU = () => `常规`,
  YU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qU(e) : JU(e)),
  XU = () => `Auth`,
  ZU = () => `认证`,
  QU = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XU(e) : ZU(e)),
  $U = () => `Payment`,
  eW = () => `支付`,
  tW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $U(e) : eW(e)),
  nW = () => `Email`,
  rW = () => `邮件`,
  iW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nW(e) : rW(e)),
  aW = () => `Storage`,
  oW = () => `存储`,
  sW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aW(e) : oW(e)),
  cW = () => `AI`,
  lW = () => `AI`,
  uW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cW(e) : lW(e)),
  dW = () => `Analytics`,
  fW = () => `统计`,
  pW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dW(e) : fW(e)),
  mW = () => `Customer Service`,
  hW = () => `客服`,
  gW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mW(e) : hW(e)),
  _W = () => `Custom`,
  vW = () => `自定义`,
  yW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _W(e) : vW(e)),
  bW = () => `Custom Configs`,
  xW = () => `自定义配置`,
  SW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bW(e) : xW(e)),
  CW = () =>
    `Add your own key/value configs. Keys must be unique and not collide with built-in settings.`,
  wW = () =>
    `添加自定义的 key/value 配置。Key 必须唯一，且不能与内置配置项重名。`,
  TW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CW(e) : wW(e)),
  EW = () => `No custom configs yet. Click "Add" to create one.`,
  DW = () => `暂无自定义配置，点击「添加」新建一条。`,
  OW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EW(e) : DW(e)),
  kW = () => `config_key`,
  AW = () => `config_key`,
  jW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kW(e) : AW(e)),
  MW = () => `value`,
  NW = () => `配置值`,
  PW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MW(e) : NW(e)),
  FW = () => `Add`,
  IW = () => `添加`,
  LW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FW(e) : IW(e)),
  RW = () => `Remove`,
  zW = () => `删除`,
  BW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RW(e) : zW(e)),
  VW = () => `App Info`,
  HW = () => `应用信息`,
  UW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VW(e) : HW(e)),
  WW = () => `Basic application settings`,
  GW = () => `基本应用设置`,
  KW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WW(e) : GW(e)),
  qW = () => `User Roles`,
  JW = () => `用户角色`,
  YW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qW(e) : JW(e)),
  XW = () => `Default role for new users`,
  ZW = () => `新用户默认角色`,
  QW = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XW(e) : ZW(e)),
  $W = () => `Credits`,
  eG = () => `积分`,
  tG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $W(e) : eG(e)),
  nG = () => `Initial credits for new users`,
  rG = () => `新用户初始积分`,
  iG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nG(e) : rG(e)),
  aG = () => `Email Auth`,
  oG = () => `邮箱认证`,
  sG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aG(e) : oG(e)),
  cG = () => `Email/password authentication`,
  lG = () => `邮箱/密码登录`,
  uG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cG(e) : lG(e)),
  dG = () => `Google Auth`,
  fG = () => `Google 认证`,
  pG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dG(e) : fG(e)),
  mG = () => `Google OAuth login`,
  hG = () => `Google OAuth 登录`,
  gG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mG(e) : hG(e)),
  _G = () => `GitHub Auth`,
  vG = () => `GitHub 认证`,
  yG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _G(e) : vG(e)),
  bG = () => `GitHub OAuth login`,
  xG = () => `GitHub OAuth 登录`,
  SG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bG(e) : xG(e)),
  CG = () => `Basic`,
  wG = () => `基础设置`,
  TG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CG(e) : wG(e)),
  EG = () => `Payment general settings`,
  DG = () => `支付通用设置`,
  OG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EG(e) : DG(e)),
  kG = () => `Stripe`,
  AG = () => `Stripe`,
  jG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kG(e) : AG(e)),
  MG = () => `Stripe payment gateway`,
  NG = () => `Stripe 支付网关`,
  PG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MG(e) : NG(e)),
  FG = () => `Creem`,
  IG = () => `Creem`,
  LG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FG(e) : IG(e)),
  RG = () => `Creem payment gateway`,
  zG = () => `Creem 支付网关`,
  BG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RG(e) : zG(e)),
  VG = () => `PayPal`,
  HG = () => `PayPal`,
  UG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VG(e) : HG(e)),
  WG = () => `PayPal payment gateway`,
  GG = () => `PayPal 支付网关`,
  KG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WG(e) : GG(e)),
  qG = () => `Alipay`,
  JG = () => `支付宝`,
  YG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qG(e) : JG(e)),
  XG = () => `Alipay payment gateway (native)`,
  ZG = () => `支付宝支付（原生）`,
  QG = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XG(e) : ZG(e)),
  $G = () => `WeChat Pay`,
  eK = () => `微信支付`,
  tK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $G(e) : eK(e)),
  nK = () => `WeChat Pay gateway (native)`,
  rK = () => `微信支付网关（原生）`,
  iK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nK(e) : rK(e)),
  aK = () => `General`,
  oK = () => `通用`,
  sK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aK(e) : oK(e)),
  cK = () => `Email provider selection`,
  lK = () => `邮件服务商选择`,
  uK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cK(e) : lK(e)),
  dK = () => `Resend`,
  fK = () => `Resend`,
  pK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dK(e) : fK(e)),
  mK = () => `Resend email service`,
  hK = () => `Resend 邮件服务`,
  gK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mK(e) : hK(e)),
  _K = () => `Cloudflare Email`,
  vK = () => `Cloudflare Email`,
  yK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _K(e) : vK(e)),
  bK = () => `Cloudflare Email Service`,
  xK = () => `Cloudflare 邮件服务`,
  SK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bK(e) : xK(e)),
  CK = () => `Cloudflare R2 / S3`,
  wK = () => `Cloudflare R2 / S3`,
  TK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CK(e) : wK(e)),
  EK = () => `Object storage settings`,
  DK = () => `对象存储设置`,
  OK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EK(e) : DK(e)),
  kK = () => `OpenAI`,
  AK = () => `OpenAI`,
  jK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kK(e) : AK(e)),
  MK = () => `OpenAI (or compatible) API`,
  NK = () => `OpenAI（或兼容）API`,
  PK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MK(e) : NK(e)),
  FK = () => `Anthropic`,
  IK = () => `Anthropic`,
  LK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FK(e) : IK(e)),
  RK = () => `Anthropic Claude API`,
  zK = () => `Anthropic Claude API`,
  BK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RK(e) : zK(e)),
  VK = () => `Replicate`,
  HK = () => `Replicate`,
  UK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VK(e) : HK(e)),
  WK = () => `Replicate AI API`,
  GK = () => `Replicate AI API`,
  KK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WK(e) : GK(e)),
  qK = () => `Fal`,
  JK = () => `Fal`,
  YK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qK(e) : JK(e)),
  XK = () => `Fal AI API`,
  ZK = () => `Fal AI API`,
  QK = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? XK(e) : ZK(e)),
  $K = () => `Google Analytics`,
  eq = () => `Google Analytics`,
  tq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $K(e) : eq(e)),
  nq = () => `Inject gtag.js with the configured Measurement ID`,
  rq = () => `按配置的 Measurement ID 注入 gtag.js`,
  iq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nq(e) : rq(e)),
  aq = () => `Plausible`,
  oq = () => `Plausible`,
  sq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aq(e) : oq(e)),
  cq = () => `Inject plausible.js for self-hosted or cloud Plausible`,
  lq = () => `注入 plausible.js（云版或自托管）`,
  uq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cq(e) : lq(e)),
  dq = () => `Crisp`,
  fq = () => `Crisp`,
  pq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dq(e) : fq(e)),
  mq = () => `Crisp live chat widget`,
  hq = () => `Crisp 客服聊天组件`,
  gq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mq(e) : hq(e)),
  _q = () => `Tawk.to`,
  vq = () => `Tawk.to`,
  yq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _q(e) : vq(e)),
  bq = () => `Tawk.to live chat widget`,
  xq = () => `Tawk.to 客服聊天组件`,
  Sq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bq(e) : xq(e)),
  Cq = () => `App Name`,
  wq = () => `应用名称`,
  Tq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Cq(e) : wq(e)),
  Eq = () => `App Description`,
  Dq = () => `应用描述`,
  Oq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Eq(e) : Dq(e)),
  kq = () => `App URL`,
  Aq = () => `应用地址`,
  jq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kq(e) : Aq(e)),
  Mq = () => `Auto-assign role for new users`,
  Nq = () => `新用户自动分配角色`,
  Pq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Mq(e) : Nq(e)),
  Fq = () => `Default role name`,
  Iq = () => `默认角色名称`,
  Lq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Fq(e) : Iq(e)),
  Rq = () => `Grant credits on signup`,
  zq = () => `注册赠送积分`,
  Bq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Rq(e) : zq(e)),
  Vq = () => `Credits amount`,
  Hq = () => `积分数量`,
  Uq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Vq(e) : Hq(e)),
  Wq = () => `Valid days`,
  Gq = () => `有效天数`,
  Kq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Wq(e) : Gq(e)),
  qq = () => `Description`,
  Jq = () => `描述`,
  Yq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? qq(e) : Jq(e)),
  Xq = () => `Enable email auth`,
  Zq = () => `启用邮箱认证`,
  Qq = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Xq(e) : Zq(e)),
  $q = () => `Require email verification on sign up`,
  eJ = () => `注册时需要邮箱验证`,
  tJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? $q(e) : eJ(e)),
  nJ = () => `Enable Google auth`,
  rJ = () => `启用 Google 认证`,
  iJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? nJ(e) : rJ(e)),
  aJ = () => `Enable Google One Tap`,
  oJ = () => `启用 Google One Tap`,
  sJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? aJ(e) : oJ(e)),
  cJ = () => `Client ID`,
  lJ = () => `客户端 ID`,
  uJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? cJ(e) : lJ(e)),
  dJ = () => `Client Secret`,
  fJ = () => `客户端密钥`,
  pJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? dJ(e) : fJ(e)),
  mJ = () => `Enable GitHub auth`,
  hJ = () => `启用 GitHub 认证`,
  gJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? mJ(e) : hJ(e)),
  _J = () => `Client ID`,
  vJ = () => `客户端 ID`,
  yJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? _J(e) : vJ(e)),
  bJ = () => `Client Secret`,
  xJ = () => `客户端密钥`,
  SJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? bJ(e) : xJ(e)),
  CJ = () => `Require invite code on sign up`,
  wJ = () => `注册时需要邀请码`,
  TJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? CJ(e) : wJ(e)),
  EJ = () => `Show payment method selector`,
  DJ = () => `显示支付方式选择器`,
  OJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? EJ(e) : DJ(e)),
  kJ = () => `Default provider`,
  AJ = () => `默认支付方式`,
  jJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? kJ(e) : AJ(e)),
  MJ = () => `Enable Stripe`,
  NJ = () => `启用 Stripe`,
  PJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? MJ(e) : NJ(e)),
  FJ = () => `Secret Key`,
  IJ = () => `密钥`,
  LJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? FJ(e) : IJ(e)),
  RJ = () => `Publishable Key`,
  zJ = () => `公钥`,
  BJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? RJ(e) : zJ(e)),
  VJ = () => `Webhook Signing Secret`,
  HJ = () => `Webhook 签名密钥`,
  UJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? VJ(e) : HJ(e)),
  WJ = () => `Enable Creem`,
  Pee = () => `启用 Creem`,
  GJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? WJ(e) : Pee(e)),
  KJ = () => `Environment`,
  qJ = () => `环境`,
  JJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? KJ(e) : qJ(e)),
  YJ = () => `API Key`,
  XJ = () => `API 密钥`,
  ZJ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? YJ(e) : XJ(e)),
  QJ = () => `Signing Secret`,
  $J = () => `Signing Secret`,
  eY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? QJ(e) : $J(e)),
  tY = () => `Product IDs Mapping`,
  nY = () => `产品 ID 映射`,
  rY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? tY(e) : nY(e)),
  iY = () => `Test amount (cents)`,
  aY = () => `测试金额（分）`,
  oY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? iY(e) : aY(e)),
  sY = () => `Enable PayPal`,
  cY = () => `启用 PayPal`,
  lY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? sY(e) : cY(e)),
  uY = () => `Client ID`,
  dY = () => `客户端 ID`,
  fY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? uY(e) : dY(e)),
  pY = () => `Client Secret`,
  mY = () => `客户端密钥`,
  hY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? pY(e) : mY(e)),
  gY = () => `Webhook ID`,
  _Y = () => `Webhook ID`,
  vY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? gY(e) : _Y(e)),
  yY = () => `Environment`,
  bY = () => `环境`,
  xY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? yY(e) : bY(e)),
  SY = () => `Test amount (cents)`,
  CY = () => `测试金额（分）`,
  wY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? SY(e) : CY(e)),
  TY = () => `Enable Alipay`,
  EY = () => `启用支付宝`,
  DY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? TY(e) : EY(e)),
  OY = () => `App ID`,
  kY = () => `应用 ID`,
  AY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? OY(e) : kY(e)),
  jY = () => `Private Key (RSA2)`,
  MY = () => `应用私钥（RSA2）`,
  NY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? jY(e) : MY(e)),
  PY = () => `Alipay Public Key`,
  FY = () => `支付宝公钥`,
  IY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? PY(e) : FY(e)),
  LY = () => `Notify URL (Webhook)`,
  RY = () => `回调地址（Webhook）`,
  zY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? LY(e) : RY(e)),
  BY = () => `Test amount (cents)`,
  VY = () => `测试金额（分）`,
  HY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? BY(e) : VY(e)),
  UY = () => `Enable WeChat Pay`,
  WY = () => `启用微信支付`,
  GY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? UY(e) : WY(e)),
  KY = () => `AppID`,
  qY = () => `AppID`,
  JY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? KY(e) : qY(e)),
  YY = () => `Merchant ID`,
  XY = () => `商户号`,
  ZY = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? YY(e) : XY(e)),
  QY = () => `APIv3 Key`,
  $Y = () => `APIv3 密钥`,
  eX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? QY(e) : $Y(e)),
  tX = () => `Merchant Private Key (PEM)`,
  nX = () => `商户私钥（PEM）`,
  rX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? tX(e) : nX(e)),
  iX = () => `Certificate Serial No`,
  aX = () => `证书序列号`,
  oX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? iX(e) : aX(e)),
  sX = () => `Notify URL (Webhook)`,
  cX = () => `回调地址（Webhook）`,
  lX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? sX(e) : cX(e)),
  uX = () => `Test amount (cents)`,
  dX = () => `测试金额（分）`,
  fX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? uX(e) : dX(e)),
  pX = () => `Email Provider`,
  mX = () => `邮件服务商`,
  hX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? pX(e) : mX(e)),
  gX = () => `API Key`,
  _X = () => `API 密钥`,
  vX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? gX(e) : _X(e)),
  yX = () => `Sender Email`,
  bX = () => `发件地址`,
  xX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? yX(e) : bX(e)),
  SX = () => `API Token`,
  CX = () => `API Token`,
  wX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? SX(e) : CX(e)),
  TX = () => `Account ID`,
  EX = () => `Account ID`,
  DX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? TX(e) : EX(e)),
  OX = () => `Sender Email`,
  kX = () => `发件地址`,
  AX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? OX(e) : kX(e)),
  jX = () => `Cloudflare Access Key`,
  MX = () => `Cloudflare 访问密钥`,
  NX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? jX(e) : MX(e)),
  PX = () => `Cloudflare Secret Key`,
  FX = () => `Cloudflare 私有密钥`,
  IX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? PX(e) : FX(e)),
  LX = () => `Bucket Name`,
  RX = () => `存储桶名称`,
  zX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? LX(e) : RX(e)),
  BX = () => `Upload Path`,
  VX = () => `上传路径`,
  HX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? BX(e) : VX(e)),
  UX = () => `Endpoint`,
  WX = () => `端点`,
  GX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? UX(e) : WX(e)),
  KX = () => `Domain`,
  qX = () => `公共域名`,
  JX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? KX(e) : qX(e)),
  YX = () => `Base URL`,
  XX = () => `Base URL`,
  ZX = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? YX(e) : XX(e)),
  QX = () => `API Key`,
  $X = () => `API 密钥`,
  eZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? QX(e) : $X(e)),
  tZ = () => `Base URL`,
  nZ = () => `Base URL`,
  rZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? tZ(e) : nZ(e)),
  iZ = () => `API Key`,
  aZ = () => `API 密钥`,
  oZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? iZ(e) : aZ(e)),
  sZ = () => `API Token`,
  cZ = () => `API Token`,
  lZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? sZ(e) : cZ(e)),
  uZ = () => `API Key`,
  dZ = () => `API 密钥`,
  fZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? uZ(e) : dZ(e)),
  pZ = () => `Measurement ID`,
  mZ = () => `Measurement ID`,
  hZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? pZ(e) : mZ(e)),
  gZ = () => `Domain`,
  _Z = () => `域名`,
  vZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? gZ(e) : _Z(e)),
  yZ = () => `Script Src`,
  bZ = () => `脚本地址`,
  xZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? yZ(e) : bZ(e)),
  SZ = () => `Enable Crisp`,
  CZ = () => `启用 Crisp`,
  wZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? SZ(e) : CZ(e)),
  TZ = () => `Website ID`,
  EZ = () => `网站 ID`,
  DZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? TZ(e) : EZ(e)),
  OZ = () => `Enable Tawk.to`,
  kZ = () => `启用 Tawk.to`,
  AZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? OZ(e) : kZ(e)),
  jZ = () => `Property ID`,
  MZ = () => `Property ID`,
  NZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? jZ(e) : MZ(e)),
  PZ = () => `Widget ID`,
  FZ = () => `Widget ID`,
  IZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? PZ(e) : FZ(e)),
  LZ = (e) => `${e?.[`"starter_monthly": "prod_xxx"`]}`,
  RZ = (e) => `${e?.[`"starter_monthly": "prod_xxx"`]}`,
  zZ = (e, t = {}) => ((t.locale ?? s()) === `en` ? LZ(e) : RZ(e)),
  BZ = () => `Leave empty to use real amount, 1 = $0.01`,
  VZ = () => `留空使用实际金额，填 1 则支付 $0.01`,
  HZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? BZ(e) : VZ(e)),
  UZ = () => `Leave empty to use real amount, 1 = $0.01`,
  WZ = () => `留空使用实际金额，填 1 则支付 $0.01`,
  GZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? UZ(e) : WZ(e)),
  KZ = () => `Leave empty to use real amount, 1 = ¥0.01`,
  qZ = () => `留空使用实际金额，填 1 则支付 ¥0.01`,
  JZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? KZ(e) : qZ(e)),
  YZ = () => `Leave empty to use real amount, 1 = ¥0.01`,
  XZ = () => `留空使用实际金额，填 1 则支付 ¥0.01`,
  ZZ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? YZ(e) : XZ(e)),
  QZ = () => `Support Tickets`,
  $Z = () => `工单管理`,
  eQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? QZ(e) : $Z(e)),
  tQ = () => `View and reply to user tickets`,
  nQ = () => `查看并回复用户提交的工单`,
  rQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? tQ(e) : nQ(e)),
  iQ = () => `Subject`,
  aQ = () => `标题`,
  oQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? iQ(e) : aQ(e)),
  sQ = () => `User`,
  cQ = () => `用户`,
  lQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? sQ(e) : cQ(e)),
  uQ = () => `Status`,
  dQ = () => `状态`,
  fQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? uQ(e) : dQ(e)),
  pQ = () => `Last Updated`,
  mQ = () => `更新时间`,
  hQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? pQ(e) : mQ(e)),
  gQ = () => `Actions`,
  _Q = () => `操作`,
  vQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? gQ(e) : _Q(e)),
  yQ = () => `All`,
  bQ = () => `全部`,
  xQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? yQ(e) : bQ(e)),
  SQ = () => `Open`,
  CQ = () => `待处理`,
  wQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? SQ(e) : CQ(e)),
  TQ = () => `In Progress`,
  EQ = () => `处理中`,
  DQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? TQ(e) : EQ(e)),
  OQ = () => `Closed`,
  kQ = () => `已关闭`,
  AQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? OQ(e) : kQ(e)),
  jQ = () => `Open`,
  MQ = () => `待处理`,
  NQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? jQ(e) : MQ(e)),
  PQ = () => `In Progress`,
  FQ = () => `处理中`,
  IQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? PQ(e) : FQ(e)),
  LQ = () => `Closed`,
  RQ = () => `已关闭`,
  zQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? LQ(e) : RQ(e)),
  BQ = () => `No tickets`,
  VQ = () => `暂无工单`,
  HQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? BQ(e) : VQ(e)),
  UQ = () => `Write a reply...`,
  WQ = () => `输入回复内容…`,
  GQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? UQ(e) : WQ(e)),
  KQ = () => `Send Reply`,
  qQ = () => `发送回复`,
  JQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? KQ(e) : qQ(e)),
  YQ = () => `Sending...`,
  XQ = () => `发送中…`,
  ZQ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? YQ(e) : XQ(e)),
  QQ = () => `Reply sent`,
  $Q = () => `回复已发送`,
  e$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? QQ(e) : $Q(e)),
  t$ = () => `Status updated`,
  n$ = () => `状态已更新`,
  r$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? t$(e) : n$(e)),
  i$ = () => `Close Ticket`,
  a$ = () => `关闭工单`,
  o$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? i$(e) : a$(e)),
  s$ = () => `Reopen Ticket`,
  c$ = () => `重新打开`,
  l$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? s$(e) : c$(e)),
  u$ = () => `Admin`,
  d$ = () => `管理员`,
  f$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? u$(e) : d$(e)),
  p$ = () => `Latest Reply`,
  m$ = () => `最新回复`,
  h$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? p$(e) : m$(e)),
  g$ = () => `Created At`,
  _$ = () => `创建时间`,
  v$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? g$(e) : _$(e)),
  y$ = () => `Features`,
  b$ = () => `功能`,
  x$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? y$(e) : b$(e)),
  S$ = () => `Pricing`,
  C$ = () => `价格`,
  w$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? S$(e) : C$(e)),
  T$ = () => `The headless engine for your next SaaS.`,
  E$ = () => `一小时上线你的 AI 产品`,
  D$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? T$(e) : E$(e)),
  O$ = () =>
    `Auth, payments, subscriptions, credits, RBAC, CMS, and i18n — all pre-wired. Just build your product on top.`,
  k$ = () =>
    `认证、支付、订阅、积分、权限、内容管理和国际化 — 全部预置就绪，直接在上面构建你的产品。`,
  A$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? O$(e) : k$(e)),
  j$ = () => `Get Started`,
  M$ = () => `立即开始`,
  N$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? j$(e) : M$(e)),
  P$ = () => `Dashboard`,
  F$ = () => `控制台`,
  I$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? P$(e) : F$(e)),
  L$ = () => `Authentication`,
  R$ = () => `身份认证`,
  z$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? L$(e) : R$(e)),
  B$ = () => `Payments`,
  V$ = () => `支付系统`,
  H$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? B$(e) : V$(e)),
  U$ = () => `Subscriptions`,
  W$ = () => `订阅管理`,
  G$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? U$(e) : W$(e)),
  K$ = () => `Credits`,
  q$ = () => `积分系统`,
  J$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? K$(e) : q$(e)),
  Y$ = () => `RBAC`,
  X$ = () => `权限管理`,
  Z$ = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Y$(e) : X$(e)),
  Q$ = () => `i18n`,
  $$ = () => `国际化`,
  e1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Q$(e) : $$(e)),
  t1 = () => `CMS`,
  n1 = () => `内容管理`,
  r1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? t1(e) : n1(e)),
  i1 = () => `API Keys`,
  a1 = () => `API 密钥`,
  o1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? i1(e) : a1(e)),
  s1 = () => `Everything you need to ship`,
  c1 = () => `开箱即用的完整功能`,
  l1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? s1(e) : c1(e)),
  u1 = () =>
    `Pre-wired business logic so you can focus on building your product.`,
  d1 = () => `预置的业务逻辑，让你专注于产品本身。`,
  f1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? u1(e) : d1(e)),
  p1 = () => `Authentication`,
  m1 = () => `身份认证`,
  h1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? p1(e) : m1(e)),
  g1 = () =>
    `Email/password, Google, and GitHub OAuth — ready out of the box with session management and account linking.`,
  _1 = () =>
    `邮箱密码、Google、GitHub OAuth 登录，开箱即用，自带会话管理和账号关联。`,
  v1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? g1(e) : _1(e)),
  y1 = () => `Payments`,
  b1 = () => `支付系统`,
  x1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? y1(e) : b1(e)),
  S1 = () =>
    `Stripe, PayPal, Alipay, WeChat Pay — checkout, subscriptions, webhooks, and order management.`,
  C1 = () =>
    `Stripe、PayPal、支付宝、微信支付 — 结账、订阅、Webhook 和订单管理。`,
  w1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? S1(e) : C1(e)),
  T1 = () => `Roles & Permissions`,
  E1 = () => `角色与权限`,
  D1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? T1(e) : E1(e)),
  O1 = () =>
    `Fine-grained RBAC with wildcard matching. Full admin panel for managing users, roles, and permissions.`,
  k1 = () =>
    `细粒度的 RBAC 权限控制，支持通配符匹配。完整的管理后台管理用户、角色和权限。`,
  A1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? O1(e) : k1(e)),
  j1 = () => `Internationalization`,
  M1 = () => `国际化`,
  N1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? j1(e) : M1(e)),
  P1 = () =>
    `English and Chinese built-in with locale-aware routing. Easy to extend with additional languages.`,
  F1 = () => `内置中英文支持，路由感知语言切换，轻松扩展更多语言。`,
  I1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? P1(e) : F1(e)),
  L1 = () => `Content Management`,
  R1 = () => `内容管理`,
  z1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? L1(e) : R1(e)),
  B1 = () =>
    `Categories and posts with full CRUD, status management, and admin panel — build your blog or docs.`,
  V1 = () =>
    `分类和文章的完整 CRUD，支持状态管理和管理后台 — 快速搭建博客或文档。`,
  H1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? B1(e) : V1(e)),
  U1 = () => `Credit System`,
  W1 = () => `积分系统`,
  G1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? U1(e) : W1(e)),
  K1 = () =>
    `FIFO consumption, expiration, auto-grant on signup, and revocation — ready for usage-based billing.`,
  q1 = () => `FIFO 消费、过期控制、注册自动发放和撤销 — 为按量计费做好准备。`,
  J1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? K1(e) : q1(e)),
  Y1 = () => `Pricing`,
  X1 = () => `价格`,
  Z1 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Y1(e) : X1(e)),
  Q1 = () => `Choose the plan that works for you.`,
  $1 = () => `选择适合你的方案。`,
  e0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Q1(e) : $1(e)),
  t0 = () => `Monthly`,
  n0 = () => `月付`,
  r0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? t0(e) : n0(e)),
  i0 = () => `Yearly`,
  a0 = () => `年付`,
  o0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? i0(e) : a0(e)),
  s0 = () => `Lifetime`,
  c0 = () => `买断`,
  l0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? s0(e) : c0(e)),
  u0 = () => `Popular`,
  d0 = () => `热门`,
  f0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? u0(e) : d0(e)),
  p0 = () => `Best value`,
  m0 = () => `超值`,
  h0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? p0(e) : m0(e)),
  g0 = () => `Buy once`,
  _0 = () => `一次买断`,
  v0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? g0(e) : _0(e)),
  y0 = () => `Starter`,
  b0 = () => `入门版`,
  x0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? y0(e) : b0(e)),
  S0 = () => `For individuals`,
  C0 = () => `适合个人用户`,
  w0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? S0(e) : C0(e)),
  T0 = () => `Pro`,
  E0 = () => `专业版`,
  D0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? T0(e) : E0(e)),
  O0 = () => `For growing teams`,
  k0 = () => `适合成长型团队`,
  A0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? O0(e) : k0(e)),
  j0 = () => `Enterprise`,
  M0 = () => `企业版`,
  N0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? j0(e) : M0(e)),
  P0 = () => `For large organizations`,
  F0 = () => `适合大型组织`,
  I0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? P0(e) : F0(e)),
  L0 = () => `1 project`,
  R0 = () => `1 个项目`,
  z0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? L0(e) : R0(e)),
  B0 = () => `5,000 credits`,
  V0 = () => `5,000 积分`,
  H0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? B0(e) : V0(e)),
  U0 = () => `Email support`,
  W0 = () => `邮件支持`,
  G0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? U0(e) : W0(e)),
  K0 = () => `Unlimited projects`,
  q0 = () => `无限项目`,
  J0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? K0(e) : q0(e)),
  Y0 = () => `50,000 credits`,
  X0 = () => `50,000 积分`,
  Z0 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Y0(e) : X0(e)),
  Q0 = () => `Priority support`,
  $0 = () => `优先支持`,
  e2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Q0(e) : $0(e)),
  t2 = () => `API access`,
  n2 = () => `API 访问`,
  r2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? t2(e) : n2(e)),
  i2 = () => `Everything in Pro`,
  a2 = () => `包含专业版全部功能`,
  o2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? i2(e) : a2(e)),
  s2 = () => `Unlimited credits`,
  c2 = () => `无限积分`,
  l2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? s2(e) : c2(e)),
  u2 = () => `Dedicated support`,
  d2 = () => `专属支持`,
  f2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? u2(e) : d2(e)),
  p2 = () => `Custom integrations`,
  m2 = () => `定制集成`,
  h2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? p2(e) : m2(e)),
  g2 = () => `Frequently asked questions`,
  _2 = () => `常见问题`,
  v2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? g2(e) : _2(e)),
  y2 = () => `Everything you need to know before getting started.`,
  b2 = () => `开始之前你可能想了解的一切。`,
  x2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? y2(e) : b2(e)),
  S2 = () => `What's the tech stack?`,
  C2 = () => `用的是什么技术栈？`,
  w2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? S2(e) : C2(e)),
  T2 = () =>
    `Next.js 16 with the App Router, React 19, TypeScript strict mode, Tailwind CSS 4, shadcn/ui, Drizzle ORM, and better-auth. Every piece of business logic is inlined — no external packages for payment, email, storage, or AI.`,
  E2 = () =>
    `Next.js 16（App Router）、React 19、TypeScript 严格模式、Tailwind CSS 4、shadcn/ui、Drizzle ORM 和 better-auth。所有业务逻辑都内置在代码里——支付、邮件、存储、AI 都不依赖外部包。`,
  D2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? T2(e) : E2(e)),
  O2 = () => `Which payment providers are supported?`,
  k2 = () => `支持哪些支付方式？`,
  A2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? O2(e) : k2(e)),
  j2 = () =>
    `Stripe, PayPal, Creem, Alipay, and WeChat Pay out of the box. The PaymentManager abstraction makes it straightforward to add more providers by implementing a single interface.`,
  M2 = () =>
    `开箱即用支持 Stripe、PayPal、Creem、支付宝和微信支付。通过 PaymentManager 抽象层，只需实现一个接口就能接入新的支付渠道。`,
  N2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? j2(e) : M2(e)),
  P2 = () => `Which databases can I use?`,
  F2 = () => `支持哪些数据库？`,
  I2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? P2(e) : F2(e)),
  L2 = () =>
    `Drizzle ORM handles PostgreSQL, MySQL, SQLite, Turso, and Cloudflare D1. Switch providers by editing DATABASE_PROVIDER in your .env — the schema templates and drizzle config adapt automatically.`,
  R2 = () =>
    `Drizzle ORM 支持 PostgreSQL、MySQL、SQLite、Turso 和 Cloudflare D1。只需修改 .env 中的 DATABASE_PROVIDER——schema 模板和 drizzle 配置会自动适配。`,
  z2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? L2(e) : R2(e)),
  B2 = () => `How customizable is the landing page?`,
  V2 = () => `落地页可以自定义到什么程度？`,
  H2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? B2(e) : V2(e)),
  U2 = () =>
    `The src/blocks/ directory ships with demo sections — they're designed to be rewritten per project. The durable primitives live in src/components/, so your rebrand touches blocks and translations, not the chassis.`,
  W2 = () =>
    `src/blocks/ 下的 section 都是示例内容，本来就是要每个项目自己重写的。src/components/ 里才是长期沉淀的基础组件——换品牌只动 blocks 和翻译，底层架构不变。`,
  G2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? U2(e) : W2(e)),
  K2 = () => `Can I use this for commercial projects?`,
  q2 = () => `可以用于商业项目吗？`,
  J2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? K2(e) : q2(e)),
  Y2 = () =>
    `Yes. ShipAny Next is built for shipping production SaaS products. You own the code after cloning — no per-seat fees, no runtime dependencies on our infrastructure.`,
  X2 = () =>
    `可以。ShipAny Next 就是为生产级 SaaS 打造的。克隆之后代码归你——没有按用户数收费，也不依赖我们的任何基础设施。`,
  Z2 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Y2(e) : X2(e)),
  Q2 = () => `Ready to ship your SaaS?`,
  $2 = () => `准备好构建你的 SaaS 了吗？`,
  e4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Q2(e) : $2(e)),
  t4 = () =>
    `Stop wiring auth, payments, and RBAC from scratch. Start with ShipAny Next and build what actually makes your product unique.`,
  n4 = () =>
    `别再从零搭建认证、支付和权限系统了。用 ShipAny Next 起步，专注打造真正让产品与众不同的东西。`,
  r4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? t4(e) : n4(e)),
  i4 = () => `Get started for free`,
  a4 = () => `免费开始使用`,
  o4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? i4(e) : a4(e)),
  s4 = () => `Ship faster, iterate smarter.`,
  c4 = () => `极速发布你的 AI 产品`,
  l4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? s4(e) : c4(e)),
  u4 = () => `Feature`,
  d4 = () => `功能`,
  f4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? u4(e) : d4(e)),
  p4 = () => `Product`,
  m4 = () => `产品`,
  h4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? p4(e) : m4(e)),
  g4 = () => `Resources`,
  _4 = () => `资源`,
  v4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? g4(e) : _4(e)),
  y4 = () => `Legal`,
  b4 = () => `法律信息`,
  x4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? y4(e) : b4(e)),
  S4 = () => `Privacy Policy`,
  C4 = () => `隐私政策`,
  w4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? S4(e) : C4(e)),
  T4 = () => `Terms of Service`,
  E4 = () => `服务条款`,
  D4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? T4(e) : E4(e)),
  O4 = () => `Settings`,
  k4 = () => `设置`,
  A4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? O4(e) : k4(e)),
  j4 = () => `Admin Panel`,
  M4 = () => `管理后台`,
  N4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? j4(e) : M4(e)),
  P4 = () => `Documentation`,
  F4 = () => `文档`,
  I4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? P4(e) : F4(e)),
  L4 = () => `GitHub`,
  R4 = () => `GitHub`,
  z4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? L4(e) : R4(e)),
  B4 = () => `Blog`,
  V4 = () => `博客`,
  H4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? B4(e) : V4(e)),
  U4 = () => `Product updates, guides, and engineering notes from the team.`,
  W4 = () => `来自团队的产品动态、使用指南与工程笔记。`,
  G4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? U4(e) : W4(e)),
  K4 = () => `No posts yet — check back soon.`,
  q4 = () => `暂无文章,敬请期待。`,
  J4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? K4(e) : q4(e)),
  Y4 = () => `Back to blog`,
  X4 = () => `返回博客`,
  Z4 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Y4(e) : X4(e)),
  Q4 = () => `Read more`,
  $4 = () => `阅读全文`,
  e3 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? Q4(e) : $4(e)),
  t3 = () => `Blog`,
  n3 = () => `博客`,
  r3 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? t3(e) : n3(e)),
  i3 = () => `From the blog`,
  a3 = () => `最新博客`,
  o3 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? i3(e) : a3(e)),
  s3 = () => `Product updates, guides, and engineering notes from the team.`,
  c3 = () => `来自团队的产品动态、使用指南与工程笔记。`,
  l3 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? s3(e) : c3(e)),
  u3 = () => `View all posts`,
  d3 = () => `查看全部文章`,
  f3 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? u3(e) : d3(e)),
  p3 = () => `Blog`,
  m3 = () => `博客`,
  h3 = (e = {}, t = {}) => ((t.locale ?? s()) === `en` ? p3(e) : m3(e)),
  g3 = t({
    'admin.back_to_dashboard': () => LO,
    'admin.categories.actions_col': () => yF,
    'admin.categories.all': () => YP,
    'admin.categories.cancel': () => uI,
    'admin.categories.confirm_delete': () => pI,
    'admin.categories.count': () => QP,
    'admin.categories.create': () => SF,
    'admin.categories.create_description': () => OF,
    'admin.categories.create_title': () => TF,
    'admin.categories.created': () => gI,
    'admin.categories.created_at': () => gF,
    'admin.categories.delete_confirm': () => BF,
    'admin.categories.delete_title': () => LF,
    'admin.categories.deleted': () => SI,
    'admin.categories.description': () => KP,
    'admin.categories.description_col': () => uF,
    'admin.categories.description_field': () => tI,
    'admin.categories.description_placeholder': () => iI,
    'admin.categories.edit_description': () => PF,
    'admin.categories.edit_title': () => jF,
    'admin.categories.no_data': () => tF,
    'admin.categories.save': () => sI,
    'admin.categories.slug_col': () => iF,
    'admin.categories.slug_field': () => UF,
    'admin.categories.slug_placeholder': () => KF,
    'admin.categories.status_col': () => pF,
    'admin.categories.title': () => UP,
    'admin.categories.title_col': () => sF,
    'admin.categories.title_field': () => YF,
    'admin.categories.title_placeholder': () => QF,
    'admin.categories.updated': () => yI,
    'admin.credits.all_credits': () => PB,
    'admin.credits.amount': () => YB,
    'admin.credits.count': () => LB,
    'admin.credits.created_at': () => uV,
    'admin.credits.description': () => jB,
    'admin.credits.expires_at': () => sV,
    'admin.credits.no_credits': () => BB,
    'admin.credits.remaining': () => QB,
    'admin.credits.scene': () => iV,
    'admin.credits.tab_all': () => pV,
    'admin.credits.tab_consume': () => yV,
    'admin.credits.tab_grant': () => gV,
    'admin.credits.title': () => OB,
    'admin.credits.transaction_no': () => UB,
    'admin.credits.type': () => tV,
    'admin.credits.user': () => KB,
    'admin.description': () => jO,
    'admin.invite_codes.actions_col': () => PH,
    'admin.invite_codes.cancel': () => KV,
    'admin.invite_codes.code_col': () => gH,
    'admin.invite_codes.copied': () => BH,
    'admin.invite_codes.count_label': () => YV,
    'admin.invite_codes.create_button': () => OV,
    'admin.invite_codes.create_description': () => PV,
    'admin.invite_codes.create_submit': () => LV,
    'admin.invite_codes.create_success': () => UV,
    'admin.invite_codes.create_title': () => jV,
    'admin.invite_codes.created_col': () => jH,
    'admin.invite_codes.creating': () => BV,
    'admin.invite_codes.delete_confirm': () => YH,
    'admin.invite_codes.delete_description': () => KH,
    'admin.invite_codes.delete_success': () => QH,
    'admin.invite_codes.delete_title': () => UH,
    'admin.invite_codes.description': () => TV,
    'admin.invite_codes.empty': () => LH,
    'admin.invite_codes.expires_col': () => OH,
    'admin.invite_codes.expires_label': () => iH,
    'admin.invite_codes.invalid_input': () => pH,
    'admin.invite_codes.max_uses_label': () => QV,
    'admin.invite_codes.note_col': () => TH,
    'admin.invite_codes.note_label': () => sH,
    'admin.invite_codes.note_placeholder': () => uH,
    'admin.invite_codes.tab_all': () => tU,
    'admin.invite_codes.tab_available': () => iU,
    'admin.invite_codes.tab_used': () => sU,
    'admin.invite_codes.title': () => SV,
    'admin.invite_codes.trial_days_col': () => SH,
    'admin.invite_codes.trial_days_label': () => tH,
    'admin.invite_codes.usage_col': () => yH,
    'admin.loading': () => PO,
    'admin.nav.billing': () => pk,
    'admin.nav.categories': () => sk,
    'admin.nav.content': () => ik,
    'admin.nav.credits': () => Sk,
    'admin.nav.invite_codes': () => Tk,
    'admin.nav.overview': () => BO,
    'admin.nav.payments': () => gk,
    'admin.nav.permissions': () => tk,
    'admin.nav.posts': () => uk,
    'admin.nav.rbac': () => KO,
    'admin.nav.roles': () => QO,
    'admin.nav.settings': () => UO,
    'admin.nav.subscriptions': () => yk,
    'admin.nav.support': () => jk,
    'admin.nav.tickets': () => Ok,
    'admin.nav.users': () => YO,
    'admin.payments.all_payments': () => YR,
    'admin.payments.amount': () => uz,
    'admin.payments.count': () => QR,
    'admin.payments.created_at': () => Sz,
    'admin.payments.description': () => KR,
    'admin.payments.no_payments': () => tz,
    'admin.payments.order_no': () => iz,
    'admin.payments.provider': () => yz,
    'admin.payments.status': () => pz,
    'admin.payments.tab_all': () => Tz,
    'admin.payments.tab_one_time': () => jz,
    'admin.payments.tab_subscription': () => Oz,
    'admin.payments.title': () => UR,
    'admin.payments.type': () => gz,
    'admin.payments.user': () => sz,
    'admin.permissions.action_col': () => TN,
    'admin.permissions.action_field': () => pP,
    'admin.permissions.action_placeholder': () => gP,
    'admin.permissions.actions_col': () => jN,
    'admin.permissions.all_permissions': () => uN,
    'admin.permissions.cancel': () => OP,
    'admin.permissions.code_col': () => yN,
    'admin.permissions.code_field': () => tP,
    'admin.permissions.code_placeholder': () => iP,
    'admin.permissions.confirm_delete': () => jP,
    'admin.permissions.count': () => pN,
    'admin.permissions.create_description': () => BN,
    'admin.permissions.create_permission': () => PN,
    'admin.permissions.create_title': () => LN,
    'admin.permissions.created': () => PP,
    'admin.permissions.delete_confirm': () => QN,
    'admin.permissions.delete_title': () => YN,
    'admin.permissions.deleted': () => BP,
    'admin.permissions.description': () => sN,
    'admin.permissions.edit_description': () => KN,
    'admin.permissions.edit_title': () => UN,
    'admin.permissions.no_permissions': () => gN,
    'admin.permissions.resource_col': () => SN,
    'admin.permissions.resource_field': () => sP,
    'admin.permissions.resource_placeholder': () => uP,
    'admin.permissions.save': () => TP,
    'admin.permissions.title': () => iN,
    'admin.permissions.title_col': () => ON,
    'admin.permissions.title_field': () => yP,
    'admin.permissions.title_placeholder': () => SP,
    'admin.permissions.updated': () => LP,
    'admin.posts.actions_col': () => tL,
    'admin.posts.all': () => jI,
    'admin.posts.author_col': () => KI,
    'admin.posts.author_field': () => UL,
    'admin.posts.author_placeholder': () => KL,
    'admin.posts.cancel': () => yR,
    'admin.posts.category_field': () => tR,
    'admin.posts.category_placeholder': () => iR,
    'admin.posts.confirm_delete': () => SR,
    'admin.posts.content_field': () => YL,
    'admin.posts.content_placeholder': () => QL,
    'admin.posts.count': () => PI,
    'admin.posts.create': () => iL,
    'admin.posts.create_description': () => uL,
    'admin.posts.create_title': () => sL,
    'admin.posts.created': () => TR,
    'admin.posts.created_at': () => QI,
    'admin.posts.delete_confirm': () => SL,
    'admin.posts.delete_title': () => yL,
    'admin.posts.deleted': () => jR,
    'admin.posts.description': () => OI,
    'admin.posts.description_field': () => LL,
    'admin.posts.description_placeholder': () => BL,
    'admin.posts.edit_description': () => gL,
    'admin.posts.edit_title': () => pL,
    'admin.posts.no_data': () => LI,
    'admin.posts.save': () => gR,
    'admin.posts.slug_col': () => UI,
    'admin.posts.slug_field': () => TL,
    'admin.posts.slug_placeholder': () => OL,
    'admin.posts.status_col': () => YI,
    'admin.posts.status_draft': () => uR,
    'admin.posts.status_field': () => sR,
    'admin.posts.status_published': () => pR,
    'admin.posts.tab_all': () => PR,
    'admin.posts.tab_draft': () => BR,
    'admin.posts.tab_published': () => LR,
    'admin.posts.title': () => TI,
    'admin.posts.title_col': () => BI,
    'admin.posts.title_field': () => jL,
    'admin.posts.title_placeholder': () => PL,
    'admin.posts.updated': () => OR,
    'admin.roles.actions_col': () => Bj,
    'admin.roles.all_roles': () => yj,
    'admin.roles.cancel': () => jM,
    'admin.roles.confirm_delete': () => PM,
    'admin.roles.count': () => Sj,
    'admin.roles.create_description': () => Yj,
    'admin.roles.create_role': () => Uj,
    'admin.roles.create_title': () => Kj,
    'admin.roles.created': () => LM,
    'admin.roles.delete_confirm': () => sM,
    'admin.roles.delete_title': () => iM,
    'admin.roles.deleted': () => UM,
    'admin.roles.description': () => gj,
    'admin.roles.description_col': () => Lj,
    'admin.roles.description_field': () => SM,
    'admin.roles.description_placeholder': () => TM,
    'admin.roles.edit_description': () => tM,
    'admin.roles.edit_title': () => Qj,
    'admin.roles.manage_permissions': () => KM,
    'admin.roles.manage_permissions_description': () => QM,
    'admin.roles.manage_permissions_title': () => YM,
    'admin.roles.name_col': () => Oj,
    'admin.roles.name_field': () => uM,
    'admin.roles.name_placeholder': () => pM,
    'admin.roles.no_roles': () => Tj,
    'admin.roles.permissions_saved': () => tN,
    'admin.roles.save': () => OM,
    'admin.roles.status_col': () => Pj,
    'admin.roles.title': () => pj,
    'admin.roles.title_col': () => jj,
    'admin.roles.title_field': () => gM,
    'admin.roles.title_placeholder': () => yM,
    'admin.roles.updated': () => BM,
    'admin.settings.custom.add': () => LW,
    'admin.settings.custom.description': () => TW,
    'admin.settings.custom.empty': () => OW,
    'admin.settings.custom.key_placeholder': () => jW,
    'admin.settings.custom.remove': () => BW,
    'admin.settings.custom.title': () => SW,
    'admin.settings.custom.value_placeholder': () => PW,
    'admin.settings.description': () => pU,
    'admin.settings.fields.alipay_app_id': () => AY,
    'admin.settings.fields.alipay_enabled': () => DY,
    'admin.settings.fields.alipay_notify_url': () => zY,
    'admin.settings.fields.alipay_private_key': () => NY,
    'admin.settings.fields.alipay_public_key': () => IY,
    'admin.settings.fields.alipay_test_amount': () => HY,
    'admin.settings.fields.anthropic_api_key': () => oZ,
    'admin.settings.fields.anthropic_base_url': () => rZ,
    'admin.settings.fields.app_description': () => Oq,
    'admin.settings.fields.app_name': () => Tq,
    'admin.settings.fields.app_url': () => jq,
    'admin.settings.fields.cloudflare_email_account_id': () => DX,
    'admin.settings.fields.cloudflare_email_api_token': () => wX,
    'admin.settings.fields.cloudflare_email_sender_email': () => AX,
    'admin.settings.fields.creem_api_key': () => ZJ,
    'admin.settings.fields.creem_enabled': () => GJ,
    'admin.settings.fields.creem_environment': () => JJ,
    'admin.settings.fields.creem_product_ids_mapping': () => rY,
    'admin.settings.fields.creem_signing_secret': () => eY,
    'admin.settings.fields.creem_test_amount': () => oY,
    'admin.settings.fields.crisp_enabled': () => wZ,
    'admin.settings.fields.crisp_website_id': () => DZ,
    'admin.settings.fields.default_payment_provider': () => jJ,
    'admin.settings.fields.email_auth_enabled': () => Qq,
    'admin.settings.fields.email_provider': () => hX,
    'admin.settings.fields.email_verification_enabled': () => tJ,
    'admin.settings.fields.fal_api_key': () => fZ,
    'admin.settings.fields.github_auth_enabled': () => gJ,
    'admin.settings.fields.github_client_id': () => yJ,
    'admin.settings.fields.github_client_secret': () => SJ,
    'admin.settings.fields.google_analytics_id': () => hZ,
    'admin.settings.fields.google_auth_enabled': () => iJ,
    'admin.settings.fields.google_client_id': () => uJ,
    'admin.settings.fields.google_client_secret': () => pJ,
    'admin.settings.fields.google_one_tap_enabled': () => sJ,
    'admin.settings.fields.initial_credits_amount': () => Uq,
    'admin.settings.fields.initial_credits_description': () => Yq,
    'admin.settings.fields.initial_credits_enabled': () => Bq,
    'admin.settings.fields.initial_credits_valid_days': () => Kq,
    'admin.settings.fields.initial_role_enabled': () => Pq,
    'admin.settings.fields.initial_role_name': () => Lq,
    'admin.settings.fields.invite_code_required': () => TJ,
    'admin.settings.fields.openai_api_key': () => eZ,
    'admin.settings.fields.openai_base_url': () => ZX,
    'admin.settings.fields.paypal_client_id': () => fY,
    'admin.settings.fields.paypal_client_secret': () => hY,
    'admin.settings.fields.paypal_enabled': () => lY,
    'admin.settings.fields.paypal_environment': () => xY,
    'admin.settings.fields.paypal_test_amount': () => wY,
    'admin.settings.fields.paypal_webhook_id': () => vY,
    'admin.settings.fields.plausible_domain': () => vZ,
    'admin.settings.fields.plausible_src': () => xZ,
    'admin.settings.fields.r2_access_key': () => NX,
    'admin.settings.fields.r2_bucket_name': () => zX,
    'admin.settings.fields.r2_domain': () => JX,
    'admin.settings.fields.r2_endpoint': () => GX,
    'admin.settings.fields.r2_secret_key': () => IX,
    'admin.settings.fields.r2_upload_path': () => HX,
    'admin.settings.fields.replicate_api_token': () => lZ,
    'admin.settings.fields.resend_api_key': () => vX,
    'admin.settings.fields.resend_sender_email': () => xX,
    'admin.settings.fields.select_payment_enabled': () => OJ,
    'admin.settings.fields.stripe_enabled': () => PJ,
    'admin.settings.fields.stripe_publishable_key': () => BJ,
    'admin.settings.fields.stripe_secret_key': () => LJ,
    'admin.settings.fields.stripe_signing_secret': () => UJ,
    'admin.settings.fields.tawk_enabled': () => AZ,
    'admin.settings.fields.tawk_property_id': () => NZ,
    'admin.settings.fields.tawk_widget_id': () => IZ,
    'admin.settings.fields.wechat_api_v3_key': () => eX,
    'admin.settings.fields.wechat_app_id': () => JY,
    'admin.settings.fields.wechat_enabled': () => GY,
    'admin.settings.fields.wechat_mch_id': () => ZY,
    'admin.settings.fields.wechat_notify_url': () => lX,
    'admin.settings.fields.wechat_private_key': () => rX,
    'admin.settings.fields.wechat_serial_no': () => oX,
    'admin.settings.fields.wechat_test_amount': () => fX,
    'admin.settings.groups.alipay.description': () => QG,
    'admin.settings.groups.alipay.title': () => YG,
    'admin.settings.groups.anthropic.description': () => BK,
    'admin.settings.groups.anthropic.title': () => LK,
    'admin.settings.groups.appinfo.description': () => KW,
    'admin.settings.groups.appinfo.title': () => UW,
    'admin.settings.groups.basic_payment.description': () => OG,
    'admin.settings.groups.basic_payment.title': () => TG,
    'admin.settings.groups.cloudflare_email.description': () => SK,
    'admin.settings.groups.cloudflare_email.title': () => yK,
    'admin.settings.groups.credit.description': () => iG,
    'admin.settings.groups.credit.title': () => tG,
    'admin.settings.groups.creem.description': () => BG,
    'admin.settings.groups.creem.title': () => LG,
    'admin.settings.groups.crisp.description': () => gq,
    'admin.settings.groups.crisp.title': () => pq,
    'admin.settings.groups.email_auth.description': () => uG,
    'admin.settings.groups.email_auth.title': () => sG,
    'admin.settings.groups.email_general.description': () => uK,
    'admin.settings.groups.email_general.title': () => sK,
    'admin.settings.groups.fal.description': () => QK,
    'admin.settings.groups.fal.title': () => YK,
    'admin.settings.groups.github_auth.description': () => SG,
    'admin.settings.groups.github_auth.title': () => yG,
    'admin.settings.groups.google_analytics.description': () => iq,
    'admin.settings.groups.google_analytics.title': () => tq,
    'admin.settings.groups.google_auth.description': () => gG,
    'admin.settings.groups.google_auth.title': () => pG,
    'admin.settings.groups.openai.description': () => PK,
    'admin.settings.groups.openai.title': () => jK,
    'admin.settings.groups.paypal.description': () => KG,
    'admin.settings.groups.paypal.title': () => UG,
    'admin.settings.groups.plausible.description': () => uq,
    'admin.settings.groups.plausible.title': () => sq,
    'admin.settings.groups.r2.description': () => OK,
    'admin.settings.groups.r2.title': () => TK,
    'admin.settings.groups.replicate.description': () => KK,
    'admin.settings.groups.replicate.title': () => UK,
    'admin.settings.groups.resend.description': () => gK,
    'admin.settings.groups.resend.title': () => pK,
    'admin.settings.groups.stripe.description': () => PG,
    'admin.settings.groups.stripe.title': () => jG,
    'admin.settings.groups.tawk.description': () => Sq,
    'admin.settings.groups.tawk.title': () => yq,
    'admin.settings.groups.user_role.description': () => QW,
    'admin.settings.groups.user_role.title': () => YW,
    'admin.settings.groups.wechat.description': () => iK,
    'admin.settings.groups.wechat.title': () => tK,
    'admin.settings.placeholders.alipay_test_amount': () => JZ,
    'admin.settings.placeholders.creem_product_ids_mapping': () => zZ,
    'admin.settings.placeholders.creem_test_amount': () => HZ,
    'admin.settings.placeholders.paypal_test_amount': () => GZ,
    'admin.settings.placeholders.wechat_test_amount': () => ZZ,
    'admin.settings.save': () => gU,
    'admin.settings.save_error': () => TU,
    'admin.settings.save_success': () => SU,
    'admin.settings.saving': () => yU,
    'admin.settings.tabs.ai': () => uW,
    'admin.settings.tabs.analytics': () => pW,
    'admin.settings.tabs.auth': () => QU,
    'admin.settings.tabs.custom': () => yW,
    'admin.settings.tabs.customer_service': () => gW,
    'admin.settings.tabs.email': () => iW,
    'admin.settings.tabs.general': () => YU,
    'admin.settings.tabs.payment': () => tW,
    'admin.settings.tabs.storage': () => sW,
    'admin.settings.test.button': () => OU,
    'admin.settings.test.close': () => UU,
    'admin.settings.test.description': () => PU,
    'admin.settings.test.error': () => KU,
    'admin.settings.test.run': () => LU,
    'admin.settings.test.running': () => BU,
    'admin.settings.test.title': () => jU,
    'admin.settings.title': () => uU,
    'admin.stats.roles': () => Lk,
    'admin.stats.total_users': () => Pk,
    'admin.subscriptions.all_subscriptions': () => Bz,
    'admin.subscriptions.amount': () => tB,
    'admin.subscriptions.count': () => Uz,
    'admin.subscriptions.created_at': () => gB,
    'admin.subscriptions.description': () => Lz,
    'admin.subscriptions.interval': () => iB,
    'admin.subscriptions.no_subscriptions': () => Kz,
    'admin.subscriptions.period': () => pB,
    'admin.subscriptions.provider': () => uB,
    'admin.subscriptions.status': () => sB,
    'admin.subscriptions.subscription_no': () => Yz,
    'admin.subscriptions.tab_all': () => yB,
    'admin.subscriptions.tab_month': () => SB,
    'admin.subscriptions.tab_year': () => TB,
    'admin.subscriptions.title': () => Pz,
    'admin.subscriptions.user': () => Qz,
    'admin.tickets.actions_col': () => vQ,
    'admin.tickets.admin': () => f$,
    'admin.tickets.close_ticket': () => o$,
    'admin.tickets.created_col': () => v$,
    'admin.tickets.description': () => rQ,
    'admin.tickets.empty': () => HQ,
    'admin.tickets.latest_reply_col': () => h$,
    'admin.tickets.reopen_ticket': () => l$,
    'admin.tickets.reply_placeholder': () => GQ,
    'admin.tickets.reply_submit': () => JQ,
    'admin.tickets.reply_success': () => e$,
    'admin.tickets.replying': () => ZQ,
    'admin.tickets.status_closed': () => zQ,
    'admin.tickets.status_col': () => fQ,
    'admin.tickets.status_open': () => NQ,
    'admin.tickets.status_replied': () => IQ,
    'admin.tickets.status_updated': () => r$,
    'admin.tickets.tab_all': () => xQ,
    'admin.tickets.tab_closed': () => AQ,
    'admin.tickets.tab_open': () => wQ,
    'admin.tickets.tab_replied': () => DQ,
    'admin.tickets.title': () => eQ,
    'admin.tickets.title_col': () => oQ,
    'admin.tickets.updated_col': () => hQ,
    'admin.tickets.user_col': () => lQ,
    'admin.title': () => OO,
    'admin.users.actions_col': () => pA,
    'admin.users.all_users': () => Kk,
    'admin.users.count': () => Yk,
    'admin.users.credits_action_deduct': () => BA,
    'admin.users.credits_action_grant': () => LA,
    'admin.users.credits_amount_label': () => UA,
    'admin.users.credits_col': () => sA,
    'admin.users.credits_deducted': () => uj,
    'admin.users.credits_desc_label': () => KA,
    'admin.users.credits_desc_placeholder': () => YA,
    'admin.users.credits_granted': () => sj,
    'admin.users.credits_invalid_amount': () => ij,
    'admin.users.credits_submit': () => QA,
    'admin.users.credits_submitting': () => tj,
    'admin.users.description': () => Uk,
    'admin.users.email_col': () => iA,
    'admin.users.joined_col': () => uA,
    'admin.users.manage_credits_for': () => PA,
    'admin.users.manage_credits_title': () => jA,
    'admin.users.manage_roles': () => gA,
    'admin.users.manage_roles_description': () => SA,
    'admin.users.manage_roles_title': () => yA,
    'admin.users.no_users': () => Qk,
    'admin.users.role_assigned': () => TA,
    'admin.users.role_removed': () => OA,
    'admin.users.title': () => Bk,
    'admin.users.user_col': () => tA,
    'blog.back_to_blog': () => Z4,
    'blog.description': () => G4,
    'blog.no_posts': () => J4,
    'blog.read_more': () => e3,
    'blog.title': () => H4,
    'common.error.message': () => b_,
    'common.error.retry': () => C_,
    'common.error.title': () => __,
    'common.metadata.description': () => pm,
    'common.metadata.title': () => um,
    'common.nav.apikeys': () => kv,
    'common.nav.billing': () => Ev,
    'common.nav.get_started': () => Rv,
    'common.nav.profile': () => Mv,
    'common.nav.settings': () => Cv,
    'common.nav.sign_in': () => Fv,
    'common.nav.theme_dark': () => Wv,
    'common.nav.theme_light': () => Vv,
    'common.nav.theme_system': () => qv,
    'common.not_found.back_home': () => m_,
    'common.not_found.message': () => d_,
    'common.pages.back_to_home': () => Xv,
    'common.pages.last_updated': () => $v,
    'common.pricing.choose_payment': () => M_,
    'common.pricing.choose_payment_desc': () => F_,
    'common.pricing.get_started': () => E_,
    'common.pricing.payment_for': () => R_,
    'common.pricing.payment_for_plan': () => V_,
    'common.pricing.processing': () => k_,
    'common.search.placeholder': () => nv,
    'common.sign.already_have_account': () => nh,
    'common.sign.back_to_sign_in': () => Vh,
    'common.sign.confirm_new_password_placeholder': () => ng,
    'common.sign.confirm_password_placeholder': () => Vm,
    'common.sign.confirm_password_title': () => Bm,
    'common.sign.email_placeholder': () => jm,
    'common.sign.email_title': () => Om,
    'common.sign.forgot_password': () => Ch,
    'common.sign.forgot_password_description': () => kh,
    'common.sign.forgot_password_title': () => Eh,
    'common.sign.github_sign_in': () => mh,
    'common.sign.google_sign_in': () => dh,
    'common.sign.invite_code_invalid': () => $g,
    'common.sign.invite_code_placeholder': () => Zg,
    'common.sign.invite_code_required': () => Qg,
    'common.sign.invite_code_title': () => Xg,
    'common.sign.name_placeholder': () => Xm,
    'common.sign.name_title': () => qm,
    'common.sign.new_password_placeholder': () => $h,
    'common.sign.new_password_title': () => Xh,
    'common.sign.no_account': () => $m,
    'common.sign.no_methods_description': () => bh,
    'common.sign.no_methods_title': () => _h,
    'common.sign.or': () => ah,
    'common.sign.password_mismatch': () => Wm,
    'common.sign.password_placeholder': () => Lm,
    'common.sign.password_reset_unavailable_description': () => bg,
    'common.sign.password_reset_unavailable_title': () => _g,
    'common.sign.password_title': () => Pm,
    'common.sign.redeem_description': () => a_,
    'common.sign.redeem_submit': () => c_,
    'common.sign.redeem_title': () => n_,
    'common.sign.resend_verification': () => Wg,
    'common.sign.resend_verification_countdown': () => qg,
    'common.sign.reset_link_sent_description': () => Rh,
    'common.sign.reset_link_sent_title': () => Fh,
    'common.sign.reset_password_description': () => qh,
    'common.sign.reset_password_invalid_token': () => dg,
    'common.sign.reset_password_missing_token': () => mg,
    'common.sign.reset_password_submit': () => ag,
    'common.sign.reset_password_success': () => cg,
    'common.sign.reset_password_title': () => Wh,
    'common.sign.send_reset_link': () => Mh,
    'common.sign.sign_in_description': () => ym,
    'common.sign.sign_in_title': () => gm,
    'common.sign.sign_out_title': () => ch,
    'common.sign.sign_up_description': () => Tm,
    'common.sign.sign_up_title': () => Sm,
    'common.sign.verify_email_continue': () => kg,
    'common.sign.verify_email_email_required': () => Vg,
    'common.sign.verify_email_not_verified_yet': () => Fg,
    'common.sign.verify_email_page_description': () => Eg,
    'common.sign.verify_email_page_title': () => Cg,
    'common.sign.verify_email_send_failed': () => Rg,
    'common.sign.verify_email_tip': () => Mg,
    'common.support.attachments_label': () => Xy,
    'common.support.cancel': () => Vy,
    'common.support.content_label': () => Cy,
    'common.support.content_placeholder': () => Ey,
    'common.support.description': () => cy,
    'common.support.open_label': () => ny,
    'common.support.required': () => Fy,
    'common.support.sign_in': () => my,
    'common.support.sign_in_notice': () => dy,
    'common.support.submit': () => Wy,
    'common.support.submitting': () => qy,
    'common.support.success': () => Ry,
    'common.support.title': () => ay,
    'common.support.title_label': () => _y,
    'common.support.title_placeholder': () => by,
    'common.support.track_hint_link': () => My,
    'common.support.track_hint_prefix': () => ky,
    'common.systems.admin': () => q_,
    'common.systems.home': () => $_,
    'common.systems.label': () => W_,
    'common.systems.settings': () => X_,
    'common.table.next': () => _v,
    'common.table.no_data': () => av,
    'common.table.page_info': () => dv,
    'common.table.previous': () => mv,
    'common.table.refresh': () => bv,
    'common.table.total': () => cv,
    'landing.blog.description': () => l3,
    'landing.blog.title': () => o3,
    'landing.blog.view_all': () => f3,
    'landing.chips.apikeys': () => o1,
    'landing.chips.auth': () => z$,
    'landing.chips.cms': () => r1,
    'landing.chips.credits': () => J$,
    'landing.chips.i18n': () => e1,
    'landing.chips.payment': () => H$,
    'landing.chips.rbac': () => Z$,
    'landing.chips.subscription': () => G$,
    'landing.cta.button': () => o4,
    'landing.cta.headline': () => e4,
    'landing.cta.subheadline': () => r4,
    'landing.faq.customize.answer': () => G2,
    'landing.faq.customize.question': () => H2,
    'landing.faq.database.answer': () => z2,
    'landing.faq.database.question': () => I2,
    'landing.faq.description': () => x2,
    'landing.faq.license.answer': () => Z2,
    'landing.faq.license.question': () => J2,
    'landing.faq.payment.answer': () => N2,
    'landing.faq.payment.question': () => A2,
    'landing.faq.stack.answer': () => D2,
    'landing.faq.stack.question': () => w2,
    'landing.faq.title': () => v2,
    'landing.features.auth.description': () => v1,
    'landing.features.auth.title': () => h1,
    'landing.features.cms.description': () => H1,
    'landing.features.cms.title': () => z1,
    'landing.features.credits.description': () => J1,
    'landing.features.credits.title': () => G1,
    'landing.features.description': () => f1,
    'landing.features.i18n.description': () => I1,
    'landing.features.i18n.title': () => N1,
    'landing.features.payment.description': () => w1,
    'landing.features.payment.title': () => x1,
    'landing.features.rbac.description': () => A1,
    'landing.features.rbac.title': () => D1,
    'landing.features.title': () => l1,
    'landing.footer.admin': () => N4,
    'landing.footer.blog': () => h3,
    'landing.footer.docs': () => I4,
    'landing.footer.feature': () => f4,
    'landing.footer.github': () => z4,
    'landing.footer.legal': () => x4,
    'landing.footer.privacy': () => w4,
    'landing.footer.product': () => h4,
    'landing.footer.resources': () => v4,
    'landing.footer.settings': () => A4,
    'landing.footer.tagline': () => l4,
    'landing.footer.terms': () => D4,
    'landing.hero.cta': () => N$,
    'landing.hero.headline': () => D$,
    'landing.hero.secondary': () => I$,
    'landing.hero.subheadline': () => A$,
    'landing.nav.blog': () => r3,
    'landing.nav.features': () => x$,
    'landing.nav.pricing': () => w$,
    'landing.pricing.best_value': () => h0,
    'landing.pricing.buy_lifetime': () => v0,
    'landing.pricing.description': () => e0,
    'landing.pricing.enterprise': () => N0,
    'landing.pricing.enterprise_desc': () => I0,
    'landing.pricing.feature_1_project': () => z0,
    'landing.pricing.feature_50k_credits': () => Z0,
    'landing.pricing.feature_5k_credits': () => H0,
    'landing.pricing.feature_api_access': () => r2,
    'landing.pricing.feature_custom_integrations': () => h2,
    'landing.pricing.feature_dedicated_support': () => f2,
    'landing.pricing.feature_email_support': () => G0,
    'landing.pricing.feature_everything_pro': () => o2,
    'landing.pricing.feature_priority_support': () => e2,
    'landing.pricing.feature_unlimited_credits': () => l2,
    'landing.pricing.feature_unlimited_projects': () => J0,
    'landing.pricing.lifetime': () => l0,
    'landing.pricing.monthly': () => r0,
    'landing.pricing.popular': () => f0,
    'landing.pricing.pro': () => D0,
    'landing.pricing.pro_desc': () => A0,
    'landing.pricing.starter': () => x0,
    'landing.pricing.starter_desc': () => w0,
    'landing.pricing.title': () => Z1,
    'landing.pricing.yearly': () => o0,
    'settings.apikeys.actions_col': () => PE,
    'settings.apikeys.cancel': () => tE,
    'settings.apikeys.copied': () => pE,
    'settings.apikeys.create': () => iE,
    'settings.apikeys.create_description': () => KT,
    'settings.apikeys.create_key': () => BT,
    'settings.apikeys.create_title': () => UT,
    'settings.apikeys.created': () => uE,
    'settings.apikeys.creating': () => sE,
    'settings.apikeys.deleted': () => yE,
    'settings.apikeys.description': () => jT,
    'settings.apikeys.failed': () => SE,
    'settings.apikeys.key_col': () => jE,
    'settings.apikeys.key_copied': () => gE,
    'settings.apikeys.key_name': () => YT,
    'settings.apikeys.key_name_placeholder': () => QT,
    'settings.apikeys.name_col': () => OE,
    'settings.apikeys.no_keys': () => TE,
    'settings.apikeys.title': () => OT,
    'settings.apikeys.your_keys': () => PT,
    'settings.apikeys.your_keys_description': () => LT,
    'settings.billing.actions_col': () => EC,
    'settings.billing.adjust': () => cS,
    'settings.billing.amount': () => aw,
    'settings.billing.cancel': () => $S,
    'settings.billing.cancel_back': () => dC,
    'settings.billing.cancel_confirm': () => cC,
    'settings.billing.cancel_description': () => aC,
    'settings.billing.cancel_failed': () => bC,
    'settings.billing.cancel_success': () => _C,
    'settings.billing.cancel_title': () => nC,
    'settings.billing.canceled_at': () => VS,
    'settings.billing.canceled_end_at': () => WS,
    'settings.billing.canceled_reason': () => qS,
    'settings.billing.canceling': () => mC,
    'settings.billing.close': () => CC,
    'settings.billing.credits': () => Vx,
    'settings.billing.credits_description': () => Wx,
    'settings.billing.current_period': () => CS,
    'settings.billing.date': () => dw,
    'settings.billing.description': () => Rx,
    'settings.billing.end_time': () => ES,
    'settings.billing.ends_on': () => MS,
    'settings.billing.interval': () => _S,
    'settings.billing.no_payments': () => $C,
    'settings.billing.no_subscription': () => nS,
    'settings.billing.order_no': () => nw,
    'settings.billing.payments': () => XC,
    'settings.billing.period_end': () => RS,
    'settings.billing.period_start': () => FS,
    'settings.billing.plan': () => dS,
    'settings.billing.provider': () => cw,
    'settings.billing.renews_on': () => kS,
    'settings.billing.status': () => mS,
    'settings.billing.subscribe': () => aS,
    'settings.billing.subscription': () => qx,
    'settings.billing.subscription_details': () => $x,
    'settings.billing.subscription_no': () => bS,
    'settings.billing.subscriptions': () => Xx,
    'settings.billing.tab_active': () => MC,
    'settings.billing.tab_all': () => kC,
    'settings.billing.tab_canceled': () => qC,
    'settings.billing.tab_expired': () => VC,
    'settings.billing.tab_paused': () => RC,
    'settings.billing.tab_pending_cancel': () => WC,
    'settings.billing.tab_trialing': () => FC,
    'settings.billing.title': () => Fx,
    'settings.billing.view': () => XS,
    'settings.credits.balance': () => aT,
    'settings.credits.credits': () => pT,
    'settings.credits.date': () => TT,
    'settings.credits.description': () => iT,
    'settings.credits.description_col': () => yT,
    'settings.credits.expires_at': () => ST,
    'settings.credits.no_records': () => sT,
    'settings.credits.purchase': () => oT,
    'settings.credits.remaining': () => gT,
    'settings.credits.scene': () => uT,
    'settings.credits.tab_all': () => yee,
    'settings.credits.tab_consume': () => Tee,
    'settings.credits.tab_grant': () => See,
    'settings.credits.title': () => rT,
    'settings.credits.transaction_no': () => cT,
    'settings.credits.type': () => lT,
    'settings.nav.apikeys': () => Cb,
    'settings.nav.billing': () => mb,
    'settings.nav.credits': () => bb,
    'settings.nav.overview': () => cb,
    'settings.nav.payments': () => _b,
    'settings.nav.profile': () => db,
    'settings.nav.tickets': () => Eb,
    'settings.overview.apikeys_description': () => Wb,
    'settings.overview.getting_started': () => qb,
    'settings.overview.getting_started_description': () => Xb,
    'settings.overview.plan': () => kb,
    'settings.overview.plan_description': () => Fb,
    'settings.overview.plan_free': () => Mb,
    'settings.overview.usage': () => Rb,
    'settings.overview.usage_description': () => Vb,
    'settings.payments.amount': () => Vw,
    'settings.payments.date': () => $w,
    'settings.payments.description': () => _w,
    'settings.payments.invoice': () => nT,
    'settings.payments.no_payments': () => Mw,
    'settings.payments.order_no': () => Fw,
    'settings.payments.product': () => Rw,
    'settings.payments.provider': () => Xw,
    'settings.payments.status': () => Ww,
    'settings.payments.tab_all': () => bw,
    'settings.payments.tab_one_time': () => Cw,
    'settings.payments.tab_renew': () => kw,
    'settings.payments.tab_subscription': () => Ew,
    'settings.payments.title': () => mw,
    'settings.payments.type': () => qw,
    'settings.placeholder': () => ab,
    'settings.profile.avatar': () => mx,
    'settings.profile.avatar_hint': () => _x,
    'settings.profile.description': () => nx,
    'settings.profile.email': () => dx,
    'settings.profile.loading': () => Mx,
    'settings.profile.name': () => cx,
    'settings.profile.profile': () => ax,
    'settings.profile.save': () => bx,
    'settings.profile.save_failed': () => kx,
    'settings.profile.saved': () => Ex,
    'settings.profile.saving': () => Cx,
    'settings.profile.title': () => $b,
    'settings.tickets.actions_col': () => yD,
    'settings.tickets.attachments_label': () => yO,
    'settings.tickets.cancel': () => uO,
    'settings.tickets.close_success': () => BD,
    'settings.tickets.close_ticket': () => UD,
    'settings.tickets.closed_notice': () => KD,
    'settings.tickets.content_label': () => iD,
    'settings.tickets.content_placeholder': () => sD,
    'settings.tickets.create_button': () => UE,
    'settings.tickets.create_description': () => YE,
    'settings.tickets.create_submit': () => pO,
    'settings.tickets.create_success': () => LD,
    'settings.tickets.create_title': () => KE,
    'settings.tickets.created_col': () => TO,
    'settings.tickets.creating': () => gO,
    'settings.tickets.description': () => BE,
    'settings.tickets.empty': () => jD,
    'settings.tickets.latest_reply_col': () => SO,
    'settings.tickets.reply_placeholder': () => YD,
    'settings.tickets.reply_submit': () => QD,
    'settings.tickets.replying': () => tO,
    'settings.tickets.required': () => PD,
    'settings.tickets.status_closed': () => OD,
    'settings.tickets.status_col': () => pD,
    'settings.tickets.status_open': () => SD,
    'settings.tickets.status_replied': () => TD,
    'settings.tickets.support_team': () => iO,
    'settings.tickets.title': () => LE,
    'settings.tickets.title_col': () => uD,
    'settings.tickets.title_label': () => QE,
    'settings.tickets.title_placeholder': () => tD,
    'settings.tickets.updated_col': () => gD,
    'settings.tickets.you': () => sO,
    'settings.title': () => $y,
    'settings.welcome': () => nb,
  }),
  _3 = z(`/pricing`)({
    loader: () => {
      let e = s();
      return {
        title: Z1({}, { locale: e }),
        description: e0({}, { locale: e }),
      };
    },
    head: ({ loaderData: e }) => ({
      meta: e
        ? [{ title: e.title }, { name: `description`, content: e.description }]
        : [],
    }),
    component: B(
      () =>
        K(
          () => import(`./pricing-DnVhTeXq.js`),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
        ),
      `component`
    ),
  }),
  v3 = z(`/settings`)({
    component: B(
      () =>
        K(
          () => import(`./route-Ddn8fdnd.js`),
          __vite__mapDeps([
            14, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 17, 18, 19, 20, 21, 22, 10, 11,
            23, 24, 12, 25, 26, 27, 28, 29, 30,
          ])
        ),
      `component`
    ),
  }),
  y3 = z(`/admin`)({
    component: B(
      () =>
        K(
          () => import(`./route-0uDlbeLg.js`),
          __vite__mapDeps([
            31, 1, 16, 17, 2, 3, 5, 6, 7, 18, 19, 20, 21, 15, 22, 10, 11, 8, 23,
            12, 32,
          ])
        ),
      `component`
    ),
  }),
  b3 = z(`/(pages)`)({
    component: B(
      () =>
        K(
          () => import(`./route-8M009FaU.js`),
          __vite__mapDeps([33, 1, 10, 34, 3])
        ),
      `component`
    ),
  }),
  x3 = z(`/`)({
    loader: () => ({ locale: s() }),
    head: ({ loaderData: e }) => (
      e?.locale,
      {
        meta: [
          {
            name: `description`,
            content: `Image to ASCII — free online converter. Upload a photo or generate one with AI, then turn it into ASCII art in your browser. Export as PNG or text.`,
          },
        ],
        links: [
          ...r.map((e) => ({
            rel: `alternate`,
            hrefLang: e,
            href: `/${e === `en` ? `` : e}`,
          })),
          { rel: `alternate`, hrefLang: `x-default`, href: `/` },
        ],
      }
    ),
    component: B(
      () =>
        K(
          () => import(`./routes-BRBk9Wcv.js`),
          __vite__mapDeps([35, 1, 13, 10, 3])
        ),
      `component`
    ),
  }),
  S3 = ku().handler(
    os(`139369ba08645c08201ff69bd24b596cdc0f7784b8b3ffd8c6a14f47bbeac9cf`)
  ),
  C3 = ku().handler(
    os(`b19d1425e0192068330144e802eeba64d1a59e4653703cc76476349d6a195d71`)
  ),
  w3 = z(`/blog/`)({
    loader: async () => {
      let e = s();
      return { locale: e, posts: await S3({ data: { locale: e } }) };
    },
    head: ({ loaderData: e }) => {
      let t = e?.locale,
        n = (e) => o(`${Yu.app_url}/blog`, { locale: e }).href;
      return {
        meta: [
          { title: `${H4({}, { locale: t })} | ${Yu.app_name}` },
          { name: `description`, content: G4({}, { locale: t }) },
        ],
        links: [
          { rel: `canonical`, href: n(t ?? `en`) },
          ...r.map((e) => ({ rel: `alternate`, hrefLang: e, href: n(e) })),
        ],
      };
    },
    component: B(
      () =>
        K(
          () => import(`./blog-DGPSG1OA.js`),
          __vite__mapDeps([36, 1, 10, 37, 13, 3])
        ),
      `component`
    ),
  }),
  T3 = z(`/blog/$slug`)({
    loader: async ({ params: e }) => {
      let t = s(),
        n = await C3({ data: { slug: e.slug, locale: t } });
      if (!n) throw st();
      return { locale: t, post: n };
    },
    head: ({ loaderData: e }) => {
      if (!e) return {};
      let { locale: t, post: n } = e,
        r = o(`${Yu.app_url}/blog/${n.slug}`, { locale: t }).href;
      return {
        meta: [
          { title: `${n.title} | ${Yu.app_name}` },
          { name: `description`, content: n.description },
        ],
        links: [{ rel: `canonical`, href: r }],
      };
    },
    component: B(
      () =>
        K(
          () => import(`./_slug-tYLDmmdU.js`),
          __vite__mapDeps([38, 1, 10, 39, 3, 34, 37, 13])
        ),
      `component`
    ),
  }),
  E3 = z(`/(auth)/verify-email`)({
    component: B(
      () =>
        K(
          () => import(`./verify-email-Bal7wrZ_.js`),
          __vite__mapDeps([40, 1, 2, 3, 10, 41])
        ),
      `component`
    ),
  }),
  D3 = z(`/(auth)/sign-up`)({
    component: B(
      () =>
        K(
          () => import(`./sign-up-DviKl2yv.js`),
          __vite__mapDeps([
            42, 1, 2, 3, 43, 10, 44, 15, 6, 7, 45, 29, 23, 20, 41,
          ])
        ),
      `component`
    ),
  }),
  O3 = z(`/(auth)/sign-in`)({
    component: B(
      () =>
        K(
          () => import(`./sign-in-DIzG4-7L.js`),
          __vite__mapDeps([
            46, 1, 2, 3, 15, 6, 7, 43, 10, 44, 45, 29, 23, 20, 41,
          ])
        ),
      `component`
    ),
  }),
  k3 = z(`/(auth)/reset-password`)({
    component: B(
      () =>
        K(
          () => import(`./reset-password-ByGdHayr.js`),
          __vite__mapDeps([
            47, 1, 2, 3, 43, 10, 44, 15, 6, 7, 45, 29, 23, 20, 41,
          ])
        ),
      `component`
    ),
  }),
  A3 = z(`/(auth)/redeem-invite`)({
    component: B(
      () =>
        K(
          () => import(`./redeem-invite-C6l6kGGi.js`),
          __vite__mapDeps([48, 1, 2, 3, 15, 6, 7, 10, 41, 45, 29, 23, 20])
        ),
      `component`
    ),
  }),
  j3 = z(`/(auth)/forgot-password`)({
    component: B(
      () =>
        K(
          () => import(`./forgot-password-CKgyMRDR.js`),
          __vite__mapDeps([
            49, 1, 2, 3, 43, 10, 44, 15, 6, 7, 45, 29, 23, 20, 41,
          ])
        ),
      `component`
    ),
  }),
  M3 = z(`/settings/`)({
    component: B(
      () =>
        K(
          () => import(`./settings-DliWzQAJ.js`),
          __vite__mapDeps([50, 1, 12, 25, 41, 3])
        ),
      `component`
    ),
  }),
  N3 = z(`/settings/tickets`)({
    component: B(
      () =>
        K(
          () => import(`./tickets-B6VgsDu_.js`),
          __vite__mapDeps([
            51, 1, 17, 2, 3, 5, 6, 7, 4, 8, 15, 52, 21, 28, 53, 54, 26, 27, 55,
            22, 41, 29, 30, 56,
          ])
        ),
      `component`
    ),
  }),
  P3 = z(`/settings/profile`)({
    component: B(
      () =>
        K(
          () => import(`./profile-2MXqXzy6.js`),
          __vite__mapDeps([
            57, 1, 2, 3, 15, 6, 7, 43, 9, 26, 27, 28, 8, 44, 45, 29, 23, 20, 41,
          ])
        ),
      `component`
    ),
  }),
  F3 = z(`/settings/payments`)({
    component: B(
      () =>
        K(
          () => import(`./payments-CwuzVYQR.js`),
          __vite__mapDeps([58, 1, 52, 2, 3, 15, 6, 7, 21, 28, 55, 22, 41, 56])
        ),
      `component`
    ),
  }),
  I3 = z(`/settings/credits`)({
    component: B(
      () =>
        K(
          () => import(`./credits-CcDEUzh8.js`),
          __vite__mapDeps([
            59, 1, 2, 3, 10, 52, 15, 6, 7, 21, 28, 24, 55, 22, 41, 56,
          ])
        ),
      `component`
    ),
  }),
  L3 = z(`/settings/billing`)({
    component: B(
      () =>
        K(
          () => import(`./billing-CH5eW5AK.js`),
          __vite__mapDeps([
            60, 1, 2, 3, 18, 5, 6, 7, 19, 20, 21, 4, 8, 9, 10, 52, 15, 28, 61,
            62, 63, 55, 22, 41, 56,
          ])
        ),
      `component`
    ),
  }),
  R3 = z(`/settings/apikeys`)({
    component: B(
      () =>
        K(
          () => import(`./apikeys-B0P5bjVK.js`),
          __vite__mapDeps([
            64, 1, 2, 3, 4, 5, 6, 7, 8, 15, 9, 52, 21, 28, 54, 65, 41, 29,
          ])
        ),
      `component`
    ),
  }),
  z3 = z(`/admin/`)({
    component: B(
      () =>
        K(
          () => import(`./admin-C6yHjWSL.js`),
          __vite__mapDeps([66, 1, 32, 41, 3])
        ),
      `component`
    ),
  }),
  B3 = z(`/admin/users`)({
    component: B(
      () =>
        K(
          () => import(`./users-B-zE6I4S.js`),
          __vite__mapDeps([
            67, 1, 17, 2, 3, 5, 6, 7, 68, 15, 69, 11, 18, 19, 20, 21, 4, 8, 9,
            52, 28, 24, 62, 32, 41,
          ])
        ),
      `component`
    ),
  }),
  V3 = z(`/admin/tickets`)({
    component: B(
      () =>
        K(
          () => import(`./tickets-Dj9XY29X.js`),
          __vite__mapDeps([
            70, 1, 17, 2, 3, 5, 6, 7, 4, 8, 52, 15, 21, 28, 53, 26, 27, 55, 22,
            41, 30, 56,
          ])
        ),
      `component`
    ),
  }),
  H3 = z(`/admin/subscriptions`)({
    component: B(
      () =>
        K(
          () => import(`./subscriptions-BSvjfkjJ.js`),
          __vite__mapDeps([71, 1, 52, 2, 3, 15, 6, 7, 21, 28, 55, 22, 41, 56])
        ),
      `component`
    ),
  }),
  U3 = z(`/admin/settings`)({
    component: B(
      () =>
        K(
          () => import(`./settings-Dy2kQtZM.js`),
          __vite__mapDeps([
            72, 1, 2, 3, 5, 6, 7, 73, 19, 15, 11, 4, 8, 69, 9, 61, 54, 41, 29,
            56,
          ])
        ),
      `component`
    ),
  });
Object.freeze({ status: `aborted` });
function Z(e, t, n) {
  function r(n, r) {
    if (
      (n._zod ||
        Object.defineProperty(n, '_zod', {
          value: { def: r, constr: o, traits: new Set() },
          enumerable: !1,
        }),
      n._zod.traits.has(e))
    )
      return;
    (n._zod.traits.add(e), t(n, r));
    let i = o.prototype,
      a = Object.keys(i);
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      t in n || (n[t] = i[t].bind(n));
    }
  }
  let i = n?.Parent ?? Object;
  class a extends i {}
  Object.defineProperty(a, 'name', { value: e });
  function o(e) {
    var t;
    let i = n?.Parent ? new a() : this;
    (r(i, e), (t = i._zod).deferred ?? (t.deferred = []));
    for (let e of i._zod.deferred) e();
    return i;
  }
  return (
    Object.defineProperty(o, 'init', { value: r }),
    Object.defineProperty(o, Symbol.hasInstance, {
      value: (t) =>
        n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e),
    }),
    Object.defineProperty(o, 'name', { value: e }),
    o
  );
}
var W3 = class extends Error {
    constructor() {
      super(
        `Encountered Promise during synchronous parse. Use .parseAsync() instead.`
      );
    }
  },
  G3 = class extends Error {
    constructor(e) {
      (super(`Encountered unidirectional transform during encode: ${e}`),
        (this.name = `ZodEncodeError`));
    }
  },
  K3 = {};
function q3(e) {
  return (e && Object.assign(K3, e), K3);
}
function J3(e) {
  let t = Object.values(e).filter((e) => typeof e == `number`);
  return Object.entries(e)
    .filter(([e, n]) => t.indexOf(+e) === -1)
    .map(([e, t]) => t);
}
function Y3(e, t) {
  return typeof t == `bigint` ? t.toString() : t;
}
function X3(e) {
  return {
    get value() {
      {
        let t = e();
        return (Object.defineProperty(this, 'value', { value: t }), t);
      }
      throw Error(`cached value already set`);
    },
  };
}
function Z3(e) {
  return e == null;
}
function Q3(e) {
  let t = +!!e.startsWith(`^`),
    n = e.endsWith(`$`) ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function $3(e, t) {
  let n = (e.toString().split(`.`)[1] || ``).length,
    r = t.toString(),
    i = (r.split(`.`)[1] || ``).length;
  if (i === 0 && /\d?e-\d?/.test(r)) {
    let e = r.match(/\d?e-(\d?)/);
    e?.[1] && (i = Number.parseInt(e[1]));
  }
  let a = n > i ? n : i;
  return (
    (Number.parseInt(e.toFixed(a).replace(`.`, ``)) %
      Number.parseInt(t.toFixed(a).replace(`.`, ``))) /
    10 ** a
  );
}
var e6 = Symbol(`evaluating`);
function Q(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== e6) return (r === void 0 && ((r = e6), (r = n())), r);
    },
    set(n) {
      Object.defineProperty(e, t, { value: n });
    },
    configurable: !0,
  });
}
function t6(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function n6(...e) {
  let t = {};
  for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
  return Object.defineProperties({}, t);
}
function r6(e) {
  return JSON.stringify(e);
}
function i6(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ``)
    .replace(/[\s_-]+/g, `-`)
    .replace(/^-+|-+$/g, ``);
}
var a6 = `captureStackTrace` in Error ? Error.captureStackTrace : (...e) => {};
function o6(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
var s6 = X3(() => {
  if (typeof navigator < `u` && navigator?.userAgent?.includes(`Cloudflare`))
    return !1;
  try {
    return (Function(``), !0);
  } catch {
    return !1;
  }
});
function c6(e) {
  if (o6(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0 || typeof t != `function`) return !0;
  let n = t.prototype;
  return !(
    o6(n) === !1 ||
    Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`) === !1
  );
}
function l6(e) {
  return c6(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
var u6 = new Set([`string`, `number`, `symbol`]);
function d6(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function f6(e, t, n) {
  let r = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function $(e) {
  let t = e;
  if (!t) return {};
  if (typeof t == `string`) return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw Error('Cannot specify both `message` and `error` params');
    t.error = t.message;
  }
  return (
    delete t.message,
    typeof t.error == `string` ? { ...t, error: () => t.error } : t
  );
}
function p6(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === `optional` && e[t]._zod.optout === `optional`
  );
}
var m6 = {
  safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
};
function h6(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(
      `.pick() cannot be used on object schemas containing refinements`
    );
  return f6(
    e,
    n6(e._zod.def, {
      get shape() {
        let e = {};
        for (let r in t) {
          if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
          t[r] && (e[r] = n.shape[r]);
        }
        return (t6(this, `shape`, e), e);
      },
      checks: [],
    })
  );
}
function g6(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(
      `.omit() cannot be used on object schemas containing refinements`
    );
  return f6(
    e,
    n6(e._zod.def, {
      get shape() {
        let r = { ...e._zod.def.shape };
        for (let e in t) {
          if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
          t[e] && delete r[e];
        }
        return (t6(this, `shape`, r), r);
      },
      checks: [],
    })
  );
}
function _6(e, t) {
  if (!c6(t)) throw Error(`Invalid input to extend: expected a plain object`);
  let n = e._zod.def.checks;
  if (n && n.length > 0) {
    let n = e._zod.def.shape;
    for (let e in t)
      if (Object.getOwnPropertyDescriptor(n, e) !== void 0)
        throw Error(
          'Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.'
        );
  }
  return f6(
    e,
    n6(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (t6(this, `shape`, n), n);
      },
    })
  );
}
function v6(e, t) {
  if (!c6(t))
    throw Error(`Invalid input to safeExtend: expected a plain object`);
  return f6(
    e,
    n6(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (t6(this, `shape`, n), n);
      },
    })
  );
}
function y6(e, t) {
  return f6(
    e,
    n6(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t._zod.def.shape };
        return (t6(this, `shape`, n), n);
      },
      get catchall() {
        return t._zod.def.catchall;
      },
      checks: [],
    })
  );
}
function b6(e, t, n) {
  let r = t._zod.def.checks;
  if (r && r.length > 0)
    throw Error(
      `.partial() cannot be used on object schemas containing refinements`
    );
  return f6(
    t,
    n6(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
            n[t] &&
              (i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t]);
          }
        else
          for (let t in r)
            i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t];
        return (t6(this, `shape`, i), i);
      },
      checks: [],
    })
  );
}
function x6(e, t, n) {
  return f6(
    t,
    n6(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
            n[t] && (i[t] = new e({ type: `nonoptional`, innerType: r[t] }));
          }
        else
          for (let t in r)
            i[t] = new e({ type: `nonoptional`, innerType: r[t] });
        return (t6(this, `shape`, i), i);
      },
    })
  );
}
function S6(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0) return !0;
  return !1;
}
function C6(e, t) {
  return t.map((t) => {
    var n;
    return ((n = t).path ?? (n.path = []), t.path.unshift(e), t);
  });
}
function w6(e) {
  return typeof e == `string` ? e : e?.message;
}
function T6(e, t, n) {
  let r = { ...e, path: e.path ?? [] };
  return (
    e.message ||
      (r.message =
        w6(e.inst?._zod.def?.error?.(e)) ??
        w6(t?.error?.(e)) ??
        w6(n.customError?.(e)) ??
        w6(n.localeError?.(e)) ??
        `Invalid input`),
    delete r.inst,
    delete r.continue,
    t?.reportInput || delete r.input,
    r
  );
}
function E6(e) {
  return Array.isArray(e)
    ? `array`
    : typeof e == `string`
      ? `string`
      : `unknown`;
}
function D6(...e) {
  let [t, n, r] = e;
  return typeof t == `string`
    ? { message: t, code: `custom`, input: n, inst: r }
    : { ...t };
}
var O6 = (e, t) => {
    ((e.name = `$ZodError`),
      Object.defineProperty(e, '_zod', { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, 'issues', { value: t, enumerable: !1 }),
      (e.message = JSON.stringify(t, Y3, 2)),
      Object.defineProperty(e, 'toString', {
        value: () => e.message,
        enumerable: !1,
      }));
  },
  k6 = Z(`$ZodError`, O6),
  A6 = Z(`$ZodError`, O6, { Parent: Error });
function j6(e, t = (e) => e.message) {
  let n = {},
    r = [];
  for (let i of e.issues)
    i.path.length > 0
      ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
      : r.push(t(i));
  return { formErrors: r, fieldErrors: n };
}
function M6(e, t = (e) => e.message) {
  let n = { _errors: [] },
    r = (e) => {
      for (let i of e.issues)
        if (i.code === `invalid_union` && i.errors.length)
          i.errors.map((e) => r({ issues: e }));
        else if (i.code === `invalid_key`) r({ issues: i.issues });
        else if (i.code === `invalid_element`) r({ issues: i.issues });
        else if (i.path.length === 0) n._errors.push(t(i));
        else {
          let e = n,
            r = 0;
          for (; r < i.path.length; ) {
            let n = i.path[r];
            (r === i.path.length - 1
              ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
              : (e[n] = e[n] || { _errors: [] }),
              (e = e[n]),
              r++);
          }
        }
    };
  return (r(e), n);
}
var N6 = (e) => (t, n, r, i) => {
    let a = r ? Object.assign(r, { async: !1 }) : { async: !1 },
      o = t._zod.run({ value: n, issues: [] }, a);
    if (o instanceof Promise) throw new W3();
    if (o.issues.length) {
      let t = new (i?.Err ?? e)(o.issues.map((e) => T6(e, a, q3())));
      throw (a6(t, i?.callee), t);
    }
    return o.value;
  },
  P6 = (e) => async (t, n, r, i) => {
    let a = r ? Object.assign(r, { async: !0 }) : { async: !0 },
      o = t._zod.run({ value: n, issues: [] }, a);
    if ((o instanceof Promise && (o = await o), o.issues.length)) {
      let t = new (i?.Err ?? e)(o.issues.map((e) => T6(e, a, q3())));
      throw (a6(t, i?.callee), t);
    }
    return o.value;
  },
  F6 = (e) => (t, n, r) => {
    let i = r ? { ...r, async: !1 } : { async: !1 },
      a = t._zod.run({ value: n, issues: [] }, i);
    if (a instanceof Promise) throw new W3();
    return a.issues.length
      ? {
          success: !1,
          error: new (e ?? k6)(a.issues.map((e) => T6(e, i, q3()))),
        }
      : { success: !0, data: a.value };
  },
  I6 = F6(A6),
  L6 = (e) => async (t, n, r) => {
    let i = r ? Object.assign(r, { async: !0 }) : { async: !0 },
      a = t._zod.run({ value: n, issues: [] }, i);
    return (
      a instanceof Promise && (a = await a),
      a.issues.length
        ? { success: !1, error: new e(a.issues.map((e) => T6(e, i, q3()))) }
        : { success: !0, data: a.value }
    );
  },
  R6 = L6(A6),
  z6 = (e) => (t, n, r) => {
    let i = r
      ? Object.assign(r, { direction: `backward` })
      : { direction: `backward` };
    return N6(e)(t, n, i);
  },
  B6 = (e) => (t, n, r) => N6(e)(t, n, r),
  V6 = (e) => async (t, n, r) => {
    let i = r
      ? Object.assign(r, { direction: `backward` })
      : { direction: `backward` };
    return P6(e)(t, n, i);
  },
  H6 = (e) => async (t, n, r) => P6(e)(t, n, r),
  U6 = (e) => (t, n, r) => {
    let i = r
      ? Object.assign(r, { direction: `backward` })
      : { direction: `backward` };
    return F6(e)(t, n, i);
  },
  W6 = (e) => (t, n, r) => F6(e)(t, n, r),
  G6 = (e) => async (t, n, r) => {
    let i = r
      ? Object.assign(r, { direction: `backward` })
      : { direction: `backward` };
    return L6(e)(t, n, i);
  },
  K6 = (e) => async (t, n, r) => L6(e)(t, n, r),
  q6 = /^[cC][^\s-]{8,}$/,
  J6 = /^[0-9a-z]+$/,
  Y6 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  X6 = /^[0-9a-vA-V]{20}$/,
  Z6 = /^[A-Za-z0-9]{27}$/,
  Q6 = /^[a-zA-Z0-9_-]{21}$/,
  $6 =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  e8 =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  t8 = (e) =>
    e
      ? RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  n8 =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  r8 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function i8() {
  return new RegExp(r8, `u`);
}
var a8 =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  o8 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  s8 =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  c8 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  l8 =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  u8 = /^[A-Za-z0-9_-]*$/,
  d8 = /^\+[1-9]\d{6,14}$/,
  f8 = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`,
  p8 = RegExp(`^${f8}$`);
function m8(e) {
  let t = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof e.precision == `number`
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function h8(e) {
  return RegExp(`^${m8(e)}$`);
}
function g8(e) {
  let t = m8({ precision: e.precision }),
    n = [`Z`];
  (e.local && n.push(``),
    e.offset && n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`));
  let r = `${t}(?:${n.join(`|`)})`;
  return RegExp(`^${f8}T(?:${r})$`);
}
var _8 = (e) => {
    let t = e
      ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ``}}`
      : `[\\s\\S]*`;
    return RegExp(`^${t}$`);
  },
  v8 = /^-?\d+$/,
  y8 = /^-?\d+(?:\.\d+)?$/,
  b8 = /^[^A-Z]*$/,
  x8 = /^[^a-z]*$/,
  S8 = Z(`$ZodCheck`, (e, t) => {
    var n;
    ((e._zod ??= {}),
      (e._zod.def = t),
      (n = e._zod).onattach ?? (n.onattach = []));
  }),
  C8 = { number: `number`, bigint: `bigint`, object: `date` },
  w8 = Z(`$ZodCheckLessThan`, (e, t) => {
    S8.init(e, t);
    let n = C8[typeof t.value];
    (e._zod.onattach.push((e) => {
      let n = e._zod.bag,
        r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? 1 / 0;
      t.value < r &&
        (t.inclusive ? (n.maximum = t.value) : (n.exclusiveMaximum = t.value));
    }),
      (e._zod.check = (r) => {
        (t.inclusive ? r.value <= t.value : r.value < t.value) ||
          r.issues.push({
            origin: n,
            code: `too_big`,
            maximum: typeof t.value == `object` ? t.value.getTime() : t.value,
            input: r.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  T8 = Z(`$ZodCheckGreaterThan`, (e, t) => {
    S8.init(e, t);
    let n = C8[typeof t.value];
    (e._zod.onattach.push((e) => {
      let n = e._zod.bag,
        r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -1 / 0;
      t.value > r &&
        (t.inclusive ? (n.minimum = t.value) : (n.exclusiveMinimum = t.value));
    }),
      (e._zod.check = (r) => {
        (t.inclusive ? r.value >= t.value : r.value > t.value) ||
          r.issues.push({
            origin: n,
            code: `too_small`,
            minimum: typeof t.value == `object` ? t.value.getTime() : t.value,
            input: r.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  E8 = Z(`$ZodCheckMultipleOf`, (e, t) => {
    (S8.init(e, t),
      e._zod.onattach.push((e) => {
        var n;
        (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
      }),
      (e._zod.check = (n) => {
        if (typeof n.value != typeof t.value)
          throw Error(`Cannot mix number and bigint in multiple_of check.`);
        (typeof n.value == `bigint`
          ? n.value % t.value === BigInt(0)
          : $3(n.value, t.value) === 0) ||
          n.issues.push({
            origin: typeof n.value,
            code: `not_multiple_of`,
            divisor: t.value,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  D8 = Z(`$ZodCheckNumberFormat`, (e, t) => {
    (S8.init(e, t), (t.format = t.format || `float64`));
    let n = t.format?.includes(`int`),
      r = n ? `int` : `number`,
      [i, a] = m6[t.format];
    (e._zod.onattach.push((e) => {
      let r = e._zod.bag;
      ((r.format = t.format),
        (r.minimum = i),
        (r.maximum = a),
        n && (r.pattern = v8));
    }),
      (e._zod.check = (o) => {
        let s = o.value;
        if (n) {
          if (!Number.isInteger(s)) {
            o.issues.push({
              expected: r,
              format: t.format,
              code: `invalid_type`,
              continue: !1,
              input: s,
              inst: e,
            });
            return;
          }
          if (!Number.isSafeInteger(s)) {
            s > 0
              ? o.issues.push({
                  input: s,
                  code: `too_big`,
                  maximum: 2 ** 53 - 1,
                  note: `Integers must be within the safe integer range.`,
                  inst: e,
                  origin: r,
                  inclusive: !0,
                  continue: !t.abort,
                })
              : o.issues.push({
                  input: s,
                  code: `too_small`,
                  minimum: -(2 ** 53 - 1),
                  note: `Integers must be within the safe integer range.`,
                  inst: e,
                  origin: r,
                  inclusive: !0,
                  continue: !t.abort,
                });
            return;
          }
        }
        (s < i &&
          o.issues.push({
            origin: `number`,
            input: s,
            code: `too_small`,
            minimum: i,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          }),
          s > a &&
            o.issues.push({
              origin: `number`,
              input: s,
              code: `too_big`,
              maximum: a,
              inclusive: !0,
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  O8 = Z(`$ZodCheckMaxLength`, (e, t) => {
    var n;
    (S8.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (e) => {
          let t = e.value;
          return !Z3(t) && t.length !== void 0;
        }),
      e._zod.onattach.push((e) => {
        let n = e._zod.bag.maximum ?? 1 / 0;
        t.maximum < n && (e._zod.bag.maximum = t.maximum);
      }),
      (e._zod.check = (n) => {
        let r = n.value;
        if (r.length <= t.maximum) return;
        let i = E6(r);
        n.issues.push({
          origin: i,
          code: `too_big`,
          maximum: t.maximum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  k8 = Z(`$ZodCheckMinLength`, (e, t) => {
    var n;
    (S8.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (e) => {
          let t = e.value;
          return !Z3(t) && t.length !== void 0;
        }),
      e._zod.onattach.push((e) => {
        let n = e._zod.bag.minimum ?? -1 / 0;
        t.minimum > n && (e._zod.bag.minimum = t.minimum);
      }),
      (e._zod.check = (n) => {
        let r = n.value;
        if (r.length >= t.minimum) return;
        let i = E6(r);
        n.issues.push({
          origin: i,
          code: `too_small`,
          minimum: t.minimum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  A8 = Z(`$ZodCheckLengthEquals`, (e, t) => {
    var n;
    (S8.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (e) => {
          let t = e.value;
          return !Z3(t) && t.length !== void 0;
        }),
      e._zod.onattach.push((e) => {
        let n = e._zod.bag;
        ((n.minimum = t.length), (n.maximum = t.length), (n.length = t.length));
      }),
      (e._zod.check = (n) => {
        let r = n.value,
          i = r.length;
        if (i === t.length) return;
        let a = E6(r),
          o = i > t.length;
        n.issues.push({
          origin: a,
          ...(o
            ? { code: `too_big`, maximum: t.length }
            : { code: `too_small`, minimum: t.length }),
          inclusive: !0,
          exact: !0,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  j8 = Z(`$ZodCheckStringFormat`, (e, t) => {
    var n, r;
    (S8.init(e, t),
      e._zod.onattach.push((e) => {
        let n = e._zod.bag;
        ((n.format = t.format),
          t.pattern && ((n.patterns ??= new Set()), n.patterns.add(t.pattern)));
      }),
      t.pattern
        ? ((n = e._zod).check ??
          (n.check = (n) => {
            ((t.pattern.lastIndex = 0),
              !t.pattern.test(n.value) &&
                n.issues.push({
                  origin: `string`,
                  code: `invalid_format`,
                  format: t.format,
                  input: n.value,
                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                  inst: e,
                  continue: !t.abort,
                }));
          }))
        : ((r = e._zod).check ?? (r.check = () => {})));
  }),
  M8 = Z(`$ZodCheckRegex`, (e, t) => {
    (j8.init(e, t),
      (e._zod.check = (n) => {
        ((t.pattern.lastIndex = 0),
          !t.pattern.test(n.value) &&
            n.issues.push({
              origin: `string`,
              code: `invalid_format`,
              format: `regex`,
              input: n.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  N8 = Z(`$ZodCheckLowerCase`, (e, t) => {
    ((t.pattern ??= b8), j8.init(e, t));
  }),
  P8 = Z(`$ZodCheckUpperCase`, (e, t) => {
    ((t.pattern ??= x8), j8.init(e, t));
  }),
  F8 = Z(`$ZodCheckIncludes`, (e, t) => {
    S8.init(e, t);
    let n = d6(t.includes),
      r = new RegExp(
        typeof t.position == `number` ? `^.{${t.position}}${n}` : n
      );
    ((t.pattern = r),
      e._zod.onattach.push((e) => {
        let t = e._zod.bag;
        ((t.patterns ??= new Set()), t.patterns.add(r));
      }),
      (e._zod.check = (n) => {
        n.value.includes(t.includes, t.position) ||
          n.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `includes`,
            includes: t.includes,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  I8 = Z(`$ZodCheckStartsWith`, (e, t) => {
    S8.init(e, t);
    let n = RegExp(`^${d6(t.prefix)}.*`);
    ((t.pattern ??= n),
      e._zod.onattach.push((e) => {
        let t = e._zod.bag;
        ((t.patterns ??= new Set()), t.patterns.add(n));
      }),
      (e._zod.check = (n) => {
        n.value.startsWith(t.prefix) ||
          n.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `starts_with`,
            prefix: t.prefix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  L8 = Z(`$ZodCheckEndsWith`, (e, t) => {
    S8.init(e, t);
    let n = RegExp(`.*${d6(t.suffix)}$`);
    ((t.pattern ??= n),
      e._zod.onattach.push((e) => {
        let t = e._zod.bag;
        ((t.patterns ??= new Set()), t.patterns.add(n));
      }),
      (e._zod.check = (n) => {
        n.value.endsWith(t.suffix) ||
          n.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `ends_with`,
            suffix: t.suffix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  R8 = Z(`$ZodCheckOverwrite`, (e, t) => {
    (S8.init(e, t),
      (e._zod.check = (e) => {
        e.value = t.tx(e.value);
      }));
  }),
  z8 = class {
    constructor(e = []) {
      ((this.content = []), (this.indent = 0), this && (this.args = e));
    }
    indented(e) {
      ((this.indent += 1), e(this), --this.indent);
    }
    write(e) {
      if (typeof e == `function`) {
        (e(this, { execution: `sync` }), e(this, { execution: `async` }));
        return;
      }
      let t = e
          .split(
            `
`
          )
          .filter((e) => e),
        n = Math.min(...t.map((e) => e.length - e.trimStart().length)),
        r = t
          .map((e) => e.slice(n))
          .map((e) => ` `.repeat(this.indent * 2) + e);
      for (let e of r) this.content.push(e);
    }
    compile() {
      let e = Function,
        t = this?.args,
        n = [...(this?.content ?? [``]).map((e) => `  ${e}`)];
      return new e(
        ...t,
        n.join(`
`)
      );
    }
  },
  B8 = { major: 4, minor: 3, patch: 6 },
  V8 = Z(`$ZodType`, (e, t) => {
    var n;
    ((e ??= {}),
      (e._zod.def = t),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = B8));
    let r = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has(`$ZodCheck`) && r.unshift(e);
    for (let t of r) for (let n of t._zod.onattach) n(e);
    if (r.length === 0)
      ((n = e._zod).deferred ?? (n.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      let t = (e, t, n) => {
          let r = S6(e),
            i;
          for (let a of t) {
            if (a._zod.def.when) {
              if (!a._zod.def.when(e)) continue;
            } else if (r) continue;
            let t = e.issues.length,
              o = a._zod.check(e);
            if (o instanceof Promise && n?.async === !1) throw new W3();
            if (i || o instanceof Promise)
              i = (i ?? Promise.resolve()).then(async () => {
                (await o, e.issues.length !== t && (r ||= S6(e, t)));
              });
            else {
              if (e.issues.length === t) continue;
              r ||= S6(e, t);
            }
          }
          return i ? i.then(() => e) : e;
        },
        n = (n, i, a) => {
          if (S6(n)) return ((n.aborted = !0), n);
          let o = t(i, r, a);
          if (o instanceof Promise) {
            if (a.async === !1) throw new W3();
            return o.then((t) => e._zod.parse(t, a));
          }
          return e._zod.parse(o, a);
        };
      e._zod.run = (i, a) => {
        if (a.skipChecks) return e._zod.parse(i, a);
        if (a.direction === `backward`) {
          let t = e._zod.parse(
            { value: i.value, issues: [] },
            { ...a, skipChecks: !0 }
          );
          return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
        }
        let o = e._zod.parse(i, a);
        if (o instanceof Promise) {
          if (a.async === !1) throw new W3();
          return o.then((e) => t(e, r, a));
        }
        return t(o, r, a);
      };
    }
    Q(e, `~standard`, () => ({
      validate: (t) => {
        try {
          let n = I6(e, t);
          return n.success ? { value: n.data } : { issues: n.error?.issues };
        } catch {
          return R6(e, t).then((e) =>
            e.success ? { value: e.data } : { issues: e.error?.issues }
          );
        }
      },
      vendor: `zod`,
      version: 1,
    }));
  }),
  H8 = Z(`$ZodString`, (e, t) => {
    (V8.init(e, t),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ?? _8(e._zod.bag)),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = String(n.value);
          } catch {}
        return (
          typeof n.value == `string` ||
            n.issues.push({
              expected: `string`,
              code: `invalid_type`,
              input: n.value,
              inst: e,
            }),
          n
        );
      }));
  }),
  U8 = Z(`$ZodStringFormat`, (e, t) => {
    (j8.init(e, t), H8.init(e, t));
  }),
  W8 = Z(`$ZodGUID`, (e, t) => {
    ((t.pattern ??= e8), U8.init(e, t));
  }),
  G8 = Z(`$ZodUUID`, (e, t) => {
    if (t.version) {
      let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        t.version
      ];
      if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ??= t8(e);
    } else t.pattern ??= t8();
    U8.init(e, t);
  }),
  K8 = Z(`$ZodEmail`, (e, t) => {
    ((t.pattern ??= n8), U8.init(e, t));
  }),
  q8 = Z(`$ZodURL`, (e, t) => {
    (U8.init(e, t),
      (e._zod.check = (n) => {
        try {
          let r = n.value.trim(),
            i = new URL(r);
          (t.hostname &&
            ((t.hostname.lastIndex = 0),
            t.hostname.test(i.hostname) ||
              n.issues.push({
                code: `invalid_format`,
                format: `url`,
                note: `Invalid hostname`,
                pattern: t.hostname.source,
                input: n.value,
                inst: e,
                continue: !t.abort,
              })),
            t.protocol &&
              ((t.protocol.lastIndex = 0),
              t.protocol.test(
                i.protocol.endsWith(`:`) ? i.protocol.slice(0, -1) : i.protocol
              ) ||
                n.issues.push({
                  code: `invalid_format`,
                  format: `url`,
                  note: `Invalid protocol`,
                  pattern: t.protocol.source,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                })),
            t.normalize ? (n.value = i.href) : (n.value = r));
          return;
        } catch {
          n.issues.push({
            code: `invalid_format`,
            format: `url`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  J8 = Z(`$ZodEmoji`, (e, t) => {
    ((t.pattern ??= i8()), U8.init(e, t));
  }),
  Y8 = Z(`$ZodNanoID`, (e, t) => {
    ((t.pattern ??= Q6), U8.init(e, t));
  }),
  X8 = Z(`$ZodCUID`, (e, t) => {
    ((t.pattern ??= q6), U8.init(e, t));
  }),
  Z8 = Z(`$ZodCUID2`, (e, t) => {
    ((t.pattern ??= J6), U8.init(e, t));
  }),
  Q8 = Z(`$ZodULID`, (e, t) => {
    ((t.pattern ??= Y6), U8.init(e, t));
  }),
  $8 = Z(`$ZodXID`, (e, t) => {
    ((t.pattern ??= X6), U8.init(e, t));
  }),
  e5 = Z(`$ZodKSUID`, (e, t) => {
    ((t.pattern ??= Z6), U8.init(e, t));
  }),
  t5 = Z(`$ZodISODateTime`, (e, t) => {
    ((t.pattern ??= g8(t)), U8.init(e, t));
  }),
  n5 = Z(`$ZodISODate`, (e, t) => {
    ((t.pattern ??= p8), U8.init(e, t));
  }),
  r5 = Z(`$ZodISOTime`, (e, t) => {
    ((t.pattern ??= h8(t)), U8.init(e, t));
  }),
  i5 = Z(`$ZodISODuration`, (e, t) => {
    ((t.pattern ??= $6), U8.init(e, t));
  }),
  a5 = Z(`$ZodIPv4`, (e, t) => {
    ((t.pattern ??= a8), U8.init(e, t), (e._zod.bag.format = `ipv4`));
  }),
  o5 = Z(`$ZodIPv6`, (e, t) => {
    ((t.pattern ??= o8),
      U8.init(e, t),
      (e._zod.bag.format = `ipv6`),
      (e._zod.check = (n) => {
        try {
          new URL(`http://[${n.value}]`);
        } catch {
          n.issues.push({
            code: `invalid_format`,
            format: `ipv6`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  s5 = Z(`$ZodCIDRv4`, (e, t) => {
    ((t.pattern ??= s8), U8.init(e, t));
  }),
  c5 = Z(`$ZodCIDRv6`, (e, t) => {
    ((t.pattern ??= c8),
      U8.init(e, t),
      (e._zod.check = (n) => {
        let r = n.value.split(`/`);
        try {
          if (r.length !== 2) throw Error();
          let [e, t] = r;
          if (!t) throw Error();
          let n = Number(t);
          if (`${n}` !== t || n < 0 || n > 128) throw Error();
          new URL(`http://[${e}]`);
        } catch {
          n.issues.push({
            code: `invalid_format`,
            format: `cidrv6`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  });
function l5(e) {
  if (e === ``) return !0;
  if (e.length % 4 != 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var u5 = Z(`$ZodBase64`, (e, t) => {
  ((t.pattern ??= l8),
    U8.init(e, t),
    (e._zod.bag.contentEncoding = `base64`),
    (e._zod.check = (n) => {
      l5(n.value) ||
        n.issues.push({
          code: `invalid_format`,
          format: `base64`,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
    }));
});
function d5(e) {
  if (!u8.test(e)) return !1;
  let t = e.replace(/[-_]/g, (e) => (e === `-` ? `+` : `/`));
  return l5(t.padEnd(Math.ceil(t.length / 4) * 4, `=`));
}
var f5 = Z(`$ZodBase64URL`, (e, t) => {
    ((t.pattern ??= u8),
      U8.init(e, t),
      (e._zod.bag.contentEncoding = `base64url`),
      (e._zod.check = (n) => {
        d5(n.value) ||
          n.issues.push({
            code: `invalid_format`,
            format: `base64url`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  p5 = Z(`$ZodE164`, (e, t) => {
    ((t.pattern ??= d8), U8.init(e, t));
  });
function m5(e, t = null) {
  try {
    let n = e.split(`.`);
    if (n.length !== 3) return !1;
    let [r] = n;
    if (!r) return !1;
    let i = JSON.parse(atob(r));
    return !(
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && (!(`alg` in i) || i.alg !== t))
    );
  } catch {
    return !1;
  }
}
var h5 = Z(`$ZodJWT`, (e, t) => {
    (U8.init(e, t),
      (e._zod.check = (n) => {
        m5(n.value, t.alg) ||
          n.issues.push({
            code: `invalid_format`,
            format: `jwt`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  g5 = Z(`$ZodNumber`, (e, t) => {
    (V8.init(e, t),
      (e._zod.pattern = e._zod.bag.pattern ?? y8),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = Number(n.value);
          } catch {}
        let i = n.value;
        if (typeof i == `number` && !Number.isNaN(i) && Number.isFinite(i))
          return n;
        let a =
          typeof i == `number`
            ? Number.isNaN(i)
              ? `NaN`
              : Number.isFinite(i)
                ? void 0
                : `Infinity`
            : void 0;
        return (
          n.issues.push({
            expected: `number`,
            code: `invalid_type`,
            input: i,
            inst: e,
            ...(a ? { received: a } : {}),
          }),
          n
        );
      }));
  }),
  _5 = Z(`$ZodNumberFormat`, (e, t) => {
    (D8.init(e, t), g5.init(e, t));
  }),
  v5 = Z(`$ZodUnknown`, (e, t) => {
    (V8.init(e, t), (e._zod.parse = (e) => e));
  }),
  y5 = Z(`$ZodNever`, (e, t) => {
    (V8.init(e, t),
      (e._zod.parse = (t, n) => (
        t.issues.push({
          expected: `never`,
          code: `invalid_type`,
          input: t.value,
          inst: e,
        }),
        t
      )));
  });
function b5(e, t, n) {
  (e.issues.length && t.issues.push(...C6(n, e.issues)),
    (t.value[n] = e.value));
}
var x5 = Z(`$ZodArray`, (e, t) => {
  (V8.init(e, t),
    (e._zod.parse = (n, r) => {
      let i = n.value;
      if (!Array.isArray(i))
        return (
          n.issues.push({
            expected: `array`,
            code: `invalid_type`,
            input: i,
            inst: e,
          }),
          n
        );
      n.value = Array(i.length);
      let a = [];
      for (let e = 0; e < i.length; e++) {
        let o = i[e],
          s = t.element._zod.run({ value: o, issues: [] }, r);
        s instanceof Promise ? a.push(s.then((t) => b5(t, n, e))) : b5(s, n, e);
      }
      return a.length ? Promise.all(a).then(() => n) : n;
    }));
});
function S5(e, t, n, r, i) {
  if (e.issues.length) {
    if (i && !(n in r)) return;
    t.issues.push(...C6(n, e.issues));
  }
  e.value === void 0 ? n in r && (t.value[n] = void 0) : (t.value[n] = e.value);
}
function C5(e) {
  let t = Object.keys(e.shape);
  for (let n of t)
    if (!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))
      throw Error(`Invalid element at key "${n}": expected a Zod schema`);
  let n = p6(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n),
  };
}
function w5(e, t, n, r, i, a) {
  let o = [],
    s = i.keySet,
    c = i.catchall._zod,
    l = c.def.type,
    u = c.optout === `optional`;
  for (let i in t) {
    if (s.has(i)) continue;
    if (l === `never`) {
      o.push(i);
      continue;
    }
    let a = c.run({ value: t[i], issues: [] }, r);
    a instanceof Promise
      ? e.push(a.then((e) => S5(e, n, i, t, u)))
      : S5(a, n, i, t, u);
  }
  return (
    o.length &&
      n.issues.push({ code: `unrecognized_keys`, keys: o, input: t, inst: a }),
    e.length ? Promise.all(e).then(() => n) : n
  );
}
var T5 = Z(`$ZodObject`, (e, t) => {
    if ((V8.init(e, t), !Object.getOwnPropertyDescriptor(t, `shape`)?.get)) {
      let e = t.shape;
      Object.defineProperty(t, 'shape', {
        get: () => {
          let n = { ...e };
          return (Object.defineProperty(t, 'shape', { value: n }), n);
        },
      });
    }
    let n = X3(() => C5(t));
    Q(e._zod, `propValues`, () => {
      let e = t.shape,
        n = {};
      for (let t in e) {
        let r = e[t]._zod;
        if (r.values) {
          n[t] ?? (n[t] = new Set());
          for (let e of r.values) n[t].add(e);
        }
      }
      return n;
    });
    let r = o6,
      i = t.catchall,
      a;
    e._zod.parse = (t, o) => {
      a ??= n.value;
      let s = t.value;
      if (!r(s))
        return (
          t.issues.push({
            expected: `object`,
            code: `invalid_type`,
            input: s,
            inst: e,
          }),
          t
        );
      t.value = {};
      let c = [],
        l = a.shape;
      for (let e of a.keys) {
        let n = l[e],
          r = n._zod.optout === `optional`,
          i = n._zod.run({ value: s[e], issues: [] }, o);
        i instanceof Promise
          ? c.push(i.then((n) => S5(n, t, e, s, r)))
          : S5(i, t, e, s, r);
      }
      return i
        ? w5(c, s, t, o, n.value, e)
        : c.length
          ? Promise.all(c).then(() => t)
          : t;
    };
  }),
  E5 = Z(`$ZodObjectJIT`, (e, t) => {
    T5.init(e, t);
    let n = e._zod.parse,
      r = X3(() => C5(t)),
      i = (e) => {
        let t = new z8([`shape`, `payload`, `ctx`]),
          n = r.value,
          i = (e) => {
            let t = r6(e);
            return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
          };
        t.write(`const input = payload.value;`);
        let a = Object.create(null),
          o = 0;
        for (let e of n.keys) a[e] = `key_${o++}`;
        t.write(`const newResult = {};`);
        for (let r of n.keys) {
          let n = a[r],
            o = r6(r),
            s = e[r]?._zod?.optout === `optional`;
          (t.write(`const ${n} = ${i(r)};`),
            s
              ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `)
              : t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `));
        }
        (t.write(`payload.value = newResult;`), t.write(`return payload;`));
        let s = t.compile();
        return (t, n) => s(e, t, n);
      },
      a,
      o = o6,
      s = !K3.jitless,
      c = s && s6.value,
      l = t.catchall,
      u;
    e._zod.parse = (d, f) => {
      u ??= r.value;
      let p = d.value;
      return o(p)
        ? s && c && f?.async === !1 && f.jitless !== !0
          ? ((a ||= i(t.shape)), (d = a(d, f)), l ? w5([], p, d, f, u, e) : d)
          : n(d, f)
        : (d.issues.push({
            expected: `object`,
            code: `invalid_type`,
            input: p,
            inst: e,
          }),
          d);
    };
  });
function D5(e, t, n, r) {
  for (let n of e) if (n.issues.length === 0) return ((t.value = n.value), t);
  let i = e.filter((e) => !S6(e));
  return i.length === 1
    ? ((t.value = i[0].value), i[0])
    : (t.issues.push({
        code: `invalid_union`,
        input: t.value,
        inst: n,
        errors: e.map((e) => e.issues.map((e) => T6(e, r, q3()))),
      }),
      t);
}
var O5 = Z(`$ZodUnion`, (e, t) => {
    (V8.init(e, t),
      Q(e._zod, `optin`, () =>
        t.options.some((e) => e._zod.optin === `optional`) ? `optional` : void 0
      ),
      Q(e._zod, `optout`, () =>
        t.options.some((e) => e._zod.optout === `optional`)
          ? `optional`
          : void 0
      ),
      Q(e._zod, `values`, () => {
        if (t.options.every((e) => e._zod.values))
          return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
      }),
      Q(e._zod, `pattern`, () => {
        if (t.options.every((e) => e._zod.pattern)) {
          let e = t.options.map((e) => e._zod.pattern);
          return RegExp(`^(${e.map((e) => Q3(e.source)).join(`|`)})$`);
        }
      }));
    let n = t.options.length === 1,
      r = t.options[0]._zod.run;
    e._zod.parse = (i, a) => {
      if (n) return r(i, a);
      let o = !1,
        s = [];
      for (let e of t.options) {
        let t = e._zod.run({ value: i.value, issues: [] }, a);
        if (t instanceof Promise) (s.push(t), (o = !0));
        else {
          if (t.issues.length === 0) return t;
          s.push(t);
        }
      }
      return o ? Promise.all(s).then((t) => D5(t, i, e, a)) : D5(s, i, e, a);
    };
  }),
  k5 = Z(`$ZodIntersection`, (e, t) => {
    (V8.init(e, t),
      (e._zod.parse = (e, n) => {
        let r = e.value,
          i = t.left._zod.run({ value: r, issues: [] }, n),
          a = t.right._zod.run({ value: r, issues: [] }, n);
        return i instanceof Promise || a instanceof Promise
          ? Promise.all([i, a]).then(([t, n]) => j5(e, t, n))
          : j5(e, i, a);
      }));
  });
function A5(e, t) {
  if (e === t || (e instanceof Date && t instanceof Date && +e == +t))
    return { valid: !0, data: e };
  if (c6(e) && c6(t)) {
    let n = Object.keys(t),
      r = Object.keys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = A5(e[n], t[n]);
      if (!r.valid)
        return { valid: !1, mergeErrorPath: [n, ...r.mergeErrorPath] };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = A5(i, a);
      if (!o.valid)
        return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function j5(e, t, n) {
  let r = new Map(),
    i;
  for (let n of t.issues)
    if (n.code === `unrecognized_keys`) {
      i ??= n;
      for (let e of n.keys) (r.has(e) || r.set(e, {}), (r.get(e).l = !0));
    } else e.issues.push(n);
  for (let t of n.issues)
    if (t.code === `unrecognized_keys`)
      for (let e of t.keys) (r.has(e) || r.set(e, {}), (r.get(e).r = !0));
    else e.issues.push(t);
  let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
  if ((a.length && i && e.issues.push({ ...i, keys: a }), S6(e))) return e;
  let o = A5(t.value, n.value);
  if (!o.valid)
    throw Error(
      `Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`
    );
  return ((e.value = o.data), e);
}
var M5 = Z(`$ZodEnum`, (e, t) => {
    V8.init(e, t);
    let n = J3(t.entries),
      r = new Set(n);
    ((e._zod.values = r),
      (e._zod.pattern = RegExp(
        `^(${n
          .filter((e) => u6.has(typeof e))
          .map((e) => (typeof e == `string` ? d6(e) : e.toString()))
          .join(`|`)})$`
      )),
      (e._zod.parse = (t, i) => {
        let a = t.value;
        return (
          r.has(a) ||
            t.issues.push({
              code: `invalid_value`,
              values: n,
              input: a,
              inst: e,
            }),
          t
        );
      }));
  }),
  N5 = Z(`$ZodTransform`, (e, t) => {
    (V8.init(e, t),
      (e._zod.parse = (n, r) => {
        if (r.direction === `backward`) throw new G3(e.constructor.name);
        let i = t.transform(n.value, n);
        if (r.async)
          return (i instanceof Promise ? i : Promise.resolve(i)).then(
            (e) => ((n.value = e), n)
          );
        if (i instanceof Promise) throw new W3();
        return ((n.value = i), n);
      }));
  });
function P5(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
var F5 = Z(`$ZodOptional`, (e, t) => {
    (V8.init(e, t),
      (e._zod.optin = `optional`),
      (e._zod.optout = `optional`),
      Q(e._zod, `values`, () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, void 0])
          : void 0
      ),
      Q(e._zod, `pattern`, () => {
        let e = t.innerType._zod.pattern;
        return e ? RegExp(`^(${Q3(e.source)})?$`) : void 0;
      }),
      (e._zod.parse = (e, n) => {
        if (t.innerType._zod.optin === `optional`) {
          let r = t.innerType._zod.run(e, n);
          return r instanceof Promise
            ? r.then((t) => P5(t, e.value))
            : P5(r, e.value);
        }
        return e.value === void 0 ? e : t.innerType._zod.run(e, n);
      }));
  }),
  I5 = Z(`$ZodExactOptional`, (e, t) => {
    (F5.init(e, t),
      Q(e._zod, `values`, () => t.innerType._zod.values),
      Q(e._zod, `pattern`, () => t.innerType._zod.pattern),
      (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
  }),
  L5 = Z(`$ZodNullable`, (e, t) => {
    (V8.init(e, t),
      Q(e._zod, `optin`, () => t.innerType._zod.optin),
      Q(e._zod, `optout`, () => t.innerType._zod.optout),
      Q(e._zod, `pattern`, () => {
        let e = t.innerType._zod.pattern;
        return e ? RegExp(`^(${Q3(e.source)}|null)$`) : void 0;
      }),
      Q(e._zod, `values`, () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, null])
          : void 0
      ),
      (e._zod.parse = (e, n) =>
        e.value === null ? e : t.innerType._zod.run(e, n)));
  }),
  R5 = Z(`$ZodDefault`, (e, t) => {
    (V8.init(e, t),
      (e._zod.optin = `optional`),
      Q(e._zod, `values`, () => t.innerType._zod.values),
      (e._zod.parse = (e, n) => {
        if (n.direction === `backward`) return t.innerType._zod.run(e, n);
        if (e.value === void 0) return ((e.value = t.defaultValue), e);
        let r = t.innerType._zod.run(e, n);
        return r instanceof Promise ? r.then((e) => z5(e, t)) : z5(r, t);
      }));
  });
function z5(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
var B5 = Z(`$ZodPrefault`, (e, t) => {
    (V8.init(e, t),
      (e._zod.optin = `optional`),
      Q(e._zod, `values`, () => t.innerType._zod.values),
      (e._zod.parse = (e, n) => (
        n.direction === `backward` ||
          (e.value === void 0 && (e.value = t.defaultValue)),
        t.innerType._zod.run(e, n)
      )));
  }),
  V5 = Z(`$ZodNonOptional`, (e, t) => {
    (V8.init(e, t),
      Q(e._zod, `values`, () => {
        let e = t.innerType._zod.values;
        return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
      }),
      (e._zod.parse = (n, r) => {
        let i = t.innerType._zod.run(n, r);
        return i instanceof Promise ? i.then((t) => H5(t, e)) : H5(i, e);
      }));
  });
function H5(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: `invalid_type`,
        expected: `nonoptional`,
        input: e.value,
        inst: t,
      }),
    e
  );
}
var U5 = Z(`$ZodCatch`, (e, t) => {
    (V8.init(e, t),
      Q(e._zod, `optin`, () => t.innerType._zod.optin),
      Q(e._zod, `optout`, () => t.innerType._zod.optout),
      Q(e._zod, `values`, () => t.innerType._zod.values),
      (e._zod.parse = (e, n) => {
        if (n.direction === `backward`) return t.innerType._zod.run(e, n);
        let r = t.innerType._zod.run(e, n);
        return r instanceof Promise
          ? r.then(
              (r) => (
                (e.value = r.value),
                r.issues.length &&
                  ((e.value = t.catchValue({
                    ...e,
                    error: { issues: r.issues.map((e) => T6(e, n, q3())) },
                    input: e.value,
                  })),
                  (e.issues = [])),
                e
              )
            )
          : ((e.value = r.value),
            r.issues.length &&
              ((e.value = t.catchValue({
                ...e,
                error: { issues: r.issues.map((e) => T6(e, n, q3())) },
                input: e.value,
              })),
              (e.issues = [])),
            e);
      }));
  }),
  W5 = Z(`$ZodPipe`, (e, t) => {
    (V8.init(e, t),
      Q(e._zod, `values`, () => t.in._zod.values),
      Q(e._zod, `optin`, () => t.in._zod.optin),
      Q(e._zod, `optout`, () => t.out._zod.optout),
      Q(e._zod, `propValues`, () => t.in._zod.propValues),
      (e._zod.parse = (e, n) => {
        if (n.direction === `backward`) {
          let r = t.out._zod.run(e, n);
          return r instanceof Promise
            ? r.then((e) => G5(e, t.in, n))
            : G5(r, t.in, n);
        }
        let r = t.in._zod.run(e, n);
        return r instanceof Promise
          ? r.then((e) => G5(e, t.out, n))
          : G5(r, t.out, n);
      }));
  });
function G5(e, t, n) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues }, n);
}
var K5 = Z(`$ZodReadonly`, (e, t) => {
  (V8.init(e, t),
    Q(e._zod, `propValues`, () => t.innerType._zod.propValues),
    Q(e._zod, `values`, () => t.innerType._zod.values),
    Q(e._zod, `optin`, () => t.innerType?._zod?.optin),
    Q(e._zod, `optout`, () => t.innerType?._zod?.optout),
    (e._zod.parse = (e, n) => {
      if (n.direction === `backward`) return t.innerType._zod.run(e, n);
      let r = t.innerType._zod.run(e, n);
      return r instanceof Promise ? r.then(q5) : q5(r);
    }));
});
function q5(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
var J5 = Z(`$ZodCustom`, (e, t) => {
  (S8.init(e, t),
    V8.init(e, t),
    (e._zod.parse = (e, t) => e),
    (e._zod.check = (n) => {
      let r = n.value,
        i = t.fn(r);
      if (i instanceof Promise) return i.then((t) => Y5(t, n, r, e));
      Y5(i, n, r, e);
    }));
});
function Y5(e, t, n, r) {
  if (!e) {
    let e = {
      code: `custom`,
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(D6(e)));
  }
}
var X5,
  Z5 = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(e, ...t) {
      let n = t[0];
      return (
        this._map.set(e, n),
        n && typeof n == `object` && `id` in n && this._idmap.set(n.id, e),
        this
      );
    }
    clear() {
      return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
    }
    remove(e) {
      let t = this._map.get(e);
      return (
        t && typeof t == `object` && `id` in t && this._idmap.delete(t.id),
        this._map.delete(e),
        this
      );
    }
    get(e) {
      let t = e._zod.parent;
      if (t) {
        let n = { ...(this.get(t) ?? {}) };
        delete n.id;
        let r = { ...n, ...this._map.get(e) };
        return Object.keys(r).length ? r : void 0;
      }
      return this._map.get(e);
    }
    has(e) {
      return this._map.has(e);
    }
  };
function Q5() {
  return new Z5();
}
(X5 = globalThis).__zod_globalRegistry ?? (X5.__zod_globalRegistry = Q5());
var $5 = globalThis.__zod_globalRegistry;
function e7(e, t) {
  return new e({ type: `string`, ...$(t) });
}
function t7(e, t) {
  return new e({
    type: `string`,
    format: `email`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function n7(e, t) {
  return new e({
    type: `string`,
    format: `guid`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function r7(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function i7(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v4`,
    ...$(t),
  });
}
function a7(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v6`,
    ...$(t),
  });
}
function o7(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v7`,
    ...$(t),
  });
}
function s7(e, t) {
  return new e({
    type: `string`,
    format: `url`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function c7(e, t) {
  return new e({
    type: `string`,
    format: `emoji`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function l7(e, t) {
  return new e({
    type: `string`,
    format: `nanoid`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function u7(e, t) {
  return new e({
    type: `string`,
    format: `cuid`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function d7(e, t) {
  return new e({
    type: `string`,
    format: `cuid2`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function f7(e, t) {
  return new e({
    type: `string`,
    format: `ulid`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function p7(e, t) {
  return new e({
    type: `string`,
    format: `xid`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function m7(e, t) {
  return new e({
    type: `string`,
    format: `ksuid`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function h7(e, t) {
  return new e({
    type: `string`,
    format: `ipv4`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function g7(e, t) {
  return new e({
    type: `string`,
    format: `ipv6`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function _7(e, t) {
  return new e({
    type: `string`,
    format: `cidrv4`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function v7(e, t) {
  return new e({
    type: `string`,
    format: `cidrv6`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function y7(e, t) {
  return new e({
    type: `string`,
    format: `base64`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function b7(e, t) {
  return new e({
    type: `string`,
    format: `base64url`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function x7(e, t) {
  return new e({
    type: `string`,
    format: `e164`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function S7(e, t) {
  return new e({
    type: `string`,
    format: `jwt`,
    check: `string_format`,
    abort: !1,
    ...$(t),
  });
}
function C7(e, t) {
  return new e({
    type: `string`,
    format: `datetime`,
    check: `string_format`,
    offset: !1,
    local: !1,
    precision: null,
    ...$(t),
  });
}
function w7(e, t) {
  return new e({
    type: `string`,
    format: `date`,
    check: `string_format`,
    ...$(t),
  });
}
function T7(e, t) {
  return new e({
    type: `string`,
    format: `time`,
    check: `string_format`,
    precision: null,
    ...$(t),
  });
}
function E7(e, t) {
  return new e({
    type: `string`,
    format: `duration`,
    check: `string_format`,
    ...$(t),
  });
}
function D7(e, t) {
  return new e({ type: `number`, coerce: !0, checks: [], ...$(t) });
}
function O7(e, t) {
  return new e({
    type: `number`,
    check: `number_format`,
    abort: !1,
    format: `safeint`,
    ...$(t),
  });
}
function k7(e) {
  return new e({ type: `unknown` });
}
function A7(e, t) {
  return new e({ type: `never`, ...$(t) });
}
function j7(e, t) {
  return new w8({ check: `less_than`, ...$(t), value: e, inclusive: !1 });
}
function M7(e, t) {
  return new w8({ check: `less_than`, ...$(t), value: e, inclusive: !0 });
}
function N7(e, t) {
  return new T8({ check: `greater_than`, ...$(t), value: e, inclusive: !1 });
}
function P7(e, t) {
  return new T8({ check: `greater_than`, ...$(t), value: e, inclusive: !0 });
}
function F7(e, t) {
  return new E8({ check: `multiple_of`, ...$(t), value: e });
}
function I7(e, t) {
  return new O8({ check: `max_length`, ...$(t), maximum: e });
}
function L7(e, t) {
  return new k8({ check: `min_length`, ...$(t), minimum: e });
}
function R7(e, t) {
  return new A8({ check: `length_equals`, ...$(t), length: e });
}
function z7(e, t) {
  return new M8({
    check: `string_format`,
    format: `regex`,
    ...$(t),
    pattern: e,
  });
}
function B7(e) {
  return new N8({ check: `string_format`, format: `lowercase`, ...$(e) });
}
function V7(e) {
  return new P8({ check: `string_format`, format: `uppercase`, ...$(e) });
}
function H7(e, t) {
  return new F8({
    check: `string_format`,
    format: `includes`,
    ...$(t),
    includes: e,
  });
}
function U7(e, t) {
  return new I8({
    check: `string_format`,
    format: `starts_with`,
    ...$(t),
    prefix: e,
  });
}
function W7(e, t) {
  return new L8({
    check: `string_format`,
    format: `ends_with`,
    ...$(t),
    suffix: e,
  });
}
function G7(e) {
  return new R8({ check: `overwrite`, tx: e });
}
function K7(e) {
  return G7((t) => t.normalize(e));
}
function q7() {
  return G7((e) => e.trim());
}
function J7() {
  return G7((e) => e.toLowerCase());
}
function Y7() {
  return G7((e) => e.toUpperCase());
}
function X7() {
  return G7((e) => i6(e));
}
function Z7(e, t, n) {
  return new e({ type: `array`, element: t, ...$(n) });
}
function Q7(e, t, n) {
  return new e({ type: `custom`, check: `custom`, fn: t, ...$(n) });
}
function $7(e) {
  let t = e9(
    (n) => (
      (n.addIssue = (e) => {
        if (typeof e == `string`) n.issues.push(D6(e, n.value, t._zod.def));
        else {
          let r = e;
          (r.fatal && (r.continue = !1),
            (r.code ??= `custom`),
            (r.input ??= n.value),
            (r.inst ??= t),
            (r.continue ??= !t._zod.def.abort),
            n.issues.push(D6(r)));
        }
      }),
      e(n.value, n)
    )
  );
  return t;
}
function e9(e, t) {
  let n = new S8({ check: `custom`, ...$(t) });
  return ((n._zod.check = e), n);
}
function t9(e) {
  let t = e?.target ?? `draft-2020-12`;
  return (
    t === `draft-4` && (t = `draft-04`),
    t === `draft-7` && (t = `draft-07`),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? $5,
      target: t,
      unrepresentable: e?.unrepresentable ?? `throw`,
      override: e?.override ?? (() => {}),
      io: e?.io ?? `output`,
      counter: 0,
      seen: new Map(),
      cycles: e?.cycles ?? `ref`,
      reused: e?.reused ?? `inline`,
      external: e?.external ?? void 0,
    }
  );
}
function n9(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  let i = e._zod.def,
    a = t.seen.get(e);
  if (a)
    return (
      a.count++,
      n.schemaPath.includes(e) && (a.cycle = n.path),
      a.schema
    );
  let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, o);
  let s = e._zod.toJSONSchema?.();
  if (s) o.schema = s;
  else {
    let r = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
    else {
      let n = o.schema,
        a = t.processors[i.type];
      if (!a)
        throw Error(
          `[toJSONSchema]: Non-representable type encountered: ${i.type}`
        );
      a(e, t, n, r);
    }
    let a = e._zod.parent;
    a && ((o.ref ||= a), n9(a, t, r), (t.seen.get(a).isParent = !0));
  }
  let c = t.metadataRegistry.get(e);
  return (
    c && Object.assign(o.schema, c),
    t.io === `input` &&
      a9(e) &&
      (delete o.schema.examples, delete o.schema.default),
    t.io === `input` &&
      o.schema._prefault &&
      ((r = o.schema).default ?? (r.default = o.schema._prefault)),
    delete o.schema._prefault,
    t.seen.get(e).schema
  );
}
function r9(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = new Map();
  for (let t of e.seen.entries()) {
    let n = e.metadataRegistry.get(t[0])?.id;
    if (n) {
      let e = r.get(n);
      if (e && e !== t[0])
        throw Error(
          `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`
        );
      r.set(n, t[0]);
    }
  }
  let i = (t) => {
      let r = e.target === `draft-2020-12` ? `$defs` : `definitions`;
      if (e.external) {
        let n = e.external.registry.get(t[0])?.id,
          i = e.external.uri ?? ((e) => e);
        if (n) return { ref: i(n) };
        let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
        return (
          (t[1].defId = a),
          { defId: a, ref: `${i(`__shared`)}#/${r}/${a}` }
        );
      }
      if (t[1] === n) return { ref: `#` };
      let i = `#/${r}/`,
        a = t[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: a, ref: i + a };
    },
    a = (e) => {
      if (e[1].schema.$ref) return;
      let t = e[1],
        { ref: n, defId: r } = i(e);
      ((t.def = { ...t.schema }), r && (t.defId = r));
      let a = t.schema;
      for (let e in a) delete a[e];
      a.$ref = n;
    };
  if (e.cycles === `throw`)
    for (let t of e.seen.entries()) {
      let e = t[1];
      if (e.cycle)
        throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let n of e.seen.entries()) {
    let r = n[1];
    if (t === n[0]) {
      a(n);
      continue;
    }
    if (e.external) {
      let r = e.external.registry.get(n[0])?.id;
      if (t !== n[0] && r) {
        a(n);
        continue;
      }
    }
    if (e.metadataRegistry.get(n[0])?.id) {
      a(n);
      continue;
    }
    if (r.cycle) {
      a(n);
      continue;
    }
    if (r.count > 1 && e.reused === `ref`) {
      a(n);
      continue;
    }
  }
}
function i9(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = (t) => {
    let n = e.seen.get(t);
    if (n.ref === null) return;
    let i = n.def ?? n.schema,
      a = { ...i },
      o = n.ref;
    if (((n.ref = null), o)) {
      r(o);
      let n = e.seen.get(o),
        s = n.schema;
      if (
        (s.$ref &&
        (e.target === `draft-07` ||
          e.target === `draft-04` ||
          e.target === `openapi-3.0`)
          ? ((i.allOf = i.allOf ?? []), i.allOf.push(s))
          : Object.assign(i, s),
        Object.assign(i, a),
        t._zod.parent === o)
      )
        for (let e in i) e === `$ref` || e === `allOf` || e in a || delete i[e];
      if (s.$ref && n.def)
        for (let e in i)
          e === `$ref` ||
            e === `allOf` ||
            (e in n.def &&
              JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
              delete i[e]);
    }
    let s = t._zod.parent;
    if (s && s !== o) {
      r(s);
      let t = e.seen.get(s);
      if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
        for (let e in i)
          e === `$ref` ||
            e === `allOf` ||
            (e in t.def &&
              JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
              delete i[e]);
    }
    e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] });
  };
  for (let t of [...e.seen.entries()].reverse()) r(t[0]);
  let i = {};
  if (
    (e.target === `draft-2020-12`
      ? (i.$schema = `https://json-schema.org/draft/2020-12/schema`)
      : e.target === `draft-07`
        ? (i.$schema = `http://json-schema.org/draft-07/schema#`)
        : e.target === `draft-04`
          ? (i.$schema = `http://json-schema.org/draft-04/schema#`)
          : e.target,
    e.external?.uri)
  ) {
    let n = e.external.registry.get(t)?.id;
    if (!n) throw Error('Schema is missing an `id` property');
    i.$id = e.external.uri(n);
  }
  Object.assign(i, n.def ?? n.schema);
  let a = e.external?.defs ?? {};
  for (let t of e.seen.entries()) {
    let e = t[1];
    e.def && e.defId && (a[e.defId] = e.def);
  }
  e.external ||
    (Object.keys(a).length > 0 &&
      (e.target === `draft-2020-12` ? (i.$defs = a) : (i.definitions = a)));
  try {
    let n = JSON.parse(JSON.stringify(i));
    return (
      Object.defineProperty(n, '~standard', {
        value: {
          ...t[`~standard`],
          jsonSchema: {
            input: s9(t, `input`, e.processors),
            output: s9(t, `output`, e.processors),
          },
        },
        enumerable: !1,
        writable: !1,
      }),
      n
    );
  } catch {
    throw Error(`Error converting schema to JSON.`);
  }
}
function a9(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  if (r.type === `transform`) return !0;
  if (r.type === `array`) return a9(r.element, n);
  if (r.type === `set`) return a9(r.valueType, n);
  if (r.type === `lazy`) return a9(r.getter(), n);
  if (
    r.type === `promise` ||
    r.type === `optional` ||
    r.type === `nonoptional` ||
    r.type === `nullable` ||
    r.type === `readonly` ||
    r.type === 'default' ||
    r.type === `prefault`
  )
    return a9(r.innerType, n);
  if (r.type === `intersection`) return a9(r.left, n) || a9(r.right, n);
  if (r.type === `record` || r.type === `map`)
    return a9(r.keyType, n) || a9(r.valueType, n);
  if (r.type === `pipe`) return a9(r.in, n) || a9(r.out, n);
  if (r.type === `object`) {
    for (let e in r.shape) if (a9(r.shape[e], n)) return !0;
    return !1;
  }
  if (r.type === `union`) {
    for (let e of r.options) if (a9(e, n)) return !0;
    return !1;
  }
  if (r.type === `tuple`) {
    for (let e of r.items) if (a9(e, n)) return !0;
    return !!(r.rest && a9(r.rest, n));
  }
  return !1;
}
var o9 =
    (e, t = {}) =>
    (n) => {
      let r = t9({ ...n, processors: t });
      return (n9(e, r), r9(r, e), i9(r, e));
    },
  s9 =
    (e, t, n = {}) =>
    (r) => {
      let { libraryOptions: i, target: a } = r ?? {},
        o = t9({ ...(i ?? {}), target: a, io: t, processors: n });
      return (n9(e, o), r9(o, e), i9(o, e));
    },
  c9 = {
    guid: `uuid`,
    url: `uri`,
    datetime: `date-time`,
    json_string: `json-string`,
    regex: ``,
  },
  l9 = (e, t, n, r) => {
    let i = n;
    i.type = `string`;
    let {
      minimum: a,
      maximum: o,
      format: s,
      patterns: c,
      contentEncoding: l,
    } = e._zod.bag;
    if (
      (typeof a == `number` && (i.minLength = a),
      typeof o == `number` && (i.maxLength = o),
      s &&
        ((i.format = c9[s] ?? s),
        i.format === `` && delete i.format,
        s === `time` && delete i.format),
      l && (i.contentEncoding = l),
      c && c.size > 0)
    ) {
      let e = [...c];
      e.length === 1
        ? (i.pattern = e[0].source)
        : e.length > 1 &&
          (i.allOf = [
            ...e.map((e) => ({
              ...(t.target === `draft-07` ||
              t.target === `draft-04` ||
              t.target === `openapi-3.0`
                ? { type: `string` }
                : {}),
              pattern: e.source,
            })),
          ]);
    }
  },
  u9 = (e, t, n, r) => {
    let i = n,
      {
        minimum: a,
        maximum: o,
        format: s,
        multipleOf: c,
        exclusiveMaximum: l,
        exclusiveMinimum: u,
      } = e._zod.bag;
    (typeof s == `string` && s.includes(`int`)
      ? (i.type = `integer`)
      : (i.type = `number`),
      typeof u == `number` &&
        (t.target === `draft-04` || t.target === `openapi-3.0`
          ? ((i.minimum = u), (i.exclusiveMinimum = !0))
          : (i.exclusiveMinimum = u)),
      typeof a == `number` &&
        ((i.minimum = a),
        typeof u == `number` &&
          t.target !== `draft-04` &&
          (u >= a ? delete i.minimum : delete i.exclusiveMinimum)),
      typeof l == `number` &&
        (t.target === `draft-04` || t.target === `openapi-3.0`
          ? ((i.maximum = l), (i.exclusiveMaximum = !0))
          : (i.exclusiveMaximum = l)),
      typeof o == `number` &&
        ((i.maximum = o),
        typeof l == `number` &&
          t.target !== `draft-04` &&
          (l <= o ? delete i.maximum : delete i.exclusiveMaximum)),
      typeof c == `number` && (i.multipleOf = c));
  },
  d9 = (e, t, n, r) => {
    n.not = {};
  },
  f9 = (e, t, n, r) => {
    let i = e._zod.def,
      a = J3(i.entries);
    (a.every((e) => typeof e == `number`) && (n.type = `number`),
      a.every((e) => typeof e == `string`) && (n.type = `string`),
      (n.enum = a));
  },
  p9 = (e, t, n, r) => {
    if (t.unrepresentable === `throw`)
      throw Error(`Custom types cannot be represented in JSON Schema`);
  },
  m9 = (e, t, n, r) => {
    if (t.unrepresentable === `throw`)
      throw Error(`Transforms cannot be represented in JSON Schema`);
  },
  h9 = (e, t, n, r) => {
    let i = n,
      a = e._zod.def,
      { minimum: o, maximum: s } = e._zod.bag;
    (typeof o == `number` && (i.minItems = o),
      typeof s == `number` && (i.maxItems = s),
      (i.type = `array`),
      (i.items = n9(a.element, t, { ...r, path: [...r.path, `items`] })));
  },
  g9 = (e, t, n, r) => {
    let i = n,
      a = e._zod.def;
    ((i.type = `object`), (i.properties = {}));
    let o = a.shape;
    for (let e in o)
      i.properties[e] = n9(o[e], t, {
        ...r,
        path: [...r.path, `properties`, e],
      });
    let s = new Set(Object.keys(o)),
      c = new Set(
        [...s].filter((e) => {
          let n = a.shape[e]._zod;
          return t.io === `input` ? n.optin === void 0 : n.optout === void 0;
        })
      );
    (c.size > 0 && (i.required = Array.from(c)),
      a.catchall?._zod.def.type === `never`
        ? (i.additionalProperties = !1)
        : a.catchall
          ? a.catchall &&
            (i.additionalProperties = n9(a.catchall, t, {
              ...r,
              path: [...r.path, `additionalProperties`],
            }))
          : t.io === `output` && (i.additionalProperties = !1));
  },
  _9 = (e, t, n, r) => {
    let i = e._zod.def,
      a = i.inclusive === !1,
      o = i.options.map((e, n) =>
        n9(e, t, { ...r, path: [...r.path, a ? `oneOf` : `anyOf`, n] })
      );
    a ? (n.oneOf = o) : (n.anyOf = o);
  },
  v9 = (e, t, n, r) => {
    let i = e._zod.def,
      a = n9(i.left, t, { ...r, path: [...r.path, `allOf`, 0] }),
      o = n9(i.right, t, { ...r, path: [...r.path, `allOf`, 1] }),
      s = (e) => `allOf` in e && Object.keys(e).length === 1;
    n.allOf = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
  },
  y9 = (e, t, n, r) => {
    let i = e._zod.def,
      a = n9(i.innerType, t, r),
      o = t.seen.get(e);
    t.target === `openapi-3.0`
      ? ((o.ref = i.innerType), (n.nullable = !0))
      : (n.anyOf = [a, { type: `null` }]);
  },
  Fee = (e, t, n, r) => {
    let i = e._zod.def;
    n9(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
  },
  Iee = (e, t, n, r) => {
    let i = e._zod.def;
    n9(i.innerType, t, r);
    let a = t.seen.get(e);
    ((a.ref = i.innerType),
      (n.default = JSON.parse(JSON.stringify(i.defaultValue))));
  },
  Lee = (e, t, n, r) => {
    let i = e._zod.def;
    n9(i.innerType, t, r);
    let a = t.seen.get(e);
    ((a.ref = i.innerType),
      t.io === `input` &&
        (n._prefault = JSON.parse(JSON.stringify(i.defaultValue))));
  },
  Ree = (e, t, n, r) => {
    let i = e._zod.def;
    n9(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
    let o;
    try {
      o = i.catchValue(void 0);
    } catch {
      throw Error(`Dynamic catch values are not supported in JSON Schema`);
    }
    n.default = o;
  },
  zee = (e, t, n, r) => {
    let i = e._zod.def,
      a =
        t.io === `input`
          ? i.in._zod.def.type === `transform`
            ? i.out
            : i.in
          : i.out;
    n9(a, t, r);
    let o = t.seen.get(e);
    o.ref = a;
  },
  Bee = (e, t, n, r) => {
    let i = e._zod.def;
    n9(i.innerType, t, r);
    let a = t.seen.get(e);
    ((a.ref = i.innerType), (n.readOnly = !0));
  },
  b9 = (e, t, n, r) => {
    let i = e._zod.def;
    n9(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
  },
  Vee = Z(`ZodISODateTime`, (e, t) => {
    (t5.init(e, t), E9.init(e, t));
  });
function Hee(e) {
  return C7(Vee, e);
}
var Uee = Z(`ZodISODate`, (e, t) => {
  (n5.init(e, t), E9.init(e, t));
});
function Wee(e) {
  return w7(Uee, e);
}
var Gee = Z(`ZodISOTime`, (e, t) => {
  (r5.init(e, t), E9.init(e, t));
});
function Kee(e) {
  return T7(Gee, e);
}
var qee = Z(`ZodISODuration`, (e, t) => {
  (i5.init(e, t), E9.init(e, t));
});
function Jee(e) {
  return E7(qee, e);
}
var x9 = (e, t) => {
  (k6.init(e, t),
    (e.name = `ZodError`),
    Object.defineProperties(e, {
      format: { value: (t) => M6(e, t) },
      flatten: { value: (t) => j6(e, t) },
      addIssue: {
        value: (t) => {
          (e.issues.push(t), (e.message = JSON.stringify(e.issues, Y3, 2)));
        },
      },
      addIssues: {
        value: (t) => {
          (e.issues.push(...t), (e.message = JSON.stringify(e.issues, Y3, 2)));
        },
      },
      isEmpty: {
        get() {
          return e.issues.length === 0;
        },
      },
    }));
};
Z(`ZodError`, x9);
var S9 = Z(`ZodError`, x9, { Parent: Error }),
  Yee = N6(S9),
  Xee = P6(S9),
  Zee = F6(S9),
  Qee = L6(S9),
  $ee = z6(S9),
  ete = B6(S9),
  tte = V6(S9),
  nte = H6(S9),
  rte = U6(S9),
  ite = W6(S9),
  ate = G6(S9),
  ote = K6(S9),
  C9 = Z(
    `ZodType`,
    (e, t) => (
      V8.init(e, t),
      Object.assign(e[`~standard`], {
        jsonSchema: { input: s9(e, `input`), output: s9(e, `output`) },
      }),
      (e.toJSONSchema = o9(e, {})),
      (e.def = t),
      (e.type = t.type),
      Object.defineProperty(e, '_def', { value: t }),
      (e.check = (...n) =>
        e.clone(
          n6(t, {
            checks: [
              ...(t.checks ?? []),
              ...n.map((e) =>
                typeof e == `function`
                  ? {
                      _zod: {
                        check: e,
                        def: { check: `custom` },
                        onattach: [],
                      },
                    }
                  : e
              ),
            ],
          }),
          { parent: !0 }
        )),
      (e.with = e.check),
      (e.clone = (t, n) => f6(e, t, n)),
      (e.brand = () => e),
      (e.register = (t, n) => (t.add(e, n), e)),
      (e.parse = (t, n) => Yee(e, t, n, { callee: e.parse })),
      (e.safeParse = (t, n) => Zee(e, t, n)),
      (e.parseAsync = async (t, n) => Xee(e, t, n, { callee: e.parseAsync })),
      (e.safeParseAsync = async (t, n) => Qee(e, t, n)),
      (e.spa = e.safeParseAsync),
      (e.encode = (t, n) => $ee(e, t, n)),
      (e.decode = (t, n) => ete(e, t, n)),
      (e.encodeAsync = async (t, n) => tte(e, t, n)),
      (e.decodeAsync = async (t, n) => nte(e, t, n)),
      (e.safeEncode = (t, n) => rte(e, t, n)),
      (e.safeDecode = (t, n) => ite(e, t, n)),
      (e.safeEncodeAsync = async (t, n) => ate(e, t, n)),
      (e.safeDecodeAsync = async (t, n) => ote(e, t, n)),
      (e.refine = (t, n) => e.check($te(t, n))),
      (e.superRefine = (t) => e.check(ene(t))),
      (e.overwrite = (t) => e.check(G7(t))),
      (e.optional = () => F9(e)),
      (e.exactOptional = () => Bte(e)),
      (e.nullable = () => I9(e)),
      (e.nullish = () => F9(I9(e))),
      (e.nonoptional = (t) => Kte(e, t)),
      (e.array = () => Ate(e)),
      (e.or = (t) => Nte([e, t])),
      (e.and = (t) => Fte(e, t)),
      (e.transform = (t) => R9(e, Rte(t))),
      (e.default = (t) => Ute(e, t)),
      (e.prefault = (t) => Gte(e, t)),
      (e.catch = (t) => Jte(e, t)),
      (e.pipe = (t) => R9(e, t)),
      (e.readonly = () => Zte(e)),
      (e.describe = (t) => {
        let n = e.clone();
        return ($5.add(n, { description: t }), n);
      }),
      Object.defineProperty(e, 'description', {
        get() {
          return $5.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...t) => {
        if (t.length === 0) return $5.get(e);
        let n = e.clone();
        return ($5.add(n, t[0]), n);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      (e.apply = (t) => t(e)),
      e
    )
  ),
  w9 = Z(`_ZodString`, (e, t) => {
    (H8.init(e, t),
      C9.init(e, t),
      (e._zod.processJSONSchema = (t, n, r) => l9(e, t, n, r)));
    let n = e._zod.bag;
    ((e.format = n.format ?? null),
      (e.minLength = n.minimum ?? null),
      (e.maxLength = n.maximum ?? null),
      (e.regex = (...t) => e.check(z7(...t))),
      (e.includes = (...t) => e.check(H7(...t))),
      (e.startsWith = (...t) => e.check(U7(...t))),
      (e.endsWith = (...t) => e.check(W7(...t))),
      (e.min = (...t) => e.check(L7(...t))),
      (e.max = (...t) => e.check(I7(...t))),
      (e.length = (...t) => e.check(R7(...t))),
      (e.nonempty = (...t) => e.check(L7(1, ...t))),
      (e.lowercase = (t) => e.check(B7(t))),
      (e.uppercase = (t) => e.check(V7(t))),
      (e.trim = () => e.check(q7())),
      (e.normalize = (...t) => e.check(K7(...t))),
      (e.toLowerCase = () => e.check(J7())),
      (e.toUpperCase = () => e.check(Y7())),
      (e.slugify = () => e.check(X7())));
  }),
  ste = Z(`ZodString`, (e, t) => {
    (H8.init(e, t),
      w9.init(e, t),
      (e.email = (t) => e.check(t7(cte, t))),
      (e.url = (t) => e.check(s7(lte, t))),
      (e.jwt = (t) => e.check(S7(wte, t))),
      (e.emoji = (t) => e.check(c7(ute, t))),
      (e.guid = (t) => e.check(n7(D9, t))),
      (e.uuid = (t) => e.check(r7(O9, t))),
      (e.uuidv4 = (t) => e.check(i7(O9, t))),
      (e.uuidv6 = (t) => e.check(a7(O9, t))),
      (e.uuidv7 = (t) => e.check(o7(O9, t))),
      (e.nanoid = (t) => e.check(l7(dte, t))),
      (e.guid = (t) => e.check(n7(D9, t))),
      (e.cuid = (t) => e.check(u7(fte, t))),
      (e.cuid2 = (t) => e.check(d7(pte, t))),
      (e.ulid = (t) => e.check(f7(mte, t))),
      (e.base64 = (t) => e.check(y7(xte, t))),
      (e.base64url = (t) => e.check(b7(Ste, t))),
      (e.xid = (t) => e.check(p7(hte, t))),
      (e.ksuid = (t) => e.check(m7(gte, t))),
      (e.ipv4 = (t) => e.check(h7(_te, t))),
      (e.ipv6 = (t) => e.check(g7(vte, t))),
      (e.cidrv4 = (t) => e.check(_7(yte, t))),
      (e.cidrv6 = (t) => e.check(v7(bte, t))),
      (e.e164 = (t) => e.check(x7(Cte, t))),
      (e.datetime = (t) => e.check(Hee(t))),
      (e.date = (t) => e.check(Wee(t))),
      (e.time = (t) => e.check(Kee(t))),
      (e.duration = (t) => e.check(Jee(t))));
  });
function T9(e) {
  return e7(ste, e);
}
var E9 = Z(`ZodStringFormat`, (e, t) => {
    (U8.init(e, t), w9.init(e, t));
  }),
  cte = Z(`ZodEmail`, (e, t) => {
    (K8.init(e, t), E9.init(e, t));
  }),
  D9 = Z(`ZodGUID`, (e, t) => {
    (W8.init(e, t), E9.init(e, t));
  }),
  O9 = Z(`ZodUUID`, (e, t) => {
    (G8.init(e, t), E9.init(e, t));
  }),
  lte = Z(`ZodURL`, (e, t) => {
    (q8.init(e, t), E9.init(e, t));
  }),
  ute = Z(`ZodEmoji`, (e, t) => {
    (J8.init(e, t), E9.init(e, t));
  }),
  dte = Z(`ZodNanoID`, (e, t) => {
    (Y8.init(e, t), E9.init(e, t));
  }),
  fte = Z(`ZodCUID`, (e, t) => {
    (X8.init(e, t), E9.init(e, t));
  }),
  pte = Z(`ZodCUID2`, (e, t) => {
    (Z8.init(e, t), E9.init(e, t));
  }),
  mte = Z(`ZodULID`, (e, t) => {
    (Q8.init(e, t), E9.init(e, t));
  }),
  hte = Z(`ZodXID`, (e, t) => {
    ($8.init(e, t), E9.init(e, t));
  }),
  gte = Z(`ZodKSUID`, (e, t) => {
    (e5.init(e, t), E9.init(e, t));
  }),
  _te = Z(`ZodIPv4`, (e, t) => {
    (a5.init(e, t), E9.init(e, t));
  }),
  vte = Z(`ZodIPv6`, (e, t) => {
    (o5.init(e, t), E9.init(e, t));
  }),
  yte = Z(`ZodCIDRv4`, (e, t) => {
    (s5.init(e, t), E9.init(e, t));
  }),
  bte = Z(`ZodCIDRv6`, (e, t) => {
    (c5.init(e, t), E9.init(e, t));
  }),
  xte = Z(`ZodBase64`, (e, t) => {
    (u5.init(e, t), E9.init(e, t));
  }),
  Ste = Z(`ZodBase64URL`, (e, t) => {
    (f5.init(e, t), E9.init(e, t));
  }),
  Cte = Z(`ZodE164`, (e, t) => {
    (p5.init(e, t), E9.init(e, t));
  }),
  wte = Z(`ZodJWT`, (e, t) => {
    (h5.init(e, t), E9.init(e, t));
  }),
  k9 = Z(`ZodNumber`, (e, t) => {
    (g5.init(e, t),
      C9.init(e, t),
      (e._zod.processJSONSchema = (t, n, r) => u9(e, t, n, r)),
      (e.gt = (t, n) => e.check(N7(t, n))),
      (e.gte = (t, n) => e.check(P7(t, n))),
      (e.min = (t, n) => e.check(P7(t, n))),
      (e.lt = (t, n) => e.check(j7(t, n))),
      (e.lte = (t, n) => e.check(M7(t, n))),
      (e.max = (t, n) => e.check(M7(t, n))),
      (e.int = (t) => e.check(A9(t))),
      (e.safe = (t) => e.check(A9(t))),
      (e.positive = (t) => e.check(N7(0, t))),
      (e.nonnegative = (t) => e.check(P7(0, t))),
      (e.negative = (t) => e.check(j7(0, t))),
      (e.nonpositive = (t) => e.check(M7(0, t))),
      (e.multipleOf = (t, n) => e.check(F7(t, n))),
      (e.step = (t, n) => e.check(F7(t, n))),
      (e.finite = () => e));
    let n = e._zod.bag;
    ((e.minValue =
      Math.max(n.minimum ?? -1 / 0, n.exclusiveMinimum ?? -1 / 0) ?? null),
      (e.maxValue =
        Math.min(n.maximum ?? 1 / 0, n.exclusiveMaximum ?? 1 / 0) ?? null),
      (e.isInt =
        (n.format ?? ``).includes(`int`) ||
        Number.isSafeInteger(n.multipleOf ?? 0.5)),
      (e.isFinite = !0),
      (e.format = n.format ?? null));
  }),
  Tte = Z(`ZodNumberFormat`, (e, t) => {
    (_5.init(e, t), k9.init(e, t));
  });
function A9(e) {
  return O7(Tte, e);
}
var Ete = Z(`ZodUnknown`, (e, t) => {
  (v5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (e, t, n) => void 0));
});
function j9() {
  return k7(Ete);
}
var Dte = Z(`ZodNever`, (e, t) => {
  (y5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => d9(e, t, n, r)));
});
function Ote(e) {
  return A7(Dte, e);
}
var kte = Z(`ZodArray`, (e, t) => {
  (x5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => h9(e, t, n, r)),
    (e.element = t.element),
    (e.min = (t, n) => e.check(L7(t, n))),
    (e.nonempty = (t) => e.check(L7(1, t))),
    (e.max = (t, n) => e.check(I7(t, n))),
    (e.length = (t, n) => e.check(R7(t, n))),
    (e.unwrap = () => e.element));
});
function Ate(e, t) {
  return Z7(kte, e, t);
}
var jte = Z(`ZodObject`, (e, t) => {
  (E5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => g9(e, t, n, r)),
    Q(e, `shape`, () => t.shape),
    (e.keyof = () => Ite(Object.keys(e._zod.def.shape))),
    (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: j9() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: j9() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: Ote() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (t) => _6(e, t)),
    (e.safeExtend = (t) => v6(e, t)),
    (e.merge = (t) => y6(e, t)),
    (e.pick = (t) => h6(e, t)),
    (e.omit = (t) => g6(e, t)),
    (e.partial = (...t) => b6(P9, e, t[0])),
    (e.required = (...t) => x6(L9, e, t[0])));
});
function M9(e, t) {
  return new jte({ type: `object`, shape: e ?? {}, ...$(t) });
}
var Mte = Z(`ZodUnion`, (e, t) => {
  (O5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => _9(e, t, n, r)),
    (e.options = t.options));
});
function Nte(e, t) {
  return new Mte({ type: `union`, options: e, ...$(t) });
}
var Pte = Z(`ZodIntersection`, (e, t) => {
  (k5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => v9(e, t, n, r)));
});
function Fte(e, t) {
  return new Pte({ type: `intersection`, left: e, right: t });
}
var N9 = Z(`ZodEnum`, (e, t) => {
  (M5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => f9(e, t, n, r)),
    (e.enum = t.entries),
    (e.options = Object.values(t.entries)));
  let n = new Set(Object.keys(t.entries));
  ((e.extract = (e, r) => {
    let i = {};
    for (let r of e)
      if (n.has(r)) i[r] = t.entries[r];
      else throw Error(`Key ${r} not found in enum`);
    return new N9({ ...t, checks: [], ...$(r), entries: i });
  }),
    (e.exclude = (e, r) => {
      let i = { ...t.entries };
      for (let t of e)
        if (n.has(t)) delete i[t];
        else throw Error(`Key ${t} not found in enum`);
      return new N9({ ...t, checks: [], ...$(r), entries: i });
    }));
});
function Ite(e, t) {
  return new N9({
    type: `enum`,
    entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
    ...$(t),
  });
}
var Lte = Z(`ZodTransform`, (e, t) => {
  (N5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => m9(e, t, n, r)),
    (e._zod.parse = (n, r) => {
      if (r.direction === `backward`) throw new G3(e.constructor.name);
      n.addIssue = (r) => {
        if (typeof r == `string`) n.issues.push(D6(r, n.value, t));
        else {
          let t = r;
          (t.fatal && (t.continue = !1),
            (t.code ??= `custom`),
            (t.input ??= n.value),
            (t.inst ??= e),
            n.issues.push(D6(t)));
        }
      };
      let i = t.transform(n.value, n);
      return i instanceof Promise
        ? i.then((e) => ((n.value = e), n))
        : ((n.value = i), n);
    }));
});
function Rte(e) {
  return new Lte({ type: `transform`, transform: e });
}
var P9 = Z(`ZodOptional`, (e, t) => {
  (F5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => b9(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function F9(e) {
  return new P9({ type: `optional`, innerType: e });
}
var zte = Z(`ZodExactOptional`, (e, t) => {
  (I5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => b9(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Bte(e) {
  return new zte({ type: `optional`, innerType: e });
}
var Vte = Z(`ZodNullable`, (e, t) => {
  (L5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => y9(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function I9(e) {
  return new Vte({ type: `nullable`, innerType: e });
}
var Hte = Z(`ZodDefault`, (e, t) => {
  (R5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Iee(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function Ute(e, t) {
  return new Hte({
    type: `default`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : l6(t);
    },
  });
}
var Wte = Z(`ZodPrefault`, (e, t) => {
  (B5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Lee(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Gte(e, t) {
  return new Wte({
    type: `prefault`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : l6(t);
    },
  });
}
var L9 = Z(`ZodNonOptional`, (e, t) => {
  (V5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Fee(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Kte(e, t) {
  return new L9({ type: `nonoptional`, innerType: e, ...$(t) });
}
var qte = Z(`ZodCatch`, (e, t) => {
  (U5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Ree(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function Jte(e, t) {
  return new qte({
    type: `catch`,
    innerType: e,
    catchValue: typeof t == `function` ? t : () => t,
  });
}
var Yte = Z(`ZodPipe`, (e, t) => {
  (W5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => zee(e, t, n, r)),
    (e.in = t.in),
    (e.out = t.out));
});
function R9(e, t) {
  return new Yte({ type: `pipe`, in: e, out: t });
}
var Xte = Z(`ZodReadonly`, (e, t) => {
  (K5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Bee(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Zte(e) {
  return new Xte({ type: `readonly`, innerType: e });
}
var Qte = Z(`ZodCustom`, (e, t) => {
  (J5.init(e, t),
    C9.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => p9(e, t, n, r)));
});
function $te(e, t = {}) {
  return Q7(Qte, e, t);
}
function ene(e) {
  return $7(e);
}
function z9(e) {
  return D7(k9, e);
}
var tne = () =>
  K(
    () => import(`./roles-DFUvNodP.js`),
    __vite__mapDeps([
      74, 1, 2, 3, 68, 5, 6, 7, 15, 69, 11, 4, 8, 43, 9, 52, 21, 28, 63, 54, 65,
      44, 45, 29, 23, 20, 41,
    ])
  );
M9({ name: T9().min(1), title: T9().min(1), description: T9() });
var nne = z(`/admin/roles`)({ component: B(tne, `component`) }),
  rne = () =>
    K(
      () => import(`./posts-IGxiGbw6.js`),
      __vite__mapDeps([
        75, 1, 2, 3, 73, 5, 6, 7, 19, 15, 11, 4, 8, 43, 9, 52, 21, 28, 39, 27,
        63, 54, 65, 44, 45, 29, 23, 20, 55, 22, 41, 56,
      ])
    );
M9({
  slug: T9().min(1),
  title: T9().min(1),
  description: T9(),
  content: T9(),
  categories: T9(),
  authorName: T9(),
  status: T9(),
});
var ine = z(`/admin/posts`)({ component: B(rne, `component`) }),
  ane = z(`/admin/permissions`)({
    component: B(
      () =>
        K(
          () => import(`./permissions-p4EALNAH.js`),
          __vite__mapDeps([
            76, 1, 2, 3, 4, 5, 6, 7, 8, 15, 9, 52, 21, 28, 63, 54, 65, 41, 29,
          ])
        ),
      `component`
    ),
  }),
  one = z(`/admin/payments`)({
    component: B(
      () =>
        K(
          () => import(`./payments-Ccua7s2h.js`),
          __vite__mapDeps([77, 1, 52, 2, 3, 15, 6, 7, 21, 28, 55, 22, 41, 56])
        ),
      `component`
    ),
  }),
  sne = () =>
    K(
      () => import(`./invite-codes-CMESr-Se.js`),
      __vite__mapDeps([
        78, 1, 2, 3, 4, 5, 6, 7, 8, 15, 43, 9, 52, 21, 28, 54, 65, 41, 29, 56,
      ])
    );
M9({
  count: z9().min(1),
  maxUses: z9().min(1),
  trialDays: z9().min(1),
  note: T9(),
  expiresAt: T9(),
});
var cne = z(`/admin/invite-codes`)({ component: B(sne, `component`) }),
  lne = z(`/admin/credits`)({
    component: B(
      () =>
        K(
          () => import(`./credits-BPXfLekg.js`),
          __vite__mapDeps([79, 1, 52, 2, 3, 15, 6, 7, 21, 28, 41, 56])
        ),
      `component`
    ),
  }),
  une = () =>
    K(
      () => import(`./categories-7w83mTPl.js`),
      __vite__mapDeps([
        80, 1, 2, 3, 4, 5, 6, 7, 8, 43, 9, 52, 15, 21, 28, 63, 54, 65, 44, 45,
        29, 23, 20, 55, 22, 41,
      ])
    );
M9({ slug: T9().min(1), title: T9().min(1), description: T9() });
var dne = z(`/admin/categories`)({ component: B(une, `component`) }),
  B9 = {},
  V9 = L.createContext(B9);
function H9(e) {
  let t = L.useContext(V9);
  return L.useMemo(
    function () {
      return typeof e == `function` ? e(t) : { ...t, ...e };
    },
    [t, e]
  );
}
function fne(e) {
  let t;
  return (
    (t = e.disableParentContext
      ? typeof e.components == `function`
        ? e.components(B9)
        : e.components || B9
      : H9(e.components)),
    L.createElement(V9.Provider, { value: t }, e.children)
  );
}
var pne = t({ default: () => hne, meta: () => mne }),
  mne = {
    title: `Privacy Policy`,
    description: `How we collect, use, and protect your personal information.`,
    updated_at: `2026-05-21`,
  };
function U9(e) {
  let t = {
    h2: `h2`,
    li: `li`,
    ol: `ol`,
    p: `p`,
    strong: `strong`,
    ul: `ul`,
    ...H9(),
    ...e.components,
  };
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsx)(t.h2, { children: `Introduction` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Information We Collect` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `We collect the following types of information to provide and improve our service:`,
      }),
      `
`,
      (0, R.jsxs)(t.ol, {
        children: [
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `Account Information` }),
              ` — Your name, email address, and other details you provide when creating an account.`,
            ],
          }),
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `Usage Data` }),
              ` — Information about how you interact with the service, including features accessed, frequency of use, and interaction patterns.`,
            ],
          }),
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `Device Information` }),
              ` — Device type, operating system, and browser type, used to optimize compatibility and performance.`,
            ],
          }),
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `Cookies` }),
              ` — Small data files stored on your device to remember preferences and improve your experience.`,
            ],
          }),
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `Payment Information` }),
              ` — Billing details handled by trusted third-party payment processors. We do not store full card numbers on our servers.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `How We Use Your Information` }),
      `
`,
      (0, R.jsx)(t.p, { children: `We use the data we collect to:` }),
      `
`,
      (0, R.jsxs)(t.ul, {
        children: [
          `
`,
          (0, R.jsx)(t.li, {
            children: `Provide, maintain, and improve the service.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `Process transactions and send related confirmations.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `Send technical notices, security alerts, and support messages.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `Respond to your questions, feedback, and support requests.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `Detect, prevent, and address fraud and abuse.`,
          }),
          `
`,
        ],
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Data Sharing` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `We do not sell your personal information. We may share data only in these limited cases:`,
      }),
      `
`,
      (0, R.jsxs)(t.ul, {
        children: [
          `
`,
          (0, R.jsx)(t.li, {
            children: `With service providers who help us operate the service, under confidentiality agreements.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `To comply with legal obligations or respond to lawful requests from public authorities.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `To protect our rights, property, or safety, or that of our users.`,
          }),
          `
`,
        ],
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Data Security` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `We implement industry-standard security measures including encryption in transit, access controls, and regular reviews. No method of transmission over the Internet is 100% secure, but we work continuously to protect your information.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Your Rights` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `You have the right to access, update, export, or delete your personal information. You can do this through your account settings or by contacting us at the email address below.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Changes to This Policy` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the date at the top of this page and, where appropriate, sending a notice through the service.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Contact Us` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `If you have questions about this Privacy Policy, please contact us at the email address provided on our website.`,
      }),
    ],
  });
}
function hne(e = {}) {
  let { wrapper: t } = { ...H9(), ...e.components };
  return t
    ? (0, R.jsx)(t, { ...e, children: (0, R.jsx)(U9, { ...e }) })
    : U9(e);
}
var gne = t({ default: () => vne, meta: () => _ne }),
  _ne = {
    title: `隐私政策`,
    description: `我们如何收集、使用和保护您的个人信息。`,
    updated_at: `2026-05-21`,
  };
function W9(e) {
  let t = {
    h2: `h2`,
    li: `li`,
    ol: `ol`,
    p: `p`,
    strong: `strong`,
    ul: `ul`,
    ...H9(),
    ...e.components,
  };
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsx)(t.h2, { children: `简介` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `我们尊重您的隐私,并致力于保护您的个人数据。本《隐私政策》说明了在您使用我们的服务时,我们如何收集、使用和保护您的信息。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `我们收集的信息` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `为了提供和改进服务,我们会收集以下类型的信息:`,
      }),
      `
`,
      (0, R.jsxs)(t.ol, {
        children: [
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `账户信息` }),
              ` —— 您在创建账户时提供的姓名、电子邮箱及其他资料。`,
            ],
          }),
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `使用数据` }),
              ` —— 您与服务交互的信息,包括使用的功能、使用频率和交互模式。`,
            ],
          }),
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `设备信息` }),
              ` —— 设备类型、操作系统、浏览器类型,用于优化兼容性与性能。`,
            ],
          }),
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `Cookie` }),
              ` —— 存储在您设备上的小型数据文件,用于记住偏好并改善体验。`,
            ],
          }),
          `
`,
          (0, R.jsxs)(t.li, {
            children: [
              (0, R.jsx)(t.strong, { children: `支付信息` }),
              ` —— 由可信的第三方支付处理方负责处理。我们不会在服务器上存储完整的银行卡号。`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `我们如何使用这些信息` }),
      `
`,
      (0, R.jsx)(t.p, { children: `我们使用收集到的数据用于:` }),
      `
`,
      (0, R.jsxs)(t.ul, {
        children: [
          `
`,
          (0, R.jsx)(t.li, { children: `提供、维护并改进服务。` }),
          `
`,
          (0, R.jsx)(t.li, { children: `处理交易并发送相关确认。` }),
          `
`,
          (0, R.jsx)(t.li, { children: `发送技术通知、安全提醒和支持信息。` }),
          `
`,
          (0, R.jsx)(t.li, { children: `回复您的问题、反馈和技术支持请求。` }),
          `
`,
          (0, R.jsx)(t.li, { children: `检测、预防和处理欺诈与滥用行为。` }),
          `
`,
        ],
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `信息共享` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `我们不会出售您的个人信息。仅在以下有限情况下,我们才会共享数据:`,
      }),
      `
`,
      (0, R.jsxs)(t.ul, {
        children: [
          `
`,
          (0, R.jsx)(t.li, {
            children: `与协助我们运营服务的供应商共享,并签署保密协议。`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `为遵守法律义务或响应公共部门的合法请求。`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `为保护我们或用户的权利、财产和安全。`,
          }),
          `
`,
        ],
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `数据安全` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `我们采用业界标准的安全措施,包括传输加密、访问控制以及定期审查。互联网传输无法做到 100% 安全,但我们会持续努力保护您的信息。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `您的权利` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `您有权访问、更新、导出或删除您的个人信息。您可以通过账户设置进行操作,或通过本页底部提供的方式与我们联系。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `政策变更` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `我们可能会不时更新本《隐私政策》。如有重大变更,我们将更新页面顶部的日期,并在必要时通过服务通知您。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `联系我们` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `如果您对本《隐私政策》有任何疑问,请通过我们网站上提供的电子邮箱与我们联系。`,
      }),
    ],
  });
}
function vne(e = {}) {
  let { wrapper: t } = { ...H9(), ...e.components };
  return t
    ? (0, R.jsx)(t, { ...e, children: (0, R.jsx)(W9, { ...e }) })
    : W9(e);
}
var yne = t({ default: () => xne, meta: () => bne }),
  bne = {
    title: `Terms of Service`,
    description: `The terms and conditions for using our service.`,
    updated_at: `2026-05-21`,
  };
function G9(e) {
  let t = { h2: `h2`, li: `li`, p: `p`, ul: `ul`, ...H9(), ...e.components };
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsx)(t.h2, { children: `Acceptance of Terms` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `By accessing or using this service, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Description of Service` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `We provide a software-as-a-service platform. We may modify, suspend, or discontinue any part of the service at any time, with reasonable notice where possible.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `User Accounts` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use or security breach.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Acceptable Use` }),
      `
`,
      (0, R.jsx)(t.p, { children: `You agree not to:` }),
      `
`,
      (0, R.jsxs)(t.ul, {
        children: [
          `
`,
          (0, R.jsx)(t.li, {
            children: `Violate any applicable laws or regulations.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `Infringe on the intellectual property or other rights of any party.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `Attempt to gain unauthorized access to our systems or data.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `Interfere with or disrupt the integrity or performance of the service.`,
          }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `Use the service to send spam, malware, or other harmful content.`,
          }),
          `
`,
        ],
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Payment and Billing` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `Paid features are billed in advance for the selected billing period. You are responsible for providing accurate billing information. Refunds are handled on a case-by-case basis in line with our refund policy.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Intellectual Property` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Termination` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `We may suspend or terminate your access to the service at any time if you violate these terms. You may close your account at any time through your account settings.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Limitation of Liability` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the service.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Changes to These Terms` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `We may modify these Terms at any time. We will notify users of any material changes by updating the date at the top of this page and, where appropriate, sending a notice through the service.`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `Contact` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `If you have questions about these Terms, please contact us at the email address provided on our website.`,
      }),
    ],
  });
}
function xne(e = {}) {
  let { wrapper: t } = { ...H9(), ...e.components };
  return t
    ? (0, R.jsx)(t, { ...e, children: (0, R.jsx)(G9, { ...e }) })
    : G9(e);
}
var Sne = t({ default: () => wne, meta: () => Cne }),
  Cne = {
    title: `服务条款`,
    description: `使用本服务的条款和条件。`,
    updated_at: `2026-05-21`,
  };
function K9(e) {
  let t = { h2: `h2`, li: `li`, p: `p`, ul: `ul`, ...H9(), ...e.components };
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsx)(t.h2, { children: `接受条款` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `访问或使用本服务即表示您同意受本《服务条款》约束。如不同意,请勿使用本服务。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `服务说明` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `我们提供软件即服务(SaaS)平台。我们可能随时修改、暂停或终止服务的任何部分,并在可能的情况下提前合理告知。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `用户账户` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `您有责任妥善保管账户凭据,并对账户下发生的所有活动负责。如发现未授权使用或安全漏洞,请立即通知我们。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `可接受的使用` }),
      `
`,
      (0, R.jsx)(t.p, { children: `您同意不会:` }),
      `
`,
      (0, R.jsxs)(t.ul, {
        children: [
          `
`,
          (0, R.jsx)(t.li, { children: `违反任何适用的法律或法规。` }),
          `
`,
          (0, R.jsx)(t.li, { children: `侵犯任何方的知识产权或其他权利。` }),
          `
`,
          (0, R.jsx)(t.li, { children: `试图未经授权访问我们的系统或数据。` }),
          `
`,
          (0, R.jsx)(t.li, { children: `干扰或破坏服务的完整性或性能。` }),
          `
`,
          (0, R.jsx)(t.li, {
            children: `通过本服务发送垃圾信息、恶意软件或其他有害内容。`,
          }),
          `
`,
        ],
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `支付与计费` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `付费功能按所选计费周期预付。您有责任提供准确的计费信息。退款将根据我们的退款政策按具体情况处理。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `知识产权` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `本服务及其原创内容、功能和特性归我们所有,受国际版权、商标和其他知识产权法律保护。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `账户终止` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `如您违反本条款,我们可随时暂停或终止您对服务的访问。您也可以通过账户设置随时关闭账户。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `责任限制` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `在法律允许的最大范围内,我们对因您使用或无法使用本服务而引起的任何间接、附带、特殊、衍生或惩罚性损害不承担责任。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `条款变更` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `我们可能随时修改本《服务条款》。如有重大变更,我们将更新页面顶部的日期,并在必要时通过服务通知您。`,
      }),
      `
`,
      (0, R.jsx)(t.h2, { children: `联系我们` }),
      `
`,
      (0, R.jsx)(t.p, {
        children: `如果您对本《服务条款》有任何疑问,请通过我们网站上提供的电子邮箱与我们联系。`,
      }),
    ],
  });
}
function wne(e = {}) {
  let { wrapper: t } = { ...H9(), ...e.components };
  return t
    ? (0, R.jsx)(t, { ...e, children: (0, R.jsx)(K9, { ...e }) })
    : K9(e);
}
var q9 = Object.assign({
  '/src/content/pages/privacy-policy.en.mdx': pne,
  '/src/content/pages/privacy-policy.zh.mdx': gne,
  '/src/content/pages/terms-of-service.en.mdx': yne,
  '/src/content/pages/terms-of-service.zh.mdx': Sne,
});
function J9(e, t) {
  return (
    q9[`/src/content/pages/${e}.${t}.mdx`] ??
    q9[`/src/content/pages/${e}.en.mdx`] ??
    null
  );
}
function Y9(e) {
  return {
    loader: () => {
      let t = s(),
        n = J9(e, t);
      if (!n) throw st();
      return { meta: n.meta, slug: e, locale: t };
    },
    head: ({ loaderData: t }) => {
      if (!t) return {};
      let { meta: n, locale: r } = t,
        i = o(`${Yu.app_url}/${e}`, { locale: r }).href;
      return {
        meta: [
          { title: n.title },
          { name: `description`, content: n.description },
        ],
        links: [{ rel: `canonical`, href: i }],
      };
    },
    component: Tne,
  };
}
function Tne() {
  let { meta: e, slug: t, locale: n } = oc({ strict: !1 }),
    r = J9(t, n).default;
  return (0, R.jsxs)(`article`, {
    children: [
      (0, R.jsxs)(`header`, {
        className: `border-border mb-6 border-b pb-5`,
        children: [
          (0, R.jsx)(`h1`, {
            className: `text-foreground text-3xl font-semibold tracking-tight md:text-4xl`,
            children: e.title,
          }),
          (0, R.jsx)(`p`, {
            className: `text-muted-foreground mt-2 text-sm`,
            children: e.description,
          }),
          (0, R.jsxs)(`p`, {
            className: `text-muted-foreground mt-2 text-xs`,
            children: [$v(), `: `, e.updated_at],
          }),
        ],
      }),
      (0, R.jsx)(`div`, {
        className: `text-foreground/90 text-[15px] leading-7`,
        children: (0, R.jsx)(r, {}),
      }),
    ],
  });
}
var Ene = z(`/(pages)/terms-of-service`)(Y9(`terms-of-service`)),
  Dne = z(`/(pages)/privacy-policy`)(Y9(`privacy-policy`)),
  One = _3.update({
    id: `/pricing`,
    path: `/pricing`,
    getParentRoute: () => rm,
  }),
  X9 = v3.update({
    id: `/settings`,
    path: `/settings`,
    getParentRoute: () => rm,
  }),
  Z9 = y3.update({ id: `/admin`, path: `/admin`, getParentRoute: () => rm }),
  Q9 = b3.update({ id: `/(pages)`, getParentRoute: () => rm }),
  kne = x3.update({ id: `/`, path: `/`, getParentRoute: () => rm }),
  Ane = w3.update({ id: `/blog/`, path: `/blog/`, getParentRoute: () => rm }),
  jne = T3.update({
    id: `/blog/$slug`,
    path: `/blog/$slug`,
    getParentRoute: () => rm,
  }),
  Mne = E3.update({
    id: `/(auth)/verify-email`,
    path: `/verify-email`,
    getParentRoute: () => rm,
  }),
  Nne = D3.update({
    id: `/(auth)/sign-up`,
    path: `/sign-up`,
    getParentRoute: () => rm,
  }),
  Pne = O3.update({
    id: `/(auth)/sign-in`,
    path: `/sign-in`,
    getParentRoute: () => rm,
  }),
  Fne = k3.update({
    id: `/(auth)/reset-password`,
    path: `/reset-password`,
    getParentRoute: () => rm,
  }),
  Ine = A3.update({
    id: `/(auth)/redeem-invite`,
    path: `/redeem-invite`,
    getParentRoute: () => rm,
  }),
  Lne = j3.update({
    id: `/(auth)/forgot-password`,
    path: `/forgot-password`,
    getParentRoute: () => rm,
  }),
  Rne = M3.update({ id: `/`, path: `/`, getParentRoute: () => X9 }),
  zne = N3.update({
    id: `/tickets`,
    path: `/tickets`,
    getParentRoute: () => X9,
  }),
  Bne = P3.update({
    id: `/profile`,
    path: `/profile`,
    getParentRoute: () => X9,
  }),
  Vne = F3.update({
    id: `/payments`,
    path: `/payments`,
    getParentRoute: () => X9,
  }),
  Hne = I3.update({
    id: `/credits`,
    path: `/credits`,
    getParentRoute: () => X9,
  }),
  Une = L3.update({
    id: `/billing`,
    path: `/billing`,
    getParentRoute: () => X9,
  }),
  Wne = R3.update({
    id: `/apikeys`,
    path: `/apikeys`,
    getParentRoute: () => X9,
  }),
  Gne = z3.update({ id: `/`, path: `/`, getParentRoute: () => Z9 }),
  Kne = B3.update({ id: `/users`, path: `/users`, getParentRoute: () => Z9 }),
  qne = V3.update({
    id: `/tickets`,
    path: `/tickets`,
    getParentRoute: () => Z9,
  }),
  Jne = H3.update({
    id: `/subscriptions`,
    path: `/subscriptions`,
    getParentRoute: () => Z9,
  }),
  Yne = U3.update({
    id: `/settings`,
    path: `/settings`,
    getParentRoute: () => Z9,
  }),
  Xne = nne.update({ id: `/roles`, path: `/roles`, getParentRoute: () => Z9 }),
  Zne = ine.update({ id: `/posts`, path: `/posts`, getParentRoute: () => Z9 }),
  Qne = ane.update({
    id: `/permissions`,
    path: `/permissions`,
    getParentRoute: () => Z9,
  }),
  $ne = one.update({
    id: `/payments`,
    path: `/payments`,
    getParentRoute: () => Z9,
  }),
  ere = cne.update({
    id: `/invite-codes`,
    path: `/invite-codes`,
    getParentRoute: () => Z9,
  }),
  tre = lne.update({
    id: `/credits`,
    path: `/credits`,
    getParentRoute: () => Z9,
  }),
  nre = dne.update({
    id: `/categories`,
    path: `/categories`,
    getParentRoute: () => Z9,
  }),
  rre = Ene.update({
    id: `/terms-of-service`,
    path: `/terms-of-service`,
    getParentRoute: () => Q9,
  }),
  ire = {
    pagesPrivacyPolicyRoute: Dne.update({
      id: `/privacy-policy`,
      path: `/privacy-policy`,
      getParentRoute: () => Q9,
    }),
    pagesTermsOfServiceRoute: rre,
  },
  are = Q9._addFileChildren(ire),
  ore = {
    AdminCategoriesRoute: nre,
    AdminCreditsRoute: tre,
    AdminInviteCodesRoute: ere,
    AdminPaymentsRoute: $ne,
    AdminPermissionsRoute: Qne,
    AdminPostsRoute: Zne,
    AdminRolesRoute: Xne,
    AdminSettingsRoute: Yne,
    AdminSubscriptionsRoute: Jne,
    AdminTicketsRoute: qne,
    AdminUsersRoute: Kne,
    AdminIndexRoute: Gne,
  },
  sre = Z9._addFileChildren(ore),
  cre = {
    SettingsApikeysRoute: Wne,
    SettingsBillingRoute: Une,
    SettingsCreditsRoute: Hne,
    SettingsPaymentsRoute: Vne,
    SettingsProfileRoute: Bne,
    SettingsTicketsRoute: zne,
    SettingsIndexRoute: Rne,
  },
  lre = {
    IndexRoute: kne,
    pagesRouteRoute: are,
    AdminRouteRoute: sre,
    SettingsRouteRoute: X9._addFileChildren(cre),
    PricingRoute: One,
    authForgotPasswordRoute: Lne,
    authRedeemInviteRoute: Ine,
    authResetPasswordRoute: Fne,
    authSignInRoute: Pne,
    authSignUpRoute: Nne,
    authVerifyEmailRoute: Mne,
    BlogSlugRoute: jne,
    BlogIndexRoute: Ane,
  },
  ure = rm._addFileChildren(lre),
  dre = `/imagetoascii-replica`;
function fre() {
  return Wc({
    routeTree: ure,
    basepath: dre,
    defaultPreload: `intent`,
    scrollRestoration: !0,
    rewrite: { input: ({ url: e }) => a(e), output: ({ url: e }) => o(e) },
  });
}
async function pre() {
  let e = await fre(),
    t = [];
  return (
    (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }),
    t.push(ss),
    e.options.serializationAdapters &&
      t.push(...e.options.serializationAdapters),
    e.update({ basepath: `/imagetoascii-replica`, serializationAdapters: t }),
    e.stores.matchesId.get().length || (await ps(e)),
    e
  );
}
var mre = pre;
async function hre() {
  let e = await mre();
  return (window.$_TSR?.h(), e);
}
var $9;
function gre() {
  return (
    ($9 ||= hre()),
    (0, R.jsx)(bs, {
      promise: $9,
      children: (e) => (0, R.jsx)(qc, { router: e }),
    })
  );
}
var _re = p();
(0, L.startTransition)(() => {
  (0, _re.hydrateRoot)(
    document,
    (0, R.jsx)(L.StrictMode, { children: (0, R.jsx)(gre, {}) })
  );
});
export {
  oQ as $,
  PD as $a,
  Zg as $c,
  YA as $i,
  cp as $l,
  TL as $n,
  _w as $o,
  pP as $r,
  Mb as $s,
  TV as $t,
  v0 as A,
  QO as Aa,
  Wv as Ac,
  yM as Ai,
  mh as Al,
  tz as An,
  OT as Ao,
  PF as Ar,
  nS as As,
  BH as At,
  ce as Au,
  f$ as B,
  yO as Ba,
  X_ as Bc,
  Uj as Bi,
  Bm as Bl,
  uR as Bn,
  oT as Bo,
  iF as Br,
  _x as Bs,
  uH as Bt,
  z0 as C,
  yk as Ca,
  my as Cc,
  BM as Ci,
  Fh as Cl,
  Sz as Cn,
  tE as Co,
  tI as Cr,
  CS as Cs,
  gU as Ct,
  tl as Cu,
  D0 as D,
  sk as Da,
  ny as Dc,
  OM as Di,
  Ch as Dl,
  uz as Dn,
  UT as Do,
  UF as Dr,
  dS as Ds,
  YH as Dt,
  ec as Du,
  A0 as E,
  uk as Ea,
  ay as Ec,
  jM as Ei,
  Eh as El,
  pz as En,
  KT as Eo,
  KF as Er,
  mS as Es,
  QH as Et,
  rc as Eu,
  r0 as F,
  PO as Fa,
  mv as Fc,
  iM as Fi,
  $m as Fl,
  TR as Fn,
  pT as Fo,
  yF as Fr,
  Mx as Fs,
  TH as Ft,
  ZQ as G,
  iO as Ga,
  M_ as Gc,
  Tj as Gi,
  Sm as Gl,
  YL as Gn,
  $w as Go,
  LP as Gr,
  nx as Gs,
  YV as Gt,
  o$ as H,
  pO as Ha,
  V_ as Hc,
  Lj as Hi,
  Pm as Hl,
  iR as Hn,
  iT as Ho,
  KP as Hr,
  dx as Hs,
  iH as Ht,
  e0 as I,
  jO as Ia,
  cv as Ic,
  tM as Ii,
  Xm as Il,
  SR as In,
  uT as Io,
  gF as Ir,
  kx as Is,
  SH as It,
  HQ as J,
  YD as Ja,
  c_ as Jc,
  uj as Ji,
  Yp as Jl,
  BL as Jn,
  Ww as Jo,
  OP as Jr,
  qb as Js,
  BV as Jt,
  JQ as K,
  tO as Ka,
  k_ as Kc,
  gj as Ki,
  gm as Kl,
  KL as Kn,
  Xw as Ko,
  PP as Kr,
  $b as Ks,
  KV as Kt,
  Z1 as L,
  OO as La,
  av as Lc,
  Qj as Li,
  qm as Ll,
  yR as Ln,
  lT as Lo,
  pF as Lr,
  Ex as Ls,
  yH as Lt,
  f0 as M,
  KO as Ma,
  Mv as Mc,
  pM as Mi,
  ch as Ml,
  UR as Mn,
  ST as Mo,
  OF as Mr,
  qx as Ms,
  PH as Mt,
  l0 as N,
  UO as Na,
  bv as Nc,
  uM as Ni,
  ah as Nl,
  jR as Nn,
  yT as No,
  TF as Nr,
  Rx as Ns,
  jH as Nt,
  w0 as O,
  ik as Oa,
  Xv as Oc,
  TM as Oi,
  bh as Ol,
  sz as On,
  BT as Oo,
  BF as Or,
  cS as Os,
  KH as Ot,
  Qs as Ou,
  o0 as P,
  BO as Pa,
  _v as Pc,
  sM as Pi,
  nh as Pl,
  OR as Pn,
  gT as Po,
  SF as Pr,
  Fx as Ps,
  OH as Pt,
  lQ as Q,
  LD as Qa,
  Qg as Qc,
  QA as Qi,
  np as Ql,
  OL as Qn,
  Mw as Qo,
  gP as Qr,
  Fb as Qs,
  OV as Qt,
  v$ as R,
  TO as Ra,
  nv as Rc,
  Yj as Ri,
  Wm as Rl,
  gR as Rn,
  cT as Ro,
  uF as Rr,
  Cx as Rs,
  gH as Rt,
  H0 as S,
  Sk as Sa,
  _y as Sc,
  UM as Si,
  Rh as Sl,
  Pz as Sn,
  iE as So,
  iI as Sr,
  ES as Ss,
  yU as St,
  jl as Su,
  N0 as T,
  pk as Ta,
  cy as Tc,
  PM as Ti,
  kh as Tl,
  gz as Tn,
  YT as To,
  YF as Tr,
  _S as Ts,
  uU as Tt,
  wc as Tu,
  r$ as U,
  uO as Ua,
  R_ as Uc,
  jj as Ui,
  jm as Ul,
  tR as Un,
  rT as Uo,
  UP as Ur,
  cx as Us,
  tH as Ut,
  l$ as V,
  gO as Va,
  q_ as Vc,
  Bj as Vi,
  Lm as Vl,
  sR as Vn,
  aT as Vo,
  tF as Vr,
  mx as Vs,
  sH as Vt,
  e$ as W,
  sO as Wa,
  F_ as Wc,
  Oj as Wi,
  Om as Wl,
  QL as Wn,
  nT as Wo,
  BP as Wr,
  ax as Ws,
  QV as Wt,
  hQ as X,
  UD as Xa,
  n_ as Xc,
  ij as Xi,
  Tp as Xl,
  PL as Xn,
  Rw as Xo,
  SP as Xr,
  Vb as Xs,
  PV as Xt,
  vQ as Y,
  KD as Ya,
  a_ as Yc,
  sj as Yi,
  Jp as Yl,
  LL as Yn,
  Vw as Yo,
  TP as Yr,
  Wb as Ys,
  LV as Yt,
  fQ as Z,
  BD as Za,
  $g as Zc,
  tj as Zi,
  up as Zl,
  jL as Zn,
  Fw as Zo,
  yP as Zr,
  Rb as Zs,
  jV as Zt,
  r2 as _,
  Bk as _a,
  My as _c,
  sN as _i,
  $h as _l,
  tB as _n,
  TE as _o,
  yI as _r,
  VS as _s,
  PU as _t,
  Ll as _u,
  T9 as a,
  jA as aa,
  mb as ac,
  YN as ai,
  Fg as al,
  QB as an,
  sD as ao,
  sL as ar,
  CC as as,
  HZ as at,
  Yf as au,
  J0 as b,
  Ok as ba,
  Cy as bc,
  QM as bi,
  Wh as bl,
  Kz as bn,
  uE as bo,
  uI as br,
  MS as bs,
  TU as bt,
  sl as bu,
  g3 as c,
  SA as ca,
  ab as cc,
  BN as ci,
  Eg as cl,
  UB as cn,
  QE as co,
  QI as cr,
  mC as cs,
  PW as ct,
  Xf as cu,
  G4 as d,
  uA as da,
  Xy as dc,
  jN as di,
  _g as dl,
  OB as dn,
  UE as do,
  UI as dr,
  aC as ds,
  TW as dt,
  $f as du,
  KA as ea,
  kb as ec,
  uP as ei,
  Xg as el,
  SV as en,
  jD as eo,
  SL as er,
  mw as es,
  rQ as et,
  ip as eu,
  H4 as f,
  sA as fa,
  qy as fc,
  ON as fi,
  mg as fl,
  gB as fn,
  BE as fo,
  BI as fr,
  nC as fs,
  SW as ft,
  Yu as fu,
  o2 as g,
  Uk as ga,
  Fy as gc,
  gN as gi,
  ng as gl,
  iB as gn,
  OE as go,
  SI as gr,
  WS as gs,
  LU as gt,
  eu as gu,
  l2 as h,
  Qk as ha,
  Ry as hc,
  yN as hi,
  ag as hl,
  sB as hn,
  jE as ho,
  TI as hr,
  qS as hs,
  BU as ht,
  ou as hu,
  M9 as i,
  PA as ia,
  _b as ic,
  QN as ii,
  Rg as il,
  tV as in,
  uD as io,
  uL as ir,
  EC as is,
  GZ as it,
  lp as iu,
  h0 as j,
  YO as ja,
  Vv as jc,
  gM as ji,
  dh as jl,
  KR as jn,
  TT as jo,
  jF as jr,
  $x as js,
  LH as jt,
  x0 as k,
  tk as ka,
  qv as kc,
  SM as ki,
  _h as kl,
  iz as kn,
  jT as ko,
  LF as kr,
  aS as ks,
  UH as kt,
  ks as ku,
  Z4 as l,
  yA as la,
  nb as lc,
  LN as li,
  Cg as ll,
  BB as ln,
  YE as lo,
  YI as lr,
  dC as ls,
  jW as lt,
  Qf as lu,
  f2 as m,
  tA as ma,
  Vy as mc,
  SN as mi,
  cg as ml,
  uB as mn,
  PE as mo,
  OI as mr,
  XS as ms,
  UU as mt,
  xu as mu,
  H9 as n,
  BA as na,
  Cb as nc,
  iP as ni,
  Wg as nl,
  sV as nn,
  gD as no,
  gL as nr,
  cw as ns,
  ZZ as nt,
  ap as nu,
  T3 as o,
  OA as oa,
  db as oc,
  KN as oi,
  Mg as ol,
  YB as on,
  iD as oo,
  iL as or,
  bC as os,
  BW as ot,
  ep as ou,
  h2 as p,
  iA as pa,
  Wy as pc,
  TN as pi,
  dg as pl,
  pB as pn,
  LE as po,
  LI as pr,
  $S as ps,
  KU as pt,
  Bu as pu,
  GQ as q,
  QD as qa,
  E_ as qc,
  pj as qi,
  Zp as ql,
  UL as qn,
  qw as qo,
  jP as qr,
  Xb as qs,
  UV as qt,
  z9 as r,
  LA as ra,
  bb as rc,
  tP as ri,
  Vg as rl,
  iV as rn,
  pD as ro,
  pL as rr,
  aw as rs,
  JZ as rt,
  op as ru,
  w3 as s,
  TA as sa,
  cb as sc,
  UN as si,
  kg as sl,
  KB as sn,
  tD as so,
  tL as sr,
  _C as ss,
  LW as st,
  tp as su,
  fne as t,
  UA as ta,
  Eb as tc,
  sP as ti,
  qg as tl,
  uV as tn,
  yD as to,
  yL as tr,
  dw as ts,
  eQ as tt,
  sp as tu,
  J4 as u,
  pA as ua,
  $y as uc,
  PN as ui,
  bg as ul,
  jB as un,
  KE as uo,
  KI as ur,
  cC as us,
  OW as ut,
  Zf as uu,
  e2 as v,
  Lk as va,
  ky as vc,
  iN as vi,
  Xh as vl,
  Qz as vn,
  yE as vo,
  gI as vr,
  RS as vs,
  jU as vt,
  gl as vu,
  I0 as w,
  gk as wa,
  dy as wc,
  LM as wi,
  Mh as wl,
  yz as wn,
  QT as wo,
  QF as wr,
  bS as ws,
  pU as wt,
  zc as wu,
  G0 as x,
  Tk as xa,
  by as xc,
  YM as xi,
  Vh as xl,
  Lz as xn,
  sE as xo,
  sI as xr,
  kS as xs,
  SU as xt,
  bl as xu,
  Z0 as y,
  Pk as ya,
  Ey as yc,
  tN as yi,
  qh as yl,
  Yz as yn,
  gE as yo,
  pI as yr,
  FS as ys,
  OU as yt,
  El as yu,
  h$ as z,
  SO as za,
  $_ as zc,
  Kj as zi,
  Vm as zl,
  pR as zn,
  sT as zo,
  sF as zr,
  bx as zs,
  pH as zt,
};
