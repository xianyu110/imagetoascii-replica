import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { r as apiGet } from './api-client-ddg0Kx1A.js';
import { t as Badge } from './badge-DVIKFGgX.js';
import { t as Card, n as CardContent } from './card-CJS2GQq6.js';
import { t as DataTable } from './data-table-Df_eQ-7W.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import {
  un as admin_subscriptions_amount,
  an as admin_subscriptions_created_at,
  mn as admin_subscriptions_description,
  ln as admin_subscriptions_interval,
  pn as admin_subscriptions_no_subscriptions,
  on as admin_subscriptions_period,
  sn as admin_subscriptions_provider,
  cn as admin_subscriptions_status,
  fn as admin_subscriptions_subscription_no,
  hn as admin_subscriptions_title,
  dn as admin_subscriptions_user,
} from './messages-DC2BhyRd.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/routes/admin/subscriptions.tsx?tsr-split=component
var PAGE_SIZE = 10;
var TABS = ['all', 'month', 'year'];
function SubscriptionsPage() {
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
    queryKey: ['admin-subscriptions', page, tab, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (tab === 'month') params.set('interval', 'month');
      if (tab === 'year') params.set('interval', 'year');
      if (debouncedSearch) params.set('search', debouncedSearch);
      return apiGet(`/api/admin/subscriptions?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const subscriptions = query.data?.items ?? [];
  const total = query.data?.total ?? 0;
  function formatAmount(amount, currency) {
    if (amount == null) return '—';
    const value = amount / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
    }).format(value);
  }
  function formatDate(d) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString();
  }
  const statusVariant = (s) => {
    if (s === 'active' || s === 'trialing') return 'default';
    if (s === 'canceled' || s === 'expired') return 'destructive';
    return 'secondary';
  };
  const columns = [
    {
      header: admin_subscriptions_subscription_no(),
      cell: (s) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-xs',
          children: s.subscriptionNo,
        }),
    },
    {
      header: admin_subscriptions_user(),
      cell: (s) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-sm',
          children: s.userEmail || s.userId,
        }),
    },
    {
      header: admin_subscriptions_amount(),
      cell: (s) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium',
          children: formatAmount(s.amount, s.currency),
        }),
    },
    {
      header: admin_subscriptions_interval(),
      cell: (s) => s.interval || '—',
    },
    {
      header: admin_subscriptions_status(),
      cell: (s) =>
        /* @__PURE__ */ jsx(Badge, {
          variant: statusVariant(s.status),
          children: s.status,
        }),
    },
    {
      header: admin_subscriptions_provider(),
      cell: (s) => s.paymentProvider,
    },
    {
      header: admin_subscriptions_period(),
      cell: (s) =>
        /* @__PURE__ */ jsxs('span', {
          className: 'text-muted-foreground text-sm',
          children: [
            formatDate(s.currentPeriodStart),
            ' ~ ',
            formatDate(s.currentPeriodEnd),
          ],
        }),
    },
    {
      header: admin_subscriptions_created_at(),
      cell: (s) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: new Date(s.createdAt).toLocaleDateString(),
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
            children: admin_subscriptions_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: admin_subscriptions_description(),
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
              children: tDynamic(`admin.subscriptions.tab_${tb}`),
            },
            tb
          )
        ),
      }),
      /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsx(CardContent, {
          children: /* @__PURE__ */ jsx(DataTable, {
            columns,
            data: subscriptions,
            total,
            page,
            pageSize: PAGE_SIZE,
            onPageChange: setPage,
            rowKey: (s) => s.id,
            emptyText: admin_subscriptions_no_subscriptions(),
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
export { SubscriptionsPage as component };
