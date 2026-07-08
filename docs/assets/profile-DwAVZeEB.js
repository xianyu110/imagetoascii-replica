import { useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useForm } from '@tanstack/react-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { z } from 'zod';

import { r as apiGet, i as apiPatch } from './api-client-ddg0Kx1A.js';
import { t as Button } from './button-RkClB0x2.js';
import {
  t as Card,
  n as CardContent,
  i as CardFooter,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import { t as TextField } from './form-field-DX3nwIlh.js';
import { t as ImageUploader } from './image-uploader-BSMgxL3y.js';
import { t as Input } from './input-B6v4Jp25.js';
import { t as Label } from './label-Dzpc0zKw.js';
import {
  Ps as settings_profile_avatar,
  Ns as settings_profile_avatar_hint,
  Rs as settings_profile_description,
  Fs as settings_profile_email,
  Os as settings_profile_loading,
  Is as settings_profile_name,
  Ls as settings_profile_profile,
  Ms as settings_profile_save,
  ks as settings_profile_save_failed,
  As as settings_profile_saved,
  js as settings_profile_saving,
  zs as settings_profile_title,
} from './messages-DC2BhyRd.js';

//#region src/routes/settings/-settings-form.tsx
var profileSchema = z.object({ name: z.string().min(1) });
function SettingsForm({ name: initialName, email, image: initialImage }) {
  const [image, setImage] = useState(initialImage);
  const queryClient = useQueryClient();
  const saveMutation = useMutation({
    mutationFn: (values) => apiPatch('/api/user/profile', values),
    onSuccess: () => {
      toast.success(settings_profile_saved());
      queryClient.invalidateQueries({ queryKey: ['user-info'] });
    },
    onError: (err) => {
      toast.error(err?.message || settings_profile_save_failed());
    },
  });
  const form = useForm({
    defaultValues: { name: initialName },
    validators: { onSubmit: profileSchema },
    onSubmit: async ({ value }) => {
      await saveMutation
        .mutateAsync({
          name: value.name,
          image,
        })
        .catch(() => {});
    },
  });
  function handleAvatarChange(items) {
    setImage(
      items.find((item) => item.status === 'uploaded' && item.url)?.url || ''
    );
  }
  return /* @__PURE__ */ jsxs('form', {
    onSubmit: (e) => {
      e.preventDefault();
      form.handleSubmit();
    },
    className: 'space-y-6 p-6',
    children: [
      /* @__PURE__ */ jsxs('div', {
        children: [
          /* @__PURE__ */ jsx('h1', {
            className: 'text-2xl font-bold',
            children: settings_profile_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: settings_profile_description(),
          }),
        ],
      }),
      /* @__PURE__ */ jsxs(Card, {
        children: [
          /* @__PURE__ */ jsx(CardHeader, {
            children: /* @__PURE__ */ jsx(CardTitle, {
              children: settings_profile_profile(),
            }),
          }),
          /* @__PURE__ */ jsxs(CardContent, {
            className: 'space-y-6 pb-2',
            children: [
              /* @__PURE__ */ jsxs('div', {
                className: 'space-y-2',
                children: [
                  /* @__PURE__ */ jsx(Label, {
                    children: settings_profile_avatar(),
                  }),
                  /* @__PURE__ */ jsx(ImageUploader, {
                    defaultPreviews: image ? [image] : [],
                    onChange: handleAvatarChange,
                    maxSizeMB: 2,
                    emptyHint: settings_profile_avatar_hint(),
                  }),
                ],
              }),
              /* @__PURE__ */ jsx('div', {
                className: 'space-y-2',
                children: /* @__PURE__ */ jsx(form.Field, {
                  name: 'name',
                  children: (field) =>
                    /* @__PURE__ */ jsx(TextField, {
                      field,
                      label: settings_profile_name(),
                      required: true,
                    }),
                }),
              }),
              /* @__PURE__ */ jsxs('div', {
                className: 'space-y-2',
                children: [
                  /* @__PURE__ */ jsx(Label, {
                    htmlFor: 'email',
                    children: settings_profile_email(),
                  }),
                  /* @__PURE__ */ jsx(Input, {
                    id: 'email',
                    value: email,
                    disabled: true,
                    className: 'opacity-60',
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsx(CardFooter, {
            children: /* @__PURE__ */ jsx(form.Subscribe, {
              selector: (s) => s.isSubmitting,
              children: (isSubmitting) =>
                /* @__PURE__ */ jsx(Button, {
                  type: 'submit',
                  disabled: isSubmitting || saveMutation.isPending,
                  children:
                    isSubmitting || saveMutation.isPending
                      ? settings_profile_saving()
                      : settings_profile_save(),
                }),
            }),
          }),
        ],
      }),
    ],
  });
}
//#endregion
//#region src/routes/settings/profile.tsx?tsr-split=component
function SettingsPage() {
  const { data: user } = useQuery({
    queryKey: ['user-info'],
    queryFn: async () => {
      const data = await apiGet('/api/user/info');
      return {
        name: data.name || '',
        email: data.email || '',
        image: data.image || '',
      };
    },
  });
  if (!user)
    return /* @__PURE__ */ jsx('div', {
      className: 'text-muted-foreground p-6',
      children: settings_profile_loading(),
    });
  return /* @__PURE__ */ jsx(SettingsForm, {
    name: user.name,
    email: user.email,
    image: user.image,
  });
}
//#endregion
export { SettingsPage as component };
