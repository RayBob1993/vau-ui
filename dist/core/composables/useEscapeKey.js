import { onUnmounted as e, toValue as t, watch as n } from "vue";
//#region src/lib/core/composables/useEscapeKey.ts
function r(r) {
	function i(e) {
		e.key === "Escape" && t(r.when) && (r.enabled !== void 0 && !t(r.enabled) || ((r.preventDefault === void 0 || t(r.preventDefault)) && e.preventDefault(), r.onEscape(e)));
	}
	n(() => t(r.when), (e) => {
		if (e) {
			window.addEventListener("keydown", i, !0);
			return;
		}
		window.removeEventListener("keydown", i, !0);
	}, { immediate: !0 }), e(() => {
		window.removeEventListener("keydown", i, !0);
	});
}
//#endregion
export { r as useEscapeKey };

//# sourceMappingURL=useEscapeKey.js.map