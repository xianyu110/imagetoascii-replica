import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import {
  n as apiDelete,
  t as ApiError,
  r as apiGet,
  a as apiPost,
  o as apiPut,
} from './api-client-ddg0Kx1A.js';
import { t as Button } from './button-RkClB0x2.js';
import { t as Card, n as CardContent } from './card-CJS2GQq6.js';
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
import { t as Input } from './input-B6v4Jp25.js';
import { t as Label } from './label-Dzpc0zKw.js';
import {
  oi as admin_permissions_action_col,
  Kr as admin_permissions_action_field,
  Gr as admin_permissions_action_placeholder,
  ii as admin_permissions_actions_col,
  Vr as admin_permissions_cancel,
  ci as admin_permissions_code_col,
  Xr as admin_permissions_code_field,
  Yr as admin_permissions_code_placeholder,
  Br as admin_permissions_confirm_delete,
  ti as admin_permissions_create_description,
  ri as admin_permissions_create_permission,
  ni as admin_permissions_create_title,
  zr as admin_permissions_created,
  Zr as admin_permissions_delete_confirm,
  Qr as admin_permissions_delete_title,
  Lr as admin_permissions_deleted,
  ui as admin_permissions_description,
  $r as admin_permissions_edit_description,
  ei as admin_permissions_edit_title,
  li as admin_permissions_no_permissions,
  si as admin_permissions_resource_col,
  Jr as admin_permissions_resource_field,
  qr as admin_permissions_resource_placeholder,
  Hr as admin_permissions_save,
  di as admin_permissions_title,
  ai as admin_permissions_title_col,
  Wr as admin_permissions_title_field,
  Ur as admin_permissions_title_placeholder,
  Rr as admin_permissions_updated,
} from './messages-DC2BhyRd.js';

//#region src/routes/admin/permissions.tsx?tsr-split=component
var PAGE_SIZE = 10;
var emptyForm = {
  code: '',
  resource: '',
  action: '',
  title: '',
};
function PermissionsPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingPerm, setEditingPerm] = useState(null);
  const [editForm, setEditForm] = useState(emptyForm);
  const [deletingPerm, setDeletingPerm] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);
  const query = useQuery({
    queryKey: ['admin-permissions', page, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (debouncedSearch) params.set('search', debouncedSearch);
      return apiGet(`/api/admin/permissions?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const permissions = query.data?.items ?? [];
  const total = query.data?.total ?? 0;
  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: ['admin-permissions'] });
  const createMutation = useMutation({
    mutationFn: (values) => apiPost('/api/admin/permissions', values),
    onSuccess: () => {
      toast.success(admin_permissions_created());
      setCreateOpen(false);
      setForm(emptyForm);
      invalidate();
    },
    onError: (err) => {
      toast.error(err instanceof ApiError ? err.message : 'Failed');
    },
  });
  const editMutation = useMutation({
    mutationFn: (payload) => apiPut('/api/admin/permissions', payload),
    onSuccess: () => {
      toast.success(admin_permissions_updated());
      setEditingPerm(null);
      invalidate();
    },
    onError: (err) => {
      toast.error(err instanceof ApiError ? err.message : 'Failed');
    },
  });
  const deleteMutation = useMutation({
    mutationFn: (id) => apiDelete(`/api/admin/permissions?id=${id}`),
    onSuccess: () => {
      toast.success(admin_permissions_deleted());
      setDeletingPerm(null);
      invalidate();
    },
    onError: (err) => {
      toast.error(err instanceof ApiError ? err.message : 'Failed');
    },
  });
  const saving = createMutation.isPending || editMutation.isPending;
  function handleCreate() {
    if (
      !form.code.trim() ||
      !form.resource.trim() ||
      !form.action.trim() ||
      !form.title.trim()
    )
      return;
    createMutation.mutate(form);
  }
  function openEdit(p) {
    setEditForm({
      code: p.code,
      resource: p.resource,
      action: p.action,
      title: p.title,
    });
    setEditingPerm(p);
  }
  function handleEdit() {
    if (!editingPerm || !editForm.code.trim() || !editForm.title.trim()) return;
    editMutation.mutate({
      id: editingPerm.id,
      ...editForm,
    });
  }
  function handleDelete() {
    if (!deletingPerm) return;
    deleteMutation.mutate(deletingPerm.id);
  }
  const columns = [
    {
      header: admin_permissions_code_col(),
      cell: (p) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-sm',
          children: p.code,
        }),
    },
    {
      header: admin_permissions_resource_col(),
      cell: (p) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium',
          children: p.resource,
        }),
    },
    {
      header: admin_permissions_action_col(),
      cell: (p) => p.action,
    },
    {
      header: admin_permissions_title_col(),
      cell: (p) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: p.title,
        }),
    },
    {
      header: admin_permissions_actions_col(),
      className: 'w-[80px]',
      cell: (p) =>
        /* @__PURE__ */ jsxs('div', {
          className: 'flex gap-1',
          children: [
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-7',
              onClick: () => openEdit(p),
              children: /* @__PURE__ */ jsx(Pencil, { className: 'size-3' }),
            }),
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-7',
              onClick: () => setDeletingPerm(p),
              children: /* @__PURE__ */ jsx(Trash2, { className: 'size-3' }),
            }),
          ],
        }),
    },
  ];
  function renderFormFields(values, onChange) {
    return /* @__PURE__ */ jsxs('div', {
      className: 'space-y-4 py-4',
      children: [
        /* @__PURE__ */ jsxs('div', {
          className: 'space-y-2',
          children: [
            /* @__PURE__ */ jsx(Label, {
              children: admin_permissions_code_field(),
            }),
            /* @__PURE__ */ jsx(Input, {
              value: values.code,
              onChange: (e) =>
                onChange({
                  ...values,
                  code: e.target.value,
                }),
              placeholder: admin_permissions_code_placeholder(),
            }),
          ],
        }),
        /* @__PURE__ */ jsxs('div', {
          className: 'space-y-2',
          children: [
            /* @__PURE__ */ jsx(Label, {
              children: admin_permissions_resource_field(),
            }),
            /* @__PURE__ */ jsx(Input, {
              value: values.resource,
              onChange: (e) =>
                onChange({
                  ...values,
                  resource: e.target.value,
                }),
              placeholder: admin_permissions_resource_placeholder(),
            }),
          ],
        }),
        /* @__PURE__ */ jsxs('div', {
          className: 'space-y-2',
          children: [
            /* @__PURE__ */ jsx(Label, {
              children: admin_permissions_action_field(),
            }),
            /* @__PURE__ */ jsx(Input, {
              value: values.action,
              onChange: (e) =>
                onChange({
                  ...values,
                  action: e.target.value,
                }),
              placeholder: admin_permissions_action_placeholder(),
            }),
          ],
        }),
        /* @__PURE__ */ jsxs('div', {
          className: 'space-y-2',
          children: [
            /* @__PURE__ */ jsx(Label, {
              children: admin_permissions_title_field(),
            }),
            /* @__PURE__ */ jsx(Input, {
              value: values.title,
              onChange: (e) =>
                onChange({
                  ...values,
                  title: e.target.value,
                }),
              placeholder: admin_permissions_title_placeholder(),
            }),
          ],
        }),
      ],
    });
  }
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
                children: admin_permissions_title(),
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'text-muted-foreground',
                children: admin_permissions_description(),
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
                  admin_permissions_create_permission(),
                ],
              }),
              /* @__PURE__ */ jsxs(DialogContent, {
                children: [
                  /* @__PURE__ */ jsxs(DialogHeader, {
                    children: [
                      /* @__PURE__ */ jsx(DialogTitle, {
                        children: admin_permissions_create_title(),
                      }),
                      /* @__PURE__ */ jsx(DialogDescription, {
                        children: admin_permissions_create_description(),
                      }),
                    ],
                  }),
                  renderFormFields(form, setForm),
                  /* @__PURE__ */ jsxs(DialogFooter, {
                    children: [
                      /* @__PURE__ */ jsx(Button, {
                        variant: 'outline',
                        onClick: () => setCreateOpen(false),
                        children: admin_permissions_cancel(),
                      }),
                      /* @__PURE__ */ jsx(Button, {
                        onClick: handleCreate,
                        disabled: saving,
                        children: admin_permissions_save(),
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
            data: permissions,
            total,
            page,
            pageSize: PAGE_SIZE,
            onPageChange: setPage,
            rowKey: (p) => p.id,
            emptyText: admin_permissions_no_permissions(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => query.refetch(),
            loading: query.isFetching,
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!editingPerm,
        onOpenChange: (v) => !v && setEditingPerm(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_permissions_edit_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_permissions_edit_description(),
                }),
              ],
            }),
            renderFormFields(editForm, setEditForm),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setEditingPerm(null),
                  children: admin_permissions_cancel(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  onClick: handleEdit,
                  disabled: saving,
                  children: admin_permissions_save(),
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!deletingPerm,
        onOpenChange: (v) => !v && setDeletingPerm(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_permissions_delete_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_permissions_delete_confirm(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setDeletingPerm(null),
                  children: admin_permissions_cancel(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: 'destructive',
                  onClick: handleDelete,
                  children: admin_permissions_confirm_delete(),
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
export { PermissionsPage as component };
