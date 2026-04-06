import { ref as e } from "vue";
//#region src/lib/core/composables/useToggle.ts
function t(t = !1) {
	let n = e(t);
	function r(e) {
		n.value = e;
	}
	function i() {
		r(!n.value);
	}
	return [
		n,
		r,
		i
	];
}
//#endregion
export { t as useToggle };

//# sourceMappingURL=useToggle.js.map