import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Accordion/composables/useAcccordionIndicator.ts
function n(n) {
	let r = e(() => !!t(n.accordionItemContext?.isActive));
	return {
		isActive: r,
		icon: e(() => {
			let e = n.configProviderRootContext;
			if (e) return r.value ? t(e.props).icons?.accordionActive : t(e.props).icons?.accordionInactive;
		})
	};
}
//#endregion
export { n as useAccordionIndicator };

//# sourceMappingURL=useAcccordionIndicator.js.map