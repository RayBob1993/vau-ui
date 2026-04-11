import { isAccordionMultiple as e } from "../utils/is-accordion-multiple.js";
import { computed as t, toValue as n } from "vue";
//#region src/lib/core/components/Accordion/composables/useAccordionRoot.ts
function r(r) {
	let i = t(() => n(r.props));
	function a(t) {
		let a = n(r.modelValue);
		if (e(a, !!i.value.multiple)) {
			if (!t) return;
			let e = new Set(a);
			e.has(t) ? e.delete(t) : e.add(t), r?.onChangeModel?.([...e]);
		} else r?.onChangeModel?.(t);
		r?.onChange?.(t);
	}
	return { setModelValue: a };
}
//#endregion
export { r as useAccordionRoot };

//# sourceMappingURL=useAccordionRoot.js.map