import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

import { a as localizeHref } from '../server.js';
import { t as Button } from './button-RkClB0x2.js';
import {
  t as Card,
  n as CardContent,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import { o as signOut, c as useSession } from './client-CXZRF5YG.js';
import {
  t as Field,
  n as FieldDescription,
  r as FieldGroup,
  i as FieldLabel,
} from './field-BZh9EFVs.js';
import { t as Input } from './input-B6v4Jp25.js';
import {
  Gc as common_sign_invite_code_invalid,
  qc as common_sign_invite_code_placeholder,
  Kc as common_sign_invite_code_required,
  Jc as common_sign_invite_code_title,
  Uc as common_sign_redeem_description,
  Hc as common_sign_redeem_submit,
  Wc as common_sign_redeem_title,
  El as common_sign_sign_out_title,
} from './messages-DC2BhyRd.js';
import { r as useRouter } from './navigation-Ca-dY7zl.js';
import { b as envConfigs } from './schema-DUwBz_C6.js';

//#region src/routes/(auth)/redeem-invite.tsx?tsr-split=component
function RedeemInvitePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    if (isPending) return;
    if (!session?.user) {
      router.push('/sign-in');
      return;
    }
    let cancelled = false;
    fetch('/api/user/info')
      .then((r) => r.json())
      .then((res) => {
        if (cancelled) return;
        if (res.code === 0 && !res.data?.needsInvite) router.push('/settings');
        else setChecking(false);
      })
      .catch(() => !cancelled && setChecking(false));
    return () => {
      cancelled = true;
    };
  }, [isPending, session, router]);
  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const trimmed = code.trim();
    if (!trimmed) {
      setError(common_sign_invite_code_required());
      return;
    }
    setLoading(true);
    try {
      const validate = await fetch('/api/invite-codes/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: trimmed }),
      }).then((r) => r.json());
      if (validate.code !== 0) {
        setError(validate.message || common_sign_invite_code_invalid());
        setLoading(false);
        return;
      }
      const redeem = await fetch('/api/invite-codes/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: trimmed }),
      }).then((r) => r.json());
      if (redeem.code !== 0) {
        setError(redeem.message || common_sign_invite_code_invalid());
        setLoading(false);
        return;
      }
      window.location.assign(localizeHref('/settings'));
    } catch (err) {
      setError(err?.message || common_sign_invite_code_invalid());
      setLoading(false);
    }
  }
  async function handleSignOut() {
    await signOut();
    router.push('/sign-in');
  }
  if (isPending || checking)
    return /* @__PURE__ */ jsx('div', {
      className: 'bg-muted flex min-h-svh items-center justify-center',
      children: /* @__PURE__ */ jsx('div', {
        className:
          'border-primary size-6 animate-spin rounded-full border-2 border-t-transparent',
      }),
    });
  return /* @__PURE__ */ jsx('div', {
    className:
      'bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'flex w-full max-w-sm flex-col gap-6',
      children: [
        /* @__PURE__ */ jsx('span', {
          className: 'self-center font-serif text-lg italic',
          children: envConfigs.app_name,
        }),
        /* @__PURE__ */ jsxs(Card, {
          children: [
            /* @__PURE__ */ jsx(CardHeader, {
              className: 'text-center',
              children: /* @__PURE__ */ jsx(CardTitle, {
                className: 'text-xl',
                children: common_sign_redeem_title(),
              }),
            }),
            /* @__PURE__ */ jsx(CardContent, {
              children: /* @__PURE__ */ jsx('form', {
                onSubmit: handleSubmit,
                children: /* @__PURE__ */ jsxs(FieldGroup, {
                  children: [
                    error &&
                      /* @__PURE__ */ jsx('div', {
                        className:
                          'bg-destructive/10 text-destructive rounded-lg p-3 text-sm',
                        children: error,
                      }),
                    /* @__PURE__ */ jsx('p', {
                      className: 'text-muted-foreground text-sm',
                      children: common_sign_redeem_description(),
                    }),
                    /* @__PURE__ */ jsxs(Field, {
                      children: [
                        /* @__PURE__ */ jsx(FieldLabel, {
                          htmlFor: 'invite-code',
                          children: common_sign_invite_code_title(),
                        }),
                        /* @__PURE__ */ jsx(Input, {
                          id: 'invite-code',
                          value: code,
                          onChange: (e) => setCode(e.target.value),
                          placeholder: common_sign_invite_code_placeholder(),
                          required: true,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs(Field, {
                      children: [
                        /* @__PURE__ */ jsx(Button, {
                          type: 'submit',
                          disabled: loading,
                          children: loading
                            ? '...'
                            : common_sign_redeem_submit(),
                        }),
                        /* @__PURE__ */ jsx(FieldDescription, {
                          className: 'text-center',
                          children: /* @__PURE__ */ jsx('button', {
                            type: 'button',
                            onClick: handleSignOut,
                            className: 'underline underline-offset-4',
                            children: common_sign_sign_out_title(),
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
export { RedeemInvitePage as component };
