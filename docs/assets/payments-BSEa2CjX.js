import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ExternalLink } from 'lucide-react';

import { r as apiGet } from './api-client-ddg0Kx1A.js';
import { t as Badge } from './badge-DVIKFGgX.js';
import { t as Card, n as CardContent } from './card-CJS2GQq6.js';
import { t as DataTable } from './data-table-Df_eQ-7W.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import {
  Ho as settings_payments_amount,
  Ro as settings_payments_date,
  Ko as settings_payments_description,
  Lo as settings_payments_invoice,
  Go as settings_payments_no_payments,
  Wo as settings_payments_order_no,
  Uo as settings_payments_product,
  zo as settings_payments_provider,
  Vo as settings_payments_status,
  qo as settings_payments_title,
  Bo as settings_payments_type,
} from './messages-DC2BhyRd.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/routes/settings/payments.tsx?tsr-split=component
var TABS = ['all', 'one-time', 'subscription', 'renew'];
var PAGE_SIZE = 20;
function formatAmount(amount, currency) {
  const normalized = (currency || 'usd').toUpperCase();
  return new Intl.NumberFormat(void 0, {
    style: 'currency',
    currency: normalized,
  }).format(amount / 100);
}
function statusVariant(status) {
  const s = status.toLowerCase();
  if (s === 'paid' || s === 'succeeded' || s === 'active') return 'default';
  if (s === 'failed' || s === 'canceled') return 'destructive';
  return 'secondary';
}
function PaymentsPage() {
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
  const query = useQuery({
    queryKey: ['user-payments', page, tab, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (tab !== 'all') params.set('paymentType', tab);
      if (debouncedSearch) params.set('search', debouncedSearch);
      return apiGet(`/api/user/orders?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const orders = query.data?.items ?? [];
  const total = query.data?.total ?? 0;
  const columns = [
    {
      header: settings_payments_order_no(),
      cell: (o) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-xs',
          children: o.orderNo,
        }),
    },
    {
      header: settings_payments_product(),
      cell: (o) =>
        /* @__PURE__ */ jsx('span', {
          children: o.planName || o.productName || '—',
        }),
    },
    {
      header: settings_payments_amount(),
      cell: (o) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium',
          children: formatAmount(o.amount, o.currency),
        }),
    },
    {
      header: settings_payments_status(),
      cell: (o) =>
        /* @__PURE__ */ jsx(Badge, {
          variant: statusVariant(o.status),
          children: o.status,
        }),
    },
    {
      header: settings_payments_type(),
      cell: (o) => o.paymentType || '—',
    },
    {
      header: settings_payments_provider(),
      cell: (o) =>
        /* @__PURE__ */ jsx('span', {
          className: 'capitalize',
          children: o.paymentProvider,
        }),
    },
    {
      header: settings_payments_date(),
      cell: (o) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: new Date(o.paidAt || o.createdAt).toLocaleDateString(),
        }),
    },
    {
      header: settings_payments_invoice(),
      className: 'w-[60px]',
      cell: (o) =>
        o.invoiceUrl
          ? /* @__PURE__ */ jsx('a', {
              href: o.invoiceUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              className:
                'text-primary inline-flex items-center gap-1 text-sm hover:underline',
              'aria-label': settings_payments_invoice(),
              children: /* @__PURE__ */ jsx(ExternalLink, {
                className: 'size-3.5',
              }),
            })
          : /* @__PURE__ */ jsx('span', {
              className: 'text-muted-foreground',
              children: '—',
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
            children: settings_payments_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: settings_payments_description(),
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
              children: tDynamic(
                `settings.payments.tab_${tb.replace('-', '_')}`
              ),
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
            emptyText: settings_payments_no_payments(),
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
