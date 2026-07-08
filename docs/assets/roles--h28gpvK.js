import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useForm } from '@tanstack/react-form';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { KeyRound, Pencil, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

import {
  n as apiDelete,
  r as apiGet,
  a as apiPost,
  o as apiPut,
  s as pageQuery,
} from './api-client-ddg0Kx1A.js';
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
  s as DialogTrigger,
} from './dialog-D6wavpEs.js';
import { t as TextField } from './form-field-DX3nwIlh.js';
import {
  li as admin_permissions_no_permissions,
  Pi as admin_roles_actions_col,
  yi as admin_roles_cancel,
  vi as admin_roles_confirm_delete,
  ji as admin_roles_create_description,
  Ni as admin_roles_create_role,
  Mi as admin_roles_create_title,
  _i as admin_roles_created,
  Di as admin_roles_delete_confirm,
  Oi as admin_roles_delete_title,
  hi as admin_roles_deleted,
  zi as admin_roles_description,
  Fi as admin_roles_description_col,
  Si as admin_roles_description_field,
  xi as admin_roles_description_placeholder,
  ki as admin_roles_edit_description,
  Ai as admin_roles_edit_title,
  pi as admin_roles_manage_permissions_description,
  mi as admin_roles_manage_permissions_title,
  Li as admin_roles_name_col,
  Ei as admin_roles_name_field,
  Ti as admin_roles_name_placeholder,
  Ri as admin_roles_no_roles,
  fi as admin_roles_permissions_saved,
  bi as admin_roles_save,
  Bi as admin_roles_title,
  Ii as admin_roles_title_col,
  wi as admin_roles_title_field,
  Ci as admin_roles_title_placeholder,
  gi as admin_roles_updated,
} from './messages-DC2BhyRd.js';

//#region src/routes/admin/roles.tsx?tsr-split=component
var PAGE_SIZE = 10;
var roleSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
});
var emptyForm = {
  name: '',
  title: '',
  description: '',
};
function RolesPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [deletingRole, setDeletingRole] = useState(null);
  const [permRole, setPermRole] = useState(null);
  const [allPermissions, setAllPermissions] = useState([]);
  const [assignedPermIds, setAssignedPermIds] = useState(
    /* @__PURE__ */ new Set()
  );
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);
  const listQuery = useQuery({
    queryKey: ['admin-roles', page, debouncedSearch],
    queryFn: () =>
      apiGet(
        pageQuery('/api/admin/roles', {
          page,
          pageSize: PAGE_SIZE,
          search: debouncedSearch,
        })
      ),
    placeholderData: keepPreviousData,
  });
  const createForm = useForm({
    defaultValues: emptyForm,
    validators: { onSubmit: roleSchema },
    onSubmit: async ({ value }) => {
      await createMutation.mutateAsync(value);
    },
  });
  const editForm = useForm({
    defaultValues: emptyForm,
    validators: { onSubmit: roleSchema },
    onSubmit: async ({ value }) => {
      if (!editingRole) return;
      await editMutation.mutateAsync({
        id: editingRole.id,
        ...value,
      });
    },
  });
  const createMutation = useMutation({
    mutationFn: (value) => apiPost('/api/admin/roles', value),
    onSuccess: () => {
      toast.success(admin_roles_created());
      setCreateOpen(false);
      createForm.reset();
      queryClient.invalidateQueries({ queryKey: ['admin-roles'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const editMutation = useMutation({
    mutationFn: (value) => apiPut('/api/admin/roles', value),
    onSuccess: () => {
      toast.success(admin_roles_updated());
      setEditingRole(null);
      editForm.reset();
      queryClient.invalidateQueries({ queryKey: ['admin-roles'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const deleteMutation = useMutation({
    mutationFn: (id) => apiDelete(`/api/admin/roles?id=${id}`),
    onSuccess: () => {
      toast.success(admin_roles_deleted());
      setDeletingRole(null);
      queryClient.invalidateQueries({ queryKey: ['admin-roles'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const savePermissionsMutation = useMutation({
    mutationFn: (vars) => apiPut('/api/admin/roles/permissions', vars),
    onSuccess: () => {
      toast.success(admin_roles_permissions_saved());
      setPermRole(null);
    },
    onError: (e) => toast.error(e.message),
  });
  function openEdit(r) {
    editForm.reset({
      name: r.name,
      title: r.title,
      description: r.description || '',
    });
    setEditingRole(r);
  }
  async function openPermissions(r) {
    setPermRole(r);
    const [perms, assigned] = await Promise.all([
      apiGet('/api/admin/permissions?page=1&pageSize=999'),
      apiGet(`/api/admin/roles/permissions?roleId=${r.id}`),
    ]);
    setAllPermissions(perms.items);
    setAssignedPermIds(new Set(assigned.map((p) => p.permissionId)));
  }
  function togglePermission(permId) {
    setAssignedPermIds((prev) => {
      const next = new Set(prev);
      if (next.has(permId)) next.delete(permId);
      else next.add(permId);
      return next;
    });
  }
  function handleSavePermissions() {
    if (!permRole) return;
    savePermissionsMutation.mutate({
      roleId: permRole.id,
      permissionIds: [...assignedPermIds],
    });
  }
  const columns = [
    {
      header: admin_roles_name_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-sm',
          children: r.name,
        }),
    },
    {
      header: admin_roles_title_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium',
          children: r.title,
        }),
    },
    {
      header: admin_roles_description_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: r.description || '—',
        }),
    },
    {
      header: admin_roles_actions_col(),
      className: 'w-[120px]',
      cell: (r) =>
        /* @__PURE__ */ jsxs('div', {
          className: 'flex gap-1',
          children: [
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-7',
              onClick: () => openPermissions(r),
              children: /* @__PURE__ */ jsx(KeyRound, { className: 'size-3' }),
            }),
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-7',
              onClick: () => openEdit(r),
              children: /* @__PURE__ */ jsx(Pencil, { className: 'size-3' }),
            }),
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-7',
              onClick: () => setDeletingRole(r),
              children: /* @__PURE__ */ jsx(Trash2, { className: 'size-3' }),
            }),
          ],
        }),
    },
  ];
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-6 p-6',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'flex items-center justify-between',
        children: [
          /* @__PURE__ */ jsxs('div', {
            children: [
              /* @__PURE__ */ jsx('h1', {
                className: 'text-2xl font-bold',
                children: admin_roles_title(),
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'text-muted-foreground',
                children: admin_roles_description(),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Dialog, {
            open: createOpen,
            onOpenChange: setCreateOpen,
            children: [
              /* @__PURE__ */ jsxs(DialogTrigger, {
                className:
                  'bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors',
                children: [
                  /* @__PURE__ */ jsx(Plus, { className: 'size-4' }),
                  admin_roles_create_role(),
                ],
              }),
              /* @__PURE__ */ jsxs(DialogContent, {
                children: [
                  /* @__PURE__ */ jsxs(DialogHeader, {
                    children: [
                      /* @__PURE__ */ jsx(DialogTitle, {
                        children: admin_roles_create_title(),
                      }),
                      /* @__PURE__ */ jsx(DialogDescription, {
                        children: admin_roles_create_description(),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs('form', {
                    onSubmit: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      createForm.handleSubmit();
                    },
                    children: [
                      /* @__PURE__ */ jsxs('div', {
                        className: 'space-y-4 py-4',
                        children: [
                          /* @__PURE__ */ jsx(createForm.Field, {
                            name: 'name',
                            children: (field) =>
                              /* @__PURE__ */ jsx(TextField, {
                                field,
                                label: admin_roles_name_field(),
                                placeholder: admin_roles_name_placeholder(),
                              }),
                          }),
                          /* @__PURE__ */ jsx(createForm.Field, {
                            name: 'title',
                            children: (field) =>
                              /* @__PURE__ */ jsx(TextField, {
                                field,
                                label: admin_roles_title_field(),
                                placeholder: admin_roles_title_placeholder(),
                              }),
                          }),
                          /* @__PURE__ */ jsx(createForm.Field, {
                            name: 'description',
                            children: (field) =>
                              /* @__PURE__ */ jsx(TextField, {
                                field,
                                label: admin_roles_description_field(),
                                placeholder:
                                  admin_roles_description_placeholder(),
                              }),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs(DialogFooter, {
                        children: [
                          /* @__PURE__ */ jsx(Button, {
                            type: 'button',
                            variant: 'outline',
                            onClick: () => setCreateOpen(false),
                            children: admin_roles_cancel(),
                          }),
                          /* @__PURE__ */ jsx(Button, {
                            type: 'submit',
                            disabled: createMutation.isPending,
                            children: admin_roles_save(),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
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
            rowKey: (r) => r.id,
            emptyText: admin_roles_no_roles(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => listQuery.refetch(),
            loading: listQuery.isFetching,
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!editingRole,
        onOpenChange: (v) => !v && setEditingRole(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_roles_edit_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_roles_edit_description(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('form', {
              onSubmit: (e) => {
                e.preventDefault();
                e.stopPropagation();
                editForm.handleSubmit();
              },
              children: [
                /* @__PURE__ */ jsxs('div', {
                  className: 'space-y-4 py-4',
                  children: [
                    /* @__PURE__ */ jsx(editForm.Field, {
                      name: 'name',
                      children: (field) =>
                        /* @__PURE__ */ jsx(TextField, {
                          field,
                          label: admin_roles_name_field(),
                          placeholder: admin_roles_name_placeholder(),
                        }),
                    }),
                    /* @__PURE__ */ jsx(editForm.Field, {
                      name: 'title',
                      children: (field) =>
                        /* @__PURE__ */ jsx(TextField, {
                          field,
                          label: admin_roles_title_field(),
                          placeholder: admin_roles_title_placeholder(),
                        }),
                    }),
                    /* @__PURE__ */ jsx(editForm.Field, {
                      name: 'description',
                      children: (field) =>
                        /* @__PURE__ */ jsx(TextField, {
                          field,
                          label: admin_roles_description_field(),
                          placeholder: admin_roles_description_placeholder(),
                        }),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs(DialogFooter, {
                  children: [
                    /* @__PURE__ */ jsx(Button, {
                      type: 'button',
                      variant: 'outline',
                      onClick: () => setEditingRole(null),
                      children: admin_roles_cancel(),
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      type: 'submit',
                      disabled: editMutation.isPending,
                      children: admin_roles_save(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!deletingRole,
        onOpenChange: (v) => !v && setDeletingRole(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_roles_delete_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_roles_delete_confirm(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setDeletingRole(null),
                  children: admin_roles_cancel(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: 'destructive',
                  disabled: deleteMutation.isPending,
                  onClick: () =>
                    deletingRole && deleteMutation.mutate(deletingRole.id),
                  children: admin_roles_confirm_delete(),
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!permRole,
        onOpenChange: (v) => !v && setPermRole(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_roles_manage_permissions_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_roles_manage_permissions_description(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className: 'max-h-64 space-y-3 overflow-y-auto py-4',
              children: [
                allPermissions.map((perm) =>
                  /* @__PURE__ */ jsxs(
                    'label',
                    {
                      className: 'flex cursor-pointer items-center gap-3',
                      children: [
                        /* @__PURE__ */ jsx(Checkbox, {
                          checked: assignedPermIds.has(perm.id),
                          onCheckedChange: () => togglePermission(perm.id),
                        }),
                        /* @__PURE__ */ jsxs('div', {
                          children: [
                            /* @__PURE__ */ jsx('div', {
                              className: 'text-sm font-medium',
                              children: perm.title,
                            }),
                            /* @__PURE__ */ jsx('div', {
                              className:
                                'text-muted-foreground font-mono text-xs',
                              children: perm.code,
                            }),
                          ],
                        }),
                      ],
                    },
                    perm.id
                  )
                ),
                allPermissions.length === 0 &&
                  /* @__PURE__ */ jsx('p', {
                    className: 'text-muted-foreground py-4 text-center text-sm',
                    children: admin_permissions_no_permissions(),
                  }),
              ],
            }),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setPermRole(null),
                  children: admin_roles_cancel(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  onClick: handleSavePermissions,
                  disabled: savePermissionsMutation.isPending,
                  children: admin_roles_save(),
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
export { RolesPage as component };
