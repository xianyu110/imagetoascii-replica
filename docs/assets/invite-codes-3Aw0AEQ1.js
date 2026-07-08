import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useForm } from '@tanstack/react-form';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { Copy, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

import {
  n as apiDelete,
  r as apiGet,
  a as apiPost,
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
} from './dialog-D6wavpEs.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import { t as Input } from './input-B6v4Jp25.js';
import { t as Label } from './label-Dzpc0zKw.js';
import {
  Tt as admin_invite_codes_actions_col,
  zt as admin_invite_codes_cancel,
  jt as admin_invite_codes_code_col,
  Ct as admin_invite_codes_copied,
  Rt as admin_invite_codes_count_label,
  Gt as admin_invite_codes_create_button,
  Ut as admin_invite_codes_create_description,
  Ht as admin_invite_codes_create_submit,
  Bt as admin_invite_codes_create_success,
  Wt as admin_invite_codes_create_title,
  Et as admin_invite_codes_created_col,
  Vt as admin_invite_codes_creating,
  bt as admin_invite_codes_delete_confirm,
  xt as admin_invite_codes_delete_description,
  yt as admin_invite_codes_delete_success,
  St as admin_invite_codes_delete_title,
  Kt as admin_invite_codes_description,
  wt as admin_invite_codes_empty,
  Dt as admin_invite_codes_expires_col,
  Ft as admin_invite_codes_expires_label,
  Mt as admin_invite_codes_invalid_input,
  Lt as admin_invite_codes_max_uses_label,
  Ot as admin_invite_codes_note_col,
  Pt as admin_invite_codes_note_label,
  Nt as admin_invite_codes_note_placeholder,
  qt as admin_invite_codes_title,
  kt as admin_invite_codes_trial_days_col,
  It as admin_invite_codes_trial_days_label,
  At as admin_invite_codes_usage_col,
} from './messages-DC2BhyRd.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/routes/admin/invite-codes.tsx?tsr-split=component
var TABS = ['all', 'available', 'used'];
var PAGE_SIZE = 20;
var inviteCodeSchema = z.object({
  count: z.coerce.number().min(1),
  maxUses: z.coerce.number().min(1),
  trialDays: z.coerce.number().min(1),
  note: z.string(),
  expiresAt: z.string(),
});
var emptyForm = {
  count: '1',
  maxUses: '1',
  trialDays: '15',
  note: '',
  expiresAt: '',
};
function InviteCodesPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState('all');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, tab]);
  const listQuery = useQuery({
    queryKey: ['admin-invite-codes', page, tab, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (tab !== 'all') params.set('status', tab);
      if (debouncedSearch) params.set('search', debouncedSearch);
      return apiGet(`/api/admin/invite-codes?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const createForm = useForm({
    defaultValues: emptyForm,
    validators: { onSubmit: inviteCodeSchema },
    onSubmitInvalid: () => {
      toast.error(admin_invite_codes_invalid_input());
    },
    onSubmit: async ({ value }) => {
      const n = Number(value.count);
      const mu = Number(value.maxUses);
      const d = Number(value.trialDays);
      await createMutation.mutateAsync({
        count: n > 1 ? n : void 0,
        maxUses: mu,
        trialDays: d,
        note: value.note || void 0,
        expiresAt: value.expiresAt
          ? new Date(value.expiresAt).toISOString()
          : null,
      });
    },
  });
  const createMutation = useMutation({
    mutationFn: (body) => apiPost('/api/admin/invite-codes', body),
    onSuccess: () => {
      toast.success(admin_invite_codes_create_success());
      setCreateOpen(false);
      createForm.reset();
      setPage(1);
      queryClient.invalidateQueries({ queryKey: ['admin-invite-codes'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const deleteMutation = useMutation({
    mutationFn: (id) => apiDelete(`/api/admin/invite-codes?id=${id}`),
    onSuccess: () => {
      toast.success(admin_invite_codes_delete_success());
      setDeletingId(null);
      queryClient.invalidateQueries({ queryKey: ['admin-invite-codes'] });
    },
    onError: (e) => toast.error(e.message),
  });
  function copyCode(code) {
    navigator.clipboard.writeText(code).then(
      () => toast.success(admin_invite_codes_copied()),
      () => toast.error('Failed')
    );
  }
  const columns = [
    {
      header: admin_invite_codes_code_col(),
      cell: (r) =>
        /* @__PURE__ */ jsxs('div', {
          className: 'flex items-center gap-2',
          children: [
            /* @__PURE__ */ jsx('code', {
              className: 'font-mono text-sm',
              children: r.code,
            }),
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-6',
              onClick: () => copyCode(r.code),
              children: /* @__PURE__ */ jsx(Copy, { className: 'size-3' }),
            }),
          ],
        }),
    },
    {
      header: admin_invite_codes_usage_col(),
      className: 'w-[120px]',
      cell: (r) =>
        /* @__PURE__ */ jsxs('span', {
          className: 'tabular-nums',
          children: [r.usedCount, ' / ', r.maxUses],
        }),
    },
    {
      header: admin_invite_codes_trial_days_col(),
      className: 'w-[100px]',
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'tabular-nums',
          children: r.trialDays,
        }),
    },
    {
      header: admin_invite_codes_note_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: r.note || '—',
        }),
    },
    {
      header: admin_invite_codes_expires_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: r.expiresAt
            ? new Date(r.expiresAt).toLocaleDateString()
            : '—',
        }),
    },
    {
      header: admin_invite_codes_created_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: new Date(r.createdAt).toLocaleDateString(),
        }),
    },
    {
      header: admin_invite_codes_actions_col(),
      className: 'w-[80px]',
      cell: (r) =>
        /* @__PURE__ */ jsx(Button, {
          variant: 'ghost',
          size: 'icon',
          className: 'size-7',
          onClick: () => setDeletingId(r.id),
          children: /* @__PURE__ */ jsx(Trash2, {
            className: 'text-destructive size-4',
          }),
        }),
    },
  ];
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-6 p-6',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'flex items-start justify-between gap-4',
        children: [
          /* @__PURE__ */ jsxs('div', {
            children: [
              /* @__PURE__ */ jsx('h1', {
                className: 'text-2xl font-bold',
                children: admin_invite_codes_title(),
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'text-muted-foreground',
                children: admin_invite_codes_description(),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Button, {
            onClick: () => setCreateOpen(true),
            className: 'gap-2',
            children: [
              /* @__PURE__ */ jsx(Plus, { className: 'size-4' }),
              admin_invite_codes_create_button(),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx('div', {
        className:
          'border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b',
        children: TABS.map((tb) =>
          /* @__PURE__ */ jsx(
            'button',
            {
              onClick: () => setTab(tb),
              className: cn(
                '-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors',
                tab === tb
                  ? 'border-primary text-foreground'
                  : 'text-muted-foreground hover:text-foreground border-transparent'
              ),
              children: tDynamic(`admin.invite_codes.tab_${tb}`),
            },
            tb
          )
        ),
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
            emptyText: admin_invite_codes_empty(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => listQuery.refetch(),
            loading: listQuery.isFetching,
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: createOpen,
        onOpenChange: (v) => {
          setCreateOpen(v);
          if (!v) createForm.reset();
        },
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_invite_codes_create_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_invite_codes_create_description(),
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
                  className: 'space-y-4 py-2',
                  children: [
                    /* @__PURE__ */ jsxs('div', {
                      className: 'grid grid-cols-2 gap-3',
                      children: [
                        /* @__PURE__ */ jsx(createForm.Field, {
                          name: 'count',
                          children: (field) =>
                            /* @__PURE__ */ jsxs('div', {
                              className: 'space-y-1.5',
                              children: [
                                /* @__PURE__ */ jsx(Label, {
                                  children: admin_invite_codes_count_label(),
                                }),
                                /* @__PURE__ */ jsx(Input, {
                                  type: 'number',
                                  min: '1',
                                  max: '100',
                                  value: String(field.state.value),
                                  onChange: (e) =>
                                    field.handleChange(e.target.value),
                                  onBlur: field.handleBlur,
                                }),
                              ],
                            }),
                        }),
                        /* @__PURE__ */ jsx(createForm.Field, {
                          name: 'maxUses',
                          children: (field) =>
                            /* @__PURE__ */ jsxs('div', {
                              className: 'space-y-1.5',
                              children: [
                                /* @__PURE__ */ jsx(Label, {
                                  children: admin_invite_codes_max_uses_label(),
                                }),
                                /* @__PURE__ */ jsx(Input, {
                                  type: 'number',
                                  min: '1',
                                  value: String(field.state.value),
                                  onChange: (e) =>
                                    field.handleChange(e.target.value),
                                  onBlur: field.handleBlur,
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx(createForm.Field, {
                      name: 'trialDays',
                      children: (field) =>
                        /* @__PURE__ */ jsxs('div', {
                          className: 'space-y-1.5',
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              children: admin_invite_codes_trial_days_label(),
                            }),
                            /* @__PURE__ */ jsx(Input, {
                              type: 'number',
                              min: '1',
                              value: String(field.state.value),
                              onChange: (e) =>
                                field.handleChange(e.target.value),
                              onBlur: field.handleBlur,
                            }),
                          ],
                        }),
                    }),
                    /* @__PURE__ */ jsx(createForm.Field, {
                      name: 'expiresAt',
                      children: (field) =>
                        /* @__PURE__ */ jsxs('div', {
                          className: 'space-y-1.5',
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              children: admin_invite_codes_expires_label(),
                            }),
                            /* @__PURE__ */ jsx(Input, {
                              type: 'date',
                              value: String(field.state.value),
                              onChange: (e) =>
                                field.handleChange(e.target.value),
                              onBlur: field.handleBlur,
                            }),
                          ],
                        }),
                    }),
                    /* @__PURE__ */ jsx(createForm.Field, {
                      name: 'note',
                      children: (field) =>
                        /* @__PURE__ */ jsxs('div', {
                          className: 'space-y-1.5',
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              children: admin_invite_codes_note_label(),
                            }),
                            /* @__PURE__ */ jsx(Input, {
                              value: String(field.state.value),
                              onChange: (e) =>
                                field.handleChange(e.target.value),
                              onBlur: field.handleBlur,
                              placeholder:
                                admin_invite_codes_note_placeholder(),
                            }),
                          ],
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
                      children: admin_invite_codes_cancel(),
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      type: 'submit',
                      disabled: createMutation.isPending,
                      children: createMutation.isPending
                        ? admin_invite_codes_creating()
                        : admin_invite_codes_create_submit(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!deletingId,
        onOpenChange: (v) => !v && setDeletingId(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_invite_codes_delete_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_invite_codes_delete_description(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setDeletingId(null),
                  children: admin_invite_codes_cancel(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: 'destructive',
                  disabled: deleteMutation.isPending,
                  onClick: () =>
                    deletingId && deleteMutation.mutate(deletingId),
                  children: admin_invite_codes_delete_confirm(),
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
export { InviteCodesPage as component };
