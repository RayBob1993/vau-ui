import { InputPassword as e } from "../../../../core/components/InputPassword/index.js";
import { createBlock as t, defineComponent as n, mergeModels as r, mergeProps as i, openBlock as a, unref as o, useModel as s } from "vue";
//#region src/lib/ui/components/Forms/InputPassword/VInputPassword.vue?vue&type=script&setup=true&lang.ts
var c = /* @__PURE__ */ n({
	__name: "VInputPassword",
	props: /* @__PURE__ */ r({
		clearable: { type: Boolean },
		loading: { type: Boolean },
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
	emits: ["update:modelValue"],
	setup(n) {
		let r = n, c = s(n, "modelValue");
		return (n, s) => (a(), t(o(e).Root, i({
			modelValue: c.value,
			"onUpdate:modelValue": s[0] ||= (e) => c.value = e
		}, r), null, 16, ["modelValue"]));
	}
});
//#endregion
export { c as default };

//# sourceMappingURL=VInputPassword.js.map