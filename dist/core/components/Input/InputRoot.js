import { useFormContext as e } from "../Form/context/useFormContext.js";
import { InputTypes as t } from "../../constants/input-types.js";
import { InputModes as n } from "../../constants/input-modes.js";
import { InputNativeTypes as r } from "../../constants/input-native-types.js";
import { useInputRoot as i } from "./composables/useInputRoot.js";
import { InputRootContextKey as a } from "./context/key.js";
import { createElementBlock as o, defineComponent as s, mergeModels as c, normalizeClass as l, openBlock as u, provide as d, renderSlot as f, unref as p, useModel as m } from "vue";
//#region src/lib/core/components/Input/InputRoot.vue?vue&type=script&setup=true&lang.ts
var h = /* @__PURE__ */ s({
	__name: "InputRoot",
	props: /* @__PURE__ */ c({
		type: { default: t.INPUT },
		clearable: { type: Boolean },
		loading: { type: Boolean },
		placeholder: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		autocomplete: {},
		nativeType: { default: r.TEXT },
		inputMode: { default: n.TEXT },
		rows: {},
		cols: {},
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
	emits: /* @__PURE__ */ c([
		"click",
		"dblclick",
		"mousedown",
		"mouseup",
		"mouseenter",
		"mouseleave",
		"mousemove",
		"mouseover",
		"mouseout",
		"contextmenu",
		"focusin",
		"focusout",
		"change",
		"blur",
		"focus",
		"keyup",
		"keydown",
		"keypress",
		"paste",
		"copy",
		"cut"
	], ["update:modelValue"]),
	setup(t, { expose: n, emit: r }) {
		let s = t, c = r, h = m(t, "modelValue"), { formRootContext: g, formItemContext: _, isValid: v, isInvalid: y } = e(), { isDisabled: b, isTextarea: x, hasValue: S, isFocus: C, setFocus: w, setModelValue: T, reset: E } = i({
			formRootContext: g,
			formItemContext: _,
			modelValue: () => h.value,
			props: () => s,
			onUpdateModelValue: (e) => {
				h.value = e;
			}
		});
		return d(a, {
			isDisabled: () => b.value,
			props: () => s,
			modelValue: () => h.value,
			setFocus: w,
			setModelValue: T,
			reset: E,
			emit: c
		}), n({ setFocus: w }), (e, n) => (u(), o("div", { class: l(["input", {
			"input--focus": p(C),
			"input--textarea": p(x),
			"input--filled": p(S),
			"input--disabled": p(b),
			"input--loading": t.loading,
			"input--invalid": p(y),
			"input--valid": p(v),
			[`input--theme-${t.theme}`]: t.theme,
			[`input--size-${t.size}`]: t.size,
			[`input--size-xs-${t.sizeXs}`]: t.sizeXs,
			[`input--size-sm-${t.sizeSm}`]: t.sizeSm,
			[`input--size-md-${t.sizeMd}`]: t.sizeMd,
			[`input--size-lg-${t.sizeLg}`]: t.sizeLg,
			[`input--size-xl-${t.sizeXl}`]: t.sizeXl,
			[`input--size-xxl-${t.sizeXxl}`]: t.sizeXxl
		}]) }, [f(e.$slots, "default", {
			isTextarea: p(x),
			isFocus: p(C),
			hasValue: p(S),
			loading: !!t.loading,
			isInvalid: p(y),
			isValid: p(v)
		})], 2));
	}
});
//#endregion
export { h as default };

//# sourceMappingURL=InputRoot.js.map