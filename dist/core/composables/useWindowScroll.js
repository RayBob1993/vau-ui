import { onMounted as e, onScopeDispose as t, ref as n } from "vue";
//#region src/lib/core/composables/useWindowScroll.ts
function r() {
	if (!window) return {
		x: n(0),
		y: n(0)
	};
	let r = n(window.scrollX), i = n(window.scrollY);
	function a() {
		window && (r.value = window.scrollX, i.value = window.scrollY);
	}
	function o(e) {
		window.scrollTo(e);
	}
	return e(() => {
		a(), window.addEventListener("scroll", a);
	}), t(() => {
		window.removeEventListener("scroll", a);
	}), {
		x: r,
		y: i,
		setScroll: o
	};
}
//#endregion
export { r as useWindowScroll };

//# sourceMappingURL=useWindowScroll.js.map