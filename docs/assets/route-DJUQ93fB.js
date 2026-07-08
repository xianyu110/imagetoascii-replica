import { t as a, r as i, a as n, i as r } from './app-layout-BTNWefhz.js';
import { t } from './credit-card-Bcyz6Bas.js';
import {
  Vc as _,
  fu as b,
  Ca as c,
  wa as C,
  Ma as d,
  zc as E,
  Na as f,
  Ta as g,
  Sa as h,
  Da as l,
  Pa as m,
  Oa as p,
  Aa as s,
  ka as S,
  xa as T,
  Ea as u,
  Yl as v,
  wu as w,
  ja as x,
  ba as y,
} from './index-D7NQvf2G.js';
import { c as e } from './runtime-DPDP4QTt.js';
import { t as o } from './shield-D4pxeQWN.js';

var D = v(`folder-open`, [
    [
      `path`,
      {
        d: `m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,
        key: `usdka0`,
      },
    ],
  ]),
  O = v(`settings`, [
    [
      `path`,
      {
        d: `M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`,
        key: `1qme2f`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  k = e();
function A() {
  let e = _();
  return (0, k.jsx)(a, {
    navItems: [
      { href: `/admin`, label: m(), icon: r, group: e },
      {
        href: `/admin/users`,
        label: d(),
        icon: o,
        group: e,
        items: [
          { href: `/admin/users`, label: x() },
          { href: `/admin/invite-codes`, label: T() },
          { href: `/admin/roles`, label: s() },
          { href: `/admin/permissions`, label: S() },
        ],
      },
      {
        href: `/admin/categories`,
        label: p(),
        icon: D,
        group: e,
        items: [
          { href: `/admin/categories`, label: l() },
          { href: `/admin/posts`, label: u() },
        ],
      },
      {
        href: `/admin/payments`,
        label: g(),
        icon: t,
        group: e,
        items: [
          { href: `/admin/payments`, label: C() },
          { href: `/admin/subscriptions`, label: c() },
          { href: `/admin/credits`, label: h() },
        ],
      },
      { href: `/admin/tickets`, label: y(), icon: i, group: e },
    ],
    footerNavItems: [
      { href: `/admin/settings`, label: f(), icon: O },
      { href: `/`, label: E(), icon: n, newTab: !0 },
    ],
    brand: b.app_name,
    brandHref: `/admin`,
    profileHref: `/settings/profile`,
    requirePermission: `admin.*`,
    children: (0, k.jsx)(w, {}),
  });
}
export { A as component };
