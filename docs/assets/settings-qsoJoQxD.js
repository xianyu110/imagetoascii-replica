import { jsx, jsxs } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';
import { Activity, CreditCard, Key, TrendingUp } from 'lucide-react';

import { r as apiGet } from './api-client-ddg0Kx1A.js';
import {
  t as Card,
  n as CardContent,
  r as CardDescription,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import { c as useSession } from './client-CXZRF5YG.js';
import {
  Co as settings_apikeys_title,
  Fo as settings_credits_description,
  Io as settings_credits_title,
  Hs as settings_overview_apikeys_description,
  Vs as settings_overview_getting_started,
  Bs as settings_overview_getting_started_description,
  qs as settings_overview_plan,
  Gs as settings_overview_plan_description,
  Ks as settings_overview_plan_free,
  Ws as settings_overview_usage,
  Us as settings_overview_usage_description,
  tc as settings_placeholder,
  rc as settings_title,
  nc as settings_welcome,
} from './messages-DC2BhyRd.js';

//#region src/routes/settings/index.tsx?tsr-split=component
function DashboardPage() {
  const { data: session } = useSession();
  const { data: creditsData } = useQuery({
    queryKey: ['user-credits'],
    queryFn: () => apiGet('/api/credits'),
  });
  const { data: apiKeysData } = useQuery({
    queryKey: ['user-apikeys'],
    queryFn: () => apiGet('/api/apikeys'),
  });
  const { data: subscriptionData } = useQuery({
    queryKey: ['user-subscription-current'],
    queryFn: () => apiGet('/api/user/subscriptions/current'),
  });
  const credits = creditsData?.balance ?? null;
  const apiKeys = apiKeysData?.length ?? null;
  const subscription = subscriptionData ?? null;
  const planLabel =
    subscription?.planName ||
    subscription?.productName ||
    settings_overview_plan_free();
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-6 p-4 md:p-6',
    children: [
      /* @__PURE__ */ jsxs('div', {
        children: [
          /* @__PURE__ */ jsx('h1', {
            className: 'text-2xl font-semibold tracking-tight',
            children: settings_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground mt-1 text-sm',
            children: settings_welcome({
              name: session?.user?.name || session?.user?.email || '',
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('div', {
        className: 'grid gap-4 sm:grid-cols-2 lg:grid-cols-4',
        children: [
          /* @__PURE__ */ jsxs(Card, {
            children: [
              /* @__PURE__ */ jsxs(CardHeader, {
                className: 'flex flex-row items-center justify-between pb-2',
                children: [
                  /* @__PURE__ */ jsx(CardTitle, {
                    className: 'text-sm font-medium',
                    children: settings_overview_plan(),
                  }),
                  /* @__PURE__ */ jsx(TrendingUp, {
                    className: 'text-muted-foreground size-4',
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs(CardContent, {
                children: [
                  /* @__PURE__ */ jsx('div', {
                    className: 'text-2xl font-bold',
                    children: planLabel,
                  }),
                  /* @__PURE__ */ jsx('p', {
                    className: 'text-muted-foreground mt-1 text-xs',
                    children: settings_overview_plan_description(),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Card, {
            children: [
              /* @__PURE__ */ jsxs(CardHeader, {
                className: 'flex flex-row items-center justify-between pb-2',
                children: [
                  /* @__PURE__ */ jsx(CardTitle, {
                    className: 'text-sm font-medium',
                    children: settings_credits_title(),
                  }),
                  /* @__PURE__ */ jsx(CreditCard, {
                    className: 'text-muted-foreground size-4',
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs(CardContent, {
                children: [
                  /* @__PURE__ */ jsx('div', {
                    className: 'text-2xl font-bold',
                    children: credits ?? '—',
                  }),
                  /* @__PURE__ */ jsx('p', {
                    className: 'text-muted-foreground mt-1 text-xs',
                    children: settings_credits_description(),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Card, {
            children: [
              /* @__PURE__ */ jsxs(CardHeader, {
                className: 'flex flex-row items-center justify-between pb-2',
                children: [
                  /* @__PURE__ */ jsx(CardTitle, {
                    className: 'text-sm font-medium',
                    children: settings_apikeys_title(),
                  }),
                  /* @__PURE__ */ jsx(Key, {
                    className: 'text-muted-foreground size-4',
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs(CardContent, {
                children: [
                  /* @__PURE__ */ jsx('div', {
                    className: 'text-2xl font-bold',
                    children: apiKeys ?? '—',
                  }),
                  /* @__PURE__ */ jsx('p', {
                    className: 'text-muted-foreground mt-1 text-xs',
                    children: settings_overview_apikeys_description(),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Card, {
            children: [
              /* @__PURE__ */ jsxs(CardHeader, {
                className: 'flex flex-row items-center justify-between pb-2',
                children: [
                  /* @__PURE__ */ jsx(CardTitle, {
                    className: 'text-sm font-medium',
                    children: settings_overview_usage(),
                  }),
                  /* @__PURE__ */ jsx(Activity, {
                    className: 'text-muted-foreground size-4',
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs(CardContent, {
                children: [
                  /* @__PURE__ */ jsx('div', {
                    className: 'text-2xl font-bold',
                    children: '0',
                  }),
                  /* @__PURE__ */ jsx('p', {
                    className: 'text-muted-foreground mt-1 text-xs',
                    children: settings_overview_usage_description(),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxs(Card, {
        children: [
          /* @__PURE__ */ jsxs(CardHeader, {
            children: [
              /* @__PURE__ */ jsx(CardTitle, {
                className: 'text-base',
                children: settings_overview_getting_started(),
              }),
              /* @__PURE__ */ jsx(CardDescription, {
                children: settings_overview_getting_started_description(),
              }),
            ],
          }),
          /* @__PURE__ */ jsx(CardContent, {
            children: /* @__PURE__ */ jsx('div', {
              className:
                'border-border text-muted-foreground rounded-lg border border-dashed p-8 text-center',
              children: /* @__PURE__ */ jsx('p', {
                className: 'text-sm',
                children: settings_placeholder(),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { DashboardPage as component };
