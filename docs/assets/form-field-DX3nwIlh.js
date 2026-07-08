import { jsx, jsxs } from 'react/jsx-runtime';

import { t as Field, i as FieldLabel } from './field-BZh9EFVs.js';
import { t as Input } from './input-B6v4Jp25.js';

//#region src/components/form-field.tsx
function fieldError(field) {
  if (!field.state.meta.isTouched) return null;
  const errs = field.state.meta.errors;
  if (!errs?.length) return null;
  const first = errs[0];
  if (typeof first === 'string') return first;
  if (first && typeof first === 'object' && 'message' in first)
    return String(first.message);
  return String(first);
}
function TextField({
  field,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  required,
  disabled,
}) {
  const error = fieldError(field);
  return /* @__PURE__ */ jsxs(Field, {
    children: [
      /* @__PURE__ */ jsx(FieldLabel, {
        htmlFor: field.name,
        children: label,
      }),
      /* @__PURE__ */ jsx(Input, {
        id: field.name,
        name: field.name,
        type,
        value: field.state.value ?? '',
        onChange: (e) => field.handleChange(e.target.value),
        onBlur: field.handleBlur,
        placeholder,
        autoComplete,
        required,
        disabled,
        'aria-invalid': error ? true : void 0,
      }),
      error &&
        /* @__PURE__ */ jsx('p', {
          className: 'text-destructive text-sm',
          children: error,
        }),
    ],
  });
}
//#endregion
export { TextField as t };
