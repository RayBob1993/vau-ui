import { useAccordionRoot as e } from "./composables/useAccordionRoot.js";
import { AccordionRootContextKey as t } from "./context/key.js";
import { createElementBlock as n, defineComponent as r, mergeModels as i, normalizeClass as a, openBlock as o, provide as s, renderSlot as c, useModel as l } from "vue";
//#region src/lib/core/components/Accordion/AccordionRoot.vue?vue&type=script&setup=true&lang.ts
var u = /* @__PURE__ */ r({
	__name: "AccordionRoot",
	props: /* @__PURE__ */ i({
		multiple: { type: Boolean },
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		theme: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ i(["change"], ["update:modelValue"]),
	setup(r, { emit: i }) {
		let u = r, d = i, f = l(r, "modelValue"), { setModelValue: p } = e({
			props: () => u,
			modelValue: () => f.value,
			onChange: (e) => d("change", e),
			onChangeModel: (e) => {
				f.value = e;
			}
		});
		return s(t, {
			props: () => u,
			modelValue: () => f.value,
			setModelValue: p
		}), (e, t) => (o(), n("div", { class: a(["accordion", {
			[`accordion--size-${r.size}`]: r.size,
			[`accordion--theme-${r.theme}`]: r.theme
		}]) }, [c(e.$slots, "default")], 2));
	}
});
//#endregion
export { u as default };

//# sourceMappingURL=AccordionRoot.vue_vue_type_script_setup_true_lang.js.map