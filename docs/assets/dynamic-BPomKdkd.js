import { t as _index_exports } from './messages-DC2BhyRd.js';

//#region src/core/i18n/dynamic.ts
function tDynamic(key) {
  const fn = _index_exports[key];
  return typeof fn === 'function' ? fn() : key;
}
//#endregion
export { tDynamic as t };
