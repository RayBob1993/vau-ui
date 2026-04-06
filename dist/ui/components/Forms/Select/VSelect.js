import { Select as e } from "../../../../core/components/Select/index.js";
import { createBlock as t, createVNode as n, defineComponent as r, mergeModels as i, mergeProps as a, openBlock as o, renderSlot as s, unref as c, useModel as l, withCtx as u } from "vue";
//#region src/lib/ui/components/Forms/Select/VSelect.vue?vue&type=script&setup=true&lang.ts
var d = /* @__PURE__ */ r({
	__name: "VSelect",
	props: /* @__PURE__ */ i({
		disabled: { type: Boolean },
		multiple: { type: Boolean },
		clearable: { type: Boolean },
		searchable: { type: Boolean },
		loading: { type: Boolean },
		placeholder: {},
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ i([
		"change",
		"opened",
		"closed",
		"open",
		"close",
		"clear"
	], ["update:modelValue"]),
	setup(r, { emit: i }) {
		let d = r, f = i, p = l(r, "modelValue");
		return (r, i) => (o(), t(c(e).Root, a(d, {
			modelValue: p.value,
			"onUpdate:modelValue": i[0] ||= (e) => p.value = e,
			onChange: i[1] ||= (e) => f("change", e),
			onClose: i[2] ||= (e) => f("close"),
			onClear: i[3] ||= (e) => f("clear")
		}), {
			default: u(() => [n(c(e).Value, null, {
				default: u(() => [s(r.$slots, "value")]),
				_: 3
			}), n(c(e).Dropdown, null, {
				default: u(() => [n(c(e).Scrollbar, null, {
					default: u(() => [s(r.$slots, "default")]),
					_: 3
				})]),
				_: 3
			})]),
			_: 3
		}, 16, ["modelValue"]));
	}
});
//#endregion
export { d as default };

//# sourceMappingURL=VSelect.js.map