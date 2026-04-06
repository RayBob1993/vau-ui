import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Tag/composables/useTagRoot.ts
function n(n) {
	let r = e(() => t(n.props));
	function i() {
		n.onDelete?.(r.value.value);
	}
	return { handleDelete: i };
}
//#endregion
export { n as useTagRoot };

//# sourceMappingURL=useTagRoot.js.map