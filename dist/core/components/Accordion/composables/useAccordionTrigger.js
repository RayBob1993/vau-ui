import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Accordion/composables/useAccordionTrigger.ts
function n(n) {
	let r = e(() => t(n.accordionItemContext?.props)), i = e(() => !!r.value?.disabled), a = e(() => !!t(n.accordionItemContext?.isActive));
	function o() {
		n.accordionItemContext?.handleToggle();
	}
	return {
		isDisabled: i,
		isActive: a,
		handleToggle: o
	};
}
//#endregion
export { n as useAccordionTrigger };

//# sourceMappingURL=useAccordionTrigger.js.map