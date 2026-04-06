import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Modal/composables/useModalClose.ts
function n(n) {
	function r() {
		n.modalRootContext?.close();
	}
	return {
		close: r,
		icon: e(() => {
			let e = n.configProviderRootContext;
			if (e) return t(e.props).icons?.modalClose;
		})
	};
}
//#endregion
export { n as useModalClose };

//# sourceMappingURL=useModalClose.js.map