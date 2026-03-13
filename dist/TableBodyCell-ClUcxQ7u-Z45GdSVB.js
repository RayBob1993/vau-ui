import { createElementBlock as t, openBlock as o, createElementVNode as l, renderSlot as r } from "vue";
import { f as n } from "./index-Bm172X7J.js";
const c = {}, a = { class: "v-table-body-cell" }, d = { class: "v-table-body-cell__content" };
function s(e, f) {
  return o(), t("td", a, [
    l("div", d, [
      r(e.$slots, "default")
    ])
  ]);
}
const i = /* @__PURE__ */ n(c, [["render", s]]);
export {
  i as default
};
