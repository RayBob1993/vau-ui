import { useSelectTrigger as e } from "./composables/useSelectTrigger.js";
import { useSelectRootContext as t } from "./context/useSelectRootContext.js";
import { defineComponent as n, renderSlot as r, unref as i } from "vue";
//#region src/lib/core/components/Select/SelectTrigger.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ n({
	__name: "SelectTrigger",
	setup(n) {
		let { open: a, close: o, toggle: s } = e({ selectRootContext: t() });
		return (e, t) => r(e.$slots, "default", {
			open: i(a),
			close: i(o),
			toggle: i(s)
		});
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=SelectTrigger.js.map