import { useSelectValue as e } from "./composables/useSelectValue.js";
import { useSelectRootContext as t } from "./context/useSelectRootContext.js";
import { Fragment as n, createElementBlock as r, createTextVNode as i, defineComponent as a, openBlock as o, renderList as s, renderSlot as c, toDisplayString as l, unref as u } from "vue";
//#region src/lib/core/components/Select/SelectValue.vue?vue&type=script&setup=true&lang.ts
var d = /* @__PURE__ */ a({
	__name: "SelectValue",
	setup(a) {
		let { activeOptionValue: d, activeOptions: f, hasValue: p, isMultiple: m, placeholder: h, toggle: g } = e({ selectRootContext: t() });
		return (e, t) => (o(), r("div", {
			class: "select-value",
			onClick: t[0] ||= (...e) => u(g) && u(g)(...e)
		}, [c(e.$slots, "default", {}, () => [u(p) ? (o(), r(n, { key: 0 }, [u(m) ? (o(!0), r(n, { key: 0 }, s(u(f), (e) => (o(), r(n, null, [i(l(e.props.value), 1)], 64))), 256)) : (o(), r(n, { key: 1 }, [i(l(u(d)), 1)], 64))], 64)) : (o(), r(n, { key: 1 }, [i(l(u(h)), 1)], 64))])]));
	}
});
//#endregion
export { d as default };

//# sourceMappingURL=SelectValue.vue_vue_type_script_setup_true_lang.js.map