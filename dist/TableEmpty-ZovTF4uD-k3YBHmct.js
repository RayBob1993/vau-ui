import { createElementBlock as o, openBlock as r, renderSlot as l, createTextVNode as a } from "vue";
import { f as n } from "./index-Bm172X7J.js";
const c = {}, s = { class: "v-table-empty" };
function d(t, e) {
  return r(), o("div", s, [
    l(t.$slots, "default", {}, () => [
      e[0] || (e[0] = a(" Данных нет ", -1))
    ])
  ]);
}
const p = /* @__PURE__ */ n(c, [["render", d]]);
export {
  p as default
};
