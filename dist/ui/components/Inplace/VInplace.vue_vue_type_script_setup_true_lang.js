import { useInplace as e } from "./composables/useInplace.js";
import { defineComponent as t, renderSlot as n, unref as r } from "vue";
//#region src/lib/ui/components/Inplace/VInplace.vue?vue&type=script&setup=true&lang.ts
var i = /* @__PURE__ */ t({
	__name: "VInplace",
	emits: ["open", "close"],
	setup(t, { emit: i }) {
		let a = i, { isVisible: o, handleOpen: s, handleClose: c } = e({
			onOpen: () => a("open"),
			onClose: () => a("close")
		});
		return (e, t) => r(o) ? n(e.$slots, "content", {
			key: 1,
			close: r(c)
		}) : n(e.$slots, "display", {
			key: 0,
			open: r(s)
		});
	}
});
//#endregion
export { i as default };

//# sourceMappingURL=VInplace.vue_vue_type_script_setup_true_lang.js.map