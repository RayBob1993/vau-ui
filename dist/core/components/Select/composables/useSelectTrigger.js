//#region src/lib/core/components/Select/composables/useSelectTrigger.ts
function e(e) {
	function t() {
		e.selectRootContext?.open();
	}
	function n() {
		e.selectRootContext?.close();
	}
	function r() {
		e.selectRootContext?.toggle();
	}
	return {
		open: t,
		close: n,
		toggle: r
	};
}
//#endregion
export { e as useSelectTrigger };

//# sourceMappingURL=useSelectTrigger.js.map