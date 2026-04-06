import { useCalendarRoot as e } from "./composables/useCalendarRoot.js";
import { CalendarRootContextKey as t } from "./context/key.js";
import { createElementBlock as n, defineComponent as r, openBlock as i, provide as a, renderSlot as o } from "vue";
//#region src/lib/core/components/Calendar/CalendarRoot.vue?vue&type=script&setup=true&lang.ts
var s = { class: "calendar" }, c = /* @__PURE__ */ r({
	__name: "CalendarRoot",
	props: {
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		multiple: { type: Boolean }
	},
	setup(r) {
		let c = r, {} = e({ props: () => c });
		return a(t, { props: () => c }), (e, t) => (i(), n("div", s, [o(e.$slots, "default")]));
	}
});
//#endregion
export { c as default };

//# sourceMappingURL=CalendarRoot.vue_vue_type_script_setup_true_lang.js.map