import "../constants/index.js";
import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/InputNumber/composables/useInputNumberInput.ts
function n(n) {
	let r = e(() => t(n.inputNumberRootContext?.props)), i = e({
		get: () => t(n.inputNumberRootContext?.modelValue) ?? 0,
		set(e) {
			n.inputNumberRootContext && n.inputNumberRootContext.setModelValue(e);
		}
	});
	return {
		props: e(() => ({
			step: t(n.inputNumberRootContext?.step),
			disabled: t(n.inputNumberRootContext?.isDisabled),
			min: r.value?.min,
			max: r.value?.max,
			readonly: r.value?.readonly,
			placeholder: r.value?.placeholder,
			autocomplete: r.value?.autocomplete
		})),
		modelValue: i
	};
}
//#endregion
export { n as useInputNumberInput };

//# sourceMappingURL=useInputNumberInput.js.map