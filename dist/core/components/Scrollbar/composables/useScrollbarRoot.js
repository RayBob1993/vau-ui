import { isNumber as e } from "../../../utils/isNumber.js";
import { throttle as t } from "../../../utils/decorators/throttle.js";
import { debounce as n } from "../../../utils/decorators/debounce.js";
import { useToggle as r } from "../../../composables/useToggle.js";
import { getOffsetLeft as i, getOffsetTop as a, getScrollLeft as o, getScrollTop as s } from "../utils/index.js";
import { computed as c, onScopeDispose as l, ref as u, toValue as d } from "vue";
//#region src/lib/core/components/Scrollbar/composables/useScrollbarRoot.ts
function f(f) {
	let p = c(() => d(f.props)), m = c(() => p.value?.infiniteScrollOffset ?? 10), h = c(() => p.value?.draggableMultiplier ?? 1), g = c(() => e(p.value?.debounceDelay) ? p.value.debounceDelay : 300), [_, v] = r(), [y, b] = r(), x = u(0), S = u(0), C = u(0), w = u(0);
	function T() {
		b(!1), v(!1);
	}
	let E = n((e) => {
		f.onScroll?.(e), p.value?.draggable || (C.value = s(f.scrollbar.value, !!p.value?.vertical), w.value = o(f.scrollbar.value, !!p.value?.horizontal));
		let t = f.scrollbar.value, n = f.content.value, r = t ? t.clientHeight : 0, i = t ? t.clientWidth : 0, a = n ? n.scrollWidth : 0, c = n ? n.scrollHeight : 0, l = C.value + r, u = w.value + i, d = !!(p.value?.vertical && c - l <= m.value), h = !!(p.value?.horizontal && a - u <= m.value);
		d && f.onScrollEndY?.(), h && f.onScrollEndX?.();
	}, g.value), D = t((e) => {
		if (f.onMousemove?.(e), !p.value?.draggable || !y.value) return;
		e.preventDefault(), e.stopPropagation();
		let t = f.scrollbar.value;
		if (!t) return;
		let n = !!p.value?.vertical, r = !!p.value?.horizontal, o = e.pageY - a(t, n), s = (e.pageX - i(t, r) - x.value) * h.value, c = (o - S.value) * h.value;
		r && (t.scrollLeft = w.value - s), n && (t.scrollTop = C.value - c);
	}, g.value);
	function O(e) {
		if (f.onMousedown?.(e), !p.value?.draggable) return;
		b(!0), v(!0);
		let t = f.scrollbar.value;
		if (t) {
			let n = !!p.value?.vertical, r = !!p.value?.horizontal;
			S.value = e.pageY - a(t, n), x.value = e.pageX - i(t, r);
		}
		C.value = s(f.scrollbar.value, !!p.value?.vertical), w.value = o(f.scrollbar.value, !!p.value?.horizontal);
	}
	function k(e) {
		f.onMouseleave?.(e), p.value?.draggable && T();
	}
	function A(e) {
		f.onMouseup?.(e), p.value?.draggable && T();
	}
	return l(() => {
		E.cancel?.(), D.cancel?.();
	}), {
		isGrabbing: _,
		handleScroll: E,
		handleMousedown: O,
		handleMouseleave: k,
		handleMouseup: A,
		handleMousemove: D
	};
}
//#endregion
export { f as useScrollbarRoot };

//# sourceMappingURL=useScrollbarRoot.js.map