import type { IVAffixProps } from '../types';
import { AFFIX_OFFSET_BOTTOM, AFFIX_OFFSET_TOP } from '../constants';
import { Affix } from '../Affix';
import { onBeforeUnmount, onMounted, shallowRef, type TemplateRef, toRef, watch } from 'vue';
import { isNumber } from '@vau/core';

export interface IUseAffixOptions {
  props: IVAffixProps;
  root: TemplateRef<HTMLDivElement>;
  content: TemplateRef<HTMLDivElement>;
}

export function useAffix (options: IUseAffixOptions) {
  const container = shallowRef<HTMLElement>();
  const stickySidebar = shallowRef<Affix>();

  const offsetTop = toRef(() => isNumber(options.props.offsetTop) ? options.props.offsetTop : AFFIX_OFFSET_TOP);
  const offsetBottom = toRef(() => isNumber(options.props.offsetBottom) ? options.props.offsetBottom : AFFIX_OFFSET_BOTTOM);

  function setContainer () {
    if (options.props.container) {
      container.value = document.querySelector<HTMLElement>(options.props.container) ?? undefined;
    } else {
      container.value = options.root.value?.parentElement ?? undefined;
    }
  }

  function initAffix () {
    setContainer();

    if (options.root.value && container.value && options.content.value) {
      stickySidebar.value = new Affix(options.root.value, {
        offsetTop: offsetTop.value,
        offsetBottom: offsetBottom.value,
        container: container.value,
        innerWrapper: options.content.value
      });
    }
  }

  function destroyAffix () {
    stickySidebar.value?.destroy();
    stickySidebar.value = undefined;
  }

  onMounted(() => {
    if (options.props.disabled) {
      return;
    }

    initAffix();
  });

  onBeforeUnmount(() => {
    destroyAffix();
  });

  watch(() => options.props.disabled, value => {
    if (value) {
      destroyAffix();
    } else {
      initAffix();
    }
  });

  return {

  };
}
