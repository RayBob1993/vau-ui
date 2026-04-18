import { getScrollbarWidth as e } from "../utils/getScrollbarWidth.js";
import { onUnmounted as t } from "vue";
//#region src/lib/core/composables/useBodyScrollbar.ts
function n() {
	let n = "--scrollbar-width", r = e();
	function i() {
		document.body && (document.body.style.overflow = "hidden"), document.documentElement && document.documentElement.style.setProperty(n, `${r}px`);
	}
	function a() {
		document.body && (document.body.style.overflow = ""), document.documentElement && document.documentElement.style.setProperty(n, "0");
	}
	return t(() => {
		a();
	}), {
		hide: i,
		show: a
	};
}
//#endregion
export { n as useBodyScrollbar };

//# sourceMappingURL=useBodyScrollbar.js.map