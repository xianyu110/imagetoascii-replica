import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Coins } from 'lucide-react';

import { r as apiGet } from './api-client-ddg0Kx1A.js';
import { t as Badge } from './badge-DVIKFGgX.js';
import { n as buttonVariants } from './button-RkClB0x2.js';
import {
  t as Card,
  n as CardContent,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import { t as DataTable } from './data-table-Df_eQ-7W.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import {
  Po as settings_credits_balance,
  Oo as settings_credits_credits,
  wo as settings_credits_date,
  Fo as settings_credits_description,
  Eo as settings_credits_description_col,
  To as settings_credits_expires_at,
  Mo as settings_credits_no_records,
  No as settings_credits_purchase,
  Do as settings_credits_remaining,
  ko as settings_credits_scene,
  Io as settings_credits_title,
  jo as settings_credits_transaction_no,
  Ao as settings_credits_type,
} from './messages-DC2BhyRd.js';
import { t as Link$1 } from './navigation-Ca-dY7zl.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/routes/settings/credits.tsx?tsr-split=component
var TABS = ['all', 'grant', 'consume'];
var PAGE_SIZE = 20;
function CreditsPage() {
  const [tab, setTab] = useState('all');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [tab, debouncedSearch]);
  const balanceQuery = useQuery({
    queryKey: ['user-credits', 'balance'],
    queryFn: () => apiGet('/api/credits'),
  });
  const balance = balanceQuery.data?.balance ?? null;
  const balanceLoaded = !balanceQuery.isPending;
  const query = useQuery({
    queryKey: ['user-credits', page, tab, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (tab !== 'all') params.set('transactionType', tab);
      if (debouncedSearch) params.set('search', debouncedSearch);
      return apiGet(`/api/user/credits?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const rows = query.data?.items ?? [];
  const total = query.data?.total ?? 0;
  const columns = [
    {
      header: settings_credits_transaction_no(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-xs',
          children: r.transactionNo,
        }),
    },
    {
      header: settings_credits_description_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', { children: r.description || '—' }),
    },
    {
      header: settings_credits_type(),
      cell: (r) =>
        /* @__PURE__ */ jsx(Badge, {
          variant: r.transactionType === 'consume' ? 'secondary' : 'default',
          children: r.transactionType,
        }),
    },
    {
      header: settings_credits_scene(),
      cell: (r) => r.transactionScene || '—',
    },
    {
      header: settings_credits_credits(),
      className: 'text-right',
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: cn(
            'font-medium tabular-nums',
            r.transactionType === 'consume' && 'text-muted-foreground'
          ),
          children: r.credits > 0 ? `+${r.credits}` : r.credits,
        }),
    },
    {
      header: settings_credits_remaining(),
      className: 'text-right',
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm tabular-nums',
          children: r.remainingCredits,
        }),
    },
    {
      header: settings_credits_expires_at(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: r.expiresAt
            ? new Date(r.expiresAt).toLocaleDateString()
            : '—',
        }),
    },
    {
      header: settings_credits_date(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: new Date(r.createdAt).toLocaleDateString(),
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
            children: settings_credits_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: settings_credits_description(),
          }),
        ],
      }),
      /* @__PURE__ */ jsxs(Card, {
        className: 'max-w-md',
        children: [
          /* @__PURE__ */ jsx(CardHeader, {
            children: /* @__PURE__ */ jsxs('div', {
              className: 'flex items-center justify-between',
              children: [
                /* @__PURE__ */ jsx(CardTitle, {
                  children: settings_credits_balance(),
                }),
                /* @__PURE__ */ jsxs(Link$1, {
                  href: '/pricing',
                  className: cn(
                    buttonVariants({
                      variant: 'outline',
                      size: 'sm',
                    }),
                    'gap-2'
                  ),
                  children: [
                    /* @__PURE__ */ jsx(Coins, { className: 'size-4' }),
                    settings_credits_purchase(),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsx(CardContent, {
            children: /* @__PURE__ */ jsx('p', {
              className: 'text-3xl font-bold',
              children: balanceLoaded ? (balance ?? 0) : '…',
            }),
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
              children: tDynamic(`settings.credits.tab_${tb}`),
            },
            tb
          )
        ),
      }),
      /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsx(CardContent, {
          children: /* @__PURE__ */ jsx(DataTable, {
            columns,
            data: rows,
            total,
            page,
            pageSize: PAGE_SIZE,
            onPageChange: setPage,
            rowKey: (r) => r.id,
            emptyText: settings_credits_no_records(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => query.refetch(),
            loading: query.isFetching,
          }),
        }),
      }),
    ],
  });
}
//#endregion
export { CreditsPage as component };
