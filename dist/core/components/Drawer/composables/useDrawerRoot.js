import { computed as e, toValue as t, watch as n } from "vue";
//#region src/lib/core/components/Drawer/composables/useDrawerRoot.ts
function r(r) {
	let i = e(() => t(r.configProviderRootContext?.props)), a = e(() => t(r.modelValue)), o = e(() => i.value?.teleportTarget);
	function s() {
		r.onClose?.();
	}
	return n(a, (e) => {
		e && r.onOpen?.();
	}), {
		close: s,
		teleportTarget: o
	};
}
//#endregion
export { r as useDrawerRoot };

//# sourceMappingURL=useDrawerRoot.js.map