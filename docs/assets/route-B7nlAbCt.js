import { jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';
import {
  CreditCard,
  FolderOpen,
  Home,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Shield,
} from 'lucide-react';

import { t as AppLayout } from './app-layout-CxnNsCKl.js';
import {
  va as admin_nav_billing,
  ba as admin_nav_categories,
  xa as admin_nav_content,
  ha as admin_nav_credits,
  ma as admin_nav_invite_codes,
  Da as admin_nav_overview,
  _a as admin_nav_payments,
  Sa as admin_nav_permissions,
  ya as admin_nav_posts,
  Ta as admin_nav_rbac,
  Ca as admin_nav_roles,
  Ea as admin_nav_settings,
  ga as admin_nav_subscriptions,
  pa as admin_nav_tickets,
  wa as admin_nav_users,
  Fc as common_systems_admin,
  Nc as common_systems_home,
} from './messages-DC2BhyRd.js';
import { b as envConfigs } from './schema-DUwBz_C6.js';

//#region src/routes/admin/route.tsx?tsr-split=component
function AdminLayout() {
  const group = common_systems_admin();
  return /* @__PURE__ */ jsx(AppLayout, {
    navItems: [
      {
        href: '/admin',
        label: admin_nav_overview(),
        icon: LayoutDashboard,
        group,
      },
      {
        href: '/admin/users',
        label: admin_nav_rbac(),
        icon: Shield,
        group,
        items: [
          {
            href: '/admin/users',
            label: admin_nav_users(),
          },
          {
            href: '/admin/invite-codes',
            label: admin_nav_invite_codes(),
          },
          {
            href: '/admin/roles',
            label: admin_nav_roles(),
          },
          {
            href: '/admin/permissions',
            label: admin_nav_permissions(),
          },
        ],
      },
      {
        href: '/admin/categories',
        label: admin_nav_content(),
        icon: FolderOpen,
        group,
        items: [
          {
            href: '/admin/categories',
            label: admin_nav_categories(),
          },
          {
            href: '/admin/posts',
            label: admin_nav_posts(),
          },
        ],
      },
      {
        href: '/admin/payments',
        label: admin_nav_billing(),
        icon: CreditCard,
        group,
        items: [
          {
            href: '/admin/payments',
            label: admin_nav_payments(),
          },
          {
            href: '/admin/subscriptions',
            label: admin_nav_subscriptions(),
          },
          {
            href: '/admin/credits',
            label: admin_nav_credits(),
          },
        ],
      },
      {
        href: '/admin/tickets',
        label: admin_nav_tickets(),
        icon: LifeBuoy,
        group,
      },
    ],
    footerNavItems: [
      {
        href: '/admin/settings',
        label: admin_nav_settings(),
        icon: Settings,
      },
      {
        href: '/',
        label: common_systems_home(),
        icon: Home,
        newTab: true,
      },
    ],
    brand: envConfigs.app_name,
    brandHref: '/admin',
    profileHref: '/settings/profile',
    requirePermission: 'admin.*',
    children: /* @__PURE__ */ jsx(Outlet, {}),
  });
}
//#endregion
export { AdminLayout as component };
