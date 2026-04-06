import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Accordion/composables/useAccordionTrigger.ts
function n(n) {
	let r = e(() => t(n.accordionItemContext?.props)), i = e(() => !!r.value?.disabled);
	function a() {
		n.accordionRootContext?.setModelValue(r.value?.value);
	}
	return {
		isDisabled: i,
		handleToggle: a
	};
}
//#endregion
export { n as useAccordionTrigger };

//# sourceMappingURL=useAccordionTrigger.js.map