import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Drawer/composables/useDrawerClose.ts
function n(n) {
	function r() {
		n.drawerRootContext?.close();
	}
	return {
		close: r,
		icon: e(() => {
			let e = n.configProviderRootContext;
			if (e) return t(e.props).icons?.drawerClose;
		})
	};
}
//#endregion
export { n as useDrawerClose };

//# sourceMappingURL=useDrawerClose.js.map