<script setup lang="ts">
  import type { IVAffixProps } from './types';
  import { AFFIX_OFFSET_BOTTOM, AFFIX_OFFSET_TOP } from './constants';
  import { useAffix } from './composables';
  import { useTemplateRef } from 'vue';

  const props = withDefaults(defineProps<IVAffixProps>(), {
    offsetTop: AFFIX_OFFSET_TOP,
    offsetBottom: AFFIX_OFFSET_BOTTOM,
    disabled: false
  });

  const root = useTemplateRef<HTMLDivElement>('root');
  const content = useTemplateRef<HTMLDivElement>('content');

  useAffix({
    props,
    root,
    content
  });
</script>

<template>
  <div
    ref="root"
    class="v-affix"
  >
    <div
      ref="content"
      class="v-affix__content"
    >
      <slot/>
    </div>
  </div>
</template>
