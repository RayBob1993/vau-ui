<script setup lang="ts">
  import type { IVAlertProps, IVAlertSlots } from './types';
  import { computed } from 'vue';

  const props = defineProps<IVAlertProps>();
  const slots = defineSlots<IVAlertSlots>();

  const isTitleVisible = computed<boolean>(() => Boolean(props.title) || Boolean(slots?.title));
  const isDescriptionVisible = computed<boolean>(() => Boolean(props.description) || Boolean(slots?.description));
</script>

<template>
  <div
    class="v-alert"
    :class="{
      [`v-alert--size-${size}`]: size,
      [`v-alert--theme-${theme}`]: theme
    }"
  >
    <div class="v-alert__content">
      <slot v-if="slots?.default"/>

      <template v-else>
        <div
          v-if="isTitleVisible"
          class="v-alert__title"
        >
          <slot name="title">
            {{ title }}
          </slot>
        </div>

        <div
          v-if="isDescriptionVisible"
          class="v-alert__description"
        >
          <slot name="description">
            {{ description }}
          </slot>
        </div>
      </template>
    </div>
  </div>
</template>
