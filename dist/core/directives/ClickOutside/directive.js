//#region src/lib/core/directives/ClickOutside/directive.ts
var e = {
	mounted(e, t) {
		e.clickOutside = (n) => {
			n.target instanceof Element && (e === n.target || e.contains(n.target) || t.value(n, e));
		}, window.addEventListener("click", e.clickOutside);
	},
	unmounted(e) {
		window.removeEventListener("click", e.clickOutside);
	}
};
//#endregion
export { e as vClickOutside };

//# sourceMappingURL=directive.js.map