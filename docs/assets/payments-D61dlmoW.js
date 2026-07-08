import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { r as apiGet } from './api-client-ddg0Kx1A.js';
import { t as Badge } from './badge-DVIKFGgX.js';
import { t as Card, n as CardContent } from './card-CJS2GQq6.js';
import { t as DataTable } from './data-table-Df_eQ-7W.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import {
  bn as admin_payments_amount,
  gn as admin_payments_created_at,
  wn as admin_payments_description,
  Cn as admin_payments_no_payments,
  Sn as admin_payments_order_no,
  _n as admin_payments_provider,
  yn as admin_payments_status,
  Tn as admin_payments_title,
  vn as admin_payments_type,
  xn as admin_payments_user,
} from './messages-DC2BhyRd.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/routes/admin/payments.tsx?tsr-split=component
var PAGE_SIZE = 10;
var TABS = ['all', 'subscription', 'one_time'];
function PaymentsPage() {
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
    queryKey: ['admin-payments', page, tab, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (tab === 'subscription') params.set('paymentType', 'subscription');
      if (tab === 'one_time') params.set('paymentType', 'one_time');
      if (debouncedSearch) params.set('search', debouncedSearch);
      return apiGet(`/api/admin/orders?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const orders = query.data?.items ?? [];
  const total = query.data?.total ?? 0;
  function formatAmount(amount, currency) {
    const value = amount / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
    }).format(value);
  }
  const statusVariant = (s) => {
    if (s === 'paid') return 'default';
    if (s === 'failed') return 'destructive';
    return 'secondary';
  };
  const columns = [
    {
      header: admin_payments_order_no(),
      cell: (o) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-xs',
          children: o.orderNo,
        }),
    },
    {
      header: admin_payments_user(),
      cell: (o) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-sm',
          children: o.userEmail || o.userId,
        }),
    },
    {
      header: admin_payments_amount(),
      cell: (o) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium',
          children: formatAmount(o.amount, o.currency),
        }),
    },
    {
      header: admin_payments_status(),
      cell: (o) =>
        /* @__PURE__ */ jsx(Badge, {
          variant: statusVariant(o.status),
          children: o.status,
        }),
    },
    {
      header: admin_payments_type(),
      cell: (o) => o.paymentType || '—',
    },
    {
      header: admin_payments_provider(),
      cell: (o) => o.paymentProvider,
    },
    {
      header: admin_payments_created_at(),
      cell: (o) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: new Date(o.createdAt).toLocaleDateString(),
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
            children: admin_payments_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: admin_payments_description(),
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
              children: tDynamic(`admin.payments.tab_${tb}`),
            },
            tb
          )
        ),
      }),
      /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsx(CardContent, {
          children: /* @__PURE__ */ jsx(DataTable, {
            columns,
            data: orders,
            total,
            page,
            pageSize: PAGE_SIZE,
            onPageChange: setPage,
            rowKey: (o) => o.id,
            emptyText: admin_payments_no_payments(),
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
export { PaymentsPage as component };
