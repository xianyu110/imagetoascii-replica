import { D as n } from './button-bN-wY-Ql.js';
import { f as e, l as t } from './runtime-DPDP4QTt.js';

var r = e(t()).forwardRef(function (e, t) {
  let { className: r, render: i, orientation: a = `horizontal`, ...o } = e;
  return n(`div`, e, {
    state: { orientation: a },
    ref: t,
    props: [{ role: `separator`, 'aria-orientation': a }, o],
  });
});
export { r as t };
