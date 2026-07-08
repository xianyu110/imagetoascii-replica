import { jsx, jsxs } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';
import { Shield, Users } from 'lucide-react';

import { r as apiGet } from './api-client-ddg0Kx1A.js';
import {
  t as Card,
  n as CardContent,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import {
  ka as admin_description,
  da as admin_stats_roles,
  fa as admin_stats_total_users,
  Aa as admin_title,
} from './messages-DC2BhyRd.js';

//#region src/routes/admin/index.tsx?tsr-split=component
function AdminPage() {
  const usersQuery = useQuery({
    queryKey: ['admin-users-total'],
    queryFn: () => apiGet('/api/admin/users'),
  });
  const rolesQuery = useQuery({
    queryKey: ['admin-roles-total'],
    queryFn: () => apiGet('/api/admin/roles'),
  });
  const stats = {
    users: usersQuery.data?.total ?? 0,
    roles: rolesQuery.data?.total ?? 0,
  };
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-6 p-6',
    children: [
      /* @__PURE__ */ jsxs('div', {
        children: [
          /* @__PURE__ */ jsx('h1', {
            className: 'text-2xl font-bold',
            children: admin_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: admin_description(),
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('div', {
        className: 'grid gap-4 md:grid-cols-2 lg:grid-cols-4',
        children: [
          /* @__PURE__ */ jsxs(Card, {
            children: [
              /* @__PURE__ */ jsxs(CardHeader, {
                className:
                  'flex flex-row items-center justify-between space-y-0 pb-2',
                children: [
                  /* @__PURE__ */ jsx(CardTitle, {
                    className: 'text-sm font-medium',
                    children: admin_stats_total_users(),
                  }),
                  /* @__PURE__ */ jsx(Users, {
                    className: 'text-muted-foreground size-4',
                  }),
                ],
              }),
              /* @__PURE__ */ jsx(CardContent, {
                children: /* @__PURE__ */ jsx('div', {
                  className: 'text-2xl font-bold',
                  children: stats.users,
                }),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Card, {
            children: [
              /* @__PURE__ */ jsxs(CardHeader, {
                className:
                  'flex flex-row items-center justify-between space-y-0 pb-2',
                children: [
                  /* @__PURE__ */ jsx(CardTitle, {
                    className: 'text-sm font-medium',
                    children: admin_stats_roles(),
                  }),
                  /* @__PURE__ */ jsx(Shield, {
                    className: 'text-muted-foreground size-4',
                  }),
                ],
              }),
              /* @__PURE__ */ jsx(CardContent, {
                children: /* @__PURE__ */ jsx('div', {
                  className: 'text-2xl font-bold',
                  children: stats.roles,
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { AdminPage as component };
