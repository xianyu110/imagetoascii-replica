import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { r as apiGet } from './api-client-ddg0Kx1A.js';
import { t as Card, n as CardContent } from './card-CJS2GQq6.js';
import { t as DataTable } from './data-table-Df_eQ-7W.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import {
  $t as admin_credits_amount,
  Jt as admin_credits_created_at,
  rn as admin_credits_description,
  Yt as admin_credits_expires_at,
  nn as admin_credits_no_credits,
  Qt as admin_credits_remaining,
  Xt as admin_credits_scene,
  in as admin_credits_title,
  tn as admin_credits_transaction_no,
  Zt as admin_credits_type,
  en as admin_credits_user,
} from './messages-DC2BhyRd.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/routes/admin/credits.tsx?tsr-split=component
var PAGE_SIZE = 10;
var TABS = ['all', 'grant', 'consume'];
function CreditsPage() {
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState('all');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [tab, debouncedSearch]);
  const query = useQuery({
    queryKey: ['admin-credits', page, tab, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (tab !== 'all') params.set('transactionType', tab);
      if (debouncedSearch) params.set('search', debouncedSearch);
      return apiGet(`/api/admin/credits?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const credits = query.data?.items ?? [];
  const total = query.data?.total ?? 0;
  const columns = [
    {
      header: admin_credits_transaction_no(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-xs',
          children: c.transactionNo,
        }),
    },
    {
      header: admin_credits_user(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-sm',
          children: c.userEmail || c.userId,
        }),
    },
    {
      header: admin_credits_amount(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className: cn(
            'font-medium',
            c.credits > 0 ? 'text-green-600' : 'text-red-500'
          ),
          children: c.credits > 0 ? `+${c.credits}` : c.credits,
        }),
    },
    {
      header: admin_credits_remaining(),
      cell: (c) => c.remainingCredits,
    },
    {
      header: admin_credits_type(),
      cell: (c) => c.transactionType,
    },
    {
      header: admin_credits_scene(),
      cell: (c) => c.transactionScene || '—',
    },
    {
      header: admin_credits_description(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className:
            'text-muted-foreground block max-w-[200px] truncate text-sm',
          children: c.description || '—',
        }),
    },
    {
      header: admin_credits_expires_at(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: c.expiresAt
            ? new Date(c.expiresAt).toLocaleDateString()
            : '—',
        }),
    },
    {
      header: admin_credits_created_at(),
      cell: (c) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: new Date(c.createdAt).toLocaleDateString(),
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
            children: admin_credits_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: admin_credits_description(),
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
              children: tDynamic(`admin.credits.tab_${tb}`),
            },
            tb
          )
        ),
      }),
      /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsx(CardContent, {
          children: /* @__PURE__ */ jsx(DataTable, {
            columns,
            data: credits,
            total,
            page,
            pageSize: PAGE_SIZE,
            onPageChange: setPage,
            rowKey: (c) => c.id,
            emptyText: admin_credits_no_credits(),
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
