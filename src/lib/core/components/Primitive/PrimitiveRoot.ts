import type { PrimitiveProps } from './types';
import { Slot } from './PrimitiveSlot';
import { SELF_CLOSING_TAGS } from './constant';
import { isString } from '../../utils';
import { defineComponent, h, type PropType } from 'vue';

export const Root = defineComponent({
  name: 'PrimitiveRoot',
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false,
    },
    as: {
      type: [String, Object] as PropType<PrimitiveProps['as']>,
      default: 'div',
    },
  },
  setup (props, { attrs, slots }) {
    const asTag = props.asChild ? 'template' : props.as;

    if (isString(asTag) && SELF_CLOSING_TAGS.includes(asTag)) {
      return () => h(asTag, attrs);
    }

    if (asTag !== 'template') {
      return () => h(props.as, attrs, {
        default: slots['default']
      });
    }

    return () => h(Slot, attrs, {
      default: slots['default']
    });
  }
});
