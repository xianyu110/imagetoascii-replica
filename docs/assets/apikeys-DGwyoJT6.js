import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import {
  n as apiDelete,
  r as apiGet,
  a as apiPost,
  s as pageQuery,
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
  so as settings_apikeys_actions_col,
  go as settings_apikeys_cancel,
  ho as settings_apikeys_create,
  yo as settings_apikeys_create_description,
  xo as settings_apikeys_create_key,
  bo as settings_apikeys_create_title,
  po as settings_apikeys_created,
  mo as settings_apikeys_creating,
  do as settings_apikeys_deleted,
  So as settings_apikeys_description,
  co as settings_apikeys_key_col,
  fo as settings_apikeys_key_copied,
  vo as settings_apikeys_key_name,
  _o as settings_apikeys_key_name_placeholder,
  lo as settings_apikeys_name_col,
  uo as settings_apikeys_no_keys,
  Co as settings_apikeys_title,
} from './messages-DC2BhyRd.js';

//#region src/routes/settings/apikeys.tsx?tsr-split=component
var PAGE_SIZE = 10;
function ApiKeysPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [newKeyName, setNewKeyName] = useState('');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);
  const listQuery = useQuery({
    queryKey: ['apikeys', page, debouncedSearch],
    queryFn: () =>
      apiGet(
        pageQuery('/api/apikeys', {
          page,
          pageSize: PAGE_SIZE,
          search: debouncedSearch,
        })
      ),
    placeholderData: keepPreviousData,
  });
  const createMutation = useMutation({
    mutationFn: (title) => apiPost('/api/apikeys', { title }),
    onSuccess: async (data) => {
      toast.success(settings_apikeys_created());
      await navigator.clipboard.writeText(data.key);
      toast.info(settings_apikeys_key_copied());
      setOpen(false);
      setNewKeyName('');
      queryClient.invalidateQueries({ queryKey: ['apikeys'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const deleteMutation = useMutation({
    mutationFn: (id) => apiDelete(`/api/apikeys?id=${id}`),
    onSuccess: () => {
      toast.success(settings_apikeys_deleted());
      queryClient.invalidateQueries({ queryKey: ['apikeys'] });
    },
    onError: (e) => toast.error(e.message),
  });
  function handleCreate() {
    if (!newKeyName.trim()) return;
    createMutation.mutate(newKeyName);
  }
  const columns = [
    {
      header: settings_apikeys_name_col(),
      cell: (k) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium',
          children: k.title,
        }),
    },
    {
      header: settings_apikeys_key_col(),
      cell: (k) =>
        /* @__PURE__ */ jsxs('span', {
          className: 'font-mono text-xs',
          children: [k.keyPrefix, '…'],
        }),
    },
    {
      header: settings_apikeys_actions_col(),
      className: 'w-[100px]',
      cell: (k) =>
        /* @__PURE__ */ jsx('div', {
          className: 'flex gap-1',
          children: /* @__PURE__ */ jsx(Button, {
            variant: 'ghost',
            size: 'icon',
            className: 'size-7',
            onClick: () => deleteMutation.mutate(k.id),
            children: /* @__PURE__ */ jsx(Trash2, { className: 'size-3' }),
          }),
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
                children: settings_apikeys_title(),
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'text-muted-foreground',
                children: settings_apikeys_description(),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Dialog, {
            open,
            onOpenChange: setOpen,
            children: [
              /* @__PURE__ */ jsxs(DialogTrigger, {
                className:
                  'bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors',
                children: [
                  /* @__PURE__ */ jsx(Plus, { className: 'size-4' }),
                  settings_apikeys_create_key(),
                ],
              }),
              /* @__PURE__ */ jsxs(DialogContent, {
                children: [
                  /* @__PURE__ */ jsxs(DialogHeader, {
                    children: [
                      /* @__PURE__ */ jsx(DialogTitle, {
                        children: settings_apikeys_create_title(),
                      }),
                      /* @__PURE__ */ jsx(DialogDescription, {
                        children: settings_apikeys_create_description(),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs('div', {
                    className: 'space-y-2 py-4',
                    children: [
                      /* @__PURE__ */ jsx(Label, {
                        htmlFor: 'key-name',
                        children: settings_apikeys_key_name(),
                      }),
                      /* @__PURE__ */ jsx(Input, {
                        id: 'key-name',
                        value: newKeyName,
                        onChange: (e) => setNewKeyName(e.target.value),
                        placeholder: settings_apikeys_key_name_placeholder(),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs(DialogFooter, {
                    children: [
                      /* @__PURE__ */ jsx(Button, {
                        variant: 'outline',
                        onClick: () => setOpen(false),
                        children: settings_apikeys_cancel(),
                      }),
                      /* @__PURE__ */ jsx(Button, {
                        onClick: handleCreate,
                        disabled: createMutation.isPending,
                        children: createMutation.isPending
                          ? settings_apikeys_creating()
                          : settings_apikeys_create(),
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
            rowKey: (k) => k.id,
            emptyText: settings_apikeys_no_keys(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => listQuery.refetch(),
            loading: listQuery.isFetching,
          }),
        }),
      }),
    ],
  });
}
//#endregion
export { ApiKeysPage as component };
