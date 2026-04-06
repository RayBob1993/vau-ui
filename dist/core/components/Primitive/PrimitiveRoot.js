import { isString as e } from "../../utils/isString.js";
import { Slot as t } from "./PrimitiveSlot.js";
import { SELF_CLOSING_TAGS as n } from "./constant/index.js";
import { defineComponent as r, h as i } from "vue";
//#region src/lib/core/components/Primitive/PrimitiveRoot.ts
var a = r({
	name: "PrimitiveRoot",
	inheritAttrs: !1,
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(r, { attrs: a, slots: o }) {
		let s = r.asChild ? "template" : r.as;
		return e(s) && n.includes(s) ? () => i(s, a) : s === "template" ? () => i(t, a, { default: o.default }) : () => i(r.as, a, { default: o.default });
	}
});
//#endregion
export { a as Root };

//# sourceMappingURL=PrimitiveRoot.js.map