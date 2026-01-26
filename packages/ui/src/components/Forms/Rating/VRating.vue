<script setup lang="ts">
  import type { IVRatingProps, IVRatingSlots, IVRatingModelValue } from './types';

  withDefaults(defineProps<IVRatingProps>(), {
    stars: 5,
    step: 1
  });

  defineSlots<IVRatingSlots>();

  const modelValue = defineModel<IVRatingModelValue>({
    required: true
  });
</script>

<template>
  <div
    class="v-rating"
    :class="{
      'v-rating--disabled': disabled,
      'v-rating--readonly': readonly
    }"
  >
    <div
      v-for="option in stars"
      :key="`option-${option}`"
      class="v-rating__option"
      :class="{
        'v-rating__option--active': modelValue <= option
      }"
    >
      {{ option }}

      <slot name="onIcon">
        Да
      </slot>

      <slot name="offIcon">
        Нет
      </slot>
    </div>
  </div>
</template>
