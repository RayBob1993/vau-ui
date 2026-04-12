import { useAccordionIndicator as e } from "./composables/useAcccordionIndicator.js";
import { useAccordionItemContext as t } from "./context/useAccordionItemContext.js";
import { IconRender as n } from "../ConfigProvider/icon-render.js";
import { useConfigProviderRootContext as r } from "../ConfigProvider/context/useConfigProviderRootContext.js";
import { Fragment as i, createBlock as a, createElementBlock as o, createTextVNode as s, defineComponent as c, openBlock as l, renderSlot as u, toDisplayString as d, unref as f } from "vue";
//#region src/lib/core/components/Accordion/AccordionIndicator.vue?vue&type=script&setup=true&lang.ts
var p = { class: "accordion-indicator" }, m = /* @__PURE__ */ c({
	__name: "AccordionIndicator",
	setup(c) {
		let { isActive: m, icon: h } = e({
			accordionItemContext: t(),
			configProviderRootContext: r()
		});
		return (e, t) => (l(), o("div", p, [u(e.$slots, "default", {}, () => [f(h) ? (l(), a(f(n), {
			key: 0,
			render: f(h)
		}, null, 8, ["render"])) : (l(), o(i, { key: 1 }, [s(d(f(m) ? "-" : "+"), 1)], 64))])]));
	}
});
//#endregion
export { m as default };

//# sourceMappingURL=AccordionIndicator.js.map