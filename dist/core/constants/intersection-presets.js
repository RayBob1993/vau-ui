//#region src/lib/core/constants/intersection-presets.ts
var e = Object.freeze({
	LAZY_IMAGE: {
		threshold: 0,
		rootMargin: "50px 0px 50px 0px"
	},
	INFINITE_SCROLL: {
		threshold: 0,
		rootMargin: "100px 0px 100px 0px"
	},
	HALF_VISIBLE: { threshold: .5 },
	FULL_VISIBLE: { threshold: 1 },
	STEPPED: { threshold: [
		0,
		.25,
		.5,
		.75,
		1
	] }
});
//#endregion
export { e as IntersectionPresets };

//# sourceMappingURL=intersection-presets.js.map