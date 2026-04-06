import { useInputAfter as e } from "./composables/useInputAfter.js";
import { useInputRootContext as t } from "./context/useInputRootContext.js";
import { createCommentVNode as n, createElementBlock as r, defineComponent as i, openBlock as a, renderSlot as o, unref as s } from "vue";
//#region src/lib/core/components/Input/InputAfter.vue?vue&type=script&setup=true&lang.ts
var c = { class: "input-after" }, l = /* @__PURE__ */ i({
	__name: "InputAfter",
	setup(i) {
		let { isClearable: l, handleClear: u } = e({ inputRootContext: t() });
		return (e, t) => (a(), r("div", c, [o(e.$slots, "default"), s(l) ? (a(), r("button", {
			key: 0,
			type: "button",
			onClick: t[0] ||= (...e) => s(u) && s(u)(...e)
		}, " × ")) : n("", !0)]));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=InputAfter.js.map