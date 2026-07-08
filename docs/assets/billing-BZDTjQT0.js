import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { Eye, MoreHorizontal, Pencil, XCircle } from 'lucide-react';
import { toast } from 'sonner';

import {
  t as ApiError,
  r as apiGet,
  a as apiPost,
} from './api-client-ddg0Kx1A.js';
import { t as Badge } from './badge-DVIKFGgX.js';
import { t as Button, n as buttonVariants } from './button-RkClB0x2.js';
import {
  t as Card,
  n as CardContent,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import { t as DataTable } from './data-table-Df_eQ-7W.js';
import {
  t as Dialog,
  n as DialogContent,
  r as DialogDescription,
  i as DialogFooter,
  a as DialogHeader,
  o as DialogTitle,
} from './dialog-D6wavpEs.js';
import {
  t as DropdownMenu,
  n as DropdownMenuContent,
  i as DropdownMenuItem,
  u as DropdownMenuTrigger,
} from './dropdown-menu-zTeG2WVe.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import {
  Zo as settings_billing_actions_col,
  xs as settings_billing_adjust,
  Xo as settings_billing_amount,
  os as settings_billing_cancel,
  ns as settings_billing_cancel_back,
  rs as settings_billing_cancel_confirm,
  is as settings_billing_cancel_description,
  $o as settings_billing_cancel_failed,
  es as settings_billing_cancel_success,
  as as settings_billing_cancel_title,
  us as settings_billing_canceled_at,
  ls as settings_billing_canceled_end_at,
  cs as settings_billing_canceled_reason,
  ts as settings_billing_canceling,
  Qo as settings_billing_close,
  gs as settings_billing_current_period,
  Jo as settings_billing_date,
  Es as settings_billing_description,
  hs as settings_billing_end_time,
  ps as settings_billing_ends_on,
  vs as settings_billing_interval,
  Cs as settings_billing_no_subscription,
  ds as settings_billing_period_end,
  fs as settings_billing_period_start,
  bs as settings_billing_plan,
  Yo as settings_billing_provider,
  ms as settings_billing_renews_on,
  ys as settings_billing_status,
  Ss as settings_billing_subscribe,
  Ts as settings_billing_subscription,
  ws as settings_billing_subscription_details,
  _s as settings_billing_subscription_no,
  Ds as settings_billing_title,
  ss as settings_billing_view,
} from './messages-DC2BhyRd.js';
import { t as Link$1 } from './navigation-Ca-dY7zl.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/routes/settings/billing.tsx?tsr-split=component
var TABS = [
  'all',
  'active',
  'trialing',
  'paused',
  'expired',
  'pending_cancel',
  'canceled',
];
var PAGE_SIZE = 20;
function formatAmount(amount, currency) {
  const normalized = (currency || 'usd').toUpperCase();
  return new Intl.NumberFormat(void 0, {
    style: 'currency',
    currency: normalized,
  }).format(amount / 100);
}
function statusVariant(status) {
  const s = (status || '').toLowerCase();
  if (s === 'active' || s === 'trialing') return 'default';
  if (s === 'canceled' || s === 'expired') return 'destructive';
  return 'secondary';
}
function isCancellable(status) {
  const s = (status || '').toLowerCase();
  return s === 'active' || s === 'trialing';
}
function BillingPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState('all');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [viewing, setViewing] = useState(null);
  const [canceling, setCanceling] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [tab, debouncedSearch]);
  const currentQuery = useQuery({
    queryKey: ['billing', 'current'],
    queryFn: () => apiGet('/api/user/subscriptions/current'),
  });
  const current = currentQuery.data ?? null;
  const currentLoaded = !currentQuery.isPending;
  const listQuery = useQuery({
    queryKey: ['billing', 'list', page, tab, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (tab !== 'all') params.set('status', tab);
      if (debouncedSearch) params.set('search', debouncedSearch);
      return apiGet(`/api/user/subscriptions?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const rows = listQuery.data?.items ?? [];
  const total = listQuery.data?.total ?? 0;
  const cancelMutation = useMutation({
    mutationFn: (subscriptionNo) =>
      apiPost('/api/user/subscriptions/cancel', { subscriptionNo }),
    onSuccess: () => {
      toast.success(settings_billing_cancel_success());
      setCanceling(null);
      queryClient.invalidateQueries({ queryKey: ['billing'] });
    },
    onError: (err) => {
      toast.error(
        err instanceof ApiError
          ? err.message || settings_billing_cancel_failed()
          : settings_billing_cancel_failed()
      );
    },
  });
  const submitting = cancelMutation.isPending;
  function confirmCancel() {
    if (!canceling) return;
    cancelMutation.mutate(canceling.subscriptionNo);
  }
  const columns = [
    {
      header: settings_billing_subscription_no(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-xs',
          children: r.subscriptionNo,
        }),
    },
    {
      header: settings_billing_plan(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium',
          children: r.planName || r.productName || '—',
        }),
    },
    {
      header: settings_billing_interval(),
      cell: (r) =>
        r.interval
          ? /* @__PURE__ */ jsxs('span', {
              className: 'text-sm',
              children: [
                r.intervalCount ? `${r.intervalCount} ` : '',
                r.interval,
              ],
            })
          : '—',
    },
    {
      header: settings_billing_status(),
      cell: (r) =>
        /* @__PURE__ */ jsx(Badge, {
          variant: statusVariant(r.status),
          children: r.status,
        }),
    },
    {
      header: settings_billing_amount(),
      cell: (r) =>
        r.amount && r.currency
          ? /* @__PURE__ */ jsx('span', {
              className: 'tabular-nums',
              children: formatAmount(r.amount, r.currency),
            })
          : '—',
    },
    {
      header: settings_billing_current_period(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-xs whitespace-pre-line',
          children:
            r.currentPeriodStart && r.currentPeriodEnd
              ? `${new Date(r.currentPeriodStart).toLocaleDateString()}\n~ ${new Date(r.currentPeriodEnd).toLocaleDateString()}`
              : '—',
        }),
    },
    {
      header: settings_billing_end_time(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: r.canceledEndAt
            ? new Date(r.canceledEndAt).toLocaleDateString()
            : '—',
        }),
    },
    {
      header: settings_billing_date(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: r.createdAt
            ? new Date(r.createdAt).toLocaleDateString()
            : '—',
        }),
    },
    {
      header: settings_billing_actions_col(),
      className: 'w-[80px]',
      cell: (r) =>
        /* @__PURE__ */ jsxs(DropdownMenu, {
          children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, {
              render: /* @__PURE__ */ jsx(Button, {
                variant: 'ghost',
                size: 'icon',
                className: 'size-7',
                children: /* @__PURE__ */ jsx(MoreHorizontal, {
                  className: 'size-4',
                }),
              }),
            }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, {
              align: 'end',
              children: [
                /* @__PURE__ */ jsxs(DropdownMenuItem, {
                  onClick: () => setViewing(r),
                  children: [
                    /* @__PURE__ */ jsx(Eye, { className: 'size-4' }),
                    settings_billing_view(),
                  ],
                }),
                /* @__PURE__ */ jsxs(DropdownMenuItem, {
                  onClick: () => isCancellable(r.status) && setCanceling(r),
                  disabled: !isCancellable(r.status),
                  children: [
                    /* @__PURE__ */ jsx(XCircle, { className: 'size-4' }),
                    settings_billing_cancel(),
                  ],
                }),
              ],
            }),
          ],
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
            children: settings_billing_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: settings_billing_description(),
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
                  children: settings_billing_subscription(),
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
                    /* @__PURE__ */ jsx(Pencil, { className: 'size-4' }),
                    current
                      ? settings_billing_adjust()
                      : settings_billing_subscribe(),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsx(CardContent, {
            children: !currentLoaded
              ? /* @__PURE__ */ jsx('p', {
                  className: 'text-muted-foreground text-sm',
                  children: '…',
                })
              : current
                ? /* @__PURE__ */ jsxs('div', {
                    className: 'space-y-2',
                    children: [
                      /* @__PURE__ */ jsxs('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          /* @__PURE__ */ jsx('p', {
                            className: 'text-3xl font-bold',
                            children:
                              current.planName || current.productName || '—',
                          }),
                          /* @__PURE__ */ jsx(Badge, {
                            variant: statusVariant(current.status),
                            children: current.status,
                          }),
                        ],
                      }),
                      current.amount &&
                        current.currency &&
                        /* @__PURE__ */ jsxs('p', {
                          className: 'text-muted-foreground text-sm',
                          children: [
                            formatAmount(current.amount, current.currency),
                            current.interval ? ` / ${current.interval}` : '',
                          ],
                        }),
                      current.canceledEndAt
                        ? /* @__PURE__ */ jsx('p', {
                            className: 'text-destructive text-sm',
                            children: settings_billing_ends_on({
                              date: new Date(
                                current.canceledEndAt
                              ).toLocaleDateString(),
                            }),
                          })
                        : current.currentPeriodEnd
                          ? /* @__PURE__ */ jsx('p', {
                              className: 'text-muted-foreground text-sm',
                              children: settings_billing_renews_on({
                                date: new Date(
                                  current.currentPeriodEnd
                                ).toLocaleDateString(),
                              }),
                            })
                          : null,
                    ],
                  })
                : /* @__PURE__ */ jsx('p', {
                    className: 'text-muted-foreground text-3xl font-bold',
                    children: settings_billing_no_subscription(),
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
              children: tDynamic(`settings.billing.tab_${tb}`),
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
            emptyText: settings_billing_no_subscription(),
            search,
            onSearchChange: setSearch,
            onRefresh: async () => {
              currentQuery.refetch();
              await listQuery.refetch();
            },
            loading: listQuery.isFetching,
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!viewing,
        onOpenChange: (v) => !v && setViewing(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: settings_billing_subscription_details(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  className: 'font-mono text-xs',
                  children: viewing?.subscriptionNo,
                }),
              ],
            }),
            viewing &&
              /* @__PURE__ */ jsxs('div', {
                className: 'space-y-3 py-2 text-sm',
                children: [
                  /* @__PURE__ */ jsx(DetailRow, {
                    label: settings_billing_plan(),
                    children: viewing.planName || viewing.productName || '—',
                  }),
                  /* @__PURE__ */ jsx(DetailRow, {
                    label: settings_billing_status(),
                    children: /* @__PURE__ */ jsx(Badge, {
                      variant: statusVariant(viewing.status),
                      children: viewing.status,
                    }),
                  }),
                  /* @__PURE__ */ jsx(DetailRow, {
                    label: settings_billing_amount(),
                    children:
                      viewing.amount && viewing.currency
                        ? `${formatAmount(viewing.amount, viewing.currency)}${viewing.interval ? ` / ${viewing.interval}` : ''}`
                        : '—',
                  }),
                  /* @__PURE__ */ jsx(DetailRow, {
                    label: settings_billing_provider(),
                    children: viewing.paymentProvider,
                  }),
                  /* @__PURE__ */ jsx(DetailRow, {
                    label: settings_billing_period_start(),
                    children: viewing.currentPeriodStart
                      ? new Date(viewing.currentPeriodStart).toLocaleString()
                      : '—',
                  }),
                  /* @__PURE__ */ jsx(DetailRow, {
                    label: settings_billing_period_end(),
                    children: viewing.currentPeriodEnd
                      ? new Date(viewing.currentPeriodEnd).toLocaleString()
                      : '—',
                  }),
                  viewing.canceledAt &&
                    /* @__PURE__ */ jsx(DetailRow, {
                      label: settings_billing_canceled_at(),
                      children: new Date(viewing.canceledAt).toLocaleString(),
                    }),
                  viewing.canceledEndAt &&
                    /* @__PURE__ */ jsx(DetailRow, {
                      label: settings_billing_canceled_end_at(),
                      children: new Date(
                        viewing.canceledEndAt
                      ).toLocaleString(),
                    }),
                  viewing.canceledReason &&
                    /* @__PURE__ */ jsx(DetailRow, {
                      label: settings_billing_canceled_reason(),
                      children: viewing.canceledReason,
                    }),
                ],
              }),
            /* @__PURE__ */ jsx(DialogFooter, {
              children: /* @__PURE__ */ jsx(Button, {
                variant: 'outline',
                onClick: () => setViewing(null),
                children: settings_billing_close(),
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!canceling,
        onOpenChange: (v) => !v && setCanceling(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: settings_billing_cancel_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: settings_billing_cancel_description({
                    plan: canceling?.planName || canceling?.productName || '—',
                  }),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setCanceling(null),
                  disabled: submitting,
                  children: settings_billing_cancel_back(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: 'destructive',
                  onClick: confirmCancel,
                  disabled: submitting,
                  children: submitting
                    ? settings_billing_canceling()
                    : settings_billing_cancel_confirm(),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function DetailRow({ label, children }) {
  return /* @__PURE__ */ jsxs('div', {
    className: 'flex items-start gap-3',
    children: [
      /* @__PURE__ */ jsx('span', {
        className: 'text-muted-foreground w-32 shrink-0',
        children: label,
      }),
      /* @__PURE__ */ jsx('span', {
        className: 'flex-1',
        children,
      }),
    ],
  });
}
//#endregion
export { BillingPage as component };
