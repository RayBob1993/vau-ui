<script setup lang="ts">
  import type { IVBadgeProps, IVBadgeSlots } from './types';
  import { useBadge } from './composables';
  import { computed } from 'vue';

  const props = defineProps<IVBadgeProps>();

  const slots = defineSlots<IVBadgeSlots>();

  const { content } = useBadge({
    props
  });

  const isVisibleContent = computed<boolean>(() => {
    return !props.hidden && Boolean(content.value || props.dot || slots?.content);
  });
</script>

<template>
  <div
    class="v-badge"
    :class="{
      'v-badge--dot': dot,
      'v-badge--fixed': slots?.default,
      [`v-badge--size-${size}`]: size,
      [`v-badge--theme-${theme}`]: theme
    }"
  >
    <slot/>

    <sup
      v-if="isVisibleContent"
      class="v-badge__content"
    >
      <slot
        name="content"
        :value="content"
      >
        {{ content }}
      </slot>
    </sup>
  </div>
</template>
