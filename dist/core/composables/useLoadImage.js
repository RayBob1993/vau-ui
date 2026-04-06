import { isString as e } from "../utils/isString.js";
import { useToggle as t } from "./useToggle.js";
import { useIntersectionObserver as n } from "./useIntersectionObserver.js";
import { IntersectionPresets as r } from "../constants/intersection-presets.js";
import { onMounted as i, ref as a } from "vue";
//#region src/lib/core/composables/useLoadImage.ts
function o(o, s, c = {}) {
	let { rootMargin: l = r.LAZY_IMAGE.rootMargin, threshold: u = r.LAZY_IMAGE.threshold, enableNativeLazyLoading: d = !0, immediate: f = !1 } = c, { stop: p } = n(o, C, {
		rootMargin: l,
		threshold: u
	}), [m, h] = t(), [g, _] = t(), v = a(""), y = a(""), b = a(""), x = e(s) ? { src: s } : s;
	function S() {
		if (m.value || g.value) return;
		let e = new Image();
		e.src = x.src, x.srcset && (e.srcset = x.srcset), x.sizes && (e.sizes = x.sizes), e.onload = () => {
			v.value = x.src, y.value = x.srcset || "", b.value = x.sizes || "", h(!0), _(!1);
		}, e.onerror = () => {
			h(!1), _(!0);
		};
	}
	function C(e) {
		e.forEach((e) => {
			e.isIntersecting && !m.value && !g.value && S();
		});
	}
	return i(() => {
		if (f || d && "loading" in HTMLImageElement.prototype) {
			S();
			return;
		}
	}), {
		isLoaded: m,
		hasError: g,
		imageSrc: v,
		imageSrcset: y,
		imageSizes: b,
		loadImage: S,
		stop: p
	};
}
//#endregion
export { o as useLoadImage };

//# sourceMappingURL=useLoadImage.js.map