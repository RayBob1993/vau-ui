import { isAccordionMultiple as e } from "../utils/is-accordion-multiple.js";
import { computed as t, toValue as n } from "vue";
//#region src/lib/core/components/Accordion/composables/useAccordionItem.ts
function r(r) {
	let i = t(() => n(r.props)), a = t(() => n(r.accordionRootContext?.modelValue)), o = t(() => !!n(r.accordionRootContext?.props)?.multiple), s = t(() => e(a.value, o.value) ? a.value.includes(i.value.value) : a.value === i.value.value);
	function c() {
		if (e(a.value, o.value)) {
			r.accordionRootContext?.setModelValue(i.value?.value);
			return;
		}
		s.value ? r.accordionRootContext?.setModelValue(void 0) : r.accordionRootContext?.setModelValue(i.value?.value);
	}
	return {
		isActive: s,
		handleToggle: c
	};
}
//#endregion
export { r as useAccordionItem };

//# sourceMappingURL=useAccordionItem.js.map