import { useEffect, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

import { a as localizeHref } from '../server.js';
import { a as apiPost } from './api-client-ddg0Kx1A.js';
import { t as Button } from './button-RkClB0x2.js';
import {
  t as Card,
  n as CardContent,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import {
  t as authClient,
  a as signIn,
  s as signUp,
  c as useSession,
} from './client-CXZRF5YG.js';
import {
  t as Field,
  n as FieldDescription,
  r as FieldGroup,
  a as FieldSeparator,
} from './field-BZh9EFVs.js';
import { t as TextField } from './form-field-DX3nwIlh.js';
import {
  Ol as common_sign_already_have_account,
  Nl as common_sign_confirm_password_placeholder,
  Pl as common_sign_confirm_password_title,
  Ll as common_sign_email_placeholder,
  Rl as common_sign_email_title,
  wl as common_sign_github_sign_in,
  Tl as common_sign_google_sign_in,
  Gc as common_sign_invite_code_invalid,
  qc as common_sign_invite_code_placeholder,
  Kc as common_sign_invite_code_required,
  Jc as common_sign_invite_code_title,
  Al as common_sign_name_placeholder,
  jl as common_sign_name_title,
  Sl as common_sign_no_methods_description,
  Cl as common_sign_no_methods_title,
  Dl as common_sign_or,
  Ml as common_sign_password_mismatch,
  Fl as common_sign_password_placeholder,
  Il as common_sign_password_title,
  Bl as common_sign_sign_in_title,
  zl as common_sign_sign_up_title,
} from './messages-DC2BhyRd.js';
import { t as Link, r as useRouter } from './navigation-Ca-dY7zl.js';
import { b as envConfigs } from './schema-DUwBz_C6.js';
import { t as usePublicConfig } from './use-public-config-CH8e7YtM.js';

//#region src/routes/(auth)/sign-up.tsx?tsr-split=component
var signUpSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(common_sign_email_placeholder()),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    inviteCode: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ['confirmPassword'],
    message: common_sign_password_mismatch(),
  });
function SignUpPage() {
  const router = useRouter();
  const { data: session, isPending: sessionPending } = useSession();
  const navigatingRef = useRef(false);
  const [error, setError] = useState('');
  const [redirectParam, setRedirectParam] = useState(null);
  const [callbackUrl, setCallbackUrl] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setRedirectParam(params.get('redirect'));
    setCallbackUrl(params.get('callbackUrl'));
  }, []);
  useEffect(() => {
    if (sessionPending || navigatingRef.current) return;
    if (session?.user) {
      navigatingRef.current = true;
      router.push('/');
    }
  }, [sessionPending, session?.user, router]);
  const safeCallbackUrl =
    callbackUrl &&
    callbackUrl.startsWith('/') &&
    !callbackUrl.startsWith('//') &&
    !/^\/(sign-in|sign-up|verify-email)(\/|\?|$)/.test(callbackUrl)
      ? callbackUrl
      : null;
  const afterLoginUrl = redirectParam
    ? `/auth-callback?redirect=${encodeURIComponent(redirectParam)}`
    : safeCallbackUrl || '/settings';
  const switchQuery = (() => {
    const p = new URLSearchParams();
    if (safeCallbackUrl) p.set('callbackUrl', safeCallbackUrl);
    if (redirectParam) p.set('redirect', redirectParam);
    const s = p.toString();
    return s ? `?${s}` : '';
  })();
  const configQuery = usePublicConfig();
  const configs = configQuery.data ?? {};
  const configsLoaded = configQuery.isSuccess;
  const emailEnabled = configs.email_auth_enabled !== 'false';
  const googleEnabled = configs.google_auth_enabled === 'true';
  const githubEnabled = configs.github_auth_enabled === 'true';
  const emailVerificationEnabled =
    configs.email_verification_enabled === 'true';
  const inviteCodeRequired = configs.invite_code_required === 'true';
  const hasSocial = googleEnabled || githubEnabled;
  const hasAnyMethod = emailEnabled || hasSocial;
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      inviteCode: '',
    },
    validators: { onSubmit: signUpSchema },
    onSubmit: async ({ value }) => {
      setError('');
      const trimmedInvite = value.inviteCode.trim();
      if (inviteCodeRequired && !trimmedInvite) {
        setError(common_sign_invite_code_required());
        return;
      }
      try {
        if (inviteCodeRequired)
          try {
            await apiPost('/api/invite-codes/validate', {
              code: trimmedInvite,
            });
          } catch (err) {
            setError(err?.message || common_sign_invite_code_invalid());
            return;
          }
        const result = await signUp.email({
          name: value.name,
          email: value.email,
          password: value.password,
        });
        if (result.error) {
          setError(result.error.message || 'Sign up failed');
          return;
        }
        if (inviteCodeRequired && trimmedInvite)
          try {
            await apiPost('/api/invite-codes/redeem', { code: trimmedInvite });
          } catch {}
        if (emailVerificationEnabled) {
          const verifyPath = `/verify-email?sent=1&email=${encodeURIComponent(value.email)}&callbackUrl=${encodeURIComponent(afterLoginUrl)}`;
          authClient.sendVerificationEmail({
            email: value.email,
            callbackURL: localizeHref(afterLoginUrl),
          });
          router.push(verifyPath);
        } else {
          navigatingRef.current = true;
          window.location.assign(localizeHref(afterLoginUrl));
        }
      } catch (err) {
        setError(err.message || 'Sign up failed');
      }
    },
  });
  async function handleSocial(provider) {
    await signIn.social({
      provider,
      callbackURL: afterLoginUrl,
    });
  }
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
            /* @__PURE__ */ jsx(CardHeader, {
              className: 'text-center',
              children: /* @__PURE__ */ jsx(CardTitle, {
                className: 'text-xl',
                children: common_sign_sign_up_title(),
              }),
            }),
            /* @__PURE__ */ jsx(CardContent, {
              children:
                configsLoaded && !hasAnyMethod
                  ? /* @__PURE__ */ jsxs('div', {
                      className:
                        'rounded-lg border border-dashed p-6 text-center',
                      children: [
                        /* @__PURE__ */ jsx('p', {
                          className: 'text-sm font-medium',
                          children: common_sign_no_methods_title(),
                        }),
                        /* @__PURE__ */ jsx('p', {
                          className: 'text-muted-foreground mt-1 text-sm',
                          children: common_sign_no_methods_description(),
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
                          hasSocial &&
                            /* @__PURE__ */ jsxs(Field, {
                              children: [
                                googleEnabled &&
                                  /* @__PURE__ */ jsxs(Button, {
                                    variant: 'outline',
                                    type: 'button',
                                    onClick: () => handleSocial('google'),
                                    children: [
                                      /* @__PURE__ */ jsx('svg', {
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        viewBox: '0 0 24 24',
                                        className: 'size-4',
                                        children: /* @__PURE__ */ jsx('path', {
                                          d: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
                                          fill: 'currentColor',
                                        }),
                                      }),
                                      common_sign_google_sign_in(),
                                    ],
                                  }),
                                githubEnabled &&
                                  /* @__PURE__ */ jsxs(Button, {
                                    variant: 'outline',
                                    type: 'button',
                                    onClick: () => handleSocial('github'),
                                    children: [
                                      /* @__PURE__ */ jsx('svg', {
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        viewBox: '0 0 24 24',
                                        className: 'size-4',
                                        children: /* @__PURE__ */ jsx('path', {
                                          d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
                                          fill: 'currentColor',
                                        }),
                                      }),
                                      common_sign_github_sign_in(),
                                    ],
                                  }),
                              ],
                            }),
                          hasSocial &&
                            emailEnabled &&
                            /* @__PURE__ */ jsx(FieldSeparator, {
                              className:
                                '*:data-[slot=field-separator-content]:bg-card',
                              children: common_sign_or(),
                            }),
                          emailEnabled &&
                            /* @__PURE__ */ jsxs(Fragment, {
                              children: [
                                /* @__PURE__ */ jsx(form.Field, {
                                  name: 'name',
                                  children: (field) =>
                                    /* @__PURE__ */ jsx(TextField, {
                                      field,
                                      label: common_sign_name_title(),
                                      type: 'text',
                                      required: true,
                                      placeholder:
                                        common_sign_name_placeholder(),
                                    }),
                                }),
                                /* @__PURE__ */ jsx(form.Field, {
                                  name: 'email',
                                  children: (field) =>
                                    /* @__PURE__ */ jsx(TextField, {
                                      field,
                                      label: common_sign_email_title(),
                                      type: 'email',
                                      required: true,
                                      placeholder:
                                        common_sign_email_placeholder(),
                                    }),
                                }),
                                /* @__PURE__ */ jsx(form.Field, {
                                  name: 'password',
                                  children: (field) =>
                                    /* @__PURE__ */ jsx(TextField, {
                                      field,
                                      label: common_sign_password_title(),
                                      type: 'password',
                                      required: true,
                                      placeholder:
                                        common_sign_password_placeholder(),
                                    }),
                                }),
                                /* @__PURE__ */ jsx(form.Field, {
                                  name: 'confirmPassword',
                                  children: (field) =>
                                    /* @__PURE__ */ jsx(TextField, {
                                      field,
                                      label:
                                        common_sign_confirm_password_title(),
                                      type: 'password',
                                      required: true,
                                      placeholder:
                                        common_sign_confirm_password_placeholder(),
                                    }),
                                }),
                                inviteCodeRequired &&
                                  /* @__PURE__ */ jsx(form.Field, {
                                    name: 'inviteCode',
                                    children: (field) =>
                                      /* @__PURE__ */ jsx(TextField, {
                                        field,
                                        label: common_sign_invite_code_title(),
                                        type: 'text',
                                        required: true,
                                        placeholder:
                                          common_sign_invite_code_placeholder(),
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
                                            : common_sign_sign_up_title(),
                                        }),
                                    }),
                                    /* @__PURE__ */ jsxs(FieldDescription, {
                                      className: 'text-center',
                                      children: [
                                        common_sign_already_have_account(),
                                        ' ',
                                        /* @__PURE__ */ jsx(Link, {
                                          href: `/sign-in${switchQuery}`,
                                          className:
                                            'underline underline-offset-4',
                                          children: common_sign_sign_in_title(),
                                        }),
                                      ],
                                    }),
                                  ],
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
export { SignUpPage as component };
