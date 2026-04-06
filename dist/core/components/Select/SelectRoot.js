import { useFormContext as e } from "../Form/context/useFormContext.js";
import { useSelectRoot as t } from "./composables/useSelectRoot.js";
import { SelectRootContextKey as n } from "./context/key.js";
import { vClickOutside as r } from "../../directives/ClickOutside/directive.js";
import { createElementBlock as i, defineComponent as a, mergeModels as o, normalizeClass as s, openBlock as c, provide as l, renderSlot as u, unref as d, useModel as f, withDirectives as p } from "vue";
//#region src/lib/core/components/Select/SelectRoot.vue?vue&type=script&setup=true&lang.ts
var m = ["aria-disabled"], h = /* @__PURE__ */ a({
	__name: "SelectRoot",
	props: /* @__PURE__ */ o({
		disabled: { type: Boolean },
		multiple: { type: Boolean },
		clearable: { type: Boolean },
		searchable: { type: Boolean },
		loading: { type: Boolean },
		placeholder: {},
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
	emits: /* @__PURE__ */ o([
		"change",
		"opened",
		"closed",
		"open",
		"close",
		"clear"
	], ["update:modelValue"]),
	setup(a, { emit: o }) {
		let h = a, g = o, _ = f(a, "modelValue"), { formRootContext: v, formItemContext: y, isValid: b, isInvalid: x } = e(), { activeOption: S, activeOptions: C, hasValue: w, isOpen: T, isDisabled: E, open: D, close: O, toggle: k, registerOption: A, unregisterOption: j, setModelValue: M } = t({
			formRootContext: v,
			formItemContext: y,
			modelValue: () => _.value,
			props: () => h,
			onChangeModel: (e) => {
				_.value = e;
			},
			onChange: (e) => {
				g("change", e);
			},
			onClear: () => {
				g("clear");
			}
		});
		return l(n, {
			activeOption: () => S.value,
			activeOptions: () => C.value,
			modelValue: () => _.value,
			props: () => h,
			hasValue: () => w.value,
			isOpen: () => T.value,
			isDisabled: () => E.value,
			open: D,
			close: O,
			toggle: k,
			registerOption: A,
			unregisterOption: j,
			setModelValue: M
		}), (e, t) => p((c(), i("div", {
			class: s(["select", {
				"select--disabled": d(E),
				"select--open": d(T),
				"select--filled": d(w),
				"select--invalid": d(x),
				"select--valid": d(b)
			}]),
			"aria-disabled": d(E)
		}, [u(e.$slots, "default")], 10, m)), [[d(r), d(O)]]);
	}
});
//#endregion
export { h as default };

//# sourceMappingURL=SelectRoot.js.map