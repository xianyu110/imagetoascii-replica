import { useMemo, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useMutation } from '@tanstack/react-query';
import {
  Check,
  CreditCard,
  Folder,
  Folders,
  Headphones,
  Infinity as Infinity$1,
  Loader2,
  Mail,
  Puzzle,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { toast } from 'sonner';

import { a as apiPost } from './api-client-ddg0Kx1A.js';
import { t as Button } from './button-RkClB0x2.js';
import { c as useSession } from './client-CXZRF5YG.js';
import {
  t as Dialog,
  n as DialogContent,
  r as DialogDescription,
  a as DialogHeader,
  o as DialogTitle,
} from './dialog-D6wavpEs.js';
import { n as Footer, t as Header } from './header-C5bHwORu.js';
import {
  zc as common_pricing_choose_payment,
  Rc as common_pricing_choose_payment_desc,
  Vc as common_pricing_get_started,
  Lc as common_pricing_payment_for,
  Ic as common_pricing_payment_for_plan,
  Bc as common_pricing_processing,
  w as landing_pricing_best_value,
  C as landing_pricing_buy_lifetime,
  k as landing_pricing_description,
  v as landing_pricing_enterprise,
  _ as landing_pricing_enterprise_desc,
  g as landing_pricing_feature_1_project,
  h as landing_pricing_feature_5k_credits,
  f as landing_pricing_feature_50k_credits,
  u as landing_pricing_feature_api_access,
  o as landing_pricing_feature_custom_integrations,
  s as landing_pricing_feature_dedicated_support,
  m as landing_pricing_feature_email_support,
  l as landing_pricing_feature_everything_pro,
  d as landing_pricing_feature_priority_support,
  c as landing_pricing_feature_unlimited_credits,
  p as landing_pricing_feature_unlimited_projects,
  E as landing_pricing_lifetime,
  O as landing_pricing_monthly,
  T as landing_pricing_popular,
  b as landing_pricing_pro,
  y as landing_pricing_pro_desc,
  S as landing_pricing_starter,
  x as landing_pricing_starter_desc,
  A as landing_pricing_title,
  D as landing_pricing_yearly,
} from './messages-DC2BhyRd.js';
import { r as useRouter } from './navigation-Ca-dY7zl.js';
import { t as usePublicConfig } from './use-public-config-CH8e7YtM.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/components/payment-provider-modal.tsx
var providerLabel = {
  stripe: 'Stripe',
  creem: 'Creem',
  paypal: 'PayPal',
  alipay: 'Alipay',
  wechat: 'WeChat Pay',
};
function PaymentProviderModal({
  open,
  onOpenChange,
  providers,
  loadingProvider,
  onSelect,
  planName,
  price,
}) {
  return /* @__PURE__ */ jsx(Dialog, {
    open,
    onOpenChange,
    children: /* @__PURE__ */ jsxs(DialogContent, {
      className: 'sm:max-w-md',
      children: [
        /* @__PURE__ */ jsxs(DialogHeader, {
          children: [
            /* @__PURE__ */ jsx(DialogTitle, {
              children: common_pricing_choose_payment(),
            }),
            /* @__PURE__ */ jsx(DialogDescription, {
              children: planName
                ? price
                  ? common_pricing_payment_for({
                      plan: planName,
                      price,
                    })
                  : common_pricing_payment_for_plan({ plan: planName })
                : common_pricing_choose_payment_desc(),
            }),
          ],
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'mt-2 space-y-2',
          children: providers.map((p) => {
            return /* @__PURE__ */ jsxs(
              Button,
              {
                variant: 'outline',
                className: 'h-12 w-full justify-start gap-3',
                disabled: !!loadingProvider,
                onClick: () => onSelect(p),
                children: [
                  loadingProvider === p
                    ? /* @__PURE__ */ jsx(Loader2, {
                        className: 'size-4 animate-spin',
                      })
                    : /* @__PURE__ */ jsx(CreditCard, { className: 'size-4' }),
                  /* @__PURE__ */ jsx('span', { children: providerLabel[p] }),
                ],
              },
              p
            );
          }),
        }),
      ],
    }),
  });
}
//#endregion
//#region src/components/pricing-table.tsx
function PricingTable({ groups, onCheckout }) {
  const [activeGroup, setActiveGroup] = useState(groups[0]?.key || '');
  const [loadingId, setLoadingId] = useState(null);
  const currentGroup = groups.find((g) => g.key === activeGroup) || groups[0];
  const checkoutMutation = useMutation({
    mutationFn: (plan) =>
      apiPost('/api/payment/checkout', {
        product_id: plan.productId,
        product_name: plan.productName || plan.name,
        plan_name: plan.plan?.name || plan.name,
        price: plan.priceInCents,
        currency: plan.currency || 'usd',
        type: plan.plan ? 'subscription' : 'one-time',
        description: plan.name,
        plan: plan.plan,
        credits: plan.credits,
        credits_valid_days: plan.creditsValidDays,
        payment_provider: plan.paymentProvider || 'stripe',
      }),
    onSuccess: (data) => {
      if (data?.checkout_url) window.location.href = data.checkout_url;
    },
    onSettled: () => {
      setLoadingId(null);
    },
  });
  function handleCheckout(plan) {
    if (onCheckout) {
      onCheckout(plan);
      return;
    }
    if (!plan.productId || !plan.priceInCents) return;
    setLoadingId(plan.id);
    checkoutMutation.mutate(plan);
  }
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-10',
    children: [
      groups.length > 1 &&
        /* @__PURE__ */ jsx('div', {
          className: 'flex justify-center',
          children: /* @__PURE__ */ jsx('div', {
            className:
              'border-border bg-muted/40 inline-flex items-center rounded-full border p-1',
            children: groups.map((group) =>
              /* @__PURE__ */ jsx(
                'button',
                {
                  onClick: () => setActiveGroup(group.key),
                  className: cn(
                    'rounded-full px-5 py-1.5 text-sm font-medium transition-colors',
                    activeGroup === group.key
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  ),
                  children: group.label,
                },
                group.key
              )
            ),
          }),
        }),
      /* @__PURE__ */ jsx('div', {
        className: cn(
          'mx-auto grid gap-6',
          currentGroup?.plans.length === 2
            ? 'max-w-3xl sm:grid-cols-2'
            : currentGroup?.plans.length === 3
              ? 'max-w-5xl sm:grid-cols-2 lg:grid-cols-3'
              : 'max-w-6xl sm:grid-cols-2 lg:grid-cols-4'
        ),
        children: currentGroup?.plans.map((plan) =>
          /* @__PURE__ */ jsxs(
            'div',
            {
              className: cn(
                'border-border relative flex flex-col rounded-2xl border p-8 transition-all',
                plan.featured
                  ? 'bg-card ring-foreground/10 shadow-md ring-1'
                  : 'bg-background hover:border-foreground/30'
              ),
              children: [
                plan.name &&
                  /* @__PURE__ */ jsx('p', {
                    className: 'text-foreground mb-2 text-sm font-medium',
                    children: plan.name,
                  }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'mb-2 flex items-baseline gap-1',
                  children: [
                    /* @__PURE__ */ jsx('span', {
                      className: 'font-serif text-5xl tracking-tight',
                      children: plan.price,
                    }),
                    plan.interval &&
                      /* @__PURE__ */ jsxs('span', {
                        className: 'text-muted-foreground text-sm',
                        children: ['/', plan.interval],
                      }),
                  ],
                }),
                plan.originalPrice &&
                  /* @__PURE__ */ jsx('span', {
                    className:
                      'text-muted-foreground mb-1 text-sm line-through',
                    children: plan.originalPrice,
                  }),
                plan.description &&
                  /* @__PURE__ */ jsx('p', {
                    className: 'text-muted-foreground mb-8 text-sm',
                    children: plan.description,
                  }),
                /* @__PURE__ */ jsx(Button, {
                  variant: plan.featured ? 'default' : 'outline',
                  className: 'h-10 w-full rounded-full text-sm font-medium',
                  onClick: () => handleCheckout(plan),
                  disabled: loadingId === plan.id,
                  children:
                    loadingId === plan.id
                      ? common_pricing_processing()
                      : plan.buttonText || common_pricing_get_started(),
                }),
                /* @__PURE__ */ jsx('ul', {
                  className: 'mt-8 space-y-3',
                  children: plan.features.map((feature, i) => {
                    const isObj = typeof feature !== 'string';
                    const Icon = (isObj && feature.icon) || Check;
                    const label = isObj ? feature.label : feature;
                    return /* @__PURE__ */ jsxs(
                      'li',
                      {
                        className: 'flex items-center gap-2.5 text-sm',
                        children: [
                          /* @__PURE__ */ jsx(Icon, {
                            className: 'text-muted-foreground size-4 shrink-0',
                          }),
                          /* @__PURE__ */ jsx('span', {
                            className: 'text-foreground/90',
                            children: label,
                          }),
                        ],
                      },
                      i
                    );
                  }),
                }),
              ],
            },
            plan.id
          )
        ),
      }),
    ],
  });
}
//#endregion
//#region src/blocks/pricing.tsx
var ALL_PROVIDERS = ['stripe', 'creem', 'paypal', 'alipay', 'wechat'];
function Pricing({ title } = {}) {
  const router = useRouter();
  const { data: session } = useSession();
  const { data: configsData } = usePublicConfig();
  const configs = configsData ?? {};
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingPlan, setPendingPlan] = useState(null);
  const [loadingProvider, setLoadingProvider] = useState(null);
  const enabledProviders = useMemo(
    () => ALL_PROVIDERS.filter((p) => configs[`${p}_enabled`] === 'true'),
    [configs]
  );
  const starterFeatures = [
    {
      icon: Folder,
      label: landing_pricing_feature_1_project(),
    },
    {
      icon: Sparkles,
      label: landing_pricing_feature_5k_credits(),
    },
    {
      icon: Mail,
      label: landing_pricing_feature_email_support(),
    },
  ];
  const proFeatures = [
    {
      icon: Folders,
      label: landing_pricing_feature_unlimited_projects(),
    },
    {
      icon: Sparkles,
      label: landing_pricing_feature_50k_credits(),
    },
    {
      icon: Zap,
      label: landing_pricing_feature_priority_support(),
    },
    {
      icon: Terminal,
      label: landing_pricing_feature_api_access(),
    },
  ];
  const enterpriseFeatures = [
    {
      icon: Check,
      label: landing_pricing_feature_everything_pro(),
    },
    {
      icon: Infinity$1,
      label: landing_pricing_feature_unlimited_credits(),
    },
    {
      icon: Headphones,
      label: landing_pricing_feature_dedicated_support(),
    },
    {
      icon: Puzzle,
      label: landing_pricing_feature_custom_integrations(),
    },
  ];
  const groups = [
    {
      key: 'monthly',
      label: landing_pricing_monthly(),
      plans: [
        {
          id: 'starter-monthly',
          name: landing_pricing_starter(),
          description: landing_pricing_starter_desc(),
          price: '$9',
          interval: 'mo',
          features: starterFeatures,
          productId: 'starter_monthly',
          priceInCents: 900,
          currency: 'usd',
          credits: 5e3,
          plan: {
            name: 'Starter',
            interval: 'month',
            intervalCount: 1,
          },
        },
        {
          id: 'pro-monthly',
          name: landing_pricing_pro(),
          description: landing_pricing_pro_desc(),
          price: '$29',
          interval: 'mo',
          featured: true,
          badge: landing_pricing_popular(),
          features: proFeatures,
          productId: 'pro_monthly',
          priceInCents: 2900,
          currency: 'usd',
          credits: 5e4,
          plan: {
            name: 'Pro',
            interval: 'month',
            intervalCount: 1,
          },
        },
        {
          id: 'enterprise-monthly',
          name: landing_pricing_enterprise(),
          description: landing_pricing_enterprise_desc(),
          price: '$99',
          interval: 'mo',
          features: enterpriseFeatures,
          productId: 'enterprise_monthly',
          priceInCents: 9900,
          currency: 'usd',
          credits: 5e5,
          plan: {
            name: 'Enterprise',
            interval: 'month',
            intervalCount: 1,
          },
        },
      ],
    },
    {
      key: 'yearly',
      label: landing_pricing_yearly(),
      plans: [
        {
          id: 'starter-yearly',
          name: landing_pricing_starter(),
          description: landing_pricing_starter_desc(),
          price: '$86',
          originalPrice: '$108',
          interval: 'yr',
          features: starterFeatures,
          productId: 'starter_yearly',
          priceInCents: 8600,
          currency: 'usd',
          credits: 6e4,
          plan: {
            name: 'Starter',
            interval: 'year',
            intervalCount: 1,
          },
        },
        {
          id: 'pro-yearly',
          name: landing_pricing_pro(),
          description: landing_pricing_pro_desc(),
          price: '$278',
          originalPrice: '$348',
          interval: 'yr',
          featured: true,
          badge: landing_pricing_popular(),
          features: proFeatures,
          productId: 'pro_yearly',
          priceInCents: 27800,
          currency: 'usd',
          credits: 6e5,
          plan: {
            name: 'Pro',
            interval: 'year',
            intervalCount: 1,
          },
        },
        {
          id: 'enterprise-yearly',
          name: landing_pricing_enterprise(),
          description: landing_pricing_enterprise_desc(),
          price: '$950',
          originalPrice: '$1,188',
          interval: 'yr',
          features: enterpriseFeatures,
          productId: 'enterprise_yearly',
          priceInCents: 95e3,
          currency: 'usd',
          credits: 6e6,
          plan: {
            name: 'Enterprise',
            interval: 'year',
            intervalCount: 1,
          },
        },
      ],
    },
    {
      key: 'lifetime',
      label: landing_pricing_lifetime(),
      plans: [
        {
          id: 'starter-lifetime',
          name: landing_pricing_starter(),
          description: landing_pricing_starter_desc(),
          price: '$149',
          features: starterFeatures,
          productId: 'starter_lifetime',
          priceInCents: 14900,
          currency: 'usd',
          credits: 1e5,
          buttonText: landing_pricing_buy_lifetime(),
        },
        {
          id: 'pro-lifetime',
          name: landing_pricing_pro(),
          description: landing_pricing_pro_desc(),
          price: '$499',
          features: proFeatures,
          featured: true,
          badge: landing_pricing_best_value(),
          productId: 'pro_lifetime',
          priceInCents: 49900,
          currency: 'usd',
          credits: 1e6,
          buttonText: landing_pricing_buy_lifetime(),
        },
        {
          id: 'enterprise-lifetime',
          name: landing_pricing_enterprise(),
          description: landing_pricing_enterprise_desc(),
          price: '$1,999',
          features: enterpriseFeatures,
          productId: 'enterprise_lifetime',
          priceInCents: 199900,
          currency: 'usd',
          credits: 1e7,
          buttonText: landing_pricing_buy_lifetime(),
        },
      ],
    },
  ];
  const checkoutMutation = useMutation({
    mutationFn: ({ plan, provider }) =>
      apiPost('/api/payment/checkout', {
        product_id: plan.productId,
        product_name: plan.productName || plan.name,
        plan_name: plan.plan?.name || plan.name,
        price: plan.priceInCents,
        currency: plan.currency || 'usd',
        type: plan.plan ? 'subscription' : 'one-time',
        description: plan.name,
        plan: plan.plan,
        credits: plan.credits,
        credits_valid_days: plan.creditsValidDays,
        payment_provider: provider,
      }),
    onSuccess: (data) => {
      if (!data?.checkout_url) {
        toast.error('Checkout failed');
        setLoadingProvider(null);
        return;
      }
      window.location.href = data.checkout_url;
    },
    onError: (err) => {
      toast.error(err?.message || 'Checkout failed');
      setLoadingProvider(null);
    },
  });
  function startCheckout(plan, provider) {
    setLoadingProvider(provider);
    checkoutMutation.mutate({
      plan,
      provider,
    });
  }
  async function handleCheckout(plan) {
    if (!session?.user) {
      const redirect = encodeURIComponent(
        typeof window !== 'undefined' ? window.location.pathname : '/pricing'
      );
      router.push(`/sign-in?redirect=${redirect}`);
      return;
    }
    const selectEnabled = configs.select_payment_enabled === 'true';
    const defaultProvider =
      configs.default_payment_provider || enabledProviders[0] || 'stripe';
    if (selectEnabled && enabledProviders.length > 1) {
      setPendingPlan(plan);
      setModalOpen(true);
      return;
    }
    await startCheckout(plan, defaultProvider);
  }
  function handleProviderSelect(provider) {
    if (!pendingPlan) return;
    startCheckout(pendingPlan, provider);
  }
  return /* @__PURE__ */ jsxs('section', {
    id: 'pricing',
    className: 'border-border border-t px-4 py-24 sm:py-32',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'mx-auto max-w-5xl',
        children: [
          /* @__PURE__ */ jsxs('div', {
            className: 'mb-20 text-center',
            children: [
              /* @__PURE__ */ jsx('h2', {
                className:
                  'font-serif text-4xl font-normal tracking-tight sm:text-5xl',
                children: title ?? landing_pricing_title(),
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'text-muted-foreground mt-5',
                children: landing_pricing_description(),
              }),
            ],
          }),
          /* @__PURE__ */ jsx(PricingTable, {
            groups,
            onCheckout: handleCheckout,
          }),
        ],
      }),
      /* @__PURE__ */ jsx(PaymentProviderModal, {
        open: modalOpen,
        onOpenChange: (open) => {
          setModalOpen(open);
          if (!open) {
            setPendingPlan(null);
            setLoadingProvider(null);
          }
        },
        providers: enabledProviders.length ? enabledProviders : ['stripe'],
        loadingProvider,
        onSelect: handleProviderSelect,
        planName: pendingPlan?.name,
        price: pendingPlan?.price,
      }),
    ],
  });
}
//#endregion
//#region src/routes/pricing.tsx?tsr-split=component
function PricingPage() {
  return /* @__PURE__ */ jsxs('div', {
    className: 'bg-background text-foreground flex min-h-screen flex-col',
    children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx('main', {
        className: 'flex-1',
        children: /* @__PURE__ */ jsx(Pricing, {}),
      }),
      /* @__PURE__ */ jsx(Footer, {}),
    ],
  });
}
//#endregion
export { PricingPage as component };
