import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { Coins, MoreHorizontal, Shield } from 'lucide-react';
import { toast } from 'sonner';

import {
  n as apiDelete,
  r as apiGet,
  a as apiPost,
  s as pageQuery,
} from './api-client-ddg0Kx1A.js';
import {
  t as Avatar,
  n as AvatarFallback,
  r as AvatarImage,
} from './avatar-ClZeTlv2.js';
import { t as Button } from './button-RkClB0x2.js';
import { t as Card, n as CardContent } from './card-CJS2GQq6.js';
import { t as Checkbox } from './checkbox-Br-oXbkf.js';
import { t as DataTable } from './data-table-Df_eQ-7W.js';
import {
  t as Dialog,
  n as DialogContent,
  r as DialogDescription,
  i as DialogFooter,
  a as DialogHeader,
  o as DialogTitle,
} from './dialog-D6wavpEs.js';
import {
  t as DropdownMenu,
  n as DropdownMenuContent,
  i as DropdownMenuItem,
  u as DropdownMenuTrigger,
} from './dropdown-menu-zTeG2WVe.js';
import { t as Input } from './input-B6v4Jp25.js';
import {
  yi as admin_roles_cancel,
  Ri as admin_roles_no_roles,
  ra as admin_users_actions_col,
  Yi as admin_users_credits_action_deduct,
  Xi as admin_users_credits_action_grant,
  Ji as admin_users_credits_amount_label,
  aa as admin_users_credits_col,
  Vi as admin_users_credits_deducted,
  qi as admin_users_credits_desc_label,
  Ki as admin_users_credits_desc_placeholder,
  Hi as admin_users_credits_granted,
  Ui as admin_users_credits_invalid_amount,
  Gi as admin_users_credits_submit,
  Wi as admin_users_credits_submitting,
  la as admin_users_description,
  oa as admin_users_email_col,
  ia as admin_users_joined_col,
  Zi as admin_users_manage_credits_for,
  Qi as admin_users_manage_credits_title,
  ta as admin_users_manage_roles_description,
  na as admin_users_manage_roles_title,
  ca as admin_users_no_users,
  ea as admin_users_role_assigned,
  $i as admin_users_role_removed,
  ua as admin_users_title,
  sa as admin_users_user_col,
} from './messages-DC2BhyRd.js';

//#region src/routes/admin/users.tsx?tsr-split=component
var PAGE_SIZE = 10;
function UsersPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [managingUser, setManagingUser] = useState(null);
  const [creditsUser, setCreditsUser] = useState(null);
  const [creditsAction, setCreditsAction] = useState('grant');
  const [creditsAmount, setCreditsAmount] = useState('');
  const [creditsDesc, setCreditsDesc] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);
  const listQuery = useQuery({
    queryKey: ['admin-users', page, debouncedSearch],
    queryFn: () =>
      apiGet(
        pageQuery('/api/admin/users', {
          page,
          pageSize: PAGE_SIZE,
          search: debouncedSearch,
        })
      ),
    placeholderData: keepPreviousData,
  });
  const allRolesQuery = useQuery({
    queryKey: ['admin-roles-all'],
    queryFn: () => apiGet('/api/admin/roles?page=1&pageSize=999'),
    enabled: !!managingUser,
  });
  const userRolesQuery = useQuery({
    queryKey: ['user-roles', managingUser?.id],
    queryFn: () => apiGet(`/api/admin/roles?userId=${managingUser.id}`),
    enabled: !!managingUser,
  });
  const allRoles = allRolesQuery.data?.items ?? [];
  const userRoleIds = new Set((userRolesQuery.data ?? []).map((r) => r.roleId));
  function openRoleDialog(u) {
    setManagingUser(u);
  }
  function openCreditsDialog(u) {
    setCreditsUser(u);
    setCreditsAction('grant');
    setCreditsAmount('');
    setCreditsDesc('');
  }
  const creditsMutation = useMutation({
    mutationFn: (vars) => apiPost('/api/admin/users/credits', vars),
    onSuccess: (_data, vars) => {
      toast.success(
        vars.action === 'grant'
          ? admin_users_credits_granted()
          : admin_users_credits_deducted()
      );
      setCreditsUser(null);
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
    },
    onError: (e) => toast.error(e.message),
  });
  function submitCredits() {
    if (!creditsUser) return;
    const amount = Number(creditsAmount);
    if (!Number.isFinite(amount) || amount <= 0) {
      toast.error(admin_users_credits_invalid_amount());
      return;
    }
    creditsMutation.mutate({
      userId: creditsUser.id,
      action: creditsAction,
      credits: amount,
      description: creditsDesc || void 0,
    });
  }
  const assignRoleMutation = useMutation({
    mutationFn: (roleId) =>
      apiPost('/api/admin/roles/assign', {
        userId: managingUser.id,
        roleId,
      }),
    onSuccess: () => {
      toast.success(admin_users_role_assigned());
      queryClient.invalidateQueries({
        queryKey: ['user-roles', managingUser?.id],
      });
    },
    onError: (e) => toast.error(e.message),
  });
  const removeRoleMutation = useMutation({
    mutationFn: (roleId) =>
      apiDelete(
        `/api/admin/roles/assign?userId=${managingUser.id}&roleId=${roleId}`
      ),
    onSuccess: () => {
      toast.success(admin_users_role_removed());
      queryClient.invalidateQueries({
        queryKey: ['user-roles', managingUser?.id],
      });
    },
    onError: (e) => toast.error(e.message),
  });
  const toggling = assignRoleMutation.isPending || removeRoleMutation.isPending;
  function toggleRole(roleId) {
    if (!managingUser || toggling) return;
    if (userRoleIds.has(roleId)) removeRoleMutation.mutate(roleId);
    else assignRoleMutation.mutate(roleId);
  }
  const columns = [
    {
      header: admin_users_user_col(),
      cell: (u) =>
        /* @__PURE__ */ jsxs('div', {
          className: 'flex items-center gap-3',
          children: [
            /* @__PURE__ */ jsxs(Avatar, {
              className: 'size-8',
              children: [
                /* @__PURE__ */ jsx(AvatarImage, { src: u.image || void 0 }),
                /* @__PURE__ */ jsx(AvatarFallback, {
                  className: 'text-xs',
                  children: (u.name || u.email).charAt(0).toUpperCase(),
                }),
              ],
            }),
            /* @__PURE__ */ jsx('span', {
              className: 'font-medium',
              children: u.name || '—',
            }),
          ],
        }),
    },
    {
      header: admin_users_email_col(),
      cell: (u) => u.email,
    },
    {
      header: admin_users_credits_col(),
      className: 'w-[120px]',
      cell: (u) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium tabular-nums',
          children: u.credits.toLocaleString(),
        }),
    },
    {
      header: admin_users_joined_col(),
      cell: (u) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: new Date(u.createdAt).toLocaleDateString(),
        }),
    },
    {
      header: admin_users_actions_col(),
      className: 'w-[80px]',
      cell: (u) =>
        /* @__PURE__ */ jsxs(DropdownMenu, {
          children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, {
              render: /* @__PURE__ */ jsx(Button, {
                variant: 'ghost',
                size: 'icon',
                className: 'size-7',
                children: /* @__PURE__ */ jsx(MoreHorizontal, {
                  className: 'size-4',
                }),
              }),
            }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, {
              align: 'end',
              children: [
                /* @__PURE__ */ jsxs(DropdownMenuItem, {
                  onClick: () => openCreditsDialog(u),
                  children: [
                    /* @__PURE__ */ jsx(Coins, { className: 'size-4' }),
                    admin_users_manage_credits_title(),
                  ],
                }),
                /* @__PURE__ */ jsxs(DropdownMenuItem, {
                  onClick: () => openRoleDialog(u),
                  children: [
                    /* @__PURE__ */ jsx(Shield, { className: 'size-4' }),
                    admin_users_manage_roles_title(),
                  ],
                }),
              ],
            }),
          ],
        }),
    },
  ];
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-6 p-6',
    children: [
      /* @__PURE__ */ jsxs('div', {
        children: [
          /* @__PURE__ */ jsx('h1', {
            className: 'text-2xl font-bold',
            children: admin_users_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: admin_users_description(),
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsx(CardContent, {
          children: /* @__PURE__ */ jsx(DataTable, {
            columns,
            data: listQuery.data?.items ?? [],
            total: listQuery.data?.total ?? 0,
            page,
            pageSize: PAGE_SIZE,
            onPageChange: setPage,
            rowKey: (u) => u.id,
            emptyText: admin_users_no_users(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => listQuery.refetch(),
            loading: listQuery.isFetching,
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!managingUser,
        onOpenChange: (v) => !v && setManagingUser(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_users_manage_roles_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_users_manage_roles_description(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className: 'max-h-64 space-y-3 overflow-y-auto py-4',
              children: [
                allRoles.map((r) =>
                  /* @__PURE__ */ jsxs(
                    'label',
                    {
                      className: 'flex cursor-pointer items-center gap-3',
                      children: [
                        /* @__PURE__ */ jsx(Checkbox, {
                          checked: userRoleIds.has(r.id),
                          onCheckedChange: () => toggleRole(r.id),
                          disabled: toggling,
                        }),
                        /* @__PURE__ */ jsxs('div', {
                          children: [
                            /* @__PURE__ */ jsx('div', {
                              className: 'text-sm font-medium',
                              children: r.title,
                            }),
                            /* @__PURE__ */ jsx('div', {
                              className:
                                'text-muted-foreground font-mono text-xs',
                              children: r.name,
                            }),
                          ],
                        }),
                      ],
                    },
                    r.id
                  )
                ),
                allRoles.length === 0 &&
                  /* @__PURE__ */ jsx('p', {
                    className: 'text-muted-foreground py-4 text-center text-sm',
                    children: admin_roles_no_roles(),
                  }),
              ],
            }),
            /* @__PURE__ */ jsx(DialogFooter, {
              children: /* @__PURE__ */ jsx(Button, {
                variant: 'outline',
                onClick: () => setManagingUser(null),
                children: admin_roles_cancel(),
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!creditsUser,
        onOpenChange: (v) => !v && setCreditsUser(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_users_manage_credits_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: creditsUser
                    ? admin_users_manage_credits_for({
                        name: creditsUser.name || creditsUser.email,
                        balance: creditsUser.credits.toLocaleString(),
                      })
                    : '',
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className: 'space-y-4 py-2',
              children: [
                /* @__PURE__ */ jsxs('div', {
                  className: 'grid grid-cols-2 gap-2',
                  children: [
                    /* @__PURE__ */ jsx('button', {
                      type: 'button',
                      onClick: () => setCreditsAction('grant'),
                      className: `rounded-md border px-3 py-2 text-sm font-medium transition-colors ${creditsAction === 'grant' ? 'border-foreground bg-foreground text-background' : 'border-border hover:bg-muted'}`,
                      children: admin_users_credits_action_grant(),
                    }),
                    /* @__PURE__ */ jsx('button', {
                      type: 'button',
                      onClick: () => setCreditsAction('deduct'),
                      className: `rounded-md border px-3 py-2 text-sm font-medium transition-colors ${creditsAction === 'deduct' ? 'border-foreground bg-foreground text-background' : 'border-border hover:bg-muted'}`,
                      children: admin_users_credits_action_deduct(),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'space-y-1.5',
                  children: [
                    /* @__PURE__ */ jsx('label', {
                      className: 'text-sm font-medium',
                      children: admin_users_credits_amount_label(),
                    }),
                    /* @__PURE__ */ jsx(Input, {
                      type: 'number',
                      min: '1',
                      value: creditsAmount,
                      onChange: (e) => setCreditsAmount(e.target.value),
                      placeholder: '0',
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'space-y-1.5',
                  children: [
                    /* @__PURE__ */ jsx('label', {
                      className: 'text-sm font-medium',
                      children: admin_users_credits_desc_label(),
                    }),
                    /* @__PURE__ */ jsx(Input, {
                      value: creditsDesc,
                      onChange: (e) => setCreditsDesc(e.target.value),
                      placeholder: admin_users_credits_desc_placeholder(),
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setCreditsUser(null),
                  children: admin_roles_cancel(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  onClick: submitCredits,
                  disabled: creditsMutation.isPending,
                  children: creditsMutation.isPending
                    ? admin_users_credits_submitting()
                    : admin_users_credits_submit(),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
//#endregion
export { UsersPage as component };
