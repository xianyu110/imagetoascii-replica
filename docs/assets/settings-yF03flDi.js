import { useEffect, useMemo, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Switch } from '@base-ui/react/switch';
import {
  CheckCircle2,
  ChevronDown,
  FlaskConical,
  Loader2,
  Minus,
  Plus,
  Save,
  XCircle,
} from 'lucide-react';
import { toast } from 'sonner';

import { r as apiGet, a as apiPost } from './api-client-ddg0Kx1A.js';
import { t as Button } from './button-RkClB0x2.js';
import {
  t as Card,
  n as CardContent,
  a as CardHeader,
  o as CardTitle,
} from './card-CJS2GQq6.js';
import {
  t as Dialog,
  n as DialogContent,
  r as DialogDescription,
  i as DialogFooter,
  a as DialogHeader,
  o as DialogTitle,
} from './dialog-D6wavpEs.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import { t as Input } from './input-B6v4Jp25.js';
import { t as Label } from './label-Dzpc0zKw.js';
import {
  Oa as admin_loading,
  et as admin_settings_custom_add,
  it as admin_settings_custom_description,
  rt as admin_settings_custom_empty,
  nt as admin_settings_custom_key_placeholder,
  $ as admin_settings_custom_remove,
  at as admin_settings_custom_title,
  tt as admin_settings_custom_value_placeholder,
  _t as admin_settings_description,
  X as admin_settings_placeholders_alipay_test_amount,
  Q as admin_settings_placeholders_creem_test_amount,
  Z as admin_settings_placeholders_paypal_test_amount,
  Y as admin_settings_placeholders_wechat_test_amount,
  gt as admin_settings_save,
  pt as admin_settings_save_error,
  mt as admin_settings_save_success,
  ht as admin_settings_saving,
  ft as admin_settings_test_button,
  st as admin_settings_test_close,
  ut as admin_settings_test_description,
  ot as admin_settings_test_error,
  lt as admin_settings_test_run,
  ct as admin_settings_test_running,
  dt as admin_settings_test_title,
  vt as admin_settings_title,
} from './messages-DC2BhyRd.js';
import {
  t as Select,
  n as SelectContent,
  r as SelectItem,
  i as SelectTrigger,
  a as SelectValue,
} from './select-C0G4MHuP.js';
import {
  d as getSettingGroups,
  p as getSettings,
  f as getSettingTabs,
} from './service-DtfYmNeb.js';
import { t as getTestSpec } from './settings-test-specs-BLIXgWgx.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/components/admin/settings-test-dialog.tsx
function SettingsTestDialog({
  open,
  onOpenChange,
  group,
  spec,
  groupTitle,
  configOverrides,
}) {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const testMutation = useMutation({
    mutationFn: () =>
      apiPost('/api/admin/settings/test', {
        group,
        inputs,
        configs: configOverrides ?? {},
      }),
    onSuccess: (data) => {
      setResult(data);
    },
    onError: (err) => {
      setResult({
        success: false,
        message: err?.message || admin_settings_test_error(),
      });
    },
  });
  const running = testMutation.isPending;
  useEffect(() => {
    if (!open) return;
    const initial = {};
    for (const f of spec.fields)
      if (f.defaultValue) initial[f.name] = f.defaultValue;
    setInputs(initial);
    setResult(null);
    testMutation.reset();
  }, [open, group, spec]);
  const canRun = useMemo(
    () => spec.fields.every((f) => !f.required || !!inputs[f.name]?.trim()),
    [spec.fields, inputs]
  );
  function handleRun() {
    setResult(null);
    testMutation.mutate();
  }
  return /* @__PURE__ */ jsx(Dialog, {
    open,
    onOpenChange,
    children: /* @__PURE__ */ jsxs(DialogContent, {
      className: 'sm:max-w-lg',
      children: [
        /* @__PURE__ */ jsxs(DialogHeader, {
          children: [
            /* @__PURE__ */ jsx(DialogTitle, {
              children: admin_settings_test_title({ group: groupTitle }),
            }),
            /* @__PURE__ */ jsx(DialogDescription, {
              children: admin_settings_test_description(),
            }),
          ],
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'space-y-3',
          children: spec.fields.map((field) =>
            /* @__PURE__ */ jsx(
              TestInput,
              {
                field,
                value: inputs[field.name] ?? '',
                onChange: (v) =>
                  setInputs((prev) => ({
                    ...prev,
                    [field.name]: v,
                  })),
              },
              field.name
            )
          ),
        }),
        result && /* @__PURE__ */ jsx(TestResultView, { result }),
        /* @__PURE__ */ jsxs(DialogFooter, {
          children: [
            /* @__PURE__ */ jsx(Button, {
              variant: 'outline',
              onClick: () => onOpenChange(false),
              disabled: running,
              children: admin_settings_test_close(),
            }),
            /* @__PURE__ */ jsxs(Button, {
              onClick: handleRun,
              disabled: running || !canRun,
              children: [
                running &&
                  /* @__PURE__ */ jsx(Loader2, {
                    className: 'size-4 animate-spin',
                  }),
                running
                  ? admin_settings_test_running()
                  : admin_settings_test_run(),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function TestInput({ field, value, onChange }) {
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-2',
    children: [
      /* @__PURE__ */ jsxs(Label, {
        htmlFor: field.name,
        children: [
          field.label,
          field.required &&
            /* @__PURE__ */ jsx('span', {
              className: 'text-destructive ml-1',
              children: '*',
            }),
        ],
      }),
      field.type === 'textarea'
        ? /* @__PURE__ */ jsx('textarea', {
            id: field.name,
            value,
            onChange: (e) => onChange(e.target.value),
            placeholder: field.placeholder,
            rows: 3,
            className:
              'border-input placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:ring-1 focus-visible:outline-none',
          })
        : /* @__PURE__ */ jsx(Input, {
            id: field.name,
            type:
              field.type === 'number'
                ? 'number'
                : field.type === 'email'
                  ? 'email'
                  : 'text',
            value,
            onChange: (e) => onChange(e.target.value),
            placeholder: field.placeholder,
          }),
    ],
  });
}
function TestResultView({ result }) {
  return /* @__PURE__ */ jsxs('div', {
    className: `rounded-lg border p-3 text-sm ${result.success ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-destructive/30 bg-destructive/5'}`,
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'flex items-start gap-2 font-medium',
        children: [
          result.success
            ? /* @__PURE__ */ jsx(CheckCircle2, {
                className: 'mt-0.5 size-4 shrink-0 text-emerald-600',
              })
            : /* @__PURE__ */ jsx(XCircle, {
                className: 'text-destructive mt-0.5 size-4 shrink-0',
              }),
          /* @__PURE__ */ jsx('span', {
            className: result.success ? '' : 'text-destructive',
            children: result.message,
          }),
        ],
      }),
      result.details &&
        Object.keys(result.details).length > 0 &&
        /* @__PURE__ */ jsx('dl', {
          className: 'mt-3 space-y-1.5 text-xs',
          children: Object.entries(result.details).map(([k, v]) =>
            /* @__PURE__ */ jsxs(
              'div',
              {
                className: 'grid grid-cols-[auto_1fr] gap-2',
                children: [
                  /* @__PURE__ */ jsxs('dt', {
                    className: 'text-muted-foreground whitespace-nowrap',
                    children: [k, ':'],
                  }),
                  /* @__PURE__ */ jsx('dd', {
                    className: 'break-all',
                    children: v?.startsWith('http')
                      ? /* @__PURE__ */ jsx('a', {
                          href: v,
                          target: '_blank',
                          rel: 'noreferrer',
                          className:
                            'text-primary underline underline-offset-2',
                          children: v,
                        })
                      : /* @__PURE__ */ jsx('span', {
                          className: 'font-mono',
                          children: v,
                        }),
                  }),
                ],
              },
              k
            )
          ),
        }),
    ],
  });
}
//#endregion
//#region src/components/ui/switch.tsx
function Switch$1({ className, size = 'default', ...props }) {
  return /* @__PURE__ */ jsx(Switch.Root, {
    'data-slot': 'switch',
    'data-size': size,
    className: cn(
      'peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50',
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(Switch.Thumb, {
      'data-slot': 'switch-thumb',
      className:
        'pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground',
    }),
  });
}
//#endregion
//#region src/routes/admin/settings.tsx?tsr-split=component
function AdminSettingsPage() {
  const placeholders = {
    creem_test_amount: admin_settings_placeholders_creem_test_amount(),
    paypal_test_amount: admin_settings_placeholders_paypal_test_amount(),
    alipay_test_amount: admin_settings_placeholders_alipay_test_amount(),
    wechat_test_amount: admin_settings_placeholders_wechat_test_amount(),
  };
  const queryClient = useQueryClient();
  const [configs, setConfigs] = useState({});
  const [activeTab, setActiveTab] = useState('general');
  const [collapsed, setCollapsed] = useState(/* @__PURE__ */ new Set());
  const [testingGroup, setTestingGroup] = useState(null);
  const [customRows, setCustomRows] = useState([]);
  function toggleCollapse(name) {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }
  const tabs = getSettingTabs();
  const groups = getSettingGroups();
  const settings = getSettings();
  const { data: loadedConfigs, isLoading } = useQuery({
    queryKey: ['admin-config'],
    queryFn: () => apiGet('/api/admin/config'),
  });
  useEffect(() => {
    if (loadedConfigs) setConfigs(loadedConfigs);
  }, [loadedConfigs]);
  const { data: loadedCustom } = useQuery({
    queryKey: ['admin-config-custom'],
    queryFn: () => apiGet('/api/admin/config/custom'),
  });
  useEffect(() => {
    if (loadedCustom) setCustomRows(loadedCustom);
  }, [loadedCustom]);
  function handleChange(name, value) {
    setConfigs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function addCustomRow() {
    setCustomRows((prev) => [
      ...prev,
      {
        key: '',
        value: '',
      },
    ]);
  }
  function removeCustomRow(index) {
    setCustomRows((prev) => prev.filter((_, i) => i !== index));
  }
  function updateCustomRow(index, field, value) {
    setCustomRows((prev) =>
      prev.map((row, i) =>
        i === index
          ? {
              ...row,
              [field]: value,
            }
          : row
      )
    );
  }
  const saveMutation = useMutation({
    mutationFn: (toSave) => apiPost('/api/admin/config', toSave),
    onSuccess: () => {
      toast.success(admin_settings_save_success());
      queryClient.invalidateQueries({ queryKey: ['admin-config'] });
      queryClient.invalidateQueries({ queryKey: ['public-config'] });
    },
    onError: (err) => {
      toast.error(err?.message || admin_settings_save_error());
    },
  });
  const customSaveMutation = useMutation({
    mutationFn: (rows) =>
      apiPost('/api/admin/config/custom', { configs: rows }),
    onSuccess: () => {
      toast.success(admin_settings_save_success());
      queryClient.invalidateQueries({ queryKey: ['admin-config-custom'] });
      queryClient.invalidateQueries({ queryKey: ['public-config'] });
    },
    onError: (err) => {
      toast.error(err?.message || admin_settings_save_error());
    },
  });
  const saving = saveMutation.isPending || customSaveMutation.isPending;
  function handleSave() {
    if (activeTab === 'custom') {
      const rows = customRows
        .map((r) => ({
          key: r.key.trim(),
          value: r.value,
        }))
        .filter((r) => r.key);
      customSaveMutation.mutate(rows);
      return;
    }
    const tabSettings = settings.filter((s) => s.tab === activeTab);
    const toSave = {};
    for (const s of tabSettings)
      if (configs[s.name] !== void 0) toSave[s.name] = configs[s.name];
    saveMutation.mutate(toSave);
  }
  const tabGroups = groups.filter((g) => g.tab === activeTab);
  const tabSettings = settings.filter((s) => s.tab === activeTab);
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-6 p-6 md:max-w-3xl',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'flex items-center justify-between',
        children: [
          /* @__PURE__ */ jsxs('div', {
            children: [
              /* @__PURE__ */ jsx('h1', {
                className: 'text-2xl font-bold',
                children: admin_settings_title(),
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'text-muted-foreground',
                children: admin_settings_description(),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Button, {
            onClick: handleSave,
            disabled: saving,
            className: 'gap-2',
            children: [
              /* @__PURE__ */ jsx(Save, { className: 'size-4' }),
              saving ? admin_settings_saving() : admin_settings_save(),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx('div', {
        className:
          'border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b',
        children: tabs.map((tab) =>
          /* @__PURE__ */ jsx(
            'button',
            {
              onClick: () => setActiveTab(tab.name),
              className: cn(
                '-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors',
                activeTab === tab.name
                  ? 'border-primary text-foreground'
                  : 'text-muted-foreground hover:text-foreground border-transparent'
              ),
              children: tDynamic(`admin.settings.tabs.${tab.name}`),
            },
            tab.name
          )
        ),
      }),
      isLoading
        ? /* @__PURE__ */ jsx('div', {
            className: 'text-muted-foreground',
            children: admin_loading(),
          })
        : activeTab === 'custom'
          ? /* @__PURE__ */ jsxs(Card, {
              children: [
                /* @__PURE__ */ jsxs(CardHeader, {
                  children: [
                    /* @__PURE__ */ jsx(CardTitle, {
                      children: admin_settings_custom_title(),
                    }),
                    /* @__PURE__ */ jsx('p', {
                      className: 'text-muted-foreground text-sm',
                      children: admin_settings_custom_description(),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs(CardContent, {
                  className: 'space-y-4',
                  children: [
                    customRows.length === 0 &&
                      /* @__PURE__ */ jsx('p', {
                        className: 'text-muted-foreground text-sm',
                        children: admin_settings_custom_empty(),
                      }),
                    customRows.map((row, i) =>
                      /* @__PURE__ */ jsxs(
                        'div',
                        {
                          className: 'flex items-start gap-2',
                          children: [
                            /* @__PURE__ */ jsx(Input, {
                              value: row.key,
                              onChange: (e) =>
                                updateCustomRow(i, 'key', e.target.value),
                              placeholder:
                                admin_settings_custom_key_placeholder(),
                              className: 'w-1/3 shrink-0 font-mono',
                            }),
                            /* @__PURE__ */ jsx('textarea', {
                              value: row.value,
                              onChange: (e) =>
                                updateCustomRow(i, 'value', e.target.value),
                              placeholder:
                                admin_settings_custom_value_placeholder(),
                              rows: 1,
                              className:
                                'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex h-8 max-h-48 min-h-8 flex-1 resize-y rounded-lg border bg-transparent px-2.5 py-1 text-base leading-6 transition-colors outline-none focus-visible:ring-3 md:text-sm',
                            }),
                            /* @__PURE__ */ jsx(Button, {
                              variant: 'outline',
                              size: 'icon',
                              className: 'shrink-0',
                              onClick: () => removeCustomRow(i),
                              'aria-label': admin_settings_custom_remove(),
                              children: /* @__PURE__ */ jsx(Minus, {
                                className: 'size-4',
                              }),
                            }),
                          ],
                        },
                        i
                      )
                    ),
                    /* @__PURE__ */ jsxs(Button, {
                      variant: 'outline',
                      onClick: addCustomRow,
                      className: 'gap-1.5',
                      children: [
                        /* @__PURE__ */ jsx(Plus, { className: 'size-4' }),
                        admin_settings_custom_add(),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : tabGroups.map((group) => {
              const groupSettings = tabSettings.filter(
                (s) => s.group === group.name
              );
              if (groupSettings.length === 0) return null;
              const testSpec = getTestSpec(group.name);
              return /* @__PURE__ */ jsxs(
                Card,
                {
                  children: [
                    /* @__PURE__ */ jsx(CardHeader, {
                      className: 'cursor-pointer select-none',
                      onClick: () => toggleCollapse(group.name),
                      children: /* @__PURE__ */ jsxs('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          /* @__PURE__ */ jsx(CardTitle, {
                            children: tDynamic(
                              `admin.settings.groups.${group.name}.title`
                            ),
                          }),
                          /* @__PURE__ */ jsxs('div', {
                            className: 'flex items-center gap-2',
                            children: [
                              testSpec &&
                                /* @__PURE__ */ jsxs(Button, {
                                  variant: 'outline',
                                  size: 'sm',
                                  className: 'gap-1.5',
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    setTestingGroup(group.name);
                                  },
                                  children: [
                                    /* @__PURE__ */ jsx(FlaskConical, {
                                      className: 'size-3.5',
                                    }),
                                    admin_settings_test_button(),
                                  ],
                                }),
                              /* @__PURE__ */ jsx(ChevronDown, {
                                className: `text-muted-foreground size-5 transition-transform ${collapsed.has(group.name) ? '-rotate-90' : ''}`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    !collapsed.has(group.name) &&
                      /* @__PURE__ */ jsx(CardContent, {
                        className: 'space-y-4',
                        children: groupSettings.map((setting) =>
                          /* @__PURE__ */ jsx(
                            SettingField,
                            {
                              setting,
                              label: tDynamic(
                                `admin.settings.fields.${setting.name}`
                              ),
                              placeholder:
                                placeholders[setting.name] ??
                                setting.placeholder,
                              value:
                                configs[setting.name] ??
                                setting.defaultValue ??
                                '',
                              onChange: (v) => handleChange(setting.name, v),
                            },
                            setting.name
                          )
                        ),
                      }),
                  ],
                },
                group.name
              );
            }),
      testingGroup &&
        getTestSpec(testingGroup) &&
        /* @__PURE__ */ jsx(SettingsTestDialog, {
          open: !!testingGroup,
          onOpenChange: (open) => !open && setTestingGroup(null),
          group: testingGroup,
          spec: getTestSpec(testingGroup),
          groupTitle: tDynamic(`admin.settings.groups.${testingGroup}.title`),
          configOverrides: Object.fromEntries(
            settings
              .filter(
                (s) => s.group === testingGroup && configs[s.name] !== void 0
              )
              .map((s) => [s.name, configs[s.name]])
          ),
        }),
    ],
  });
}
function SettingField({ setting, label, placeholder, value, onChange }) {
  if (setting.type === 'switch')
    return /* @__PURE__ */ jsxs('div', {
      className: 'space-y-2',
      children: [
        /* @__PURE__ */ jsx(Label, {
          htmlFor: setting.name,
          children: label,
        }),
        /* @__PURE__ */ jsx('div', {
          children: /* @__PURE__ */ jsx(Switch$1, {
            id: setting.name,
            checked: value === 'true',
            onCheckedChange: (checked) => onChange(checked ? 'true' : 'false'),
          }),
        }),
      ],
    });
  if (setting.type === 'select' && setting.options)
    return /* @__PURE__ */ jsxs('div', {
      className: 'space-y-2',
      children: [
        /* @__PURE__ */ jsx(Label, {
          htmlFor: setting.name,
          children: label,
        }),
        /* @__PURE__ */ jsxs(Select, {
          value,
          onValueChange: (v) => onChange(v || ''),
          children: [
            /* @__PURE__ */ jsx(SelectTrigger, {
              children: /* @__PURE__ */ jsx(SelectValue, {
                placeholder: placeholder || 'Select...',
              }),
            }),
            /* @__PURE__ */ jsx(SelectContent, {
              children: setting.options.map((opt) =>
                /* @__PURE__ */ jsx(
                  SelectItem,
                  {
                    value: opt.value,
                    children: opt.label,
                  },
                  opt.value
                )
              ),
            }),
          ],
        }),
      ],
    });
  if (setting.type === 'textarea')
    return /* @__PURE__ */ jsxs('div', {
      className: 'space-y-2',
      children: [
        /* @__PURE__ */ jsx(Label, {
          htmlFor: setting.name,
          children: label,
        }),
        /* @__PURE__ */ jsx('textarea', {
          id: setting.name,
          value,
          onChange: (e) => onChange(e.target.value),
          placeholder,
          rows: 3,
          className:
            'border-input placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:ring-1 focus-visible:outline-none',
        }),
      ],
    });
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-2',
    children: [
      /* @__PURE__ */ jsx(Label, {
        htmlFor: setting.name,
        children: label,
      }),
      /* @__PURE__ */ jsx(Input, {
        id: setting.name,
        type:
          setting.type === 'password'
            ? 'password'
            : setting.type === 'number'
              ? 'number'
              : 'text',
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder,
      }),
    ],
  });
}
//#endregion
export { AdminSettingsPage as component };
