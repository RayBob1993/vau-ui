//#region src/lib/core/composables/useEmitProxy.ts
function e(e, t) {
	return { listeners: t.reduce((t, n) => {
		let r = n, i = String(r);
		return t[r] = ((...t) => e(i, ...t)), t;
	}, {}) };
}
//#endregion
export { e as useEmitProxy };

//# sourceMappingURL=useEmitProxy.js.map