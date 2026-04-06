import { onBeforeUnmount as e, watch as t } from "vue";
//#region src/lib/core/composables/useIntersectionObserver.ts
function n(n, r, i) {
	let a, o = t(n, (e) => {
		c(), e && (a = new IntersectionObserver(r, i), a.observe(e));
	}, {
		immediate: !0,
		flush: "post"
	});
	function s() {
		c(), o();
	}
	function c() {
		a &&= (a.disconnect(), void 0);
	}
	return e(() => {
		s();
	}), { stop: s };
}
//#endregion
export { n as useIntersectionObserver };

//# sourceMappingURL=useIntersectionObserver.js.map