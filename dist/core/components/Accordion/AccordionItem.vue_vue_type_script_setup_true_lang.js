import { useAccordionItem as e } from "./composables/useAccordionItem.js";
import { AccordionItemContextKey as t } from "./context/key.js";
import { useAccordionRootContext as n } from "./context/useAccordionRootContext.js";
import { createElementBlock as r, defineComponent as i, normalizeClass as a, openBlock as o, provide as s, renderSlot as c, unref as l } from "vue";
//#region src/lib/core/components/Accordion/AccordionItem.vue?vue&type=script&setup=true&lang.ts
var u = /* @__PURE__ */ i({
	__name: "AccordionItem",
	props: {
		value: {},
		disabled: { type: Boolean }
	},
	setup(i) {
		let u = i, { isActive: d } = e({
			accordionRootContext: n(),
			props: () => u
		});
		return s(t, {
			props: () => u,
			isActive: () => d.value
		}), (e, t) => (o(), r("div", { class: a(["accordion-item", {
			"accordion-item--open": l(d),
			"accordion-item--disabled": i.disabled
		}]) }, [c(e.$slots, "default", { isActive: l(d) })], 2));
	}
});
//#endregion
export { u as default };

//# sourceMappingURL=AccordionItem.vue_vue_type_script_setup_true_lang.js.map