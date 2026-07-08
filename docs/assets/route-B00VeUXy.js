import { useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';
import {
  Coins,
  CreditCard,
  Home,
  Key,
  LayoutDashboard,
  LifeBuoy,
  Receipt,
  User,
  X,
} from 'lucide-react';
import { toast } from 'sonner';

import { a as apiPost } from './api-client-ddg0Kx1A.js';
import { t as AppLayout } from './app-layout-CxnNsCKl.js';
import { t as Button, n as buttonVariants } from './button-RkClB0x2.js';
import { c as useSession } from './client-CXZRF5YG.js';
import {
  t as Dialog,
  n as DialogContent,
  r as DialogDescription,
  i as DialogFooter,
  a as DialogHeader,
  o as DialogTitle,
} from './dialog-D6wavpEs.js';
import { t as ImageUploader } from './image-uploader-BSMgxL3y.js';
import { t as Input } from './input-B6v4Jp25.js';
import { t as Label } from './label-Dzpc0zKw.js';
import {
  ic as common_support_attachments_label,
  sc as common_support_cancel,
  pc as common_support_content_label,
  fc as common_support_content_placeholder,
  vc as common_support_description,
  bc as common_support_open_label,
  lc as common_support_required,
  gc as common_support_sign_in,
  _c as common_support_sign_in_notice,
  oc as common_support_submit,
  ac as common_support_submitting,
  cc as common_support_success,
  yc as common_support_title,
  hc as common_support_title_label,
  mc as common_support_title_placeholder,
  uc as common_support_track_hint_link,
  dc as common_support_track_hint_prefix,
  Nc as common_systems_home,
  Pc as common_systems_settings,
  Ys as settings_nav_apikeys,
  Qs as settings_nav_billing,
  Xs as settings_nav_credits,
  ec as settings_nav_overview,
  Zs as settings_nav_payments,
  $s as settings_nav_profile,
  Js as settings_nav_tickets,
} from './messages-DC2BhyRd.js';
import { t as Link$2 } from './navigation-Ca-dY7zl.js';
import { b as envConfigs } from './schema-DUwBz_C6.js';
import { t as Textarea } from './textarea-kLCUgc24.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/blocks/support-widget.tsx
/**
 * Floating support button (bottom-right) that opens a quick ticket form.
 * Drop into any page or layout: <SupportWidget />
 *
 * Requires login — unauthenticated users get a sign-in prompt instead.
 */
function SupportWidget() {
  const { data: session, isPending } = useSession();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploaderKey, setUploaderKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  async function submit() {
    if (!title.trim() || !content.trim()) {
      toast.error(common_support_required());
      return;
    }
    setSubmitting(true);
    try {
      await apiPost('/api/tickets', {
        title,
        content,
        attachments,
      });
      toast.success(common_support_success());
      setOpen(false);
      setTitle('');
      setContent('');
      setAttachments([]);
      setUploaderKey((k) => k + 1);
    } catch (e) {
      toast.error(e?.message || 'Failed');
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('button', {
        'aria-label': common_support_open_label(),
        onClick: () => setOpen(true),
        className: cn(
          'fixed right-6 bottom-6 z-50 size-12 rounded-full',
          'bg-primary text-primary-foreground shadow-lg',
          'flex items-center justify-center',
          'transition-all hover:scale-105 hover:shadow-xl'
        ),
        children: open
          ? /* @__PURE__ */ jsx(X, { className: 'size-5' })
          : /* @__PURE__ */ jsx(LifeBuoy, { className: 'size-5' }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open,
        onOpenChange: setOpen,
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: common_support_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: common_support_description(),
                }),
              ],
            }),
            !isPending && !session?.user
              ? /* @__PURE__ */ jsxs('div', {
                  className:
                    'flex flex-col items-center gap-4 py-6 text-center',
                  children: [
                    /* @__PURE__ */ jsx('p', {
                      className: 'text-muted-foreground text-sm',
                      children: common_support_sign_in_notice(),
                    }),
                    /* @__PURE__ */ jsx(Link$2, {
                      href: '/sign-in',
                      className: cn(buttonVariants()),
                      children: common_support_sign_in(),
                    }),
                  ],
                })
              : /* @__PURE__ */ jsxs(Fragment, {
                  children: [
                    /* @__PURE__ */ jsxs('div', {
                      className: 'space-y-4 py-2',
                      children: [
                        /* @__PURE__ */ jsxs('div', {
                          className: 'space-y-1.5',
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              htmlFor: 'support-title',
                              children: common_support_title_label(),
                            }),
                            /* @__PURE__ */ jsx(Input, {
                              id: 'support-title',
                              value: title,
                              maxLength: 200,
                              onChange: (e) => setTitle(e.target.value),
                              placeholder: common_support_title_placeholder(),
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs('div', {
                          className: 'space-y-1.5',
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              htmlFor: 'support-content',
                              children: common_support_content_label(),
                            }),
                            /* @__PURE__ */ jsx(Textarea, {
                              id: 'support-content',
                              value: content,
                              maxLength: 5e3,
                              rows: 5,
                              onChange: (e) => setContent(e.target.value),
                              placeholder: common_support_content_placeholder(),
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs('div', {
                          className: 'space-y-1.5',
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              children: common_support_attachments_label(),
                            }),
                            /* @__PURE__ */ jsx(
                              ImageUploader,
                              {
                                allowMultiple: true,
                                maxImages: 9,
                                onChange: (items) => {
                                  setAttachments(
                                    items
                                      .filter(
                                        (i) => i.status === 'uploaded' && i.url
                                      )
                                      .map((i) => i.url)
                                  );
                                  setUploading(
                                    items.some((i) => i.status === 'uploading')
                                  );
                                },
                              },
                              uploaderKey
                            ),
                          ],
                        }),
                        /* @__PURE__ */ jsxs('p', {
                          className: 'text-muted-foreground text-xs',
                          children: [
                            common_support_track_hint_prefix(),
                            ' ',
                            /* @__PURE__ */ jsx(Link$2, {
                              href: '/settings/tickets',
                              className: 'hover:text-foreground underline',
                              children: common_support_track_hint_link(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs(DialogFooter, {
                      children: [
                        /* @__PURE__ */ jsx(Button, {
                          variant: 'outline',
                          onClick: () => setOpen(false),
                          children: common_support_cancel(),
                        }),
                        /* @__PURE__ */ jsx(Button, {
                          onClick: submit,
                          disabled: submitting || uploading,
                          children: submitting
                            ? common_support_submitting()
                            : common_support_submit(),
                        }),
                      ],
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
//#region src/routes/settings/route.tsx?tsr-split=component
function SettingsLayout() {
  const group = common_systems_settings();
  return /* @__PURE__ */ jsxs(AppLayout, {
    navItems: [
      {
        href: '/settings',
        label: settings_nav_overview(),
        icon: LayoutDashboard,
        group,
      },
      {
        href: '/settings/billing',
        label: settings_nav_billing(),
        icon: CreditCard,
        group,
      },
      {
        href: '/settings/payments',
        label: settings_nav_payments(),
        icon: Receipt,
        group,
      },
      {
        href: '/settings/credits',
        label: settings_nav_credits(),
        icon: Coins,
        group,
      },
      {
        href: '/settings/apikeys',
        label: settings_nav_apikeys(),
        icon: Key,
        group,
      },
      {
        href: '/settings/tickets',
        label: settings_nav_tickets(),
        icon: LifeBuoy,
        group,
      },
    ],
    footerNavItems: [
      {
        href: '/settings/profile',
        label: settings_nav_profile(),
        icon: User,
      },
      {
        href: '/',
        label: common_systems_home(),
        icon: Home,
        newTab: true,
      },
    ],
    brand: envConfigs.app_name,
    brandHref: '/settings',
    children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(SupportWidget, {}),
    ],
  });
}
//#endregion
export { SettingsLayout as component };
