import { defineComponent as e } from "vue";
//#region src/lib/core/components/ConfigProvider/icon-render.ts
var t = e({
	name: "IconRender",
	props: { render: {
		type: Function,
		required: !0
	} },
	setup(e) {
		return () => e.render();
	}
});
//#endregion
export { t as IconRender };

//# sourceMappingURL=icon-render.js.map