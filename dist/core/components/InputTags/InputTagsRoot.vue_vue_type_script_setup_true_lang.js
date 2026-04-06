import { useFormContext as e } from "../Form/context/useFormContext.js";
import { InputTagsRootContextKey as t } from "./context/key.js";
import { useInputTagsRoot as n } from "./composables/useInputTagsRoot.js";
import { createElementBlock as r, defineComponent as i, mergeModels as a, normalizeClass as o, openBlock as s, provide as c, renderSlot as l, unref as u, useModel as d } from "vue";
//#region src/lib/core/components/InputTags/InputTagsRoot.vue?vue&type=script&setup=true&lang.ts
var f = /* @__PURE__ */ i({
	__name: "InputTagsRoot",
	props: /* @__PURE__ */ a({
		placeholder: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		autocomplete: {},
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ a(["addTag", "removeTag"], ["update:modelValue"]),
	setup(i, { emit: a }) {
		let f = i, p = d(i, "modelValue"), { formRootContext: m, formItemContext: h, isValid: g, isInvalid: _ } = e(), { isDisabled: v } = n({
			formRootContext: m,
			formItemContext: h,
			props: () => f,
			modelValue: () => p.value
		});
		return c(t, {
			props: () => f,
			modelValue: () => p.value,
			isDisabled: () => v.value
		}), (e, t) => (s(), r("div", { class: o(["input-tags", {
			"input-tags--disabled": u(v),
			"input-tags--invalid": u(_),
			"input-tags--valid": u(g)
		}]) }, [l(e.$slots, "default")], 2));
	}
});
//#endregion
export { f as default };

//# sourceMappingURL=InputTagsRoot.vue_vue_type_script_setup_true_lang.js.map