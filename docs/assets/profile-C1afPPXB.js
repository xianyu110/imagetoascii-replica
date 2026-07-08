import { t as T } from './button-bN-wY-Ql.js';
import { i as A, n as j, a as k, o as M, t as N } from './card-DUh0Lb3Z.js';
import { t as O } from './form-field-kfwg5atP.js';
import { t as i } from './image-uploader-CfAwIJNu.js';
import {
  a as _,
  Bs as a,
  i as b,
  Hs as c,
  zs as C,
  Ls as d,
  Rs as f,
  Xl as g,
  Ws as h,
  Is as l,
  Vs as m,
  Fs as o,
  Us as p,
  Gs as s,
  tu as S,
  Ks as u,
  eu as v,
  mu as x,
  hu as y,
} from './index-D7NQvf2G.js';
import { t as D } from './input-BzjUrduj.js';
import { t as E } from './label-BC74pi7G.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import { t as w } from './useForm--zzFMcDE.js';
import { t as r } from './useMutation-PUxP0Jqz.js';

var P = t(n(), 1),
  F = e(),
  I = b({ name: _().min(1) });
function L({ name: e, email: t, image: n }) {
  let [o, _] = (0, P.useState)(n),
    v = y(),
    b = r({
      mutationFn: (e) => S(`/api/user/profile`, e),
      onSuccess: () => {
        (g.success(d()), v.invalidateQueries({ queryKey: [`user-info`] }));
      },
      onError: (e) => {
        g.error(e?.message || l());
      },
    }),
    x = w({
      defaultValues: { name: e },
      validators: { onSubmit: I },
      onSubmit: async ({ value: e }) => {
        await b.mutateAsync({ name: e.name, image: o }).catch(() => {});
      },
    });
  function L(e) {
    _(e.find((e) => e.status === `uploaded` && e.url)?.url || ``);
  }
  return (0, F.jsxs)(`form`, {
    onSubmit: (e) => {
      (e.preventDefault(), x.handleSubmit());
    },
    className: `space-y-6 p-6`,
    children: [
      (0, F.jsxs)(`div`, {
        children: [
          (0, F.jsx)(`h1`, { className: `text-2xl font-bold`, children: u() }),
          (0, F.jsx)(`p`, {
            className: `text-muted-foreground`,
            children: s(),
          }),
        ],
      }),
      (0, F.jsxs)(N, {
        children: [
          (0, F.jsx)(k, { children: (0, F.jsx)(M, { children: h() }) }),
          (0, F.jsxs)(j, {
            className: `space-y-6 pb-2`,
            children: [
              (0, F.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, F.jsx)(E, { children: m() }),
                  (0, F.jsx)(i, {
                    defaultPreviews: o ? [o] : [],
                    onChange: L,
                    maxSizeMB: 2,
                    emptyHint: a(),
                  }),
                ],
              }),
              (0, F.jsx)(`div`, {
                className: `space-y-2`,
                children: (0, F.jsx)(x.Field, {
                  name: `name`,
                  children: (e) =>
                    (0, F.jsx)(O, { field: e, label: p(), required: !0 }),
                }),
              }),
              (0, F.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, F.jsx)(E, { htmlFor: `email`, children: c() }),
                  (0, F.jsx)(D, {
                    id: `email`,
                    value: t,
                    disabled: !0,
                    className: `opacity-60`,
                  }),
                ],
              }),
            ],
          }),
          (0, F.jsx)(A, {
            children: (0, F.jsx)(x.Subscribe, {
              selector: (e) => e.isSubmitting,
              children: (e) =>
                (0, F.jsx)(T, {
                  type: `submit`,
                  disabled: e || b.isPending,
                  children: e || b.isPending ? f() : C(),
                }),
            }),
          }),
        ],
      }),
    ],
  });
}
function R() {
  let { data: e } = x({
    queryKey: [`user-info`],
    queryFn: async () => {
      let e = await v(`/api/user/info`);
      return { name: e.name || ``, email: e.email || ``, image: e.image || `` };
    },
  });
  return e
    ? (0, F.jsx)(L, { name: e.name, email: e.email, image: e.image })
    : (0, F.jsx)(`div`, {
        className: `text-muted-foreground p-6`,
        children: o(),
      });
}
export { R as component };
