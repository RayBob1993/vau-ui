import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Accordion/composables/useAccordionRoot.ts
function n(n) {
	let r = e(() => t(n.props));
	function i(e) {
		let i = t(n.modelValue);
		if (r.value.multiple && Array.isArray(i)) {
			if (!e) return;
			let t = new Set(i);
			t.has(e) ? t.delete(e) : t.add(e), n?.onChangeModel?.([...t]);
		} else n?.onChangeModel?.(e);
		n?.onChange?.(e);
	}
	return { setModelValue: i };
}
//#endregion
export { n as useAccordionRoot };

//# sourceMappingURL=useAccordionRoot.js.map