import type { IconRenderFn } from './types';
import { defineComponent, type PropType } from 'vue';

/**
 * Внутренний хелпер: вызывает render-функцию из реестра иконок ConfigProvider.
 */
export const IconRender = defineComponent({
  name: 'IconRender',
  props: {
    render: {
      type: Function as PropType<IconRenderFn>,
      required: true
    }
  },
  setup (props) {
    return () => props.render();
  }
});
