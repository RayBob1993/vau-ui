import { createElementBlock as o, openBlock as r, renderSlot as s, createTextVNode as n } from "vue";
import { _ as c } from "./index-CojByXLQ.js";
const l = {}, a = { class: "v-table-empty" };
function d(t, e) {
  return r(), o("div", a, [
    s(t.$slots, "default", {}, () => [
      e[0] || (e[0] = n(" Данных нет ", -1))
    ])
  ]);
}
const _ = /* @__PURE__ */ c(l, [["render", d]]);
export {
  _ as default
};
