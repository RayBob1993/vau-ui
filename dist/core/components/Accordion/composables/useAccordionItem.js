import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Accordion/composables/useAccordionItem.ts
function n(n) {
	let r = e(() => t(n.props)), i = e(() => t(n.accordionRootContext?.modelValue)), a = e(() => !!t(n.accordionRootContext?.props)?.multiple);
	return { isActive: e(() => a.value && Array.isArray(i.value) ? i.value.includes(r.value.value) : i.value === r.value.value) };
}
//#endregion
export { n as useAccordionItem };

//# sourceMappingURL=useAccordionItem.js.map