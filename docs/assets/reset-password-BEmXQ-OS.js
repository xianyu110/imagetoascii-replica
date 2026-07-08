import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

import { t as Button } from './button-RkClB0x2.js';
import {
  t as Card,
  n as CardContent,
  r as CardDescription,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import { i as resetPassword } from './client-CXZRF5YG.js';
import {
  t as Field,
  n as FieldDescription,
  r as FieldGroup,
} from './field-BZh9EFVs.js';
import { t as TextField } from './form-field-DX3nwIlh.js';
import {
  hl as common_sign_back_to_sign_in,
  ul as common_sign_confirm_new_password_placeholder,
  Pl as common_sign_confirm_password_title,
  bl as common_sign_forgot_password_title,
  dl as common_sign_new_password_placeholder,
  fl as common_sign_new_password_title,
  Ml as common_sign_password_mismatch,
  pl as common_sign_reset_password_description,
  sl as common_sign_reset_password_invalid_token,
  ol as common_sign_reset_password_missing_token,
  ll as common_sign_reset_password_submit,
  cl as common_sign_reset_password_success,
  ml as common_sign_reset_password_title,
} from './messages-DC2BhyRd.js';
import { t as Link, r as useRouter } from './navigation-Ca-dY7zl.js';
import { b as envConfigs } from './schema-DUwBz_C6.js';

//#region src/routes/(auth)/reset-password.tsx?tsr-split=component
var resetSchema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ['confirmPassword'],
    message: common_sign_password_mismatch(),
  });
function ResetPasswordPage() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [tokenChecked, setTokenChecked] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get('token');
    setToken(params.get('error') ? null : tokenParam);
    setTokenChecked(true);
  }, []);
  const form = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    validators: { onSubmit: resetSchema },
    onSubmit: async ({ value }) => {
      setError('');
      if (!token) {
        setError(common_sign_reset_password_missing_token());
        return;
      }
      try {
        const result = await resetPassword({
          newPassword: value.password,
          token,
        });
        if (result.error) setError(result.error.message || 'Reset failed');
        else {
          setSuccess(true);
          setTimeout(() => router.push('/sign-in'), 1500);
        }
      } catch (err) {
        setError(err.message || 'Reset failed');
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
          children: envConfigs.app_name,
        }),
        /* @__PURE__ */ jsxs(Card, {
          children: [
            /* @__PURE__ */ jsxs(CardHeader, {
              className: 'text-center',
              children: [
                /* @__PURE__ */ jsx(CardTitle, {
                  className: 'text-xl',
                  children: common_sign_reset_password_title(),
                }),
                !success &&
                  tokenChecked &&
                  token &&
                  /* @__PURE__ */ jsx(CardDescription, {
                    children: common_sign_reset_password_description(),
                  }),
              ],
            }),
            /* @__PURE__ */ jsx(CardContent, {
              children: !tokenChecked
                ? null
                : !token
                  ? /* @__PURE__ */ jsxs(FieldGroup, {
                      children: [
                        /* @__PURE__ */ jsx('div', {
                          className:
                            'bg-destructive/10 text-destructive rounded-lg p-3 text-center text-sm',
                          children: common_sign_reset_password_invalid_token(),
                        }),
                        /* @__PURE__ */ jsx(Field, {
                          children: /* @__PURE__ */ jsx(Link, {
                            href: '/forgot-password',
                            className:
                              'text-center text-sm underline underline-offset-4',
                            children: common_sign_forgot_password_title(),
                          }),
                        }),
                      ],
                    })
                  : success
                    ? /* @__PURE__ */ jsxs(FieldGroup, {
                        children: [
                          /* @__PURE__ */ jsx('p', {
                            className: 'text-center text-sm',
                            children: common_sign_reset_password_success(),
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
                              name: 'password',
                              children: (field) =>
                                /* @__PURE__ */ jsx(TextField, {
                                  field,
                                  label: common_sign_new_password_title(),
                                  type: 'password',
                                  required: true,
                                  placeholder:
                                    common_sign_new_password_placeholder(),
                                }),
                            }),
                            /* @__PURE__ */ jsx(form.Field, {
                              name: 'confirmPassword',
                              children: (field) =>
                                /* @__PURE__ */ jsx(TextField, {
                                  field,
                                  label: common_sign_confirm_password_title(),
                                  type: 'password',
                                  required: true,
                                  placeholder:
                                    common_sign_confirm_new_password_placeholder(),
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
                                        : common_sign_reset_password_submit(),
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
export { ResetPasswordPage as component };
