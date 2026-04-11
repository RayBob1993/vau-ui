import { useAccordionTrigger as e } from "./composables/useAccordionTrigger.js";
import { useAccordionContext as t } from "./context/useAccordionContext.js";
import { createElementBlock as n, defineComponent as r, openBlock as i, renderSlot as a, unref as o } from "vue";
//#region src/lib/core/components/Accordion/AccordionTrigger.vue?vue&type=script&setup=true&lang.ts
var s = ["disabled", "aria-expanded"], c = /* @__PURE__ */ r({
	__name: "AccordionTrigger",
	setup(r) {
		let { accordionRootContext: c, accordionItemContext: l } = t(), { isDisabled: u, isActive: d, handleToggle: f } = e({
			accordionRootContext: c,
			accordionItemContext: l
		});
		return (e, t) => (i(), n("button", {
			type: "button",
			disabled: o(u),
			class: "accordion-trigger",
			tabindex: "0",
			"aria-expanded": o(d),
			onClick: t[0] ||= (...e) => o(f) && o(f)(...e)
		}, [a(e.$slots, "default")], 8, s));
	}
});
//#endregion
export { c as default };

//# sourceMappingURL=AccordionTrigger.js.map