import { createElementBlock as t, openBlock as o, createElementVNode as c, renderSlot as l } from "vue";
import { _ as s } from "./index-DHX11yBu.js";
const n = {}, r = { class: "v-table-body-cell" }, _ = { class: "v-table-body-cell__content" };
function a(e, d) {
  return o(), t("td", r, [
    c("div", _, [
      l(e.$slots, "default")
    ])
  ]);
}
const m = /* @__PURE__ */ s(n, [["render", a]]);
export {
  m as default
};
