import { ref as e } from "vue";
//#region src/lib/core/composables/useAnimatedNumber.ts
function t() {
	if (!window) return {
		number: e(0),
		animate: () => {}
	};
	let t = e(0);
	function n(e, n, r) {
		let i;
		function a(o) {
			i ||= o;
			let s = Math.min((o - i) / r, 1);
			t.value = Math.floor(s * (n - e) + e), s < 1 && window.requestAnimationFrame(a);
		}
		window.requestAnimationFrame(a);
	}
	return {
		number: t,
		animate: n
	};
}
//#endregion
export { t as useAnimatedNumber };

//# sourceMappingURL=useAnimatedNumber.js.map