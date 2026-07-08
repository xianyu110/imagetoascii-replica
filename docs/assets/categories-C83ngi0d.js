import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useForm } from '@tanstack/react-form';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

import {
  n as apiDelete,
  r as apiGet,
  a as apiPost,
  o as apiPut,
  s as pageQuery,
} from './api-client-ddg0Kx1A.js';
import { t as Badge } from './badge-DVIKFGgX.js';
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
import { t as TextField } from './form-field-DX3nwIlh.js';
import {
  Or as admin_categories_actions_col,
  pr as admin_categories_cancel,
  fr as admin_categories_confirm_delete,
  Dr as admin_categories_create,
  Tr as admin_categories_create_description,
  Er as admin_categories_create_title,
  dr as admin_categories_created,
  kr as admin_categories_created_at,
  xr as admin_categories_delete_confirm,
  Sr as admin_categories_delete_title,
  lr as admin_categories_deleted,
  Fr as admin_categories_description,
  jr as admin_categories_description_col,
  gr as admin_categories_description_field,
  hr as admin_categories_description_placeholder,
  Cr as admin_categories_edit_description,
  wr as admin_categories_edit_title,
  Pr as admin_categories_no_data,
  mr as admin_categories_save,
  Nr as admin_categories_slug_col,
  br as admin_categories_slug_field,
  yr as admin_categories_slug_placeholder,
  Ar as admin_categories_status_col,
  Ir as admin_categories_title,
  Mr as admin_categories_title_col,
  vr as admin_categories_title_field,
  _r as admin_categories_title_placeholder,
  ur as admin_categories_updated,
} from './messages-DC2BhyRd.js';

//#region src/routes/admin/categories.tsx?tsr-split=component
var PAGE_SIZE = 10;
var categorySchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
});
var emptyForm = {
  slug: '',
  title: '',
  description: '',
};
function CategoriesPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [editingCat, setEditingCat] = useState(null);
  const [deletingCat, setDeletingCat] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);
  const listQuery = useQuery({
    queryKey: ['admin-categories', page, debouncedSearch],
    queryFn: () =>
      apiGet(
        pageQuery('/api/admin/categories', {
          page,
          pageSize: PAGE_SIZE,
          search: debouncedSearch,
        })
      ),
    placeholderData: keepPreviousData,
  });
  const createForm = useForm({
    defaultValues: emptyForm,
    validators: { onSubmit: categorySchema },
    onSubmit: async ({ value }) => {
      await createMutation.mutateAsync(value);
    },
  });
  const editForm = useForm({
    defaultValues: emptyForm,
    validators: { onSubmit: categorySchema },
    onSubmit: async ({ value }) => {
      if (!editingCat) return;
      await editMutation.mutateAsync({
        id: editingCat.id,
        ...value,
      });
    },
  });
  function openEdit(c) {
    editForm.reset({
      slug: c.slug,
      title: c.title,
      description: c.description || '',
    });
    setEditingCat(c);
  }
  const createMutation = useMutation({
    mutationFn: (value) => apiPost('/api/admin/categories', value),
    onSuccess: () => {
      toast.success(admin_categories_created());
      setCreateOpen(false);
      createForm.reset();
      queryClient.invalidateQueries({ queryKey: ['admin-categories'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const editMutation = useMutation({
    mutationFn: (value) => apiPut('/api/admin/categories', value),
    onSuccess: () => {
      toast.success(admin_categories_updated());
      setEditingCat(null);
      editForm.reset();
      queryClient.invalidateQueries({ queryKey: ['admin-categories'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const deleteMutation = useMutation({
    mutationFn: (id) => apiDelete(`/api/admin/categories?id=${id}`),
    onSuccess: () => {
      toast.success(admin_categories_deleted());
      setDeletingCat(null);
      queryClient.invalidateQueries({ queryKey: ['admin-categories'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const columns = [
    {
      header: admin_categories_slug_col(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-sm',
          children: c.slug,
        }),
    },
    {
      header: admin_categories_title_col(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium',
          children: c.title,
        }),
    },
    {
      header: admin_categories_description_col(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className:
            'text-muted-foreground block max-w-[200px] truncate text-sm',
          children: c.description || '—',
        }),
    },
    {
      header: admin_categories_status_col(),
      cell: (c) =>
        /* @__PURE__ */ jsx(Badge, {
          variant: c.status === 'published' ? 'default' : 'secondary',
          children: c.status,
        }),
    },
    {
      header: admin_categories_created_at(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: new Date(c.createdAt).toLocaleDateString(),
        }),
    },
    {
      header: admin_categories_actions_col(),
      className: 'w-[80px]',
      cell: (c) =>
        /* @__PURE__ */ jsxs('div', {
          className: 'flex gap-1',
          children: [
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-7',
              onClick: () => openEdit(c),
              children: /* @__PURE__ */ jsx(Pencil, { className: 'size-3' }),
            }),
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-7',
              onClick: () => setDeletingCat(c),
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
                children: admin_categories_title(),
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'text-muted-foreground',
                children: admin_categories_description(),
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
                  admin_categories_create(),
                ],
              }),
              /* @__PURE__ */ jsxs(DialogContent, {
                children: [
                  /* @__PURE__ */ jsxs(DialogHeader, {
                    children: [
                      /* @__PURE__ */ jsx(DialogTitle, {
                        children: admin_categories_create_title(),
                      }),
                      /* @__PURE__ */ jsx(DialogDescription, {
                        children: admin_categories_create_description(),
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
                            name: 'slug',
                            children: (field) =>
                              /* @__PURE__ */ jsx(TextField, {
                                field,
                                label: admin_categories_slug_field(),
                                placeholder:
                                  admin_categories_slug_placeholder(),
                              }),
                          }),
                          /* @__PURE__ */ jsx(createForm.Field, {
                            name: 'title',
                            children: (field) =>
                              /* @__PURE__ */ jsx(TextField, {
                                field,
                                label: admin_categories_title_field(),
                                placeholder:
                                  admin_categories_title_placeholder(),
                              }),
                          }),
                          /* @__PURE__ */ jsx(createForm.Field, {
                            name: 'description',
                            children: (field) =>
                              /* @__PURE__ */ jsx(TextField, {
                                field,
                                label: admin_categories_description_field(),
                                placeholder:
                                  admin_categories_description_placeholder(),
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
                            children: admin_categories_cancel(),
                          }),
                          /* @__PURE__ */ jsx(Button, {
                            type: 'submit',
                            disabled: createMutation.isPending,
                            children: admin_categories_save(),
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
            rowKey: (c) => c.id,
            emptyText: admin_categories_no_data(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => listQuery.refetch(),
            loading: listQuery.isFetching,
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!editingCat,
        onOpenChange: (v) => !v && setEditingCat(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_categories_edit_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_categories_edit_description(),
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
                      name: 'slug',
                      children: (field) =>
                        /* @__PURE__ */ jsx(TextField, {
                          field,
                          label: admin_categories_slug_field(),
                          placeholder: admin_categories_slug_placeholder(),
                        }),
                    }),
                    /* @__PURE__ */ jsx(editForm.Field, {
                      name: 'title',
                      children: (field) =>
                        /* @__PURE__ */ jsx(TextField, {
                          field,
                          label: admin_categories_title_field(),
                          placeholder: admin_categories_title_placeholder(),
                        }),
                    }),
                    /* @__PURE__ */ jsx(editForm.Field, {
                      name: 'description',
                      children: (field) =>
                        /* @__PURE__ */ jsx(TextField, {
                          field,
                          label: admin_categories_description_field(),
                          placeholder:
                            admin_categories_description_placeholder(),
                        }),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs(DialogFooter, {
                  children: [
                    /* @__PURE__ */ jsx(Button, {
                      type: 'button',
                      variant: 'outline',
                      onClick: () => setEditingCat(null),
                      children: admin_categories_cancel(),
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      type: 'submit',
                      disabled: editMutation.isPending,
                      children: admin_categories_save(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!deletingCat,
        onOpenChange: (v) => !v && setDeletingCat(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_categories_delete_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_categories_delete_confirm(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setDeletingCat(null),
                  children: admin_categories_cancel(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: 'destructive',
                  disabled: deleteMutation.isPending,
                  onClick: () =>
                    deletingCat && deleteMutation.mutate(deletingCat.id),
                  children: admin_categories_confirm_delete(),
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
export { CategoriesPage as component };
