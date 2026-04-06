import { isObject as e } from "./isObject.js";
import { isFunction as t } from "./isFunction.js";
//#region src/lib/core/utils/clone.ts
function n(r, i = /* @__PURE__ */ new WeakMap()) {
	if (typeof r != "object" || !r) return r;
	if (i.has(r)) return i.get(r);
	if (r instanceof Date) {
		let e = /* @__PURE__ */ new Date();
		return e.setTime(r.getTime()), e;
	}
	if (r instanceof RegExp) {
		let e = new RegExp(r.source, r.flags);
		return i.set(r, e), e;
	}
	if (r instanceof Map) {
		let e = /* @__PURE__ */ new Map();
		return i.set(r, e), r.forEach((t, r) => {
			e.set(n(r, i), n(t, i));
		}), e;
	}
	if (r instanceof Set) {
		let e = /* @__PURE__ */ new Set();
		return i.set(r, e), r.forEach((t) => {
			e.add(n(t, i));
		}), e;
	}
	if (r instanceof ArrayBuffer) {
		let e = r.slice(0);
		return i.set(r, e), e;
	}
	if (t(r)) return r;
	if (Array.isArray(r)) {
		let e = [];
		i.set(r, e);
		for (let t = 0; t < r.length; t++) e[t] = n(r[t], i);
		return e;
	}
	if (e(r)) {
		let e = Object.create(Object.getPrototypeOf(r));
		i.set(r, e);
		let t = [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)];
		for (let a of t) {
			let t = Object.getOwnPropertyDescriptor(r, a);
			t && ("value" in t ? Object.defineProperty(e, a, {
				...t,
				value: n(t.value, i)
			}) : Object.defineProperty(e, a, t));
		}
		return e;
	}
	return r;
}
//#endregion
export { n as clone };

//# sourceMappingURL=clone.js.map