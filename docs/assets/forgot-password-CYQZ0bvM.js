import { useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

import { a as localizeHref } from '../server.js';
import { t as Button } from './button-RkClB0x2.js';
import {
  t as Card,
  n as CardContent,
  r as CardDescription,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import { r as requestPasswordReset } from './client-CXZRF5YG.js';
import {
  t as Field,
  n as FieldDescription,
  r as FieldGroup,
} from './field-BZh9EFVs.js';
import { t as TextField } from './form-field-DX3nwIlh.js';
import {
  hl as common_sign_back_to_sign_in,
  Ll as common_sign_email_placeholder,
  Rl as common_sign_email_title,
  yl as common_sign_forgot_password_description,
  bl as common_sign_forgot_password_title,
  il as common_sign_password_reset_unavailable_description,
  al as common_sign_password_reset_unavailable_title,
  gl as common_sign_reset_link_sent_description,
  _l as common_sign_reset_link_sent_title,
  vl as common_sign_send_reset_link,
} from './messages-DC2BhyRd.js';
import { t as Link } from './navigation-Ca-dY7zl.js';
import { b as envConfigs } from './schema-DUwBz_C6.js';
import { t as usePublicConfig } from './use-public-config-CH8e7YtM.js';

//#region src/routes/(auth)/forgot-password.tsx?tsr-split=component
var forgotSchema = z.object({
  email: z.string().email(common_sign_email_placeholder()),
});
function ForgotPasswordPage() {
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [sentEmail, setSentEmail] = useState('');
  const configQuery = usePublicConfig();
  const configs = configQuery.data ?? {};
  const configsLoaded = configQuery.isSuccess;
  const passwordResetEnabled = configs.password_reset_enabled === 'true';
  const form = useForm({
    defaultValues: { email: '' },
    validators: { onSubmit: forgotSchema },
    onSubmit: async ({ value }) => {
      setError('');
      try {
        const redirectTo = `${window.location.origin}${localizeHref('/reset-password')}`;
        const result = await requestPasswordReset({
          email: value.email,
          redirectTo,
        });
        if (result.error) setError(result.error.message || 'Request failed');
        else {
          setSentEmail(value.email);
          setSent(true);
        }
      } catch (err) {
        setError(err.message || 'Request failed');
      }
    },
  });
  return /* @__PURE__ */ jsx('div', {
    className:
      'bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'flex w-full max-w-sm flex-col gap-6',
      children: [
        /* @__PURE__ */ jsx(Link, {
          href: '/',
          className: 'self-center font-serif text-lg italic',
          children: configs.app_name || envConfigs.app_name,
        }),
        /* @__PURE__ */ jsxs(Card, {
          children: [
            /* @__PURE__ */ jsxs(CardHeader, {
              className: 'text-center',
              children: [
                /* @__PURE__ */ jsx(CardTitle, {
                  className: 'text-xl',
                  children: sent
                    ? common_sign_reset_link_sent_title()
                    : common_sign_forgot_password_title(),
                }),
                !sent &&
                  /* @__PURE__ */ jsx(CardDescription, {
                    children: common_sign_forgot_password_description(),
                  }),
              ],
            }),
            /* @__PURE__ */ jsx(CardContent, {
              children:
                configsLoaded && !passwordResetEnabled
                  ? /* @__PURE__ */ jsxs(FieldGroup, {
                      children: [
                        /* @__PURE__ */ jsxs('div', {
                          className:
                            'rounded-lg border border-dashed p-6 text-center',
                          children: [
                            /* @__PURE__ */ jsx('p', {
                              className: 'text-sm font-medium',
                              children:
                                common_sign_password_reset_unavailable_title(),
                            }),
                            /* @__PURE__ */ jsx('p', {
                              className: 'text-muted-foreground mt-1 text-sm',
                              children:
                                common_sign_password_reset_unavailable_description(),
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsx(Field, {
                          children: /* @__PURE__ */ jsx(Link, {
                            href: '/sign-in',
                            className:
                              'text-center text-sm underline underline-offset-4',
                            children: common_sign_back_to_sign_in(),
                          }),
                        }),
                      ],
                    })
                  : sent
                    ? /* @__PURE__ */ jsxs(FieldGroup, {
                        children: [
                          /* @__PURE__ */ jsx('p', {
                            className:
                              'text-muted-foreground text-center text-sm',
                            children: common_sign_reset_link_sent_description({
                              email: sentEmail,
                            }),
                          }),
                          /* @__PURE__ */ jsx(Field, {
                            children: /* @__PURE__ */ jsx(Link, {
                              href: '/sign-in',
                              className:
                                'text-center text-sm underline underline-offset-4',
                              children: common_sign_back_to_sign_in(),
                            }),
                          }),
                        ],
                      })
                    : /* @__PURE__ */ jsx('form', {
                        onSubmit: (e) => {
                          e.preventDefault();
                          form.handleSubmit();
                        },
                        children: /* @__PURE__ */ jsxs(FieldGroup, {
                          children: [
                            error &&
                              /* @__PURE__ */ jsx('div', {
                                className:
                                  'bg-destructive/10 text-destructive rounded-lg p-3 text-sm',
                                children: error,
                              }),
                            /* @__PURE__ */ jsx(form.Field, {
                              name: 'email',
                              children: (field) =>
                                /* @__PURE__ */ jsx(TextField, {
                                  field,
                                  label: common_sign_email_title(),
                                  type: 'email',
                                  required: true,
                                  placeholder: common_sign_email_placeholder(),
                                }),
                            }),
                            /* @__PURE__ */ jsxs(Field, {
                              children: [
                                /* @__PURE__ */ jsx(form.Subscribe, {
                                  selector: (s) => s.isSubmitting,
                                  children: (isSubmitting) =>
                                    /* @__PURE__ */ jsx(Button, {
                                      type: 'submit',
                                      disabled: isSubmitting,
                                      children: isSubmitting
                                        ? '...'
                                        : common_sign_send_reset_link(),
                                    }),
                                }),
                                /* @__PURE__ */ jsx(FieldDescription, {
                                  className: 'text-center',
                                  children: /* @__PURE__ */ jsx(Link, {
                                    href: '/sign-in',
                                    className: 'underline underline-offset-4',
                                    children: common_sign_back_to_sign_in(),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
            }),
          ],
        }),
      ],
    }),
  });
}
//#endregion
export { ForgotPasswordPage as component };
