import { isSelectMultiple as e } from "../utils/is-select-multiple.js";
import { computed as t, toValue as n } from "vue";
//#region src/lib/core/components/Select/composables/useActiveSelectOptions.ts
function r(r) {
	let i = t(() => n(r.multiple)), a = t(() => n(r.modelValue)), o = t(() => n(r.options));
	return {
		activeOption: t(() => o.value.find((e) => e.props.value === a.value)),
		activeOptions: t(() => {
			if (!e(a.value, i.value)) return [];
			let t = new Set(a.value);
			return o.value.filter((e) => t.has(e.props.value));
		})
	};
}
//#endregion
export { r as useActiveSelectOptions };

//# sourceMappingURL=useActiveSelectOptions.js.map