import { isUndefined as e } from "../isUndefined.js";
//#region src/lib/core/utils/decorators/throttle.ts
function t(t, n, r = {}) {
	let { noTrailing: i = !1, noLeading: a = !1, debounceMode: o = void 0 } = r, s = null, c = !1, l = 0, u = null;
	function d() {
		s &&= (clearTimeout(s), null);
	}
	function f(e = {}) {
		let { upcomingOnly: t = !1 } = e;
		d(), c = !t;
	}
	function p() {
		if (l = Date.now(), u) {
			let e = u;
			t.apply(this, e), u = null;
		}
	}
	function m(...t) {
		if (c) return;
		let r = Date.now() - l;
		u = t;
		function f() {
			s = null;
		}
		d(), !a && o && !s && p.call(this), e(o) && r > n ? a ? (l = Date.now(), i || (s = setTimeout(o ? f : p.bind(this), n))) : p.call(this) : i || (s = setTimeout(o ? f : p.bind(this), e(o) ? n - r : n));
	}
	return m.cancel = f, m;
}
//#endregion
export { t as throttle };

//# sourceMappingURL=throttle.js.map