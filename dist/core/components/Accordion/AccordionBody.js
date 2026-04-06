import { useAccordionItemContext as e } from "./context/useAccordionItemContext.js";
import { computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, openBlock as a, renderSlot as o, toValue as s, vShow as c, withDirectives as l } from "vue";
//#region src/lib/core/components/Accordion/AccordionBody.vue?vue&type=script&setup=true&lang.ts
var u = {
	class: "accordion-body",
	role: "region"
}, d = { class: "accordion-body__content" }, f = /* @__PURE__ */ i({
	__name: "AccordionBody",
	setup(i) {
		let f = e(), p = t(() => !!s(f?.isActive));
		return (e, t) => l((a(), n("div", u, [r("div", d, [o(e.$slots, "default")])], 512)), [[c, p.value]]);
	}
});
//#endregion
export { f as default };

//# sourceMappingURL=AccordionBody.js.map